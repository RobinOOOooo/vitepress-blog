<template>
  <div>
    <table>
		<tr>
			<td>标题</td>
			<td>图片</td>
			<td>链接</td>
		</tr>
		<tr v-for="item in items">
			<td>{{item.title}}</td>
			<td><img :src="item.img" alt="alt"/></td>
			<td><a target="_blank" :href="item.url">链接</a></td>
		</tr>
	</table>
  </div>
</template>

<script>
import axios from 'axios'

// get 请求
export default {
  name: "get",
  data(){
	return {
		items: [
			{title:"",img:"",url:""}
		]
	}
  },
  created() {

    //第一种写法叫做get别名请求方法
    //http://localhost:8080/static/data.json?id=1
    axios.get('http://localhost:10002/api/getList', {
      params: {//有参数时,若无参数时直接省略不写
        id: 1
      }
    }).then((res) => {
      console.log('数据：', res);
	  this.items = res.data.data;
    })

  }
}
</script>

<style scoped>

</style>
