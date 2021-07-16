let navToggle = document.querySelector('#navToggle');
let nav = document.querySelector('#nav');
navToggle.onclick = function (e) {
    e.preventDefault();
    nav.classList.toggle('show');
    document.body.classList.toggle('show');
};


const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}



















