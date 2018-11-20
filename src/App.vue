  <template>
  <div class="app">
    <div class="sidebar">
      <div class="sidebar_content">      
        <div class="top">
        <a href="/"><div class="logo">sole<span>mates</span></div> </a>     
        <img v-if="isLoggedIn" class="user-image" :src="user.image">
        <button v-if="!isLoggedIn" @click='login()'>Login</button>
      </div>
      <button @click='logout()'>Logout</button>
    </div></div>

    <router-view class="main container"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';
export default {
  name: 'app',
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
  components: {},
};
</script>

<style>
body {
  width: 100vw;
  height:100vh;
  margin: 0;
  padding: 0;
}
.app  {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}
.sidebar {
  width: 20em;
  height: 100%;
  margin-right: 1em;
  background-color: #FFF;
  border-radius: 0px 30px 30px 0px;
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.25);
}
.sidebar_content {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  padding: 2em;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 1.8em;
  font-family: sans-serif;
  font-weight: 100;
}
.logo span {
  font-weight: 700;
}
.user-image {
  height: 2em;
  width: auto;
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
}

button {
  height: 2em;
  width: 5em;
  border-radius: 1em;
}

a {
  color: inherit;
  text-decoration: none;
}

</style>
