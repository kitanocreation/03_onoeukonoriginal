$(function(){

    // console.log('test');

    $(window).on('scroll', function() {

        $('.ukonOrg_fade').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_fade').addClass('ukonOrg_fadeIn');
            }
        });

        $('.ukonOrg_slide').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_slide').addClass('ukonOrg_slideIn');
            }
        });

        $('.ukonOrg_scale_card').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_scale_card').addClass('ukonOrg_scaleUp_card');
            }
        });

        $('.ukonOrg_scale_cta').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('ukonOrg_scale_cta').addClass('ukonOrg_scaleUp_cta');
            }
        });
    });
});
