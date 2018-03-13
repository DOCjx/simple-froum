# 简易论坛

## 特性

*    技术上：
      *  分组件、模块化、reducer分层导入全局注册、团队开发效率高、面向接口（数据接口、组件接口）编程、函数式编程
*    界面设计上：
      *  简洁易用、逻辑清晰、采用流式布局

## 类型

    react redux react-redux hapi mongodb webpack

## 目录结构

```bash
├── /dist/           # 项目输出目录
├── /public/         # 静态文件
├── /mongodb/        # 数据库
├── /routes/         # 数据接口路由
├── /views/          # 项目视图路由
├── /src/            # 项目业务代码
│    ├── /Root/                 # 程序根目录
│    │    ├── /components/      # 子组件
│    │    │    ├── /Admin/      # 后台组件
│    │    │    │    └── ...
│    │    │    ├── /Detail/        # 导航栏组件
│    │    │    │    ├── /components/   # 组件的子组件
│    │    │    │    │    └── ...
│    │    │    │    ├── /models/       # 子页面M
│    │    │    │    ├── style.less     # 页面描述文件
│    │    │    │    ├── index.js       # 组件入口
│    │    │    │    └── UI.js          # 页面展示文件
│    │    │    └── ...
│    │    ├── /models/         # 组件reducer集
│    │    │    ├── index.js    # 加载子模块reducer
│    │    │    └── Root.js     # 首页reducer
│    │    ├── style.less    # 首页页面描述文件
│    │    ├── index.js      # 首页入口
│    │    └── UI.js         # 首页页面展示文件
│    ├── App.js         # 初始化app
│    ├── index.js       # 入口文件
│    └── UI.js          # app根容器
├── server.js           # 配置hapi数据服务
├── gulpfile.json       # 配置gulp远程部署任务
├── package.json        # 项目信息
└── ...                 # 其它
```