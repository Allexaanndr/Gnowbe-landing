const tabBtns  = document.querySelectorAll('.every-tabs__btn');
const tabItems = document.querySelectorAll('.every-tabs__item');

tabBtns.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function() {

        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('active')) {
            tabBtns.forEach(item => {
                item.classList.remove('active');
            });
            tabItems.forEach(item => {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    })
}