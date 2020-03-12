module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
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
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "max-len": "off"
  },
};
