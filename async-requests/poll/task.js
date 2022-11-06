const question = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState == xhr.DONE && xhr.status == 200) {
    let resp = JSON.parse(xhr.responseText).data;    
    question.innerText = resp.title;
    for (let answer of resp.answers) {    
        const button = `<button class="poll__answer" onclick="alert('Спасибо, ваш вопрос засчитан!');">${answer}</button>`;
        answers.insertAdjacentHTML('beforeend', button);
    }      
  }
});