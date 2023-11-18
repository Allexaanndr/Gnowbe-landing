const iconMenu = document.querySelector('.icon-menu');

if (iconMenu) {
    const headerWrapper = document.querySelector('.header__wrapper');
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        headerWrapper.classList.toggle('active');

    })
}