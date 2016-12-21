$(document).ready(function(){
	document.addEventListener('deviceready', function(){
		var toggleMenu = function(){
			if(swiper.previousIndex == 0) swiper.slidePrev();
		},
		menuButton = document.getElementsByClassName('menu-button')[0],
		swiper = new Swiper('.swiper-container', {
			slidesPerView:'auto',
			initialSlide:1,
			resistanceRatio:.00000000000001,
			onSlideChangeStart: function(slider){
				if(slider.activeIndex == 0){
					menuButton.classList.add('cross')
					menuButton.removeEventListener('click', toggleMenu, false);
				}else{
					menuButton.classList.remove('cross');
				}
			},
			onSlideChangeEnd: function(slider){
				(slider.activeIndex == 0)? menuButton.removeEventListener('click', toggleMenu, false):menuButton.addEventListener('click', toggleMenu, false);
			},
			slideToClickedSlide:true
		});
	}, false);
});
