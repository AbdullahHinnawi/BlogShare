<template>
  <div id="custom-home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeCreate: function() {
   fetch('http://localhost:3000/api/user')
   .then(res=> window.console.log(res)) ;
  }


}
</script>
