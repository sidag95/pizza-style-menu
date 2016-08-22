$(document).ready(function(){
	$color = $(".rotateX").parent().css("border-bottom-color");
		$(".deca").css({"background-color":$color});
		$(".rotateX").css({"border-bottom-color":$color});
		
	$(".after").mouseenter(function(){
		$(".after").each(function(){
			$(this).removeClass("rotateX");
			$(this).css({"border-bottom-color":"#ffffff"});
		})
		$(this).addClass("rotateX");
		$color = $(this).parent().css("border-bottom-color");
		$(".deca").css({"background-color":$color});
		$(this).css({"border-bottom-color":$color});
	});
});