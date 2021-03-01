module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'import/extensions': 'off',
  },
};
