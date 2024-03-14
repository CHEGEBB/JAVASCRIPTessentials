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
    child.addEventListener('click',printHi);

    setTimeout(() =>{
        child.removeEventListener('click',printHi);
    },2000);//The remove event listener removes or acts the opposite of add event listener we also added setTimeout function so hi will disppaera after 2 seconds
    document.addEventListener('click', e =>{
        console.log("document1");
    });
    //event capture start from the outside  coming in so from document,grandparent,parent,child
    grandparent.addEventListener('click', e =>{
        console.log("Grandparent 2 capture");
    }, { capture : true});
    parent.addEventListener('click', e =>{
        console.log("parent2 capture");
    }
    ,{ capture : true},{ once :true});
    child.addEventListener('click', e =>{
        console.log("child2 capture");
    },{ capture :true});
    document.addEventListener('click', e =>{
        console.log("Document2 capture");

    },{ capture : true});

    function printHi(){
        console.log("Hi");
    }
})  
