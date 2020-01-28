<template>
  <div id="app" class="container">
    <header class="header">
        <!-- titulo -->
        <label class="h1">Proyecto Vue.js - Álvaro Torrente Pérez</label>
        <!-- menu -->
        <nav class="navbar navbar-expand-lg" >
        <div class="collapse navbar-collapse justify-content-center">
          <li class="nav-item active" style="margin-right:20px;">
            Notes
            <!-- <router-link to="/" style="color:green;">Notes</router-link> |  -->
          </li> |
          <li class="nav-item active">
            Weather
             <!-- <router-link to="/weather" style="color:green;">Weather</router-link> -->
          </li>
       </div>
      </nav>
    </header>

    <listaNotas></listaNotas>

    <footer class="footer">
      <h6>Desarrollado por "Álvaro Torrente Pérez".</h6>
      <h6>Codigo en <a class="fa fa-github" style="font-size: 18px; color: green; text-decoration: none;" href="https://github.com/altope98/VueJS-Notes.git"> GitHub.</a></h6>
    </footer>
  </div>
</template>

<script>
import listaNotas from './components/listaNotas.vue'

export default {
  name: 'app',
  components: {
    listaNotas
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
