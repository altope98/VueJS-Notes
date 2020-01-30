<template lang="html">

<div class="container-fluid">
  
    <input type="text" v-model="texto" v-on:keypress.enter="crearNota" >
    <button v-on:click="crearNota">Add</button>

     <!-- <input type="text" v-model="busqueda" > -->
    

  <section class="lista-notas">
    <p>Tienes un total de {{total}} tareas, pendientes {{pendientes}}</p>
      <button v-on:click="del_completadas">Eliminar completadas</button>
      <nota v-for="(elemento,index) in arr" 
      v-bind:key="index" 
      v-bind:clave="index"
      v-bind:text="elemento.text" 
      v-bind:seleccion="elemento.seleccion" 
      v-bind:prioridad="elemento.prioridad" 
      v-bind:fecha="elemento.fecha"
      @pulsadocheck="comprobacion(elemento)" 
      @pulsadocambio="cambiarprioridad" 
      @pulsadoborrar="del_nota(index)"/>
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
        this.total = JSON.parse(localStorage.getItem('total'));
        this.pendientes = JSON.parse(localStorage.getItem('pendientes'));
      }
    },
    data(){
      return{
        texto: '',
        busqueda: '',
        arr:[],
        completadas: 0,
        pendientes: 0,
        total: 0,
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
        this.completadas++;
        this.pendientes=this.total-this.completadas;
      }else{
        elemento.seleccion=false;
        this.completadas--;
         this.pendientes=this.total-this.completadas;
      }
      localStorage.notas=JSON.stringify(this.arr);
      localStorage.pendientes=JSON.stringify(this.pendientes);
    },
    crearNota: function(){
      let d=new Date();
      this.fecha=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
      this.arr.push({ text: this.texto, seleccion: false, prioridad: 0, fecha: new Date().toLocaleString("es-ES")});
      this.texto='';
      this.total++;
      this.pendientes++;
      this.ordenar();
      localStorage.notas=JSON.stringify(this.arr);
      localStorage.total=JSON.stringify(this.total);
      localStorage.pendientes=JSON.stringify(this.pendientes);
    },
    del_completadas: function () {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].seleccion == true) {
          this.arr.splice(i,1);
          this.total--;
          this.completadas--;
        }
      }
      localStorage.notas=JSON.stringify(this.arr);
      localStorage.total=JSON.stringify(this.total);
    },
    del_nota: function(index){
      this.arr.splice(index,1);
      this.total--;
      this.pendientes--
      localStorage.notas=JSON.stringify(this.arr);
      localStorage.pendientes=JSON.stringify(this.pendientes);
      localStorage.total=JSON.stringify(this.total);

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
      
    }
}


</script>

<style scoped >
.lista-notas {
}
</style>
