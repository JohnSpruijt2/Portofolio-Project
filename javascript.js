function scrollToThing(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}
function scrollToTop() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 1) {
    navbar.classList.add("sticky")
    document.getElementById("navLogo").style.display = "inline-block"
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("navLogo").style.display = "none"
  }
} 