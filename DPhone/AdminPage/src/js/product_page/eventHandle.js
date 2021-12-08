
//Change maxProductShow product_page;
const choiceMaxShow = product_page.querySelector('.crud__container__header__show-item__select');
choiceMaxShow.addEventListener('change', function () {
    // console.log(choiceMaxShow.value);
    maxProductShow = choiceMaxShow.value;
    currentPage = 1;
    clearSearchProduct();
    renderListProduct();
})


//----------------------------MODAL SỬA THÔNG TIN SẢN PHẨM (CRUD EDIT MODAL)---------------------------
//Hiện modal sửa thông tin
function openCURDEditModal() {
    modalCRUDEdit.classList.add('active')
    bgModal.classList.add('active')
}
//Đóng modal sửa thông tin
function closeCURDEditModal() {
    modalCRUDEdit.classList.remove('active')
    bgModal.classList.remove('active')
}
//Lưu thông tin của modal sửa thông tin
function saveEditAction() {
    try {
        if (!arrRamList.includes(parseInt(inputProductRam.value))) throw "Ram phải là " + arrRamList.join(", ");
        if (!arrRomList.includes(parseInt(inputProductRom.value))) throw "Rom phải là " + arrRomList.join(", ");
        data.changeProductInfo(parseInt(inputProductId.value), inputProductName.value, inputProductPriceOld.value,
            inputProductPriceNew.value, null, getEditImageArray(editImageArr), inputProductRam.value, inputProductRom.value, inputProductBrand.value)
        renderListProduct();
        addShowModalAlert('fas fa-check-circle', 'Sửa thành công', 'Sản phẩm #' + inputProductId.value + ' đã được sửa !', successColor);
        closeCURDEditModal();
    }
    catch (e) {
        addShowModalAlert('fas fa-times-circle', 'Sửa thất bại', e, errorColor);
    }
}
//Xóa ảnh
removeImageBtn();
function removeImageBtn() {
    inputProductImageDeleteBtn.forEach((item,i) => {
        item.addEventListener('click', function () {
            inputProductImage[i].src = '';
            editImageArr[i] = '';
            inputProductImageBackGround[i].classList.remove('hide');
        })
    })
}



//------------------------------------------------------------------------------------

//-----------------------MODAL XÓA SẢN PHẨM (CURD REMOVE MODAL)----------------------------
function openCURDRemovelModal() {
    modalCRUDDelete.classList.add('active');
    bgModal.classList.add('active');
}

function closeCURDRemovelModal() {
    modalCRUDDelete.classList.remove('active');
    bgModal.classList.remove('active');
}

function clickConfirmModal() {
    try {
        data.removeProductId(parseInt(okmodalCRUDDelete.getAttribute('value')));
        renderListProduct();
        addShowModalAlert('fas fa-check-circle', 'Xóa thành công', 'Sản phẩm #' + okmodalCRUDDelete.getAttribute('value') + ' đã bị xóa !', successColor);
    }
    catch (e) {
        addShowModalAlert('fas fa-times-circle', 'Xóa thất bại', e, errorColor);
    }
    closeCURDRemovelModal();
}
//------------------------------------------------------------------------------------

//-----------------------MODAL THÊM SẢN PHẨM (MODAL ADD)--------------------------

function openCURDAddModal() {
    modalCRUDAdd.classList.add('active')
    bgModal.classList.add('active')
}

function closeCurdAddModal() {
    modalCRUDAdd.classList.remove('active')
    bgModal.classList.remove('active')
}

function clickConfirmAddModal() {
    try {
        if (!arrRamList.includes(parseInt(inputAddProductRam.value))) throw "Ram phải là " + arrRamList.join(", ");
        if (!arrRomList.includes(parseInt(inputAddProductRom.value))) throw "Rom phải là " + arrRomList.join(", ");
        data.addProduct(inputAddProductName.value, inputAddProductPriceOld.value, inputAddProductPriceNew.value,
            null, getEditImageArray(addImageArr), inputAddProductRam.value, inputAddProductRom.value, inputAddProductBrand.value);
        renderListProduct();
        addShowModalAlert('fas fa-check-circle', 'Thêm thành công', 'Sản phẩm ' + inputAddProductName.value + ' đã được thêm!', successColor);
        clearInputAddProductModal();
        closeCurdAddModal();
    }
    catch (e) {
        addShowModalAlert('fas fa-times-circle', 'Thêm thất bại', e, errorColor);
    }
}

removeAddImageBtn();
function removeAddImageBtn() {
    inputAddProductDeleteBtn.forEach((item, i) => {
        item.addEventListener('click', function () {
            inputAddProductImage[i].src = '';
            addImageArr[i] = '';
        })
    })
}

//--------------------------------------------------------------------------------

function clearInputAddProductModal() {
    inputAddProductName.value = '';
    inputAddProductPriceOld.value = '';
    inputAddProductPriceNew.value = '';
    inputAddProductRam.value = '';
    inputAddProductRom.value = '';
}

//Lấy thông tin từ mảng
function getEditImageArray(imageArray) {
    var result = [];
    for (let i = 0; i < 3; i++) {
        if (imageArray[i] !== '') {
            result.push(imageArray[i]);
        }
    }
    while (result.length < 3) result.push(defaultImage);
    return result;
}

//Lấy vị trí trống đầu tiên
function getFirstEmpty(arr) {
    for (let i = 0; i < 3; i++) {
        if (arr[i] === '')
            return i;
    }
    return 3;
}


// listen to the "upload completed" event
widget_add.onUploadComplete(fileInfo => {
    // get a CDN URL from the file info
    let i = getFirstEmpty(addImageArr);
    if (i < 3) {
        addImageArr[i] = fileInfo.cdnUrl;
        inputAddProductImage[i].src = addImageArr[i];
    }
    widget_add.value(null);
});

// listen to the "upload completed" event
widget_edit.onUploadComplete(fileInfo => {
    // get a CDN URL from the file info
    let i = getFirstEmpty(editImageArr);
    if (i < 3) {
        editImageArr[i] = fileInfo.cdnUrl;
        inputProductImage[i].src = editImageArr[i];
        inputProductImageBackGround[i].classList.add('hide');
    }
    widget_edit.value(null);
});