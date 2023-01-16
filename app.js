const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelectorAll(".carousel-slide img");

// buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter
let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// button Listener
nextBtn.addEventListener("click", () => {
    if (counter >= carouselImg.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImg[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (carouselImg[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
});
