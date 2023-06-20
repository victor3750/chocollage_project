// 獲取所有的 article 元素
const articles = document.querySelectorAll('article');


// 監聽滾動事件
window.addEventListener('scroll', () => {
    // 獲取目前的滾動位置
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // 迭代每個 article 元素
    articles.forEach((article, index) => {
        // 獲取每個 article 的高度
        const articleHeight = article.offsetHeight;


        // 計算每個 article 的觸發位置，根據 article 的高度進行調整
        const triggerPosition = (index + 1) * (articleHeight + 10);

        // 檢查是否達到觸發位置且尚未添加動畫
        if((index+1)==5){
            // 第五個空間不夠捲動>另外設定
            if ((scrollPosition + 650) > triggerPosition && !article.classList.contains('fade-in')) {
                // 添加 'fade-in' 類別
                article.classList.add('fade-in');
            }
        }else{
            // if ((scrollPosition + 330) > triggerPosition && !article.classList.contains('fade-in')) {
            if ((scrollPosition + 430) > triggerPosition && !article.classList.contains('fade-in')) {
                // 添加 'fade-in' 類別
                article.classList.add('fade-in');
            }
        }
        
    });
});
