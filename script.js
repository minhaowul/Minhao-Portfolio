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

// =========================================
// SUBTLE SMOOTH WHEEL SCROLL
// =========================================

let scrollTarget = window.scrollY;
let scrollCurrent = window.scrollY;
let isScrolling = false;

window.addEventListener("wheel", event => {

    if (event.ctrlKey) return;

    event.preventDefault();

    scrollTarget += event.deltaY * 0.72;

    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    scrollTarget = Math.max(
        0,
        Math.min(scrollTarget, maxScroll)
    );

    if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
    }

}, { passive: false });


function smoothScroll() {

    scrollCurrent +=
        (scrollTarget - scrollCurrent) * 0.085;

    window.scrollTo(0, scrollCurrent);

    if (Math.abs(scrollTarget - scrollCurrent) > 0.5) {

        requestAnimationFrame(smoothScroll);

    } else {

        scrollCurrent = scrollTarget;
        window.scrollTo(0, scrollCurrent);
        isScrolling = false;

    }

}
