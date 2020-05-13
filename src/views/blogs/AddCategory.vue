<template>
    <div id="add-category">

        <!-- method="post" action="blogs/create" enctype="multipart/form-data"-->
        <h2 class="custom-form">Add Category</h2>
        <form class="custom-form" @submit.prevent="onSubmit">

            <div class="form-group">
                <label for="category">Category Name</label>
                <input v-model="category.name" class="form-control"  type="text" id="category" name="category" placeholder="Category Name" required/>
            </div>
            <div class="form-group">
                <button type="submit" name="submit" class="btn btn-primary">Save</button>
            </div>

        </form>
        <!--ALERT-->
        <div>
            <b-alert v-model="showDismissibleAlert" dismissible variant="danger" class="m-2">
                {{message}}
            </b-alert>
            <b-alert v-model="showDismissibleAlertSuccess" dismissible variant="success" class="m-2">
                {{message}}
            </b-alert>

        </div>



    </div>
</template>

<script>

  import axios from 'axios';
  import * as auth from '../../authService';
  import {baseUrl} from '../../baseurl';

  export default {
    name: 'AddCategory',
    components: {

    },
    data: function() {
      return{
        category:{
          name:'',
        },
        message:'',
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        showDismissibleAlertSuccess: false

      };
    },

    methods:{

      onSubmit: async function (){
       // const newCategory = {name: this.category};
        await axios.post(baseUrl+'/api/categories/add',this.category,{

          headers: {
            Authorization: auth.getToken()
          }
        }).then(async (res) => {
         // let self = this;
          window.console.log('res.data');
          window.console.log(res.data);
          this.message = res.data.message;
          if (res.data.message === "Category Saved Successfully!") {
            this.showDismissibleAlertSuccess = true;
            this.showDismissibleAlert = false;
           // this.$router.push({name: 'create-blog'});

          } else if(res.data.message === "The Input Field Is Empty!") {
            this.showDismissibleAlertSuccess = false;
            this.showDismissibleAlert = true;
          }else if (res.data.message === "The Allowed Number Of categories Is 10."){
            this.showDismissibleAlertSuccess = false;
            this.showDismissibleAlert = true;

          }else{
            this.showDismissibleAlertSuccess = false;
            this.showDismissibleAlert = true;
          }

        }).catch((err) =>{
          window.console.log('errrrrrrrrrrrrrrrrrrrroooooooooooor');
          window.console.log(err);

        });


      },

    },


  };
</script>



<style scoped>
    #add-category{
        margin-bottom: 40rem;
    }



</style>