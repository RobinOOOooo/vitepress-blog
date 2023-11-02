export default {
  lang: 'zh-CN',
  title: "Robin's blog",
  description: "Robin's blog",
  // 网站图标
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/vitepress-blog/',
  // 主题配置
  themeConfig: {
	// 主页左上角标题
    siteTitle: "Robin's blog",
	// 左上角图标
    logo: '/1.png',
	lastUpdated: true,
	lastUpdatedText: '上次更新',
	returnToTopLabel: "返回顶部",
	socialLinks: [
      { icon: "github", link: "https://github.com/RobinOOOooo/vitepress-blog.git" }
    ],
	////////////////////////////////////////////////////////////////////////////////////////////
	// 下面的配置只在除首页外的页面生效
	// 编辑链接，github的地址
	editLink: {
      pattern: 'https://github.com/RobinOOOooo/vitepress-blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
	// 顶部导航
    nav: [
	  { text: 'Readme', link: '/src/readme' },
      { text: 'Java', link: '/src/java/readme' },
	  // 当页面地址匹配时，该导航将高亮
      { 
		text: 'spring', 
		activeMatch: '/src/spring/readme',
		items: [
          { text: 'readme', link: '/src/spring/readme' },
          { text: 'Spring Boot 3.x', link: '/src/spring/springboot3.x' },
        ]
	  },
	  {
        text: 'Other',
        items: [
          { text: 'linux', link: '/src/other/linux' },
          { text: 'readme', link: '/src/other/readme' },
          { text: 'component', link: '/src/other/component' },
          { text: 'jquery', link: '/src/other/jquery' },
		  { text: 'git代码规范', link: '/src/other/git代码规范' },
		  { text: '收藏', link: '/src/other/收藏' }
        ]
      },
	  {
        text: 'Book',
        items: [
          { text: '置身事内：中国政府与经济发展', link: '/src/book/置身事内：中国政府与经济发展' },
		  { text: '图解六道轮回', link: '/src/book/图解六道轮回' }
        ]
      },
	  {
        text: 'Source Code',
        items: [
          { text: 'springboot', link: '/src/源码/启动流程' }
        ]
      },
	  {
        text: 'Gallery',
        items: [
          { text: 'leo', link: '/src/gallery/leo' }
        ]
      },
	  {
        text: '运维',
        items: [
          { text: '运维', link: '/src/运维/运维' }
        ]
      },
      {
        text: '架构',
        items: [
          { text: '架构', link: '/src/架构/架构' }
        ]
      },
      { text: 'Changelog', link: 'https://github.com/RobinOOOooo/vitepress-blog/commits/github-pages' }
    ],
	// 侧边栏，根据路径匹配
	sidebar: {
	  '/src/java/': [
	    {
          text: 'IO',
		  collapsed: false,
          items: [
            { text: 'readme', link: '/src/java/readme' },
            { text: 'page1', link: '/src/java/page1' },
			{ text: 'page2', link: '/src/java/page2' }
          ]
        }
	  ],
	  '/src/源码/启动流程': [
	    {
          text: '启动流程',
          items: [
            { text: '启动流程', link: '/src/源码/启动流程' },
			{ text: '代码片段', link: '/src/源码/代码片段' }
          ]
        }
	  ],
	  '/src/源码/代码片段': [
	    {
          text: '启动流程',
          items: [
            { text: '启动流程', link: '/src/源码/启动流程' },
			{ text: '代码片段', link: '/src/源码/代码片段' }
          ]
        }
	  ],
    },
	// 页脚
	footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 1990-2023 Robin Lian'
    },
	// 搜索
	search: {
      provider: 'local'
    },
	// 文档页脚文本配置
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
	// 页面右侧大纲目录
	outline: {
       level: "deep", // 右侧大纲标题层级
       label: "目录", // 右侧大纲标题文本配置
    }
  }
}