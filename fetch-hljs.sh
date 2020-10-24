#!/bin/bash

VERSION=10.3.1
LANGS="rust cpp shell json"
TARGET="assets/js/highlight"

set -eu

mkdir -p tmp/
wget -O tmp/highlight.js.zip https://github.com/highlightjs/highlight.js/archive/$VERSION.zip
unzip tmp/highlight.js.zip -d tmp/

cd tmp/highlight.js-*/
npm install
node ./tools/build.js -t cdn $LANGS
cd ../../

echo "Copying build to $TARGET/"
rm -r $TARGET/ || true
mkdir -p $TARGET/
cp -R tmp/highlight.js-*/build/* $TARGET/

rm -r tmp/
