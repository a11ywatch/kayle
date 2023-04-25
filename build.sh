#!/bin/sh

# build all locales to explicit scripts

# axe
cd fast_axecore && npm run build -- --lang=en,da,de,es,eu,pl,fr,he,ja,ko,nl,no_NB,pt_BR && cd ../
# htmlcs
cd fast_htmlcs && npm run build -- --lang=en,fr,es,it,ja,nl,pl,zh_CN,zh_TW && cd ../

cd a11y-js && npm run prepare && cd ../