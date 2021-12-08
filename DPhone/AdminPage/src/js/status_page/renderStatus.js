

renderArrBrand(typeProductBrand)
function renderArrBrand(obj) {
    var html = `<option value="type_all">Tất cả</option>`;
    arrBrand.forEach(item => {
        html += `<option value="${item}">${capitalize(item)}</option>`
    })
    obj.innerHTML = html;
}

setCurrentMonthStatus();
function setCurrentMonthStatus() {
    var time = new Date();
    monthStatusChoice.value = 't' + (time.getMonth() + 1);
    currentMonthStatusChoice = time.getMonth() + 1;
}

function getMonthArray(month) {
    let day = time.getMaxDayOfMonth(month);
    let result = [];
    for (let i = 0; i < day; i++){
        result.push((i + 1).toString());
    }
    return result;
}

function getMonneyArray() {
    let arr = fillZeroToSellingDay();
    let result;
    result = arr.map(item => (item.money));
    return result;
}

function fillZeroToSellingDay() {
    let day = time.getMaxDayOfMonth(currentMonthStatusChoice);
    let result = [];
    let dataList = order.getGetDailySellingInMonth(currentMonthStatusChoice, currentBrandStatusChoice);

    for (let i = 0; i < day; i++){
        let isExist = false;
        if (dataList.length > 0) {
            for (let j = 0; j < dataList.length; j++) {
                if (dataList[j].day === i+1) {
                    isExist = true;
                    result.push(dataList[j]);
                }
            }
        }
        if (!isExist) {
            let obj = { day: i + 1, money: 0 };
            result.push(obj);
        }
    }
    return result;
}

function countOrdersBrand() {
    const orderList = order.getOrdersInMonth(currentMonthStatusChoice);
    if (!orderList || orderList.length === 0) return 0;
    let total = 0;
    orderList.forEach((item) => {
        for (let i = 0; i < item.cartList.length; i++){
            if (item.cartList[i].storeProduct.brand.includes(currentBrandStatusChoice)) {
                total++;
                break;
            }
               
        }
    })
    return total;
}

function sumOrderInBrandMonth() {
    let a = 0;
    let data = getMonneyArray();
    if (!data || data.length === 0) return 0;
    data.forEach(item => {
        a += item;
    })
    return a;
}


//---------------------------------CONFIG CHART-----------------------------------



// myChart = new Chart(ctx, lineChartConfig);
// myDoughnutChart_1 = new Chart(DoughnutChart_1, donutCharConfig1);
// myDoughnutChart_2 = new Chart(DoughnutChart_2, donutCharConfig2);
// myDoughnutChart_3 = new Chart(DoughnutChart_3, donutCharConfig3);

function renderLineChart() {
    if (myChart)
        myChart.destroy();
    let lineChartConfig = {
        type: 'line',
        data: {
            labels: getMonthArray(currentMonthStatusChoice),
            datasets: [{
                label: 'VNĐ',
                data: getMonneyArray(),
                backgroundColor: ['#3596f7', '#3596f7', '#3596f7', '#3596f7', '#3596f7', '#3596f7',
                    '#3596f7', '#3596f7', '#3596f7', '#3596f7', '#3596f7', '#3596f7'],
                borderColor: ['#3596f7', '#3596f7', '#3596f7', '#3596f7', '#3596f7', '#3596f7', '#3596f7'
                    , '#3596f7', '#3596f7', '#3596f7', '#3596f7', '#3596f7'],
                borderWidth: 2,
                barPercentage: 0.4,
            },
            ]
        },

        options: {
            elements: {
                line: {
                    tension: 0.3,
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    }
    // lineChartConfig.data.datasets.data = getMonneyArray();
    // lineChartConfig.data.labels = getMonthArray(currentMonthStatusChoice);
    myChart = new Chart(ctx, lineChartConfig);
}

function renderDoughnutChart1() {
    if (myDoughnutChart_1)
        myDoughnutChart_1.destroy();
    let a = countOrdersBrand();
    let arr = [a, order.getOrdersInMonth(currentMonthStatusChoice) === null ? 0 : order.getOrdersInMonth(currentMonthStatusChoice).length - a];
    // donutCharConfig1.data.datasets.data = arr;
    let donutCharConfig1 = {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Đơn hàng',
                data: arr,
                backgroundColor: [
                    '#ee3158', '#ffd6de'
                ],
            }],
        },

        options: {
            cutout: '75%',
            responsive: true,
        }
    }
    myDoughnutChart_1 = new Chart(DoughnutChart_1, donutCharConfig1);
    statusNumberPage[0].innerText = a + " Đơn hàng (Tổng: "+parseInt(arr[1]+a)+')';
    contentTextDonut[0].innerText = a;
}

function renderDoughnutChart2() {
    if (myDoughnutChart_2)
        myDoughnutChart_2.destroy();
    let a = order.countAmoutOfBrand(currentMonthStatusChoice, currentBrandStatusChoice);
    let donutCharConfig2 = {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Sản phẩm',
                data: [a, order.countAmouts(currentMonthStatusChoice) - a],
                // data: [0,1],
                backgroundColor: [
                    '#3596f7', 'rgb(204, 229, 255)'
                ],
            }]
        },

        options: {
            cutout: '75%',
            responsive: true,
        }
    }
    myDoughnutChart_2 = new Chart(DoughnutChart_2, donutCharConfig2);
    statusNumberPage[1].innerText = a + ' Sản phẩm (Tổng: '+order.countAmouts(currentMonthStatusChoice)+')';
    contentTextDonut[1].innerText = a;
}

function renderDoughnutChart3() {
    if (myDoughnutChart_3)
        myDoughnutChart_3.destroy();
    let a = sumOrderInBrandMonth();
    let b = order.getTotalOrderMoney(order.getOrdersInMonth(currentMonthStatusChoice));
    let percentageA;
    if (b === 0)
        percentageA = 0;
    else 
        percentageA = Math.round((a / b)*100);
    let percentageB = 100-percentageA;
    let donutCharConfig3 = {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Doanh Thu',
                data: [percentageA, percentageB],
                backgroundColor: [
                    '#ffa800', '#fff8ea'
                ],
            }]
        },

        options: {
            cutout: '75%',
            responsive: true,
        }
    }
    myDoughnutChart_3 = new Chart(DoughnutChart_3, donutCharConfig3);
    statusNumberPage[2].innerText = percentageA + '% (' + money.vnd(a) + ')';
    contentTextDonut[2].innerText = percentageA+"%";
}

renderAllChart();
function renderAllChart() {
    renderLineChart();
    renderDoughnutChart1();
    renderDoughnutChart2();
    renderDoughnutChart3();
}