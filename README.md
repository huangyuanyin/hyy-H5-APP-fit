# Vue 3 + TypeScript + Vite
  基于 vue3 + vite + vant3.5 + sass + viewport 适配方案 +axios 封装，构建手机端模板脚手架

### 目录
- [vite](###vite)
- [viewport适配方案](###viewport适配方案)


### vite
基于原生 ES 模块提供了丰富的内建功能，如速度快到惊人的模块热更新（HMR），使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。更多关于vite

模版集成了如下的 vite 插件:

- unplugin-vue-components（按需加载，自动引入组件）


### viewport 适配方案
项目已经配置好了 viewport 适配，下面仅做介绍：
- cnjm-postcss-px-to-viewport 是一款 postcss 插件，用于将单位转化为 vw， 现在很多浏览器对vw的支持都很好，适配首选方案。
