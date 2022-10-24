function show_label(ele) {
  const firstLabel = ele.labels[0];
  firstLabel.classList.add("visible");
  firstLabel.classList.add("transform_label_end");
}

function hide_label(ele) {
  const firstLabel = ele.labels[0];
  firstLabel.classList.remove("visible");
  firstLabel.classList.remove("transform_label_end");
}

(function () {
  "use strict";
  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 1,
          nav: false,
          loop: false,
        },
        1000: {
          items: 2,
          nav: false,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

const navigation_modal = document.getElementById("nav-modal");
const mob_nav = document.getElementById("mob-nav");

const icon = document.querySelector("menu-box");

let html = icon.innerHTML;

const bars = '<i class="fas fa-bars"></i>';

const times = '<i class="fas fa-times"></i>';

function toggle_nav() {
  if (icon.innerHTML == bars) {
    icon.innerHTML = times;
  } else {
    icon.innerHTML = bars;
  }
  icon.classList.toggle("rotate-end");
  navigation_modal.classList.toggle("visible");
  mob_nav.classList.toggle("mob-nav-open");
}
