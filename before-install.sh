#!/bin/bash

mkdir /var/www/html/vue_sinergia_backup
cp /var/www/html/vue_sinergia /var/www/html/vue_sinergia_backup
rm -rf /var/www/html/vue_sinergia
mkdir -p /var/www/html/vue_sinergia