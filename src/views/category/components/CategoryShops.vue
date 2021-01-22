<template>
  <scorll class="category-shops-scroll" ref="categoryShopsScroll">
    <div class="category-shops">
      <div class="category-shop-item" v-for="item in cateShops">
        <div class="category-shops-imgBox">
          <img class="category-shops-img" :src="item.image">
        </div>
        <p class="category-shops-title">{{item.title}}</p>
      </div>
    </div>
  </scorll>
</template>

<script>
import scorll from 'components/common/scroll/Scroll'

export default {
  name:"CategoryShops",
  components:{
    scorll
  },
  props:{
    cateShops:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    CategoryShopsScrollRefresh(){
      this.$refs.categoryShopsScroll.scrollTo(0,0,0)
      setTimeout(()=>{
        this.$refs.categoryShopsScroll.refresh()
      },500)
    }
  }
}
</script>

<style scoped>
  .category-shops-scroll{
    position: absolute;
    left: 100px;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .category-shops{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px 0 0 ;
  }
  .category-shop-item{
    padding: 0 0 10px 10px;
    width: 49%;
  }
  .category-shops-imgBox{
    width: 100%;
  }
  .category-shops-img{
    width: 100%;
  }
  .category-shops-title{
    text-align: center;
    margin: 10px 0;
  }
</style>
