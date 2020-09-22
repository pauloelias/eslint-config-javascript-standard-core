module.exports = {
  plugins: ['html', 'import', 'node', 'promise', 'standard'],
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:node/recommended', 'plugin:promise/recommended', 'standard'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    'no-debugger': 1,
    'no-alert': 1,
    quotes: [2, 'single', 'avoid-escape']
  },
  env: {
    browser: true,
    es2020: true,
    jest: true,
    jquery: true,
    node: true
  }
}
