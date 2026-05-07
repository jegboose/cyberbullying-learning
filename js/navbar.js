// navbar.js — handles the mobile hamburger menu toggle
//
// This script runs AFTER the HTML has loaded (the <script> tag is at the
// bottom of <body>, so all elements already exist when this code runs).

const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1       = document.getElementById('bar1');
const bar2       = document.getElementById('bar2');
const bar3       = document.getElementById('bar3');

// "menuOpen" tracks whether the menu is currently visible
let menuOpen = false;

menuBtn.addEventListener('click', function () {

  menuOpen = !menuOpen; // flip the true/false value each click

  if (menuOpen) {
    // Show the mobile menu by removing Tailwind's "hidden" class
    mobileMenu.classList.remove('hidden');
    // Update the aria attribute so screen readers know the menu is open
    menuBtn.setAttribute('aria-expanded', 'true');
    // Animate the three bars into an X shape
    bar1.classList.add('rotate-45', 'translate-y-2');
    bar2.classList.add('opacity-0');
    bar3.classList.add('-rotate-45', '-translate-y-2');
  } else {
    // Hide the menu again
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    // Reverse the X animation back to three straight lines
    bar1.classList.remove('rotate-45', 'translate-y-2');
    bar2.classList.remove('opacity-0');
    bar3.classList.remove('-rotate-45', '-translate-y-2');
  }

});
