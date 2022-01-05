$(function(){

  // 탭메뉴 클릭이벤트
    $('.tab_manu>ul>li').click(function(){
        var tabIndex =$(this).index();
        // console.log(tabIndex);

        $('.bodywrap .content').eq(tabIndex).addClass('active').siblings().removeClass('active');

        $(this).addClass('active').siblings().removeClass('active');
    });

    // 영업시간 더보기
    $('.store_list .txt-left .maintxt').click(function(){
        $(this).parent().find('.subtxt').stop().slideToggle();
        $(this).toggleClass('active');
    });

    // 자세히보기(모바일용)
    $('.MO-more-btn>u').click(function(){
        $(this).parent().parent().find('.MO-more-content').stop().slideToggle();

        if($(this).hasClass('on')){
            $(this).removeClass('on').html("자세히보기")
        }else{
            $(this).addClass('on').html("닫기")
        }
    });
});



$(window).on('load',function(){

  // 모바일용 탭메뉴 마우스 드래그-슬라이드 
  var x,left,down;

  $(".tab_manu").mousedown(function(e){
    e.preventDefault();
    down = true;
    x = e.pageX;
    left = $(this).scrollLeft();
  });

  $("body").mousemove(function(e){
    if(down){
      var newX = e.pageX;
      $(".tab_manu").scrollLeft(left - newX + x);
    }
  });

  $("body").mouseup(function(e){down = false;});

  
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
});