const btns = document.getElementsByClassName('font-size')
const div = document.getElementsByClassName('book__content');

for (let i = 0; i < btns.length; i++) {
    if (btns[i].dataset.size === 'small') {
        btns[i].addEventListener('click', () => {
            let activeBtns = document.getElementsByClassName('font-size_active');
            activeBtns[0].classList.remove('font-size_active');
            btns[i].setAttribute('href', '#');
            btns[i].classList.add('font-size_active');
            if (div[0].className == 'book__content book_fs-big') {
                div[0].classList.remove('book_fs-big');
            }
            div[0].classList.add('book_fs-small');
        })
    } else if (btns[i].dataset.size === 'big') {
                btns[i].addEventListener('click', () => {
                    let activeBtns = document.getElementsByClassName('font-size_active');
                    activeBtns[0].classList.remove('font-size_active');
                    btns[i].setAttribute('href', '#');                   
                    btns[i].classList.add('font-size_active');
                    if (div[0].className == 'book__content book_fs-small') {
                        div[0].classList.remove('book_fs-small');
                    }
                    div[0].classList.add('book_fs-big');
        })}
     else {
        btns[i].addEventListener('click', () => {
            let activeBtns = document.getElementsByClassName('font-size_active');
            activeBtns[0].classList.remove('font-size_active');
            btns[i].setAttribute('href', '#');
            btns[i].classList.add('font-size_active');

            if (div[0].className == 'book__content book_fs-big') {
                div[0].classList.remove('book_fs-big');
            } else if (div[0].className == 'book__content book_fs-small') {
                div[0].classList.remove('book_fs-small');
            }
            
        })
}
}
