module.exports = {
  extends: ['standard'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true
  },
  plugins: ['html', 'standard']
}
