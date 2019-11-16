module.exports = {
  plugins: ["import", "react-hooks", "jsx-a11y", "react", "prettier"],
  extends: ["airbnb", "prettier", "prettier/react"],
  settings: {
    "import/resolver": { node: { moduleDirectory: ["node_modules", "src"] } }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "spaced-comment": [0],
    "class-methods-use-this": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-restricted-syntax": 0,
    "react/jsx-closing-tag-location": 0,
    "arrow-parens": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "jsx-a11y/img-redundant-alt": 0,
    "func-names": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-mixed-operators": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "react/react-in-jsx-scope": 0,
    "react/sort-comp": 0,
    "max-len": 0,
    "import/no-unresolved": [
      2,
      { ignore: ["\\?global$", "\\?external$", "\\?inline$"] }
    ],
    "no-restricted-globals": 0,
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true
      }
    ],
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off"
  }
};
