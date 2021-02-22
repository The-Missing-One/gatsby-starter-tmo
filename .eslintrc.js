module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'no-console': ['warn', { allow: ['error'] }],
    'linebreak-style': 'off',
    'global-require': 'off',
    'react/no-array-index-key': 'off',
    'import/no-dynamic-require': 'off',
    'no-underscore-dangle': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/label-has-associated-control': [2, {
      required: {
        some: ['nesting', 'id'],
      },
    }],
  },
};
