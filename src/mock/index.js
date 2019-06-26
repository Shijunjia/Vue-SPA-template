import Mock from 'mockjs'

// 模拟延迟
Mock.setup({
  timeout: 500
})

// 模拟数据 随机1-5颗星
let template = {
  'rank|1-5': '⭐'
}

// 拦截请求并模拟接口
// Mock.mock(要拦截的url, get/post, template)
Mock.mock('/mock/rank', 'get', template)
