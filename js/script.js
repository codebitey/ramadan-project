let prevScrollpos = window.pageYOffset;
const topTimeSection = document.getElementById("topTimeSection");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 90) {
    topTimeSection.classList.add("fixed");
    topTimeSection.classList.remove("sticky");
  } else {
    topTimeSection.classList.remove("fixed");
    topTimeSection.classList.add("sticky");
  }

  prevScrollpos = currentScrollPos;
}
