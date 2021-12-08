//This is class define, the main of websites
//Eachpage of this websites need this to run prefectly
class Product {
    static totalProduct = 0; // danh dau
    constructor(name, price_old, price, colorList, imgList, ram, rom, brand) {
        this.productId = data.getProducts() === null ? ++Product.totalProduct : data.getLargestId() + 1;
        this.name = name;
        this.price_old = price_old;
        this.price = price;
        this.colorList = colorList;
        this.imgList = imgList;
        this.ram = ram;
        this.rom = rom;
        this.brand = brand.toLowerCase();
        this.rate = (Math.floor(Math.random() * (50 - 25 + 1)) + 25) / 10;
    }
}

class CartItem {
    static totalCart = 0;
    constructor(productId, product_price, soluong, productColor, productImg) {
        this.cartId = ++CartItem.totalCart;
        this.productId = productId;
        this.product_price = product_price;
        // this.productColor = productColor;
        this.productColor = null;
        this.soluong = soluong;
        this.productImg = productImg;
        this.total = soluong * product_price;
	this.storeProduct = data.getProductId(productId);
    }
}

class Order {
    static total = 0;
    constructor(cartList,userid,orderTime) {
        this.orderId = order.getOrders() === null ? ++Order.total : order.getLargestId() + 1;
        this.cartList = cartList;
        this.userid = userid;
        // this.orderTime = Date.now();
        this.orderTime = time.toTimeSpan(orderTime);
        this.userProfile = user.getUserId(userid);
        this.status = false;
    }
}

class User {
    static total = 0;
    cartList = [];
    constructor(username, password, email, phone, name, address, isAdmin) {
        this.userID = user.getUsers() === null ? ++User.total : user.getLargestId()+1;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.address = address;
        this.isAdmin = isAdmin;
	this.isActive = true;
	this.ngayTao = Date.now();
    }
}

class History{
    static total = 0;
    constructor(timeShow, textShow) {
        this.historyId = ++History.total;
        this.timeShow = time.toTimeSpan(timeShow);
        this.textShow = textShow;
    }
}

class data {

    //Load product to LocalStorage
    //Return true if successful loaded else return false
    static loadProducts(listData) {
        localStorage.listProducts = JSON.stringify(listData);
        if (localStorage.listProducts) {
            return true;
        }
        return false;
    }

    //Get products list from localStorage
    //Return list if successful else return null
    static getProducts() {
        if (localStorage.listProducts) {
            return JSON.parse(localStorage.listProducts);
        }
        return null;
    }

    //Get number of product
    static getSize(list) {
        // const list = data.getProducts();
        if (!list) return 0;
        var count = 0;
        list.forEach(()=>count++);
        return count;
    }

    static getCurrentSize() {
        const list = data.getProducts();
        return list.length;
    }

    static getLargestId() {
        const list = data.getProducts();
        if (!list || list.length === 0) return 0;
        return parseInt(list[list.length - 1].productId);
    }

    //Get product from list index
    static getProductFromTo(fromNumber, toNumber) {
        const list = data.getProducts();
        if (!list) return null;
        var result = [];
        fromNumber = fromNumber < 0 ? 0 : fromNumber;
        toNumber = toNumber >= list.length ? list.length-1 : toNumber;
        for (var i = fromNumber; i <= toNumber; i++){
            result.push(list[i]);
        }
        return result;
    }
    //Get product at page
    static getProductAtPage(page, max_products_show = 8) {
        if (page < 1) return null;
        const list = data.getProducts();
        if (!list) return null;
        var size = list.length
        const max_Pages = round(size / max_products_show);
        if (page > max_Pages) return null;
        var result = [];
        for (let i = (page-1)*max_products_show; i < page*max_products_show && i < size; i++) {
            result.push(list[i]);
        }
        return result;
    }   
    //Overloading get product page
    static getProductAtPage(list, page, max_products_show = 8) {
        if (page < 1) return null;
        // const list = data.getProducts();
        if (!list) return null;
        var size = list.length
        const max_Pages = round(size / max_products_show);
        if (page > max_Pages) return null;
        var result = [];
        for (let i = (page - 1) * max_products_show; i < page * max_products_show && i < size; i++) {
            result.push(list[i]);
        }
        return result;
    }

    //Get max page of product
    static getMaxPages(list,max_products_show) {
        // const list = data.getProducts();
        if (!list) return null;
        var size = list.length;
        const max_Pages = round(size / max_products_show);
        // console.log(max_Pages);
        return max_Pages;
    }

    //Remove product from localStorage and update it to localStorage
    //Return true if successful else return false
    static removeProductId(deleteProductID) {
        const list = data.getProducts();
        if (!list) {
            return false;
        }
        var isDeleted = false;
        list.forEach((item, i) => {
            if (item.productId === deleteProductID) {
                list.splice(i, 1);
                if (data.loadProducts(list))
                    isDeleted = true;
            }
        })
        return isDeleted;
    }

    //Add product to localStorage
    static addProduct(name, price_old, price, colorList, imgList, ram, rom, brand) {
        try {
            const product = new Product(name, price_old, price, colorList, imgList, ram, rom, brand);
            const list = data.getProducts();
            list.push(product);
            data.loadProducts(list);
        } catch (e) {
            console.error("Error: Can't add product. " + e.message);
        }
    }

    //Get product at id, return this product if true else return false;
    static getProductId(myproductId) {
        const list = data.getProducts();
        if (!list) return null;
        var product = null;
        list.forEach((item) => {
            if (item.productId === myproductId) {
                product = item;
            }
        })
        return product;
    }

    //Change product information, no return
    static changeProductInfo(productId, name, price_old, price, colorList, imgList, ram, rom, brand) {
        const list = data.getProducts();
        if (!list) return null;
        list.forEach(item => {
            if (item.productId === productId) {
                item.name = name;
                item.price = price;
                item.price_old = price_old;
                item.colorList = colorList;
                item.imgList = imgList;
                item.ram = ram;
                item.rom = rom;
                item.brand = brand;
            }
        })
        data.loadProducts(list);
    }

    //Update img list
    static updateProductImg(productId,listImg) {
        const list = data.getProducts();
        if (!list) return null;
        list.forEach(item => {
            if (item.productID === productId) {
                item.imgList = listImg;
            }
        })
        data.loadProducts(list);
    }

    static searchProductsName(myList,keywords) {
        // const myList = data.getProducts();
        if (keywords === "" || keywords === null) return myList;
        if (!myList) return null;
        keywords = keywords.toLowerCase();
        var result = [];
        myList.forEach(item => {
            var str = item.name.toLowerCase().toString();
            if (str.includes(keywords)) {
                result.push(item);
            }
        })
        return result;
    }

    static filterProductsPrice(myList,price_min, price_max) {
        if (price_min >= price_max || price_max <= price_min) return null;
        if (price_min === null || price_max === null) return myList;
        // const myList = data.getProducts();
        if (!myList) return null;
        var result = [];
        myList.forEach(item => {
            if (item.price >= price_min && item.price <= price_max)
                result.push(item);
        })
        return result;
    }

    static filterProductRam(myList,ram) {
        if (ram < 0) return null;
        // const myList = data.getProducts();
        if (!myList) return null;
        if (ram === null) return myList;
        var result = [];
        myList.forEach(item => {
            if (item.ram === ram)
                result.push(item);
        })
        return result;
    }

    static filterProductRom(myList,rom) {
        // const myList = data.getProducts();
        if (rom < 0) return null;
        if (!myList) return null;
        if (rom === null) return myList;
        var result = [];
        myList.forEach(item => {
            if (item.rom === rom)
                result.push(item);
        })
        return result;
    }

    static filterProductBrand(myList,brand) {
        // const myList = data.getProducts();
        if (!myList) return null;
        var result = [];
        if (brand === '') return myList;
        myList.forEach(item => {
            if (item.brand.includes(brand))
                result.push(item);
        })
        return result;
    }

    static sortProducts(listProducts, isIncrease) {
        if (!listProducts) return null;
        if (isIncrease !== 0 && isIncrease !== 1) return null;
        var result = [];
        var k;
        var size = listProducts.length;
        var myobj;
        for (var i = 0; i < size - 1; i++) {
            k = i;
            myobj = listProducts[i];
            for (var j = i+1; j < size; j++) {
                if (isIncrease === 1) {
                    if (listProducts[j].price < myobj.price) {
                        myobj = listProducts[j];
                        k = j;
                    }
                }
                else {
                    if (listProducts[j].price > myobj.price) {
                        myobj = listProducts[j];
                        k = j;
                    }
                }
            }
            listProducts[k] = listProducts[i];
            listProducts[i] = myobj;
            result.push(myobj);
        }
        result.push(listProducts[size-1]);
        return result;
    }
    

    //Show newest product
    static getFeaturedProducts(soLuongShow) {
        const list = data.getProducts();
        if (!list) {
            return null;
        }
        var result = [];
        let size = list.length;
        for (let i = size - 1; i >= size - soLuongShow && i >= 0; i--) {
            result.push(list[i]);
        }
        return result;
    }

    static countProductBrand(list,name) {
        if (!list) return 0;
        var count = 0;
        name = name.toLowerCase();
        list.forEach(item => {
            if (item.brand === name)
                count++;
        })
        return count;
    }

    static getMaxProductPrice() {
        const list = data.getProducts();
        if (!list) return 0;
        var max = list[0].price;
        list.forEach(item => {
            if (max < item.price) {
                max = item.price;
            }
        })
        return max;
    }
}

class user {
    //Load user to LocalStorage
    static loadUsers(account) {
        localStorage.account = JSON.stringify(account);
        if (localStorage.account)
            return true;
        return false;
    }
    //Get user list
    static getUsers() {
        if (localStorage.account) {
            return JSON.parse(localStorage.account);
        }
        return null;
    }
    //Get user id
    static getUserId(userid) {
        const listUsers = user.getUsers();
        if (!listUsers) return null;
        var accountz = null;
        listUsers.forEach(account => {
            if (account.userID === userid) {
                accountz = account;
            }
        })
        return accountz;
    }
	
    static getLargestId() {
        const listUsers = user.getUsers();
        if (!listUsers || listUsers.length === 0) return 0;
        return listUsers[listUsers.length - 1].userID;
    }

    static addUser(username, password, email, phone, name, address) {
        try {
            const newUser = new User(username, password, email, phone, name, address, false);
            const list = user.getUsers();
            list.push(newUser);
            user.loadUsers(list);
        } catch (e) {
            console.error("Eror: Can't add user" + e.message());
        }
    }
    //Change user id
    static removeUserId(userid) {
        const list = user.getUsers();
        if (!list) {
            return false;
        }
        var isDeleted = false;
        var name;
        list.forEach((myuser, i) => {
            if (myuser.userID === userid) {
                list.splice(i, 1);
                name = myuser.username;
                if (user.loadUsers(list)) {
                    isDeleted = true;
                }
            }
        })
        if (isDeleted) {
            history.addNode(Date.now(), "Người dùng " + name + " đã bị xóa");
        }
        return isDeleted;
    }
    //Change info
    static changeUserInfo(userid, username, password, email, phone, name, address) {
        const list = user.getUsers();
        if (!list) return false;
        list.forEach((item) => {
            if (item.userID === userid) {
                item.username = username;
                item.password = password;
                item.email = email;
                item.name = name;
                item.phone = phone;
                item.address = address;
            }
        })
        return true;
    }
    //Update user cart
    static updateCart(userid, newCartList) {
        const list = user.getUsers();
        if (!list) return false;
        var isSet = false;
        newCartList = cart.getNoDuplicatesProducts(newCartList);
        list.forEach((item) => {
            if (item.userID === userid) {
                item.cartList = newCartList;
                user.loadUsers(list);
                isSet = true;
            }
        })
        return isSet;
    }
    //Set default value for login state or apply new login state
    static setLoginState(userid) {
        if (userid === null) {
            localStorage.loginId = 0;
        }
        else {
            if (Number.isInteger(userid)) {
                localStorage.loginId = userid;
            }
        }
    }

    //Check password and return userid if password iss true;
    static login(username, password) {
        const list = user.getUsers();
        if (!list) return false;
        var isUserid = null;
        let isActive = true;
        list.forEach((item) => {
            if (item.username === username && item.password === password) {
                isUserid = item.userID;
                isActive = item.isActive;
            }
        })
        if (!isActive) {
            return null;
        }
        user.setLoginState(isUserid);
        if (isUserid) {
            history.addNode(Date.now(), "Người dùng " + username + " đã đăng nhập!");
            
            return true;
        }
        return false;
    }

    static logout() {
        user.setLoginState(null);
    }

    static checkLoginId() {
        if (localStorage.loginId) {
            const a = parseInt(localStorage.loginId);
            if (a > 0) return a;
        }
        return null;
    }

    static isSameUserName(username) {
        const list = user.getUsers();
        if (!list || list.length === 0) return false;
        for (let i = 0; i < list.length; i++) {
            if (list[i].username === username) return true;
        }
        return false;
    }

    static isUserAdmin() {
        const userid = user.checkLoginId();
        if (userid === null) return false;
        if (user.getUserId(userid).isAdmin) return true;
        return false;
    }

    static findUser(searchStr) {
        const list = user.getUsers();
        if (!list) return null;
        var result = [];
        var isNumber = false;
        if (!isNaN(parseInt(searchStr)))
            isNumber = true;
        list.forEach(User => {
            console.log(User.email.includes(searchStr));
            if (isNumber) {
                if (User.userID === parseInt(searchStr) || User.username.includes(searchStr) || User.email.includes(searchStr) || User.phone.includes(searchStr) || User.name.includes(searchStr) || User.address.includes(searchStr)) {
                    result.push(User);
                }
            }
            else {
                if (User.username.includes(searchStr) || User.email.includes(searchStr) || User.phone.includes(searchStr) || User.name.includes(searchStr) || User.address.includes(searchStr)) {
                    result.push(User);
                }
            }
        })
        return result;
    }
}

class cart {
    //Return cart list
    static getCartList(userid) {
        const myUser = user.getUserId(userid);
        if (myUser)
            return myUser.cartList;
        return null;
    }

    //Get cart list no duplicates
    static getNoDuplicatesProducts(list) {
        // const list = cart.getCartList(userid);
        if (!list)
            return null;
        var result = [];
        var hasProductId = [];
        list.forEach((myCart, i) => {
            if (hasProductId.indexOf(i)===-1) {
                var soluong = myCart.soluong;
                hasProductId.push(i);
                for (let j = i + 1; j < list.length; j++)
                    if (cart.Equals(myCart, list[j])) {
                        soluong += list[j].soluong;
                        hasProductId.push(j);
                    }
                result.push(new CartItem(myCart.productId, myCart.product_price, soluong, myCart.productColor, myCart.productImg));
            }
            // else {
            //     //do nothing
            // }
        })
        return result;
    }

    //Get cart id
    static getCardId(userid, cartid) {
        const list = cart.getCartList(userid);
        if (!list) return null;
        var myCart = null;
        list.forEach(item => {
            if (item.cartId === cartid)
                myCart = item;
        })
        return myCart;
    }

    static changeAmout(userid, cartid, number) {
        const list = cart.getCartList(userid);
        if (!list) return null;
        for (let i = 0; i < list.length; i++){
            if (list[i].cartId === cartid) {
                list[i].soluong = number;
                list[i].total = number * list[i].product_price;
                user.updateCart(userid, list);
            }
        }
    }
    //Add item
    static addItem(userid, productId, soluong, productColor) {
        // const myUser = user.getUserId(userid);
        const myList = cart.getCartList(userid);
        if (!myList) return false;
        const myproduct = data.getProductId(productId);
        // console.log(myproduct);
        myList.push(new CartItem(productId, myproduct.price, soluong, productColor, myproduct.imgList[0]));
        if (user.updateCart(userid, myList)) {
            
        }
            return true;
        return false;
    }
    //Remove item
    static removeItem(userid, cartID) {
        // const myUser = user.getUserId(userid);
        const myList = cart.getCartList(userid);
        if (!myList) return false;
        var isDeleted = false;
        myList.forEach((item, i) => {
            if (item.cartId === cartID) {
                myList.splice(i, 1);
                user.updateCart(userid, myList);
                isDeleted = true;
            }
        })
        return isDeleted;
    }
    //Remove all item
    static removeAllItem(userid) {
        const myList = [];
        if (user.updateCart(userid, myList))
            return true;
        return false;
    }

    //Get total money
    static getTotalMoney(userid) {
        // const myUser = user.getUserId(userid);
        const myList = cart.getCartList(userid);
        if (!myList) return 0;
        var tong = 0;
        myList.forEach((cart) => {
            tong += cart.total;
        })
        return tong;
    }

    static getProductsAmount(userid) {
        const list = cart.getCartList(userid);
        var sum = 0;
        list.forEach((item) => {
            sum += item.soluong;
        })
        return sum;
    }

    //Overide
    static Equals(cartItemA, cartItemB) {
        if (!cartItemA || !cartItemB) return false;
        if (cartItemA.productId !== cartItemB.productId) return false;
        if (cartItemA.productColor !== cartItemB.productColor) return false;
        return true;
    }
}

class order{
    static loadOrder(orderList) {
        localStorage.orderList = JSON.stringify(orderList);
        if (localStorage.orderList)
            return true;
        return false;
    }

    static getOrders() {
        if (localStorage.orderList) {
            return JSON.parse(localStorage.orderList);
        }
        return null;
    }

    static getOrderId(orderid) {
        const myOrder = order.getOrders();
        if (!myOrder) return null;
        for (const box of myOrder) {
            // console.log(box.orderId+" "+orderid);
            if (box.orderId === orderid) return box;
        }
        return null;
    }

    static getLargestId() {
        const myList = order.getOrders();
        if (!myList || myList.length === 0) return 0;
        return myList[myList.length - 1].orderId;
    }


    //Add order from cart
    static makeOrder(cartList, userid, orderTime) {
        if (!cartList) return false;
        const orderList = order.getOrders();
        if (!orderList) return false;
        orderList.push(new Order(cartList, userid, orderTime));
        order.loadOrder(orderList);
        cart.removeAllItem(userid);
        history.addNode(Date.now(), "Người dùng " + user.getUserId(userid).username + " đã đặt 1 đơn hàng!");
        return true;
    }

    static changeOrderStatus(orderid,status) {
        const list = order.getOrders();
        if (!list) return false;
        for (const orderItem of list) {
            if (orderItem.orderId === orderid) {
                orderItem.status = status;
                return true;
            }
        }
        return false;
    }
    //Add order from buy now btn
    static addBuyNowOrder(productId, soluong, productColor, userid, orderTime) {
        const orderList = order.getOrders();
        if (!orderList) return false;
        var myCart;
        try {
            // console.log(productId + " " + data.getProductId(productId).price + " " + soluong + " " + productColor + " " + data.getProductId(productId).productImg);
            myCart = new CartItem(productId, data.getProductId(productId).price, soluong, productColor, data.getProductId(productId).imgList[0]);
            var myCartList = [];
            myCartList.push(myCart);
            orderList.push(new Order(myCartList, userid, Date.now()));
            order.loadOrder(orderList);
            history.addNode(Date.now(), "Người dùng " + user.getUserId(userid).username + " đã đặt 1 đơn hàng!");
            return true;
        }
        catch (err) {
            console.error("Không thể thêm đơn hàng! " + err);
            return false;
        }
    }
    
    static getOrdersInTime(fromTimeStr, toTimeStr) {
        const orderList = order.getOrders();
        if (!orderList) {
            return null;
        }

        var fromTime = time.toTimeSpan(fromTimeStr);
        var toTime = time.toTimeSpan(toTimeStr);

        var result = [];
        orderList.forEach(item => {
            if (item.orderTime >= fromTime && item.orderTime <= toTime) {
                result.push(item);
            }
        })
        return result;
    }

    static getTotalOrderMoney(orderList) {
        if (!orderList) return 0;
        var sum = 0;
        orderList.forEach(item => {
            item.cartList.forEach(cart => {
                sum += cart.total;
            })
        })
        return sum;
    }
}


class form{
    static validateName(txtName) {
        var value = true;
        var str = "Tên hợp lệ";
        if (txtName.length < 3){
            value = false;
            str = "Tên của bạn phải có ít nhất 3 kí tự!";
            return {value,str};
        }
        if (/\d+/.test(txtName)){
            value = false;
            str = "Vui lòng không nhập số trong tên của bạn!";
            return {value,str};
        };
        return {value,str};
    }

    static validatePhone(txtPhone) {
        var value = true;
        var str = "Số điện thoại hợp lệ";
        if (/\D+/.test(txtPhone)) {
            value = false;
            str = "Số điện thoại không được chứa chữ cái!";
            return { value, str };
        }
        if (txtPhone.length < 8 || txtPhone.length > 11) {
            value = false;
            str = "Số điện thoại từ 8-11 chữ số";
            return { value, str };
        }
        return { value, str };
    }

    static validateEmail(txtEmail) {
        var value = true;
        var str = "Email hợp lệ";
        if (/\S+@\S+\.\S+/.test(txtEmail)) {
            return { value, str };
        }
        value = false;
        str = "Email không đúng định dạng!";
        return { value, str };
    }
    
    static validateUserName(txtUserName) {
        var value = true;
        var str = "Tên người dùng hợp lệ";
        if (txtUserName.length < 4) {
            value = false;
            str = "Tên của bạn phải có ít nhất 4 kí tự!";
            return { value, str };
        }
        if (/\d+/.test(txtUserName)) {
            value = false;
            str = "Vui lòng không nhập số trong tên của bạn!";
            return { value, str };
        };
        return { value, str };
    }

    static validatePassword(txtPassword,txtRePassword) {
        var value = true;
        var str = "Mật khẩu hợp lệ";
        // var value2 = true;
        // var str2 = "Xác nhận mật khẩu hợp lệ";
        if (txtPassword.length < 5) {
            value = false;
            str = "Mật khẩu phải có ít nhất 5 kí tự";
        }
        return { value, str };
    }

}

class menu {
    static filterProudct(list, brand, priceMin, priceMax, ramList, romList, search) {
        // const list = data.getProducts();
        changeTextOfSortField();
        if (!list)
            return null;
        var result = list;
        if (search !== null && search !=='') {
            result = data.searchProductsName(result,search);
        }
        if (brand)
            result = data.filterProductBrand(result, brand);
        if (priceMax) {
            result = data.filterProductsPrice(result, priceMin, priceMax);
        }
        var subResult = [];
        if (typeof ramList != "undefined" && ramList.length > 0) {
            var tempList = [];
            for (let i = 0; i < ramList.length; i++) {
                tempList = tempList.concat(data.filterProductRam(result, ramList[i]));
                // console.log(data.filterProductRam(result, ramList[i]));
            }
            subResult = tempList;
            if (subResult.length == 0) return subResult;
            else result = subResult;
        }

        if (typeof romList != "undefined" && romList.length > 0) {
            var tempList = [];
            for (let i = 0; i < romList.length; i++) {
                tempList = tempList.concat(data.filterProductRom(result, romList[i]));
            }
            subResult = tempList;
            if (subResult.length == 0) return subResult;
            else result = subResult;
        }
        return result;
    }
}


class time {
    static toTimeSpan(dateStr) {
        var timespan = new Date(dateStr);
        return timespan.getTime();
    }

    static getNowDate() {
        var today = new Date();
        var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
        return date;
    }

    static getDateTimeStr(timeSpan) {
        var date = new Date(timeSpan);
        var str = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        return str;
    }

    static getHourStr(timeSpan) {
        var date = new Date(timeSpan);
        var hour = date.getHours();
        if (hour < 10) {
            hour = "0" + date.getHours();
        }
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + date.getMinutes();
        }
        var str = hour + ":" + minutes;
        return str;
    }

    static getHourSecStr(timeSpan) {
        var date = new Date(timeSpan);
        var hour = date.getHours();
        if (hour < 10) {
            hour = "0" + date.getHours();
        }
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + date.getMinutes();
        }
        var seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = "0" + date.getSeconds();
        }
        var str = hour + ":" + minutes + ":" + seconds;
        return str;
    }

    static getDateStr(timeSpan) {
        var date = new Date(timeSpan);
        var str = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        return str;
    }

    static getMonth(timeSpan) {
        var date = new Date(timeSpan);
        return parseInt(date.getMonth() + 1);
    }

    static getDate(timeSpan) {
        var date = new Date(timeSpan);
        return parseInt(date.getDate());
    }

    static getMaxDayOfMonth(month) {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) return 31;
        if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
        return 29;
    }
}

class money{
    static vnd(tien) {
        let nf = new Intl.NumberFormat('en-US');
        return nf.format(tien) +"₫";
    }
}

class history{

    static loadHistory(HistoryList) {
        localStorage.HistoryList = JSON.stringify(HistoryList);
        if (localStorage.HistoryList)
            return true;
        return false;
    }

    static getList() {
        if (localStorage.HistoryList) {
            return JSON.parse(localStorage.HistoryList);
        }
        return null;
    }

    static addNode(timeSpan,textShow) {
        var list = [];
        if (history.getList()) {
            list = history.getList();
        }
        list.push(new History(timeSpan,textShow));
        history.loadHistory(list);
        return true;
    }

    static removeNode(historyID) {
        const list = history.getList();
        if (!list) {
            return false;
        }
        list.forEach((item,i) => {
            if (item.historyId == historyID)
                list.splice(i,1);
        })
        return true;
    }

    static getNewest(numberItemShow) {
        const list = history.getList();
        if (!list) {
            return false;
        }
        var result = [];
        for (var i = list.length-1; i >= 0 && numberItemShow>0; i--) {
            if (list[i]) {
                numberItemShow--;
                result.push(list[i]);
            }
        }
        return result;
    }
}

function imgError(obj) {
    obj.src = './img/default.png';
}

function round(x) {
    if (x % 1 === 0) {
        return x;
    }
    return Math.trunc(x) + 1;
}

function changeTextOfSortField() {
    document.querySelector('.selectField p').innerText = "Sắp Xếp Theo Giá";
}