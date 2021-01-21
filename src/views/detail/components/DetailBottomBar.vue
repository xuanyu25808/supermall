<template>
  <div class="bottom-bar">
    <div class="detail-bottom-icon">
      <ul class="detail-bottom-nav">
        <li class="detail-bottom-nav-item">
          <div class="detail-bottom-nav-item-icon icon1"></div>
          <div class="detail-bottom-nav-item-name">客服</div>
        </li>
        <li class="detail-bottom-nav-item">
          <div class="detail-bottom-nav-item-icon icon2"></div>
          <div class="detail-bottom-nav-item-name">店铺</div>
        </li>
        <li class="detail-bottom-nav-item" @click="collectionClick">
          <div ref="collection" class="detail-bottom-nav-item-icon icon3"></div>
          <div class="detail-bottom-nav-item-name">收藏</div>
        </li>
      </ul>
    </div>
    <div class="detail-bottom-btn">
      <div class="detail-bottom-btn-join" ref="detailJoin" @click="addProduct">
        加入购物车

        <!-- 加入购物车动画 -->
        <div class="" ref="addProductCricle"></div>
      </div>
      <div class="detail-bottom-btn-sale">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {
      addlock: true
    };
  },
  methods: {
    // 收藏按钮
    collectionClick() {
      if (this.$refs.collection.classList.contains("icon4")) {
        this.$refs.collection.classList.remove("icon4");
      } else {
        this.$refs.collection.classList.add("icon4");
      }
    },
    addProduct() {
      if (this.addlock) {
        this.addlock = false;
        this.$emit("addProduct");

        // 加入动画效果
        this.$refs.addProductCricle.classList.add("addProductCricle");
        setTimeout(() => {
          this.$refs.addProductCricle.classList.remove("addProductCricle");
          this.$refs.detailJoin.classList.add("detail-bottom-btn-join-active");
        }, 490);
        setTimeout(() => {
          this.$refs.detailJoin.classList.remove(
            "detail-bottom-btn-join-active"
          );
          this.addlock = true;
        }, 600);
      }
    }
  }
};
</script>

<style scoped="scoped">
.bottom-bar {
  width: 100%;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.detail-bottom-icon,
.detail-bottom-btn {
  flex: 1;
  position: relative;
}
.detail-bottom-icon {
  width: 100%;
  height: 100%;
}
.detail-bottom-nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail-bottom-nav-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.detail-bottom-nav-item-icon {
  width: 16px;
  height: 16px;
  background: url(~assets/images/detail/detail_bottom.png) no-repeat;
  box-sizing: 50% 50%;
  margin-bottom: 5px;
}
.icon1 {
  background-position: -1px -38px;
}
.icon2 {
  background-position: -1px -57px;
}
.icon3 {
  background-position: -1px -1px;
}
.icon4 {
  background-position: -1px -19px;
}
.detail-bottom-nav-item-name {
  font-size: 14px;
}
.detail-bottom-btn {
  display: flex;
  width: 100%;
  height: 100%;
}
.detail-bottom-btn-join,
.detail-bottom-btn-sale {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail-bottom-btn-join {
  background-color: gold;
  color: black;
  position: relative;
}

.detail-bottom-btn-join-active {
  background-color: orangered;
  color: white;
}

.detail-bottom-btn-sale {
  background-color: hotpink;
  color: white;
}

.addProductCricle {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  bottom: 0px;
  background-color: red;
  border-radius: 50%;
  background-color: orangered;
  display: block;
  animation: cricleRun 0.5s linear 0s;
}
@keyframes cricleRun {
  0% {
    right: 10px;
    bottom: 90px;
    background-color: transparent;
  }
  40% {
    right: 30px;
    bottom: 120px;
  }
  100% {
    right: 50px;
    bottom: 20px;
    background-color: orangered;
  }
}
</style>
