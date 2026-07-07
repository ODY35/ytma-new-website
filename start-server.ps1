$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Server running at http://localhost:8080/"
$mimeTypeMap = @{
    ".html" = "text/html"
    ".js"   = "text/javascript"
    ".css"  = "text/css"
    ".json" = "application/json"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".mp4"  = "video/mp4"
    ".ttf"  = "font/ttf"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
}
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    $urlPath = $request.Url.LocalPath
    if ($urlPath -eq "/") {
        $urlPath = "/index.html"
    }
    $filePath = Join-Path (Join-Path $PSScriptRoot "public") $urlPath.TrimStart("/")
    Write-Host "$($request.HttpMethod) $urlPath"
    if (Test-Path $filePath) {
        $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
        $contentType = $mimeTypeMap[$extension]
        if (-not $contentType) {
            $contentType = "application/octet-stream"
        }
        $response.ContentType = $contentType
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $content.Length
        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $response.StatusCode = 404
        $response.StatusDescription = "Not Found"
    }
    $response.Close()
}
