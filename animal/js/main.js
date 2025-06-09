$(document).ready(function(){

	/************************************ header 와 메뉴 : 시작 ************************************/

	/*
	* pc인지 모바일인지 구분 - 브라우저 넓이
	* 스크롤 값 계산
	* 공통사항 : 브라우저가 스크롤 되면 or header 오버하면 header fixed 클래스 추가	
	* px일 때 : 마우스를 오버한 li에만 over 클래스 추가
	* 모바일 때 : 메뉴 열기를 클릭하면 header에 menu_open 클래스 추가
				 1차 메뉴를 클릭하면 (하위메뉴가 있는 1차메뉴만) 클릭한 li에 open 클래스 추가
	*/

	let device_status // 모바일인지 pc인지
	let scrolling // 스크롤한 값
	let window_w // 브라우저 넓이
	let mobile_size = 1024 // 모바일로 전환 되는 사이즈 

	
	scroll_chk()
	resize_chk()
	$(window).resize(function(){
		resize_chk()
	})
	$(window).scroll(function(){ // 브라우저를 스크롤 할 때마다 1번씩 실행
		scroll_chk() // 함수 실행
	})

	
	function scroll_chk(){ // 함수 선언
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
		if(window_w > mobile_size){ // 1025
			device_status = 'pc'
		}else{
			device_status = 'mobile'
		}
		// console.log(device_status)
	}

	/* header에 마우스를 오버했을 때 -- 클릭했을 때도 작동함 */
	$('header').on('mouseenter focusin', function(){
		// console.log('오버오버')
		if(device_status == 'pc'){
			$('header').addClass('fixed')
		}
	})
	$('header').on('mouseleave focusout', function(){
		// console.log('오버오버')
		if(scrolling == 0){
			$('header').removeClass('fixed')
		}
	})


	$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
		if(device_status == 'pc'){
			$(this).addClass('over')
		}
	})

	$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
		$(this).removeClass('over')
	})

	
	$('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){
		$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
	})

	
	$('header .gnb .gnb_open').on('click', function(){
		$('header').addClass('menu_open')
	})
	$('header .gnb .gnb_close').on('click', function(){
		$('header').removeClass('menu_open')
	})

	/* 
		닫힌 메뉴를 클릭히면 열리고, 열린 메뉴를 클릭하면 닫힘
		동시에 여러 개의 메뉴가 열려있을 수도 있음
		toggleClass - 클래스가 없으면 추가하고, 있으면 삭제
	*/
	$('header .gnb .gnb_wrap ul.depth1 > li:has(ul.depth2) > a').on('click', function(e){
		if(device_status == 'mobile'){
			e.preventDefault() /* a 태그의 href를 작동 시키지 않음 */
			$(this).parents('li').toggleClass('open')
		}
	})


	/************************************ header 와 메뉴 : 종료 ************************************/


	

    // console.log('연결?????????????')

    /************************************ visual swiper : 시작 ************************************/

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 9000,
		disableOnInteraction: true,
	},

	//effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.visual .btn_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
		prevEl: '.visual .btn_wrap button.btn_prev',  
	},

    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */

	$('.visual .btn_wrap button.btn_stop').on('click', function(){
		// console.log('정지정지')
		visual_swiper.autoplay.stop();
		$(this).hide()// 정지버튼 숨김
		$('.visual .btn_wrap button.btn_play').show() // 재생버튼 나옴
	})

	$('.visual .btn_wrap button.btn_play').on('click', function(){
		// console.log('재생재생')
		visual_swiper.autoplay.start();
		$(this).hide()// 재생버튼 숨김
		$('.visual .btn_wrap button.btn_stop').show() // 정지버튼 나옴
	})

    /************************************ visual swiper : 끝 ************************************/


})