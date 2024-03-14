document.addEventListener('DOMContentLoaded', function() {
    const grandparent = document.querySelector('.grandparent');
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');

    //event  bubbling
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
    //event capture start from the outside  coming in so from document,grandparent,parent,child
    grandparent.addEventListener('click', e =>{
        console.log("Grandparent 2 capture");
    }, { capture : true});
    parent.addEventListener('click', e =>{
        console.log("parent2 capture");
    },{ capture : true});
    child.addEventListener('click', e =>{
        console.log("child2 capture");
    },{ capture :true});
})  
