<template>
    <div class="d-flex flex-column">
        <h1>Show Blog</h1>
        <div v-if="blog" class="d-flex flex-wrap justify-content-start">
            <div class="card mb-2 ml-2" style="width: 50rem;">

                <h2>{{blog.title}}</h2>
                <p> Posted in <b><a href="/category">{{blog.category}}</a></b> by {{blog.author}} on {{blog.date}} </p>
                <img id="img" v-bind:src="'http://localhost:3000/api/image/'+ blog.imageFile"     alt="image"/>
                <p>{{blog.body}}</p>
                <!-- src="../../assets/logo.png"    -->

                <div v-if="blog.comments && blog.comments.length>0">
                    <h3>Comments</h3>
                    <div v-for="comment in blog.comments" v-bind:key="comment._id" class="card-footer m-2">
                        <p>{{comment.commentAuthor}}</p>
                        <p>{{comment.body}}</p>

                    </div>
                </div>


            </div>




            <div class=" card mb-5 ml-2" style="width: 50rem;">
                <h3>Add comment</h3>
                <br>
                <form class="custom-form" @submit.prevent="submitComment">
                    <div class="form-group">
                        <!-- <label for="commentBody">Comment</label>  -->
                        <textarea v-model="comment.body" id="commentBody" type="text" class="card mb-2 ml-2" name="commentBody" placeholder="Add your comment"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" name="submit" class="btn btn-secondary m-2">Add Comment</button>
                    </div>
                </form>

            </div>

        </div>

    </div>
</template>

<script>
  import axios from 'axios';
  import * as auth from '../../authService';
  export default {
    name: 'ShowBlog.vue',
    data: function(){
      return {
        blog:null,
        receivedImage:null,
        comment:{
          commentAuthor:'',
          body:'',
          commentDate:''
        },
        BlogId:null
      }
    },
    async beforeRouteEnter(to, from, next){
       const currentBlogId = to.params.id;
      window.console.log('currentBlogId = to.params.id');
      window.console.log(currentBlogId);
      try{
        const res =  await axios.get('http://localhost:3000/api/blogs/show/' + currentBlogId,{
          headers:{
            Authorization: auth.getToken(),
          }
        });
        //const data =  res.data;
        window.console.log('ShowBlog res.data');
        window.console.log(res.data);

        next(vm => {vm.blog = res.data.blog;
        vm.blogId= res.data.blog._id});


      }catch(err){
        window.console.log(err);
      }

    },
    methods:{
      submitComment: async function() {

        const comment = {
          commentAuthor: auth.getUsername(),
          body: this.comment.body,
          commentDate: '',
          blogId : this.blogId,
        };
        window.console.log('comment:');
        window.console.log(comment);
        await axios.post('http://localhost:3000/api/addcomment',comment,{
          headers: {
            //'Content-Type': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json',
           // accept: 'application/json',
            Authentication: auth.getToken(),
          }
        }).then((res) =>{
          window.console.log('res.data');
          window.console.log(res.data);
         // this.$router.push({path:'http://localhost:8080/blogs/show/'+ this.blogId});
         window.location.href = "http://localhost:8080/blogs/show/"+ this.blogId;

        }).catch((err) =>{
          window.console.log('errrrrrrrrrrrrrrrrrrrroooooooooooor');
          window.console.log(err);

        });


      }
    }
  };
</script>

<style scoped>

    img{
        width: 100%;
    }

</style>