const item = document.querySelector('.menu__item a');
const items = document.querySelectorAll('.menu__item a');

const array = Array.from(items);

array.forEach((it) => {
    // const parent = it.closest('.menu__item');
    let parent = it.closest('.menu__item');
    // console.log(parent)
    // console.log(it);
    it.closest('menu menu_sub').className = 'menu menu_sub menu_active'
    it.onclick = function () {
        
        console.log(it.className);
        if (it.closest('menu menu_sub')) {
            let parent2 = it.closest('.menu_sub')
            parent2.className = 'menu menu_sub menu_active'
            console.log(parent2);
        }
        // console.log(parent.className)
        }})
        
        // console.log(parent)}
        // if (!parent) {
        //     console.log(2)
        //     p = document.getElementsByClassName('menu menu_sub')
        //     p.className = 'menu menu_sub menu_active';
        //     }}
        // let parent2 = it.closest('.menu_sub');
        // console.log(parent2)
        // if (parent2) {
        //     parent2.className = 'menu menu_sub menu_active';
        //     }
    
        

    
    // })