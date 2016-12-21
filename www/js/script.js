$(document).ready(function(){
	document.addEventListener('deviceready', function(){
		$(document).on("click", ".menu, .menu_principal_bg", function(){
			$(".menu").toggleClass("menu_ativo");
			$(".menu_principal").toggleClass("menu_principal_ativo");
			$(".menu_principal_bg").stop().fadeToggle(300);
		}).on("mousedown touchstart", "#content", function(e){
			var touchContentX	= e.pageX;
			console.log(touchContentX);
			$("#content").one("mouseup touchend", "#content", function(e){
				console.log(e.pageX);
				if(touchContentX<Number(e.pageX-150)) $(".menu").click();
			});
		});
	}, false);
});
