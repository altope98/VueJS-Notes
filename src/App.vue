<template>
  <div id="app" class="container">
    <header class="header">
        <label class="h1">Proyecto Vue.js - Álvaro Torrente Pérez</label>
        <nav class="navbar navbar-expand-lg" >
        <div class="collapse navbar-collapse justify-content-center">
          <li class="nav-item active" style="margin-right:20px;">
            <router-link to="/inicio" style="color:green;">Notas</router-link> | 
          </li> |
          <li class="nav-item active">
             <router-link to="/noticias" style="color:green;">Noticias</router-link>
          </li>
       </div>
      </nav>
    </header>

        <keep-alive>
          <router-view></router-view>
        </keep-alive>

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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
