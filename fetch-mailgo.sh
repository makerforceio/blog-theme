#!/bin/bash

VERSION=0.10.4
TARGET="assets/js"

set -eu

wget -O $TARGET/mailgo.min.js https://unpkg.com/mailgo@$VERSION/dist/mailgo.min.js
