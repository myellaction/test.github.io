import {chat, chatIcon} from "./chat";
import {clickAction, scrollAction, isMobile} from './actions';

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

lang.addEventListener(clickAction, (e)=>{
    rotateArrow();
    langHidden.classList.toggle('show');
    e.stopPropagation();
});

if(mobileNavs[0].style.display !== 'none'){
    let bgAnimation;
    mobileNavs.forEach(btn => {
        btn.addEventListener(clickAction, () => {
            if(!bgAnimation){
                bgAnimation = true;
                mobileNavs.forEach(btn => {
                    btn.classList.toggle('open');
                    if (btn.classList.contains('header__nav-mobile-block')) {
                        btn.classList.toggle('header__nav-mobile-block-show');
                    }
                });
                mobileMenu.classList.toggle('header__mobile-wrapper-show');
                blackBg.classList.toggle('black-show');
                setTimeout(()=>{
                    bgAnimation = false;
                }, 500);
            }
        });
    });

    blackBg.addEventListener(clickAction, () => {
        if(!bgAnimation) {
            bgAnimation = true
            mobileNavs.forEach(btn => {
                btn.classList.remove('open');
                if (btn.classList.contains('header__nav-mobile-block')) {
                    btn.classList.remove('header__nav-mobile-block-show');
                }
            });
            mobileMenu.classList.remove('header__mobile-wrapper-show');
            blackBg.classList.toggle('black-show');
            setTimeout(()=>{
                bgAnimation = false;
            }, 500);
        }
    });
}


window.addEventListener(scrollAction, () => {
    if (window.scrollY < 1) {
        if (!isMobile) {
            menu.classList.add('not-bg');
        }
        menu.classList.remove('hide-menu');
        menu.classList.add('show-menu');
    } else if (window.scrollY > 40) {
        if (!isMobile) {
            menu.classList.remove('not-bg');
        }
        if (getComputedStyle(menu).position !== 'fixed') {
            menu.style.transform = 'translateY(-100%)';
            menu.style.position = 'fixed';
        }
        if (topMargin > window.scrollY) {
            if(menu.classList.contains('hide-menu')){
                menu.classList.remove('hide-menu');
                menu.classList.add('show-menu');
            }
        } else {
            if(!menu.classList.contains('hide-menu')){
                menu.classList.add('hide-menu');
            }
        }
    }
    topMargin = window.scrollY;
});


//Window click
window.addEventListener(clickAction, (e) => {
    if (langHidden.classList.contains('show')){
        rotateArrow();
        langHidden.classList.remove('show');
    }
    if(chat.classList.contains('show-chat')){
        if(isMobile){
            document.querySelector('body').style.overflow = 'auto';
        }
        chatIcon.classList.remove('hide-chat-icon');
        chat.classList.remove('show-chat');
    }
});

