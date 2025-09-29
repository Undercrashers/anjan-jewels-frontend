// Legacy Google Drive image utilities - NO LONGER USED
// All products now use local images from /public/Anti-Tarnish/
// This file is kept for reference only

// Helper function to convert Google Drive share URL to direct download URL
function convertGoogleDriveUrl(shareUrl: string): string {
  const fileIdMatch = shareUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (fileIdMatch) {
    const fileId = fileIdMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return shareUrl; // fallback to original URL if no match
}

// Google Drive Image URLs mapped to products
export const GOOGLE_DRIVE_IMAGES = {
  // Necklaces
  "butterfly-heart-pendant": [
    "https://drive.google.com/uc?export=view&id=1LOog-D4mjsNX8l8sbTB78yn9iFc6sMxI",
    "https://drive.google.com/uc?export=view&id=1x_aF7EVO7tX56SfgJ-lEjRSpsniJutLv",
    "https://drive.google.com/uc?export=view&id=1hS0gsoOVmAfY6yN7Q0w3f6xDz-iaJ4-7",
    "https://drive.google.com/uc?export=view&id=1wRS-Xj7l84FmjrP_WUFqp-VPnYQiYnEe"
  ],
  "black-clover-necklace": [
    "https://drive.google.com/uc?export=view&id=18c321f2i2DF1JWV_40ES_LHKzgwjuEbz",
    "https://drive.google.com/uc?export=view&id=1Dg4jeUY5StVTBNVr0vEtIO0YDrFvHjdJ",
    "https://drive.google.com/uc?export=view&id=15ymWHEG-HYSS3otOO4ySt2ug_iFpaL7O",
    "https://drive.google.com/uc?export=view&id=1wLjKTsl6ot_1tqslNBEGf0qKV8bNSOfT"
  ],
  "bold-heart-pendant": [
    "https://drive.google.com/uc?export=view&id=19s-F4hmniVKe-1pFXxN1V6IW54Xcr9rO",
    "https://drive.google.com/uc?export=view&id=1JdlEB71RKOAxrMAjrEziFRNlNrbAORa-",
    "https://drive.google.com/uc?export=view&id=1PCdYJioIEKwYtM1MfOxsDfWQ8_o8fP4A",
    "https://drive.google.com/uc?export=view&id=1FHw_zZJtJcy-pWLsdNhlI8YOBcUmi4Qg",
    "https://drive.google.com/uc?export=view&id=1LI1YhiD173c1LHPDE62KELgWZke-GIJk"
  ],
  "bow-heart-pendant": [
    "https://drive.google.com/uc?export=view&id=1-NoKRZ0ybRNRrw9iek3EQEZeqqWFAYn3",
    "https://drive.google.com/uc?export=view&id=1VdtnVMOei0USEFnsb-Vlbf7ekGZlF6G6",
    "https://drive.google.com/uc?export=view&id=1-BVrzSUEeSc2S9wPuEAY5KtnA9cHvAoR"
  ],
  "bow-dangling-heart-necklace": [
    "https://drive.google.com/uc?export=view&id=1jsugccP3JPHNkdbvtyE0PnxVOnIrOdWV",
    "https://drive.google.com/uc?export=view&id=1tEvVcMv0N3DjzCGvflzj--QbOvOZi2ux",
    "https://drive.google.com/uc?export=view&id=1V8ldLVPMesxpfJIC_9Sz89Vi62zFC7_-",
    "https://drive.google.com/uc?export=view&id=13ScrF5H_iW9_Ze6thvNYKRHJJXTyS4Oc"
  ],
  "dainty-golden-heart-necklace": [
    "https://drive.google.com/uc?export=view&id=1sIJjbmOlk0QYuFzoyhAgK3cENkJbM0jp",
    "https://drive.google.com/uc?export=view&id=1o348nctLHP3INl6bigewjok4gCPxgKMp",
    "https://drive.google.com/uc?export=view&id=1VA88CV9sHRgnmGIv5-OmxBDNc0S98_qJ",
    "https://drive.google.com/uc?export=view&id=139Ic2lIxQwJhBBOlQ2TRr3-rqeGs9y6x",
    "https://drive.google.com/uc?export=view&id=1dcUSod689GqFuHFV-4RubiH1KC0fjZP7",
    "https://drive.google.com/uc?export=view&id=1rR-pHYbpAEEQ9KUcRoQtMOagLrNwtFCW"
  ],
  "four-leaf-clover-pendant": [
    "https://drive.google.com/uc?export=view&id=1hpYv7iW6GpU7CvRo16GXMUmzjuKhFIwk",
    "https://drive.google.com/uc?export=view&id=1RqsRdMzzAoNvANLzXvxkgCAONsNe9xzi",
    "https://drive.google.com/uc?export=view&id=1bDch5Q7j52fFtuCCA4GaO5OdLx39tSKF"
  ],
  "golden-bow-pendant-chain": [
    "https://drive.google.com/uc?export=view&id=1Zpwu3YqPKrS80iqjzQWphYvPBPNxC7oj",
    "https://drive.google.com/uc?export=view&id=1enuPqa9SvrcPYBi0dswG_goO62cCngpt",
    "https://drive.google.com/uc?export=view&id=15VFb_mALE8byoXHZofNohdPVV-QLOJwC"
  ],
  "golden-dolphin-pendant-chain": [
    "https://drive.google.com/uc?export=view&id=14176LLlCBt8XD93fLjaS3ZxlhAU0AkFo",
    "https://drive.google.com/uc?export=view&id=1aF8cwCS7YXh1xHITRyM2544XSKqj-W8j",
    "https://drive.google.com/uc?export=view&id=1z2abeDtQN9b6V2Kzio8qJR-mCjzCX1NU"
  ],
  "green-emerald-oval-double-layer": [
    "https://drive.google.com/uc?export=view&id=1cGEISkoDZHyi88wGPctMXmsf91Q6dL1Z",
    "https://drive.google.com/uc?export=view&id=1ggdle2PTe3e6zsX2Pp_DMt1dfGh0NpFZ",
    "https://drive.google.com/uc?export=view&id=1JfV5CvQc_5y7EFSehVr9AFsHV0Zk0OVv"
  ],
  "green-emerald-square-double-layer": [
    "https://drive.google.com/uc?export=view&id=1-Qpc09VWSEg-UPSRKcc1x1Ihe1aCJYx_",
    "https://drive.google.com/uc?export=view&id=189AovXGUZxgkwXh1bu1hf4fcZlncvc7C",
    "https://drive.google.com/uc?export=view&id=1vZtGd5_feYhh1ytY_U9aMupg12Jj-wJx",
    "https://drive.google.com/uc?export=view&id=1Fptfbv2_0HtG8pomldfLWM2TvamI9450"
  ],
  "moon-midnight-necklace": [
    "https://drive.google.com/uc?export=view&id=1EihJbcjZK6mIefqYLDRRuJ_UhhYmQzYf",
    "https://drive.google.com/uc?export=view&id=1kPy9vsRdwVidENi9_1NcE3W0asLrDx3l",
    "https://drive.google.com/uc?export=view&id=1-U9M_FQhsawVxuOx7PicP55o9VinKopW",
    "https://drive.google.com/uc?export=view&id=1LrOZOo-GCEq8ZXW_khbB1M3eIfMED2gc"
  ],
  "pretty-heart-necklace": [
    "https://drive.google.com/uc?export=view&id=136ZQ_Q2rsPKTdoj7SR_bC6E0Fx_ZWMfF",
    "https://drive.google.com/uc?export=view&id=1QM20PKrT8h9pwUZ5IZiGPAk_inujhDDj",
    "https://drive.google.com/uc?export=view&id=1pHv61lK1CB-aF-RV6wISOb9PzlVDvTCz",
    "https://drive.google.com/uc?export=view&id=1MS7953g1W8WlTc9i4ShxpJmPNHukOahq"
  ],
  "single-diamond-studded-necklace": [
    "https://drive.google.com/uc?export=view&id=1_4igiugwvK2sCCrkDRstirkmKPI-N0to",
    "https://drive.google.com/uc?export=view&id=1qjOfj-Go03LTQDywJnKFK243lglzf_lv",
    "https://drive.google.com/uc?export=view&id=1aGoa5yo_Nhz4BtsiV0YrLqZ3fn71bkZS",
    "https://drive.google.com/uc?export=view&id=1azlIUrLcDidHEol_oJXDrXmGpn0JdBl9",
    "https://drive.google.com/uc?export=view&id=1fyHSnGqQSQD8CpD6SfMuUBLiwDuXqaMM",
    "https://drive.google.com/uc?export=view&id=1dOU_QGTr-HzgkbW4MvDP___Mz4XBn4x7"
  ],
  "tiny-rose-golden-pendant-chain": [
    "https://drive.google.com/uc?export=view&id=1lP-B-Vo3lLSy0xGRQDMX6JrwhxJ0fvwI",
    "https://drive.google.com/uc?export=view&id=1T3rleVd_Qz1o5BzT7yB8waFyNJwtw7SE",
    "https://drive.google.com/uc?export=view&id=1DlyGI5jK4nS6I2DlxvWHLYTOhcedfBBM",
    "https://drive.google.com/uc?export=view&id=1xDWkVIXOqupbiQg5zoPxJCKAfm51TKVd"
  ],
  "valentine-gold-plated-sweet-rose": [
    "https://drive.google.com/uc?export=view&id=1_02Tka4hJ9iSy9YkmUSxBIN0mc-smlO7",
    "https://drive.google.com/uc?export=view&id=1f1Z74yVoDzDY4j8buRc1juyie9G24rqg",
    "https://drive.google.com/uc?export=view&id=18d40KEO-uHV2UcTN4x2yeI5p6TWKUoPv",
    "https://drive.google.com/uc?export=view&id=1CPJ-M1Q6uDRR_NaA2uOwn_6F28Y8Pj0x"
  ],
  "viva-necklace": [
    "https://drive.google.com/uc?export=view&id=1yQtFQm8d0coN8pL_pNutjilkFhpElOtH",
    "https://drive.google.com/uc?export=view&id=1Vli5A8IDyE_1hMZuOJbYhZgxRUKSvuWg",
    "https://drive.google.com/uc?export=view&id=1tyy1lzl6hDs9ELzBMXoqglLF3jeRXGo8",
    "https://drive.google.com/uc?export=view&id=1myO18823e_7CVDWfZvwgYaiua27cz4Ow"
  ],

  // Bracelets
  "bracelet": [
    "https://drive.google.com/uc?export=view&id=16S0L7SUGwMSxeGmD4RCOrjVNqwCTI0Mc",
    "https://drive.google.com/uc?export=view&id=1hSRtcX-x2aorajxHcXnruEK1yaupV05g",
    "https://drive.google.com/uc?export=view&id=1CZsfrfwHwNxb2MuUUEIs-ZhBToh7gPRI",
    "https://drive.google.com/uc?export=view&id=1a48t0zbPHoBQusIhnJKSiQJJpchIBzVh"
  ],
  "elegant-pearl-bracelet": [
    "https://drive.google.com/uc?export=view&id=1mk2-zxpuEA2ZxoLiglhwsN0ugpneTKN5",
    "https://drive.google.com/uc?export=view&id=11J_10aUFxtibNluRCcYVkS15lSVK5m0B",
    "https://drive.google.com/uc?export=view&id=1Ju5EUnS_D5yze30yvHgrWo7T-3_0_Jn4"
  ],
  "gold-plated-spiritual-evil-eye": [
    "https://drive.google.com/uc?export=view&id=1Yxl4GC7Grf6lnLpg9E1A1xIA3A96Y3eT",
    "https://drive.google.com/uc?export=view&id=1TYJHzDpDv-78Omi-7X5wKeBNxq3i66de",
    "https://drive.google.com/uc?export=view&id=1Fjlgp6nx4iBHdbv3b7BVPt7FA-Wbq8Lq"
  ],

  // Combos
  "black-clover-pendant-set": [
    "https://drive.google.com/uc?export=view&id=1aXMsToKJDxQJ-2LUrgzTUZmPKz9yhoQK",
    "https://drive.google.com/uc?export=view&id=11F5tM2aXXWYd5c7WXmNJK7sKBh0kfbXa",
    "https://drive.google.com/uc?export=view&id=1ZD7B-Il7XwwCbFdbT-BBp7CHeOuubFEe",
    "https://drive.google.com/uc?export=view&id=1ExnSxGN4qTL7P2FmcPS3vuiLcJuSr5hw",
    "https://drive.google.com/uc?export=view&id=1zkMLvlOSwdFhYrin8X-fqRITXHm3CeMp",
    "https://drive.google.com/uc?export=view&id=1jAbcQxLih1PfCej2TOv1PlxE_UmyY-Us"
  ],
  "diamond-flora-pendant-set": [
    "https://drive.google.com/uc?export=view&id=1aCPGKKfaWc9_mq4iuf8KQrsObhIEt16N",
    "https://drive.google.com/uc?export=view&id=17NRDAEktKUg2971kSeEmhFZYxDAYROlA"
  ],
  "twinkle-heart-pendant-set": [
    "https://drive.google.com/uc?export=view&id=1RssL4pVVnq0EvmUqNKFzAnulhSpnaoVb",
    "https://drive.google.com/uc?export=view&id=1yEuBKl3BTY1rP_VD0nF0QZucWVG6Fa__"
  ],
  "white-clover-pendant-set": [
    "https://drive.google.com/uc?export=view&id=1Ta0Ai87GyAp2fig1KpVTsubpH_AbkV4P",
    "https://drive.google.com/uc?export=view&id=1ZcFM4yGFj1CPGy3z1otfdXJ0GWKIQlve",
    "https://drive.google.com/uc?export=view&id=1YrMPhnCoUVsG6t9n4lLgdXNKGmJ_GYyT",
    "https://drive.google.com/uc?export=view&id=18-Taqn9yt5NV2P6Rgb_D0_IpRSb8A7fk"
  ]
};