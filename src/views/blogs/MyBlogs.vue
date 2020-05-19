<template>
    <div id="my-blogs" class="d-flex flex-column justify-content-center">
        <h2 class="custom-header">My Blogs</h2>
        <!--
        <div class="mb-4">
            <router-link to="/create-blog" class="btn btn-primary" ml-2 exact >Create Blog</router-link>
        </div>
        -->
        <div v-if="blogs && blogs.length > 0" class="d-flex flex-wrap justify-content-center">
            <div v-for="blog in blogs" v-bind:key="blog._id" class="card mb-2 ml-2 p-4" style="width: 32rem;">
            <div class="card-in">
                <h2 class="blog-title">{{blog.title}}</h2>
                <p> <img class="taglogo" src="../../assets/taglogo.png" alt="tag logo"> <b><router-link :to="{name: 'show-category', params:{category: blog.category}}" style="color: #0d47a1;"   exact >{{blog.category.toUpperCase()}}</router-link></b></p>
                <p class="blog-author">By <b>{{blog.author}}</b></p>
                <p class="blog-date">On {{blog.date}} </p>
                <div class="embed-responsive embed-responsive-4by3">
                <img class="card-img-top embed-responsive-item" v-bind:src="BASE_URL+'/api/image/'+ blog.imageFile"     alt="image"/>
                </div>
                <p class="blog-body">{{blog.body}}</p>
                <!-- src="../../assets/logo.png"    -->
                <div v-if="blog.authorId === $store.state.userId" class="d-flex editDeleteDiv">
                    <!-- router-link trigger modal -->
                    <span><router-link :to="{name: 'edit-blog', params:{id: blog._id}}" type="button" tag="button" class=" card-link btn btn-primary"  exact >Edit</router-link></span>
                    <a v-on:click.prevent="currentBlogId = blog._id" class="card-link btn btn-danger ml-4" href="#" v-b-modal.modal-1>Delete</a>

                </div>

            </div>

            </div>

        </div>

        <!-- Modal   -->
        <div>
            <b-modal id="modal-1" class="modal-backdrop" ref="modal" centered  title="Delete Confirmation">
                <p class="my-4">Are you sure, you would like to delete this blog?</p>
                <div slot="modal-footer" class=" w-100 text-right">
                    <b-btn @click="deleteBlog" class="mr-4"  slot="md" variant="danger"  >Delete</b-btn>
                    <b-btn @click="cancelModal" slot="md" class="mr-2"  variant="secondary">Cancel</b-btn>

                </div>
            </b-modal>


        </div>


        <div v-if="blogs && blogs.length === 0" class="ml-2" style="max-width: 35rem; margin-bottom: 30rem">
            <div class="alert alert-info">No Blogs Found.</div>
        </div>



    </div>
</template>

<script>
  import axios from 'axios';
  import * as auth from '../../authService';
  import {baseUrl} from '../../baseurl';

  export default {
    name: 'MyBlogs',
    data: function(){
      return {
        BASE_URL: baseUrl,
        blogs: null,
        currentBlogId:null,
        receivedImage:null,
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        showDismissibleAlertSuccess: false
      }
    },
    async beforeRouteEnter(to, from, next){

      const userId = auth.getUserId();
     // const params = {userId: userId};
      const options = {
        headers:{
          Authorization: auth.getToken(),
        }
      };
      try{

        window.console.log('userId:');
        window.console.log(userId);
        const res =  await axios.get(baseUrl+'/api/myblogs?userId='+userId, options );
        //const data =  res.data;
        window.console.log('data');
        window.console.log(res);
        // save received blogs to an array
        const array = res.data.blogs;
        window.console.log('array:');
        window.console.log(array);
        // make a reversed array
        const reversedArray = array.reverse();
        window.console.log('reversedArray:');
        window.console.log(reversedArray);

        next(vm => {vm.blogs = reversedArray});

      }catch(err){
        window.console.log(err);
      }

    },
    methods:{
      cancelModal(){
       this.$refs.modal.hide();
       this.currentBlogId= null;
      },
      deleteBlog: async function(){
        this.$refs.modal.hide();
        const blogId = this.currentBlogId;
        const options = {
          headers:{
            Authorization: auth.getToken(),
          }
        };
        try{

          const res =  await axios.delete(baseUrl+'/api/myblogs?id='+blogId, options);
          //const data =  res.data;
          window.console.log('data');
          window.console.log(res);
          const index = this.blogs.findIndex(blog => blog._id === this.currentBlogId);
          this.blogs.splice(index,1);
          this.currentBlogId= null;


        }catch(err){
          window.console.log(err);
        }
      }
    }

  };


</script>


<style scoped>

    .taglogo{
        width: 18px;
        height: 18px;
    }
    .blog-author, .blog-date{
        line-height: 7px;
        color: #262626;
    }
    .btn-danger:hover{
        background-color: darkred  !important;
    }
    .btn-secondary:hover{
        background-color: #3E4551  !important;
    }
    .blog-body{
        margin-top: 1rem;
        margin-bottom: 3.5rem;
        text-align: justify;

    }
    .editDeleteDiv{
        /*  margin-bottom: 0.3rem !important;*/
        position: absolute;
        bottom: 1.5rem;
    }
    #my-blogs{
        margin-bottom: 10rem;
        padding: 2rem;
    }
</style>