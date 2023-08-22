import{_ as s,o as a,c as n,X as l}from"./chunks/framework.39c1605d.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/readme.md","filePath":"src/readme.md","lastUpdated":1692691545000}'),e={name:"src/readme.md"},p=l(`<h2 id="为什么选择vitepress" tabindex="-1">为什么选择vitepress <a class="header-anchor" href="#为什么选择vitepress" aria-label="Permalink to &quot;为什么选择vitepress&quot;">​</a></h2><ul><li>Vue官方推荐</li><li>使用vite构建，速度快、热更行快</li><li>可以同时学习Vue3、Vite</li><li>比nuxtjs要轻量，配置简单，入门容易</li></ul><h2 id="vitepress适用场景" tabindex="-1">vitepress适用场景 <a class="header-anchor" href="#vitepress适用场景" aria-label="Permalink to &quot;vitepress适用场景&quot;">​</a></h2><ul><li>文档库</li><li>个人博客</li></ul><h2 id="首页features配置" tabindex="-1">首页features配置 <a class="header-anchor" href="#首页features配置" aria-label="Permalink to &quot;首页features配置&quot;">​</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">features</span><span style="color:#89DDFF;font-style:italic;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> icon</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 🛠️</span></span>
<span class="line"><span style="color:#A6ACCD;">    title</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Simple</span><span style="color:#A6ACCD;"> and minimal</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> always</span></span>
<span class="line"><span style="color:#A6ACCD;">    details</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Lorem</span><span style="color:#A6ACCD;"> ipsum</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> icon</span><span style="color:#89DDFF;font-style:italic;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      src</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">jpeg</span></span>
<span class="line"><span style="color:#A6ACCD;">    title</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Another</span><span style="color:#A6ACCD;"> cool feature</span></span>
<span class="line"><span style="color:#A6ACCD;">    details</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Lorem</span><span style="color:#A6ACCD;"> ipsum</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> icon</span><span style="color:#89DDFF;font-style:italic;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      dark</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">png</span></span>
<span class="line"><span style="color:#A6ACCD;">      light</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">png</span></span>
<span class="line"><span style="color:#A6ACCD;">    title</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Another</span><span style="color:#A6ACCD;"> cool feature</span></span>
<span class="line"><span style="color:#A6ACCD;">    details</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Lorem</span><span style="color:#A6ACCD;"> ipsum</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	首页在 index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">md 文件中使用 Frontmatter 编写。Frontmatter 本质上就是在 MD 文件中编写 yaml 获取 JSON，位于两个 — 之间，且必须放在 MD 文件的顶部。</span></span>
<span class="line"><span style="color:#A6ACCD;">	可通过 Frontmatter 指定文档的标题、布局等属性。具体属性配置可以在官网上查看</span></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://blog.csdn.net/qq_41295954/article/details/129287652</span></span>
<span class="line"><span style="color:#A6ACCD;">vitepress中文文档</span></span>
<span class="line"><span style="color:#A6ACCD;">https://vitejs.cn/vitepress/</span></span>
<span class="line"><span style="color:#A6ACCD;">基于vitepress搭建的网站</span></span>
<span class="line"><span style="color:#A6ACCD;">https://github.com/zrtch</span></span></code></pre></div>`,8),t=[p];function o(c,r,i,C,A,D){return a(),n("div",null,t)}const d=s(e,[["render",o]]);export{F as __pageData,d as default};