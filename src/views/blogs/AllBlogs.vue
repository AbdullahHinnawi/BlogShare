<template>
    <div class="d-flex flex-column">
        <h1>All Blogs</h1>
        <div class="mb-4">
            <router-link to="/create-blog" class="btn btn-success" ml-2 exact >Create Blog</router-link>
        </div>
        <div v-if="blogs && blogs.length > 0" class="d-flex flex-wrap justify-content-start">
            <div v-for="blog in blogs" v-bind:key="blog._id" class="card mb-2 ml-2" style="width: 50rem;">

                <h2>{{blog.title}}</h2>
                <p> Posted in <b><a href="/category">{{blog.category}}</a></b> by {{blog.author}} on {{blog.date}} </p>
                <img id="img" v-bind:src="'http://localhost:3000/api/image/'+ blog.imageFile"     alt="image"/>
                <p>{{blog.body}}</p>
                <!-- src="../../assets/logo.png"    -->
                <div>
                    <router-link :to="{name: 'show-blog', params:{id: blog._id}}" class="btn btn-success m-3"  exact >Read More...</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import * as auth from '../../authService';
  export default {
    name: 'AllBlogs',
    data: function(){
      return {
        blogs: null,
        currentBlogId:null,
        receivedImage:null
      }
    },
    async beforeRouteEnter(to, from, next){
          try{
          const res =  await axios.get('http://localhost:3000/api/blogs',{
            headers:{
              Authorization: auth.getToken(),
            }
          });
          //const data =  res.data;
          window.console.log('data');
          window.console.log(res.data);
          // save received blogs to an array
          const array = res.data.blogs;
          window.console.log('array');
          window.console.log(array);
          // make a reversed array
          const reversedArray = array.reverse();
            window.console.log('reversedArray');
            window.console.log(reversedArray);

          next(vm => {vm.blogs = reversedArray});
        }catch(err){
          window.console.log(err);
        }

    }

  };

</script>


<style scoped>

    img{
        width: 100%;
    }

</style>