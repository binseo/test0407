(function($) {
    'use strict';

    $(function(){


        var $loginWrap = $('.login_user_wrap');
        $loginWrap.each(function () {
            var $thisLoginWrap = $(this),
                $thisBtn = $thisLoginWrap.find('button.user_tab_btn');
            $thisBtn.on('click', function(){
                // console.log('누름')
                var $this = $(this),
                    $thisParent = $this.parent('.user_tab_item'),
                    Index = $thisParent.index(),
                    $siblingsParent = $thisParent.siblings('.user_tab_item'),
                    $siblingsBtn = $siblingsParent.find('.user_tab_btn'),
                    IsActive = $thisParent.is('active'),
                    $thisCtsItem = $thisLoginWrap.find('.user_cts_item').eq(Index),
                    $otherCtsItem = $thisCtsItem.siblings('.user_cts_item');
                if(!IsActive){
                    $siblingsParent.removeClass('active');
                    $thisParent.addClass('active');
                    $siblingsBtn.removeAttr('title');
                    $this.attr('title', '선택됨');
                    $otherCtsItem.removeClass('active');
                    $thisCtsItem.addClass('active');
                    
                }
                // console.log($otherCtsItem)
                // console.log($siblingsBtn)
                // console.log(Index)
            });
        });

        

        
    });
    // $(function () {

    //     var $formPass = $('form_item.password_type')
    //     $formPass.each(function () {
    //         var $formPass = $(this),
    //             $pasEye = $formPass.find('.user_pas_eye'),
    //             $inputUserPas = $formPass.find('input#userPasswd'),
    //             $soundOnly = $pasEye.find('.sound_only');

    //         $pasEye.on('click', function (e) {
    //             e.preventDefault();

    //             if ($(this).attr('class').indexOf('on') === -1) {
    //                 $(this).addClass('on').attr('title', '비밀번호 표시');
    //                 $inputUserPas.attr('type', 'text');
    //                 $soundOnly.text('비밀번호 표시');
    //             } else {
    //                 $(this).removeClass('on').attr('title', '비밀번호 숨김');
    //                 $inputUserPas.attr('type', 'password');
    //                 $soundOnly.text('비밀번호 숨김');
    //             }
    //         })
    //     })
    // });

    $(function () {
        
        $('.form_item.password_type').each(function () {
            var $formItem = $(this),
                $pasEye = $formItem.find('.user_pas_eye'),
                $inputUserPas = $formItem.find('input#userPasswd'),
                $soundOnly = $pasEye.find('.sound_only');

            $pasEye.on('click', function (e) {
                e.preventDefault();

                var $this = $(this);
                // attr('class')가 undefined일 수 있으니 빈 문자열로 기본 처리
                var cls = $this.attr('class') || '';

                if (cls.indexOf('on') === -1) {
                    $this.addClass('on').attr('title', '비밀번호 표시');
                    $inputUserPas.attr('type', 'text');
                    $soundOnly.text('비밀번호 표시');
                } else {
                    $this.removeClass('on').attr('title', '비밀번호 숨김');
                    $inputUserPas.attr('type', 'password');
                    $soundOnly.text('비밀번호 숨김');
                }
            });
        });
    });

    

})(jQuery);