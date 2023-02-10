// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/ownerCode/wwhooks/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [require('../dumi/layout').default],
      component: (props) => {
        const React = require('react');
        const {
          default: getDemoRenderArgs,
        } = require('D:/ownerCode/wwhooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.47_7h375kktr3v5uh7cffxdowrilm/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const {
          default: Previewer,
        } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        const { demos } = React.useContext(context);
        const [renderArgs, setRenderArgs] = React.useState([]);

        // update render args when props changed
        React.useLayoutEffect(() => {
          setRenderArgs(getDemoRenderArgs(props, demos));
        }, [
          props.match.params.uuid,
          props.location.query.wrapper,
          props.location.query.capture,
        ]);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('../dumi/layout').default,
        require('D:/ownerCode/wwhooks/node_modules/.pnpm/dumi-theme-default@1.1.23_ibkjlvyzydwpxw7fbriamaqjdu/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/',
          component: require('D:/ownerCode/wwhooks/packages/wwhooks/README.md')
            .default,
          exact: true,
          meta: {
            locale: 'en-US',
            order: null,
            filePath: 'README.md',
            updatedTime: 1666924929388,
            slugs: [
              {
                depth: 1,
                value: 'wwhooks',
                heading: 'wwhooks',
              },
              {
                depth: 1,
                value: 'todo',
                heading: 'todo',
              },
              {
                depth: 2,
                value: 'list',
                heading: 'list',
              },
              {
                depth: 2,
                value: 'Getting Started',
                heading: 'getting-started',
              },
            ],
            title: 'wwhooks',
          },
          title: 'wwhooks',
        },
        {
          path: '/utils/col-span',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/function/colSpan/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/function/colSpan/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'utils',
              path: '/utils',
            },
            slugs: [
              {
                depth: 1,
                value: 'colSpan',
                heading: 'colspan',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'colSpan',
            hasPreviewer: true,
          },
          title: 'colSpan - wwhooks',
        },
        {
          path: '/utils/is-type',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/function/IsType/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/function/IsType/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'utils',
              path: '/utils',
            },
            slugs: [
              {
                depth: 1,
                value: 'IsType',
                heading: 'istype',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'IsType',
            hasPreviewer: true,
          },
          title: 'IsType - wwhooks',
        },
        {
          path: '/utils/set-default-arguments',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/function/setDefaultArguments/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/function/setDefaultArguments/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'utils',
              path: '/utils',
            },
            slugs: [
              {
                depth: 1,
                value: 'setDefaultArguments',
                heading: 'setdefaultarguments',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'setDefaultArguments',
            hasPreviewer: true,
          },
          title: 'setDefaultArguments - wwhooks',
        },
        {
          path: '/request/use-axios',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/request/useAxios/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/request/useAxios/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'request',
              path: '/request',
            },
            slugs: [
              {
                depth: 1,
                value: 'useAxios',
                heading: 'useaxios',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: '加载状态延迟',
                heading: '加载状态延迟',
              },
              {
                depth: 3,
                value: '防抖',
                heading: '防抖',
              },
              {
                depth: 3,
                value: '节流',
                heading: '节流',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 4,
                value: 'AxiosRequestConfig',
                heading: 'axiosrequestconfig',
              },
              {
                depth: 4,
                value: 'DebouenceOptions',
                heading: 'debouenceoptions',
              },
              {
                depth: 4,
                value: 'ThrottleOptions',
                heading: 'throttleoptions',
              },
            ],
            title: 'useAxios',
            hasPreviewer: true,
          },
          title: 'useAxios - wwhooks',
        },
        {
          path: '/request/use-mutation',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/request/useMutation/readme.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/request/useMutation/readme.md',
            updatedTime: 1661352758000,
            group: {
              title: 'request',
              path: '/request',
            },
            slugs: [
              {
                depth: 1,
                value: 'useMutation',
                heading: 'usemutation',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 4,
                value: 'config',
                heading: 'config',
              },
            ],
            title: 'useMutation',
            hasPreviewer: true,
          },
          title: 'useMutation - wwhooks',
        },
        {
          path: '/State/use-promise',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/request/usePromise/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/request/usePromise/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'usePromise',
                heading: 'usepromise',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: '加载状态延迟',
                heading: '加载状态延迟',
              },
              {
                depth: 3,
                value: '防抖',
                heading: '防抖',
              },
              {
                depth: 3,
                value: '节流',
                heading: '节流',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'usePromise',
            hasPreviewer: true,
          },
          title: 'usePromise - wwhooks',
        },
        {
          path: '/request/use-query',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/request/useQuery/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/request/useQuery/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'request',
              path: '/request',
            },
            slugs: [
              {
                depth: 1,
                value: 'useQuery',
                heading: 'usequery',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: '依赖请求',
                heading: '依赖请求',
              },
              {
                depth: 3,
                value: '轮询',
                heading: '轮询',
              },
              {
                depth: 3,
                value: '并发请求',
                heading: '并发请求',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 4,
                value: 'config',
                heading: 'config',
              },
            ],
            title: 'useQuery',
            hasPreviewer: true,
          },
          title: 'useQuery - wwhooks',
        },
        {
          path: '/State/use-array',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useArray/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useArray/index.md',
            updatedTime: 1661352758000,
            title: 'useArray',
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useArray',
                heading: 'usearray',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            hasPreviewer: true,
          },
          title: 'useArray - wwhooks',
        },
        {
          path: '/State/use-boolean',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useBoolean/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useBoolean/index.md',
            updatedTime: 1661352758000,
            componentName: 'useBoolean',
            title: 'useBoolean',
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useBoolean',
                heading: 'useboolean',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            hasPreviewer: true,
          },
          title: 'useBoolean - wwhooks',
        },
        {
          path: '/dom/use-click',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useClick/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useClick/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'dom',
              path: '/dom',
            },
            slugs: [
              {
                depth: 1,
                value: 'useClick',
                heading: 'useclick',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'config',
                heading: 'config',
              },
            ],
            title: 'useClick',
            hasPreviewer: true,
          },
          title: 'useClick - wwhooks',
        },
        {
          path: '/dom/use-click-away',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useClickAway/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useClickAway/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'dom',
              path: '/dom',
            },
            slugs: [
              {
                depth: 1,
                value: 'useClickAway',
                heading: 'useclickaway',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: '改变ref',
                heading: '改变ref',
              },
              {
                depth: 3,
                value: '关于滚动条',
                heading: '关于滚动条',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useClickAway',
            hasPreviewer: true,
          },
          title: 'useClickAway - wwhooks',
        },
        {
          path: '/State/use-clipboard-text',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useClipboardText/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useClipboardText/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useClipboardText',
                heading: 'useclipboardtext',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            title: 'useClipboardText',
            hasPreviewer: true,
          },
          title: 'useClipboardText - wwhooks',
        },
        {
          path: '/Function/use-debounce-fn',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useDebounceFn/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useDebounceFn/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Function',
              path: '/Function',
            },
            slugs: [
              {
                depth: 1,
                value: 'useDebounceFn',
                heading: 'usedebouncefn',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useDebounceFn',
            hasPreviewer: true,
          },
          title: 'useDebounceFn - wwhooks',
        },
        {
          path: '/dom/use-dynamic-list',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useDynamicList/README.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useDynamicList/README.md',
            updatedTime: 1661352758000,
            group: {
              title: 'dom',
              path: '/dom',
            },
            slugs: [
              {
                depth: 1,
                value: 'useDynamicList',
                heading: 'usedynamiclist',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            title: 'useDynamicList',
            hasPreviewer: true,
          },
          title: 'useDynamicList - wwhooks',
        },
        {
          path: '/State/use-easy-store',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useEasyStore/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useEasyStore/index.md',
            updatedTime: 1661352758000,
            componentName: 'useEasyStore',
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useEasyStore',
                heading: 'useeasystore',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 4,
                value: 'config',
                heading: 'config',
              },
            ],
            title: 'useEasyStore',
            hasPreviewer: true,
          },
          title: 'useEasyStore - wwhooks',
        },
        {
          path: '/Sensor/use-element-is-scroll',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useElementIsScroll/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useElementIsScroll/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useElementIsScroll',
                heading: 'useelementisscroll',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            title: 'useElementIsScroll',
            hasPreviewer: true,
          },
          title: 'useElementIsScroll - wwhooks',
        },
        {
          path: '/Sensor/use-event-listener',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useEventListener/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useEventListener/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useEventListener',
                heading: 'useeventlistener',
              },
              {
                depth: 2,
                value: '代码演示',
                heading: '代码演示',
              },
              {
                depth: 3,
                value: '基础用法',
                heading: '基础用法',
              },
              {
                depth: 3,
                value: '监听 keydown 事件',
                heading: '监听-keydown-事件',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Options',
                heading: 'options',
              },
            ],
            title: 'useEventListener',
            hasPreviewer: true,
          },
          title: 'useEventListener - wwhooks',
        },
        {
          path: '/cache/use-hash',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useHash/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useHash/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'cache',
              path: '/cache',
            },
            slugs: [
              {
                depth: 1,
                value: 'useHash',
                heading: 'usehash',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useHash',
            hasPreviewer: true,
          },
          title: 'useHash - wwhooks',
        },
        {
          path: '/Dom/use-hover',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useHover/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useHover/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Dom',
              path: '/Dom',
            },
            slugs: [
              {
                depth: 1,
                value: 'useHover',
                heading: 'usehover',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useHover',
            hasPreviewer: true,
          },
          title: 'useHover - wwhooks',
        },
        {
          path: '/Sensor/use-intersection-observer',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useIntersectionObserver/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useIntersectionObserver/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useIntersectionObserver',
                heading: 'useintersectionobserver',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useIntersectionObserver',
            hasPreviewer: true,
          },
          title: 'useIntersectionObserver - wwhooks',
        },
        {
          path: '/Function/use-interval-fn',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useIntervalFn/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useIntervalFn/index.md',
            updatedTime: 1661352758000,
            componentName: 'useIntervalFn',
            group: {
              title: 'Function',
              path: '/Function',
            },
            slugs: [
              {
                depth: 1,
                value: 'useIntervalFn',
                heading: 'useintervalfn',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useIntervalFn',
            hasPreviewer: true,
          },
          title: 'useIntervalFn - wwhooks',
        },
        {
          path: '/dom/use-lock-scroll',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useLockScroll/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useLockScroll/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'dom',
              path: '/dom',
            },
            slugs: [
              {
                depth: 1,
                value: 'useLockScroll',
                heading: 'uselockscroll',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useLockScroll',
            hasPreviewer: true,
          },
          title: 'useLockScroll - wwhooks',
        },
        {
          path: '/State/use-map',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useMap/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useMap/index.md',
            updatedTime: 1661352758000,
            title: 'useMap<todo>',
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useMap',
                heading: 'usemap',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 4,
                value: 'config',
                heading: 'config',
              },
            ],
            hasPreviewer: true,
          },
          title: 'useMap<todo> - wwhooks',
        },
        {
          path: '/lifeCycle/use-mount',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useMount/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useMount/index.md',
            updatedTime: 1661352758000,
            componentName: 'useMount',
            title: 'useMount',
            group: {
              title: 'lifeCycle',
              path: '/lifeCycle',
            },
            slugs: [
              {
                depth: 1,
                value: 'useMount',
                heading: 'usemount',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            hasPreviewer: true,
          },
          title: 'useMount - wwhooks',
        },
        {
          path: '/lifeCycle/use-mounted-state',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useMountedState/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useMountedState/index.md',
            updatedTime: 1661352758000,
            title: 'useMountedState',
            group: {
              title: 'lifeCycle',
              path: '/lifeCycle',
            },
            slugs: [
              {
                depth: 1,
                value: 'useMountedState',
                heading: 'usemountedstate',
              },
              {
                depth: 2,
                value: '代码演示',
                heading: '代码演示',
              },
              {
                depth: 3,
                value: '基础用法',
                heading: '基础用法',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            hasPreviewer: true,
          },
          title: 'useMountedState - wwhooks',
        },
        {
          path: '/Sensor/use-mutation-observer',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useMutationObserver/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useMutationObserver/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useMutationObserver',
                heading: 'usemutationobserver',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useMutationObserver',
            hasPreviewer: true,
          },
          title: 'useMutationObserver - wwhooks',
        },
        {
          path: '/State/use-number',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useNumber/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useNumber/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useNumber',
                heading: 'usenumber',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Actions',
                heading: 'actions',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useNumber',
            hasPreviewer: true,
          },
          title: 'useNumber - wwhooks',
        },
        {
          path: '/State/use-object',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useObject/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useObject/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useObject',
                heading: 'useobject',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Actions',
                heading: 'actions',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useObject',
            hasPreviewer: true,
          },
          title: 'useObject - wwhooks',
        },
        {
          path: '/Function/use-persist-fn',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/usePersistFn/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/usePersistFn/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Function',
              path: '/Function',
            },
            slugs: [
              {
                depth: 1,
                value: 'usePersistFn',
                heading: 'usepersistfn',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'usePersistFn',
            hasPreviewer: true,
          },
          title: 'usePersistFn - wwhooks',
        },
        {
          path: '/State/use-previous',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/usePrevious/README.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/usePrevious/README.md',
            updatedTime: 1661352758000,
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'usePrevious',
                heading: 'useprevious',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            title: 'usePrevious',
            hasPreviewer: true,
          },
          title: 'usePrevious - wwhooks',
        },
        {
          path: '/State/use-reactive',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useReactive/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useReactive/index.md',
            updatedTime: 1661352758000,
            group: {
              path: '/State',
              title: 'State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useReactive',
                heading: 'usereactive',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useReactive',
            hasPreviewer: true,
          },
          title: 'useReactive - wwhooks',
        },
        {
          path: '/Sensor/use-resize-observer',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useResizeObserver/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useResizeObserver/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useResizeObserver',
                heading: 'useresizeobserver',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useResizeObserver',
            hasPreviewer: true,
          },
          title: 'useResizeObserver - wwhooks',
        },
        {
          path: '/Sensor/use-scroll',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useScroll/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useScroll/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useScroll',
                heading: 'usescroll',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 4,
                value: 'config',
                heading: 'config',
              },
            ],
            title: 'useScroll',
            hasPreviewer: true,
          },
          title: 'useScroll - wwhooks',
        },
        {
          path: '/Sensor/use-size',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useSize/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useSize/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useSize',
                heading: 'usesize',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            title: 'useSize',
            hasPreviewer: true,
          },
          title: 'useSize - wwhooks',
        },
        {
          path: '/State/use-local-storage',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useStorage/useLocalStorage.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useStorage/useLocalStorage.md',
            updatedTime: 1661352758000,
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useLocalStorage',
                heading: 'uselocalstorage',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: '存储复杂类型数据',
                heading: '存储复杂类型数据',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Options',
                heading: 'options',
              },
            ],
            title: 'useLocalStorage',
            hasPreviewer: true,
          },
          title: 'useLocalStorage - wwhooks',
        },
        {
          path: '/State/use-session-storage',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useStorage/useSessionStorage.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useStorage/useSessionStorage.md',
            updatedTime: 1661352758000,
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useSessionStorage',
                heading: 'usesessionstorage',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: '存储复杂类型数据',
                heading: '存储复杂类型数据',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Options',
                heading: 'options',
              },
            ],
            title: 'useSessionStorage',
            hasPreviewer: true,
          },
          title: 'useSessionStorage - wwhooks',
        },
        {
          path: '/State/use-store',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useStore/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useStore/index.md',
            updatedTime: 1661352758000,
            componentName: 'useStore',
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useStore',
                heading: 'usestore',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: '基本用法',
                heading: '基本用法',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 4,
                value: 'config',
                heading: 'config',
              },
            ],
            title: 'useStore',
            hasPreviewer: true,
          },
          title: 'useStore - wwhooks',
        },
        {
          path: '/dom/use-sync-scroll',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useSyncScroll/Readme.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useSyncScroll/Readme.md',
            updatedTime: 1661352758000,
            group: {
              title: 'dom',
              path: '/dom',
            },
            slugs: [
              {
                depth: 1,
                value: 'useSyncScroll',
                heading: 'usesyncscroll',
              },
              {
                depth: 2,
                value: 'Demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useSyncScroll',
            hasPreviewer: true,
          },
          title: 'useSyncScroll - wwhooks',
        },
        {
          path: '/Function/use-throttle-fn',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useThrottleFn/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useThrottleFn/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Function',
              path: '/Function',
            },
            slugs: [
              {
                depth: 1,
                value: 'useThrottleFn',
                heading: 'usethrottlefn',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: '',
                heading: '',
              },
            ],
            title: 'useThrottleFn',
            hasPreviewer: true,
          },
          title: 'useThrottleFn - wwhooks',
        },
        {
          path: '/Function/use-timeout-fn',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useTimeoutFn/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useTimeoutFn/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Function',
              path: '/Function',
            },
            slugs: [
              {
                depth: 1,
                value: 'useTimeoutFn',
                heading: 'usetimeoutfn',
              },
              {
                depth: 2,
                value: 'Demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useTimeoutFn',
            hasPreviewer: true,
          },
          title: 'useTimeoutFn - wwhooks',
        },
        {
          path: '/dom/use-title',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useTitle/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useTitle/index.md',
            updatedTime: 1661352758000,
            componentName: 'useTitle',
            group: {
              title: 'dom',
              path: '/dom',
            },
            slugs: [
              {
                depth: 1,
                value: 'useTitle',
                heading: 'usetitle',
              },
              {
                depth: 2,
                value: '代码演示',
                heading: '代码演示',
              },
              {
                depth: 3,
                value: '基础用法',
                heading: '基础用法',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useTitle',
            hasPreviewer: true,
          },
          title: 'useTitle - wwhooks',
        },
        {
          path: '/State/use-toggle',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useToggle/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useToggle/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'State',
              path: '/State',
            },
            slugs: [
              {
                depth: 1,
                value: 'useToggle',
                heading: 'usetoggle',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Generics',
                heading: 'generics',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useToggle',
            hasPreviewer: true,
          },
          title: 'useToggle - wwhooks',
        },
        {
          path: '/lifeCycle/use-unmount',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useUnmount/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useUnmount/index.md',
            updatedTime: 1661352758000,
            componentName: 'useUnmount',
            title: 'useUnmount',
            group: {
              title: 'lifeCycle',
              path: '/lifeCycle',
            },
            slugs: [
              {
                depth: 1,
                value: 'useUnmount',
                heading: 'useunmount',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            hasPreviewer: true,
          },
          title: 'useUnmount - wwhooks',
        },
        {
          path: '/lifeCycle/use-update',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useUpdate/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useUpdate/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'lifeCycle',
              path: '/lifeCycle',
            },
            slugs: [
              {
                depth: 1,
                value: 'useUpdate',
                heading: 'useupdate',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            title: 'useUpdate',
            hasPreviewer: true,
          },
          title: 'useUpdate - wwhooks',
        },
        {
          path: '/lifeCycle/use-update-effect',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useUpdateEffect/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useUpdateEffect/index.md',
            updatedTime: 1661352758000,
            title: 'useUpdateEffect',
            group: {
              title: 'lifeCycle',
              path: '/lifeCycle',
            },
            slugs: [
              {
                depth: 1,
                value: 'useUpdateEffect',
                heading: 'useupdateeffect',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            hasPreviewer: true,
          },
          title: 'useUpdateEffect - wwhooks',
        },
        {
          path: '/lifeCycle/use-update-layout-effect',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useUpdateLayoutEffect/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useUpdateLayoutEffect/index.md',
            updatedTime: 1661352758000,
            title: 'useUpdateLayoutEffect',
            group: {
              title: 'lifeCycle',
              path: '/lifeCycle',
            },
            slugs: [
              {
                depth: 1,
                value: 'useUpdateLayoutEffect',
                heading: 'useupdatelayouteffect',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            hasPreviewer: true,
          },
          title: 'useUpdateLayoutEffect - wwhooks',
        },
        {
          path: '/cache/use-url-state',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useUrlState/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useUrlState/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'cache',
              path: '/cache',
            },
            slugs: [
              {
                depth: 1,
                value: 'useUrlState',
                heading: 'useurlstate',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
              {
                depth: 3,
                value: 'Actions',
                heading: 'actions',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
            ],
            title: 'useUrlState',
            hasPreviewer: true,
          },
          title: 'useUrlState - wwhooks',
        },
        {
          path: '/dom/use-virtual-list',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useVirtualList/README.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useVirtualList/README.md',
            updatedTime: 1661352758000,
            group: {
              title: 'dom',
              path: '/dom',
            },
            slugs: [
              {
                depth: 1,
                value: 'useVirtualList',
                heading: 'usevirtuallist',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            title: 'useVirtualList',
            hasPreviewer: true,
          },
          title: 'useVirtualList - wwhooks',
        },
        {
          path: '/hooks/use-virtual-table',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useVirtualTable/README.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useVirtualTable/README.md',
            updatedTime: 1661352758000,
            slugs: [],
            group: {
              path: '/hooks',
              title: 'Hooks',
            },
            title: 'README',
          },
          title: 'README - wwhooks',
        },
        {
          path: '/Sensor/use-visible',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useVisible/readme.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useVisible/readme.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useVisible',
                heading: 'usevisible',
              },
              {
                depth: 2,
                value: '代码演示',
                heading: '代码演示',
              },
              {
                depth: 3,
                value: '基础用法',
                heading: '基础用法',
              },
              {
                depth: 3,
                value: '传入 DOM 元素',
                heading: '传入-dom-元素',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: '参数',
                heading: '参数',
              },
              {
                depth: 3,
                value: '结果',
                heading: '结果',
              },
            ],
            title: 'useVisible',
            hasPreviewer: true,
          },
          title: 'useVisible - wwhooks',
        },
        {
          path: '/Sensor/use-window-is-scroll',
          component:
            require('D:/ownerCode/wwhooks/packages/wwhooks/src/hooks/useWindowIsScroll/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/hooks/useWindowIsScroll/index.md',
            updatedTime: 1661352758000,
            group: {
              title: 'Sensor',
              path: '/Sensor',
            },
            slugs: [
              {
                depth: 1,
                value: 'useWindowIsScroll',
                heading: 'usewindowisscroll',
              },
              {
                depth: 2,
                value: 'demo',
                heading: 'demo',
              },
              {
                depth: 3,
                value: 'Params',
                heading: 'params',
              },
              {
                depth: 3,
                value: 'Result',
                heading: 'result',
              },
            ],
            title: 'useWindowIsScroll',
            hasPreviewer: true,
          },
          title: 'useWindowIsScroll - wwhooks',
        },
        {
          path: '/utils',
          meta: {},
          exact: true,
          redirect: '/utils/col-span',
        },
        {
          path: '/request',
          meta: {},
          exact: true,
          redirect: '/request/use-axios',
        },
        {
          path: '/State',
          meta: {},
          exact: true,
          redirect: '/State/use-array',
        },
        {
          path: '/dom',
          meta: {},
          exact: true,
          redirect: '/dom/use-click',
        },
        {
          path: '/Function',
          meta: {},
          exact: true,
          redirect: '/Function/use-debounce-fn',
        },
        {
          path: '/Sensor',
          meta: {},
          exact: true,
          redirect: '/Sensor/use-element-is-scroll',
        },
        {
          path: '/cache',
          meta: {},
          exact: true,
          redirect: '/cache/use-hash',
        },
        {
          path: '/Dom',
          meta: {},
          exact: true,
          redirect: '/Dom/use-hover',
        },
        {
          path: '/lifeCycle',
          meta: {},
          exact: true,
          redirect: '/lifeCycle/use-mount',
        },
        {
          path: '/hooks',
          meta: {},
          exact: true,
          redirect: '/hooks/use-virtual-table',
        },
      ],
      title: 'wwhooks',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
