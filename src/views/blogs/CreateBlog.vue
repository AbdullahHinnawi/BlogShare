<template>
    <div id="create-blog">

        <h2 class="custom-form mb-3">Create Blog</h2>
    <form class="custom-form" @submit.prevent="onSubmit">

        <div class="form-group">
        <label for="title">Title</label>
        <input v-model="blog.title" type="text" id="title" name="title" placeholder="Title" required/>
        </div>

        <div class="form-group">
        <label for="category">Category</label>
        <select  @change="getCategoryValue"  id="category" name="category" ref="category">
            <option v-for=" category in categories"
                    v-bind:key="category._id"
                    v-bind:title="category.name"
                    v-bind:value="category.name"
            >
                {{ category.name.toUpperCase()}}
            </option>
        </select>
        </div>

        <div class="form-group textEditor">
        <label for="body"></label>
        <vue-editor v-model="textEditorContent" :editorToolbar="customToolbar" type="text" id="body" name="body" placeholder="What is in your mind?" aria-required="true"></vue-editor>
        </div>

        <div class="form-group">
        <label for="image">Image</label>
        <input type="file" id="image" name="imageFile" accept="image/*" @change="getImage" ref="imageFile" required>
        </div>

        <div class="form-group">
        <button type="submit" name="submit" class="btn btn-primary">Create</button>
        </div>

    </form>

    <!-- ALERT -->
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
  // Basic Use - Covers most scenarios
  import { VueEditor } from "vue2-editor";
  import axios from 'axios';
  import * as auth from '../../authService';
  import {baseUrl} from '../../baseurl';

  export default {
    name: 'CreateBlog',
    components: {
     VueEditor
    },
    data: function() {
      return {
        blog:{
          title: '',
          body:'',
          category: 'Technology',
          date:'',
         // author:'',
          image:''
        },
        categories:[],
        textEditorContent: '',
        customToolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }], ["image", "code-block"]],
        message:'',
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        showDismissibleAlertSuccess: false,
      };
    },
    filters: {
      truncate:(text, length, suffix) =>{
        return text.substring(0, length) + suffix;
      }

    },
    async beforeRouteEnter(to, from, next){

      try{
        const res =  await axios.get(baseUrl+'/api/categories', {
          headers: {
            Authorization: auth.getToken(),
          }
        });
        //const data =  res.data;
        window.console.log('data');
        window.console.log(res.data);
        //const categories = res.data.categories;
      //  const categoriesToUpperCase = categories.toUpperCase();

        next(vm => {vm.categories = res.data.categories});
      }catch(err){
        window.console.log(err);
      }

    },
    methods:{
      getImage(event){
        this.blog.image= event.target.files[0];

       // this.blog.image = this.$refs.file.files[0];

        window.console.log('Image:', this.blog.image);
      },
      onSubmit: async function(){

        if(this.textEditorContent !== ''){
        this.blog.body = this.textEditorContent.replace(/<[^>]+>/g, ' ');
       // this.blog.body = this.textEditorContent.replace(/(<([^>]+)>)/ig,"");



        window.console.log('textEditor: ', this.blog.body);
        var formData = new FormData();
        formData.append('title', this.blog.title);
        formData.append('body', this.blog.body);
        formData.append('category', this.blog.category);
        formData.append('date', this.blog.date);
        formData.append('author', auth.getUsername());
        formData.append('imageFile', this.blog.image);
        window.console.log('THIS:BLOG______');
        window.console.log(formData);


         await axios.post(baseUrl+'/api/blogs',formData,{
           headers: {
             'Content-Type': 'multipart/form-data',
              Authorization: auth.getToken(),
           }
         }).then(function(res){
           window.console.log('res.data');
           window.console.log(res.data);

         }).catch(function(err){
           window.console.log('errrrrrrrrrrrrrrrrrrrroooooooooooor');
           window.console.log(err);

         });
          this.message = 'Blog Created Successfully!';
          this.showDismissibleAlert= false;
          this.showDismissibleAlertSuccess= true;
          this.$router.push({name: 'all-blogs'});

        }else{
          this.message = 'Editor Field Is Empty!';
          this.showDismissibleAlertSuccess= false;
          this.showDismissibleAlert= true;


        }
      },
      getCategoryValue(){
        this.blog.category = this.$refs.category.value;
        window.console.log('this.$refs');
        window.console.log(this.$refs.category.value);
      }

    }
  };

</script>

<style scoped>

input, select{
   margin-left: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 3px 7px;
}
input[type=file]{
    border: none !important;;
}
.textEditor{
    margin-top: -1.5rem;
    margin-bottom: 1.2rem;
    font-weight: normal !important;

}
/* style all input elements with a required attribute */
input:required {
   /* box-shadow: 1px 1px 5px rgba(200, 0, 0, 0.85);*/
}


</style>