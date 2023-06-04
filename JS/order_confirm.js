$(function () {
    // This button will increment the value
    $('#send_order').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        $(".mask").fadeIn();
    });
})