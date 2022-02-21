$(document).ready(function () {
  // parallax background;
  $("#banner").parallax({ imageSrc: "../images/banner.jpg" });

  // typing effect;
  var typed = new Typed('.element', {
    strings: [
      'web designer',
      'photographer',
      'web developer',
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});
