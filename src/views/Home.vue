<template>
  <div id="custom-home">
   <!-- <HelloWorld/>-->
    <div class="jumbotron custom-hello-world my-0">
      <h1 class="display-5">BlogShare</h1>
      <p class="text" style="color:#424242">Welcome to BlogShare application. </p>

      <p class="lead">BlogShare is an online magazine or informative website that displays
        information in reverse chronological order, with the most recent blogs first. It is
        a platform where users can share their knowledge, experience or views on a specific
        topic in their own way.</p>
      <p class="text" style="color:#424242">Blogi requires registration or log in, after which the user can post, edit, or delete own
        blog posts. In addition, user can add new categories, view a certain category's blogs and react to other
        people's blogs by commenting.</p>
      <hr class="my-4">
      <p>Click below to register or log in</p>

      <span><router-link class="btn btn-primary" to="/register">Register Now</router-link></span>

      <span><router-link class="btn btn-primary" id="loginBtn" to="/login">Log In</router-link></span>

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
  /*
  beforeCreate: function() {
   fetch('http://localhost:3000/api/user')
   .then(res=> window.console.log(res)) ;
  }
*/

}
</script>

<style scoped>
  #loginBtn{
    margin-left: 20px;
  }
  div#custom-home{

max-width: 60rem;
    font-family: 'Roboto', sans-serif !important;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3.2rem;
    justify-content: center;
    align-items: center;
   /* border: red solid 3px;*/
    box-sizing: border-box;
    text-align: justify;
    text-justify: inter-word;
    color: #1c2a48 ;

  }

  .custom-hello-world{

    /*background-color: #ffbb33;*/

/*
    background-color: #FAD961;
background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);
*/
    /*
    background: rgb(0,11,36);
    background: linear-gradient(90deg, rgba(0,11,36,1) 0%, rgba(79,195,247,1) 0%, rgba(2,119,189,1) 100%);
*/
/*

    background: rgb(0,11,36);
    background: linear-gradient(90deg, rgba(0,11,36,1) 0%, rgba(247,107,28,1) 0%, rgba(250,217,97,1) 100%);
    */
    background: rgb(3,169,244) !important;
    background: linear-gradient(90deg, rgba(3,169,244,1) 0%, rgba(187,222,251,1) 100%) !important;


  }
  {
  .lead{
    line-height: 12px !important;

  }
  }
  @media screen and (max-width: 767px) {
    div#custom-home{

    /* margin-top: 1.9rem;*/
//margin-top: 1.1rem;

    }

  }
  @media screen and (max-width: 500px) {
    div#custom-home {

      margin-top: -0.29rem;
    //margin-top: 1.1rem;

    }
  }

</style>
