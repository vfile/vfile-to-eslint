import test from 'tape'
import {VFile} from 'vfile'
import {toESLint} from './index.js'

test('toESLint', (t) => {
  const file = new VFile({path: '~/example.md'})

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

  t.deepEqual(toESLint([file]), [
    {
      filePath: '~/example.md',
      messages: [
        {
          fatal: undefined,
          severity: 1,
          ruleId: 'alpha:bravo',
          line: 5,
          column: 3,
          endLine: null,
          endColumn: null,
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
      warningCount: 2,
      fixableErrorCount: 0,
      fixableWarningCount: 0,
      usedDeprecatedRules: []
    }
  ])

  t.end()
})
