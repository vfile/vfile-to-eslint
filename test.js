import assert from 'node:assert/strict'
import test from 'node:test'
import {VFile} from 'vfile'
import {toESLint} from './index.js'

test('toESLint', async function () {
  assert.deepEqual(
    Object.keys(await import('./index.js')).sort(),
    ['toESLint'],
    'should expose the public api'
  )

  const file = new VFile({path: '~/example.md'})

  const message = file.info('?')
  message.position = null

  file.info('This is perfect', {line: 5, column: 3}, 'alpha:bravo')

  file.message('This should be fixed', {
    start: {line: 3, column: 5},
    end: {line: 3, column: 7}
  })

  try {
    file.fail('This is horrible', {
      type: 'charlie',
      value: 'bravo',
      position: {
        start: {line: 2, column: 1},
        end: {line: 2, column: 8}
      }
    })
  } catch {}

  assert.deepEqual(toESLint([file]), [
    {
      filePath: '~/example.md',
      messages: [
        {
          fatal: undefined,
          severity: 1,
          ruleId: null,
          line: 0,
          column: 0,
          endLine: undefined,
          endColumn: undefined,
          message: '?'
        },
        {
          fatal: undefined,
          severity: 1,
          ruleId: 'alpha:bravo',
          line: 5,
          column: 3,
          endLine: undefined,
          endColumn: undefined,
          message: 'This is perfect'
        },
        {
          fatal: undefined,
          severity: 1,
          ruleId: null,
          line: 3,
          column: 5,
          endLine: 3,
          endColumn: 7,
          message: 'This should be fixed'
        },
        {
          fatal: true,
          severity: 2,
          ruleId: null,
          line: 2,
          column: 1,
          endLine: 2,
          endColumn: 8,
          message: 'This is horrible'
        }
      ],
      fatalErrorCount: 1,
      errorCount: 1,
      warningCount: 3,
      fixableErrorCount: 0,
      fixableWarningCount: 0,
      usedDeprecatedRules: [],
      suppressedMessages: []
    }
  ])
})
