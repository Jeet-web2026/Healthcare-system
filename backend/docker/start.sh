#!/bin/bash

set -e

echo "Starting Laravel Application..."

# Wait a few seconds for DB
sleep 5

# Storage Link
php artisan storage:link || true

# Clear old cache
php artisan optimize:clear

# Production Cache
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations
php artisan migrate --force

# Start Supervisor
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf