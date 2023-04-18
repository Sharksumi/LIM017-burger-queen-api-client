#!/bin/bash

cd /var/www/html/
mkdir vue_sinergia_backup
cd vue_sinergia_backup
cp -r /var/www/html/vue_sinergia/ .
rm -rf /var/www/html/vue_sinergia
mkdir -p /var/www/html/vue_sinergia