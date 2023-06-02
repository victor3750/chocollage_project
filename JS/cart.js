// input只能輸入數字
$('input[name=quantity]').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
// 價格隨數量改變
const quantityInputs = document.querySelectorAll('[class^="list_"] .qty');

quantityInputs.forEach(quantityInput => {
    quantityInput.addEventListener('input', () => {
        const selectedProduct = quantityInput.closest('tr').querySelector('.item').textContent.trim();
        const quantity = parseInt(quantityInput.value) || 0;
        const priceDisplay = quantityInput.closest('tr').querySelector('.price');
        const price = priceList[selectedProduct] * quantity;
        priceDisplay.textContent = `$${price || 0}`;
    });
});
// 數量增減鈕
$(function () {
    // This button will increment the value
    $('[id^="list_"] .qtyplus').click(function (e) {
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
            const selectedProduct = parentRow.find('.item').text().trim();
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
    $('[id^="list_"] .qtyminus').click(function (e) {
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
            const selectedProduct = parentRow.find('.item').text().trim();
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
    $('[id^="list_"] .expand').click(function () {
        var img = $(this).find('img');
        var listId = $(this).closest('tr').attr('id');
        if (img.attr('src') === '/images/cart/expand.svg') {
            img.attr('src', '/images/cart/close.svg');
            img.attr('alt', '收合');
        } else {
            img.attr('src', '/images/cart/expand.svg');
            img.attr('alt', '展開');
            
        }
        $('.contents-row').slideToggle('slow');
    });
});

const priceList = {
    "經典緞帶-四入禮盒": 240,
    "經典緞帶-六入禮盒": 360,
    "經典緞帶-八入禮盒": 480,
    "經典緞帶-十二入禮盒": 720,
    "經典緞帶-十六入禮盒": 960
};
