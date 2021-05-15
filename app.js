const images = document.querySelectorAll('.slider-line img');
const sliderList = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderList.style.width = width * images.length + 'px';
    for(i = 0; i < images.length; i++) {
        images[i].style.width = width + 'px';
        images[i].style.height = 'auto';
    }
    slider();
}

function slider() {
    sliderList.style.transform = `translate(-${width * count}px)`;
}

window.onresize = init;

init();

document.querySelector('.prev').onclick = function() {
    count--;
    if (count < 0) count = images.length - 1;
    slider();
}

document.querySelector('.next').onclick = function() {
    count++;
    slider();
    if (count >= images.length) count = 0;
}

