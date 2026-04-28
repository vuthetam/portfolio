# Vũ Thế Tâm — Backend Developer Portfolio

Một trang portfolio cá nhân được thiết kế theo phong cách tối giản, hiện đại với hiệu ứng cuộn mượt và giao diện tự động thích ứng trên mọi thiết bị.

![Portfolio Preview Preview](https://img.shields.io/badge/Status-Completed-success) ![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light-blueviolet)

---

## ✨ Tính năng nổi bật

- **Kiến trúc hướng dữ liệu (Data-Driven):** Toàn bộ nội dung chữ, kỹ năng, dự án và chứng chỉ đều được lấy tự động từ file `data/portfolio.json`. Bạn không cần phải đụng vào file HTML để cập nhật nội dung!
- **Tự động render chứng chỉ PDF:** Không cần phải chụp màn hình chứng chỉ nữa! Hệ thống sử dụng thư viện **PDF.js** để tự động đọc và hiển thị trang đầu tiên của file PDF thật thành ảnh thumbnail trên thẻ `<canvas>`.
- **Form liên hệ Formspree:** Form liên hệ hoạt động hoàn chỉnh, sử dụng AJAX với các thông báo toast đẹp mắt và gửi tin nhắn an toàn thẳng tới email của bạn.
- **Slider cuộn mượt mà:** Các chứng chỉ được hiển thị trong một thanh trượt tự động cuộn vòng lặp vô hạn và có thể dùng chuột kéo thả.
- **Bố cục "Hanging Indent" hiện đại:** Giao diện được thiết kế theo phong cách editorial cao cấp, trong đó nội dung được căn thẳng hàng theo trục dọc bên cạnh ảnh đại diện trên màn hình lớn.
- **Chế độ Sáng/Tối (Dark/Light Mode):** Hỗ trợ chuyển đổi giao diện mượt mà, mặc định theo hệ điều hành và lưu tùy chọn của người dùng vào `localStorage`.
- **Không cần công cụ Build:** Không cần Webpack, Vite hay cài đặt Node modules. Chỉ cần HTML, CSS và JS thuần là chạy.

## 📂 Cấu trúc thư mục

```text
portfolio/
├── index.html            ← Trang HTML chính chứa giao diện
├── script.js             ← File logic xử lý hiển thị và tương tác
├── README.md             ← File hướng dẫn này
├── assets/               
│   ├── certificates/     ← 📄 Chứa các file PDF chứng chỉ thật của bạn
│   └── images/           ← 🖼️ Chứa hình ảnh (avatar, ảnh dự án,...)
└── data/
    └── portfolio.json    ← 🗄️ File DUY NHẤT bạn cần sửa để thay đổi nội dung!
```

## 🛠️ Cách cập nhật nội dung

Bạn không cần phải can thiệp vào code. Chỉ cần mở và chỉnh sửa file `data/portfolio.json`:

| Phần | Khóa JSON (Key) |
|---|---|
| **Thông tin cá nhân** | `personal` (Tên, Chức danh, Đường dẫn Avatar, Bio, Email, Links) |
| **Kỹ năng** | `skills[]` |
| **Dự án** | `projects[]` |
| **Chứng chỉ** | `certificates[]` |
| **Footer** | `footer` |

### Thêm chứng chỉ (`PDF.js`)
Bạn chỉ việc copy file `.pdf` vào thư mục `assets/certificates/`, sau đó thêm khai báo vào file JSON:
```json
{
  "id": "my-cert",
  "title": "Tên chứng chỉ siêu ngầu",
  "pdf": "assets/certificates/my-cert.pdf"
}
```
*Lưu ý: Đảm bảo đường dẫn `pdf` trỏ đúng tên file. Trình duyệt sẽ tự động lấy trang đầu tiên để làm ảnh đại diện sắc nét!*

## 🚀 Chạy thử ở máy cá nhân (Local)

Vì dự án này sử dụng hàm `fetch()` để tải file JSON và `PDF.js` để đọc file PDF nội bộ, **bạn KHÔNG THỂ chỉ click đúp** vào file `index.html` để mở (do chính sách bảo mật CORS của trình duyệt đối với giao thức `file://`).

Bạn phải sử dụng một Local HTTP server. Một vài ví dụ:
1. Dùng Extension **Live Server** trong VS Code.
2. Dùng **Python**: `python -m http.server 5500`
3. Dùng **Node**: `npx serve .`

Khi server chạy, bạn có thể truy cập thẳng vào đường dẫn gốc để xem, ví dụ: `http://localhost:5500/`.

## 🌍 Triển khai lên GitHub Pages

Thư mục này là mã nguồn tĩnh và có thể deploy lên GitHub Pages rất nhanh:
1. Đẩy (Push) toàn bộ thư mục này lên một repository trên GitHub.
2. Vào phần **Settings → Pages** của kho lưu trữ.
3. Ở mục Build and deployment, chọn Source là **Deploy from a branch**.
4. Chọn nhánh `main` và thư mục `/ (root)` (bạn có thể cấu hình phục vụ từ `/src` hoặc redirect từ thư mục gốc tuỳ ý).
5. Nhấn Save! Trang portfolio của bạn đã được đưa lên mạng.

## 🎨 Màu sắc và Giao diện (Themes)

Giao diện được điều khiển hoàn toàn bằng CSS variables nằm ở đầu file `src/index.html`.

| Giao diện | Nền chính | Màu chủ đạo (Primary) | Màu nhấn (Accent) |
|---|---|---|---|
| 🌙 **Dark (Tối)** | `#111317` (Xanh đen) | `#bcc7de` (Xanh xám) | `#d2bbff` (Tím nhạt) |
| ☀️ **Light (Sáng)** | `#f4f5ff` (Trắng ánh tím)| `#3b5bdb` (Xanh hoàng gia)| `#d63384` (Hồng đậm) |

---
*Xây dựng với ❤️ bằng Tailwind CSS và Vanilla JavaScript.*
