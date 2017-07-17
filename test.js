import test from 'ava';
import vfile from 'vfile';
import m from './';

test(t => {
	const file = vfile({path: '~/example.md'});

	file.info('This is perfect', {line: 5, column: 3});
	file.message('This should be fixed', {line: 3, column: 5});

	try {
		file.fail('This is horrible', {line: 2, column: 1});
	} catch (err) {}

	t.deepEqual(
		m([file]),
		[
			{
				filePath: '~/example.md',
				messages: [
					{
						severity: 1,
						ruleId: null,
						line: 5,
						column: 3,
						message: 'This is perfect'
					},
					{
						severity: 1,
						ruleId: null,
						line: 3,
						column: 5,
						message: 'This should be fixed'
					},
					{
						severity: 2,
						ruleId: null,
						line: 2,
						column: 1,
						message: 'This is horrible'
					}
				],
				errorCount: 1,
				warningCount: 2
			}
		]
	);
});
