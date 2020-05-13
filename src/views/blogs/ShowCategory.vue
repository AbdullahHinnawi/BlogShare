<template>

    <div id="show-category" class="d-flex flex-column justify-content-center">
        <h2 class="custom-header">Show Category</h2>

        <div v-if="blogs && blogs.length > 0" class="d-flex flex-wrap justify-content-center">
            <div v-for="blog in blogs" v-bind:key="blog._id" class="card mb-2 ml-2 p-4" style="width: 32rem;">

                <div class="card-in">
                    <h2 class="blog-title">{{blog.title}}</h2>
                    <p> <img class="taglogo" src="../../assets/taglogo.png" alt="tag logo"> <b><router-link :to="{name: 'show-category', params:{category: blog.category}}" style="color: #0d47a1;"   exact >{{blog.category.toUpperCase()}}</router-link></b></p>
                    <p class="blog-author">By <b>{{blog.author}}</b></p>
                    <p class="blog-date">On {{blog.date}} </p>
                    <div class="embed-responsive embed-responsive-4by3">
                        <img class="card-img-top embed-responsive-item" v-bind:src="'http://localhost:3000/api/image/'+ blog.imageFile"     alt="image"/>
                    </div>
                    <p class="blog-body">{{blog.body}}</p>
                    <!-- src="../../assets/logo.png"    -->
                    <div>
                        <router-link :to="{name: 'show-blog', params:{id: blog._id}}" class="btn btn-primary readMoreBtn"  exact >Read More...</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>



</template>

<script>
  import axios from 'axios';
  import * as auth from '../../authService';
  import {baseUrl} from '../../baseurl';

  export default {
    name: 'ShowCategory.vue',
    data: function(){
      return {
        blogs: null,
        currentCategoryId:null,
        receivedImage:null
      }
    },
    async beforeRouteEnter(to, from, next){
      const currentCategory = to.params.category;
      window.console.log('Current Category:', currentCategory);
      try{
        const res =  await axios.get(baseUrl+'/api/categories/show/' + currentCategory,{
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
    #show-category{
        margin-bottom:10rem;
    }

</style>