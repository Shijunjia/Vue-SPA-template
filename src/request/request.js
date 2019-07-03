// 导入axios
import axios from 'axios'
// 导入qs 暂时只知道这个是用来序列化字符串的库
import QS from 'qs'
// 导入轻提示UI组件
import { Toast } from 'vant'
// 导入vuex因为拦截请求前，要验证里面的状态对象
import store from '@/store'
// 导入路由，用于解决跳转
import router from '@/router'

// 分别配置开发、调试、发布时请求的根地址
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
}

// 超时时长
axios.defaults.timeout = 1000 * 5

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求的拦截
axios.interceptors.request.use(
  config => {
    // 请求前判断token是否存在，如果存在，再请求的header都加上token
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应的拦截
axios.interceptors.response.use(
  response => {
    // 如果状态200，请求成功，否则抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 根据后台错误状态码进行操作
  // 以下是常规操作，其他需求自行拓展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401 未登录
        case 401:
          // 跳转到登陆页面，并携带当前页面路径
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        // 403 token过期
        case 403:
          // 做出提示
          Toast({
            message: '403登陆信息异常，请重新登陆'
          })
          // 清除本地token
          localStorage.removeItem('token')
          // 清除vuex中的token对象
          store.commit('loginSucsess', null)
          // 1秒后，跳转到登陆页面，并携带当前页面路径
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          }, 1000)
          break
        // 404请求不存在
        case 404:
          Toast({
            message: '404请求不存在'
          })
          break
        default:
          // 提示信息
          Toast({
            message: error.response.data.message
          })
      }
      return Promise.reject(error.response)
    }
  }
)

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
