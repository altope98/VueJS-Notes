<template lang="html">

<div class="container-fluid">
  
    <input type="text" v-model="texto" placeholder="Busca o introduce nueva nota" v-on:keypress.enter="crearNota" >
    <button v-on:click="crearNota">Add</button>

    

  <section class="lista-notas">
    <p>Tienes un total de {{totalTareas}} tareas, completadas {{totalCompletadas}}</p>
      <button v-on:click="del_completadas">Eliminar completadas</button>
      <transition-group name="animacion">
        <nota v-for="(elemento,index) in filtrar" 
        v-bind:key="index" 
        v-bind:clave="index"
        v-bind:text="elemento.text" 
        v-bind:seleccion="elemento.seleccion" 
        v-bind:prioridad="elemento.prioridad" 
        v-bind:fecha="elemento.fecha"
        @pulsadocheck="comprobacion(elemento)" 
        @pulsadocambio="cambiarprioridad" 
        @pulsadoborrar="del_nota(index)"/>
      </transition-group>
  </section>
</div>
</template>

<script lang="js">

import nota from './nota.vue'

  export default  {
    name: 'lista-notas',
    components: {
      nota
    },
    props: [],
    mounted () {
      if (localStorage.getItem('notas')) {
        this.arr = JSON.parse(localStorage.getItem('notas'));
        this.ordenar();
      }
    },
    data(){
      return{
        texto: '',
        arr:[],
        fecha: ''
      }
    },
    methods: {
      
    cambiarprioridad: function(value){
      this.arr[value.clave].prioridad=value.prioridad;
      localStorage.notas=JSON.stringify(this.arr);
      this.ordenar();
    },
    comprobacion: function (elemento) {
      if(elemento.seleccion==false){
        elemento.seleccion=true;
      }else{
        elemento.seleccion=false;
      }
      localStorage.notas=JSON.stringify(this.arr);
    },
    crearNota: function(){
      this.arr.push({ text: this.texto, seleccion: false, prioridad: 0, fecha: new Date().toLocaleString("es-ES")});
      this.texto='';
      this.ordenar();
      localStorage.notas=JSON.stringify(this.arr);
    },
    del_completadas: function () {
      this.arr=this.arr.filter(e=>{return !e.seleccion;});
      localStorage.notas=JSON.stringify(this.arr);
    },
    del_nota: function(index){
      this.arr.splice(index,1);
      localStorage.notas=JSON.stringify(this.arr);


    },

    ordenar: function(){
       this.arr=this.arr.sort(function (a, b) {
        if (b.prioridad > a.prioridad) {
          return 1;
        }
        if (b.prioridad < a.prioridad) {
          return -1;
        }
        return 0;
      }); 

    },

    },
    computed: {
      filtrar: function () {
        var vm = this;
        return this.arr.filter(function (elemento) {
          return elemento.text.toLowerCase().indexOf(vm.texto.toLowerCase()) !== -1;
        })
      },

      totalTareas: function(){
        return this.arr.length;
      },
      totalCompletadas: function(){
        let completadas=0;
        for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].seleccion == true) {
          completadas++;
          
          }
        }
        return completadas;
      }
    }
}


</script>

<style scoped >


.animacion-enter-active {
  transition: all 1.5s ease;
}
.animacion-enter{
  transform: translateX(-1000px);
  opacity: 0;
}

.lista-notas {
}
</style>
