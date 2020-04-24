# svg-border

> 一个svg动态边框，宽度高度自动撑开。
安装 npm install svg-border --save
在需要的组件中引入





## Build Setup

``` bash
# install dependencies
<template>
  <div id="app">
		<div style="width: 500px;height: 500px">
			<SvgBorder ></SvgBorder>
		</div>
    <router-view/>
  </div>
</template>

<script>
	import SvgBorder from 'svg-border'
	export default {
		name: 'App',
		mounted(){
	
		},
		components:{SvgBorder}
	}
</script>

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
