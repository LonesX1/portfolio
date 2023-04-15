const navBar = document.querySelector('#header-nav');

const handleOnScrollNavBar = () => {
    if (window.scrollY >= 100) {
        navBar.classList.add('on-scroll');
    } else {
        navBar.classList.remove('on-scroll');
    };
};

window.addEventListener('scroll', handleOnScrollNavBar);