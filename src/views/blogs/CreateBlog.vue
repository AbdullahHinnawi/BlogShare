<template>
    <div id="create-blog">
    <h1>Create Blog</h1>
        <!-- method="post" action="blogs/create" enctype="multipart/form-data"-->

    <form class="custom-form" @submit.prevent="onSubmit">
        <div class="form-group">
        <label for="title">Title</label>
        <input v-model="blog.title" type="text" id="title" name="title"/>
        </div>

        <div class="form-group">
        <label for="category">Category</label>
        <select v-model="blog.category" id="category" name="category">
            <option> Technology</option>
            <option> Business</option>
        </select>
        </div>

        <div class="form-group">
        <label for="body">Body</label>
        <vue-editor v-model="blog.body" type="text" id="body" name="body" placeholder="What is in your mind?"></vue-editor>
        </div>

        <div class="form-group">
        <label for="image">Image</label>
        <input type="file" id="image" name="imageFile" accept="*/*" @change="getImage" ref="imageFile">
        </div>

        <div class="form-group">
        <label for="author">Author</label>
        <select v-model="blog.author" type="text" id="author" name="author">
            <option>abd hinnawi</option>
            <option>John</option>
        </select>
        </div>

        <div class="form-group">
        <button type="submit" name="submit" class="btn btn-secondary">Create</button>
        </div>

    </form>

    </div>
</template>

<script>
  // Basic Use - Covers most scenarios
  import { VueEditor } from "vue2-editor";
  import axios from 'axios';
  /*
  const express = require('express');
  const cors = require('cors');
  const app = express();
  app.use(cors());
    */

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
          category: '',
          date:'',
          author:'',
          image:''

        },
       // message:"",
       // error: false
      };
    },
    methods:{
      getImage(event){
        this.blog.image= event.target.files[0];

        //this.blog.image = this.$refs.file.files[0];
       // this.error= false;

        //this.blog.image= this.$refs.image.files[0];
        /*
        const img = event.target.files[0];
        let base64value;
        //window.console.log('event.target.result');
       // window.console.log(event.target.result);
        const fileReader = new FileReader();
        fileReader.onload = function(e){
           base64value = e.target.result;
          window.console.log('€%&€&%#%#€%');
          window.console.log(base64value);

        };
        fileReader.readAsDataURL(img);
        this.blog.image = base64value;

        */
        window.console.log('image');
        window.console.log(this.blog.image);





      },
      onSubmit: async function(){
        var formData = new FormData();
        formData.append('title', this.blog.title);
        formData.append('body', this.blog.body);
        formData.append('category', this.blog.category);
        formData.append('date', this.blog.date);
        formData.append('author', this.blog.author);
        formData.append('imageFile', this.blog.image);
        window.console.log('THIS:BLOG______');
        window.console.log(formData);

         await axios.post('http://localhost:3000/api/blog',formData,{

           headers: {
             'Content-Type': 'multipart/form-data'
           }
         }).then(function(res){
           window.console.log('res.data');
           window.console.log(res.data);

         }).catch(function(err){
           window.console.log('errrrrrrrrrrrrrrrrrrrroooooooooooor');
           window.console.log(err);

         });


      }
    }
  };

</script>

<style scoped>

</style>