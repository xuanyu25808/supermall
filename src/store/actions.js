export default {
  addCart(context, payload) {
    return new Promise((resolve,reject)=>{
      //找到数组中是否已经含有该商品
      let oldProduct = context.state.productCart.find(n => n.iid === payload.iid)
      if (oldProduct) {
        //若有，在方法中给数量加一
        context.commit('addProductCount', oldProduct)
        resolve('该商品数量加1个')
      } else {
        // 若没有,添加该商品到数组中
        payload.count = 1;
        context.commit('addProduct', payload)
        resolve('添加该商品')
      }
    })
  }
}
