# GOAN POS Web — Hệ Thống Đăng Nhập & Bán Hàng

Dự án giao diện GOAN POS với gam màu **#33CCFF -> #99FFFF kết hợp Xanh dương & Trắng**, tích hợp đầy đủ danh mục hình ảnh sản phẩm thực tế và liên kết luồng Đăng nhập ➔ Bán hàng.

---

## 📁 Cấu trúc thư mục dự án

```
goan-pos-web/
├── index.html                  # Trang Đăng nhập chính thức (mặc định)
├── goan-login.html             # Trang Đăng nhập hệ thống
├── goan-pos.html               # Trang Bán hàng POS (kèm giỏ hàng & sản phẩm)
├── server.js                   # Web Server Node.js thuần (chạy cục bộ & Render)
├── package.json                # Thông tin cấu hình dự án
├── render.yaml                 # File Blueprint cấu hình tự động trên Render.com
└── assets/
    └── products/               # 26 ảnh sản phẩm nước ép, trà, bánh, đồ uống
```

---

## 🚀 Cách 1: Chạy thử trên máy tính cá nhân (Offline)

### Lựa chọn A: Mở trực tiếp bằng trình duyệt
- Bạn chỉ cần nhấp đúp (double-click) vào file `index.html` hoặc `goan-pos.html` để mở trên Google Chrome, Microsoft Edge, Cốc Cốc.

### Lựa chọn B: Chạy qua Node.js Web Server
Mở PowerShell / Terminal tại thư mục `goan-pos-web` và chạy lệnh:
```bash
node server.js
```
Truy cập trình duyệt: **`http://localhost:3000`**

---

## 🌐 Cách 2: Deploy lên Render.com (Miễn phí 100%, không lo phí ảnh)

Render hỗ trợ **Static Site** hoàn toàn miễn phí, không giới hạn dung lượng ảnh tĩnh, băng thông 100GB/tháng và có chứng chỉ SSL (HTTPS) trọn đời.

### Bước 1: Khởi tạo Git & Đẩy lên GitHub
1. Mở PowerShell tại thư mục `goan-pos-web`:
   ```bash
   cd "C:\Users\phamv\Desktop\Khóa luận\GOAN\goan-pos-web"
   git init
   git add .
   git commit -m "Khoi tao du an GOAN POS Web"
   ```
2. Tạo một repository mới trên GitHub (ví dụ đặt tên `goan-pos-web`), sau đó chạy:
   ```bash
   git branch -M main
   git remote add origin <URL_GITHUB_CUA_BAN>
   git push -u origin main
   ```

### Bước 2: Tạo dịch vụ trên Render.com
1. Truy cập [https://render.com](https://render.com) và đăng nhập bằng tài khoản GitHub của bạn.
2. Nhấn nút **New +** ở góc trên phải ➔ Chọn **Static Site** (Khuyên dùng - Miễn phí 100%).
3. Chọn repository `goan-pos-web` vừa tạo trên GitHub và nhấn **Connect**.
4. Điền các thông tin:
   - **Name**: `goan-pos-web` (hoặc tên tùy thích)
   - **Branch**: `main`
   - **Build Command**: Để trống (hoặc nhập `echo "Ready"`)
   - **Publish Directory**: `.` (nhập dấu chấm để phục vụ thư mục gốc)
5. Nhấn **Create Static Site**.
6. Render sẽ deploy trong vòng 30 giây và cấp cho bạn một đường link miễn phí dạng:
   👉 **`https://goan-pos-web.onrender.com`**

---

## 🔑 Tài khoản Demo trải nghiệm
- **Tài khoản / Email**: `demo@goan.vn`
- **Mật khẩu**: `12345678`
- **Mã OTP**: `123456`
- **Tính năng tiện ích**: Trên trang đăng nhập có sẵn nút **"Điền nhanh"** và **"Vào thẳng POS"** để thử nghiệm ngay lập tức.
