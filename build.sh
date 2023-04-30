#!/bin/sh

# build all locales to explicit scripts

# axe
cd fast_axecore && npm run build && cd ../
# htmlcs
cd fast_htmlcs && npm run build && cd ../
# a11y-js javascript runner
cd a11y-js && npm run prepare && npm run compile:test && cd ../