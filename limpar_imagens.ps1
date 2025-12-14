# Script para apagar imagens desnecessárias em Calçados
# Mantém apenas as imagens realmente usadas no site

$imagensEmUso = @{
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B22" = @(1, 7, 14, 21, 28)
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B23" = @(1, 4, 8, 12, 16)
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B30 Countdown" = @(1, 9, 18, 27, 36)
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B31" = @(1, 5, 10, 15, 20)
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B44 Blade" = @(1, 6, 12, 18, 24)
    "C:\Users\Utilizador\Desktop\flex_store\images\McQueen\McQueen Oversized Sneaker" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\McQueen\McQueen Tread Slick" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\Nike\Jordan 4" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\Nike\Jordan 11 Retro" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\Nike\Jordan 12 retro" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\Nike\Jordan 13 retro" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\Timberland\Timberland Classic Boot" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\Timberland\Timberland Low-Cut" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\Timberland\Timberland Beap" = @(1, 2, 3, 4, 5)
    "C:\Users\Utilizador\Desktop\flex_store\images\Timberland\Timberland LV" = @(1, 2, 3, 4, 5)
}

$totalApagadas = 0
$totalMantidas = 0

foreach ($pasta in $imagensEmUso.Keys) {
    if (Test-Path $pasta) {
        $usadas = $imagensEmUso[$pasta]
        $nomePasta = Split-Path -Leaf $pasta
        
        $ficheiros = Get-ChildItem -Path $pasta -File -Filter "*.jpg"
        
        foreach ($ficheiro in $ficheiros) {
            # Extrair número do ficheiro (se existir)
            if ($ficheiro.BaseName -match '\((\d+)\)') {
                $num = [int]$matches[1]
                
                if ($num -notin $usadas) {
                    # Ficheiro NÃO está em uso - APAGAR
                    Remove-Item -Path $ficheiro.FullName -Force
                    $totalApagadas++
                } else {
                    # Ficheiro está em uso - MANTER
                    $totalMantidas++
                }
            }
        }
    }
}

Write-Host ""
Write-Host "LIMPEZA CONCLUIDA!" -ForegroundColor Green
Write-Host "Ficheiros apagados: $totalApagadas" -ForegroundColor Red
Write-Host "Ficheiros mantidos: $totalMantidas" -ForegroundColor Green
Write-Host ""
