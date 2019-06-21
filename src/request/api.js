import { get } from '@/request/request.js'

// url根地址
const baseUrl = 'http://your_api_base_url'

// 暴露出一个接口
export const apiName = (params) => get(baseUrl + '/your_api_name', params)
