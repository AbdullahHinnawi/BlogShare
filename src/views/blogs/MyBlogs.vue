<template>
    <div class="d-flex flex-column">
        <h1>My Blogs</h1>
        <div class="mb-4">
            <router-link to="/create-blog" class="btn btn-success" ml-2 exact >Create Blog</router-link>
        </div>
        <div v-if="blogs && blogs.length > 0" class="d-flex flex-wrap justify-content-start">
            <div v-for="blog in blogs" v-bind:key="blog._id" class="card mb-2 ml-2" style="width: 50rem;">

                <h2>{{blog.title}}</h2>
                <p> Posted in <b><a href="/category">{{blog.category}}</a></b> by <b>{{blog.author}}</b> on {{blog.date}} </p>
                <img id="img" v-bind:src="'http://localhost:3000/api/image/'+ blog.imageFile"     alt="image"/>
                <p class="card-text">{{blog.body}}</p>
                <!-- src="../../assets/logo.png"    -->
                <div v-if="blog.authorId === $store.state.userId" class="d-flex mb-4">
                    <!-- router-link trigger modal -->
                    <span><router-link :to="{name: 'edit-blog', params:{id: blog._id}}" type="button" tag="button" class=" card-link btn btn-primary ml-4 " exact >Edit</router-link></span>
                    <span><a v-on:click.prevent="currentBlogId = blog._id" href="#" class="btn btn-danger ml-4"  v-b-modal.modal-1>Delete</a></span>
                </div>
            </div>
        </div>

        <!-- Modal   -->
        <div>

            <b-modal id="modal-1" ref="modal" centered  title="Delete Confirmation">
                <p class="my-4">Are you sure, you would like to delete this blog?</p>
                <div slot="modal-footer" class="w-100 text-right">
                    <b-btn @click="deleteBlog" slot="md" class="mr-4" variant="danger">Delete</b-btn>
                    <b-btn @click="cancelModal" slot="md" variant="secondary">Cancel</b-btn>

                </div>
            </b-modal>
        </div>




        <div v-if="blogs && blogs.length === 0" class="ml-2">
            <div class="alert alert-info">No blogs Found.</div>
        </div>



    </div>
</template>

<script>
  import axios from 'axios';
  import * as auth from '../../authService';
  export default {
    name: 'MyBlogs',
    data: function(){
      return {
        blogs: null,
        currentBlogId:null,
        receivedImage:null
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
        const res =  await axios.get('http://localhost:3000/api/myblogs?userId='+userId, options );
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

          const res =  await axios.delete('http://localhost:3000/api/myblogs?id='+blogId, options);
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

    img{
        width: 100%;
    }


</style>