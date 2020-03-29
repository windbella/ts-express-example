module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "linebreak-style": "off",
        "indent": ["error", 4],
        // "object-property-newline": "off",
        // "object-curly-newline": "off",
        // "func-names": "off",
        // "newline-per-chained-call": "off",
        "no-console": "off",
        // "no-extend-native": "off",
        // "no-lonely-if": "off",
        // "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-use-before-define": "off"
    }
};