'use strict';

document.getElementById("img-wrapper").addEventListener("click", toggleNav);

function toggleNav() {
  var nav = document.getElementById("main-nav");
  var className = nav.getAttribute("class");
  if(className == "nav-right nav-menu") {
      nav.className = "nav-right nav-menu active";
  } else {
      nav.className = "nav-right nav-menu";
  }
}