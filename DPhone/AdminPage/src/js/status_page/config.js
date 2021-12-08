const statusNumberPage = document.querySelectorAll('.doughnut-chart__item__left__icon__text p');
const contentTextDonut = document.querySelectorAll('.doughnut-chart__item__right__content__text p');
const typeProductBrand = document.querySelector('#product-type-select');
const monthStatusChoice = document.querySelector('#product-month-select');

let currentMonthStatusChoice;
let currentBrandStatusChoice='';

const ctx = document.getElementById('myChart').getContext('2d');
const DoughnutChart_1 = document.getElementById('myDoughnutChart_1').getContext('2d');
const DoughnutChart_2 = document.getElementById('myDoughnutChart_2').getContext('2d');
const DoughnutChart_3 = document.getElementById('myDoughnutChart_3').getContext('2d');

let myChart;

// Xử lí biểu đồ Doughnut trang Statistical
//-------------------- 1 ----------------------
let myDoughnutChart_1;

//-------------------- 2 ----------------------

let myDoughnutChart_2;

//-------------------- 3 ----------------------
let myDoughnutChart_3;