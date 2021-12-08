//----------------------------------TRANG DASH BOARD----------------------------
//Dashboard _ Change activity content
const activityWrap = dashboard_page.querySelector('.recent__activity__content');
renderActivityList();
function renderActivityList() {
    var html = '';
    var list = history.getNewest(12);
    if (!list) {
        return;
    }
    list.forEach(item => {
        html += `<div class="recent__activity__content__item">
                    <div class="activity__content__item__left">${time.getHourStr(item.timeShow)}
                        <p style="font-size:11.5px">${time.getDateStr(item.timeShow)}</p>
                    </div>
                    <div class="activity__content__item__right">
                        ${item.textShow}
                     </div>
                </div>`;
    })
    activityWrap.innerHTML = html;
}


const dashboard_head_title = dashboard_page.querySelectorAll('.statistics__item__number');
//Dashboard _ Set product selling number
setSellingNumber();
function setSellingNumber() {
    var myData;
    for (let i = 0; i <= 2; i++) {
        if (i == 0) myData = data.getCurrentSize();
        if (i == 1) myData = order.getOrders() === null ? 0 : order.getOrders().length;
        if (i == 2) myData = money.vnd(order.getTotalOrderMoney(order.getOrders()));
        dashboard_head_title[i].innerHTML = '<span>' + myData + '</span>';
    }
}
