import dumircConfig from '../../.dumirc.base';

export default dumircConfig({
  themeConfig: {
    name: 'wwhooks',
    logo: false,
    nav: [
      { title: '指南', link: '/guide' },
      { title: '更新内容', link: '/changelog' },
      { title: 'hooks', link: '/hooks/use-hash' },
      { title: 'utils', link: '/utils/is-type' },
    ],
  },
  resolve: {
    atomDirs: [
      { type: 'hooks', dir: 'src/hooks' },
      {
        type: 'utils',
        dir: 'src/utils',
      },
    ],
  },
  base: '/ww-hooks',
  publicPath: process.env.NODE_ENV === 'production' ? '/ww-hooks/' : '/',
});
