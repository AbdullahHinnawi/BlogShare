<template>
    <div>
        <h2 class="custom-form">Register</h2>
        <form class="custom-form" v-on:submit.prevent="onSubmit">

            <div class="form-group">
                <label for="username">First Name</label>
                <input v-model="firstname" type="text" class="form-control" id="firstname" placeholder="First Name">
            </div>
            <div class="form-group">
                <label for="username">Last Name</label>
                <input v-model="lastname" type="text" class="form-control" id="lastname" placeholder="Last Name">
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
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
  export default {
    name: 'Register.vue',
    data: function(){
      return {
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        message:'',
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        showDismissibleAlertSuccess: false
      }
    },
    methods:{
      onSubmit: async function() {
        const user ={
          firstname: this.firstname,
          lastname:this.lastname,
          username: this.username,
          password: this.password
        };
        await axios.get('http://localhost:3000/api/users/'+ user.username).then(async res => {
          window.console.log('res.data.message', res.data.message);
          if (res.data.message === true) {
            this.showDismissibleAlertSuccess= false;
            this.showDismissibleAlert= true;
            this.message="The username is already registered!";

          } else {
            this.showDismissibleAlert= false;
            this.showDismissibleAlertSuccess= true;
            const registerPromise = auth.registerUser(user);
            const loginPromise = auth.login(user);
            await Promise.all([registerPromise, loginPromise]);
            this.message="Registered! Successfully!";
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



</style>