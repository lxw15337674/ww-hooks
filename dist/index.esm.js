import {
  useState as n,
  useCallback as r,
  useMemo as t,
  useEffect as e,
  useRef as o,
  useLayoutEffect as u,
} from 'react';
import {
  isEqual as i,
  debounce as c,
  throttle as a,
  isNumber as l,
  isObject as f,
} from 'lodash';
import s from 'axios';
function v(n, r) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(n);
    r &&
      (e = e.filter(function (r) {
        return Object.getOwnPropertyDescriptor(n, r).enumerable;
      })),
      t.push.apply(t, e);
  }
  return t;
}
function d(n) {
  for (var r = 1; arguments.length > r; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? v(Object(t), !0).forEach(function (r) {
          h(n, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : v(Object(t)).forEach(function (r) {
          Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return n;
}
function h(n, r, t) {
  return (
    r in n
      ? Object.defineProperty(n, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = t),
    n
  );
}
function y(n, r) {
  if (null == n) return {};
  var t,
    e,
    o = (function (n, r) {
      if (null == n) return {};
      var t,
        e,
        o = {},
        u = Object.keys(n);
      for (e = 0; u.length > e; e++) 0 > r.indexOf((t = u[e])) && (o[t] = n[t]);
      return o;
    })(n, r);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    for (e = 0; u.length > e; e++)
      0 > r.indexOf((t = u[e])) &&
        Object.prototype.propertyIsEnumerable.call(n, t) &&
        (o[t] = n[t]);
  }
  return o;
}
function p(n, r) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(n) ||
    (function (n, r) {
      var t =
        null == n
          ? null
          : ('undefined' != typeof Symbol && n[Symbol.iterator]) ||
            n['@@iterator'];
      if (null == t) return;
      var e,
        o,
        u = [],
        i = !0,
        c = !1;
      try {
        for (
          t = t.call(n);
          !(i = (e = t.next()).done) && (u.push(e.value), !r || u.length !== r);
          i = !0
        );
      } catch (n) {
        (c = !0), (o = n);
      } finally {
        try {
          i || null == t.return || t.return();
        } finally {
          if (c) throw o;
        }
      }
      return u;
    })(n, r) ||
    g(n, r) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function m(n) {
  return (
    (function (n) {
      if (Array.isArray(n)) return b(n);
    })(n) ||
    (function (n) {
      if (
        ('undefined' != typeof Symbol && null != n[Symbol.iterator]) ||
        null != n['@@iterator']
      )
        return Array.from(n);
    })(n) ||
    g(n) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function g(n, r) {
  if (n) {
    if ('string' == typeof n) return b(n, r);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    return (
      'Object' === t && n.constructor && (t = n.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(n)
        : 'Arguments' === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? b(n, r)
        : void 0
    );
  }
}
function b(n, r) {
  (null == r || r > n.length) && (r = n.length);
  for (var t = 0, e = Array(r); r > t; t++) e[t] = n[t];
  return e;
}
function w(n, r) {
  var t =
    ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
  if (!t) {
    if (
      Array.isArray(n) ||
      (t = g(n)) ||
      (r && n && 'number' == typeof n.length)
    ) {
      t && (n = t);
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
      t = t.call(n);
    },
    n: function () {
      var n = t.next();
      return (i = n.done), n;
    },
    e: function (n) {
      (c = !0), (u = n);
    },
    f: function () {
      try {
        i || null == t.return || t.return();
      } finally {
        if (c) throw u;
      }
    },
  };
}
function O(t, e) {
  var o = p(n(t), 2),
    u = o[1];
  return [
    o[0],
    r(function (n) {
      u(
        void 0 !== n
          ? n
          : function (n) {
              return n === t ? e : t;
            },
      );
    }, []),
  ];
}
function S() {
  var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    r = O(n, !n);
  return r;
}
var A = function (n, r) {
    return 'function' != typeof n ? n : n(r);
  },
  P = function (e) {
    var o = p(n(e), 2),
      u = o[0],
      c = o[1],
      a = t(
        function () {
          return !i(e, u);
        },
        [e, u],
      ),
      l = t(
        function () {
          return {
            set: function (n, r) {
              c(function (t) {
                var e = m(t);
                return (e[n] = A(r, e[n])), e;
              });
            },
            setAll: c,
            remove: function (n) {
              c(function (r) {
                var t = m(r);
                return t.splice(n, 1), t;
              });
            },
            push: function (n) {
              c(function (r) {
                var t = m(r);
                return t.push(n), t;
              });
            },
            clear: function () {
              c([]);
            },
            reset: function () {
              c(e);
            },
          };
        },
        [e],
      ),
      f = r(
        function (n, r) {
          var t = u.length - 1;
          (n > t || r > t) && console.error('交换位置超出最大位置');
          var e = m(u),
            o = [e[r], e[n]];
          (e[n] = o[0]), (e[r] = o[1]), c(e);
        },
        [u],
      ),
      s = r(
        function (n, r) {
          var t = u.length - 1;
          (n > t || r > t) && console.error('交换位置超出最大位置');
          var e = m(u),
            o = p(e.splice(n, 1), 1);
          e.splice(r, 0, o[0]), c(e);
        },
        [u],
      );
    return [u, d({ isEdited: a, swap: f, reorder: s }, l)];
  },
  j = function (n) {
    e(function () {
      n();
    }, []);
  },
  I = function (n) {
    e(function () {
      return n;
    }, []);
  },
  E = function (r, t) {
    var o = p(n(!1), 2),
      u = o[0],
      i = o[1];
    e(function () {
      u ? r() : i(!0);
    }, t);
  };
function T(e) {
  var o = p(n(e), 2),
    u = o[0],
    c = o[1],
    a = r(
      function () {
        c(e);
      },
      [e],
    ),
    l = t(
      function () {
        return !i(u, e);
      },
      [u, e],
    ),
    f = r(
      function (n) {
        c(function (r) {
          var t = A(n, r);
          return d(d({}, r), t);
        });
      },
      [c],
    );
  return [u, { setAll: c, set: f, reset: a, isEdited: l }];
}
var D = function (n) {
    window.location.replace('#' + encodeURIComponent(n));
  },
  x = function (t) {
    var o = n(function () {
        var n = window.location.hash.substring(1);
        return '' === n ? (D(t), t) : n;
      }),
      u = p(o, 2),
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
          : D(i);
      },
      [i],
    );
    var a = r(
      function () {
        c(t);
      },
      [t],
    );
    return [i, c, a];
  },
  L = function (r, e) {
    var o = p(
        n(function () {
          var n = null !== r ? r : location.search;
          return new URLSearchParams(n);
        }),
        2,
      ),
      u = o[0],
      i = o[1],
      c = t(
        function () {
          return {
            set: function (n, r) {
              i(function (t) {
                var e = new URLSearchParams(t),
                  o = t.get(n),
                  u = A(r, o);
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
      E(
        function () {
          var n = ''.concat(e, 'State'),
            r = '' + u;
          r
            ? history[n](null, '', '?' + r)
            : history[n]({}, document.title, window.location.pathname);
        },
        [u],
      ),
      [u, c]
    );
  };
function R(n, r, e) {
  var u = o(n);
  u.current = n;
  var i = t(
    function () {
      return c(u.current, null != r ? r : 1e3, e);
    },
    [r, u, e],
  );
  return (
    I(function () {
      i.cancel();
    }),
    { run: i, cancel: i.cancel, flush: i.flush }
  );
}
var H = 'hidden';
function C(n) {
  var r = p(S(!1), 2),
    t = r[0],
    o = r[1];
  return (
    e(
      function () {
        var r = (n = n || document.body).style,
          e = r.paddingRight,
          o = r.overflow,
          u = n.getBoundingClientRect();
        return (
          t &&
            ((n.style.width = ''.concat(u.width, 'px')),
            (n.style.overflowY = H)),
          function () {
            (n.style.overflow = o), (n.style.width = e);
          }
        );
      },
      [t, n],
    ),
    [o, t]
  );
}
var U = [
    'debounceInterval',
    'manual',
    'onSuccess',
    'onError',
    'initialData',
    'throttleInterval',
    'loadingDelay',
    'defaultParams',
  ],
  W = s.create(),
  k = function (n) {
    var t = n.debounceInterval,
      e = n.manual,
      u = n.onSuccess,
      i = n.onError,
      c = n.initialData,
      a = n.throttleInterval,
      l = n.loadingDelay,
      f = n.defaultParams,
      v = y(n, U),
      h = o(),
      p = r(
        function (n) {
          var r = d(
            d(
              {
                cancelToken: new s.CancelToken(function (n) {
                  h.current = n;
                }),
              },
              v,
            ),
            n,
          );
          return W.request(r).then(function (n) {
            return n.data;
          });
        },
        [v],
      ),
      m = Q(p, {
        debounceInterval: t,
        manual: e,
        onSuccess: u,
        onError: i,
        initialData: c,
        throttleInterval: a,
        loadingDelay: l,
        defaultParams: f,
      }),
      g = r(
        function () {
          var n;
          null === (n = h.current) || void 0 === n || n.call(h),
            null == m || m.cancel();
        },
        [m.cancel],
      );
    return (
      I(function () {
        g();
      }),
      m
    );
  };
function B() {
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
    r(function () {
      return n.current;
    }, [])
  );
}
function q(n) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    u = o(null),
    i = S(!1),
    c = p(i, 2),
    a = c[0],
    l = c[1],
    f = r(
      function () {
        for (var r = arguments.length, e = Array(r), o = 0; r > o; o++)
          e[o] = arguments[o];
        clearTimeout(u.current),
          null != t &&
            (l(!0),
            (u.current = setTimeout(function () {
              n.apply(void 0, e), l(!1);
            }, t)));
      },
      [n, t],
    );
  e(function () {
    return function () {
      clearTimeout(u.current);
    };
  }, []);
  var s = r(function () {
    clearTimeout(u.current), l(!1);
  }, []);
  return { waiting: a, run: f, cancel: s };
}
var z = ['deps', 'pollingInterval', 'manual', 'concurrent', 'params'],
  M = function (t) {
    var e = t.deps,
      u = void 0 === e ? [] : e,
      i = t.pollingInterval,
      c = void 0 === i ? 0 : i,
      a = t.manual,
      l = void 0 === a || a,
      f = t.concurrent,
      s = void 0 !== f && f,
      v = t.params,
      h = y(t, z),
      g = o(),
      b = p(n(v), 2),
      w = b[0],
      O = b[1],
      S = k(h),
      P = r(
        function () {
          S.cancel(), clearTimeout(g.current);
        },
        [S],
      ),
      T = r(
        function (n) {
          g.current && clearTimeout(g.current), s || P();
          var r = A(n, w);
          O(r);
          var t = { params: r };
          return c
            ? S.run(t).finally(function () {
                g.current = setTimeout(function () {
                  g.current && T(r);
                }, c);
              })
            : S.run(t);
        },
        [s, w, c, S, P],
      ),
      D = r(
        function () {
          return T(w);
        },
        [w, T],
      );
    return (
      E(function () {
        D();
      }, m(u)),
      j(function () {
        !1 === l && D();
      }),
      I(function () {
        clearTimeout(g.current);
      }),
      d(d({}, S), {}, { run: T, reload: D, cancel: P, params: w, setParams: O })
    );
  },
  Y = ['manual', 'data'],
  $ = function (t) {
    var e = t.manual,
      o = void 0 === e || e,
      u = t.data,
      i = y(t, Y),
      c = p(n(u), 2),
      a = c[0],
      l = c[1],
      f = d({ data: a, method: 'post' }, i),
      s = k(f),
      v = r(
        function (n) {
          var r = A(n, a);
          return l(n), s.run({ data: r });
        },
        [a, s],
      ),
      h = r(
        function () {
          return v(a);
        },
        [v, a],
      );
    return (
      j(function () {
        !1 === o && s.reload();
      }),
      d(d({}, s), {}, { run: v, reload: h, params: a, setParams: l })
    );
  };
function F(r) {
  var t = p(n({ width: 0, height: 0 }), 2),
    e = t[0],
    o = t[1];
  return (
    tn(r, function (n) {
      o({ width: n.target.offsetWidth, height: n.target.offsetHeight });
    }),
    e
  );
}
var G = function () {
    var t = p(n({}), 2)[1];
    return r(function () {
      t({});
    }, []);
  },
  J = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      o = n(e),
      u = p(o, 2),
      i = u[0],
      c = u[1],
      a = t(function () {
        return {
          plus: function () {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            c(function (r) {
              return r + n;
            });
          },
          minus: function () {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            c(function (r) {
              return r - n;
            });
          },
        };
      }, []),
      l = r(
        function () {
          c(e);
        },
        [e],
      );
    return [i, d({ set: c, reset: l }, a)];
  },
  K = function () {
    var n =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : function (n) {},
      e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : function (n) {},
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      u = J(0),
      i = p(u, 2),
      c = i[0],
      a = i[1],
      l = t(
        function () {
          return d(d({}, { delay: 250, exclusive: !1 }), o);
        },
        [o],
      ),
      f = l.delay,
      s = l.exclusive,
      v = q(function () {
        a.reset();
      }, f),
      h = v.run,
      y = r(
        function (r) {
          0 === c && (null == n || n(r), h()),
            1 === c && (s || null == n || n(r), null == e || e(r)),
            a.plus(1);
        },
        [n, h, s, e],
      );
    return y;
  };
function N(n, r, e) {
  var u = o(n);
  u.current = n;
  var i = t(
    function () {
      return a(u.current, null != r ? r : 1e3, e);
    },
    [r, u, e],
  );
  return (
    I(function () {
      i.cancel();
    }),
    { run: i, cancel: i.cancel, flush: i.flush }
  );
}
var Q = function (e) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    u = o.debounceInterval,
    i = void 0 === u ? null : u,
    c = o.manual,
    a = void 0 === c || c,
    f = o.onSuccess,
    s = void 0 === f ? function () {} : f,
    v = o.onError,
    d = void 0 === v ? function () {} : v,
    h = o.initialData,
    y = void 0 === h ? null : h,
    g = o.throttleInterval,
    b = void 0 === g ? null : g,
    w = o.loadingDelay,
    O = void 0 === w ? 300 : w,
    S = o.defaultParams,
    A = void 0 === S ? [] : S,
    P = B(),
    E = n(y),
    T = p(E, 2),
    D = T[0],
    x = T[1],
    L = n(),
    H = p(L, 2),
    C = H[0],
    U = H[1],
    W = n('success'),
    k = p(W, 2),
    z = k[0],
    M = k[1],
    Y = n(A),
    $ = p(Y, 2),
    F = $[0],
    G = $[1],
    J = q(function () {
      M('loading');
    }, O),
    K = r(
      function () {
        for (var n = arguments.length, r = Array(n), t = 0; n > t; t++)
          r[t] = arguments[t];
        return (
          J.run(),
          U(void 0),
          G(r),
          e
            .apply(void 0, r)
            .then(function (n) {
              return P() && x(n), null == s || s(n, r), M('success'), n;
            })
            .catch(function (n) {
              return (
                P() && U(n), null == d || d(n, r), M('error'), Promise.reject(n)
              );
            })
            .finally(function () {
              J.cancel();
            })
        );
      },
      [J, P, d, s, e],
    ),
    Q = R(K, i),
    V = N(K, b),
    X = r(
      function () {
        for (var n = arguments.length, r = Array(n), t = 0; n > t; t++)
          r[t] = arguments[t];
        var e = r;
        return (
          Array.isArray(r) || (e = []),
          l(i)
            ? (Q.run.apply(Q, m(e)), Promise.resolve(null))
            : l(b)
            ? (V.run.apply(V, m(e)), Promise.resolve(null))
            : K.apply(void 0, m(e))
        );
      },
      [i, b, K, Q, V],
    ),
    Z = r(
      function () {
        return Array.isArray(F) ? X.apply(void 0, m(F)) : X();
      },
      [X, F],
    ),
    _ = r(
      function () {
        null == Q || Q.cancel(), null == V || V.cancel();
      },
      [Q, V],
    ),
    nn = t(
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
    I(function () {
      _();
    }),
    {
      data: D,
      params: F,
      error: C,
      reload: Z,
      isLoading: 'loading' === z,
      isError: 'error' === z,
      isSuccess: 'success' === z,
      status: z,
      run: X,
      cancel: _,
      mutate: x,
      flush: nn,
    }
  );
};
function V(n) {
  for (
    var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1;
    r > e;
    e++
  )
    t[e - 1] = arguments[e];
  return function () {
    for (var r = arguments.length, e = Array(r), o = 0; r > o; o++)
      e[o] = arguments[o];
    var u = t.map(function (n, r) {
      return Array.isArray(n) ? e[r] : f(n) ? d(d({}, n), e[r]) : e[r];
    });
    return n.apply(void 0, m(u));
  };
}
function X(n, r) {
  return n
    ? 'function' == typeof n
      ? n()
      : 'current' in n
      ? n.current
      : n
    : r;
}
function Z(n, r, t) {
  u(
    function () {
      var e = X(n);
      if (e) {
        var o = new IntersectionObserver(function (n) {
          var t,
            e = w(n);
          try {
            for (e.s(); !(t = e.n()).done; ) {
              r(t.value);
            }
          } catch (n) {
            e.e(n);
          } finally {
            e.f();
          }
        }, t);
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
function _(r) {
  var t = p(
      n(function () {
        return (function (n) {
          if (n) {
            var r =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
              t =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
              e = n.getBoundingClientRect();
            return (
              !!e && e.bottom > 0 && t >= e.top && r >= e.left && e.right > 0
            );
          }
        })(X(r));
      }),
      2,
    ),
    e = t[0],
    o = t[1];
  return (
    Z(r, function (n) {
      o(n.isIntersecting);
    }),
    e
  );
}
function nn(n, r) {
  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    u = o();
  (u.current = r),
    e(
      function () {
        var r = X(t.target, window);
        if (null == r ? void 0 : r.addEventListener) {
          var e = function (n) {
            return u.current && u.current(n);
          };
          return (
            r.addEventListener(n, e, {
              capture: t.capture,
              once: t.once,
              passive: t.passive,
            }),
            function () {
              r.removeEventListener(n, e, { capture: t.capture });
            }
          );
        }
      },
      [n, t],
    );
}
function rn(r) {
  var t = p(n({ left: 0, top: 0 }), 2),
    e = t[0],
    o = t[1];
  return (
    nn(
      'scroll',
      function (n) {
        var r = n.target;
        o({ left: r.scrollLeft, top: r.scrollTop });
      },
      { target: r },
    ),
    { position: e }
  );
}
function tn(n, r) {
  u(
    function () {
      var t = X(n);
      if (t) {
        var e = new ResizeObserver(function (n) {
          n.forEach(function (n) {
            r(n);
          });
        });
        return (
          e.observe(t),
          function () {
            e.disconnect();
          }
        );
      }
    },
    [n],
  );
}
function en(n, r) {
  var t,
    e = n,
    o = {},
    u = w(r);
  try {
    var i = function () {
      var n = t.value,
        r = e[0][n],
        u = e.reduce(
          function (t, e) {
            if (e[n] === r) {
              var o = t.length - 1;
              t[o] = t[o] + 1;
            } else t.push(1), (r = e[n]);
            return t;
          },
          [0],
        );
      o[n] = (function (n) {
        return n.reduce(function (n, r) {
          var t = Array(r).fill(0);
          return (t[0] = r), n.push.apply(n, m(t)), n;
        }, []);
      })(u);
    };
    for (u.s(); !(t = u.n()).done; ) i();
  } catch (n) {
    u.e(n);
  } finally {
    u.f();
  }
  return o;
}
function on(n, r) {
  return r === Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
}
var un = function (r) {
  var t = p(n({ x: !1, y: !1 }), 2),
    e = t[0],
    o = t[1];
  return (
    tn(r, function (n) {
      var r = n.target;
      o({
        x: r.scrollWidth !== r.clientWidth,
        y: r.scrollHeight !== r.clientHeight,
      });
    }),
    e
  );
};
export {
  on as isType,
  V as setDefaultArguments,
  en as sortBy,
  P as useArray,
  k as useAxios,
  S as useBoolean,
  K as useClick,
  R as useDebounceFn,
  nn as useEventListener,
  x as useHash,
  Z as useIntersectionObserver,
  un as useIsScroll,
  C as useLockScroll,
  j as useMount,
  B as useMountedState,
  $ as useMutation,
  J as useNumber,
  T as useObject,
  Q as usePromise,
  M as useQuery,
  tn as useResizeObserver,
  rn as useScroll,
  F as useSize,
  N as useThrottleFn,
  q as useTimeoutFn,
  O as useToggle,
  I as useUnmount,
  G as useUpdate,
  E as useUpdateEffect,
  L as useUrlState,
  _ as useVisible,
};
