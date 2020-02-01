<template lang="html">
  <div class="observer"></div>
</template>

<script lang="js">

  export default  {
    name: 'scrollObserver',
    props: [],
    mounted () {
      this.observer=new IntersectionObserver(([entry])=>{
        if(entry && entry.isIntersecting){
          this.$emit('intersect')
        }
      });
      this.observer.observe(this.$el);
    },
    data () {
      return {
        observer:null
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
  .observer {

  }
</style>
