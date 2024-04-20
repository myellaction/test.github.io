const maxWidth = window.innerWidth;
const swiper = new Swiper(".tech__swiper", {
    slidesPerView: maxWidth > 768 ? 4 : 3,
    loop: true,
    spaceBetween: maxWidth > 992 ? 100 : 70,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
});

