/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 * @typedef {import('eslint').ESLint.LintResult} LintResult
 * @typedef {import('eslint').Linter.LintMessage} LintMessage
 */

import {statistics} from 'vfile-statistics'

/**
 * @param {Array<VFile>} vfiles
 * @returns {Array<LintResult>}
 */
export function toESLint(vfiles) {
  return vfiles.map((vfile) => {
    const stats = statistics(vfile)

    return {
      filePath: vfile.path,
      messages: vfile.messages.map((x) => mapMessage(x)),
      fatalErrorCount: stats.fatal,
      errorCount: stats.fatal,
      warningCount: stats.nonfatal,
      fixableErrorCount: 0,
      fixableWarningCount: 0,
      usedDeprecatedRules: [],
      suppressedMessages: []
    }
  })
}

/**
 * Map a message.
 *
 * @param {VFileMessage} x
 * @returns {LintMessage}
 */
function mapMessage(x) {
  /* c8 ignore next */
  const end = x.position ? x.position.end : {line: undefined, column: undefined}
  return {
    fatal: x.fatal === true ? true : undefined,
    severity: x.fatal ? 2 : 1,
    ruleId: [x.source, x.ruleId].filter(Boolean).join(':') || null,
    line: x.line || 0,
    column: x.column || 0,
    endLine: end.line || undefined,
    endColumn: end.column || undefined,
    message: x.reason
  }
}
