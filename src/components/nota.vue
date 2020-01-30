<template lang="html">
  

    <div class="nota">
    <input type="checkbox" v-model="seleccion" @click="check"> 
    <label  v-bind:class="{tachado:seleccion}" >{{text}}</label> <!-- v-bind:class="{changeprioridad:prioridad}" -->
    <label>Prioridad:</label>
        <button  @click="pulsadocambio(0)" class="btn btn-danger">Low</button>
        <button  @click="pulsadocambio(1)">Normal</button>
        <button  @click="pulsadocambio(2)">High</button>
    
    <label>Agregada {{ this.fecha}}</label><!--  -->
    <button @click="pulsadoborrar()">Borrar</button>
    
    </div>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    props: ['text', 'seleccion', 'prioridad', 'clave', 'fecha'],
    
    data() {
    return {
    };
  },
    methods: {
      check: function () {
        this.$emit("pulsadocheck")
      },
      pulsadocambio:function (value) {
        
        this.$emit("pulsadocambio",{'clave':this.clave, 'prioridad':value})
      },
      pulsadoborrar:function () {
        this.$emit("pulsadoborrar")
      },
     
    },
    
    computed: {

    }
}


</script>

<style scoped >
.tachado{
  text-decoration: line-through;
    background-color: green;
}
.nota {
  animation-duration: 2s;
  animation-name: slideInLeft;
}

@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}


</style>

