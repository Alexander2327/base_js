const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let img = document.getElementById('loader');
        img.classList.remove('loader_active');
        const resp = JSON.parse(xhr.responseText);

        resultDiv = document.getElementById('items');
        const vals = resp.response.Valute
        for (let val in vals) {
            let div = ` 
            <div class="item">
              <div class="item__code">
                ${vals[val].CharCode}
              </div>
              <div class="item__value">
                ${vals[val].Value}
              </div>
              <div class="item__currency">
                руб.
              </div>
            </div>`;
            resultDiv.insertAdjacentHTML("beforeEnd", div);
        }
    }
})
