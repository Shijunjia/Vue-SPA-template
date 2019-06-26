// 导入axios
import axios from 'axios'
// 导入qs 暂时只知道这个是用来序列化字符串的库
import QS from 'qs'

// 超时时长
axios.defaults.timeout = 1000 * 5

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

/*
请求拦截
如果有必要的话,设置发送请求前的拦截
比如:发送强求前检查token状态
*/

/*
封装 get 和 post 请求
参数1 url {String} [请求的url地址]
参数1 params {Object} [请求的参数]
*/
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(resolve.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
