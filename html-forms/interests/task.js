let inputs = document.querySelectorAll('.interest');


inputs.forEach((input) => {
    input.addEventListener('change', () => {
        let parentLi = event.currentTarget;
        let parent = parentLi.querySelector('.interest__check');
        let child = parentLi.querySelectorAll('.interest__check');
            
        if (event.target === parent) {
            for (let j = 0; j < child.length; j++) {
                child[j].checked = parent.checked;                
            }
        }
 
        else { 
            let checkedChilds = event.target.closest('ul').querySelectorAll('.interest__check:checked');    
            if (checkedChilds.length === 0) {
                parent.checked = false;
                parent.indeterminate = false;                        
            }
            else if  (checkedChilds.length === child.length - 1) {
                parent.checked = false;  
                parent.indeterminate = false;                                  
            }
            else {
                parent.indeterminate = false;
            }
        }
    })
})