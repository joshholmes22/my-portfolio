const navbarTransition = () => {
  if ($(window).scrollTop() === 0) {
    $("#home").css("background", "rgba(3, 3, 3, 0)");
    $("#home").css("backdrop-filter", "blur( 0px )");
  } else {
    $("#home").css("background", "rgba(3, 3, 3, 0.3)");
    $("#home").css("backdrop-filter", "blur( 14px )");
  }

  if ($(window).scrollTop() > 1000) {
    $("#body").removeClass("background1");
    $("#body").addClass("background2");
  } else {
    $("#body").addClass("background1");
    $("#body").removeClass("background2");
  }
};

$(window).scroll(navbarTransition);
