@echo off
chcp 65001 >nul
echo ===================================================
echo   DONG BO WEBDLS LEN GITHUB / CLOUDFLARE PAGES
echo ===================================================
echo.
git add .
set /p commit_msg="Nhap noi dung cap nhat (hoac an Enter de mac dinh): "
if "%commit_msg%"=="" set commit_msg="Cap nhat de thi va cong thuc"
git commit -m "%commit_msg%"
echo.
echo Dang day code len GitHub...
git push -u origin main
echo.
echo Hoan tat! Neu da bat GitHub Pages hoac Cloudflare Pages, web tren dien thoai se cap nhat sau 10 giay.
pause
