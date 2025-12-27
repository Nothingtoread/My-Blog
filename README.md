# Blog Cá Nhân - Lê Thành Nhơn

Blog cá nhân được xây dựng bằng React, hiển thị thông tin cá nhân, các bài viết về lập trình và chứng chỉ Cisco.

## Tính năng

- ✅ Trang chủ với thông tin cá nhân và ảnh đại diện
- ✅ Hiển thị các chứng chỉ Cisco với hình ảnh
- ✅ Xem chứng chỉ trong modal
- ✅ Download PDF chứng chỉ
- ✅ Trang blog với các bài viết về JavaScript và Java
- ✅ Responsive design

## Cài đặt và chạy local

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm start

# Build cho production
npm run build
```

## Deploy

Xem file [DEPLOY.md](./DEPLOY.md) để biết hướng dẫn chi tiết về cách deploy lên các platform khác nhau.

### Deploy nhanh với Vercel (Khuyến nghị)

1. Push code lên GitHub
2. Truy cập https://vercel.com
3. Import project từ GitHub
4. Click Deploy
5. Thêm custom domain trong Settings > Domains

## Cấu trúc project

```
blog-personal/
├── public/
│   ├── certificates/     # File PDF và hình ảnh chứng chỉ
│   ├── images/           # Hình ảnh
│   └── _redirects        # Cấu hình redirect cho Netlify
├── src/
│   ├── components/       # Các component React
│   ├── pages/           # Các trang
│   ├── data/            # Dữ liệu blog posts
│   └── App.js           # Component chính
├── vercel.json          # Cấu hình Vercel
├── netlify.toml         # Cấu hình Netlify
└── package.json
```

## Tác giả

**Lê Thành Nhơn**
- Lập trình viên JavaScript & Java
- Email: [your-email@example.com]
- Website: [lethanhnhon.com]

## License

MIT
