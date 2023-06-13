$(document).ready(function () {
    // 監聽按鈕點擊事件
    $(".check_list li").on("click", function (e) {
        e.preventDefault(); // 防止點擊時頁面跳轉


        // 要顯示的巧克力區
        var targetClass = $(this).attr("class"); // 取得被點擊的按鈕的 class
        if (targetClass === "allItem") {
            // 顯示全部商品
            $("article").removeClass("hide"); // 移除 hide 類別
        } else {
            // 顯示目標類別的商品
            $("article").addClass("hide"); // 加上 hide 類別
            $("article." + targetClass).removeClass("hide"); // 移除 hide 類別
        }


        // 被點選時要變色
        $(".check_list li").removeClass("active_color");
        $(this).addClass("active_color");
    });

});
