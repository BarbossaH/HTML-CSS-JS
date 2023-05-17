//window.onscroll = function () {closeNavMenu()};
/*
function closeNavMenu(){
  if (document.getElementById("nav").className === "nav menu_on"){
    document.getElementById("nav").className = "nav";
  }
}*/

$(document).ready(function(){
  $(window).scroll(function(){
    var xx = $(this).scrollTop();
    $('.scroll-back').css('background-position','0% '+parseInt(xx/3)+'px');
    $('#header-upper').css('background-position','0% '+parseInt(xx/3)+'px');
    if (xx > 200) {
      $('#header').addClass('fixed-top');
      $('#page-body').addClass('header-fixed-top');
      //$('#page-body').css('padding-top','105px');
      //$('#page-body').css('margin-top','0');
    } else {
      $('#header').removeClass('fixed-top');
      $('#page-body').removeClass('header-fixed-top');
      //$('#page-body').css('margin-top','-170px');
      //$('#page-body').css('padding-top','48px');
    }});
});


function ScrollTo () {
  $('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});
}
