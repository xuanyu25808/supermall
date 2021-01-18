export const backTopMixin = {
  data(){
    return{
      isShowbackTop:false,
    }
  },
  methods:{
    // 返回顶部
    backTopClick(){
      // 调用scroll组件中的scrollTo方法
      if (this.$refs.detailScroll) {
        this.$refs.detailScroll.scrollTo(0,0,2000)
      }else{
        this.$refs.HomeScroll.scrollTo(0,0,2000)
      }
    },
  }
}
