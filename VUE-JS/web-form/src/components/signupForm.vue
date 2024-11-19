<template >
    <div>
        <form>
            <label>Email:</label>
            <input type="email" required>
        </form>
        
    </div>
</template>
<script>
export default {
    data (){
        return{
            
        }
    },
    
}
</script>
<style>
form{
    width: 420px;
    margin:30px auto;
    text-align: left;
    background: white;
    padding: 40px;
    border-radius: 10px;

}
label{
    display: inline-block;
    color: #aaa;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

}
input{
    display:block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
    
</style>