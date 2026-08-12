# Optimize images for Projects 2, 3, and 6 to fix hover delays
Add-Type -AssemblyName System.Drawing

$projects = @("PROJECT 2", "PROJECT 3", "PROJECT 6")
$maxWidth = 1600
$maxHeight = 1200
$quality = 80L

foreach ($project in $projects) {
    $sourcePath = "images\PROJECTS FOR WEBSITE\$project"
    
    if (Test-Path $sourcePath) {
        Write-Host "`nOptimizing $project..." -ForegroundColor Cyan
        
        $files = Get-ChildItem -Path $sourcePath -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|JPG|JPEG|PNG)$' }
        Write-Host "  Found $($files.Count) image files" -ForegroundColor Yellow
        
        foreach ($file in $files) {
            try {
                $originalSize = $file.Length
                
                # Load image
                $img = [System.Drawing.Image]::FromFile($file.FullName)
                
                # Calculate new dimensions
                $ratio = [Math]::Min($maxWidth / $img.Width, $maxHeight / $img.Height)
                if ($ratio -ge 1) { $ratio = 1 }
                
                $newWidth = [int]($img.Width * $ratio)
                $newHeight = [int]($img.Height * $ratio)
                
                # Create new bitmap
                $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
                $graphics = [System.Drawing.Graphics]::FromImage($newImg)
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
                
                # Dispose original image so we can overwrite
                $img.Dispose()
                $graphics.Dispose()
                
                # Save to temp file first
                $tempFile = "$($file.FullName).temp"
                $outputExt = if ($file.Extension -eq ".png") { ".jpeg" } else { $file.Extension }
                
                # Get JPEG encoder
                $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
                $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
                $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)
                
                $newImg.Save($tempFile, $jpegCodec, $encoderParams)
                $newImg.Dispose()
                
                # If PNG, rename to .jpeg
                if ($file.Extension -eq ".png") {
                    $newFileName = [System.IO.Path]::ChangeExtension($file.FullName, ".jpeg")
                    Remove-Item $file.FullName -Force
                    Move-Item $tempFile $newFileName -Force
                    $finalFile = Get-Item $newFileName
                } else {
                    # Replace original
                    Remove-Item $file.FullName -Force
                    Move-Item $tempFile $file.FullName -Force
                    $finalFile = Get-Item $file.FullName
                }
                
                $newSize = $finalFile.Length
                $reduction = [Math]::Round((1 - ($newSize / $originalSize)) * 100, 1)
                
                Write-Host "  OK $($file.Name) -> $($finalFile.Name): $([Math]::Round($originalSize/1KB, 0))KB -> $([Math]::Round($newSize/1KB, 0))KB (-$reduction%)" -ForegroundColor Green
                
            } catch {
                Write-Host "  X Failed to optimize $($file.Name): $_" -ForegroundColor Red
            }
        }
    }
}

Write-Host "`nOptimization complete!" -ForegroundColor Green
