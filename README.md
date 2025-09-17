# ATM-Transaction-System
# Project Description:
Ứng dụng web mô phỏng hệ thống giao dịch ATM, dựa trên BIDV smartbanking, cho phép người dùng giao dịch và kiểm tra số dư trực tuyến. Đồng thời tích hợp tính năng quản lý tài khoản và lịch sử giao dịch.
# Goal:
Hoàn thiện ứng dụng giao dịch ngân hàng đảm bảo bảo mật.
# Function requirement:
- Cho phép người dùng đăng ký tài khoản và đăng nhập tài khoản đã tạo.
- Cho phép người dùng mở tài khoản ngân hàng.
- Cho người dùng xem số dư hiện tại.
- Cho người dùng chuyển tiền sang tài khoản khác.
- Thông báo biến động khi gửi tiên hoặc nhận tiền.
- Lưu lịch sử giao dịch cho người dùng.
# Non-function requirement:
- Tài khoản ngân hàng có 2 loại là tài khoản thanh toán và tài khoản tiết kiệm.
- Tất cả thông tin bảo mật phải được mã hóa (mật khẩu lưu dạng hash)
- Giao dịch phải xác thực người dùng trước khi thực hiện
- Quá trình giao dịch hết hạn sau 1 thời gian không hoạt động.
- Thời gian phản hồi giao dịch tối đa 2s.
- Mỗi giao dịch phải đảm bảo tính toàn vẹn dữ liệu.
- Có thể mở rộng trong tương lai mà không cần thay đổi kiến trúc.
- Người dùng có thể thực hiện giao dịch trong lần đầu thao tác.
- Các chức năng chính dễ dàng truy cập từ Dashboard.
- Code theo mô hình MVC.
# Framework/technology:
- Frontend: React (có thể kết hợp Tailwind và Bootstrap)
- Backend: Nodejs với Express.
- Database: MySQL hoặc MongoDB.