// KIỂM TRA QUYỀN CỦA NGƯỜI DÙNG
if (!user.checkLoginId()) {
    window.location.href = "../ProductPage/ProductPage.html";
}

renderPageListOrder();
function renderPageListOrder() {
    const orderPageContainer = document.querySelector('.view__order__content__list-box');
    var html = '';
    const list = order.getOrderOfUserId(user.checkLoginId());
    if (!list || list.length === 0) return null;
    list.forEach(item => {
        html += `<div class="view__order__content__list">`;
        html += `
                <div class="view__order__content__list__title">
                    <div class="view__order__content__list__title-item">
                        <i class="fas fa-arrow-circle-down"></i>
                    </div>
                    <div class="view__order__content__list__title-item">
                        <img src="./img/icon-order.png" alt="">
                    </div>
                    <div class="view__order__content__list__title-item">
                        <h4>Đơn hàng #${item.orderId}</h4>
                        <p>${item.cartList.length} sản phẩm</p>
                    </div>
                    <div class="view__order__content__list__title-item">
                        <h4>${money.vnd(order.getOrderIdMoney(item.orderId))}</h4>
                        <p>Chưa thanh toán</p>
                    </div>
                    <div class="view__order__content__list__title-item">
                        <h4>Tên người dùng</h4>
                        <p>${user.getUserId(item.userid).username}</p>
                    </div>
                    <div class="view__order__content__list__title-item">
                        <h4>Ngày đặt hàng</h4>
                        <p>${time.getDateTimeStr(item.orderTime)}</p>
                    </div>`
        if (item.status) {
            html += `<div class="view__order__content__list__title-item">
                        <div class="view__order__content__list-action" style="background-color: green">Đã xử lý</div>
                    </div>`;
        }
        else html += `<div class="view__order__content__list__title-item">
                        <div class="view__order__content__list-action">Chưa xử lý</div>
                    </div>`
                
        html += `</div>
            <div class="view__order__content__list__body-box">`;
        item.cartList.forEach(cartItem => {
            // console.log(cartItem);
            html += `    
                    <div class="view__order__content__list__body">
                        <div class="view__order__content__list__body-item">
                            <img src="${cartItem.productImg}" alt="">
                        </div>
                        <div class="view__order__content__list__body-item">
                            <h4>${cartItem.storeProduct.name}</h4>
                        </div>
                        <div class="view__order__content__list__body-item">
                            ${money.vnd(cartItem.product_price)}
                        </div>
                        <div class="view__order__content__list__body-item">
                            ${cartItem.soluong}
                        </div>
                        <div class="view__order__content__list__body-item">
                            ${money.vnd(cartItem.total)}
                        </div>
                    </div>
            `
        })
        html += `</div>
            </div>`
    })
    orderPageContainer.innerHTML = html;
    const titleViewOrder = document.querySelectorAll('.view__order__content__list__title')
    const bodyViewOrder = document.querySelectorAll('.view__order__content__list__body-box')
    titleViewOrder.forEach((item, i) => {
        item.addEventListener('click', function () {
            const obj = document.querySelector('.view__order__content__list__body-box.active');
            if (obj) {
                if (obj === bodyViewOrder[i]) {
                    obj.classList.remove('active');
                }
                else {
                    obj.classList.remove('active');
                    bodyViewOrder[i].classList.toggle('active')
                }
            }
            else {
                bodyViewOrder[i].classList.toggle('active');
            }
        })
    })
}



renderShowRecentOrder();
function renderShowRecentOrder() {
    const showInfomationOfRecentOrder = document.querySelector('.container_order_info');
    const list = order.getOrderOfUserId(user.checkLoginId());
    if (!list || list.length === 0) {
        return null;
    }
    let lastOrder = list[list.length - 1];
    var html = ''
    if (Math.abs(Date.now() - lastOrder.orderTime) < 3000) {
        html = `
        <div class="view__order__content__desc">
            <div class="view__order__content__desc-item">
                    <div class="desc-item-title">MÃ ĐƠN HÀNG</div>
                    <div class="desc-item-body">#${lastOrder.orderId}</div>
                </div>
                <div class="view__order__content__desc-item">
                    <div class="desc-item-title">NGÀY ĐẶT</div>
                    <div class="desc-item-body">${time.getDateTimeStr(lastOrder.orderTime)}</div>
                </div>
                <div class="view__order__content__desc-item">
                    <div class="desc-item-title">TỔNG</div>
                    <div class="desc-item-body">${money.vnd(order.getOrderIdMoney(lastOrder.orderId))}</div>
                </div>
                <div class="view__order__content__desc-item">
                    <div class="desc-item-title">THANH TOÁN</div>
                    <div class="desc-item-body">Tiền mặt</div>
                </div>
            </div>
        `;
        showNofications("fas fa-check-circle", "Đặt thành công", "Đơn hàng #" + lastOrder.orderId + " đã được tạo", 1);
    }
    showInfomationOfRecentOrder.innerHTML = html;
}