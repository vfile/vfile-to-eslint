/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 * @typedef {import('eslint').ESLint.LintResult} LintResult
 * @typedef {import('eslint').Linter.LintMessage} LintMessage
 */

import {statistics} from 'vfile-statistics'

/**
 * Turn virtual files into a ESLint results that can be passed directly to an
 * ESLint formatter.
 *
 * @param {Array<VFile>} files
 *   Virtual files.
 * @returns {Array<LintResult>}
 *   Lint results.
 */
export function toESLint(files) {
  return files.map((x) => file(x))
}

/**
 * Map a file.
 *
 * @param {VFile} file
 *   Virtual file.
 * @returns {LintResult}
 *   ESLint result.
 */
function file(file) {
  const stats = statistics(file)

  return {
    filePath: file.path,
    messages: file.messages.map((x) => message(x)),
    fatalErrorCount: stats.fatal,
    errorCount: stats.fatal,
    warningCount: stats.nonfatal,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
    usedDeprecatedRules: [],
    suppressedMessages: []
  }
}

/**
 * Map a message.
 *
 * @param {VFileMessage} x
 *   Virtual message.
 * @returns {LintMessage}
 *   ESLint message.
 */
function message(x) {
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
