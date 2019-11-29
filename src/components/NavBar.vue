<template>
<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
        <router-link to="/" class="navbar-brand">
            <img src="../assets/logo.png" style="max-height: 25px;"/>Blogi
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" exact>
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blogs" class="nav-link" exact>
                        Blogs
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create-blog" class="nav-link" exact>
                        Create Blog
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blogs/:id" class="nav-link" exact>
                        Edit Blog
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/add-category" class="nav-link" exact>
                        Add Category
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/register" class="nav-link" exact>
                        Register
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link" exact>
                        Login
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
                <li class="nav-item">
                    <!-- bring in the state username,
                    then if it exist it will be this.$store.state.username
                    otherwise set it to 'User'
                    -->
                    <a class="nav-link" href="#">{{this.$store.state.username ?
                        this.$store.state.username : 'User'}}</a>
                </li>
            </ul>

        </div>
    </nav>
</header>
</template>
