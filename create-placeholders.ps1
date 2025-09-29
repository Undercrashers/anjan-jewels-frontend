# PowerShell script to create placeholder images for all jewelry products

$basePath = "c:\Users\KIIT0001\Coding\anjan-jewels-frontend\public\images"
$placeholderFile = "$basePath\placeholder-jewelry.svg"

# Necklaces
$necklaces = @(
    @("butterfly-heart-pendant", 4),
    @("black-clover-necklace", 4),
    @("bold-heart-pendant", 5),
    @("bow-heart-pendant", 3),
    @("bow-dangling-heart-necklace", 4),
    @("dainty-golden-heart-necklace", 6),
    @("four-leaf-clover-pendant", 3),
    @("golden-bow-pendant-chain", 3),
    @("golden-dolphin-pendant-chain", 3),
    @("green-emerald-oval-double-layer", 3),
    @("green-emerald-square-double-layer", 4),
    @("moon-midnight-necklace", 4),
    @("pretty-heart-necklace", 4),
    @("single-diamond-studded-necklace", 6),
    @("tiny-rose-golden-pendant-chain", 4),
    @("valentine-gold-plated-sweet-rose", 4),
    @("viva-necklace", 4)
)

# Bracelets
$bracelets = @(
    @("bracelet", 4),
    @("elegant-pearl-bracelet", 3),
    @("gold-plated-spiritual-evil-eye", 3)
)

# Combos
$combos = @(
    @("black-clover-pendant-set", 6),
    @("diamond-flora-pendant-set", 2),
    @("twinkle-heart-pendant-set", 2),
    @("white-clover-pendant-set", 4)
)

# Create necklace images
foreach ($item in $necklaces) {
    $name = $item[0]
    $count = $item[1]
    for ($i = 1; $i -le $count; $i++) {
        $targetFile = "$basePath\necklaces\$name-$i.jpg"
        Copy-Item $placeholderFile $targetFile
    }
}

# Create bracelet images
foreach ($item in $bracelets) {
    $name = $item[0]
    $count = $item[1]
    for ($i = 1; $i -le $count; $i++) {
        $targetFile = "$basePath\bracelets\$name-$i.jpg"
        Copy-Item $placeholderFile $targetFile
    }
}

# Create combo images
foreach ($item in $combos) {
    $name = $item[0]
    $count = $item[1]
    for ($i = 1; $i -le $count; $i++) {
        $targetFile = "$basePath\combos\$name-$i.jpg"
        Copy-Item $placeholderFile $targetFile
    }
}

Write-Host "All placeholder images created successfully!"