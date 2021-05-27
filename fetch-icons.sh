#!/bin/bash

VERSION=5.15.3
ICONS_BRANDS="instagram twitter youtube github snapchat"
ICONS_SOLID="envelope rss globe-asia adjust sun moon"
TARGET="partials/icons"

set -eu

get_icon() {
	mkdir -p $TARGET/$1/
	wget -O $TARGET/$1/$2.hbs https://github.com/FortAwesome/Font-Awesome/raw/$VERSION/svgs/$1/$2.svg
}

for icon in $ICONS_BRANDS; do
	get_icon brands $icon
done
for icon in $ICONS_SOLID; do
	get_icon solid $icon
done
