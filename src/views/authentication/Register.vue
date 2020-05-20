<template>
    <div id="register">
        <h2 class="custom-form">Register</h2>
        <form class="custom-form" v-on:submit.prevent="onSubmit">

            <div class="form-group">
                <label for="username">First Name</label>
                <input v-model="user.firstname" type="text" class="form-control" id="firstname" placeholder="First Name" :class="{ 'is-invalid': submitted && $v.user.firstname.$error }">
                <div v-if="submitted && !$v.user.firstname.required" class="invalid-feedback">First Name is required</div>
            </div>
            <div class="form-group">
                <label for="username">Last Name</label>
                <input v-model="user.lastname" type="text" class="form-control" id="lastname" placeholder="Last Name" :class="{ 'is-invalid': submitted && $v.user.lastname.$error }">
                <div v-if="submitted && !$v.user.lastname.required" class="invalid-feedback">Last Name is required</div>
            </div>
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
                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                </div>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" class="form-control" placeholder="Confirm Password" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                    <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                    <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
            <!--ALERT-->
            <div>
                    <b-alert v-model="showDismissibleAlert" dismissible variant="danger" class="m-2">
                         {{message}}
                    </b-alert>
                     <b-alert v-model="showDismissibleAlertSuccess" dismissible variant="success" class="m-2">
                         {{message}}
                    </b-alert>

            </div>


        </form>

    </div>
</template>

<script>
  import * as auth from '../../authService';
  import axios from 'axios';
  import {baseUrl} from '../../baseurl';
  import { required, minLength, sameAs } from "vuelidate/lib/validators";

  export default {
    name: 'Register.vue',
    data: function(){
      return {
        user:{
          firstname:'',
          lastname:'',
          username:'',
          password:'',
          confirmPassword:''
        },
        submitted:false,
        message:'',
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        showDismissibleAlertSuccess: false
      }
    },
    validations:{
      user: {
        firstname: { required },
        lastname: { required },
        username: { required},
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAsPassword: sameAs('password') }
      }
    },
    methods:{
      onSubmit: async function() {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if(this.$v.$invalid){
          return;
        }
        // Password confirmation is only on the front end.
        // We do not send password confirmation field with the user object to the server.
        const user ={
          firstname: this.user.firstname,
          lastname:this.user.lastname,
          username: this.user.username,
          password: this.user.password
        };
        await axios.get(baseUrl+'/api/users/'+ user.username).then(async res => {
          window.console.log('res.data.message', res.data.message);
          if (res.data.message === true) {
            this.showDismissibleAlertSuccess= false;
            this.showDismissibleAlert= true;
            this.message="The username is already registered!";

          } else {
            this.showDismissibleAlert= false;
            this.showDismissibleAlertSuccess= true;
            this.message="Registered! Successfully!";
            const registerPromise = auth.registerUser(user);
            const loginPromise = auth.login(user);
            await Promise.all([registerPromise, loginPromise]);
            this.$router.push({name: 'all-blogs'});
          }

        }).catch(error => {
          window.console.log(error);
        });



      }
    }
  };
</script>

<style scoped>
    #register{
        margin-bottom: 20rem;
        padding: 2rem;
    }



</style>