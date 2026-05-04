
      let slides = document.querySelectorAll(".hero-bg");
      let current = 0;

      function showNextSlide() {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
      }

      setInterval(showNextSlide, 4000); // change every 4 seconds
    
