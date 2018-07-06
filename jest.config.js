module.exports = {
	verbose: true,
	roots: [
		'<rootDir>/src'
	],
	/*	setupFiles: [
			'<rootDir>/__tests__/setup/shim.js'
		],*/
	moduleNameMapper: {
		'\\.(css|scss|jpg|png|svg)$': '<rootDir>/node_modules/jest-css-modules'
	},
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node'
	],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	transformIgnorePatterns: [
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'
	],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	testPathIgnorePatterns: [
		'<rootDir>/src/__tests__/setup/'
	],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup/setupEnzyme.ts',
	globals: {
		'ts-jest': {
			tsConfigFile: 'tsconfig.test.json'
		}
	}
};

