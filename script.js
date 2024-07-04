  // Add a click event listener to the button
  document.getElementById('scroll-to-top-button').addEventListener('click', function() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// animated text

document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.getElementById("animated-text");
  
  setTimeout(() => {
      animatedText.style.opacity = "1";
      animatedText.style.transform = "translateX(0)";
  }, 500);

  window.addEventListener("beforeunload", function () {
      animatedText.style.opacity = "0";
      animatedText.style.transform = "translateX(-100%)";
  });

  window.addEventListener("load", function () {
      // Get the initial text content from HTML
      const initialText = animatedText.innerHTML;
      
      // Set the initial text as the content
      animatedText.innerHTML = initialText;

      animatedText.style.opacity = "1";
      animatedText.style.transform = "translateX(0)";
  });
});


// Home page carousal

const carousels = document.querySelectorAll('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentCarouselIndex = 0;
let intervalId;

function startCarouselAutoRotation() {
  intervalId = setInterval(() => {
    currentCarouselIndex = (currentCarouselIndex + 1) % carousels.length;
    updateCarouselVisibility();
  }, 3500); // Change 5000 to the desired interval in milliseconds (e.g., 5000 milliseconds = 5 seconds)
}
function updateCarouselVisibility() {
  carousels.forEach((carousel, index) => {
    if (index === currentCarouselIndex) {
      carousel.style.display = 'block';
    } else {
      carousel.style.display = 'none';
    }
  });
}

// Initially, show the first carousel and start auto rotation
updateCarouselVisibility();
startCarouselAutoRotation();