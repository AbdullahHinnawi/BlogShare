<template>
    <div class="d-flex flex-column justify-content-center">
        <h2 class="custom-header">Show Blog</h2>
        <div v-if="blog" class="d-flex flex-wrap justify-content-center">

            <div class="card mb-2 ml-2 p-4" style="width: 40rem;">

                <h2 class="blog-title">{{blog.title}}</h2>
                <p class="blog-category"> <img class="taglogo" src="../../assets/taglogo.png" alt="tag logo"> <b><router-link :to="{name: 'show-category', params:{category: blog.category}}" style="color: #0d47a1;"   exact >{{blog.category.toUpperCase()}}</router-link></b></p>
                <p class="blog-author">By <b>{{blog.author}}</b></p>
                <p class="blog-date">On {{blog.date}} </p>
                <div class="embed-responsive embed-responsive-4by3">
                <img class="card-img-top embed-responsive-item" v-bind:src="'http://localhost:3000/api/image/'+ blog.imageFile"     alt="image"/>
                </div>
                <p class="blog-body">{{blog.body}}</p>

                <div>
                    <h4>Add Comment</h4>

                    <form @submit.prevent="submitComment">
                        <div class="form-group">

                            <textarea v-model="comment.body" class="form-control commentBody" id="commentBody" type="text"  name="commentBody" placeholder="Input your comment"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" name="submit" class="btn btn-primary commentBtn">Comment</button>
                        </div>
                    </form>

                </div>

                <p><a class="control" v-on:click="showComments = !showComments" href="#com-div" ref="viewComments">View all comments</a></p>


                <div id="hide" v-show="showComments" v-if="comments && comments.length>0">
                    <h3>Comments</h3>
                    <div v-for="comment in comments" v-bind:key="comment._id" class="card-footer">
                        <p class="comment-auhtor"><b>{{comment.commentAuthor}}</b></p>
                        <p class="comment-date">{{comment.commentdate}}</p>
                        <p>{{comment.body}}</p>

                    </div>
                </div>




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
        comments: null,
        receivedImage:null,
        comment:{
          commentAuthor:'',
          body:'',
          commentDate:''
        },
        BlogId:null,
        showComments: false
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
        window.console.log('ShowBlog res.data', res.data);
        const commentsArray = res.data.blog.comments;
        const reversedCommentsArray = commentsArray.reverse();
        window.console.log('Reverserd Comments Array', reversedCommentsArray);


        next(vm => {vm.blog = res.data.blog;
        vm.blogId= res.data.blog._id;
        vm.comments = reversedCommentsArray});

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


      },

    }
  };
</script>

<style scoped>
    .taglogo{
        width: 18px;
        height: 18px;
    }
    .blog-author{
        line-height: 7px;
        color: #2E2E2E;
    }
    .blog-date{
        line-height: 7px;
        color: #4B515D;
    }
    .blog-body{
        margin-top: 1rem;
        text-align: justify;
    }
    .commentBody{
        max-width: 30rem;
        margin-top: 0.7rem !important;

    }
    .commentBtn{

    }
    .comment-auhtor{
        line-height: 7px;
        color:  #4B515D;
        font-size: 1.2rem !important;

    }
    .comment-date{
        line-height: 7px;
        color:  #4B515D;
        font-size: 12px;

    }

    @media screen and (max-width: 400px) {


    }


</style>