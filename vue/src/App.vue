<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <h4>XX원룸</h4>
       <p>{{price1}}만원</p>
    </div>
    <div>
      <h4>XX원룸</h4>
       <p>{{price2}}만원</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

export default {
    name: 'App',
    data(){
        return{
            price1: 60,
            price2: 70
        }
    }
} 
</script>

<style>
#app {
  font-family: Aver, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
