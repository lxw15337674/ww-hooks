import dumircConfig from '../../.dumirc.base';

export default dumircConfig({
  themeConfig: {
    name: 'wwhooks',
    logo: false,
    nav: [{ title: 'hooks', link: 'src/hooks' }],
  },
  resolve: {
    atomDirs: [{ type: 'hooks', dir: 'src/hooks' }],
  },
  base: '/wwhooks',
  publicPath: process.env.NODE_ENV === 'production' ? '/wwhooks/' : '/',
});
