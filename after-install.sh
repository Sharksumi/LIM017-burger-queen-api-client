#!/bin/bash
cd /var/www/html/vue_sinergia
cp -ru /tmp/vue_sinergia/* .
# php artisan config:clear
# php artisan cache:clear
# php artisan migrate
# npm run watch-poll