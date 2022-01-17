'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react'),
  n = require('lodash');
function t(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
var r = t(require('axios'));
function u(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n &&
      (r = r.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function o(e) {
  for (var n = 1; arguments.length > n; n++) {
    var t = null != arguments[n] ? arguments[n] : {};
    n % 2
      ? u(Object(t), !0).forEach(function (n) {
          a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : u(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function a(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}
function i(e, n) {
  if (null == e) return {};
  var t,
    r,
    u = (function (e, n) {
      if (null == e) return {};
      var t,
        r,
        u = {},
        o = Object.keys(e);
      for (r = 0; o.length > r; r++) 0 > n.indexOf((t = o[r])) && (u[t] = e[t]);
      return u;
    })(e, n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; o.length > r; r++)
      0 > n.indexOf((t = o[r])) &&
        Object.prototype.propertyIsEnumerable.call(e, t) &&
        (u[t] = e[t]);
  }
  return u;
}
function c(e, n) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, n) {
      var t =
        null == e
          ? null
          : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (null == t) return;
      var r,
        u,
        o = [],
        a = !0,
        i = !1;
      try {
        for (
          t = t.call(e);
          !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n);
          a = !0
        );
      } catch (e) {
        (i = !0), (u = e);
      } finally {
        try {
          a || null == t.return || t.return();
        } finally {
          if (i) throw u;
        }
      }
      return o;
    })(e, n) ||
    s(e, n) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function l(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return f(e);
    })(e) ||
    (function (e) {
      if (
        ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    })(e) ||
    s(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function s(e, n) {
  if (e) {
    if ('string' == typeof e) return f(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === t && e.constructor && (t = e.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(e)
        : 'Arguments' === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? f(e, n)
        : void 0
    );
  }
}
function f(e, n) {
  (null == n || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); n > t; t++) r[t] = e[t];
  return r;
}
function v(e, n) {
  var t =
    ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
  if (!t) {
    if (
      Array.isArray(e) ||
      (t = s(e)) ||
      (n && e && 'number' == typeof e.length)
    ) {
      t && (e = t);
      var r = 0,
        u = function () {};
      return {
        s: u,
        n: function () {
          return e.length > r ? { done: !1, value: e[r++] } : { done: !0 };
        },
        e: function (e) {
          throw e;
        },
        f: u,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var o,
    a = !0,
    i = !1;
  return {
    s: function () {
      t = t.call(e);
    },
    n: function () {
      var e = t.next();
      return (a = e.done), e;
    },
    e: function (e) {
      (i = !0), (o = e);
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (i) throw o;
      }
    },
  };
}
function d(n, t) {
  var r = c(e.useState(n), 2),
    u = r[1];
  return [
    r[0],
    e.useCallback(function (e) {
      u(
        void 0 !== e
          ? e
          : function (e) {
              return e === n ? t : n;
            },
      );
    }, []),
  ];
}
function p() {
  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    n = d(e, !e);
  return n;
}
var y = function (e, n) {
    return 'function' != typeof e ? e : e(n);
  },
  h = function (n) {
    e.useEffect(function () {
      n();
    }, []);
  },
  m = function (n) {
    e.useEffect(function () {
      return n;
    }, []);
  },
  b = function (n, t) {
    var r = c(e.useState(!1), 2),
      u = r[0],
      o = r[1];
    e.useEffect(function () {
      u ? n() : o(!0);
    }, t);
  };
var g = function (e) {
  window.location.replace('#' + encodeURIComponent(e));
};
function w(t, r, u) {
  var o = e.useRef(t);
  o.current = t;
  var a = e.useMemo(
    function () {
      return n.debounce(o.current, null != r ? r : 1e3, u);
    },
    [r, o, u],
  );
  return (
    m(function () {
      a.cancel();
    }),
    { run: a, cancel: a.cancel, flush: a.flush }
  );
}
var S = 'hidden';
var x = [
    'debounceInterval',
    'manual',
    'onSuccess',
    'onError',
    'initialData',
    'throttleInterval',
    'loadingDelay',
    'defaultParams',
  ],
  O = r.default.create(),
  E = function (n) {
    var t = n.debounceInterval,
      u = n.manual,
      a = n.onSuccess,
      c = n.onError,
      l = n.initialData,
      s = n.throttleInterval,
      f = n.loadingDelay,
      v = n.defaultParams,
      d = i(n, x),
      p = e.useRef(),
      y = e.useCallback(
        function (e) {
          var n = o(
            o(
              {
                cancelToken: new r.default.CancelToken(function (e) {
                  p.current = e;
                }),
              },
              d,
            ),
            e,
          );
          return O.request(n).then(function (e) {
            return e.data;
          });
        },
        [d],
      ),
      h = T(y, {
        debounceInterval: t,
        manual: u,
        onSuccess: a,
        onError: c,
        initialData: l,
        throttleInterval: s,
        loadingDelay: f,
        defaultParams: v,
      }),
      b = e.useCallback(
        function () {
          var e;
          null === (e = p.current) || void 0 === e || e.call(p),
            null == h || h.cancel();
        },
        [h.cancel],
      );
    return (
      m(function () {
        b();
      }),
      h
    );
  };
function C() {
  var n = e.useRef(!1);
  return (
    e.useEffect(function () {
      return (
        (n.current = !0),
        function () {
          n.current = !1;
        }
      );
    }, []),
    e.useCallback(function () {
      return n.current;
    }, [])
  );
}
function k(n) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    r = e.useRef(null),
    u = p(!1),
    o = c(u, 2),
    a = o[0],
    i = o[1],
    l = e.useCallback(
      function () {
        for (var e = arguments.length, u = Array(e), o = 0; e > o; o++)
          u[o] = arguments[o];
        clearTimeout(r.current),
          null != t &&
            (i(!0),
            (r.current = setTimeout(function () {
              n.apply(void 0, u), i(!1);
            }, t)));
      },
      [n, t],
    );
  e.useEffect(function () {
    return function () {
      clearTimeout(r.current);
    };
  }, []);
  var s = e.useCallback(function () {
    clearTimeout(r.current), i(!1);
  }, []);
  return { waiting: a, run: l, cancel: s };
}
var A = ['deps', 'pollingInterval', 'manual', 'concurrent', 'params'],
  j = ['manual', 'data'];
var P = function () {
  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = e.useState(n),
    r = c(t, 2),
    u = r[0],
    a = r[1],
    i = e.useMemo(function () {
      return {
        plus: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          a(function (n) {
            return n + e;
          });
        },
        minus: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          a(function (n) {
            return n - e;
          });
        },
      };
    }, []),
    l = e.useCallback(
      function () {
        a(n);
      },
      [n],
    );
  return [u, o({ set: a, reset: l }, i)];
};
function I(t, r, u) {
  var o = e.useRef(t);
  o.current = t;
  var a = e.useMemo(
    function () {
      return n.throttle(o.current, null != r ? r : 1e3, u);
    },
    [r, o, u],
  );
  return (
    m(function () {
      a.cancel();
    }),
    { run: a, cancel: a.cancel, flush: a.flush }
  );
}
var T = function (t) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    u = r.debounceInterval,
    o = void 0 === u ? null : u,
    a = r.manual,
    i = void 0 === a || a,
    s = r.onSuccess,
    f = void 0 === s ? function () {} : s,
    v = r.onError,
    d = void 0 === v ? function () {} : v,
    p = r.initialData,
    y = void 0 === p ? null : p,
    b = r.throttleInterval,
    g = void 0 === b ? null : b,
    S = r.loadingDelay,
    x = void 0 === S ? 300 : S,
    O = r.defaultParams,
    E = void 0 === O ? [] : O,
    A = C(),
    j = e.useState(y),
    P = c(j, 2),
    T = P[0],
    R = P[1],
    D = e.useState(),
    M = c(D, 2),
    L = M[0],
    U = M[1],
    H = e.useState('success'),
    q = c(H, 2),
    W = q[0],
    B = q[1],
    z = e.useState(E),
    F = c(z, 2),
    N = F[0],
    _ = F[1],
    Q = k(function () {
      B('loading');
    }, x),
    V = e.useCallback(
      function () {
        for (var e = arguments.length, n = Array(e), r = 0; e > r; r++)
          n[r] = arguments[r];
        return (
          Q.run(),
          U(void 0),
          _(n),
          t
            .apply(void 0, n)
            .then(function (e) {
              return A() && R(e), null == f || f(e, n), B('success'), e;
            })
            .catch(function (e) {
              return (
                A() && U(e), null == d || d(e, n), B('error'), Promise.reject(e)
              );
            })
            .finally(function () {
              Q.cancel();
            })
        );
      },
      [Q, A, d, f, t],
    ),
    Y = w(V, o),
    $ = I(V, g),
    G = e.useCallback(
      function () {
        for (var e = arguments.length, t = Array(e), r = 0; e > r; r++)
          t[r] = arguments[r];
        var u = t;
        return (
          Array.isArray(t) || (u = []),
          n.isNumber(o)
            ? (Y.run.apply(Y, l(u)), Promise.resolve(null))
            : n.isNumber(g)
            ? ($.run.apply($, l(u)), Promise.resolve(null))
            : V.apply(void 0, l(u))
        );
      },
      [o, g, V, Y, $],
    ),
    J = e.useCallback(
      function () {
        return Array.isArray(N) ? G.apply(void 0, l(N)) : G();
      },
      [G, N],
    ),
    K = e.useCallback(
      function () {
        null == Y || Y.cancel(), null == $ || $.cancel();
      },
      [Y, $],
    ),
    X = e.useMemo(
      function () {
        return (null == Y ? void 0 : Y.flush)
          ? Y.flush
          : (null == $ ? void 0 : $.flush)
          ? $.flush
          : function () {
              return Promise.resolve(null);
            };
      },
      [Y, $],
    );
  return (
    h(function () {
      !1 === i && J();
    }),
    m(function () {
      K();
    }),
    {
      data: T,
      params: N,
      error: L,
      reload: J,
      isLoading: 'loading' === W,
      isError: 'error' === W,
      isSuccess: 'success' === W,
      status: W,
      run: G,
      cancel: K,
      mutate: R,
      flush: X,
    }
  );
};
function R(e, n) {
  return e
    ? 'function' == typeof e
      ? e()
      : 'current' in e
      ? e.current
      : e
    : n;
}
function D(n, t, r) {
  e.useLayoutEffect(
    function () {
      var e = R(n);
      if (e) {
        var u = new IntersectionObserver(function (e) {
          var n,
            r = v(e);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              t(n.value);
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
        }, r);
        return (
          u.observe(e),
          function () {
            u.disconnect();
          }
        );
      }
    },
    [n],
  );
}
function M(n, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    u = e.useRef();
  (u.current = t),
    e.useEffect(
      function () {
        var e = R(r.target, window);
        if (null == e ? void 0 : e.addEventListener) {
          var t = function (e) {
            return u.current && u.current(e);
          };
          return (
            e.addEventListener(n, t, {
              capture: r.capture,
              once: r.once,
              passive: r.passive,
            }),
            function () {
              e.removeEventListener(n, t, { capture: r.capture });
            }
          );
        }
      },
      [n, r],
    );
}
function L(n, t) {
  e.useLayoutEffect(
    function () {
      var e = R(n);
      if (e) {
        var r = new ResizeObserver(function (e) {
          e.forEach(function (e) {
            t(e);
          });
        });
        return (
          r.observe(e),
          function () {
            r.disconnect();
          }
        );
      }
    },
    [n],
  );
}
(exports.isType = function (e, n) {
  return n === Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}),
  (exports.setDefaultArguments = function (e) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), u = 1;
      t > u;
      u++
    )
      r[u - 1] = arguments[u];
    return function () {
      for (var t = arguments.length, u = Array(t), a = 0; t > a; a++)
        u[a] = arguments[a];
      var i = r.map(function (e, t) {
        return Array.isArray(e)
          ? u[t]
          : n.isObject(e)
          ? o(o({}, e), u[t])
          : u[t];
      });
      return e.apply(void 0, l(i));
    };
  }),
  (exports.sortBy = function (e, n) {
    var t,
      r = e,
      u = {},
      o = v(n);
    try {
      var a = function () {
        var e = t.value,
          n = r[0][e],
          o = r.reduce(
            function (t, r) {
              if (r[e] === n) {
                var u = t.length - 1;
                t[u] = t[u] + 1;
              } else t.push(1), (n = r[e]);
              return t;
            },
            [0],
          );
        u[e] = (function (e) {
          return e.reduce(function (e, n) {
            var t = Array(n).fill(0);
            return (t[0] = n), e.push.apply(e, l(t)), e;
          }, []);
        })(o);
      };
      for (o.s(); !(t = o.n()).done; ) a();
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    return u;
  }),
  (exports.useArray = function (t) {
    var r = c(e.useState(t), 2),
      u = r[0],
      a = r[1],
      i = e.useMemo(
        function () {
          return !n.isEqual(t, u);
        },
        [t, u],
      ),
      s = e.useMemo(
        function () {
          return {
            set: function (e, n) {
              a(function (t) {
                var r = l(t);
                return (r[e] = y(n, r[e])), r;
              });
            },
            setAll: a,
            remove: function (e) {
              a(function (n) {
                var t = l(n);
                return t.splice(e, 1), t;
              });
            },
            push: function (e) {
              a(function (n) {
                var t = l(n);
                return t.push(e), t;
              });
            },
            clear: function () {
              a([]);
            },
            reset: function () {
              a(t);
            },
          };
        },
        [t],
      ),
      f = e.useCallback(
        function (e, n) {
          var t = u.length - 1;
          (e > t || n > t) && console.error('交换位置超出最大位置');
          var r = l(u),
            o = [r[n], r[e]];
          (r[e] = o[0]), (r[n] = o[1]), a(r);
        },
        [u],
      ),
      v = e.useCallback(
        function (e, n) {
          var t = u.length - 1;
          (e > t || n > t) && console.error('交换位置超出最大位置');
          var r = l(u),
            o = c(r.splice(e, 1), 1);
          r.splice(n, 0, o[0]), a(r);
        },
        [u],
      );
    return [u, o({ isEdited: i, swap: f, reorder: v }, s)];
  }),
  (exports.useAxios = E),
  (exports.useBoolean = p),
  (exports.useClick = function () {
    var n =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : function (e) {},
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : function (e) {},
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      u = P(0),
      a = c(u, 2),
      i = a[0],
      l = a[1],
      s = e.useMemo(
        function () {
          return o(o({}, { delay: 250, exclusive: !1 }), r);
        },
        [r],
      ),
      f = s.delay,
      v = s.exclusive,
      d = k(function () {
        l.reset();
      }, f),
      p = d.run,
      y = e.useCallback(
        function (e) {
          0 === i && (null == n || n(e), p()),
            1 === i && (v || null == n || n(e), null == t || t(e)),
            l.plus(1);
        },
        [n, p, v, t],
      );
    return y;
  }),
  (exports.useDebounceFn = w),
  (exports.useEventListener = M),
  (exports.useHash = function (n) {
    var t = e.useState(function () {
        var e = window.location.hash.substring(1);
        return '' === e ? (g(n), n) : e;
      }),
      r = c(t, 2),
      u = r[0],
      o = r[1];
    e.useEffect(
      function () {
        null == u
          ? history.pushState(
              '',
              document.title,
              window.location.pathname + window.location.search,
            )
          : g(u);
      },
      [u],
    );
    var a = e.useCallback(
      function () {
        o(n);
      },
      [n],
    );
    return [u, o, a];
  }),
  (exports.useIntersectionObserver = D),
  (exports.useIsScroll = function (n) {
    var t = c(e.useState({ x: !1, y: !1 }), 2),
      r = t[0],
      u = t[1];
    return (
      L(n, function (e) {
        var n = e.target;
        u({
          x: n.scrollWidth !== n.clientWidth,
          y: n.scrollHeight !== n.clientHeight,
        });
      }),
      r
    );
  }),
  (exports.useLockScroll = function (n) {
    var t = c(p(!1), 2),
      r = t[0],
      u = t[1];
    return (
      e.useEffect(
        function () {
          var e = (n = n || document.body).style,
            t = e.paddingRight,
            u = e.overflow,
            o = n.getBoundingClientRect();
          return (
            r &&
              ((n.style.width = ''.concat(o.width, 'px')),
              (n.style.overflowY = S)),
            function () {
              (n.style.overflow = u), (n.style.width = t);
            }
          );
        },
        [r, n],
      ),
      [u, r]
    );
  }),
  (exports.useMount = h),
  (exports.useMountedState = C),
  (exports.useMutation = function (n) {
    var t = n.manual,
      r = void 0 === t || t,
      u = n.data,
      a = i(n, j),
      l = c(e.useState(u), 2),
      s = l[0],
      f = l[1],
      v = o({ data: s, method: 'post' }, a),
      d = E(v),
      p = e.useCallback(
        function (e) {
          var n = y(e, s);
          return f(e), d.run({ data: n });
        },
        [s, d],
      ),
      m = e.useCallback(
        function () {
          return p(s);
        },
        [p, s],
      );
    return (
      h(function () {
        !1 === r && d.reload();
      }),
      o(o({}, d), {}, { run: p, reload: m, params: s, setParams: f })
    );
  }),
  (exports.useNumber = P),
  (exports.useObject = function (t) {
    var r = c(e.useState(t), 2),
      u = r[0],
      a = r[1],
      i = e.useCallback(
        function () {
          a(t);
        },
        [t],
      ),
      l = e.useMemo(
        function () {
          return !n.isEqual(u, t);
        },
        [u, t],
      ),
      s = e.useCallback(
        function (e) {
          a(function (n) {
            var t = y(e, n);
            return o(o({}, n), t);
          });
        },
        [a],
      );
    return [u, { setAll: a, set: s, reset: i, isEdited: l }];
  }),
  (exports.usePromise = T),
  (exports.useQuery = function (n) {
    var t = n.deps,
      r = void 0 === t ? [] : t,
      u = n.pollingInterval,
      a = void 0 === u ? 0 : u,
      s = n.manual,
      f = void 0 === s || s,
      v = n.concurrent,
      d = void 0 !== v && v,
      p = n.params,
      g = i(n, A),
      w = e.useRef(),
      S = c(e.useState(p), 2),
      x = S[0],
      O = S[1],
      C = E(g),
      k = e.useCallback(
        function () {
          C.cancel(), clearTimeout(w.current);
        },
        [C],
      ),
      j = e.useCallback(
        function (e) {
          w.current && clearTimeout(w.current), d || k();
          var n = y(e, x);
          O(n);
          var t = { params: n };
          return a
            ? C.run(t).finally(function () {
                w.current = setTimeout(function () {
                  w.current && j(n);
                }, a);
              })
            : C.run(t);
        },
        [d, x, a, C, k],
      ),
      P = e.useCallback(
        function () {
          return j(x);
        },
        [x, j],
      );
    return (
      b(function () {
        P();
      }, l(r)),
      h(function () {
        !1 === f && P();
      }),
      m(function () {
        clearTimeout(w.current);
      }),
      o(o({}, C), {}, { run: j, reload: P, cancel: k, params: x, setParams: O })
    );
  }),
  (exports.useResizeObserver = L),
  (exports.useScroll = function (n) {
    var t = c(e.useState({ left: 0, top: 0 }), 2),
      r = t[0],
      u = t[1];
    return (
      M(
        'scroll',
        function (e) {
          var n = e.target;
          u({ left: n.scrollLeft, top: n.scrollTop });
        },
        { target: n },
      ),
      { position: r }
    );
  }),
  (exports.useSize = function (n) {
    var t = c(e.useState({ width: 0, height: 0 }), 2),
      r = t[0],
      u = t[1];
    return (
      L(n, function (e) {
        u({ width: e.target.offsetWidth, height: e.target.offsetHeight });
      }),
      r
    );
  }),
  (exports.useThrottleFn = I),
  (exports.useTimeoutFn = k),
  (exports.useToggle = d),
  (exports.useUnmount = m),
  (exports.useUpdate = function () {
    var n = c(e.useState({}), 2)[1];
    return e.useCallback(function () {
      n({});
    }, []);
  }),
  (exports.useUpdateEffect = b),
  (exports.useUrlState = function (n, t) {
    var r = c(
        e.useState(function () {
          var e = null !== n ? n : location.search;
          return new URLSearchParams(e);
        }),
        2,
      ),
      u = r[0],
      o = r[1],
      a = e.useMemo(
        function () {
          return {
            set: function (e, n) {
              o(function (t) {
                var r = new URLSearchParams(t),
                  u = t.get(e),
                  o = y(n, u);
                return void 0 === o ? r.delete(e) : r.set(e, o), r;
              });
            },
            clear: function () {
              o(new URLSearchParams());
            },
          };
        },
        [u, o],
      );
    return (
      b(
        function () {
          var e = ''.concat(t, 'State'),
            n = '' + u;
          n
            ? history[e](null, '', '?' + n)
            : history[e]({}, document.title, window.location.pathname);
        },
        [u],
      ),
      [u, a]
    );
  }),
  (exports.useVisible = function (n) {
    var t = c(
        e.useState(function () {
          return (function (e) {
            if (e) {
              var n =
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth,
                t =
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  document.body.clientHeight,
                r = e.getBoundingClientRect();
              return (
                !!r && r.bottom > 0 && t >= r.top && n >= r.left && r.right > 0
              );
            }
          })(R(n));
        }),
        2,
      ),
      r = t[0],
      u = t[1];
    return (
      D(n, function (e) {
        u(e.isIntersecting);
      }),
      r
    );
  });
