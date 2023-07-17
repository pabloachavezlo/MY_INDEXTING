const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');
const images = sliderWrapper.querySelectorAll('div');
const imageWidth = images[0].offsetWidth;
let currentIndex = 0;

function slideNext() {
  currentIndex = (currentIndex + 1) % images.length;
  sliderWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

setInterval(slideNext, 12000);