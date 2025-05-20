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



}) //$(document).ready