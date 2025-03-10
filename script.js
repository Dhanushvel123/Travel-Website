// Function to scroll the slider
function scrollSlider(direction) {
    document.getElementById("categories-slider").scrollBy({
        left: direction,
        behavior: "smooth"
    });
}
