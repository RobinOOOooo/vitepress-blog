# vitepress创建的静态网站
```
适合作为文档网站，做笔记等，做博客不太合适。博客系统推荐用hexo或者docusaurus
参考：https://github.com/zrtch
```

## 中文文档
环境配置，文档说明等
https://vitejs.cn/vitepress/
https://vitepress.docschina.org/

## 启动预览
yarn docs:dev

## 打包，.vitepress/dist目录下为静态文件
yarn docs:build

## 配置文件
.vitepress/config.js为配置文件

github-pages
github-pages分支为打包后的静态文件，配置github-pages到该分支root

# 目录结构
public：存放图片等静态资源
docs：md页面文件
.vitepress：打包输出dist目录，config.js配置文件
