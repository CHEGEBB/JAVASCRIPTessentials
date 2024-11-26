
async function getData(){
    const url = './data.json';

    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log('Error:', error);
    }
}