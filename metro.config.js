const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// SVG 파일을 React 컴포넌트로 변환
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// SVG 파일 확장자 처리
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

module.exports = config;