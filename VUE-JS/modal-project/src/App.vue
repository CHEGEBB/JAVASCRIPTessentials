<template>
  <div >
    <h1>{{title}}</h1>
    <input type="text" ref="name">
    <button @click="handleClick">Click me</button>
    <button @click="toggleShowModal">Show Modal</button>

    <div v-if="showModal">
      <!-- slots -->
      <Modal  theme="sale" @close="toggleShowModal">
        <template v-slot:links>
          <a href="#">Sign up Now!</a>
          <a href="#">Learn more</a>
        </template>
        <h1>
          Join us for this years black friday Deals!
        </h1>
        <p>
          Get a 10% discount on your next purchase when you purchase at least $100.
        </p>
        </Modal>

    </div>
    </div>
 
</template>

<script>
import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components: {
    Modal
  },
  data (){
    return{
      title: 'My First Vue app',
      header: 'Signup for the giveaway!',
      text: 'Sign up now and win a free trip to the moon!',
      showModal : false,
  }
  },
  methods: {
    handleClick (){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleShowModal(){
      this.showModal =!this.showModal
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
  margin: 0 auto;

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
button{
  position: relative;
  z-index: 1000;
}

</style>
