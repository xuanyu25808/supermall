<template>
  <div class="detailRate-layout" v-if="Object.keys(userRate).length !== 0">
    <div class="detailRate-topBox">
      <h4 class="detailRate-title">用户评价</h4>
      <div class="detailRate-more">更多</div>
    </div>
    <div class="detailRate-desc">
      <div class="detailRate-user-imgBox">
        <img :src="userRate.user.avatar" class="detailRate-user-img">
      </div>
      <div class="detailRate-user-name">{{userRate.user.uname}}</div>
    </div>
    <div class="detailRate-content">
      <p class="detailRate-user-speak">{{userRate.content}}</p>
      <p class="detailRate-shop-message">
        <span class="detailRate-shop-time">{{userRate.created | getLocalTime}}</span>
        <span class="detailRate-shop-con">{{userRate.style}}</span>
      </p>
      <div class="detailRate-user-display">
        <div class="detailRate-userRate-imgBox" v-for="imgUrl in userRate.images">
          <img class="detailRate-userRate-img" :src="imgUrl">
        </div>
      </div>
      <p class="detailRate-people-speak">{{userRate.explain}}</p>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default{
    name:"DetailRate",
    props:{
      userRate:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      getLocalTime(nS) {
        let time = new Date(nS*1000);
        return formatDate(time,'yyyy-MM-dd hh:mm:ss')
        // let y = time.getFullYear();
        // let m = parseInt(time.getMonth())+1;
        // let d = parseInt(time.getDate());
        // return y+'-'+m+'-'+d
      }
    },
    methods:{

    }
  }
</script>

<style scoped="scoped">
  .detailRate-layout{
    padding: 0 10px 10px 10px;
    border-bottom: 2px solid #E8E8E8;
  }
  .detailRate-topBox{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 2px solid #E8E8E8;
    padding-bottom: 15px;
  }
  .detailRate-title{
    font-weight: normal;
  }
  .detailRate-more{
    font-weight: bold;
  }
  .detailRate-desc{
    padding-top: 10px;
    padding-bottom: 8px;
    display: flex;
    align-items: center;

  }
  .detailRate-user-imgBox{
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  .detailRate-user-img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .detailRate-user-name{
    font-size: 15px;
    font-weight: bold;
  }
  .detailRate-content{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .detailRate-shop-message{
    margin-bottom: 8px;
  }
  .detailRate-shop-time{
    margin-right: 8px;
  }
  .detailRate-user-speak{
    font-size: 14px;
    margin-bottom: 4px;
    text-indent:2em;
    line-height: 20px;
  }
 .detailRate-user-display{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
 }
  .detailRate-userRate-imgBox{
    width: 50%;
    height: 150px;
    box-sizing: border-box;
    padding: 0px 10px 10px 10px;
  }
  .detailRate-userRate-img{
    width:100%;
    height: 100%;
  }
  .detailRate-people-speak{
    font-size: 14px;
  }
</style>
