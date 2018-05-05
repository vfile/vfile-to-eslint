# vfile-to-eslint [![Build Status](https://travis-ci.org/vfile/vfile-to-eslint.svg?branch=master)](https://travis-ci.org/vfile/vfile-to-eslint)

> Convert [VFiles](https://github.com/vfile/vfile) to [ESLint](http://eslint.org) formatter compatible output

For example, [remark-lint](https://github.com/wooorm/remark-lint) returns a `VFile`, which you could pass through this module to display it using an ESLint formatter.


## Install

```
$ npm install --save vfile-to-eslint
```


## Usage

```js
const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');
const eslintFormatterPretty = require('eslint-formatter-pretty');
const vfileToEslint = require('vfile-to-eslint');

const file = remark().use(recommended).processSync('## Hello world!');

console.log(eslintFormatterPretty(vfileToEslint([file])));
```

![](screenshot.png)


## API

### vfileToEslint(files)

Returns an `Object` that can be passed directly to an [ESLint formatter](https://npms.io/search?term=eslint-formatter).

#### files

Type: [`VFile[]`](https://github.com/vfile/vfile)


## Contribute

See [`contributing.md` in `vfile/vfile`](https://github.com/vfile/vfile/blob/master/contributing.md) for ways to get started.

This organisation has a [Code of Conduct](https://github.com/vfile/vfile/blob/master/code-of-conduct.md).  By interacting with this repository, organisation, or community you agree to abide by its terms.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
