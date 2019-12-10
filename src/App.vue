<template>
  <div id="app">
   <nav-bar/>
   <div id="app-container">
       <router-view/>
   </div>
   <footer-component/>

  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import FooterComponent from './components/FooterComponent';

  export default {
    name: 'app',
    components: {
      NavBar,
      FooterComponent,

    },
    beforeCreate() {
      // make an authentication check
      this.$store.dispatch('authenticate');
      window.console.log('Making an authentication check:',   this.$store.dispatch('authenticate'));
    }
  }

</script>

<style  >

    div#app-container{
        position: fixed;
      /* border: 3px blue solid;*/
        top: 64px;
        left: 0;
        bottom: 96px;
        width: 100%;
        padding: 2rem;
        margin-right: auto;
        margin-left: auto;




        overflow: auto; /*for scrolling*/


    }

</style>
