$(function () {

    //修改資料
    $(".btn").click(function () {
        const formElement = document.getElementById("form_edit");
        const emailText = formElement[2].value;
        var ero = false;
        var ero_up = "";

        if (emailText == "") {
            ero_up += "信箱不可為空";
            ero = true;
        }

        if (!ero) {

            Swal.fire({
                imageUrl: 'images/order_confirm/icon-check-circle.svg',
                confirmButtonText: "修改成功",
                customClass: {
                    title: 'my-title-class-up',
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: ero_up,
                text: '請重新輸入',
                customClass: {
                    title: 'my-title-class-up',
                }
            });
        }
        return false; // 參考 https://www.twblogs.net/a/5b7e9f592b717767c6aae1e9 送出時讓表單不要跳轉
        
    });


});


