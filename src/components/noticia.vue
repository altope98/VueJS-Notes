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
      

                /*let listaNoticias = $("#scrolls");
                $("#scrolls").css({ 'display': 'flex', 'flex-flow': 'row wrap' ,'margin':'auto 0'});
                //, 'align-items': 'center'
                $('#scrolls').fadeIn(1000).html("");
                $.each(response.Search, function (articles, index) {
                listaNoticias.append(
                    '<h1>'+articles.author+'</h1>'*/

                    /* '<div class="card" style="width: 18rem;" id="detalle">' +
                    '<img id="' + articles.author + '" class="card-img-top "  src="' + item.Poster + '" onclick="mostrarDetalle()">' +
                    '<div class="card-body" >' +
                    '<h3 class="card-title">' + item.Title + ' - ' + item.Year + '</h3> ' +
                    '<p class="card-text"></p></div></div>' */
                //);
            //});
            //page = 1;
              
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
