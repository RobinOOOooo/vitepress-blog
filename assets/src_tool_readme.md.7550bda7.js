import{_ as c,o,c as l,k as t,L as r,M as a,a as d,t as n}from"./chunks/framework.39c1605d.js";const p="/vitepress-blog/1.mp4",h="/vitepress-blog/1.jpeg",u={data(){return{title:"博客列表页",blogs:[]}},mounted(){this.$http.get("api/interface/blogs/all").then(e=>{console.info(e.body),this.blogs=e.body.blogs},e=>{console.error(e)})}},P=JSON.parse('{"title":"油猴浏览器插件","description":"","frontmatter":{},"headers":[],"relativePath":"src/tool/readme.md","filePath":"src/tool/readme.md","lastUpdated":1692691545000}'),m=t("h1",{id:"油猴浏览器插件",tabindex:"-1"},[d("油猴浏览器插件 "),t("a",{class:"header-anchor",href:"#油猴浏览器插件","aria-label":'Permalink to "油猴浏览器插件"'},"​")],-1),_=t("p",null,"chatgpt tools plus",-1),g=t("p",null,"Markdown 支持几乎全部的的 html 标签。如果遇到一些难以用 markdown 标签实现的效果，又不想自定义 css 文件时，可以考虑用 html 标签来解决问题。",-1),b=t("p",null,[t("video",{style:{height:"200px"},src:p,controls:"controls",autoplay:"false",loop:"-1",poster:"",preload:"metadata"})],-1),f=t("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:"//music.163.com/outchain/player?type=2&id=406737209&auto=1&height=66"},null,-1),k=t("img",{style:{margin:"5px",width:"500px",border:"1px solid black"},src:h},null,-1),x=t("p",null,[t("button",{onclick:"alert('hello')"},"ok")],-1);function y(e,v,w,$,i,B){return o(),l("div",null,[m,_,g,b,f,k,x,t("p",null,[(o(),l(r,null,a(3,s=>t("span",null,n(s),1)),64))]),t("template",null,[t("div",null,[t("table",null,[(o(!0),l(r,null,a(i.blogs,s=>(o(),l("tr",null,[t("td",null,n(s.title),1)]))),256))])])])])}const D=c(u,[["render",y]]);export{P as __pageData,D as default};