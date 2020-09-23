module.exports = {
  plugins: ['html', 'import', 'prettier', 'standard'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard',
    'prettier',
    'prettier/standard'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'no-alert': 1,
    'no-console': 1,
    'no-debugger': 1,
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'all'
      }
    ],
    quotes: [2, 'single', 'avoid-escape'],
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
  env: {
    browser: true,
    es2020: true,
    jest: true,
    jquery: true,
    node: true
  }
}
