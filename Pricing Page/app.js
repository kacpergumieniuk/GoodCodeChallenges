function navslide(){



const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.navlinks');


burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
}

navslide();