$(function () {

  // 啟動skrollr
  function enableSkrollr(str) {
    if (str == 'active') {
      var s = skrollr.init();
    } else {
      var s = skrollr.init();
      s.destroy();
    }
  }

  if ($(window).width() >= 768) {
    enableSkrollr('active');
  } else {
    enableSkrollr();
  }

  // 固定電腦版、 平板選單
  $(window).on('scroll', function () {
    var $scroll = $(window).scrollTop();
    if ($scroll >= 600) {
      $('.nav').addClass('active');
      $('#header').addClass('active');
    } else {
      $('.nav').removeClass('active');
      $('#header').removeClass('active');
    }
  });

  //  固定手機版選單
  $(window).on('scroll', function () {
    var $scroll = $(window).scrollTop();
    if ($scroll > 0) {
      $('.side-bar').addClass('active');
    } else {
      $('.side-bar').removeClass('active');
    }
  });



  //  依照瀏覽器視窗大小，判斷是否該啟用skrollr
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
    if ($scroll >= 600) {
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

  // 照片燈箱
  $('.experience img').on('click', function () {
    var img = $(this).attr('src');
    var lightBox = $('#full-photo').find('img');
    $(lightBox).attr('src', img);
    $('#full-photo').fadeIn(300);
    $('html').addClass('stop-scrolling');

  });

  $('.cancel').on('click', function () {
    $('#full-photo').fadeOut(300);
    $('html').removeClass('stop-scrolling');
  });

  



});