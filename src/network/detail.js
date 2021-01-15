import {request} from './request.js'


export function detailData(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class simpleDes{
  constructor(itemInfo,columns,services) {
      this.title = itemInfo.title
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.realPrice = itemInfo.lowNowPrice
      this.discountDesc = itemInfo.discountDesc
      this.discountBgColor = itemInfo.discountBgColor
      this.columns = columns
      this.services = services
  }
}
