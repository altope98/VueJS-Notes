<template>
  <div id="app" class="container">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <header class="header">
        <label class="h1">Proyecto Vue.js - Álvaro Torrente Pérez</label>
        <nav class="navbar navbar-expand-lg" >
        <div class="collapse navbar-collapse justify-content-center">
          <li class="nav-item active" style="margin-right:20px;">
            <router-link to="/inicio" style="color:#ffff; background-color:#a14421; "  class="p-2 btn ">Notas</router-link> 
          </li> |
          <li class="nav-item active" style="margin-left:20px;">
             <router-link to="/noticias" style="color:#ffff; background-color:#a14421; " class="p-2 btn ">Noticias</router-link>
          </li>
       </div>
      </nav>
    </header>

        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      <br>
      <pie></pie>
      
  </div>
</template>

<script>
import pie from './components/pie'
export default {
  name: 'app',
  components: {
    pie
  },
  mounted () {
    
    },
    data(){
      return{
        
      }
    },
  methods:{

  }
}
</script>

<style>
li{
  display: inline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
  margin-top: 60px;

}



  


</style>
