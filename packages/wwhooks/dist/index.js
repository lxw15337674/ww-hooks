'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var t = require('react'),
  e = require('lodash');
function n(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function r(t) {
  for (var e = 1; arguments.length > e; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? n(Object(r), !0).forEach(function (e) {
          a(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : n(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function o() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  o = function () {
    return t;
  };
  var t = {},
    e = Object.prototype,
    n = e.hasOwnProperty,
    r = 'function' == typeof Symbol ? Symbol : {},
    u = r.iterator || '@@iterator',
    i = r.asyncIterator || '@@asyncIterator',
    c = r.toStringTag || '@@toStringTag';
  function a(t, e, n) {
    return (
      Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    a({}, '');
  } catch (t) {
    a = function (t, e, n) {
      return (t[e] = n);
    };
  }
  function f(t, e, n, r) {
    var o = Object.create((e && e.prototype instanceof v ? e : v).prototype),
      u = new O(r || []);
    return (
      (o._invoke = (function (t, e, n) {
        var r = 'suspendedStart';
        return function (o, u) {
          if ('executing' === r) throw Error('Generator is already running');
          if ('completed' === r) {
            if ('throw' === o) throw u;
            return j();
          }
          for (n.method = o, n.arg = u; ; ) {
            var i = n.delegate;
            if (i) {
              var c = x(i, n);
              if (c) {
                if (c === l) continue;
                return c;
              }
            }
            if ('next' === n.method) n.sent = n._sent = n.arg;
            else if ('throw' === n.method) {
              if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
              n.dispatchException(n.arg);
            } else 'return' === n.method && n.abrupt('return', n.arg);
            r = 'executing';
            var a = s(t, e, n);
            if ('normal' === a.type) {
              if (((r = n.done ? 'completed' : 'suspendedYield'), a.arg === l))
                continue;
              return { value: a.arg, done: n.done };
            }
            'throw' === a.type &&
              ((r = 'completed'), (n.method = 'throw'), (n.arg = a.arg));
          }
        };
      })(t, n, u)),
      o
    );
  }
  function s(t, e, n) {
    try {
      return { type: 'normal', arg: t.call(e, n) };
    } catch (t) {
      return { type: 'throw', arg: t };
    }
  }
  t.wrap = f;
  var l = {};
  function v() {}
  function d() {}
  function h() {}
  var p = {};
  a(p, u, function () {
    return this;
  });
  var y = Object.getPrototypeOf,
    m = y && y(y(L([])));
  m && m !== e && n.call(m, u) && (p = m);
  var g = (h.prototype = v.prototype = Object.create(p));
  function b(t) {
    ['next', 'throw', 'return'].forEach(function (e) {
      a(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function w(t, e) {
    function r(o, u, i, c) {
      var a = s(t[o], t, u);
      if ('throw' !== a.type) {
        var f = a.arg,
          l = f.value;
        return l && 'object' == typeof l && n.call(l, '__await')
          ? e.resolve(l.__await).then(
              function (t) {
                r('next', t, i, c);
              },
              function (t) {
                r('throw', t, i, c);
              },
            )
          : e.resolve(l).then(
              function (t) {
                (f.value = t), i(f);
              },
              function (t) {
                return r('throw', t, i, c);
              },
            );
      }
      c(a.arg);
    }
    var o;
    this._invoke = function (t, n) {
      function u() {
        return new e(function (e, o) {
          r(t, n, e, o);
        });
      }
      return (o = o ? o.then(u, u) : u());
    };
  }
  function x(t, e) {
    var n = t.iterator[e.method];
    if (void 0 === n) {
      if (((e.delegate = null), 'throw' === e.method)) {
        if (
          t.iterator.return &&
          ((e.method = 'return'),
          (e.arg = void 0),
          x(t, e),
          'throw' === e.method)
        )
          return l;
        (e.method = 'throw'),
          (e.arg = new TypeError(
            "The iterator does not provide a 'throw' method",
          ));
      }
      return l;
    }
    var r = s(n, t.iterator, e.arg);
    if ('throw' === r.type)
      return (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), l;
    var o = r.arg;
    return o
      ? o.done
        ? ((e[t.resultName] = o.value),
          (e.next = t.nextLoc),
          'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)),
          (e.delegate = null),
          l)
        : o
      : ((e.method = 'throw'),
        (e.arg = new TypeError('iterator result is not an object')),
        (e.delegate = null),
        l);
  }
  function S(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function E(t) {
    var e = t.completion || {};
    (e.type = 'normal'), delete e.arg, (t.completion = e);
  }
  function O(t) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      t.forEach(S, this),
      this.reset(!0);
  }
  function L(t) {
    if (t) {
      var e = t[u];
      if (e) return e.call(t);
      if ('function' == typeof t.next) return t;
      if (!isNaN(t.length)) {
        var r = -1,
          o = function e() {
            for (; ++r < t.length; )
              if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
            return (e.value = void 0), (e.done = !0), e;
          };
        return (o.next = o);
      }
    }
    return { next: j };
  }
  function j() {
    return { value: void 0, done: !0 };
  }
  return (
    (d.prototype = h),
    a(g, 'constructor', h),
    a(h, 'constructor', d),
    (d.displayName = a(h, c, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor;
      return (
        !!e && (e === d || 'GeneratorFunction' === (e.displayName || e.name))
      );
    }),
    (t.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, h)
          : ((t.__proto__ = h), a(t, c, 'GeneratorFunction')),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (t.awrap = function (t) {
      return { __await: t };
    }),
    b(w.prototype),
    a(w.prototype, i, function () {
      return this;
    }),
    (t.AsyncIterator = w),
    (t.async = function (e, n, r, o, u) {
      void 0 === u && (u = Promise);
      var i = new w(f(e, n, r, o), u);
      return t.isGeneratorFunction(n)
        ? i
        : i.next().then(function (t) {
            return t.done ? t.value : i.next();
          });
    }),
    b(g),
    a(g, c, 'Generator'),
    a(g, u, function () {
      return this;
    }),
    a(g, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (t) {
      var e = [];
      for (var n in t) e.push(n);
      return (
        e.reverse(),
        function n() {
          for (; e.length; ) {
            var r = e.pop();
            if (r in t) return (n.value = r), (n.done = !1), n;
          }
          return (n.done = !0), n;
        }
      );
    }),
    (t.values = L),
    (O.prototype = {
      constructor: O,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = void 0),
          this.tryEntries.forEach(E),
          !t)
        )
          for (var e in this)
            't' === e.charAt(0) &&
              n.call(this, e) &&
              !isNaN(+e.slice(1)) &&
              (this[e] = void 0);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var e = this;
        function r(n, r) {
          return (
            (i.type = 'throw'),
            (i.arg = t),
            (e.next = n),
            r && ((e.method = 'next'), (e.arg = void 0)),
            !!r
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var u = this.tryEntries[o],
            i = u.completion;
          if ('root' === u.tryLoc) return r('end');
          if (this.prev >= u.tryLoc) {
            var c = n.call(u, 'catchLoc'),
              a = n.call(u, 'finallyLoc');
            if (c && a) {
              if (u.catchLoc > this.prev) return r(u.catchLoc, !0);
              if (u.finallyLoc > this.prev) return r(u.finallyLoc);
            } else if (c) {
              if (u.catchLoc > this.prev) return r(u.catchLoc, !0);
            } else {
              if (!a) throw Error('try statement without catch or finally');
              if (u.finallyLoc > this.prev) return r(u.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            this.prev >= o.tryLoc &&
            n.call(o, 'finallyLoc') &&
            o.finallyLoc > this.prev
          ) {
            var u = o;
            break;
          }
        }
        u &&
          ('break' === t || 'continue' === t) &&
          e >= u.tryLoc &&
          u.finallyLoc >= e &&
          (u = null);
        var i = u ? u.completion : {};
        return (
          (i.type = t),
          (i.arg = e),
          u
            ? ((this.method = 'next'), (this.next = u.finallyLoc), l)
            : this.complete(i)
        );
      },
      complete: function (t, e) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : 'normal' === t.type && e && (this.next = e),
          l
        );
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.finallyLoc === t)
            return this.complete(n.completion, n.afterLoc), E(n), l;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.tryLoc === t) {
            var r = n.completion;
            if ('throw' === r.type) {
              var o = r.arg;
              E(n);
            }
            return o;
          }
        }
        throw Error('illegal catch attempt');
      },
      delegateYield: function (t, e, n) {
        return (
          (this.delegate = { iterator: L(t), resultName: e, nextLoc: n }),
          'next' === this.method && (this.arg = void 0),
          l
        );
      },
    }),
    t
  );
}
function u(t) {
  return (
    (u =
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
    u(t)
  );
}
function i(t, e, n, r, o, u, i) {
  try {
    var c = t[u](i),
      a = c.value;
  } catch (t) {
    return void n(t);
  }
  c.done ? e(a) : Promise.resolve(a).then(r, o);
}
function c(t) {
  return function () {
    var e = this,
      n = arguments;
    return new Promise(function (r, o) {
      var u = t.apply(e, n);
      function c(t) {
        i(u, r, o, c, a, 'next', t);
      }
      function a(t) {
        i(u, r, o, c, a, 'throw', t);
      }
      c(void 0);
    });
  };
}
function a(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function f(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var n =
        null == t
          ? null
          : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
      if (null == n) return;
      var r,
        o,
        u = [],
        i = !0,
        c = !1;
      try {
        for (
          n = n.call(t);
          !(i = (r = n.next()).done) && (u.push(r.value), !e || u.length !== e);
          i = !0
        );
      } catch (t) {
        (c = !0), (o = t);
      } finally {
        try {
          i || null == n.return || n.return();
        } finally {
          if (c) throw o;
        }
      }
      return u;
    })(t, e) ||
    l(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function s(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return v(t);
    })(t) ||
    (function (t) {
      if (
        ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
        null != t['@@iterator']
      )
        return Array.from(t);
    })(t) ||
    l(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function l(t, e) {
  if (t) {
    if ('string' == typeof t) return v(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === n && t.constructor && (n = t.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(t)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? v(t, e)
        : void 0
    );
  }
}
function v(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); e > n; n++) r[n] = t[n];
  return r;
}
function d(t, e) {
  var n =
    ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (!n) {
    if (
      Array.isArray(t) ||
      (n = l(t)) ||
      (e && t && 'number' == typeof t.length)
    ) {
      n && (t = n);
      var r = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return t.length > r ? { done: !1, value: t[r++] } : { done: !0 };
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
  var u,
    i = !0,
    c = !1;
  return {
    s: function () {
      n = n.call(t);
    },
    n: function () {
      var t = n.next();
      return (i = t.done), t;
    },
    e: function (t) {
      (c = !0), (u = t);
    },
    f: function () {
      try {
        i || null == n.return || n.return();
      } finally {
        if (c) throw u;
      }
    },
  };
}
var h = function (e) {
  t.useEffect(function () {
    return e;
  }, []);
};
function p(n, r, o) {
  var u = t.useRef(n);
  u.current = n;
  var i = t.useMemo(
    function () {
      return e.debounce(u.current, null != r ? r : 1e3, o);
    },
    [r, u, o],
  );
  return (
    h(function () {
      i.cancel();
    }),
    { run: i, cancel: i.cancel, flush: i.flush }
  );
}
function y(n, r, o) {
  var u = t.useRef(n);
  u.current = n;
  var i = t.useMemo(
    function () {
      return e.throttle(u.current, null != r ? r : 1e3, o);
    },
    [r, u, o],
  );
  return (
    h(function () {
      i.cancel();
    }),
    { run: i, cancel: i.cancel, flush: i.flush }
  );
}
var m = function (t, e) {
  return 'function' != typeof t ? t : t(e);
};
function g(t) {
  return 'number' == typeof t;
}
function b(t) {
  return '[object Object]' === Object.prototype.toString.call(t);
}
function w(t, e) {
  if (!b(t) || !b(e)) return t === e;
  if (t === e) return !0;
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (var n in t) {
    if (Object.prototype.hasOwnProperty.call(t, n))
      if (!w(t[n], e[n])) return !1;
  }
  return !0;
}
var x = function (e) {
  var n = t.useRef();
  return (
    (n.current = t.useMemo(
      function () {
        return e;
      },
      [e],
    )),
    t.useRef(function (t) {
      var e;
      return null == n || null === (e = n.current) || void 0 === e
        ? void 0
        : e.call(n, t);
    }).current
  );
};
function S(e, n) {
  var r = f(t.useState(e), 2),
    o = r[1];
  return [
    r[0],
    x(function (t) {
      o(
        void 0 !== t
          ? t
          : function (t) {
              return t === e ? n : e;
            },
      );
    }),
  ];
}
function E() {
  var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    e = S(t, !t);
  return e;
}
function O(t, e) {
  if ((isNaN(t) && (t = 0), 0 === e.length)) return 0;
  for (var n, r, o, u = 0, i = e.length - 1; i >= u; ) {
    if (((o = e[(n = Math.floor((u + i) / 2))]), 0 === n && e[0] >= t))
      return 0;
    if ((r = e[n - 1] || 0) > t) i = n - 1;
    else {
      if (r === t) return n - 1;
      if (t >= r && o >= t) return n;
      t > o && (u = n + 1);
    }
  }
  return e.length;
}
function L(t, e) {
  return t
    ? 'function' == typeof t
      ? t()
      : 'current' in t
      ? t.current
      : t
    : e;
}
function j(t) {
  if (t && t.addEventListener) {
    for (
      var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
      e > r;
      r++
    )
      n[r - 1] = arguments[r];
    t.addEventListener.apply(t, n);
  }
}
function P(t) {
  if (t && t.removeEventListener) {
    for (
      var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
      e > r;
      r++
    )
      n[r - 1] = arguments[r];
    t.removeEventListener.apply(t, n);
  }
}
function T(e, n, r) {
  var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    u = t.useRef();
  (u.current = r),
    t.useEffect(
      function () {
        var t = L(e, window);
        if (null == t ? void 0 : t.addEventListener) {
          var r = function (t) {
            return u.current && u.current(t);
          };
          return (
            t.addEventListener(n, r, {
              capture: o.capture,
              once: o.once,
              passive: o.passive,
            }),
            function () {
              t.removeEventListener(n, r, { capture: o.capture });
            }
          );
        }
      },
      [n, o],
    );
}
function R(e) {
  var n = f(t.useState({ left: 0, top: 0 }), 2),
    r = n[0],
    o = n[1];
  return (
    T(e, 'scroll', function (t) {
      var e = t.target;
      o({ left: e.scrollLeft, top: e.scrollTop });
    }),
    r
  );
}
function M(e) {
  var n = f(t.useState({ width: 0, height: 0 }), 2),
    r = n[0],
    o = n[1];
  return (
    q(e, function (t) {
      o({ width: t.target.offsetWidth, height: t.target.offsetHeight });
    }),
    r
  );
}
function k(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = e.min,
    r = e.max,
    o = t;
  return (
    'number' == typeof r && (o = Math.min(r, o)),
    'number' == typeof n && (o = Math.max(n, o)),
    o
  );
}
var I = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      n = arguments.length > 1 ? arguments[1] : void 0,
      r = t.useState(k(e, n)),
      o = f(r, 2),
      u = o[0],
      i = o[1],
      c = x(function (t) {
        var e = 'number' == typeof t ? t : t(u);
        i(k(e, n));
      }),
      a = x(function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        c(function (e) {
          return e + t;
        });
      }),
      s = x(function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        c(function (e) {
          return e - t;
        });
      }),
      l = x(function () {
        c(e);
      });
    return [u, { set: c, reset: l, plus: a, minus: s }];
  },
  A = function (t) {
    window.location.replace('#' + encodeURIComponent(t));
  };
function _(e, n, r) {
  t.useEffect(
    function () {
      var t = L(e);
      if (t) {
        var o = new IntersectionObserver(function (t) {
          var e,
            r = d(t);
          try {
            for (r.s(); !(e = r.n()).done; ) {
              n(e.value);
            }
          } catch (t) {
            r.e(t);
          } finally {
            r.f();
          }
        }, r);
        return (
          o.observe(t),
          function () {
            o.disconnect();
          }
        );
      }
    },
    [e],
  );
}
function N(e, n) {
  var r =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributeOldValue: !0,
          },
    o = t.useState(!0),
    u = f(o, 2),
    i = u[0],
    c = u[1],
    a = t.useRef();
  return (
    t.useEffect(
      function () {
        if (i) {
          var t = L(e);
          if (!t) return;
          (a.current = new MutationObserver(n)), a.current.observe(t, r);
        } else {
          var o;
          null === (o = a.current) || void 0 === o || o.disconnect(),
            (a.current = void 0);
        }
        return function () {
          var t;
          null === (t = a.current) || void 0 === t || t.disconnect(),
            (a.current = void 0);
        };
      },
      [i],
    ),
    [i, c]
  );
}
var H = 'hidden';
var F = function (e) {
  t.useEffect(function () {
    e();
  }, []);
};
function D() {
  var e = t.useRef(!1);
  return (
    t.useEffect(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1;
        }
      );
    }, []),
    x(function () {
      return e.current;
    })
  );
}
function U(e) {
  var n = t.useRef(),
    r = t.useRef();
  return (n.current = r.current), (r.current = e), n.current;
}
var W = function () {
  var e = f(t.useState({}), 2)[1];
  return x(function () {
    e({});
  });
};
var z = function t(e, n) {
    var r = new Proxy(e, {
      get: function (e, r, o) {
        var i = Reflect.get(e, r, o);
        return (function (t) {
          return 'object' === u(t) && null !== t;
        })(i)
          ? t(i, n)
          : Reflect.get(e, r);
      },
      set: function (t, e, r) {
        var o = Reflect.set(t, e, r);
        return n(t), o;
      },
      deleteProperty: function (t, e) {
        var r = Reflect.deleteProperty(t, e);
        return n(r), r;
      },
    });
    return r;
  },
  G = function (t) {
    return 'function' != typeof t;
  },
  C = function (t) {
    return G(t) ? t : t();
  };
function q(e, n) {
  t.useEffect(
    function () {
      var t = L(e);
      if (t) {
        var r = new ResizeObserver(function (t) {
          t.forEach(function (t) {
            n(t);
          });
        });
        return (
          r.observe(t),
          function () {
            r.disconnect();
          }
        );
      }
    },
    [e],
  );
}
function Y(e) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    r = t.useRef(),
    o = t.useState(!1),
    u = f(o, 2),
    i = u[0],
    c = u[1],
    a = x(function () {
      for (var t = arguments.length, o = Array(t), u = 0; t > u; u++)
        o[u] = arguments[u];
      clearTimeout(r.current),
        null != n &&
          (c(!0),
          (r.current = setTimeout(function () {
            e.apply(void 0, o), c(!1);
          }, n)));
    });
  t.useEffect(function () {
    return function () {
      clearTimeout(r.current);
    };
  }, []);
  var s = x(function () {
    clearTimeout(r.current), c(!1);
  });
  return { waiting: i, run: a, cancel: s };
}
function B(e, n) {
  var r = f(t.useState(!1), 2),
    o = r[0],
    u = r[1],
    i = U(n);
  t.useLayoutEffect(function () {
    o ? e(n, i) : u(!0);
  }, n);
}
var V = ['click'];
function J(e, n, r) {
  var o =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : sessionStorage,
    u = function (t) {
      return (null == r ? void 0 : r.serializer)
        ? null == r
          ? void 0
          : r.serializer(t)
        : JSON.stringify(t);
    },
    i = function (t) {
      return (null == r ? void 0 : r.deserializer)
        ? null == r
          ? void 0
          : r.deserializer(t)
        : JSON.parse(t);
    },
    c = x(function () {
      try {
        var t = o.getItem(e);
        if (null !== t) return i(t);
      } catch (t) {
        console.error(t);
      }
      return n;
    }),
    a = t.useState(function () {
      return c();
    }),
    s = f(a, 2),
    l = s[0],
    v = s[1],
    d = x(function (t) {
      try {
        var n = m(t, l);
        v(n), void 0 === n ? o.removeItem(e) : o.setItem(e, u(n));
      } catch (t) {
        console.error(t);
      }
    });
  return [l, d];
}
function $() {
  return K.apply(this, arguments);
}
function K() {
  return (K = c(
    o().mark(function t() {
      var e;
      return o().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (e = !1),
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
                return t.abrupt('return', e);
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
var Q = (function () {
  var t = c(
    o().mark(function t() {
      return o().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (t.next = 2), $();
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
(exports.isValue = G),
  (exports.setState = C),
  (exports.useArray = function (e) {
    var n = f(t.useState(e), 2),
      o = n[0],
      u = n[1],
      i = t.useMemo(
        function () {
          return !w(e, o);
        },
        [e, o],
      ),
      c = t.useMemo(
        function () {
          return {
            set: function (t, e) {
              u(function (n) {
                var r = s(n);
                return (r[t] = m(e, r[t])), r;
              });
            },
            setAll: u,
            remove: function (t) {
              u(function (e) {
                var n = s(e);
                return n.splice(t, 1), n;
              });
            },
            push: function (t) {
              u(function (e) {
                var n = s(e);
                return n.push(t), n;
              });
            },
            clear: function () {
              u([]);
            },
            reset: function () {
              u(e);
            },
          };
        },
        [e],
      ),
      a = x(function (t, e) {
        var n = o.length - 1;
        (t > n || e > n) && console.error('交换位置超出最大位置');
        var r = s(o),
          i = [r[e], r[t]];
        (r[t] = i[0]), (r[e] = i[1]), u(r);
      }),
      l = x(function (t, e) {
        var n = o.length - 1;
        (t > n || e > n) && console.error('交换位置超出最大位置');
        var r = s(o),
          i = f(r.splice(t, 1), 1);
        return r.splice(e, 0, i[0]), u(r), r;
      });
    return [
      o,
      r(r({ isEdited: i, swap: a, reorder: l }, c), {}, { setAll: u }),
    ];
  }),
  (exports.useBoolean = E),
  (exports.useClick = function () {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : function (t) {},
      n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : function (t) {},
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      u = I(0),
      i = f(u, 2),
      c = i[0],
      a = i[1],
      s = t.useMemo(
        function () {
          return r(r({}, { delay: 250, exclusive: !1 }), o);
        },
        [o],
      ),
      l = s.delay,
      v = s.exclusive,
      d = Y(function () {
        a.reset();
      }, l),
      h = d.run,
      p = x(function (t) {
        0 === c && (null == e || e(t), h()),
          1 === c && (v || null == e || e(t), null == n || n(t)),
          a.plus(1);
      });
    return p;
  }),
  (exports.useClickAway = function (e, n) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : V,
      o = x(function (t) {
        var r = L(e);
        r && !r.contains(t.target) && n(t);
      });
    t.useEffect(
      function () {
        var t,
          e = d(r);
        try {
          for (e.s(); !(t = e.n()).done; ) {
            j(document, t.value, o);
          }
        } catch (t) {
          e.e(t);
        } finally {
          e.f();
        }
        return function () {
          var t,
            e = d(r);
          try {
            for (e.s(); !(t = e.n()).done; ) {
              P(document, t.value, o);
            }
          } catch (t) {
            e.e(t);
          } finally {
            e.f();
          }
        };
      },
      [e, r],
    );
  }),
  (exports.useClipboardText = function () {
    var e = f(t.useState(''), 2),
      n = e[0],
      r = e[1],
      u = x(
        c(
          o().mark(function t() {
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.t0 = r), (t.next = 3), Q();
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
    F(function () {
      u();
    }),
      T(
        document,
        'copy',
        c(
          o().mark(function t() {
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    u();
                  case 1:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        ),
      ),
      T(
        document,
        'cut',
        c(
          o().mark(function t() {
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    u();
                  case 1:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        ),
      );
    var i = x(function (t) {
      $().then(function () {
        navigator.clipboard.writeText(m(t, n)).then(function () {
          r(t);
        });
      });
    });
    return [n, i];
  }),
  (exports.useDebounceFn = p),
  (exports.useDynamicList = function (e, n) {
    var r = n.containerRef,
      o = n.itemHeight,
      u = n.overscan,
      i = void 0 === u ? 3 : u,
      c = M(r).height,
      a = R(r).top,
      l = f(t.useState({ start: 0, end: 0 }), 2),
      v = l[0],
      d = l[1],
      h = f(t.useState({ upOffset: 0, downOffset: 0 }), 2),
      p = h[0],
      y = h[1],
      m = f(t.useState([]), 2),
      g = m[0],
      b = m[1],
      w = t.useMemo(
        function () {
          return (null != e ? e : []).map(function (t, e) {
            return o(t, e);
          });
        },
        [o, e],
      ),
      S = t.useMemo(
        function () {
          return w.reduce(
            function (t, e) {
              return t.push(t[t.length - 1] + e), t;
            },
            [0],
          );
        },
        [w],
      ),
      E = t.useMemo(
        function () {
          return S[v.start];
        },
        [S, v.start],
      ),
      L = x(function () {
        if (a > Math.max(p.downOffset - c, 0) || p.upOffset >= a) {
          var t = (function (t, e, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 5,
              o = O(t, n) - r,
              u = O(e + t, n) + r;
            return {
              start: (o = Math.max(0, o)),
              end: (u = Math.min(u, n.length)),
            };
          })(a, c, S, i);
          d(t),
            y(
              (function (t, e) {
                var n = t.start,
                  r = t.end,
                  o = 0;
                return (
                  n - 1 > 0 && (o = e[n - 1]),
                  {
                    upOffset: o,
                    downOffset: e.length > r + 1 ? e[r] : e[e.length - 1],
                  }
                );
              })(t, S),
            );
        }
      });
    t.useEffect(
      function () {
        L();
      },
      [a, c],
    ),
      t.useEffect(
        function () {
          var t,
            n = e.slice(v.start, v.end).map(function (t, e) {
              return { data: t, index: e + v.start };
            }),
            r =
              null !== (t = null == g ? void 0 : g.length) && void 0 !== t
                ? t
                : 0 - (null == n ? void 0 : n.length),
            o = n.map(function (t, e) {
              return { data: t.data, index: t.index, id: e, style: {} };
            }),
            u = [];
          r > 0 &&
            (u = g.slice(n.length, g.length).map(function (t, e) {
              return {
                data: t.data,
                id: e + n.length,
                index: -1,
                style: { transform: 'translateY(-99999px)' },
              };
            })),
            b([].concat(s(o), s(u)));
        },
        [e, v],
      );
    var j = t.useMemo(
        function () {
          return (
            w.reduce(function (t, e) {
              return t + e;
            }, 0) - E
          );
        },
        [w, E],
      ),
      P = x(function (t) {
        var e = r.current;
        e && (e.scrollTop = S[t]);
      });
    return { list: g, wrapperStyle: { marginTop: E, height: j }, scrollTo: P };
  }),
  (exports.useElementIsScroll = function (e) {
    var n = f(t.useState({ x: !1, y: !1 }), 2),
      r = n[0],
      o = n[1];
    return (
      N(e, function () {
        var t = L(e);
        t &&
          o({
            x: t.scrollWidth !== t.clientWidth,
            y: t.scrollHeight !== t.clientHeight,
          });
      }),
      r
    );
  }),
  (exports.useEventListener = T),
  (exports.useHash = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      n = t.useState(function () {
        var t = window.location.hash.substring(1);
        return '' === t ? (A(e), e) : t;
      }),
      r = f(n, 2),
      o = r[0],
      u = r[1];
    t.useEffect(
      function () {
        null == o
          ? history.pushState(
              '',
              document.title,
              window.location.pathname + window.location.search,
            )
          : A(o);
      },
      [o],
    );
    var i = x(function () {
      u(e);
    });
    return [o, u, i];
  }),
  (exports.useHover = function (t, e) {
    var n = e || {},
      r = n.onEnter,
      o = n.onLeave,
      u = f(E(!1), 2),
      i = u[0],
      c = u[1];
    return (
      T(t, 'mouseenter', function () {
        null == r || r(), c();
      }),
      T(t, 'mouseleave', function () {
        null == o || o(), c();
      }),
      i
    );
  }),
  (exports.useIntersectionObserver = _),
  (exports.useIntervalFn = function (e, n) {
    var r = t.useRef(null),
      o = f(t.useState(!1), 2),
      u = o[0],
      i = o[1],
      c = x(function () {
        e(), (r.current = setTimeout(c, n));
      }),
      a = x(function () {
        clearTimeout(r.current), i(!1);
      }),
      s = x(function () {
        u || (setTimeout(c, n), i(!0));
      });
    return (
      h(function () {
        a();
      }),
      { start: s, clear: a, looping: u }
    );
  }),
  (exports.useLocalStorage = function (t, e, n) {
    return J(t, e, n, localStorage);
  }),
  (exports.useLockScroll = function (e) {
    var n = f(E(!1), 2),
      r = n[0],
      o = n[1];
    return (
      t.useEffect(
        function () {
          var t = (e = e || document.body).style,
            n = t.paddingRight,
            o = t.overflow,
            u = e.getBoundingClientRect();
          return (
            r &&
              ((e.style.width = ''.concat(u.width, 'px')),
              (e.style.overflowY = H)),
            function () {
              e && ((e.style.overflow = o), (e.style.width = n));
            }
          );
        },
        [r, e],
      ),
      [o, r]
    );
  }),
  (exports.useMount = F),
  (exports.useMountedState = D),
  (exports.useMutationObserver = N),
  (exports.useNumber = I),
  (exports.useObject = function (e) {
    var n = f(t.useState(e), 2),
      o = n[0],
      u = n[1],
      i = x(function () {
        u(e);
      }),
      c = t.useMemo(
        function () {
          return !w(o, e);
        },
        [o, e],
      ),
      a = x(function (t) {
        u(function (e) {
          var n = m(t, e);
          return r(r({}, e), n);
        });
      });
    return [o, a, { setAll: u, reset: i, isEdited: c }];
  }),
  (exports.usePersistFn = x),
  (exports.usePrevious = U),
  (exports.usePromise = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = n.debounceInterval,
      o = void 0 === r ? void 0 : r,
      u = n.manual,
      i = void 0 === u || u,
      c = n.onSuccess,
      a = void 0 === c ? function () {} : c,
      s = n.onError,
      l = void 0 === s ? function () {} : s,
      v = n.initialData,
      d = void 0 === v ? void 0 : v,
      m = n.throttleInterval,
      b = void 0 === m ? void 0 : m,
      w = n.loadingDelay,
      S = void 0 === w ? 300 : w,
      E = D(),
      O = t.useState(d),
      L = f(O, 2),
      j = L[0],
      P = L[1],
      T = t.useState(),
      R = f(T, 2),
      M = R[0],
      k = R[1],
      I = t.useState('success'),
      A = f(I, 2),
      _ = A[0],
      N = A[1],
      H = Y(function () {
        N('loading');
      }, S),
      U = x(function () {
        return (
          H.run(),
          k(void 0),
          e()
            .then(function (t) {
              return E() && P(t), null == a || a(t), N('success'), t;
            })
            .catch(function (t) {
              return (
                E() && k(t), null == l || l(t), N('error'), Promise.reject(t)
              );
            })
            .finally(function () {
              H.cancel();
            })
        );
      }),
      W = p(U, o),
      z = y(U, b),
      G = x(function () {
        return g(o)
          ? (W.run(), Promise.resolve())
          : g(b)
          ? (z.run(), Promise.resolve())
          : U();
      }),
      C = x(function () {
        null == W || W.cancel(), null == z || z.cancel();
      }),
      q = t.useMemo(
        function () {
          return (null == W ? void 0 : W.flush)
            ? W.flush
            : (null == z ? void 0 : z.flush)
            ? z.flush
            : function () {
                return Promise.resolve(null);
              };
        },
        [W, z],
      );
    return (
      F(function () {
        !1 === i && G();
      }),
      h(function () {
        C();
      }),
      {
        data: j,
        error: M,
        isLoading: 'loading' === _,
        isError: 'error' === _,
        isSuccess: 'success' === _,
        status: _,
        run: G,
        cancel: C,
        mutate: P,
        flush: q,
      }
    );
  }),
  (exports.useReactive = function (e) {
    var n = W();
    return t.useMemo(function () {
      return z(C(e), function () {
        n();
      });
    }, []);
  }),
  (exports.useResizeObserver = q),
  (exports.useScroll = R),
  (exports.useSessionStorage = function (t, e, n) {
    return J(t, e, n);
  }),
  (exports.useSize = M),
  (exports.useSyncScroll = function (e) {
    var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'left',
      r = t.useRef(0),
      o = x(function (t) {
        if (t)
          if (0 < r.current) r.current -= 1;
          else {
            var o = e.filter(function (e) {
              return e.current !== t.target;
            });
            if (((r.current = o.length), 'left' === n || 'both' === n)) {
              var u,
                i = t.target.scrollLeft,
                c = d(o);
              try {
                for (c.s(); !(u = c.n()).done; ) {
                  u.value.current.scrollLeft = i;
                }
              } catch (t) {
                c.e(t);
              } finally {
                c.f();
              }
            }
            if ('top' === n || 'both' === n) {
              var a,
                f = t.target.scrollTop,
                s = d(o);
              try {
                for (s.s(); !(a = s.n()).done; ) {
                  var l = a.value;
                  l.current && (l.current.scrollTop = f);
                }
              } catch (t) {
                s.e(t);
              } finally {
                s.f();
              }
            }
          }
      });
    t.useEffect(function () {
      var t,
        n = d(e);
      try {
        for (n.s(); !(t = n.n()).done; ) {
          var r,
            u,
            i = t.value;
          if (i.current)
            null === (r = i.current) ||
              void 0 === r ||
              null === (u = r.addEventListener) ||
              void 0 === u ||
              u.call(r, 'scroll', o);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
      return function () {
        var t,
          n = d(e);
        try {
          for (n.s(); !(t = n.n()).done; ) {
            var r,
              u,
              i = t.value;
            if (i.current)
              null === (r = i.current) ||
                void 0 === r ||
                null === (u = r.removeEventListener) ||
                void 0 === u ||
                u.call(r, 'scroll', o);
          }
        } catch (t) {
          n.e(t);
        } finally {
          n.f();
        }
      };
    }, []);
  }),
  (exports.useThrottleFn = y),
  (exports.useTimeoutFn = Y),
  (exports.useTitle = function () {
    var e,
      n =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : document.title,
      r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      o = t.useState(n),
      u = f(o, 2),
      i = u[0],
      c = u[1],
      a = t.useState(document.title),
      s = f(a, 1),
      l = s[0];
    return (
      t.useEffect(
        function () {
          console.log(i), (document.title = i);
        },
        [i],
      ),
      F(function () {
        c(n);
      }),
      N(
        null === (e = document.head) || void 0 === e
          ? void 0
          : e.querySelector('title'),
        function () {
          c(document.title);
        },
        { childList: !0 },
      ),
      h(function () {
        r && (document.title = l);
      }),
      [i, c]
    );
  }),
  (exports.useToggle = S),
  (exports.useUnmount = h),
  (exports.useUpdate = W),
  (exports.useUpdateEffect = B),
  (exports.useUrlState = function (e, n) {
    var r = f(
        t.useState(function () {
          var t = null !== e ? e : location.search;
          return new URLSearchParams(t);
        }),
        2,
      ),
      o = r[0],
      u = r[1],
      i = t.useMemo(
        function () {
          return {
            set: function (t, e) {
              u(function (n) {
                var r = new URLSearchParams(n),
                  o = n.get(t),
                  u = m(e, null != o ? o : '');
                return void 0 === u ? r.delete(t) : r.set(t, u), r;
              });
            },
            clear: function () {
              u(new URLSearchParams());
            },
          };
        },
        [o, u],
      );
    return (
      B(
        function () {
          var t = ''.concat(n, 'State'),
            e = '' + o;
          e
            ? history[t](null, '', '?' + e)
            : history[t]({}, document.title, window.location.pathname);
        },
        [o],
      ),
      [o, i]
    );
  }),
  (exports.useVisible = function (e) {
    var n = f(
        t.useState(function () {
          return (function (t) {
            if (t) {
              var e =
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth,
                n =
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  document.body.clientHeight,
                r = t.getBoundingClientRect();
              return (
                !!r && r.bottom > 0 && n >= r.top && e >= r.left && r.right > 0
              );
            }
          })(L(e));
        }),
        2,
      ),
      r = n[0],
      o = n[1];
    return (
      _(e, function (t) {
        o(t.isIntersecting);
      }),
      r
    );
  }),
  (exports.useWindowIsScroll = function () {
    var e = f(t.useState({ x: !1, y: !1 }), 2),
      n = e[0],
      r = e[1];
    return (
      T(window, 'resize', function () {
        r({
          x: document.body.scrollHeight > window.innerHeight,
          y: document.body.scrollWidth > window.innerWidth,
        });
      }),
      n
    );
  });
