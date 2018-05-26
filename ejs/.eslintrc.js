"use strict"

const pluginLodashTemplate = require("eslint-plugin-lodash-template")
pluginLodashTemplate.addTargetExtensions(".ejs")

module.exports = {
  root: true,
  parserOptions: {
      ecmaVersion: 2018,
      templateSettings: {
         evaluate:    "(?:(?:<%_)|(?:<%(?!%)))([\\s\\S]*?)[_\\-]?%>",
         interpolate: "<%-([\\s\\S]*?)[_\\-]?%>",
         escape:      "<%=([\\s\\S]*?)[_\\-]?%>",
      },
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:all',
    'plugin:lodash-template/all'
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
