setCurrentMonth();
function setCurrentMonth() {
    var time = new Date();
    const monthChoice = order_page.querySelector('#product-select');
    monthChoice.value = 't' + (time.getMonth() + 1);
}

const monthOrderChoice = order_page.querySelector('#product-select');
let monthOrderValue = parseInt(monthOrderChoice.value.slice(1));
monthOrderChoice.addEventListener('change', getMonthRender)

getMonthRender();
function getMonthRender() {
    monthOrderValue = parseInt(monthOrderChoice.value.slice(1));
    let result = order.getOrdersInMonth(monthOrderValue);
    renderOrder(result);
    setCounter(result);
    switchChangeOrderEvent();
}

//Xử lý nút switch order
function switchChangeOrderEvent() {
    const containers = document.querySelectorAll('.onder__handle__content__item__header');
    containers.forEach(item => {
        const switchBtn = item.querySelector('.order__header__action');
        const textContent = item.querySelector('.order__header__state');
        switchBtn.addEventListener('click', function (e) {
            this.classList.toggle('active');
            textContent.classList.toggle('active');
            if (this.classList.contains('active')) {
                order.changeOrderStatus(parseInt(this.getAttribute('value')), true);
                textContent.innerHTML = "Đã xử lý";
            }
            else {
                order.changeOrderStatus(parseInt(this.getAttribute('value')), false);
                textContent.innerHTML = "Chưa xử lý";
            }
            setCounter(order.getOrdersInMonth(monthOrderValue));
            e.stopPropagation();
        })
    })
}

function setCounter(list) {
    const countAll = order_page.querySelector('.order__statistics__item__left__number__1');
    const countHandled = order_page.querySelector('.order__statistics__item__left__number__2');
    const countNotHandled = order_page.querySelector('.order__statistics__item__left__number__3');
    if (!list) {
        return;
    }
    var totalHandled = 0;
    list.forEach(item => {
        if (item.status === true) {
            totalHandled++;
        }
    })
    countAll.innerText = list.length;
    countHandled.innerText = totalHandled;
    countNotHandled.innerText = list.length - totalHandled;
}
