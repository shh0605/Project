$(function(){
    // 메인페이지 메뉴
    $('header>nav.gnb').mouseover(function(){
        $('header').addClass('on');
        $('header>nav.gnb .submenu, header>.blank').stop().slideDown();
    });
    
    $('header>nav.gnb').mouseout(function(){
        $('header').removeClass('on');
        $('header>nav.gnb .submenu, header>.blank').stop().slideUp();
    });


    // 메뉴li 길이가 서브 width값이랑 안맞음 수정
    $('header>nav.gnb>ul').each(function(){
        var main_li = $(this).children('li');
        var length = main_li.length;

        for(i = 0; i < length; i++){
            if(main_li.eq(i).width() < main_li.eq(i).children('.submenu').width()){
                main_li.eq(i).width(main_li.eq(i).children('.submenu').width());
            }
        }
    });

    // 전체메뉴(모바일메뉴)
    $('header>.MO_menu_btn>a').click(function(){
        $('header>.MO_menu_wrap').css({
            'left': '0',
            'opacity': '1'
        });
        $('.MO_gnb>ul>li').css({
            'padding-left': '0px',
            'opacity': '1'
        });
    });
    $('.MO_menu_wrap .close>a').click(function(){
        $('header>.MO_menu_wrap').css({
            'left': '100%',
            'opacity': '0'
        });
        $('.MO_gnb>ul>li').removeClass('active').children('a').css('color','#fff');
    });

    $('.MO_gnb>ul>li>a').mouseover(function(){
        $(this).parents('li').addClass('active').siblings().removeClass('active');
        $(this).css('color','#fff').parents('li').siblings().children('a').css('color','#777');
    });

    // 스크롤시 헤더 검정+블러(모바일전용)
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });

});