<template lang="html">
  

    <div class="nota">
      <div class="contenido">
    <a  class=" fa fa-circle-o  " style="float: left;margin: 3rem;font-size: 25px;" v-bind:seleccion="this.seleccion" v-if="this.seleccion==false" @click="check"/>
    <a  v-else class=" fa fa-check-circle" style="color:#00bc8c;float: left;margin: 3rem;font-size: 25px;"  v-bind:seleccion="this.seleccion" @click="check"/>
    <label  v-bind:class="{tachado:seleccion}" class="h2" style="float:left;margin-top: 2.5rem;">{{text}}</label>
    <button @click="pulsadoborrar()" style="float: right;margin: 3rem;" class="h2 fa fa-minus-circle boton-borrar"></button>
    </div>
    <div class="prioridad">
    <label >Prioridad:</label>

        <a v-if="this.prioridad==0" style="background-color:#2e87c3;"  @click="pulsadocambio(0)" class="btn btn-success">Low <i class="fa fa-angle-down" aria-hidden="true"></i></a>
        <a v-else @click="pulsadocambio(0)"  style="background-color:#3c3b3b; color:#707070" class="btn btn-secondary">Low <i class="fa fa-angle-down" aria-hidden="true"></i></a>

        <a v-if="this.prioridad==1" style="background-color:#375a7f;"  @click="pulsadocambio(1)" class="btn btn-primary">Normal</a>
        <a v-else @click="pulsadocambio(1)"  style="background-color:#3c3b3b; color:#707070" class="btn btn-secondary">Normal</a>

        <a v-if="this.prioridad==2" style="background-color:#e74c3c;"  @click="pulsadocambio(2)" class="btn btn-danger">High <i class="fa fa-angle-up" aria-hidden="true"></i></a>
        <a v-else @click="pulsadocambio(2)"  style="background-color:#3c3b3b; color:#707070" class="btn btn-secondary">High <i class="fa fa-angle-up" aria-hidden="true"></i></a>
    
    <label><i class="fa fa-clock-o" aria-hidden="true"></i> Agregada {{ this.fecha}}</label>
    </div>
    
    
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
.nota{
  background-color: #303030;
  display: inline-block;
  margin: 0 10px;
  padding: 0;
  border:1px solid #9f9f9f;
  width: 100%;
}


.tachado{
  text-decoration: line-through;
  color: #00bc8c;
}

.prioridad{
  margin-top:6rem;
  margin-bottom: 1rem;
  display: flex;
  flex-flow: row nowrap;
  float: left;
  
}

.prioridad a{
  text-decoration: none;
  font-size:0.6rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}

.prioridad label{
  font-size:0.8rem;
  margin-left: 1rem;
}

.boton-borrar{
  background-color: #e74c3c;
  color: #ffff;
  border: 0;
  font-size: 2rem;
  border-radius: 10px;
  width: 3rem;
  height: 3rem;

}
/* .prioridad button{
  width: 4rem;
  height: 3rem;
} */
</style>

