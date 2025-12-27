# Hướng dẫn Push Code lên GitHub

## Cách 1: Sử dụng script tự động (Khuyến nghị)

1. Chạy file `push-to-github.bat` bằng cách double-click vào file đó
2. Làm theo hướng dẫn trên màn hình
3. Khi được hỏi username/password:
   - **Username**: Nhập username GitHub của bạn
   - **Password**: Nếu bạn có 2FA enabled, bạn cần sử dụng **Personal Access Token** thay vì password

## Cách 2: Chạy thủ công từng lệnh

Mở PowerShell hoặc Command Prompt trong thư mục project và chạy:

```bash
# 1. Khởi tạo git repository
git init

# 2. Thêm tất cả files
git add .

# 3. Commit
git commit -m "Initial commit: Blog cá nhân Lê Thành Nhơn với chứng chỉ Cisco"

# 4. Đặt branch là main
git branch -M main

# 5. Thêm remote repository
git remote add origin https://github.com/Nothingtoread/My-Blog.git

# 6. Push lên GitHub
git push -u origin main
```

## Tạo Personal Access Token (nếu cần)

Nếu bạn gặp lỗi authentication khi push:

1. Truy cập: https://github.com/settings/tokens
2. Click "Generate new token" > "Generate new token (classic)"
3. Đặt tên token (ví dụ: "Blog Personal")
4. Chọn quyền: **repo** (đầy đủ quyền)
5. Click "Generate token"
6. **Copy token ngay** (bạn sẽ không thấy lại được)
7. Khi push, sử dụng token này thay vì password

## Kiểm tra sau khi push

1. Truy cập: https://github.com/Nothingtoread/My-Blog
2. Kiểm tra xem tất cả files đã được upload chưa
3. Đảm bảo các file PDF và hình ảnh trong `public/certificates/` và `public/images/` đã được commit

## Lưu ý quan trọng

- **Không commit file nhạy cảm**: Đảm bảo `.gitignore` đã loại trừ `node_modules`, `.env`, etc.
- **File PDF và hình ảnh**: Các file này sẽ được commit vào GitHub, đảm bảo chúng không quá lớn (< 100MB mỗi file)
- **Sau khi push**: Bạn có thể deploy lên Vercel/Netlify bằng cách import repository từ GitHub

## Troubleshooting

### Lỗi: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Nothingtoread/My-Blog.git
```

### Lỗi: "Authentication failed"
- Sử dụng Personal Access Token thay vì password
- Hoặc cấu hình SSH key cho GitHub

### Lỗi: "Permission denied"
- Đảm bảo bạn có quyền write vào repository
- Kiểm tra xem repository có phải là của bạn không

