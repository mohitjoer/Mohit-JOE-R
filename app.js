let theme = document.querySelector('#mode');
theme.addEventListener('click', () => {
  console.log('clicked');
  let logo = document.querySelector('#logo');
  let bgtheme = document.querySelector(':root')
  if (logo.getAttribute('name') == 'sunny') {
    logo.setAttribute('name', 'moon');
    bgtheme.style.setProperty('--body-color', 'white');
    bgtheme.style.setProperty('--text-color', 'black');
  } else {
    logo.setAttribute('name', 'sunny');
    bgtheme.style.setProperty('--body-color', 'black');
    bgtheme.style.setProperty('--text-color', 'white');
  }
});


let home = document.querySelector('#home');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Home section is in view');
    }
  });
});
observer.observe(home);

var typed = new Typed('.text', {
    strings: ["Frontend Developer","Youtuber","Web Developer"],
    typeSpeed: 80,
    loop: true
  });