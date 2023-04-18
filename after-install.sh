#!/bin/bash
cd /var/www/html/vue_sinergia
cp -R /var/www/html/vue_sinergia_backup/. .
php artisan config:clear
php artisan cache:clear
php artisan migrate
npm run watch-poll