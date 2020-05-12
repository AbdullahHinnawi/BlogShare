<template>
    <div class="login-div">
        <h2 class="custom-form">Log In</h2>
        <form class="custom-form" v-on:submit.prevent="onSubmit">

            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Log In</button>
            </div>

            <!--ALERT-->
            <div>

                <b-alert v-model="showDismissibleAlertSuccess" :max="dismissSecs" @dismissed="dismissCountDown=0" dismissible variant="success" class="m-2">
                    {{message}}
                </b-alert>

                <b-alert v-model="showDismissibleAlert"  :max="dismissSecs" @dismissed="dismissCountDown=0" dismissible variant="danger" class="m-2">
                    {{message}}
                </b-alert>


            </div>





        </form>
    </div>
</template>

<script>
    import * as auth from '../../authService';
    import {baseUrl} from '../../baseurl';
    import axios from 'axios';
  export default {
    name: 'Login.vue',
    data: function() {
      return {
        username: '',
        password: '',
        message: '',
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        showDismissibleAlertSuccess: false
      }
    },
    methods: {
      onSubmit: async function() {
        const user = {
          username: this.username,
          password: this.password
        };
        window.console.log("process.env.NODE_ENV: ",process.env.NODE_ENV);

        await axios.get(baseUrl+'/api/users/' + user.username).then(async res => {
          window.console.log('res.data.message', res.data.message);
          if (res.data.message === true) {
            await auth.login(user);
            if (this.$store.state.isLoggedIn) {
              this.showDismissibleAlert = false;
              this.showDismissibleAlertSuccess = true;
              this.message = 'Logged in successfully!';
            }
            this.$router.push({name: 'all-blogs'});
          } else {
            this.showDismissibleAlertSuccess = false;
            this.showDismissibleAlert = true;
            this.message = 'Invalid username or password!';
          }

        }).catch(error => {
          window.console.log(error);
        });


        /*
        await auth.login(user);
        if(this.$store.state.isLoggedIn){
          this.showDismissibleAlert= false;
          this.showDismissibleAlertSuccess= true;
          this.message='Logged in successfully!';

        }else{
         this.showDismissibleAlertSuccess= false;
         this.showDismissibleAlert= true;
          this.message='Invalid username or password!';
        }
        this.$router.push({name: 'all-blogs'});
        */

      }

      },

  }
</script>

<style scoped>






</style>