$(window).scroll(function() {
  $(".price__card ").each(function() {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this)
        .css("visibility", "visible")
        .addClass("animated fadeInUp");
    }
  });
});
