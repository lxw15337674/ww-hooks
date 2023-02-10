import React from 'react';
import { isType } from 'wwutils';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
var App = function App() {
  var log = JSON.stringify;
  var text = 'test';
  var isString = isType(text, 'string');
  var array = new Array(1, 2, 3);
  var isArray = isType(array, 'array');
  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      /*#__PURE__*/ _jsx('p', {
        children: log(isString),
      }),
      /*#__PURE__*/ _jsx('p', {
        children: log(isArray),
      }),
    ],
  });
};
export default App;
