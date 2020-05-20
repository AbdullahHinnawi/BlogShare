<template>
    <div id="login" class="login-div">
        <h2 class="custom-form">Log In</h2>
        <form class="custom-form" v-on:submit.prevent="onSubmit">

            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="user.username" type="text" class="form-control" id="username" placeholder="Username" :class="{ 'is-invalid': submitted && $v.user.username.$error }">
                <div v-if="submitted && $v.user.username.$error" class="invalid-feedback">
                    <span v-if="!$v.user.username.required">Username is required</span>
                </div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Password" :class="{ 'is-invalid': submitted && $v.user.password.$error }">
                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                    <span v-if="!$v.user.password.required">Password is required</span>
                </div>
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
    import {required} from "vuelidate/lib/validators";
  export default {
    name: 'Login.vue',
    data: function() {
      return {
        user:{
          username: '',
          password: ''
        },
        submitted: false,
        message: '',
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        showDismissibleAlertSuccess: false
      }
    },
    validations: {
      user: {
        username: { required },
        password: { required}
      }
    },
    methods: {
      onSubmit: async function() {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if(this.$v.$invalid){
          return;
        }
        const user = {
          username: this.user.username,
          password: this.user.password
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
          } else { // username not found req.data.message = false
            this.showDismissibleAlertSuccess = false;
            this.showDismissibleAlert = true;
            this.message = 'Invalid username or password!';
          }

        }).catch(error => { // 401 (Unauthorized) Invalid password
          window.console.log(error);
          this.showDismissibleAlertSuccess = false;
          this.showDismissibleAlert = true;
          this.message = 'Invalid username or password!';
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

#login{
    margin-bottom: 40rem;
    padding: 2rem;
}




</style>