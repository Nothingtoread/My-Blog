# HƯỚNG DẪN CHUYỂN ĐỔI BÁO CÁO SANG WORD/PDF

## Phương pháp 1: Sử dụng Microsoft Word (Khuyến nghị)

### Bước 1: Mở file Markdown trong Word
1. Mở Microsoft Word
2. File → Open
3. Chọn file `BaoCaoDoAn_BlogCaNhan.md`
4. Word sẽ tự động format markdown

### Bước 2: Điều chỉnh format
1. **Font chữ**: Chọn Times New Roman hoặc Arial, size 13
2. **Tiêu đề**: 
   - Heading 1 (Chương): Bold, 16pt
   - Heading 2 (Mục): Bold, 14pt
   - Heading 3 (Tiểu mục): Bold, 13pt
3. **Căn lề**: 
   - Trên: 2cm
   - Dưới: 2cm
   - Trái: 3cm
   - Phải: 2cm
4. **Line spacing**: 1.5

### Bước 3: Thêm trang bìa
1. Insert → Cover Page
2. Chọn template phù hợp
3. Điền thông tin:
   - Tên trường: ĐẠI HỌC CÔNG NGHỆ TP.HCM (HUTECH)
   - Khoa: CÔNG NGHỆ THÔNG TIN
   - Đề tài: XÂY DỰNG WEBSITE BLOG CÁ NHÂN VỚI REACT
   - Sinh viên: Lê Thành Nhơn
   - MSSV: 2280602244
   - Lớp: 22DTHE4

### Bước 4: Thêm mục lục tự động
1. Đặt con trỏ sau trang bìa
2. References → Table of Contents
3. Chọn style phù hợp

### Bước 5: Thêm hình ảnh
Tại các vị trí có ghi `[Screenshot...]`:
1. Insert → Pictures
2. Chọn ảnh từ dự án
3. Resize và căn giữa
4. Add caption: References → Insert Caption

### Bước 6: Xuất PDF
1. File → Save As
2. Chọn định dạng PDF
3. Save

---

## Phương pháp 2: Sử dụng Pandoc (Chuyên nghiệp)

### Cài đặt Pandoc
```bash
# Windows (với Chocolatey)
choco install pandoc

# Hoặc download từ: https://pandoc.org/installing.html
```

### Chuyển đổi sang Word
```bash
pandoc BaoCaoDoAn_BlogCaNhan.md -o BaoCaoDoAn.docx
```

### Chuyển đổi sang PDF (cần LaTeX)
```bash
pandoc BaoCaoDoAn_BlogCaNhan.md -o BaoCaoDoAn.pdf --pdf-engine=xelatex
```

### Với template tùy chỉnh
```bash
pandoc BaoCaoDoAn_BlogCaNhan.md -o BaoCaoDoAn.docx --reference-doc=template.docx
```

---

## Phương pháp 3: Online Tools

### Dillinger (https://dillinger.io)
1. Truy cập https://dillinger.io
2. Copy nội dung file .md
3. Paste vào editor
4. Export → Styled HTML hoặc PDF

### Markdown to PDF (https://www.markdowntopdf.com)
1. Upload file .md
2. Click Convert
3. Download PDF

---

## Checklist trước khi nộp

- [ ] Đã thêm tên giảng viên hướng dẫn
- [ ] Đã thêm tất cả screenshots
- [ ] Đã kiểm tra chính tả
- [ ] Đã format đúng quy chuẩn trường
- [ ] Đã đánh số trang
- [ ] Đã có mục lục tự động
- [ ] Đã có danh mục hình ảnh
- [ ] File PDF < 20MB

---

## Lưu ý quan trọng

### Screenshots cần thêm:
1. **Hình 4.1**: Chụp trang Home của blog
2. **Hình 4.2**: Chụp trang Blog
3. **Hình 4.3**: Chụp chi tiết bài viết
4. **Hình 4.4**: Chụp trang Projects
5. **Hình 4.5**: Chụp chi tiết dự án
6. **Hình 4.6**: Chụp trang Resume
7. **Hình 4.7**: Chụp modal chứng chỉ
8. **Hình 5.1**: Chụp responsive trên mobile
9. **Hình 5.2**: Chụp Vercel dashboard

### Cách chụp screenshots đẹp:
1. Mở blog trong browser
2. F12 → Toggle device toolbar (Ctrl+Shift+M)
3. Chọn device (iPhone, iPad, Desktop)
4. Chụp màn hình (Windows: Win+Shift+S)
5. Crop và save

### Format hình ảnh:
- **Định dạng**: PNG hoặc JPG
- **Độ phân giải**: 1920x1080 (desktop), 375x667 (mobile)
- **Dung lượng**: < 500KB mỗi ảnh
- **Caption**: "Hình X.X: Mô tả"

---

## Quy chuẩn báo cáo HUTECH

### Font chữ:
- **Tiếng Việt**: Times New Roman, 13pt
- **Tiếng Anh**: Times New Roman, 13pt
- **Code**: Courier New, 11pt

### Căn lề:
- Trên: 2cm
- Dưới: 2cm
- Trái: 3cm (để đóng gáy)
- Phải: 2cm

### Khoảng cách dòng:
- Nội dung: 1.5 lines
- Trích dẫn: 1.0 line

### Đánh số trang:
- Trang bìa: Không đánh số
- Lời cảm ơn, Mục lục: Số La Mã (i, ii, iii)
- Nội dung chính: Số Ả Rập (1, 2, 3)

---

## Hỗ trợ

Nếu gặp vấn đề khi chuyển đổi, bạn có thể:
1. Sử dụng Word để mở trực tiếp file .md
2. Copy từng phần và paste vào Word
3. Sử dụng online converter
4. Nhờ bạn bè có kinh nghiệm

**Chúc bạn hoàn thành báo cáo tốt!** 🎓
