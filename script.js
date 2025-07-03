// jQuery Banner Unslider //

$(document).ready(function () {
  $(".banner").unslider({
    autoplay: true,
    speed: 1000,
    delay: 4000,
    dots: true,
    fluid: true,
    keys: true,
  });
});

// Flickity Quotes Carousel //

var elem = document.querySelector('.quotes-wrapper');
var flkty = new Flickity(elem, {
  cellAlign: 'center',
  contain: true
});

// Scroll Section //

(function () {
  'use strict';

  var navSelector = '.menu';
  var linksSelector = '.menu a';
  var scrollSpeed = 30;

  var timer, targetPosition;

  function scroll() {
    var delta = targetPosition - document.documentElement.scrollTop;
    if (delta > 0) {
      document.documentElement.scrollTop += Math.min(delta, scrollSpeed);
    }
    else if (delta < 0) {
      document.documentElement.scrollTop += Math.max(delta, -scrollSpeed);
    }
    else {
      clearInterval(timer);
    }

    if (window.innerHeight >= document.documentElement.scrollHeight - document.documentElement.scrollTop) {
      clearInterval(timer);
    }
  };

  var onLinkClick = function (event) {
    event.preventDefault();
    clearInterval(timer)

    var navHeight = document.querySelector(navSelector).offsetHeight;
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      targetPosition = Math.max(0, target.offsetTop);
      scroll();
      timer = setInterval(scroll, 1000 / 30);
    }
  };

  var links = document.querySelectorAll(linksSelector);

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', onLinkClick);
  }

})();


// Go To Top Button //

const goTopBtn = document.querySelector(".gotopbtn");

const sign = document.querySelector(".sign");

var w = window.innerWidth;

window.addEventListener("scroll", checkHeight)

function checkHeight() {
  if (w > 800 && window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});


sign.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});