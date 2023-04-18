#!/bin/bash

sysdate=$(date +"%Y%m%d%H%M")
dir_to_zip="/var/www/html/vue_sinergia"
sudo zip -r "${dir_to_zip}_${sysdate}.zip" $dir_to_zip
mkdir /var/www/html/versions
cd /var/www/html/versions
mv "${dir_to_zip}_${sysdate}.zip" /var/www/html/versions/