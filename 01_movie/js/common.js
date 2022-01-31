$(document).ready(function(){
    $('.btnMenu').on('click',function(){
        // 햄버거 버튼이 사라짐(fade효과)
        $('.btnMenu').fadeOut();

        // nav태그에 클래스 추가
        $('nav').addClass('on');

        // section태그에 클래스 추가
        $('section').addClass('on');
    });

    $('nav li').on('click',function(){
        // 햄버거버튼이 나타남(fade효과)
        $('.btnMenu').fadeIn();

        // nav태그에 클래스 제거
        $('nav').removeClass('on');

        // section태그에 클래스 제거
        $('section').removeClass('on');

        // 해당 li의 인덱스와 일치하는 article에 클래스 추가(변수이름 : i)
        var i = $(this).index();
        console.log(i);
        $('article').removeClass('on');
        $('article').eq(i).addClass('on');
    });

    $('nav>.close, section').on('click',function(){
        $('.btnMenu').fadeIn();
        $('nav').removeClass('on');
        $('section').removeClass('on');
    });
});