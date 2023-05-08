module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'no-empty-source': null,
    'unit-no-unknown': null,
    'at-rule-no-unknown': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null
  }
}
