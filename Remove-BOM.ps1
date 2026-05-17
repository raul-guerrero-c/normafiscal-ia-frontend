$files = Get-ChildItem -Path "src" -Recurse -Include "*.js", "*.jsx" -File

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllBytes($file.FullName)
    
    if ($content.Length -gt 3 -and $content[0] -eq 0xEF -and $content[1] -eq 0xBB -and $content[2] -eq 0xBF) {
        $newContent = $content[3..($content.Length-1)]
        [System.IO.File]::WriteAllBytes($file.FullName, $newContent)
        Write-Host "Removido BOM de: $($file.Name)"
    }
}

Write-Host "Listo!"