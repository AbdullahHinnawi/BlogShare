<template>

    <div class="d-flex flex-column justify-content-center">
        <h2 class="custom-header">All Blogs</h2>
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
                    <p class="blog-body">{{blog.body | truncate(300)}}</p>
                    <!-- src="../../assets/logo.png"    -->
                    <div>
                        <router-link :to="{name: 'show-blog', params:{id: blog._id}}" class="btn btn-primary readMoreBtn"  exact >Read More...</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="blogs && blogs.length === 0" class="ml-2" style="max-width: 35rem;">
            <div class="alert alert-info">No Blogs Found.</div>
        </div>

    </div>

</template>

<script>
    import axios from 'axios';
    import * as auth from '../../authService';
    import {baseUrl} from '../../baseurl';

    export default {
    name: 'AllBlogs',
    data: function(){
      return {
        BASE_URL: baseUrl,
        blogs: null,
        currentBlogId:null,
        receivedImage:null
      }
    },
    async beforeRouteEnter(to, from, next){
          try{
          const res =  await axios.get(baseUrl+'/api/blogs',{
            headers:{
              Authorization: auth.getToken(),
            }
          });
          //const data =  res.data;
           window.console.log('res', res);
            window.console.log('res.data.blogs', res.data.blogs);

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
    .taglogo{
        width: 18px;
        height: 18px;
    }
    .blog-author, .blog-date{
        line-height: 7px;
        color: #262626;
    }
    .blog-body{
        margin-top: 1rem;
        margin-bottom: 3.5rem;
        text-align: justify;
    }
    .readMoreBtn{
      /*  margin-bottom: 0.3rem !important;*/
        position: absolute;
        bottom: 1.5rem;


    }




</style>