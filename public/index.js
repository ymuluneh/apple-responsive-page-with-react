function handleSmallDevice() {
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  $(document).on("click", "[class^='show_hide']", function () {
    if (mediaQuery.matches) {
      $(this).toggleClass("active");
      $(`#ul${this.className.match(/\d+/)}`).slideToggle();
    }
  });
}
