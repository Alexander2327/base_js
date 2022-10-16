function getHole(index) {
    return document.getElementById(`hole${index}`);
}

dead = document.getElementById('dead');
lost = document.getElementById('lost');

for (let index = 1; index <= 9; index++) {
    let hole = getHole(index);

    hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else { 
        lost.textContent = Number(lost.textContent) + 1;
        }
        if (Number(dead.textContent) === 10) {
            alert('Вы победили!');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (Number(lost.textContent) === 5) {
            alert('Вы проиграли!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    
}
