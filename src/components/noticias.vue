<template lang="html">

  <section class="noticias">
    <h1>noticias Component</h1>
  </section>

</template>

<script lang="js">
import axios from 'axios'

  export default  {
    name: 'noticias',
    props: [],
    data () {
      return {

      }
    },
    methods: {
      getNews: function(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=cb307264ad4d4cdbbeeb28abd216bf26")
            .then(
              response =>{
                console.log(response)
              },
              error =>{
                console.log(error)
              })
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

<style scoped >
  .noticias {

  }
</style>
