<template>

  <div id="custom-home">
    <link href="carousel.css" rel="stylesheet">
    <div id="myCarousel" class="carousel slide " data-ride="carousel" style="background-color: #0D47A0">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect class="rect1" width="100%" height="100%" fill="#0d47a1"></rect></svg>
          <div class="container">
            <div class="carousel-caption text-center">
              <img src="../assets/1.png" alt="slideImage2" style="height: 60px;">
              <p>Welcome to BlogShare Application</p>
              <p>BlogShare is an online magazine or informative website that displays
                information in reverse chronological order, with the most recent blogs first. It is
                a platform where users can share their knowledge, experience or views on a specific
                topic in their own way</p>
              <p><router-link class="btn btn-primary" to="/register" role="button">Register Now</router-link></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect class="rect1" width="100%" height="100%" fill="#0d47a1"></rect></svg>
          <div class="container">
            <div class="carousel-caption text-center">
              <img src="../assets/4.png" alt="slideImage2" style="height: 60px"/>
              <h2>How to Use BlogShare</h2>
              <p>BlogShare requires registration or log in, after which the user can post, edit, or delete own
                blog posts. In addition, user can add new categories, view a certain category's blogs and react to other
                people's blogs by commenting</p>
              <p><router-link class="btn btn-primary" to="/register" role="button">Register Now</router-link></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect class="rect1" width="100%" height="100%" fill="#0d47a1"></rect></svg>
          <div class="container">
            <div class="carousel-caption text-center">
              <img src="../assets/4.png" alt="slideImage2" style="height: 60px"/>
              <h2>BlogShare is Secure by Default</h2>
              <p>Your connection with BlogShare server is secure and encrypted. Your data always stay safe and private</p>
              <p><router-link class="btn btn-primary" to="/register" role="button">Register Now</router-link></p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div id="marketing" class="container marketing">

      <!-- Three columns of text below the carousel -->
    <!--
      <div class="row">
        <div class="col-lg-4">
          <svg class="bd2-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
          <h2>Heading</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <svg class="bd2-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
          <h2>Heading</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <svg class="bd2-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>
      -->



      <!-- START THE FEATURETTES -->

   <!--   <hr class="featurette-divider">-->

      <div class="row featurette">
        <div class="col-md-7" style="max-width: 600px">
          <h2 class="featurette-heading">Create an Account</h2>
          <p class="lead">In order to access BlogShare community, you need to create an account</p>
        </div>
        <div class="col-md-5">
          <img src="../assets/register.png" style="border:#eee solid 1px;border-radius: 3px;" alt="alt" height="400" width="300">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 order-md-2 postEditSection">
          <h2 class="featurette-heading">Post, Edit, or Delete Blog Posts</h2>
          <p class="lead">Share your knowledge, experience or views on a specific
            topic in your own way by posting new blog posts. If it feels like you want to modify already posted blog, you can edit it, even you can delete it</p>
        </div>
        <div class="col-md-5 order-md-1">

       <img src="../assets/cappadociaBlog.png" style="border:#eee solid 1px;border-radius: 3px;" alt="alt" height="400" width="300">


        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Add New Categories & Browse Blogs by Category</h2>
          <p class="lead" style="text-anchor: middle; vertical-align: middle">If you want to post a blog which not belong to the existing categories, you can
            add a new category to be suitable with your blog subject. You can also browse blogs which belong to a cretain category</p>

        </div>
        <div class="col-md-5">
          <img src="../assets/addcategory.png" style="border:#eee solid 1px;border-radius: 3px;" alt="alt" height="400" width="300">
        </div>
      </div>
      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Add Comment</h2>
          <p class="lead">Interact with other people's blogs by commenting</p>
        </div>
        <div class="col-md-5 order-md-1">
          <!--
          <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          -->
          <img src="../assets/addcomment.png" style="border:#eee solid 1px;border-radius: 3px;" alt="alt" height="400" width="300">
        </div>
      </div>

      <!-- /END THE FEATURETTES -->

    </div><!-- /.container -->









  </div>
</template>

<script>

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
   // HelloWorld
  }
  /*
  ,
  mounted() {
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://code.jquery.com/jquery-3.5.1.slim.min.js');
    document.head.appendChild(recaptchaScript);
    let recaptchaScript2 = document.createElement('script');
    recaptchaScript2.setAttribute('src', '/docs/4.5/assets/js/vendor/jquery.slim.min.js');
    document.head.appendChild(recaptchaScript2);
    let recaptchaScript3 = document.createElement('script');
    recaptchaScript3.setAttribute('src', '/docs/4.5/dist/js/bootstrap.bundle.min.js');
    document.head.appendChild(recaptchaScript3);
  }
  */
  /*
  beforeCreate: function() {
   fetch('http://localhost:3000/api/user')
   .then(res=> window.console.log(res)) ;
  }
*/

}
</script>

<style scoped>
#custom-home{
  padding:-2rem !important;
}


  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 27rem;
  }


#marketing{
  padding:2rem;
  text-align: center;
  text-anchor: end;


}


  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }


  }

@media (min-width: 768px) {
  .postEditSection{
    padding-left: 3rem;

  }
  @media (min-width: 995px) {
    .postEditSection{
      padding-left:0;
     /* border: solid 1px green;*/
    }
  }

}



</style>
