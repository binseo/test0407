$(document).ready(function(){
    
    // 문서가 로딩되고 단 1번 실행
    let device_status //현재 디바이스가 pc모드인지 mobile모드인지 저장
    let win_w //브라우저 넓이

    device_chk() //함수의 실행
    $(window).resize(function(){
        device_chk() //함수의 실행
    })

    function device_chk(){ //함수의 실행
        win_w = $(window).width()
        console.log(win_w)
        if(win_w > 1024){
            device_status = "pc"
        }else{
            device_status = "mobile"
        }
        console.log(device_status)
    }


    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == "pc"){ //pc일 때만 실행
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    /* 메뉴는 오버를 감지하는 영역보다 out을 잡아주는 영역이 커야함 */
    $('header .gnb').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
    $('header .tnb .search').on('focusin', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    }) // --> focusin 은 = Tab 접근성 때문에 Tab을 누르면 tnb까지가면 header의 menu_over/(li)over가 오버 아웃(삭제)




    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == "mobile"){
            e.preventDefault() /* a 태그의 href를 작동 시키지 않음 */
            // console.log('누름!!!')

            let depth1_open = $(this).parents('li').hasClass('open')
            // console.log(depth1_open)
            if(depth1_open == true){ //열려있을 때
                $(this).parents('li').removeClass('open')
            }else{ //닫혔을 때
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).parents('li').addClass('open')
            }
        }
        
    })

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })


}) //$(document).ready