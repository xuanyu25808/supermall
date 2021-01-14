import {
  request
} from './request.js'

//获得轮播图和旁边的数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//获得商品列表的数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
