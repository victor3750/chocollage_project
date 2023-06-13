// var acc = new Map();
// var password = [];
// var email = new Map();

// acc.set("test", 0);
// password[0] = "000000";
// email.set("test@test", 0);

// var sign_num = "";


$(function () {
    // constants
    var SHOW_CLASS = 'show',
        HIDE_CLASS = 'hide',
        ACTIVE_CLASS = 'active';
    // 登入/註冊切換
    $('.tabs').on('click', 'li a', function (e) {
        e.preventDefault();
        var $tab = $(this),
            href = $tab.attr('href');

        $('.active').removeClass(ACTIVE_CLASS);
        $tab.addClass(ACTIVE_CLASS);

        $('.show')
            .removeClass(SHOW_CLASS)
            .addClass(HIDE_CLASS)
            .hide();

        $(href)
            .removeClass(HIDE_CLASS)
            .addClass(SHOW_CLASS)
            .hide()
            .fadeIn(550);
    });

    // 登入/註冊資料區
    var acc =  new Map();
    var password = [];
    var email = new Map();
    var sign_num="";

    acc.set("test",0);
    password[0]="000000";
    email.set("test@test",0);

    //註冊區
    //帳號、密碼、再次輸入密碼、email
    $(".btn_up").click(function () {

        const formElement = document.getElementById("form_up");
        const accText = formElement[0].value;
        const pwText = formElement[1].value;
        const pwAgText = formElement[2].value;
        const emailText = formElement[3].value;
        var ero = false;

        if (acc.has(accText)) {
            // 檢查帳號有沒有重複
            // 判斷為true就會被執行，且原本has回傳的值就是布林值，所以不用特別寫=true
            alert("此帳號已有人使用");
            ero = true;
        }

        if (pwText.length < 6) {
            alert("密碼長度需六位以上");
            ero = true;
        }
        if (pwText.length >= 6 && pwAgText != pwText) {
            // 判斷不同後清空密碼欄位
            alert("兩次輸入密碼不同，請重新輸入");
            formElement[1].value = "";
            formElement[2].value = "";
            ero = true;
        }
        if (email.has(emailText)) {
            // 檢查信箱有沒有重複
            alert("此信箱已有人使用");
            ero = true;
        }
        if (!ero) {
            //都沒有錯，才把資料存到陣列，並清空畫面
            acc.set(accText, (acc.size));
            password.push(pwText);
            email.set(emailText, (email.size));
            alert('註冊成功');
            for (var i = 0; i <= 3; i++) {
                formElement[i].value = "";
            }
        }

        return false; //參考 https://www.twblogs.net/a/5b7e9f592b717767c6aae1e9 送出時讓表單不要跳轉
    });


    //登入區

    $(".btn_in").click(function () {
        const formElement = document.getElementById("form_in");
        const accText = formElement[0].value;
        const pwText = formElement[1].value;
        
        //如果num有取得值，表示陣列有這個帳號，如果num是null代表沒有
        //密碼陣列同一個位置，如果密碼也一樣就可以登入
        sign_num = acc.get(accText);  //num型態是number
        if (sign_num != null && pwText == password[sign_num]) {
            alert("登入成功");
        } else if (sign_num == null) {
            alert("此帳號不存在");
        } else if (pwText != password[sign_num]) {
            alert("密碼錯誤");
        };

        return false;
    });

    
});


