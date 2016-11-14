const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'semi': [ ERROR, 'always' ],
    'accessor-pairs': OFF,
    'brace-style': [ERROR, '1tbs'],
    'comma-dangle': [ERROR, 'always-multiline'],
    'consistent-return': ERROR,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    'eqeqeq': [ERROR, 'allow-null'],
    'indent': [ERROR, 2, {SwitchCase: 1}],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'no-bitwise': OFF,
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [ERROR, {args: 'none'}],
    'quotes': [ERROR, 'single', 'avoid-escape'],
    'keyword-spacing': ERROR,
    'space-before-blocks': ERROR,
    'space-before-function-paren': [ERROR, {anonymous: 'never', named: 'never'}],
    'strict': [ERROR, 'global'],
    'no-console': WARNING,
    'no-debugger': WARNING,
    'no-var': ERROR,


    // React & JSX
    'react/display-name': [ WARNING, {'ignoreTranspilerName': false }],
    'react/forbid-prop-types': [WARNING, {'forbid': ['any']}],
    'react/jsx-boolean-value': WARNING,
    'react/jsx-closing-bracket-location': OFF,
    'react/jsx-curly-spacing': WARNING,
    'react/jsx-indent-props': OFF,
    'react/jsx-key': WARNING,
    'react/jsx-max-props-per-line': OFF,
    'react/jsx-no-bind': WARNING,
    'react/jsx-no-duplicate-props': WARNING,
    'react/jsx-no-literals': OFF,
    'react/jsx-no-undef': WARNING,
    'react/jsx-pascal-case': WARNING,
    'react/jsx-sort-prop-types': OFF,
    'react/jsx-sort-props': OFF,
    'react/jsx-uses-react': WARNING,
    'react/jsx-uses-vars': WARNING,
    'react/no-danger': WARNING,
    'react/no-did-mount-set-state': WARNING,
    'react/no-did-update-set-state': WARNING,
    'react/no-direct-mutation-state': WARNING,
    'react/no-multi-comp': WARNING,
    'react/no-set-state': OFF,
    'react/no-unknown-property': WARNING,
    'react/prefer-es6-class': WARNING,
    'react/prop-types': WARNING,
    'react/react-in-jsx-scope': WARNING,
    'react/self-closing-comp': WARNING,
    'react/sort-comp': WARNING,
    'react/jsx-wrap-multilines': WARNING
  }
};
