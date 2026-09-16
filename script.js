document.addEventListener("DOMContentLoaded", () => {

    const heroImage = document.querySelector(".hero-image");

    const images = [
        "home.jpg",
        "automobile.jpg",
        "landscape.jpg",
        "street.jpg"
    ];

    const preloadImages = images.map(src => {
        return new Promise(resolve => {

            const img = new Image();

            img.onload = resolve;
            img.onerror = resolve;

            img.src = src;

        });
    });

    Promise.all(preloadImages).then(() => {

        // 第一屏显示
        if (heroImage) {
            heroImage.classList.add("loaded");
        }

        // 三张作品封面同时显示
        document.body.classList.add("images-loaded");

    });

});
