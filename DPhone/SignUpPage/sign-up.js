let inputUname = document.querySelector('#yourname');
let inputUsername = document.querySelector('#username');
let inputPassword = document.querySelector('#pass');
let inputRePassword = document.querySelector('#cf-password');
let inputEmail = document.querySelector('#email');
let inputPhoneNumber = document.querySelector('#phone');
let inputAddress = document.querySelector('#address');
const signUpClickBtn = document.querySelector('.submit-sign-up-btn');
const backtoHomeBnt = document.querySelector('.back-to-home-btn');
const listMessage = document.querySelectorAll('.sign-up-err-message');


signUpClickBtn.addEventListener('click', function () {
    if (checkInputName() && checkInputUserName() && checkInputPassword() && checkInputRePassword() && checkInputEmail() &&checkInputPhone() && checkInputAddress()) {
        user.addUser(inputUsername.value, inputPassword.value, inputEmail.value, inputPhoneNumber.value, inputUname.value, inputAddress.value, false);
        user.login(inputUsername.value, inputPassword.value);
        window.location.href = "../ProductPage/ProductPage";
    }
})

backtoHomeBnt.addEventListener("click", function () {
    window.location.href = "../ProductPage/ProductPage";
})

function checkInputName() {
    let returnValue = form.validateName(inputUname.value);
    if (returnValue.value === false) {
        listMessage[0].textContent = returnValue.str;
        showOneMessage(listMessage[0]);
        return false;
    }
    return true;
}


function checkInputUserName() {
    let returnValue = form.validateUserName(inputUsername.value);
    if (returnValue.value === false) {
        listMessage[1].textContent = returnValue.str;
        showOneMessage(listMessage[1]);
        return false;
    }
    if (user.isSameUserName(inputUsername.value) == true) {
        listMessage[1].textContent = "Tên người dùng đã tồn tại";
        showOneMessage(listMessage[1]);
        return false;
    }
    return true;
}

function checkInputPassword() {
    let returnValue = form.validatePassword(inputPassword.value);
    if (returnValue.value === false) {
        listMessage[2].textContent = returnValue.str;
        showOneMessage(listMessage[2]);
        return false;
    }
    return true;
}

function checkInputRePassword() {
    if (inputRePassword.value !== inputPassword.value) {
        listMessage[3].textContent = "Nhập lại mật khẩu không trùng khớp";
        showOneMessage(listMessage[3]);
        return false;
    }
    return true;
}

function checkInputEmail() {
    let returnValue = form.validateEmail(inputEmail.value);
    if (returnValue.value === false) {
        listMessage[4].textContent = returnValue.str;
        showOneMessage(listMessage[4]);
        return false;
    }
    return true;
}

function checkInputPhone() {
    let returnValue = form.validatePhone(inputPhoneNumber.value);
    if (returnValue.value === false) {
        listMessage[5].textContent = returnValue.str;
        showOneMessage(listMessage[5]);
        return false;
    }
    return true;
}

function checkInputAddress() {
    if (inputAddress.value.length < 4) {
        showOneMessage(listMessage[6]);
    }
    return true;
}

function showOneMessage(message) {
    listMessage.forEach(item => {
        item.classList.remove('show');
        message.classList.add('show');
    })
}