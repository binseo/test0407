$(document).ready(function(){

    let scrolling //브라우저가 스크롤 된 정도를 저장
    let win_w //브라우저 넓이
    let device_status //현재 브라우저가 pc 인지, mobile인지

    scroll_chk()
    $(window).scroll(function(){    
        scroll_chk()
    }) //$(window).scroll

    device_chk()
    $(window).resize(function(){
        device_chk()
    }) //$(window).resize
    
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        // console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }

    } //function scroll_chk

    function device_chk(){
        win_w = $(window).width()
        // console.log(win_w)
        if(win_w > 1024){ //1025 이상
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        // console.log(device_status)
    } //function device_chk

    /* 
        pc버전만 
        메뉴에 오버하면 
            >> header .gnb .gnb_wrap ul.depth1 > li
        1. header에 menu_over 클래스 추가
        2. 오버한 1차 메뉴 li에 over 클래스 추가
            >> header .gnb .gnb_wrap ul.depth1 > li
        header 밖에 사라지면 오버 해제
    */
   $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        //마우스를 오버했을 때만 실행 pc버전만
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
   }) // --> focusin 은 = Tab 접근성 때문에 Tab을 누르면 
    // ul.depth2 > li:last-child > a 까지가면 header의 menu_over/(li)over가 오버 아웃(삭제)



    /* 
        모바일에서만 
        메뉴 열기 버튼을 클릭하면 header에 menu_open 추가
            >>header .gnb .gnb_open
        메뉴 닫기 버튼을 클릭하면 header에 menu_open 삭제
            >>header .gnb .gnb_close
    */

   $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
   })

   $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            
            let depth1_open = $(this).parents('li').hasClass('open')

            if(depth1_open == true){ // 메뉴가 열렸을 때
                $(this).parents('li').removeClass('open') //혼자 누르고 닫고
            }else{ //메뉴가 닫혔을 때
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open') // 다른메뉴를 눌렀을 때 닫힘
                $(this).parents('li').addClass('open') // 원하는 메뉴를 누름
            }
        }
        
    })



})//$(document).ready