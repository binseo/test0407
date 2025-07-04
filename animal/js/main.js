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
		delay: 2500,
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



	/************************************ find 탭 기능 : 시작 ***********************************
	 * 1. 클릭한 li에서 data-content 값을 가져와서
	 *	==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
	 * 2. 클릭한 li에만 active 클래스 줌
	 * 3. 클릭한 li안에 있는 span에 선택됨이라고 글자 써줌 (다른 li에 있는 건 삭제)
	 * 4. 클릭한 li 속성 aria-selected 값을 true로 변경 (다른 li는 모두 false)
	 * */

	let find_cintent // 클릭한 메뉴의 이름(id)
	$('.find .list .tab_list ul li').on('click', function(){
		// console.log('누름!!!!!!!!!')
		if($(this).hasClass('active') == false){
			find_cintent = $(this).attr('data-content') // attr --> 속성 값을 가지고 오는 것
			// console.log(find_cintent)
			$('.find .list .tab_contents .tab_item').removeClass('active')
			$('.find .list .tab_contents').find('#'+find_cintent).addClass('active')
			// find는 자식을 선택하는 것 me/ 자기자신 아님
			//1번 끝

			//2번 시작
			$('.find .list .tab_list ul li').removeClass('active')
			$(this).addClass('active')
			//2번 끝

			//3번 시작
			$('.find .list .tab_list ul li button span').text('')
			$(this).find('span').text('선택됨')

			$('.find .list .tab_list ul li').attr('aria-selected', 'false') //속성 값을 변경하는 방법
			$(this).attr('aria-selected', 'true')
		}
	})

	/************************************ find 탭 기능 : 끝 ************************************/



	/************************************ adopt swiper : 시작 ************************************/

	const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			768: {    /* 640px 이상일때 적용 */
				spaceBetween: 24,
				centeredSlides: true, /* pc일 때만 적용 */
			},
		},
		centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		
		navigation: {
			nextEl: '.adopt .list_ctrl .btn_next',
            prevEl: '.adopt .list_ctrl .btn_prev',
		},
	});


	/************************************ adopt swiper : 끝 ************************************/


	/************************************ review swiper : 시작 ************************************/

	const review_swiper = new Swiper('.review .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			768: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
			1024: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 2500,
		// 	disableOnInteraction: true,
		// },
		navigation: {
			nextEl: '.review .list .btn_next',
            prevEl: '.review .list .btn_prev',
		},
	});

	/************************************ review swiper : 끝 ************************************/


	/************************************ footer top 버튼 :: 시작 ************************************/

	$('footer .top').on('click', function(){
		// console.log('클릭')
		$('html, body').animate({
			scrollTop: 0
		}, 500)
	})

	/************************************ footer top 버튼 ::  끝 ************************************/

})//$(document).ready