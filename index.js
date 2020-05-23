module.exports = {
	"extends": [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"prettier"
	],
	"env": {
		"browser": true,
		"node": true
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"modules": true
		}
	},
	"plugins": ["@typescript-eslint", "react"],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"rules": {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/no-unescaped-entities": "off"
	},
	"overrides": [
		{
			"files": ["**/*.test.*"],
			"env": {
				"jest": true
			},
			"plugins": ["jest"],
			"rules": {
				"jest/no-disabled-tests": "warn",
				"jest/no-focused-tests": "error",
				"jest/no-identical-title": "error",
				"jest/prefer-to-have-length": "warn",
				"jest/valid-expect": "error"
			}
		}
	]
};
