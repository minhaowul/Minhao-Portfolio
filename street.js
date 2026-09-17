const gallery = document.getElementById("streetGallery");
const loading = document.getElementById("streetLoading");

const totalPhotos = 25;

const locations = [
"Beijing, China",
"Beijing, China",
"Macau, China",
"Beijing, China",
"Beijing, China",
"Macau, China",
"Macau, China",
"Macau, China",
"Macau, China",
"Foshan, China",
"Foshan, China",
"Huizhou, China",
"Hong Kong, China",
"Hong Kong, China",
"Beijing, China",
"Beijing, China",
"Hong Kong, China",
"Beijing, China",
"Beijing, China",
"Huangshan, China",
"Rushan, China",
"Rushan, China",
"Rushan, China",
"Qingdao, China",
"Qingdao, China"
];

const photos = [];

for (let i = 1; i <= totalPhotos; i++) {

```
photos.push({
    number: i,
    image: `images/street/st${i}.webp`,
    large: `images/street/large/st${i}.webp`,
    location: locations[i - 1]
});
```

}

// =========================================
// PRELOAD NORMAL IMAGES
// =========================================

const preloadPromises = photos.map(photo => {

```
return new Promise(resolve => {

    const img = new Image();

    img.onload = () => resolve();
    img.onerror = () => resolve();

    img.src = photo.image;

});
```

});

// =========================================
// PRELOAD LARGE IMAGES IN BACKGROUND
// =========================================

function preloadLargeImages() {

```
photos.forEach(photo => {

    const img = new Image();

    img.src = photo.large;

});
```

}

// =========================================
// CREATE GALLERY
// =========================================

Promise.all(preloadPromises).then(() => {

```
photos.forEach((photo, index) => {

    const photoElement = document.createElement("div");

    photoElement.className = "street-photo";

    photoElement.innerHTML = `
        <img
            src="${photo.image}"
            alt="Street photography ${photo.number}"
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
```

});

// =========================================
// LIGHTBOX
// =========================================

const lightbox = document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const lightboxLocation =
document.getElementById("lightboxLocation");

const lightboxPrev =
document.getElementById("lightboxPrev");

const lightboxNext =
document.getElementById("lightboxNext");

const lightboxClose =
document.getElementById("lightboxClose");

const fullscreenButton =
document.getElementById("fullscreenButton");

let currentIndex = 0;

// =========================================
// OPEN LIGHTBOX
// =========================================

function openLightbox(index) {

```
currentIndex = index;

const photo = photos[currentIndex];

lightboxImage.src = photo.large;
lightboxImage.alt =
    `Street photography ${photo.number}`;

lightboxLocation.textContent =
    photo.location;

lightbox.classList.add("active");

document.body.style.overflow = "hidden";
```

}

// =========================================
// CLOSE LIGHTBOX
// =========================================

function closeLightbox() {

```
if (document.fullscreenElement) {

    document.exitFullscreen().catch(() => {});

}

lightbox.classList.remove("active");

document.body.style.overflow = "";
```

}

// =========================================
// NEXT / PREVIOUS
// =========================================

function showNext() {

```
currentIndex =
    (currentIndex + 1) % photos.length;

updateLightbox();
```

}

function showPrevious() {

```
currentIndex =
    (currentIndex - 1 + photos.length) % photos.length;

updateLightbox();
```

}

function updateLightbox() {

```
const photo = photos[currentIndex];

lightboxImage.src = photo.large;

lightboxImage.alt =
    `Street photography ${photo.number}`;

lightboxLocation.textContent =
    photo.location;
```

}

// =========================================
// BUTTONS
// =========================================

lightboxNext.addEventListener("click", event => {

```
event.stopPropagation();

showNext();
```

});

lightboxPrev.addEventListener("click", event => {

```
event.stopPropagation();

showPrevious();
```

});

lightboxClose.addEventListener("click", event => {

```
event.stopPropagation();

closeLightbox();
```

});

// =========================================
// KEYBOARD
// =========================================

document.addEventListener("keydown", event => {

```
if (!light
```
