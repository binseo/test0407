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

    $(function () {
        var $formInput = $('.form_input');
        $formInput.each(function () {
            var $thisFormInput = $(this),
                $thisBtn = $thisFormInput.find('button.user_pas_eye');
            $thisBtn.on('click', function(){
                // console.log('누름')
                var $this = $(this),
                    $thisParent = $this.parent('.form_input'),
                    $siblingsParent = $thisParent.find('input.input_login'),
                    IsActive = $thisParent.is('.active'),
                    $soundOnly = $thisParent.find('.sound_only');
                if (!IsActive) {
                    $siblingsParent.attr('type', 'text');
                    $this.addClass('on').attr('title', '비밀번호 표시');
                    $soundOnly.text('비밀번호 표시');
                    $thisParent.addClass('active');
                } else {
                    $siblingsParent.attr('type', 'password');
                    $this.removeClass('on').attr('title', '비밀번호 숨김');
                    $soundOnly.text('비밀번호 숨김');
                    $thisParent.removeClass('active');
                }
            });
        });
    });

})(jQuery);