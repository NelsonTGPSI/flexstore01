# Script final para apagar TODAS as imagens desnecessárias em calçados
# Considerando:
# 1. Ficheiros com números NÃO em uso
# 2. Ficheiros soltos (sem número) que não estão sendo usados

$config = @{
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B22" = @{
        usadas = @(1, 7, 14, 21, 28)
        baseNames = @("Dior B22")
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B23" = @{
        usadas = @(1, 4, 8, 12, 16)
        baseNames = @("Dior B23")
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B30 Countdown" = @{
        usadas = @(1, 9, 18, 27, 36)
        baseNames = @("Dior B30 Countdown")
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B31" = @{
        usadas = @(1, 5, 10, 15, 20)
        baseNames = @("Dior B31")
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Dior\Dior B44 Blade" = @{
        usadas = @(1, 6, 12, 18, 24)
        baseNames = @("Dior B44 Blade")
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\McQueen\McQueen Oversized Sneaker" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @()
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\McQueen\McQueen Tread Slick" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @()
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Nike\Jordan 4" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @("Nike Jordan 4")
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Nike\Jordan 11 Retro" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @("Nike Jordan 11 Retro")
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Nike\Jordan 12 retro" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @()
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Nike\Jordan 13 retro" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @()
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Timberland\Timberland Classic Boot" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @()
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Timberland\Timberland Low-Cut" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @()
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Timberland\Timberland Beap" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @()
    }
    "C:\Users\Utilizador\Desktop\flex_store\images\Timberland\Timberland LV" = @{
        usadas = @(1, 2, 3, 4, 5)
        baseNames = @()
    }
}

$totalApagadas = 0

foreach ($pasta in $config.Keys) {
    if (Test-Path $pasta) {
        $usadas = $config[$pasta].usadas
        $baseNames = $config[$pasta].baseNames
        
        foreach ($file in Get-ChildItem -Path $pasta -File -Filter "*.jpg") {
            $apagar = $false
            
            # Verificar se tem número e se está fora da lista de usados
            if ($file.BaseName -match '\((\d+)\)') {
                $num = [int]$matches[1]
                if ($num -notin $usadas) {
                    $apagar = $true
                }
            } else {
                # Ficheiro sem número - verificar se está na lista de manter
                if ($file.BaseName -notin $baseNames) {
                    $apagar = $true
                }
            }
            
            if ($apagar) {
                Remove-Item -Path $file.FullName -Force
                $totalApagadas++
            }
        }
    }
}

Write-Host "Limpeza concluida: $totalApagadas ficheiros apagados" -ForegroundColor Green
