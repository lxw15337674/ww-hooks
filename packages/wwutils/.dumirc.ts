import dumircConfig from '../../.dumirc.base';

export default dumircConfig({
  themeConfig: {
    name: 'wwutils',
    logo: false,
    nav: [{ title: 'api', link: '/components/col-span' }],
  },
  base: '/wwutils',
  publicPath: process.env.NODE_ENV === 'production' ? '/wwutils/' : '/',
});
