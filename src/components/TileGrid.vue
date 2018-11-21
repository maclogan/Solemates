<template>
    <div class="item-grid">
        <tile-component 
            v-for="item in items" 
            :title="item.title"
            :price="item.price"
            :sellerName="item.sellerName"
            :photoURL="item.photoURL">
        </tile-component>
    </div>
</template>

<script>
// @ is an alias to /src
import TileComponent from './Tile.vue'
export default {
  name: 'GridComponent',
  data:() => {
    return {
        items: [
            {title: 'Test', price: '43', sellerName: 'Mac', photoURL:'https://images.finishline.com/is/image/FinishLine/410453A_014_P1?$Main_gray$'},
            {title: 'Test2', price: '30', sellerName: 'Logan', photoURL:'https://images.finishline.com/is/image/FinishLine/410453A_014_P1?$Main_gray$'},
            {title: 'Test', price: '43', sellerName: 'Mac', photoURL:'https://images.finishline.com/is/image/FinishLine/410453A_014_P1?$Main_gray$'},
            {title: 'Test2', price: '30', sellerName: 'Logan', photoURL:'https://images.finishline.com/is/image/FinishLine/410453A_014_P1?$Main_gray$'},
            {title: 'Test', price: '43', sellerName: 'Mac', photoURL:'https://images.finishline.com/is/image/FinishLine/410453A_014_P1?$Main_gray$'},
            {title: 'Test2', price: '30', sellerName: 'Logan', photoURL:'https://images.finishline.com/is/image/FinishLine/410453A_014_P1?$Main_gray$'}
        
        ]
    }
  },
  components: {
      'tile-component': TileComponent
  },
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
