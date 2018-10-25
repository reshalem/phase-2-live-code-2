<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          Vuedio
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!-- use .active on .nav-item if you want to highlight current link -->
            <li class="nav-item">
              <router-link to="/trending" class="nav-link">
                Trending
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/liked" class="nav-link">
                Liked Videos <span class="badge badge-info">13</span>
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="!isLogin">
            <li class="nav-item">
              <form @submit.prevent="login()" class="form-inline mr-2">
                <div class="form-group">
                    <input v-model="loginUser.email" type="text" class="form-control mr-3" placeholder="Email">
                </div>
                <div class="form-group">
                    <input v-model="loginUser.password" type="password" class="form-control mr-3" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-outline-light">Login</button>
              </form>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="isLogin">
            <li class="nav-item">
              <a href="JavaScript:Void(0);" class="btn btn-danger" @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view :isLogin="isLogin" :checktoken="checkToken"></router-view>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      isLogin: false,
      loginUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
      login: function() {
          axios({
              method: 'POST',
              url: `http://localhost:3000/login`,
              data: {
                  email: this.loginUser.email,
                  password: this.loginUser.password
              }
          })
              .then((result) => {
                  localStorage.setItem('token', result.data.token)
                  this.checkToken()
                  this.loginUser.email = ''
                  this.loginUser.password = ''
              })
              .catch((err) => {
                  console.log(err)
              })
      },
      checkToken: function() {
          let token = localStorage.getItem('token')
          if (token) {
              this.isLogin = true
          } else {
              this.isLogin = false
          }
      },
      logout: function() {
          localStorage.removeItem('token')
          this.checkToken()
      }
  },
  created() {
        this.checkToken();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.link_active {
  outline: 0;
}

.myLink {
  outline: 0;
}
</style>
