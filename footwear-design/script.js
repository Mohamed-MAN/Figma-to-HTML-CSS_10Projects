// Get elements
const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

// Total number of slides
const SLIDES_COUNT = slides.length;

let current_slide = 0;

// Event listener for the left arrow
left.addEventListener("click", () => {
    current_slide--;
    if (current_slide < 0) {
        current_slide = SLIDES_COUNT - 1; // Loop back to the last slide
    }
    updateCarousel();
});

// Event listener for the right arrow
right.addEventListener("click", () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0; // Loop back to the first slide
    }
    updateCarousel();
});

// Function to update carousel position and background color
function updateCarousel() {
    // Shift carousel to show the current slide
    carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;

    // Change the background color based on the current slide's data-bg
    const bgColor = slides[current_slide].getAttribute("data-bg");
    document.body.style.background = `#${bgColor}`;
}
