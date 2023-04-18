#!/bin/bash

cd /var/www/html/
mkdir vue_sinergia_backup
cd vue_sinergia_backup
cp -R /var/www/html/vue_sinergia/. .
rm -Rf /var/www/html/vue_sinergia
mkdir -p /var/www/html/vue_sinergia