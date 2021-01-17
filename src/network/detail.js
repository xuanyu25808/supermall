import {request} from './request.js'


export function detailData(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function detailRecommend(){
  return request({
    url:'/recommend'
  })
}


//获取简单描述信息
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

//获取商家店铺的数据
export class shopMessage{
  constructor(shopInfo) {
     this.logo = shopInfo.shopLogo
     this.name = shopInfo.name
     this.cFans = shopInfo.cFans
     this.GoodsCount = shopInfo.cGoods
     this.cSells = shopInfo.cSells
     this.score = shopInfo.score
  }
}

//获取尺码信息
export class itemParams{
  constructor(info,rule) {
    this.info = info.set
    this.infoKey = info.key
    this.shopImg = info.images
    this.tables = rule.tables
    this.disclaimer = rule.disclaimer
    this.ruleKey = rule.key
  }
}