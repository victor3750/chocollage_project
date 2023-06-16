// 獲取選項的DOM元素
const morningLink = document.querySelectorAll('.morning');
const afternoonLink = document.querySelectorAll('.afternoon');
const matureLink = document.querySelectorAll('.mature');
const relaxLink = document.querySelectorAll('.relax');

// 點擊事件處理函式
function handleClick(event) {
    event.preventDefault();

    // 獲取被點擊選項的class名稱
    const selectedItem = this.classList[0];

    // 建立URL並重定向到A頁面
    window.location.href = `chocolate_desciption.html?selectedItem=${selectedItem}`;
}

// 綁定點擊事件處理函式到選項的點擊事件
morningLink.forEach(link => {
    link.addEventListener('click', handleClick);
});
afternoonLink.forEach(link => {
    link.addEventListener('click', handleClick);
});
matureLink.forEach(link => {
    link.addEventListener('click', handleClick);
});
relaxLink.forEach(link => {
    link.addEventListener('click', handleClick);
});
