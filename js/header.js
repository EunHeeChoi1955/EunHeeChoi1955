
//IIFE(즉시실행함수 표현식)
;(function($, window, document, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)
    //객체

    var brando = {
        init:       function(){ //메서드(리터럴함수)
            this.smoothScrollFn();
            this.headerFn();
          
    
        },
        smoothScrollFn: function(){ //전체 공용 함수 스무스 스크롤링 이벤트 함수
            var $smoothBtn  = $('.smoothBtn');
            var $htmlBody   = $('html,body');
            var $mobile     = $('.mobile');

                $smoothBtn.on({
                    click:  function(event){
                        event.preventDefault();
                        $this = $(this); //현재 클릭한 이(this) 버튼

                        var url = $this.attr('href'); //#section02 ..... 
                        $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                        $mobile.stop().slideUp(300);
                    }
                });

        },            
        headerFn:   function(){

            //헤더영역 스크롤 이벤트 (페럴럭스)
            var $window     = $(window);
            var $header     = $('#header');
            var $appBtn     = $('.appBtn');
            var $mobilebtn  = $('.mobilebtn');
            var $mobile     = $('.mobile');

                //DOM(도큐먼트 오브젝트 모델링) Document Object Modelling
                //BOM(브라우저 오브젝트 모델링) Browser Object Modelling
                //마우스로 스크롤값이 아래로 30픽셀이상 >= 내려가면 
                //선택자 헤더영역(#header)에 효과 이벤트가 발생하게 하라   
                
              
                $window.scroll(function(){ //스크롤 이벤트
                    //console.log(  $(window).scrollTop() ); //스크롤 탑값 확인
                    if( $window.scrollTop() >= 30 ){  //마우스로 스크롤값이 아래로 30픽셀이상 내려가면
                        $header.addClass('addHeader');  //헤더에 클래스 추가
                        $appBtn.animate({left :'0px',right: '0px',bottom:'0px',borderRadius: '0px'},.1);
                    }
                    else{
                        $header.removeClass('addHeader'); //추가된 클래스 삭제
                        $appBtn.animate({left :'40px',right: '40px',bottom:'54px',borderRadius: '6px'},.1);  
                    }           
                });

                //모바일 버튼 클릭 이벤트
                $mobilebtn.on({
                    click:  function(){
                        $mobile.stop().slideToggle(300);
                    }
                });


                //모바일 메뉴가 노출된경우 
                //창너비가 980 초과이면 slideUp() 강제로 안보이게 처리한다.
                function resizeFn(){
                    if( $window.innerWidth() > 980  ){
                        $mobile.stop().slideUp(0);
                    }
                }
                    
                setTimeout(resizeFn,100); //로딩시

                $window.resize(function(){ //창크기 변경시
                    resizeFn();
                });

            }
      


       

    };  //객체 끝


    //객체.메서드 실행
    brando.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
