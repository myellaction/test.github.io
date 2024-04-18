import {chat, chatIcon} from "./chat";

const lang = document.querySelector('.header__lang-box');
const langHidden = document.querySelector('.header__lang-second');
const arrows = document.querySelectorAll('.header__lang-arrow');
const menu = document.querySelector('.header__menu-wrapper');

const mobileNavs = document.querySelectorAll('.header__nav-mobile');
const mobileMenu = document.querySelector('.header__mobile-wrapper');
const blackBg = document.querySelector('.black');

let topMargin = 0;

const rotateArrow = () => {
    if(langHidden.classList.contains('show')){
        arrows.forEach(item=>item.style.transform = 'rotate(0deg)');
    } else {
        arrows.forEach(item=>item.style.transform = 'rotate(180deg)');
    }
}

lang.addEventListener('click', (e)=>{
    rotateArrow();
    langHidden.classList.toggle('show');
    e.stopPropagation();
});

if(mobileNavs[0].style.display !== 'none'){
    mobileNavs.forEach(btn => {
        btn.addEventListener('click', () => {
            mobileNavs.forEach(btn => {
                btn.classList.toggle('open');
                if(btn.classList.contains('header__nav-mobile-block')){
                    btn.classList.toggle('header__nav-mobile-block-show');
                }
            });
            setTimeout(()=>{
                mobileMenu.classList.toggle('header__mobile-wrapper-show');
            }, 50);
            blackBg.classList.toggle('black-show');
        });
    });
}

window.addEventListener('scroll', () => {
    if(window.scrollY < 1) {
        menu.classList.add('not-bg');
    } else if (window.scrollY > 40) {
        menu.classList.remove('not-bg');
        if (topMargin > window.scrollY) {
            menu.classList.remove('hide-menu');
            menu.classList.add('show-menu');
        } else {
            menu.classList.add('hide-menu');
        }
    }
    topMargin = window.scrollY;
})


//Window click
window.addEventListener('click', (e) => {
    if (langHidden.classList.contains('show')){
        rotateArrow();
        langHidden.classList.remove('show');
    }
    if(chat.classList.contains('show-chat')){
        chatIcon.classList.remove('hide-chat-icon');
        chat.classList.remove('show-chat');
    }
});
