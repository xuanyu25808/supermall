<template>
  <div class="itemParams-layout" v-if="Object.keys(itemParams).length !== 0">
    <div class="itemParams-size-box">
      <h4 class="itemParams-size-title">{{itemParams.ruleKey}}</h4>
      <table class="itemParams-size">
        <tr class="itemParams-row" v-for="sizeRow in itemParams.tables[0]">
          <td class="itemParams-size-td" v-for="item in sizeRow">{{item}}</td>
        </tr>
      </table>
    </div>
    <div class="itemParams-info-box">
      <h4 class="itemParams-size-title">{{itemParams.infoKey}}</h4>
      <table class="itemParams-info">
        <tr class="itemParams-row itemParams-info-row" v-for="infoRow in itemParams.info">
          <td class="itemParams-info-td" v-for="item in infoRow">{{item}}</td>
        </tr>
      </table>
      <div class="itemParams-info-imgBox" v-if="itemParams.shopImg" v-for="imgUrl in itemParams.shopImg">
        <img :src="imgUrl" class="itemParams-info-img">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemParams",
    props: {
      itemParams: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .itemParams-layout{
    padding: 0px 10px 15px 10px;
  }
  .itemParams-size-box,.itemParams-info-box{
    width: 100%;
    border-bottom: 2px solid #E8E8E8;
  }
  .itemParams-size-title{
    margin-bottom: 10px;
  }
  .itemParams-size,.itemParams-info{
    width: 100%;
    font-size: 15px;
  }
  .itemParams-row{
    display: block;
    width: 100%;
    border-bottom: 1px solid #E8E8E8;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
  }
  .itemParams-row:last-child{
    border-bottom: none;
  }
  .itemParams-size-td{
    flex: 1;
  }
  .itemParams-size-title{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .itemParams-info-row{
    display: flex;
  }
  .itemParams-info-td:first-child{
    width: 40px;
    margin-right: 40px;
    white-space: nowrap;
  }
  .itemParams-info-td:last-child{
    color: #FF789A;
  }
  .itemParams-info-imgBox{
    width: 100%;
    height: 100%;
  }
  .itemParams-info-img{
    width: 100%;
    height: 100%;
  }
</style>
