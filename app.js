const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');
});

function toggleMenu() {
    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');
}

allItemNav.forEach(item => {
    item.addEventListener('click', toggleMenu);
});

let menuVisible = false;

// function checkScroll() {
//     if (window.scrollY > window.innerHeight / 2) {
//         if (!menuVisible) {
//             btnMenu.style.display = 'block';
//             menuVisible = true;
//         }
//     } else {
//         if (menuVisible) {
//             btnMenu.style.display = 'none';
//             menuVisible = false;
//         }
//     }
// }

// window.addEventListener('scroll', checkScroll);

// Animation écriture
const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
});

typewriter
    .pauseFor(1800)
    .changeDelay(20)
    .typeString("Moi c'est Baptiste,<br>")
    .pauseFor(300)
    .typeString("<strong> Développeur Web - Mobile</strong> !")
    .pauseFor(1000)
    .deleteChars(14)
    .typeString('<span style="color: #0092d5;"> CSS</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color: #efd81d;"> JavaScript </span> !')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('<span style="color: #ce36e0;"> PHP - Symfony</span> !')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('<span style="color: #E0AB6B;"> <strong>Full-Stack</strong></span> !')
    .start();
