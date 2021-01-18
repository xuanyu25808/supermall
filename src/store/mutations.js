export default {

  // 分成两个方法是为了在devtools中可以观察到是加商品还是加数量，方便维护

  //添加该商品到数组中
  addProduct(state, payload) {
    payload.selected = true;
    state.productCart.push(payload);
  },
  //给数组中该商品数量加一
  addProductCount(state, payload) {
    payload.count += 1;
  },

  // 改变选中状态
  changeSelect(state,index){
    state.productCart[index].selected = !state.productCart[index].selected;
  },

  // 全部状态改变
  allstateChange(state,boolea){
    for (let i in state.productCart) {
      state.productCart[i].selected = boolea;
    }
  }
}
