// 导入request.js中封装好的方法
import { get } from '@/request/request.js'

// 设置接口地址，并并暴露出接口
export const apiName = (params) => get('/mock/rank', params)
