const imageUrls = [
    "your-image.jpg",
    "your-image1.jpg",
    "your-image2.jpg",
    "your-image3.jpg"
];

let currentIndex = 0;
const productImage = document.getElementById("productImage");
const carouselDots = document.getElementById("carouselDots");

function changeImage(index) {
    currentIndex = index;
    productImage.src = imageUrls[index];
    updateDots();
}

function updateDots() {
    carouselDots.innerHTML = "";
    for (let i = 0; i < imageUrls.length; i++) {
        const dot = document.createElement("span");
        dot.className = "h-2 w-2 md:w-4 md:h-4 md:mx-1 rounded-full cursor-pointer bg-gray-300";
        dot.addEventListener("click", () => changeImage(i));
        if (i === currentIndex) {
            dot.classList.add("bg-blue-500");
        }
        carouselDots.appendChild(dot);
    }
}

function startCarousel() {
    setInterval(() => {
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

// Check if the screen is in full size or not
const isFullSize = window.innerWidth >= 768;

function toggleCarousel(isFullSize) {
    if (isFullSize) {
        updateDots();
        startCarousel();
    }
}

toggleCarousel(isFullSize);

// Add a window resize listener to handle the toggle
window.addEventListener("resize", () => {
    const isFullSizeNow = window.innerWidth >= 768;
    toggleCarousel(isFullSizeNow);
    const rightDiv = document.querySelector(".w-1/3");
    if (isFullSizeNow) {
        rightDiv.classList.remove("hidden");
    } else {
        rightDiv.classList.add("hidden");
    }
});
