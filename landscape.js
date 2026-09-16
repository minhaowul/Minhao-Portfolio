```javascript
const gallery = document.getElementById("landscapeGallery");

const totalPhotos = 37;


// =========================================
// PHOTO DATA
// =========================================

const locations = [
    "Beijing",     // 1
    "Beijing",     // 2
    "Qingdao",     // 3
    "Beijing",     // 4
    "Beijing",     // 5
    "Macau",       // 6
    "Macau",       // 7
    "Huizhou",     // 8
    "Shenzhen",    // 9
    "Hong Kong",   // 10
    "Hong Kong",   // 11
    "Macau",       // 12
    "Zhuhai",      // 13
    "Huizhou",     // 14
    "Huizhou",     // 15
    "Huizhou",     // 16
    "Hong Kong",   // 17
    "Hong Kong",   // 18
    "Huizhou",     // 19
    "Beijing",     // 20
    "Qingdao",     // 21
    "Huangshan",   // 22
    "Beijing",     // 23
    "Qingdao",     // 24
    "Huangshan",   // 25
    "Beijing",     // 26
    "Beijing",     // 27
    "Dali",        // 28
    "Hong Kong",   // 29
    "Hong Kong",   // 30
    "Shenzhen",    // 31
    "Dali",        // 32
    "Dali",        // 33
    "Macau",       // 34
    "Beijing",     // 35
    "Beijing",     // 36
    "Hong Kong"    // 37
];


const photos = [];

for (let i = 1; i <= totalPhotos; i++) {

    photos.push({
    number: i,

    image:
        `https://raw.githubusercontent.com/minhaowul/Minhao-Portfolio/refs/heads/main/images/images/landscape/ls${i}.webp`,

    large:
        `https://raw.githubusercontent.com/minhaowul/Minhao-Portfolio/refs/heads/main/images/images/landscape/large/ls${i}.webp`,

    location: locations[i - 1]
});
}


// =========================================
// PRELOAD NORMAL IMAGES
// =========================================

const preloadPromises = photos.map(photo => {

    const img = new Image();

    img.src = photo.image;

    return new Promise(resolve => {

        if (img.complete) {
            resolve();
        } else {
            img.onload = resolve;
            img.onerror = resolve;
        }

    });

});


// =========================================
// PRELOAD LARGE IMAGES
// =========================================

photos.forEach(photo => {

    const largeImg = new Image();

    largeImg.src = photo.large;

});


// =========================================
// CREATE GALLERY
// =========================================

Promise.all(preloadPromises).then(() => {

    photos.forEach((photo, index) => {

        const photoElement = document.createElement("div");

        photoElement.className = "landscape-photo";

        photoElement.innerHTML = `
            <img
                src="${photo.image}"
                alt="Landscape photography ${photo.number}"
            >

            <div class="landscape-location">
                ${photo.location}
            </div>
        `;

        photoElement.addEventListener("click", () => {
            openLightbox(index);
        });

        gallery.appendChild(photoElement);

    });

});


// =========================================
// LIGHTBOX
// =========================================

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");

const lightboxPrev = document.getElementById("lightboxPrev");

const lightboxNext = document.getElementById("lightboxNext");

const fullscreenButton = document.getElementById("fullscreenButton");

const lightboxDate = document.getElementById("lightboxDate");

const lightboxLocation = document.getElementById("lightboxLocation");

let currentIndex = 0;


// =========================================
// OPEN
// =========================================

function openLightbox(index) {

    currentIndex = index;

    lightboxImage.src = photos[currentIndex].large;

    lightboxDate.textContent = "";

    lightboxLocation.textContent =
        photos[currentIndex].location;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


// =========================================
// CLOSE
// =========================================

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

    if (document.fullscreenElement) {
        document.exitFullscreen();
    }

}


// =========================================
// PREVIOUS
// =========================================

function showPrevious() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    }

    lightboxImage.src = photos[currentIndex].large;

    lightboxDate.textContent = "";

    lightboxLocation.textContent =
        photos[currentIndex].location;

}


// =========================================
// NEXT
// =========================================

function showNext() {

    currentIndex++;

    if (currentIndex >= photos.length) {
        currentIndex = 0;
    }

    lightboxImage.src = photos[currentIndex].large;

    lightboxDate.textContent = "";

    lightboxLocation.textContent =
        photos[currentIndex].location;

}


// =========================================
// BUTTONS
// =========================================

lightboxClose.addEventListener("click", closeLightbox);

lightboxPrev.addEventListener("click", showPrevious);

lightboxNext.addEventListener("click", showNext);


// =========================================
// FULLSCREEN
// =========================================

fullscreenButton.addEventListener("click", event => {

    event.stopPropagation();

    if (!document.fullscreenElement) {

        lightbox.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

});


// =========================================
// CLICK OUTSIDE
// =========================================

lightbox.addEventListener("click", event => {

    if (
        !event.target.closest(".lightbox-content") &&
        !event.target.closest(".lightbox-arrow") &&
        !event.target.closest(".lightbox-close") &&
        !event.target.closest(".lightbox-fullscreen")
    ) {

        closeLightbox();

    }

});


// =========================================
// KEYBOARD
// =========================================

document.addEventListener("keydown", event => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {
        showPrevious();
    }

    if (event.key === "ArrowRight") {
        showNext();
    }

});
```
