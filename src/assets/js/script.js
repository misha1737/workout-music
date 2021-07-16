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

  // progress section
  let position = $('.progress-text-widget').offset().top - 200,
      height = $('.progress-text-widget').height();

  $(document).on('scroll', function (){
    let scroll = $(document).scrollTop();
    
    if(scroll > position ) {
      $('.list-wrap li:nth-child(1)').addClass('active');
      $('.progress-line').css('width','25%');
    } else {
      $('.list-wrap li:nth-child(1)').removeClass('active');
      $('.progress-line').css('width','0');
    }
    if(scroll > (position + ((height/2)/4)) ) {
      $('.list-wrap li:nth-child(2)').addClass('active');
      $('.progress-line').css('width','50%');
    } else {
      $('.list-wrap li:nth-child(2)').removeClass('active');
    }
    if(scroll > (position + ((height/2)/4)*2) ) {
      $('.list-wrap li:nth-child(3)').addClass('active');
      $('.progress-line').css('width','75%');
    } else {
      $('.list-wrap li:nth-child(3)').removeClass('active');
    }
    if(scroll > (position + ((height/2)/4)*3) ) {
      $('.list-wrap li:nth-child(4)').addClass('active');
      $('.progress-line').css('width','100%');
    } else {
      $('.list-wrap li:nth-child(4)').removeClass('active');
    }

  })

});
