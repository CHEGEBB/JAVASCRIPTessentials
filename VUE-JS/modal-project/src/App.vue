<template>
  <div >
    <h1>{{title}}</h1>
    <input type="text" ref="name">
    <button @click="handleClick">Click me</button>
    </div>
 
</template>

<script>

export default {
  name: 'App',
  data (){
    return{
      title: 'My First Vue app'
  }
  },
  methods: {
    handleClick (){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color: red;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: color 0.5s;
  cursor: pointer;
  border-bottom: 2px solid #ccc;
}
</style>
