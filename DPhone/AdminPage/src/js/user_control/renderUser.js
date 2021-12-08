renderUser(user.getUsers());
function renderUser(list, keyword = null) {
    var myUserList = list;
    if (keyword && keyword.length > 0) {
        myUserList = user.findUser(list,keyword);
    }
    var html = "";
    myUserList.forEach(item => {
        html += `
            <div class="account__management__content__left__body__item">
                <div class="account__item__checkbox">
                    <label for="checkbox-account"><i class="fas fa-check"></i></label>
                    <input type="checkbox" id="checkbox-account">
                </div>`;
        if (item.isAdmin)
            html += `<div class="account__item__icon"><i class="fas fa-tools"></i></div>`
        else
            html +=`<div class="account__item__icon"><i class="fas fa-user"></i></div>`
        
        html +=`<div class="account__item__avatar">
                    <img src="./admin_img/admin-avatar-chatbox.-2jpg.jpg" alt="">
                </div>
                <div class="account__item__info">
                    <h4>${item.username}`
        if (user.checkLoginId() === item.userID) html += ' (Bạn)';
        html+=`</h4 >
                    <p>${item.email}</p>
                </div>
                <div class="account__item__registration_date">
                    <p>Ngày Đăng Kí</p>
                    ${time.getDateTimeStr(item.ngayTao)}
                </div>`
                
        if (item.isActive)
            html += `<div class="account__item__status active">
                        <p>Trạng Thái</p>
                    <span>Hoạt Động</span>`
        else
            html += `<div class="account__item__status">
                        <p>Trạng Thái</p>
                    <span>Bị chặn</span>`
        html+= `</div>
                <div class="account__item__drop-down">
                    <i class="fas fa-ellipsis-v"></i>
                    <div class="account__item__drop-down-modal">
                        <div class="account__item__drop-down-modal-item account__item__drop-down-edit" onclick="openViewUserInformation(${item.userID})">
                            <i class="fas fa-info-circle"></i>Xem thông tin
                        </div>
                        <div class="account__item__drop-down-modal-item account__item__drop-down-block" onclick="openEditUserInformation(${item.userID})">
                            <i class="fas fa-edit"></i>Sửa thông tin
                        </div>
                        <div class="account__item__drop-down-modal-item account__item__drop-down-remove" onclick="openDeleteUserModal(${item.userID})">
                            <i class="fas fa-trash-alt"></i>Xóa người dùng
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    userContainer.innerHTML = html;
    //Thêm hiệu ứng click vào check box
    const checkBoxs = userContainer.querySelectorAll('.account__item__checkbox label')
    checkBoxs.forEach(e => {
        e.addEventListener('click', () => {
            e.classList.toggle('active')
        })
    })
    //Thêm hiệu ứng mở hộp thoại modal thêm sửa xóa ng dùng
    const modalDropDownAccountBtn = document.querySelectorAll('.account__item__drop-down')
    for (let i = 0; i < modalDropDownAccountBtn.length; i++) {
        modalDropDownAccountBtn[i].addEventListener('click', function (e){
            const modalDropDownShow = modalDropDownAccountBtn[i].querySelector('.account__item__drop-down-modal');
            modalDropDownShow.classList.toggle('active');
            if (modalDropDownShow) {
                if (previousDropDownChoice && previousDropDownChoice!=modalDropDownShow)
                    previousDropDownChoice.classList.remove('active');
                previousDropDownChoice = modalDropDownShow;
            }
            e.stopPropagation();
        })
    }
    
    const accountTotal = user_control.querySelector('.account__management__content__right__header p');
    accountTotal.innerText = user.getUsers().length;
    const countAccountArr = user_control.querySelectorAll('.account__right__body__item p');
    countAccountArr[0].innerText = user.countPropertyInList('isAdmin');
    countAccountArr[1].innerText = user.getUsers().length - user.countPropertyInList('isAdmin');
    countAccountArr[2].innerText = user.countPropertyInList('isActive');
    countAccountArr[3].innerText = user.getUsers().length - user.countPropertyInList('isActive');
}


function renderUserModal(type,id=null) {
    var html = '';
    const userContainModal = document.querySelector('.modal__user__show');
    if (type === 1) {
        html +=
            `
                <div class="modal__user__show__close" onclick="closeThisUserModal()" style="color:var(--green-color)"><i class="far fa-times-circle"></i></div>
                <div class="modal__user__show__file">
                    <div class="modal__user__show__file__title" style="color:var(--green-color)">Thêm người dùng</div>
                </div>
                <div class="modal__user__show__info">
                    <div class="modal__user__show__info__item">
                        <label for="ID">ID</label>
                        <input type="text" placeholder="ID" class="inputID" readonly>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="name">Họ và tên</label>
                        <input type="text" placeholder="Họ và tên" id="hovaten">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="username">Tên đăng nhập</label>
                        <input type="text" placeholder="Username" id="username">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="password">Mật khẩu</label>
                        <input type="password" placeholder="Password" id="password">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email" id="email">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="role">Chức vụ</label>
                        <select class="modal__show___input__cate" required="required">
                            <option value="user">Người dùng</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="address">Địa chỉ</label>
                        <input type="text" placeholder="Địa chỉ" id="diachi">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="numberphone">Số điện thoại</label>
                        <input type="text" placeholder="Số điện thoại" id="phone">
                    </div>
                </div>
                <div class="modal__user__show__save" onclick="addUserConfirmationModal()" style="background-color:var(--green-color)">Thêm người dùng</div>`
        userContainModal.innerHTML = html;
        modalUserShow.querySelector('.modal__user__show__info__item input').value = user.getLargestId()+1;
    }
    else if (type === 2) {
        html += `
                <div class="modal__user__show__close" onclick="closeThisUserModal()" style="color:var(--blue-color)"><i class="far fa-times-circle"></i></div>
                <div class="modal__user__show__file">
                    <div class="modal__user__show__file__title" style="color:var(--blue-color)">Xem thông tin</div>
                </div>
                <div class="modal__user__show__info">
                    <div class="modal__user__show__info__item">
                        <label for="ID">ID</label>
                        <input type="text" placeholder="ID" class="inputID" readonly >
                    </div>
                     <div class="modal__user__show__info__item">
                        <label for="name">Họ và tên</label>
                        <input type="text" placeholder="Họ và tên" id="hovaten" style="cursor: not-allowed" readonly>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="username">Tên đăng nhập</label>
                        <input type="text" placeholder="Username" id="username" style="cursor: not-allowed" readonly>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="password">Mật khẩu</label>
                        <input type="text" placeholder="Password" id="password" style="cursor: not-allowed" readonly>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email" id="email" style="cursor: not-allowed" readonly>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="role">Chức vụ</label>
                        <select class="modal__show___input__cate" style="cursor: not-allowed" required="required" disabled>
                            <option value="user">Người dùng</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="address">Địa chỉ</label>
                        <input type="text" placeholder="Địa chỉ" id="diachi" style="cursor: not-allowed" readonly>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="numberphone">Số điện thoại</label>
                        <input type="text" placeholder="Số điện thoại" id="phone" style="cursor: not-allowed" readonly>
                    </div>
                </div>`
        userContainModal.innerHTML = html;
        const data = user.getUserId(parseInt(id));
        if (!data || data.length === 0) throw "Không tìm thấy người dùng!";
        const list = modalUserShow.querySelectorAll('.modal__user__show__info__item input');
        const isAdmin = modalUserShow.querySelector('.modal__user__show__info__item .modal__show___input__cate');
        list[0].value = data.userID;
        list[1].value = data.name;
        list[2].value = data.username;
        list[3].value = data.password;
        list[4].value = data.email;
        list[5].value = data.address;
        list[6].value = data.phone;
        isAdmin.value = data.isAdmin === true ? 'admin':'user';
    }

    else if (type === 3) {
        html += `
                <div class="modal__user__show__close" onclick="closeThisUserModal()" style="color:var(--yellow-color)"><i class="far fa-times-circle"></i></div>
                <div class="modal__user__show__file">
                    <div class="modal__user__show__file__title" style="color:var(--yellow-color)">Sửa người dùng</div>
                </div>
                <div class="modal__user__show__info">
                     <div class="modal__user__show__info__item">
                        <label for="name">Họ và tên</label>
                        <input type="text" placeholder="Họ và tên" id="hovaten">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="username">Tên đăng nhập</label>
                        <input type="text" placeholder="Username" id="username" style="cursor: not-allowed" readonly>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="password">Mật khẩu</label>
                        <input type="text" placeholder="Password" id="password">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email" id="email">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="role">Chức vụ</label>
                        <select class="modal__show___input__cate" required="required">
                            <option value="user">Người dùng</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="role">Trạng thái</label>
                        <select class="modal__show___input__cate" required="required">
                            <option value="active">Hoạt động</option>
                            <option value="banned">Bị chặn</option>
                        </select>
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="address">Địa chỉ</label>
                        <input type="text" placeholder="Địa chỉ" id="diachi">
                    </div>
                    <div class="modal__user__show__info__item">
                        <label for="numberphone">Số điện thoại</label>
                        <input type="text" placeholder="Số điện thoại" id="phone">
                    </div>
                </div>
                <div class="modal__user__show__save" onclick="clickToEditUserInformation(${id})" style="background-color:var(--yellow-color)">Sửa người dùng</div>`
        userContainModal.innerHTML = html;
        const data = user.getUserId(parseInt(id));
        if (!data || data.length === 0) throw "Không tìm thấy người dùng!";
        const list = modalUserShow.querySelectorAll('.modal__user__show__info__item input');
        var cateList = modalUserShow.querySelectorAll('.modal__user__show__info__item .modal__show___input__cate');
        list[0].value = data.name;
        list[1].value = data.username;
        list[2].value = data.password;
        list[3].value = data.email;
        list[4].value = data.address;
        list[5].value = data.phone;
        cateList[0].value = data.isAdmin === true ? 'admin' : 'user';
        cateList[1].value = data.isActive === true ? 'active' : 'banned';
    }
    else if (type === 4) {
        var data = user.getUserId(id);
        if (!data || data.length === 0) throw "Không tìm thấy người dùng!";
        html +=`
             <div class="modal__user__delete-close" onclick="closeDeleteUserModal()"><i class="far fa-times-circle"></i></div>
                <div class="modal__user__delete__icon"><i class="far fa-trash-alt"></i></div>
                <div class="modal__user__delete__title">
                    Bạn có muốn xóa người dùng ${data.username}(${data.name}) không ?
                </div>
                <div class="modal__user__delete__btn__group">
                    <div class="modal__user__delete-btn delete-btn-cancel" onclick="closeDeleteUserModal()">Hủy</div>
                    <div class="modal__user__delete-btn delete-btn-ok" onclick="clickToRemoveUserModal(${data.userID})">Xóa</div>
                </div>
            </div >`
        modalUserDel.innerHTML = html;
    }
    
}

//------------------------MODAL ADD USER------------------------
function addOpenUserModal() {
    renderUserModal(1);
    modalUserShow.classList.toggle('active');
    bgModal.classList.toggle('active');
}

function addUserConfirmationModal() {
    const list = modalUserShow.querySelectorAll('.modal__user__show__info__item input');
    const isAdmin = modalUserShow.querySelector('.modal__user__show__info__item .modal__show___input__cate').value === 'admin' ? true : false;
    try {
        user.addUser(list[2].value, list[3].value, list[4].value, list[6].value, list[1].value, list[5].value, isAdmin);
        addShowModalAlert('fas fa-check-circle', 'Thêm thành công', 'Người dùng ' + list[2].value + ' đã được thêm !', successColor);
        renderUser(user.getUsers());
        closeThisUserModal();
    }
    catch (e) {
        addShowModalAlert('fas fa-times-circle', 'Thêm thất bại', e, errorColor);
    }
}

function closeThisUserModal() {
    modalUserShow.classList.remove('active');
    bgModal.classList.remove('active');
}
//-----------------------------------------------------------------



//-------------------------MODAL VIEW INFOMATION--------------------
function openViewUserInformation(id) {
    renderUserModal(2, id);
    modalUserShow.classList.toggle('active');
    bgModal.classList.toggle('active');
}
//------------------------------------------------------------------



//-----------------------MODAL EDIT INFORMATION---------------------
function openEditUserInformation(id) {
    renderUserModal(3, id);
    modalUserShow.classList.toggle('active');
    bgModal.classList.toggle('active');
}

function clickToEditUserInformation(id) {
    const list = modalUserShow.querySelectorAll('.modal__user__show__info__item input');
    const catList = modalUserShow.querySelectorAll('.modal__user__show__info__item .modal__show___input__cate');
    var isAdmin = catList[0].value === 'admin' ? true : false;
    var isActive = catList[1].value === 'active' ? true : false;
    try {
        user.changeUserInfo(id,list[1].value, list[2].value, list[3].value, list[5].value, list[0].value, list[4].value, isAdmin, isActive);
        addShowModalAlert('fas fa-check-circle', 'Sửa thành công', 'Người dùng ' + list[1].value + ' đã được sửa !', successColor);
        renderUser(user.getUsers());
        closeThisUserModal();
    }
    catch (e) {
        addShowModalAlert('fas fa-times-circle', 'Sửa thất bại', e, errorColor);
    }
}
//------------------------------------------------------------------



//-----------------------MODAL DELETE USER ------------------------
function openDeleteUserModal(id) {
    renderUserModal(4, id);
    modalUserDel.classList.toggle('active');
    bgModal.classList.toggle('active');
}

function closeDeleteUserModal() {
    modalUserDel.classList.remove('active');
    bgModal.classList.remove('active');
}

function clickToRemoveUserModal(id) {
    try {
        if (id === user.checkLoginId()) throw "Không thể xóa tài khoản của chính bạn!";
        var name = user.getUserId(parseInt(id)).username;
        user.removeUserId(parseInt(id));
        addShowModalAlert('fas fa-check-circle', 'Xóa thành công', 'Người dùng ' + name + ' đã bị xóa !', successColor);
        renderUser(user.getUsers());
        
    }
    catch (e) {
        addShowModalAlert('fas fa-times-circle', 'Xóa thất bại', e, errorColor);
    }
    closeDeleteUserModal();
}
//------------------------------------------------------------------