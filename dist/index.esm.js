import {
  useState as n,
  useCallback as t,
  useMemo as r,
  useEffect as e,
  useRef as o,
  useLayoutEffect as u,
} from 'react';
import { debounce as i } from 'lodash.debounce';
import { throttle as c } from 'lodash.throttle';
function a(n, t) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(n);
    t &&
      (e = e.filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      })),
      r.push.apply(r, e);
  }
  return r;
}
function l(n) {
  for (var t = 1; arguments.length > t; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? a(Object(r), !0).forEach(function (t) {
          f(n, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
      : a(Object(r)).forEach(function (t) {
          Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return n;
}
function f(n, t, r) {
  return (
    t in n
      ? Object.defineProperty(n, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[t] = r),
    n
  );
}
function s(n, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(n) ||
    (function (n, t) {
      var r =
        null == n
          ? null
          : ('undefined' != typeof Symbol && n[Symbol.iterator]) ||
            n['@@iterator'];
      if (null == r) return;
      var e,
        o,
        u = [],
        i = !0,
        c = !1;
      try {
        for (
          r = r.call(n);
          !(i = (e = r.next()).done) && (u.push(e.value), !t || u.length !== t);
          i = !0
        );
      } catch (n) {
        (c = !0), (o = n);
      } finally {
        try {
          i || null == r.return || r.return();
        } finally {
          if (c) throw o;
        }
      }
      return u;
    })(n, t) ||
    d(n, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function v(n) {
  return (
    (function (n) {
      if (Array.isArray(n)) return h(n);
    })(n) ||
    (function (n) {
      if (
        ('undefined' != typeof Symbol && null != n[Symbol.iterator]) ||
        null != n['@@iterator']
      )
        return Array.from(n);
    })(n) ||
    d(n) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function d(n, t) {
  if (n) {
    if ('string' == typeof n) return h(n, t);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    return (
      'Object' === r && n.constructor && (r = n.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(n)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? h(n, t)
        : void 0
    );
  }
}
function h(n, t) {
  (null == t || t > n.length) && (t = n.length);
  for (var r = 0, e = Array(t); t > r; r++) e[r] = n[r];
  return e;
}
function y(n, t) {
  var r =
    ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
  if (!r) {
    if (
      Array.isArray(n) ||
      (r = d(n)) ||
      (t && n && 'number' == typeof n.length)
    ) {
      r && (n = r);
      var e = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return n.length > e ? { done: !1, value: n[e++] } : { done: !0 };
        },
        e: function (n) {
          throw n;
        },
        f: o,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var u,
    i = !0,
    c = !1;
  return {
    s: function () {
      r = r.call(n);
    },
    n: function () {
      var n = r.next();
      return (i = n.done), n;
    },
    e: function (n) {
      (c = !0), (u = n);
    },
    f: function () {
      try {
        i || null == r.return || r.return();
      } finally {
        if (c) throw u;
      }
    },
  };
}
function p(r, e) {
  var o = s(n(r), 2),
    u = o[1];
  return [
    o[0],
    t(function (n) {
      u(
        void 0 !== n
          ? n
          : function (n) {
              return n === r ? e : r;
            },
      );
    }, []),
  ];
}
function m() {
  var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = p(n, !n);
  return t;
}
var g = function (n, t) {
  return 'function' != typeof n ? n : n(t);
};
function b(n) {
  return '[object Object]' === Object.prototype.toString.call(n);
}
function w(n, t) {
  if (!b(n) || !b(t)) return n === t;
  if (n === t) return !0;
  if (Object.keys(n).length !== Object.keys(t).length) return !1;
  for (var r in n) {
    if (Object.prototype.hasOwnProperty.call(n, r))
      if (!w(n[r], t[r])) return !1;
  }
  return !0;
}
var O = function (e) {
    var o = s(n(e), 2),
      u = o[0],
      i = o[1],
      c = r(
        function () {
          return !w(e, u);
        },
        [e, u],
      ),
      a = r(
        function () {
          return {
            set: function (n, t) {
              i(function (r) {
                var e = v(r);
                return (e[n] = g(t, e[n])), e;
              });
            },
            setAll: i,
            remove: function (n) {
              i(function (t) {
                var r = v(t);
                return r.splice(n, 1), r;
              });
            },
            push: function (n) {
              i(function (t) {
                var r = v(t);
                return r.push(n), r;
              });
            },
            clear: function () {
              i([]);
            },
            reset: function () {
              i(e);
            },
          };
        },
        [e],
      ),
      f = t(
        function (n, t) {
          var r = u.length - 1;
          (n > r || t > r) && console.error('交换位置超出最大位置');
          var e = v(u),
            o = [e[t], e[n]];
          (e[n] = o[0]), (e[t] = o[1]), i(e);
        },
        [u],
      ),
      d = t(
        function (n, t) {
          var r = u.length - 1;
          (n > r || t > r) && console.error('交换位置超出最大位置');
          var e = v(u),
            o = s(e.splice(n, 1), 1);
          e.splice(t, 0, o[0]), i(e);
        },
        [u],
      );
    return [u, l({ isEdited: c, swap: f, reorder: d }, a)];
  },
  j = function (n) {
    e(function () {
      n();
    }, []);
  },
  A = function (n) {
    e(function () {
      return n;
    }, []);
  },
  S = function (t, r) {
    var o = s(n(!1), 2),
      u = o[0],
      i = o[1];
    e(function () {
      u ? t() : i(!0);
    }, r);
  };
function P(e) {
  var o = s(n(e), 2),
    u = o[0],
    i = o[1],
    c = t(
      function () {
        i(e);
      },
      [e],
    ),
    a = r(
      function () {
        return !w(u, e);
      },
      [u, e],
    ),
    f = t(
      function (n) {
        i(function (t) {
          var r = g(n, t);
          return l(l({}, t), r);
        });
      },
      [i],
    );
  return [u, { setAll: i, set: f, reset: c, isEdited: a }];
}
var E = function (n) {
    window.location.replace('#' + encodeURIComponent(n));
  },
  I = function (r) {
    var o = n(function () {
        var n = window.location.hash.substring(1);
        return '' === n ? (E(r), r) : n;
      }),
      u = s(o, 2),
      i = u[0],
      c = u[1];
    e(
      function () {
        null == i
          ? history.pushState(
              '',
              document.title,
              window.location.pathname + window.location.search,
            )
          : E(i);
      },
      [i],
    );
    var a = t(
      function () {
        c(r);
      },
      [r],
    );
    return [i, c, a];
  },
  L = function (t, e) {
    var o = s(
        n(function () {
          var n = null !== t ? t : location.search;
          return new URLSearchParams(n);
        }),
        2,
      ),
      u = o[0],
      i = o[1],
      c = r(
        function () {
          return {
            set: function (n, t) {
              i(function (r) {
                var e = new URLSearchParams(r),
                  o = r.get(n),
                  u = g(t, o);
                return void 0 === u ? e.delete(n) : e.set(n, u), e;
              });
            },
            clear: function () {
              i(new URLSearchParams());
            },
          };
        },
        [u, i],
      );
    return (
      S(
        function () {
          var n = ''.concat(e, 'State'),
            t = '' + u;
          t
            ? history[n](null, '', '?' + t)
            : history[n]({}, document.title, window.location.pathname);
        },
        [u],
      ),
      [u, c]
    );
  };
function x(n, t, e) {
  var u = o(n);
  u.current = n;
  var c = r(
    function () {
      return i(u.current, null != t ? t : 1e3, e);
    },
    [t, u, e],
  );
  return (
    A(function () {
      c.cancel();
    }),
    { run: c, cancel: c.cancel, flush: c.flush }
  );
}
var R = 'hidden';
function T(n) {
  var t = s(m(!1), 2),
    r = t[0],
    o = t[1];
  return (
    e(
      function () {
        var t = (n = n || document.body).style,
          e = t.paddingRight,
          o = t.overflow,
          u = n.getBoundingClientRect();
        return (
          r &&
            ((n.style.width = ''.concat(u.width, 'px')),
            (n.style.overflowY = R)),
          function () {
            (n.style.overflow = o), (n.style.width = e);
          }
        );
      },
      [r, n],
    ),
    [o, r]
  );
}
function H() {
  var n = o(!1);
  return (
    e(function () {
      return (
        (n.current = !0),
        function () {
          n.current = !1;
        }
      );
    }, []),
    t(function () {
      return n.current;
    }, [])
  );
}
function D(n) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    u = o(null),
    i = m(!1),
    c = s(i, 2),
    a = c[0],
    l = c[1],
    f = t(
      function () {
        for (var t = arguments.length, e = Array(t), o = 0; t > o; o++)
          e[o] = arguments[o];
        clearTimeout(u.current),
          null != r &&
            (l(!0),
            (u.current = setTimeout(function () {
              n.apply(void 0, e), l(!1);
            }, r)));
      },
      [n, r],
    );
  e(function () {
    return function () {
      clearTimeout(u.current);
    };
  }, []);
  var v = t(function () {
    clearTimeout(u.current), l(!1);
  }, []);
  return { waiting: a, run: f, cancel: v };
}
function U(t) {
  var r = s(n({ width: 0, height: 0 }), 2),
    e = r[0],
    o = r[1];
  return (
    N(t, function (n) {
      o({ width: n.target.offsetWidth, height: n.target.offsetHeight });
    }),
    e
  );
}
var W = function () {
    var r = s(n({}), 2)[1];
    return t(function () {
      r({});
    }, []);
  },
  C = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      o = n(e),
      u = s(o, 2),
      i = u[0],
      c = u[1],
      a = r(function () {
        return {
          plus: function () {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            c(function (t) {
              return t + n;
            });
          },
          minus: function () {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            c(function (t) {
              return t - n;
            });
          },
        };
      }, []),
      f = t(
        function () {
          c(e);
        },
        [e],
      );
    return [i, l({ set: c, reset: f }, a)];
  },
  k = function () {
    var n =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : function (n) {},
      e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : function (n) {},
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      u = C(0),
      i = s(u, 2),
      c = i[0],
      a = i[1],
      f = r(
        function () {
          return l(l({}, { delay: 250, exclusive: !1 }), o);
        },
        [o],
      ),
      v = f.delay,
      d = f.exclusive,
      h = D(function () {
        a.reset();
      }, v),
      y = h.run,
      p = t(
        function (t) {
          0 === c && (null == n || n(t), y()),
            1 === c && (d || null == n || n(t), null == e || e(t)),
            a.plus(1);
        },
        [n, y, d, e],
      );
    return p;
  };
function B(n, t, e) {
  var u = o(n);
  u.current = n;
  var i = r(
    function () {
      return c(u.current, null != t ? t : 1e3, e);
    },
    [t, u, e],
  );
  return (
    A(function () {
      i.cancel();
    }),
    { run: i, cancel: i.cancel, flush: i.flush }
  );
}
function z(n) {
  return 'number' == typeof n;
}
function M(n) {
  return '[object Object]' === Object.prototype.toString.call(n);
}
var Y = function (e) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    u = o.debounceInterval,
    i = void 0 === u ? null : u,
    c = o.manual,
    a = void 0 === c || c,
    l = o.onSuccess,
    f = void 0 === l ? function () {} : l,
    d = o.onError,
    h = void 0 === d ? function () {} : d,
    y = o.initialData,
    p = void 0 === y ? null : y,
    m = o.throttleInterval,
    g = void 0 === m ? null : m,
    b = o.loadingDelay,
    w = void 0 === b ? 300 : b,
    O = o.defaultParams,
    S = void 0 === O ? [] : O,
    P = H(),
    E = n(p),
    I = s(E, 2),
    L = I[0],
    R = I[1],
    T = n(),
    U = s(T, 2),
    W = U[0],
    C = U[1],
    k = n('success'),
    M = s(k, 2),
    Y = M[0],
    $ = M[1],
    q = n(S),
    F = s(q, 2),
    G = F[0],
    J = F[1],
    K = D(function () {
      $('loading');
    }, w),
    N = t(
      function () {
        for (var n = arguments.length, t = Array(n), r = 0; n > r; r++)
          t[r] = arguments[r];
        return (
          K.run(),
          C(void 0),
          J(t),
          e
            .apply(void 0, t)
            .then(function (n) {
              return P() && R(n), null == f || f(n, t), $('success'), n;
            })
            .catch(function (n) {
              return (
                P() && C(n), null == h || h(n, t), $('error'), Promise.reject(n)
              );
            })
            .finally(function () {
              K.cancel();
            })
        );
      },
      [K, P, h, f, e],
    ),
    Q = x(N, i),
    V = B(N, g),
    X = t(
      function () {
        for (var n = arguments.length, t = Array(n), r = 0; n > r; r++)
          t[r] = arguments[r];
        var e = t;
        return (
          Array.isArray(t) || (e = []),
          z(i)
            ? (Q.run.apply(Q, v(e)), Promise.resolve(null))
            : z(g)
            ? (V.run.apply(V, v(e)), Promise.resolve(null))
            : N.apply(void 0, v(e))
        );
      },
      [i, g, N, Q, V],
    ),
    Z = t(
      function () {
        return Array.isArray(G) ? X.apply(void 0, v(G)) : X();
      },
      [X, G],
    ),
    _ = t(
      function () {
        null == Q || Q.cancel(), null == V || V.cancel();
      },
      [Q, V],
    ),
    nn = r(
      function () {
        return (null == Q ? void 0 : Q.flush)
          ? Q.flush
          : (null == V ? void 0 : V.flush)
          ? V.flush
          : function () {
              return Promise.resolve(null);
            };
      },
      [Q, V],
    );
  return (
    j(function () {
      !1 === a && Z();
    }),
    A(function () {
      _();
    }),
    {
      data: L,
      params: G,
      error: W,
      reload: Z,
      isLoading: 'loading' === Y,
      isError: 'error' === Y,
      isSuccess: 'success' === Y,
      status: Y,
      run: X,
      cancel: _,
      mutate: R,
      flush: nn,
    }
  );
};
function $(n) {
  for (
    var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1;
    t > e;
    e++
  )
    r[e - 1] = arguments[e];
  return function () {
    for (var t = arguments.length, e = Array(t), o = 0; t > o; o++)
      e[o] = arguments[o];
    var u = r.map(function (n, t) {
      return Array.isArray(n) ? e[t] : M(n) ? l(l({}, n), e[t]) : e[t];
    });
    return n.apply(void 0, v(u));
  };
}
function q(n, t) {
  return n
    ? 'function' == typeof n
      ? n()
      : 'current' in n
      ? n.current
      : n
    : t;
}
function F(n, t, r) {
  u(
    function () {
      var e = q(n);
      if (e) {
        var o = new IntersectionObserver(function (n) {
          var r,
            e = y(n);
          try {
            for (e.s(); !(r = e.n()).done; ) {
              t(r.value);
            }
          } catch (n) {
            e.e(n);
          } finally {
            e.f();
          }
        }, r);
        return (
          o.observe(e),
          function () {
            o.disconnect();
          }
        );
      }
    },
    [n],
  );
}
function G(t) {
  var r = s(
      n(function () {
        return (function (n) {
          if (n) {
            var t =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
              r =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
              e = n.getBoundingClientRect();
            return (
              !!e && e.bottom > 0 && r >= e.top && t >= e.left && e.right > 0
            );
          }
        })(q(t));
      }),
      2,
    ),
    e = r[0],
    o = r[1];
  return (
    F(t, function (n) {
      o(n.isIntersecting);
    }),
    e
  );
}
function J(n, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    u = o();
  (u.current = t),
    e(
      function () {
        var t = q(r.target, window);
        if (null == t ? void 0 : t.addEventListener) {
          var e = function (n) {
            return u.current && u.current(n);
          };
          return (
            t.addEventListener(n, e, {
              capture: r.capture,
              once: r.once,
              passive: r.passive,
            }),
            function () {
              t.removeEventListener(n, e, { capture: r.capture });
            }
          );
        }
      },
      [n, r],
    );
}
function K(t) {
  var r = s(n({ left: 0, top: 0 }), 2),
    e = r[0],
    o = r[1];
  return (
    J(
      'scroll',
      function (n) {
        var t = n.target;
        o({ left: t.scrollLeft, top: t.scrollTop });
      },
      { target: t },
    ),
    { position: e }
  );
}
function N(n, t) {
  u(
    function () {
      var r = q(n);
      if (r) {
        var e = new ResizeObserver(function (n) {
          n.forEach(function (n) {
            t(n);
          });
        });
        return (
          e.observe(r),
          function () {
            e.disconnect();
          }
        );
      }
    },
    [n],
  );
}
function Q(n, t) {
  var r,
    e = n,
    o = {},
    u = y(t);
  try {
    var i = function () {
      var n = r.value,
        t = e[0][n],
        u = e.reduce(
          function (r, e) {
            if (e[n] === t) {
              var o = r.length - 1;
              r[o] = r[o] + 1;
            } else r.push(1), (t = e[n]);
            return r;
          },
          [0],
        );
      o[n] = (function (n) {
        return n.reduce(function (n, t) {
          var r = Array(t).fill(0);
          return (r[0] = t), n.push.apply(n, v(r)), n;
        }, []);
      })(u);
    };
    for (u.s(); !(r = u.n()).done; ) i();
  } catch (n) {
    u.e(n);
  } finally {
    u.f();
  }
  return o;
}
function V(n, t) {
  return t === Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
}
var X = function (t) {
  var r = s(n({ x: !1, y: !1 }), 2),
    e = r[0],
    o = r[1];
  return (
    N(t, function (n) {
      var t = n.target;
      o({
        x: t.scrollWidth !== t.clientWidth,
        y: t.scrollHeight !== t.clientHeight,
      });
    }),
    e
  );
};
export {
  V as isType,
  $ as setDefaultArguments,
  Q as sortBy,
  O as useArray,
  m as useBoolean,
  k as useClick,
  x as useDebounceFn,
  J as useEventListener,
  I as useHash,
  F as useIntersectionObserver,
  X as useIsScroll,
  T as useLockScroll,
  j as useMount,
  H as useMountedState,
  C as useNumber,
  P as useObject,
  Y as usePromise,
  N as useResizeObserver,
  K as useScroll,
  U as useSize,
  B as useThrottleFn,
  D as useTimeoutFn,
  p as useToggle,
  A as useUnmount,
  W as useUpdate,
  S as useUpdateEffect,
  L as useUrlState,
  G as useVisible,
};
