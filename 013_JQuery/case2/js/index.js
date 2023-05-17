$(function () {
  // 显示左侧电梯工具栏
  fixedTool();
  var flag = true;
  $(window).scroll(function () {
    if (flag) {
      fixedTool();
      $('.floor .w').each(function (i, ele) {
        if ($(document).scrollTop() >= $(ele).offset().top) {
          $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
        }

      })
    }

  })
  // 点击电梯导航
  $('.fixedtool li').click(function () {
    flag = false;
    $(this).addClass('current').siblings().removeClass();
    console.log($(this).index());
    var index = $(this).index();
    var currentOff = $('.floor .w').eq(index).offset().top;
    $('body, html').stop().animate({ scrollTop: currentOff }, function () {
      flag = true;
    });
  });

  function fixedTool() {
    if ($(document).scrollTop() >= $('.recommend').offset().top) {
      $('.fixedtool').fadeIn();
    }
    else {
      $('.fixedtool').fadeOut();
    }
  }
})