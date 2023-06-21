var cart = $('#cart'),
    addToCart = $('#toCart');

addToCart.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var el = $(this),
        item = el.parent(),
        img = item.find('.flyCart'),
        cartTopOffset = cart.offset().top - item.offset().top,
        cartLeftOffset = cart.offset().left - item.offset().left;
        console.log(img);
    var flyingImg = $('<img class="b-flying-img">');
    flyingImg.attr('src', img.attr('src'));
    flyingImg.css('width', '200').css('height', '200');
    console.log(img);


    flyingImg.animate({
        top: cartTopOffset,
        left: cartLeftOffset,
        width: 50,
        height: 50,
        opacity: 0.1
    }, 800, function () {
        flyingImg.remove();

    });

    el.parent().append(flyingImg);
});