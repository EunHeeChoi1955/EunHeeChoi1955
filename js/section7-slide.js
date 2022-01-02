(function($){

    var slide_img = $('#section7 .item');
    var slide_txt = $('#section7 .con');
    var slide_btn = $('#section7 .items');
    var cnt       = 0;
    var a         = [0,1,2];

        function slideImgFn() {
            //이미지
            slide_img.eq(a[0]).css({zIndex:3}).stop().animate({left:274},0).animate({left:0},600);
            slide_img.eq(a[1]).css({zIndex:2}).stop().animate({left:  0},0);
            slide_img.eq(a[2]).css({zIndex:1}).stop().animate({left:274},0);
             
            //텍스트
            slideTxtFn();
        }
        
        function slideTxtFn() {
            slide_txt.hide();
            slide_txt.eq(a[0]).show();
        }
       
        function countFn(z) {
            if (cnt < z) {
                if(z==1 && cnt==0) {
                    a = [1,0,2];
                }
                else if(z==2 && cnt==1) {
                    a = [2,1,0];
                }                    
                else if(z==2 && cnt==0) {
                    a = [2,0,1];
                }                    
            }
            if (cnt > z) {
                if (z==0 && cnt==1) {
                    a = [0,1,2];
                }
                else if(z==1 && cnt==2) {
                    a = [1,2,0];
                }
                else if(z==0 && cnt==2) {
                    a = [0,2,1];
                }
            }
            cnt = a[0];
            slideImgFn();

        }
        
    //버튼누를때 밑줄 같이 active적용되는거
        slide_btn.each(function (idx) {
            $(this).on({
                click: function () {
                	slide_btn.removeClass('active');  // 클래스 삭제
                	slide_btn.eq(idx).addClass('active'); // 클래스 주입
                    countFn(idx);
                }
            });
        });

})(jQuery);