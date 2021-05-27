#!/bin/bash

VERSION=0.12.0
TARGET="assets/js/katex"

set -eu

mkdir -p tmp/
wget -O tmp/katex.zip https://github.com/KaTeX/KaTeX/releases/download/v$VERSION/katex.zip
unzip tmp/katex.zip -d tmp/

echo "Copying katex to $TARGET/"
rm -r $TARGET/ || true
mkdir -p $TARGET/
mv tmp/katex $TARGET

rm -r tmp/
