# GOAN Web â€” Há»‡ Thá»‘ng ÄÄƒng Nháº­p & BÃ¡n HÃ ng

Dá»± Ã¡n giao diá»‡n GOAN vá»›i gam mÃ u **#33CCFF -> #99FFFF káº¿t há»£p Xanh dÆ°Æ¡ng & Tráº¯ng**, tÃ­ch há»£p Ä‘áº§y Ä‘á»§ danh má»¥c hÃ¬nh áº£nh sáº£n pháº©m thá»±c táº¿ vÃ  liÃªn káº¿t luá»“ng ÄÄƒng nháº­p âž” BÃ¡n hÃ ng.

---

## ðŸ“ Cáº¥u trÃºc thÆ° má»¥c dá»± Ã¡n

```
goan-pos-web/
â”œâ”€â”€ index.html                  # Trang ÄÄƒng nháº­p chÃ­nh thá»©c (máº·c Ä‘á»‹nh)
â”œâ”€â”€ goan-login.html             # Trang ÄÄƒng nháº­p há»‡ thá»‘ng
â”œâ”€â”€ goan-pos.html               # Trang BÃ¡n hÃ ng POS (kÃ¨m giá» hÃ ng & sáº£n pháº©m)
â”œâ”€â”€ server.js                   # Web Server Node.js thuáº§n (cháº¡y cá»¥c bá»™ & Render)
â”œâ”€â”€ package.json                # ThÃ´ng tin cáº¥u hÃ¬nh dá»± Ã¡n
â”œâ”€â”€ render.yaml                 # File Blueprint cáº¥u hÃ¬nh tá»± Ä‘á»™ng trÃªn Render.com
â””â”€â”€ assets/
    â””â”€â”€ products/               # 26 áº£nh sáº£n pháº©m nÆ°á»›c Ã©p, trÃ , bÃ¡nh, Ä‘á»“ uá»‘ng
```

---

## ðŸš€ CÃ¡ch 1: Cháº¡y thá»­ trÃªn mÃ¡y tÃ­nh cÃ¡ nhÃ¢n (Offline)

### Lá»±a chá»n A: Má»Ÿ trá»±c tiáº¿p báº±ng trÃ¬nh duyá»‡t
- Báº¡n chá»‰ cáº§n nháº¥p Ä‘Ãºp (double-click) vÃ o file `index.html` hoáº·c `goan-pos.html` Ä‘á»ƒ má»Ÿ trÃªn Google Chrome, Microsoft Edge, Cá»‘c Cá»‘c.

### Lá»±a chá»n B: Cháº¡y qua Node.js Web Server
Má»Ÿ PowerShell / Terminal táº¡i thÆ° má»¥c `goan-pos-web` vÃ  cháº¡y lá»‡nh:
```bash
node server.js
```
Truy cáº­p trÃ¬nh duyá»‡t: **`http://localhost:3000`**

---

## ðŸŒ CÃ¡ch 2: Deploy lÃªn Render.com (Miá»…n phÃ­ 100%, khÃ´ng lo phÃ­ áº£nh)

Render há»— trá»£ **Static Site** hoÃ n toÃ n miá»…n phÃ­, khÃ´ng giá»›i háº¡n dung lÆ°á»£ng áº£nh tÄ©nh, bÄƒng thÃ´ng 100GB/thÃ¡ng vÃ  cÃ³ chá»©ng chá»‰ SSL (HTTPS) trá»n Ä‘á»i.

### BÆ°á»›c 1: Khá»Ÿi táº¡o Git & Äáº©y lÃªn GitHub
1. Má»Ÿ PowerShell táº¡i thÆ° má»¥c `goan-pos-web`:
   ```bash
   cd "C:\Users\phamv\Desktop\KhÃ³a luáº­n\GOAN\goan-pos-web"
   git init
   git add .
   git commit -m "Khoi tao du an GOAN Web"
   ```
2. Táº¡o má»™t repository má»›i trÃªn GitHub (vÃ­ dá»¥ Ä‘áº·t tÃªn `goan-pos-web`), sau Ä‘Ã³ cháº¡y:
   ```bash
   git branch -M main
   git remote add origin <URL_GITHUB_CUA_BAN>
   git push -u origin main
   ```

### BÆ°á»›c 2: Táº¡o dá»‹ch vá»¥ trÃªn Render.com
1. Truy cáº­p [https://render.com](https://render.com) vÃ  Ä‘Äƒng nháº­p báº±ng tÃ i khoáº£n GitHub cá»§a báº¡n.
2. Nháº¥n nÃºt **New +** á»Ÿ gÃ³c trÃªn pháº£i âž” Chá»n **Static Site** (KhuyÃªn dÃ¹ng - Miá»…n phÃ­ 100%).
3. Chá»n repository `goan-pos-web` vá»«a táº¡o trÃªn GitHub vÃ  nháº¥n **Connect**.
4. Äiá»n cÃ¡c thÃ´ng tin:
   - **Name**: `goan-pos-web` (hoáº·c tÃªn tÃ¹y thÃ­ch)
   - **Branch**: `main`
   - **Build Command**: Äá»ƒ trá»‘ng (hoáº·c nháº­p `echo "Ready"`)
   - **Publish Directory**: `.` (nháº­p dáº¥u cháº¥m Ä‘á»ƒ phá»¥c vá»¥ thÆ° má»¥c gá»‘c)
5. Nháº¥n **Create Static Site**.
6. Render sáº½ deploy trong vÃ²ng 30 giÃ¢y vÃ  cáº¥p cho báº¡n má»™t Ä‘Æ°á»ng link miá»…n phÃ­ dáº¡ng:
   ðŸ‘‰ **`https://goan-pos-web.onrender.com`**

---

## ðŸ”‘ TÃ i khoáº£n Demo tráº£i nghiá»‡m
- **TÃ i khoáº£n / Email**: `demo@goan.vn`
- **Máº­t kháº©u**: `12345678`
- **MÃ£ OTP**: `123456`
- **TÃ­nh nÄƒng tiá»‡n Ã­ch**: TrÃªn trang Ä‘Äƒng nháº­p cÃ³ sáºµn nÃºt **"Äiá»n nhanh"** vÃ  **"VÃ o tháº³ng POS"** Ä‘á»ƒ thá»­ nghiá»‡m ngay láº­p tá»©c.

