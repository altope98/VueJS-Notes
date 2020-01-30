<template lang="html">

  <section class="tiempo">
    <h1>tiempo Component</h1>
  </section>

</template>

<script lang="js">
import axios from 'axios'
  export default  {
    name: 'tiempo',
    props: [],
    
    
    data () {
      return {
        lat:'',
        lon:'',
      }
    },
    methods: {
      Tiempo: function() {
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.getPosition);
        }else{
          this.error = "Geolocation is not supported."; 
        }
      },

      getPosition: function(position){
          axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&units=metric&appid=7d83aa735d96277f854a9eb6d12c51dc")
            .then(response => console.log(response))
      }     
      
    },
    computed: {

    },
    mounted(){
      setTimeout(this.Tiempo,600000);  
    },
    beforeMount(){
      this.Tiempo();
    },
}


</script>

<style scoped >
  .tiempo {

  }
</style>
