<template lang="html">
  

    <div class="nota">
    <input type="checkbox" v-model="seleccion" @click="check"> 
    <label  v-bind:class="{tachado:seleccion}" >{{text}}</label> <!-- v-bind:class="{changeprioridad:prioridad}" -->
    <label>Prioridad:</label>
        <button  @click="pulsadocambio(0)">Low</button>
        <button  @click="pulsadocambio(1)">Normal</button>
        <button  @click="pulsadocambio(2)">High</button>
    
    <label>Agregada hace {{transcurrido}}</label>
    <button @click="pulsadoborrar()">Borrar</button>
    
    </div>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    props: ['text', 'seleccion', 'prioridad', 'clave'],
    
    data() {
    return {
      transcurrido: "-",
      temporizador:0,
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
      /*intervalo: function () {   
        setInterval(() => {
            if(this.transcurrido=="-"){
                this.transcurrido=this.temporizador+" minuto";
            }else{
                this.temporizador++;
                this.transcurrido=this.temporizador+" minutos";
            } 
          }, 60000);
      },*/
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

