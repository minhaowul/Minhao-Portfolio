const gallery = document.getElementById("automobileGallery");

const totalPhotos = 82;

for (let i = 1; i <= totalPhotos; i++) {

    const photo = document.createElement("div");

    photo.className = "automobile-photo";

    photo.innerHTML = `
        <img
            src="images/automobile/ph${i}.webp"
            alt="Automobile photography ${i}"
            loading="${i <= 12 ? "eager" : "lazy"}"
        >
    `;

    gallery.appendChild(photo);
}
