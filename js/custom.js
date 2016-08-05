$(window).load(function() {

    // search-field
    $(".search").click(function(){
        $(".search-field").slideToggle("fast");
    });    
    $(".close-search").click(function(){
        $(".search-field").hide();
    });

    // slider main  
    $('#main-slider').flexslider({
        animation: "fade",
        controlNav: true,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 5000
    });

    $('#secondary-slider').flexslider({
        animation: "slide",
        slideshowSpeed: 4000,
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        itemWidth: 210,
        itemMargin: 0,
        minItems: 1,
        maxItems: 5,
        smoothHeight: false,
        useCSS: false
    });

    // mobile-menu
    $(".nav ul li").has(".sub-nav").hover(
        function() {
            $(this).find(".sub-nav").stop().slideDown();
            $(this).addClass("active");
        },
        function() {
            $(this).find(".sub-nav").stop().hide();
            $(this).removeClass("active");
        }
    );

    $(".nav ul li ul li" ).has(".sub-nav-sub").hover(
        function() {
            $(this).find(".sub-nav-sub").stop().slideDown();
            $(this).addClass("active");
        },
        function() {
            $(this).find(".sub-nav-sub").stop().hide();
            $(this).removeClass("active");
        }
    );

    // mobile-menu
    $(".navigation ul li").has(".sub-nav").hover(
        function() {
            $(this).find(".sub-nav").stop().slideDown();
            $(this).addClass("active");
        },
        function() {
            $(this).find(".sub-nav").stop().hide();
            $(this).removeClass("active");
        }
    );

    $(".navigation ul li ul li" ).has(".sub-nav-sub").hover(
        function() {
            $(this).find(".sub-nav-sub").stop().slideDown();
            $(this).addClass("active");
        },
        function() {
            $(this).find(".sub-nav-sub").stop().hide();
            $(this).removeClass("active");
        }
    );

  // column height
    $('.box').responsiveEqualHeightGrid();

});

