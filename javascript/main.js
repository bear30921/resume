$(function () {

  $(window).on('scroll', function () {
    var mq = window.matchMedia("(min-width: 991px)");
    var viewpoint = $(window).scrollTop();
    
    // 大螢幕套用此javascript
    if (mq.matches) {

      if (viewpoint >= 478) {
        $('.nav').addClass('active');
        $('#header').addClass('active');
        $('#top').css({
          'opacity': 1,
          'right': '12px'
        });
      } else {
        $('.nav').removeClass('active');
        $('#header').removeClass('active');
        $('#top').css({
          'opacity': 0,
          'right': '-100px'
        });
      }

      //平板、手機套用此javascript
    } else {
      if (viewpoint > 0) {
        $('.side-bar').addClass('active');
      } else {
        $('.side-bar').removeClass('active');
      }
    }

  });



  $('.move').on('click', function (e) {
    e.preventDefault();
    var currentPosition = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(currentPosition).offset().top - 63
    }, 1000);
  });


  $('#top').on('click', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: 0
    }, 1000);
  });











});