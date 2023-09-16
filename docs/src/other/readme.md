# 油猴浏览器插件
chatgpt tools plus

Markdown 支持几乎全部的的 html 标签。如果遇到一些难以用 markdown 标签实现的效果，又不想自定义 css 文件时，可以考虑用 html 标签来解决问题。
<!-- mp4格式 -->
<video style="width:100%"
               src="/1.mp4"
               controls="controls"
               autoplay="true"
               loop="-1"
               poster=""
               preload="metadata"/>

<!--插入音频-->
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% src="https://music.163.com/outchain/player?type=2&id=406737209&auto=1&height=66"></iframe>

<!--插入图片，路径为绝对路径，public目录下-->
<img style="margin:5px;width:100%;border:1px solid black" src="/1.jpeg" data-fancybox="gallery" />


<!--按钮-->
<button onclick="alert('hello')">ok</button>

<span v-for="i in 3">{{ i }}</span>

<img src="/3d.png" style="width:100%" />

<template>
  <div >
    <table>
      <tr v-for="blog in blogs">
        <td>{{blog.title }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: '博客列表页',
      blogs: [
		{title:"title"}
      ]
    }
  },
  mounted() {
    this.$http.get('api/interface/blogs/all').then((response) => {
       console.info(response.body)
       this.blogs = response.body.blogs
    }, (response) => {
       console.error(response)
    });
  }
}
</script>