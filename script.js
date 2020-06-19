const navbar = document.querySelector(".nav");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");

    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    this.setTimeout(function () {
      navbar.style.transform = "translateY(0px)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
