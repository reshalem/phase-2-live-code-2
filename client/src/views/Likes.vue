<template>
    <!-- <div class="row">
        <div class="col-lg-3"> -->
            <!-- <div class="d-flex flex-column">
                <div class="card mb-3" v-if="isLogin">
                    <div class="card-body">
                        <p>Create Article</p>
                        <form @submit.prevent="createArticle()" class="mb-2">
                            <div class="form-group">
                                <input type="text" v-model="createdArticle.title" class="form-control" placeholder="Title">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" v-model="createdArticle.description" id="message" rows="3" placeholder="Description"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block font-weight-bold">Post</button>
                        </form>
                    </div>
                </div> -->
                <!-- <div class="d-flex flex-column justify-content-start">
                    <p>Search Article</p>
                    <form @submit.prevent="searchArticle()" class="mb-2">
                        <div class="form-group">
                            <input v-model="keyword" type="text" class="form-control" placeholder="Article Name">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Search</button>
                    </form>
                </div> -->
                <!-- <div class="card">
                    <div class="card-header">Article List</div>
                    <div class="card-body">
                        <div class="d-flex flex-column justify-content-start">
                            <ul class="navbar-nav">
                                <li class="nav-item mb-3" v-for="article in articles">
                                    <router-link :to="{ name: 'id', params: { id: article._id }}">{{ article.title }}</router-link>
                                </li>
                            </ul>
                            <router-link class="" to="/articles">
                                See All Articles
                                <i class="far fa-paper-plane ml-1"></i>
                            </router-link>
                        </div>
                    </div>
                </div> -->
            <!-- </div> -->
        <!-- </div>
        <div class="col-lg-9"> -->
            <!-- <router-view :shouldUpdate="shouldUpdate" :isLogin="isLogin" :userEmail="userEmail" :getarticles="getArticles" :checktoken="checktoken"></router-view> -->
            <!-- <router-view></router-view> -->
            <!-- {{videos}} -->
            <!-- {{videos}}
        </div>
    </div> -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-7">
        <div class="mt-4">

          <!-- Search Form -->
          <form>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search videos across YouTube..."
                aria-label="Search videos across YouTube..."
                aria-describedby="go-button-addon"
                auto-complete="off"
                autofocus>
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="go-button-addon">
                  Go!
                </button>
              </div>
            </div>
          </form>

          <!-- Video List -->
          <ul class="list-unstyled">
            <a href="JavaScript:Void(0);" v-for="video in videos" class="video-link">
              {{video.id.videoId}}
              <li class="media my-4">
                <img class="mr-3" :src="video.snippet.thumbnails.default.url" alt="Thumbnail">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">{{video.snippet.title}}</h5>
                  {{video.snippet.description}}
                  <br />
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div class="col-xl-5">

        <!-- Player and Detail -->
        <div class="mt-4">
          <div class="card mb-2" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">YouTube Player goes here</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <strong>Video Title</strong>&nbsp;
          <button class="btn btn-sm btn-primary">Like this Video!</button><br />
          <br />
          <pre class="card">Video description goes here, you can add
newline too!</pre>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Article',
    // props: ['isLogin', 'userEmail', 'checktoken'],
    data() {
        return {
            videos: [],
            shouldUpdate: 0,
            keyword: ''
        }
    },
    methods: {
        getVideos: function() {
          let params = {
            'maxResults': '25',
            'part': 'snippet',
            'q': 'gintama',
            'type': 'video',
            'key': 'AIzaSyBpYDx39wTskgZBIF9flVSP3TW77s7_ppo'
          }
          axios.get('https://www.googleapis.com/youtube/v3/search', {params})
            .then((result) => {
              this.videos = result.data.items
              console.log(result)
            })
            .catch((err) => {
              console.log(err)
            })
        }
        // searchArticle: function() {
        //     axios({
        //         method: 'GET',
        //         url: `${config.port}/articles/search/${this.keyword}`,
        //         headers: {
        //             'access-token': localStorage.getItem('token')
        //         }
        //     })
        //         .then(function(articles) {
        //             this.articles = articles.data
        //             this.getArticles()
        //         })
        //         .catch(function(err) {
        //             console.log(err)
        //         })
        // }
    },
    created() {
        this.getVideos()
    },
    watch: {
        // articles() {
            
        // },
        // keyword() {
        //     if (this.keyword.length === 0) {
        //         this.getArticles();
        //     } else {
        //         this.searchArticle(this.keyword)
        //     }
        // }
    }
}
</script>
