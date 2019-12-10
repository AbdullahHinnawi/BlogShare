<template>
    <div id="edit-blog">
        <h2 class="custom-form mb-3">Edit Blog</h2>
        <!-- method="post" action="blogs/create" enctype="multipart/form-data"-->

        <form class="custom-form" @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="blog.title" type="text" id="title" name="title"/>
            </div>

            <div class="form-group">
                <label for="category">Category</label>
                <select     @change="getCategoryValue"  id="category" name="category" ref="category">
                    <option v-for=" category in categories"
                            v-bind:key="category._id"
                            v-bind:title="category.name"
                            v-bind:value="category.name"
                    >
                        {{ category.name.toUpperCase() }}
                    </option>
                </select>

            </div>

            <div class="form-group textEditor">
                <label for="body"></label>
                <vue-editor v-model="textEditorContent" type="text" id="body" name="body" placeholder="What is in your mind?"></vue-editor>
            </div>


            <div class="form-group">
                <b-alert show variant="warning">If you would like to keep the current image, <b>LEAVE </b> "Choose file" <b> EMPTY!</b></b-alert>

                <label for="image">Image</label>
                <input :v-model="blog.image" type="file" id="image" name="imageFile" accept="image/*" @change="getImage" ref="imageFile">
            </div>


            <div class="form-group">
                <button type="submit" name="submit" class="btn btn-primary">Save Changes</button>
            </div>

        </form>

    </div>
</template>

<script>
  // Basic Use - Covers most scenarios
  import { VueEditor } from "vue2-editor";
  import axios from 'axios';
  import * as auth from '../../authService';


  export default {
    name: 'EditBlog',
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
          // author:'',
          image:'',
          blogId:''
        },
        categories:[],
        textEditorContent: '',
        currentBlogId:null
      };
    },
    async beforeRouteEnter(to, from, next){
      const currentBlogId =to.params.id;
      window.console.log('currentBlogId = to.params.id');
      window.console.log(currentBlogId);
      let options = {
        headers:{
          Authentication: auth.getToken()
        }
      };
      try{
      axios.all([
        await axios.get('http://localhost:3000/api/categories', options),
        await axios.get('http://localhost:3000/api/blogs/'+ currentBlogId, options)
      ])
      .then(axios.spread((categoriesRes, blogRes) => {
        if(!categoriesRes && !blogRes){
          next('/myblogs');
        }else {
          window.console.log('CATEGORIES: ', categoriesRes.data);
          window.console.log('BLOG: ', blogRes.data);


          const categoriesArray = categoriesRes.data.categories;
          // make the category of this blog the first item.
          for(let i = 0; i<categoriesArray.length;i++){
            if(categoriesArray[i].name ===blogRes.data.blog.category){
              let tmp = categoriesArray[i].name;
              categoriesArray[i].name=  categoriesArray[0].name;
              categoriesArray[0].name = tmp;

            }
          }

          window.console.log('categoriesArray: ', categoriesArray);

          next(vm => {
            const receivedBlog = blogRes.data.blog;
            vm.blog.title= receivedBlog.title;
            vm.textEditorContent= receivedBlog.body;
           // vm.blog.image= receivedBlog.imageName;
            vm.blog.blogId =receivedBlog._id;
            vm.categories = categoriesArray;
            vm.blog.category= categoriesArray[0].name
          });
        }
      }));
      }catch(error){
        window.console.log(error);
      }

    },
    methods:{
      getImage(event){
        this.blog.image= event.target.files[0];
        window.console.log('Image: ', this.blog.image);

      },
      onSubmit:  function(){
        const blogId = this.blog.blogId;

        this.blog.body = this.textEditorContent.replace(/<[^>]+>/g, '');

        var formData = new FormData();
        formData.append('title', this.blog.title);
        formData.append('body', this.blog.body);
        formData.append('category', this.blog.category);
        formData.append('date', this.blog.date);
        formData.append('author', auth.getUsername());
        formData.append('imageFile', this.blog.image);
        formData.append('blogId', blogId);
        window.console.log('THIS:BLOG______', formData);

        let options = {
          headers:{
            Authentication: auth.getToken(),
            'Content-Type': 'multipart/form-data',
           // 'Content-Type': 'application/json;charset=UTF-8',
            accept: 'application/json',
           // 'Content-Type': 'application/json',

          }
        };

         axios.put('http://localhost:3000/api/myBlogs/'+blogId,formData,options).then((res) =>{
          window.console.log('res.data', res);
           this.$router.push({name: 'myblogs'});


        }).catch((err) =>{
          window.console.log('errrrrrrrrrrrrrrrrrrrroooooooooooor', err);


        });

      },
      getCategoryValue(){
        this.blog.category = this.$refs.category.value;
        window.console.log('-------this.$refs.category.value:',this.$refs.category.value);
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