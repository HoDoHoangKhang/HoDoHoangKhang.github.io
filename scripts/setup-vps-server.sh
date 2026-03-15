#!/usr/bin/env bash
# Chạy 1 lần trên VPS mới để cài Node 22, PM2, Git, Nginx.
# Cách chạy: curl -sSL https://raw.githubusercontent.com/HoDoHoangKhang/portfolio/main/scripts/setup-vps-server.sh | bash
# Hoặc: bash scripts/setup-vps-server.sh (sau khi đã có repo)

set -e
echo "[1/4] Cập nhật hệ thống..."
apt-get update -qq && apt-get upgrade -y -qq

echo "[2/4] Cài Node.js 22..."
if ! command -v node &>/dev/null || [[ $(node -v | cut -d. -f1 | tr -d v) -lt 22 ]]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash - >/dev/null 2>&1
  apt-get install -y nodejs -qq
fi
echo "  Node: $(node -v) | npm: $(npm -v)"

echo "[3/4] Cài PM2 và Git..."
npm install -g pm2 --silent 2>/dev/null || true
apt-get install -y git -qq
echo "  PM2: $(pm2 -v)"

echo "[4/4] Cài Nginx..."
apt-get install -y nginx -qq
echo "  Nginx: $(nginx -v 2>&1)"

echo ""
echo "Xong. Tiếp theo: clone repo rồi chạy: bash scripts/deploy-vps.sh DOMAIN_CUA_BAN"
