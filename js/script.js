$(document).ready(function () {     
    /* 메뉴 호버 시 전체 배경 */

    /* 반응형 메뉴 */

    /* 메인배너 */
    var showBanner=0;
    var $total=$(".bannerJs>li").length;
    var obj = $(".banner1").clone();
    $(".bannerJs").append(obj);
    
    function moveBanner(){
        $(".bannerJs").stop().animate({
            marginLeft: -100*showBanner+"%"
        },1000)
        if(showBanner==$total){
            $(".dSlide>li").eq(0).addClass("active")
                .siblings().removeClass("active");
        } else {
            $(".dSlide>li").eq(showBanner).addClass("active")
                .siblings().removeClass("active");
        }
    }
    
    $(".rightBtn").click(function(){
        if(showBanner==$total){
            showBanner=0;
            $(".bannerJs").css("margin-left",0);
        }
        showBanner++;
        moveBanner();
    })
    
    $(".leftBtn").click(function(){
        if(showBanner==0){
            showBanner=$total;
            $(".bannerJs").css("margin-left",-100*showBanner+"%")
        }
        showBanner--;
        moveBanner();
    })
    
    $(".dSlide>li").click(function(){
        showBanner=$(this).index();
        moveBanner();
    })
    
    
})
