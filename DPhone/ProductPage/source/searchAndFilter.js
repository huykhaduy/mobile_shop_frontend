
//Select by brand
// const arrBrand = ['samsung', 'xiaomi', 'apple', 'vivo', 'oppo', 'vsmart'];
const nameListFilter = document.querySelectorAll('.product__name__brand__filter');
var myChoiceBrand = '';
var myChoicePrice = [0,data.getMaxProductPrice()];
var myChoiceRam = [];
var myChoiceRom = [];
var myChoiceSearch = '';
var searchKeyWords = '';

filterProductByBrand(nameListFilter);

function filterProductByBrand(nameListFilter) {
    nameListFilter.forEach((item, i) => {
        item.addEventListener('click', function () {
            myChoiceBrand = arrBrand[i];
            if (item.classList.contains('active')) {
                radioChoiceEffect(item, nameListFilter);
                item.classList.remove('active');
                myChoiceBrand = '';
            }
            else radioChoiceEffect(item, nameListFilter);
            searchAndRender();
        })
    })
}


function radioChoiceEffect(childBox,parentBox) {
    parentBox.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    })
    childBox.classList.add('active');
}

//Select price

filterProductByPrice();
function filterProductByPrice() {
    const listPrice = document.querySelectorAll('.radio__label input');
    listPrice.forEach(item => {
        item.addEventListener('click', function () {
            var a = this.getAttribute('value');
            a = a.split(',');
            for (var i = 0; i < a.length; i++) {
                a[i] = parseInt(a[i]);
            }
            myChoicePrice = a;
            searchAndRender();
       })
    })
}


filterProductByRam();
function filterProductByRam() {
    const listRamBtns = document.querySelectorAll('.filter__ram');
    listRamBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            effectBtnClick(btn, myChoiceRam);
            searchAndRender();
        })
    })
}

filterProductByRom();
function filterProductByRom() {
    const listRomBtns = document.querySelectorAll('.filter__rom');
    listRomBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            effectBtnClick(btn, myChoiceRom);
            searchAndRender();
        })
    })
}

searchKeyWordsByName();
function searchKeyWordsByName() {
    const searchInput = document.querySelector('.search-input-header');
    // const searchFinder = document.querySelector('.product__header__search__button');
    var myList;
    var myProducts = data.getProducts();
    searchInput.addEventListener('keyup', function (event) {
        searchKeyWords = searchInput.value;
        if (event.keyCode === 13) {
            event.preventDefault();
            myList = menu.filterProudct(myProducts, myChoiceBrand, myChoicePrice[0], myChoicePrice[1], myChoiceRam, myChoiceRom, searchKeyWords);
            sortAndRender(myList);
        }
    })
    // var myList;
    // var myProducts = data.getProducts();
    // searchFinder.addEventListener('click', function () {
    //     myList = menu.filterProudct(myProducts, myChoiceBrand, myChoicePrice[0], myChoicePrice[1], myChoiceRam, myChoiceRom, searchKeyWords);
    //     sortAndRender(myList);
    // })
}

//Button reset selected
const btnReset = document.querySelector('.product__content__filter__reset__btn');
btnReset.addEventListener('click', function () {
    location.reload();
    scrollToProduct();
})

//Sort product increase
const sortButtonIncrease = document.querySelector('.list__option .optionIncrease');
sortButtonIncrease.addEventListener('click', function () {
    var list = data.sortProducts(products, 1);
    sortAndRender(list);
})

//Sort products decrease
const sortButtonDecrease = document.querySelector('.list__option .optionDecrease')
sortButtonDecrease.addEventListener('click', function () {
    var list = data.sortProducts(products, 0);
    sortAndRender(list);
})
//Add vao ram va rom
function effectBtnClick(item,myData) {
    item.classList.toggle('active');
    var myValue = parseInt(item.getAttribute('value'));
    if (item.classList.contains('active')) {
        var isExist = false;
        for (let i = 0; i < myData.length; i++){
            if (myData[i] === myValue) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            myData.push(myValue);
        }
    }
    else {
        for (let i = 0; i < myData.length; i++){
            if (myData[i] === myValue) {
                myData.splice(i, 1);
            }
        }
    }
}


function setStatePreNextPageBtn() {
    const nextBtn = document.querySelector('.product__content__paging__next');
    const prevBtn = document.querySelector('.product__content__paging__prev');
    if (currentPage <= 1) {
        prevBtn.classList.add('active');
        nextBtn.classList.remove('active');
    }
    else if (currentPage > 1 && currentPage < data.getMaxPages(products, perPage)) {
        prevBtn.classList.remove('active');
        nextBtn.classList.remove('active');
    }
    else {
        nextBtn.classList.add('active');
        prevBtn.classList.remove('active');
    }

    if (data.getMaxPages(products, perPage) == 1) {
        nextBtn.classList.add('active');
        prevBtn.classList.add('active');
    }
}

function searchAndRender() {
    products = data.getProducts();
    products = menu.filterProudct(products, myChoiceBrand, myChoicePrice[0], myChoicePrice[1], myChoiceRam, myChoiceRom, searchKeyWords);
    currentPage = 1;
    renderPages();
    setStatePreNextPageBtn();
    const listPageBtns = document.querySelectorAll('.product__content__paging__item');
    listPageBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            currentPage = parseInt(this.getAttribute('value'));
            changePages();
            this.classList.add('active');
            renderProduct();
            scrollToProduct();
        })
    })
    renderProduct();
}

function sortAndRender(list) {
    products = list;
    currentPage = 1;
    renderPages();
    setStatePreNextPageBtn();
    const listPageBtns = document.querySelectorAll('.product__content__paging__item');
    listPageBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            currentPage = parseInt(this.getAttribute('value'));
            changePages();
            this.classList.add('active');
            renderProduct();
            scrollToProduct();
        })
    })
    renderProductV2(list);
}