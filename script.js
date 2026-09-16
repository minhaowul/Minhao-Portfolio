document.addEventListener("DOMContentLoaded", () => {

    const heroImage = document.querySelector(".hero-image");

    if (heroImage.complete) {
        heroImage.classList.add("loaded");
    } else {
        heroImage.addEventListener("load", () => {
            heroImage.classList.add("loaded");
        });
    }

});
