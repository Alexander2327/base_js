let divs = document.getElementsByClassName('reveal')
function isVisible(divs) {
    for (let i = 0; i < divs.length; i++) {
        const { top, bottom } = divs[i].getBoundingClientRect();
        if (bottom > 0 && top < window.innerHeight) {
            divs[i].classList.add('reveal_active');
       }
    }
}
document.addEventListener('scroll', (e) => {
    isVisible(divs);
})
