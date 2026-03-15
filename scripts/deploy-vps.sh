#!/usr/bin/env bash
# Deploy app lên VPS: install, build, PM2, Nginx, SSL.
# Chạy TRONG thư mục project (có package.json).
# Cách chạy: bash scripts/deploy-vps.sh hoangkhang.tech
# Cần: Node, PM2, Nginx đã cài (chạy scripts/setup-vps-server.sh trước nếu chưa).

set -e
DOMAIN="${1:?Thiếu domain. Cách chạy: bash scripts/deploy-vps.sh hoangkhang.tech}"

if [[ ! -f package.json ]]; then
  echo "Chạy script trong thư mục project (có file package.json)."
  exit 1
fi

echo "Domain: $DOMAIN"
echo ""

echo "[1/6] npm install..."
npm install

echo "[2/6] Tạo .env..."
if [[ ! -f .env ]]; then
  cp .env.example .env
fi
# Thay URL bằng domain (Linux)
sed -i.bak "s|hoangkang.dev|$DOMAIN|g" .env
sed -i.bak "s|https://hoangkang.dev|https://$DOMAIN|g" .env
rm -f .env.bak

echo "[3/6] Build..."
npm run build

echo "[4/6] PM2..."
if pm2 describe portfolio &>/dev/null; then
  pm2 restart portfolio
else
  pm2 start npm --name "portfolio" -- start
fi
pm2 save
pm2 startup 2>/dev/null || true

echo "[5/6] Nginx..."
NGINX_CONF="/etc/nginx/sites-available/portfolio"
sudo tee "$NGINX_CONF" >/dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
sudo ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "[6/6] SSL (Let's Encrypt)..."
CERTBOT_EMAIL="${CERTBOT_EMAIL:-admin@$DOMAIN}"
if command -v certbot &>/dev/null; then
  sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --redirect -m "$CERTBOT_EMAIL" 2>/dev/null || echo "  Bỏ qua SSL (chạy tay: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN)"
else
  sudo apt-get install -y certbot python3-certbot-nginx -qq
  sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --redirect -m "$CERTBOT_EMAIL" 2>/dev/null || echo "  Bỏ qua SSL (chạy tay: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN)"
fi

echo ""
echo "Deploy xong. Mở: https://$DOMAIN"
echo "Cập nhật sau này: git pull && npm install && npm run build && pm2 restart portfolio"
