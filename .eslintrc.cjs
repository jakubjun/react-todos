module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        // 'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ["./tsconfig.json"]
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
    'no-param-reassign': ['error', {
          props: true,
          ignorePropertyModificationsFor: [
            'state',
          ]
    }],
    },
};
