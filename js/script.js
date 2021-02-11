let menu = document.querySelector('.menu-opener');

if (typeof menu !== 'undefined') {
    menu.addEventListener('click', (event) => {
        event.preventDefault();
        let header = document.querySelector('.header');
        if (typeof header !== 'undefined') {
            header.classList.toggle('mobile-menu-active');
        }
    });
}





