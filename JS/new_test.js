// 獲取選項的DOM元素
const morningLink = document.querySelector('.morning');
const afternoonLink = document.querySelector('.afternoon');
const matureLink = document.querySelector('.mature');

// 點擊事件處理函式
function handleClick(event) {
    event.preventDefault();

    // 獲取被點擊選項的class名稱
    const selectedItem = event.target.classList[0];

    // 建立URL並重定向到A頁面
    window.location.href = `chocolate_desciption.html?selectedItem=${selectedItem}`;
}

// 綁定點擊事件處理函式到選項的點擊事件
morningLink.addEventListener('click', handleClick);
afternoonLink.addEventListener('click', handleClick);
matureLink.addEventListener('click', handleClick);