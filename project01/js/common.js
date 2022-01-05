$(document).ready(function(){
    // $('header ul.menu_list>li').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    // 모바일용메뉴
    $('.MO_menu_btn>a').click(function(){
        $('.MO_menu_bg').addClass('on');
        $('header>.MO_menu_wrap>.MO_menu').css({
            'right': '0'
        });
    });
    
    $('.MO_menu>.close').click(function(){
        $('.MO_menu_bg').removeClass('on');
        $('header>.MO_menu_wrap>.MO_menu').css({
            'right': '-320px'
        });
    });

    // 모바일용 푸터
    function responsive(){
        var Win_width = $(window).width();
        // console.log(Win_width);

        if(Win_width<=768){
            
            $('footer .MO_box').click(function(){
                $(this).find('ul').stop().slideToggle();
        
                var box_Idx = $(this).index();
                // console.log(box_Idx);
        
                if($(this).hasClass('on')){
                    $(this).removeClass('on').find('span').html("+");
                }else{
                    $(this).removeClass('on');
                    $(this).addClass('on').find('span').html("-");
                }
            });
        }
    }
    $(function(){
        responsive();

        $(window).resize(function(){
            responsive();
        }).stop();
    });
});