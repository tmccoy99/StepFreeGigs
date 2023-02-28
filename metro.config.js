module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js'],
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
};
