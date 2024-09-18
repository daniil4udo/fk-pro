rm -rf node_modules lib/ pro/
pnpm install
mv node_modules/.pnpm/@formkit+pro@0.127.2_@formkit+core@1.6.6_@formkit+inputs@1.6.6/node_modules/@formkit/pro .
mv pro/ lib/
rm -rf lib/README.md lib/LICENSE.md lib/index.cjs lib/package.json
pnpm exec prettier ./lib/index.mjs --write