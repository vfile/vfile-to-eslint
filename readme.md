# vfile-to-eslint [![Build][build-badge]][build] [![Coverage][coverage-badge]][coverage] [![Chat][chat-badge]][chat]

Convert [VFiles][vfile] to [ESLint][] formatter compatible output.

For example, [remark-lint][] returns a `VFile`, which you could pass through
this module to display it using an ESLint formatter.

![][screenshot]

## Install

[npm][]:

```bash
npm install vfile-to-eslint
```

## Usage

```js
const remark = require('remark')
const recommended = require('remark-preset-lint-recommended')
const eslintFormatterPretty = require('eslint-formatter-pretty')
const vfileToEslint = require('vfile-to-eslint')

const file = remark()
  .use(recommended)
  .processSync('## Hello world!')

console.log(eslintFormatterPretty(vfileToEslint([file])))
```

### `vfileToEslint(files)`

Returns an `Object` that can be passed directly to an
[ESLint formatter][eslint-formatter].

###### `files`

List of files ([`Array.<VFile>`][vfile]).

## Contribute

See [`contributing.md` in `vfile/vfile`][contributing] for ways to get started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Sindre Sorhus][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/vfile/vfile-to-eslint.svg?branch=master

[build]: https://travis-ci.org/vfile/vfile-to-eslint

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-to-eslint.svg

[coverage]: https://codecov.io/github/vfile/vfile-to-eslint

[chat-badge]: https://img.shields.io/gitter/room/vfile/Lobby.svg

[chat]: https://gitter.im/vfile/Lobby

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://sindresorhus.com

[screenshot]: screenshot.png

[contributing]: https://github.com/vfile/vfile/blob/master/contributing.md

[coc]: https://github.com/vfile/vfile/blob/master/code-of-conduct.md

[remark-lint]: https://github.com/remarkjs/remark-lint

[vfile]: https://github.com/vfile/vfile

[eslint]: https://eslint.org

[eslint-formatter]: https://npms.io/search?term=eslint-formatter
