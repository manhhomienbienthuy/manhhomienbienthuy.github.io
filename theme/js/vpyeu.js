$(document).ready(function(){
  var $window = $(window);
  var $container = $(".blog-posts.hfeed");
  $container.imagesLoaded(function() {
    reLayout();
  });

  function reLayout() {
    var mediaQueryId = getComputedStyle(document.body, ":after").getPropertyValue("content");
    if (navigator.userAgent.match("MSIE 8") == null) {
      mediaQueryId = mediaQueryId.replace(/"/g, "")
    }

    $container.isotope({
      resizable: true,
      itemSelector: ".post-outer",
    }).isotope("reLayout")
  }

  $("#smooth_scroll").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $(".vt_menu_toggle").click(function() {
    $("ul.blog_menus").slideToggle();
  });

  $(".post-body.entry-content img").each(function(){
    $(this).fancybox({
      openEffect: "elastic",
      openSpeed: "slow",
      closeEffect: "fade",
      href: $(this).attr("src"),
      padding: 0
    });
  });
});
