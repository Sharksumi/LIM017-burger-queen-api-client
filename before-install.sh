#!/bin/bash

sysdate=$(date +"%Y%m%d%H%M")
dir_to_zip="/var/www/html/vue_sinergia"
zip -r "${dir_to_zip}_${sysdate}.zip" $dir_to_zip
mkdir -p /home/flesan/backups
cd /home/flesan/backups
mv "${dir_to_zip}_${sysdate}.zip" /home/flesan/backups/