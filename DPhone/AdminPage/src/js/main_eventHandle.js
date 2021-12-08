//----------------TỰ ĐỘNG CHUYỂN TRANG VỀ TRANG SẢN PHẨM NẾU KHÔNG CÓ QUYỀN ADMIN---------------
checkIsAdmin();


//-----------------------MODAL THÔNG BÁO (MODAL ALERT)----------------------------
//Hiện modal thông báo
var myTimeOut;
function addShowModalAlert(icon, title, message, color, obj) {
    if (obj === undefined) {
        clearTimeout(myTimeOut);
        addRemoveModalAlert();
        setTimeout(function () {
            modalAlert.querySelector('.modal__alert__content .modal__alert__left').innerHTML = `<i class="${icon}"></i>`;
            modalAlert.querySelector('.modal__alert__content .modal__alert__right .modal__alert__right__title').innerHTML = title;
            modalAlert.querySelector('.modal__alert__content .modal__alert__right .modal__alert__right__text').innerHTML = message;
            modalAlert.style.backgroundColor = color;
            modalAlert.classList.remove('hide');
            modalAlert.classList.add('show');
            modalProcess.classList.add('active');
            myTimeOut = setTimeout(function () {
                addRemoveModalAlert();
                // console.log("Me end");
            }, 5000);
        }, 300);
        return;
    }
    obj.addEventListener('click', function () {
        clearTimeout(myTimeOut);
        addRemoveModalAlert();
        setTimeout(function () {
            modalAlert.querySelector('.modal__alert__content .modal__alert__left').innerHTML = `<i class="${icon}"></i>`;
            modalAlert.querySelector('.modal__alert__content .modal__alert__right .modal__alert__right__title').innerHTML = title;
            modalAlert.querySelector('.modal__alert__content .modal__alert__right .modal__alert__right__text').innerHTML = message;
            modalAlert.style.backgroundColor = color;
            modalAlert.classList.remove('hide');
            modalAlert.classList.add('show');
            modalProcess.classList.add('active');
            myTimeOut = setTimeout(function () {
                addRemoveModalAlert();
                // console.log("Me end");
            }, 5000);
        }, 300);
    })
}

//Đóng modal thông báo
addRemoveModalAlert(modalClose);
function addRemoveModalAlert(obj) {
    if (obj === undefined) {
        modalAlert.classList.remove('show');
        modalAlert.classList.add('hide');
        modalProcess.classList.remove('active');
        return;
    }
    obj.addEventListener('click', function () {
        modalAlert.classList.remove('show');
        modalAlert.classList.add('hide');
        modalProcess.classList.remove('active');
    })
}
//----------------------------------------------------------------------


//--------------------------HIỆN THÔNG TIN CỦA USER---------------------
const userDetails = user.getUserId(user.checkLoginId());
const adminInfo_name = document.querySelector('.header__admin__info h4');
const adminInfo_rol = document.querySelector('.header__admin__info p');
const userInfoModal_name = document.querySelector('.admin__info__modalbox__avatar__info h4');
const rightUserInfo_name = document.querySelector('.admin__content__left__menu__avatar__right__info h4');
const userInfoModal_email = document.querySelector('.admin__info__modalbox__avatar__info h5 span');
const userInfoShowTime = document.querySelector('.modalbox__avatar__time__item__left');
adminInfo_name.innerText = userDetails.username;
rightUserInfo_name.innerText = userDetails.username;
userInfoModal_name.innerText = userDetails.name;
userInfoModal_email.innerText = userDetails.email;
setInterval(function () {
    userInfoShowTime.innerText = time.getHourSecStr(Date.now());
}, 1000);



//------------------------------USER LOGOUT-----------------------------
function adminLogout() {
    user.logout();
    location.reload();
}

function toProductPage() {
    window.location.href = "../ProductPage/ProductPage.html";
}

function checkIsAdmin() {
    if (!user.isUserAdmin()) {
        toProductPage();
    }
}