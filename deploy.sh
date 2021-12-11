#!/usr/bin/env bash

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Admiralfeb/vue.admiralfeb.net.git main:gh-pages
cd -
