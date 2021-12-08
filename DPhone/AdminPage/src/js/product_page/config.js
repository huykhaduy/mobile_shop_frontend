var maxProductShow = 10;
var currentPage = 1;

var defaultImage = './img/default.png';
var inputSearchProductKeyWord = '';
const searchProductInput = product_page.querySelector('.crud__container__header__search__box input');

//------------------MODAL REMOVE PRODUCT / MODAL XÓA SẢN PHẨM-----------------
const closemodalCRUDDelete = document.querySelector('.modal__crud__delete-close ')
const cancelmodalCRUDDelete = document.querySelector('.modal__crud__delete-btn.delete-btn-cancel')
const okmodalCRUDDelete = document.querySelector('.modal__crud__delete-btn.delete-btn-ok')
const modalCRUDDelete = document.querySelector('.modal__crud__delete')

//-------------------MODAL EDIT PRODUCT / MODAL SỬA SẢN PHẨM-----------------------
var editImageArr = [];
const closemodalCRUDEdit = document.querySelector('.modal__crud__edit__close')
const saveChangemodalCRUDEdit = document.querySelector('.modal__crud__edit__save')
const modalCRUDEdit = document.querySelector('.modal__crud__edit')
//EDIT ATTRIBUTE 
const productInfo = modalCRUDEdit.querySelectorAll('.modal__crud__edit__info .modal__crud__edit__info__item');
const inputProductId = productInfo[0].querySelector("input");
const inputProductName = productInfo[1].querySelector("input");
const inputProductRam = productInfo[2].querySelector("input");
const inputProductRom = productInfo[3].querySelector("input");
const inputProductBrand = productInfo[4].querySelector('.modal__crud__edit__info .modal__edit__input__cate');
const inputProductPriceOld = productInfo[5].querySelector("input");
const inputProductPriceNew = productInfo[6].querySelector("input");
const inputProductImageBackGround = modalCRUDEdit.querySelectorAll(".crud__edit__file__img");
const inputProductImage = modalCRUDEdit.querySelectorAll(".crud__edit__file__img img");
const inputProductImageDeleteBtn = modalCRUDEdit.querySelectorAll(".img__remove__btn");

//END EDIT ATTRIBUTE

//--------------------MODAL ADD PRODUCT/ MODAL THÊM SẢN PHẨM-----------------------
var addImageArr = ['', '', ''];
const closemodalCRUDAdd = document.querySelector('.modal__crud__add__close')
const saveChangemodalCRUDAdd = document.querySelector('.modal__crud__add__save')
const modalCRUDAdd = document.querySelector('.modal__crud__add')
//EDIT ATTRIBUTE
const productAddInfo = document.querySelectorAll('.modal__crud__add__info__item');
const inputAddProductId = productAddInfo[0].querySelector("input");
const inputAddProductName = productAddInfo[1].querySelector("input");
const inputAddProductRam = productAddInfo[2].querySelector("input");
const inputAddProductRom = productAddInfo[3].querySelector("input");
const inputAddProductBrand = productAddInfo[4].querySelector(".modal__edit__input__cate");
const inputAddProductPriceOld = productAddInfo[5].querySelector("input");
const inputAddProductPriceNew = productAddInfo[6].querySelector("input");
const inputAddProductImage = modalCRUDAdd.querySelectorAll('.crud__add__file__img img');
const inputAddProductDeleteBtn = modalCRUDAdd.querySelectorAll('.crud__add__file__img .img__remove__btn');
//END EDIT ATTRIBUTE
