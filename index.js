// eslint doesn't allow exporting as an ES module ?!?!
// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2, { "flatTernaryExpressions": true, "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double", { "avoidEscape": true }],
    "semi": ["error", "always"],
    "space-infix-ops": "error",
    "object-curly-spacing": ["error", "always"],
    "spaced-comment": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": "error",
    "no-trailing-spaces": "error",
    "semi-spacing": "error",
    "space-before-blocks": ["error", "always"],
    "max-len": ["error", { "code": 80, "ignoreUrls": true }],
    "no-var": "error",
    "prefer-const": ["error", { "destructuring": "all" }]
  }
};
