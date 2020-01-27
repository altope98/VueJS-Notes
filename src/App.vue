<template>
  <div id="app">
    <header class="header">
        <!-- titulo -->
        <!-- menu -->
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
//import nota from './components/nota.vue'

 
export default {
  name: 'app',
  components: {
    //nota,
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
