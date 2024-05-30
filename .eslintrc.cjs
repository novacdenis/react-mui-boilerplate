module.exports = {
  root: true,
  env: { node: true, browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier", "import"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",

    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],

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
