#!/bin/bash

VERSION=9.12.0
LANGS="python javascript cpp scss css xml json markdown http bash nginx php"
set -e

BASE=$(dirname $(realpath "$0"))
[ ! -d $BASE/tmp/ ]
mkdir -p $BASE/tmp/
wget -O $BASE/tmp/highlight.js.zip https://github.com/isagalaev/highlight.js/archive/$VERSION.zip
unzip $BASE/tmp/highlight.js -d $BASE/tmp/

cd $BASE/tmp/highlight.js-*/
npm install
node ./tools/build.js -t cdn $LANGS
echo "Copying ./build/* to $BASE/assets/js/highlight/"
rm -r $BASE/assets/js/highlight/ || true
mkdir -p $BASE/assets/js/highlight/
cp -R ./build/* $BASE/assets/js/highlight/
cd $BASE/

rm -r $BASE/tmp/
