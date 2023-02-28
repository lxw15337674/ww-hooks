import { defineConfig } from 'dumi';
import { IDumiUserConfig } from 'dumi/dist/types';
import _ from 'lodash';

const dumircConfig = (config: IDumiUserConfig) => {
  return _.mergeWith(
    defineConfig({
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
      resolve: {
        forceKebabCaseRouting: true,
      },
    }),
    config,
  );
};

export default dumircConfig;
