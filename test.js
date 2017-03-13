import test from 'ava';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import m from './';

test(t => {
	const output = m([remark().use(recommended).processSync('## Hello world!')])[0];

	t.is(output.errorCount, 0);
	t.is(output.warningCount, 1);
	t.deepEqual(output.messages[0], {
		severity: 1,
		ruleId: 'final-newline',
		line: 1,
		column: 1,
		message: 'Missing newline character at end of file'
	});
});
