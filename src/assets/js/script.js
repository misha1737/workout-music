$(document).ready(function () {
  //mobile menu
  $(document).on("click", ".showMenu", function () {
    $(this).toggleClass("opened");
    $(".toggleMenu").toggleClass("menu-open");
    $("body").toggleClass("active-menu");
    $("html").toggleClass("overflow");
    $(".navbar-wrapper").toggleClass("navbar-open-menu");
  });
  $(document).on("click", ".overlayJs", function () {
    $(".showMenu").removeClass("opened");
    $(".toggleMenu").removeClass("menu-open");
    $("body").removeClass("active-menu");
    $("html").removeClass("overflow");
    $(".navbar-wrapper").removeClass("navbar-open-menu");
  });
});
