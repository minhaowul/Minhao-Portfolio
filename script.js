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

    // 第一屏延迟后开始淡入
    if (heroImage) {

        setTimeout(() => {
    heroImage.classList.add("loaded");
}, 50);

    }

    // 三张作品封面同时显示
    document.body.classList.add("images-loaded");

});

});

// ==================== BACK TO TOP ====================

const backToTop = document.querySelector('.back-to-top');

if (backToTop) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > window.innerHeight * 0.7) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

    });

    backToTop.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}
