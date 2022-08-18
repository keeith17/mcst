(($)=>{
    class Mcst {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.footer();
        }
        header(){
            $('.main-btn').on({
                mouseenter: function(){
                    $('.sub').hide();
                    $(this).next().show();
                }
            });
            $('.main-sub').on({
                mouseleave: function(){
                    $('.sub').hide();
                }
            })
        }
        section1(){
            //메인슬라이드 함수
            let cnt=0;
            let cnt2=0;
            let setId = 0;
            let setId2 = 0;
            let winW = $(window).width();
            function mainSlide(){
                $('#section1 .slide-wrap').stop().animate({left:-winW*cnt}, 1800, function(){
                    cnt>2?cnt=0:cnt;
                    cnt<0?cnt=2:cnt;
                    $('#section1 .slide-wrap').stop().animate({left:-winW*cnt},0);
                })
                $('.section1-btn').removeClass('on');
                $('.section1-btn').eq(cnt<3?cnt:0).addClass('on');
            }

            //다음카운트 함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            //이전카운트 함수
            function prevCount(){
                cnt--;
                mainSlide();
            }

            //자동타이머 함수
            function autoTimer(){
                setId = setInterval(nextCount, 6000);
            }
            autoTimer();

            $('.section1-btn').each(function(idx){  //page-btn의 각각은 idx를 가지고 있음
                $(this).click(function(e){ //'이' page-btn을 클릭할 때면 기능을 수행하는데
                    e.preventDefault();
                    clearInterval(setId);  //1 인터벌 제거
                    clearInterval(setId2);
                    cnt=idx                 //2 idx로 cnt를 세팅
                    mainSlide();         //3 메인 슬라이드 실행
                    pause();
                });
            });

            $('#section1 .go').stop().click(function(){
                    clearInterval(setId);
                    nextCount();
                    autoTimer();
                    pause();
                }
            );
            $('#section1 .back').stop().click(function(){
                    clearInterval(setId);
                    prevCount();
                    autoTimer();
                    pause();
                }
            );

            $('#section1 .wrap1').stop().click(function(){ //재생표시
                clearInterval(setId);
                clearInterval(setId2);
                nextCount();
                autoTimer();
                play();
                }
            );

            $('#section1 .wrap2').stop().click(function(){ //정지표시
                clearInterval(setId);
                clearInterval(setId2);
                autoTimer();
                pause();
                }
            );



            function pause(){
                clearInterval(setId);
                clearInterval(setId2);
                $('#section1 .wrap1').css("display","block");
                $('#section1 .wrap2').css("display","none");
                cnt2=0;
                setId2 = setInterval(function(){
                    cnt2++;
                    console.log(cnt2);
                    if(cnt2>8){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextCount();
                        autoTimer();
                        play();
                    }
                },1000);        
            }

            function play(){
                $('#section1 .wrap1').css("display","none");
                $('#section1 .wrap2').css("display","block");
                clearInterval(setId2);
            }

        }
        section2(){
            $('.noitice-btn').on({
                click: function(e){
                    e.preventDefault();
                    $(this).addClass('on');
                    $('.hire-btn').removeClass('on');
                    $('.ipchal-btn').removeClass('on');

                    $('.notice-box').show();
                    $('.hire-box').hide();
                    $('.ipchal-box').hide();
                }
            });
            $('.hire-btn').on({
                click: function(e){
                    e.preventDefault();
                    $(this).addClass('on');
                    $('.noitice-btn').removeClass('on');
                    $('.ipchal-btn').removeClass('on');

                    $('.notice-box').hide();
                    $('.hire-box').show();
                    $('.ipchal-box').hide();
                }
            });
            $('.ipchal-btn').on({
                click: function(e){
                    e.preventDefault();
                    $(this).addClass('on');
                    $('.noitice-btn').removeClass('on');
                    $('.hire-btn').removeClass('on');

                    $('.notice-box').hide();
                    $('.hire-box').hide();
                    $('.ipchal-box').show();
                }
            });

            $('.bodo-btn').on({
                click: function(e){
                    e.preventDefault();
                    $(this).addClass('on');
                    $('.explain-btn').removeClass('on');

                    $('.bodo-box').show();
                    $('.explain-box').hide();
                }
            });

            $('.explain-btn').on({
                click: function(e){
                    e.preventDefault();
                    $(this).addClass('on');
                    $('.bodo-btn').removeClass('on');

                    $('.bodo-box').hide();
                    $('.explain-box').show();
                }
            });

        }
        section3(){
            //left
            $('.photo-btn').on({
                click: function(e){
                    e.preventDefault();
                    $(this).addClass('on');
                    $('.video-btn').removeClass('on');

                    $('.photo-box').show();
                    $('.video-box').hide();
                }
            });
            $('.video-btn').on({
                click: function(e){
                    e.preventDefault();
                    $(this).addClass('on');
                    $('.photo-btn').removeClass('on');

                    $('.photo-box').hide();
                    $('.video-box').show();
                }
            });



            //right
            let cnt=0;
            let cnt2=0;
            let setId = 0;
            let setId2 = 0;

            // 메인슬라이드
            function mainSlide(){
                $('#section3 .slide').css({zIndex:1, opacity:0});
                $('#section3 .slide').eq(cnt).css({zIndex:2, opacity:1});
                $("#section3 .num").text(`${cnt+1}`);
            }

            // 다음카운트
            function nextCount(){
                cnt++;
                cnt>3?cnt=0:cnt;
                mainSlide();
            }
            function prevCount(){
                cnt--;
                cnt<0?cnt=3:cnt;
                mainSlide();
            }

            // 자동타이머
            function autoTimer() {
                setId = setInterval(nextCount,4000);
            }
            autoTimer();

            //버튼들
            $('#section3 .stop-btn').on({
                click: function(e){
                    e.preventDefault();
                    clearInterval(setId);
                    pause();
                }
            });

            $('#section3 .go-btn').on({
                click: function(e){
                    e.preventDefault();
                    nextCount();
                    autoTimer();
                    play();
                }
            });

            $('#section3 .next-btn').on({
                click: function(e){
                    e.preventDefault();
                    nextCount();
                    pause();
                }
            });
            $('#section3 .prev-btn').on({
                click: function(e){
                    e.preventDefault();
                    prevCount();
                    pause();
                }
            });

            function pause(){
                clearInterval(setId);
                clearInterval(setId2);
                $('#section3 .go-btn').show();
                $('#section3 .stop-btn').hide();

                cnt2=0;
                setId2 = setInterval(function(){
                    cnt2++;
                    console.log(cnt2);
                    if(cnt2>8){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextCount();
                        autoTimer();
                        play();
                    }
                },1000);        
            }
            
            function play(){
                $('#section3 .go-btn').hide();
                $('#section3 .stop-btn').show();
                clearInterval(setId2);
            }
        }
        section4(){

        }
        section5(){
            let cnt = 0;
            function bottomSlide(){
                if(0<cnt<8){
                    $('#section5 .slide-wrap').stop().animate({left:-190*cnt}, 1000);
                }
            }
            function rightClick(){
                $(this).removeClass('on');
                $('.left-btn').removeClass('on');
                cnt++;
                console.log(cnt);
                bottomSlide();    
            }
            function leftClick(){
                $(this).removeClass('on');
                $('.right-btn').removeClass('on');
                cnt--;
                console.log(cnt);
                bottomSlide();    
            }
            $('.right-btn').on({
                click: function(e){
                    e.preventDefault();
                    if(cnt>6){
                        $(this).addClass('on');
                    }
                    else if(cnt===6){
                        $(this).addClass('on');
                        rightClick();
                    }
                    else {
                        rightClick();
                    }
                }
            });
            $('.left-btn').on({
                click: function(e){
                    e.preventDefault();
                    if(cnt<1){
                        $(this).addClass('on');
                    }
                    else if(cnt===1){
                        $(this).addClass('on');
                        leftClick();
                    }
                    else{
                        leftClick();
                    }
                }
            });

        }
        footer(){
        }
    }
    const mcst = new Mcst();
    mcst.init();
})(jQuery);