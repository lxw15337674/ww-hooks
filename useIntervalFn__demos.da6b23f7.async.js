"use strict";(self.webpackChunkwwhooks=self.webpackChunkwwhooks||[]).push([[2105],{60146:function(v,e,n){n.r(e);var u=n(45332),o=n.n(u),s=n(58757),t=n(47537),_=n(35667);e.default=function(){var l=(0,s.useState)(0),a=o()(l,2),r=a[0],d=a[1],c=(0,t.Z)(function(){d(function(i){return++i})},100),f=c.start,m=c.clear,E=c.looping;return(0,_.jsxs)("div",{children:[(0,_.jsxs)("p",{children:["count : ",r]}),(0,_.jsxs)("p",{children:["looping:",JSON.stringify(E)]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("button",{type:"button",onClick:function(){return f()},children:"start"}),(0,_.jsx)("button",{type:"button",onClick:function(){return m()},children:"clear"})]})]})}},47537:function(v,e,n){n.d(e,{b:function(){return l}});var u=n(45332),o=n.n(u),s=n(58757),t=n(97995),_=n(60178);function l(a,r){var d=(0,s.useRef)(null),c=(0,s.useState)(!1),f=o()(c,2),m=f[0],E=f[1],i=(0,t.Z)(function(){a(),d.current=setTimeout(i,r)}),h=(0,t.Z)(function(){clearTimeout(d.current),E(!1)}),P=(0,t.Z)(function(){m||(setTimeout(i,r),E(!0))});return(0,_.Z)(function(){h()}),{start:P,clear:h,looping:m}}e.Z=l},97995:function(v,e,n){n.d(e,{t:function(){return o}});var u=n(58757),o=function(t){var _=(0,u.useRef)();_.current=(0,u.useMemo)(function(){return t},[t]);var l=(0,u.useRef)(function(a){var r;return _==null||(r=_.current)===null||r===void 0?void 0:r.call(_,a)});return l.current};e.Z=o},60178:function(v,e,n){n.d(e,{k:function(){return o}});var u=n(58757),o=function(t){(0,u.useEffect)(function(){return t},[])};e.Z=o}}]);
