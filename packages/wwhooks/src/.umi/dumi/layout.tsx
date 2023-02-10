// @ts-nocheck
import React from 'react';
import config from '@@/dumi/config';
import demos from '@@/dumi/demos';
import apis from '@@/dumi/apis';
import Layout from 'D:/ownerCode/wwhooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.47_7h375kktr3v5uh7cffxdowrilm/node_modules/@umijs/preset-dumi/lib/theme/layout';

export default (props) => (
  <Layout {...props} config={config} demos={demos} apis={apis} />
);
