//所有的代码遵从AMD规范
define(["jquery","jquery-cookie"],function($){
	function brand(){
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
		})
	}
	return {
		brand:brand
	}
})