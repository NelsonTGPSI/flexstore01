#!/usr/bin/env pwsh

# FlexStore GitHub Push Script
Write-Host "🚀 Iniciando push para GitHub..." -ForegroundColor Cyan

$repoPath = "C:\Users\Utilizador\Desktop\flex_store"
Set-Location $repoPath

# Check git status
Write-Host "`n📊 Status atual:" -ForegroundColor Yellow
git status

# Add all changes
Write-Host "`n📦 Adicionando ficheiros..." -ForegroundColor Yellow
git add -A

# Create commit
Write-Host "`n💾 Criando commit..." -ForegroundColor Yellow
git commit -m "feat: Complete SEO optimization with bags category, meta tags, schema.org structured data, robots.txt, sitemap.xml, .htaccess performance headers, and microdata for all 71 products"

# Push to GitHub
Write-Host "`n⬆️  Fazendo push para GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "`n✅ SUCESSO! Site disponível em:" -ForegroundColor Green
Write-Host "🌐 https://nelsontgpsi.github.io/flexstore01/" -ForegroundColor Cyan
Write-Host "📦 GitHub: https://github.com/NelsonTGPSI/flexstore01/" -ForegroundColor Cyan

Write-Host "`n📝 Próximas ações:" -ForegroundColor Yellow
Write-Host "1. Submeter sitemap no Google Search Console" -ForegroundColor White
Write-Host "2. Configurar Google Analytics 4" -ForegroundColor White
Write-Host "3. Verificar em Bing Webmaster Tools" -ForegroundColor White
