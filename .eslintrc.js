module.exports = {
  $schema: "http://json.schemastore.org/eslintrc",
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  globals: {
    JSX: "readonly",
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "import", "eslint-comments", "@typescript-eslint", "prettier"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": 0,
    "prefer-const": 2,
    "arrow-body-style": 2,
    "no-var": 2,
    "no-undef": 2,
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    camelcase: "off",
    "no-extend-native": [
      "error",
      {
        exceptions: ["Array", "String", "Date", "Number"],
      },
    ],
    "no-multi-spaces": [
      2,
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          BinaryExpression: true,
          AssignmentExpression: true,
        },
        ignoreEOLComments: true,
      },
    ],
    "padded-blocks": [
      2,
      {
        blocks: "never",
        switches: "never",
      },
    ],
    semi: ["error", "never"],
    "no-implicit-coercion": [
      "error",
      {
        boolean: false,
        number: false,
        string: true,
      },
    ],
    "import/no-unresolved": 1,
    "import/named": 2,
    "import/default": 2,
    "import/namespace": 2,
    "import/no-mutable-exports": 2,
    "import/no-extraneous-dependencies": 2,
    "import/export": 2,
    "import/first": 2,
    "import/order": [
      2,
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      },
    ],
    "import/no-duplicates": 2,
    "import/extensions": [2, "never", { json: "always" }],
    "import/newline-after-import": 2,
    "import/prefer-default-export": 0,
    "react/jsx-wrap-multilines": 2,
    "react/display-name": 1,
    "react/jsx-tag-spacing": [
      2,
      {
        beforeSelfClosing: "always",
        closingSlash: "never",
        afterOpening: "never",
      },
    ],
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-pascal-case": 2,
    "react/jsx-max-props-per-line": [
      2,
      {
        when: "multiline",
      },
    ],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-indent": [2, 2],
    "react/void-dom-elements-no-children": 2,
    "react/sort-comp": [
      2,
      {
        order: ["type-annotations", "static-methods", "lifecycle", "everything-else", "render"],
      },
    ],
    "react/self-closing-comp": 2,
    "react/no-array-index-key": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-multi-comp": [
      2,
      {
        ignoreStateless: true,
      },
    ],
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": [
      2,
      {
        ignorePureComponents: true,
      },
    ],
    "react/no-direct-mutation-state": 2,
    "react/require-default-props": 2,
    "react/no-unused-prop-types": 2,
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-curly-spacing": [
      2,
      {
        when: "never",
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    "no-console": 1,
    "array-bracket-spacing": [2, "never"],
    "object-curly-spacing": [2, "always"],
    "quote-props": [
      2,
      "as-needed",
      {
        numbers: true,
      },
    ],
    "no-useless-computed-key": 2,
    "no-unexpected-multiline": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/no-typos": 2,
    "react/jsx-no-target-blank": 2,
    "no-unused-expressions": 0,
    "eslint-comments/disable-enable-pair": 2,
    "eslint-comments/no-duplicate-disable": 2,
    "eslint-comments/no-unlimited-disable": 2,
    "eslint-comments/no-unused-disable": 2,
    "eslint-comments/no-unused-enable": 2,
  },
}
