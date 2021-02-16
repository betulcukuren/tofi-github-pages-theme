'use strict';
window.onload = function() {
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        const toggle = document.getElementById('toggle');
        toggle.checked = true;
        const toggle_button =  document.getElementById('toggle-button');
        toggle_button.classList.add('right');
      }
  }
}

function toggle() {
  const toggle = document.getElementById('toggle');
  const toggle_button =  document.getElementById('toggle-button');
  console.log(toggle.checked);
  if(toggle.checked){
    toggle_button.classList.add('right');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); //add this
  } else {
    toggle_button.classList.remove('right');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); //add this
  }
};






