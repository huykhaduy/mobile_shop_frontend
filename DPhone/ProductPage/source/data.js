const listProducts = [
    //-----------------Tên sản phẩm----Giá miêm yết---Giá bán--Mảng màu(có thể copy ở trên)------ảnh 1-------------------------------ảnh 2--------------------------------ảnh 3---------------------------------------ram --rom--- hãng
    new Product('Samsung Galay Z Flip 3', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-1/Product-1-Đen.jpg', '../ProductPage/img/Img-Product-1/Product-1-Kem%20Ivory.jpg', '../ProductPage/img/Img-Product-1/Product-1-Tím.jpg'], 16, 256, 'Samsung'),
    new Product('Samsung Galaxy Note 20', 1500000, 1043000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-2/Product-2-Đen.jpg', '../ProductPage/img/Img-Product-2/Product-2-Trắng.jpg', '../ProductPage/img/Img-Product-2/Product-2-Vàng%20đồng.jpg'], 6, 128, 'Samsung'),
    new Product('Samsung Galaxy A72', 11230000, 9250000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-3/Product-3-Tím.jpg', '../ProductPage/img/Img-Product-3/Product-3-Trắng.jpg','../ProductPage/img/Img-Product-3/Product-3-Xanh%20dương.jpg'],3,64,'Samsung'),
    new Product( 'Samsung Galaxy ZFold3 5G', 49500000, 47000000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-4/Product-4-Bạc.jpg', '../ProductPage/img/Img-Product-4/Product-4-Đen.jpg', '../ProductPage/img/Img-Product-4/Product-4-Xanh%20rêu.jpg'], 16, 512, 'Samsung'),
    new Product('Samsung Galaxy S21 Plus 5G', 32000000, 25000000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-5/Product-5-Bạc.jpg', '../ProductPage/img/Img-Product-5/Product-5-Đen.jpg', '../ProductPage/img/Img-Product-5/Product-5-Tím.jpg'], 8, 256, 'Samsung'),
    new Product('Samsung Galaxy A52', 12000000, 8500000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-6/Product-6-Trắng.jpg', '../ProductPage/img/Img-Product-6/Product-6-Trắng.jpg', '../ProductPage/img/Img-Product-6/Product-6-Xanh%20dương.jpg'], 6, 168, 'Samsung'),

    new Product('Xiaomi Redmi 10', 1800000, 1500000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-7/Product-7-Trắng.jpg', '../ProductPage/img/Img-Product-7/Product-7-Xám.jpg', '../ProductPage/img/Img-Product-7/Product-7-Xanh%20dương.jpg'], 2, 32, 'Xiaomi'),
    new Product('Xiaomi Mi 11 5G', 40300000, 30500000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-8/Product-8-Trắng.jpg', '../ProductPage/img/Img-Product-8/Product-8-Xám.jpg', '../ProductPage/img/Img-Product-8/Product-8-Xanh%20dương.jpg'], 16, 512, 'Xiaomi'),
    new Product('Xiaomi Redmi 9T', 4500000, 4000000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-9/Product-9-Cam.jpg', '../ProductPage/img/Img-Product-9/Product-9-Xanh%20dương.jpg', '../ProductPage/img/Img-Product-9/Product-9-Xanh%20lá%20cây.jpg'], 3, 32, 'Xiaomi'),
    new Product('Xiaomi Redmi 9', 1080000, 1000000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-10/Product-10-Đen.jpg', '../ProductPage/img/Img-Product-10/Product-10-Tím.jpg', '../ProductPage/img/Img-Product-10/Product-10-Xanh%20lá%20cây.jpg'], 2, 16, 'Xiaomi'),
    new Product('Xiaomi Redmi Note 10', 7500000, 6500000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-11/Product-11-Đen.jpg', '../ProductPage/img/Img-Product-11/Product-11-Trắng.jpg', '../ProductPage/img/Img-Product-11/Product-11-Xanh%20lá.jpg'], 4, 64, 'Xiaomi'),
    new Product('Xiaomi 11T Pro', 36000000, 33500000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-12/Product-12-Trắng.jpg', '../ProductPage/img/Img-Product-12/Product-12-Xám.jpg', '../ProductPage/img/Img-Product-12/Product-12-Xanh%20dương.jpg'], 16, 512, 'Xiaomi'),

    new Product('Oppo Reno5', 46000000, 44900000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-13/Product-13-Bạc.jpg', '../ProductPage/img/Img-Product-13/Product-13-Đen.jpg'], 6, 128, 'Oppo'),
    new Product('Oppo Reno6 5G', 48300000, 46700000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-14/Product-14-Bạc.jpg', '../ProductPage/img/Img-Product-14/Product-14-Đen.jpg'], 16, 512, 'Oppo'),
    new Product('Oppo Reno4 Pro', 34500000, 33000000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-15/Product-15-Den.jpg', '../ProductPage/img/Img-Product-15/Product-15-Trắng.jpg'], 8, 128, 'Oppo'),
    new Product('Oppo Find X3 Pro 5G', 24500000, 19500000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-16/Product-16-Đen.jpg', '../ProductPage/img/Img-Product-16/Product-16-Xanh%20đen.jpg'], 8, 256, 'Oppo'),
    new Product('Oppo A74', 3150000, 2860000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-17/Product-17-Đen.jpg', '../ProductPage/img/Img-Product-17/Product-17-Xanh%20dương.jpg'], 3, 32, 'Oppo'),
    new Product('Oppo A15s', 1500000, 1300000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-18/Product-18-Đen.jpg', '../ProductPage/img/Img-Product-18/Product-18-Xanh%20dương.jpg'], 2, 16, 'Oppo'),

    new Product('Vivo V20 SE', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-19/Product-19-Đen.jpg', '../ProductPage/img/Img-Product-19/Product-19-Xanh%20dương%20nhạt.jpg'], 4, 64, 'Vivo'),
    new Product('Vivo Y21', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-20/Product-20-Trắng.jpg', '../ProductPage/img/Img-Product-20/Product-20-Xanh%20tím.jpg'], 2, 32, 'Vivo'),
    new Product('Vivo X70 Pro 5G', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-21/Product-21-Đen.jpg', '../ProductPage/img/Img-Product-21/Product-21-Xanh.jpg'], 8, 256, 'Vivo'),
    new Product('Vivo Y53s', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-22/Product-22-Đen.jpg', '../ProductPage/img/Img-Product-22/Product-22-Xanh%20tím.jpg'], 3, 32, 'Vivo'),
    new Product('Vivo Y72 5G', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-23/Product-23-Đen.jpg', '../ProductPage/img/Img-Product-23/Product-23-Xanh%20hồng.jpg'], 4, 64, 'Vivo'),
    new Product('Vivo X60 Pro 5G', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-24/Product-24-Đen.jpg', '../ProductPage/img/Img-Product-24/Product-24-Xanh%20tím.jpg'], 8, 128, 'Vivo'),

    new Product('iPhone 12 Pro Max', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-25/Product-25-Đen.jpg', '../ProductPage/img/Img-Product-25/Product-25-Vàng%20đồng.jpg', '../ProductPage/img/Img-Product-25/Product-25-Xanh%20dương.jpg'], 8, 512, 'Apple'),
    new Product('iPhone 12 mini', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-26/Product-26-Trắng.jpg', '../ProductPage/img/Img-Product-26/Product-26-Xanh%20dương.jpg', '../ProductPage/img/Img-Product-26/Product-26-Xanh%20lá.jpg'], 4, 128, 'Apple'),
    new Product('iPhone 12', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-27/Product-27-Đỏ.jpg', '../ProductPage/img/Img-Product-27/Product-27-Trắng.jpg', '../ProductPage/img/Img-Product-27/Product-27-Xanh%20dương.jpg'], 4, 256, 'Apple'),
    new Product('iPhone 11', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-28/Product-28-Trắng.jpg', '../ProductPage/img/Img-Product-28/Product-28-Vàng.jpg', '../ProductPage/img/Img-Product-28/Product-28-Xanh%20lá%20cây.jpg'], 3, 256, 'Apple'),
    new Product('iPhone SE', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-29/Product-29-Đen.jpg', '../ProductPage/img/Img-Product-29/Product-29-Đỏ.jpg', '../ProductPage/img/Img-Product-29/Product-29-Trắng.jpg'], 2, 64, 'Apple'),
    new Product('iPhone XR', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-30/Product-30-Đen.jpg', '../ProductPage/img/Img-Product-30/Product-30-Đỏ.jpg', '../ProductPage/img/Img-Product-30/Product-30-Trắng.jpg'], 4, 64, 'Apple'),

    new Product('Vsmart Active 3', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-31/Product-31-Tím.jpg', '../ProductPage/img/Img-Product-31/Product-31-Xanh%20dương.jpg', '../ProductPage/img/Img-Product-31/Product-31-Xanh%20lá.jpg'], 3, 64, 'Vsmart'),
    new Product('Vsmart Star 5', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-32/Product-32-Đen.jpg', '../ProductPage/img/Img-Product-32/Product-32-Xanh%20lá%20nhạt.jpg', '../ProductPage/img/Img-Product-32/Product-32-Xanh%20ngọc.jpg'], 2, 16, 'Vsmart'),
    new Product('Vsmart Joy 4', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-33/Product-33-Đen.jpg', '../ProductPage/img/Img-Product-33/Product-33-Trắng.jpg', '../ProductPage/img/Img-Product-33/Product-33-Xanh.jpg'], 3, 32, 'Vsmart'),
    new Product('Vsmart Live 4', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-34/Product-34-Đen.jpg', '../ProductPage/img/Img-Product-34/Product-34-Trắng.jpg', '../ProductPage/img/Img-Product-34/Product-34-Xanh%20lá.jpg'], 4, 64, 'Vsmart'),
    new Product('Vsmart Aris', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-35/Product-35-Xám%20đậm.jpg', '../ProductPage/img/Img-Product-35/Product-35-Xanh%20dương.jpg', '../ProductPage/img/Img-Product-35/Product-35-Xanh%20lá.jpg'], 8, 128, 'Vsmart'),
    new Product('Vsmart Aris pro', 2350000, 1954000, ['black', 'white', 'blue'], ['../ProductPage/img/Img-Product-36/Product-36-Đồng.jpg', '../ProductPage/img/Img-Product-36/Product-36-Xám%20đậm.jpg', '../ProductPage/img/Img-Product-36/Product-36-Xanh%20lá.jpg'], 8, 512, 'Vsmart'),
];

if (!data.getProducts())
    data.loadProducts(listProducts);
// constructor(username, password, email, phone, name, address, isAdmin)
const account = [
    new User('admin', 'admin', 'admin@dphone.com', '0987654321', 'Admin Dphone', '273 An Dương Vương HCM', true),
    new User('huykhaduy', '3120410088', 'huykhaduy@gmail.com', '0582036408', 'Huỳnh Khánh Duy', 'Nhà Bè, Tp. Hồ Chí Minh', true),
    new User('thanhdai', '3120410105', 'thanhdaibl@gmail.com', '0993182312', 'Trương Thành Đại', 'Nha Trang', true),
    new User('vandung', '3120410083', 'vandung@gmail.com', '0333211233', 'Nguyễn Văn Dũng', 'Nghĩa Hành, Quãng Ngãi', true),
    new User('thanhdanh', '3120410077', 'thanhdanh@gmail.com', '0987123112','Nguyễn Thanh Danh',' Hóc Môn,Thành phố Hồ Chí Minh',true)
];

if (!user.getUsers())
    user.loadUsers(account);

const orderList = [];
if (!order.getOrders())
    order.loadOrder(orderList);

if (user.getUsers().length <6) {
    for (let i = 0; i < 20; i++) {
        addRandomUserToLocalStorage();
    }
}

if (order.getOrders().length == 0) {
    for (let i = 0; i < 100; i++) {
        randomOrder();
    }
}


//Menu brand list
const arrBrand = ['samsung', 'xiaomi', 'apple', 'vivo', 'oppo', 'vsmart'];
//Menu price list
const arrPriceList = [{ text: 'DƯỚI 2500$', price_min: 0, price_max: 2500 },
    { text: 'TỪ 2500$ TỚI 5000$', price_min: 2500, price_max: 5000 },
    { text: 'TỪ 5000$ TỚI 10000$', price_min: 5000, price_max: 10000 },
    { text: 'TỪ 10000$ TỚI 20000$', price_min: 10000, price_max: 20000 },
    { text: 'TRÊN 20000$', price_min: 20000, price_max: data.getMaxProductPrice() },
];

//Menu ram list
const arrRamList = [2, 3, 4, 6, 8, 16];
//Menu rom list
const arrRomList = [16, 32, 64, 128, 256, 512];

//List history admin page
const historyList = [new History("04 Oct 2021 00:12:00 GMT+7", "Người dùng HuyVan đã đăng nhập"),
    new History("07 Oct 2021 06:31:00 GMT+7", "Người dùng nguyenAnh1 đặt 1 đơn hàng"),
    new History("10 Oct 2021 23:12:00 GMT+7", "Người dùng duycute đặt 1 đơn hàng"),
    new History("14 Oct 2021 03:02:00 GMT+7", "Người dùng duy3908 đã đăng nhập"),
    new History("18 Oct 2021 16:25:00 GMT+7", "Người dùng duy3908 đặt 1 đơn hàng"),
    new History("21 Oct 2021 12:15:00 GMT+7", "Người dùng nguyenAnh1 đặt 1 đơn hàng"),
    new History("27 Oct 2021 05:55:00 GMT+7", "Người dùng duy3908 đã đăng nhập"),
    new History("01 Nov 2021 09:42:00 GMT+7", "Người dùng huynhMinh3 đặt 1 đơn hàng"),
    new History("12 Nov 2021 10:36:00 GMT+7", "Người dùng haHan1998 đã đăng nhập"),
    new History("18 Nov 2021 17:44:00 GMT+7", "Người dùng tranNhu đặt 1 đơn hàng"),
]


if (!user.checkLoginId())
    user.setLoginState();

if (!history.getList()) {
    history.loadHistory(historyList);
}

var products = data.getProducts();
var productDescription = `
<div class="product__modal__description">
    <div class="product__modal__description__item>
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
        <lord-icon
        src="https://cdn.lordicon.com/hciqteio.json"
        trigger="loop"
        colors="primary:#1B9CFC,secondary:#7047ee">
        </lord-icon>
        Tư vấn, hỗ trợ 24/7
    </div>
    <div class="product__modal__description__item>
       <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
    <lord-icon
        src="https://cdn.lordicon.com/slkvcfos.json"
        trigger="loop"
        colors="primary:#1B9CFC,secondary:#7047ee">
    </lord-icon>
        Miễn phí giao hàng tận nơi
    </div>
    <div class="product__modal__description__item>
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/ybgqhhgb.json"
            trigger="loop"
            colors="primary:#1B9CFC,secondary:#7047ee">
        </lord-icon>
        Bảo hành uy tín 24 tháng
    </div>
    <div class="product__modal__description__item>
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/rjzlnunf.json"
            trigger="loop"
            colors="primary:#1B9CFC,secondary:#7047ee">
        </lord-icon>
        Sản phẩm chất lượng, được yêu thích
    </div>
</div>
`;

// //Acount order list (temporary because this was not load :v)
// account[2].cartList.push(new CartItem(2, 104300, 2, null, './img/galaxy-note-20-ultra(1).jpg'));
// account[2].cartList.push(new CartItem(4, 160000, 5, null, './img/galaxy-z-fold3(1).jpg'));
// account[2].cartList.push(new CartItem(5, 160000, 15, null, './img/galaxy-s21-plus(1).jpg'));


// //----------------------------------------------------yyyy/mm/dd---;
// const orderList = [new Order(account[2].cartList, 3, "2021/11/26")];
// if (!order.getOrders())
//     order.loadOrder(orderList);