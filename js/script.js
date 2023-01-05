"use strict";

document.addEventListener('DOMContentLoaded', function () {
  //TOGGLE MENU NAV VIA ADDING/REMOVING A DATA-ATTRIBUTE
  var menubutton = document.querySelector('.menu-button');
  var menunav = document.querySelector('.toggle-nav');
  menubutton.addEventListener('click', function () {
    if (menunav.getAttribute('data-navstate') === 'open') {
      menunav.setAttribute('data-navstate', 'closed');
    } else {
      menunav.setAttribute('data-navstate', 'open');
    }
  }); //TOGGLE ACCORDIAN VIA ADDING/REMOVING A CLASS

  var acc = document.querySelectorAll('.accordian');
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].getElementsByTagName('h4')[0].onclick = function () {
      this.parentElement.classList.toggle("open");
    };
  }
});