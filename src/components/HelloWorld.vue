<template>
  <div class="jumbotron custom-hello-world">
    <h1 class="display-4">BlogShare</h1>
    <p class="lead">Welcome to BlogShare application. </p>
    <p class="lead">BlogShare is an online magazine or informative website that displays
      information in reverse chronological order, with the most recent posts first. It is
      a platform where users can share their knowledge, experience or views on a specific
      topic in their own way.</p>
    <p class="lead">Blogi requires registration, after which the user can post, edit, or cancel own
      blog posts. In addition, user can add new categories and react to other
      people's blogs by commenting.</p>
    <hr class="my-4">
    <p>Click below to register</p>

    <span><router-link class="btn btn-primary btn-lg" to="/register">Register Now</router-link></span>

    <span><router-link class="btn btn-primary btn-lg" id="loginBtn" to="/login">Login</router-link></span>

    <p>BlogShare built with NodeJS, ExpressJS,
      VueJS and MongoDB technologies.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loginBtn{
margin-left: 20px;
}
</style>
