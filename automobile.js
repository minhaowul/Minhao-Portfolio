const gallery = document.getElementById("automobileGallery");

const totalPhotos = 82;


// =========================================
// PRELOAD ALL PHOTOS
// =========================================

const preloadPromises = [];

for (let i = 1; i <= totalPhotos; i++) {

    const img = new Image();

    img.src = `images/automobile/ph${i}.webp`;

    preloadPromises.push(
        new Promise(resolve => {

            if (img.complete) {
                resolve();
            } else {
                img.onload = resolve;
                img.onerror = resolve;
            }

        })
    );
}


// =========================================
// CREATE GALLERY AFTER PRELOAD
// =========================================

Promise.all(preloadPromises).then(() => {

    for (let i = 1; i <= totalPhotos; i++) {

        const photo = document.createElement("div");

        photo.className = "automobile-photo";

        photo.innerHTML = `
            <img
                src="images/automobile/ph${i}.webp"
                alt="Automobile photography ${i}"
            >
        `;

        gallery.appendChild(photo);
    }

    gallery.classList.add("gallery-ready");

});
