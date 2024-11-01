document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = "0%"; // Reset width to 0%
                
                // Delay to restart the animation
                setTimeout(() => {
                    const targetWidth = entry.target.getAttribute("data-target-width");
                    entry.target.style.width = targetWidth; // Animate to target width
                }, 50); // 50ms delay for reset effect
            }
        });
    });

    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = "0%"; // Start with 0% width for animation
        bar.setAttribute("data-target-width", targetWidth); // Store target width
        observer.observe(bar);
    });
});


// JavaScript for toggling skill containers
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("sec3-switching-button");
    const skillContainer1 = document.querySelector(".skill-blocks-container-1");
    const skillContainer2 = document.querySelector(".skill-blocks-container-2");
    const skillContainer21 = document.querySelector(".skill-blocks-container-2-1");
    const skillContainer22 = document.querySelector(".skill-blocks-container-2-2");

    // Initialize the state
    let showAlternateSkills = false;

    // Hide alternate containers on load for correct alignment
    skillContainer21.style.display = "none";
    skillContainer22.style.display = "none";

    toggleButton.addEventListener("click", function () {
        showAlternateSkills = !showAlternateSkills;

        if (showAlternateSkills) {
            skillContainer1.style.display = "none";
            skillContainer2.style.display = "none";
            skillContainer21.style.display = "block";
            skillContainer22.style.display = "block";
            toggleButton.textContent = "Back to Programming"; // Change button text
        } else {
            skillContainer1.style.display = "block";
            skillContainer2.style.display = "block";
            skillContainer21.style.display = "none";
            skillContainer22.style.display = "none";
            toggleButton.textContent = "Any other skills?"; // Change button text back
        }
    });
});

// Wait for the entire page to load
window.addEventListener('load', function() {
    const pageLoader = document.getElementById('page-loader');
    // Add the 'hidden' class to start the fade-out transition
    pageLoader.classList.add('hidden');
    
    // Remove the loader from the DOM after the transition
    pageLoader.addEventListener('transitionend', function() {
        pageLoader.style.display = 'none';
    });
});
