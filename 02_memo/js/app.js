$(function(){
    // 메모장 요소
    var sticky_html = '<div class="sticky"><nav class="top_nav"><a href="javascript:;" class="add"><i class="fas fa-plus"></i></a><a href="javascript:;" class="save"><i class="far fa-save"></i></a><div class="right"><a href="javascript:;" class="get"><i class="fas fa-list-ul"></i></a><a href="javascript:;" class="del"><i class="fas fa-times"></i></a></div></nav><textarea name="txt" id="txt" cols="30" rows="10"></textarea><nav class="side_nav"><a href="javascript:;" class="close"><i class="fas fa-times"></i></a><ol></ol></nav></div>';
    // <li><i class="far fa-trash-alt"></i></li>

    // 메모 객체
    var Sticky = {
        // 추가 메소드
        add : function(){
            var win_width = $('#sticky_wrap').width() - 250;
            var win_height = $('#sticky_wrap').height() - 300;
                     // 랜덤: 0~1 범위값을 사용
            var x = Math.random() * win_width;
            var y = Math.random() * win_height;
            console.log(win_width);
            console.log(win_height);
            console.log(x);
            console.log(y);

            $('#sticky_wrap').append(sticky_html);
            var $new_sticky = $('.sticky').last();

            $new_sticky.css({
                left : parseInt(x) + 'px',
                top : parseInt(y) + 'px'
            });

            $('.sticky').css('zIndex', '0');
            $new_sticky.css('zIndex', '99');
        },

        // 저장 메소드
        save : function(current_memo){
            var idx = localStorage.length;  //저장된 글수
            var txt = current_memo.val();    //작성중인 글

            // 작성된 글이 있으면
            if(txt != ''){
                var key = prompt('저장할 파일명?', '');
                localStorage.setItem(key, txt);     // 키에 데이터 쓰기
            }
        },


        // 가져오기 & 목록 삭제 메소드
        get : function list_storage(current_memo){
            var key;
            var l = localStorage.length;
            var del_icon = '<i class="far fa-trash-alt"></i>';

            current_memo.find('ol').empty();    // li 비우기 초기화
            current_memo.toggleClass('active');

            for(var i=0; i < l; i++){
                key = localStorage.key(i);
                current_memo.find('ol').append('<li>' + key + del_icon + '</li>');
            }

            // 목록 클릭했을 때 메모 읽어오기
            current_memo.find('li').click(function(){
                var getData = $(this).text();
                var txt = localStorage.getItem(getData);
                current_memo.toggleClass('active');
                current_memo.prev('#txt').val(txt);
            });

            // 목록 삭제 버튼
            current_memo.find('li>i').click(function(){
                var key = $(this).parent().text();
                var ok = confirm('해당 메모를 삭제할까요?');
                if(ok){
                    localStorage.removeItem(key);
                }
            });
        }

    };

    // 추가버튼
    $('#sticky_wrap').on('click','.add',function(){
        Sticky.add();
    });

    // 저장버튼
    $('#sticky_wrap').on('click', '.save', function(){
        var current_memo = $(this).parents().siblings('#txt');
        Sticky.save(current_memo);
    });
    
    // 목록 버튼
    $('#sticky_wrap').on('click', '.get' ,function(){
        var current_memo = $(this).parents('.top_nav').siblings('.side_nav');
        Sticky.get(current_memo);
        // 목록 닫기버튼
        $('.side_nav .close').click(function(){
            current_memo.removeClass('active');
        });
    });

    // 닫기버튼
    $('#sticky_wrap').on('click', '.del' ,function(){
        if( $('.sticky').length == 1){
            // console.log($('.sticky').length);
            alert('마지막 메모장 입니다.');
        }else{
            var current_memo = $(this).parents('.sticky').remove();
            console.log(current_memo);
        }
    });

    // 마우스 오버(클릭 드래그) 이벤트
    $('#sticky_wrap').on('mouseover', '.top_nav',function(){
        $(this).parent().draggable();
    });

    // 터치 : 터치된 요소가 맨 위로 올라옴.
    $('#sticky_wrap').on('touchstart mousedown','.sticky', function(){
        $('.sticky').css('zIndex', '0');
        $(this).css('zIndex', '99')
    });

    $('#sticky_wrap').on('touchmove', '.top_nav', function(e){
        var $sticky = $(this).parent();
        var event = e.originalEvent;    // 제이쿼리에서 기존 자바스크립트 이벤트를 받을때
        var touchobj = event.changedTouches[0];   // 터치 이벤트 객체

        // 현재 터치된 손가락 위치
        var x = parseInt(touchobj.clientX);
        var y = parseInt(touchobj.clientY);
        ex = x - 125;
        ey = y - 16;

        $sticky.css('left', ex + 'px');
        $sticky.css('top', ey + 'px');
    });

    // 메모장 초기화
    $('#sticky_wrap').append(sticky_html);
});