<template>
 <div>
    <SignupForm/>
 </div>
</template>

<script>
import SignupForm from './components/signupForm.vue'

export default {
  name: 'App',
  components: {
    SignupForm,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  margin-top: 60px;
}
</style>
