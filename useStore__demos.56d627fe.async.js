(self.webpackChunkwwhooks=self.webpackChunkwwhooks||[]).push([[3063],{49570:function(a,i,e){"use strict";e.r(i);var _=e(58315),l=e.n(_),s=e(25675),c=e.n(s),u=e(58757),n=e(35667),h=(0,u.createContext)(null),f={theme:"dark"},v=function(t,r){switch(r.type){case"changeTheme":return c()(c()({},t),{},{theme:r.value});default:return t}};function C(){var y=(0,u.useReducer)(v,f),t=l()(y,2),r=t[0],d=t[1];return console.log(h),(0,n.jsxs)(h.Provider,{value:{state:r,dispatch:d},children:[(0,n.jsx)("h1",{children:"Hello ".concat(r.theme,"!")}),(0,n.jsx)("input",{defaultValue:r.theme,onChange:function(O){return d({type:"changeTheme",value:O.target.value})}}),(0,n.jsx)(o,{})]})}function o(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Component 2"}),(0,n.jsx)(p,{})]})}function p(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Component 3"}),(0,n.jsx)(g,{})]})}function g(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Component 4"}),(0,n.jsx)(k,{})]})}function k(){var y=(0,u.useContext)(h),t=y.state,r=y.dispatch;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Component 5"}),(0,n.jsx)("input",{defaultValue:t.theme,onChange:function(m){return r({type:"changeTheme",value:m.target.value})}}),(0,n.jsx)("h2",{children:"Hello ".concat(t.theme," again!")})]})}i.default=C},1294:function(a,i,e){"use strict";e.r(i),e.d(i,{default:function(){return H}});var _=e(58315),l=e.n(_),s=e(58757),c=e(25675),u=e.n(c),n=e(74580),h=e.n(n),f=e(54586),v=e(48643),C=e(35319),o=e(35667);function p(b){var x=(0,s.createContext)(null),E=s.memo(function(I){var j=I.children,M=I.initialState,S=b(M),w=s.useRef({value:S,listeners:new Set}).current;return w.value=S,(0,s.useEffect)(function(){var A=h()(w.listeners),T;try{for(A.s();!(T=A.n()).done;){var D=T.value;D(S)}}catch(U){A.e(U)}finally{A.f()}}),(0,o.jsx)(x.Provider,{value:w,children:typeof j=="function"?j(w.value):j})}),P=function(j){var M=(0,C.Z)(),S=(0,s.useContext)(x),w=S.value,A=S.listeners,T=j(w),D=(0,v.Z)(function(U){for(var K in T)if(!(0,f.Xy)(T[K],U[K])){M();break}});return(0,s.useEffect)(function(){return A.add(D),function(){A.delete(D)}},[]),T},L=function(j){return P(function(M){return(0,f.ei)(M,j)})},Z=function(j,M){return function(S){var w=L(M);return(0,o.jsx)(j,u()({},u()(u()({},w),S)))}};return{Provider:E,useStore:P,usePicker:L,withPicker:Z}}var g=p,k=null,y={theme:"dark"};function t(){var b=(0,s.useState)(y),x=l()(b,2),E=x[0],P=x[1];return{store:E,setStore:P}}var r=g(t),d=r.Provider,m=r.useStore;function O(){return(0,o.jsx)(d,{children:(0,o.jsx)(R,{})})}function R(){return console.log("Component2 render"),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Component 2"}),(0,o.jsx)(W,{})]})}function W(){var b=m(function(E){return E}),x=b.store;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Component 3"}),x.theme,(0,o.jsx)(F,{})]})}function F(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Component 4"}),(0,o.jsx)(B,{})]})}function B(){var b=m(function(P){return P}),x=b.store,E=b.setStore;return console.log(x),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Component 5"}),x.theme,(0,o.jsx)("button",{type:"button",onClick:function(){return E({theme:"red"})},children:"red"}),(0,o.jsx)("button",{type:"button",onClick:function(){return E({theme:"yellow"})},children:"yellow"})]})}var H=O},54586:function(a,i,e){"use strict";e.d(i,{Xy:function(){return o},ei:function(){return y},hK:function(){return n},hj:function(){return v}});var _=e(68500),l=e.n(_),s=e(47496),c=e.n(s),u=function(r){return typeof r!="function"},n=function(r,d){return u(r)?r:r(d)};function h(t){return t?"".concat(t,"px"):""}function f(t){return t?parseInt(t.slice(0,-2),10):0}function v(t){return typeof t=="number"}function C(t){return Object.prototype.toString.call(t)==="[object Object]"}function o(t,r){if(!C(t)||!C(r))return t===r;if(t===r)return!0;var d=Object.keys(t).length,m=Object.keys(r).length;if(d!==m)return!1;for(var O in t)if(Object.prototype.hasOwnProperty.call(t,O)){var R=o(t[O],r[O]);if(!R)return!1}return!0}var p=function(r){return Object.prototype.toString.call(r).replace(/^.{8}(.+)]$/,function(d,m){return m.toLowerCase()})},g=function(r,d){return parseInt(String(Math.random()*(d-r+1)+r),10)},k=function(r){return u(r)?r:r()};function y(t,r){var d={};return t?Object.assign.apply(Object,[d].concat(c()(r.map(function(m){return l()({},m,t[m])})))):d}},48643:function(a,i,e){"use strict";e.d(i,{t:function(){return l}});var _=e(58757),l=function(c){var u=(0,_.useRef)();u.current=(0,_.useMemo)(function(){return c},[c]);var n=(0,_.useRef)(function(h){var f;return u==null||(f=u.current)===null||f===void 0?void 0:f.call(u,h)});return n.current};i.Z=l},35319:function(a,i,e){"use strict";e.d(i,{P:function(){return u}});var _=e(58315),l=e.n(_),s=e(58757),c=e(48643),u=function(){var h=(0,s.useState)({}),f=l()(h,2),v=f[1];return(0,c.Z)(function(){v({})})};i.Z=u},90073:function(a,i,e){var _=e(86396);function l(s){if(Array.isArray(s))return _(s)}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports},74580:function(a,i,e){var _=e(93770);function l(s,c){var u=typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(!u){if(Array.isArray(s)||(u=_(s))||c&&s&&typeof s.length=="number"){u&&(s=u);var n=0,h=function(){};return{s:h,n:function(){return n>=s.length?{done:!0}:{done:!1,value:s[n++]}},e:function(p){throw p},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f=!0,v=!1,C;return{s:function(){u=u.call(s)},n:function(){var p=u.next();return f=p.done,p},e:function(p){v=!0,C=p},f:function(){try{!f&&u.return!=null&&u.return()}finally{if(v)throw C}}}}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports},75499:function(a){function i(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}a.exports=i,a.exports.__esModule=!0,a.exports.default=a.exports},69922:function(a){function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a.exports=i,a.exports.__esModule=!0,a.exports.default=a.exports},47496:function(a,i,e){var _=e(90073),l=e(75499),s=e(93770),c=e(69922);function u(n){return _(n)||l(n)||s(n)||c()}a.exports=u,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
