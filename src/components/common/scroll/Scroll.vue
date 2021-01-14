<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      // 初始设定不实时监听页面滚动事件
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!需要延迟会，
      //等包裹的组件都创建完，这个再创建
      setTimeout(() => {
        // 1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          // 这里设置为3才能实时监听页面滚动数据
          probeType: this.probeType,
          // 这里设置为true才能监听上拉加载更多
          pullUpLoad: this.pullUpLoad
        })
        // 2.实时监听滚动的事件  BScroll自带的方法
        this.scroll.on('scroll', position => {
          // 把位置信息传到首页
          this.$emit('scroll', position)
        })
        // 3.上拉加载更多
        this.scroll.on('pullingUp', () => {
          // 把到底部的信息传到首页
          this.$emit('pullingUp')
        })
        this.scroll.scrollTo(0, 0)
      }, 500)
    },
    methods: {
      scrollTo(x, y, time = 500) {
        // better-scroll有个方法,可以返回到顶部
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
        this.scroll.finishPullUp();
        // 要刷新一下，不然会卡顿，不能继续往上拖拽
        setTimeout(() => {
          this.scroll.refresh();
        }, 500);
      }
    }
  }
</script>

<style scoped="scoped">
</style>
