(function ($) {
  feather.replace();
  const body = $("body");
  // set a default value in a tag
  $("a[href='#']").attr("href", "javascript:void(0)");

  // For Sidebar Opening And CLosing
  $(".foodLog-menu").on("click", function () {
    $(".sidebar").removeClass("none-showing");
  });
  $(".close-sidebar").on("click", function () {
    $(".sidebar").addClass("none-showing");
  });

  body.on("click", ".foodLog-post-rating", function () {
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

  body.on("click", ".menu-list > li", function () {
    $(".menu-list > li").removeClass("active");
    $(this).addClass("active");
    $(".sidebar").addClass("none-showing");
  });

  body.on("click", ".post-link", function () {
    let getMainParentImg = $(this)
      .parent()
      .parent()
      .parent(".post-list")
      .find("img")
      .eq(0);

    if (getMainParentImg) {
      let app = $(".foodLog-menu");
      let imgClone = getMainParentImg
        .clone()
        .offset({
          top: getMainParentImg.offset().top,
          left: getMainParentImg.offset().left,
        })
        .css({
          opacity: "0.8",
          position: "fixed",
          height: "150px",
          width: "150px",
          "z-index": "100",
          objectFit: "cover",
        })
        .addClass("outerImg")
        .appendTo($("body"))
        .animate(
          {
            top: app.offset().top - 25,
            left: app.offset().left - 20,
            width: "100%",
            height: "300px",
            opacity: 1,
          },
          600
        );
    }

    let info = `
        <a href="javascript:void(0)" class="closeOuterItem"><i data-feather="arrow-left"></i></a>
        <div class="foodLog-post-content outerItem">
            <a href="#" class="foodLog-post-rating"><i data-feather="heart"></i></a>
            <div class="innerBox">
                    <h1 class="post-title">${$(this).text()}</h1>
                <ul class="meta-data">
                    <li><i data-feather="map-pin"></i> New York City</li>
                    <li><i data-feather="calendar"></i> 5 Nav 2020</li>
                </ul>
                <div class="info">
                <p>${$(this)
                  .parent()
                  .parent(".post-meta-data")
                  .find(".foodLog-desc")
                  .attr("data-desc")}</p>
                </div>
                <button type="button" class="buy-btn">
                    <i data-feather="shopping-bag"></i> Buy Ticket
                </button>
            </div>
        </div>
        `;
    body.append(info);
    body.css("overflow", "hidden");
    feather.replace();
  });

  body.on("click", ".closeOuterItem", function () {
    body.find(".outerImg").fadeOut(555);
    body.find(".outerItem").fadeOut(555);
    body.css("overflow", "auto");
    setTimeout(function () {
      body.find(".outerImg").remove();
      body.find(".outerItem").remove();
      body.find(".closeOuterItem").remove();
    }, 800);
  });
})(jQuery);
