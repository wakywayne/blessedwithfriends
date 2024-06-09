(function($) {
  "user strict";
  // lightcase
  $("a[data-rel^=lightcase]").lightcase();

  $(window).on("load", function() {
    $(".overlayer").fadeOut(1000);
    var img = $(".bg_img");
    img.css("background-image", function() {
      var bg = "url(" + $(this).data("background") + ")";
      return bg;
    });
  });

  $(document).ready(function() {
    //Header
    var fixed_top = $(".header");
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 300) {
        fixed_top.addClass("header--fixed fadeInUp");
      } else {
        fixed_top.removeClass("header--fixed fadeInUp");
      }
    });

    // header bar & info js
    $(".header__bar--info").on("click", function() {
      $(this).toggleClass("active");
      $(".header__top").toggleClass("infoBar");
    });
    $(".header__bar--nav").on("click", function() {
      $(this).toggleClass("active");
      $(".header__bottom").toggleClass("activeMenu");
    });

    var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      loop: true,
    });

    // Call & init
    $(function() {
      $(".ba-slider").each(function() {
        var cur = $(this);
        // Adjust the slider
        var width = cur.width() + "px";
        cur.find(".resize img").css("width", width);
        // Bind dragging events
        drags(cur.find(".handle"), cur.find(".resize"), cur);
      });
    });

    // // Update sliders on resize.
    // // Because we all do this: i.imgur.com/YkbaV.gif
    $(function() {
      $(".ba-slider").each(function() {
        var cur = $(this);
        var width = cur.width() + "px";
        cur.find(".resize img").css("width", width);
      });
    });
  });

  //contact form js
  $(function() {
    var form = $("#contact-form");
    var formMessages = $(".form-message");
    $(form).submit(function(e) {
      e.preventDefault();
      var formData = $(form).serialize();
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData,
      })
        .done(function(response) {
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");
          $(formMessages).text(response);
          $("#contact-form input, #contact-form textarea").val("");
        })
        .fail(function(data) {
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              "Oops! An error occured and your message could not be sent.",
            );
          }
        });
    });
  });
})(jQuery);
