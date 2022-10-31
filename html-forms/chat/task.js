let chat = document.querySelector('.chat-widget');

chat.addEventListener('click', () => chat.classList.add('chat-widget_active'));

const input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );


input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let datetime = new Date()
    if (input.value) {
        messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${datetime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>
`;
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${datetime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
          <div class="message__text">
            Добрый день, мы ещё не проснулись. Позвоните через 10 лет
          </div>
        </div>
      `;
    }
    input.value = '';
    }
    
})
