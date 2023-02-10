function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
import { Table } from 'antd';
import React from 'react';
import { colSpan } from 'wwutils';
import { jsx as _jsx } from 'react/jsx-runtime';
var data = [
  {
    user: 'fred',
    age: 48,
    phone: 123456,
  },
  {
    user: 'fred',
    age: 48,
    phone: 123456,
  },
  {
    user: 'fred',
    age: 40,
    phone: 123456,
  },
  {
    user: 'barney',
    age: 36,
    phone: 123456,
  },
  {
    user: 'barney',
    age: 34,
    phone: 123456,
  },
  {
    user: 'test',
    age: 40,
    phone: 123456,
  },
].map(function (item, index) {
  return _objectSpread(
    _objectSpread({}, item),
    {},
    {
      index: index,
    },
  );
});
var app = function app() {
  var rowSpan = colSpan(data, ['user', 'age']);
  var columns = [
    {
      title: 'user',
      dataIndex: 'user',
      key: 'user',
      render: function render(value, _, index) {
        var obj = {
          children: /*#__PURE__*/ _jsx('div', {
            children: value,
          }),
          props: {
            rowSpan: rowSpan.user[index],
          },
        };
        return obj;
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      render: function render(value, _, index) {
        var obj = {
          children: /*#__PURE__*/ _jsx('div', {
            children: value,
          }),
          props: {
            rowSpan: rowSpan.age[index],
          },
        };
        return obj;
      },
    },
  ];
  return /*#__PURE__*/ _jsx(Table, {
    bordered: true,
    columns: columns,
    dataSource: data,
    rowKey: 'key',
  });
};
export default app;
