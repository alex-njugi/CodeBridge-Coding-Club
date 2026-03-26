let currentSlide = 0;
let slideTimer;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots button');

    if (!slides.length) {
        return;
    }

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide(step) {
    showSlide(currentSlide + step);
    resetTimer();
}

function goToSlide(index) {
    showSlide(index);
    resetTimer();
}

function startSlider() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) {
        return;
    }

    showSlide(0);
    slideTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4500);
}

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4500);
}

window.addEventListener('DOMContentLoaded', startSlider);
