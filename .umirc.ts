import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'wwhooks',
  favicon:
    'https://qhstaticssl.kujiale.com/newt/44/image/png/1620270250120/C4CCE924A11F240AE20452D1FF13EF87.png?x-oss-process=image/format,webp',
  logo: 'https://qhstaticssl.kujiale.com/newt/44/image/png/1620270250120/C4CCE924A11F240AE20452D1FF13EF87.png?x-oss-process=image/format,webp',
  outputPath: 'docs-dist',
  mode: 'doc',
  // exportStatic: {},
  base: '/ww-hooks/',
  publicPath: process.env.NODE_ENV === 'production' ? '/ww-hooks/' : '/',
  // history: { type: 'hash' },
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
  // mfsu: {
  //   development: {
  //     output: '/.mfsu-dev',
  //   },
  // },
});
