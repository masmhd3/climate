// catch the element
let btn = document.getElementById('btn')
let ul = document.getElementById('ul')

// add event listener
btn.addEventListener('click', function(){
    ul.classList.toggle('apper')
    btn.classList.toggle('fa-x')
})

// nav animation
let nav = document.getElementById('nav')
window.onscroll = function(){
    if(window.scrollY > 50){
        nav.style.height = '80px'
        if(screen.width < 992){
            ul.style.top = '80px'
        }
    }
    else{
        nav.style.height = '105px';
            ul.style.top = '105px'
    }
}


// protfolio
let element = document.getElementById('element');
let cover = document.getElementById('cover-el');

element.onclick = function() {
    cover.classList.toggle('active');
};

// animation of background
