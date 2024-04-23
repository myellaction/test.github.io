const maxWidth = window.innerWidth;
const swiper = new Swiper(".tech__swiper", {
    slidesPerView: maxWidth >= 767 ? 4 : 3,
    loop: true,
    spaceBetween: maxWidth >= 991 ? 100 : maxWidth >= 575 ? 70 : 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
});

