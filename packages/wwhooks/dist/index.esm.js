import {
  useEffect as t,
  useRef as n,
  useMemo as r,
  useState as e,
  useLayoutEffect as o,
} from 'react';
import { debounce as i, throttle as u } from 'lodash';
function c(t, n) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(t);
    n &&
      (e = e.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      })),
      r.push.apply(r, e);
  }
  return r;
}
function a(t) {
  for (var n = 1; arguments.length > n; n++) {
    var r = null != arguments[n] ? arguments[n] : {};
    n % 2
      ? c(Object(r), !0).forEach(function (n) {
          h(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : c(Object(r)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return t;
}
function l() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  l = function () {
    return t;
  };
  var t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    e = 'function' == typeof Symbol ? Symbol : {},
    o = e.iterator || '@@iterator',
    i = e.asyncIterator || '@@asyncIterator',
    u = e.toStringTag || '@@toStringTag';
  function c(t, n, r) {
    return (
      Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[n]
    );
  }
  try {
    c({}, '');
  } catch (t) {
    c = function (t, n, r) {
      return (t[n] = r);
    };
  }
  function a(t, n, r, e) {
    var o = Object.create((n && n.prototype instanceof v ? n : v).prototype),
      i = new E(e || []);
    return (
      (o._invoke = (function (t, n, r) {
        var e = 'suspendedStart';
        return function (o, i) {
          if ('executing' === e) throw Error('Generator is already running');
          if ('completed' === e) {
            if ('throw' === o) throw i;
            return j();
          }
          for (r.method = o, r.arg = i; ; ) {
            var u = r.delegate;
            if (u) {
              var c = x(u, r);
              if (c) {
                if (c === s) continue;
                return c;
              }
            }
            if ('next' === r.method) r.sent = r._sent = r.arg;
            else if ('throw' === r.method) {
              if ('suspendedStart' === e) throw ((e = 'completed'), r.arg);
              r.dispatchException(r.arg);
            } else 'return' === r.method && r.abrupt('return', r.arg);
            e = 'executing';
            var a = f(t, n, r);
            if ('normal' === a.type) {
              if (((e = r.done ? 'completed' : 'suspendedYield'), a.arg === s))
                continue;
              return { value: a.arg, done: r.done };
            }
            'throw' === a.type &&
              ((e = 'completed'), (r.method = 'throw'), (r.arg = a.arg));
          }
        };
      })(t, r, i)),
      o
    );
  }
  function f(t, n, r) {
    try {
      return { type: 'normal', arg: t.call(n, r) };
    } catch (t) {
      return { type: 'throw', arg: t };
    }
  }
  t.wrap = a;
  var s = {};
  function v() {}
  function h() {}
  function d() {}
  var p = {};
  c(p, o, function () {
    return this;
  });
  var y = Object.getPrototypeOf,
    m = y && y(y(S([])));
  m && m !== n && r.call(m, o) && (p = m);
  var g = (d.prototype = v.prototype = Object.create(p));
  function w(t) {
    ['next', 'throw', 'return'].forEach(function (n) {
      c(t, n, function (t) {
        return this._invoke(n, t);
      });
    });
  }
  function b(t, n) {
    function e(o, i, u, c) {
      var a = f(t[o], t, i);
      if ('throw' !== a.type) {
        var l = a.arg,
          s = l.value;
        return s && 'object' == typeof s && r.call(s, '__await')
          ? n.resolve(s.__await).then(
              function (t) {
                e('next', t, u, c);
              },
              function (t) {
                e('throw', t, u, c);
              },
            )
          : n.resolve(s).then(
              function (t) {
                (l.value = t), u(l);
              },
              function (t) {
                return e('throw', t, u, c);
              },
            );
      }
      c(a.arg);
    }
    var o;
    this._invoke = function (t, r) {
      function i() {
        return new n(function (n, o) {
          e(t, r, n, o);
        });
      }
      return (o = o ? o.then(i, i) : i());
    };
  }
  function x(t, n) {
    var r = t.iterator[n.method];
    if (void 0 === r) {
      if (((n.delegate = null), 'throw' === n.method)) {
        if (
          t.iterator.return &&
          ((n.method = 'return'),
          (n.arg = void 0),
          x(t, n),
          'throw' === n.method)
        )
          return s;
        (n.method = 'throw'),
          (n.arg = new TypeError(
            "The iterator does not provide a 'throw' method",
          ));
      }
      return s;
    }
    var e = f(r, t.iterator, n.arg);
    if ('throw' === e.type)
      return (n.method = 'throw'), (n.arg = e.arg), (n.delegate = null), s;
    var o = e.arg;
    return o
      ? o.done
        ? ((n[t.resultName] = o.value),
          (n.next = t.nextLoc),
          'return' !== n.method && ((n.method = 'next'), (n.arg = void 0)),
          (n.delegate = null),
          s)
        : o
      : ((n.method = 'throw'),
        (n.arg = new TypeError('iterator result is not an object')),
        (n.delegate = null),
        s);
  }
  function O(t) {
    var n = { tryLoc: t[0] };
    1 in t && (n.catchLoc = t[1]),
      2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
      this.tryEntries.push(n);
  }
  function L(t) {
    var n = t.completion || {};
    (n.type = 'normal'), delete n.arg, (t.completion = n);
  }
  function E(t) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      t.forEach(O, this),
      this.reset(!0);
  }
  function S(t) {
    if (t) {
      var n = t[o];
      if (n) return n.call(t);
      if ('function' == typeof t.next) return t;
      if (!isNaN(t.length)) {
        var e = -1,
          i = function n() {
            for (; ++e < t.length; )
              if (r.call(t, e)) return (n.value = t[e]), (n.done = !1), n;
            return (n.value = void 0), (n.done = !0), n;
          };
        return (i.next = i);
      }
    }
    return { next: j };
  }
  function j() {
    return { value: void 0, done: !0 };
  }
  return (
    (h.prototype = d),
    c(g, 'constructor', d),
    c(d, 'constructor', h),
    (h.displayName = c(d, u, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (t) {
      var n = 'function' == typeof t && t.constructor;
      return (
        !!n && (n === h || 'GeneratorFunction' === (n.displayName || n.name))
      );
    }),
    (t.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, d)
          : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (t.awrap = function (t) {
      return { __await: t };
    }),
    w(b.prototype),
    c(b.prototype, i, function () {
      return this;
    }),
    (t.AsyncIterator = b),
    (t.async = function (n, r, e, o, i) {
      void 0 === i && (i = Promise);
      var u = new b(a(n, r, e, o), i);
      return t.isGeneratorFunction(r)
        ? u
        : u.next().then(function (t) {
            return t.done ? t.value : u.next();
          });
    }),
    w(g),
    c(g, u, 'Generator'),
    c(g, o, function () {
      return this;
    }),
    c(g, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (t) {
      var n = [];
      for (var r in t) n.push(r);
      return (
        n.reverse(),
        function r() {
          for (; n.length; ) {
            var e = n.pop();
            if (e in t) return (r.value = e), (r.done = !1), r;
          }
          return (r.done = !0), r;
        }
      );
    }),
    (t.values = S),
    (E.prototype = {
      constructor: E,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = void 0),
          this.tryEntries.forEach(L),
          !t)
        )
          for (var n in this)
            't' === n.charAt(0) &&
              r.call(this, n) &&
              !isNaN(+n.slice(1)) &&
              (this[n] = void 0);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var n = this;
        function e(r, e) {
          return (
            (u.type = 'throw'),
            (u.arg = t),
            (n.next = r),
            e && ((n.method = 'next'), (n.arg = void 0)),
            !!e
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            u = i.completion;
          if ('root' === i.tryLoc) return e('end');
          if (this.prev >= i.tryLoc) {
            var c = r.call(i, 'catchLoc'),
              a = r.call(i, 'finallyLoc');
            if (c && a) {
              if (i.catchLoc > this.prev) return e(i.catchLoc, !0);
              if (i.finallyLoc > this.prev) return e(i.finallyLoc);
            } else if (c) {
              if (i.catchLoc > this.prev) return e(i.catchLoc, !0);
            } else {
              if (!a) throw Error('try statement without catch or finally');
              if (i.finallyLoc > this.prev) return e(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, n) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var o = this.tryEntries[e];
          if (
            this.prev >= o.tryLoc &&
            r.call(o, 'finallyLoc') &&
            o.finallyLoc > this.prev
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ('break' === t || 'continue' === t) &&
          n >= i.tryLoc &&
          i.finallyLoc >= n &&
          (i = null);
        var u = i ? i.completion : {};
        return (
          (u.type = t),
          (u.arg = n),
          i
            ? ((this.method = 'next'), (this.next = i.finallyLoc), s)
            : this.complete(u)
        );
      },
      complete: function (t, n) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : 'normal' === t.type && n && (this.next = n),
          s
        );
      },
      finish: function (t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var r = this.tryEntries[n];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), L(r), s;
        }
      },
      catch: function (t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var r = this.tryEntries[n];
          if (r.tryLoc === t) {
            var e = r.completion;
            if ('throw' === e.type) {
              var o = e.arg;
              L(r);
            }
            return o;
          }
        }
        throw Error('illegal catch attempt');
      },
      delegateYield: function (t, n, r) {
        return (
          (this.delegate = { iterator: S(t), resultName: n, nextLoc: r }),
          'next' === this.method && (this.arg = void 0),
          s
        );
      },
    }),
    t
  );
}
function f(t) {
  return (
    (f =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    f(t)
  );
}
function s(t, n, r, e, o, i, u) {
  try {
    var c = t[i](u),
      a = c.value;
  } catch (t) {
    return void r(t);
  }
  c.done ? n(a) : Promise.resolve(a).then(e, o);
}
function v(t) {
  return function () {
    var n = this,
      r = arguments;
    return new Promise(function (e, o) {
      var i = t.apply(n, r);
      function u(t) {
        s(i, e, o, u, c, 'next', t);
      }
      function c(t) {
        s(i, e, o, u, c, 'throw', t);
      }
      u(void 0);
    });
  };
}
function h(t, n, r) {
  return (
    n in t
      ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[n] = r),
    t
  );
}
function d(t, n) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, n) {
      var r =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null == r) return;
      var e,
        o,
        i = [],
        u = !0,
        c = !1;
      try {
        for (
          r = r.call(t);
          !(u = (e = r.next()).done) && (i.push(e.value), !n || i.length !== n);
          u = !0
        );
      } catch (t) {
        (c = !0), (o = t);
      } finally {
        try {
          u || null == r.return || r.return();
        } finally {
          if (c) throw o;
        }
      }
      return i;
    })(t, n) ||
    y(t, n) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function p(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return m(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    y(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function y(t, n) {
  if (t) {
    if ('string' == typeof t) return m(t, n);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === r && t.constructor && (r = t.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(t)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? m(t, n)
        : void 0
    );
  }
}
function m(t, n) {
  (null == n || n > t.length) && (n = t.length);
  for (var r = 0, e = Array(n); n > r; r++) e[r] = t[r];
  return e;
}
function g(t, n) {
  var r =
    ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (!r) {
    if (
      Array.isArray(t) ||
      (r = y(t)) ||
      (n && t && 'number' == typeof t.length)
    ) {
      r && (t = r);
      var e = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return t.length > e ? { done: !1, value: t[e++] } : { done: !0 };
        },
        e: function (t) {
          throw t;
        },
        f: o,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var i,
    u = !0,
    c = !1;
  return {
    s: function () {
      r = r.call(t);
    },
    n: function () {
      var t = r.next();
      return (u = t.done), t;
    },
    e: function (t) {
      (c = !0), (i = t);
    },
    f: function () {
      try {
        u || null == r.return || r.return();
      } finally {
        if (c) throw i;
      }
    },
  };
}
var w = function (n) {
  t(function () {
    return n;
  }, []);
};
function b(t, e, o) {
  var u = n(t);
  u.current = t;
  var c = r(
    function () {
      return i(u.current, null != e ? e : 1e3, o);
    },
    [e, u, o],
  );
  return (
    w(function () {
      c.cancel();
    }),
    { run: c, cancel: c.cancel, flush: c.flush }
  );
}
function x(t, e, o) {
  var i = n(t);
  i.current = t;
  var c = r(
    function () {
      return u(i.current, null != e ? e : 1e3, o);
    },
    [e, i, o],
  );
  return (
    w(function () {
      c.cancel();
    }),
    { run: c, cancel: c.cancel, flush: c.flush }
  );
}
var O = function (t, n) {
  return 'function' != typeof t ? t : t(n);
};
function L(t) {
  return 'number' == typeof t;
}
function E(t) {
  return '[object Object]' === Object.prototype.toString.call(t);
}
function S(t, n) {
  if (!E(t) || !E(n)) return t === n;
  if (t === n) return !0;
  if (Object.keys(t).length !== Object.keys(n).length) return !1;
  for (var r in t) {
    if (Object.prototype.hasOwnProperty.call(t, r))
      if (!S(t[r], n[r])) return !1;
  }
  return !0;
}
var j = function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      o = n.debounceInterval,
      i = void 0 === o ? void 0 : o,
      u = n.manual,
      c = void 0 === u || u,
      a = n.onSuccess,
      l = void 0 === a ? function () {} : a,
      f = n.onError,
      s = void 0 === f ? function () {} : f,
      v = n.initialData,
      h = void 0 === v ? void 0 : v,
      p = n.throttleInterval,
      y = void 0 === p ? void 0 : p,
      m = n.loadingDelay,
      g = void 0 === m ? 300 : m,
      O = Q(),
      E = e(h),
      S = d(E, 2),
      j = S[0],
      T = S[1],
      k = e(),
      A = d(k, 2),
      I = A[0],
      _ = A[1],
      N = e('success'),
      R = d(N, 2),
      H = R[0],
      G = R[1],
      M = ct(function () {
        G('loading');
      }, g),
      W = P(function () {
        return (
          M.run(),
          _(void 0),
          t()
            .then(function (t) {
              return O() && T(t), null == l || l(t), G('success'), t;
            })
            .catch(function (t) {
              return (
                O() && _(t), null == s || s(t), G('error'), Promise.reject(t)
              );
            })
            .finally(function () {
              M.cancel();
            })
        );
      }),
      D = b(W, i),
      z = x(W, y),
      F = P(function () {
        return L(i)
          ? (D.run(), Promise.resolve())
          : L(y)
          ? (z.run(), Promise.resolve())
          : W();
      }),
      U = P(function () {
        null == D || D.cancel(), null == z || z.cancel();
      }),
      C = r(
        function () {
          return (null == D ? void 0 : D.flush)
            ? D.flush
            : (null == z ? void 0 : z.flush)
            ? z.flush
            : function () {
                return Promise.resolve(null);
              };
        },
        [D, z],
      );
    return (
      K(function () {
        !1 === c && F();
      }),
      w(function () {
        U();
      }),
      {
        data: j,
        error: I,
        isLoading: 'loading' === H,
        isError: 'error' === H,
        isSuccess: 'success' === H,
        status: H,
        run: F,
        cancel: U,
        mutate: T,
        flush: C,
      }
    );
  },
  P = function (t) {
    var e = n();
    return (
      (e.current = r(
        function () {
          return t;
        },
        [t],
      )),
      n(function (t) {
        var n;
        return null == e || null === (n = e.current) || void 0 === n
          ? void 0
          : n.call(e, t);
      }).current
    );
  },
  T = function (t) {
    var n = d(e(t), 2),
      o = n[0],
      i = n[1],
      u = r(
        function () {
          return !S(t, o);
        },
        [t, o],
      ),
      c = r(
        function () {
          return {
            set: function (t, n) {
              i(function (r) {
                var e = p(r);
                return (e[t] = O(n, e[t])), e;
              });
            },
            setAll: i,
            remove: function (t) {
              i(function (n) {
                var r = p(n);
                return r.splice(t, 1), r;
              });
            },
            push: function (t) {
              i(function (n) {
                var r = p(n);
                return r.push(t), r;
              });
            },
            clear: function () {
              i([]);
            },
            reset: function () {
              i(t);
            },
          };
        },
        [t],
      ),
      l = P(function (t, n) {
        var r = o.length - 1;
        (t > r || n > r) && console.error('交换位置超出最大位置');
        var e = p(o),
          u = [e[n], e[t]];
        (e[t] = u[0]), (e[n] = u[1]), i(e);
      }),
      f = P(function (t, n) {
        var r = o.length - 1;
        (t > r || n > r) && console.error('交换位置超出最大位置');
        var e = p(o),
          u = d(e.splice(t, 1), 1);
        return e.splice(n, 0, u[0]), i(e), e;
      });
    return [
      o,
      a(a({ isEdited: u, swap: l, reorder: f }, c), {}, { setAll: i }),
    ];
  };
function k(t, n) {
  var r = d(e(t), 2),
    o = r[1];
  return [
    r[0],
    P(function (r) {
      o(
        void 0 !== r
          ? r
          : function (r) {
              return r === t ? n : t;
            },
      );
    }),
  ];
}
function A() {
  var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    n = k(t, !t);
  return n;
}
var I = function () {
  var t =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : function (t) {},
    n =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : function (t) {},
    e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    o = F(0),
    i = d(o, 2),
    u = i[0],
    c = i[1],
    l = r(
      function () {
        return a(a({}, { delay: 250, exclusive: !1 }), e);
      },
      [e],
    ),
    f = l.delay,
    s = l.exclusive,
    v = ct(function () {
      c.reset();
    }, f),
    h = v.run,
    p = P(function (r) {
      0 === u && (null == t || t(r), h()),
        1 === u && (s || null == t || t(r), null == n || n(r)),
        c.plus(1);
    });
  return p;
};
function _(t, n) {
  if ((isNaN(t) && (t = 0), 0 === n.length)) return 0;
  for (var r, e, o, i = 0, u = n.length - 1; u >= i; ) {
    if (((o = n[(r = Math.floor((i + u) / 2))]), 0 === r && n[0] >= t))
      return 0;
    if ((e = n[r - 1] || 0) > t) u = r - 1;
    else {
      if (e === t) return r - 1;
      if (t >= e && o >= t) return r;
      t > o && (i = r + 1);
    }
  }
  return n.length;
}
function N(t, n) {
  return t
    ? 'function' == typeof t
      ? t()
      : 'current' in t
      ? t.current
      : t
    : n;
}
function R(t) {
  if (t && t.addEventListener) {
    for (
      var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), e = 1;
      n > e;
      e++
    )
      r[e - 1] = arguments[e];
    t.addEventListener.apply(t, r);
  }
}
function H(t) {
  if (t && t.removeEventListener) {
    for (
      var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), e = 1;
      n > e;
      e++
    )
      r[e - 1] = arguments[e];
    t.removeEventListener.apply(t, r);
  }
}
function G(r, e, o) {
  var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    u = n();
  (u.current = o),
    t(
      function () {
        var t = N(r, window);
        if (null == t ? void 0 : t.addEventListener) {
          var n = function (t) {
            return u.current && u.current(t);
          };
          return (
            t.addEventListener(e, n, {
              capture: i.capture,
              once: i.once,
              passive: i.passive,
            }),
            function () {
              t.removeEventListener(e, n, { capture: i.capture });
            }
          );
        }
      },
      [e, i],
    );
}
function M(t) {
  var n = d(e({ left: 0, top: 0 }), 2),
    r = n[0],
    o = n[1];
  return (
    G(t, 'scroll', function (t) {
      var n = t.target;
      o({ left: n.scrollLeft, top: n.scrollTop });
    }),
    r
  );
}
function W(t) {
  var n = d(e({ width: 0, height: 0 }), 2),
    r = n[0],
    o = n[1];
  return (
    it(t, function (t) {
      o({ width: t.target.offsetWidth, height: t.target.offsetHeight });
    }),
    r
  );
}
var D = function (n, o) {
  var i = o.containerRef,
    u = o.itemHeight,
    c = o.overscan,
    a = void 0 === c ? 3 : c,
    l = W(i).height,
    f = M(i).top,
    s = d(e({ start: 0, end: 0 }), 2),
    v = s[0],
    h = s[1],
    y = d(e({ upOffset: 0, downOffset: 0 }), 2),
    m = y[0],
    g = y[1],
    w = d(e([]), 2),
    b = w[0],
    x = w[1],
    O = r(
      function () {
        return (null != n ? n : []).map(function (t, n) {
          return u(t, n);
        });
      },
      [u, n],
    ),
    L = r(
      function () {
        return O.reduce(
          function (t, n) {
            return t.push(t[t.length - 1] + n), t;
          },
          [0],
        );
      },
      [O],
    ),
    E = r(
      function () {
        return L[v.start];
      },
      [L, v.start],
    ),
    S = P(function () {
      if (f > Math.max(m.downOffset - l, 0) || m.upOffset >= f) {
        var t = (function (t, n, r) {
          var e =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 5,
            o = _(t, r) - e,
            i = _(n + t, r) + e;
          return {
            start: (o = Math.max(0, o)),
            end: (i = Math.min(i, r.length)),
          };
        })(f, l, L, a);
        h(t),
          g(
            (function (t, n) {
              var r = t.start,
                e = t.end,
                o = 0;
              return (
                r - 1 > 0 && (o = n[r - 1]),
                {
                  upOffset: o,
                  downOffset: n.length > e + 1 ? n[e] : n[n.length - 1],
                }
              );
            })(t, L),
          );
      }
    });
  t(
    function () {
      S();
    },
    [f, l],
  ),
    t(
      function () {
        var t,
          r = n.slice(v.start, v.end).map(function (t, n) {
            return { data: t, index: n + v.start };
          }),
          e =
            null !== (t = null == b ? void 0 : b.length) && void 0 !== t
              ? t
              : 0 - (null == r ? void 0 : r.length),
          o = r.map(function (t, n) {
            return { data: t.data, index: t.index, id: n, style: {} };
          }),
          i = [];
        e > 0 &&
          (i = b.slice(r.length, b.length).map(function (t, n) {
            return {
              data: t.data,
              id: n + r.length,
              index: -1,
              style: { transform: 'translateY(-99999px)' },
            };
          })),
          x([].concat(p(o), p(i)));
      },
      [n, v],
    );
  var j = r(
      function () {
        return (
          O.reduce(function (t, n) {
            return t + n;
          }, 0) - E
        );
      },
      [O, E],
    ),
    T = P(function (t) {
      var n = i.current;
      n && (n.scrollTop = L[t]);
    });
  return { list: b, wrapperStyle: { marginTop: E, height: j }, scrollTo: T };
};
function z(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = n.min,
    e = n.max,
    o = t;
  return (
    'number' == typeof e && (o = Math.min(e, o)),
    'number' == typeof r && (o = Math.max(r, o)),
    o
  );
}
var F = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      n = arguments.length > 1 ? arguments[1] : void 0,
      r = e(z(t, n)),
      o = d(r, 2),
      i = o[0],
      u = o[1],
      c = P(function (t) {
        var r = 'number' == typeof t ? t : t(i);
        u(z(r, n));
      }),
      a = P(function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        c(function (n) {
          return n + t;
        });
      }),
      l = P(function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        c(function (n) {
          return n - t;
        });
      }),
      f = P(function () {
        c(t);
      });
    return [i, { set: c, reset: f, plus: a, minus: l }];
  },
  U = function (t) {
    window.location.replace('#' + encodeURIComponent(t));
  },
  C = function () {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      r = e(function () {
        var t = window.location.hash.substring(1);
        return '' === t ? (U(n), n) : t;
      }),
      o = d(r, 2),
      i = o[0],
      u = o[1];
    t(
      function () {
        null == i
          ? history.pushState(
              '',
              document.title,
              window.location.pathname + window.location.search,
            )
          : U(i);
      },
      [i],
    );
    var c = P(function () {
      u(n);
    });
    return [i, u, c];
  };
function Y(n, r, e) {
  t(
    function () {
      var t = N(n);
      if (t) {
        var o = new IntersectionObserver(function (t) {
          var n,
            e = g(t);
          try {
            for (e.s(); !(n = e.n()).done; ) {
              r(n.value);
            }
          } catch (t) {
            e.e(t);
          } finally {
            e.f();
          }
        }, e);
        return (
          o.observe(t),
          function () {
            o.disconnect();
          }
        );
      }
    },
    [n],
  );
}
function q(t, r) {
  var o = n(null),
    i = d(e(!1), 2),
    u = i[0],
    c = i[1],
    a = P(function () {
      t(), (o.current = setTimeout(a, r));
    }),
    l = P(function () {
      clearTimeout(o.current), c(!1);
    }),
    f = P(function () {
      u || (setTimeout(a, r), c(!0));
    });
  return (
    w(function () {
      l();
    }),
    { start: f, clear: l, looping: u }
  );
}
function B(r, o) {
  var i =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributeOldValue: !0,
          },
    u = e(!0),
    c = d(u, 2),
    a = c[0],
    l = c[1],
    f = n();
  return (
    t(
      function () {
        if (a) {
          var t = N(r);
          if (!t) return;
          (f.current = new MutationObserver(o)), f.current.observe(t, i);
        } else {
          var n;
          null === (n = f.current) || void 0 === n || n.disconnect(),
            (f.current = void 0);
        }
        return function () {
          var t;
          null === (t = f.current) || void 0 === t || t.disconnect(),
            (f.current = void 0);
        };
      },
      [a],
    ),
    [a, l]
  );
}
var J = function (t) {
    var n = d(e({ x: !1, y: !1 }), 2),
      r = n[0],
      o = n[1];
    return (
      B(t, function () {
        var n = N(t);
        n &&
          o({
            x: n.scrollWidth !== n.clientWidth,
            y: n.scrollHeight !== n.clientHeight,
          });
      }),
      r
    );
  },
  V = 'hidden';
function $(n) {
  var r = d(A(!1), 2),
    e = r[0],
    o = r[1];
  return (
    t(
      function () {
        var t = (n = n || document.body).style,
          r = t.paddingRight,
          o = t.overflow,
          i = n.getBoundingClientRect();
        return (
          e &&
            ((n.style.width = ''.concat(i.width, 'px')),
            (n.style.overflowY = V)),
          function () {
            n && ((n.style.overflow = o), (n.style.width = r));
          }
        );
      },
      [e, n],
    ),
    [o, e]
  );
}
var K = function (n) {
  t(function () {
    n();
  }, []);
};
function Q() {
  var r = n(!1);
  return (
    t(function () {
      return (
        (r.current = !0),
        function () {
          r.current = !1;
        }
      );
    }, []),
    P(function () {
      return r.current;
    })
  );
}
function X(t) {
  var n = d(e(t), 2),
    o = n[0],
    i = n[1],
    u = P(function () {
      i(t);
    }),
    c = r(
      function () {
        return !S(o, t);
      },
      [o, t],
    ),
    l = P(function (t) {
      i(function (n) {
        var r = O(t, n);
        return a(a({}, n), r);
      });
    });
  return [o, l, { setAll: i, reset: u, isEdited: c }];
}
function Z(t) {
  var r = n(),
    e = n();
  return (r.current = e.current), (e.current = t), r.current;
}
var tt = function () {
  var t = d(e({}), 2)[1];
  return P(function () {
    t({});
  });
};
var nt = function t(n, r) {
    var e = new Proxy(n, {
      get: function (n, e, o) {
        var i = Reflect.get(n, e, o);
        return (function (t) {
          return 'object' === f(t) && null !== t;
        })(i)
          ? t(i, r)
          : Reflect.get(n, e);
      },
      set: function (t, n, e) {
        var o = Reflect.set(t, n, e);
        return r(t), o;
      },
      deleteProperty: function (t, n) {
        var e = Reflect.deleteProperty(t, n);
        return r(e), e;
      },
    });
    return e;
  },
  rt = function (t) {
    return 'function' != typeof t;
  },
  et = function (t) {
    return rt(t) ? t : t();
  },
  ot = function (t) {
    var n = tt();
    return r(function () {
      return nt(et(t), function () {
        n();
      });
    }, []);
  };
function it(n, r) {
  t(
    function () {
      var t = N(n);
      if (t) {
        var e = new ResizeObserver(function (t) {
          t.forEach(function (t) {
            r(t);
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
function ut(r) {
  var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'left',
    o = n(0),
    i = P(function (t) {
      if (t)
        if (0 < o.current) o.current -= 1;
        else {
          var n = r.filter(function (n) {
            return n.current !== t.target;
          });
          if (((o.current = n.length), 'left' === e || 'both' === e)) {
            var i,
              u = t.target.scrollLeft,
              c = g(n);
            try {
              for (c.s(); !(i = c.n()).done; ) {
                i.value.current.scrollLeft = u;
              }
            } catch (t) {
              c.e(t);
            } finally {
              c.f();
            }
          }
          if ('top' === e || 'both' === e) {
            var a,
              l = t.target.scrollTop,
              f = g(n);
            try {
              for (f.s(); !(a = f.n()).done; ) {
                var s = a.value;
                s.current && (s.current.scrollTop = l);
              }
            } catch (t) {
              f.e(t);
            } finally {
              f.f();
            }
          }
        }
    });
  t(function () {
    var t,
      n = g(r);
    try {
      for (n.s(); !(t = n.n()).done; ) {
        var e,
          o,
          u = t.value;
        if (u.current)
          null === (e = u.current) ||
            void 0 === e ||
            null === (o = e.addEventListener) ||
            void 0 === o ||
            o.call(e, 'scroll', i);
      }
    } catch (t) {
      n.e(t);
    } finally {
      n.f();
    }
    return function () {
      var t,
        n = g(r);
      try {
        for (n.s(); !(t = n.n()).done; ) {
          var e,
            o,
            u = t.value;
          if (u.current)
            null === (e = u.current) ||
              void 0 === e ||
              null === (o = e.removeEventListener) ||
              void 0 === o ||
              o.call(e, 'scroll', i);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    };
  }, []);
}
function ct(r) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    i = n(),
    u = e(!1),
    c = d(u, 2),
    a = c[0],
    l = c[1],
    f = P(function () {
      for (var t = arguments.length, n = Array(t), e = 0; t > e; e++)
        n[e] = arguments[e];
      clearTimeout(i.current),
        null != o &&
          (l(!0),
          (i.current = setTimeout(function () {
            r.apply(void 0, n), l(!1);
          }, o)));
    });
  t(function () {
    return function () {
      clearTimeout(i.current);
    };
  }, []);
  var s = P(function () {
    clearTimeout(i.current), l(!1);
  });
  return { waiting: a, run: f, cancel: s };
}
function at(t, n) {
  var r = d(e(!1), 2),
    i = r[0],
    u = r[1],
    c = Z(n);
  o(function () {
    i ? t(n, c) : u(!0);
  }, n);
}
var lt = function (t, n) {
  var o = d(
      e(function () {
        var n = null !== t ? t : location.search;
        return new URLSearchParams(n);
      }),
      2,
    ),
    i = o[0],
    u = o[1],
    c = r(
      function () {
        return {
          set: function (t, n) {
            u(function (r) {
              var e = new URLSearchParams(r),
                o = r.get(t),
                i = O(n, null != o ? o : '');
              return void 0 === i ? e.delete(t) : e.set(t, i), e;
            });
          },
          clear: function () {
            u(new URLSearchParams());
          },
        };
      },
      [i, u],
    );
  return (
    at(
      function () {
        var t = ''.concat(n, 'State'),
          r = '' + i;
        r
          ? history[t](null, '', '?' + r)
          : history[t]({}, document.title, window.location.pathname);
      },
      [i],
    ),
    [i, c]
  );
};
function ft(t) {
  var n = d(
      e(function () {
        return (function (t) {
          if (t) {
            var n =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
              r =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
              e = t.getBoundingClientRect();
            return (
              !!e && e.bottom > 0 && r >= e.top && n >= e.left && e.right > 0
            );
          }
        })(N(t));
      }),
      2,
    ),
    r = n[0],
    o = n[1];
  return (
    Y(t, function (t) {
      o(t.isIntersecting);
    }),
    r
  );
}
var st = ['click'],
  vt = function (n, r) {
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : st,
      o = P(function (t) {
        var e = N(n);
        e && !e.contains(t.target) && r(t);
      });
    t(
      function () {
        var t,
          n = g(e);
        try {
          for (n.s(); !(t = n.n()).done; ) {
            R(document, t.value, o);
          }
        } catch (t) {
          n.e(t);
        } finally {
          n.f();
        }
        return function () {
          var t,
            n = g(e);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              H(document, t.value, o);
            }
          } catch (t) {
            n.e(t);
          } finally {
            n.f();
          }
        };
      },
      [n, e],
    );
  };
function ht(t, n, r) {
  var o =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : sessionStorage,
    i = function (t) {
      return (null == r ? void 0 : r.serializer)
        ? null == r
          ? void 0
          : r.serializer(t)
        : JSON.stringify(t);
    },
    u = function (t) {
      return (null == r ? void 0 : r.deserializer)
        ? null == r
          ? void 0
          : r.deserializer(t)
        : JSON.parse(t);
    },
    c = P(function () {
      try {
        var r = o.getItem(t);
        if (null !== r) return u(r);
      } catch (t) {
        console.error(t);
      }
      return n;
    }),
    a = e(function () {
      return c();
    }),
    l = d(a, 2),
    f = l[0],
    s = l[1],
    v = P(function (n) {
      try {
        var r = O(n, f);
        s(r), void 0 === r ? o.removeItem(t) : o.setItem(t, i(r));
      } catch (t) {
        console.error(t);
      }
    });
  return [f, v];
}
function dt(t, n, r) {
  return ht(t, n, r, localStorage);
}
function pt(t, n, r) {
  return ht(t, n, r);
}
function yt() {
  var n,
    r =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : document.title,
    o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = e(r),
    u = d(i, 2),
    c = u[0],
    a = u[1],
    l = e(document.title),
    f = d(l, 1),
    s = f[0];
  return (
    t(
      function () {
        console.log(c), (document.title = c);
      },
      [c],
    ),
    K(function () {
      a(r);
    }),
    B(
      null === (n = document.head) || void 0 === n
        ? void 0
        : n.querySelector('title'),
      function () {
        a(document.title);
      },
      { childList: !0 },
    ),
    w(function () {
      o && (document.title = s);
    }),
    [c, a]
  );
}
var mt = function (t, n) {
    var r = n || {},
      e = r.onEnter,
      o = r.onLeave,
      i = d(A(!1), 2),
      u = i[0],
      c = i[1];
    return (
      G(t, 'mouseenter', function () {
        null == e || e(), c();
      }),
      G(t, 'mouseleave', function () {
        null == o || o(), c();
      }),
      u
    );
  },
  gt = function () {
    var t = d(e({ x: !1, y: !1 }), 2),
      n = t[0],
      r = t[1];
    return (
      G(window, 'resize', function () {
        r({
          x: document.body.scrollHeight > window.innerHeight,
          y: document.body.scrollWidth > window.innerWidth,
        });
      }),
      n
    );
  };
function wt() {
  return bt.apply(this, arguments);
}
function bt() {
  return (bt = v(
    l().mark(function t() {
      var n;
      return l().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = !1),
                  (t.prev = 1),
                  (t.next = 4),
                  navigator.permissions.query({ name: 'clipboard-read' })
                );
              case 4:
                if ('denied' !== t.sent.state) {
                  t.next = 7;
                  break;
                }
                throw Error('Not allowed to read clipboard.');
              case 7:
                return t.abrupt('return', !0);
              case 10:
                (t.prev = 10),
                  (t.t0 = t.catch(1)),
                  console.error(Error(t.t0 + '').message);
              case 13:
                return t.abrupt('return', n);
              case 14:
              case 'end':
                return t.stop();
            }
        },
        t,
        null,
        [[1, 10]],
      );
    }),
  )).apply(this, arguments);
}
var xt = (function () {
  var t = v(
    l().mark(function t() {
      return l().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (t.next = 2), wt();
            case 2:
              if (!t.sent) {
                t.next = 7;
                break;
              }
              return (t.next = 5), navigator.clipboard.readText();
            case 5:
              return t.abrupt('return', t.sent);
            case 7:
              return t.abrupt('return', '');
            case 8:
            case 'end':
              return t.stop();
          }
      }, t);
    }),
  );
  return function () {
    return t.apply(this, arguments);
  };
})();
function Ot() {
  var t = d(e(''), 2),
    n = t[0],
    r = t[1],
    o = P(
      v(
        l().mark(function t() {
          return l().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.t0 = r), (t.next = 3), xt();
                case 3:
                  (t.t1 = t.sent), (0, t.t0)(t.t1);
                case 5:
                case 'end':
                  return t.stop();
              }
          }, t);
        }),
      ),
    );
  K(function () {
    o();
  }),
    G(
      document,
      'copy',
      v(
        l().mark(function t() {
          return l().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  o();
                case 1:
                case 'end':
                  return t.stop();
              }
          }, t);
        }),
      ),
    ),
    G(
      document,
      'cut',
      v(
        l().mark(function t() {
          return l().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  o();
                case 1:
                case 'end':
                  return t.stop();
              }
          }, t);
        }),
      ),
    );
  var i = P(function (t) {
    wt().then(function () {
      navigator.clipboard.writeText(O(t, n)).then(function () {
        r(t);
      });
    });
  });
  return [n, i];
}
export {
  rt as isValue,
  et as setState,
  T as useArray,
  A as useBoolean,
  I as useClick,
  vt as useClickAway,
  Ot as useClipboardText,
  b as useDebounceFn,
  D as useDynamicList,
  J as useElementIsScroll,
  G as useEventListener,
  C as useHash,
  mt as useHover,
  Y as useIntersectionObserver,
  q as useIntervalFn,
  dt as useLocalStorage,
  $ as useLockScroll,
  K as useMount,
  Q as useMountedState,
  B as useMutationObserver,
  F as useNumber,
  X as useObject,
  P as usePersistFn,
  Z as usePrevious,
  j as usePromise,
  ot as useReactive,
  it as useResizeObserver,
  M as useScroll,
  pt as useSessionStorage,
  W as useSize,
  ut as useSyncScroll,
  x as useThrottleFn,
  ct as useTimeoutFn,
  yt as useTitle,
  k as useToggle,
  w as useUnmount,
  tt as useUpdate,
  at as useUpdateEffect,
  lt as useUrlState,
  ft as useVisible,
  gt as useWindowIsScroll,
};
