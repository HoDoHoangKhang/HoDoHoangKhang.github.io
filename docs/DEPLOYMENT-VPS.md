# Deploy portfolio lên VPS

Hướng dẫn deploy Next.js portfolio lên VPS (Ubuntu/Debian) với PM2 và Nginx.

**Mục lục:**

- [VPS thường (chỉ Nginx)](#vps-thường-chỉ-nginx) — Bước 1–6 bên dưới
- [VPS đang dùng DirectAdmin (nhiều site)](#vps-đang-dùng-directadmin-nhiều-site) — dùng reverse proxy trong DA

---

# VPS thường (chỉ Nginx)

## Yêu cầu VPS

- **OS**: Ubuntu 22.04 LTS hoặc Debian 12 (khuyến nghị)
- **Node.js**: 22.x (theo `package.json` → `engines.node`)
- **RAM**: tối thiểu 1GB (2GB tốt hơn cho build)
- Có quyền SSH và sudo

---

## Bước 1: Chuẩn bị VPS

### 1.1 Cập nhật hệ thống

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Cài Node.js 22

```bash
# Dùng NodeSource
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# Kiểm tra
node -v   # v22.x.x
npm -v
```

### 1.3 (Tùy chọn) Cài pnpm

```bash
sudo npm install -g pnpm
pnpm -v
```

### 1.4 Cài PM2 (process manager)

```bash
sudo npm install -g pm2
pm2 -v
```

---

## Bước 2: Đưa code lên VPS

### Cách A: Clone từ Git (khuyến nghị nếu repo đã push)

```bash
# Tạo user chạy app (tùy chọn, bảo mật hơn)
sudo adduser --disabled-password --gecos "" app
sudo su - app

# Clone repo (thay YOUR_USERNAME và YOUR_REPO)
git clone https://github.com/YOUR_USERNAME/hoangkhang-portfolio.git
cd hoangkhang-portfolio
```

### Cách B: Upload bằng rsync từ máy local

Trên **máy của bạn** (trong thư mục project):

```bash
# Thay USER, IP_VPS và đường dẫn đích
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' \
  ./ USER@IP_VPS:/home/USER/hoangkhang-portfolio/
```

Sau đó SSH vào VPS và vào đúng thư mục project.

---

## Bước 3: Cài đặt và build trên VPS

Trên VPS, trong thư mục project (ví dụ `/home/USER/hoangkhang-portfolio`):

```bash
cd /home/USER/hoangkhang-portfolio

# Cài dependency (dùng npm nếu không cài pnpm)
npm install
# hoặc: pnpm install

# Tạo file .env từ .env.example và sửa cho đúng domain
cp .env.example .env
nano .env
```

**Nội dung `.env` tối thiểu cho production:**

```env
APP_URL=https://hoangkhang.tech
NEXT_PUBLIC_APP_URL=https://hoangkhang.tech

NEXT_PUBLIC_REGISTRY_NAMESPACE=@hoangkang
NEXT_PUBLIC_REGISTRY_NAMESPACE_URL=https://hoangkhang.tech/r/{name}.json

# Để trống nếu không dùng
GITHUB_API_TOKEN=
GITHUB_CONTRIBUTIONS_API_URL=https://github-contributions-api.jogruber.de
NEXT_PUBLIC_DMCA_URL=https://www.dmca.com

NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_POSTHOG_UI_HOST=
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=
```

Build:

```bash
npm run build
# hoặc: pnpm build
```

Kiểm tra có thư mục `.next` và không báo lỗi.

---

## Bước 4: Chạy app bằng PM2

Trong thư mục project:

```bash
# Chạy Next.js production server
pm2 start npm --name "portfolio" -- start
# hoặc nếu dùng pnpm:
# pm2 start pnpm --name "portfolio" -- start

# App chạy ở port 3000 (mặc định Next.js)
pm2 status
pm2 logs portfolio
```

**Khởi động lại khi reboot:**

```bash
pm2 save
pm2 startup
# Chạy đúng dòng lệnh mà PM2 in ra (có sudo ...)
```

Các lệnh hữu ích:

```bash
pm2 restart portfolio   # Restart sau khi sửa code/env
pm2 stop portfolio
pm2 delete portfolio   # Xóa app khỏi PM2
```

---

## Bước 5: Nginx làm reverse proxy

### 5.1 Cài Nginx

```bash
sudo apt install -y nginx
```

### 5.2 Tạo config site

```bash
sudo nano /etc/nginx/sites-available/hoangkhang
```

Dán (thay `hoangkhang.tech` bằng domain của bạn):

```nginx
server {
    listen 80;
    server_name hoangkhang.tech www.hoangkhang.tech;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5.3 Bật site và reload Nginx

```bash
sudo ln -s /etc/nginx/sites-available/hoangkhang /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Lúc này truy cập `http://hoangkhang.tech` sẽ vào app qua Nginx.

---

## Bước 6: SSL (HTTPS) với Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d hoangkhang.tech -d www.hoangkhang.tech
```

Làm theo hướng dẫn (email, đồng ý điều khoản). Certbot sẽ tự sửa Nginx để dùng HTTPS và gia hạn tự động.

Kiểm tra gia hạn:

```bash
sudo certbot renew --dry-run
```

---

## Cập nhật code sau này (khi dùng Git)

Trên VPS, trong thư mục project:

```bash
cd /home/USER/hoangkhang-portfolio
git pull
npm install
# hoặc: pnpm install
npm run build
pm2 restart portfolio
```

---

## Checklist nhanh (VPS thường)

- [ ] VPS có Node 22, PM2, Nginx
- [ ] Code đã lên VPS (git clone hoặc rsync)
- [ ] Đã tạo `.env` và sửa `APP_URL` / `NEXT_PUBLIC_APP_URL`
- [ ] `npm run build` thành công
- [ ] PM2 chạy `npm start`, `pm2 save` + `pm2 startup`
- [ ] Nginx proxy port 80 → 127.0.0.1:3000
- [ ] DNS trỏ domain về IP VPS (A record)
- [ ] Certbot cấp SSL cho domain

---

# VPS đang dùng DirectAdmin (nhiều site)

Khi VPS đã cài **DirectAdmin** và chạy nhiều site, bạn **không** cài Nginx/Certbot riêng cho site này. Cách làm:

- Chạy Next.js bằng **PM2** (port 3000 hoặc port riêng).
- Trong **DirectAdmin** tạo domain (hoặc subdomain) cho portfolio, bật SSL bằng tính năng SSL của DA, rồi thêm **Custom HTTPD** để reverse proxy về app Node.

Các site khác trên DA vẫn chạy bình thường; chỉ domain của portfolio mới trỏ về Node.

## Yêu cầu

- VPS đã có DirectAdmin, các site khác hoạt động bình thường.
- Có quyền **SSH** (root hoặc user có sudo).
- Trên server đã có **Node.js 22** và **PM2** (nếu chưa, xem Bước 1 bên trên để cài).

## Bước 1: Đưa code lên server

Đặt project vào thư mục của user DirectAdmin (để cùng user với domain), ví dụ:

- `/home/username/hoangkhang-portfolio`  
  hoặc  
- `/home/username/domains/hoangkhang.tech/portfolio`

**Cách A – Clone từ Git (trên VPS):**

```bash
# SSH vào VPS, chuyển sang user DA (thay username bằng user trong DA)
sudo su - username
cd ~
git clone https://github.com/YOUR_USERNAME/hoangkhang-portfolio.git
cd hoangkhang-portfolio
```

**Cách B – Rsync từ máy bạn:**

Trên máy local (trong thư mục project):

```bash
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' \
  ./ username@IP_VPS:/home/username/hoangkhang-portfolio/
```

## Bước 2: Cài dependency, .env và build

Trên VPS, trong thư mục project:

```bash
cd /home/username/hoangkhang-portfolio   # chỉnh đúng đường dẫn

npm install
cp .env.example .env
nano .env
```

Sửa `.env`: đặt `APP_URL` và `NEXT_PUBLIC_APP_URL` đúng domain (ví dụ `https://hoangkhang.tech`). Sau đó:

```bash
npm run build
```

## Bước 3: Chạy app bằng PM2

Vẫn trong thư mục project:

```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
# Chạy đúng lệnh mà PM2 in ra (có thể cần sudo)
```

App chạy ở **port 3000**. Các site khác trên DA không bị ảnh hưởng.

## Bước 4: Domain và SSL trong DirectAdmin

1. **Thêm domain** (nếu chưa có):  
   DirectAdmin → **Account Manager** → **Domain Setup** → thêm domain (ví dụ `hoangkhang.tech`).

2. **Bật SSL cho domain**:  
   Vào domain đó → **SSL Certificates** → kích hoạt Let's Encrypt (hoặc SSL có sẵn trong DA). Không cần chạy Certbot tay.

3. **Reverse proxy qua Custom HTTPD**:  
   Với domain portfolio (ví dụ `hoangkhang.tech`) → **Custom HTTPD Configuration** (hoặc **Customize Your Domain** → Custom config, tùy phiên bản DA).

   Thêm **Custom Configuration** cho **Apache** (DA thường dùng Apache). Ví dụ:

```apache
# Reverse proxy sang Next.js (port 3000)
ProxyPreserveHost On
ProxyPass /.well-known !
ProxyPass / http://127.0.0.1:3000/
ProxyPassReverse / http://127.0.0.1:3000/
```

   Nếu DA dùng **Nginx** làm front-end / reverse proxy, phần Custom HTTPD có thể là cho Nginx. Khi đó dùng dạng:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

   Lưu config rồi **rebuild config** / **restart** web server trong DA (nút **Rebuild** hoặc **Restart** trong phần HTTPD).

## Bước 5: Kiểm tra

- DNS của domain đã trỏ về IP VPS.
- Mở `https://hoangkhang.tech` (hoặc domain bạn chọn) → phải vào Next.js portfolio.
- Các site khác trên DirectAdmin vẫn mở bình thường.

## Cập nhật code (DirectAdmin)

Sau khi sửa code (ví dụ `git pull`):

```bash
cd /home/username/hoangkhang-portfolio
git pull
npm install
npm run build
pm2 restart portfolio
```

## Checklist nhanh (DirectAdmin)

- [ ] Node 22 + PM2 đã cài trên VPS
- [ ] Code nằm trong thư mục user DA (ví dụ `/home/username/hoangkhang-portfolio`)
- [ ] Đã tạo `.env` và sửa `APP_URL` / `NEXT_PUBLIC_APP_URL`
- [ ] `npm run build` thành công, PM2 chạy `npm start`, `pm2 save` + `pm2 startup`
- [ ] Trong DA: domain đã thêm, SSL bật, **Custom HTTPD** reverse proxy về `http://127.0.0.1:3000`
- [ ] DNS trỏ domain về IP VPS

**Lưu ý:** Nếu DA của bạn dùng OpenLiteSpeed hoặc cấu hình đặc biệt, vẫn là cùng ý tưởng: thêm reverse proxy cho domain portfolio trỏ về `127.0.0.1:3000`, không cần cài Nginx/Certbot riêng cho site này.

Nếu bạn gửi thêm OS và domain thực tế (hoặc IP), có thể viết lại từng lệnh đúng với VPS của bạn.
