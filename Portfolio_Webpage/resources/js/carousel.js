// JavaScript for Carousel
document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
  
    function goToSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
        slide.style.display = (i === index) ? 'block' : 'none';
      });
      currentIndex = index;
    }
  
    // // Auto-scrolling functionality
    // function autoScroll() {
    //   currentIndex = (currentIndex + 1) % totalSlides;
    //   goToSlide(currentIndex);
    // }
    // setInterval(autoScroll, 5000); // Change slides every 5 seconds
  
    // Manual navigation
    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
      goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
    });
    document.querySelector('.carousel-control-next').addEventListener('click', () => {
      goToSlide((currentIndex + 1) % totalSlides);
    });
  
    // Initialize carousel
    goToSlide(0);
  });