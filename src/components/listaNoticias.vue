<template lang="html">

<div onscroll="scroll()">
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
    <noticia  v-for="(elemento, index) in datos" v-bind:key="index" 
      v-bind:titulo="elemento.title" 
      v-bind:imagen="elemento.urlToImage"
      v-bind:descripcion="elemento.description"
      v-bind:autor="elemento.author"
      v-bind:url="elemento.url"
      v-bind:fecha="elemento.publishedAt"
      v-bind:contenido="elemento.content"
      >
    </noticia>
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
        page:0
      }
    },
    methods: {
      getNews: function(){
        //this.$refs.lista.html('<img src="https://www.cattani.it/wp-content/uploads/2016/08/ajax-loading.gif" alt="loading" />');
            axios.get("https://newsapi.org/v2/top-headlines?country=gb&apiKey=cb307264ad4d4cdbbeeb28abd216bf26&category="+this.categoria+"&page=1&pageSize=10")
            .then(
              response =>{
                //this.$refs.lista.fadeIn(1000).html("");
                //console.log(response);
                this.datos=response.data.articles;
                console.log(this.datos);
                this.page=1;
                },
              error =>{
                console.log(error)
              })
      },
      scroll: function(){
        console.log("blas");
        window.onscroll = () => {
          if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight) {
          this.page++;
          axios.get("https://newsapi.org/v2/top-headlines?country=gb&apiKey=cb307264ad4d4cdbbeeb28abd216bf26&category="+this.categoria+"&page="+this.page+"&pageSize=10")
            .then(
              response =>{
                this.datos=response.data.articles;
                console.log(this.datos);
                },
              error =>{
                console.log(error)
              });
          }
        }
      },

      

    },
    computed: {
        
    },
    mounted(){
      setTimeout(this.getNews,600000); 
      this.scroll(); 
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
</style>
