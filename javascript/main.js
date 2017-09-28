$(function () {



  var mq = window.matchMedia("(min-width: 768px)");

  // 供768px尺寸以上使用
  if (mq.matches) {
    var s = skrollr.init();

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 478) {
        $('.nav').addClass('active');
        $('#header').addClass('active');
      } else {
        $('.nav').removeClass('active');
        $('#header').removeClass('active');
      }
    });

    // 供767px尺寸以下使用
  } else {


    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $('.side-bar').addClass('active');
      } else {
        $('.side-bar').removeClass('active');
      }
    });


    $('.menu').on('click', function () {
      $(this).toggleClass('active');
      $('.menu-list').toggleClass('active');

    });


  }


  // 不分尺寸使用

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 478) {
      $('#top').addClass('active');
    } else {
      $('#top').removeClass('active');
    }
  });


  $(window).on('resize', function () {
    var screenWidth = $(window).width();
    if (screenWidth >= 768) {
      var s = skrollr.init();
      $('.side-bar').removeClass('active');
    } else {
      var s = skrollr.init();
      s.destroy();
      $('.nav').removeClass('active');
      $('#header').removeClass('active');
    }
  });


  $('.move').on('click', function (e) {
    e.preventDefault();
    var currentPosition = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(currentPosition).offset().top - 63
    }, 1000);
  });






});