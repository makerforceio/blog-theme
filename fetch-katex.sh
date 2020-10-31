#!/bin/bash

VERSION=0.12.0
TARGET="assets/js/katex"

set -eu

mkdir -p tmp/
wget -O tmp/katex.zip https://github.com/KaTeX/KaTeX/releases/download/v$VERSION/katex.zip
unzip tmp/katex.zip -d tmp/

mv tmp/katex $TARGET

rm -r tmp/
