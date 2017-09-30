$(function () {


  function enableSkrollr(str) {
    if (str == 'active') {
      var s = skrollr.init();
    } else {
      var s = skrollr.init();
      s.destroy();
    }
  }

  enableSkrollr('active');

  // 固定選單
  $(window).on('scroll', function () {
    var $scroll = $(window).scrollTop();
    if ($scroll >= 478) {
      $('.nav').addClass('active');
      $('#header').addClass('active');
    } else {
      $('.nav').removeClass('active');
      $('#header').removeClass('active');
    }
  });


  $(window).on('scroll', function () {
    var $scroll = $(window).scrollTop();
    if ($scroll > 0) {
      $('.side-bar').addClass('active');
    } else {
      $('.side-bar').removeClass('active');
    }
  });


  // 不分尺寸，都可以使用 --------------------------


  $(window).on('resize', function () {
    if ($(window).width() <= 767) {
      enableSkrollr();
    } else {
      enableSkrollr('active');
    }
  });
  //  top按鈕動畫
  $(window).on('scroll', function () {
    var $scroll = $(window).scrollTop();
    if ($scroll >= 478) {
      $('#top').addClass('active');
    } else {
      $('#top').removeClass('active');
    }
  });

  // 選單移動指定位置動畫
  $('.move').on('click', function (e) {
    e.preventDefault();
    var $currentPosition = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $($currentPosition).offset().top - 63
    }, 1000);
    $('.menu').removeClass('active');
    $('.menu-list').removeClass('active');
  });

  // 手機板選單切換
  $('.menu').on('click', function () {
    $(this).toggleClass('active');
    $('.menu-list').toggleClass('active');
  });




});