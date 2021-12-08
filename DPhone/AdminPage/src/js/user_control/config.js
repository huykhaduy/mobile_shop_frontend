// Xử lí trang account

// // Check All
// const handleCheckAll = () => {
//     document.querySelector('.check-All-Icon').classList.toggle('active')
// }
// // Select Account
// const handleSelectAccount1 = () => {
//     document.querySelector('.account__select__item-1').classList.toggle('active')
// }
// const handleSelectAccount2 = () => {
//     document.querySelector('.account__select__item-2').classList.toggle('active')
// }

const checkAllUsers = user_control.querySelector('.account__management__content__left__header-checkAll');
const addUser = user_control.querySelector('.account__select__item-1');
const userSelectSort = user_control.querySelector('.account__select__item-2');
const userContainer = user_control.querySelector('.account__management__content__left__body');
const inputUserKeyWord = user_control.querySelector('#inputUserKeyword');
var previousDropDownChoice;
var findUserKeyWord = '';

//--------------------------USER MODAL----------------------------------------------------------------
const modalUserShow = document.querySelector('.modal__user__show');
const modalUserDel = document.querySelector('.modal__user__delete');


