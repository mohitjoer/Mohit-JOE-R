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



var typed = new Typed('.text', {
    strings: ["Frontend Developer","Youtuber","Web Developer"],
    typeSpeed: 80,
    loop: true
  });