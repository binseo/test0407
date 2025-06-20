$(document).ready(function(){
    // console.log('??????')

    let course_content // 클릭한 메뉴의 이름(id)
    $('.course .list .tab_list ul li').on('click', function(){
        // console.log('누름!!!!!!!!!!!!!')
        // $(this).hasClass('active') 확인? 맞는 지 has
        if($(this).hasClass('active') == false){
            // console.log('선택안된 메뉴')
            //1번 시작
            course_content = $(this).attr('data-content') // attr --> 속성 값을 가지고 오는 것
            // console.log(find_content)
            $('.course .list .tab_contents .tab_item').removeClass('active')
            $('.course .list .tab_contents').find('#'+course_content).addClass('active') 
            // find는 자식을 선택하는 것 me 아님 
            // 1번 끝

            // 2번 시작
            $('.course .list .tab_list ul li').removeClass('active')
            $(this).addClass('active')
            // 2번 끝
            
            //3번 시작
            $('.course .list .tab_list ul li button span').text('')
            $(this).find('span').text('선택됨')
            //3번 끝

            $('.course .list .tab_list ul li').attr('aria-selected', 'false') // 속성 값을 변경하는 방법
            $(this).attr('aria-selected', 'true')
        }
    })



    let visual_name = ['부여왕릉원','국립부여박물관','정림사지박물관','부소산','궁남지']
	// console.log(visual_name[0]) 배열은 숫자가 0부터 시작

	const tab_item = new Swiper('.tab_item .swiper', { /* 팝업을 감싼는 요소의 class명 */

		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 5000,
		// 	disableOnInteraction: true,
		// },

		//effect: "fade", /* fade 효과 */
	
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.tab_item .paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			// type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
			renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
				return '<span class="' + className + '"> ' + visual_name[index] + "</span>";
			},
		},
		
	
	});

})