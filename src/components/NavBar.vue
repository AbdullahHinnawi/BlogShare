<template>
<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
        <router-link to="/" class="navbar-brand">
            <img src="../assets/logo.png" style="max-height: 25px;"/>BlogShare
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"  id="navbarCollapse">
            <ul  class="navbar-nav mr-auto">
                <li v-if="!$store.state.isLoggedIn" class="nav-item">
                    <router-link to="/" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>
                        Home
                    </router-link>
                </li>
                <li   v-if="$store.state.isLoggedIn" class="nav-item">
                    <router-link to="/blogs" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>
                        Blogs
                    </router-link>
                </li>
                <li   v-if="$store.state.isLoggedIn" class="nav-item">
                    <router-link to="/myblogs" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>
                        My Blogs
                    </router-link>
                </li>
                <li v-if="$store.state.isLoggedIn" class="nav-item">
                    <router-link to="/create-blog" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>
                        Create Blog
                    </router-link>
                </li>
                <li v-if="$store.state.isLoggedIn" class="nav-item">
                    <router-link to="/add-category" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>
                        Add Category
                    </router-link>
                </li>
                <li v-if="!$store.state.isLoggedIn" class="nav-item">
                    <router-link to="/register" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>
                        Register
                    </router-link>
                </li>
                <li v-if="!$store.state.isLoggedIn" class="nav-item">
                    <router-link to="/login" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>
                        Login
                    </router-link>
                </li>
                <li v-if="$store.state.isLoggedIn" class="nav-item">
                    <a v-on:click.prevent="logout" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Logout</a>
                </li>
                <li class="nav-item">
                    <!-- bring in the state username,
                    then if it exist it will be this.$store.state.username
                    otherwise set it to 'User'
                    -->
                    <a id="nav-username" class="nav-link" href="#" data-toggle="collapse" data-target=".navbar-collapse.show" >{{this.$store.state.username ?
                        this.$store.state.username : 'User'}}</a>
                </li>
            </ul>

        </div>
    </nav>
</header>
</template>


<script>
    import * as auth from '../authService';
    export default {
      name: 'NavBar',
      methods: {
        logout: function(){
          auth.logout();
          this.$router.push({name: 'home'});

        }
      }
    }


</script>

<style scoped>
    nav.navbar{
        height: 4rem;
    }
    a.navbar-brand{
        /*text-transform: uppercase;
        letter-spacing: 1px;*/
    }
    li.nav-item a {
        text-transform: uppercase;
    }
    #nav-username {
        text-transform: none;
    }
    .navbar-toggler{

        background: rgb(0,11,36) !important;
        background: linear-gradient(90deg, rgba(0,11,36,1) 0%, rgba(2,119,189,1) 0%,rgba(13,71,161,1) 100%) !important;
       /*
        background: rgb(255,202,40);
        background: linear-gradient(0deg, rgba(255,202,40,1) 0%, rgba(255,111,0,1) 100%);
        */
    }
    @media screen and (max-width: 767px) {
        div#navbarCollapse{
            /* background-color: #001943 !important;*/
           /*background-color: #0d47a1 !important;*/
            /*  background-color: #FFD100 !important;*/
            /*
            #f76b1c
            #fad961
            */
            /*
            background: rgb(0,11,36) !important;
            background: linear-gradient(90deg, rgba(0,11,36,1) 0%, rgba(13,71,161,1) 0%, rgba(2,119,189,1) 100%) !important;
            */
            background: rgb(13,71,161);
            background: linear-gradient(90deg, rgba(13,71,161,1) 0%, rgba(3,169,244,1) 100%);
            /*
            background: rgb(0,11,36);
            background: linear-gradient(90deg, rgba(0,11,36,1) 0%, rgba(255,111,0,1) 0%, rgba(255,152,0,1) 100%);
            */
            width: 100%;
            position: fixed;
            top: 60px;
            left: 0;
            padding-left: 20px;
            padding-bottom: 5px;
        }

    }
    .custom-bg-dark {
        /* to overide bootstrap use important*/
        /* background-color: #001943 !important;*/
       /* background-color: #0d47a1 !important;*/

        /*
        background: rgb(0,11,36) !important;
        background: linear-gradient(90deg, rgba(0,11,36,1) 0%, rgba(13,71,161,1) 0%, rgba(2,119,189,1) 100%) !important;
*/
        background: rgb(13,71,161);
        background: linear-gradient(90deg, rgba(13,71,161,1) 0%, rgba(3,169,244,1) 100%);




    }


</style>
