$(document).ready(function(){


    /************************************* header 메뉴 : 시작 ***********************************/

    let device_status // 모바일인지 pc인지
    let scrolling // 스크롤한 값
    let window_w //브라우저 넓이
    let mobile_size = 1024 //모바일로 전환 되는 사이즈


    scroll_chk()
    resize_chk()
    $(window).resize(function(){ //브라우저가 리사이즈 될 때마다 1번씩 실행
        resize_chk()
    })

    $(window).scroll(function(){ // 브라우저를 스크롤 할 때마다 1번씩 실행
        scroll_chk()
    })

    function scroll_chk() {
        scrolling = $(window).scrollTop()
        // console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    function resize_chk(){
        window_w = $(window).width()
        // console.log(window_w)
        if(window_w > mobile_size){ //1025일 때
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        // console.log(device_status)
    }

    /* header에 마우스를 오버했을 때 -- 
        header .gnb .gnb_wrap ul.depth1 > li
        1. header에 menu_over 클래스 추가
        2. 오버한 1차메뉴 li에 over 클래스 추가
        
        header 밖에 나가면 메뉴 사라지게...*/
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })

    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        }
    })

    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
        if(device_status == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        }
    })


    /* 
        모바일에서만 
        메뉴 열기 버튼을 클릭하면 header에 menu_open 클래스 추가
            header .gnb .gnb_open
        메뉴 닫기 버튼을 클릭하면 header에 menu_open 클래스 삭제
            header .gnb .gnb_close
    */

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })


    /* 
        모바일에서만
        1차 메뉴를 클릭하면
        1. 링크로 이동하는 걸 막아야 함 - 반드시 href가 있는 a를 클릭한 것으로 해야함
        2. 1차 메뉴 li에 open 클래스 추가
            --> 이미 열려있는 메뉴를 클릭하면 (open클래스가 있으면 열린거) / 클릭한 메뉴를 닫고 끝남
            --> 열려있지 않는 메뉴를 클릭하면 이전에 열려있던 메뉴를 닫고 지금 클릭한 메뉴가 열림
    */

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault() /* a 태그의 href를 작동 시키지 않음 */
            let depth1_open = $(this).parents('li').hasClass('open')
            if(depth1_open == true){ //메뉴가 열렸을 때
                $(this).parents('li').removeClass('open')
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).parents('li').addClass('open')
            }
            
        }
        
    })

    /************************************ header 와 메뉴 : 종료 ************************************/




    /************************************* webzine 시작 ***********************************/

    const webzine_swiper = new Swiper('.webzine .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: { 
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
    });


    /************************************* webzine 종료 ***********************************/



})