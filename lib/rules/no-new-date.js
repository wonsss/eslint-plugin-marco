/**
 * @fileoverview marco
 * @author marco
 */
"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "disallow use of the new Date()",
			recommended: false, // URL to the documentation page for this rule
		},
		fixable: "code", // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			message:
				"new Date()는 클라이언트에서 실행 시 해당 기기의 시간에 의존적이라 정확하지 않습니다. 현재 시간이 필요하다면 ServerDate()를 사용해 주세요.",
		},
	},

	create(context) {
		return {
			// AST로 확인한 결과, 금지해야 할 new Date() 노드는 NewExpression 타입이며, callee.name이 Date이고 arguments가 없는 경우이다.
			NewExpression(node) {
				if (
					node.callee.name === "Date" &&
					node.arguments.length === 0
				) {
					context.report({
						node,
						messageId: "message",
						fix: fixer => fixer.replaceText(node, "ServerDate()"), // fixer를 이용하여 ServerDate()로 대체하도록 한다.
					});
				}
			},
		};
	},
};
