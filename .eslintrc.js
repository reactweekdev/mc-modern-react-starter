const pathGroups = []

module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parser: '@babel/eslint-parser',
    plugins: ['import', 'unused-imports', '@babel'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        jest: true,
        browser: true,
        amd: true,
        node: true
    },
    rules: {
        // Use Array<> and ReadonlyArray<> syntax in types.
        // '@typescript-eslint/array-type': [
        //     'error',
        //     {
        //         default: 'generic',
        //         readonly: 'generic'
        //     }
        // ],
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                pathGroups: pathGroups.map(path => ({
                    pattern: `${path}/**`,
                    group: 'external',
                    position: 'after'
                })),
                pathGroupsExcludedImportTypes: ['builtin']
            }
        ],

        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_'
            }
        ],

        'react/prop-types': 'off',
        'react/display-name': 'off',

        // Mandatory return types clutters the code too much.
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Allow empty interfaces, since a lot of components don't require props.
        '@typescript-eslint/no-empty-interface': 'off',

        // var-require is used when importing assets.
        '@typescript-eslint/no-var-requires': 'off',

        // var-require is used when importing assets.
        // '@typescript-eslint/no-explicit-any': 'off',

        // Always use strict comparisons.
        eqeqeq: 'error',

        // Use fat arrow function style.
        // 'func-style': 'error',

        // Forbid reassigning parameters.
        'no-param-reassign': 'error',

        // Do not allow unused expressions.
        'no-unused-expressions': 'error',

        // Prefer const over let.
        'prefer-const': 'error',

        // Prefer template strings over concatenating with plus.
        'prefer-template': 'error',

        // Allow unescaped single and double quotes.
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }]
    }
}
