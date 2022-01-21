'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react'),
  t = require('lodash.debounce'),
  n = require('lodash.throttle');
function r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function u(e) {
  for (var t = 1; arguments.length > t; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? r(Object(n), !0).forEach(function (t) {
          o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : r(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function o(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function i(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (null == n) return;
      var r,
        u,
        o = [],
        i = !0,
        c = !1;
      try {
        for (
          n = n.call(e);
          !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t);
          i = !0
        );
      } catch (e) {
        (c = !0), (u = e);
      } finally {
        try {
          i || null == n.return || n.return();
        } finally {
          if (c) throw u;
        }
      }
      return o;
    })(e, t) ||
    a(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function c(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return l(e);
    })(e) ||
    (function (e) {
      if (
        ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    })(e) ||
    a(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function a(e, t) {
  if (e) {
    if ('string' == typeof e) return l(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? l(e, t)
        : void 0
    );
  }
}
function l(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); t > n; n++) r[n] = e[n];
  return r;
}
function s(e, t) {
  var n =
    ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
  if (!n) {
    if (
      Array.isArray(e) ||
      (n = a(e)) ||
      (t && e && 'number' == typeof e.length)
    ) {
      n && (e = n);
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
    i = !0,
    c = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return (i = e.done), e;
    },
    e: function (e) {
      (c = !0), (o = e);
    },
    f: function () {
      try {
        i || null == n.return || n.return();
      } finally {
        if (c) throw o;
      }
    },
  };
}
function f(t, n) {
  var r = i(e.useState(t), 2),
    u = r[1];
  return [
    r[0],
    e.useCallback(function (e) {
      u(
        void 0 !== e
          ? e
          : function (e) {
              return e === t ? n : t;
            },
      );
    }, []),
  ];
}
function v() {
  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = f(e, !e);
  return t;
}
var d = function (e, t) {
  return 'function' != typeof e ? e : e(t);
};
function p(e) {
  return '[object Object]' === Object.prototype.toString.call(e);
}
function h(e, t) {
  if (!p(e) || !p(t)) return e === t;
  if (e === t) return !0;
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n))
      if (!h(e[n], t[n])) return !1;
  }
  return !0;
}
var y = function (t) {
    e.useEffect(function () {
      t();
    }, []);
  },
  b = function (t) {
    e.useEffect(function () {
      return t;
    }, []);
  },
  m = function (t, n) {
    var r = i(e.useState(!1), 2),
      u = r[0],
      o = r[1];
    e.useEffect(function () {
      u ? t() : o(!0);
    }, n);
  };
var g = function (e) {
  window.location.replace('#' + encodeURIComponent(e));
};
function w(n, r, u) {
  var o = e.useRef(n);
  o.current = n;
  var i = e.useMemo(
    function () {
      return t.debounce(o.current, null != r ? r : 1e3, u);
    },
    [r, o, u],
  );
  return (
    b(function () {
      i.cancel();
    }),
    { run: i, cancel: i.cancel, flush: i.flush }
  );
}
var S = 'hidden';
function x() {
  var t = e.useRef(!1);
  return (
    e.useEffect(function () {
      return (
        (t.current = !0),
        function () {
          t.current = !1;
        }
      );
    }, []),
    e.useCallback(function () {
      return t.current;
    }, [])
  );
}
function O(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    r = e.useRef(null),
    u = v(!1),
    o = i(u, 2),
    c = o[0],
    a = o[1],
    l = e.useCallback(
      function () {
        for (var e = arguments.length, u = Array(e), o = 0; e > o; o++)
          u[o] = arguments[o];
        clearTimeout(r.current),
          null != n &&
            (a(!0),
            (r.current = setTimeout(function () {
              t.apply(void 0, u), a(!1);
            }, n)));
      },
      [t, n],
    );
  e.useEffect(function () {
    return function () {
      clearTimeout(r.current);
    };
  }, []);
  var s = e.useCallback(function () {
    clearTimeout(r.current), a(!1);
  }, []);
  return { waiting: c, run: l, cancel: s };
}
var j = function () {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    n = e.useState(t),
    r = i(n, 2),
    o = r[0],
    c = r[1],
    a = e.useMemo(function () {
      return {
        plus: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          c(function (t) {
            return t + e;
          });
        },
        minus: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          c(function (t) {
            return t - e;
          });
        },
      };
    }, []),
    l = e.useCallback(
      function () {
        c(t);
      },
      [t],
    );
  return [o, u({ set: c, reset: l }, a)];
};
function A(t, r, u) {
  var o = e.useRef(t);
  o.current = t;
  var i = e.useMemo(
    function () {
      return n.throttle(o.current, null != r ? r : 1e3, u);
    },
    [r, o, u],
  );
  return (
    b(function () {
      i.cancel();
    }),
    { run: i, cancel: i.cancel, flush: i.flush }
  );
}
function E(e) {
  return 'number' == typeof e;
}
function C(e) {
  return '[object Object]' === Object.prototype.toString.call(e);
}
function k(e, t) {
  return e
    ? 'function' == typeof e
      ? e()
      : 'current' in e
      ? e.current
      : e
    : t;
}
function P(t, n, r) {
  e.useLayoutEffect(
    function () {
      var e = k(t);
      if (e) {
        var u = new IntersectionObserver(function (e) {
          var t,
            r = s(e);
          try {
            for (r.s(); !(t = r.n()).done; ) {
              n(t.value);
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
    [t],
  );
}
function I(t, n) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    u = e.useRef();
  (u.current = n),
    e.useEffect(
      function () {
        var e = k(r.target, window);
        if (null == e ? void 0 : e.addEventListener) {
          var n = function (e) {
            return u.current && u.current(e);
          };
          return (
            e.addEventListener(t, n, {
              capture: r.capture,
              once: r.once,
              passive: r.passive,
            }),
            function () {
              e.removeEventListener(t, n, { capture: r.capture });
            }
          );
        }
      },
      [t, r],
    );
}
function R(t, n) {
  e.useLayoutEffect(
    function () {
      var e = k(t);
      if (e) {
        var r = new ResizeObserver(function (e) {
          e.forEach(function (e) {
            n(e);
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
    [t],
  );
}
(exports.isType = function (e, t) {
  return t === Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}),
  (exports.setDefaultArguments = function (e) {
    for (
      var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
      t > r;
      r++
    )
      n[r - 1] = arguments[r];
    return function () {
      for (var t = arguments.length, r = Array(t), o = 0; t > o; o++)
        r[o] = arguments[o];
      var i = n.map(function (e, t) {
        return Array.isArray(e) ? r[t] : C(e) ? u(u({}, e), r[t]) : r[t];
      });
      return e.apply(void 0, c(i));
    };
  }),
  (exports.sortBy = function (e, t) {
    var n,
      r = e,
      u = {},
      o = s(t);
    try {
      var i = function () {
        var e = n.value,
          t = r[0][e],
          o = r.reduce(
            function (n, r) {
              if (r[e] === t) {
                var u = n.length - 1;
                n[u] = n[u] + 1;
              } else n.push(1), (t = r[e]);
              return n;
            },
            [0],
          );
        u[e] = (function (e) {
          return e.reduce(function (e, t) {
            var n = Array(t).fill(0);
            return (n[0] = t), e.push.apply(e, c(n)), e;
          }, []);
        })(o);
      };
      for (o.s(); !(n = o.n()).done; ) i();
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    return u;
  }),
  (exports.useArray = function (t) {
    var n = i(e.useState(t), 2),
      r = n[0],
      o = n[1],
      a = e.useMemo(
        function () {
          return !h(t, r);
        },
        [t, r],
      ),
      l = e.useMemo(
        function () {
          return {
            set: function (e, t) {
              o(function (n) {
                var r = c(n);
                return (r[e] = d(t, r[e])), r;
              });
            },
            setAll: o,
            remove: function (e) {
              o(function (t) {
                var n = c(t);
                return n.splice(e, 1), n;
              });
            },
            push: function (e) {
              o(function (t) {
                var n = c(t);
                return n.push(e), n;
              });
            },
            clear: function () {
              o([]);
            },
            reset: function () {
              o(t);
            },
          };
        },
        [t],
      ),
      s = e.useCallback(
        function (e, t) {
          var n = r.length - 1;
          (e > n || t > n) && console.error('交换位置超出最大位置');
          var u = c(r),
            i = [u[t], u[e]];
          (u[e] = i[0]), (u[t] = i[1]), o(u);
        },
        [r],
      ),
      f = e.useCallback(
        function (e, t) {
          var n = r.length - 1;
          (e > n || t > n) && console.error('交换位置超出最大位置');
          var u = c(r),
            a = i(u.splice(e, 1), 1);
          u.splice(t, 0, a[0]), o(u);
        },
        [r],
      );
    return [r, u({ isEdited: a, swap: s, reorder: f }, l)];
  }),
  (exports.useBoolean = v),
  (exports.useClick = function () {
    var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : function (e) {},
      n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : function (e) {},
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      o = j(0),
      c = i(o, 2),
      a = c[0],
      l = c[1],
      s = e.useMemo(
        function () {
          return u(u({}, { delay: 250, exclusive: !1 }), r);
        },
        [r],
      ),
      f = s.delay,
      v = s.exclusive,
      d = O(function () {
        l.reset();
      }, f),
      p = d.run,
      h = e.useCallback(
        function (e) {
          0 === a && (null == t || t(e), p()),
            1 === a && (v || null == t || t(e), null == n || n(e)),
            l.plus(1);
        },
        [t, p, v, n],
      );
    return h;
  }),
  (exports.useDebounceFn = w),
  (exports.useEventListener = I),
  (exports.useHash = function (t) {
    var n = e.useState(function () {
        var e = window.location.hash.substring(1);
        return '' === e ? (g(t), t) : e;
      }),
      r = i(n, 2),
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
    var c = e.useCallback(
      function () {
        o(t);
      },
      [t],
    );
    return [u, o, c];
  }),
  (exports.useIntersectionObserver = P),
  (exports.useIsScroll = function (t) {
    var n = i(e.useState({ x: !1, y: !1 }), 2),
      r = n[0],
      u = n[1];
    return (
      R(t, function (e) {
        var t = e.target;
        u({
          x: t.scrollWidth !== t.clientWidth,
          y: t.scrollHeight !== t.clientHeight,
        });
      }),
      r
    );
  }),
  (exports.useLockScroll = function (t) {
    var n = i(v(!1), 2),
      r = n[0],
      u = n[1];
    return (
      e.useEffect(
        function () {
          var e = (t = t || document.body).style,
            n = e.paddingRight,
            u = e.overflow,
            o = t.getBoundingClientRect();
          return (
            r &&
              ((t.style.width = ''.concat(o.width, 'px')),
              (t.style.overflowY = S)),
            function () {
              (t.style.overflow = u), (t.style.width = n);
            }
          );
        },
        [r, t],
      ),
      [u, r]
    );
  }),
  (exports.useMount = y),
  (exports.useMountedState = x),
  (exports.useNumber = j),
  (exports.useObject = function (t) {
    var n = i(e.useState(t), 2),
      r = n[0],
      o = n[1],
      c = e.useCallback(
        function () {
          o(t);
        },
        [t],
      ),
      a = e.useMemo(
        function () {
          return !h(r, t);
        },
        [r, t],
      ),
      l = e.useCallback(
        function (e) {
          o(function (t) {
            var n = d(e, t);
            return u(u({}, t), n);
          });
        },
        [o],
      );
    return [r, { setAll: o, set: l, reset: c, isEdited: a }];
  }),
  (exports.usePromise = function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = n.debounceInterval,
      u = void 0 === r ? null : r,
      o = n.manual,
      a = void 0 === o || o,
      l = n.onSuccess,
      s = void 0 === l ? function () {} : l,
      f = n.onError,
      v = void 0 === f ? function () {} : f,
      d = n.initialData,
      p = void 0 === d ? null : d,
      h = n.throttleInterval,
      m = void 0 === h ? null : h,
      g = n.loadingDelay,
      S = void 0 === g ? 300 : g,
      j = n.defaultParams,
      C = void 0 === j ? [] : j,
      k = x(),
      P = e.useState(p),
      I = i(P, 2),
      R = I[0],
      L = I[1],
      M = e.useState(),
      T = i(M, 2),
      U = T[0],
      D = T[1],
      H = e.useState('success'),
      W = i(H, 2),
      B = W[0],
      q = W[1],
      z = e.useState(C),
      F = i(z, 2),
      _ = F[0],
      N = F[1],
      V = O(function () {
        q('loading');
      }, S),
      Y = e.useCallback(
        function () {
          for (var e = arguments.length, n = Array(e), r = 0; e > r; r++)
            n[r] = arguments[r];
          return (
            V.run(),
            D(void 0),
            N(n),
            t
              .apply(void 0, n)
              .then(function (e) {
                return k() && L(e), null == s || s(e, n), q('success'), e;
              })
              .catch(function (e) {
                return (
                  k() && D(e),
                  null == v || v(e, n),
                  q('error'),
                  Promise.reject(e)
                );
              })
              .finally(function () {
                V.cancel();
              })
          );
        },
        [V, k, v, s, t],
      ),
      $ = w(Y, u),
      G = A(Y, m),
      J = e.useCallback(
        function () {
          for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
          var r = t;
          return (
            Array.isArray(t) || (r = []),
            E(u)
              ? ($.run.apply($, c(r)), Promise.resolve(null))
              : E(m)
              ? (G.run.apply(G, c(r)), Promise.resolve(null))
              : Y.apply(void 0, c(r))
          );
        },
        [u, m, Y, $, G],
      ),
      K = e.useCallback(
        function () {
          return Array.isArray(_) ? J.apply(void 0, c(_)) : J();
        },
        [J, _],
      ),
      Q = e.useCallback(
        function () {
          null == $ || $.cancel(), null == G || G.cancel();
        },
        [$, G],
      ),
      X = e.useMemo(
        function () {
          return (null == $ ? void 0 : $.flush)
            ? $.flush
            : (null == G ? void 0 : G.flush)
            ? G.flush
            : function () {
                return Promise.resolve(null);
              };
        },
        [$, G],
      );
    return (
      y(function () {
        !1 === a && K();
      }),
      b(function () {
        Q();
      }),
      {
        data: R,
        params: _,
        error: U,
        reload: K,
        isLoading: 'loading' === B,
        isError: 'error' === B,
        isSuccess: 'success' === B,
        status: B,
        run: J,
        cancel: Q,
        mutate: L,
        flush: X,
      }
    );
  }),
  (exports.useResizeObserver = R),
  (exports.useScroll = function (t) {
    var n = i(e.useState({ left: 0, top: 0 }), 2),
      r = n[0],
      u = n[1];
    return (
      I(
        'scroll',
        function (e) {
          var t = e.target;
          u({ left: t.scrollLeft, top: t.scrollTop });
        },
        { target: t },
      ),
      { position: r }
    );
  }),
  (exports.useSize = function (t) {
    var n = i(e.useState({ width: 0, height: 0 }), 2),
      r = n[0],
      u = n[1];
    return (
      R(t, function (e) {
        u({ width: e.target.offsetWidth, height: e.target.offsetHeight });
      }),
      r
    );
  }),
  (exports.useThrottleFn = A),
  (exports.useTimeoutFn = O),
  (exports.useToggle = f),
  (exports.useUnmount = b),
  (exports.useUpdate = function () {
    var t = i(e.useState({}), 2)[1];
    return e.useCallback(function () {
      t({});
    }, []);
  }),
  (exports.useUpdateEffect = m),
  (exports.useUrlState = function (t, n) {
    var r = i(
        e.useState(function () {
          var e = null !== t ? t : location.search;
          return new URLSearchParams(e);
        }),
        2,
      ),
      u = r[0],
      o = r[1],
      c = e.useMemo(
        function () {
          return {
            set: function (e, t) {
              o(function (n) {
                var r = new URLSearchParams(n),
                  u = n.get(e),
                  o = d(t, u);
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
      m(
        function () {
          var e = ''.concat(n, 'State'),
            t = '' + u;
          t
            ? history[e](null, '', '?' + t)
            : history[e]({}, document.title, window.location.pathname);
        },
        [u],
      ),
      [u, c]
    );
  }),
  (exports.useVisible = function (t) {
    var n = i(
        e.useState(function () {
          return (function (e) {
            if (e) {
              var t =
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth,
                n =
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  document.body.clientHeight,
                r = e.getBoundingClientRect();
              return (
                !!r && r.bottom > 0 && n >= r.top && t >= r.left && r.right > 0
              );
            }
          })(k(t));
        }),
        2,
      ),
      r = n[0],
      u = n[1];
    return (
      P(t, function (e) {
        u(e.isIntersecting);
      }),
      r
    );
  });
