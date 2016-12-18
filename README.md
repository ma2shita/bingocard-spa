# bingocard-spa

> HTML5 Single Page Application that Create Bingo card randomly also Record state.

### Specifications/Limitations

- HTML5 SPA. No use/need the API server
- Using LocalStorage (Robust to close and reload, cannot play on In-Private mode)
- Same seed(card ID), Generate same Card

## User's manual

### Configure

1. Edit `src/assets/list.js`
2. Deploy image files to `static/bingo_card/`

### Deploy

1. Run `npm run build`
2. Deploy inner of `dist/` dir to the Internet

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Troubleshoot

- Reset LocalStorage: `?action=reset`
- Delete LocalStorage: According to Browser setting

## Tips

```
for n in `seq 0 75` ; do convert -size 256x256 xc:#ccdddd -pointsize 100 -gravity^Center -annotate 0 "${n}" panel-${n}.png ; done
```

[EoT]