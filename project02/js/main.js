$(function(){

    // *----- 함수정의 -----*

    // height값 window창 사이즈로 변경 함수
    function HeightResize(){
        var ht = $(window).height();
    
        $('.bodywrap>.mySwiper').height('100vh');
        $('.bodywrap .section-wrap').height(ht);
        $('.bodywrap section').parent().height(ht);
        $('.section1-slide .img-wrap a').height(ht);
        $('section>div').height(ht);
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


    // BRAND SUPPORT
    $(window).resize(function(){
        setTimeout(function(){
            brandBtn();
        },100);
    });
    // btn-wrap의 top값 수정
    function brandBtn(){
        var wd = $(window).width();
        if(wd <= 768){
            var brand_img = $('.brand .content .con-box>.con_left>img');
            var imgHt = brand_img.height();
            // console.log(imgHt);
            var dd = imgHt - 50;
            // console.log(dd);
    
            $('.brand .btn-wrap').css({
                'top': dd
            });
        }if(wd > 768){
            $('.brand .content .con-box>.con_left>img').removeAttr("style");
        }
    }
    brandBtn();
    

    
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



    // var Tx, Tleft, Tdown;

    // // ** 터치 이벤트 **
    // $(".bodywrap").on('touchstart', function(e){   // 손가락이 닿은 상태
    //     // e.preventDefault();   // a링크 넘어가는거 막기
    //     Tdown = true;
    //     // Tx = e.touches[0].pageX;  // 터치한 X축 좌표
    //     Tx = e.touches[0].pageY;  // 터치한 X축 좌표
    //     // Tleft = $(".tab_manu").scrollLeft();
    //     Tleft = $(".bodywrap").scrollTop();
    // });

    // $("body").on('touchmove', function(e){  //  손가락이 움직이는지 확인
    //     if(Tdown){
    //     // var newTX = e.pageX;
    //     // left = $(this).scrollLeft();
    //     // var newTX = e.touches[0].pageX;
    //     var newTX = e.touches[0].pageY;
    //     // $(".tab_manu").scrollLeft(Tleft - newTX + Tx);
    //     $(".bodywrap").scrollTop(Tleft - newTX + Tx);
    //     }
    // });

    // $("body").on('touchend', function(e){
    //     Tdown = false;
    // });

    // if($('.mySwiper').scrollTop()){
    //     $('header').addClass('active');
    // }else{
    //     $('header').removeClass('active');
    // }
    // console.log( $('.section-wrap').scrollTop() )
    
});

$(window).on('load',function(){
    function isMobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

    if(isMobile() == true){
        $(window).resize(function(){
            moDevice_touchSlide()
        });

        function moDevice_touchSlide(){
            function HT768(){
                var Tx, Tleft, Tdown;
    
                // ** 터치 이벤트 **
                $(".mySwiper").on('touchstart', function(e){   // 손가락이 닿은 상태
                    Tdown = true;
                    Tx = e.touches[0].pageY;  // 터치한 Y축 좌표
                    Tleft = $(".mySwiper").scrollTop();
                    console.log('touchstart');
                });
            
                $("body").on('touchmove', function(e){  //  손가락이 움직이는지 확인
                    if(Tdown){
                    var newTX = e.touches[0].pageY;
                    $(".mySwiper").scrollTop(Tleft - newTX + Tx);
                    console.log($(".mySwiper").scrollTop());
            
                    if($('.mySwiper').scrollTop()){
                        $('header').addClass('active');
                    }else{
                        $('header').removeClass('active');
                    }
                    
                    }
                });
            
                $("body").on('touchend', function(e){
                    Tdown = false;
                });
            }

            if( $(window).width() <= 768 ){
                HT768();
            }else{
                function HT768(){ return false;}
            }
        }
        moDevice_touchSlide();
    }
    
    
});

