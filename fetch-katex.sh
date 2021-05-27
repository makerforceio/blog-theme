#!/bin/bash

VERSION=0.13.11
TARGET="assets/js/katex"

set -eu

mkdir -p tmp/
wget -O tmp/katex.zip https://github.com/KaTeX/KaTeX/releases/download/v$VERSION/katex.zip
unzip tmp/katex.zip -d tmp/

echo "Copying katex to $TARGET/"
rm -rf $TARGET/ || true
mv tmp/katex $TARGET

rm -r tmp/
