document.addEventListener('DOMContentLoaded', function() {
    const grandparent = document.querySelector('.grandparent');
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');

    grandparent.addEventListener('click', e => {
        console.log("Grandparent 1");
    });

    parent.addEventListener('click', e =>{

        console.log("Parent1");
    });
    child.addEventListener('click', e =>{
        console.log("child1");
    });
    document.addEventListener('click', e =>{
        console.log("document1");
    });
})  
