  <template>
  <div class="app">
    <header-component></header-component>
    <grid-component></grid-component>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';
import HeaderComponent from './components/Header.vue';
import GridComponent from './components/TileGrid.vue'

export default {
  name: 'app',
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
  components: { 
    'header-component': HeaderComponent,
    'grid-component': GridComponent
  },
};
</script>
<style>
body {
  margin: 0px;
  padding: 0px;
}

</style>
