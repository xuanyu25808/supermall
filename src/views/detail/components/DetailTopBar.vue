<template>
  <top-bar>
    <div slot="left" class="left-imgBox" @click="back">
      <img class="left-img" src="~assets/images/common/back.svg" alt="">
    </div>
    <div slot="center" class="detailTopBar">
      <h2 v-for="(item,index) in title" @click="titleClick(index)" class="detailTopBar-item" :class="{titleActive:currentIndex===index}">{{item}}</h2>
    </div>
  </top-bar>
</template>

<script>
  import TopBar from 'components/common/topbar/TopBar'
  export default{
    name:'DetailTopBar',
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      TopBar
    },
    methods:{
      titleClick(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped="scoped">
  .detailTopBar{
    display: flex;
  }
  .detailTopBar-item{
    flex: 1;
    font-weight: normal;
    font-size: 15px;
  }
  .titleActive{
    color: var(--color-high-text);
  }
  .left-imgBox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .left-img{
    width: 22px;
    height: 22px;
  }
</style>
