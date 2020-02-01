<template lang="html">

<div >
  <select v-model="categoria" @change="getNews" class="form-control" style="border-radius:10px;">
    <option selected >general</option>
    <option>business</option>
    <option>entertainment</option>
    <option>health</option>
    <option>science</option>
    <option>sports</option>
    <option>technology</option>
  </select>

  <div class="lista-noticias container-fluid"  >
    <transition-group name="animacion2">
    <noticia  v-for="(elemento, index) in datos" v-bind:key="index" 
      v-bind:titulo="elemento.title" 
      v-bind:imagen="elemento.urlToImage"
      v-bind:descripcion="elemento.description"
      v-bind:autor="elemento.author"
      v-bind:url="elemento.url"
      v-bind:fecha="elemento.publishedAt"
      v-bind:contenido="elemento.content"
      v-bind:clave="index"
      ></noticia>
    </transition-group>
  </div>
  <scrollObserver @intersect="getNewsScroll"></scrollObserver>
  </div>

</template>

<script lang="js">

import axios from 'axios'
import noticia from './noticia.vue'
import scrollObserver from './scrollObserver.vue'
  export default  {
    name: 'lista-noticias',
    components: {
      noticia,
      scrollObserver
    },
    props: [],
    data () {
      return {
        datos:[],
        categoria:'general',
        page:0,
        total:0
      }
    },
    methods: {
      getNews: function(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=cb307264ad4d4cdbbeeb28abd216bf26&category="+this.categoria+"&page=1&pageSize=10")
            .then(
              response =>{
                this.datos=response.data.articles;
                console.log(this.datos);
                this.page=1;
                this.total=(parseInt(response.data.totalResults)-10);
                },
              error =>{
                console.log(error)
              })
      },

      getNewsScroll: function(){
          this.page++;
          if((this.total)-10>=1 ){
            window.scrollBy(0,-1000);
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=cb307264ad4d4cdbbeeb28abd216bf26&category="+this.categoria+"&page="+this.page+"&pageSize=10")
            .then(
              response =>{
                for (const articulo of response.data.articles) {
                  this.datos.push(articulo);
                }
                console.log(this.datos)
                this.total=this.total-10;
                },
              error =>{
                console.log(error)
              });
              
          }    
      },

      detalle: function(){
        
      }
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



.animacion2-enter-active {
  transition: all 1.5s ease;
}
.animacion2-enter{
  opacity: 0;
}

.animacion2-enter-active .animacion2-leave-active {
  transition: opacity .5s;
}
.animacion2-enter .animacion2-leave-to{
  opacity: 0;
}
</style>
