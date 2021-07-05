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
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-infix-ops": [
          "error",
          { "int32Hint": false }
        ],
        "object-curly-spacing": [
          "error",
          "always"
        ],
        "spaced-comment": [
          "error",
          "always"
        ],
        "space-before-function-paren": [
          "error",
          "never"
        ],
        "array-bracket-spacing": [
          "error",
          "never"
        ],
        "comma-spacing": [
          "error",
          { "before": false, "after": true }
        ],
        "key-spacing": [
          "error",
          { "beforeColon": false, "afterColon": true }
        ],
        "keyword-spacing": [
          "error"
        ],
        "no-trailing-spaces": [
          "error"
        ],
        "semi-spacing": [
          "error"
        ],
        "space-before-blocks": [
          "error",
          "always"
        ]
    }
};
