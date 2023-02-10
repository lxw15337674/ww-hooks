import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'wwhooks',
  outputPath: './docs-dist',
  mode: 'doc',
  base: './ww-hooks/',
  publicPath: process.env.NODE_ENV === 'production' ? './ww-hooks/' : './',
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
  // mfsu: {}, //与MonoRepos冲突
  resolve: { excludes: ['./template'] },
});
