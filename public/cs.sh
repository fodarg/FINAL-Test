#!/bin/bash
timestamp=`date +%Y%m%d`
curl -O http://tips.mytippingapp.com/iqprotips/${timestamp}iqtp.csv
