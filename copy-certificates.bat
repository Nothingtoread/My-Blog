@echo off
echo Copying Cisco certificates to public/certificates folder...
xcopy "C:\Users\NHON\Desktop\Cisco-Cert\*.pdf" "public\certificates\" /Y
echo Done! Certificates have been copied.
pause

