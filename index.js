const ham = document.getElementById('ham');
const mobileNav = document.querySelector('.mobileNav .links');
const body = document.querySelector('body');

ham.addEventListener('click', () => {
    mobileNav.classList.toggle('hide');
    body.classList.toggle('noScroll');
});