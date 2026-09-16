const gallery = document.getElementById("landscapeGallery");

const totalPhotos = 37;


// =========================================
// PHOTO DATA
// =========================================

const photos = [];

for (let i = 1; i <= totalPhotos; i++) {

    photos.push({
        number: i,
        image: `images/images/landscape/ls${i}.webp`,
        large: `images/images/landscape/large/ls${i}.webp`
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
    lightboxLocation.textContent = "";

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
    lightboxLocation.textContent = "";

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
    lightboxLocation.textContent = "";

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
