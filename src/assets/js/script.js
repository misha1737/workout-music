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

  // slick
  $(".slider").slick({
    centerMode: true,
    slidesToShow: 4,
    infinite: true,
    centerPadding: "60px",
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fas fa-arrow-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fas fa-arrow-right'></i></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
