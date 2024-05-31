module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "prettier", "import"],
  rules: {
    "react/prop-types": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

    "prettier/prettier": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          // material-ui
          { name: "@mui/material", message: "No named imports from '@mui/material'" },
        ],
      },
    ],

    "@typescript-eslint/no-unused-vars": "warn",

    "import/order": [
      "warn",
      {
        groups: ["type", ["builtin", "external", "internal"], ["parent", "sibling", "index"]],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/**/!(types)",
            group: "internal",
            position: "after",
          },
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: ["react", "react-dom", "react-router-dom"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
