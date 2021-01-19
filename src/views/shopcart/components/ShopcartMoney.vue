<template>
  <div class="shopcart-money-layout">
    <div class="shopcart-money-left">
      <div class="shopcart-money-btns">
        <div @click="allChiose" class="shopcart-money-btn">{{getSelectText}}</div>
        <div class="shopcart-money-btn-name">全选</div>
      </div>
      <div class="shopcart-money-coll">合计:{{finalPrice}}</div>
    </div>
    <div class="shopcart-money-right" @click="calculateMoney">去计算({{selectCount}})</div>
  </div>
</template>

<script>
  export default {
    name: 'ShopcartMoney',
    data(){
      return{
        selectText:'',
        selectCount:0
      }
    },
    computed: {
      //算最终的价格
      finalPrice() {
        //价格
        let price = 0;
        // 多少个
        let tempCount = 0;
        //
        for (let n of this.$store.state.productCart) {
          if (n.selected) {
            price += n.price * n.count
            tempCount++;
          }
        }
        this.selectCount = tempCount
        return price.toFixed(2)
      },

      getSelectText(){
        // 只要有一个没被选中，就不显示  √
        if ( this.$store.state.productCart.find(n => !n.selected) ) {
          this.selectText = ''
          return ''
        }
        if (this.$store.state.productCart.length==0) {
          this.selectText = ''
          return ''
        }
        // 否则返回全选
        this.selectText = '√'
        return '√'
      }
    },
    methods: {
      // 全选状态改变
      allChiose() {
        this.selectText = this.selectText==='√'?'':'√'
        if (this.selectText=='√') {
          this.$store.commit('allstateChange',true)
          this.selectCount = this.$store.state.productCart.length;
        }else{
          this.$store.commit('allstateChange',false)
          this.selectCount = 0;
        }
      },
			// 去计算
			calculateMoney(){
				if (this.selectCount==0) {
					this.$toast.show('请选择商品')
				}
			}
				
    }
  }
</script>

<style scoped="scoped">
  .shopcart-money-layout {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .shopcart-money-right {
    width: 120px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: orangered;
    color: white;
  }

  .shopcart-money-left {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .shopcart-money-btns {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .shopcart-money-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: hotpink;
    color: white;
    margin-right: 6px;
    margin-left: 6px;
    text-align: center;
    line-height: 20px;
  }

  .shopcart-money-btn-name {
    height: 30px;
    line-height: 30px;
  }

  .shopcart-money-coll {
    height: 30px;
    line-height: 30px;
  }
</style>
