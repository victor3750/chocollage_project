$(document).ready(function () {
    //---漢堡按鈕---
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
    // 滑動至頂
    $('#gotop').click(function () {
        $("html,body").animate({ scrollTop: 0 }, 300);
    });
    // 指定捲軸位置淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeIn('fast');
        } else {
            $('#gotop').stop().fadeOut('fast');
        }
    });
});