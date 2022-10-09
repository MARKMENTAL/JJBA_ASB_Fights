#!/bin/bash

# Build script made for building app to Nginx running on Fedora 36

npm run build
cd dist
sudo cp -r ./* /usr/share/nginx/html