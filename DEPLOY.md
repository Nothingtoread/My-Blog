# Hướng dẫn Deploy Blog Cá Nhân - Lê Thành Nhơn

## Tùy chọn 1: Deploy lên Vercel (Khuyến nghị - Dễ nhất)

### Bước 1: Chuẩn bị
1. Đảm bảo project đã được commit lên GitHub/GitLab/Bitbucket
2. Truy cập https://vercel.com và đăng ký/đăng nhập bằng GitHub

### Bước 2: Deploy
1. Click "New Project"
2. Import repository từ GitHub của bạn
3. Vercel sẽ tự động detect React và cấu hình
4. Click "Deploy"
5. Sau khi deploy xong, bạn sẽ có URL dạng: `your-project.vercel.app`

### Bước 3: Cấu hình tên miền tùy chỉnh
1. Vào Settings > Domains
2. Thêm domain: `lethanhnhon.com` hoặc `www.lethanhnhon.com`
3. Làm theo hướng dẫn để cấu hình DNS:
   - Thêm CNAME record trỏ đến: `cname.vercel-dns.com`
   - Hoặc A record trỏ đến IP của Vercel (xem trong dashboard)

### Lưu ý:
- Vercel miễn phí và tự động deploy khi bạn push code lên GitHub
- File `vercel.json` đã được tạo để hỗ trợ React Router

---

## Tùy chọn 2: Deploy lên Netlify

### Bước 1: Chuẩn bị
1. Đảm bảo project đã được commit lên GitHub/GitLab/Bitbucket
2. Truy cập https://www.netlify.com và đăng ký/đăng nhập

### Bước 2: Deploy
1. Click "Add new site" > "Import an existing project"
2. Chọn GitHub và chọn repository
3. Cấu hình build:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Click "Deploy site"
5. Sau khi deploy xong, bạn sẽ có URL dạng: `your-project.netlify.app`

### Bước 3: Cấu hình tên miền
1. Vào Site settings > Domain management
2. Click "Add custom domain"
3. Nhập domain: `lethanhnhon.com`
4. Làm theo hướng dẫn để cấu hình DNS:
   - Thêm CNAME record trỏ đến: `your-project.netlify.app`

### Lưu ý:
- File `netlify.toml` và `public/_redirects` đã được tạo để hỗ trợ React Router
- Netlify miễn phí và tự động deploy khi push code

---

## Tùy chọn 3: Deploy lên GitHub Pages

### Bước 1: Cài đặt gh-pages
```bash
npm install --save-dev gh-pages
```

### Bước 2: Cập nhật package.json
Thêm vào scripts:
```json
"homepage": "https://yourusername.github.io/blog-personal",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

### Bước 3: Deploy
```bash
npm run deploy
```

### Bước 4: Cấu hình tên miền
1. Tạo file `CNAME` trong thư mục `public` với nội dung: `lethanhnhon.com`
2. Cấu hình DNS để trỏ đến GitHub Pages

---

## Tùy chọn 4: Deploy lên Firebase Hosting

### Bước 1: Cài đặt Firebase CLI
```bash
npm install -g firebase-tools
```

### Bước 2: Login và khởi tạo
```bash
firebase login
firebase init hosting
```

### Bước 3: Cấu hình
- Chọn "Use an existing project" hoặc tạo mới
- Public directory: `build`
- Single-page app: Yes
- Automatic builds: No (hoặc Yes nếu muốn)

### Bước 4: Deploy
```bash
npm run build
firebase deploy
```

### Bước 5: Cấu hình tên miền
1. Vào Firebase Console > Hosting > Add custom domain
2. Nhập domain và làm theo hướng dẫn DNS

---

## Mua tên miền

Để có tên miền `lethanhnhon.com`, bạn có thể mua từ:
- **Namecheap**: https://www.namecheap.com (khuyến nghị)
- **GoDaddy**: https://www.godaddy.com
- **Google Domains**: https://domains.google
- **Freenom**: https://www.freenom.com (miễn phí cho .tk, .ml, .ga)

### Sau khi mua domain:
1. Vào phần quản lý DNS của nhà cung cấp
2. Thêm record theo hướng dẫn của dịch vụ hosting bạn chọn (Vercel/Netlify)
3. Đợi DNS propagate (thường 5-30 phút, có thể lên đến 48 giờ)

---

## Kiểm tra sau khi deploy

1. Truy cập URL của bạn
2. Kiểm tra các trang:
   - Trang chủ: `/`
   - Trang blog: `/blog`
   - Trang bài viết: `/blog/1`
3. Kiểm tra chức năng download PDF
4. Kiểm tra responsive trên mobile

---

## Lưu ý quan trọng

- Đảm bảo tất cả file PDF và hình ảnh đã được commit vào repository
- Kiểm tra đường dẫn trong code (sử dụng đường dẫn tương đối `/certificates/...`)
- Nếu gặp lỗi 404 khi refresh trang, đảm bảo đã cấu hình redirect đúng (file `_redirects`, `vercel.json`, hoặc `.htaccess`)

