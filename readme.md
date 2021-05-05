# vfile-to-eslint

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Convert [VFiles][vfile] to [ESLint][] formatter compatible output.

For example, [remark-lint][] returns a `VFile`, which you could pass through
this module to display it using an ESLint formatter.

![][screenshot]

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install vfile-to-eslint
```

## Use

```js
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import eslintFormatterPretty from 'eslint-formatter-pretty'
import {toESLint} from 'vfile-to-eslint'

const file = remark()
  .use(recommended)
  .processSync('## Hello world!')

console.log(eslintFormatterPretty(toESLint([file])))
```

## API

This package exports the following identifiers: `toESLint`.
There is no default export.

### `toESLint(files)`

Returns an `Object` that can be passed directly to an
[ESLint formatter][eslint-formatter].

###### `files`

List of files ([`Array.<VFile>`][vfile]).

## Contribute

See [`contributing.md`][contributing] in [`vfile/.github`][health] for ways to
get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Sindre Sorhus][author]

<!-- Definitions -->

[build-badge]: https://github.com/vfile/vfile-to-eslint/workflows/main/badge.svg

[build]: https://github.com/vfile/vfile-to-eslint/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-to-eslint.svg

[coverage]: https://codecov.io/github/vfile/vfile-to-eslint

[downloads-badge]: https://img.shields.io/npm/dm/vfile-to-eslint.svg

[downloads]: https://www.npmjs.com/package/vfile-to-eslint

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/vfile/vfile/discussions

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/vfile/.github/blob/HEAD/contributing.md

[support]: https://github.com/vfile/.github/blob/HEAD/support.md

[health]: https://github.com/vfile/.github

[coc]: https://github.com/vfile/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://sindresorhus.com

[screenshot]: screenshot.png

[remark-lint]: https://github.com/remarkjs/remark-lint

[vfile]: https://github.com/vfile/vfile

[eslint]: https://eslint.org

[eslint-formatter]: https://npms.io/search?term=eslint-formatter
