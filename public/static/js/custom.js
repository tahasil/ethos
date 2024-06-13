$(window).on("load", function () {});

$(document).ready(function () {});

function reveal() {
  var revealsL = document.querySelectorAll(".revealR");
  var revealsR = document.querySelectorAll(".revealL");
  var revealT = document.querySelectorAll(".revealT");

  for (var i = 0; i < revealsL.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsL[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsL[i].classList.add("active");
    } else {
      revealsL[i].classList.remove("active");
    }
  }

  for (var i = 0; i < revealsR.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsR[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsR[i].classList.add("active");
    } else {
      revealsR[i].classList.remove("active");
    }
  }

  for (var i = 0; i < revealT.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealT[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealT[i].classList.add("active");
    } else {
      revealT[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
