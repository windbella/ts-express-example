module.exports = {
    "extends": ["react-app", "airbnb"],
    "ignorePatterns": ["node_modules/"],
    "rules": {
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "linebreak-style": "off",
        "indent": ["error", 4],
        "no-console": "off",
        "no-use-before-define": "off",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", ".tsx"] }],
        "react/jsx-one-expression-per-line": "off",
        "@typescript-eslint/no-use-before-define": "off"
    }
};
