<template>
    <div class="tile">
        <img :src="photoURL" alt="Item Photo" class="itemPhoto">
        <span class="title">{{ title }}</span>
        <div class="bottom">
            <span class="sellerName">{{ sellerName }}</span>
            <span class="price">${{ price }}</span>
        </div>        
    </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';
export default {
  name: 'TileComponent',
  props: [
      'title',
      'price',
      'sellerName',
      'photoURL'
  ],
};
</script>

<style>

    .tile {
        display: flex;
        flex-direction: column;
        flex: 0 1;
        margin: 15px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
        padding: 1em;
    }
    .title {
        padding-top: 10px;
        padding-left: 15px;
        font-weight: 700;
    }
    .itemPhoto {
        min-width: 200px;
        width: 100%;
        height: auto;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    .bottom {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
    }

</style>
