import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'wwhooks',
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
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
    production: {
      output: './.mfsu-prod',
    },
  },
});
