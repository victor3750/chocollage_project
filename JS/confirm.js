var cart = $('#cart'),
    addToCart = $('#toCart'),
    hamburger = $('.hamburger');

addToCart.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var el = $(this),
        item = el.parent(),
        img = item.find('.flyCart'),
        offsetTop,
        offsetLeft;

    if (window.matchMedia('(max-width: 576px)').matches) {
        offsetTop = hamburger.offset().top;
        offsetLeft = hamburger.offset().left + 40;
    } else if (window.matchMedia('(max-width: 820px)').matches) {
        offsetTop = hamburger.offset().top;
        offsetLeft = hamburger.offset().left;
    } else {
        offsetTop = cart.offset().top;
        offsetLeft = cart.offset().left;
    }

    var cartTopOffset = offsetTop - el.offset().top;
    var cartLeftOffset = -(offsetLeft - el.offset().left) + 150;
    var flyingImg = $('<img class="b-flying-img">');
    flyingImg.attr('src', img.attr('src'));
    flyingImg.css('width', window.matchMedia('(max-width: 576px)').matches ? '100' : '200').css('height', window.matchMedia('(max-width: 576px)').matches ? '100' : '200');



    flyingImg.animate({
        top: cartTopOffset,
        right: cartLeftOffset,
        width: 50,
        height: 50,
        opacity: 0.1
    }, 800, function () {
        flyingImg.remove();
        $('#cart_num').css('display', 'block');

        var cartNum = $('#cart_num span');
        var currentNum = parseInt(cartNum.text());
        var newNum = currentNum + 1;
        cartNum.text(newNum);
    });

    el.append(flyingImg);
});