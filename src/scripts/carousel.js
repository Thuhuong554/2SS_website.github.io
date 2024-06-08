let slideIndex = 0;
let autoSlideInterval;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bg-gray-700");
    dots[i].classList.add("bg-gray-400");
  }

  slides[slideIndex].classList.remove("hidden");
  dots[slideIndex].classList.remove("bg-gray-400");
  dots[slideIndex].classList.add("bg-gray-700");
}

function plusSlides(n) {
  clearInterval(autoSlideInterval);
  slideIndex += n;
  showSlides();
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(autoSlideInterval);
  slideIndex = n - 1;
  showSlides();
  startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex++;
    showSlides();
  }, 3000);
}

// Initial setup
showSlides();
startAutoSlide();



let bestSellerIndex = 0;
let autoBestSellerSlideInterval;

function showBestSellerSlides(n) {
  let i;
  let slides = document.getElementsByClassName("best-seller-slide");
  let dots = document.getElementsByClassName("best_seller_dot");

  if (n >= slides.length) { bestSellerIndex = 0; }
  if (n < 0) { bestSellerIndex = slides.length - 1; }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bg-gray-700");
    dots[i].classList.add("bg-gray-400");
  }

  slides[bestSellerIndex].classList.remove("hidden");
  dots[bestSellerIndex].classList.remove("bg-gray-400");
  dots[bestSellerIndex].classList.add("bg-gray-700");
}

function plusBestSellerSlides(n) {
  clearInterval(autoBestSellerSlideInterval);
  showBestSellerSlides(bestSellerIndex += n);
  startAutoBestSellerSlide();
}

function currentBestSellerSlide(n) {
  clearInterval(autoBestSellerSlideInterval);
  showBestSellerSlides(bestSellerIndex = n);
  startAutoBestSellerSlide();
}

function startAutoBestSellerSlide() {
  autoBestSellerSlideInterval = setInterval(() => {
    showBestSellerSlides(bestSellerIndex += 1);
  }, 3000);
}

// Initial setup
showBestSellerSlides(bestSellerIndex);
startAutoBestSellerSlide();
