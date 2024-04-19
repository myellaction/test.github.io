export const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i
    .test(navigator.userAgent);

export const clickAction = isMobile ? 'touchend' : 'click';
export const scrollAction = 'scroll'; //isMobile ? 'touchmove' : 'scroll';

