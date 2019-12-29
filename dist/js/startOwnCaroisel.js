$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  slideBy: 1,
  //   autoWidth: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

$(".arrows__right").click(function() {
  $(".owl-carousel").trigger("next.owl.carousel", [600]);
});
// Go to the previous item
$(".arrows__left").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  $(".owl-carousel").trigger("prev.owl.carousel", [600]);
});
