<template>
  <div class="shopdisplay-layout">
    <ul class="shopcart-nav">
      <li @click="toDetail(item.iid)" class="shopcart-item" v-for="(item,index) in $store.state.productCart">
        <div @click.stop="itemChoise(index)" class="shopcart-btn" ref="shopcartBtn">{{item.selected?'√':''}}</div>
        <div class="shopcart-shopMessage">
          <div class="shopcart-imgBox">
            <img :src="item.img" alt="" class="shopcart-img">
          </div>
          <div class="shopcart-textContent">
            <div class="shopcart-shop-title">{{item.title}}</div>
            <div class="shopcart-shop-desc">{{item.desc}}</div>
            <div class="shopcart-shop-price-num">
              <span class="shopcart-shop-price">{{item.price}}</span>
              <span class="shopcart-shop-num">×{{item.count}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ShopcartShop",
    data() {
      return {
      }
    },
    methods: {
      itemChoise(index) {
        this.$store.commit('changeSelect', index)
      },
      toDetail(iid){
        this.$router.push('/detail/'+iid)
      }
    }
  }
</script>

<style scoped="scoped">
  .shopcart-nav {
    width: 100%;
    height: 100%;

  }

  .shopcart-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .shopcart-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: hotpink;
    color: white;
    margin-right: 10px;
    text-align: center;
    line-height: 20px;
  }

  .shopcart-shopMessage {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shopcart-imgBox {
    width: 90px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .shopcart-img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .shopcart-textContent {
    flex: 1;
    line-height: 35px;
  }

  .shopcart-shop-title,
  .shopcart-shop-desc {
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .shopcart-shop-desc {}

  .shopcart-shop-price-num {
    display: flex;
    justify-content: space-between;
  }
</style>
