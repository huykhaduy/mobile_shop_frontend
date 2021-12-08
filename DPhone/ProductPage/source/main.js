//Max product show on 1 page
const perPage = 9;
// var products = data.getProducts();
var maxPage = Math.ceil(products.length / perPage);
const pageContainer = document.querySelector('.paging__item__box');
renderPages();
const pageBtns = pageContainer.querySelectorAll('.product__content__paging__item');
const modalBg = document.querySelector('.background__modal__box');
//Add first page to active page 
pageBtns[0].classList.add('active');

//Add event remove active page and set itself become active
addEventToPage();
function addEventToPage() {
    pageBtns.forEach(item => {
        item.addEventListener('click', function () {
            currentPage = parseInt(this.getAttribute("value"));
            changePages();
            renderProduct();
            scrollToProduct();
        })
    })
}


var currentPage = 1;
const nextBtn = document.querySelector('.product__content__paging__next');
const prevBtn = document.querySelector('.product__content__paging__prev');
changePages();
renderProduct();

nextBtn.addEventListener('click', function () {
    if (currentPage < data.getMaxPages(products, perPage)) {
        currentPage++;
        changePages();
        renderProduct();
        scrollToProduct();
    } 
    //renderPage
})

prevBtn.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        changePages();
        renderProduct();
        scrollToProduct();
    }
})

// Xử lí ô search
var searchIcon = document.querySelector('.product__header__icon__search')
var searchInput = document.querySelector('input.search-input-header')
searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active')
})
searchInput.addEventListener('click', (e) => {
    e.stopPropagation()
})
window.onclick = (e) => {
    if (e.target.id !== 'icon-search' && e.target.id !== 'input-search') {
        searchInput.classList.remove('active')
    }
}


// Xử lí modal box Add To Cart
var addToCart = document.querySelector('.product__header__icon__cart')
var modalCart = document.querySelector('.product__modal__cart__container')
var closeCart = document.querySelector('.product__modal__cart__close')
var modalDetails = document.querySelector('.product__modal__details')
const loginFormContainer = document.querySelector('.login-form__container')
addToCart.addEventListener('click', function () {
    modalBg.classList.add('active')
    modalCart.classList.add('active')
})
closeCart.addEventListener('click', function () {
    modalBg.classList.remove('active')
    modalCart.classList.remove('active')
})
modalBg.addEventListener('click', function () {
    modalBg.classList.remove('active')
    modalCart.classList.remove('active')
    modalDetails.classList.remove('active')
    sidebarMenu.classList.remove('active')
    filterSidebar.classList.remove('active')
    loginFormContainer.classList.remove('active');
})

// Xử lí Filter
// var filterRam = document.querySelectorAll('.filter__ram')
// filterRam.forEach(e => {
//     e.addEventListener('click', function () {
//         document.querySelector('.filter__ram.active').classList.remove('active')
//         this.classList.add('active')
//     })
// })

// var filterRom = document.querySelectorAll('.filter__rom')
// filterRom.forEach(e => {
//     e.addEventListener('click', function () {
//         document.querySelector('.filter__rom.active').classList.remove('active')
//         this.classList.add('active')
//     })
// })


// Xử lí phần hiển thị sản phẩm
var displayItem = document.querySelectorAll('.product__content__display__item')
displayItem.forEach(e => {
    e.addEventListener('click', function () {
        document.querySelector('.product__content__display__item.active').classList.remove('active')
        this.classList.add('active')
    })
})


// //Display list item column
var displayItemInline = document.querySelector('.display__item__inline')
var displayItemBlock = document.querySelector('.display__item__block')
displayItemInline.addEventListener('click', function () {
    showChoice = 2;
    displayProductType(showChoice);
})

displayItemBlock.addEventListener('click', function () {
    showChoice = 1;
    displayProductType(showChoice);
})


// Xử lí menu sidebar
var openSidebarMenu = document.querySelector('.product__header__icon__bar')
var sidebarMenu = document.querySelector('.menu__sidebar__container')
var closeSidebarMenu = document.querySelector('.menu__sidebar__close')
openSidebarMenu.addEventListener('click', function () {
    sidebarMenu.classList.add('active')
    modalBg.classList.add('active')
})
closeSidebarMenu.addEventListener('click', function () {
    sidebarMenu.classList.remove('active')
    modalBg.classList.remove('active')
})

// Xử lí filter sidebar
var openFilterSidebar = document.querySelector('.open__filter__mobile__screen')
var filterSidebar = document.querySelector('.product__content__filter')
var closeFilterSidebar = document.querySelector('.filter__sidebar__close')
openFilterSidebar.addEventListener('click', function () {
    filterSidebar.classList.add('active')
    modalBg.classList.add('active')
})
closeFilterSidebar.addEventListener('click', function () {
    filterSidebar.classList.remove('active')
    modalBg.classList.remove('active')
})


//Change page effect
function changePages() {
    //MAX PAGE BTN SHOW: 5
    const maxPagesShow = 3;
    const pageBtns = pageContainer.querySelectorAll('.product__content__paging__item');
    if (pageContainer.querySelector('.product__content__paging__item.active'))
        pageContainer.querySelector('.product__content__paging__item.active').classList.remove('active');
    if (currentPage > 0 && currentPage <= data.getMaxPages(products,perPage))
        pageBtns[currentPage - 1].classList.add('active');
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
    const nowPage = currentPage;
    var rangefirst = 0;
    var rangetail = 0;
    if (nowPage <= maxPagesShow - 1) {
        rangetail = maxPagesShow - nowPage - 1;
    }
    else if (nowPage >= maxPage - maxPagesShow) {
        rangefirst = maxPagesShow + (-maxPage + nowPage);
    }
    // console.log("Nowpage: " + -maxPage);
    pageBtns.forEach((item, i) => {
        if (i < nowPage + maxPagesShow + rangetail && i > nowPage - maxPagesShow - rangefirst) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }
    })
}

function scrollToProduct() {
    document.querySelector('.product__content__display__group').scrollIntoView();
}

// Xử lí select option
document.querySelector('.selector').addEventListener('click', function(){
    document.querySelector('ul.list__option').classList.toggle('hide')
    document.querySelector('.selectField svg').classList.toggle('rotate')
})

document.querySelectorAll('.option').forEach(e => {
    e.addEventListener('click',function(){
        document.querySelector('.selectField p').innerText = this.textContent;
        document.querySelector('ul.list__option').classList.toggle('hide')
        document.querySelector('.selectField svg').classList.remove('rotate')
    })
})

