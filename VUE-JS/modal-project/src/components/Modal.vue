
<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale : theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props :['theme'],
    data () {
       
    },
    methods :{
        closeModal(){
            this.$emit('close')
        }
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
.modal .actions{
    text-align: center;
    margin:30px 0 10px 0;
    color: #333;
}
   .modal .actions a{
    margin: 10px;
    padding: 10px 20px;
    background: #03cfb4;
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
   }
   .modal.sale.actions{
    color: white;
    text-decoration: none;
   }
   .modal.sale.actions a{
    background:slateblue;
    color: white;
    margin: 10px;
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
   }

   .backdrop{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
   }
   .modal2{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
   }
   .modal2 h2{
    text-align: center;
    margin-bottom: 20px;
    color: #03cfb4;
    font-size: 24px;
    font-weight: bold;
    border:none;
   }
   .modal2 p{
    margin: 0;
    font-size: 16px;
    line-height: 20px;
    color: #333;
    text-align: center;
    font-style: normal;
   }
 
 
</style>