import config from '../../.dumirc.base';
import { defineConfig } from 'dumi';

export default defineConfig({
  ...config,
  // title: 'wwutils',
  // base: './wwutils/',
  // publicPath: process.env.NODE_ENV === 'production' ? './wwutils/' : './',
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
});
