// var orderNumber = order.getOrders().length;
// var orderProductNumber = data.getCurrentSize();
// var order


// statusNumberPage[0].innerText = orderNumber;
// statusNumberPage[1].innerText = 
// statusNumberPage[2].innerText =  

// Xử lí biểu đồ
// < 200  = đỏ
// 200 - 500 = vàng
// > 500 = xanh




typeProductBrand.addEventListener('change', function () {
    if (typeProductBrand.value === "type_all")
        currentBrandStatusChoice = '';
    else {
        currentBrandStatusChoice = typeProductBrand.value;
    }
    // console.log(currentBrandStatusChoice + " "+currentMonthStatusChoice);
    renderAllChart();
})

monthStatusChoice.addEventListener('change', function () {
    currentMonthStatusChoice = parseInt(monthStatusChoice.value.slice(1));
    // console.log(currentBrandStatusChoice + " " + currentMonthStatusChoice);
    renderAllChart();
})


var chartBox = document.querySelector('.content__right__main__left__chart')
adminLeftOpen.addEventListener('click', function () {
    chartBox.style.width = '99%'
})
