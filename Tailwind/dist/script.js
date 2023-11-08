const imageUrls = [
    "your-image.jpg",
    "your-image1.jpg",
    "your-image2.jpg",
    "your-image3.jpg",
    "your-image4.jpg"
];

let currentIndex = 0;
const productImage = document.getElementById("productImage");

function changeImage(index) {
    currentIndex = index;
    productImage.src = imageUrls[index];
}

document.getElementById("addToCart").addEventListener("click", function () {
    const quantity = parseInt(document.getElementById("quantity").value);
    const cartCount = document.getElementById("cartCount");
    const currentCount = parseInt(cartCount.innerText);
    cartCount.innerText = currentCount + quantity;
});

function showDetails(section) {
    const sections = ["description", "harvest", "users"];
    for (const sec of sections) {
        const element = document.getElementById(sec);
        if (section === sec) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}
// Automatic image carousel


function startCarousel() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        changeImage(currentIndex);
    }, 3000);
}

startCarousel();


document.getElementById("addToCart").addEventListener("click", function () {
    const quantity = parseInt(document.getElementById("quantity").value);
    const cartCount = document.getElementById("cartCount");
    const currentCount = parseInt(cartCount.innerText);
    cartCount.innerText = currentCount + quantity;
});

function showDetails(section) {
    const sections = ["description", "harvest", "users"];
    for (const sec of sections) {
        const element = document.getElementById(sec);
        if (section === sec) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

// Implement automatic image carousel
let interval;

function startCarousel() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        changeImage(currentIndex);
    }, 3000);
}

startCarousel();

// Add a window resize listener to handle the layout
window.addEventListener("resize", () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        clearInterval(interval);
    } else {
        startCarousel();
    }
});
