(function ($) {
  feather.replace();
  // set a default value in a tag
  $("a[href='#']").attr("href", "javascript:void(0)");

  // For Sidebar Opening And CLosing
  $(".foodLog-menu").on("click", function () {
    $(".sidebar").removeClass("none-showing");
  });
  $(".close-sidebar").on("click", function () {
    $(".sidebar").addClass("none-showing");
  });

  $(".foodLog-post-rating").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".foodLog-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
  });

  $(".foodLog-tabItem > li").on("click", function () {
    $(".foodLog-tabItem > li").removeClass("active");
    $(this).addClass("active");
  });

  $(".foodLog-navbar ul > li").on("click", function () {
    $(".foodLog-navbar ul > li").removeClass("active");
    $(this).addClass("active");
  });

  $(".menu-list > li").on("click", function () {
    $(".menu-list > li").removeClass("active");
    $(this).addClass("active");
    $(".sidebar").addClass("none-showing");
  });
})(jQuery);
