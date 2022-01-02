$(function(){
	//패밀리사이트 버튼 클릭 이벤트
	var t=0;
	var tab8_btn = $('.sec8tab .active');
	var tab8mobile = $('#section8 .sec8tabBtn');
	
	$('.sec8tabBtn').on({
	click:	function(){
	showHideList();
	}
	});
	
	
	$(".sec8tab > li > a").click(function(e) {
	e.preventDefault();	
	
	// 전역변수 조정
	showHideList();
	
	//새로운 클릭일 경우에만 ui 변경
	if(!$(this).parent().hasClass('active')) { 
	$('.sec8tabBtn').text($(this).text()); //보여지는 제목 바꾸기
	}
	
	// 액티브 조정 
	$(this).parent().siblings().removeClass('active').end().addClass('active');
	
	});
	
	//모바일 & PC 공통 
	$(".tabs a").click(function(e) {
	e.preventDefault();	
	$(this).parent().siblings().removeClass('active').end().addClass('active');
	$(this).parents('ul').next().children().hide().eq($(this).parent().index()).show();
	$('.sec8tab').parents('ul').next().children().hide().eq($(this).parent().index()).show();
	});
	
	//현재 active 되어있는 탭 외의 모든 데이터 접기 => 모바일도 적용하기 위해선 공통 class 생성하여 적용 필요
	$('.sec8ServiceTab > li').on('click', function(e){
	e.preventDefault();	
	$(".nav").navgoco('toggle', false);
	$(".nav > li").removeClass('active');
	$(".nav > li").removeClass('open');
	});
	
	function showHideList() {
	if(t==0){
	t=1;
	$('.sec8tab').stop().slideDown();
	$('.sec8tabBtn').addClass('addFamily');
	}else{
	t=0;
	$('.sec8tab').hide();
	$('.sec8tabBtn').removeClass('addFamily');	
	$('.sec8tabBtn').children().stop().slideUp();	
	}
	}
	
	
	});