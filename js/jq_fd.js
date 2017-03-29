$(function(){
    $(".smy_close").click(function(){
        $(".smy_fd").hide();
    })
})
$(function(){
    $(".smy_zjqh li").mouseenter(function(){
        var idx = $(".smy_zjqh li").index(this);
        $(this).addClass("smy_zjqhli").siblings("li").removeClass("smy_zjqhli");
        $(".smy_zjqh_conli ul").eq(idx).show().siblings(".smy_zjqh_conli ul").hide();
    })
})