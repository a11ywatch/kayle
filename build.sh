#!/bin/sh

# build all locales to explicit scripts

# install test deps for comparing
if [ -n "$1" ]
then
    echo "installing pa11y and @axe-core/playwright to compare"
    cd a11y-js
    npm install pa11y --global
    npm install @axe-core/playwright --global
    cd ../
fi

# axe
cd fast_axecore && npm run build && cd ../
# htmlcs
cd fast_htmlcs && npm run build && cd ../
# a11y-js javascript runner
cd a11y-js && npm run prepare && npm run compile:test && cd ../