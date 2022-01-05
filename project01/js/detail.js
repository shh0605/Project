$(function(){

  // 컬러선택
  $('.detail-info .color-imgbox').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

  // 상세하단메뉴
  $('.menu-box>p').click(function(){
    $(this).parent().find('ul').stop().slideToggle().parent().toggleClass('active');
  });
});