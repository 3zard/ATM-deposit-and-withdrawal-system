# ATM-Transaction-System
# Project Description:
Ứng dụng web mô phỏng hệ thống giao dịch ATM, cho phép người dùng giao dịch và kiểm tra số dư trực tuyến. Đồng thời tích hợp tính năng quản lý tài khoản và lịch sử giao dịch.
# Goal:
Hoàn thiện ứng dụng giao dịch ngân hàng đảm bảo bảo mật.
# Function requirement:
- Cho phép người dùng đăng ký tài khoản và đăng nhập tài khoản đã tạo.
- Cho người dùng xem số dư hiện tại.
- Cho người dùng chuyển tiền sang tài khoản khác.
- Lưu lịch sử giao dịch cho người dùng.
# Non-function requirement:
- Tất cả thông tin bảo mật phải được mã hóa (mật khẩu lưu dạng hash)
- Giao dịch phải xác thực người dùng trước khi thực hiện
- Quá trình giao dịch hết hạn sau 1 thời gian không hoạt động.
- Thời gian phản hồi giao dịch tối đa 2s.
- Hệ thống hỗ trợ 100 người cùng lúc mà không bị treo.
- Mỗi giao dịch phải đảm bảo tính toàn vẹn dữ liệu.
- Nếu hệ thống dừng hoạt động thì dữ liệu phải phục hồi lại trạng thái trước đó.
- Có thể mở rộng trong tương lai mà không cần thay đổi kiến trúc.
- Người dùng có thể thực hiện giao dịch trong lần đầu thao tác.
- Hỗ trợ cả tiếng Việt và tiếng Anh.
- Các chức năng chính dễ dàng truy cập từ Dashboard.
- Code theo mô hình MVC.
# Framework/technology:
- Frontend: React.
- Backend: Nodejs với Express.
- Database: MySQL hoặc MongoDB.