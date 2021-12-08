// // Check All
checkAllUsers.addEventListener('click', function () {
    const checkAllUsersIcon = checkAllUsers.querySelector('.check-All-Icon');
    checkAllUsersIcon.classList.toggle('active');
    checkAllUser(checkAllUsersIcon.classList.contains('active'));
})

function checkAllUser(isActive) {
    const checkAccounts = user_control.querySelectorAll('.account__item__checkbox label');
    checkAccounts.forEach(item => {
        if (isActive)
            item.classList.add('active');
        else
            item.classList.remove('active');
    })
}

function sortUsersTable(propertyName,isIncrease) {
    var list = user.sortUsers(user.getUsers(), propertyName, isIncrease);
    renderUser(list, findUserKeyWord);
}

inputUserKeyword.addEventListener('keyup', function () {
    findUserKeyWord = inputUserKeyword.value;
    renderUser(user.getUsers(), findUserKeyWord);
})
