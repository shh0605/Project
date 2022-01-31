$(function(){

    // 로딩페이지
    $(".loading_wrap").delay(2000).fadeOut();
    $(".introbox > div").delay(1800).css("display", "block");


    // 슬라이드 메뉴 스크립트
    $("#slide_menu_bg").click(function () {
        $(this).css("display", "none");
        $("#slide_menu").css("right", "-100%");
    });
    $(".menu_btn i").click(function () {
        $("#slide_menu_bg").css("display", "block");
        $("#slide_menu").css("right", "0");
    });


    // 표지 텍스트 효과
    var app = document.getElementById('main_text');
    var $r1_text = $("#main_text").text();

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString($r1_text).pauseFor(2500).deleteAll().start();


    // about섹션 scroll 시 fadein
    var barThis = $(".about_wrap").offset();
});