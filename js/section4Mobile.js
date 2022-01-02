$(function(){
	
		addClassFn();
		removeClassFn();

	//스클롤 이벤트
	//스크롤탑값[$(window).scrollTop()]이 섹션8의 탑값[$('#section2').offset().top]에 도달시 애니메이션 실행 addClass
	//아니면 애니메이션 정지 removeClass
	$(window).scroll(function(){
		
		if( $(window).scrollTop() > $('#section4').offset().top-200 ){
			addClassFn();
		}
		else{
			removeClassFn();
		}

	

		//앱 다운로드 addclass
		if( $(window).scrollTop() > $('#header').offset().top-300 ){
			$('.MobileCTA__cta-Q26BE').addClass('MobileCTA__fixedToBottom-L0RtM');
		}
		else{
			$('.MobileCTA__cta-Q26BE').removeClass('MobileCTA__fixedToBottom-L0RtM');
		}
		
	
	
});
	
	
	//반응형 해상도 960미만에서만 실행
	$(window).resize(function(){
		addClassFn();
		removeClassFn();
	});
	
	//addClass  removeClass 함수 제작	
	function addClassFn(){
		if( $(window).innerWidth() <= 960 ){
			$('.section4-element-3>li').addClass('addSec4Ani2');
		}
	}
	function removeClassFn(){
		if( $(window).innerWidth() <= 960 ){
			$('.section4-element-3>li').removeClass('addSec4Ani2');
		}
	}
	
}); //section8Mobile.js