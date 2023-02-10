import { defineConfig } from 'dumi';

export default defineConfig({
  // outputPath: './docs-dist,
  // base: './ww-hooks/',
  // publicPath: process.env.NODE_ENV === 'production' ? './ww-hooks/' : './',
  outputPath: 'docs-dist',
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
});
