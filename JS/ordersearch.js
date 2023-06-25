// // 展開收合鍵
// $(function () {
//     $('.expand').click(function () {
//         var img = $(this).find('img');
//         if (img.attr('src') === '/images/ordersearch/ARROW_expand.png') {
//             img.attr('src', '/images/ordersearch/ARROW_close.png');
//             img.attr('alt', '收合');
//         } else {
//             img.attr('src', '/images/ordersearch/ARROW_expand.png');
//             img.attr('alt', '展開');
//         }
//         $(".dragform").slideToggle('slow');
//     });
// });

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