$(document).ready(function(){

	document.addEventListener('touchstart', handleTouchStart, false);        
	document.addEventListener('touchmove', handleTouchMove, false);

	var xDown = null;                                                        
	var yDown = null;                                                        

	function handleTouchStart(evt){
		xDown = evt.touches[0].clientX;
		yDown = evt.touches[0].clientY;
	};
	
	function handleTouchMove(evt){
		if( ! xDown || ! yDown ) return;
		var xUp = evt.touches[0].clientX;                                    
		var yUp = evt.touches[0].clientY;
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
		if(Math.abs(xDiff) > Math.abs(yDiff)){
			return (xDiff>0)? 'left':'right';                     
		}else{
			return (yDiff>0)? 'up':'down';                                                              
		}
		xDown = null;
		yDown = null;                                             
	};


	//document.addEventListener('deviceready', function(){
		$(document).on("click", ".menu, .menu_principal_bg", function(){
			$(".menu").toggleClass("menu_ativo");
			$(".menu_principal").toggleClass("menu_principal_ativo");
			$(".menu_principal_bg").toggleClass("menu_principal_bg_ativo");
		});
	//}, false);
});
