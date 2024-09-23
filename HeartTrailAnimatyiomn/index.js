const bodyE1 = document.querySelector("body")
bodyE1.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
   const spanE1 = document.createElement("span")
   spanE1.style.left= xPos + "px";
   spanE1.style.top = yPos + "px"
   const size = Math.random()*100;
   spanE1.style.width = size + "px",
   spanE1.style.height = size + "px",
   bodyE1.appendChild(spanE1);
   setTimeout(()=>{
spanE1.remove();
   },1000)
})

const music = document.getElementById("background-music");

bodyE1.addEventListener("click", () => {
   if (music.paused) {
       music.play();
   } else {
       music.pause();
   }
});


// const bodyE1 = document.querySelector("body");

// // Array of image paths
// const imagePaths = [
//     "pho",
//     "path/to/your/heart2.png",
//     // "path/to/your/heart3.png",
//     // "path/to/your/heart4.png",
//     // "path/to/your/heart5.png",
//     // "path/to/your/heart6.png",
//     // "path/to/your/heart7.png",
//     // "path/to/your/heart8.png",
//     // "path/to/your/heart9.png",
//     // "path/to/your/heart10.png"
// ];

// bodyE1.addEventListener("mousemove", (event) => {
//     const xPos = event.offsetX;
//     const yPos = event.offsetY;

//     const imgE1 = document.createElement("img");
    
//     // Randomly select an image from the array
//     const randomIndex = Math.floor(Math.random() * imagePaths.length);
//     imgE1.src = imagePaths[randomIndex]; // Set the source to the randomly selected image
    
//     imgE1.style.position = "absolute";
//     imgE1.style.left = xPos + "px";
//     imgE1.style.top = yPos + "px";
//     imgE1.style.width = `${Math.random() * 100}px`; // Random width
//     imgE1.style.height = `${Math.random() * 100}px`; // Random height
//     imgE1.style.transition = "transform 1s ease, opacity 1s ease"; // Animation effect
//     imgE1.style.opacity = 1;

//     // Append the image to the body
//     bodyE1.appendChild(imgE1);

//     // Animate the heart size and fade out
//     setTimeout(() => {
//         imgE1.style.transform = "scale(1.5)"; // Scale effect
//         imgE1.style.opacity = 0; // Fade out
//     }, 0);

//     // Remove the element after animation
//     setTimeout(() => {
//         imgE1.remove();
//     }, 1000);
// });

// const music = document.getElementById("background-music");

// bodyE1.addEventListener("click", () => {
//     if (music.paused) {
//         music.play();
//     } else {
//         music.pause();
//     }
// });
