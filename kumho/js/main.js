$(document).ready(function(){

    /* ************************************** visual_swiper : 시작 ************************************ */

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },

    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */



})



