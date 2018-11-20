  <template>
  <div class="app">
    <header-component></header-component>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';
import HeaderComponent from './components/Header.vue';

export default {
  name: 'app',
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
  components: { 
    HeaderComponent
  },
};
</script>
<style>
body {
  margin: 0px;
  padding: 0px;
}
header-component {
  width: 100%;
  height: 50px;
}
</style>
