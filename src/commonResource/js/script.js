$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").slideToggle();
  });
});

// footer

// $(".show_hide1").on("click", function () {
//   $(".show_hide1").toggleClass("active");
//   $("#ul1").slideToggle();
// });
// $(".show_hide2").on("click", function () {
//   $(".show_hide2").toggleClass("active");
//   $("#ul2").slideToggle();
// });

// $(".show_hide3").on("click", function () {
//   $("#ul3").slideToggle();
// });

// $(".show_hide4").on("click", function () {
//   $("#ul4").slideToggle();
// });
// $(".show_hide5").on("click", function () {
//   $("#ul5").slideToggle();
// });
// $(".show_hide6").on("click", function () {
//   $("#ul6").slideToggle();
// });
// $(".show_hide7").on("click", function () {
//   $("#ul7").slideToggle();
// });
// $(".show_hide8").on("click", function () {
//   $("#ul8").slideToggle();
// });
// $(".show_hide9").on("click", function () {
//   $("#ul9").slideToggle();
// });

// shorten form

function handleSmallDevice() {
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  $(document).on("click", "[class^='show_hide']", function () {
    if (mediaQuery.matches) {
      $(this).toggleClass("active");
      $(`#ul${this.className.match(/\d+/)}`).slideToggle();
    }
  });
}

// Run the function to apply on page load
handleSmallDevice();
