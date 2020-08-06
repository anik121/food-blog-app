(function($){
    feather.replace();
    // set a deafult value in a tag
    $("a[href='#']").attr('href','javascript:void(0)')
    $('.foodLog-slider').owlCarousel({
        items:1,
        loop: true,
        margin: 10
    });

    $('.foodLog-tabItem > li').on('click',function(){
        $('.foodLog-tabItem > li').removeClass('active');
        $(this).addClass('active');
    });

    $('.foodLog-navbar ul > li').on('click',function(){
        $('.foodLog-navbar ul > li').removeClass('active');
        $(this).addClass('active');
    });
    
})(jQuery);