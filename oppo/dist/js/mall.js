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
			// 轮播图
			var oBtns = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var oLi = oUl.find("li");
			var iNow = 0;//记录当前点击按钮的下标
			var timer = null;//定时器的返回值
			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})	
			function tab(){
				oBtns.attr("class","");
				oBtns.eq(iNow).attr("class","active");
				oUl.stop().animate({
					left:-1366 * iNow
				},function(){
					if(iNow == oLi.size() - 1){
						oUl.css("left",0);
						iNow = 0
					}
				})
			}
			timer = setInterval(function(){
				iNow ++ ;
				tab();
			},2000)
			//选项卡
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