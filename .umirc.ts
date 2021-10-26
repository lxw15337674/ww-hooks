import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'wwhooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  exportStatic: {},
  publicPath: process.env.NODE_ENV === 'production' ? '/ww-hooks/' : '/',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  mfsu: {
    development: {
      output: '/.mfsu-dev',
    },
  },
  webpack5: {},
  dynamicImport: {},
});
