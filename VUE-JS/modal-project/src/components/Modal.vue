
<template>
    <div class="backdrop">
        <div class="modal" :class="{ sale : theme === 'sale'}">
            <h1>{{header}}</h1>
            <p>{{text}}</p>
            
        </div>
    </div>
</template>
<script>
export default{
    props :['header', 'text', 'theme'],
    data () {
       
    }
}
</script>

<style>
   .modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
   }
   .modal h1{
    text-align: center;
    margin-bottom: 20px;
    color: #03cfb4;
    font-size: 24px;
    font-weight: bold;
    border:none;
   }
   .modal p{
    margin: 0;
    font-size: 16px;
    line-height: 20px;
    color: #333;
    text-align: center;
    font-style: normal;
   }
   .modal.sale {
    background: crimson;
    color: white;
}

.modal.sale h1 {
    color: white;
}

   .backdrop{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
   }
 
 
</style>