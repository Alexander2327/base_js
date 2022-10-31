let inputs = document.querySelectorAll('.interest__check');


inputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.checked) {
            let inputMain = input.closest('.interests_active');
            if (inputMain) {
                let parent = inputMain.parentElement;
                parent.children[0].children[0].checked = true;
            } else {
                let parent = input.closest('.interest')
                for (input of parent.querySelectorAll('input')) {
                    input.checked = true;
                }

            }
        } else {
            let inputMain = input.closest('.interests_active');
            if (inputMain) {
                flag = true;
                for (inp of inputMain.querySelectorAll('input')) {
                    if (inp.checked == true) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    let parent = inputMain.parentElement;
                    input = parent.querySelector('input');
                    input.checked = false;
                }
                
            } else {
                let parent = input.closest('.interest')
                for (input of parent.querySelectorAll('input')) {
                    input.checked = false;
                }
            }
        }
    })
})

