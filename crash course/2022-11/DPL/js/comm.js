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
      if (_page === "home") {
        $("#page-body").addClass("home");
      }

      $.get("pages/header.html",
        function (data, status) {
          document.getElementById("header").innerHTML = data;
        });
      $.get("pages/footer.html",
        function (data, status) {
          document.getElementById("footer").innerHTML = data;
        });
      $.get("pages/" + _page + ".html",
        function (data, status) {
          document.getElementById("page-body").innerHTML = data;
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