$(function(){

    // console.log('test');

    $(window).on('scroll', function() {

        $('.ukonOrg_fade').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 0;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_fade').addClass('ukonOrg_fadeIn');
            }
        });

        $('.ukonOrg_slide').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 0;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_slide').addClass('ukonOrg_slideIn');
            }
        });

        $('.ukonOrg_scale_card_sp').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 0;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_scale_card_sp').addClass('ukonOrg_scaleUp_card_sp');
            }
        });

        $('.ukonOrg_scale_card_pc').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 0;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_scale_card_pc').addClass('ukonOrg_scaleUp_card_pc');
            }
        });

        $('.ukonOrg_scale_cta').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 0;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_scale_cta').addClass('ukonOrg_scaleUp_cta');
            }
        });
    });
});
