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
  // $(function () {
  //   $('[data-toggle="tooltip"]').tooltip();
  // });

  // progress section
  let position = $('.progress-text-widget').offset().top - 200,
      height = $('.progress-text-widget').height();

  $(document).on('scroll', function (){
    let scroll = $(document).scrollTop();
    // if(scroll  > position && scroll < (position + height) ) {
    if(scroll > position ) {
      // console.log(position)
      $('.list-wrap li:nth-child(1)').addClass('active');
    } else {
      $('.list-wrap li').removeClass('active');
    }

    if(scroll  > (position + (height/10)) ) {
      // console.log(position + (height/10))
      $('.list-wrap li:nth-child(2)').addClass('active');
    }
    if(scroll  > (position + (height/5)) ) {
      // console.log('333')
      $('.list-wrap li:nth-child(3)').addClass('active');
    }
    if(scroll  > (position + (height/2)) ) {
      // console.log('333')
      $('.list-wrap li:nth-child(4)').addClass('active');
    }


  })







});
