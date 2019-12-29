$(function() {
  $("#button-for-modal").on("click", function() {
    $("#modal").addClass("modal__active");
  });

  $("#close-modal").on("click", function() {
    $("#modal").removeClass("modal__active");
  });

  $("#up").on("click", function() {
    $(document).scrollTop(0);
  });
});
