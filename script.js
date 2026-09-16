document.addEventListener("DOMContentLoaded", () => {

    const images = [
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
        document.body.classList.add("images-loaded");
    });

});
