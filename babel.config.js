module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@api': './src/api',
          '@icons': './src/assets/icons',
        },
      },
    ],
  ],
}
