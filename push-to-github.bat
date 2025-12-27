@echo off
echo ========================================
echo Push code len GitHub
echo ========================================
echo.

echo [1/6] Khoi tao git repository...
git init
if %errorlevel% neq 0 (
    echo Loi: Khong the khoi tao git repository
    pause
    exit /b 1
)

echo.
echo [2/6] Them tat ca files...
git add .
if %errorlevel% neq 0 (
    echo Loi: Khong the add files
    pause
    exit /b 1
)

echo.
echo [3/6] Commit code...
git commit -m "Initial commit: Blog ca nhan Le Thanh Nhon voi chung chi Cisco"
if %errorlevel% neq 0 (
    echo Loi: Khong the commit
    pause
    exit /b 1
)

echo.
echo [4/6] Dat branch la main...
git branch -M main
if %errorlevel% neq 0 (
    echo Loi: Khong the doi branch
    pause
    exit /b 1
)

echo.
echo [5/6] Them remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Nothingtoread/My-Blog.git
if %errorlevel% neq 0 (
    echo Loi: Khong the them remote
    pause
    exit /b 1
)

echo.
echo [6/6] Push code len GitHub...
echo LUU Y: Ban se can nhap username va password/token cua GitHub
echo Neu ban su dung 2FA, can su dung Personal Access Token thay vi password
echo.
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo Loi khi push! Co the do:
    echo 1. Chua dang nhap GitHub
    echo 2. Chua co quyen truy cap repository
    echo 3. Can su dung Personal Access Token
    echo.
    echo Huong dan tao Personal Access Token:
    echo 1. Vao GitHub.com > Settings > Developer settings
    echo 2. Personal access tokens > Tokens (classic)
    echo 3. Generate new token (classic)
    echo 4. Chon quyen: repo
    echo 5. Copy token va su dung thay vi password
    echo ========================================
    pause
    exit /b 1
)

echo.
echo ========================================
echo Thanh cong! Code da duoc push len GitHub
echo Repository: https://github.com/Nothingtoread/My-Blog
echo ========================================
pause

