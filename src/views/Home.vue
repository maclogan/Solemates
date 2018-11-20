<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';
export default {
  name: 'home',
  methods: mapActions('auth', ['login', 'logout']),
  components: {},
};
</script>

<style>
  body {
    background-color: #F5F5F5
  }
</style>
