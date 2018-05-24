<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
  
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:url('./assets/images/bg.jpg') repeat;
  transition: all 0.3s ease-in-out;
  width:100%;
  height:100%;
  min-width: 1000px;
  zoom: 1;
}
@font-face {
    font-family:  "方正正黑简体";
    src: url('./assets/font/方正正黑简体.ttf');
    font-weight: normal;
    font-style: normal;
}
body {
    font-family:  "方正正黑简体";
    margin:0;
}
 
</style>
