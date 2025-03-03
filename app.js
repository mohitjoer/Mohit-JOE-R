let theme = document.querySelector('#mode');
theme.addEventListener('click', () => {
  console.log('clicked');
  this.document.innerhtml = "Hello";
});



var typed = new Typed('.text', {
    strings: ["Frontend Developer","Youtuber","Web Developer"],
    typeSpeed: 80,
    loop: true
  });