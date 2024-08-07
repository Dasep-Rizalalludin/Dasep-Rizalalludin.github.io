let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.hero-text',{delay:100, origin:'top'});
sr.reveal('.hero-img',{delay:350, origin:'top'});
sr.reveal('.icons',{delay:400, origin:'left'});
sr.reveal('.scroll-down',{delay:100, origin:'right'});
