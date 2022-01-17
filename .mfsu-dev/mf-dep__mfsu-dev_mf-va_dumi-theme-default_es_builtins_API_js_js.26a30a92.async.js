(self['webpackChunkwwhooks'] = self['webpackChunkwwhooks'] || []).push([
  ['mf-dep__mfsu-dev_mf-va_dumi-theme-default_es_builtins_API_js_js'],
  {
    /***/ './.mfsu-dev/mf-va_dumi-theme-default_es_builtins_API.js.js':
      /*!******************************************************************!*\
  !*** ./.mfsu-dev/mf-va_dumi-theme-default_es_builtins_API.js.js ***!
  \******************************************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var D_ownerCode_wwhooks_node_modules_dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/dumi-theme-default/es/builtins/API.js */ './node_modules/dumi-theme-default/es/builtins/API.js',
          );

        /* harmony default export */ __webpack_exports__['default'] =
          D_ownerCode_wwhooks_node_modules_dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_0__.default;

        /***/
      },

    /***/ './node_modules/dumi-theme-default/es/builtins/API.js':
      /*!************************************************************!*\
  !*** ./node_modules/dumi-theme-default/es/builtins/API.js ***!
  \************************************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ './node_modules/react/index.js');
        /* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! dumi/theme */ './node_modules/@umijs/preset-dumi/lib/theme/index.js',
          );

        var LOCALE_TEXTS = {
          'zh-CN': {
            name: '属性名',
            description: '描述',
            type: '类型',
            default: '默认值',
            required: '(必选)',
          },
          'en-US': {
            name: 'Name',
            description: 'Description',
            type: 'Type',
            default: 'Default',
            required: '(required)',
          },
        };
        /* harmony default export */ __webpack_exports__['default'] = function (
          _ref,
        ) {
          var identifier = _ref.identifier,
            expt = _ref['export'];
          var data = (0, dumi_theme__WEBPACK_IMPORTED_MODULE_1__.useApiData)(
            identifier,
          );

          var _useContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
              dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context,
            ),
            locale = _useContext.locale;

          var texts = /^zh|cn$/i.test(locale)
            ? LOCALE_TEXTS['zh-CN']
            : LOCALE_TEXTS['en-US'];
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            null,
            data &&
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'table',
                {
                  style: {
                    marginTop: 24,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  'thead',
                  null,
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    'tr',
                    null,
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      'th',
                      null,
                      texts.name,
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      'th',
                      null,
                      texts.description,
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      'th',
                      null,
                      texts.type,
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      'th',
                      null,
                      texts['default'],
                    ),
                  ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  'tbody',
                  null,
                  data[expt].map(function (row) {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                      'tr',
                      {
                        key: row.identifier,
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'td',
                        null,
                        row.identifier,
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'td',
                        null,
                        row.description || '--',
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'td',
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          'code',
                          null,
                          row.type,
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'td',
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                          'code',
                          null,
                          row['default'] ||
                            (row.required && texts.required) ||
                            '--',
                        ),
                      ),
                    );
                  }),
                ),
              ),
          );
        };

        /***/
      },
  },
]);
