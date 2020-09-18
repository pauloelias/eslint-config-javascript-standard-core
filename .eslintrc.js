module.exports = {
  extends: ['standard', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    amd: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  },
  plugins: ['html', 'prettier', 'standard']
}
