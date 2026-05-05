document.addEventListener("DOMContentLoaded", () => {
  let slides = document.querySelectorAll(".hero-bg");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  // Start with the first slide visible
  if (slides.length > 0) {
    slides[0].classList.add("active");
  }

  // Rotate every 4 seconds
  setInterval(showNextSlide, 4000);
});

     
