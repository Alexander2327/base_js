const img = document.getElementById('cookie');
let count = document.getElementById('clicker__counter');
let flag = true

img.onclick = () => {
    if (flag) {
    count.textContent = Number(count.textContent) + 1;
    img.width += 20;
    img.height += 20;
    flag = false;
    } else {
        count.textContent = Number(count.textContent) + 1;
        img.width -= 20;
        img.height -= 20;
        flag = true;
    }
}