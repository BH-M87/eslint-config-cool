module.exports = {
  plugins: ["import", "react-hooks", "jsx-a11y", "react", "@typescript-eslint"],
  extends: ["airbnb-typescript", "cool", "prettier/@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src"]
      }
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true }
    ]
  }
};
