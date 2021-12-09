const userBtnGroup = document.querySelector('.product__header__icon__box__item__1');
const noneUserBtnGroup = document.querySelector('.product__header__icon__box__item__2');
const adminBtnGroup = document.querySelector('.product__header__icon__box__item__3');
//------------------GET LOGIN STATUS--------------------------
const userId = user.checkLoginId();
if (userId === null) {
    showGroup(noneUserBtnGroup,userBtnGroup,adminBtnGroup);
}
else if (userId !== null) {
    changeTitle();
    if (user.isUserAdmin() === true) {
        showGroup(adminBtnGroup,userBtnGroup,noneUserBtnGroup);
    }
    else {
        showGroup(userBtnGroup,adminBtnGroup,noneUserBtnGroup);
    }
}

const dphoneIconHome = document.querySelector('.product__header____logo');
dphoneIconHome.addEventListener('click', function () {
    window.location.href = "../ProductPage/ProductPage";
})

const orderViewBtn = document.querySelector('.product__header__icon__user');
orderViewBtn.addEventListener('click', function () {
    window.location.href = "../ProductPage/ViewOrderPage";
})

const logOutBtn = document.querySelectorAll('.product__header__icon__log-out');
logOutBtn.forEach(item => {
    item.addEventListener('click', function () {
        user.logout();
        window.location.href = "../ProductPage/ProductPage";
    })
})


//---------------------------XỬ LÝ LOGIN------------------------------------
const loginAccountBtn = document.querySelector('.product__header__icon__sign-in');
const registerAccountBtn = document.querySelector('.product__header__icon__sign-up');
const closeLoginForm = document.querySelector('.close-login-form');
const userNameLoginInput = document.querySelector('#username-login');
const passwordLoginInput = document.querySelector('#password-login');
const loginBtnConfirm = document.querySelector('.login-form-continue-btn');
const errorUserName = document.querySelector('.err-message-username');
const errorPassword = document.querySelector('.err-message-password');

userNameLoginInput.addEventListener('keyup', eneterListener);
passwordLoginInput.addEventListener('keyup', eneterListener);

closeLoginForm.addEventListener('click', function () {
    modalBg.classList.remove('active');
    loginFormContainer.classList.remove('active');
})

loginAccountBtn.addEventListener('click', function () {
    modalBg.classList.add('active');
    loginFormContainer.classList.add('active');
})

var myTime;
loginBtnConfirm.addEventListener('click', function (e) {
    clearTimeout(myTime);
    if (user.isSameUserName(userNameLoginInput.value)) {
        let result = user.login(userNameLoginInput.value, passwordLoginInput.value);
        if (result) {
            location.reload();
        }
        else {
            if (result === null) {
                showNofications("fas fa-lock", "Đăng nhập thất bại", "Tài khoản của bạn đã bị chặn", 0);
                errorUserName.classList.remove('show');
                errorPassword.classList.remove('show');
            }
            else {
                errorUserName.classList.remove('show');
                errorPassword.classList.add('show');
                myTime = setTimeout(function () {
                    errorPassword.classList.remove('show');
                }, 5000)
            }
        }
    }
    else {
        errorUserName.classList.add('show');
        errorPassword.classList.remove('show');
        myTime = setTimeout(function () {
            errorUserName.classList.remove('show');
        }, 5000);
    }
})
//--------------------------------------------------------------------

registerAccountBtn.addEventListener('click', function () {
    window.location.href = "../SignUpPage/sign-up";
})

const viewAdminBtn = document.querySelector('.product__header__icon__admin');
viewAdminBtn.addEventListener('click', function () {
    window.location.href = "../AdminPage/Admin";
})


function changeTitle() {
    const changeHelloTexts = document.querySelectorAll('.product__header__sayhello span');
    changeHelloTexts.forEach(item => item.innerHTML = user.getUserId(userId).username);
}

function showGroup(group,otherGroup1,otherGroup2) {
    group.style.display = 'flex';
    hideGroup(otherGroup1);
    hideGroup(otherGroup2);
}

function hideGroup(group) {
    group.style.display = 'none';
}

function eneterListener(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        loginBtnConfirm.click();
    }
}