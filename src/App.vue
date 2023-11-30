<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="text-8xl text-blue-600">Igor Vue2 tailwind starter</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data(){
    return {

    }
  },
  mounted () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
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
</style>
