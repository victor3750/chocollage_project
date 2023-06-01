// 數量增減
$(function () {
    // This button will increment the value
    $('.qtyplus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});

// 購物車展開收合鍵
$(function () {
    $('.expand').click(function () {
        var img = $(this).find('img');
        if (img.attr('src') === '/images/cart/expand.svg') {
            img.attr('src', '/images/cart/close.svg');
            img.attr('alt', '收合');
        } else {
            img.attr('src', '/images/cart/expand.svg');
            img.attr('alt', '展開');
        }
        $(".contents-row").slideToggle('slow');
    });
});

const priceList = {
    "經典緞帶-四入禮盒": 240,
    "經典緞帶-六入禮盒": 360,
    "經典緞帶-八入禮盒": 480,
    "經典緞帶-十二入禮盒": 720,
    "經典緞帶-十六入禮盒": 960
};

const quantityInput = document.querySelector('.qty');
const priceDisplay = document.querySelector('.price');

quantityInput.addEventListener('input', () => {
    const selectedProduct = document.querySelector('.item').textContent.trim();
    const quantity = parseInt(quantityInput.value);
    const price = priceList[selectedProduct] * quantity;
    priceDisplay.textContent = `$${price}`;
});


