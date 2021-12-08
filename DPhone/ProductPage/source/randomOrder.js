// constructor(username, password, email, phone, name, address, isAdmin);
function randomUser() {
    let sampleName = ['Phương Chi', 'An Bình', 'An Di', 'An Hạ', 'An Hằng', 'An Khê', 'An Nhiên', 'An Nhàn', 'Anh Chi', 'Anh Hương', 'Anh Mai', 'Anh Phương', 'Anh Thi', 'Anh Thy', 'Anh Thơ', 'Anh Thư', 'Anh Thảo', 'Anh Vũ', 'Anh Ðào', 'Ban Mai', 'Bình Minh', 'Bình Yên', 'Bích Chiêu', 'Bích Châu', 'Bích Duyên', 'Bích Hiền', 'Bích Huệ', 'Bích Hà', 'Bích Hạnh', 'Bích Hải', 'Bích Hảo', 'Bích Hậu', 'Bích Hằng', 'Bích Hồng', 'Bích Hợp', 'Bích Lam', 'Bích Liên', 'Bích Loan', 'Bích Nga', 'Bích Ngà', 'Bích Ngân', 'Bích Ngọc', 'Bích Như', 'Bích Phượng', 'Bích Quyên', 'Bích Quân', 'Bích San', 'Bích Thoa', 'Bích Thu', 'Bích Thảo', 'Bích Thủy', 'Bích Trang', 'Bích Trâm', 'Bích Ty', 'Bích Vân', 'Bích Ðiệp', 'Bích Ðào', 'Băng Băng', 'Băng Tâm', 'Bạch Cúc', 'Bạch Hoa', 'Bạch Kim', 'Bạch Liên', 'Bạch Loan', 'Bạch Mai', 'Bạch Quỳnh', 'Bạch Trà', 'Bạch Tuyết', 'Bạch Vân', 'Bạch Yến', 'Bảo Anh', 'Bảo Bình', 'Bảo Châu', 'Bảo Huệ', 'Bảo Hà', 'Bảo Hân', 'Bảo Lan', 'Bảo Lễ', 'Bảo Ngọc', 'Bảo Phương', 'Bảo Quyên', 'Bảo Quỳnh', 'Bảo Thoa', 'Bảo Thúy', 'Bảo Tiên', 'Bảo Trâm', 'Bảo Trân', 'Bảo Trúc', 'Bảo Uyên', 'Bảo Vy', 'Bảo Vân', 'Bội Linh', 'Cam Thảo', 'Chi Lan', 'Chi Mai', 'Chiêu Dương', 'Cát Cát', 'Cát Linh', 'Cát Ly', 'Cát Tiên', 'Cát Tường', 'Cẩm Hiền', 'Cẩm Hường', 'Cẩm Hạnh', 'Cẩm Linh', 'Cẩm Liên', 'Cẩm Ly', 'Cẩm Nhi', 'Cẩm Nhung', 'Cẩm Thúy', 'Cẩm Tú', 'Cẩm Vân', 'Cẩm Yến', 'Di Nhiên', 'Diên Vỹ', 'Diễm Chi', 'Diễm Châu', 'Diễm Hương', 'Diễm Hạnh', 'Diễm Hằng', 'Diễm Khuê', 'Diễm Kiều', 'Diễm Liên', 'Diễm Lộc', 'Diễm My', 'Diễm Phúc', 'Diễm Phương', 'Diễm Phước', 'Diễm Phượng', 'Diễm Quyên', 'Diễm Quỳnh', 'Diễm Thúy', 'Diễm Thư', 'Diễm Thảo', 'Diễm Trang', 'Diễm Trinh', 'Diễm Uyên', 'Diệp Anh', 'Diệp Vy', 'Diệu Anh', 'Diệu Hiền', 'Diệu Hoa', 'Diệu Huyền', 'Diệu Hương', 'Diệu Hạnh', 'Diệu Hằng', 'Diệu Hồng', 'Diệu Lan', 'Diệu Linh', 'Diệu Loan', 'Diệu Nga', 'Diệu Ngà', 'Diệu Ngọc', 'Diệu Nương', 'Diệu Thiện', 'Diệu Thúy', 'Diệu Vân', 'Diệu Ái', 'Duy Hạnh', 'Duy Mỹ', 'Duy Uyên', 'Duyên Hồng', 'Duyên My', 'Duyên Mỹ', 'Duyên Nương', 'Dã Lan', 'Dã Lâm', 'Dã Thảo', 'Dạ Hương', 'Dạ Lan', 'Dạ Nguyệt', 'Dạ Thi', 'Dạ Thảo', 'Dạ Yến', 'Gia Hân', 'Gia Khanh', 'Gia Linh', 'Gia Nhi', 'Gia Quỳnh', 'Giang Thanh', 'Giang Thiên', 'Giao Hưởng', 'Giao Kiều', 'Giao Linh', 'Giáng Ngọc', 'Giáng Tiên', 'Giáng Uyên', 'Hiếu Giang', 'Hiếu Hạnh', 'Hiếu Khanh', 'Hiếu Minh', 'Hiền Chung', 'Hiền Hòa', 'Hiền Mai', 'Hiền Nhi', 'Hiền Nương', 'Hiền Thục', 'Hiểu Lam', 'Hiểu Vân', 'Hoa Liên', 'Hoa Lý', 'Hoa Thiên', 'Hoa Tiên', 'Hoa Tranh', 'Hoài An', 'Hoài Giang', 'Hoài Hương', 'Hoài Phương', 'Hoài Thương', 'Hoài Trang', 'Hoài Vỹ', 'Hoàn Châu', 'Hoàn Vi', 'Hoàng Cúc', 'Hoàng Hà', 'Hoàng Kim', 'Hoàng Lan', 'Hoàng Mai', 'Hoàng Miên', 'Hoàng Nguyên', 'Hoàng Oanh', 'Hoàng Sa', 'Hoàng Thư', 'Hoàng Xuân', 'Hoàng Yến', 'Hoạ Mi', 'Huyền Anh', 'Huyền Diệu', 'Huyền Linh', 'Huyền Ngọc', 'Huyền Nhi', 'Huyền Thoại', 'Huyền Thư', 'Huyền Trang', 'Huyền Trâm', 'Huyền Trân', 'Huệ An', 'Huệ Hương', 'Huệ Hồng', 'Huệ Lan', 'Huệ Linh', 'Huệ Lâm', 'Huệ My', 'Huệ Phương', 'Huệ Thương', 'Huệ Ân', 'Huỳnh Anh', 'Hà Giang', 'Hà Liên', 'Hà Mi', 'Hà My', 'Hà Nhi', 'Hà Phương', 'Hà Thanh', 'Hà Tiên', 'Hàm Duyên', 'Hàm Nghi', 'Hàm Thơ', 'Hàm Ý', 'Hương Chi', 'Hương Giang', 'Hương Lan', 'Hương Liên', 'Hương Ly', 'Hương Lâm', 'Hương Mai', 'Hương Nhi', 'Hương Thu', 'Hương Thảo', 'Hương Thủy', 'Hương Tiên', 'Hương Trang', 'Hương Trà', 'Hương Xuân', 'Hướng Dương', 'Hạ Băng', 'Hạ Giang', 'Hạ Phương', 'Hạ Tiên', 'Hạ Uyên', 'Hạ Vy', 'Hạc Cúc', 'Hạnh Chi', 'Hạnh Dung', 'Hạnh Linh', 'Hạnh My', 'Hạnh Nga', 'Hạnh Nhơn', 'Hạnh Phương', 'Hạnh San', 'Hạnh Thảo', 'Hạnh Trang', 'Hạnh Vi', 'Hải Anh', 'Hải Châu', 'Hải Duyên', 'Hải Dương', 'Hải Miên', 'Hải My', 'Hải Mỹ', 'Hải Ngân', 'Hải Nhi', 'Hải Phương', 'Hải Phượng', 'Hải San', 'Hải Sinh', 'Hải Thanh', 'Hải Thảo', 'Hải Thụy', 'Hải Uyên', 'Hải Vy', 'Hải Vân', 'Hải Yến', 'Hải Ân', 'Hải Ðường', 'Hảo Nhi', 'Hằng Anh', 'Hằng Nga', 'Họa Mi', 'Hồ Diệp', 'Hồng Anh', 'Hồng Bạch Thảo', 'Hồng Châu', 'Hồng Diễm', 'Hồng Giang', 'Hồng Hoa', 'Hồng Hà', 'Hồng Hạnh', 'Hồng Khanh', 'Hồng Khuê', 'Hồng Khôi', 'Hồng Linh', 'Hồng Liên', 'Hồng Lâm', 'Hồng Mai', 'Hồng Nga', 'Hồng Ngân', 'Hồng Ngọc', 'Hồng Nhung', 'Hồng Như', 'Hồng Nhạn', 'Hồng Oanh', 'Hồng Phúc', 'Hồng Phương', 'Hồng Quế', 'Hồng Thu', 'Hồng Thúy', 'Hồng Thư', 'Hồng Thảo', 'Hồng Thắm', 'Hồng Thủy', 'Hồng Trúc', 'Hồng Tâm', 'Hồng Vân', 'Hồng Xuân', 'Hồng Ðiệp', 'Hồng Ðào', 'Hồng Đăng', 'Khiết Linh', 'Khiết Tâm', 'Khuê Trung', 'Khánh Chi', 'Khánh Giang', 'Khánh Giao', 'Khánh Huyền', 'Khánh Hà', 'Khánh Hằng', 'Khánh Linh', 'Khánh Ly', 'Khánh Mai', 'Khánh My', 'Khánh Ngân', 'Khánh Ngọc', 'Khánh Quyên', 'Khánh Quỳnh', 'Khánh Thủy', 'Khánh Trang', 'Khánh Vi', 'Khánh Vy', 'Khánh Vân', 'Khúc Lan', 'Khả Khanh', 'Khả Tú', 'Khả Ái', 'Khải Ca', 'Khải Hà', 'Khải Tâm', 'Kim Anh', 'Kim Chi', 'Kim Cương', 'Kim Dung', 'Kim Duyên', 'Kim Hoa', 'Kim Hương', 'Kim Khanh', 'Kim Khuyên', 'Kim Khánh', 'Kim Lan', 'Kim Liên', 'Kim Loan', 'Kim Ly', 'Kim Mai', 'Kim Ngân', 'Kim Ngọc', 'Kim Oanh', 'Kim Phượng', 'Kim Quyên', 'Kim Sa', 'Kim Thanh', 'Kim Thoa', 'Kim Thu', 'Kim Thy', 'Kim Thông', 'Kim Thư', 'Kim Thảo', 'Kim Thủy', 'Kim Trang', 'Kim Tuyến', 'Kim Tuyết', 'Kim Tuyền', 'Kim Xuyến', 'Kim Xuân', 'Kim Yến', 'Kim Ánh', 'Kim Đan', 'Kiết Hồng', 'Kiết Trinh', 'Kiều Anh', 'Kiều Diễm', 'Kiều Dung', 'Kiều Giang', 'Kiều Hoa', 'Kiều Hạnh', 'Kiều Khanh', 'Kiều Loan', 'Kiều Mai', 'Kiều Minh', 'Kiều Mỹ', 'Kiều Nga', 'Kiều Nguyệt', 'Kiều Nương', 'Kiều Thu', 'Kiều Trang', 'Kiều Trinh', 'Kỳ Anh', 'Kỳ Diệu', 'Kỳ Duyên', 'Lam Giang', 'Lam Hà', 'Lam Khê', 'Lam Ngọc', 'Lam Tuyền', 'Lan Anh', 'An Cơ', 'An Khang', 'Ân Lai', 'An Nam', 'An Nguyên', 'An Ninh', 'An Tâm', 'Ân Thiện', 'An Tường', 'Anh Ðức', 'Anh Dũng', 'Anh Duy', 'Anh Hoàng', 'Anh Khải', 'Anh Khoa', 'Anh Khôi', 'Anh Minh', 'Anh Quân', 'Anh Quốc', 'Anh Sơn', 'Anh Tài', 'Anh Thái', 'Anh Tú', 'Anh Tuấn', 'Anh Tùng', 'Anh Việt', 'Anh Vũ', 'Bá Cường', 'Bá Kỳ', 'Bá Lộc', 'Bá Long', 'Bá Phước', 'Bá Thành', 'Bá Thiện', 'Bá Thịnh', 'Bá Thúc', 'Bá Trúc', 'Bá Tùng', 'Bách Du', 'Bách Nhân', 'Bằng Sơn', 'Bảo An', 'Bảo Bảo', 'Bảo Chấn', 'Bảo Ðịnh', 'Bảo Duy', 'Bảo Giang', 'Bảo Hiển', 'Bảo Hoa', 'Bảo Hoàng', 'Bảo Huy', 'Bảo Huynh', 'Bảo Huỳnh', 'Bảo Khánh', 'Bảo Lâm', 'Bảo Long', 'Bảo Pháp', 'Bảo Quốc', 'Bảo Sơn', 'Bảo Thạch', 'Bảo Thái', 'Bảo Tín', 'Bảo Toàn', 'Bích Nhã', 'Bình An', 'Bình Dân', 'Bình Ðạt', 'Bình Ðịnh', 'Bình Dương', 'Bình Hòa', 'Bình Minh', 'Bình Nguyên', 'Bình Quân', 'Bình Thuận', 'Bình Yên', 'Bửu Chưởng', 'Bửu Diệp', 'Bữu Toại', 'Cảnh Tuấn', 'Cao Kỳ', 'Cao Minh', 'Cao Nghiệp', 'Cao Nguyên', 'Cao Nhân', 'Cao Phong', 'Cao Sĩ', 'Cao Sơn', 'Cao Sỹ', 'Cao Thọ', 'Cao Tiến', 'Cát Tường', 'Cát Uy', 'Chấn Hùng', 'Chấn Hưng', 'Chấn Phong', 'Chánh Việt', 'Chế Phương', 'Chí Anh', 'Chí Bảo', 'Chí Công', 'Chí Dũng', 'Chí Giang', 'Chí Hiếu', 'Chí Khang', 'Chí Khiêm', 'Chí Kiên', 'Chí Nam', 'Chí Sơn', 'Chí Thanh', 'Chí Thành', 'Chiến Thắng', 'Chiêu Minh', 'Chiêu Phong', 'Chiêu Quân', 'Chính Tâm', 'Chính Thuận', 'Chính Trực', 'Chuẩn Khoa', 'Chung Thủy', 'Công Án', 'Công Ân', 'Công Bằng', 'Công Giang', 'Công Hải', 'Công Hào', 'Công Hậu', 'Công Hiếu', 'Công Hoán', 'Công Lập', 'Công Lộc', 'Công Luận', 'Công Luật', 'Công Lý', 'Công Phụng', 'Công Sinh', 'Công Sơn', 'Công Thành', 'Công Tráng', 'Công Tuấn', 'Cường Dũng', 'Cương Nghị', 'Cương Quyết', 'Cường Thịnh', 'Ðắc Cường', 'Ðắc Di', 'Ðắc Lộ', 'Ðắc Lực', 'Ðắc Thái', 'Ðắc Thành', 'Ðắc Trọng', 'Ðại Dương', 'Ðại Hành', 'Ðại Ngọc', 'Ðại Thống', 'Dân Hiệp', 'Dân Khánh', 'Ðan Quế', 'Ðan Tâm', 'Ðăng An', 'Ðăng Ðạt', 'Ðăng Khánh', 'Ðăng Khoa', 'Đăng Khương', 'Ðăng Minh', 'Đăng Quang', 'Danh Nhân', 'Danh Sơn', 'Danh Thành', 'Danh Văn', 'Ðạt Dũng', 'Ðạt Hòa', 'Ðình Chiểu', 'Ðình Chương', 'Ðình Cường', 'Ðình Diệu', 'Ðình Ðôn', 'Ðình Dương', 'Ðình Hảo', 'Ðình Hợp', 'Ðình Kim', 'Ðinh Lộc', 'Ðình Lộc', 'Ðình Luận', 'Ðịnh Lực', 'Ðình Nam', 'Ðình Ngân', 'Ðình Nguyên', 'Ðình Nhân', 'Ðình Phú', 'Ðình Phúc', 'Ðình Quảng', 'Ðình Sang', 'Ðịnh Siêu', 'Ðình Thắng', 'Ðình Thiện', 'Ðình Toàn', 'Ðình Trung', 'Ðình Tuấn', 'Ðoàn Tụ', 'Ðồng Bằng', 'Ðông Dương', 'Ðông Hải', 'Ðồng Khánh', 'Ðông Nguyên', 'Ðông Phong', 'Ðông Phương', 'Ðông Quân', 'Ðông Sơn', 'Ðức Ân', 'Ðức Anh', 'Ðức Bằng', 'Ðức Bảo', 'Ðức Bình', 'Ðức Chính', 'Ðức Duy', 'Ðức Giang', 'Ðức Hải', 'Ðức Hạnh', 'Đức Hòa', 'Ðức Hòa', 'Ðức Huy', 'Ðức Khải', 'Ðức Khang', 'Ðức Khiêm', 'Ðức Kiên', 'Ðức Long', 'Ðức Mạnh', 'Ðức Minh', 'Ðức Nhân', 'Ðức Phi', 'Ðức Phong', 'Ðức Phú', 'Ðức Quang', 'Ðức Quảng', 'Ðức Quyền', 'Ðức Siêu', 'Ðức Sinh', 'Ðức Tài', 'Ðức Tâm', 'Ðức Thắng', 'Ðức Thành', 'Ðức Thọ', 'Ðức Toàn', 'Ðức Toản', 'Ðức Trí', 'Ðức Trung', 'Ðức Tuấn', 'Ðức Tuệ', 'Ðức Tường', 'Dũng Trí', 'Dũng Việt', 'Dương Anh', 'Dương Khánh', 'Duy An', 'Duy Bảo', 'Duy Cẩn', 'Duy Cường', 'Duy Hải', 'Duy Hiền', 'Duy Hiếu', 'Duy Hoàng', 'Duy Hùng', 'Duy Khang', 'Duy Khánh', 'Duy Khiêm', 'Duy Kính', 'Duy Luận', 'Duy Mạnh', 'Duy Minh', 'Duy Ngôn', 'Duy Nhượng', 'Duy Quang', 'Duy Tâm', 'Duy Tân', 'Duy Thạch', 'Duy Thắng', 'Duy Thanh', 'Duy Thành', 'Duy Thông', 'Duy Tiếp', 'Duy Tuyền', 'Gia Ân'];
    let max = sampleName.length;
    let i;
    let username;
    do {
        i = Math.floor(Math.random() * max);
        username = removeAccents(sampleName[i]);
    } while (user.isSameUserName(username));
    let password = username + "123";
    let email = username + "@gmail.com";
    let phone = "0" + Math.floor(Math.random() * 1000000000);
    let sampleAndress = ['Thành phố Hà Nội', 'Tỉnh Hà Giang', 'Tỉnh Cao Bằng', 'Tỉnh Bắc Kạn', 'Tỉnh Tuyên Quang', 'Tỉnh Lào Cai', 'Tỉnh Điện Biên', 'Tỉnh Lai Châu', 'Tỉnh Sơn La', 'Tỉnh Yên Bái', 'Tỉnh Hoà Bình', 'Tỉnh Thái Nguyên', 'Tỉnh Lạng Sơn', 'Tỉnh Quảng Ninh', 'Tỉnh Bắc Giang', 'Tỉnh Phú Thọ', 'Tỉnh Vĩnh Phúc', 'Tỉnh Bắc Ninh', 'Tỉnh Hải Dương', 'Thành phố Hải Phòng', 'Tỉnh Hưng Yên', 'Tỉnh Thái Bình', 'Tỉnh Hà Nam', 'Tỉnh Nam Định', 'Tỉnh Ninh Bình', 'Tỉnh Thanh Hóa', 'Tỉnh Nghệ An', 'Tỉnh Hà Tĩnh', 'Tỉnh Quảng Bình', 'Tỉnh Quảng Trị', 'Tỉnh Thừa Thiên Huế', 'Thành phố Đà Nẵng', 'Tỉnh Quảng Nam', 'Tỉnh Quảng Ngãi', 'Tỉnh Bình Định', 'Tỉnh Phú Yên', 'Tỉnh Khánh Hòa', 'Tỉnh Ninh Thuận', 'Tỉnh Bình Thuận', 'Tỉnh Kon Tum', 'Tỉnh Gia Lai', 'Tỉnh Đắk Lắk', 'Tỉnh Đắk Nông', 'Tỉnh Lâm Đồng', 'Tỉnh Bình Phước', 'Tỉnh Tây Ninh', 'Tỉnh Bình Dương', 'Tỉnh Đồng Nai', 'Tỉnh Bà Rịa - Vũng Tàu', 'Thành phố Hồ Chí Minh', 'Tỉnh Long An', 'Tỉnh Tiền Giang', 'Tỉnh Bến Tre', 'Tỉnh Trà Vinh', 'Tỉnh Vĩnh Long', 'Tỉnh Đồng Tháp', 'Tỉnh An Giang', 'Tỉnh Kiên Giang', 'Thành phố Cần Thơ', 'Tỉnh Hậu Giang', 'Tỉnh Sóc Trăng', 'Tỉnh Bạc Liêu', 'Tỉnh Cà Mau'];
    let j = Math.floor(Math.random() * sampleAndress.length);
    return new User(username, password, email, phone, sampleName[i], sampleAndress[j], false);
}

function addRandomUserToLocalStorage() {
    let list = user.getUsers();
    if (!list) {
        return null;
    }
    list.push(randomUser());
    user.loadUsers(list);
}

function randomOrder() {
    let listOrder = order.getOrders();
    if (!listOrder)
        return null;
    let listProduct = data.getProducts();
    if (listProduct.length === 0 || !listProduct)
        return null;
    let listUser = user.getUsers();
    let userid;
    do {
        userid = Math.floor(Math.random() * listUser.length) + 1;
    } while (user.getUserId(userid).isAdmin);
    let month = Math.floor(Math.random() * 12) + 1;
    let day = Math.floor(Math.random() * time.getMaxDayOfMonth(month)) + 1;
    let year = 2021;
    let dateTime = year+"/"+month+"/"+day;
    let cartListNumber = Math.floor(Math.random() * 10) + 1;
    let boolProduct = new Array(listProduct.length + 1);
    let cartListArr = [];
    for (let i = 0; i < listProduct.length+1; i++) {
        boolProduct[i] = false;
    }
    for (let i = 0; i < cartListNumber; i++){
        let randomId;
        do {
            randomId = Math.floor(Math.random() * listProduct.length) + 1;
        } while (boolProduct[randomId]);
        boolProduct[randomId] = true;
        let product = data.getProductId(randomId);
        console.log(randomId);
        let amout = Math.floor(Math.random() * 10) + 1;
        cartListArr.push(new CartItem(randomId, product.price, amout, null, product.imgList[0]));
    }
    listOrder.push(new Order(cartListArr, userid, time.toTimeSpan(dateTime)));
    order.loadOrder(listOrder);
}

function removeAccents(str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    str = str.replace(/\s/g, '');
    return str.toLowerCase();
}
