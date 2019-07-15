module.exports = {
  "extends": [
    "standard",
    "prettier",
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true
      }
    ]
  },
  "plugins": ["standard", "prettier"]
}
