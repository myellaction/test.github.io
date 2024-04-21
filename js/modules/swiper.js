const maxWidth = window.innerWidth;
const swiper = new Swiper(".tech__swiper", {
    slidesPerView: maxWidth >= 767 ? 4 : 3,
    loop: true,
    spaceBetween: maxWidth >= 991 ? 100 : 70,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
});

