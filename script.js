window.onload = function() {
    const bgMusic = document.getElementById('bgMusic1');
    bgMusic.volume = 0.5; // Set volume to maximum
    bgMusic.muted = false; // Ensure it's not muted
    bgMusic.play().catch((error) => {
        console.error('Autoplay failed:', error);
    });
};

const noBtn = document.getElementById("noBtn");
const imageContainer = document.getElementById("image-container");
const images = [
    "wabwabbb/wabwabbb1.jpg",
    "wabwabbb/wabwabbb3.jpg",
    "wabwabbb/wabwabbb4.jpg",
    "wabwabbb/wabwabbb5.jpg",
    "wabwabbb/wabwabbb6.jpg",
    "wabwabbb/wabwabbb7.jpg",
    "wabwabbb/wabwabbb8.jpg",
    "wabwabbb/wabwabbb9.jpg",
    "wabwabbb/wabwabbb10.jpg",
    "wabwabbb/wabwabbb14.jpg",
    "wabwabbb/wabwabbb15.jpg",
    "wabwabbb/wabwabbb16.jpg",
    "wabwabbb/wabwabbb17.jpg",
    "wabwabbb/wabwabbb19.jpg",
    "wabwabbb/wabwabbb21.jpg",
    "wabwabbb/wabwabbb22.jpg",
    "wabwabbb/wabwabbb23.jpg",
    "wabwabbb/wabwabbb24.jpg",
    "wabwabbb/wabwabbb25.jpg",
    "wabwabbb/wabwabbb26.jpg",
    "wabwabbb/wabwabbb27.jpg",
    "wabwabbb/wabwabbb28.jpg",
    "wabwabbb/wabwabbb29.jpg",
    "wabwabbb/wabwabbb30.jpg",
    "wabwabbb/wabwabbb31.jpg",
];


let debounceTimer = null;

function createImage(x, y) {
    const existingImages = imageContainer.getElementsByTagName("img");
    for (let i = 0; i < existingImages.length; i++) {
        if (
            Math.abs(existingImages[i].offsetLeft - x) < 10 &&
            Math.abs(existingImages[i].offsetTop - y) < 10
        ) {
            existingImages[i].remove(); 
        }
    }


    const img = document.createElement("img");
    const randomImage = images[Math.floor(Math.random() * images.length)];
    img.src = randomImage;
    img.style.position = "absolute";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.width = "100px";
    img.style.height = "auto";
    img.style.opacity = "0"; 
    img.style.pointerEvents = "none";

    imageContainer.appendChild(img);

    setTimeout(() => {
        img.style.transition = "opacity 1s"; 
        img.style.opacity = "1"; 
    }, 0);

    setTimeout(() => {
        img.remove();
    }, 2000); 
}

document.addEventListener("mousemove", (event) => {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
        createImage(event.pageX, event.pageY);
    }, 50);
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", () => {
    alert("You can't say no! 🥰");
});

document.getElementById("yesBtn").addEventListener("click", () => {
    window.location.href = "choices.html";
});



