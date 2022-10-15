let startTime = document.getElementById('timer');

function func() {
    startTime.textContent = Number(startTime.textContent) - 1;
    if (Number(startTime.textContent) === 0) {
        setTimeout(() => alert('Вы победили в конкурсе!'), 10);
        clearInterval(interval);
    }
}

let interval = setInterval(func, 1000);
