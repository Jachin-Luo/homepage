/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-04 14:32:20
 * @LastEditTime: 2023-09-06 12:58:11
 * @FilePath: \07-PersonalPage\.eslintrc.cjs
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    // 'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'src/types/.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
