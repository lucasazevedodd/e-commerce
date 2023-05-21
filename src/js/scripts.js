let currentSlide = 0;

function toggleMenu() {
  document
    .querySelector(".main-wrapper")
    .classList.toggle("main-wrapper--opened");
}

function setActiveSlide(num) {
  currentSlide = num;
  const slidesContainer = document.querySelector(".main-carousel__list");
  const slides = slidesContainer.querySelectorAll("li");
  const activeSlide = slidesContainer.querySelector(
    ".main-carousel__list__item--active"
  );
  const bullets = document.querySelectorAll(".carousel-indicator button");
  const activeBullet = document.querySelector(
    ".carousel-indicator__bullet--active"
  );

  slidesContainer.style.transform = `translateX(-${num * 25}%)`;

  activeSlide.classList.remove("main-carousel__list__item--active");
  activeSlide.classList.add("main-carousel__list__item");

  slides[num].classList.remove("main-carousel__list__item");
  slides[num].classList.add("main-carousel__list__item--active");

  activeBullet.classList.remove("carousel-indicator__bullet--active");
  activeBullet.classList.add("carousel-indicator__bullet");

  bullets[num].classList.remove("carousel-indicator__bullet");
  bullets[num].classList.add("carousel-indicator__bullet--active");
}

window.onload = function () {
  let numOfSlides = Array.from(
    document.querySelectorAll(".carousel-indicator button")
  ).length;

  window.setInterval(function () {
    setActiveSlide(++currentSlide % numOfSlides);
  }, 5000);
};
