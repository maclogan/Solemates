<template>
  <div class="app">
    <div class="header">
      <div class="left">
        <a href="/"><div class="logo">sole<span>mates</span></div> </a>     
      </div>
      <div class="center">
          <input class="search" type="text">
      </div>
      <div class="right">
        <button v-if="isLoggedIn">Post Item</button>
        <img v-if="isLoggedIn" class="user-image" @click="showDropDown = !showDropDown" :src="user.image">
        <div v-if='showDropDown'>
          <ul class='drop_menu'>
            <a><button v-if="isLoggedIn" @click="logout()">Logout</button></a>
          </ul>
        </div>
        <button v-if="isLoggedIn" @click="logout()">Logout</button>
        <button v-if="!isLoggedIn" @click='login()'>Login</button>
      </div>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';
export default {
  name: 'HeaderComponent',
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
  data:() => {
    return {
      showDropDown: false
    }
  }
};
</script>

<style>
.header {
  background-color: #FFF;
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  height: 2em;
}

.left {
    display: flex;
    align-content: center;
}

.logo {
  font-size: 1.8em;
  font-family: sans-serif;
  font-weight: 100;
}
.logo span {
  font-weight: 700;
}

.search {
    font-size: 1em;
    border-radius: 15px;
    border: 1px solid rgb(160, 160, 160);
    height: 2em;
    padding: 0em 1em;
}

.right {
    display: flex;
    align-items: center;
}
.user-image {
  z-index: 100;
  height: 2em;
  width: auto;
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
}
button {
    flex: 1 1 auto;
    font-size: 1em;
    margin: 2em;
    display: inline-block;
    text-align: center;
    background-image: linear-gradient(to right, #43cea2 0%, #185a9d 100%);
    border: none;
    background-size: 200% auto;
    border-radius: 15px;
    height: 2em;
    color: white;
    padding: 0em 1em;
    text-transform: uppercase;
    box-shadow: 0 0 20px #eee;
    transition: 0.5s
}

button:hover {
  background-position: right center; /* change the direction of the change here */
}

a {
  color: inherit;
  text-decoration: none;
}

.menu {
  display: flex;
  flex-direction: column;
}

</style>
