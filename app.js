let theme = document.querySelector('#mode');
theme.addEventListener('click', () => {
  console.log('clicked');
  let logo = document.querySelector('#logo');
  if (logo.getAttribute('name')=='sunny'){
    logo.setAttribute('name','moon')}
    else{
      logo.setAttribute('name','sunny')
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