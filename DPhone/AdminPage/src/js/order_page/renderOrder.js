
// renderOrder(order.getOrders());
function renderOrder(list) {
    var html = '';
   
    const orderListContainer = order_page.querySelector('.onder__handle__content');
    if (!list) {
        orderListContainer.innerHTML = '';
        return;
    }
    html += `<div class="onder__handle__content__item">`;
    var i = 0;
    list.forEach(item => {
        html += `
                <div class="onder__handle__content__item__header">
                    <div class="order__header__dropdown"><i class="fas fa-chevron-down"></i></div>
                    <div class="order__header__image__product"><img src="./admin_img/icon-order.png" alt=""></div>
                    <div class="order__header__name">
                        <h4>Đơn hàng <span>#${item.orderId}</span></h4>
                        <div class="order__header__quantity">${item.cartList.length} sản phẩm</div>
                    </div>
                    <div class="order__header__price"><h4>${money.vnd(order.getOrderIdMoney(item.orderId))}</h4> <p>Chưa Thanh Toán</p></div>
                    <div class="order__header__username"><h4>Tên Người Dùng</h4><p>${item.userProfile.username}</p></div>
                    <div class="order__header__date"><h4>Ngày Đặt Hàng</h4> <p>${time.getDateStr(item.orderTime)}</p></div>`
        if (item.status) {
            html += `<div class="order__header__state active">Đã xử lý</div>
            <div class="order__header__action active" value=${item.orderId}><span class="order__header__action__button"></span></div>
            `;
        }
        else {
            html += `<div class="order__header__state">Chưa xử lý</div>
            <div class="order__header__action" value=${item.orderId}><span class="order__header__action__button"></span></div>
            `;
        }

        html += `</div>`;
        if (item.cartList.length >= 3) {
            html += `<div class="onder__handle__content__item__body">`;
        }
        else {
            html += `<div class="onder__handle__content__item__body" style="max-height:${item.cartList.length*74}px">`;
        }
        
        for (let i = 0; i < item.cartList.length; i++) {
            html += `
                <div class="order__body__item">
                    <div class="order__body__image__product"><img src=${item.cartList[i].productImg} alt="" onerror="imgError(this)"></div>
                    <div class="order__body__name">${item.cartList[i].storeProduct.name}</div>
                    <div class="order__body__price">${money.vnd(item.cartList[i].product_price)}</div>
                    <div class="order__body__quantity">${item.cartList[i].soluong}</div>
                    <div class="order__body__total-price">${money.vnd(item.cartList[i].total)}</div>
                </div>`
        }
        html += `</div>`;
    })
    html += '</div>';
    orderListContainer.innerHTML = html;
    // Xử lí click on order and show it items
    const orderDropdown = document.querySelectorAll('.onder__handle__content__item__header')
    const orderBody = document.querySelectorAll('.onder__handle__content__item__body')
    orderDropdown.forEach((btn, i) => {
        btn.addEventListener('click', function () {
            orderBody[i].classList.toggle('active');
        })
    })
}

