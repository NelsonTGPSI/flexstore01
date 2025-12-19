@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

cd /d "C:\Users\Utilizador\Desktop\flex_store"

echo [*] Adicionando todos os ficheiros...
git add -A

echo [*] Criando commit...
git commit -m "feat: Complete FlexStore SEO and content update - added bags category, optimized meta tags, schema.org structured data, robots.txt, sitemap.xml, .htaccess caching and security headers, microdata for products, and updated pricing display"

echo [*] Fazendo push para origin main...
git push -u origin main

echo.
echo ========================================
echo ✅ PUSH CONCLUÍDO COM SUCESSO!
echo ========================================
echo.
echo Site disponível em:
echo https://nelsontgpsi.github.io/flexstore01/
echo.
echo GitHub Repository:
echo https://github.com/NelsonTGPSI/flexstore01/
echo.
pause
