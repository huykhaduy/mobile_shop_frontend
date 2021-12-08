// Xử lí dropdown avatar
var openDropdownAvt = document.querySelector('#openDropdownAvt')
var dropdownAvt = document.querySelector('#dropdownAvt')
openDropdownAvt.addEventListener('click', function(){
 dropdownAvt.classList.toggle('active')
})

const removeModal = () => {
  window.onclick = function(e) {
   if (e.target.id !== 'dropdownAvt' && e.target.id !== 'openDropdownAvt') {
     dropdownAvt.classList.remove('active')
   }
   if (e.target.id !== 'notificationModal' && e.target.id !== 'openNotificationModal') {
     notificationModalbox.classList.remove('active')
   }
   if (e.target.id !== 'modalLanguages' && e.target.id !== 'openModalLanguages') {
     modalLanguage.classList.remove('active')
    }
    if (previousDropDownChoice) {
      previousDropDownChoice.classList.remove('active')
    }
 }
}
removeModal()

// Xử lí dropdown Component Menu
var cpnMenu = document.querySelectorAll('.component__menu__dropdown__box li')
var cpnMenuItem = document.querySelectorAll('.component__menu__dropdown__item__box')
cpnMenu.forEach(btn => {
  btn.addEventListener('click', function(e){
    cpnMenuItem.forEach(acc => {
      if(e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
        acc.classList.remove('active')
        cpnMenu.forEach((btn) => btn.classList.remove('active'))
      }
    })
    btn.nextElementSibling.classList.add('active')
    btn.classList.toggle('active')
  })
})

// Xử lí modal thông báo
var notificationModalbox = document.querySelector('#notificationModal')
var notificationModalboxOpen = document.querySelector('#openNotificationModal')
notificationModalboxOpen.addEventListener('click', function(){
  notificationModalbox.classList.toggle('active')
  notificationModalboxOpen.classList.toggle('active')
})

// Đóng khi click vào backgorund modal thêm sửa xóa
var bgModal = document.querySelector('.bg__modal__box')
bgModal.addEventListener('click', function () {
  this.classList.remove('active')
  actionModal.classList.remove('active')
  actionModalOpen.classList.remove('active')
  adminInfoModal.classList.remove('active')
  modalCRUDDelete.classList.remove('active')
  modalCRUDEdit.classList.remove('active')
  modalCRUDAdd.classList.remove('active')
  modalUserShow.classList.remove('active')
  modalUserDel.classList.remove('active')
})


// Xử lí modal action
var actionModal = document.querySelector('.header__icon__action__modalbox')
var actionModalOpen = document.querySelector('.admin__content__right__header__icon__action')
var actionMadalClose = document.querySelector('.icon__action__modalbox__close')
actionModalOpen.addEventListener('click', function(){
  this.classList.toggle('active')
  bgModal.classList.add('active')
  actionModal.classList.add('active')
})
actionMadalClose.addEventListener('click', function(){
  actionModal.classList.remove('active')
  bgModal.classList.remove('active')
  actionModalOpen.classList.remove('active')
})

// Xử lí modal language
var modalLanguage = document.querySelector('#modalLanguages')
var modalLanguageOpen = document.querySelector('#openModalLanguages') 
modalLanguageOpen.addEventListener('click', function(){
  modalLanguage.classList.toggle('active')
})


// Xử lí admin info modal
var adminInfoModal = document.querySelector('.header__admin__info__modalbox')
var adminInfoModalOpen = document.querySelector('.header__admin__info__group')
var adminInfoModalClose = document.querySelector('.admin__info__modalbox__header__close')
adminInfoModalOpen.addEventListener('click', function(){
  adminInfoModal.classList.add('active')
  bgModal.classList.add('active')
})
adminInfoModalClose.addEventListener('click', function(){
  adminInfoModal.classList.remove('active')
  bgModal.classList.remove('active')
})


// Xử lí admin left
var adminLeftOpen = document.querySelector('.open__menu__left__content')
var adminLeft = document.querySelector('.admin__content__left')
var adminContent = document.querySelector('.admin__content')
var adminRight= document.querySelector('.admin__content__right')
var adminRightHeader = document.querySelector('.admin__content__right__header')
adminLeftOpen.addEventListener('click', function(){
  adminLeft.classList.toggle('active')
  adminContent.classList.toggle('active')
  adminRight.classList.toggle('active')
  adminRightHeader.classList.toggle('active')
})


// Xử lí chat box admin
var chatBoxOpen = document.querySelector('.open__chat__box__admin')
var chatBoxClose = document.querySelector('.chat__box__admin__header__close')
var chatBox = document.querySelector('.chat__box__admin')
chatBoxOpen.addEventListener('click', function(){
  chatBox.classList.add('active')
  chatBoxOpen.classList.add('active')
})

chatBoxClose.addEventListener('click', function(){
  chatBox.classList.remove('active')
  chatBoxOpen.classList.remove('active')
})


// Xử lí chuyển trang
var menuItems = document.querySelectorAll('.admin__content__left__main__menu ul li a')
var sectionRights = document.querySelectorAll('.section_right')
menuItems.forEach((e,i) => {
  e.addEventListener('click', function () {
    var index = sectionRights[i]
    document.querySelector('.admin__content__left__main__menu ul li a.active').classList.remove('active')
    document.querySelector('.section_right.active').classList.remove('active')
    this.classList.add('active')
    index.classList.add('active')
  })
})


let fileHandle;
async function saveProductButton(getStr) {
  [fileHandle] = await window.showOpenFilePicker();
  let fileData = await fileHandle.getFile();
  let text = await fileData.text();
  let string = text + "\n" + getStr;
  text = text +"\n"+ string;
  let stream = await fileHandle.createWritable();
  await stream.write(text);
  await stream.close();
}


function getContentProductFromStorage() {
  let myValue = data.getProducts();
  if (myValue.length == 0 || !myValue) return '';
  var myString = 'const listProducts = [';
  myValue.forEach(item => {
    myString += `new Product('${item.name}',${item.price_old},${item.price},['black', 'white', 'blue'],['${item.imgList[0]}','${item.imgList[1]}','${item.imgList[2]}'],${item.ram},${item.rom},'${item.brand}'),`
    myString += '\n';
  })
  myString = myString.substring(0, myString.length - 2);
  myString += '];'
  return myString;
}

// constructor(username, password, email, phone, name, address, isAdmin)
function getContentUserFromStorage() {
  let myValue = user.getUsers();
  if (myValue.length == 0 || !myValue) return '';
  var myString = 'const account = [';
  myValue.forEach(item => {
    myString += `new User('${item.username}','${item.password}','${item.email}','${item.phone}','${item.name}','${item.address}',${item.isAdmin}),`
    myString += '\n';
  })
  myString = myString.substring(0, myString.length - 2);
  myString += '];'
  return myString;
}

//constructor(cartList, userid, orderTime)
//  constructor(productId, product_price, soluong, productColor, productImg)
function getContentOrderFromStorage() {
  let myValue = order.getOrders();
  if (myValue.length == 0 || !myValue) return '';
  var myString = 'const orderList = [';
  myValue.forEach(item => {
    myString += `new Order([`;
    item.cartList.forEach(cartItem => {
      myString += `new CartItem(${cartItem.productId}, ${cartItem.product_price}, ${cartItem.soluong},null,'${cartItem.productImg}'),`
      myString += '\n';
    })
    myString = myString.slice(0, myString.length - 2);
    myString += `)],${item.userid},${item.orderTime}),`;
  })
  myString = myString.slice(0, myString.length - 1);
  myString += `];`
  return myString;
}