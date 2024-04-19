const maxWidth = window.innerWidth;
const swiper = new Swiper(".tech__swiper", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: maxWidth > 768 ? 100 : 70,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
});

