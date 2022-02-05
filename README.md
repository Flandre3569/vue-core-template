# vue-core-template
一个自定义的功能较为完备的vue3模板

## 模板目录：
```
│  .browserslistrc
│  .editorconfig
│  .gitignore
│  index.html
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│  vite.config.ts
│
├─.vscode
│      extensions.json
│
├─public
│      favicon.ico
│
└─src
    │  App.vue
    │  env.d.ts
    │  main.ts
    │
    ├─assets
    │      logo.png
    │
    ├─components
    │      HelloWorld.vue
    │
    ├─pages
    │  ├─home
    │  │      index.vue
    │  │      router.ts
    │  │      type.ts
    │  │
    │  ├─login
    │  │      index.vue
    │  │      router.ts
    │  │      type.ts
    │  │
    │  └─notfound
    │          index.vue
    │          router.ts
    │          type.ts
    │
    ├─router
    │      index.ts
    │
    ├─service
    │      index.ts
    │
    ├─store
    │  ├─home
    │  │      home.ts
    │  │      type.ts
    │  │
    │  ├─index
    │  │      index.ts
    │  │      type.ts
    │  │
    │  └─login
    │          login.ts
    │          type.ts
    │
    └─utils
            Cache.ts
            firstUpperCase.ts
```

## 模板包含：
- vue3(vue-core) + typescript支持
- vite
- router4(The official router for Vue.js)
- pinia(状态管理工具)
- directory alias('@/')
- 跨域请求(proxy)
- 代码规范(editorconfig)，没有使用tslint或prettier
- axios支持
- 存储转化工具(sessionStorage/localStorage)
- 浏览器适配范围
- 路由守卫(可选)
- 404拦截
- 根据pages目录动态添加路由

## 设计目的：
作为自主开发脚手架的vue3模板
主要适用于前后端分离项目
