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
    "ignorePatterns": ["node_modules/", "client/"],
    "rules": {
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "linebreak-style": "off",
        "indent": ["error", 4],
        "no-console": "off",
        "@typescript-eslint/no-use-before-define": "off"
    }
};
