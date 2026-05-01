# 🚀 Portfolio — Vũ Thế Tâm

Đây là dự án Portfolio cá nhân dạng **one-page**, được xây dựng như một hồ sơ năng lực trực tuyến. Dự án không chỉ tập trung vào giao diện mà còn chú trọng vào cách tổ chức dữ liệu khoa học, giúp việc quản lý thông tin cá nhân trở nên chuyên nghiệp và dễ dàng bảo trì.

🔗 **[Trải nghiệm bản Live Demo tại đây](https://vuthetam.github.io/portfolio/)**

## 💡 Điểm nhấn kỹ thuật
Là một lập trình viên hướng tới vị trí **Backend**, tôi áp dụng các tư duy hệ thống vào dự án này:
*   **Data-Driven Architecture:** Toàn bộ thông tin (thông tin cá nhân, dự án, kỹ năng, chứng chỉ) được tách rời khỏi mã HTML và quản lý tập trung qua file `portfolio.json`. Điều này giúp cập nhật nội dung nhanh chóng và linh hoạt
*   **Asynchronous Loading:** Sử dụng JavaScript thuần để fetch dữ liệu từ JSON và render động lên giao diện, giúp tối ưu tốc độ tải trang ban đầu.
*   **Integration:** Tích hợp thành công các thư viện bên thứ ba như **PDF.js** để xử lý tệp tin và **Formspree** để quản lý luồng dữ liệu người dùng gửi về.

## 🛠️ Công nghệ & Công cụ
- **Ngôn ngữ:** HTML5, JavaScript (ES6+)
- **Framework CSS:** Tailwind CSS (Tối ưu hóa giao diện nhanh và responsive)
- **Thư viện xử lý:** PDF.js (Hiển thị chứng chỉ PDF trực tiếp trên trình duyệt)
- **Dịch vụ hỗ trợ:** Formspree (Xử lý form liên hệ), GitHub Pages (Hosting)

## 📂 Cấu trúc mã nguồn
```text
portfolio/
├── index.html          # Cấu trúc khung của trang web
├── script.js           # Logic xử lý fetch dữ liệu và điều khiển DOM
├── data/
│   └── portfolio.json  # "Database" tĩnh chứa toàn bộ nội dung hiển thị
├── assets/             # Tài nguyên hệ thống
│   ├── certificates/   # Lưu trữ các chứng chỉ chuyên môn (PDF)
│   └── images/         # Hình ảnh minh họa dự án và cá nhân
└── README.md           # Tài liệu hướng dẫn dự án
```

## 🛠️ Hướng dẫn cài đặt cục bộ (Local Setup)
### 1. Clone Repository
```bash
git clone https://github.com/vuthetam/portfolio.git
```
### 2. Chạy dự án
Khuyên dùng: Sử dụng Extension Live Server trên VS Code, chuột phải vào index.html và chọn "Open with Live Server".
