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

let dropBtn = document.querySelector('.dropbtn');
let dropContent = document.querySelector('.dropdown-content');
dropContent.style.display = 'none';

dropBtn.addEventListener('mouseover', (event) => {
    dropContent.style.display = 'block';
}) 

dropBtn.addEventListener('mouseout', (event) => {
    dropContent.style.display = 'none';
}) 

dropContent.addEventListener('mouseover', (event) => {
    dropContent.style.display = 'block';
})

dropContent.addEventListener('mouseout', (event) => {
        dropContent.style.display = 'none';
    })





