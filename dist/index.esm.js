import {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import { debounce } from 'lodash.debounce';
import Axios from 'axios';
import { throttle } from 'lodash.throttle';

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

function _objectSpread2(target) {
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];

  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length)
            return {
              done: true,
            };
          return {
            done: false,
            value: o[i++],
          };
        },
        e: function (e) {
          throw e;
        },
        f: F,
      };
    }

    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

function useToggle(defaultValue, reverseValue) {
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  var toggleState = useCallback(function (value) {
    if (value === undefined) {
      setState(function (value) {
        return value === defaultValue ? reverseValue : defaultValue;
      });
      return;
    }

    setState(value);
  }, []);
  return [state, toggleState];
}

function useBoolean() {
  var defaultValue =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var state = useToggle(defaultValue, !defaultValue);
  return state;
}

// /**
//  * @desc: obj1的keys根据obj2的keys判断
//  * 1.obj2的key不存在则取另一个对象的value，
//  * 2.另一个对象的keys会被删除。
//  * @example
//  * params:{a:1,b:2,c:3} ,{a:2,d:4}
//  * result:{a:1,d:4}
//  */
// export const unionKeys = (obj1, obj2): typeof obj2 => {
//   const res = {};
//   for (let key in obj2) {
//     const obj1Value = obj1[key];
//     res[key] = obj1Value === undefined ? obj2[key] : obj1Value;
//   }
//   return res;
// };
var isValue = function isValue(state) {
  return typeof state !== 'function';
};
var setState = function setState(v, prev) {
  if (isValue(v)) {
    return v;
  }

  return v(prev);
}; // 数字转px
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isEqual(obj1, obj2) {
  // 1.判断是不是引用类型，不是引用
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  } // 2.比较是否为同一个内存地址

  if (obj1 === obj2) return true; // 3.比较 key 的数量

  var obj1KeysLength = Object.keys(obj1).length;
  var obj2KeysLength = Object.keys(obj2).length;
  if (obj1KeysLength !== obj2KeysLength) return false; // 4.比较 value 的值

  for (var key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      var result = isEqual(obj1[key], obj2[key]);
      if (!result) return false;
    }
  }

  return true;
}

var useArray = function useArray(initialArray) {
  var _useState = useState(initialArray),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];

  var isEdited = useMemo(
    function () {
      return !isEqual(initialArray, value);
    },
    [initialArray, value],
  );
  var actions = useMemo(
    function () {
      return {
        set: function set(index, item) {
          setValue(function (prev) {
            var temp = _toConsumableArray(prev);

            temp[index] = setState(item, temp[index]);
            return temp;
          });
        },
        setAll: setValue,
        remove: function remove(index) {
          setValue(function (prev) {
            var temp = _toConsumableArray(prev);

            temp.splice(index, 1);
            return temp;
          });
        },
        push: function push(item) {
          setValue(function (prev) {
            var temp = _toConsumableArray(prev);

            temp.push(item);
            return temp;
          });
        },
        clear: function clear() {
          setValue([]);
        },
        reset: function reset() {
          setValue(initialArray);
        },
      };
    },
    [initialArray],
  );
  var swap = useCallback(
    function (dragIndex, dropIndex) {
      var maxIndex = value.length - 1;

      if (dragIndex > maxIndex || dropIndex > maxIndex) {
        console.error('交换位置超出最大位置');
      }

      var list = _toConsumableArray(value);

      var _ref = [list[dropIndex], list[dragIndex]];
      list[dragIndex] = _ref[0];
      list[dropIndex] = _ref[1];
      setValue(list);
    },
    [value],
  );
  var reorder = useCallback(
    function (startIndex, endIndex) {
      var maxIndex = value.length - 1;

      if (startIndex > maxIndex || endIndex > maxIndex) {
        console.error('交换位置超出最大位置');
      }

      var result = _toConsumableArray(value);

      var _result$splice = result.splice(startIndex, 1),
        _result$splice2 = _slicedToArray(_result$splice, 1),
        removed = _result$splice2[0];

      result.splice(endIndex, 0, removed);
      setValue(result);
    },
    [value],
  );
  return [
    value,
    _objectSpread2(
      {
        isEdited: isEdited,
        swap: swap,
        reorder: reorder,
      },
      actions,
    ),
  ];
};

var useMount = function useMount(fn) {
  useEffect(function () {
    fn();
  }, []);
};

var useUnmount = function useUnmount(fn) {
  useEffect(function () {
    return fn;
  }, []);
};

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMount = _useState2[0],
    setIsMount = _useState2[1];

  useEffect(function () {
    if (isMount) {
      effect();
    } else {
      setIsMount(true);
    }
  }, deps);
};

function useObject(defaultValue) {
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    object = _useState2[0],
    setObject = _useState2[1];

  var reset = useCallback(
    function () {
      setObject(defaultValue);
    },
    [defaultValue],
  );
  var isEdited = useMemo(
    function () {
      return !isEqual(object, defaultValue);
    },
    [object, defaultValue],
  );
  var set = useCallback(
    function (object) {
      setObject(function (prevObject) {
        var state = setState(object, prevObject);
        return _objectSpread2(_objectSpread2({}, prevObject), state);
      });
    },
    [setObject],
  );
  return [
    object,
    {
      setAll: setObject,
      set: set,
      reset: reset,
      isEdited: isEdited,
    },
  ];
}

var setWindowsHash = function setWindowsHash(hash) {
  window.location.replace('#' + encodeURIComponent(hash));
};

var index = function (initialState) {
  var _useState = useState(function () {
      var hash = window.location.hash.substring(1);

      if (hash === '') {
        setWindowsHash(initialState);
        return initialState;
      }

      return hash;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    hash = _useState2[0],
    setHash = _useState2[1];

  useEffect(
    function () {
      if (hash === null || hash === undefined) {
        //https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
        history.pushState(
          '',
          document.title,
          window.location.pathname + window.location.search,
        );
      } else {
        setWindowsHash(hash);
      }
    },
    [hash],
  );
  var reset = useCallback(
    function () {
      setHash(initialState);
    },
    [initialState],
  );
  return [hash, setHash, reset];
};

var index$1 = function (defaultValue, navigateMode) {
  var _useState = useState(function () {
      var init = defaultValue !== null ? defaultValue : location.search;
      return new URLSearchParams(init);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    urlState = _useState2[0],
    setUrlState = _useState2[1];

  var Actions = useMemo(
    function () {
      return {
        set: function set(key, entry) {
          setUrlState(function (prev) {
            var temp = new URLSearchParams(prev);
            var prevValue = prev.get(key);
            var data = setState(entry, prevValue);

            if (data === undefined) {
              temp.delete(key);
            } else {
              temp.set(key, data);
            }

            return temp;
          });
        },
        clear: function clear() {
          setUrlState(new URLSearchParams());
        },
      };
    },
    [urlState, setUrlState],
  );
  useUpdateEffect(
    function () {
      var mode = ''.concat(navigateMode, 'State');
      var params = urlState.toString();

      if (!params) {
        history[mode]({}, document.title, window.location.pathname);
        return;
      }

      var url = '?' + params;
      history[mode](null, '', url);
    },
    [urlState],
  );
  return [urlState, Actions];
};

function useDebounceFn(fn, wait, options) {
  var fnRef = useRef(fn);
  fnRef.current = fn;
  var debouncedFn = useMemo(
    function () {
      return debounce(
        fnRef.current,
        wait !== null && wait !== void 0 ? wait : 1000,
        options,
      );
    },
    [wait, fnRef, options],
  );
  useUnmount(function () {
    debouncedFn.cancel();
  });
  return {
    run: debouncedFn,
    cancel: debouncedFn.cancel,
    flush: debouncedFn.flush,
  };
}

var lockScrollStyle = {
  overflowY: 'hidden',
};
function useLockScroll(container) {
  var _useBoolean = useBoolean(false),
    _useBoolean2 = _slicedToArray(_useBoolean, 2),
    lock = _useBoolean2[0],
    setLock = _useBoolean2[1];

  useEffect(
    function () {
      container = container || document.body;
      var _container$style = container.style,
        originalPaddingRight = _container$style.paddingRight,
        originalOverflow = _container$style.overflow;

      var _container$getBoundin = container.getBoundingClientRect(),
        width = _container$getBoundin.width;

      if (lock) {
        container.style.width = ''.concat(width, 'px');
        container.style.overflowY = lockScrollStyle.overflowY;
      }

      return function () {
        container.style.overflow = originalOverflow;
        container.style.width = originalPaddingRight;
      };
    },
    [lock, container],
  );
  return [setLock, lock];
}

var _excluded = [
  'debounceInterval',
  'manual',
  'onSuccess',
  'onError',
  'initialData',
  'throttleInterval',
  'loadingDelay',
  'defaultParams',
];
var axios = Axios.create();

var useAxios = function useAxios(_ref) {
  var debounceInterval = _ref.debounceInterval,
    manual = _ref.manual,
    onSuccess = _ref.onSuccess,
    onError = _ref.onError,
    initialData = _ref.initialData,
    throttleInterval = _ref.throttleInterval,
    loadingDelay = _ref.loadingDelay,
    defaultParams = _ref.defaultParams,
    axiosConfig = _objectWithoutProperties(_ref, _excluded);

  var cancelToken = useRef();
  var axiosRequest = useCallback(
    function (config) {
      var runConfig = _objectSpread2(
        _objectSpread2(
          {
            cancelToken: new Axios.CancelToken(function (c) {
              cancelToken.current = c;
            }),
          },
          axiosConfig,
        ),
        config,
      );

      return axios.request(runConfig).then(function (res) {
        return res.data;
      });
    },
    [axiosConfig],
  );
  var request = usePromise(axiosRequest, {
    debounceInterval: debounceInterval,
    manual: manual,
    onSuccess: onSuccess,
    onError: onError,
    initialData: initialData,
    throttleInterval: throttleInterval,
    loadingDelay: loadingDelay,
    defaultParams: defaultParams,
  });
  var cancel = useCallback(
    function () {
      var _cancelToken$current;

      (_cancelToken$current = cancelToken.current) === null ||
      _cancelToken$current === void 0
        ? void 0
        : _cancelToken$current.call(cancelToken);
      request === null || request === void 0 ? void 0 : request.cancel();
    },
    [request.cancel],
  );
  useUnmount(function () {
    cancel();
  });
  return request;
};

function useMountedState() {
  var mountedRef = useRef(false);
  useEffect(function () {
    mountedRef.current = true;
    return function () {
      mountedRef.current = false;
    };
  }, []);
  var get = useCallback(function () {
    return mountedRef.current;
  }, []);
  return get;
}

function useTimeoutFn(fn) {
  var delay =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timer = useRef(null);

  var _useBoolean = useBoolean(false),
    _useBoolean2 = _slicedToArray(_useBoolean, 2),
    waiting = _useBoolean2[0],
    setWaiting = _useBoolean2[1];

  var run = useCallback(
    function () {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      clearTimeout(timer.current);
      if (delay === undefined || delay === null) return;
      setWaiting(true);
      timer.current = setTimeout(function () {
        fn.apply(void 0, args);
        setWaiting(false);
      }, delay);
    },
    [fn, delay],
  );
  useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  var cancel = useCallback(function () {
    clearTimeout(timer.current);
    setWaiting(false);
  }, []);
  return {
    waiting: waiting,
    run: run,
    cancel: cancel,
  };
}

var _excluded$1 = ['deps', 'pollingInterval', 'manual', 'concurrent', 'params'];

var useQuery = function useQuery(_ref) {
  var _ref$deps = _ref.deps,
    deps = _ref$deps === void 0 ? [] : _ref$deps,
    _ref$pollingInterval = _ref.pollingInterval,
    pollingInterval =
      _ref$pollingInterval === void 0 ? 0 : _ref$pollingInterval,
    _ref$manual = _ref.manual,
    manual = _ref$manual === void 0 ? true : _ref$manual,
    _ref$concurrent = _ref.concurrent,
    concurrent = _ref$concurrent === void 0 ? false : _ref$concurrent,
    params = _ref.params,
    useAxiosConfig = _objectWithoutProperties(_ref, _excluded$1);

  var polling = useRef();

  var _useState = useState(params),
    _useState2 = _slicedToArray(_useState, 2),
    requestParams = _useState2[0],
    setParams = _useState2[1];

  var request = useAxios(useAxiosConfig);
  var cancel = useCallback(
    function () {
      request.cancel();
      clearTimeout(polling.current);
    },
    [request],
  );
  var run = useCallback(
    function (_params) {
      if (polling.current) {
        clearTimeout(polling.current);
      }

      if (!concurrent) {
        cancel();
      }

      var params = setState(_params, requestParams);
      setParams(params);
      var axiosConfig = {
        params: params,
      }; // 参数合并

      if (pollingInterval) {
        return request.run(axiosConfig).finally(function () {
          polling.current = setTimeout(function () {
            if (!polling.current) return;
            run(params);
          }, pollingInterval);
        });
      }

      return request.run(axiosConfig);
    },
    [concurrent, requestParams, pollingInterval, request, cancel],
  );
  var reload = useCallback(
    function () {
      return run(requestParams);
    },
    [requestParams, run],
  );
  useUpdateEffect(function () {
    reload();
  }, _toConsumableArray(deps));
  useMount(function () {
    if (manual === false) {
      reload();
    }
  });
  useUnmount(function () {
    clearTimeout(polling.current);
  });
  return _objectSpread2(
    _objectSpread2({}, request),
    {},
    {
      run: run,
      reload: reload,
      cancel: cancel,
      params: requestParams,
      setParams: setParams,
    },
  );
};

var _excluded$2 = ['manual', 'data'];

var useMutation = function useMutation(_ref) {
  var _ref$manual = _ref.manual,
    manual = _ref$manual === void 0 ? true : _ref$manual,
    data = _ref.data,
    useAxiosConfig = _objectWithoutProperties(_ref, _excluded$2);

  var _useState = useState(data),
    _useState2 = _slicedToArray(_useState, 2),
    bodyData = _useState2[0],
    setBodyData = _useState2[1];

  var axiosConfig = _objectSpread2(
    {
      data: bodyData,
      method: 'post',
    },
    useAxiosConfig,
  );

  var request = useAxios(axiosConfig);
  var run = useCallback(
    function (params) {
      var _params = setState(params, bodyData);

      setBodyData(params);
      return request.run({
        data: _params,
      });
    },
    [bodyData, request],
  );
  var reload = useCallback(
    function () {
      return run(bodyData);
    },
    [run, bodyData],
  );
  useMount(function () {
    if (manual === false) {
      request.reload();
    }
  });
  return _objectSpread2(
    _objectSpread2({}, request),
    {},
    {
      run: run,
      reload: reload,
      params: bodyData,
      setParams: setBodyData,
    },
  );
};

function useSize(target) {
  var _useState = useState({
      width: 0,
      height: 0,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  useResizeObserver(target, function (entry) {
    setState({
      width: entry.target.offsetWidth,
      height: entry.target.offsetHeight,
    });
  });
  return state;
}

var useUpdate = function useUpdate() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    setState = _useState2[1];

  return useCallback(function () {
    setState({});
  }, []);
};

var useNumber = function useNumber() {
  var defaultValue =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    number = _useState2[0],
    setNumber = _useState2[1];

  var actions = useMemo(function () {
    var plus = function plus() {
      var v =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      setNumber(function (c) {
        return c + v;
      });
    };

    var minus = function minus() {
      var v =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      setNumber(function (c) {
        return c - v;
      });
    };

    return {
      plus: plus,
      minus: minus,
    };
  }, []);
  var reset = useCallback(
    function () {
      setNumber(defaultValue);
    },
    [defaultValue],
  );
  return [
    number,
    _objectSpread2(
      {
        set: setNumber,
        reset: reset,
      },
      actions,
    ),
  ];
};

var useClick = function useClick() {
  var simpleClickFn =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : function (e) {};
  var doubleClickFn =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : function (e) {};
  var config =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _useNumber = useNumber(0),
    _useNumber2 = _slicedToArray(_useNumber, 2),
    clickCount = _useNumber2[0],
    actions = _useNumber2[1];

  var _useMemo = useMemo(
      function () {
        return _objectSpread2(
          _objectSpread2(
            {},
            {
              delay: 250,
              exclusive: false,
            },
          ),
          config,
        );
      },
      [config],
    ),
    delay = _useMemo.delay,
    exclusive = _useMemo.exclusive;

  var _useTimeoutFn = useTimeoutFn(function () {
      actions.reset();
    }, delay),
    run = _useTimeoutFn.run;

  var fn = useCallback(
    function (e) {
      if (clickCount === 0) {
        simpleClickFn === null || simpleClickFn === void 0
          ? void 0
          : simpleClickFn(e);
        run();
      }

      if (clickCount === 1) {
        if (!exclusive) {
          simpleClickFn === null || simpleClickFn === void 0
            ? void 0
            : simpleClickFn(e);
        }

        doubleClickFn === null || doubleClickFn === void 0
          ? void 0
          : doubleClickFn(e);
      }

      actions.plus(1);
    },
    [simpleClickFn, run, exclusive, doubleClickFn],
  );
  return fn;
};

function useThrottleFn(fn, wait, options) {
  var fnRef = useRef(fn);
  fnRef.current = fn;
  var throttledFn = useMemo(
    function () {
      return throttle(
        fnRef.current,
        wait !== null && wait !== void 0 ? wait : 1000,
        options,
      );
    },
    [wait, fnRef, options],
  );
  useUnmount(function () {
    throttledFn.cancel();
  });
  return {
    run: throttledFn,
    cancel: throttledFn.cancel,
    flush: throttledFn.flush,
  };
}

// /**
function isNumber(value) {
  return typeof value === 'number';
}
function isObject$1(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

var usePromise = function usePromise(service) {
  var _ref =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$debounceInterval = _ref.debounceInterval,
    debounceInterval =
      _ref$debounceInterval === void 0 ? null : _ref$debounceInterval,
    _ref$manual = _ref.manual,
    manual = _ref$manual === void 0 ? true : _ref$manual,
    _ref$onSuccess = _ref.onSuccess,
    onSuccess = _ref$onSuccess === void 0 ? function () {} : _ref$onSuccess,
    _ref$onError = _ref.onError,
    onError = _ref$onError === void 0 ? function () {} : _ref$onError,
    _ref$initialData = _ref.initialData,
    initialData = _ref$initialData === void 0 ? null : _ref$initialData,
    _ref$throttleInterval = _ref.throttleInterval,
    throttleInterval =
      _ref$throttleInterval === void 0 ? null : _ref$throttleInterval,
    _ref$loadingDelay = _ref.loadingDelay,
    loadingDelay = _ref$loadingDelay === void 0 ? 300 : _ref$loadingDelay,
    _ref$defaultParams = _ref.defaultParams,
    defaultParams = _ref$defaultParams === void 0 ? [] : _ref$defaultParams;

  var mountedState = useMountedState();

  var _useState = useState(initialData),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];

  var _useState5 = useState('success'),
    _useState6 = _slicedToArray(_useState5, 2),
    status = _useState6[0],
    setStatus = _useState6[1];

  var _useState7 = useState(defaultParams),
    _useState8 = _slicedToArray(_useState7, 2),
    params = _useState8[0],
    setParams = _useState8[1];

  var delaySetLoading = useTimeoutFn(function () {
    setStatus('loading');
  }, loadingDelay);
  var baseRun = useCallback(
    function () {
      for (
        var _len = arguments.length, params = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        params[_key] = arguments[_key];
      }

      delaySetLoading.run();
      setError(undefined);
      setParams(params);
      return service
        .apply(void 0, params)
        .then(function (data) {
          mountedState() && setData(data);
          onSuccess === null || onSuccess === void 0
            ? void 0
            : onSuccess(data, params);
          setStatus('success');
          return data;
        })
        .catch(function (err) {
          mountedState() && setError(err);
          onError === null || onError === void 0
            ? void 0
            : onError(err, params);
          setStatus('error');
          return Promise.reject(err);
        })
        .finally(function () {
          delaySetLoading.cancel();
        });
    },
    [delaySetLoading, mountedState, onError, onSuccess, service],
  );
  var debounceRun = useDebounceFn(baseRun, debounceInterval);
  var throttleRun = useThrottleFn(baseRun, throttleInterval);
  var run = useCallback(
    function () {
      for (
        var _len2 = arguments.length, params = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        params[_key2] = arguments[_key2];
      }

      var _params = params;

      if (!Array.isArray(params)) {
        _params = [];
      }

      if (isNumber(debounceInterval)) {
        debounceRun.run.apply(debounceRun, _toConsumableArray(_params));
        return Promise.resolve(null);
      }

      if (isNumber(throttleInterval)) {
        throttleRun.run.apply(throttleRun, _toConsumableArray(_params));
        return Promise.resolve(null);
      }

      return baseRun.apply(void 0, _toConsumableArray(_params));
    },
    [debounceInterval, throttleInterval, baseRun, debounceRun, throttleRun],
  );
  var reload = useCallback(
    function () {
      if (Array.isArray(params)) {
        return run.apply(void 0, _toConsumableArray(params));
      } // @ts-ignore

      return run();
    },
    [run, params],
  );
  var cancel = useCallback(
    function () {
      debounceRun === null || debounceRun === void 0
        ? void 0
        : debounceRun.cancel();
      throttleRun === null || throttleRun === void 0
        ? void 0
        : throttleRun.cancel();
    },
    [debounceRun, throttleRun],
  );
  var flush = useMemo(
    function () {
      if (
        debounceRun === null || debounceRun === void 0
          ? void 0
          : debounceRun.flush
      ) {
        return debounceRun.flush;
      }

      if (
        throttleRun === null || throttleRun === void 0
          ? void 0
          : throttleRun.flush
      ) {
        return throttleRun.flush;
      }

      return function () {
        return Promise.resolve(null);
      };
    },
    [debounceRun, throttleRun],
  );
  useMount(function () {
    if (manual === false) {
      reload();
    }
  });
  useUnmount(function () {
    cancel();
  });
  return {
    data: data,
    params: params,
    error: error,
    reload: reload,
    isLoading: status === 'loading',
    isError: status === 'error',
    isSuccess: status === 'success',
    status: status,
    run: run,
    cancel: cancel,
    mutate: setData,
    flush: flush,
  };
};

function setDefaultArguments(fn) {
  for (
    var _len = arguments.length,
      defaultArguments = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    defaultArguments[_key - 1] = arguments[_key];
  }

  return function () {
    for (
      var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2] = arguments[_key2];
    }

    var mergeArgs = defaultArguments.map(function (v, i) {
      if (Array.isArray(v)) {
        return args[i];
      }

      if (isObject$1(v)) {
        return _objectSpread2(_objectSpread2({}, v), args[i]);
      }

      return args[i];
    });
    return fn.apply(void 0, _toConsumableArray(mergeArgs));
  };
}

function isFunction(obj) {
  return typeof obj === 'function';
}
function getTargetElement(target, defaultElement) {
  if (!target) {
    return defaultElement;
  }

  var targetElement;

  if (isFunction(target)) {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
} // export const on = (function () {
//   if (document.addEventListener) {
//     return function (element, event, handler, useCapture = false) {
//       if (element && event && handler) {
//         element.addEventListener(event, handler, useCapture);
//       }
//     };
//   } else {
//     return function (element, event, handler) {
//       if (element && event && handler) {
//         element.attachEvent('on' + event, handler);
//       }
//     };
//   }
// })();
// /* istanbul ignore next */
// export const off = (function () {
//   if (document.removeEventListener) {
//     return function (element, event, handler, useCapture = false) {
//       if (element && event) {
//         element.removeEventListener(event, handler, useCapture);
//       }
//     };
//   } else {
//     return function (element, event, handler) {
//       if (element && event) {
//         element.detachEvent('on' + event, handler);
//       }
//     };
//   }
// })();
// /* istanbul ignore next */
// export const once = function (el, event, fn) {
//   var listener = function () {
//     if (fn) {
//       fn.apply(this, arguments);
//     }
//     off(el, event, listener);
//   };
//   on(el, event, listener);
// };
// /* istanbul ignore next */
// export function hasClass(el, cls) {
//   if (!el || !cls) {
//     return false;
//   }
//   if (cls.indexOf(' ') !== -1) {
//     throw new Error('className should not contain space.');
//   }
//   if (el.classList) {
//     return el.classList.contains(cls);
//   } else {
//     return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
//   }
// }
// /* istanbul ignore next */
// export function addClass(el, cls) {
//   if (!el) {
//     return;
//   }
//   let curClass = el.className;
//   let classes = (cls || '').split(' ');
//   for (let i = 0, j = classes.length; i < j; i++) {
//     let clsName = classes[i];
//     if (!clsName) {
//       continue;
//     }
//     if (el.classList) {
//       el.classList.add(clsName);
//     } else if (!hasClass(el, clsName)) {
//       curClass += ' ' + clsName;
//     }
//   }
//   if (!el.classList) {
//     el.className = curClass;
//   }
// }
// /* istanbul ignore next */
// export function removeClass(el, cls) {
//   if (!el || !cls) {
//     return;
//   }
//   let classes = cls.split(' ');
//   let curClass = ' ' + el.className + ' ';
//   for (let i = 0, j = classes.length; i < j; i++) {
//     let clsName = classes[i];
//     if (!clsName) {
//       continue;
//     }
//     if (el.classList) {
//       el.classList.remove(clsName);
//     } else if (hasClass(el, clsName)) {
//       curClass = curClass.replace(' ' + clsName + ' ', ' ');
//     }
//   }
//   if (!el.classList) {
//     el.className = curClass.trim();
//   }
// }

/* istanbul ignore next */
// export const getStyle = function (element, styleName) {
//   if (!element || !styleName) {
//     return null;
//   }
//   styleName = camelCase(styleName);
//   if (styleName === 'float') {
//     styleName = 'cssFloat';
//   }
//   try {
//     let computed = document.defaultView.getComputedStyle(element, '');
//     return element.style[styleName] || computed ? computed[styleName] : null;
//   } catch (e) {
//     return element.style[styleName];
//   }
// };
// /* istanbul ignore next */
// export function setStyle(element, styleName, value) {
//   if (!element || !styleName) {
//     return;
//   }
//   if (typeof styleName === 'object') {
//     for (let prop in styleName) {
//       if (styleName.hasOwnProperty(prop)) {
//         setStyle(element, prop, styleName[prop]);
//       }
//     }
//   } else {
//     styleName = camelCase(styleName);
//     element.style[styleName] = value;
//   }
// }
// export const isScroll = (el, vertical) => {
//   const determinedDirection = vertical !== null || vertical !== undefined;
//   const overflow = determinedDirection
//     ? vertical
//       ? getStyle(el, 'overflow-y')
//       : getStyle(el, 'overflow-x')
//     : getStyle(el, 'overflow');
//   return overflow.match(/(scroll|auto)/);
// };
// export const getScrollContainer = (el, vertical) => {
//   let parent = el;
//   while (parent) {
//     if ([window, document, document.documentElement].includes(parent)) {
//       return window;
//     }
//     if (isScroll(parent, vertical)) {
//       return parent;
//     }
//     parent = parent.parentNode;
//   }
//   return parent;
// };
// export const isInContainer = (el, container) => {
//   if (!el || !container) {
//     return false;
//   }
//   const elRect = el.getBoundingClientRect();
//   let containerRect;
//   if (
//     [window, document, document.documentElement, null, undefined].includes(
//       container,
//     )
//   ) {
//     containerRect = {
//       top: 0,
//       right: window.innerWidth,
//       bottom: window.innerHeight,
//       left: 0,
//     };
//   } else {
//     containerRect = container.getBoundingClientRect();
//   }
//   return (
//     elRect.top < containerRect.bottom &&
//     elRect.bottom > containerRect.top &&
//     elRect.right > containerRect.left &&
//     elRect.left < containerRect.right
//   );
// };
// 判断元素是否可见

function isInViewPort(el) {
  if (!el) {
    return undefined;
  }

  var viewPortWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  var rect = el.getBoundingClientRect();

  if (rect) {
    var top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right;
    return (
      bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0
    );
  }

  return false;
}

function useIntersectionObserver(target, callback, config) {
  useLayoutEffect(
    function () {
      var el = getTargetElement(target);

      if (!el) {
        return;
      }

      var observer = new IntersectionObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var entry = _step.value;
            callback(entry);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }, config);
      observer.observe(el);
      return function () {
        observer.disconnect();
      };
    },
    [target],
  );
}

function useVisible(target) {
  var _useState = useState(function () {
      var el = getTargetElement(target);
      return isInViewPort(el);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];

  useIntersectionObserver(target, function (entry) {
    setVisible(entry.isIntersecting);
  });
  return visible;
}

function useEventListener(eventName, handler) {
  var options =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var handlerRef = useRef();
  handlerRef.current = handler;
  useEffect(
    function () {
      var targetElement = getTargetElement(options.target, window);

      if (
        !(targetElement === null || targetElement === void 0
          ? void 0
          : targetElement.addEventListener)
      ) {
        return;
      }

      var eventListener = function eventListener(event) {
        return handlerRef.current && handlerRef.current(event);
      };

      targetElement.addEventListener(eventName, eventListener, {
        capture: options.capture,
        once: options.once,
        passive: options.passive,
      });
      return function () {
        targetElement.removeEventListener(eventName, eventListener, {
          capture: options.capture,
        });
      };
    },
    [eventName, options],
  );
}

function useScroll(target) {
  var _useState = useState({
      left: 0,
      top: 0,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];

  useEventListener(
    'scroll',
    function (e) {
      var target = e.target;
      var newPosition = {
        left: target.scrollLeft,
        top: target.scrollTop,
      };
      setPosition(newPosition);
    },
    {
      target: target,
    },
  );
  return {
    position: position,
  };
}

function useResizeObserver(target, onResize) {
  useLayoutEffect(
    function () {
      var el = getTargetElement(target);

      if (!el) {
        return;
      }

      var resizeObserver = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
          onResize(entry);
        });
      });
      resizeObserver.observe(el);
      return function () {
        resizeObserver.disconnect();
      };
    },
    [target],
  );
}

function colSpan(data, keys) {
  var list = data;
  var span = {};

  var _iterator = _createForOfIteratorHelper(keys),
    _step;

  try {
    var _loop = function _loop() {
      var key = _step.value;
      var currentValue = list[0][key];
      var lengthList = list.reduce(
        function (pre, cur) {
          if (cur[key] === currentValue) {
            var lastLength = pre.length - 1;
            pre[lastLength] = pre[lastLength] + 1;
          } else {
            pre.push(1);
            currentValue = cur[key];
          }

          return pre;
        },
        [0],
      );

      var colSpan = function colSpan(lengthList) {
        return lengthList.reduce(function (prev, cur) {
          var list = new Array(cur).fill(0);
          list[0] = cur;
          prev.push.apply(prev, _toConsumableArray(list));
          return prev;
        }, []);
      };

      span[key] = colSpan(lengthList);
    };

    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return span;
}

function isType(data, type) {
  var dataType = Object.prototype.toString
    .call(data)
    .slice(8, -1)
    .toLowerCase();
  return type === dataType;
}

var useIsScroll = function useIsScroll(target) {
  var _useState = useState({
      x: false,
      y: false,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  useResizeObserver(target, function (entry) {
    var target = entry.target;
    setState({
      x: target.scrollWidth !== target.clientWidth,
      y: target.scrollHeight !== target.clientHeight,
    });
  });
  return state;
};

export {
  isType,
  setDefaultArguments,
  colSpan as sortBy,
  useArray,
  useAxios,
  useBoolean,
  useClick,
  useDebounceFn,
  useEventListener,
  index as useHash,
  useIntersectionObserver,
  useIsScroll,
  useLockScroll,
  useMount,
  useMountedState,
  useMutation,
  useNumber,
  useObject,
  usePromise,
  useQuery,
  useResizeObserver,
  useScroll,
  useSize,
  useThrottleFn,
  useTimeoutFn,
  useToggle,
  useUnmount,
  useUpdate,
  useUpdateEffect,
  index$1 as useUrlState,
  useVisible,
};
