// input只能輸入數字
$('input[name=quantity]').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// 價格
const priceList = {
    "經典綁帶1-四入禮盒": 240,
    "經典綁帶1-六入禮盒": 360,
    "經典綁帶1-八入禮盒": 480,
    "經典綁帶1-十二入禮盒": 720,
    "經典綁帶1-十六入禮盒": 960,
    "經典綁帶2-四入禮盒": 240,
    "經典綁帶2-六入禮盒": 360,
    "經典綁帶2-八入禮盒": 480,
    "經典綁帶2-十二入禮盒": 720,
    "經典綁帶2-十六入禮盒": 960
};

// 購物車右下方合計總價格
function updateTotalPrice() {
    var totalPrice = 0;
    // 抓取所有的 .price 元素
    var priceElements = document.querySelectorAll(".price");
    // 遍歷每個 .price 元素並取得內容進行加總
    for (var i = 0; i < priceElements.length; i++) {
        var priceText = priceElements[i].textContent;
        var price = parseInt(priceText.replace("$", ""));
        totalPrice += price;
    }
    // 更新總價元素的內容
    var totalElement = document.querySelector(".total span");
    totalElement.textContent = "$" + totalPrice;
}
// 監聽 .price 元素的變動
var priceElements = document.querySelectorAll(".price");
for (var i = 0; i < priceElements.length; i++) {
    priceElements[i].addEventListener("DOMSubtreeModified", updateTotalPrice);
}
// 初始計算總價格
updateTotalPrice();

// 頁面載入時更新各個品項合計價格
window.addEventListener('DOMContentLoaded', function () {
    // 數量變動時 品項總價更新函數
    function updatePrices() {
        const quantityInputs = document.querySelectorAll('[class^="list_"] .qty');

        quantityInputs.forEach(quantityInput => {
            const selectedProduct = quantityInput.closest('tr').querySelector('.item').textContent.trim().split('\n')[0];
            const quantity = parseInt(quantityInput.value) || 0;
            const priceDisplay = quantityInput.closest('tr').querySelector('.price');
            const price = priceList[selectedProduct] * quantity;
            priceDisplay.textContent = `$${price || 0}`;
        });

        updateTotalPrice(); // 更新總價格
    }

    updatePrices(); // 頁面載入時更新價格

    // 監聽數量輸入框的變動
    quantityInputs.forEach(quantityInput => {
        quantityInput.addEventListener('input', updatePrices);
    });
});

// 價格隨數量改變
const quantityInputs = document.querySelectorAll('[class^="list_"] .qty');

quantityInputs.forEach(quantityInput => {
    quantityInput.addEventListener('input', () => {
        const selectedProduct = quantityInput.closest('tr').querySelector('.item').textContent.trim().split('\n')[0];
        // console.log(selectedProduct);
        const quantity = parseInt(quantityInput.value) || 0;
        // console.log(quantity);
        const priceDisplay = quantityInput.closest('tr').querySelector('.price');
        // console.log(priceDisplay);
        const price = priceList[selectedProduct] * quantity;
        // console.log(price);
        priceDisplay.textContent = `$${price || 0}`;
        // console.log(priceDisplay);
    });
});

// 數量增減鈕
$(function () {
    // This button will increment the value
    $('[class^="list_"] .qtyplus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the parent row of the clicked button
        var parentRow = $(this).closest('tr');
        // Get the field name within the parent row
        var fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt(parentRow.find('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            parentRow.find('input[name=' + fieldName + ']').val(currentVal + 1);
            const selectedProduct = parentRow.find('.item').text().trim().split('\n')[0];
            const quantity = parseInt(parentRow.find('input[name=' + fieldName + ']').val()) || 0;
            const priceDisplay = parentRow.find('.price');
            const price = priceList[selectedProduct] * quantity;
            priceDisplay.text(`$${price || 0}`);
        } else {
            // Otherwise put a 0 there
            parentRow.find('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[class^="list_"] .qtyminus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the parent row of the clicked button
        var parentRow = $(this).closest('tr');
        // Get the field name within the parent row
        var fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt(parentRow.find('input[name=' + fieldName + ']').val());
        // If it isn't undefined or it's greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            parentRow.find('input[name=' + fieldName + ']').val(currentVal - 1);
            const selectedProduct = parentRow.find('.item').text().trim().split('\n')[0];
            const quantity = parseInt(parentRow.find('input[name=' + fieldName + ']').val()) || 0;
            const priceDisplay = parentRow.find('.price');
            const price = priceList[selectedProduct] * quantity;
            priceDisplay.text(`$${price || 0}`);
        } else {
            // Otherwise put a 0 there
            parentRow.find('input[name=' + fieldName + ']').val(0);
        }
    });
});

// 購物車展開收合鍵
$(function () {
    $('.expand').click(function () {
        var img = $(this).find('img');
        if (img.attr('src') === 'images/cart/expand.svg') {
            img.attr('src', 'images/cart/close.svg');
            img.attr('alt', '收合');
        } else {
            img.attr('src', 'images/cart/expand.svg');
            img.attr('alt', '展開');
        }
        var listNumber = $(this).closest('tr').attr('class').match(/list_(\d+)/)[1];
        $(".contents-row_" + listNumber).slideToggle('slow');
    });
});


// 刪除品項（直接刪除無淡出效果）
// $(function () {
//     $('[class^="list_"] .trash').click(function (e) {
//         e.preventDefault();
//         var parentRow = $(this).closest('tr');
//         var className = parentRow.attr('class').match(/list_\d+/)[0];

//         // 顯示確認刪除的 div
//         $('.mask').fadeIn();

//         // 點擊確定刪除
//         $('#con_del').click(function (e) {
//             e.preventDefault();
//             $('.' + className).remove();
//             updateTotalPrice(); // 更新價格
//             // 隱藏確認刪除的 div
//             $('.mask').fadeOut();
//         });

//         // 點擊取消
//         $('#cancel').click(function (e) {
//             e.preventDefault();
//             // 隱藏確認刪除的 div
//             $('.mask').fadeOut();
//         });
//     });
// });

// 購物車為空提示與刪除品項功能
$(function () {
    // 確認tbody內容並顯示/隱藏相關元素
    function checkTbodyContent() {
        var tbody = $('tbody');
        if (tbody.children().length === 0) {
            $('.hint').show();
            $('.total').hide();
            $('.step_button').hide();
            $('.step_button2').css('display','flex');
        } else {
            $('.hint').hide();
            $('.total').show();
            $('.step_button').css('display','flex');
            $('.step_button2').hide();
        }
    }

    // 頁面載入時檢查一次tbody內容
    checkTbodyContent();

    // 刪除品項（淡出效果）
    $('[class^="list_"] .trash').click(function (e) {
        e.preventDefault();
        var parentRow = $(this).closest('tr');
        var className = parentRow.attr('class').match(/list_\d+/)[0];

        // 顯示確認刪除的 div
        $('.mask').fadeIn();

        // 點擊確定刪除
        $('#con_del').click(function (e) {
            e.preventDefault();
            // 使用fadeOut()方法淡出元素
            $('.' + className).fadeOut(function() {
                // 在淡出完成的回調函數中使用remove()方法刪除元素
                $(this).remove();
                updateTotalPrice(); // 更新價格
                checkTbodyContent(); // 檢查tbody內容
            });
            // 隱藏確認刪除的 div
            $('.mask').fadeOut();
        });

        // 點擊取消
        $('#cancel').click(function (e) {
            e.preventDefault();
            // 隱藏確認刪除的 div
            $('.mask').fadeOut();
        });
    });
});





