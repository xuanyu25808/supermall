import {request} from './request'

export function categoryMes(){
  return request({
    url:'/category'
  })
}

export function categoryShops(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
