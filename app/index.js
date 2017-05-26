module.exports = function(Vue){
	
	
	require('./css/index.css')

	let banner = {
		template:"<div class='banner-box'><img src='./app/img/img1.png' /></div>"
	} 

	let v = new Vue({
		el: '#box',
		data: {
		  
		},
		components:{
		   'my-banner':banner	
		}
	})

}