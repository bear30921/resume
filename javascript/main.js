$(function () {

  $(window).on('scroll', function () {
    var mq = window.matchMedia("(min-width: 768px)");
    var scroll = $(window).scrollTop();

    //供768px尺寸以上使用
    if (mq.matches) {

      // 
      if (scroll >= 478) {
        $('.nav').addClass('active');
        $('#header').addClass('active');
      } else {
        $('.nav').removeClass('active');
        $('#header').removeClass('active');
      }

      //供767px尺寸以下使用
    } else {

      if (scroll > 0) {
        $('.side-bar').addClass('active');
      } else {
        $('.side-bar').removeClass('active');
      }

    }

    // 不分尺寸使用
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


  // 調整瀏覽器視窗，移除殘餘的class
  $(window).on('resize', function () {
    var viewpoint = $(window).width();
    if (viewpoint >= 768) {
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