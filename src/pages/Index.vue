<!--
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2020-09-07 15:40:53
-->
<template>
	<!-- 测试页面 -->
	<div class="detail wrapper">
		<h1 class="title">我是旅游首页</h1>
		<pre ref='pre'></pre>
	</div>
</template>

<script>
import {getIndexData} from '@/api/index'
export default {
	created() {
	
	},
	mounted() {
    getIndexData({}).then(res=>{
      console.log(res)
    })
  },
	data() {
		return {};
	},
	computed: {

  },
	watch: {},
	methods: {

	}
};
</script>

<style></style>
