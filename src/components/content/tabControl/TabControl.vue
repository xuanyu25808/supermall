<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active:isActive===index}" @click="handleClick(index)"  v-for="(item,index) in titles">
      <span class="tab-control-title">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'TabControl',
    data(){
      return{
        isActive:0
      }
    },
    methods:{
      handleClick(index){
        this.isActive = index
        this.$emit('tabChange',index)
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }

    }
  }
</script>

<style>
  .tab-control{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-title{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active .tab-control-title{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
