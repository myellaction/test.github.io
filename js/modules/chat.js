import SimpleBar from 'simplebar';
import {clickAction, isMobile} from './actions';
import {mobileMenuInit} from './menu';

//Scroll
const mesBar = new SimpleBar(document.getElementById('mes-box'), {
    autoHide: false});

//Texarea input
const chatInput = document.querySelector('.chat__area');
const chatPanel = document.querySelector('.chat__panel');
const mesBox = document.querySelector('.chat__box');
const mesBoxWrapper = document.querySelector('.chat__box-wrapper');

const mesScrollBox = mesBar.getScrollElement();

mesScrollBox.scrollTo({
    top: mesScrollBox.scrollHeight,
    behavior: "smooth"
});

if(window.navigator.vendor !== ''){
    chatInput.style.border = '1px solid transparent';
}

const minChatInputHeight = Number(getComputedStyle(chatInput).height.slice(0, -2));
const maxChatInputHeight = minChatInputHeight * 4;
let prevChatInputHeight = minChatInputHeight;


// Функция для автоматического изменения высоты textarea
function autoResize() {
    setTimeout(()=> {
        chatInput.style.cssText = 'min-height:24px; height: 24px;';
        const newHeight = chatInput.scrollHeight;
        chatInput.style.height = Math.min(newHeight, 96) + 'px';
        chatInput.scrollTo({
            top: chatInput.scrollHeight
        });
    }, 1);
}
let maxMesBoxHeight = Number(getComputedStyle(mesBox).height.slice(0, -2));

chatInput.addEventListener('input', () => {
    chatInput.style.height = minChatInputHeight + 'px';
    const chatInputHeight = Math.min(chatInput.scrollHeight, maxChatInputHeight);
    chatInput.style.height = chatInputHeight + 'px';
    if(prevChatInputHeight !== chatInputHeight) {
        if(chatInput.scrollHeight >= maxChatInputHeight){
            chatInput.style.overflowY = 'auto';
        } else if(chatInput.scrollHeight < maxChatInputHeight){
            chatInput.style.overflowY = 'hidden';
        }
        chatInput.scrollTo({
            top: chatInput.scrollHeight
        });
        const newChatPanelHeight = chatPanel.clientHeight;
        const currentHeight = maxMesBoxHeight - (newChatPanelHeight - 66);
        mesBox.style.height = currentHeight + 'px';
        mesScrollBox.scrollTo({
            top: mesScrollBox.scrollHeight,
            behavior: 'smooth'
        });
        prevChatInputHeight = chatInputHeight;
    }
});



//Show chat
export const chat = document.querySelector('.chat');
export const chatIcon = document.querySelector('.chat-icon');
const chatClose = document.querySelector('.chat__close');
chatIcon.addEventListener(clickAction, (e) => {
    if(isMobile){
        document.querySelector('body').style.overflow = 'hidden';
    }
    mesScrollBox.scrollTo({
        top: mesScrollBox.scrollHeight,
        behavior: "smooth"
    });
    e.stopPropagation();
    chatIcon.classList.add('hide-chat-icon');
    chat.classList.add('show-chat');
});

chat.addEventListener(clickAction, (e) => e.stopPropagation());

chatClose.addEventListener(clickAction, (e) => {
    e.stopPropagation();
    if(isMobile){
        document.querySelector('body').style.overflow = 'auto';
    }
    chatIcon.classList.remove('hide-chat-icon');
    chat.classList.remove('show-chat');
})

window.addEventListener('resize', () => {
    mobileMenuInit();
    mesBoxWrapper.style.height = 'calc(100% - 70px - 20px - 66px)';
    mesBox.style.height = 'calc(100% - 20px)';
    maxMesBoxHeight = Number(getComputedStyle(mesBox).height.slice(0, -2));
});

