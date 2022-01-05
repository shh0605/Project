$(function(){

    // *----- 함수정의 -----*

    function setting(){
        var wd = $(window).width();
        // if(wd > 768){
            // height값 window창 사이즈로 변경 함수
            function HeightResize(){
                var ht = $(window).height();
                // console.log(ht);
            
                $('.bodywrap>.mySwiper').height('100vh');
                $('.bodywrap .section-wrap').height(ht);
                $('.bodywrap section').parent().height(ht);
                $('.section1-slide .img-wrap a').height(ht);
                $('section>div').height(ht);
                // $('#main_footer').height('506px');
            }
            // 0.1초 지나고 창크기 변경 함수
            // function setTime(){
            //     setTimeout(function(){
            //         HeightResize();
            //     },100);
            // }
    
            // *----- 함수호출 -----*
            HeightResize();
            // setTime();
    
            // 창 리사이즈시
            $(window).on('resize',function(){
                HeightResize();
                // setTime();
            });
            // 스크롤시
            $(window).on('scroll',function(){
                HeightResize();
                // setTime();
                // MainSlideCount();
            });
    
        // }if(wd <= 768){
            // function MoResize(){
            //     $('.bodywrap>.mySwiper').removeAttr('style');
            //     $('.bodywrap .section-wrap').removeAttr('style');
            // }
            // MoResize();

            // $('.bodywrap>.mySwiper').off('wheel',handleEvent(e));
            // $('.bodywrap>.mySwiper').on('wheel', function(e){
            //     console.log('whell');
            //     // event.preventDefault();
            //     return false
            //     // $('.bodywrap>.mySwiper').off('wheel',handleEvent(e))
            // });



            // setTime();

            // // 0.1초 지나고 창크기 변경 함수
            // function setTime(){
            //     setTimeout(function(){
            //         MoResize();
            //     },100);
            // }

            // $(window).on('resize',function(){
            //     MoResize();
            //     setTime()
            // });
            // $(window).on('scroll',function(){
            //     MoResize();
            //     setTime()
            // });
        // }
    }
    setting();

    $(window).on('resize',function(){
        setting();
    });
    
    var secWrap = $('.mySwiper.first>.section-wrap');
    var total= secWrap.children().length;
    $('.main-scroll-wrap span.total').html('0' + total);
     


    // MENU STORY
    $('.menu-story .tab-menu li').click(function(){
        var tabIndex = $(this).index();
        // console.log(tabIndex);
        $(this).addClass('active').siblings().removeClass('active');

        $('.menu-story .tab-content>div').eq(tabIndex).addClass('active').siblings().removeClass('active');
    });

    // 이전,다음버튼 클릭할때마다 메뉴이름 변경
    $('.menu-story .btn-wrap>.swiper-btn').click(function(){
        txtChange();
    });
    // 메뉴이름 바꾸기 함수
    function txtChange(){
        $('.menu-story .tab-content').each(function(){
            $('.tab-imgbox').each(function(){
                var actvImg = $(this).find('.swiper-slide-active');
                var imgIdx = actvImg.find('img').attr('alt');
                // console.log(imgIdx);

                var txtName = $(this).parent().children('.btn-wrap').find('.txt');
                txtName.html(imgIdx);
            });
        });
    }  
    txtChange();


    // FRANCHISE
    // var aniboxWidth = $('.franchise .aniwrap .itembox').width();
    // console.log(aniboxWidth);
    // var itembox = $('.franchise .aniwrap .itembox');
    // var win_width = $(window).width();
    // aniboxWidth == 170vw + 200px + win_width
    // var  intwd = parseInt(win_width) + 'px'
    // aniboxWidth = itembox.width(intwd);
    // console.log(aniboxWidth);

    $('.franchise .gobtn>button').mouseover(function(){
        $(this).find('span.hover').css({
            'left': '0'
        });
        $(this).find('a').css({
            'color': '#fff'
        });
    });
    $('.franchise .gobtn>button').mouseout(function(){
        $(this).find('span.hover').css({
            'left': '-240px'
        });
        $(this).find('a').css({
            'color': '#333'
        });
    });


    // NEWS & NOTICE
    $('.news_notice .con-left>.navi>a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.news_notice .con-left>.navi>a.news').click(function(){
        $('.news_notice .con-right>div').css({
            'transform': 'translateX(0)'
        });
    });
    $('.news_notice .con-left>.navi>a.notice').click(function(){
        $('.news_notice .con-right>div').css({
            'transform': 'translateX(-100%)'
        });
    });
    
});
