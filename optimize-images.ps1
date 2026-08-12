Add-Type -AssemblyName System.Drawing

$maxWidth = 1920
$maxHeight = 1080
$quality = 85

function Optimize-Image {
    param ([string]$sourcePath, [string]$destPath)
    
    try {
        $img = [System.Drawing.Image]::FromFile($sourcePath)
        $originalWidth = $img.Width
        $originalHeight = $img.Height
        
        $ratioX = $maxWidth / $originalWidth
        $ratioY = $maxHeight / $originalHeight
        $ratio = [Math]::Min($ratioX, $ratioY)
        
        if ($ratio -lt 1) {
            $newWidth = [int]($originalWidth * $ratio)
            $newHeight = [int]($originalHeight * $ratio)
        } else {
            $newWidth = $originalWidth
            $newHeight = $originalHeight
        }
        
        $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($newImg)
        
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)
        
        $destDir = Split-Path $destPath -Parent
        if (!(Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        
        $newImg.Save($destPath, $encoder, $encoderParams)
        
        $graphics.Dispose()
        $newImg.Dispose()
        $img.Dispose()
        
        $originalSize = (Get-Item $sourcePath).Length / 1KB
        $newSize = (Get-Item $destPath).Length / 1KB
        $savings = [math]::Round((($originalSize - $newSize) / $originalSize) * 100, 1)
        
        Write-Host "Optimized: $(Split-Path $sourcePath -Leaf) - Original: $([math]::Round($originalSize, 1)) KB to New: $([math]::Round($newSize, 1)) KB (Saved $savings%)"
        
        return $true
    }
    catch {
        Write-Host "Error processing $(Split-Path $sourcePath -Leaf): $($_.Exception.Message)"
        return $false
    }
}

Write-Host "JURASSIC LANDSCAPE IMAGE OPTIMIZER"
Write-Host "=================================="

$allImages = Get-ChildItem -Path "images" -Include *.jpg,*.jpeg,*.png -Recurse | Where-Object { 
    $_.FullName -notmatch '\\optimized\\' -and 
    $_.FullName -notmatch '\\original-backup\\'
}

$totalImages = $allImages.Count
$optimizedCount = 0

Write-Host "Found $totalImages images to optimize"

foreach ($image in $allImages) {
    $relativePath = $image.FullName.Replace("$(Get-Location)\images\", "")
    $optimizedPath = Join-Path "images" $relativePath
    
    if (Optimize-Image -sourcePath $image.FullName -destPath $optimizedPath) {
        $optimizedCount++
    }
}

Write-Host "=================================="
Write-Host "COMPLETE - Optimized: $optimizedCount images"
