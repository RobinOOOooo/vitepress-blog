## 为什么选择vitepress
- Vue官方推荐
- 使用vite构建，速度快、热更行快
- 可以同时学习Vue3、Vite
- 比nuxtjs要轻量，配置简单，入门容易


## vitepress适用场景
- 文档库
- 个人博客


## 首页features配置
```java
features:
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
  - icon:
      src: /1.jpeg
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /1.png
      light: /2.png
    title: Another cool feature
    details: Lorem ipsum...
	
	首页在 index.md 文件中使用 Frontmatter 编写。Frontmatter 本质上就是在 MD 文件中编写 yaml 获取 JSON，位于两个 — 之间，且必须放在 MD 文件的顶部。
	可通过 Frontmatter 指定文档的标题、布局等属性。具体属性配置可以在官网上查看
```

## Reference
```
https://blog.csdn.net/qq_41295954/article/details/129287652
vitepress中文文档
https://vitejs.cn/vitepress/
基于vitepress搭建的网站
https://github.com/zrtch
```

## 插件
- yidocs 开箱即用，并且无需手动配置 侧边栏 和 导航栏，https://yicode.tech/2-%E5%BC%80%E6%BA%90/2-yidocs/1-%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.html
- axios集成，
## 如何写文章

> src目录下写md文件，最后md文件会被编译成html文件，路径和md所在路径一样，eg：src/a/b.md->a/b.html，config.js中设置顶部导航和左侧导航，类比为顶部为一级菜单，左侧为二级菜单，eg："源码/springboot"为一级，
表示springboot的源码系列（配置为对应左侧第一个页面），点开后，左侧菜单再具体细分，每一个链接都是一个页面。vitepress支持vue，可以写vue页面，安装axios后可以调接口等

