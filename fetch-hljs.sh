#!/bin/bash

VERSION=10.3.1
LANGS="python javascript cpp scss css xml json markdown http bash nginx php go rust typescript"
TARGET="assets/js/highlight/"

set -eu

mkdir -p tmp/
wget -O tmp/highlight.js.zip https://github.com/highlightjs/highlight.js/archive/$VERSION.zip
unzip tmp/highlight.js.zip -d tmp/

cd tmp/highlight.js-*/
npm install
node ./tools/build.js -t cdn $LANGS
cd ../../

echo "Copying build to assets/js/highlight/"
rm -r assets/js/highlight/ || true
mkdir -p assets/js/highlight/
cp -R tmp/highlight.js-*/build/* $TARGET

rm -r tmp/
