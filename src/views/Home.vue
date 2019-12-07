<template>
  <div id="custom-home">
   <!-- <HelloWorld/>-->
    <div class="jumbotron custom-hello-world my-0">
      <h1 class="display-5">BlogShare</h1>
      <p class="text-primary">Welcome to BlogShare application. </p>
      <p class="lead">BlogShare is an online magazine or informative website that displays
        information in reverse chronological order, with the most recent posts first. It is
        a platform where users can share their knowledge, experience or views on a specific
        topic in their own way.</p>
      <p class="text-primary">Blogi requires registration, after which the user can post, edit, or cancel own
        blog posts. In addition, user can add new categories and react to other
        people's blogs by commenting.</p>
      <hr class="my-4">
      <p>Click below to register or to login</p>

      <span><router-link class="btn btn-primary btn-lg" to="/register">Register Now</router-link></span>

      <span><router-link class="btn btn-primary btn-lg" id="loginBtn" to="/login">Login</router-link></span>

      <!--
      <hr class="my-4">
      <p class="footer">BlogShare built with NodeJS, ExpressJS,
        VueJS, Bootstrap and MongoDB technologies.</p>
        -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
   // HelloWorld
  },
  beforeCreate: function() {
   fetch('http://localhost:3000/api/user')
   .then(res=> window.console.log(res)) ;
  }


}
</script>

<style scoped>
  #loginBtn{
    margin-left: 20px;
  }
  div#custom-home{

max-width: 60rem;


    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3.2rem;

    justify-content: center;
    align-items: center;


   /* border: red solid 3px;*/
    box-sizing: border-box;





  }

  .custom-hello-world{

    background-color: #ffbb33;

  }
  @media screen and (max-width: 767px) {
    div#custom-home{

      margin-top: 0.2rem;
//margin-top: 1.1rem;



    }

  }
</style>
