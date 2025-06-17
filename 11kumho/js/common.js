/* header, footer 공통요소에 들어가는 javascript/jquery */

/* ************************************** header : 시작 ************************************ */
/*

    pc버전, 모바일 버전 구분
    스크롤된 값 계산

    스크롤을 내리면 header에 fixed 클래스 추가
    메뉴에 마우스를 올리면 header에 menu_over 클래스 추가
    메뉴를 오버한 li에 over 클래스 추가

    스크롤을 내릴 때는 gnb_up 클래스 추가
    스크롤을 올릴 때는 gnb_up 클래스 삭제
    ===> 이전에 스크롤 값과 현재 스크롤 값을 비교해서
         현재 값이 더 크면 내려가는 중 ( 100 --> 200 )
         현재 값이 작으면 올라가는 중 ( 200 --> 100 )
 */


let device_status // pc인지 모바일 구분하는 값
let scrolling // 브라우저가 스크롤 된 값
let scroll_prev // 이전에 스크롤 된 값
let window_w // 브라우저의 넓이 값
let mobile_size = 1024 // 모바일로 변경되는 사이트
let menu_open // 모바일에서 사용할 메뉴가 열렸는지 여부

$(window).scroll(function(){ // 브라우저가 스크롤 될 때마다 1번 실행
    // console.log('브라우저가 스크롤 된다 된다!!!!!!!')
    scroll_chk()
})

$(window).resize(function(){ // 리사이즈 될 때마다 1번 실행
    // console.log('브라우저 크기 변한다!!!!!')
    resize_chk() // 함수 실행
})


$(document).ready(function(){ // 문서가 로딩되고 단 한번

    /*############# TOP버튼을 클릭하면 상단으로 스크롤 ##############*/
    $('footer .top').on('click', function(){
        // console.log('???????')
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })


    // console.log('로딩됨~~~~~~~~~~~~~~')
    resize_chk() // 함수 실행
    scroll_chk()

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            // console.log('오버!!!!')
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    /* ****************************** 모바일 메뉴 열고 닫기 **************************** */
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    /* ****************************** 모바일 2차 메뉴 열고 닫기 **************************
    * 지금 현재 메뉴가 열려있는 지 닫혀있는 지 구분 (li에 open 클래스 있는 지 유무)
    * 메뉴에 열려있으면 - li에 open 클래스를 삭제, 2차 메뉴 접기
    * 메뉴가 닫혀있으면 - li에 open 클래스를 추가, 2차 메뉴 열기
    * */

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        
        if(device_status == 'moblie'){
            e.preventDefault() /* a 태그의 href를 작동 시키지 않음 */
            // console.log('눌린다~~~~~~~~')
            menu_open = $(this).parents('li').hasClass('open')
            // console.log(menu_open)
            if(menu_open == true){ // 메뉴가 열려있으면
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{ // 메뉴가 닫혀있으면
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
                
            }
        }
        
    })



}) //$(document).ready(function()

// 함수의 선언 -> 이런 것이 있다를 알려주는 것?
function resize_chk(){
    window_w = $(window).width()
    // console.log(window_w)
    if(window_w > mobile_size){ // 1024 보다 크면 1025
        device_status = 'pc'
    }else{ // 같거나 작으면
        device_status = 'moblie'
    }
    // console.log(device_status)
}

function scroll_chk(){
    scroll_prev = scrolling // 스크롤 값을 다시 계산 하기 전에 이전 값을 prev에 저장
    scrolling = $(window).scrollTop()
    // console.log(scroll_prev, scrolling)
    if(scrolling > 0){ // 조금이라도 스크롤 되면
        $('header').addClass('fixed')
        if(scrolling > scroll_prev){
            // console.log('내려가는 중')
            $('header').addClass('gnb_up')
        }else{
            // console.log('올라가는 중')
            $('header').removeClass('gnb_up')
        }
    }else{ // 0 일 때
        $('header').removeClass('fixed')
    }
}


/* ************************************** header : 끝 ************************************ */