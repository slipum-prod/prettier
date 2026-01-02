/** @type {import("prettier").Config} */
export default {
	tabWidth: 2, // default: 4
	useTabs: true, // default: false
	semi: false, // default: true
	singleQuote: true, // default: false
	jsxSingleQuote: true, // default: false
	trailingComma: 'none', // default: all
	bracketSameLine: false,
	arrowParens: 'avoid', // default: always
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	importOrderParserPlugins: ['classProperties', 'decorators-legacy', 'typescript'],
	importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^../(.*)', '^./(.*)'],
	plugins: ['@trivago/prettier-plugin-sort-imports'],
};
