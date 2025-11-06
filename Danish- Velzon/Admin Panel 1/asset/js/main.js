$(document).ready(function () {
  // LogoChange
  $('.search-bar').on('click', function () {
    $('aside').toggleClass('w-70');
    $('.main-banner').toggleClass('ml-70');
    $('.navbar-header').toggleClass('ml-70');
    $('footer').toggleClass('ml-70');
    $('.menu-title').toggleClass('d-none');
    $('.ri-arrow-right-s-line').toggleClass('d-none');
    $('.arrow > span').toggleClass('d-none');


    var img_1 = $("img#home-btn");
    var img1_src = "asset/images/logo.png";
    var img2_src = "asset/images/logo-sm.png";

    if (img_1.attr("src") == img1_src) {
      img_1.attr("src", img2_src);
    }
    else {
      img_1.attr("src", img1_src);
    }
  });
  // drp 
  $('.fa-bars').click(function () {
    $('aside').show(0);
    $('.close').show(0);
  });
  $('.close').click(function () {
    $('.aside').hide(0);
  });
  // DropDown
  $('.profile').click(function () {
    $('.dropdown-menu').toggle();
  });

  // us-svg
  $('.us-svg').click(function () {
    $('.head-right-dropdown').toggle();
    $('.head-right-dropdown1').hide();
    $('.head-right-dropdown2').hide();
    $('.founder-dropdown').hide();
  });

  //mode
  $(".ri-moon-line").click(function () {
    $(".ri-moon-line").hide();
    $(".ri-sun-line").show();
    $(":root").css("--menu-primary", "#212529");
    $(":root").css("--header-item-sub-color", "rgba(0, 0, 0, 0.888)");
    $(":root").css("--btn-bg", "rgba(43, 43, 43, 0.716)");
    $(":root").css("--grid-color", "#212529");
    $(":root").css("--main-heading-color", "#dff0fa");
    $(":root").css("--header-bg", "#212529");
    $(":root").css("--border-color", "gray");
    $(":root").css("--search-bar", "#000000");
  });

  $(".ri-sun-line").click(function () {
    $(".ri-moon-line").show();
    $(".ri-sun-line").hide();
    $(":root").css("--menu-primary", "#405189");
    $(":root").css("--header-item-sub-color", "#e5e5f2");
    $(":root").css("--btn-bg", "#dff0fa");
    $(":root").css("--grid-color", "#fff");
    $(":root").css("--main-heading-color", "#495057");
    $(":root").css("--header-bg", "#ffffff");
    $(":root").css("--border-color", "#e9ebec");
    $(":root").css("--search-bar", "#f3f3f9");
  });

  //  aside
  $('.nav-link').on('click', function () {
    $('.nav-link .a').removeClass('ri-arrow-down-s-line');
    $('.nav-link .a').addClass('ri-arrow-right-s-line');
    $(this).next('.menu-dropdown').slideDown(1000);
    $('.menu-dropdown').not($(this).next('.menu-dropdown')).slideUp(1000);
    $(this).children('.a').removeClass('ri-arrow-right-s-line');
    $(this).children('.a').addClass('ri-arrow-down-s-line');
  });


  // best-selling
  $('.best-selling .nav-link').click(function () {
    $('.menu-dropdown5').toggle();
  });

  //  Top-Sellers
  $('.top-sellers .nav-link').click(function () {
    $('.menu-dropdown6').toggle();
  });

  // Pie-Chart
  $('.reports .nav-link').click(function () {
    $('.menu-dropdown4').toggle();
  });

  //  Full Screen
  document.querySelector("#full").addEventListener("click", function () {
    toggleFullScreen();
  });

  function toggleFullScreen() {
    if (
      !document.fullscreenElement && // alternative standard method
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  // top-button
  var $backToTop = $("#button");
  $backToTop.hide();

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });

  $backToTop.on('click', function (e) {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // footer
  $('.ri-menu-2-line').click(function () {
    $('footer').toggleClass('ml-70');
  });

  $('.ri-arrow-right-line').click(function () {
    $('footer').toggleClass('ml-70');
  });
});


