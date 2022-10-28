setInterval(() => {
    const elements = document.getElementsByClassName('rotator__case');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].className === 'rotator__case rotator__case_active') {
            elements[i].classList.remove('rotator__case_active');
            if (i < elements.length - 1) {
                elements[i + 1].classList.add('rotator__case_active');
                break
            } else {
                elements[0].classList.add('rotator__case_active');
                break
            }
        }
    }
}, 1000)