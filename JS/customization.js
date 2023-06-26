$(function () {
    var size = 0; //step1
    var box = 'h3:first-child span' //step1
    var chocoTot = 0; //step2
    var chocoBox = "";//step3
    var eroText = ""; //下一步

    // 全體收合
    $("#accordion").accordion({
        heightStyle: "content",
    });


    //STEP1
    $('input[type=radio]').change(function () {
        size = $(this).val(); //取得被選中的radio的值

        // 只要重新選擇step1，巧克力就要歸0，數量超過的提示字也要隱藏
        chocoTot = 0;
        $('.qty').val(0);
        $('.over').remove();

        // 參考 https://www.fooish.com/jquery/dom-manipulation.html

        //先用remove刪除前一個長出來的，再用prepend長一個新的出來
        //prepend 在每個匹配的元素內部最前面加入... (內部插入)
        $('.hit').remove(); //刪掉前一個長出來的
        switch (size) {
            case '4':
                $(box).prepend(`<p class="hit">已選 四入禮盒</p>`);
                break;
            // 每個 case: 後方都會補上 break; 來阻止已完成的區塊在後方繼續執行
            case '6':
                $(box).prepend(`<p class="hit">已選 六入禮盒</p>`);
                break;
            case '8':
                $(box).prepend(`<p class="hit">已選 八入禮盒</p>`);
                break;
            case '12':
                $(box).prepend(`<p class="hit">已選 十二入禮盒</p>`);
                break;
            case '16':
                $(box).prepend(`<p class="hit">已選 十六入禮盒</p>`);
                break;
            default:
                break;
        }
    });


    // STEP2
    /*
    參考 (可以分開的)
    https://codepen.io/ahmetaksungur/pen/QWNEKXq
    */

    /* 數量增減 */

    $(".increment").click(function () {
        // 增加紐
        if (size == 0) {
            Swal.fire({
                icon: 'warning',
                title: "請先選擇顆數",
                // text: '請重新輸入',
                customClass: {
                    title: 'my-title-class-up',
                }
            });
            return false;
        }
        // 數量增加時(且總數未超過)，只有同一層的.qty會增加
        var n = $(this).siblings(".qty").val();

        //提示已達上限
        $('.over').remove();
        if (chocoTot >= size) {
            $(this).prepend(`<p class="over">可選數量已達到上限</p>`);
            return false;
        }

        n++;
        $(this).siblings(".qty").val(n);
        // 數量增加時，總數也增加
        chocoTot++;

    })

    $(".decrement").click(function () {
        // 減少紐
        if (size == 0) {
            Swal.fire({
                icon: 'warning',
                title: "請先選擇顆數",
                // text: '請重新輸入',
                customClass: {
                    title: 'my-title-class-up',
                }
            });
        }

        // 數量減少時(且數量大於0)，只有同一層的.qty會減少
        var n = $(this).siblings(".qty").val();
        if (n == 0) {
            return false;
        }

        // 總數真的減少時，提示文字才會消失 (避免按了沒有選的巧克李的-，提示字也會不見)
        if (chocoTot <= size) {
            $('.over').remove();
        }

        n--;
        $(this).siblings(".qty").val(n);
        // 數量減少時，總數也減少
        chocoTot--;
    });

    $(".qty").on('change', function (e) {
        // 直接改值
        var txtQty=0;
        $('.over').remove();
        $(".qty").map(function(){
            // 將目前所有的值相加
            txtQty += parseInt($(this).val());
        })
        // 如果總數大於size，跳出提醒，且將該欄位歸0
        if(txtQty>size){
            // console.log("數量超過");
            txtQty-=$(this).val();
            $(this).siblings().prepend(`<p class="over">超過上限，重新選擇</p>`);
            $(this).val(0);
        }
        chocoTot=txtQty;
    });


    // STEP3
    $(".spanBG").click(function () {
        // 參考https://ithelp.ithome.com.tw/articles/10216523

        $(this).siblings("figure").find("img").addClass('boxClick');  //在選中項目的img添加class
        $(this).parent().siblings().find("figure").find("img").removeClass('boxClick');//把其他項目的img class移除

        chocoBox = document.getElementsByClassName("boxClick")[0].alt;//取得img的alt
        // console.log(chocoBox);

    });

    $("#next").click(function () {
        //console.log(sign_num);測試引入

        eroText = "";

        if (size != 0 && chocoTot == size && chocoBox != "") {
            // 條件都滿足才可以跳轉下一頁
            window.location.href = './confirm.html';
        }

        //沒先選顆數，step2會被上面擋，所以size只判斷有沒有選


        if (size == 0) {
            eroText += "請選擇顆數及口味\n";
        }

        if (size != 0 && chocoTot < size) {
            eroText += "請至選擇口味補足巧克力數量\n"
        }

        if (chocoBox == "") {
            eroText += "請選擇包裝"
        }

        if (eroText != "") {
            // alert(eroText);
            Swal.fire({
                icon: 'error',
                title: eroText,
                // text: '請重新輸入',
                customClass: {
                    title: 'my-title-class-up',
                }
            });
        }

    });



});