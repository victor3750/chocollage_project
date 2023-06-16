// 解析URL中的Query參數
const urlParams = new URLSearchParams(window.location.search);

// 獲取selectedItem的值
const selectedItem = urlParams.get('selectedItem');

// 獲取對應的DOM元素
const itemContainer = document.getElementById('itemContainer');
// const allItems = document.getElementsByClassName('list_box');
const allItems = document.getElementsByTagName('article')
const allItems_li = document.getElementsByTagName('li')

$(document).ready(function () {


    if (selectedItem !== null) {
        // 根據點來的項目，判斷要顯示哪一個
        for (let i = 0; i < allItems.length; i++) {
            const item = allItems[i];
            if (!item.classList.contains(selectedItem)) {
                item.style.visibility = 'hidden';
                item.style.height = 0;
                item.style.marginTop="-10px";
                item.style.marginBottom="-10px";
            }
        }

        $(".check_list li").removeClass("active_color");//li先全部便沒選擇的樣式

        if(selectedItem === "morning"){
            $(".check_list .morning").addClass("active_color");
        }else if(selectedItem === "afternoon"){
            $(".check_list .afternoon").addClass("active_color");
        }else if(selectedItem === "mature"){
            $(".check_list .mature").addClass("active_color");
        }else if(selectedItem === "relax"){
            $(".check_list .relax").addClass("active_color");
        }

    }
// =========================================================================================================================================

        // 點擊按鈕時，判斷要顯示的項目
        // 監聽按鈕點擊事件
        $(".check_list li").on("click", function (e) {
            e.preventDefault(); // 防止點擊時頁面跳轉
            $(".check_list li").removeClass("active_color");//先全部移除active_color
            var targetClass = $(this).attr("class"); // 取得被點擊的按鈕的 class

            for (let i = 0; i < allItems.length; i++) {
                const item = allItems[i];
                if(targetClass!="allItem"){
                    console.log("指定商品");
                }else if(targetClass=="allItem"){
                    console.log("全部商品");
                }

                if (!item.classList.contains(targetClass) && targetClass!="allItem") {
                    item.style.visibility = 'hidden';
                    item.style.height = 0;
                    item.style.marginTop="-10px";
                    item.style.marginBottom="-10px";
                }else{
                    item.style.visibility = 'visible';
                    item.style.height = "unset";
                    item.style.marginTop="unset";
                    item.style.marginBottom="40px";
                }
            }
            
            
            $(this).addClass("active_color");//再把作用中的選項加上active_color

        });

        
});
