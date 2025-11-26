// References Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const indicators = Array.from(document.querySelectorAll('.indicator'));

    let currentIndex = 0;

    // Set initial state
    updateCarousel();

    // Next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    // Previous button
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // Indicator buttons
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Auto-play (optional - uncomment to enable)
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % slides.length;
    //     updateCarousel();
    // }, 5000); // Change slide every 5 seconds

    function updateCarousel() {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Add active class to current slide
        slides[currentIndex].classList.add('active');

        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Move track
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        updateCarousel();
    });
});
