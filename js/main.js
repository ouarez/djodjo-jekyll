$("#cancel-nav").hide();
$(function() {
  $(".nav-button").click(function() {
    $(".mobile").slideToggle(100,"linear");
    $("#burger-nav").toggle();
    $("#cancel-nav").toggle();
  });
});
