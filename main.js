// accessing the target element in the navbar
// header js
var navClicks = document.querySelectorAll("li a");
function activeClick(navname) {
  for (var navClick of navClicks) {
    navClick.classList.remove("active");
  }
  var button = event.currentTarget;
  button.classList.add("active");
}
//Responsive
var navList = document.querySelector(".nav ul");
var toggleMenue = document.querySelector(".nav .toggle-menue");
function viewTaps() {
  navList.classList.toggle("nav-ul");
}
// Home js
var bullets = document.querySelectorAll("ul.bullets li");
var homeImages = document.querySelectorAll(".home img");
function movebk(nextimg) {
  for (var bullet of bullets) {
    bullet.classList.remove("active");
  }
  for (var homeImage of homeImages) {
    homeImage.classList.remove("active-img");
  }
  var movebtn = event.currentTarget;
  movebtn.classList.add("active");
  document.getElementById(nextimg).classList.add("active-img");
}

// progress-bar js
document.addEventListener('DOMContentLoaded', function () {
  const progressSection = document.querySelector('.skills');
  const progressBars = document.querySelectorAll('.prog-holder .prog span');

  function checkProgress() {
    if (window.scrollY >= progressSection.offsetTop - 200) {
      progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-progress');
      });
      window.removeEventListener('scroll', checkProgress);
    }
  }

  window.addEventListener('scroll', checkProgress);
  checkProgress(); // Initial check in case the section is already in view
});
