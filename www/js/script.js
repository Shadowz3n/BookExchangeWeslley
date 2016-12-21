$(document).ready(function(){
	var touchContentX	= null;
	document.addEventListener('deviceready', function(){
		$(document).on("click", ".menu, .menu_principal_bg", function(){
			$(".menu").toggleClass("menu_ativo");
			$(".menu_principal").toggleClass("menu_principal_ativo");
			$(".menu_principal_bg").toggleClass("menu_principal_bg_ativo");
		}).on("mousedown touchstart", "#content", function(e){
			touchContentX	= e.pageX;
		}).on("mouseup touchend", "#content", function(e){
			if(touchContentX<Number(e.pageX-150)) $(".menu").click();
		});
	}, false);
});
