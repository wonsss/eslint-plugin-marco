/**
 * @fileoverview marco
 * @author marco
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-new-date"),
	RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-new-date", rule, {
	valid: [
		// give me some code that won't trigger a warning
		{ code: "new Date(2024,2,24)" },
		{ code: "new Date(2002-2-22)" },
	],

	invalid: [
		{
			code: "new Date()",
			errors: [{ message: rule.meta.messages.message }],
			output: "ServerDate()",
		},
	],
});
