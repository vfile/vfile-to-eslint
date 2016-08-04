'use strict';
module.exports = vfiles => vfiles.map(vfile => {
	let errorCount = 0;
	let warningCount = 0;

	const messages = vfile.messages.map(x => {
		if (x.fatal) {
			errorCount++;
		} else {
			warningCount++;
		}

		return {
			severity: x.fatal === true ? 2 : 1,
			ruleId: x.ruleId,
			line: x.line,
			column: x.column,
			message: x.reason
		};
	});

	return {
		filePath: vfile.filePath(),
		messages,
		errorCount,
		warningCount
	};
});
