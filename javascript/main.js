$(function () {

  var s = skrollr.init();

  var mq = window.matchMedia("(min-width: 768px)");

  // 供768px尺寸以上使用
  if (mq.matches) {


    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      // console.log(scroll);
      // 固定導覽列
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

    // 導覽列增加效果
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $('.side-bar').addClass('active');
      } else {
        $('.side-bar').removeClass('active');
      }
    });

  }
  // 不分尺寸使用


  // top按鈕，特效
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 478) {
      $('#top').css({
        'opacity': 1,
        'right': '12px'
      });
    } else {
      $('#top').css({
        'opacity': 0,
        'right': '-100px'
      });
    }

  });

  // 調整瀏覽器視窗時，移除殘餘的class
  $(window).on('resize', function () {
    var screenWidth = $(window).width();
    if (screenWidth >= 768) {
      $('.side-bar').removeClass('active');
    } else {
      $('.nav').removeClass('active');
      $('#header').removeClass('active');
    }
  });

  // 點擊按鈕，做順暢的滑動
  $('.move').on('click', function (e) {
    e.preventDefault();
    var currentPosition = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(currentPosition).offset().top - 63
    }, 1000);
  });



});