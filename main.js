let elems = document.querySelectorAll(".elem");
elems.forEach((elem) => {
  elem.addEventListener("mouseenter", function () {
    elem.childNodes[1].style.opacity = 0;
    elem.childNodes[3].style.opacity = 1;
    elem.childNodes[3].style.transform = "translateX(-25px)";
  });
  elem.addEventListener("mouseleave", function () {
    elem.childNodes[1].style.opacity = 1;
    elem.childNodes[3].style.opacity = 0;
    elem.childNodes[3].style.transform = "translateX(25px)";
  });
});
