//所有的代码遵从AMD规范
define(["jquery","jquery-cookie"],function($){
	function mall(){
		$(function(){
			$("#ul .first").mouseover(function(){
				$("#phone").css("display","block");
			})
			$("#ul .first").mouseout(function(){
				$("#phone").css("display","none");
			})
			$("#phone").mouseover(function(){
				$("#phone").css("display","block");
			})
			$("#phone").mouseout(function(){
				$("#phone").css("display","none");
			})
			$("#right").click(function(){
				if($("#bag").css("display")=="none"){
					$("#bag").show();
				}else{
					$("#bag").hide();
				}
			})
			$("#with").find("#text").find("li").mouseover(function(){
				//取消所有button的class样式
				$("#with").find("#text").find("li").attr("class", "");
				$("#with").find("#text").find("div").css("display", "none")
				.eq($(this).index()).css("display", "block");
				//将当前被点击按钮变成选中的
				$(this).attr("class", "active");
			})
		})
	}
	return {
		mall:mall
	}
})