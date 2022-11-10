const form = document.forms.form;
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.onprogress = function(event) {        
        progress.value = event.loaded;
    }
    xhr.send(formData);
})