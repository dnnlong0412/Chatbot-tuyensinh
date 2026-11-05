# Lab 9 — Chatbot tuyển sinh ABC (demowebmau)

Website tĩnh này được chuẩn bị để triển khai lên Azure Static Web Apps. Nội dung trường ABC và các tài liệu tuyển sinh đều là dữ liệu giả lập.

## Có trong gói

- Giao diện web responsive: `index.html`, `styles.css`, `app.js`.
- Năm tài liệu mẫu trong `admissions/` để tải lên Blob Container.
- Chatbot trả lời theo bộ câu hỏi mẫu chạy trực tiếp trong trình duyệt.

## Giới hạn của bản demo

Bản này chưa kết nối Azure OpenAI, Azure AI Search, Blob Storage hay Azure Static Web Apps. Không được dùng ảnh trang web local làm bằng chứng đã deploy Azure. Muốn có URL và ảnh portal thật, cần subscription Azure đang hoạt động.

## Triển khai Static Web Apps

1. Đưa các tệp ở thư mục này vào repository GitHub riêng tư.
2. Trong Azure Portal, tạo **Static Web App**, chọn **Free** cho bài thực hành, liên kết repository và nhánh `main`.
3. Đặt App location là `/`, API location để trống, Output location để trống.
4. Chờ GitHub Actions báo thành công, mở URL `*.azurestaticapps.net` và chụp ảnh URL cùng trang đang chạy.

## Tạo Blob Container và tải 5 tệp

1. Tạo Storage Account loại Standard, General-purpose v2, redundancy LRS.
2. Tạo container `tuyen-sinh-demo` với public access disabled.
3. Tải đủ 5 tệp trong thư mục `admissions/`.
4. Chụp ảnh Overview của Storage Account, container và danh sách đủ 5 tệp.

Giữ nguyên các tài liệu giả lập; thay dữ liệu bằng thông tin do giảng viên cung cấp nếu được yêu cầu.


## Chạy demo ngay
1. Giải nén file ZIP.
2. Mở `index.html` bằng Chrome hoặc Edge.
3. Bấm các nút gợi ý hoặc nhập câu hỏi như “Học phí bao nhiêu?” và “Có học bổng không?”.

Bản này là mô phỏng giao diện và câu trả lời mẫu chạy cục bộ; chưa được xuất bản thành URL Azure.
Actor: Dao Nguyen Ngoc Long
