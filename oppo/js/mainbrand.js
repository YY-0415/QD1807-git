console.log("加载完毕");

/*
	配置当前html页面要用到的所有的js文件
*/
require.config({
	paths: {
		"jquery": "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		"brand": "brand"
	},
	shim: {
		//配置jquery-cookie依赖于jquery
		"jquery-cookie": ["jquery"],

		//声明不适用AMD规范的模块
		"parabola": {
			exports: "_"
		}
	}
})


//调用首页的代码
require(["brand"], function(brand){
	brand.brand();
})