<template>
  <scroll class="category-scroll" v-if="cateTitle.length!=0">
    <ul class="category-nav">
      <li class="category-item" :class="{'category-item-active':index===currentIndex}" @click="titleClick(index)" v-for="(item,index) in cateTitle">{{item}}</li>
    </ul>
  </scroll>
</template>

<script>
  import scroll from 'components/common/scroll/Scroll.vue'

  export default {
    name: "CategoryNavigation",
    components: {
      scroll
    },
    props: {
      cateTitle: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick',index)
      }
    }
  }
</script>

<style scoped>
  .category-scroll {
    position: absolute;
    width: 100px;
    left: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    background-color: rgb(246, 246, 246);
  }

  .category-nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    touch-action: none;
  }

  .category-item {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    border-left: 3px solid transparent;
    color: rgb(119, 119, 119);
  }

  .category-item-active {
    border-left: 3px solid rgb(236, 100, 116);
    background-color: rgb(255, 255, 252);
    color: var(--color-high-text);
  }
</style>
