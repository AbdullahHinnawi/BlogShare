<template>
    <div class="d-flex flex-column">
        <h1>All Blogs</h1>
        <div class="mb-4">
            <router-link to="/create-blog" class="btn btn-success" ml-2 exact >Create Blog</router-link>
        </div>
        <div v-if="blogs && blogs.length > 0" class="d-flex flex-wrap justify-content-start">
            <div v-for="blog in blogs" v-bind:key="blog._id" class="card mb-2 ml-2" style="width: 50rem;">

               <!-- <h2>{{blog.title}}</h2>s
                <p> Posted in {{blog.category}} by {{blog.author}} on {{blog.date}} </p>  -->
                <img id="img"  :src="'http://localhost:3000/api/image/' + blog.filename"  alt="image"/>
               <!-- <p>{{blog.body}}</p> -->

                <!--   :src="require(`@/assets/img/${imgURL}`)"  -->
                <!-- v-bind:src="'/public/images' + blog.image"  v-bind:src="blog.image"-->


            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
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
          const res =  await axios.get('http://localhost:3000/api/blog');
          //const data =  res.data;
          window.console.log('data');
          window.console.log(res.data);

          next(vm => {vm.blogs = res.data.blogs});
        }catch(err){
          window.console.log(err);
        }

        //this.receivedImage= this.blogs[0].image;
    }
  };
</script>

<style scoped>

</style>