// 展開收合鍵
$(function () {
    $('.expand').click(function () {
        var img = $(this).find('img');
        if (img.attr('src') === '/images/ordersearch/ARROW_expand.png') {
            img.attr('src', '/images/ordersearch/ARROW_close.png');
            img.attr('alt', '收合');
        } else {
            img.attr('src', '/images/ordersearch/ARROW_expand.png');
            img.attr('alt', '展開');
        }
        $(".dragform").slideToggle('slow');
    });
});