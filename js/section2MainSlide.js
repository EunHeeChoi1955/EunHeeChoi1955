
(function($, window, document, undefined){  //다른 플로그인과 $ (제이쿼리) 충돌 막기 위해 즉시실행함수 사용함.
		
	var setId = 0;
	var t = 0;
	var t2 = 0;
	var n = $('.slide').length-1; //슬라이드 갯수
	var cnt = 0;
	var conWidth = $('.slide').eq(0).innerWidth();
	var slideW = $(window).innerWidth()*( conWidth / $(window).innerWidth() ); //슬라이드너비 = 창너비*(슬라이드너비/창너비);
		
		autoPlay('_play');  //자동실행 4초 후에 실행
	
	
	
		
		//////////////////////////////////////////////////////////////////////////////		
		//////////////////////////////////////////////////////////////////////	

		function autoPlay(z){
			if( z=='_play' || z=='_mouseleave' ){
				if(t2==0){ //플레이버튼 클릭과 마우스떠났을때
						   //두번 자동실행을 막기 위해 t2변수 사용 버블링 디버깅.
					setId = setInterval(nextSlide,5000);
					t2=1;
				}
			}
		}	
	
		//플레이 일시정지 클릭이벤트
		$('.playBtn').on({
			click:	function(){
				if(t==0){  					//변수 t==0 같다면 비교
					clearInterval(setId);  	//일시정지
					t=1;  					//현재 정지상태
				}
				else if(t==1){ 				//변수 t==1 같다면
					autoPlay('_play');  			//재실행
					t=0;
					t2=1;	  		//자동실행함수를 호출시 변수 초기화
				}
				$(this).toggleClass('addNav');
			}
		});
		
		//슬라이드의 모든 버튼위에 마우스 올리면 타이머 일시정지
		$('.nextBtn,.prevBtn,.slide-control-wrap').on({
			mouseenter:	function(){
				clearInterval(setId);  	//일시정지
				$('.playBtn').addClass('addNav');
			},
			mouseleave:	function(){
				
				if(t==0){  	//플레이버튼 스톱(▶) 상태이라면 플레이 불가능
					t2=0;	//자동실행함수를 호출시 변수 초기화
					autoPlay('_mouseleave'); //플레이(||)	상태에서 자동 실행 가능	
					$('.playBtn').removeClass('addNav');
				}
			}
		});


	//////////////////////////////////////////////////////////////////////////////	
	//////////////////////////////////////////////////////////////////////////////	

	// 스와이프 기능	
		$(".slide-wrap").swipe({
			swipeLeft: function(){
				nextSlide();
				clearInterval(setId);  	//일시정지
				$('.playBtn').addClass('addNav');
				t=1;
			},
			swipeRight: function(){
				prevSlide();
				clearInterval(setId);  	//일시정지
				$('.playBtn').addClass('addNav');
				t=1;
			}			
		});

		
	//////////////////////////////////////////////////////////////////////////////	
	//////////////////////////////////////////////////////////////////////////////	



		
	$(window).resize(function(){
		
		conWidth = $('.slide').eq(0).innerWidth();
		slideW = $(window).innerWidth()*( conWidth / $(window).innerWidth() ); //슬라이드너비 = 창너비*(슬라이드너비/창너비);

        //slideW = $(window).innerWidth()*( conWidth / $(window).innerWidth() );  
        mainSlide();          
    });

		//메인 슬라이드 함수
		function mainSlide(){
			
				$('.slide-wrap').stop().animate({ left: -slideW*cnt }, 600, function(){
					
					cnt>n?cnt=0:cnt;
					cnt<0?cnt=n:cnt;
					
					$('.slide-wrap').stop().animate({ left: -slideW*cnt }, 0);
					$('.slide').removeClass('addOpacity');
					$('.slide').eq(cnt).addClass('addOpacity');	
					
				});
			
			navFn();
			
		}
		

		//네비게이션 버튼(페이지 버튼==인디게이터 버튼) 마킹(Marking) 이벤트 
		function navFn(){
			$('.navBtn').removeClass('addNav');	    //초기화
			$('.navBtn').eq(cnt>n?0:cnt).addClass('addNav');	//해당 슬라이드 버튼만 표시 
		}		



		////////////////////////////////////////////////////////////////////////
		//네비게이션 버튼 클릭이벤트
		//네비게이션 버튼을 배열처리(each()메소드)하여 인덱스값 이용
		$('.navBtn').each(function(index){
			$(this).on({
				click:	function(){
					cnt = index;
					mainSlide();
				}
			});
		});


		//다음 슬라이드 카운트 함수
		function nextSlide(){
			cnt++;
			mainSlide();
		}


		//이전 슬라이드 카운트 함수
		function prevSlide(){
			cnt--;
			mainSlide();
		}


		//다음화살버튼 클릭이벤트
		$('.nextBtn').on({
			click:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					nextSlide();
				}				
			}
		});
		
		//이전화살버튼 클릭이벤트
		$('.prevBtn').on({
			click:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					prevSlide();
				}
			}
		});










})(jQuery, window, document);