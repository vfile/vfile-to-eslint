# vfile-to-eslint [![Build Status](https://travis-ci.org/sindresorhus/vfile-to-eslint.svg?branch=master)](https://travis-ci.org/sindresorhus/vfile-to-eslint)

> Convert [VFiles](https://github.com/wooorm/vfile) to [ESLint](http://eslint.org) formatter compatible output

For example, [remark-lint](https://github.com/wooorm/remark-lint) returns a `VFile`, which you could pass through this module to display it using an ESLint formatter.


## Install

```
$ npm install --save vfile-to-eslint
```


## Usage

```js
const remark = require('remark');
const remarkLint = require('remark-lint');
const eslintFormatterPretty = require('eslint-formatter-pretty');
const vfileToEslint = require('vfile-to-eslint');

const file = remark().use(remarkLint).process('## Hello world!');

console.log(eslintFormatterPretty(vfileToEslint([file])));
```

![](screenshot.png)


## API

### vfileToEslint(files)

Returns an `Object` that can be passed directly to an [ESLint formatter](https://npms.io/search?term=eslint-formatter).

#### files

Type: [`VFile[]`](https://github.com/wooorm/vfile)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
