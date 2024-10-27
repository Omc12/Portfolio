// scrollReveal.js (Optimized with Intersection Observer)

// Function to handle visibility
function handleIntersection(entries, observer, revealClass) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(revealClass);
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}

// Initialize Intersection Observers for different reveal types
document.addEventListener("DOMContentLoaded", function() {
    // Vertical Reveal
    const verticalElements = document.querySelectorAll(".scroll-reveal");
    const verticalObserver = new IntersectionObserver((entries, observer) => {
        handleIntersection(entries, observer, "scroll-reveal-visible");
    }, { threshold: 0.1 });

    verticalElements.forEach(el => verticalObserver.observe(el));

    // Right to Left Reveal
    const rightLeftElements = document.querySelectorAll(".scroll-reveal-right-left");
    const rightLeftObserver = new IntersectionObserver((entries, observer) => {
        handleIntersection(entries, observer, "scroll-reveal-right-left-visible");
    }, { threshold: 0.1 });

    rightLeftElements.forEach(el => rightLeftObserver.observe(el));

    // Left to Right Reveal
    const leftRightElements = document.querySelectorAll(".scroll-reveal-left-right");
    const leftRightObserver = new IntersectionObserver((entries, observer) => {
        handleIntersection(entries, observer, "scroll-reveal-left-right-visible");
    }, { threshold: 0.1 });

    leftRightElements.forEach(el => leftRightObserver.observe(el));

    // Optional Up to Down Reveal
    const upDownElements = document.querySelectorAll(".scroll-reveal-up-down");
    const upDownObserver = new IntersectionObserver((entries, observer) => {
        handleIntersection(entries, observer, "scroll-reveal-visible-up-down");
    }, { threshold: 0.1 });

    upDownElements.forEach(el => upDownObserver.observe(el));
});
