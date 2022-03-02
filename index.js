/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('eslint').ESLint.LintResult} LintResult
 */

import {statistics} from 'vfile-statistics'

/**
 * @param {Array.<VFile>} vfiles
 * @returns {Array.<LintResult>}
 */
export function toESLint(vfiles) {
  return vfiles.map((vfile) => {
    const stats = statistics(vfile)

    return {
      filePath: vfile.path,
      messages: vfile.messages.map((x) => {
        return {
          fatal: x.fatal === true ? true : undefined,
          severity: x.fatal ? 2 : 1,
          ruleId: [x.source, x.ruleId].filter(Boolean).join(':') || null,
          line: x.line,
          column: x.column,
          endLine: x.position.end.line,
          endColumn: x.position.end.column,
          message: x.reason
        }
      }),
      fatalErrorCount: stats.fatal,
      errorCount: stats.fatal,
      warningCount: stats.nonfatal,
      fixableErrorCount: 0,
      fixableWarningCount: 0,
      usedDeprecatedRules: []
    }
  })
}
