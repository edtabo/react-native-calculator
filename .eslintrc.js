module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    curly: ['error', 'multi-line'],
    'no-bitwise': 'off',
    'react/no-unstable-nested-components': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
