<template lang="html">

     <div class="card">
       <img class="card-img-top " :src=this.imagen  ><!--  -->
        <div class="card-body" >
          <h3 class="card-title"> {{this.titulo}}  -  {{this.fecha}}</h3> 
          <p class="card-text">{{this.titulo}}</p>
        </div>
      </div>

</template>

<script lang="js">


  export default  {
    name: 'noticia',
    props: ['titulo','imagen','descripcion','autor','url','fecha','contenido'],
    data () {
      return {
        
      }
    },
    methods: {
                    
    },
    computed: {

    },
    
}


</script>

<style scoped>
  .card {
    width: 100%;
    border-radius: 15px;
    margin: 1rem auto;
    padding: 1rem;
    animation-name: animacion;
    animation-duration: 0.5s;
  }
  @keyframes animacion {
    from {transform: scale(0.5); opacity: 0.5;}
    to {transform: scale(1); opacity: 1;}
  }
  .card:hover{
    transform: scale(0.98);
  }
</style>
