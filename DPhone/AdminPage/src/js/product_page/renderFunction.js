// Render product table list

renderListProduct()
function renderListProduct() {
  const numberofPages = round(data.getCurrentSize() / maxProductShow);
  if (currentPage > numberofPages && currentPage>1) {
    currentPage--;
  }
  const crudTable = product_page.querySelector('.crud__container__table tbody');
  var list;
  var allList;
  if (inputSearchProductKeyWord.length > 0) {
    allList = data.searchProductsName(data.getProducts(), inputSearchProductKeyWord);
  } else allList = data.getProducts();
  if (!allList) {
    crudTable.innerHTML = '';
    renderPageBtns(allList);
    return;
  }
  list = data.getProductAtPage(allList, currentPage, maxProductShow);
  if (!list) {
    crudTable.innerHTML = '';
    renderPageBtns(list);
    return;
  }
  var htmls = '';
  list.forEach(e => {
    if (e.imgList == null) {
        e.imgList = ['default.png', 'default.png', 'default.png'];
    }
       //Line 44
       // <div class="crud__action__btn crud__action__btn-add" onclick="addBtnAction()"><i class="fas fa-plus-circle"></i></div>
      htmls += `
      <tr>
        <td><img src="${e.imgList[0]}" alt="" onerror="imgError(this)"></td>
        <td>#${e.productId}</td>
        <td>${e.name}</td>
        <td>${e.ram}/${e.rom} GB</td>
        <td>${capitalize(e.brand)}</td>
        <td>${money.vnd(e.price_old)}</td>
        <td>${money.vnd(e.price)}</td>
        <td>
          <div class="crud__action__btn__group">
     
            <div class="crud__action__btn crud__action__btn-edit" onclick="editBtnAction(${e.productId})"><i class="fas fa-edit"></i></div>
            <div class="crud__action__btn crud__action__btn-remove" onclick="removeBtnAction(${e.productId})"><i class="fas fa-trash-alt"></i></div>
          </div>
        </td>
      </tr>
    `;
    })
  crudTable.innerHTML = htmls;
  renderPageBtns(allList);
}

function addBtnAction() {
  clearSearchProduct();
  openCURDAddModal();
  renderArrBrandChoice(inputAddProductBrand);
  inputAddProductId.value = data.getLargestId() + 1;
}

function editBtnAction(productID) {
  const productItem = data.getProductId(productID);
  inputProductId.value = productID;
  inputProductName.value = productItem.name;
  inputProductRam.value = productItem.ram;
  inputProductRom.value = productItem.rom;
  inputProductPriceOld.value = productItem.price_old;
  inputProductPriceNew.value = productItem.price;
  renderArrBrandChoice(inputProductBrand);
  inputProductBrand.value = productItem.brand;
  
  // Product Image
  for (let i = 0; i < productItem.imgList.length; i++) {
    if (productItem.imgList[i] !== defaultImage) {
      editImageArr[i] = productItem.imgList[i];
      inputProductImageBackGround[i].classList.add('hide');
      inputProductImage[i].src = productItem.imgList[i];
    }
    else {
      editImageArr[i] = '';
      inputProductImageBackGround[i].classList.remove('hide');
      inputProductImage[i].src = '';
    }
  }
  openCURDEditModal();
}

function removeBtnAction(productID) {
  openCURDRemovelModal();
  document.querySelector('.modal__crud__delete .modal__crud__delete__title').innerHTML = 'Bạn có muốn xóa sản phẩm ' + data.getProductId(productID).name + ' không ?';
  okmodalCRUDDelete.setAttribute('value', productID);
}

function renderPageBtns(list) {
  const pageContainer = product_page.querySelector('.crud__pagination');
  if (data.getSize(list) <= 0) {
    pageContainer.innerHTML = '';
    return;
  }
  const numberofPages = round(data.getSize(list) / maxProductShow);
  var html = '';
  if (numberofPages>1)
    html += '<div class="crud__pagination__item crud__pagination__item-prev"><i class="fas fa-arrow-left"></i></div>';
  for (let i = 1; i <= numberofPages; i++) {
    html += `<div class="crud__pagination__item" value=${i}>${i}</div>`;
  }
  if (numberofPages>1)
    html += '<div class="crud__pagination__item crud__pagination__item-next"><i class="fas fa-arrow-right"></i></div>';
  pageContainer.innerHTML = html;
  changePageClick();
}

function changePageClick() {
  const pageBtns = product_page.querySelectorAll('.crud__pagination__item');
  for (let i = 1; i < pageBtns.length - 1; i++) {
    pageBtns[i].addEventListener('click', function () {
      if (i === currentPage) return;
      currentPage = pageBtns[i].getAttribute('value');
      renderListProduct();
    })
  }
  const numberofPages = round(data.getCurrentSize() / maxProductShow);
  const nextPage = product_page.querySelector('.crud__pagination__item-next');
  if (!nextPage) return;
  nextPage.addEventListener('click', function () {
    if (currentPage >= numberofPages) {
      return;
    }
    currentPage++;
    renderListProduct();
  })
  const previousPage = product_page.querySelector('.crud__pagination__item-prev');
  if (!previousPage) return;
  previousPage.addEventListener('click', function () {
    if (currentPage <= 1) {
      return;
    }
    currentPage--;
    renderListProduct();
  })
  const activePage = product_page.querySelector('.crud__pagination__item.active');
  if (activePage) {
    activePage.classList.remove('active');
  }
  pageBtns[currentPage].classList.add('active');
}

function renderArrBrandChoice(obj) {
  var html = '';
  arrBrand.forEach(item => {
    html += `<option value="${item}">${capitalize(item)}</option>`;
  })
  obj.innerHTML = html;
}


//-----------------------------SEARCH PRODUCT PAGE-------------------------
searchProductInput.addEventListener('keyup', function () {
  currentPage = 1;
  inputSearchProductKeyWord = searchProductInput.value;
  renderListProduct();
})

function clearSearchProduct() {
  searchProductInput.value = '';
  inputSearchProductKeyWord = '';
}


function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}