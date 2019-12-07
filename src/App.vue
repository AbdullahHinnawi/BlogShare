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
      FooterComponent
    },
    beforeCreate() {
      // make an authentication check
      this.$store.dispatch('authenticate');
    }
  }

</script>

<style>

</style>
