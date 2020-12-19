# mymusic

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

目录构架
assets //资源的意思
里面包含 css 和 img

components //组件的意思
里面还有 common（支持所有移动端的公共组件） 和 content （针对当前项目所使用的公共组件）

router //路由相关的文件

store // vuex 状态管理工具

nextwork // 网络相关的封装文件

common //主要的 js 文件 里面的 const.js 主要是公共的常量 和公共的方法

views // 主要页面


播放器组件。
调用在commponents 里面的Musicplay.vue

import XXX from "路径"

components: {
    Aplayer,
  },

使用的时候   <Aplayer :id="id"></Aplayer> 
id是歌曲的ID

### 项目简介

我们TOP队带来的项目是网抑云，团队成员有辛镜，牛博坤，盛彩鸽，陈佳君，段锐钢。主要使用vue前端框架开发，其中包含HTML + CSS + Sass + Vue +
 Vuex  + LocalStrong + Cookie + Vant + ElementUI + Mint UI 等技术手段，主要使用VScode编译代码，GitHub托管代码，腾讯云服务器和宝塔Linux
面板管理上线项目。其中包含七大模块：登录模块、注册模块、发现模块、歌手/歌单模块、我的模块、云村模块、播放器模块。登录模块主要由陈佳君负责
开发，里面有对表单的正则校验，通过按钮的disabled属性来告知用户表单是否已填写完毕。注册模块也由陈佳君负责开发，能实现给手机发送验证码并完成
注册。发现模块为项目的主页，由盛彩鸽负责开发，有简单的轮播图，menu菜单的弹出与收回，一些个性化的推荐。歌手/歌单模块由牛博坤负责开发，能实
现根据歌手名字首字母以A-Z排序，歌单页能显示歌单或者对应歌手的单曲列表，能实现点击播放。我的模块由辛镜开发，能实现简单的登录判定，以及退出
登录，根据登录与否显示不同的内容，同时能获取到登录用户的头像，昵称，等级，歌单等信息。云村模块由陈佳君负责开发，能推送一些MV视频，同时搜索
框也能显示对应的搜索内容。播放器模块由段锐钢负责开发，能实现对应歌曲的播放，单曲循环，歌词显示，以及进度控制，能实现云村页面的MV视频播放。

### GitHub项目地址

https://github.com/qiqixiaocao/wangyiyun.git