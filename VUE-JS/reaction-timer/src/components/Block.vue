<template>
  <div class="block" v-if="showBlock">
    Click Me
  </div>
</template>

<script>
export default {
    props : ['delay'],

    data (){
        return {
            showBlock: false
        }
    },
    mounted (){
        console.log("mounted  Block...");
        setTimeout(()=>{
            this.showBlock = true;
            console.log("The delay is:", this.delay);
        }, this.delay);
    },
    updated (){
        console.log("Updated Block");
    },
    unmounted (){
        console.log("Unmounted Block");
    }

}
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding :100px 0;
    margin: 40px auto;
}
</style>