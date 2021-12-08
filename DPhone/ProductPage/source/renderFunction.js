var showChoice = 1;

//-----------------------------------RENDER PRODUCT---------------------------------
function renderProduct() {
    html = '';
    var myData = data.getProductAtPage(products, currentPage, perPage);
    const productBox = document.querySelector('.product__item__box');
    if (myData == null) {
        html = `<div class="product__content__image">
			<img src="./img/page-not-found.png" alt="">
		</div>`;
        productBox.innerHTML = html;
        changePagingTitle(perPage);
        nextBtn.classList.add('active');
        prevBtn.classList.add('active');
        return;
    }
    myData.forEach((e) => {
        html += `<div class="product__item">
            <div class="product__item__img__box">
            <img class="product__item__img product__item__img__1" src="${e.imgList[0]}" onerror="imgError(this)" alt="">
            <img class="product__item__img product__item__img__2" src="${e.imgList[1]}" onerror="imgError(this)" alt="">
            </div>
            <div class="product__item__info__group">
              <div class="product__item__info__name">${e.name}</div>
              <div class="product__item__info__star">`;
        for (var i = 1; i <= 5; i++) {
            if (i <= e.rate) {
                html += '<i class="fas fa-star"></i>';
            }
            else {
                html += '<i class="fas fa-star" color="white"></i>';
            }
        }
        html += `
              <span>(${e.rate})</span>
              </div>
              <div class="product__item__info__price">${money.vnd(e.price)} <span><s>$${money.vnd(e.price_old)}</s></span></div>
              <div class="product__item__info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deleniti quas qui
                    dolore quasi unde voluptas at, doloremque...
                  </div>
              <div class="product__item__button button__details" value=${e.productId}>
                <i class="far fa-eye"></i> Chi Tiết
              </div>
              <div class="product__item__button button__addtocart">
                <i class="fas fa-shopping-bag"></i> Thêm Vào Giỏ
              </div>
            </div>
          </div>`
    }
    )
  
    productBox.innerHTML = html;
    const productListItems = productBox.querySelectorAll('.product__item');
    productListItems.forEach((product) => {
        renderProductDetail(product);
        const obj = product.querySelector('.product__item__button.button__addtocart');
        addEventOpenCart(obj, product.querySelector('.button__details'));
    })
    changePagingTitle(perPage);
}

//Render product v2
function renderProductV2(list) {
    html = '';
    var myData = data.getProductAtPage(list, currentPage, perPage);
    const productBox = document.querySelector('.product__item__box');
    if (myData == null) {
        html = `<div class="product__content__image">
			<img src="./img/page-not-found.png" alt="">
		</div>`;
        productBox.innerHTML = html;
        changePagingTitle(perPage);
        nextBtn.classList.add('active');
        prevBtn.classList.add('active');
        return;
    }
    myData.forEach((e) => {
        html += `<div class="product__item">
            <div class="product__item__img__box">
            <img class="product__item__img product__item__img__1" src="${e.imgList[0]}" onerror="imgError(this)" alt="">
            <img class="product__item__img product__item__img__2" src="${e.imgList[1]}" onerror="imgError(this)" alt="">
            </div>
            <div class="product__item__info__group">
              <div class="product__item__info__name">${e.name}</div>
              <div class="product__item__info__star">`;
        for (var i = 1; i <= 5; i++) {
            if (i <= e.rate) {
                html += '<i class="fas fa-star"></i>';
            }
            else {
                html += '<i class="fas fa-star" color="white"></i>';
            }
        }
        html += `
              <span>(${e.rate})</span>
              </div>
              <div class="product__item__info__price">${e.price} <span><s>${e.price_old}</s></span></div>
              <div class="product__item__info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deleniti quas qui
                    dolore quasi unde voluptas at, doloremque...
              </div>
              <div class="product__item__button button__details" value=${e.productId}>
                <i class="far fa-eye"></i> Chi Tiết
              </div>
              <div class="product__item__button button__addtocart">
                <i class="fas fa-shopping-bag"></i> Thêm Vào Giỏ
              </div>
            </div>
          </div>`
    }
    )

    productBox.innerHTML = html;
    const productListItems = productBox.querySelectorAll('.product__item');
    productListItems.forEach((product) => {
        renderProductDetail(product);
        const obj = product.querySelector('.product__item__button.button__addtocart');
        addEventOpenCart(obj, product.querySelector('.button__details'));
    })
    changePagingTitle(perPage);
}

//------------------------RENDER PROUDCT DETAIL MODAL----------------------------------
function renderProductDetail(self) {
    // Xử lí modal details render
    var modalDetails = document.querySelector('.product__modal__details')
    var openModalDetails = self.querySelector('.button__details')
    var htmlStr = '';
    openModalDetails.addEventListener('click', function () {
        const product = data.getProductId(parseInt(this.getAttribute('value')));
        htmlStr = `
                <div class="product__modal__details__content">
		            <div class="product__modal__details__content__left">
			            <div class="product__modal__details__content__left__img">
                        <img src="${product.imgList[0]}" alt="" onerror="imgError(this)">
			            </div>
		            </div>
                    <div class="product__modal__details__content__right">
                    <h3 class="product__modal__details__name">${product.name}</h3>
                    <div class="product__modal__details__close">
                      <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                        <lord-icon src="https://cdn.lordicon.com/wgwcqouc.json" trigger="hover" 
                        colors="primary:#7047ee,secondary:#7047ee"
                            style="width:100px">
                        </lord-icon>
                    </div>
                    <div class="product__modal__details__star">`
        for (var i = 1; i <= 5; i++) {
            if (i <= product.rate) {
                htmlStr += `
                  <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/mdgrhyca.json"
                        trigger="loop"
                        colors="primary:#fffa65,secondary:#ff3838"
                        style="width:25px">
                    </lord-icon>
                `;
            }
            else {
                htmlStr += `
                <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/mdgrhyca.json"
                        trigger="click"
                        colors="primary:#fffa65,secondary:#ff3838"
                        style="width:25px">
                    </lord-icon>
                `
                ;
            }
        }
        htmlStr += `<span>(${(Math.floor(Math.random() * (50)) + 1)} Đã bán)</span>
                    </div>
                    <div class="product__modal__details__price">
                        $${money.vnd(product.price)} <span>$${money.vnd(product.price_old)}</span>
                    </div>
                    <div class="product__modal__details__info">
                        <h4>RAM<span>${product.ram} GB</span></h4>
                        <h4>ROM<span>${product.rom} GB</span></h4>
                        <h4>${productDescription}</h4>
                    </div>

                    <div class="product__modal__details__quantity__group">
                       <div class="product__modal__details__quantity__modal__box">
                        <div class="product__modal__details__quantity__item modal__details__quantity__minus"><i class="fas fa-chevron-left"></i></div>
                        <div class="product__modal__details__quantity__item modal__details__quantity__number">1</div>
                        <div class="product__modal__details__quantity__item modal__details__quantity__plus"><i class="fas fa-chevron-right"></i></div>
                       </div>
                        <div class="product__modal__details__add-to-cart__buy-now">
                            <div class="product__modal__details__add-to-cart"><i class="fas fa-shopping-bag"></i> Thêm Vào Giỏ</div>
                            <div class="product__modal__details__buy-now"><i class="fas fa-shopping-bag"></i> Mua Ngay</div>
                        </div>
                    </div>
		        </div>
	        </div>`;
        //Set html for modal
        modalDetails.innerHTML = htmlStr;
        modalDetails.classList.add('active');
        modalBg.classList.add('active');
        //Add close modal event
        var closeModalDetails = modalDetails.querySelector('.product__modal__details__close');
        closeModalDetails.addEventListener('click', function () {
            modalDetails.classList.remove('active')
            modalBg.classList.remove('active')
        })
        //Add minus and subtract qualite
        const subBtn = modalDetails.querySelector('.modal__details__quantity__minus');
        const addBtn = modalDetails.querySelector('.modal__details__quantity__plus');
        const amout = modalDetails.querySelector('.modal__details__quantity__number');
        subBtn.addEventListener('click', function () {
            var num = parseInt(amout.innerHTML);
            num = num > 1 ? --num : num;
            amout.textContent = num;
        })
        addBtn.addEventListener('click', function () {
            var num = parseInt(amout.innerHTML);
            num = num < 20 ? ++num : num;
            amout.textContent = num;
        })
        //Add to cart and buy now event
        const addToCart = document.querySelector('.product__modal__details__add-to-cart');
        const buyNow = document.querySelector('.product__modal__details__buy-now');
        addToCart.addEventListener('click', function () {
            if (user.checkLoginId() === null) {
                showNofications("fas fa-sign-in-alt", "Thêm Thất Bại", "Vui lòng đăng nhập tài khoản", 0);
                return;
            }
            const userid = user.checkLoginId();
            const productId = parseInt(openModalDetails.getAttribute('value'));
            cart.addItem(userid, productId, parseInt(amout.textContent), null);
            renderCartModal();
            showNofications("fas fa-check-circle", "Thêm Thành Công", "Sản phẩm đã được thêm vào giỏ",1);
        })
        buyNow.addEventListener('click', function () {
            if (user.checkLoginId() === null) {
                showNofications("fas fa-sign-in-alt", "Mua Hàng Thất Bại", "Vui lòng đăng nhập tài khoản", 0);
                return;
            }
            const userid = user.checkLoginId();
            const productId = parseInt(openModalDetails.getAttribute('value'));
            order.addBuyNowOrder(productId, parseInt(amout.textContent), null, userid, Date.now());
            window.location.href ="./ViewOrderPage.html";
        })
    })
    displayProductType(showChoice);
}

renderCartModal();
//-----------------------------------RENDER CART MODAL---------------------------
function renderCartModal() {
    var html = '';
    const cartModal = document.querySelector('.product__modal__cart__content');
    const userid = user.checkLoginId();
    if (userid === null) {
        cartModal.innerHTML = html;
        return false;
    }
    const cartList = cart.getCartList(userid);
    if (cartList.length > 0) {
        cartList.forEach(item => { 
            html += `
            <div class="product__modal__cart__content__item">
            <div class="product__modal__cart__content__item__info__close" value=${item.cartId}><i class="fas fa-window-close"></i></div>
					 <div class="product__modal__cart__content__item__image">
							<img src="${item.productImg}" alt="" onerror="imgError(this)">
						</div>
						<div class="product__modal__cart__content__item__info">
							<div class="product__modal__cart__content__item__info__title">
								<h5>${data.getProductId(item.productId).name}</h5>
							</div>
							<div class="product__modal__cart__content__item__info__price__quantity">
								<div class="product__modal__cart__content__item__info__quantity">
									<div class="product__modal__cart__content__item__info__quantity__minus"><i class="fas fa-chevron-left"></i></div>
									<div class="product__modal__cart__content__item__info__quantity__number">${item.soluong}</div>
									<div class="product__modal__cart__content__item__info__quantity__plus"><i class="fas fa-chevron-right"></i></div>
								</div>
								<div class="product__modal__cart__content__item__info__price" value=${item.product_price}>${money.vnd(item.product_price * item.soluong)}</div>
							</div>
						</div>
				</div>`;
        })
    }
    else {
        html += `<div class="Notification__add-to-cart">Giỏ hàng của bạn đang trống!</div>`
    }
    
    html += `<div class="product__modal__cart__content__total">
                    <h5>Tổng giá:</h5>
                    <div class="product__modal__cart__content__total__price">${money.vnd(cart.getTotalMoney(userid))}</div>
            </div>
            <div class="product__modal__cart__content__checkout__viewcart">
                <div class="product__modal__cart__content__checkout__item checkout__button" onclick="clickToBuyModalCart()">
                    <i class="fas fa-lock"></i> <h5>THANH TOÁN</h5>
                </div>
                <div class="product__modal__cart__content__viewcart__item viewcart__item">
                    <i class="fas fa-shopping-cart"></i> <h5>XEM HÓA ĐƠN</h5>
                </div>
            </div>
            `;
    cartModal.innerHTML = html;
    const removeItem = document.querySelectorAll('.product__modal__cart__content__item__info__close');
    removeItem.forEach(cartItem => {
        cartItem.addEventListener('click', function () {
            // console.log(parseInt(this.getAttribute('value')));
            cart.removeItem(userid, parseInt(this.getAttribute('value')));
            renderCartModal();
        })
    })
    //Add event to add, sub tract
    const listItem = document.querySelectorAll('.product__modal__cart__content__item');
    listItem.forEach(item => {
        const subBtn = item.querySelector('.product__modal__cart__content__item__info__quantity__minus');
        const addBtn = item.querySelector('.product__modal__cart__content__item__info__quantity__plus');
        const amout = item.querySelector('.product__modal__cart__content__item__info__quantity__number');
        const cartId = parseInt(item.querySelector('.product__modal__cart__content__item__info__close').getAttribute('value'));
        const price = item.querySelector('.product__modal__cart__content__item__info__price');
        subBtn.addEventListener('click', function() {
            var num = parseInt(amout.innerHTML);
            num = num > 1 ? --num : num;
            amout.textContent = num;
            price.innerHTML = "$" + parseInt(price.getAttribute('value')) * num;
            cart.changeAmout(userid, cartId, num);
            renderCartModal();
        })
        addBtn.addEventListener('click', function () {
            var num = parseInt(amout.innerHTML);
            num = num < 20 ? ++num : num;
            amout.textContent = num;
            price.innerHTML = "$" + parseInt(price.getAttribute('value')) * num;
            cart.changeAmout(userid, cartId, num);
            renderCartModal();
            // document.querySelector('.product__modal__cart__content__total__price').innerHTML = "$"+cart.getTotalMoney(userid);
        })
    })
}

//---------------------------------RENDER NOFITCATION MODAL BOX-------------------



//------------------------------------RENDER PAGE BUTTON-------------------------
function renderPages() {
    var html = ''
    const maxPageShow = data.getMaxPages(products,perPage)
    for (var i = 1; i <= maxPageShow; i++) {
        html += `<div class="product__content__paging__item" value=${i}>${i}</div>`
    }
    const pageContainer = document.querySelector('.paging__item__box');
    pageContainer.innerHTML = html;
    if (pageContainer.querySelector('.product__content__paging__item'))
        pageContainer.querySelector('.product__content__paging__item').classList.add('active');
}




//Thay đổi cách hiển thị sản phẩm
//showChoice == 1 là block
//showChoice == 2 là inline
function displayProductType(showChoice) {
    if (showChoice === 1) {
        document.querySelectorAll('.product__item').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__img__box').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__info__group').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__info__name').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__info__price').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__info__price span').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__info__text').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__button').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__button.button__details').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.product__item__button.button__addtocart').forEach(e => {
            e.classList.remove('active')
        })
    }
    else if (showChoice === 2) {
        document.querySelectorAll('.product__item').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__img__box').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__info__group').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__info__name').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__info__price').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__info__price span').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__info__text').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__button').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__button.button__details').forEach(e => {
            e.classList.add('active')
        })
        document.querySelectorAll('.product__item__button.button__addtocart').forEach(e => {
            e.classList.add('active')
        })
    }
}


//Thay đổi display type khi width bé hơn 700px
window.onresize = function () {
    if (screen.availWidth <= 700) {
        showChoice = 1;
        const displayBlockBtn = document.querySelector('.display__item__block');
        if (!displayBlockBtn.classList.contains('active')) {
            displayBlockBtn.classList.add('active');
            document.querySelector('.display__item__inline').classList.remove('active');
        }
        renderProduct();
    }
}


//Thêm hiệu ứng vào khi chọn thêm sản phẩm ở ngoài modal detail
function addEventOpenCart(obj,product) {
    const modalBg = document.querySelector('.background__modal__box');
    const modalCart = document.querySelector('.product__modal__cart__container')
    obj.addEventListener('click', function () {
        const userid = user.checkLoginId();
        if (userid === null) {
            showNofications("fas fa-sign-in-alt", "Thêm Thất Bại", "Vui lòng đăng nhập tài khoản", 0);
            return;
        }
        cart.addItem(userid, parseInt(product.getAttribute('value')), 1, null);
        renderCartModal();
        modalBg.classList.add('active');
        modalCart.classList.add('active');
    })
}

//Thay đổi tiêu đề hiển thị từ trang 1 - maxpage
function changePagingTitle(perPage) {
    const title = document.querySelector('.product__page__txt__info');
    if (data.getMaxPages(products, perPage) > 0) {
        title.textContent = "Hiển thị trang 1 - " + data.getMaxPages(products, perPage) + " có tất cả " + data.getSize(products) + " sản phẩm";
    }
    else title.textContent = "Hiển thị 0 sản phẩm";
}

renderFeaturedProduct();
function renderFeaturedProduct() {
    const list = data.getFeaturedProducts(3);
    if (!list) return null;
    const productContainer = document.querySelector('.product__content__featured')
    var html = '<h4 class="title__filter">SẢN PHẨM MỚI</h4>';
    list.forEach(item => {
        html += `<a class="product__content__featured__item">
				<div class="product__content__featured__item__left">
					<img src="${item.imgList[0]}" alt=""  onerror ="imgError(this)">
				</div>
				<div class="product__content__featured__item__right">
					<div class="product__content__featured__item__right__name">${item.name}</div>
					<div class="product__content__featured__item__right__star">`
                    for (var i = 1; i <= 5; i++) {
                        if (i <= item.rate) {
                            html += '<i class="fas fa-star"></i>';
                        }
                        else {
                            html += '<i class="fas fa-star" color="white"></i>';
                        }
                    }		 
		html +=		`</div>
					<div class="product__content__featured__item__right__price">$${money.vnd(item.price)} <span><s>$${money.vnd(item.price_old)}</s></span></div>
				</div>
			</a>`;
    })
    productContainer.innerHTML = html;
}

renderLeftMenuBrand();
function renderLeftMenuBrand() {
    const brandChoice = document.querySelector('.product__content__filter__catagories ul');
    var html = '';
    arrBrand.forEach((item) => {
        html += `<li><a href="#" class="product__name__brand__filter">${item.toUpperCase()} <span class="title__brand__count">(0)</span></a></li>`;
    })
    brandChoice.innerHTML = html;
    countProduct();
}


renderLeftMenuPrice();
function renderLeftMenuPrice() {
    const priceChoice = document.querySelector('.product__content__filter__price');
    var html = `<h4 class="title__filter">THEO GIÁ</h4>
				<div class="product__content__filter__price__box">`;
    for (let i = 0; i < arrPriceList; i++){
        html += `div class="product__content__filter__price__item filter__price__item__${i + 1}">
							<label for="price__${i + 1}" class="radio__label">
								<input id="price__${i + 1}" name="price" type="radio" value="${arrPriceList[i].price_min},${arrPriceList[i].pricemax}">
								<p>${arrPriceList[i].text}</p>
								<span></span>
							</label>
				</div>`;
    }
    arrPriceList.forEach((item,i) => {
        html += `<div class="product__content__filter__price__item filter__price__item__${i + 1}">
							<label for="price__${i + 1}" class="radio__label">
								<input id="price__${i + 1}" name="price" type="radio" value="${item.price_min},${item.price_max}">
								<p>${item.text}</p>
								<span></span>
							</label>
				</div>`;
    })
    priceChoice.innerHTML = html;
}

renderLeftMenuRamAndRom('ram', arrRamList);
renderLeftMenuRamAndRom('rom',arrRomList);
function renderLeftMenuRamAndRom(typeText, list) {
    const selected = document.querySelector('.product__content__filter__'+typeText);
    if (selected !== null) {
        var html = `<h4 class="title__filter">BỘ NHỚ ${typeText.toUpperCase()} </h4>
            <div class="product__content__filter__${typeText}__box">`;
        for (let i = 0; i < list.length; i++) {
            html += `<div class="filter__${typeText} filter__${typeText}__1" value="${list[i]}">${list[i]} GB</div>`;
        }
        html += `</div>`;
        selected.innerHTML = html;
    }
}



// Thông báo ngọt ngào
var timeOut;
function showNofications(iconName, title, description, isSuccess) {
    clearTimeout(timeOut);
    const sweetModal = document.querySelector('.modal__notification__sweet');
    const sweetModalContent = document.querySelector('.modal__notification__sweet__content')
    sweetModalContent.innerHTML = `<div class="modal__notification__sweet__content__left"><i class="${iconName}"></i></div>
        <div class="modal__notification__sweet__content__right">
            <h4>${title}</h4>
            <p>${description}</p>
        </div>`;
    const sweetLeftContent = document.querySelector('.modal__notification__sweet__content__left')
    if (isSuccess) {
        if (sweetLeftContent.classList.contains('failed'))
            sweetLeftContent.classList.remove('failed');
        sweetLeftContent.classList.add('success');
    }
    else {
        if (sweetLeftContent.classList.contains('success'))
            sweetLeftContent.classList.remove('success');
        sweetLeftContent.classList.add('failed');
    }

    if (sweetModal.classList.contains('hide')) {
        sweetModal.classList.remove('hide');
    }
    // document.querySelector('.modal__notification__sweet.hide').classList.remove('hide')
    sweetModal.classList.add('show')
    timeOut = setTimeout(function () {
        sweetModal.classList.add('hide')
        sweetModal.classList.remove('show')
    }, 2500)
}
// Thông báo ngọt ngào

function clickToBuyModalCart() {
    const loginId = user.checkLoginId();
    order.makeOrder(cart.getCartList(loginId), loginId, Date.now());
    renderCartModal();
    window.location.href ="./ViewOrderPage.html";
}



function countProduct() {
    // const arrBrand = ['samsung', 'xiaomi', 'apple', 'vivo', 'oppo', 'vsmart'];
    const brandNumbers = document.querySelectorAll('.title__brand__count');
    brandNumbers.forEach((box, i) => {
        box.innerHTML = "(" + data.countProductBrand(products,arrBrand[i]) + ")";
    })
}

