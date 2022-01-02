$(function(){
	
	var sec4Top = $('#section4').offset().top -800;	
	var t=0;
	
		addClassFn();
		removeClassFn();
		
	$(window).scroll(function(){
		if( $(window).scrollTop() >= sec4Top ){
			addClassFn();
		}
		else{
			removeClassFn();
		}
	});
	
	$(window).resize(function(){
		addClassFn();
		removeClassFn();
	}); //반응형 jQuery 
	
	
	function addClassFn(){
		//조건 반드시 해상도가 960초과 일때만 애니메이션
		if( $(window).innerWidth() > 960 ){
			$('.section4-element-3>li').addClass('addSec4Ani');			
		}
	}
	
	
	function removeClassFn(){
		if( $(window).innerWidth() > 960 ){
			$('.section4-element-3>li').removeClass('addSec4Ani');
		}
	}
	
	
	
});  //section4.js