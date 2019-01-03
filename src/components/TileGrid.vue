<template>
    <div class="item-grid">
        <tile-component 
            v-for="product in products" 
            :title="product.title"
            :price="product.price"
            :sellerName="product.sellerName"
            :photoURL="product.photoURL">
        </tile-component>
    </div>
</template>

<script>
// @ is an alias to /src
import TileComponent from './Tile.vue'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'GridComponent',
  data:() => {
    return {
    }
  },
  mounted() {
      this.init();
  },
  components: {
      'tile-component': TileComponent
  },
  computed: mapState('products', ['products']),
  methods: mapActions('products', ['init']),
};
</script>

<style>
    .item-grid {
        margin-top: 15px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        
    }
</style>
