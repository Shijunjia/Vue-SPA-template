# Vue SPA template

> 一个纯净的Vue单页应用模板

基于 Vue 的前端开发环境，用于单页应用开发，已经集成了Vant UI移动端组件库。项目包含：

- 基础库: `vue.js`、`vue-router`、`vuex`
- 移动端UI组件库 `vant`
- 编译/打包工具：`webpack`、`babel`、`node`

您可以根据项目需要使用其他组件库，以下是一些优秀的VUE UI组件库：

 - [elementUi](http://element-cn.eleme.io/#/zh-CN/)
 - [mintUi](http://mint-ui.github.io/#!/en)
 - [museUi](http://www.muse-ui.org/#/index)

### 快速开始

```
git clone https://github.com/shijunjia/vue-spa-template.git 
npm install
npm run serve
```

### 命令列表：

```
编译和热更新（用于开发环境）
npm run serve

编译并压缩（用于生产环境），构建好的文件会输出到 "dist" 目录
npm run build

开启测试
npm run test

启动lint检查并修复源文件
npm run lint
```

### 目录结构

```
├── public
│   ├── favicon.ico               fav图标
│   └── index.html                入口页面
├── src
│   ├── assets                    静态资源
│   ├── components                组件目录
│   │   └── HelloWorld.vue        示例组件
│   ├── request                   请求与接口  
│   │   ├── api.js                接口管理  
│   │   └── request.js            封装Axios请求
│   ├── views                     页面
│   │   ├── Home.vue              首页
│   │   └── About.vue             示例页面  
│   ├── App.vue                   根组件
│   ├── main.js                   入口js
│   ├── router.js                 路由配置
│   └── store.js                  数据状态管理
├── package-lock.json
├── package.json
└── README.md
```
