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
