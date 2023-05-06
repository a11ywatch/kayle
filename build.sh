#!/bin/sh

# build all locales to explicit scripts

# axe
cd fast_axecore && npm run build && cd ../
# htmlcs
cd fast_htmlcs && npm run build && cd ../
# kayle javascript runner
cd kayle && npm run prepare && npm run compile:test && cd ../