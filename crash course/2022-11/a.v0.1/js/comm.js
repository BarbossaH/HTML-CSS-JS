//default page body
var _page = "home";

window.onload = function () {
  var params = getParams();
  var count = Object.keys(params).length;
  if (count > 1) {
    _page = "404";
  } else if (count == 1 && "page" in params) {
    _page = params.page;
  } else if (count == 1 && !("" in params)) {
    _page = "404";
  }


  $.get("pages/header.html",
    function (data, status) {
      document.getElementById("header").innerHTML = data;
      $('.search').click(function () {
        $('.search-input').focus();
        $('.search').css('display', 'none');
        $('.cancel').css('display', 'block');
      });
      $('.search-input').focusout(function () {
        $('.cancel').css('display', 'none');
        $('.search').css('display', 'block');
      });

    });
  $.get("pages/footer.html",
    function (data, status) {
      document.getElementById("footer").innerHTML = data;
    });
  $.get("pages/" + _page + ".html",
    function (data, status) {
      document.getElementById("page-body").innerHTML = data;
      initializeSlideshow();
      initializeSlideshow2();
      initializeSlideshow3();
      setExpandableOnClick();
      //$('.parallaxa').parallax({imageSrc: '/img/Screen-Shot-2015-05-02-at-1.52.25-PM.png'});
      $('#parallax0').parallax({imageSrc: '/img/p1.jpg'});
      $('#parallax1').parallax({imageSrc: '/img/p2.jpg'});
      $('#parallax2').parallax({imageSrc: '/img/p3.png'});
      $('#parallax3').parallax({imageSrc: '/img/p4.png'});
    })
    .fail(function () {
      $.get("pages/404.html", function (data) { document.getElementById("page-body").innerHTML = data; })
    });
}

function getParams() {
  var params = {};
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
}


function setExpandableOnClick() {
  $(".expandable .ebutton").click(function (event) {
    $(this).closest( ".expandable").siblings('.expandable').find('.econtent').slideUp('slow');
    $(this).siblings('.econtent').slideToggle('slow',function(){
      jQuery(window).trigger('resize').trigger('scroll');
    });
   
  });
}