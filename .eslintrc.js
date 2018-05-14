"use strict"


module.exports = {
  parserOptions: {
      ecmaVersion: 2018,
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:all',
    'plugin:lodash-template/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'lodash-template/no-warning-html-comments': 'error'
    'multiline-ternary': ["error", 'always-multiline'],
    "lodash-template/plugin-option": [2, {
        ignoreRules: [
            'no-undef',
            'vars-on-top',
            'no-magic-numbers',
            'id-length',
            'no-plusplus',
        ],
    }],
  },
}
