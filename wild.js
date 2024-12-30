// arrow
let arrow = document.getElementById('arrow')
window.onscroll = function(){
    if(scrollY > 500){
        arrow.style.display = 'block'
    }
    else{
        arrow.style.display = 'none'
    }
}