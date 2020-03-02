var test = require('tape')
var vfile = require('vfile')
var toEslint = require('.')

test('vfile-to-eslint', function(t) {
  var file = vfile({path: '~/example.md'})

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
  } catch (_) {}

  t.deepEqual(toEslint([file]), [
    {
      filePath: '~/example.md',
      messages: [
        {
          fatal: false,
          severity: 1,
          line: 5,
          column: 3,
          endLine: null,
          endColumn: null,
          ruleId: 'alpha:bravo',
          message: 'This is perfect'
        },
        {
          fatal: false,
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
      errorCount: 1,
      warningCount: 2
    }
  ])

  t.end()
})
