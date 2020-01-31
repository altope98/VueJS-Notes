<template lang="html">

<div v-infinite-scroll="getNewsScroll" infinite-scroll-disabled="cargando" infinite-scroll-distance="500" >
  <select v-model="categoria" @change="getNews" >
    <option selected >general</option>
    <option>business</option>
    <option>entertainment</option>
    <option>health</option>
    <option>science</option>
    <option>sports</option>
    <option>technology</option>
  </select>

  <div class="lista-noticias container-fluid"  >
    <transition-group name="animacion">
    <noticia  v-for="(elemento, index) in datos" v-bind:key="index" 
      v-bind:titulo="elemento.title" 
      v-bind:imagen="elemento.urlToImage"
      v-bind:descripcion="elemento.description"
      v-bind:autor="elemento.author"
      v-bind:url="elemento.url"
      v-bind:fecha="elemento.publishedAt"
      v-bind:contenido="elemento.content"
      ></noticia>
    </transition-group>
  </div>

  </div>

</template>

<script lang="js">

import axios from 'axios'
import noticia from './noticia.vue'
  export default  {
    name: 'lista-noticias',
    components: {
      noticia
    },
    props: [],
    data () {
      return {
        datos:[],
        categoria:'general',
        page:0,
        cargando: false,
        total:0
      }
    },
    methods: {
      getNews: function(){
            axios.get("https://newsapi.org/v2/top-headlines?country=gb&apiKey=cb307264ad4d4cdbbeeb28abd216bf26&category="+this.categoria+"&page=1&pageSize=10")
            .then(
              response =>{
                this.datos=response.data.articles;
                console.log(response.data);
                this.page=1;
                this.total=(parseInt(response.data.totalResults)-10);
                },
              error =>{
                console.log(error)
              })
      },

      getNewsScroll: function(){
        this.cargando=true;
        window.scrollBy(0,-300);
          this.page++;
          if((this.total)-10>=1 ){
          axios.get("https://newsapi.org/v2/top-headlines?country=gb&apiKey=cb307264ad4d4cdbbeeb28abd216bf26&category="+this.categoria+"&page="+this.page+"&pageSize=10")
            .then(
              response =>{
                this.datos=response.data.articles;
                this.total=this.total-10;
                },
              error =>{
                console.log(error)
              });
              
          } 
          this.cargando=false;      
      },
    },
    computed: {
        
    },
    mounted(){
      setTimeout(this.getNews,600000); 
    },
    beforeMount(){
      this.getNews();
    },
}
</script>

<style scoped>
  .lista-noticias {
    display: flex;
    flex-flow: column nowrap;
    margin:auto 0;
  }

  .animacion-enter-active {
  transition: all 1.5s ease;
}
.animacion-enter{
  transform: translateX(-1000px);
  opacity: 0;
}
</style>
