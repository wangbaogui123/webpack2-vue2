module.exports = function(Vue){

	require('./css/top.css')

	let data = {
		page:"Vue Demo"
	}

	// 注册组件
	Vue.component("my-top",{
		template: '<div class="top-bar"><a class="left"><img src="./app/img/home.png" /></a><p>{{page}}</p><a class="right" v-on:click="topFun"><img src="./app/img/other.png" /></a></div>',
	  	data:function(){

	  		return data;

	  	},methods:{
		  	topFun:function(){
		  		top.topshow = !top.topshow;
		  	}
		}
	})

	// 创建top组件实例
	let top = new Vue({
	  el: '#top',
	  data:{

	  	topshow:false

	  }
	})

}