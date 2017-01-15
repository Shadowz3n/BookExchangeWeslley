$(document).ready(function(){
	//document.addEventListener('deviceready', function(){
		$(document).on("click", ".menu, .menu_principal_bg", function(){
			$(".menu").toggleClass("menu_ativo");
			$(".menu_principal").toggleClass("menu_principal_ativo");
			$(".menu_principal_bg").toggleClass("menu_principal_bg_ativo");
		}).on("mousedown touchstart", "#content", function(e){
			$("#content").one("touchend", function(ev){
				if(e.changedTouches && ev.changedTouches){
					if(Number(e.changedTouches[e.changedTouches.length-1].pageX)<=Number(Number(ev.changedTouches[ev.changedTouches.length-1].pageX)-150)) $(".menu").click();
				}
			});
		}).on("touchstart", ".lupa_pesquisar", function(){
			$(".lupa_pesquisar").toggleClass(".lupa_pesquisar_ativo");
		});
	//}, false);
});
