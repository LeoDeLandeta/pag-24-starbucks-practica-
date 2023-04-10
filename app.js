function imgSlider(anything){
    document.querySelector('.starbucks').src= anything;
}
function changeCircleColor(color){
    const cicle = document.querySelector('.cicle');
    cicle.style.background = color;
}


function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navegation = document.querySelector('.navbar');
    toggleMenu.classList.toggle('active');
    navegation.classList.toggle('active');
}

window.onclick=()=>{
    toggleMenu.classList.remove('active');
    navegation.classList.remove('active');
}