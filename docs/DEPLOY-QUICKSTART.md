# Deploy portfolio lên VPS mới – từ đầu

Hướng dẫn từng bước cho VPS **mới mua**, chưa cài gì. Làm đúng thứ tự.

**Chuẩn bị:** Bạn cần có:
- **IP VPS** (ví dụ `103.xx.xx.xx`)
- **User SSH** (thường là `root` hoặc `ubuntu`)
- **Domain** (ví dụ `hoangkhang.tech`) — hoặc tạm dùng IP để test
- Repo đã **đẩy lên GitHub** (để clone), hoặc dùng rsync từ máy tính

---

## Phần 1: Kết nối và chuẩn bị VPS

### 1.1 SSH vào VPS

Trên **máy tính của bạn** (Terminal / CMD):

```bash
ssh root@IP_VPS
```

(Thay `IP_VPS` bằng IP thật, ví dụ `ssh root@103.45.67.89`. Nếu dùng user `ubuntu`: `ssh ubuntu@IP_VPS`.)

### 1.2 Cập nhật hệ thống

Trên **VPS**:

```bash
apt update && apt upgrade -y
```

### 1.3 Cài Node.js 22

Trên **VPS**:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs
node -v
npm -v
```

Phải thấy phiên bản Node v22.x và npm.

### 1.4 Cài PM2 và Git

Trên **VPS**:

```bash
npm install -g pm2
apt install -y git
pm2 -v
git --version
```

### 1.5 Cài Nginx (để sau dùng làm reverse proxy)

Trên **VPS**:

```bash
apt install -y nginx
```

---

## Phần 2: Đưa code lên VPS

Chọn **một** trong hai cách.

### Cách A: Clone từ GitHub (nên dùng nếu đã push code)

Trên **VPS**:

```bash
cd /root
git clone https://github.com/TÊN_GITHUB/TÊN_REPO.git hoangkhang-portfolio
cd hoangkhang-portfolio
```

(Thay `TÊN_GITHUB` và `TÊN_REPO` bằng repo thật, ví dụ `git clone https://github.com/hoangkhang/hoangkhang-portfolio.git hoangkhang-portfolio`.)

### Cách B: Upload từ máy bạn bằng rsync

Trên **máy của bạn**, mở terminal trong **thư mục project** (chứa `package.json`):

```bash
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' \
  ./ root@IP_VPS:/root/hoangkhang-portfolio/
```

(Thay `IP_VPS` và `root` nếu bạn dùng user khác.)

Sau đó trên **VPS**:

```bash
cd /root/hoangkhang-portfolio
```

---

## Phần 3: Cài đặt, cấu hình và build

Làm trên **VPS**, trong thư mục `/root/hoangkhang-portfolio` (hoặc đường dẫn bạn đã đặt):

### 3.1 Cài dependency

```bash
npm install
```

### 3.2 Tạo file .env

```bash
cp .env.example .env
nano .env
```

Sửa hai dòng sau cho đúng **domain** của bạn (ví dụ `hoangkhang.tech`):

- `APP_URL=https://hoangkhang.tech`
- `NEXT_PUBLIC_APP_URL=https://hoangkhang.tech`

Các biến khác có thể để mặc định hoặc để trống. Lưu file: `Ctrl+O`, Enter, rồi `Ctrl+X`.

### 3.3 Build

```bash
npm run build
```

Chờ đến khi thấy “Compiled successfully” và không báo lỗi.

---

## Phần 4: Chạy app bằng PM2

Vẫn trong thư mục project trên **VPS**:

```bash
pm2 start npm --name "portfolio" -- start
pm2 status
pm2 save
pm2 startup
```

Khi chạy `pm2 startup`, PM2 sẽ in ra một dòng lệnh (có `sudo`). **Copy và chạy đúng dòng đó** để app tự chạy lại khi VPS reboot.

Kiểm tra: `pm2 logs portfolio` — không báo lỗi là được. App đang chạy ở port **3000**.

---

## Phần 5: Cấu hình Nginx (reverse proxy)

### 5.1 Tạo file cấu hình

Trên **VPS**:

```bash
nano /etc/nginx/sites-available/hoangkhang
```

Dán nội dung bên dưới, **đổi `hoangkhang.tech`** thành domain của bạn (nếu tạm dùng IP thì đổi thành `server_name _;` hoặc IP):

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

Lưu: `Ctrl+O`, Enter, `Ctrl+X`.

### 5.2 Bật site và reload Nginx

Trên **VPS**:

```bash
ln -sf /etc/nginx/sites-available/hoangkhang /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

Nếu `nginx -t` báo “syntax is ok” thì cấu hình đúng.

---

## Phần 6: SSL (HTTPS) – khi đã có domain

Chỉ làm bước này khi **domain đã trỏ A record về IP VPS** (ví dụ `hoangkhang.tech` → IP VPS).

Trên **VPS**:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d hoangkhang.tech -d www.hoangkhang.tech
```

Làm theo hướng dẫn: nhập email, đồng ý điều khoản. Certbot sẽ tự cấu hình HTTPS và gia hạn.

Sau đó mở: `https://hoangkhang.tech` — sẽ vào portfolio.

---

## Phần 7: DNS (nếu dùng domain)

Ở nhà cung cấp domain (Cloudflare, GoDaddy, etc.):

- Tạo **A record**: `hoangkhang.tech` → **IP VPS**
- (Tùy chọn) A record: `www.hoangkhang.tech` → **IP VPS**

Chờ vài phút đến vài giờ rồi thử mở `http://hoangkhang.tech` (sau khi làm xong Phần 5). Khi đã chạy Certbot (Phần 6) thì dùng `https://hoangkhang.tech`.

---

## Tóm tắt thứ tự

| # | Việc |
|---|------|
| 1 | SSH vào VPS → `apt update && apt upgrade -y` |
| 2 | Cài Node 22, PM2, Git, Nginx |
| 3 | Clone repo hoặc rsync code vào `/root/hoangkhang-portfolio` |
| 4 | `npm install` → tạo `.env` (sửa domain) → `npm run build` |
| 5 | `pm2 start npm --name "portfolio" -- start` → `pm2 save` → `pm2 startup` |
| 6 | Tạo Nginx config, bật site, `nginx -t` → `systemctl reload nginx` |
| 7 | Trỏ DNS domain về IP VPS |
| 8 | Chạy `certbot --nginx -d domain-cua-ban` để bật HTTPS |

---

## Một số lệnh hữu ích sau này

- Xem log app: `pm2 logs portfolio`
- Restart app: `pm2 restart portfolio`
- Trạng thái: `pm2 status`
- Cập nhật code (khi dùng Git): trong thư mục project chạy `git pull` → `npm install` → `npm run build` → `pm2 restart portfolio`

Chi tiết thêm (troubleshooting, DirectAdmin, v.v.) xem file **DEPLOYMENT-VPS.md**.
