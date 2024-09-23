const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover", (event) => {
    const rect = btnE1.getBoundingClientRect(); // Get the button's bounding box
    const x = event.clientX - rect.left; // Calculate X position relative to button
    const y = event.clientY - rect.top; // Calculate Y position relative to button

    // Set custom properties for the ripple effect
    btnE1.style.setProperty("--xPos", `${x}px`);
    btnE1.style.setProperty("--yPos", `${y}px`);
});

// Optional: You can also trigger the ripple effect on click
btnE1.addEventListener("click", (event) => {
    const rect = btnE1.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    btnE1.style.setProperty("--xPos", `${x}px`);
    btnE1.style.setProperty("--yPos", `${y}px`);
});
