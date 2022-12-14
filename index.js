module.exports = {
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/all',
  ],
  rules: {
    "no-console": [
      "error",
      {
        "allow": ["warn", "error"]
      }
    ],
    "no-param-reassign": ["error"],
    "eqeqeq": ["error", "always"],

    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrayDestructuring": true,
        "arrowParameter": true,
        "memberVariableDeclaration": true,
        "objectDestructuring": true,
        "parameter": true,
        "propertyDeclaration": true,
        "variableDeclaration": true,
        "variableDeclarationIgnoreFunction": true
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public"
      }
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": false,
        "allowTypedFunctionExpressions": false,
        "allowHigherOrderFunctions": false,
        "allowConciseArrowFunctionExpressionsStartingWithVoid": false
      }
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
        "ts-check": "allow-with-description",
        "minimumDescriptionLength": 10
      }
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          "signature",

          "decorated-set",
          "decorated-get",
          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",
          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",

          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-abstract-field",
          "protected-abstract-field",
          "private-abstract-field",

          "static-set",
          "instance-set",
          "abstract-set",

          "static-get",
          "instance-get",
          "abstract-get",

          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "public-abstract-method",
          "protected-abstract-method",
          "private-abstract-method"
        ]
      }
    ],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/member-delimiter-style": ["error"],

    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],

    'jest/no-hooks': 'off',
    'jest/require-hook': 'off',
    'jest/prefer-lowercase-title': 'off',
  },
};
