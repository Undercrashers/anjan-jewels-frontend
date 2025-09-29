# PowerShell script to update all product image URLs with Google Drive URLs

$productUpdates = @{
    'bold-heart-pendant' = @(
        "https://drive.google.com/uc?export=view&id=19s-F4hmniVKe-1pFXxN1V6IW54Xcr9rO",
        "https://drive.google.com/uc?export=view&id=1JdlEB71RKOAxrMAjrEziFRNlNrbAORa-",
        "https://drive.google.com/uc?export=view&id=1PCdYJioIEKwYtM1MfOxsDfWQ8_o8fP4A",
        "https://drive.google.com/uc?export=view&id=1FHw_zZJtJcy-pWLsdNhlI8YOBcUmi4Qg",
        "https://drive.google.com/uc?export=view&id=1LI1YhiD173c1LHPDE62KELgWZke-GIJk"
    );
    'bow-heart-pendant' = @(
        "https://drive.google.com/uc?export=view&id=1-NoKRZ0ybRNRrw9iek3EQEZeqqWFAYn3",
        "https://drive.google.com/uc?export=view&id=1VdtnVMOei0USEFnsb-Vlbf7ekGZlF6G6",
        "https://drive.google.com/uc?export=view&id=1-BVrzSUEeSc2S9wPuEAY5KtnA9cHvAoR"
    );
    'bow-dangling-heart-necklace' = @(
        "https://drive.google.com/uc?export=view&id=1jsugccP3JPHNkdbvtyE0PnxVOnIrOdWV",
        "https://drive.google.com/uc?export=view&id=1tEvVcMv0N3DjzCGvflzj--QbOvOZi2ux",
        "https://drive.google.com/uc?export=view&id=1V8ldLVPMesxpfJIC_9Sz89Vi62zFC7_-",
        "https://drive.google.com/uc?export=view&id=13ScrF5H_iW9_Ze6thvNYKRHJJXTyS4Oc"
    );
}

Write-Host "Product URL mapping created for manual update"
Write-Host "Use these URLs to replace the corresponding image arrays in products.ts"