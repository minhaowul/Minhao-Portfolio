const gallery = document.getElementById("automobileGallery");

const loading = document.getElementById("automobileLoading");

const totalPhotos = 82;


// =========================================
// PHOTO DATA
// =========================================

const photos = [
    { number: 1, image: "images/automobile/ph1.webp", large: "images/automobile/large/ph1.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 2, image: "images/automobile/ph2.webp", large: "images/automobile/large/ph2.webp", date: "September 3, 2026", location: "Beijing, China" },

    { number: 3, image: "images/automobile/ph3.webp", large: "images/automobile/large/ph3.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 4, image: "images/automobile/ph4.webp", large: "images/automobile/large/ph4.webp", date: "May 3, 2026", location: "Beijing, China" },

    { number: 5, image: "images/automobile/ph5.webp", large: "images/automobile/large/ph5.webp", date: "December 24, 2025", location: "Beijing, China" },

    { number: 6, image: "images/automobile/ph6.webp", large: "images/automobile/large/ph6.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 7, image: "images/automobile/ph7.webp", large: "images/automobile/large/ph7.webp", date: "September 3, 2026", location: "Beijing, China" },

    { number: 8, image: "images/automobile/ph8.webp", large: "images/automobile/large/ph8.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 9, image: "images/automobile/ph9.webp", large: "images/automobile/large/ph9.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 10, image: "images/automobile/ph10.webp", large: "images/automobile/large/ph10.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 11, image: "images/automobile/ph11.webp", large: "images/automobile/large/ph11.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 12, image: "images/automobile/ph12.webp", large: "images/automobile/large/ph12.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 13, image: "images/automobile/ph13.webp", large: "images/automobile/large/ph13.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 14, image: "images/automobile/ph14.webp", large: "images/automobile/large/ph14.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 15, image: "images/automobile/ph15.webp", large: "images/automobile/large/ph15.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 16, image: "images/automobile/ph16.webp", large: "images/automobile/large/ph16.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 17, image: "images/automobile/ph17.webp", large: "images/automobile/large/ph17.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 18, image: "images/automobile/ph18.webp", large: "images/automobile/large/ph18.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 19, image: "images/automobile/ph19.webp", large: "images/automobile/large/ph19.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 20, image: "images/automobile/ph20.webp", large: "images/automobile/large/ph20.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 21, image: "images/automobile/ph21.webp", large: "images/automobile/large/ph21.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 22, image: "images/automobile/ph22.webp", large: "images/automobile/large/ph22.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 23, image: "images/automobile/ph23.webp", large: "images/automobile/large/ph23.webp", date: "May 3, 2026", location: "Beijing, China" },

    { number: 24, image: "images/automobile/ph24.webp", large: "images/automobile/large/ph24.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 25, image: "images/automobile/ph25.webp", large: "images/automobile/large/ph25.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 26, image: "images/automobile/ph26.webp", large: "images/automobile/large/ph26.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 27, image: "images/automobile/ph27.webp", large: "images/automobile/large/ph27.webp", date: "September 3, 2026", location: "Beijing, China" },

    { number: 28, image: "images/automobile/ph28.webp", large: "images/automobile/large/ph28.webp", date: "January 22, 2026", location: "Macau, China" },
    { number: 29, image: "images/automobile/ph29.webp", large: "images/automobile/large/ph29.webp", date: "January 26, 2026", location: "Hong Kong, China" },
    { number: 30, image: "images/automobile/ph30.webp", large: "images/automobile/large/ph30.webp", date: "January 7, 2026", location: "Beijing, China" },

    { number: 31, image: "images/automobile/ph31.webp", large: "images/automobile/large/ph31.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 32, image: "images/automobile/ph32.webp", large: "images/automobile/large/ph32.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 33, image: "images/automobile/ph33.webp", large: "images/automobile/large/ph33.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 34, image: "images/automobile/ph34.webp", large: "images/automobile/large/ph34.webp", date: "May 3, 2026", location: "Beijing, China" },

    { number: 35, image: "images/automobile/ph35.webp", large: "images/automobile/large/ph35.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 36, image: "images/automobile/ph36.webp", large: "images/automobile/large/ph36.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 37, image: "images/automobile/ph37.webp", large: "images/automobile/large/ph37.webp", date: "September 3, 2026", location: "Beijing, China" },

    { number: 38, image: "images/automobile/ph38.webp", large: "images/automobile/large/ph38.webp", date: "January 22, 2026", location: "Macau, China" },

    { number: 39, image: "images/automobile/ph39.webp", large: "images/automobile/large/ph39.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 40, image: "images/automobile/ph40.webp", large: "images/automobile/large/ph40.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 41, image: "images/automobile/ph41.webp", large: "images/automobile/large/ph41.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 42, image: "images/automobile/ph42.webp", large: "images/automobile/large/ph42.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 43, image: "images/automobile/ph43.webp", large: "images/automobile/large/ph43.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 44, image: "images/automobile/ph44.webp", large: "images/automobile/large/ph44.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 45, image: "images/automobile/ph45.webp", large: "images/automobile/large/ph45.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 46, image: "images/automobile/ph46.webp", large: "images/automobile/large/ph46.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 47, image: "images/automobile/ph47.webp", large: "images/automobile/large/ph47.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 48, image: "images/automobile/ph48.webp", large: "images/automobile/large/ph48.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 49, image: "images/automobile/ph49.webp", large: "images/automobile/large/ph49.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 50, image: "images/automobile/ph50.webp", large: "images/automobile/large/ph50.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 51, image: "images/automobile/ph51.webp", large: "images/automobile/large/ph51.webp", date: "May 3, 2026", location: "Beijing, China" },

    { number: 52, image: "images/automobile/ph52.webp", large: "images/automobile/large/ph52.webp", date: "September 3, 2026", location: "Beijing, China" },

    { number: 53, image: "images/automobile/ph53.webp", large: "images/automobile/large/ph53.webp", date: "January 7, 2026", location: "Beijing, China" },
    { number: 54, image: "images/automobile/ph54.webp", large: "images/automobile/large/ph54.webp", date: "January 7, 2026", location: "Beijing, China" },
    { number: 55, image: "images/automobile/ph55.webp", large: "images/automobile/large/ph55.webp", date: "January 7, 2026", location: "Beijing, China" },

    { number: 56, image: "images/automobile/ph56.webp", large: "images/automobile/large/ph56.webp", date: "May 3, 2026", location: "Beijing, China" },

    { number: 57, image: "images/automobile/ph57.webp", large: "images/automobile/large/ph57.webp", date: "March 14, 2026", location: "Beijing, China" },

    { number: 58, image: "images/automobile/ph58.webp", large: "images/automobile/large/ph58.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 59, image: "images/automobile/ph59.webp", large: "images/automobile/large/ph59.webp", date: "May 3, 2026", location: "Beijing, China" },

    { number: 60, image: "images/automobile/ph60.webp", large: "images/automobile/large/ph60.webp", date: "March 14, 2026", location: "Beijing, China" },

    { number: 61, image: "images/automobile/ph61.webp", large: "images/automobile/large/ph61.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 62, image: "images/automobile/ph62.webp", large: "images/automobile/large/ph62.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 63, image: "images/automobile/ph63.webp", large: "images/automobile/large/ph63.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 64, image: "images/automobile/ph64.webp", large: "images/automobile/large/ph64.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 65, image: "images/automobile/ph65.webp", large: "images/automobile/large/ph65.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 66, image: "images/automobile/ph66.webp", large: "images/automobile/large/ph66.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 67, image: "images/automobile/ph67.webp", large: "images/automobile/large/ph67.webp", date: "May 3, 2026", location: "Beijing, China" },
    { number: 68, image: "images/automobile/ph68.webp", large: "images/automobile/large/ph68.webp", date: "May 3, 2026", location: "Beijing, China" },

    { number: 69, image: "images/automobile/ph69.webp", large: "images/automobile/large/ph69.webp", date: "March 14, 2026", location: "Beijing, China" },
    { number: 70, image: "images/automobile/ph70.webp", large: "images/automobile/large/ph70.webp", date: "March 14, 2026", location: "Beijing, China" },

    { number: 71, image: "images/automobile/ph71.webp", large: "images/automobile/large/ph71.webp", date: "September 3, 2026", location: "Beijing, China" },

    { number: 72, image: "images/automobile/ph72.webp", large: "images/automobile/large/ph72.webp", date: "October 16, 2025", location: "Beijing, China" },

    { number: 73, image: "images/automobile/ph73.webp", large: "images/automobile/large/ph73.webp", date: "January 22, 2026", location: "Macau, China" },
    { number: 74, image: "images/automobile/ph74.webp", large: "images/automobile/large/ph74.webp", date: "January 22, 2026", location: "Macau, China" },

    { number: 75, image: "images/automobile/ph75.webp", large: "images/automobile/large/ph75.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 76, image: "images/automobile/ph76.webp", large: "images/automobile/large/ph76.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 77, image: "images/automobile/ph77.webp", large: "images/automobile/large/ph77.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 78, image: "images/automobile/ph78.webp", large: "images/automobile/large/ph78.webp", date: "September 3, 2026", location: "Beijing, China" },
    { number: 79, image: "images/automobile/ph79.webp", large: "images/automobile/large/ph79.webp", date: "September 3, 2026", location: "Beijing, China" },

    { number: 80, image: "images/automobile/ph80.webp", large: "images/automobile/large/ph80.webp", date: "March 14, 2026", location: "Beijing, China" },

    { number: 81, image: "images/automobile/ph81.webp", large: "images/automobile/large/ph81.webp", date: "January 22, 2026", location: "Macau, China" },
    { number: 82, image: "images/automobile/ph82.webp", large: "images/automobile/large/ph82.webp", date: "January 22, 2026", location: "Macau, China" }
];


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
// BACKGROUND PRELOAD LARGE IMAGES
// =========================================

function preloadLargeImages() {

    photos.forEach(photo => {

        const largeImg = new Image();

        largeImg.src = photo.large;

    });

}


// =========================================
// CREATE GALLERY
// =========================================

Promise.all(preloadPromises).then(() => {

    photos.forEach((photo, index) => {

        const photoElement = document.createElement("div");

        photoElement.className = "automobile-photo";

        photoElement.innerHTML = `
            <img
                src="${photo.image}"
                alt="Automobile photography ${photo.number}"
            >
        `;

        photoElement.addEventListener("click", () => {
            openLightbox(index);
        });

        gallery.appendChild(photoElement);

    });

    gallery.classList.add("gallery-ready");
    loading.classList.add("hidden");

    setTimeout(() => {
    preloadLargeImages();
}, 100);

    setTimeout(() => {
    alignGalleryBottom();
}, 150);

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
// PHOTO INFO
// =========================================

function updatePhotoInfo() {

    const photo = photos[currentIndex];

    lightboxDate.textContent = photo.date;

    lightboxLocation.textContent = photo.location;

}

// =========================================
// OPEN
// =========================================

function openLightbox(index) {

    currentIndex = index;

    lightboxImage.src = photos[currentIndex].large;

    updatePhotoInfo();

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

    updatePhotoInfo();

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

    updatePhotoInfo();

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

function alignGalleryBottom() {
    const galleries = [
        document.querySelector(".automobile-gallery"),
        document.querySelector(".landscape-gallery"),
        document.querySelector(".street-gallery")
    ].filter(Boolean);

    if (galleries.length === 0) return;

    galleries.forEach(gallery => {
        gallery.style.minHeight = "";
    });

    const maxHeight = Math.max(
        ...galleries.map(gallery => gallery.offsetHeight)
    );

    galleries.forEach(gallery => {
        gallery.style.minHeight = `${maxHeight}px`;
    });
}
