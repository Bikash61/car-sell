// JavaScript for dynamic form input background colors
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.backgroundColor = 'yellow';
  });
  input.addEventListener('blur', () => {
    input.style.backgroundColor = 'white';
  });
});

// Button hover effect
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'lightblue';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#003366';
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector(".navbar-menu");
  
    navbarToggler.addEventListener("click", function() {
      navbarMenu.classList.toggle("active");
    });
  });
  