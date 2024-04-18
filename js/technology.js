const btnFrontend = document.querySelector('.about__frontend');
const btnBackend = document.querySelector('.about__backend');

const blockFrontend = document.querySelector('.about__tech-frontend');
const blockBackend = document.querySelector('.about__tech-backend');

const techBox = document.querySelector('.about__tech-box');
const hiddenBlocks = document.querySelectorAll('.about__tech.hidden');

hiddenBlocks.forEach(item => {
    item.style.top = '-' + getComputedStyle(item).height;
});

const hideAndShowTech = (toHide, toShow) => {
    let btnHide, btnShow;
    if(toHide === blockFrontend){
        btnHide = btnFrontend;
        btnShow = btnBackend;
    } else {
        btnHide = btnBackend;
        btnShow = btnFrontend;
    }
    const blockHeight = getComputedStyle(toShow).height;
    techBox.style.height = blockHeight;
    toShow.classList.remove('hidden');
    toShow.classList.add('show-tech');
    btnShow.classList.add('about__part-selected');
    toHide.classList.remove('show-tech');
    btnHide.classList.remove('about__part-selected');
    toHide.animate([
        {top: 0, opacity: 1},
        {top: blockHeight, opacity: 0}
    ], {duration: 400});

    setTimeout(()=>{
        toHide.style.top = '-' + getComputedStyle(toHide).height;
        toHide.classList.add('hidden');
    }, 400);
}

btnFrontend.addEventListener('click', () => {
    if(blockFrontend.classList.contains('hidden')){
        hideAndShowTech(blockBackend, blockFrontend);
    }
});

btnBackend.addEventListener('click', () => {
    if(blockBackend.classList.contains('hidden')){
        hideAndShowTech(blockFrontend, blockBackend);
    }
});



