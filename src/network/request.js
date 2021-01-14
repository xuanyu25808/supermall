import axios from 'axios';

export function request(config){
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
  })

  // 请求拦截
  instance.interceptors.request.use(
  config=>{
  	return config
  },err=>{
  	console.log(err,'请求超时')
  })

  //响应拦截
  instance.interceptors.response.use(
  	res=>{
  		return res.data
  	},
  	err=>{
  		console.log(err,'响应错误')
  	}
  )

  // 2.导出
  return instance(config)
}
