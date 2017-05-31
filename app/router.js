module.exports = function(Vue,VueRouter){

	// 1. 定义（路由）组件。
	const Home = { template: '<div>home</div>' }
	const Index = { template: '<div>index</div>' }
	const Detail = { template: '<div>detail</div>' }

	// 每个路由path应该映射一个组件。 其中"component" 可以是
	// 通过 Vue.extend() 创建的组件构造器，
	// 或者，只是一个组件配置对象。
	const routes = [
	  { path: '/', component: Home },
	  { path: '/index', component: Index },
	  { path: '/detail', component: Detail }
	]

	// 创建路由对象
	const router = new VueRouter({
		mode: 'history',
	    routes:routes // （缩写）相当于 routes: routes，es6的新语法
	})

	var app = new Vue({
		
	  el:"#app",
      router: router

    })

}


