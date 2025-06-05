$(document).ready(function(){

	/************************************ header 와 메뉴 : 시작 ************************************/




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