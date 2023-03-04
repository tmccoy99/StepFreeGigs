module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-native-maps|@react-native|@react-navigation)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
