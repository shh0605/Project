$(function(){

  // 상품 개수 받아오기
  $('.content').each(function(index, item){
    var num = $(this).find('ul>li').length;
    // console.log(num);
    // var pdNum = $('.content.active .pd-num');
    var pdNum = $(this).find(".pd-num");
    pdNum.text(num);

  });



  // 탭메뉴 클릭이벤트
    $('.tab_manu>ul>li').click(function(){
        var tabIndex =$(this).index();
        // console.log(tabIndex);

        $('.bodywrap .content').eq(tabIndex).addClass('active').siblings().removeClass('active');

        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // 하트 클릭
    $('.product .wish>a').click(function(){
        // $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).removeClass('on');
            $(this).addClass('on');
        }
    });

    // 상세페이지 이동
    $('.product>.pd_info p:first-child').click(function(){
      location.href = 'detail.html'
    });
    $('.product>.pd_img>a').click(function(){
      location.href = 'detail.html'
    });

});



$(window).on('load',function(){

  // 모바일용 탭메뉴 드래그-슬라이드 
  var x,left,down;
  var Tx, Tleft, Tdown;

  // ** 마우스 **
  $(".tab_manu").mousedown(function(e){   // 마우스 클릭중인 상태
    e.preventDefault();   // a링크 넘어가는거 막기
    down = true;  // 클릭중일때 down을 true로 바꿈
    x = e.pageX;  // 클릭한 X축 좌표
    left = $(this).scrollLeft();  // 좌우 스크롤 위치
  });

  $("body").mousemove(function(e){  //  마우스 움직이는지 확인
    if(down){   // 탭메뉴 클릭하여 down변수가 true로 바뀌면
      var newX = e.pageX; // 움직인 X축 좌표
      $(".tab_manu").scrollLeft(left - newX + x); // (스크롤 위치 - 움식인좌표 + 클릭한 좌표)를 스크롤 위치에 넣기
    }
  });

  $("body").mouseup(function(e){down = false;});  // 마우스 클릭이 중단되면 down변수를 false로 바꿈
  

  // ** 터치 이벤트 **
  $(".tab_manu").on('touchstart', function(e){   // 손가락이 닿은 상태
    // e.preventDefault();   // a링크 넘어가는거 막기
    Tdown = true;
    Tx = e.touches[0].pageX;  // 터치한 X축 좌표
    // Tx = e.pageX;
    Tleft = $(".tab_manu").scrollLeft();
  });

  $("body").on('touchmove', function(e){  //  손가락이 움직이는지 확인
    if(Tdown){
      // var newTX = e.pageX;
      // left = $(this).scrollLeft();
      var newTX = e.touches[0].pageX;
      $(".tab_manu").scrollLeft(Tleft - newTX + Tx);
    }
  });

  $("body").on('touchend', function(e){
    Tdown = false;
  });



  // 상품 더보기 호출
  pdMore('.content','10');
  $('.btn-more-wrap button').on('click',function(){
    pdMore('.content','10','.btn-more-wrap');
  });
});

// 상품 더보기
function pdMore(id, cnt, btn){
  var pd_list = id +' .pd_list_wrap>li:not(.show)';
  // console.log(pd_list);
  var pd_length = $(pd_list).length;
  var pd_total_cnt;

  if(cnt < pd_length){
    pd_total_cnt = cnt;
  }else{
    pd_total_cnt = pd_length;
    $('.btn-more-wrap').hide();
  }
  $(pd_list + ':lt(' + pd_total_cnt +')').addClass('show')
}