(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();var Vf={exports:{}},Na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function JT(){if(D_)return Na;D_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:s,type:a,key:d,ref:o!==void 0?o:null,props:u}}return Na.Fragment=e,Na.jsx=i,Na.jsxs=i,Na}var k_;function ew(){return k_||(k_=1,Vf.exports=JT()),Vf.exports}var j=ew(),jf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function tw(){if(L_)return se;L_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function v(E){return E===null||typeof E!="object"?null:(E=b&&E[b]||E["@@iterator"],typeof E=="function"?E:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,q={};function K(E,U,V){this.props=E,this.context=U,this.refs=q,this.updater=V||I}K.prototype.isReactComponent={},K.prototype.setState=function(E,U){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,U,"setState")},K.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function re(){}re.prototype=K.prototype;function be(E,U,V){this.props=E,this.context=U,this.refs=q,this.updater=V||I}var ge=be.prototype=new re;ge.constructor=be,x(ge,K.prototype),ge.isPureReactComponent=!0;var Oe=Array.isArray,ie={H:null,A:null,T:null,S:null,V:null},xe=Object.prototype.hasOwnProperty;function Pe(E,U,V,P,G,de){return V=de.ref,{$$typeof:s,type:E,key:U,ref:V!==void 0?V:null,props:de}}function X(E,U){return Pe(E.type,U,void 0,void 0,void 0,E.props)}function ae(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function Fe(E){var U={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(V){return U[V]})}var Ze=/\/+/g;function Ve(E,U){return typeof E=="object"&&E!==null&&E.key!=null?Fe(""+E.key):U.toString(36)}function un(){}function $t(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(un,un):(E.status="pending",E.then(function(U){E.status==="pending"&&(E.status="fulfilled",E.value=U)},function(U){E.status==="pending"&&(E.status="rejected",E.reason=U)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Be(E,U,V,P,G){var de=typeof E;(de==="undefined"||de==="boolean")&&(E=null);var te=!1;if(E===null)te=!0;else switch(de){case"bigint":case"string":case"number":te=!0;break;case"object":switch(E.$$typeof){case s:case e:te=!0;break;case y:return te=E._init,Be(te(E._payload),U,V,P,G)}}if(te)return G=G(E),te=P===""?"."+Ve(E,0):P,Oe(G)?(V="",te!=null&&(V=te.replace(Ze,"$&/")+"/"),Be(G,U,V,"",function(Ot){return Ot})):G!=null&&(ae(G)&&(G=X(G,V+(G.key==null||E&&E.key===G.key?"":(""+G.key).replace(Ze,"$&/")+"/")+te)),U.push(G)),1;te=0;var ye=P===""?".":P+":";if(Oe(E))for(var Me=0;Me<E.length;Me++)P=E[Me],de=ye+Ve(P,Me),te+=Be(P,U,V,de,G);else if(Me=v(E),typeof Me=="function")for(E=Me.call(E),Me=0;!(P=E.next()).done;)P=P.value,de=ye+Ve(P,Me++),te+=Be(P,U,V,de,G);else if(de==="object"){if(typeof E.then=="function")return Be($t(E),U,V,P,G);throw U=String(E),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return te}function O(E,U,V){if(E==null)return E;var P=[],G=0;return Be(E,P,"","",function(de){return U.call(V,de,G++)}),P}function B(E){if(E._status===-1){var U=E._result;U=U(),U.then(function(V){(E._status===0||E._status===-1)&&(E._status=1,E._result=V)},function(V){(E._status===0||E._status===-1)&&(E._status=2,E._result=V)}),E._status===-1&&(E._status=0,E._result=U)}if(E._status===1)return E._result.default;throw E._result}var z=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function Te(){}return se.Children={map:O,forEach:function(E,U,V){O(E,function(){U.apply(this,arguments)},V)},count:function(E){var U=0;return O(E,function(){U++}),U},toArray:function(E){return O(E,function(U){return U})||[]},only:function(E){if(!ae(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},se.Component=K,se.Fragment=i,se.Profiler=o,se.PureComponent=be,se.StrictMode=a,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,se.__COMPILER_RUNTIME={__proto__:null,c:function(E){return ie.H.useMemoCache(E)}},se.cache=function(E){return function(){return E.apply(null,arguments)}},se.cloneElement=function(E,U,V){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var P=x({},E.props),G=E.key,de=void 0;if(U!=null)for(te in U.ref!==void 0&&(de=void 0),U.key!==void 0&&(G=""+U.key),U)!xe.call(U,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&U.ref===void 0||(P[te]=U[te]);var te=arguments.length-2;if(te===1)P.children=V;else if(1<te){for(var ye=Array(te),Me=0;Me<te;Me++)ye[Me]=arguments[Me+2];P.children=ye}return Pe(E.type,G,void 0,void 0,de,P)},se.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:u,_context:E},E},se.createElement=function(E,U,V){var P,G={},de=null;if(U!=null)for(P in U.key!==void 0&&(de=""+U.key),U)xe.call(U,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(G[P]=U[P]);var te=arguments.length-2;if(te===1)G.children=V;else if(1<te){for(var ye=Array(te),Me=0;Me<te;Me++)ye[Me]=arguments[Me+2];G.children=ye}if(E&&E.defaultProps)for(P in te=E.defaultProps,te)G[P]===void 0&&(G[P]=te[P]);return Pe(E,de,void 0,void 0,null,G)},se.createRef=function(){return{current:null}},se.forwardRef=function(E){return{$$typeof:h,render:E}},se.isValidElement=ae,se.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:B}},se.memo=function(E,U){return{$$typeof:m,type:E,compare:U===void 0?null:U}},se.startTransition=function(E){var U=ie.T,V={};ie.T=V;try{var P=E(),G=ie.S;G!==null&&G(V,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(Te,z)}catch(de){z(de)}finally{ie.T=U}},se.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},se.use=function(E){return ie.H.use(E)},se.useActionState=function(E,U,V){return ie.H.useActionState(E,U,V)},se.useCallback=function(E,U){return ie.H.useCallback(E,U)},se.useContext=function(E){return ie.H.useContext(E)},se.useDebugValue=function(){},se.useDeferredValue=function(E,U){return ie.H.useDeferredValue(E,U)},se.useEffect=function(E,U,V){var P=ie.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return P.useEffect(E,U)},se.useId=function(){return ie.H.useId()},se.useImperativeHandle=function(E,U,V){return ie.H.useImperativeHandle(E,U,V)},se.useInsertionEffect=function(E,U){return ie.H.useInsertionEffect(E,U)},se.useLayoutEffect=function(E,U){return ie.H.useLayoutEffect(E,U)},se.useMemo=function(E,U){return ie.H.useMemo(E,U)},se.useOptimistic=function(E,U){return ie.H.useOptimistic(E,U)},se.useReducer=function(E,U,V){return ie.H.useReducer(E,U,V)},se.useRef=function(E){return ie.H.useRef(E)},se.useState=function(E){return ie.H.useState(E)},se.useSyncExternalStore=function(E,U,V){return ie.H.useSyncExternalStore(E,U,V)},se.useTransition=function(){return ie.H.useTransition()},se.version="19.1.1",se}var U_;function qd(){return U_||(U_=1,jf.exports=tw()),jf.exports}var L=qd(),Gf={exports:{}},Ia={},Yf={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function nw(){return z_||(z_=1,(function(s){function e(O,B){var z=O.length;O.push(B);e:for(;0<z;){var Te=z-1>>>1,E=O[Te];if(0<o(E,B))O[Te]=B,O[z]=E,z=Te;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var B=O[0],z=O.pop();if(z!==B){O[0]=z;e:for(var Te=0,E=O.length,U=E>>>1;Te<U;){var V=2*(Te+1)-1,P=O[V],G=V+1,de=O[G];if(0>o(P,z))G<E&&0>o(de,P)?(O[Te]=de,O[G]=z,Te=G):(O[Te]=P,O[V]=z,Te=V);else if(G<E&&0>o(de,z))O[Te]=de,O[G]=z,Te=G;else break e}}return B}function o(O,B){var z=O.sortIndex-B.sortIndex;return z!==0?z:O.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],y=1,b=null,v=3,I=!1,x=!1,q=!1,K=!1,re=typeof setTimeout=="function"?setTimeout:null,be=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;function Oe(O){for(var B=i(m);B!==null;){if(B.callback===null)a(m);else if(B.startTime<=O)a(m),B.sortIndex=B.expirationTime,e(p,B);else break;B=i(m)}}function ie(O){if(q=!1,Oe(O),!x)if(i(p)!==null)x=!0,xe||(xe=!0,Ve());else{var B=i(m);B!==null&&Be(ie,B.startTime-O)}}var xe=!1,Pe=-1,X=5,ae=-1;function Fe(){return K?!0:!(s.unstable_now()-ae<X)}function Ze(){if(K=!1,xe){var O=s.unstable_now();ae=O;var B=!0;try{e:{x=!1,q&&(q=!1,be(Pe),Pe=-1),I=!0;var z=v;try{t:{for(Oe(O),b=i(p);b!==null&&!(b.expirationTime>O&&Fe());){var Te=b.callback;if(typeof Te=="function"){b.callback=null,v=b.priorityLevel;var E=Te(b.expirationTime<=O);if(O=s.unstable_now(),typeof E=="function"){b.callback=E,Oe(O),B=!0;break t}b===i(p)&&a(p),Oe(O)}else a(p);b=i(p)}if(b!==null)B=!0;else{var U=i(m);U!==null&&Be(ie,U.startTime-O),B=!1}}break e}finally{b=null,v=z,I=!1}B=void 0}}finally{B?Ve():xe=!1}}}var Ve;if(typeof ge=="function")Ve=function(){ge(Ze)};else if(typeof MessageChannel<"u"){var un=new MessageChannel,$t=un.port2;un.port1.onmessage=Ze,Ve=function(){$t.postMessage(null)}}else Ve=function(){re(Ze,0)};function Be(O,B){Pe=re(function(){O(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(O){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var z=v;v=B;try{return O()}finally{v=z}},s.unstable_requestPaint=function(){K=!0},s.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=v;v=O;try{return B()}finally{v=z}},s.unstable_scheduleCallback=function(O,B,z){var Te=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Te+z:Te):z=Te,O){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=z+E,O={id:y++,callback:B,priorityLevel:O,startTime:z,expirationTime:E,sortIndex:-1},z>Te?(O.sortIndex=z,e(m,O),i(p)===null&&O===i(m)&&(q?(be(Pe),Pe=-1):q=!0,Be(ie,z-Te))):(O.sortIndex=E,e(p,O),x||I||(x=!0,xe||(xe=!0,Ve()))),O},s.unstable_shouldYield=Fe,s.unstable_wrapCallback=function(O){var B=v;return function(){var z=v;v=B;try{return O.apply(this,arguments)}finally{v=z}}}})(Ff)),Ff}var P_;function iw(){return P_||(P_=1,Yf.exports=nw()),Yf.exports}var Qf={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function sw(){if(H_)return mt;H_=1;var s=qd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:m,implementation:y}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,mt.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,y)},mt.flushSync=function(p){var m=d.T,y=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=m,a.p=y,a.d.f()}},mt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},mt.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},mt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,b=h(y,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,I=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:I}):y==="script"&&a.d.X(p,{crossOrigin:b,integrity:v,fetchPriority:I,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},mt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},mt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=h(y,m.crossOrigin);a.d.L(p,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},mt.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},mt.requestFormReset=function(p){a.d.r(p)},mt.unstable_batchedUpdates=function(p,m){return p(m)},mt.useFormState=function(p,m,y){return d.H.useFormState(p,m,y)},mt.useFormStatus=function(){return d.H.useHostTransitionStatus()},mt.version="19.1.1",mt}var B_;function _v(){if(B_)return Qf.exports;B_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Qf.exports=sw(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function rw(){if(q_)return Ia;q_=1;var s=iw(),e=qd(),i=_v();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(a(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,l=n;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){r=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return h(c),t;if(f===l)return h(c),n;f=f.sibling}throw Error(a(188))}if(r.return!==l.return)r=c,l=f;else{for(var g=!1,_=c.child;_;){if(_===r){g=!0,r=c,l=f;break}if(_===l){g=!0,l=c,r=f;break}_=_.sibling}if(!g){for(_=f.child;_;){if(_===r){g=!0,r=f,l=c;break}if(_===l){g=!0,l=f,r=c;break}_=_.sibling}if(!g)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),be=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Fe=Symbol.for("react.memo_cache_sentinel"),Ze=Symbol.iterator;function Ve(t){return t===null||typeof t!="object"?null:(t=Ze&&t[Ze]||t["@@iterator"],typeof t=="function"?t:null)}var un=Symbol.for("react.client.reference");function $t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===un?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case x:return"Fragment";case K:return"Profiler";case q:return"StrictMode";case ie:return"Suspense";case xe:return"SuspenseList";case ae:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case I:return"Portal";case ge:return(t.displayName||"Context")+".Provider";case be:return(t._context.displayName||"Context")+".Consumer";case Oe:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pe:return n=t.displayName||null,n!==null?n:$t(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return $t(t(n))}catch{}}return null}var Be=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},Te=[],E=-1;function U(t){return{current:t}}function V(t){0>E||(t.current=Te[E],Te[E]=null,E--)}function P(t,n){E++,Te[E]=t.current,t.current=n}var G=U(null),de=U(null),te=U(null),ye=U(null);function Me(t,n){switch(P(te,n),P(de,t),P(G,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?l_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=l_(n),t=o_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(G),P(G,t)}function Ot(){V(G),V(de),V(te)}function Kn(t){t.memoizedState!==null&&P(ye,t);var n=G.current,r=o_(n,t.type);n!==r&&(P(de,t),P(G,r))}function Wn(t){de.current===t&&(V(G),V(de)),ye.current===t&&(V(ye),Ta._currentValue=z)}var Zn=Object.prototype.hasOwnProperty,Nc=s.unstable_scheduleCallback,Ic=s.unstable_cancelCallback,xE=s.unstable_shouldYield,ME=s.unstable_requestPaint,fn=s.unstable_now,DE=s.unstable_getCurrentPriorityLevel,qh=s.unstable_ImmediatePriority,Vh=s.unstable_UserBlockingPriority,ol=s.unstable_NormalPriority,kE=s.unstable_LowPriority,jh=s.unstable_IdlePriority,LE=s.log,UE=s.unstable_setDisableYieldValue,xr=null,xt=null;function $n(t){if(typeof LE=="function"&&UE(t),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(xr,t)}catch{}}var Mt=Math.clz32?Math.clz32:HE,zE=Math.log,PE=Math.LN2;function HE(t){return t>>>=0,t===0?32:31-(zE(t)/PE|0)|0}var cl=256,ul=4194304;function zi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fl(t,n,r){var l=t.pendingLanes;if(l===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var _=l&134217727;return _!==0?(l=_&~f,l!==0?c=zi(l):(g&=_,g!==0?c=zi(g):r||(r=_&~t,r!==0&&(c=zi(r))))):(_=l&~f,_!==0?c=zi(_):g!==0?c=zi(g):r||(r=l&~t,r!==0&&(c=zi(r)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:c}function Mr(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function BE(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gh(){var t=cl;return cl<<=1,(cl&4194048)===0&&(cl=256),t}function Yh(){var t=ul;return ul<<=1,(ul&62914560)===0&&(ul=4194304),t}function Oc(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Dr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qE(t,n,r,l,c,f){var g=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var _=t.entanglements,S=t.expirationTimes,A=t.hiddenUpdates;for(r=g&~r;0<r;){var M=31-Mt(r),k=1<<M;_[M]=0,S[M]=-1;var R=A[M];if(R!==null)for(A[M]=null,M=0;M<R.length;M++){var N=R[M];N!==null&&(N.lane&=-536870913)}r&=~k}l!==0&&Fh(t,l,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Fh(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Mt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|r&4194090}function Qh(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var l=31-Mt(r),c=1<<l;c&n|t[l]&n&&(t[l]|=n),r&=~c}}function xc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xh(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:R_(t.type))}function VE(t,n){var r=B.p;try{return B.p=t,n()}finally{B.p=r}}var Jn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Jn,bt="__reactProps$"+Jn,bs="__reactContainer$"+Jn,Dc="__reactEvents$"+Jn,jE="__reactListeners$"+Jn,GE="__reactHandles$"+Jn,Kh="__reactResources$"+Jn,kr="__reactMarker$"+Jn;function kc(t){delete t[ht],delete t[bt],delete t[Dc],delete t[jE],delete t[GE]}function Ss(t){var n=t[ht];if(n)return n;for(var r=t.parentNode;r;){if(n=r[bs]||r[ht]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=d_(t);t!==null;){if(r=t[ht])return r;t=d_(t)}return n}t=r,r=t.parentNode}return null}function Es(t){if(t=t[ht]||t[bs]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Lr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function Ts(t){var n=t[Kh];return n||(n=t[Kh]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(t){t[kr]=!0}var Wh=new Set,Zh={};function Pi(t,n){ws(t,n),ws(t+"Capture",n)}function ws(t,n){for(Zh[t]=n,t=0;t<n.length;t++)Wh.add(n[t])}var YE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$h={},Jh={};function FE(t){return Zn.call(Jh,t)?!0:Zn.call($h,t)?!1:YE.test(t)?Jh[t]=!0:($h[t]=!0,!1)}function dl(t,n,r){if(FE(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function hl(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function En(t,n,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+l)}}var Lc,ep;function Cs(t){if(Lc===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Lc=n&&n[1]||"",ep=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lc+t+ep}var Uc=!1;function zc(t,n){if(!t||Uc)return"";Uc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(N){var R=N}Reflect.construct(t,[],k)}else{try{k.call()}catch(N){R=N}t.call(k.prototype)}}else{try{throw Error()}catch(N){R=N}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),g=f[0],_=f[1];if(g&&_){var S=g.split(`
`),A=_.split(`
`);for(c=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;c<A.length&&!A[c].includes("DetermineComponentFrameRoot");)c++;if(l===S.length||c===A.length)for(l=S.length-1,c=A.length-1;1<=l&&0<=c&&S[l]!==A[c];)c--;for(;1<=l&&0<=c;l--,c--)if(S[l]!==A[c]){if(l!==1||c!==1)do if(l--,c--,0>c||S[l]!==A[c]){var M=`
`+S[l].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=l&&0<=c);break}}}finally{Uc=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Cs(r):""}function QE(t){switch(t.tag){case 26:case 27:case 5:return Cs(t.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 15:return zc(t.type,!1);case 11:return zc(t.type.render,!1);case 1:return zc(t.type,!0);case 31:return Cs("Activity");default:return""}}function tp(t){try{var n="";do n+=QE(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function np(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function XE(t){var n=np(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){l=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pl(t){t._valueTracker||(t._valueTracker=XE(t))}function ip(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return t&&(l=np(t)?t.checked?"true":"false":t.value),t=l,t!==r?(n.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var KE=/[\n"\\]/g;function Vt(t){return t.replace(KE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pc(t,n,r,l,c,f,g,_){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+qt(n)):t.value!==""+qt(n)&&(t.value=""+qt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Hc(t,g,qt(n)):r!=null?Hc(t,g,qt(r)):l!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.name=""+qt(_):t.removeAttribute("name")}function sp(t,n,r,l,c,f,g,_){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+qt(r):"",n=n!=null?""+qt(n):r,_||n===t.value||(t.value=n),t.defaultValue=n}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=_?t.checked:!!l,t.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function Hc(t,n,r){n==="number"&&ml(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function As(t,n,r,l){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&l&&(t[r].defaultSelected=!0)}else{for(r=""+qt(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function rp(t,n,r){if(n!=null&&(n=""+qt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+qt(r):""}function ap(t,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(Be(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=qt(n),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l)}function Rs(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var WE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lp(t,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,r):typeof r!="number"||r===0||WE.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function op(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in n)l=n[c],n.hasOwnProperty(c)&&r[c]!==l&&lp(t,c,l)}else for(var f in n)n.hasOwnProperty(f)&&lp(t,f,n[f])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ZE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$E=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(t){return $E.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var qc=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ns=null,Is=null;function cp(t){var n=Es(t);if(n&&(t=n.stateNode)){var r=t[bt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Pc(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==t&&l.form===t.form){var c=l[bt]||null;if(!c)throw Error(a(90));Pc(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===t.form&&ip(l)}break e;case"textarea":rp(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&As(t,!!r.multiple,n,!1)}}}var jc=!1;function up(t,n,r){if(jc)return t(n,r);jc=!0;try{var l=t(n);return l}finally{if(jc=!1,(Ns!==null||Is!==null)&&(to(),Ns&&(n=Ns,t=Is,Is=Ns=null,cp(n),t)))for(n=0;n<t.length;n++)cp(t[n])}}function Ur(t,n){var r=t.stateNode;if(r===null)return null;var l=r[bt]||null;if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(Tn)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Gc=!1}var ei=null,Yc=null,_l=null;function fp(){if(_l)return _l;var t,n=Yc,r=n.length,l,c="value"in ei?ei.value:ei.textContent,f=c.length;for(t=0;t<r&&n[t]===c[t];t++);var g=r-t;for(l=1;l<=g&&n[r-l]===c[f-l];l++);return _l=c.slice(t,1<l?1-l:void 0)}function yl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function dp(){return!1}function St(t){function n(r,l,c,f,g){this._reactName=r,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(r=t[_],this[_]=r?r(f):f[_]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:dp,this.isPropagationStopped=dp,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=St(Hi),Pr=y({},Hi,{view:0,detail:0}),JE=St(Pr),Fc,Qc,Hr,Sl=y({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hr&&(Hr&&t.type==="mousemove"?(Fc=t.screenX-Hr.screenX,Qc=t.screenY-Hr.screenY):Qc=Fc=0,Hr=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),hp=St(Sl),e0=y({},Sl,{dataTransfer:0}),t0=St(e0),n0=y({},Pr,{relatedTarget:0}),Xc=St(n0),i0=y({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=St(i0),r0=y({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a0=St(r0),l0=y({},Hi,{data:0}),pp=St(l0),o0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=u0[t])?!!n[t]:!1}function Kc(){return f0}var d0=y({},Pr,{key:function(t){if(t.key){var n=o0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h0=St(d0),p0=y({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=St(p0),m0=y({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),g0=St(m0),_0=y({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=St(_0),v0=y({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=St(v0),S0=y({},Hi,{newState:0,oldState:0}),E0=St(S0),T0=[9,13,27,32],Wc=Tn&&"CompositionEvent"in window,Br=null;Tn&&"documentMode"in document&&(Br=document.documentMode);var w0=Tn&&"TextEvent"in window&&!Br,gp=Tn&&(!Wc||Br&&8<Br&&11>=Br),_p=" ",yp=!1;function vp(t,n){switch(t){case"keyup":return T0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function C0(t,n){switch(t){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(yp=!0,_p);case"textInput":return t=n.data,t===_p&&yp?null:t;default:return null}}function A0(t,n){if(Os)return t==="compositionend"||!Wc&&vp(t,n)?(t=fp(),_l=Yc=ei=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!R0[t.type]:n==="textarea"}function Ep(t,n,r,l){Ns?Is?Is.push(l):Is=[l]:Ns=l,n=lo(n,"onChange"),0<n.length&&(r=new bl("onChange","change",null,r,l),t.push({event:r,listeners:n}))}var qr=null,Vr=null;function N0(t){n_(t,0)}function El(t){var n=Lr(t);if(ip(n))return t}function Tp(t,n){if(t==="change")return n}var wp=!1;if(Tn){var Zc;if(Tn){var $c="oninput"in document;if(!$c){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),$c=typeof Cp.oninput=="function"}Zc=$c}else Zc=!1;wp=Zc&&(!document.documentMode||9<document.documentMode)}function Ap(){qr&&(qr.detachEvent("onpropertychange",Rp),Vr=qr=null)}function Rp(t){if(t.propertyName==="value"&&El(Vr)){var n=[];Ep(n,Vr,t,Vc(t)),up(N0,n)}}function I0(t,n,r){t==="focusin"?(Ap(),qr=n,Vr=r,qr.attachEvent("onpropertychange",Rp)):t==="focusout"&&Ap()}function O0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(Vr)}function x0(t,n){if(t==="click")return El(n)}function M0(t,n){if(t==="input"||t==="change")return El(n)}function D0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Dt=typeof Object.is=="function"?Object.is:D0;function jr(t,n){if(Dt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var c=r[l];if(!Zn.call(n,c)||!Dt(t[c],n[c]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,n){var r=Np(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=n&&l>=n)return{node:r,offset:n-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Np(r)}}function Op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ml(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=ml(t.document)}return n}function Jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var k0=Tn&&"documentMode"in document&&11>=document.documentMode,xs=null,eu=null,Gr=null,tu=!1;function Mp(t,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;tu||xs==null||xs!==ml(l)||(l=xs,"selectionStart"in l&&Jc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gr&&jr(Gr,l)||(Gr=l,l=lo(eu,"onSelect"),0<l.length&&(n=new bl("onSelect","select",null,n,r),t.push({event:n,listeners:l}),n.target=xs)))}function Bi(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var Ms={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionrun:Bi("Transition","TransitionRun"),transitionstart:Bi("Transition","TransitionStart"),transitioncancel:Bi("Transition","TransitionCancel"),transitionend:Bi("Transition","TransitionEnd")},nu={},Dp={};Tn&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function qi(t){if(nu[t])return nu[t];if(!Ms[t])return t;var n=Ms[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Dp)return nu[t]=n[r];return t}var kp=qi("animationend"),Lp=qi("animationiteration"),Up=qi("animationstart"),L0=qi("transitionrun"),U0=qi("transitionstart"),z0=qi("transitioncancel"),zp=qi("transitionend"),Pp=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function Jt(t,n){Pp.set(t,n),Pi(n,[t])}var Hp=new WeakMap;function jt(t,n){if(typeof t=="object"&&t!==null){var r=Hp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:tp(n)},Hp.set(t,n),n)}return{value:t,source:n,stack:tp(n)}}var Gt=[],Ds=0,su=0;function Tl(){for(var t=Ds,n=su=Ds=0;n<t;){var r=Gt[n];Gt[n++]=null;var l=Gt[n];Gt[n++]=null;var c=Gt[n];Gt[n++]=null;var f=Gt[n];if(Gt[n++]=null,l!==null&&c!==null){var g=l.pending;g===null?c.next=c:(c.next=g.next,g.next=c),l.pending=c}f!==0&&Bp(r,c,f)}}function wl(t,n,r,l){Gt[Ds++]=t,Gt[Ds++]=n,Gt[Ds++]=r,Gt[Ds++]=l,su|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ru(t,n,r,l){return wl(t,n,r,l),Cl(t)}function ks(t,n){return wl(t,null,null,n),Cl(t)}function Bp(t,n,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var c=!1,f=t.return;f!==null;)f.childLanes|=r,l=f.alternate,l!==null&&(l.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Mt(r),t=f.hiddenUpdates,l=t[c],l===null?t[c]=[n]:l.push(n),n.lane=r|536870912),f):null}function Cl(t){if(50<ma)throw ma=0,df=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ls={};function P0(t,n,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,n,r,l){return new P0(t,n,r,l)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wn(t,n){var r=t.alternate;return r===null?(r=kt(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function qp(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,r,l,c,f){var g=0;if(l=t,typeof t=="function")au(t)&&(g=1);else if(typeof t=="string")g=BT(t,r,G.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ae:return t=kt(31,r,n,c),t.elementType=ae,t.lanes=f,t;case x:return Vi(r.children,c,f,n);case q:g=8,c|=24;break;case K:return t=kt(12,r,n,c|2),t.elementType=K,t.lanes=f,t;case ie:return t=kt(13,r,n,c),t.elementType=ie,t.lanes=f,t;case xe:return t=kt(19,r,n,c),t.elementType=xe,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case re:case ge:g=10;break e;case be:g=9;break e;case Oe:g=11;break e;case Pe:g=14;break e;case X:g=16,l=null;break e}g=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return n=kt(g,r,n,c),n.elementType=t,n.type=l,n.lanes=f,n}function Vi(t,n,r,l){return t=kt(7,t,l,n),t.lanes=r,t}function lu(t,n,r){return t=kt(6,t,null,n),t.lanes=r,t}function ou(t,n,r){return n=kt(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Us=[],zs=0,Rl=null,Nl=0,Yt=[],Ft=0,ji=null,Cn=1,An="";function Gi(t,n){Us[zs++]=Nl,Us[zs++]=Rl,Rl=t,Nl=n}function Vp(t,n,r){Yt[Ft++]=Cn,Yt[Ft++]=An,Yt[Ft++]=ji,ji=t;var l=Cn;t=An;var c=32-Mt(l)-1;l&=~(1<<c),r+=1;var f=32-Mt(n)+c;if(30<f){var g=c-c%5;f=(l&(1<<g)-1).toString(32),l>>=g,c-=g,Cn=1<<32-Mt(n)+c|r<<c|l,An=f+t}else Cn=1<<f|r<<c|l,An=t}function cu(t){t.return!==null&&(Gi(t,1),Vp(t,1,0))}function uu(t){for(;t===Rl;)Rl=Us[--zs],Us[zs]=null,Nl=Us[--zs],Us[zs]=null;for(;t===ji;)ji=Yt[--Ft],Yt[Ft]=null,An=Yt[--Ft],Yt[Ft]=null,Cn=Yt[--Ft],Yt[Ft]=null}var yt=null,je=null,Se=!1,Yi=null,dn=!1,fu=Error(a(519));function Fi(t){var n=Error(a(418,""));throw Qr(jt(n,t)),fu}function jp(t){var n=t.stateNode,r=t.type,l=t.memoizedProps;switch(n[ht]=t,n[bt]=l,r){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(r=0;r<_a.length;r++)pe(_a[r],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),sp(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pl(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),ap(n,l.value,l.defaultValue,l.children),pl(n)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||a_(n.textContent,r)?(l.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),l.onScroll!=null&&pe("scroll",n),l.onScrollEnd!=null&&pe("scrollend",n),l.onClick!=null&&(n.onclick=oo),n=!0):n=!1,n||Fi(t)}function Gp(t){for(yt=t.return;yt;)switch(yt.tag){case 5:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:yt=yt.return}}function Yr(t){if(t!==yt)return!1;if(!Se)return Gp(t),Se=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Nf(t.type,t.memoizedProps)),r=!r),r&&je&&Fi(t),Gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){je=tn(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}je=null}}else n===27?(n=je,gi(t.type)?(t=Mf,Mf=null,je=t):je=n):je=yt?tn(t.stateNode.nextSibling):null;return!0}function Fr(){je=yt=null,Se=!1}function Yp(){var t=Yi;return t!==null&&(wt===null?wt=t:wt.push.apply(wt,t),Yi=null),t}function Qr(t){Yi===null?Yi=[t]:Yi.push(t)}var du=U(null),Qi=null,Rn=null;function ti(t,n,r){P(du,n._currentValue),n._currentValue=r}function Nn(t){t._currentValue=du.current,V(du)}function hu(t,n,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===r)break;t=t.return}}function pu(t,n,r,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var _=f;f=c;for(var S=0;S<n.length;S++)if(_.context===n[S]){f.lanes|=r,_=f.alternate,_!==null&&(_.lanes|=r),hu(f.return,r,t),l||(g=null);break e}f=_.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(a(341));g.lanes|=r,f=g.alternate,f!==null&&(f.lanes|=r),hu(g,r,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Xr(t,n,r,l){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(a(387));if(g=g.memoizedProps,g!==null){var _=c.type;Dt(c.pendingProps.value,g.value)||(t!==null?t.push(_):t=[_])}}else if(c===ye.current){if(g=c.alternate,g===null)throw Error(a(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ta):t=[Ta])}c=c.return}t!==null&&pu(n,t,r,l),n.flags|=262144}function Il(t){for(t=t.firstContext;t!==null;){if(!Dt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xi(t){Qi=t,Rn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pt(t){return Fp(Qi,t)}function Ol(t,n){return Qi===null&&Xi(t),Fp(t,n)}function Fp(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Rn===null){if(t===null)throw Error(a(308));Rn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Rn=Rn.next=n;return r}var H0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},B0=s.unstable_scheduleCallback,q0=s.unstable_NormalPriority,$e={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new H0,data:new Map,refCount:0}}function Kr(t){t.refCount--,t.refCount===0&&B0(q0,function(){t.controller.abort()})}var Wr=null,gu=0,Ps=0,Hs=null;function V0(t,n){if(Wr===null){var r=Wr=[];gu=0,Ps=vf(),Hs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return gu++,n.then(Qp,Qp),n}function Qp(){if(--gu===0&&Wr!==null){Hs!==null&&(Hs.status="fulfilled");var t=Wr;Wr=null,Ps=0,Hs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function j0(t,n){var r=[],l={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(l.status="rejected",l.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),l}var Xp=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&V0(t,n),Xp!==null&&Xp(t,n)};var Ki=U(null);function _u(){var t=Ki.current;return t!==null?t:Le.pooledCache}function xl(t,n){n===null?P(Ki,Ki.current):P(Ki,n.pool)}function Kp(){var t=_u();return t===null?null:{parent:$e._currentValue,pool:t}}var Zr=Error(a(460)),Wp=Error(a(474)),Ml=Error(a(542)),yu={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Dl(){}function $p(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Dl,Dl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t;default:if(typeof n.status=="string")n.then(Dl,Dl);else{if(t=Le,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=l}},function(l){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t}throw $r=n,Zr}}var $r=null;function Jp(){if($r===null)throw Error(a(459));var t=$r;return $r=null,t}function em(t){if(t===Zr||t===Ml)throw Error(a(483))}var ni=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ii(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function si(t,n,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,n=Cl(t),Bp(t,null,r),n}return wl(t,l,n,r),Cl(t)}function Jr(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,r|=l,n.lanes=r,Qh(t,r)}}function Su(t,n){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var g={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,r=r.next}while(r!==null);f===null?c=f=n:f=f.next=n}else c=f=n;r={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Eu=!1;function ea(){if(Eu){var t=Hs;if(t!==null)throw t}}function ta(t,n,r,l){Eu=!1;var c=t.updateQueue;ni=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var S=_,A=S.next;S.next=null,g===null?f=A:g.next=A,g=S;var M=t.alternate;M!==null&&(M=M.updateQueue,_=M.lastBaseUpdate,_!==g&&(_===null?M.firstBaseUpdate=A:_.next=A,M.lastBaseUpdate=S))}if(f!==null){var k=c.baseState;g=0,M=A=S=null,_=f;do{var R=_.lane&-536870913,N=R!==_.lane;if(N?(_e&R)===R:(l&R)===R){R!==0&&R===Ps&&(Eu=!0),M!==null&&(M=M.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var J=t,Z=_;R=n;var Ne=r;switch(Z.tag){case 1:if(J=Z.payload,typeof J=="function"){k=J.call(Ne,k,R);break e}k=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=Z.payload,R=typeof J=="function"?J.call(Ne,k,R):J,R==null)break e;k=y({},k,R);break e;case 2:ni=!0}}R=_.callback,R!==null&&(t.flags|=64,N&&(t.flags|=8192),N=c.callbacks,N===null?c.callbacks=[R]:N.push(R))}else N={lane:R,tag:_.tag,payload:_.payload,callback:_.callback,next:null},M===null?(A=M=N,S=k):M=M.next=N,g|=R;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);M===null&&(S=k),c.baseState=S,c.firstBaseUpdate=A,c.lastBaseUpdate=M,f===null&&(c.shared.lanes=0),di|=g,t.lanes=g,t.memoizedState=k}}function tm(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function nm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)tm(r[t],n)}var Bs=U(null),kl=U(0);function im(t,n){t=Ln,P(kl,t),P(Bs,n),Ln=t|n.baseLanes}function Tu(){P(kl,Ln),P(Bs,Bs.current)}function wu(){Ln=kl.current,V(Bs),V(kl)}var ri=0,le=null,Ae=null,Ke=null,Ll=!1,qs=!1,Wi=!1,Ul=0,na=0,Vs=null,G0=0;function Qe(){throw Error(a(321))}function Cu(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Dt(t[r],n[r]))return!1;return!0}function Au(t,n,r,l,c,f){return ri=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Bm:qm,Wi=!1,f=r(l,c),Wi=!1,qs&&(f=rm(n,r,l,c)),sm(t),f}function sm(t){O.H=Vl;var n=Ae!==null&&Ae.next!==null;if(ri=0,Ke=Ae=le=null,Ll=!1,na=0,Vs=null,n)throw Error(a(300));t===null||it||(t=t.dependencies,t!==null&&Il(t)&&(it=!0))}function rm(t,n,r,l){le=t;var c=0;do{if(qs&&(Vs=null),na=0,qs=!1,25<=c)throw Error(a(301));if(c+=1,Ke=Ae=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Z0,f=n(r,l)}while(qs);return f}function Y0(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?ia(n):n,t=t.useState()[0],(Ae!==null?Ae.memoizedState:null)!==t&&(le.flags|=1024),n}function Ru(){var t=Ul!==0;return Ul=0,t}function Nu(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Iu(t){if(Ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ll=!1}ri=0,Ke=Ae=le=null,qs=!1,na=Ul=0,Vs=null}function Et(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?le.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function We(){if(Ae===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var n=Ke===null?le.memoizedState:Ke.next;if(n!==null)Ke=n,Ae=t;else{if(t===null)throw le.alternate===null?Error(a(467)):Error(a(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ke===null?le.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ia(t){var n=na;return na+=1,Vs===null&&(Vs=[]),t=$p(Vs,t,n),n=le,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Bm:qm),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ia(t);if(t.$$typeof===ge)return pt(t)}throw Error(a(438,String(t)))}function xu(t){var n=null,r=le.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Ou(),le.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),l=0;l<t;l++)r[l]=Fe;return n.index++,r}function In(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=We();return Mu(n,Ae,t)}function Mu(t,n,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var c=t.baseQueue,f=l.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,l.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var _=g=null,S=null,A=n,M=!1;do{var k=A.lane&-536870913;if(k!==A.lane?(_e&k)===k:(ri&k)===k){var R=A.revertLane;if(R===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),k===Ps&&(M=!0);else if((ri&R)===R){A=A.next,R===Ps&&(M=!0);continue}else k={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(_=S=k,g=f):S=S.next=k,le.lanes|=R,di|=R;k=A.action,Wi&&r(f,k),f=A.hasEagerState?A.eagerState:r(f,k)}else R={lane:k,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(_=S=R,g=f):S=S.next=R,le.lanes|=k,di|=k;A=A.next}while(A!==null&&A!==n);if(S===null?g=f:S.next=_,!Dt(f,t.memoizedState)&&(it=!0,M&&(r=Hs,r!==null)))throw r;t.memoizedState=f,t.baseState=g,t.baseQueue=S,l.lastRenderedState=f}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Du(t){var n=We(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,c=r.pending,f=n.memoizedState;if(c!==null){r.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Dt(f,n.memoizedState)||(it=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,l]}function am(t,n,r){var l=le,c=We(),f=Se;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var g=!Dt((Ae||c).memoizedState,r);g&&(c.memoizedState=r,it=!0),c=c.queue;var _=cm.bind(null,l,c,t);if(sa(2048,8,_,[t]),c.getSnapshot!==n||g||Ke!==null&&Ke.memoizedState.tag&1){if(l.flags|=2048,js(9,Hl(),om.bind(null,l,c,r,n),null),Le===null)throw Error(a(349));f||(ri&124)!==0||lm(l,n,r)}return r}function lm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=le.updateQueue,n===null?(n=Ou(),le.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function om(t,n,r,l){n.value=r,n.getSnapshot=l,um(n)&&fm(t)}function cm(t,n,r){return r(function(){um(n)&&fm(t)})}function um(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Dt(t,r)}catch{return!0}}function fm(t){var n=ks(t,2);n!==null&&Ht(n,t,2)}function ku(t){var n=Et();if(typeof t=="function"){var r=t;if(t=r(),Wi){$n(!0);try{r()}finally{$n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:t},n}function dm(t,n,r,l){return t.baseState=r,Mu(t,Ae,typeof l=="function"?l:In)}function F0(t,n,r,l,c){if(ql(t))throw Error(a(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?r(!0):f.isTransition=!1,l(f),r=n.pending,r===null?(f.next=n.pending=f,hm(n,f)):(f.next=r.next,n.pending=r.next=f)}}function hm(t,n){var r=n.action,l=n.payload,c=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var _=r(c,l),S=O.S;S!==null&&S(g,_),pm(t,n,_)}catch(A){Lu(t,n,A)}finally{O.T=f}}else try{f=r(c,l),pm(t,n,f)}catch(A){Lu(t,n,A)}}function pm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){mm(t,n,l)},function(l){return Lu(t,n,l)}):mm(t,n,r)}function mm(t,n,r){n.status="fulfilled",n.value=r,gm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,hm(t,r)))}function Lu(t,n,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,gm(n),n=n.next;while(n!==l)}t.action=null}function gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function _m(t,n){return n}function ym(t,n){if(Se){var r=Le.formState;if(r!==null){e:{var l=le;if(Se){if(je){t:{for(var c=je,f=dn;c.nodeType!==8;){if(!f){c=null;break t}if(c=tn(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=tn(c.nextSibling),l=c.data==="F!";break e}}Fi(l)}l=!1}l&&(n=r[0])}}return r=Et(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:n},r.queue=l,r=zm.bind(null,le,l),l.dispatch=r,l=ku(!1),f=Bu.bind(null,le,!1,l.queue),l=Et(),c={state:n,dispatch:null,action:t,pending:null},l.queue=c,r=F0.bind(null,le,c,f,r),c.dispatch=r,l.memoizedState=t,[n,r,!1]}function vm(t){var n=We();return bm(n,Ae,t)}function bm(t,n,r){if(n=Mu(t,n,_m)[0],t=Pl(In)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ia(n)}catch(g){throw g===Zr?Ml:g}else l=n;n=We();var c=n.queue,f=c.dispatch;return r!==n.memoizedState&&(le.flags|=2048,js(9,Hl(),Q0.bind(null,c,r),null)),[l,f,t]}function Q0(t,n){t.action=n}function Sm(t){var n=We(),r=Ae;if(r!==null)return bm(n,r,t);We(),n=n.memoizedState,r=We();var l=r.queue.dispatch;return r.memoizedState=t,[n,l,!1]}function js(t,n,r,l){return t={tag:t,create:r,deps:l,inst:n,next:null},n=le.updateQueue,n===null&&(n=Ou(),le.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,n.lastEffect=t),t}function Hl(){return{destroy:void 0,resource:void 0}}function Em(){return We().memoizedState}function Bl(t,n,r,l){var c=Et();l=l===void 0?null:l,le.flags|=t,c.memoizedState=js(1|n,Hl(),r,l)}function sa(t,n,r,l){var c=We();l=l===void 0?null:l;var f=c.memoizedState.inst;Ae!==null&&l!==null&&Cu(l,Ae.memoizedState.deps)?c.memoizedState=js(n,f,r,l):(le.flags|=t,c.memoizedState=js(1|n,f,r,l))}function Tm(t,n){Bl(8390656,8,t,n)}function wm(t,n){sa(2048,8,t,n)}function Cm(t,n){return sa(4,2,t,n)}function Am(t,n){return sa(4,4,t,n)}function Rm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Nm(t,n,r){r=r!=null?r.concat([t]):null,sa(4,4,Rm.bind(null,n,t),r)}function Uu(){}function Im(t,n){var r=We();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&Cu(n,l[1])?l[0]:(r.memoizedState=[t,n],t)}function Om(t,n){var r=We();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&Cu(n,l[1]))return l[0];if(l=t(),Wi){$n(!0);try{t()}finally{$n(!1)}}return r.memoizedState=[l,n],l}function zu(t,n,r){return r===void 0||(ri&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=Dg(),le.lanes|=t,di|=t,r)}function xm(t,n,r,l){return Dt(r,n)?r:Bs.current!==null?(t=zu(t,r,l),Dt(t,n)||(it=!0),t):(ri&42)===0?(it=!0,t.memoizedState=r):(t=Dg(),le.lanes|=t,di|=t,n)}function Mm(t,n,r,l,c){var f=B.p;B.p=f!==0&&8>f?f:8;var g=O.T,_={};O.T=_,Bu(t,!1,n,r);try{var S=c(),A=O.S;if(A!==null&&A(_,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var M=j0(S,l);ra(t,n,M,Pt(t))}else ra(t,n,l,Pt(t))}catch(k){ra(t,n,{then:function(){},status:"rejected",reason:k},Pt())}finally{B.p=f,O.T=g}}function X0(){}function Pu(t,n,r,l){if(t.tag!==5)throw Error(a(476));var c=Dm(t).queue;Mm(t,c,n,z,r===null?X0:function(){return km(t),r(l)})}function Dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:z},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function km(t){var n=Dm(t).next.queue;ra(t,n,{},Pt())}function Hu(){return pt(Ta)}function Lm(){return We().memoizedState}function Um(){return We().memoizedState}function K0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=Pt();t=ii(r);var l=si(n,t,r);l!==null&&(Ht(l,n,r),Jr(l,n,r)),n={cache:mu()},t.payload=n;return}n=n.return}}function W0(t,n,r){var l=Pt();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ql(t)?Pm(n,r):(r=ru(t,n,r,l),r!==null&&(Ht(r,t,l),Hm(r,n,l)))}function zm(t,n,r){var l=Pt();ra(t,n,r,l)}function ra(t,n,r,l){var c={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ql(t))Pm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,_=f(g,r);if(c.hasEagerState=!0,c.eagerState=_,Dt(_,g))return wl(t,n,c,0),Le===null&&Tl(),!1}catch{}finally{}if(r=ru(t,n,c,l),r!==null)return Ht(r,t,l),Hm(r,n,l),!0}return!1}function Bu(t,n,r,l){if(l={lane:2,revertLane:vf(),action:l,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(a(479))}else n=ru(t,r,l,2),n!==null&&Ht(n,t,2)}function ql(t){var n=t.alternate;return t===le||n!==null&&n===le}function Pm(t,n){qs=Ll=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Hm(t,n,r){if((r&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,r|=l,n.lanes=r,Qh(t,r)}}var Vl={readContext:pt,use:zl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Bm={readContext:pt,use:zl,useCallback:function(t,n){return Et().memoizedState=[t,n===void 0?null:n],t},useContext:pt,useEffect:Tm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Bl(4194308,4,Rm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Bl(4194308,4,t,n)},useInsertionEffect:function(t,n){Bl(4,2,t,n)},useMemo:function(t,n){var r=Et();n=n===void 0?null:n;var l=t();if(Wi){$n(!0);try{t()}finally{$n(!1)}}return r.memoizedState=[l,n],l},useReducer:function(t,n,r){var l=Et();if(r!==void 0){var c=r(n);if(Wi){$n(!0);try{r(n)}finally{$n(!1)}}}else c=n;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=W0.bind(null,le,t),[l.memoizedState,t]},useRef:function(t){var n=Et();return t={current:t},n.memoizedState=t},useState:function(t){t=ku(t);var n=t.queue,r=zm.bind(null,le,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Uu,useDeferredValue:function(t,n){var r=Et();return zu(r,t,n)},useTransition:function(){var t=ku(!1);return t=Mm.bind(null,le,t.queue,!0,!1),Et().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var l=le,c=Et();if(Se){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Le===null)throw Error(a(349));(_e&124)!==0||lm(l,n,r)}c.memoizedState=r;var f={value:r,getSnapshot:n};return c.queue=f,Tm(cm.bind(null,l,f,t),[t]),l.flags|=2048,js(9,Hl(),om.bind(null,l,f,r,n),null),r},useId:function(){var t=Et(),n=Le.identifierPrefix;if(Se){var r=An,l=Cn;r=(l&~(1<<32-Mt(l)-1)).toString(32)+r,n="«"+n+"R"+r,r=Ul++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=G0++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Hu,useFormState:ym,useActionState:ym,useOptimistic:function(t){var n=Et();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Bu.bind(null,le,!0,r),r.dispatch=n,[t,n]},useMemoCache:xu,useCacheRefresh:function(){return Et().memoizedState=K0.bind(null,le)}},qm={readContext:pt,use:zl,useCallback:Im,useContext:pt,useEffect:wm,useImperativeHandle:Nm,useInsertionEffect:Cm,useLayoutEffect:Am,useMemo:Om,useReducer:Pl,useRef:Em,useState:function(){return Pl(In)},useDebugValue:Uu,useDeferredValue:function(t,n){var r=We();return xm(r,Ae.memoizedState,t,n)},useTransition:function(){var t=Pl(In)[0],n=We().memoizedState;return[typeof t=="boolean"?t:ia(t),n]},useSyncExternalStore:am,useId:Lm,useHostTransitionStatus:Hu,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var r=We();return dm(r,Ae,t,n)},useMemoCache:xu,useCacheRefresh:Um},Z0={readContext:pt,use:zl,useCallback:Im,useContext:pt,useEffect:wm,useImperativeHandle:Nm,useInsertionEffect:Cm,useLayoutEffect:Am,useMemo:Om,useReducer:Du,useRef:Em,useState:function(){return Du(In)},useDebugValue:Uu,useDeferredValue:function(t,n){var r=We();return Ae===null?zu(r,t,n):xm(r,Ae.memoizedState,t,n)},useTransition:function(){var t=Du(In)[0],n=We().memoizedState;return[typeof t=="boolean"?t:ia(t),n]},useSyncExternalStore:am,useId:Lm,useHostTransitionStatus:Hu,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var r=We();return Ae!==null?dm(r,Ae,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:xu,useCacheRefresh:Um},Gs=null,aa=0;function jl(t){var n=aa;return aa+=1,Gs===null&&(Gs=[]),$p(Gs,t,n)}function la(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Gl(t,n){throw n.$$typeof===b?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Vm(t){var n=t._init;return n(t._payload)}function jm(t){function n(w,T){if(t){var C=w.deletions;C===null?(w.deletions=[T],w.flags|=16):C.push(T)}}function r(w,T){if(!t)return null;for(;T!==null;)n(w,T),T=T.sibling;return null}function l(w){for(var T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function c(w,T){return w=wn(w,T),w.index=0,w.sibling=null,w}function f(w,T,C){return w.index=C,t?(C=w.alternate,C!==null?(C=C.index,C<T?(w.flags|=67108866,T):C):(w.flags|=67108866,T)):(w.flags|=1048576,T)}function g(w){return t&&w.alternate===null&&(w.flags|=67108866),w}function _(w,T,C,D){return T===null||T.tag!==6?(T=lu(C,w.mode,D),T.return=w,T):(T=c(T,C),T.return=w,T)}function S(w,T,C,D){var Y=C.type;return Y===x?M(w,T,C.props.children,D,C.key):T!==null&&(T.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===X&&Vm(Y)===T.type)?(T=c(T,C.props),la(T,C),T.return=w,T):(T=Al(C.type,C.key,C.props,null,w.mode,D),la(T,C),T.return=w,T)}function A(w,T,C,D){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=ou(C,w.mode,D),T.return=w,T):(T=c(T,C.children||[]),T.return=w,T)}function M(w,T,C,D,Y){return T===null||T.tag!==7?(T=Vi(C,w.mode,D,Y),T.return=w,T):(T=c(T,C),T.return=w,T)}function k(w,T,C){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=lu(""+T,w.mode,C),T.return=w,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case v:return C=Al(T.type,T.key,T.props,null,w.mode,C),la(C,T),C.return=w,C;case I:return T=ou(T,w.mode,C),T.return=w,T;case X:var D=T._init;return T=D(T._payload),k(w,T,C)}if(Be(T)||Ve(T))return T=Vi(T,w.mode,C,null),T.return=w,T;if(typeof T.then=="function")return k(w,jl(T),C);if(T.$$typeof===ge)return k(w,Ol(w,T),C);Gl(w,T)}return null}function R(w,T,C,D){var Y=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return Y!==null?null:_(w,T,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case v:return C.key===Y?S(w,T,C,D):null;case I:return C.key===Y?A(w,T,C,D):null;case X:return Y=C._init,C=Y(C._payload),R(w,T,C,D)}if(Be(C)||Ve(C))return Y!==null?null:M(w,T,C,D,null);if(typeof C.then=="function")return R(w,T,jl(C),D);if(C.$$typeof===ge)return R(w,T,Ol(w,C),D);Gl(w,C)}return null}function N(w,T,C,D,Y){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return w=w.get(C)||null,_(T,w,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case v:return w=w.get(D.key===null?C:D.key)||null,S(T,w,D,Y);case I:return w=w.get(D.key===null?C:D.key)||null,A(T,w,D,Y);case X:var ce=D._init;return D=ce(D._payload),N(w,T,C,D,Y)}if(Be(D)||Ve(D))return w=w.get(C)||null,M(T,w,D,Y,null);if(typeof D.then=="function")return N(w,T,C,jl(D),Y);if(D.$$typeof===ge)return N(w,T,C,Ol(T,D),Y);Gl(T,D)}return null}function J(w,T,C,D){for(var Y=null,ce=null,W=T,$=T=0,rt=null;W!==null&&$<C.length;$++){W.index>$?(rt=W,W=null):rt=W.sibling;var ve=R(w,W,C[$],D);if(ve===null){W===null&&(W=rt);break}t&&W&&ve.alternate===null&&n(w,W),T=f(ve,T,$),ce===null?Y=ve:ce.sibling=ve,ce=ve,W=rt}if($===C.length)return r(w,W),Se&&Gi(w,$),Y;if(W===null){for(;$<C.length;$++)W=k(w,C[$],D),W!==null&&(T=f(W,T,$),ce===null?Y=W:ce.sibling=W,ce=W);return Se&&Gi(w,$),Y}for(W=l(W);$<C.length;$++)rt=N(W,w,$,C[$],D),rt!==null&&(t&&rt.alternate!==null&&W.delete(rt.key===null?$:rt.key),T=f(rt,T,$),ce===null?Y=rt:ce.sibling=rt,ce=rt);return t&&W.forEach(function(Si){return n(w,Si)}),Se&&Gi(w,$),Y}function Z(w,T,C,D){if(C==null)throw Error(a(151));for(var Y=null,ce=null,W=T,$=T=0,rt=null,ve=C.next();W!==null&&!ve.done;$++,ve=C.next()){W.index>$?(rt=W,W=null):rt=W.sibling;var Si=R(w,W,ve.value,D);if(Si===null){W===null&&(W=rt);break}t&&W&&Si.alternate===null&&n(w,W),T=f(Si,T,$),ce===null?Y=Si:ce.sibling=Si,ce=Si,W=rt}if(ve.done)return r(w,W),Se&&Gi(w,$),Y;if(W===null){for(;!ve.done;$++,ve=C.next())ve=k(w,ve.value,D),ve!==null&&(T=f(ve,T,$),ce===null?Y=ve:ce.sibling=ve,ce=ve);return Se&&Gi(w,$),Y}for(W=l(W);!ve.done;$++,ve=C.next())ve=N(W,w,$,ve.value,D),ve!==null&&(t&&ve.alternate!==null&&W.delete(ve.key===null?$:ve.key),T=f(ve,T,$),ce===null?Y=ve:ce.sibling=ve,ce=ve);return t&&W.forEach(function($T){return n(w,$T)}),Se&&Gi(w,$),Y}function Ne(w,T,C,D){if(typeof C=="object"&&C!==null&&C.type===x&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case v:e:{for(var Y=C.key;T!==null;){if(T.key===Y){if(Y=C.type,Y===x){if(T.tag===7){r(w,T.sibling),D=c(T,C.props.children),D.return=w,w=D;break e}}else if(T.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===X&&Vm(Y)===T.type){r(w,T.sibling),D=c(T,C.props),la(D,C),D.return=w,w=D;break e}r(w,T);break}else n(w,T);T=T.sibling}C.type===x?(D=Vi(C.props.children,w.mode,D,C.key),D.return=w,w=D):(D=Al(C.type,C.key,C.props,null,w.mode,D),la(D,C),D.return=w,w=D)}return g(w);case I:e:{for(Y=C.key;T!==null;){if(T.key===Y)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){r(w,T.sibling),D=c(T,C.children||[]),D.return=w,w=D;break e}else{r(w,T);break}else n(w,T);T=T.sibling}D=ou(C,w.mode,D),D.return=w,w=D}return g(w);case X:return Y=C._init,C=Y(C._payload),Ne(w,T,C,D)}if(Be(C))return J(w,T,C,D);if(Ve(C)){if(Y=Ve(C),typeof Y!="function")throw Error(a(150));return C=Y.call(C),Z(w,T,C,D)}if(typeof C.then=="function")return Ne(w,T,jl(C),D);if(C.$$typeof===ge)return Ne(w,T,Ol(w,C),D);Gl(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,T!==null&&T.tag===6?(r(w,T.sibling),D=c(T,C),D.return=w,w=D):(r(w,T),D=lu(C,w.mode,D),D.return=w,w=D),g(w)):r(w,T)}return function(w,T,C,D){try{aa=0;var Y=Ne(w,T,C,D);return Gs=null,Y}catch(W){if(W===Zr||W===Ml)throw W;var ce=kt(29,W,null,w.mode);return ce.lanes=D,ce.return=w,ce}finally{}}}var Ys=jm(!0),Gm=jm(!1),Qt=U(null),hn=null;function ai(t){var n=t.alternate;P(Je,Je.current&1),P(Qt,t),hn===null&&(n===null||Bs.current!==null||n.memoizedState!==null)&&(hn=t)}function Ym(t){if(t.tag===22){if(P(Je,Je.current),P(Qt,t),hn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(hn=t)}}else li()}function li(){P(Je,Je.current),P(Qt,Qt.current)}function On(t){V(Qt),hn===t&&(hn=null),V(Je)}var Je=U(0);function Yl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||xf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function qu(t,n,r,l){n=t.memoizedState,r=r(l,n),r=r==null?n:y({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Vu={enqueueSetState:function(t,n,r){t=t._reactInternals;var l=Pt(),c=ii(l);c.payload=n,r!=null&&(c.callback=r),n=si(t,c,l),n!==null&&(Ht(n,t,l),Jr(n,t,l))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var l=Pt(),c=ii(l);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=si(t,c,l),n!==null&&(Ht(n,t,l),Jr(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=Pt(),l=ii(r);l.tag=2,n!=null&&(l.callback=n),n=si(t,l,r),n!==null&&(Ht(n,t,r),Jr(n,t,r))}};function Fm(t,n,r,l,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,g):n.prototype&&n.prototype.isPureReactComponent?!jr(r,l)||!jr(c,f):!0}function Qm(t,n,r,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==t&&Vu.enqueueReplaceState(n,n.state,null)}function Zi(t,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(t=t.defaultProps){r===n&&(r=y({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Xm(t){Fl(t)}function Km(t){console.error(t)}function Wm(t){Fl(t)}function Ql(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Zm(t,n,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ju(t,n,r){return r=ii(r),r.tag=3,r.payload={element:null},r.callback=function(){Ql(t,n)},r}function $m(t){return t=ii(t),t.tag=3,t}function Jm(t,n,r,l){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=l.value;t.payload=function(){return c(f)},t.callback=function(){Zm(n,r,l)}}var g=r.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Zm(n,r,l),typeof c!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function $0(t,n,r,l,c){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&Xr(n,r,c,!0),r=Qt.current,r!==null){switch(r.tag){case 13:return hn===null?pf():r.alternate===null&&Ge===0&&(Ge=3),r.flags&=-257,r.flags|=65536,r.lanes=c,l===yu?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),gf(t,l,c)),!1;case 22:return r.flags|=65536,l===yu?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),gf(t,l,c)),!1}throw Error(a(435,r.tag))}return gf(t,l,c),pf(),!1}if(Se)return n=Qt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,l!==fu&&(t=Error(a(422),{cause:l}),Qr(jt(t,r)))):(l!==fu&&(n=Error(a(423),{cause:l}),Qr(jt(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=jt(l,r),c=ju(t.stateNode,l,c),Su(t,c),Ge!==4&&(Ge=2)),!1;var f=Error(a(520),{cause:l});if(f=jt(f,r),pa===null?pa=[f]:pa.push(f),Ge!==4&&(Ge=2),n===null)return!0;l=jt(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=ju(r.stateNode,l,t),Su(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(hi===null||!hi.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=$m(c),Jm(c,t,r,l),Su(r,c),!1}r=r.return}while(r!==null);return!1}var eg=Error(a(461)),it=!1;function ct(t,n,r,l){n.child=t===null?Gm(n,null,r,l):Ys(n,t.child,r,l)}function tg(t,n,r,l,c){r=r.render;var f=n.ref;if("ref"in l){var g={};for(var _ in l)_!=="ref"&&(g[_]=l[_])}else g=l;return Xi(n),l=Au(t,n,r,g,f,c),_=Ru(),t!==null&&!it?(Nu(t,n,c),xn(t,n,c)):(Se&&_&&cu(n),n.flags|=1,ct(t,n,l,c),n.child)}function ng(t,n,r,l,c){if(t===null){var f=r.type;return typeof f=="function"&&!au(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,ig(t,n,f,l,c)):(t=Al(r.type,null,l,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zu(t,c)){var g=f.memoizedProps;if(r=r.compare,r=r!==null?r:jr,r(g,l)&&t.ref===n.ref)return xn(t,n,c)}return n.flags|=1,t=wn(f,l),t.ref=n.ref,t.return=n,n.child=t}function ig(t,n,r,l,c){if(t!==null){var f=t.memoizedProps;if(jr(f,l)&&t.ref===n.ref)if(it=!1,n.pendingProps=l=f,Zu(t,c))(t.flags&131072)!==0&&(it=!0);else return n.lanes=t.lanes,xn(t,n,c)}return Gu(t,n,r,l,c)}function sg(t,n,r){var l=n.pendingProps,c=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|r:r,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return rg(t,n,l,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,f!==null?f.cachePool:null),f!==null?im(n,f):Tu(),Ym(n);else return n.lanes=n.childLanes=536870912,rg(t,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(xl(n,f.cachePool),im(n,f),li(),n.memoizedState=null):(t!==null&&xl(n,null),Tu(),li());return ct(t,n,c,r),n.child}function rg(t,n,r,l){var c=_u();return c=c===null?null:{parent:$e._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&xl(n,null),Tu(),Ym(n),t!==null&&Xr(t,n,l,!0),null}function Xl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Gu(t,n,r,l,c){return Xi(n),r=Au(t,n,r,l,void 0,c),l=Ru(),t!==null&&!it?(Nu(t,n,c),xn(t,n,c)):(Se&&l&&cu(n),n.flags|=1,ct(t,n,r,c),n.child)}function ag(t,n,r,l,c,f){return Xi(n),n.updateQueue=null,r=rm(n,l,r,c),sm(t),l=Ru(),t!==null&&!it?(Nu(t,n,f),xn(t,n,f)):(Se&&l&&cu(n),n.flags|=1,ct(t,n,r,f),n.child)}function lg(t,n,r,l,c){if(Xi(n),n.stateNode===null){var f=Ls,g=r.contextType;typeof g=="object"&&g!==null&&(f=pt(g)),f=new r(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},vu(n),g=r.contextType,f.context=typeof g=="object"&&g!==null?pt(g):Ls,f.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(qu(n,r,g,l),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Vu.enqueueReplaceState(f,f.state,null),ta(n,l,f,c),ea(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){f=n.stateNode;var _=n.memoizedProps,S=Zi(r,_);f.props=S;var A=f.context,M=r.contextType;g=Ls,typeof M=="object"&&M!==null&&(g=pt(M));var k=r.getDerivedStateFromProps;M=typeof k=="function"||typeof f.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,M||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_||A!==g)&&Qm(n,f,l,g),ni=!1;var R=n.memoizedState;f.state=R,ta(n,l,f,c),ea(),A=n.memoizedState,_||R!==A||ni?(typeof k=="function"&&(qu(n,r,k,l),A=n.memoizedState),(S=ni||Fm(n,r,S,l,R,A,g))?(M||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=A),f.props=l,f.state=A,f.context=g,l=S):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,bu(t,n),g=n.memoizedProps,M=Zi(r,g),f.props=M,k=n.pendingProps,R=f.context,A=r.contextType,S=Ls,typeof A=="object"&&A!==null&&(S=pt(A)),_=r.getDerivedStateFromProps,(A=typeof _=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==k||R!==S)&&Qm(n,f,l,S),ni=!1,R=n.memoizedState,f.state=R,ta(n,l,f,c),ea();var N=n.memoizedState;g!==k||R!==N||ni||t!==null&&t.dependencies!==null&&Il(t.dependencies)?(typeof _=="function"&&(qu(n,r,_,l),N=n.memoizedState),(M=ni||Fm(n,r,M,l,R,N,S)||t!==null&&t.dependencies!==null&&Il(t.dependencies))?(A||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,S),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,S)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&R===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&R===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=S,l=M):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&R===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&R===t.memoizedState||(n.flags|=1024),l=!1)}return f=l,Xl(t,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&l?(n.child=Ys(n,t.child,null,c),n.child=Ys(n,null,r,c)):ct(t,n,r,c),n.memoizedState=f.state,t=n.child):t=xn(t,n,c),t}function og(t,n,r,l){return Fr(),n.flags|=256,ct(t,n,r,l),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(t){return{baseLanes:t,cachePool:Kp()}}function Qu(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=Xt),t}function cg(t,n,r){var l=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Je.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?ai(n):li(),Se){var _=je,S;if(S=_){e:{for(S=_,_=dn;S.nodeType!==8;){if(!_){_=null;break e}if(S=tn(S.nextSibling),S===null){_=null;break e}}_=S}_!==null?(n.memoizedState={dehydrated:_,treeContext:ji!==null?{id:Cn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},S=kt(18,null,null,0),S.stateNode=_,S.return=n,n.child=S,yt=n,je=null,S=!0):S=!1}S||Fi(n)}if(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null))return xf(_)?n.lanes=32:n.lanes=536870912,null;On(n)}return _=l.children,l=l.fallback,c?(li(),c=n.mode,_=Kl({mode:"hidden",children:_},c),l=Vi(l,c,r,null),_.return=n,l.return=n,_.sibling=l,n.child=_,c=n.child,c.memoizedState=Fu(r),c.childLanes=Qu(t,g,r),n.memoizedState=Yu,l):(ai(n),Xu(n,_))}if(S=t.memoizedState,S!==null&&(_=S.dehydrated,_!==null)){if(f)n.flags&256?(ai(n),n.flags&=-257,n=Ku(t,n,r)):n.memoizedState!==null?(li(),n.child=t.child,n.flags|=128,n=null):(li(),c=l.fallback,_=n.mode,l=Kl({mode:"visible",children:l.children},_),c=Vi(c,_,r,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Ys(n,t.child,null,r),l=n.child,l.memoizedState=Fu(r),l.childLanes=Qu(t,g,r),n.memoizedState=Yu,n=c);else if(ai(n),xf(_)){if(g=_.nextSibling&&_.nextSibling.dataset,g)var A=g.dgst;g=A,l=Error(a(419)),l.stack="",l.digest=g,Qr({value:l,source:null,stack:null}),n=Ku(t,n,r)}else if(it||Xr(t,n,r,!1),g=(r&t.childLanes)!==0,it||g){if(g=Le,g!==null&&(l=r&-r,l=(l&42)!==0?1:xc(l),l=(l&(g.suspendedLanes|r))!==0?0:l,l!==0&&l!==S.retryLane))throw S.retryLane=l,ks(t,l),Ht(g,t,l),eg;_.data==="$?"||pf(),n=Ku(t,n,r)}else _.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=S.treeContext,je=tn(_.nextSibling),yt=n,Se=!0,Yi=null,dn=!1,t!==null&&(Yt[Ft++]=Cn,Yt[Ft++]=An,Yt[Ft++]=ji,Cn=t.id,An=t.overflow,ji=n),n=Xu(n,l.children),n.flags|=4096);return n}return c?(li(),c=l.fallback,_=n.mode,S=t.child,A=S.sibling,l=wn(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,A!==null?c=wn(A,c):(c=Vi(c,_,r,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,l=c,c=n.child,_=t.child.memoizedState,_===null?_=Fu(r):(S=_.cachePool,S!==null?(A=$e._currentValue,S=S.parent!==A?{parent:A,pool:A}:S):S=Kp(),_={baseLanes:_.baseLanes|r,cachePool:S}),c.memoizedState=_,c.childLanes=Qu(t,g,r),n.memoizedState=Yu,l):(ai(n),r=t.child,t=r.sibling,r=wn(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=r,n.memoizedState=null,r)}function Xu(t,n){return n=Kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Kl(t,n){return t=kt(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ku(t,n,r){return Ys(n,t.child,null,r),t=Xu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ug(t,n,r){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),hu(t.return,n,r)}function Wu(t,n,r,l,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=r,f.tailMode=c)}function fg(t,n,r){var l=n.pendingProps,c=l.revealOrder,f=l.tail;if(ct(t,n,l.children,r),l=Je.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,r,n);else if(t.tag===19)ug(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(P(Je,l),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&Yl(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Wu(n,!1,c,r,f);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Yl(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Wu(n,!0,r,null,f);break;case"together":Wu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xn(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),di|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Xr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=wn(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=wn(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Zu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Il(t)))}function J0(t,n,r){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),ti(n,$e,t.memoizedState.cache),Fr();break;case 27:case 5:Kn(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:ti(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ai(n),n.flags|=128,null):(r&n.child.childLanes)!==0?cg(t,n,r):(ai(n),t=xn(t,n,r),t!==null?t.sibling:null);ai(n);break;case 19:var c=(t.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(Xr(t,n,r,!1),l=(r&n.childLanes)!==0),c){if(l)return fg(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),P(Je,Je.current),l)break;return null;case 22:case 23:return n.lanes=0,sg(t,n,r);case 24:ti(n,$e,t.memoizedState.cache)}return xn(t,n,r)}function dg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)it=!0;else{if(!Zu(t,r)&&(n.flags&128)===0)return it=!1,J0(t,n,r);it=(t.flags&131072)!==0}else it=!1,Se&&(n.flags&1048576)!==0&&Vp(n,Nl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var l=n.elementType,c=l._init;if(l=c(l._payload),n.type=l,typeof l=="function")au(l)?(t=Zi(l,t),n.tag=1,n=lg(null,n,l,t,r)):(n.tag=0,n=Gu(null,n,l,t,r));else{if(l!=null){if(c=l.$$typeof,c===Oe){n.tag=11,n=tg(null,n,l,t,r);break e}else if(c===Pe){n.tag=14,n=ng(null,n,l,t,r);break e}}throw n=$t(l)||l,Error(a(306,n,""))}}return n;case 0:return Gu(t,n,n.type,n.pendingProps,r);case 1:return l=n.type,c=Zi(l,n.pendingProps),lg(t,n,l,c,r);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(a(387));l=n.pendingProps;var f=n.memoizedState;c=f.element,bu(t,n),ta(n,l,null,r);var g=n.memoizedState;if(l=g.cache,ti(n,$e,l),l!==f.cache&&pu(n,[$e],r,!0),ea(),l=g.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=og(t,n,l,r);break e}else if(l!==c){c=jt(Error(a(424)),n),Qr(c),n=og(t,n,l,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=tn(t.firstChild),yt=n,Se=!0,Yi=null,dn=!0,r=Gm(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Fr(),l===c){n=xn(t,n,r);break e}ct(t,n,l,r)}n=n.child}return n;case 26:return Xl(t,n),t===null?(r=g_(n.type,null,n.pendingProps,null))?n.memoizedState=r:Se||(r=n.type,t=n.pendingProps,l=co(te.current).createElement(r),l[ht]=n,l[bt]=t,ft(l,r,t),nt(l),n.stateNode=l):n.memoizedState=g_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kn(n),t===null&&Se&&(l=n.stateNode=h_(n.type,n.pendingProps,te.current),yt=n,dn=!0,c=je,gi(n.type)?(Mf=c,je=tn(l.firstChild)):je=c),ct(t,n,n.pendingProps.children,r),Xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=l=je)&&(l=RT(l,n.type,n.pendingProps,dn),l!==null?(n.stateNode=l,yt=n,je=tn(l.firstChild),dn=!1,c=!0):c=!1),c||Fi(n)),Kn(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,l=f.children,Nf(c,f)?l=null:g!==null&&Nf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Au(t,n,Y0,null,null,r),Ta._currentValue=c),Xl(t,n),ct(t,n,l,r),n.child;case 6:return t===null&&Se&&((t=r=je)&&(r=NT(r,n.pendingProps,dn),r!==null?(n.stateNode=r,yt=n,je=null,t=!0):t=!1),t||Fi(n)),null;case 13:return cg(t,n,r);case 4:return Me(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ys(n,null,l,r):ct(t,n,l,r),n.child;case 11:return tg(t,n,n.type,n.pendingProps,r);case 7:return ct(t,n,n.pendingProps,r),n.child;case 8:return ct(t,n,n.pendingProps.children,r),n.child;case 12:return ct(t,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,ti(n,n.type,l.value),ct(t,n,l.children,r),n.child;case 9:return c=n.type._context,l=n.pendingProps.children,Xi(n),c=pt(c),l=l(c),n.flags|=1,ct(t,n,l,r),n.child;case 14:return ng(t,n,n.type,n.pendingProps,r);case 15:return ig(t,n,n.type,n.pendingProps,r);case 19:return fg(t,n,r);case 31:return l=n.pendingProps,r=n.mode,l={mode:l.mode,children:l.children},t===null?(r=Kl(l,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=wn(t.child,l),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return sg(t,n,r);case 24:return Xi(n),l=pt($e),t===null?(c=_u(),c===null&&(c=Le,f=mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),n.memoizedState={parent:l,cache:c},vu(n),ti(n,$e,c)):((t.lanes&r)!==0&&(bu(t,n),ta(n,null,null,r),ea()),c=t.memoizedState,f=n.memoizedState,c.parent!==l?(c={parent:l,cache:l},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ti(n,$e,l)):(l=f.cache,ti(n,$e,l),l!==c.cache&&pu(n,[$e],r,!0))),ct(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Mn(t){t.flags|=4}function hg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!S_(n)){if(n=Qt.current,n!==null&&((_e&4194048)===_e?hn!==null:(_e&62914560)!==_e&&(_e&536870912)===0||n!==hn))throw $r=yu,Wp;t.flags|=8192}}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Yh():536870912,t.lanes|=n,Ks|=n)}function oa(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=r,n}function eT(t,n,r){var l=n.pendingProps;switch(uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return r=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Nn($e),Ot(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?Mn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yp())),qe(n),null;case 26:return r=n.memoizedState,t===null?(Mn(n),r!==null?(qe(n),hg(n,r)):(qe(n),n.flags&=-16777217)):r?r!==t.memoizedState?(Mn(n),qe(n),hg(n,r)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==l&&Mn(n),qe(n),n.flags&=-16777217),null;case 27:Wn(n),r=te.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return qe(n),null}t=G.current,Yr(n)?jp(n):(t=h_(c,l,r),n.stateNode=t,Mn(n))}return qe(n),null;case 5:if(Wn(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return qe(n),null}if(t=G.current,Yr(n))jp(n);else{switch(c=co(te.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(r,{is:l.is}):c.createElement(r)}}t[ht]=n,t[bt]=l;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(ft(t,r,l),r){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Mn(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(t=te.current,Yr(n)){if(t=n.stateNode,r=n.memoizedProps,l=null,c=yt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[ht]=n,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||a_(t.nodeValue,r)),t||Fi(n)}else t=co(t).createTextNode(l),t[ht]=n,n.stateNode=t}return qe(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Yr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[ht]=n}else Fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Yp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(On(n),n):(On(n),null)}if(On(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=l!==null,t=t!==null&&t.memoizedState!==null,r){l=n.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==c&&(l.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),Wl(n,n.updateQueue),qe(n),null;case 4:return Ot(),t===null&&Tf(n.stateNode.containerInfo),qe(n),null;case 10:return Nn(n.type),qe(n),null;case 19:if(V(Je),c=n.memoizedState,c===null)return qe(n),null;if(l=(n.flags&128)!==0,f=c.rendering,f===null)if(l)oa(c,!1);else{if(Ge!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Yl(t),f!==null){for(n.flags|=128,oa(c,!1),t=f.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)qp(r,t),r=r.sibling;return P(Je,Je.current&1|2),n.child}t=t.sibling}c.tail!==null&&fn()>Jl&&(n.flags|=128,l=!0,oa(c,!1),n.lanes=4194304)}else{if(!l)if(t=Yl(f),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),oa(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Se)return qe(n),null}else 2*fn()-c.renderingStartTime>Jl&&r!==536870912&&(n.flags|=128,l=!0,oa(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=fn(),n.sibling=null,t=Je.current,P(Je,l?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return On(n),wu(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),r=n.updateQueue,r!==null&&Wl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),t!==null&&V(Ki),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Nn($e),qe(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function tT(t,n){switch(uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Nn($e),Ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Wn(n),null;case 13:if(On(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(Je),null;case 4:return Ot(),null;case 10:return Nn(n.type),null;case 22:case 23:return On(n),wu(),t!==null&&V(Ki),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Nn($e),null;case 25:return null;default:return null}}function pg(t,n){switch(uu(n),n.tag){case 3:Nn($e),Ot();break;case 26:case 27:case 5:Wn(n);break;case 4:Ot();break;case 13:On(n);break;case 19:V(Je);break;case 10:Nn(n.type);break;case 22:case 23:On(n),wu(),t!==null&&V(Ki);break;case 24:Nn($e)}}function ca(t,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){l=void 0;var f=r.create,g=r.inst;l=f(),g.destroy=l}r=r.next}while(r!==c)}}catch(_){De(n,n.return,_)}}function oi(t,n,r){try{var l=n.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&t)===t){var g=l.inst,_=g.destroy;if(_!==void 0){g.destroy=void 0,c=n;var S=r,A=_;try{A()}catch(M){De(c,S,M)}}}l=l.next}while(l!==f)}}catch(M){De(n,n.return,M)}}function mg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{nm(n,r)}catch(l){De(t,t.return,l)}}}function gg(t,n,r){r.props=Zi(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){De(t,n,l)}}function ua(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(c){De(t,n,c)}}function pn(t,n){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(c){De(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){De(t,n,c)}else r.current=null}function _g(t){var n=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(c){De(t,t.return,c)}}function $u(t,n,r){try{var l=t.stateNode;ET(l,t.type,r,n),l[bt]=n}catch(c){De(t,t.return,c)}}function yg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gi(t.type)||t.tag===4}function Ju(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,n,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=oo));else if(l!==4&&(l===27&&gi(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(ef(t,n,r),t=t.sibling;t!==null;)ef(t,n,r),t=t.sibling}function Zl(t,n,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(l!==4&&(l===27&&gi(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Zl(t,n,r),t=t.sibling;t!==null;)Zl(t,n,r),t=t.sibling}function vg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);ft(n,l,r),n[ht]=t,n[bt]=r}catch(f){De(t,t.return,f)}}var Dn=!1,Xe=!1,tf=!1,bg=typeof WeakSet=="function"?WeakSet:Set,st=null;function nT(t,n){if(t=t.containerInfo,Af=go,t=xp(t),Jc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var g=0,_=-1,S=-1,A=0,M=0,k=t,R=null;t:for(;;){for(var N;k!==r||c!==0&&k.nodeType!==3||(_=g+c),k!==f||l!==0&&k.nodeType!==3||(S=g+l),k.nodeType===3&&(g+=k.nodeValue.length),(N=k.firstChild)!==null;)R=k,k=N;for(;;){if(k===t)break t;if(R===r&&++A===c&&(_=g),R===f&&++M===l&&(S=g),(N=k.nextSibling)!==null)break;k=R,R=k.parentNode}k=N}r=_===-1||S===-1?null:{start:_,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rf={focusedElem:t,selectionRange:r},go=!1,st=n;st!==null;)if(n=st,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,st=t;else for(;st!==null;){switch(n=st,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,r=n,c=f.memoizedProps,f=f.memoizedState,l=r.stateNode;try{var J=Zi(r.type,c,r.elementType===r.type);t=l.getSnapshotBeforeUpdate(J,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(Z){De(r,r.return,Z)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Of(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Of(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,st=t;break}st=n.return}}function Sg(t,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ci(t,r),l&4&&ca(5,r);break;case 1:if(ci(t,r),l&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(g){De(r,r.return,g)}else{var c=Zi(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){De(r,r.return,g)}}l&64&&mg(r),l&512&&ua(r,r.return);break;case 3:if(ci(t,r),l&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{nm(t,n)}catch(g){De(r,r.return,g)}}break;case 27:n===null&&l&4&&vg(r);case 26:case 5:ci(t,r),n===null&&l&4&&_g(r),l&512&&ua(r,r.return);break;case 12:ci(t,r);break;case 13:ci(t,r),l&4&&wg(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=fT.bind(null,r),IT(t,r))));break;case 22:if(l=r.memoizedState!==null||Dn,!l){n=n!==null&&n.memoizedState!==null||Xe,c=Dn;var f=Xe;Dn=l,(Xe=n)&&!f?ui(t,r,(r.subtreeFlags&8772)!==0):ci(t,r),Dn=c,Xe=f}break;case 30:break;default:ci(t,r)}}function Eg(t){var n=t.alternate;n!==null&&(t.alternate=null,Eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&kc(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var He=null,Tt=!1;function kn(t,n,r){for(r=r.child;r!==null;)Tg(t,n,r),r=r.sibling}function Tg(t,n,r){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(xr,r)}catch{}switch(r.tag){case 26:Xe||pn(r,n),kn(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Xe||pn(r,n);var l=He,c=Tt;gi(r.type)&&(He=r.stateNode,Tt=!1),kn(t,n,r),va(r.stateNode),He=l,Tt=c;break;case 5:Xe||pn(r,n);case 6:if(l=He,c=Tt,He=null,kn(t,n,r),He=l,Tt=c,He!==null)if(Tt)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(r.stateNode)}catch(f){De(r,n,f)}else try{He.removeChild(r.stateNode)}catch(f){De(r,n,f)}break;case 18:He!==null&&(Tt?(t=He,f_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ra(t)):f_(He,r.stateNode));break;case 4:l=He,c=Tt,He=r.stateNode.containerInfo,Tt=!0,kn(t,n,r),He=l,Tt=c;break;case 0:case 11:case 14:case 15:Xe||oi(2,r,n),Xe||oi(4,r,n),kn(t,n,r);break;case 1:Xe||(pn(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&gg(r,n,l)),kn(t,n,r);break;case 21:kn(t,n,r);break;case 22:Xe=(l=Xe)||r.memoizedState!==null,kn(t,n,r),Xe=l;break;default:kn(t,n,r)}}function wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ra(t)}catch(r){De(n,n.return,r)}}function iT(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new bg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new bg),n;default:throw Error(a(435,t.tag))}}function nf(t,n){var r=iT(t);n.forEach(function(l){var c=dT.bind(null,t,l);r.has(l)||(r.add(l),l.then(c,c))})}function Lt(t,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],f=t,g=n,_=g;e:for(;_!==null;){switch(_.tag){case 27:if(gi(_.type)){He=_.stateNode,Tt=!1;break e}break;case 5:He=_.stateNode,Tt=!1;break e;case 3:case 4:He=_.stateNode.containerInfo,Tt=!0;break e}_=_.return}if(He===null)throw Error(a(160));Tg(f,g,c),He=null,Tt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Cg(n,t),n=n.sibling}var en=null;function Cg(t,n){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Lt(n,t),Ut(t),l&4&&(oi(3,t,t.return),ca(3,t),oi(5,t,t.return));break;case 1:Lt(n,t),Ut(t),l&512&&(Xe||r===null||pn(r,r.return)),l&64&&Dn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var c=en;if(Lt(n,t),Ut(t),l&512&&(Xe||r===null||pn(r,r.return)),l&4){var f=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":f=c.getElementsByTagName("title")[0],(!f||f[kr]||f[ht]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(l),c.head.insertBefore(f,c.querySelector("head > title"))),ft(f,l,r),f[ht]=t,nt(f),l=f;break e;case"link":var g=v_("link","href",c).get(l+(r.href||""));if(g){for(var _=0;_<g.length;_++)if(f=g[_],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){g.splice(_,1);break t}}f=c.createElement(l),ft(f,l,r),c.head.appendChild(f);break;case"meta":if(g=v_("meta","content",c).get(l+(r.content||""))){for(_=0;_<g.length;_++)if(f=g[_],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){g.splice(_,1);break t}}f=c.createElement(l),ft(f,l,r),c.head.appendChild(f);break;default:throw Error(a(468,l))}f[ht]=t,nt(f),l=f}t.stateNode=l}else b_(c,t.type,t.stateNode);else t.stateNode=y_(c,l,t.memoizedProps);else f!==l?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,l===null?b_(c,t.type,t.stateNode):y_(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&$u(t,t.memoizedProps,r.memoizedProps)}break;case 27:Lt(n,t),Ut(t),l&512&&(Xe||r===null||pn(r,r.return)),r!==null&&l&4&&$u(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Lt(n,t),Ut(t),l&512&&(Xe||r===null||pn(r,r.return)),t.flags&32){c=t.stateNode;try{Rs(c,"")}catch(N){De(t,t.return,N)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,$u(t,c,r!==null?r.memoizedProps:c)),l&1024&&(tf=!0);break;case 6:if(Lt(n,t),Ut(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(N){De(t,t.return,N)}}break;case 3:if(ho=null,c=en,en=uo(n.containerInfo),Lt(n,t),en=c,Ut(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ra(n.containerInfo)}catch(N){De(t,t.return,N)}tf&&(tf=!1,Ag(t));break;case 4:l=en,en=uo(t.stateNode.containerInfo),Lt(n,t),Ut(t),en=l;break;case 12:Lt(n,t),Ut(t);break;case 13:Lt(n,t),Ut(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(cf=fn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nf(t,l)));break;case 22:c=t.memoizedState!==null;var S=r!==null&&r.memoizedState!==null,A=Dn,M=Xe;if(Dn=A||c,Xe=M||S,Lt(n,t),Xe=M,Dn=A,Ut(t),l&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||S||Dn||Xe||$i(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){S=r=n;try{if(f=S.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{_=S.stateNode;var k=S.memoizedProps.style,R=k!=null&&k.hasOwnProperty("display")?k.display:null;_.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){De(S,S.return,N)}}}else if(n.tag===6){if(r===null){S=n;try{S.stateNode.nodeValue=c?"":S.memoizedProps}catch(N){De(S,S.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,nf(t,r))));break;case 19:Lt(n,t),Ut(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nf(t,l)));break;case 30:break;case 21:break;default:Lt(n,t),Ut(t)}}function Ut(t){var n=t.flags;if(n&2){try{for(var r,l=t.return;l!==null;){if(yg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var c=r.stateNode,f=Ju(t);Zl(t,f,c);break;case 5:var g=r.stateNode;r.flags&32&&(Rs(g,""),r.flags&=-33);var _=Ju(t);Zl(t,_,g);break;case 3:case 4:var S=r.stateNode.containerInfo,A=Ju(t);ef(t,A,S);break;default:throw Error(a(161))}}catch(M){De(t,t.return,M)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ag(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ci(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(t,n.alternate,n),n=n.sibling}function $i(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:oi(4,n,n.return),$i(n);break;case 1:pn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&gg(n,n.return,r),$i(n);break;case 27:va(n.stateNode);case 26:case 5:pn(n,n.return),$i(n);break;case 22:n.memoizedState===null&&$i(n);break;case 30:$i(n);break;default:$i(n)}t=t.sibling}}function ui(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ui(c,f,r),ca(4,f);break;case 1:if(ui(c,f,r),l=f,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(A){De(l,l.return,A)}if(l=f,c=l.updateQueue,c!==null){var _=l.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)tm(S[c],_)}catch(A){De(l,l.return,A)}}r&&g&64&&mg(f),ua(f,f.return);break;case 27:vg(f);case 26:case 5:ui(c,f,r),r&&l===null&&g&4&&_g(f),ua(f,f.return);break;case 12:ui(c,f,r);break;case 13:ui(c,f,r),r&&g&4&&wg(c,f);break;case 22:f.memoizedState===null&&ui(c,f,r),ua(f,f.return);break;case 30:break;default:ui(c,f,r)}n=n.sibling}}function sf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Kr(r))}function rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Kr(t))}function mn(t,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(t,n,r,l),n=n.sibling}function Rg(t,n,r,l){var c=n.flags;switch(n.tag){case 0:case 11:case 15:mn(t,n,r,l),c&2048&&ca(9,n);break;case 1:mn(t,n,r,l);break;case 3:mn(t,n,r,l),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Kr(t)));break;case 12:if(c&2048){mn(t,n,r,l),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,_=f.onPostCommit;typeof _=="function"&&_(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){De(n,n.return,S)}}else mn(t,n,r,l);break;case 13:mn(t,n,r,l);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?mn(t,n,r,l):fa(t,n):f._visibility&2?mn(t,n,r,l):(f._visibility|=2,Fs(t,n,r,l,(n.subtreeFlags&10256)!==0)),c&2048&&sf(g,n);break;case 24:mn(t,n,r,l),c&2048&&rf(n.alternate,n);break;default:mn(t,n,r,l)}}function Fs(t,n,r,l,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,g=n,_=r,S=l,A=g.flags;switch(g.tag){case 0:case 11:case 15:Fs(f,g,_,S,c),ca(8,g);break;case 23:break;case 22:var M=g.stateNode;g.memoizedState!==null?M._visibility&2?Fs(f,g,_,S,c):fa(f,g):(M._visibility|=2,Fs(f,g,_,S,c)),c&&A&2048&&sf(g.alternate,g);break;case 24:Fs(f,g,_,S,c),c&&A&2048&&rf(g.alternate,g);break;default:Fs(f,g,_,S,c)}n=n.sibling}}function fa(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,l=n,c=l.flags;switch(l.tag){case 22:fa(r,l),c&2048&&sf(l.alternate,l);break;case 24:fa(r,l),c&2048&&rf(l.alternate,l);break;default:fa(r,l)}n=n.sibling}}var da=8192;function Qs(t){if(t.subtreeFlags&da)for(t=t.child;t!==null;)Ng(t),t=t.sibling}function Ng(t){switch(t.tag){case 26:Qs(t),t.flags&da&&t.memoizedState!==null&&VT(en,t.memoizedState,t.memoizedProps);break;case 5:Qs(t);break;case 3:case 4:var n=en;en=uo(t.stateNode.containerInfo),Qs(t),en=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=da,da=16777216,Qs(t),da=n):Qs(t));break;default:Qs(t)}}function Ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ha(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];st=l,xg(l,t)}Ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Og(t),t=t.sibling}function Og(t){switch(t.tag){case 0:case 11:case 15:ha(t),t.flags&2048&&oi(9,t,t.return);break;case 3:ha(t);break;case 12:ha(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,$l(t)):ha(t);break;default:ha(t)}}function $l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];st=l,xg(l,t)}Ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:oi(8,n,n.return),$l(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,$l(n));break;default:$l(n)}t=t.sibling}}function xg(t,n){for(;st!==null;){var r=st;switch(r.tag){case 0:case 11:case 15:oi(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kr(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,st=l;else e:for(r=t;st!==null;){l=st;var c=l.sibling,f=l.return;if(Eg(l),l===r){st=null;break e}if(c!==null){c.return=f,st=c;break e}st=f}}}var sT={getCacheForType:function(t){var n=pt($e),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},rT=typeof WeakMap=="function"?WeakMap:Map,we=0,Le=null,he=null,_e=0,Ce=0,zt=null,fi=!1,Xs=!1,af=!1,Ln=0,Ge=0,di=0,Ji=0,lf=0,Xt=0,Ks=0,pa=null,wt=null,of=!1,cf=0,Jl=1/0,eo=null,hi=null,ut=0,pi=null,Ws=null,Zs=0,uf=0,ff=null,Mg=null,ma=0,df=null;function Pt(){if((we&2)!==0&&_e!==0)return _e&-_e;if(O.T!==null){var t=Ps;return t!==0?t:vf()}return Xh()}function Dg(){Xt===0&&(Xt=(_e&536870912)===0||Se?Gh():536870912);var t=Qt.current;return t!==null&&(t.flags|=32),Xt}function Ht(t,n,r){(t===Le&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)&&($s(t,0),mi(t,_e,Xt,!1)),Dr(t,r),((we&2)===0||t!==Le)&&(t===Le&&((we&2)===0&&(Ji|=r),Ge===4&&mi(t,_e,Xt,!1)),gn(t))}function kg(t,n,r){if((we&6)!==0)throw Error(a(327));var l=!r&&(n&124)===0&&(n&t.expiredLanes)===0||Mr(t,n),c=l?oT(t,n):mf(t,n,!0),f=l;do{if(c===0){Xs&&!l&&mi(t,n,0,!1);break}else{if(r=t.current.alternate,f&&!aT(r)){c=mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var _=t;c=pa;var S=_.current.memoizedState.isDehydrated;if(S&&($s(_,g).flags|=256),g=mf(_,g,!1),g!==2){if(af&&!S){_.errorRecoveryDisabledLanes|=f,Ji|=f,c=4;break e}f=wt,wt=c,f!==null&&(wt===null?wt=f:wt.push.apply(wt,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){$s(t,0),mi(t,n,0,!0);break}e:{switch(l=t,f=c,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:mi(l,n,Xt,!fi);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=cf+300-fn(),10<c)){if(mi(l,n,Xt,!fi),fl(l,0,!0)!==0)break e;l.timeoutHandle=c_(Lg.bind(null,l,r,wt,eo,of,n,Xt,Ji,Ks,fi,f,2,-0,0),c);break e}Lg(l,r,wt,eo,of,n,Xt,Ji,Ks,fi,f,0,-0,0)}}break}while(!0);gn(t)}function Lg(t,n,r,l,c,f,g,_,S,A,M,k,R,N){if(t.timeoutHandle=-1,k=n.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(Ea={stylesheets:null,count:0,unsuspend:qT},Ng(n),k=jT(),k!==null)){t.cancelPendingCommit=k(Vg.bind(null,t,n,f,r,l,c,g,_,S,M,1,R,N)),mi(t,f,g,!A);return}Vg(t,n,f,r,l,c,g,_,S)}function aT(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var c=r[l],f=c.getSnapshot;c=c.value;try{if(!Dt(f(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mi(t,n,r,l){n&=~lf,n&=~Ji,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var c=n;0<c;){var f=31-Mt(c),g=1<<f;l[f]=-1,c&=~g}r!==0&&Fh(t,r,n)}function to(){return(we&6)===0?(ga(0),!1):!0}function hf(){if(he!==null){if(Ce===0)var t=he.return;else t=he,Rn=Qi=null,Iu(t),Gs=null,aa=0,t=he;for(;t!==null;)pg(t.alternate,t),t=t.return;he=null}}function $s(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,wT(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),hf(),Le=t,he=r=wn(t.current,null),_e=n,Ce=0,zt=null,fi=!1,Xs=Mr(t,n),af=!1,Ks=Xt=lf=Ji=di=Ge=0,wt=pa=null,of=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var c=31-Mt(l),f=1<<c;n|=t[c],l&=~f}return Ln=n,Tl(),r}function Ug(t,n){le=null,O.H=Vl,n===Zr||n===Ml?(n=Jp(),Ce=3):n===Wp?(n=Jp(),Ce=4):Ce=n===eg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,zt=n,he===null&&(Ge=1,Ql(t,jt(n,t.current)))}function zg(){var t=O.H;return O.H=Vl,t===null?Vl:t}function Pg(){var t=O.A;return O.A=sT,t}function pf(){Ge=4,fi||(_e&4194048)!==_e&&Qt.current!==null||(Xs=!0),(di&134217727)===0&&(Ji&134217727)===0||Le===null||mi(Le,_e,Xt,!1)}function mf(t,n,r){var l=we;we|=2;var c=zg(),f=Pg();(Le!==t||_e!==n)&&(eo=null,$s(t,n)),n=!1;var g=Ge;e:do try{if(Ce!==0&&he!==null){var _=he,S=zt;switch(Ce){case 8:hf(),g=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(n=!0);var A=Ce;if(Ce=0,zt=null,Js(t,_,S,A),r&&Xs){g=0;break e}break;default:A=Ce,Ce=0,zt=null,Js(t,_,S,A)}}lT(),g=Ge;break}catch(M){Ug(t,M)}while(!0);return n&&t.shellSuspendCounter++,Rn=Qi=null,we=l,O.H=c,O.A=f,he===null&&(Le=null,_e=0,Tl()),g}function lT(){for(;he!==null;)Hg(he)}function oT(t,n){var r=we;we|=2;var l=zg(),c=Pg();Le!==t||_e!==n?(eo=null,Jl=fn()+500,$s(t,n)):Xs=Mr(t,n);e:do try{if(Ce!==0&&he!==null){n=he;var f=zt;t:switch(Ce){case 1:Ce=0,zt=null,Js(t,n,f,1);break;case 2:case 9:if(Zp(f)){Ce=0,zt=null,Bg(n);break}n=function(){Ce!==2&&Ce!==9||Le!==t||(Ce=7),gn(t)},f.then(n,n);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:Zp(f)?(Ce=0,zt=null,Bg(n)):(Ce=0,zt=null,Js(t,n,f,7));break;case 5:var g=null;switch(he.tag){case 26:g=he.memoizedState;case 5:case 27:var _=he;if(!g||S_(g)){Ce=0,zt=null;var S=_.sibling;if(S!==null)he=S;else{var A=_.return;A!==null?(he=A,no(A)):he=null}break t}}Ce=0,zt=null,Js(t,n,f,5);break;case 6:Ce=0,zt=null,Js(t,n,f,6);break;case 8:hf(),Ge=6;break e;default:throw Error(a(462))}}cT();break}catch(M){Ug(t,M)}while(!0);return Rn=Qi=null,O.H=l,O.A=c,we=r,he!==null?0:(Le=null,_e=0,Tl(),Ge)}function cT(){for(;he!==null&&!xE();)Hg(he)}function Hg(t){var n=dg(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,n===null?no(t):he=n}function Bg(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=ag(r,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=ag(r,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Iu(n);default:pg(r,n),n=he=qp(n,Ln),n=dg(r,n,Ln)}t.memoizedProps=t.pendingProps,n===null?no(t):he=n}function Js(t,n,r,l){Rn=Qi=null,Iu(n),Gs=null,aa=0;var c=n.return;try{if($0(t,c,n,r,_e)){Ge=1,Ql(t,jt(r,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ge=1,Ql(t,jt(r,t.current)),he=null;return}n.flags&32768?(Se||l===1?t=!0:Xs||(_e&536870912)!==0?t=!1:(fi=t=!0,(l===2||l===9||l===3||l===6)&&(l=Qt.current,l!==null&&l.tag===13&&(l.flags|=16384))),qg(n,t)):no(n)}function no(t){var n=t;do{if((n.flags&32768)!==0){qg(n,fi);return}t=n.return;var r=eT(n.alternate,n,Ln);if(r!==null){he=r;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ge===0&&(Ge=5)}function qg(t,n){do{var r=tT(t.alternate,t);if(r!==null){r.flags&=32767,he=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=r}while(t!==null);Ge=6,he=null}function Vg(t,n,r,l,c,f,g,_,S){t.cancelPendingCommit=null;do io();while(ut!==0);if((we&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=su,qE(t,r,f,g,_,S),t===Le&&(he=Le=null,_e=0),Ws=n,pi=t,Zs=r,uf=f,ff=c,Mg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,hT(ol,function(){return Qg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,c=B.p,B.p=2,g=we,we|=4;try{nT(t,n,r)}finally{we=g,B.p=c,O.T=l}}ut=1,jg(),Gg(),Yg()}}function jg(){if(ut===1){ut=0;var t=pi,n=Ws,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=B.p;B.p=2;var c=we;we|=4;try{Cg(n,t);var f=Rf,g=xp(t.containerInfo),_=f.focusedElem,S=f.selectionRange;if(g!==_&&_&&_.ownerDocument&&Op(_.ownerDocument.documentElement,_)){if(S!==null&&Jc(_)){var A=S.start,M=S.end;if(M===void 0&&(M=A),"selectionStart"in _)_.selectionStart=A,_.selectionEnd=Math.min(M,_.value.length);else{var k=_.ownerDocument||document,R=k&&k.defaultView||window;if(R.getSelection){var N=R.getSelection(),J=_.textContent.length,Z=Math.min(S.start,J),Ne=S.end===void 0?Z:Math.min(S.end,J);!N.extend&&Z>Ne&&(g=Ne,Ne=Z,Z=g);var w=Ip(_,Z),T=Ip(_,Ne);if(w&&T&&(N.rangeCount!==1||N.anchorNode!==w.node||N.anchorOffset!==w.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var C=k.createRange();C.setStart(w.node,w.offset),N.removeAllRanges(),Z>Ne?(N.addRange(C),N.extend(T.node,T.offset)):(C.setEnd(T.node,T.offset),N.addRange(C))}}}}for(k=[],N=_;N=N.parentNode;)N.nodeType===1&&k.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<k.length;_++){var D=k[_];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}go=!!Af,Rf=Af=null}finally{we=c,B.p=l,O.T=r}}t.current=n,ut=2}}function Gg(){if(ut===2){ut=0;var t=pi,n=Ws,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=B.p;B.p=2;var c=we;we|=4;try{Sg(t,n.alternate,n)}finally{we=c,B.p=l,O.T=r}}ut=3}}function Yg(){if(ut===4||ut===3){ut=0,ME();var t=pi,n=Ws,r=Zs,l=Mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ut=5:(ut=0,Ws=pi=null,Fg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(hi=null),Mc(r),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(xr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,c=B.p,B.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<l.length;g++){var _=l[g];f(_.value,{componentStack:_.stack})}}finally{O.T=n,B.p=c}}(Zs&3)!==0&&io(),gn(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===df?ma++:(ma=0,df=t):ma=0,ga(0)}}function Fg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Kr(n)))}function io(t){return jg(),Gg(),Yg(),Qg()}function Qg(){if(ut!==5)return!1;var t=pi,n=uf;uf=0;var r=Mc(Zs),l=O.T,c=B.p;try{B.p=32>r?32:r,O.T=null,r=ff,ff=null;var f=pi,g=Zs;if(ut=0,Ws=pi=null,Zs=0,(we&6)!==0)throw Error(a(331));var _=we;if(we|=4,Og(f.current),Rg(f,f.current,g,r),we=_,ga(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(xr,f)}catch{}return!0}finally{B.p=c,O.T=l,Fg(t,n)}}function Xg(t,n,r){n=jt(r,n),n=ju(t.stateNode,n,2),t=si(t,n,2),t!==null&&(Dr(t,2),gn(t))}function De(t,n,r){if(t.tag===3)Xg(t,t,r);else for(;n!==null;){if(n.tag===3){Xg(n,t,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(hi===null||!hi.has(l))){t=jt(r,t),r=$m(2),l=si(n,r,2),l!==null&&(Jm(r,l,n,t),Dr(l,2),gn(l));break}}n=n.return}}function gf(t,n,r){var l=t.pingCache;if(l===null){l=t.pingCache=new rT;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(r)||(af=!0,c.add(r),t=uT.bind(null,t,n,r),n.then(t,t))}function uT(t,n,r){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Le===t&&(_e&r)===r&&(Ge===4||Ge===3&&(_e&62914560)===_e&&300>fn()-cf?(we&2)===0&&$s(t,0):lf|=r,Ks===_e&&(Ks=0)),gn(t)}function Kg(t,n){n===0&&(n=Yh()),t=ks(t,n),t!==null&&(Dr(t,n),gn(t))}function fT(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Kg(t,r)}function dT(t,n){var r=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),Kg(t,r)}function hT(t,n){return Nc(t,n)}var so=null,er=null,_f=!1,ro=!1,yf=!1,es=0;function gn(t){t!==er&&t.next===null&&(er===null?so=er=t:er=er.next=t),ro=!0,_f||(_f=!0,mT())}function ga(t,n){if(!yf&&ro){yf=!0;do for(var r=!1,l=so;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var f=0;else{var g=l.suspendedLanes,_=l.pingedLanes;f=(1<<31-Mt(42|t)+1)-1,f&=c&~(g&~_),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Jg(l,f))}else f=_e,f=fl(l,l===Le?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Mr(l,f)||(r=!0,Jg(l,f));l=l.next}while(r);yf=!1}}function pT(){Wg()}function Wg(){ro=_f=!1;var t=0;es!==0&&(TT()&&(t=es),es=0);for(var n=fn(),r=null,l=so;l!==null;){var c=l.next,f=Zg(l,n);f===0?(l.next=null,r===null?so=c:r.next=c,c===null&&(er=r)):(r=l,(t!==0||(f&3)!==0)&&(ro=!0)),l=c}ga(t)}function Zg(t,n){for(var r=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Mt(f),_=1<<g,S=c[g];S===-1?((_&r)===0||(_&l)!==0)&&(c[g]=BE(_,n)):S<=n&&(t.expiredLanes|=_),f&=~_}if(n=Le,r=_e,r=fl(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===n&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ic(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Mr(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(l!==null&&Ic(l),Mc(r)){case 2:case 8:r=Vh;break;case 32:r=ol;break;case 268435456:r=jh;break;default:r=ol}return l=$g.bind(null,t),r=Nc(r,l),t.callbackPriority=n,t.callbackNode=r,n}return l!==null&&l!==null&&Ic(l),t.callbackPriority=2,t.callbackNode=null,2}function $g(t,n){if(ut!==0&&ut!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(io()&&t.callbackNode!==r)return null;var l=_e;return l=fl(t,t===Le?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(kg(t,l,n),Zg(t,fn()),t.callbackNode!=null&&t.callbackNode===r?$g.bind(null,t):null)}function Jg(t,n){if(io())return null;kg(t,n,!0)}function mT(){CT(function(){(we&6)!==0?Nc(qh,pT):Wg()})}function vf(){return es===0&&(es=Gh()),es}function e_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gl(""+t)}function t_(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function gT(t,n,r,l,c){if(n==="submit"&&r&&r.stateNode===c){var f=e_((c[bt]||null).action),g=l.submitter;g&&(n=(n=g[bt]||null)?e_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var _=new bl("action","action",null,l,c);t.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(es!==0){var S=g?t_(c,g):new FormData(c);Pu(r,{pending:!0,data:S,method:c.method,action:f},null,S)}}else typeof f=="function"&&(_.preventDefault(),S=g?t_(c,g):new FormData(c),Pu(r,{pending:!0,data:S,method:c.method,action:f},f,S))},currentTarget:c}]})}}for(var bf=0;bf<iu.length;bf++){var Sf=iu[bf],_T=Sf.toLowerCase(),yT=Sf[0].toUpperCase()+Sf.slice(1);Jt(_T,"on"+yT)}Jt(kp,"onAnimationEnd"),Jt(Lp,"onAnimationIteration"),Jt(Up,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(L0,"onTransitionRun"),Jt(U0,"onTransitionStart"),Jt(z0,"onTransitionCancel"),Jt(zp,"onTransitionEnd"),ws("onMouseEnter",["mouseout","mouseover"]),ws("onMouseLeave",["mouseout","mouseover"]),ws("onPointerEnter",["pointerout","pointerover"]),ws("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_a));function n_(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],c=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var g=l.length-1;0<=g;g--){var _=l[g],S=_.instance,A=_.currentTarget;if(_=_.listener,S!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=A;try{f(c)}catch(M){Fl(M)}c.currentTarget=null,f=S}else for(g=0;g<l.length;g++){if(_=l[g],S=_.instance,A=_.currentTarget,_=_.listener,S!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=A;try{f(c)}catch(M){Fl(M)}c.currentTarget=null,f=S}}}}function pe(t,n){var r=n[Dc];r===void 0&&(r=n[Dc]=new Set);var l=t+"__bubble";r.has(l)||(i_(n,t,2,!1),r.add(l))}function Ef(t,n,r){var l=0;n&&(l|=4),i_(r,t,l,n)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[ao]){t[ao]=!0,Wh.forEach(function(r){r!=="selectionchange"&&(vT.has(r)||Ef(r,!1,t),Ef(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ao]||(n[ao]=!0,Ef("selectionchange",!1,n))}}function i_(t,n,r,l){switch(R_(n)){case 2:var c=FT;break;case 8:c=QT;break;default:c=zf}r=c.bind(null,n,r,t),c=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function wf(t,n,r,l,c){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var _=l.stateNode.containerInfo;if(_===c)break;if(g===4)for(g=l.return;g!==null;){var S=g.tag;if((S===3||S===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;_!==null;){if(g=Ss(_),g===null)return;if(S=g.tag,S===5||S===6||S===26||S===27){l=f=g;continue e}_=_.parentNode}}l=l.return}up(function(){var A=f,M=Vc(r),k=[];e:{var R=Pp.get(t);if(R!==void 0){var N=bl,J=t;switch(t){case"keypress":if(yl(r)===0)break e;case"keydown":case"keyup":N=h0;break;case"focusin":J="focus",N=Xc;break;case"focusout":J="blur",N=Xc;break;case"beforeblur":case"afterblur":N=Xc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=g0;break;case kp:case Lp:case Up:N=s0;break;case zp:N=y0;break;case"scroll":case"scrollend":N=JE;break;case"wheel":N=b0;break;case"copy":case"cut":case"paste":N=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=mp;break;case"toggle":case"beforetoggle":N=E0}var Z=(n&4)!==0,Ne=!Z&&(t==="scroll"||t==="scrollend"),w=Z?R!==null?R+"Capture":null:R;Z=[];for(var T=A,C;T!==null;){var D=T;if(C=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||C===null||w===null||(D=Ur(T,w),D!=null&&Z.push(ya(T,D,C))),Ne)break;T=T.return}0<Z.length&&(R=new N(R,J,null,r,M),k.push({event:R,listeners:Z}))}}if((n&7)===0){e:{if(R=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",R&&r!==qc&&(J=r.relatedTarget||r.fromElement)&&(Ss(J)||J[bs]))break e;if((N||R)&&(R=M.window===M?M:(R=M.ownerDocument)?R.defaultView||R.parentWindow:window,N?(J=r.relatedTarget||r.toElement,N=A,J=J?Ss(J):null,J!==null&&(Ne=u(J),Z=J.tag,J!==Ne||Z!==5&&Z!==27&&Z!==6)&&(J=null)):(N=null,J=A),N!==J)){if(Z=hp,D="onMouseLeave",w="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(Z=mp,D="onPointerLeave",w="onPointerEnter",T="pointer"),Ne=N==null?R:Lr(N),C=J==null?R:Lr(J),R=new Z(D,T+"leave",N,r,M),R.target=Ne,R.relatedTarget=C,D=null,Ss(M)===A&&(Z=new Z(w,T+"enter",J,r,M),Z.target=C,Z.relatedTarget=Ne,D=Z),Ne=D,N&&J)t:{for(Z=N,w=J,T=0,C=Z;C;C=tr(C))T++;for(C=0,D=w;D;D=tr(D))C++;for(;0<T-C;)Z=tr(Z),T--;for(;0<C-T;)w=tr(w),C--;for(;T--;){if(Z===w||w!==null&&Z===w.alternate)break t;Z=tr(Z),w=tr(w)}Z=null}else Z=null;N!==null&&s_(k,R,N,Z,!1),J!==null&&Ne!==null&&s_(k,Ne,J,Z,!0)}}e:{if(R=A?Lr(A):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var Y=Tp;else if(Sp(R))if(wp)Y=M0;else{Y=O0;var ce=I0}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&Bc(A.elementType)&&(Y=Tp):Y=x0;if(Y&&(Y=Y(t,A))){Ep(k,Y,r,M);break e}ce&&ce(t,R,A),t==="focusout"&&A&&R.type==="number"&&A.memoizedProps.value!=null&&Hc(R,"number",R.value)}switch(ce=A?Lr(A):window,t){case"focusin":(Sp(ce)||ce.contentEditable==="true")&&(xs=ce,eu=A,Gr=null);break;case"focusout":Gr=eu=xs=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,Mp(k,r,M);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":Mp(k,r,M)}var W;if(Wc)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Os?vp(t,r)&&($="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(gp&&r.locale!=="ko"&&(Os||$!=="onCompositionStart"?$==="onCompositionEnd"&&Os&&(W=fp()):(ei=M,Yc="value"in ei?ei.value:ei.textContent,Os=!0)),ce=lo(A,$),0<ce.length&&($=new pp($,t,null,r,M),k.push({event:$,listeners:ce}),W?$.data=W:(W=bp(r),W!==null&&($.data=W)))),(W=w0?C0(t,r):A0(t,r))&&($=lo(A,"onBeforeInput"),0<$.length&&(ce=new pp("onBeforeInput","beforeinput",null,r,M),k.push({event:ce,listeners:$}),ce.data=W)),gT(k,t,A,r,M)}n_(k,n)})}function ya(t,n,r){return{instance:t,listener:n,currentTarget:r}}function lo(t,n){for(var r=n+"Capture",l=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ur(t,r),c!=null&&l.unshift(ya(t,c,f)),c=Ur(t,n),c!=null&&l.push(ya(t,c,f))),t.tag===3)return l;t=t.return}return[]}function tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s_(t,n,r,l,c){for(var f=n._reactName,g=[];r!==null&&r!==l;){var _=r,S=_.alternate,A=_.stateNode;if(_=_.tag,S!==null&&S===l)break;_!==5&&_!==26&&_!==27||A===null||(S=A,c?(A=Ur(r,f),A!=null&&g.unshift(ya(r,A,S))):c||(A=Ur(r,f),A!=null&&g.push(ya(r,A,S)))),r=r.return}g.length!==0&&t.push({event:n,listeners:g})}var bT=/\r\n?/g,ST=/\u0000|\uFFFD/g;function r_(t){return(typeof t=="string"?t:""+t).replace(bT,`
`).replace(ST,"")}function a_(t,n){return n=r_(n),r_(t)===n}function oo(){}function Re(t,n,r,l,c,f){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Rs(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Rs(t,""+l);break;case"className":hl(t,"class",l);break;case"tabIndex":hl(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":hl(t,r,l);break;case"style":op(t,l,f);break;case"data":if(n!=="object"){hl(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=gl(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Re(t,n,"name",c.name,c,null),Re(t,n,"formEncType",c.formEncType,c,null),Re(t,n,"formMethod",c.formMethod,c,null),Re(t,n,"formTarget",c.formTarget,c,null)):(Re(t,n,"encType",c.encType,c,null),Re(t,n,"method",c.method,c,null),Re(t,n,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=gl(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=oo);break;case"onScroll":l!=null&&pe("scroll",t);break;case"onScrollEnd":l!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=gl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":pe("beforetoggle",t),pe("toggle",t),dl(t,"popover",l);break;case"xlinkActuate":En(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":En(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":En(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":En(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":En(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":En(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":En(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":En(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":En(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":dl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ZE.get(r)||r,dl(t,r,l))}}function Cf(t,n,r,l,c,f){switch(r){case"style":op(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?Rs(t,l):(typeof l=="number"||typeof l=="bigint")&&Rs(t,""+l);break;case"onScroll":l!=null&&pe("scroll",t);break;case"onScrollEnd":l!=null&&pe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=oo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zh.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),f=t[bt]||null,f=f!=null?f[r]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof l=="function")){typeof f!="function"&&f!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,l,c);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):dl(t,r,l)}}}function ft(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var l=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var g=r[f];if(g!=null)switch(f){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Re(t,n,f,g,r,null)}}c&&Re(t,n,"srcSet",r.srcSet,r,null),l&&Re(t,n,"src",r.src,r,null);return;case"input":pe("invalid",t);var _=f=g=c=null,S=null,A=null;for(l in r)if(r.hasOwnProperty(l)){var M=r[l];if(M!=null)switch(l){case"name":c=M;break;case"type":g=M;break;case"checked":S=M;break;case"defaultChecked":A=M;break;case"value":f=M;break;case"defaultValue":_=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(a(137,n));break;default:Re(t,n,l,M,r,null)}}sp(t,f,_,S,A,g,c,!1),pl(t);return;case"select":pe("invalid",t),l=g=f=null;for(c in r)if(r.hasOwnProperty(c)&&(_=r[c],_!=null))switch(c){case"value":f=_;break;case"defaultValue":g=_;break;case"multiple":l=_;default:Re(t,n,c,_,r,null)}n=f,r=g,t.multiple=!!l,n!=null?As(t,!!l,n,!1):r!=null&&As(t,!!l,r,!0);return;case"textarea":pe("invalid",t),f=c=l=null;for(g in r)if(r.hasOwnProperty(g)&&(_=r[g],_!=null))switch(g){case"value":l=_;break;case"defaultValue":c=_;break;case"children":f=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(a(91));break;default:Re(t,n,g,_,r,null)}ap(t,l,c,f),pl(t);return;case"option":for(S in r)if(r.hasOwnProperty(S)&&(l=r[S],l!=null))switch(S){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Re(t,n,S,l,r,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(l=0;l<_a.length;l++)pe(_a[l],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in r)if(r.hasOwnProperty(A)&&(l=r[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Re(t,n,A,l,r,null)}return;default:if(Bc(n)){for(M in r)r.hasOwnProperty(M)&&(l=r[M],l!==void 0&&Cf(t,n,M,l,r,void 0));return}}for(_ in r)r.hasOwnProperty(_)&&(l=r[_],l!=null&&Re(t,n,_,l,r,null))}function ET(t,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,_=null,S=null,A=null,M=null;for(N in r){var k=r[N];if(r.hasOwnProperty(N)&&k!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=k;default:l.hasOwnProperty(N)||Re(t,n,N,null,l,k)}}for(var R in l){var N=l[R];if(k=r[R],l.hasOwnProperty(R)&&(N!=null||k!=null))switch(R){case"type":f=N;break;case"name":c=N;break;case"checked":A=N;break;case"defaultChecked":M=N;break;case"value":g=N;break;case"defaultValue":_=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(137,n));break;default:N!==k&&Re(t,n,R,N,l,k)}}Pc(t,g,_,S,A,M,f,c);return;case"select":N=g=_=R=null;for(f in r)if(S=r[f],r.hasOwnProperty(f)&&S!=null)switch(f){case"value":break;case"multiple":N=S;default:l.hasOwnProperty(f)||Re(t,n,f,null,l,S)}for(c in l)if(f=l[c],S=r[c],l.hasOwnProperty(c)&&(f!=null||S!=null))switch(c){case"value":R=f;break;case"defaultValue":_=f;break;case"multiple":g=f;default:f!==S&&Re(t,n,c,f,l,S)}n=_,r=g,l=N,R!=null?As(t,!!r,R,!1):!!l!=!!r&&(n!=null?As(t,!!r,n,!0):As(t,!!r,r?[]:"",!1));return;case"textarea":N=R=null;for(_ in r)if(c=r[_],r.hasOwnProperty(_)&&c!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Re(t,n,_,null,l,c)}for(g in l)if(c=l[g],f=r[g],l.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":R=c;break;case"defaultValue":N=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&Re(t,n,g,c,l,f)}rp(t,R,N);return;case"option":for(var J in r)if(R=r[J],r.hasOwnProperty(J)&&R!=null&&!l.hasOwnProperty(J))switch(J){case"selected":t.selected=!1;break;default:Re(t,n,J,null,l,R)}for(S in l)if(R=l[S],N=r[S],l.hasOwnProperty(S)&&R!==N&&(R!=null||N!=null))switch(S){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Re(t,n,S,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in r)R=r[Z],r.hasOwnProperty(Z)&&R!=null&&!l.hasOwnProperty(Z)&&Re(t,n,Z,null,l,R);for(A in l)if(R=l[A],N=r[A],l.hasOwnProperty(A)&&R!==N&&(R!=null||N!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(137,n));break;default:Re(t,n,A,R,l,N)}return;default:if(Bc(n)){for(var Ne in r)R=r[Ne],r.hasOwnProperty(Ne)&&R!==void 0&&!l.hasOwnProperty(Ne)&&Cf(t,n,Ne,void 0,l,R);for(M in l)R=l[M],N=r[M],!l.hasOwnProperty(M)||R===N||R===void 0&&N===void 0||Cf(t,n,M,R,l,N);return}}for(var w in r)R=r[w],r.hasOwnProperty(w)&&R!=null&&!l.hasOwnProperty(w)&&Re(t,n,w,null,l,R);for(k in l)R=l[k],N=r[k],!l.hasOwnProperty(k)||R===N||R==null&&N==null||Re(t,n,k,R,l,N)}var Af=null,Rf=null;function co(t){return t.nodeType===9?t:t.ownerDocument}function l_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Nf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var If=null;function TT(){var t=window.event;return t&&t.type==="popstate"?t===If?!1:(If=t,!0):(If=null,!1)}var c_=typeof setTimeout=="function"?setTimeout:void 0,wT=typeof clearTimeout=="function"?clearTimeout:void 0,u_=typeof Promise=="function"?Promise:void 0,CT=typeof queueMicrotask=="function"?queueMicrotask:typeof u_<"u"?function(t){return u_.resolve(null).then(t).catch(AT)}:c_;function AT(t){setTimeout(function(){throw t})}function gi(t){return t==="head"}function f_(t,n){var r=n,l=0,c=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<l&&8>l){r=l;var g=t.ownerDocument;if(r&1&&va(g.documentElement),r&2&&va(g.body),r&4)for(r=g.head,va(r),g=r.firstChild;g;){var _=g.nextSibling,S=g.nodeName;g[kr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&g.rel.toLowerCase()==="stylesheet"||r.removeChild(g),g=_}}if(c===0){t.removeChild(f),Ra(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:l=r.charCodeAt(0)-48;else l=0;r=f}while(r);Ra(n)}function Of(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Of(r),kc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function RT(t,n,r,l){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[kr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=tn(t.nextSibling),t===null)break}return null}function NT(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=tn(t.nextSibling),t===null))return null;return t}function xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function IT(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function tn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Mf=null;function d_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function h_(t,n,r){switch(n=co(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function va(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);kc(t)}var Kt=new Map,p_=new Set;function uo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Un=B.d;B.d={f:OT,r:xT,D:MT,C:DT,L:kT,m:LT,X:zT,S:UT,M:PT};function OT(){var t=Un.f(),n=to();return t||n}function xT(t){var n=Es(t);n!==null&&n.tag===5&&n.type==="form"?km(n):Un.r(t)}var nr=typeof document>"u"?null:document;function m_(t,n,r){var l=nr;if(l&&typeof n=="string"&&n){var c=Vt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),p_.has(c)||(p_.add(c),t={rel:t,crossOrigin:r,href:n},l.querySelector(c)===null&&(n=l.createElement("link"),ft(n,"link",t),nt(n),l.head.appendChild(n)))}}function MT(t){Un.D(t),m_("dns-prefetch",t,null)}function DT(t,n){Un.C(t,n),m_("preconnect",t,n)}function kT(t,n,r){Un.L(t,n,r);var l=nr;if(l&&t&&n){var c='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Vt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Vt(r.imageSizes)+'"]')):c+='[href="'+Vt(t)+'"]';var f=c;switch(n){case"style":f=ir(t);break;case"script":f=sr(t)}Kt.has(f)||(t=y({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Kt.set(f,t),l.querySelector(c)!==null||n==="style"&&l.querySelector(ba(f))||n==="script"&&l.querySelector(Sa(f))||(n=l.createElement("link"),ft(n,"link",t),nt(n),l.head.appendChild(n)))}}function LT(t,n){Un.m(t,n);var r=nr;if(r&&t){var l=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Vt(l)+'"][href="'+Vt(t)+'"]',f=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(t)}if(!Kt.has(f)&&(t=y({rel:"modulepreload",href:t},n),Kt.set(f,t),r.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Sa(f)))return}l=r.createElement("link"),ft(l,"link",t),nt(l),r.head.appendChild(l)}}}function UT(t,n,r){Un.S(t,n,r);var l=nr;if(l&&t){var c=Ts(l).hoistableStyles,f=ir(t);n=n||"default";var g=c.get(f);if(!g){var _={loading:0,preload:null};if(g=l.querySelector(ba(f)))_.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Kt.get(f))&&Df(t,r);var S=g=l.createElement("link");nt(S),ft(S,"link",t),S._p=new Promise(function(A,M){S.onload=A,S.onerror=M}),S.addEventListener("load",function(){_.loading|=1}),S.addEventListener("error",function(){_.loading|=2}),_.loading|=4,fo(g,n,l)}g={type:"stylesheet",instance:g,count:1,state:_},c.set(f,g)}}}function zT(t,n){Un.X(t,n);var r=nr;if(r&&t){var l=Ts(r).hoistableScripts,c=sr(t),f=l.get(c);f||(f=r.querySelector(Sa(c)),f||(t=y({src:t,async:!0},n),(n=Kt.get(c))&&kf(t,n),f=r.createElement("script"),nt(f),ft(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function PT(t,n){Un.M(t,n);var r=nr;if(r&&t){var l=Ts(r).hoistableScripts,c=sr(t),f=l.get(c);f||(f=r.querySelector(Sa(c)),f||(t=y({src:t,async:!0,type:"module"},n),(n=Kt.get(c))&&kf(t,n),f=r.createElement("script"),nt(f),ft(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function g_(t,n,r,l){var c=(c=te.current)?uo(c):null;if(!c)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=ir(r.href),r=Ts(c).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ir(r.href);var f=Ts(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(ba(t)))&&!f._p&&(g.instance=f,g.state.loading=5),Kt.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Kt.set(t,r),f||HT(c,t,r,g.state))),n&&l===null)throw Error(a(528,""));return g}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(r),r=Ts(c).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ir(t){return'href="'+Vt(t)+'"'}function ba(t){return'link[rel="stylesheet"]['+t+"]"}function __(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function HT(t,n,r,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ft(n,"link",r),nt(n),t.head.appendChild(n))}function sr(t){return'[src="'+Vt(t)+'"]'}function Sa(t){return"script[async]"+t}function y_(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Vt(r.href)+'"]');if(l)return n.instance=l,nt(l),l;var c=y({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),nt(l),ft(l,"style",c),fo(l,r.precedence,t),n.instance=l;case"stylesheet":c=ir(r.href);var f=t.querySelector(ba(c));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;l=__(r),(c=Kt.get(c))&&Df(l,c),f=(t.ownerDocument||t).createElement("link"),nt(f);var g=f;return g._p=new Promise(function(_,S){g.onload=_,g.onerror=S}),ft(f,"link",l),n.state.loading|=4,fo(f,r.precedence,t),n.instance=f;case"script":return f=sr(r.src),(c=t.querySelector(Sa(f)))?(n.instance=c,nt(c),c):(l=r,(c=Kt.get(f))&&(l=y({},r),kf(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),nt(c),ft(c,"link",l),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,fo(l,r.precedence,t));return n.instance}function fo(t,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,f=c,g=0;g<l.length;g++){var _=l[g];if(_.dataset.precedence===n)f=_;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ho=null;function v_(t,n,r){if(ho===null){var l=new Map,c=ho=new Map;c.set(r,l)}else c=ho,l=c.get(r),l||(l=new Map,c.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var f=r[c];if(!(f[kr]||f[ht]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var _=l.get(g);_?_.push(f):l.set(g,[f])}}return l}function b_(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function BT(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function S_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ea=null;function qT(){}function VT(t,n,r){if(Ea===null)throw Error(a(475));var l=Ea;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ir(r.href),f=t.querySelector(ba(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=po.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=f,nt(f);return}f=t.ownerDocument||t,r=__(r),(c=Kt.get(c))&&Df(r,c),f=f.createElement("link"),nt(f);var g=f;g._p=new Promise(function(_,S){g.onload=_,g.onerror=S}),ft(f,"link",r),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=po.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}function jT(){if(Ea===null)throw Error(a(475));var t=Ea;return t.stylesheets&&t.count===0&&Lf(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Lf(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function po(){if(this.count--,this.count===0){if(this.stylesheets)Lf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mo=null;function Lf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mo=new Map,n.forEach(GT,t),mo=null,po.call(t))}function GT(t,n){if(!(n.state.loading&4)){var r=mo.get(t);if(r)var l=r.get(null);else{r=new Map,mo.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(r.set(g.dataset.precedence,g),l=g)}l&&r.set(null,l)}c=n.instance,g=c.getAttribute("data-precedence"),f=r.get(g)||l,f===l&&r.set(null,c),r.set(g,c),this.count++,l=po.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ta={$$typeof:ge,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function YT(t,n,r,l,c,f,g,_){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.hiddenUpdates=Oc(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function E_(t,n,r,l,c,f,g,_,S,A,M,k){return t=new YT(t,n,r,g,_,S,A,k),n=1,f===!0&&(n|=24),f=kt(3,null,null,n),t.current=f,f.stateNode=t,n=mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:r,cache:n},vu(f),t}function T_(t){return t?(t=Ls,t):Ls}function w_(t,n,r,l,c,f){c=T_(c),l.context===null?l.context=c:l.pendingContext=c,l=ii(n),l.payload={element:r},f=f===void 0?null:f,f!==null&&(l.callback=f),r=si(t,l,n),r!==null&&(Ht(r,t,n),Jr(r,t,n))}function C_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Uf(t,n){C_(t,n),(t=t.alternate)&&C_(t,n)}function A_(t){if(t.tag===13){var n=ks(t,67108864);n!==null&&Ht(n,t,67108864),Uf(t,67108864)}}var go=!0;function FT(t,n,r,l){var c=O.T;O.T=null;var f=B.p;try{B.p=2,zf(t,n,r,l)}finally{B.p=f,O.T=c}}function QT(t,n,r,l){var c=O.T;O.T=null;var f=B.p;try{B.p=8,zf(t,n,r,l)}finally{B.p=f,O.T=c}}function zf(t,n,r,l){if(go){var c=Pf(l);if(c===null)wf(t,n,l,_o,r),N_(t,l);else if(KT(c,t,n,r,l))l.stopPropagation();else if(N_(t,l),n&4&&-1<XT.indexOf(t)){for(;c!==null;){var f=Es(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=zi(f.pendingLanes);if(g!==0){var _=f;for(_.pendingLanes|=2,_.entangledLanes|=2;g;){var S=1<<31-Mt(g);_.entanglements[1]|=S,g&=~S}gn(f),(we&6)===0&&(Jl=fn()+500,ga(0))}}break;case 13:_=ks(f,2),_!==null&&Ht(_,f,2),to(),Uf(f,2)}if(f=Pf(l),f===null&&wf(t,n,l,_o,r),f===c)break;c=f}c!==null&&l.stopPropagation()}else wf(t,n,l,null,r)}}function Pf(t){return t=Vc(t),Hf(t)}var _o=null;function Hf(t){if(_o=null,t=Ss(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _o=t,null}function R_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(DE()){case qh:return 2;case Vh:return 8;case ol:case kE:return 32;case jh:return 268435456;default:return 32}default:return 32}}var Bf=!1,_i=null,yi=null,vi=null,wa=new Map,Ca=new Map,bi=[],XT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N_(t,n){switch(t){case"focusin":case"focusout":_i=null;break;case"dragenter":case"dragleave":yi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":wa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(n.pointerId)}}function Aa(t,n,r,l,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Es(n),n!==null&&A_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function KT(t,n,r,l,c){switch(n){case"focusin":return _i=Aa(_i,t,n,r,l,c),!0;case"dragenter":return yi=Aa(yi,t,n,r,l,c),!0;case"mouseover":return vi=Aa(vi,t,n,r,l,c),!0;case"pointerover":var f=c.pointerId;return wa.set(f,Aa(wa.get(f)||null,t,n,r,l,c)),!0;case"gotpointercapture":return f=c.pointerId,Ca.set(f,Aa(Ca.get(f)||null,t,n,r,l,c)),!0}return!1}function I_(t){var n=Ss(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){t.blockedOn=n,VE(t.priority,function(){if(r.tag===13){var l=Pt();l=xc(l);var c=ks(r,l);c!==null&&Ht(c,r,l),Uf(r,l)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yo(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Pf(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);qc=l,r.target.dispatchEvent(l),qc=null}else return n=Es(r),n!==null&&A_(n),t.blockedOn=r,!1;n.shift()}return!0}function O_(t,n,r){yo(t)&&r.delete(n)}function WT(){Bf=!1,_i!==null&&yo(_i)&&(_i=null),yi!==null&&yo(yi)&&(yi=null),vi!==null&&yo(vi)&&(vi=null),wa.forEach(O_),Ca.forEach(O_)}function vo(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,WT)))}var bo=null;function x_(t){bo!==t&&(bo=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){bo===t&&(bo=null);for(var n=0;n<t.length;n+=3){var r=t[n],l=t[n+1],c=t[n+2];if(typeof l!="function"){if(Hf(l||r)===null)continue;break}var f=Es(r);f!==null&&(t.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:r.method,action:l},l,c))}}))}function Ra(t){function n(S){return vo(S,t)}_i!==null&&vo(_i,t),yi!==null&&vo(yi,t),vi!==null&&vo(vi,t),wa.forEach(n),Ca.forEach(n);for(var r=0;r<bi.length;r++){var l=bi[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<bi.length&&(r=bi[0],r.blockedOn===null);)I_(r),r.blockedOn===null&&bi.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var c=r[l],f=r[l+1],g=c[bt]||null;if(typeof f=="function")g||x_(r);else if(g){var _=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[bt]||null)_=g.formAction;else if(Hf(c)!==null)continue}else _=g.action;typeof _=="function"?r[l+1]=_:(r.splice(l,3),l-=3),x_(r)}}}function qf(t){this._internalRoot=t}So.prototype.render=qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=Pt();w_(r,l,t,n,null,null)},So.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;w_(t.current,2,null,t,null,null),to(),n[bs]=null}};function So(t){this._internalRoot=t}So.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xh();t={blockedOn:null,target:t,priority:n};for(var r=0;r<bi.length&&n!==0&&n<bi[r].priority;r++);bi.splice(r,0,t),r===0&&I_(t)}};var M_=e.version;if(M_!=="19.1.1")throw Error(a(527,M_,"19.1.1"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var ZT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{xr=Eo.inject(ZT),xt=Eo}catch{}}return Ia.createRoot=function(t,n){if(!o(t))throw Error(a(299));var r=!1,l="",c=Xm,f=Km,g=Wm,_=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks)),n=E_(t,1,!1,null,null,r,l,c,f,g,_,null),t[bs]=n.current,Tf(t),new qf(n)},Ia.hydrateRoot=function(t,n,r){if(!o(t))throw Error(a(299));var l=!1,c="",f=Xm,g=Km,_=Wm,S=null,A=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks),r.formState!==void 0&&(A=r.formState)),n=E_(t,1,!0,n,r??null,l,c,f,g,_,S,A),n.context=T_(null),r=n.current,l=Pt(),l=xc(l),c=ii(l),c.callback=null,si(r,c,l),r=l,n.current.lanes=r,Dr(n,r),gn(n),t[bs]=n.current,Tf(t),new So(n)},Ia.version="19.1.1",Ia}var V_;function aw(){if(V_)return Gf.exports;V_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Gf.exports=rw(),Gf.exports}var lw=aw();function j_(s,e){if(typeof s=="function")return s(e);s!=null&&(s.current=e)}function yv(...s){return e=>{let i=!1;const a=s.map(o=>{const u=j_(o,e);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let o=0;o<a.length;o++){const u=a[o];typeof u=="function"?u():j_(s[o],null)}}}}function gs(...s){return L.useCallback(yv(...s),s)}function vv(s){const e=cw(s),i=L.forwardRef((a,o)=>{const{children:u,...d}=a,h=L.Children.toArray(u),p=h.find(fw);if(p){const m=p.props.children,y=h.map(b=>b===p?L.Children.count(m)>1?L.Children.only(null):L.isValidElement(m)?m.props.children:null:b);return j.jsx(e,{...d,ref:o,children:L.isValidElement(m)?L.cloneElement(m,void 0,y):null})}return j.jsx(e,{...d,ref:o,children:u})});return i.displayName=`${s}.Slot`,i}var ow=vv("Slot");function cw(s){const e=L.forwardRef((i,a)=>{const{children:o,...u}=i;if(L.isValidElement(o)){const d=hw(o),h=dw(u,o.props);return o.type!==L.Fragment&&(h.ref=a?yv(a,d):d),L.cloneElement(o,h)}return L.Children.count(o)>1?L.Children.only(null):null});return e.displayName=`${s}.SlotClone`,e}var uw=Symbol("radix.slottable");function fw(s){return L.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===uw}function dw(s,e){const i={...e};for(const a in e){const o=s[a],u=e[a];/^on[A-Z]/.test(a)?o&&u?i[a]=(...h)=>{const p=u(...h);return o(...h),p}:o&&(i[a]=o):a==="style"?i[a]={...o,...u}:a==="className"&&(i[a]=[o,u].filter(Boolean).join(" "))}return{...s,...i}}function hw(s){let e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,i=e&&"isReactWarning"in e&&e.isReactWarning;return i?s.ref:(e=Object.getOwnPropertyDescriptor(s,"ref")?.get,i=e&&"isReactWarning"in e&&e.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function bv(s){var e,i,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var o=s.length;for(e=0;e<o;e++)s[e]&&(i=bv(s[e]))&&(a&&(a+=" "),a+=i)}else for(i in s)s[i]&&(a&&(a+=" "),a+=i);return a}function Sv(){for(var s,e,i=0,a="",o=arguments.length;i<o;i++)(s=arguments[i])&&(e=bv(s))&&(a&&(a+=" "),a+=e);return a}const G_=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,Y_=Sv,pw=(s,e)=>i=>{var a;if(e?.variants==null)return Y_(s,i?.class,i?.className);const{variants:o,defaultVariants:u}=e,d=Object.keys(o).map(m=>{const y=i?.[m],b=u?.[m];if(y===null)return null;const v=G_(y)||G_(b);return o[m][v]}),h=i&&Object.entries(i).reduce((m,y)=>{let[b,v]=y;return v===void 0||(m[b]=v),m},{}),p=e==null||(a=e.compoundVariants)===null||a===void 0?void 0:a.reduce((m,y)=>{let{class:b,className:v,...I}=y;return Object.entries(I).every(x=>{let[q,K]=x;return Array.isArray(K)?K.includes({...u,...h}[q]):{...u,...h}[q]===K})?[...m,b,v]:m},[]);return Y_(s,d,p,i?.class,i?.className)},Vd="-",mw=s=>{const e=_w(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=s;return{getClassGroupId:d=>{const h=d.split(Vd);return h[0]===""&&h.length!==1&&h.shift(),Ev(h,e)||gw(d)},getConflictingClassGroupIds:(d,h)=>{const p=i[d]||[];return h&&a[d]?[...p,...a[d]]:p}}},Ev=(s,e)=>{if(s.length===0)return e.classGroupId;const i=s[0],a=e.nextPart.get(i),o=a?Ev(s.slice(1),a):void 0;if(o)return o;if(e.validators.length===0)return;const u=s.join(Vd);return e.validators.find(({validator:d})=>d(u))?.classGroupId},F_=/^\[(.+)\]$/,gw=s=>{if(F_.test(s)){const e=F_.exec(s)[1],i=e?.substring(0,e.indexOf(":"));if(i)return"arbitrary.."+i}},_w=s=>{const{theme:e,classGroups:i}=s,a={nextPart:new Map,validators:[]};for(const o in i)hd(i[o],a,o,e);return a},hd=(s,e,i,a)=>{s.forEach(o=>{if(typeof o=="string"){const u=o===""?e:Q_(e,o);u.classGroupId=i;return}if(typeof o=="function"){if(yw(o)){hd(o(a),e,i,a);return}e.validators.push({validator:o,classGroupId:i});return}Object.entries(o).forEach(([u,d])=>{hd(d,Q_(e,u),i,a)})})},Q_=(s,e)=>{let i=s;return e.split(Vd).forEach(a=>{i.nextPart.has(a)||i.nextPart.set(a,{nextPart:new Map,validators:[]}),i=i.nextPart.get(a)}),i},yw=s=>s.isThemeGetter,vw=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,i=new Map,a=new Map;const o=(u,d)=>{i.set(u,d),e++,e>s&&(e=0,a=i,i=new Map)};return{get(u){let d=i.get(u);if(d!==void 0)return d;if((d=a.get(u))!==void 0)return o(u,d),d},set(u,d){i.has(u)?i.set(u,d):o(u,d)}}},pd="!",md=":",bw=md.length,Sw=s=>{const{prefix:e,experimentalParseClassName:i}=s;let a=o=>{const u=[];let d=0,h=0,p=0,m;for(let x=0;x<o.length;x++){let q=o[x];if(d===0&&h===0){if(q===md){u.push(o.slice(p,x)),p=x+bw;continue}if(q==="/"){m=x;continue}}q==="["?d++:q==="]"?d--:q==="("?h++:q===")"&&h--}const y=u.length===0?o:o.substring(p),b=Ew(y),v=b!==y,I=m&&m>p?m-p:void 0;return{modifiers:u,hasImportantModifier:v,baseClassName:b,maybePostfixModifierPosition:I}};if(e){const o=e+md,u=a;a=d=>d.startsWith(o)?u(d.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(i){const o=a;a=u=>i({className:u,parseClassName:o})}return a},Ew=s=>s.endsWith(pd)?s.substring(0,s.length-1):s.startsWith(pd)?s.substring(1):s,Tw=s=>{const e=Object.fromEntries(s.orderSensitiveModifiers.map(a=>[a,!0]));return a=>{if(a.length<=1)return a;const o=[];let u=[];return a.forEach(d=>{d[0]==="["||e[d]?(o.push(...u.sort(),d),u=[]):u.push(d)}),o.push(...u.sort()),o}},ww=s=>({cache:vw(s.cacheSize),parseClassName:Sw(s),sortModifiers:Tw(s),...mw(s)}),Cw=/\s+/,Aw=(s,e)=>{const{parseClassName:i,getClassGroupId:a,getConflictingClassGroupIds:o,sortModifiers:u}=e,d=[],h=s.trim().split(Cw);let p="";for(let m=h.length-1;m>=0;m-=1){const y=h[m],{isExternal:b,modifiers:v,hasImportantModifier:I,baseClassName:x,maybePostfixModifierPosition:q}=i(y);if(b){p=y+(p.length>0?" "+p:p);continue}let K=!!q,re=a(K?x.substring(0,q):x);if(!re){if(!K){p=y+(p.length>0?" "+p:p);continue}if(re=a(x),!re){p=y+(p.length>0?" "+p:p);continue}K=!1}const be=u(v).join(":"),ge=I?be+pd:be,Oe=ge+re;if(d.includes(Oe))continue;d.push(Oe);const ie=o(re,K);for(let xe=0;xe<ie.length;++xe){const Pe=ie[xe];d.push(ge+Pe)}p=y+(p.length>0?" "+p:p)}return p};function Rw(){let s=0,e,i,a="";for(;s<arguments.length;)(e=arguments[s++])&&(i=Tv(e))&&(a&&(a+=" "),a+=i);return a}const Tv=s=>{if(typeof s=="string")return s;let e,i="";for(let a=0;a<s.length;a++)s[a]&&(e=Tv(s[a]))&&(i&&(i+=" "),i+=e);return i};function Nw(s,...e){let i,a,o,u=d;function d(p){const m=e.reduce((y,b)=>b(y),s());return i=ww(m),a=i.cache.get,o=i.cache.set,u=h,h(p)}function h(p){const m=a(p);if(m)return m;const y=Aw(p,i);return o(p,y),y}return function(){return u(Rw.apply(null,arguments))}}const et=s=>{const e=i=>i[s]||[];return e.isThemeGetter=!0,e},wv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Cv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Iw=/^\d+\/\d+$/,Ow=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Mw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Dw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,rr=s=>Iw.test(s),oe=s=>!!s&&!Number.isNaN(Number(s)),Ei=s=>!!s&&Number.isInteger(Number(s)),Xf=s=>s.endsWith("%")&&oe(s.slice(0,-1)),zn=s=>Ow.test(s),Lw=()=>!0,Uw=s=>xw.test(s)&&!Mw.test(s),Av=()=>!1,zw=s=>Dw.test(s),Pw=s=>kw.test(s),Hw=s=>!F(s)&&!Q(s),Bw=s=>Sr(s,Iv,Av),F=s=>wv.test(s),ts=s=>Sr(s,Ov,Uw),Kf=s=>Sr(s,Yw,oe),X_=s=>Sr(s,Rv,Av),qw=s=>Sr(s,Nv,Pw),To=s=>Sr(s,xv,zw),Q=s=>Cv.test(s),Oa=s=>Er(s,Ov),Vw=s=>Er(s,Fw),K_=s=>Er(s,Rv),jw=s=>Er(s,Iv),Gw=s=>Er(s,Nv),wo=s=>Er(s,xv,!0),Sr=(s,e,i)=>{const a=wv.exec(s);return a?a[1]?e(a[1]):i(a[2]):!1},Er=(s,e,i=!1)=>{const a=Cv.exec(s);return a?a[1]?e(a[1]):i:!1},Rv=s=>s==="position"||s==="percentage",Nv=s=>s==="image"||s==="url",Iv=s=>s==="length"||s==="size"||s==="bg-size",Ov=s=>s==="length",Yw=s=>s==="number",Fw=s=>s==="family-name",xv=s=>s==="shadow",Qw=()=>{const s=et("color"),e=et("font"),i=et("text"),a=et("font-weight"),o=et("tracking"),u=et("leading"),d=et("breakpoint"),h=et("container"),p=et("spacing"),m=et("radius"),y=et("shadow"),b=et("inset-shadow"),v=et("text-shadow"),I=et("drop-shadow"),x=et("blur"),q=et("perspective"),K=et("aspect"),re=et("ease"),be=et("animate"),ge=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Oe=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ie=()=>[...Oe(),Q,F],xe=()=>["auto","hidden","clip","visible","scroll"],Pe=()=>["auto","contain","none"],X=()=>[Q,F,p],ae=()=>[rr,"full","auto",...X()],Fe=()=>[Ei,"none","subgrid",Q,F],Ze=()=>["auto",{span:["full",Ei,Q,F]},Ei,Q,F],Ve=()=>[Ei,"auto",Q,F],un=()=>["auto","min","max","fr",Q,F],$t=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Be=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...X()],B=()=>[rr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...X()],z=()=>[s,Q,F],Te=()=>[...Oe(),K_,X_,{position:[Q,F]}],E=()=>["no-repeat",{repeat:["","x","y","space","round"]}],U=()=>["auto","cover","contain",jw,Bw,{size:[Q,F]}],V=()=>[Xf,Oa,ts],P=()=>["","none","full",m,Q,F],G=()=>["",oe,Oa,ts],de=()=>["solid","dashed","dotted","double"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[oe,Xf,K_,X_],Me=()=>["","none",x,Q,F],Ot=()=>["none",oe,Q,F],Kn=()=>["none",oe,Q,F],Wn=()=>[oe,Q,F],Zn=()=>[rr,"full",...X()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[zn],breakpoint:[zn],color:[Lw],container:[zn],"drop-shadow":[zn],ease:["in","out","in-out"],font:[Hw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[zn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[zn],shadow:[zn],spacing:["px",oe],text:[zn],"text-shadow":[zn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",rr,F,Q,K]}],container:["container"],columns:[{columns:[oe,F,Q,h]}],"break-after":[{"break-after":ge()}],"break-before":[{"break-before":ge()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ie()}],overflow:[{overflow:xe()}],"overflow-x":[{"overflow-x":xe()}],"overflow-y":[{"overflow-y":xe()}],overscroll:[{overscroll:Pe()}],"overscroll-x":[{"overscroll-x":Pe()}],"overscroll-y":[{"overscroll-y":Pe()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ae()}],"inset-x":[{"inset-x":ae()}],"inset-y":[{"inset-y":ae()}],start:[{start:ae()}],end:[{end:ae()}],top:[{top:ae()}],right:[{right:ae()}],bottom:[{bottom:ae()}],left:[{left:ae()}],visibility:["visible","invisible","collapse"],z:[{z:[Ei,"auto",Q,F]}],basis:[{basis:[rr,"full","auto",h,...X()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[oe,rr,"auto","initial","none",F]}],grow:[{grow:["",oe,Q,F]}],shrink:[{shrink:["",oe,Q,F]}],order:[{order:[Ei,"first","last","none",Q,F]}],"grid-cols":[{"grid-cols":Fe()}],"col-start-end":[{col:Ze()}],"col-start":[{"col-start":Ve()}],"col-end":[{"col-end":Ve()}],"grid-rows":[{"grid-rows":Fe()}],"row-start-end":[{row:Ze()}],"row-start":[{"row-start":Ve()}],"row-end":[{"row-end":Ve()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":un()}],"auto-rows":[{"auto-rows":un()}],gap:[{gap:X()}],"gap-x":[{"gap-x":X()}],"gap-y":[{"gap-y":X()}],"justify-content":[{justify:[...$t(),"normal"]}],"justify-items":[{"justify-items":[...Be(),"normal"]}],"justify-self":[{"justify-self":["auto",...Be()]}],"align-content":[{content:["normal",...$t()]}],"align-items":[{items:[...Be(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Be(),{baseline:["","last"]}]}],"place-content":[{"place-content":$t()}],"place-items":[{"place-items":[...Be(),"baseline"]}],"place-self":[{"place-self":["auto",...Be()]}],p:[{p:X()}],px:[{px:X()}],py:[{py:X()}],ps:[{ps:X()}],pe:[{pe:X()}],pt:[{pt:X()}],pr:[{pr:X()}],pb:[{pb:X()}],pl:[{pl:X()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":X()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":X()}],"space-y-reverse":["space-y-reverse"],size:[{size:B()}],w:[{w:[h,"screen",...B()]}],"min-w":[{"min-w":[h,"screen","none",...B()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...B()]}],h:[{h:["screen","lh",...B()]}],"min-h":[{"min-h":["screen","lh","none",...B()]}],"max-h":[{"max-h":["screen","lh",...B()]}],"font-size":[{text:["base",i,Oa,ts]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,Q,Kf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Xf,F]}],"font-family":[{font:[Vw,F,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Q,F]}],"line-clamp":[{"line-clamp":[oe,"none",Q,Kf]}],leading:[{leading:[u,...X()]}],"list-image":[{"list-image":["none",Q,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Q,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:z()}],"text-color":[{text:z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...de(),"wavy"]}],"text-decoration-thickness":[{decoration:[oe,"from-font","auto",Q,ts]}],"text-decoration-color":[{decoration:z()}],"underline-offset":[{"underline-offset":[oe,"auto",Q,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:X()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Te()}],"bg-repeat":[{bg:E()}],"bg-size":[{bg:U()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ei,Q,F],radial:["",Q,F],conic:[Ei,Q,F]},Gw,qw]}],"bg-color":[{bg:z()}],"gradient-from-pos":[{from:V()}],"gradient-via-pos":[{via:V()}],"gradient-to-pos":[{to:V()}],"gradient-from":[{from:z()}],"gradient-via":[{via:z()}],"gradient-to":[{to:z()}],rounded:[{rounded:P()}],"rounded-s":[{"rounded-s":P()}],"rounded-e":[{"rounded-e":P()}],"rounded-t":[{"rounded-t":P()}],"rounded-r":[{"rounded-r":P()}],"rounded-b":[{"rounded-b":P()}],"rounded-l":[{"rounded-l":P()}],"rounded-ss":[{"rounded-ss":P()}],"rounded-se":[{"rounded-se":P()}],"rounded-ee":[{"rounded-ee":P()}],"rounded-es":[{"rounded-es":P()}],"rounded-tl":[{"rounded-tl":P()}],"rounded-tr":[{"rounded-tr":P()}],"rounded-br":[{"rounded-br":P()}],"rounded-bl":[{"rounded-bl":P()}],"border-w":[{border:G()}],"border-w-x":[{"border-x":G()}],"border-w-y":[{"border-y":G()}],"border-w-s":[{"border-s":G()}],"border-w-e":[{"border-e":G()}],"border-w-t":[{"border-t":G()}],"border-w-r":[{"border-r":G()}],"border-w-b":[{"border-b":G()}],"border-w-l":[{"border-l":G()}],"divide-x":[{"divide-x":G()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":G()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...de(),"hidden","none"]}],"divide-style":[{divide:[...de(),"hidden","none"]}],"border-color":[{border:z()}],"border-color-x":[{"border-x":z()}],"border-color-y":[{"border-y":z()}],"border-color-s":[{"border-s":z()}],"border-color-e":[{"border-e":z()}],"border-color-t":[{"border-t":z()}],"border-color-r":[{"border-r":z()}],"border-color-b":[{"border-b":z()}],"border-color-l":[{"border-l":z()}],"divide-color":[{divide:z()}],"outline-style":[{outline:[...de(),"none","hidden"]}],"outline-offset":[{"outline-offset":[oe,Q,F]}],"outline-w":[{outline:["",oe,Oa,ts]}],"outline-color":[{outline:z()}],shadow:[{shadow:["","none",y,wo,To]}],"shadow-color":[{shadow:z()}],"inset-shadow":[{"inset-shadow":["none",b,wo,To]}],"inset-shadow-color":[{"inset-shadow":z()}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:z()}],"ring-offset-w":[{"ring-offset":[oe,ts]}],"ring-offset-color":[{"ring-offset":z()}],"inset-ring-w":[{"inset-ring":G()}],"inset-ring-color":[{"inset-ring":z()}],"text-shadow":[{"text-shadow":["none",v,wo,To]}],"text-shadow-color":[{"text-shadow":z()}],opacity:[{opacity:[oe,Q,F]}],"mix-blend":[{"mix-blend":[...te(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":te()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[oe]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":z()}],"mask-image-linear-to-color":[{"mask-linear-to":z()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":z()}],"mask-image-t-to-color":[{"mask-t-to":z()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":z()}],"mask-image-r-to-color":[{"mask-r-to":z()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":z()}],"mask-image-b-to-color":[{"mask-b-to":z()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":z()}],"mask-image-l-to-color":[{"mask-l-to":z()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":z()}],"mask-image-x-to-color":[{"mask-x-to":z()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":z()}],"mask-image-y-to-color":[{"mask-y-to":z()}],"mask-image-radial":[{"mask-radial":[Q,F]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":z()}],"mask-image-radial-to-color":[{"mask-radial-to":z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Oe()}],"mask-image-conic-pos":[{"mask-conic":[oe]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":z()}],"mask-image-conic-to-color":[{"mask-conic-to":z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Te()}],"mask-repeat":[{mask:E()}],"mask-size":[{mask:U()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Q,F]}],filter:[{filter:["","none",Q,F]}],blur:[{blur:Me()}],brightness:[{brightness:[oe,Q,F]}],contrast:[{contrast:[oe,Q,F]}],"drop-shadow":[{"drop-shadow":["","none",I,wo,To]}],"drop-shadow-color":[{"drop-shadow":z()}],grayscale:[{grayscale:["",oe,Q,F]}],"hue-rotate":[{"hue-rotate":[oe,Q,F]}],invert:[{invert:["",oe,Q,F]}],saturate:[{saturate:[oe,Q,F]}],sepia:[{sepia:["",oe,Q,F]}],"backdrop-filter":[{"backdrop-filter":["","none",Q,F]}],"backdrop-blur":[{"backdrop-blur":Me()}],"backdrop-brightness":[{"backdrop-brightness":[oe,Q,F]}],"backdrop-contrast":[{"backdrop-contrast":[oe,Q,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",oe,Q,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[oe,Q,F]}],"backdrop-invert":[{"backdrop-invert":["",oe,Q,F]}],"backdrop-opacity":[{"backdrop-opacity":[oe,Q,F]}],"backdrop-saturate":[{"backdrop-saturate":[oe,Q,F]}],"backdrop-sepia":[{"backdrop-sepia":["",oe,Q,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":X()}],"border-spacing-x":[{"border-spacing-x":X()}],"border-spacing-y":[{"border-spacing-y":X()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Q,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[oe,"initial",Q,F]}],ease:[{ease:["linear","initial",re,Q,F]}],delay:[{delay:[oe,Q,F]}],animate:[{animate:["none",be,Q,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[q,Q,F]}],"perspective-origin":[{"perspective-origin":ie()}],rotate:[{rotate:Ot()}],"rotate-x":[{"rotate-x":Ot()}],"rotate-y":[{"rotate-y":Ot()}],"rotate-z":[{"rotate-z":Ot()}],scale:[{scale:Kn()}],"scale-x":[{"scale-x":Kn()}],"scale-y":[{"scale-y":Kn()}],"scale-z":[{"scale-z":Kn()}],"scale-3d":["scale-3d"],skew:[{skew:Wn()}],"skew-x":[{"skew-x":Wn()}],"skew-y":[{"skew-y":Wn()}],transform:[{transform:[Q,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:ie()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Zn()}],"translate-x":[{"translate-x":Zn()}],"translate-y":[{"translate-y":Zn()}],"translate-z":[{"translate-z":Zn()}],"translate-none":["translate-none"],accent:[{accent:z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":X()}],"scroll-mx":[{"scroll-mx":X()}],"scroll-my":[{"scroll-my":X()}],"scroll-ms":[{"scroll-ms":X()}],"scroll-me":[{"scroll-me":X()}],"scroll-mt":[{"scroll-mt":X()}],"scroll-mr":[{"scroll-mr":X()}],"scroll-mb":[{"scroll-mb":X()}],"scroll-ml":[{"scroll-ml":X()}],"scroll-p":[{"scroll-p":X()}],"scroll-px":[{"scroll-px":X()}],"scroll-py":[{"scroll-py":X()}],"scroll-ps":[{"scroll-ps":X()}],"scroll-pe":[{"scroll-pe":X()}],"scroll-pt":[{"scroll-pt":X()}],"scroll-pr":[{"scroll-pr":X()}],"scroll-pb":[{"scroll-pb":X()}],"scroll-pl":[{"scroll-pl":X()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q,F]}],fill:[{fill:["none",...z()]}],"stroke-w":[{stroke:[oe,Oa,ts,Kf]}],stroke:[{stroke:["none",...z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Xw=Nw(Qw);function Qn(...s){return Xw(Sv(s))}const Kw=pw("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function gd({className:s,variant:e,size:i,asChild:a=!1,...o}){const u=a?ow:"button";return j.jsx(u,{"data-slot":"button",className:Qn(Kw({variant:e,size:i,className:s})),...o})}function Ww({className:s,...e}){return j.jsx("div",{"data-slot":"card",className:Qn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...e})}function Zw({className:s,...e}){return j.jsx("div",{"data-slot":"card-header",className:Qn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...e})}function $w({className:s,...e}){return j.jsx("div",{"data-slot":"card-title",className:Qn("leading-none font-semibold",s),...e})}function Jw({className:s,...e}){return j.jsx("div",{"data-slot":"card-content",className:Qn("px-6",s),...e})}function eC({className:s,...e}){return j.jsx("div",{"data-slot":"card-footer",className:Qn("flex items-center px-6 [.border-t]:pt-6",s),...e})}function tC({className:s,type:e,...i}){return j.jsx("input",{type:e,"data-slot":"input",className:Qn("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",s),...i})}_v();var nC=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],$a=nC.reduce((s,e)=>{const i=vv(`Primitive.${e}`),a=L.forwardRef((o,u)=>{const{asChild:d,...h}=o,p=d?i:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),j.jsx(p,{...h,ref:u})});return a.displayName=`Primitive.${e}`,{...s,[e]:a}},{}),_d=globalThis?.document?L.useLayoutEffect:()=>{};function iC(s,e){return L.useReducer((i,a)=>e[i][a]??i,s)}var Ja=s=>{const{present:e,children:i}=s,a=sC(e),o=typeof i=="function"?i({present:a.isPresent}):L.Children.only(i),u=gs(a.ref,rC(o));return typeof i=="function"||a.isPresent?L.cloneElement(o,{ref:u}):null};Ja.displayName="Presence";function sC(s){const[e,i]=L.useState(),a=L.useRef(null),o=L.useRef(s),u=L.useRef("none"),d=s?"mounted":"unmounted",[h,p]=iC(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return L.useEffect(()=>{const m=Co(a.current);u.current=h==="mounted"?m:"none"},[h]),_d(()=>{const m=a.current,y=o.current;if(y!==s){const v=u.current,I=Co(m);s?p("MOUNT"):I==="none"||m?.display==="none"?p("UNMOUNT"):p(y&&v!==I?"ANIMATION_OUT":"UNMOUNT"),o.current=s}},[s,p]),_d(()=>{if(e){let m;const y=e.ownerDocument.defaultView??window,b=I=>{const q=Co(a.current).includes(CSS.escape(I.animationName));if(I.target===e&&q&&(p("ANIMATION_END"),!o.current)){const K=e.style.animationFillMode;e.style.animationFillMode="forwards",m=y.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=K)})}},v=I=>{I.target===e&&(u.current=Co(a.current))};return e.addEventListener("animationstart",v),e.addEventListener("animationcancel",b),e.addEventListener("animationend",b),()=>{y.clearTimeout(m),e.removeEventListener("animationstart",v),e.removeEventListener("animationcancel",b),e.removeEventListener("animationend",b)}}else p("ANIMATION_END")},[e,p]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:L.useCallback(m=>{a.current=m?getComputedStyle(m):null,i(m)},[])}}function Co(s){return s?.animationName||"none"}function rC(s){let e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,i=e&&"isReactWarning"in e&&e.isReactWarning;return i?s.ref:(e=Object.getOwnPropertyDescriptor(s,"ref")?.get,i=e&&"isReactWarning"in e&&e.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function aC(s,e=[]){let i=[];function a(u,d){const h=L.createContext(d),p=i.length;i=[...i,d];const m=b=>{const{scope:v,children:I,...x}=b,q=v?.[s]?.[p]||h,K=L.useMemo(()=>x,Object.values(x));return j.jsx(q.Provider,{value:K,children:I})};m.displayName=u+"Provider";function y(b,v){const I=v?.[s]?.[p]||h,x=L.useContext(I);if(x)return x;if(d!==void 0)return d;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[m,y]}const o=()=>{const u=i.map(d=>L.createContext(d));return function(h){const p=h?.[s]||u;return L.useMemo(()=>({[`__scope${s}`]:{...h,[s]:p}}),[h,p])}};return o.scopeName=s,[a,lC(o,...e)]}function lC(...s){const e=s[0];if(s.length===1)return e;const i=()=>{const a=s.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(u){const d=a.reduce((h,{useScope:p,scopeName:m})=>{const b=p(u)[`__scope${m}`];return{...h,...b}},{});return L.useMemo(()=>({[`__scope${e.scopeName}`]:d}),[d])}};return i.scopeName=e.scopeName,i}function ss(s){const e=L.useRef(s);return L.useEffect(()=>{e.current=s}),L.useMemo(()=>(...i)=>e.current?.(...i),[])}var oC=L.createContext(void 0);function cC(s){const e=L.useContext(oC);return s||e||"ltr"}function uC(s,[e,i]){return Math.min(i,Math.max(e,s))}function os(s,e,{checkForDefaultPrevented:i=!0}={}){return function(o){if(s?.(o),i===!1||!o.defaultPrevented)return e?.(o)}}function fC(s,e){return L.useReducer((i,a)=>e[i][a]??i,s)}var jd="ScrollArea",[Mv,cD]=aC(jd),[dC,Zt]=Mv(jd),Dv=L.forwardRef((s,e)=>{const{__scopeScrollArea:i,type:a="hover",dir:o,scrollHideDelay:u=600,...d}=s,[h,p]=L.useState(null),[m,y]=L.useState(null),[b,v]=L.useState(null),[I,x]=L.useState(null),[q,K]=L.useState(null),[re,be]=L.useState(0),[ge,Oe]=L.useState(0),[ie,xe]=L.useState(!1),[Pe,X]=L.useState(!1),ae=gs(e,Ze=>p(Ze)),Fe=cC(o);return j.jsx(dC,{scope:i,type:a,dir:Fe,scrollHideDelay:u,scrollArea:h,viewport:m,onViewportChange:y,content:b,onContentChange:v,scrollbarX:I,onScrollbarXChange:x,scrollbarXEnabled:ie,onScrollbarXEnabledChange:xe,scrollbarY:q,onScrollbarYChange:K,scrollbarYEnabled:Pe,onScrollbarYEnabledChange:X,onCornerWidthChange:be,onCornerHeightChange:Oe,children:j.jsx($a.div,{dir:Fe,...d,ref:ae,style:{position:"relative","--radix-scroll-area-corner-width":re+"px","--radix-scroll-area-corner-height":ge+"px",...s.style}})})});Dv.displayName=jd;var kv="ScrollAreaViewport",Lv=L.forwardRef((s,e)=>{const{__scopeScrollArea:i,children:a,nonce:o,...u}=s,d=Zt(kv,i),h=L.useRef(null),p=gs(e,h,d.onViewportChange);return j.jsxs(j.Fragment,{children:[j.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),j.jsx($a.div,{"data-radix-scroll-area-viewport":"",...u,ref:p,style:{overflowX:d.scrollbarXEnabled?"scroll":"hidden",overflowY:d.scrollbarYEnabled?"scroll":"hidden",...s.style},children:j.jsx("div",{ref:d.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});Lv.displayName=kv;var bn="ScrollAreaScrollbar",Uv=L.forwardRef((s,e)=>{const{forceMount:i,...a}=s,o=Zt(bn,s.__scopeScrollArea),{onScrollbarXEnabledChange:u,onScrollbarYEnabledChange:d}=o,h=s.orientation==="horizontal";return L.useEffect(()=>(h?u(!0):d(!0),()=>{h?u(!1):d(!1)}),[h,u,d]),o.type==="hover"?j.jsx(hC,{...a,ref:e,forceMount:i}):o.type==="scroll"?j.jsx(pC,{...a,ref:e,forceMount:i}):o.type==="auto"?j.jsx(zv,{...a,ref:e,forceMount:i}):o.type==="always"?j.jsx(Gd,{...a,ref:e}):null});Uv.displayName=bn;var hC=L.forwardRef((s,e)=>{const{forceMount:i,...a}=s,o=Zt(bn,s.__scopeScrollArea),[u,d]=L.useState(!1);return L.useEffect(()=>{const h=o.scrollArea;let p=0;if(h){const m=()=>{window.clearTimeout(p),d(!0)},y=()=>{p=window.setTimeout(()=>d(!1),o.scrollHideDelay)};return h.addEventListener("pointerenter",m),h.addEventListener("pointerleave",y),()=>{window.clearTimeout(p),h.removeEventListener("pointerenter",m),h.removeEventListener("pointerleave",y)}}},[o.scrollArea,o.scrollHideDelay]),j.jsx(Ja,{present:i||u,children:j.jsx(zv,{"data-state":u?"visible":"hidden",...a,ref:e})})}),pC=L.forwardRef((s,e)=>{const{forceMount:i,...a}=s,o=Zt(bn,s.__scopeScrollArea),u=s.orientation==="horizontal",d=oc(()=>p("SCROLL_END"),100),[h,p]=fC("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return L.useEffect(()=>{if(h==="idle"){const m=window.setTimeout(()=>p("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(m)}},[h,o.scrollHideDelay,p]),L.useEffect(()=>{const m=o.viewport,y=u?"scrollLeft":"scrollTop";if(m){let b=m[y];const v=()=>{const I=m[y];b!==I&&(p("SCROLL"),d()),b=I};return m.addEventListener("scroll",v),()=>m.removeEventListener("scroll",v)}},[o.viewport,u,p,d]),j.jsx(Ja,{present:i||h!=="hidden",children:j.jsx(Gd,{"data-state":h==="hidden"?"hidden":"visible",...a,ref:e,onPointerEnter:os(s.onPointerEnter,()=>p("POINTER_ENTER")),onPointerLeave:os(s.onPointerLeave,()=>p("POINTER_LEAVE"))})})}),zv=L.forwardRef((s,e)=>{const i=Zt(bn,s.__scopeScrollArea),{forceMount:a,...o}=s,[u,d]=L.useState(!1),h=s.orientation==="horizontal",p=oc(()=>{if(i.viewport){const m=i.viewport.offsetWidth<i.viewport.scrollWidth,y=i.viewport.offsetHeight<i.viewport.scrollHeight;d(h?m:y)}},10);return mr(i.viewport,p),mr(i.content,p),j.jsx(Ja,{present:a||u,children:j.jsx(Gd,{"data-state":u?"visible":"hidden",...o,ref:e})})}),Gd=L.forwardRef((s,e)=>{const{orientation:i="vertical",...a}=s,o=Zt(bn,s.__scopeScrollArea),u=L.useRef(null),d=L.useRef(0),[h,p]=L.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=Vv(h.viewport,h.content),y={...a,sizes:h,onSizesChange:p,hasThumb:m>0&&m<1,onThumbChange:v=>u.current=v,onThumbPointerUp:()=>d.current=0,onThumbPointerDown:v=>d.current=v};function b(v,I){return bC(v,d.current,h,I)}return i==="horizontal"?j.jsx(mC,{...y,ref:e,onThumbPositionChange:()=>{if(o.viewport&&u.current){const v=o.viewport.scrollLeft,I=W_(v,h,o.dir);u.current.style.transform=`translate3d(${I}px, 0, 0)`}},onWheelScroll:v=>{o.viewport&&(o.viewport.scrollLeft=v)},onDragScroll:v=>{o.viewport&&(o.viewport.scrollLeft=b(v,o.dir))}}):i==="vertical"?j.jsx(gC,{...y,ref:e,onThumbPositionChange:()=>{if(o.viewport&&u.current){const v=o.viewport.scrollTop,I=W_(v,h);u.current.style.transform=`translate3d(0, ${I}px, 0)`}},onWheelScroll:v=>{o.viewport&&(o.viewport.scrollTop=v)},onDragScroll:v=>{o.viewport&&(o.viewport.scrollTop=b(v))}}):null}),mC=L.forwardRef((s,e)=>{const{sizes:i,onSizesChange:a,...o}=s,u=Zt(bn,s.__scopeScrollArea),[d,h]=L.useState(),p=L.useRef(null),m=gs(e,p,u.onScrollbarXChange);return L.useEffect(()=>{p.current&&h(getComputedStyle(p.current))},[p]),j.jsx(Hv,{"data-orientation":"horizontal",...o,ref:m,sizes:i,style:{bottom:0,left:u.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:u.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":lc(i)+"px",...s.style},onThumbPointerDown:y=>s.onThumbPointerDown(y.x),onDragScroll:y=>s.onDragScroll(y.x),onWheelScroll:(y,b)=>{if(u.viewport){const v=u.viewport.scrollLeft+y.deltaX;s.onWheelScroll(v),Gv(v,b)&&y.preventDefault()}},onResize:()=>{p.current&&u.viewport&&d&&a({content:u.viewport.scrollWidth,viewport:u.viewport.offsetWidth,scrollbar:{size:p.current.clientWidth,paddingStart:Lo(d.paddingLeft),paddingEnd:Lo(d.paddingRight)}})}})}),gC=L.forwardRef((s,e)=>{const{sizes:i,onSizesChange:a,...o}=s,u=Zt(bn,s.__scopeScrollArea),[d,h]=L.useState(),p=L.useRef(null),m=gs(e,p,u.onScrollbarYChange);return L.useEffect(()=>{p.current&&h(getComputedStyle(p.current))},[p]),j.jsx(Hv,{"data-orientation":"vertical",...o,ref:m,sizes:i,style:{top:0,right:u.dir==="ltr"?0:void 0,left:u.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":lc(i)+"px",...s.style},onThumbPointerDown:y=>s.onThumbPointerDown(y.y),onDragScroll:y=>s.onDragScroll(y.y),onWheelScroll:(y,b)=>{if(u.viewport){const v=u.viewport.scrollTop+y.deltaY;s.onWheelScroll(v),Gv(v,b)&&y.preventDefault()}},onResize:()=>{p.current&&u.viewport&&d&&a({content:u.viewport.scrollHeight,viewport:u.viewport.offsetHeight,scrollbar:{size:p.current.clientHeight,paddingStart:Lo(d.paddingTop),paddingEnd:Lo(d.paddingBottom)}})}})}),[_C,Pv]=Mv(bn),Hv=L.forwardRef((s,e)=>{const{__scopeScrollArea:i,sizes:a,hasThumb:o,onThumbChange:u,onThumbPointerUp:d,onThumbPointerDown:h,onThumbPositionChange:p,onDragScroll:m,onWheelScroll:y,onResize:b,...v}=s,I=Zt(bn,i),[x,q]=L.useState(null),K=gs(e,ae=>q(ae)),re=L.useRef(null),be=L.useRef(""),ge=I.viewport,Oe=a.content-a.viewport,ie=ss(y),xe=ss(p),Pe=oc(b,10);function X(ae){if(re.current){const Fe=ae.clientX-re.current.left,Ze=ae.clientY-re.current.top;m({x:Fe,y:Ze})}}return L.useEffect(()=>{const ae=Fe=>{const Ze=Fe.target;x?.contains(Ze)&&ie(Fe,Oe)};return document.addEventListener("wheel",ae,{passive:!1}),()=>document.removeEventListener("wheel",ae,{passive:!1})},[ge,x,Oe,ie]),L.useEffect(xe,[a,xe]),mr(x,Pe),mr(I.content,Pe),j.jsx(_C,{scope:i,scrollbar:x,hasThumb:o,onThumbChange:ss(u),onThumbPointerUp:ss(d),onThumbPositionChange:xe,onThumbPointerDown:ss(h),children:j.jsx($a.div,{...v,ref:K,style:{position:"absolute",...v.style},onPointerDown:os(s.onPointerDown,ae=>{ae.button===0&&(ae.target.setPointerCapture(ae.pointerId),re.current=x.getBoundingClientRect(),be.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",I.viewport&&(I.viewport.style.scrollBehavior="auto"),X(ae))}),onPointerMove:os(s.onPointerMove,X),onPointerUp:os(s.onPointerUp,ae=>{const Fe=ae.target;Fe.hasPointerCapture(ae.pointerId)&&Fe.releasePointerCapture(ae.pointerId),document.body.style.webkitUserSelect=be.current,I.viewport&&(I.viewport.style.scrollBehavior=""),re.current=null})})})}),ko="ScrollAreaThumb",Bv=L.forwardRef((s,e)=>{const{forceMount:i,...a}=s,o=Pv(ko,s.__scopeScrollArea);return j.jsx(Ja,{present:i||o.hasThumb,children:j.jsx(yC,{ref:e,...a})})}),yC=L.forwardRef((s,e)=>{const{__scopeScrollArea:i,style:a,...o}=s,u=Zt(ko,i),d=Pv(ko,i),{onThumbPositionChange:h}=d,p=gs(e,b=>d.onThumbChange(b)),m=L.useRef(void 0),y=oc(()=>{m.current&&(m.current(),m.current=void 0)},100);return L.useEffect(()=>{const b=u.viewport;if(b){const v=()=>{if(y(),!m.current){const I=SC(b,h);m.current=I,h()}};return h(),b.addEventListener("scroll",v),()=>b.removeEventListener("scroll",v)}},[u.viewport,y,h]),j.jsx($a.div,{"data-state":d.hasThumb?"visible":"hidden",...o,ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:os(s.onPointerDownCapture,b=>{const I=b.target.getBoundingClientRect(),x=b.clientX-I.left,q=b.clientY-I.top;d.onThumbPointerDown({x,y:q})}),onPointerUp:os(s.onPointerUp,d.onThumbPointerUp)})});Bv.displayName=ko;var Yd="ScrollAreaCorner",qv=L.forwardRef((s,e)=>{const i=Zt(Yd,s.__scopeScrollArea),a=!!(i.scrollbarX&&i.scrollbarY);return i.type!=="scroll"&&a?j.jsx(vC,{...s,ref:e}):null});qv.displayName=Yd;var vC=L.forwardRef((s,e)=>{const{__scopeScrollArea:i,...a}=s,o=Zt(Yd,i),[u,d]=L.useState(0),[h,p]=L.useState(0),m=!!(u&&h);return mr(o.scrollbarX,()=>{const y=o.scrollbarX?.offsetHeight||0;o.onCornerHeightChange(y),p(y)}),mr(o.scrollbarY,()=>{const y=o.scrollbarY?.offsetWidth||0;o.onCornerWidthChange(y),d(y)}),m?j.jsx($a.div,{...a,ref:e,style:{width:u,height:h,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...s.style}}):null});function Lo(s){return s?parseInt(s,10):0}function Vv(s,e){const i=s/e;return isNaN(i)?0:i}function lc(s){const e=Vv(s.viewport,s.content),i=s.scrollbar.paddingStart+s.scrollbar.paddingEnd,a=(s.scrollbar.size-i)*e;return Math.max(a,18)}function bC(s,e,i,a="ltr"){const o=lc(i),u=o/2,d=e||u,h=o-d,p=i.scrollbar.paddingStart+d,m=i.scrollbar.size-i.scrollbar.paddingEnd-h,y=i.content-i.viewport,b=a==="ltr"?[0,y]:[y*-1,0];return jv([p,m],b)(s)}function W_(s,e,i="ltr"){const a=lc(e),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,u=e.scrollbar.size-o,d=e.content-e.viewport,h=u-a,p=i==="ltr"?[0,d]:[d*-1,0],m=uC(s,p);return jv([0,d],[0,h])(m)}function jv(s,e){return i=>{if(s[0]===s[1]||e[0]===e[1])return e[0];const a=(e[1]-e[0])/(s[1]-s[0]);return e[0]+a*(i-s[0])}}function Gv(s,e){return s>0&&s<e}var SC=(s,e=()=>{})=>{let i={left:s.scrollLeft,top:s.scrollTop},a=0;return(function o(){const u={left:s.scrollLeft,top:s.scrollTop},d=i.left!==u.left,h=i.top!==u.top;(d||h)&&e(),i=u,a=window.requestAnimationFrame(o)})(),()=>window.cancelAnimationFrame(a)};function oc(s,e){const i=ss(s),a=L.useRef(0);return L.useEffect(()=>()=>window.clearTimeout(a.current),[]),L.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(i,e)},[i,e])}function mr(s,e){const i=ss(e);_d(()=>{let a=0;if(s){const o=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(i)});return o.observe(s),()=>{window.cancelAnimationFrame(a),o.unobserve(s)}}},[s,i])}var EC=Dv,TC=Lv,wC=qv;function CC({className:s,children:e,...i}){return j.jsxs(EC,{"data-slot":"scroll-area",className:Qn("relative",s),...i,children:[j.jsx(TC,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:e}),j.jsx(AC,{}),j.jsx(wC,{})]})}function AC({className:s,orientation:e="vertical",...i}){return j.jsx(Uv,{"data-slot":"scroll-area-scrollbar",orientation:e,className:Qn("flex touch-none p-px transition-colors select-none",e==="vertical"&&"h-full w-2.5 border-l border-l-transparent",e==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",s),...i,children:j.jsx(Bv,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}const RC=()=>{};var Z_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(s,e){if(!s)throw Tr(e)},Tr=function(s){return new Error("Firebase Database ("+Yv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++a)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},NC=function(s){const e=[];let i=0,a=0;for(;i<s.length;){const o=s[i++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[i++];e[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[i++],d=s[i++],h=s[i++],p=((o&7)<<18|(u&63)<<12|(d&63)<<6|h&63)-65536;e[a++]=String.fromCharCode(55296+(p>>10)),e[a++]=String.fromCharCode(56320+(p&1023))}else{const u=s[i++],d=s[i++];e[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<s.length;o+=3){const u=s[o],d=o+1<s.length,h=d?s[o+1]:0,p=o+2<s.length,m=p?s[o+2]:0,y=u>>2,b=(u&3)<<4|h>>4;let v=(h&15)<<2|m>>6,I=m&63;p||(I=64,d||(v=64)),a.push(i[y],i[b],i[v],i[I])}return a.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Fv(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):NC(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<s.length;){const u=i[s.charAt(o++)],h=o<s.length?i[s.charAt(o)]:0;++o;const m=o<s.length?i[s.charAt(o)]:64;++o;const b=o<s.length?i[s.charAt(o)]:64;if(++o,u==null||h==null||m==null||b==null)throw new IC;const v=u<<2|h>>4;if(a.push(v),m!==64){const I=h<<4&240|m>>2;if(a.push(I),b!==64){const x=m<<6&192|b;a.push(x)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class IC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qv=function(s){const e=Fv(s);return Fd.encodeByteArray(e,!0)},Uo=function(s){return Qv(s).replace(/\./g,"")},zo=function(s){try{return Fd.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(s){return Xv(void 0,s)}function Xv(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const i in e)!e.hasOwnProperty(i)||!xC(i)||(s[i]=Xv(s[i],e[i]));return s}function xC(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=()=>MC().__FIREBASE_DEFAULTS__,kC=()=>{if(typeof process>"u"||typeof Z_>"u")return;const s=Z_.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},LC=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&zo(s[1]);return e&&JSON.parse(e)},Qd=()=>{try{return RC()||DC()||kC()||LC()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Kv=s=>Qd()?.emulatorHosts?.[s],UC=s=>{const e=Kv(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},Wv=()=>Qd()?.config,Zv=s=>Qd()?.[`_${s}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $v(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Uo(JSON.stringify(i)),Uo(JSON.stringify(d)),""].join(".")}const La={};function PC(){const s={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?s.emulator.push(e):s.prod.push(e);return s}function HC(s){let e=document.getElementById(s),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),i=!0),{created:i,element:e}}let $_=!1;function Jv(s,e){if(typeof window>"u"||typeof document>"u"||!wr(window.location.host)||La[s]===e||La[s]||$_)return;La[s]=e;function i(v){return`__firebase__banner__${v}`}const a="__firebase__banner",u=PC().prod.length>0;function d(){const v=document.getElementById(a);v&&v.remove()}function h(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function p(v,I){v.setAttribute("width","24"),v.setAttribute("id",I),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function m(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{$_=!0,d()},v}function y(v,I){v.setAttribute("id",I),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function b(){const v=HC(a),I=i("text"),x=document.getElementById(I)||document.createElement("span"),q=i("learnmore"),K=document.getElementById(q)||document.createElement("a"),re=i("preprendIcon"),be=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const ge=v.element;h(ge),y(K,q);const Oe=m();p(be,re),ge.append(be,x,K,Oe),document.body.appendChild(ge)}u?(x.innerText="Preview backend disconnected.",be.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(be.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function BC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eb(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function tb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qC(){const s=vt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function VC(){return Yv.NODE_ADMIN===!0}function nb(){try{return typeof indexedDB=="object"}catch{return!1}}function ib(){return new Promise((s,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(i){e(i)}})}function jC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="FirebaseError";class Sn extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=GC,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},o=`${this.service}/${e}`,u=this.errors[e],d=u?YC(u,a):"Error",h=`${this.serviceName}: ${d} (${o}).`;return new Sn(o,h,a)}}function YC(s,e){return s.replace(FC,(i,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const FC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(s){return JSON.parse(s)}function ot(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=function(s){let e={},i={},a={},o="";try{const u=s.split(".");e=ja(zo(u[0])||""),i=ja(zo(u[1])||""),o=u[2],a=i.d||{},delete i.d}catch{}return{header:e,claims:i,data:a,signature:o}},QC=function(s){const e=sb(s),i=e.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},XC=function(s){const e=sb(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function gr(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function yd(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Po(s,e,i){const a={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=e.call(i,s[o],o,s));return a}function Mi(s,e){if(s===e)return!0;const i=Object.keys(s),a=Object.keys(e);for(const o of i){if(!a.includes(o))return!1;const u=s[o],d=e[o];if(J_(u)&&J_(d)){if(!Mi(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function J_(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(s){const e=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,i){i||(i=0);const a=this.W_;if(typeof e=="string")for(let b=0;b<16;b++)a[b]=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),i+=4;else for(let b=0;b<16;b++)a[b]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i+=4;for(let b=16;b<80;b++){const v=a[b-3]^a[b-8]^a[b-14]^a[b-16];a[b]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],d=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,y;for(let b=0;b<80;b++){b<40?b<20?(m=h^u&(d^h),y=1518500249):(m=u^d^h,y=1859775393):b<60?(m=u&d|h&(u|d),y=2400959708):(m=u^d^h,y=3395469782);const v=(o<<5|o>>>27)+m+p+y+a[b]&4294967295;p=h,h=d,d=(u<<30|u>>>2)&4294967295,u=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,i){if(e==null)return;i===void 0&&(i=e.length);const a=i-this.blockSize;let o=0;const u=this.buf_;let d=this.inbuf_;for(;o<i;){if(d===0)for(;o<=a;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<i;)if(u[d]=e.charCodeAt(o),++d,++o,d===this.blockSize){this.compress_(u),d=0;break}}else for(;o<i;)if(u[d]=e[o],++d,++o,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=i}digest(){const e=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let a=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[a]=this.chain_[o]>>u&255,++a;return e}}function WC(s,e){const i=new ZC(s,e);return i.subscribe.bind(i)}class ZC{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,a){let o;if(e===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");$C(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:a},o.next===void 0&&(o.next=Wf),o.error===void 0&&(o.error=Wf),o.complete===void 0&&(o.complete=Wf);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $C(s,e){if(typeof s!="object"||s===null)return!1;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}function Wf(){}function Kd(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);if(o>=55296&&o<=56319){const u=o-55296;a++,H(a<s.length,"Surrogate pair missing trail surrogate.");const d=s.charCodeAt(a)-56320;o=65536+(u<<10)+d}o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):o<65536?(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},uc=function(s){let e=0;for(let i=0;i<s.length;i++){const a=s.charCodeAt(i);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,i++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=1e3,t1=2,n1=14400*1e3,i1=.5;function ey(s,e=e1,i=t1){const a=e*Math.pow(i,s),o=Math.round(i1*a*(Math.random()-.5)*2);return Math.min(n1,a+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(s){return s&&s._delegate?s._delegate:s}class cn{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new cc;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a1(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,d]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(u);a===h&&d.resolve(o)}return o}onInit(e,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:r1(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r1(s){return s===ns?void 0:s}function a1(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new s1(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ie||(Ie={}));const o1={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},c1=Ie.INFO,u1={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},f1=(s,e,...i)=>{if(e<s.logLevel)return;const a=new Date().toISOString(),o=u1[e];if(o)console[o](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fc{constructor(e){this.name=e,this._logLevel=c1,this._logHandler=f1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const d1=(s,e)=>e.some(i=>s instanceof i);let ty,ny;function h1(){return ty||(ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p1(){return ny||(ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rb=new WeakMap,vd=new WeakMap,ab=new WeakMap,Zf=new WeakMap,Wd=new WeakMap;function m1(s){const e=new Promise((i,a)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",d)},u=()=>{i(Ni(s.result)),o()},d=()=>{a(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&rb.set(i,s)}).catch(()=>{}),Wd.set(e,s),e}function g1(s){if(vd.has(s))return;const e=new Promise((i,a)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",d),s.removeEventListener("abort",d)},u=()=>{i(),o()},d=()=>{a(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",d),s.addEventListener("abort",d)});vd.set(s,e)}let bd={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return vd.get(s);if(e==="objectStoreNames")return s.objectStoreNames||ab.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ni(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function _1(s){bd=s(bd)}function y1(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=s.call($f(this),e,...i);return ab.set(a,e.sort?e.sort():[e]),Ni(a)}:p1().includes(s)?function(...e){return s.apply($f(this),e),Ni(rb.get(this))}:function(...e){return Ni(s.apply($f(this),e))}}function v1(s){return typeof s=="function"?y1(s):(s instanceof IDBTransaction&&g1(s),d1(s,h1())?new Proxy(s,bd):s)}function Ni(s){if(s instanceof IDBRequest)return m1(s);if(Zf.has(s))return Zf.get(s);const e=v1(s);return e!==s&&(Zf.set(s,e),Wd.set(e,s)),e}const $f=s=>Wd.get(s);function lb(s,e,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(s,e),h=Ni(d);return a&&d.addEventListener("upgradeneeded",p=>{a(Ni(d.result),p.oldVersion,p.newVersion,Ni(d.transaction),p)}),i&&d.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),h.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const b1=["get","getKey","getAll","getAllKeys","count"],S1=["put","add","delete","clear"],Jf=new Map;function iy(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Jf.get(e))return Jf.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,o=S1.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||b1.includes(i)))return;const u=async function(d,...h){const p=this.transaction(d,o?"readwrite":"readonly");let m=p.store;return a&&(m=m.index(h.shift())),(await Promise.all([m[i](...h),o&&p.done]))[0]};return Jf.set(e,u),u}_1(s=>({...s,get:(e,i,a)=>iy(e,i)||s.get(e,i,a),has:(e,i)=>!!iy(e,i)||s.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(T1(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function T1(s){return s.getComponent()?.type==="VERSION"}const Sd="@firebase/app",sy="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new fc("@firebase/app"),w1="@firebase/app-compat",C1="@firebase/analytics-compat",A1="@firebase/analytics",R1="@firebase/app-check-compat",N1="@firebase/app-check",I1="@firebase/auth",O1="@firebase/auth-compat",x1="@firebase/database",M1="@firebase/data-connect",D1="@firebase/database-compat",k1="@firebase/functions",L1="@firebase/functions-compat",U1="@firebase/installations",z1="@firebase/installations-compat",P1="@firebase/messaging",H1="@firebase/messaging-compat",B1="@firebase/performance",q1="@firebase/performance-compat",V1="@firebase/remote-config",j1="@firebase/remote-config-compat",G1="@firebase/storage",Y1="@firebase/storage-compat",F1="@firebase/firestore",Q1="@firebase/ai",X1="@firebase/firestore-compat",K1="firebase",W1="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="[DEFAULT]",Z1={[Sd]:"fire-core",[w1]:"fire-core-compat",[A1]:"fire-analytics",[C1]:"fire-analytics-compat",[N1]:"fire-app-check",[R1]:"fire-app-check-compat",[I1]:"fire-auth",[O1]:"fire-auth-compat",[x1]:"fire-rtdb",[M1]:"fire-data-connect",[D1]:"fire-rtdb-compat",[k1]:"fire-fn",[L1]:"fire-fn-compat",[U1]:"fire-iid",[z1]:"fire-iid-compat",[P1]:"fire-fcm",[H1]:"fire-fcm-compat",[B1]:"fire-perf",[q1]:"fire-perf-compat",[V1]:"fire-rc",[j1]:"fire-rc-compat",[G1]:"fire-gcs",[Y1]:"fire-gcs-compat",[F1]:"fire-fst",[X1]:"fire-fst-compat",[Q1]:"fire-vertex","fire-js":"fire-js",[K1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Map,$1=new Map,Td=new Map;function ry(s,e){try{s.container.addComponent(e)}catch(i){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function vn(s){const e=s.name;if(Td.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,s);for(const i of Ho.values())ry(i,s);for(const i of $1.values())ry(i,s);return!0}function ys(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function nn(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new _s("app","Firebase",J1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,i,a){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=W1;function ob(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const a={name:Ed,automaticDataCollectionEnabled:!0,...e},o=a.name;if(typeof o!="string"||!o)throw Ii.create("bad-app-name",{appName:String(o)});if(i||(i=Wv()),!i)throw Ii.create("no-options");const u=Ho.get(o);if(u){if(Mi(i,u.options)&&Mi(a,u.config))return u;throw Ii.create("duplicate-app",{appName:o})}const d=new l1(o);for(const p of Td.values())d.addComponent(p);const h=new eA(i,a,d);return Ho.set(o,h),h}function Zd(s=Ed){const e=Ho.get(s);if(!e&&s===Ed&&Wv())return ob();if(!e)throw Ii.create("no-app",{appName:s});return e}function Wt(s,e,i){let a=Z1[s]??s;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(d.join(" "));return}vn(new cn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="firebase-heartbeat-database",nA=1,Ga="firebase-heartbeat-store";let ed=null;function cb(){return ed||(ed=lb(tA,nA,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Ga)}catch(i){console.warn(i)}}}}).catch(s=>{throw Ii.create("idb-open",{originalErrorMessage:s.message})})),ed}async function iA(s){try{const i=(await cb()).transaction(Ga),a=await i.objectStore(Ga).get(ub(s));return await i.done,a}catch(e){if(e instanceof Sn)Vn.warn(e.message);else{const i=Ii.create("idb-get",{originalErrorMessage:e?.message});Vn.warn(i.message)}}}async function ay(s,e){try{const a=(await cb()).transaction(Ga,"readwrite");await a.objectStore(Ga).put(e,ub(s)),await a.done}catch(i){if(i instanceof Sn)Vn.warn(i.message);else{const a=Ii.create("idb-set",{originalErrorMessage:i?.message});Vn.warn(a.message)}}}function ub(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=1024,rA=30;class aA{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new oA(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ly();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>rA){const o=cA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Vn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ly(),{heartbeatsToSend:i,unsentEntries:a}=lA(this._heartbeatsCache.heartbeats),o=Uo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Vn.warn(e),""}}}function ly(){return new Date().toISOString().substring(0,10)}function lA(s,e=sA){const i=[];let a=s.slice();for(const o of s){const u=i.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),oy(i)>e){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),oy(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class oA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nb()?ib().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await iA(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function oy(s){return Uo(JSON.stringify({version:2,heartbeats:s})).length}function cA(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(s){vn(new cn("platform-logger",e=>new E1(e),"PRIVATE")),vn(new cn("heartbeat",e=>new aA(e),"PRIVATE")),Wt(Sd,sy,s),Wt(Sd,sy,"esm2020"),Wt("fire-js","")}uA("");var fA="firebase",dA="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(fA,dA,"app");const fb="@firebase/installations",$d="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=1e4,hb=`w:${$d}`,pb="FIS_v2",hA="https://firebaseinstallations.googleapis.com/v1",pA=3600*1e3,mA="installations",gA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cs=new _s(mA,gA,_A);function mb(s){return s instanceof Sn&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb({projectId:s}){return`${hA}/projects/${s}/installations`}function _b(s){return{token:s.token,requestStatus:2,expiresIn:vA(s.expiresIn),creationTime:Date.now()}}async function yb(s,e){const a=(await e.json()).error;return cs.create("request-failed",{requestName:s,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function vb({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function yA(s,{refreshToken:e}){const i=vb(s);return i.append("Authorization",bA(e)),i}async function bb(s){const e=await s();return e.status>=500&&e.status<600?s():e}function vA(s){return Number(s.replace("s","000"))}function bA(s){return`${pb} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA({appConfig:s,heartbeatServiceProvider:e},{fid:i}){const a=gb(s),o=vb(s),u=e.getImmediate({optional:!0});if(u){const m=await u.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const d={fid:i,authVersion:pb,appId:s.appId,sdkVersion:hb},h={method:"POST",headers:o,body:JSON.stringify(d)},p=await bb(()=>fetch(a,h));if(p.ok){const m=await p.json();return{fid:m.fid||i,registrationStatus:2,refreshToken:m.refreshToken,authToken:_b(m.authToken)}}else throw await yb("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(s){return new Promise(e=>{setTimeout(e,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=/^[cdef][\w-]{21}$/,wd="";function wA(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const i=CA(s);return TA.test(i)?i:wd}catch{return wd}}function CA(s){return EA(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=new Map;function Tb(s,e){const i=dc(s);wb(i,e),AA(i,e)}function wb(s,e){const i=Eb.get(s);if(i)for(const a of i)a(e)}function AA(s,e){const i=RA();i&&i.postMessage({key:s,fid:e}),NA()}let rs=null;function RA(){return!rs&&"BroadcastChannel"in self&&(rs=new BroadcastChannel("[Firebase] FID Change"),rs.onmessage=s=>{wb(s.data.key,s.data.fid)}),rs}function NA(){Eb.size===0&&rs&&(rs.close(),rs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="firebase-installations-database",OA=1,us="firebase-installations-store";let td=null;function Jd(){return td||(td=lb(IA,OA,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(us)}}})),td}async function Bo(s,e){const i=dc(s),o=(await Jd()).transaction(us,"readwrite"),u=o.objectStore(us),d=await u.get(i);return await u.put(e,i),await o.done,(!d||d.fid!==e.fid)&&Tb(s,e.fid),e}async function Cb(s){const e=dc(s),a=(await Jd()).transaction(us,"readwrite");await a.objectStore(us).delete(e),await a.done}async function hc(s,e){const i=dc(s),o=(await Jd()).transaction(us,"readwrite"),u=o.objectStore(us),d=await u.get(i),h=e(d);return h===void 0?await u.delete(i):await u.put(h,i),await o.done,h&&(!d||d.fid!==h.fid)&&Tb(s,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(s){let e;const i=await hc(s.appConfig,a=>{const o=xA(a),u=MA(s,o);return e=u.registrationPromise,u.installationEntry});return i.fid===wd?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function xA(s){const e=s||{fid:wA(),registrationStatus:0};return Ab(e)}function MA(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=DA(s,i);return{installationEntry:i,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kA(s)}:{installationEntry:e}}async function DA(s,e){try{const i=await SA(s,e);return Bo(s.appConfig,i)}catch(i){throw mb(i)&&i.customData.serverCode===409?await Cb(s.appConfig):await Bo(s.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function kA(s){let e=await cy(s.appConfig);for(;e.registrationStatus===1;)await Sb(100),e=await cy(s.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await eh(s);return a||i}return e}function cy(s){return hc(s,e=>{if(!e)throw cs.create("installation-not-found");return Ab(e)})}function Ab(s){return LA(s)?{fid:s.fid,registrationStatus:0}:s}function LA(s){return s.registrationStatus===1&&s.registrationTime+db<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA({appConfig:s,heartbeatServiceProvider:e},i){const a=zA(s,i),o=yA(s,i),u=e.getImmediate({optional:!0});if(u){const m=await u.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const d={installation:{sdkVersion:hb,appId:s.appId}},h={method:"POST",headers:o,body:JSON.stringify(d)},p=await bb(()=>fetch(a,h));if(p.ok){const m=await p.json();return _b(m)}else throw await yb("Generate Auth Token",p)}function zA(s,{fid:e}){return`${gb(s)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(s,e=!1){let i;const a=await hc(s.appConfig,u=>{if(!Rb(u))throw cs.create("not-registered");const d=u.authToken;if(!e&&BA(d))return u;if(d.requestStatus===1)return i=PA(s,e),u;{if(!navigator.onLine)throw cs.create("app-offline");const h=VA(u);return i=HA(s,h),h}});return i?await i:a.authToken}async function PA(s,e){let i=await uy(s.appConfig);for(;i.authToken.requestStatus===1;)await Sb(100),i=await uy(s.appConfig);const a=i.authToken;return a.requestStatus===0?th(s,e):a}function uy(s){return hc(s,e=>{if(!Rb(e))throw cs.create("not-registered");const i=e.authToken;return jA(i)?{...e,authToken:{requestStatus:0}}:e})}async function HA(s,e){try{const i=await UA(s,e),a={...e,authToken:i};return await Bo(s.appConfig,a),i}catch(i){if(mb(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await Cb(s.appConfig);else{const a={...e,authToken:{requestStatus:0}};await Bo(s.appConfig,a)}throw i}}function Rb(s){return s!==void 0&&s.registrationStatus===2}function BA(s){return s.requestStatus===2&&!qA(s)}function qA(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+pA}function VA(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function jA(s){return s.requestStatus===1&&s.requestTime+db<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(s){const e=s,{installationEntry:i,registrationPromise:a}=await eh(e);return a?a.catch(console.error):th(e).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(s,e=!1){const i=s;return await FA(i),(await th(i,e)).token}async function FA(s){const{registrationPromise:e}=await eh(s);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(s){if(!s||!s.options)throw nd("App Configuration");if(!s.name)throw nd("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!s.options[i])throw nd(i);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function nd(s){return cs.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="installations",XA="installations-internal",KA=s=>{const e=s.getProvider("app").getImmediate(),i=QA(e),a=ys(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},WA=s=>{const e=s.getProvider("app").getImmediate(),i=ys(e,Nb).getImmediate();return{getId:()=>GA(i),getToken:o=>YA(i,o)}};function ZA(){vn(new cn(Nb,KA,"PUBLIC")),vn(new cn(XA,WA,"PRIVATE"))}ZA();Wt(fb,$d);Wt(fb,$d,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="analytics",$A="firebase_id",JA="origin",eR=60*1e3,tR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new fc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new _s("analytics","Analytics",nR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(s){if(!s.startsWith(nh)){const e=Bt.create("invalid-gtag-resource",{gtagURL:s});return Rt.warn(e.message),""}return s}function Ib(s){return Promise.all(s.map(e=>e.catch(i=>i)))}function sR(s,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(s,e)),i}function rR(s,e){const i=sR("firebase-js-sdk-policy",{createScriptURL:iR}),a=document.createElement("script"),o=`${nh}?l=${s}&id=${e}`;a.src=i?i?.createScriptURL(o):o,a.async=!0,document.head.appendChild(a)}function aR(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function lR(s,e,i,a,o,u){const d=a[o];try{if(d)await e[d];else{const p=(await Ib(i)).find(m=>m.measurementId===o);p&&await e[p.appId]}}catch(h){Rt.error(h)}s("config",o,u)}async function oR(s,e,i,a,o){try{let u=[];if(o&&o.send_to){let d=o.send_to;Array.isArray(d)||(d=[d]);const h=await Ib(i);for(const p of d){const m=h.find(b=>b.measurementId===p),y=m&&e[m.appId];if(y)u.push(y);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),s("event",a,o||{})}catch(u){Rt.error(u)}}function cR(s,e,i,a){async function o(u,...d){try{if(u==="event"){const[h,p]=d;await oR(s,e,i,h,p)}else if(u==="config"){const[h,p]=d;await lR(s,e,i,a,h,p)}else if(u==="consent"){const[h,p]=d;s("consent",h,p)}else if(u==="get"){const[h,p,m]=d;s("get",h,p,m)}else if(u==="set"){const[h]=d;s("set",h)}else s(u,...d)}catch(h){Rt.error(h)}}return o}function uR(s,e,i,a,o){let u=function(...d){window[a].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=cR(u,s,e,i),{gtagCore:u,wrappedGtag:window[o]}}function fR(s){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(nh)&&i.src.includes(s))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=30,hR=1e3;class pR{constructor(e={},i=hR){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ob=new pR;function mR(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function gR(s){const{appId:e,apiKey:i}=s,a={method:"GET",headers:mR(i)},o=tR.replace("{app-id}",e),u=await fetch(o,a);if(u.status!==200&&u.status!==304){let d="";try{const h=await u.json();h.error?.message&&(d=h.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:d})}return u.json()}async function _R(s,e=Ob,i){const{appId:a,apiKey:o,measurementId:u}=s.options;if(!a)throw Bt.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:a};throw Bt.create("no-api-key")}const d=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new bR;return setTimeout(async()=>{h.abort()},eR),xb({appId:a,apiKey:o,measurementId:u},d,h,e)}async function xb(s,{throttleEndTimeMillis:e,backoffCount:i},a,o=Ob){const{appId:u,measurementId:d}=s;try{await yR(a,e)}catch(h){if(d)return Rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:u,measurementId:d};throw h}try{const h=await gR(s);return o.deleteThrottleMetadata(u),h}catch(h){const p=h;if(!vR(p)){if(o.deleteThrottleMetadata(u),d)return Rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:d};throw h}const m=Number(p?.customData?.httpStatus)===503?ey(i,o.intervalMillis,dR):ey(i,o.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:i+1};return o.setThrottleMetadata(u,y),Rt.debug(`Calling attemptFetch again in ${m} millis`),xb(s,y,a,o)}}function yR(s,e){return new Promise((i,a)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(i,o);s.addEventListener(()=>{clearTimeout(u),a(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vR(s){if(!(s instanceof Sn)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class bR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function SR(s,e,i,a,o){if(o&&o.global){s("event",i,a);return}else{const u=await e,d={...a,send_to:u};s("event",i,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(){if(nb())try{await ib()}catch(s){return Rt.warn(Bt.create("indexeddb-unavailable",{errorInfo:s?.toString()}).message),!1}else return Rt.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TR(s,e,i,a,o,u,d){const h=_R(s);h.then(v=>{i[v.measurementId]=v.appId,s.options.measurementId&&v.measurementId!==s.options.measurementId&&Rt.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Rt.error(v)),e.push(h);const p=ER().then(v=>{if(v)return a.getId()}),[m,y]=await Promise.all([h,p]);fR(u)||rR(u,m.measurementId),o("js",new Date);const b=d?.config??{};return b[JA]="firebase",b.update=!0,y!=null&&(b[$A]=y),o("config",m.measurementId,b),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.app=e}_delete(){return delete Ua[this.app.options.appId],Promise.resolve()}}let Ua={},fy=[];const dy={};let id="dataLayer",CR="gtag",hy,Mb,py=!1;function AR(){const s=[];if(eb()&&s.push("This is a browser extension environment."),jC()||s.push("Cookies are not available."),s.length>0){const e=s.map((a,o)=>`(${o+1}) ${a}`).join(" "),i=Bt.create("invalid-analytics-context",{errorInfo:e});Rt.warn(i.message)}}function RR(s,e,i){AR();const a=s.options.appId;if(!a)throw Bt.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)Rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if(Ua[a]!=null)throw Bt.create("already-exists",{id:a});if(!py){aR(id);const{wrappedGtag:u,gtagCore:d}=uR(Ua,fy,dy,id,CR);Mb=u,hy=d,py=!0}return Ua[a]=TR(s,fy,dy,e,hy,id,i),new wR(s)}function NR(s=Zd()){s=_t(s);const e=ys(s,qo);return e.isInitialized()?e.getImmediate():IR(s)}function IR(s,e={}){const i=ys(s,qo);if(i.isInitialized()){const o=i.getImmediate();if(Mi(e,i.getOptions()))return o;throw Bt.create("already-initialized")}return i.initialize({options:e})}function OR(s,e,i,a){s=_t(s),SR(Mb,Ua[s.app.options.appId],e,i,a).catch(o=>Rt.error(o))}const my="@firebase/analytics",gy="0.10.18";function xR(){vn(new cn(qo,(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return RR(a,o,i)},"PUBLIC")),vn(new cn("analytics-internal",s,"PRIVATE")),Wt(my,gy),Wt(my,gy,"esm2020");function s(e){try{const i=e.getProvider(qo).getImmediate();return{logEvent:(a,o,u)=>OR(i,a,o,u)}}catch(i){throw Bt.create("interop-component-reg-failed",{reason:i})}}}xR();const MR={apiKey:"AIzaSyAguG5bb_TvgZOH4i8ZHVlHan1Vm7qKL6w",authDomain:"homeley-79a52.firebaseapp.com",projectId:"homeley-79a52",storageBucket:"homeley-79a52.firebasestorage.app",messagingSenderId:"581794235111",appId:"1:581794235111:web:cbd5b585b32de0d0cad842",measurementId:"G-5CPGS9VVXZ",databaseURL:"https://homeley-79a52-default-rtdb.asia-southeast1.firebasedatabase.app"},Cd=ob(MR);NR(Cd);function Db(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DR=Db,kb=new _s("auth","Firebase",Db());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new fc("@firebase/auth");function kR(s,...e){Vo.logLevel<=Ie.WARN&&Vo.warn(`Auth (${Ar}): ${s}`,...e)}function Io(s,...e){Vo.logLevel<=Ie.ERROR&&Vo.error(`Auth (${Ar}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(s,...e){throw ih(s,...e)}function _n(s,...e){return ih(s,...e)}function Lb(s,e,i){const a={...DR(),[e]:i};return new _s("auth","Firebase",a).create(e,{appName:s.name})}function Oi(s){return Lb(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ih(s,...e){if(typeof s!="string"){const i=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return kb.create(s,...e)}function ne(s,e,...i){if(!s)throw ih(e,...i)}function Pn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Io(e),new Error(e)}function Gn(s,e){s||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){return typeof self<"u"&&self.location?.href||""}function LR(){return _y()==="http:"||_y()==="https:"}function _y(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LR()||eb()||"connection"in navigator)?navigator.onLine:!0}function zR(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,i){this.shortDelay=e,this.longDelay=i,Gn(i>e,"Short delay should be less than long delay!"),this.isMobile=Xd()||tb()}get(){return UR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(s,e){Gn(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{static initialize(e,i,a){this.fetchImpl=e,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BR=new el(3e4,6e4);function pc(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Rr(s,e,i,a,o={}){return zb(s,o,async()=>{let u={},d={};a&&(e==="GET"?d=a:u={body:JSON.stringify(a)});const h=Cr({key:s.config.apiKey,...d}).slice(1),p=await s._getAdditionalHeaders();p["Content-Type"]="application/json",s.languageCode&&(p["X-Firebase-Locale"]=s.languageCode);const m={method:e,headers:p,...u};return BC()||(m.referrerPolicy="no-referrer"),s.emulatorConfig&&wr(s.emulatorConfig.host)&&(m.credentials="include"),Ub.fetch()(await Hb(s,s.config.apiHost,i,h),m)})}async function zb(s,e,i){s._canInitEmulator=!1;const a={...PR,...e};try{const o=new qR(s),u=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Ao(s,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const h=u.ok?d.errorMessage:d.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(s,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Ao(s,"email-already-in-use",d);if(p==="USER_DISABLED")throw Ao(s,"user-disabled",d);const y=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Lb(s,y,m);jn(s,y)}}catch(o){if(o instanceof Sn)throw o;jn(s,"network-request-failed",{message:String(o)})}}async function Pb(s,e,i,a,o={}){const u=await Rr(s,e,i,a,o);return"mfaPendingCredential"in u&&jn(s,"multi-factor-auth-required",{_serverResponse:u}),u}async function Hb(s,e,i,a){const o=`${e}${i}?${a}`,u=s,d=u.config.emulator?sh(s.config,o):`${s.config.apiScheme}://${o}`;return HR.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class qR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(_n(this.auth,"network-request-failed")),BR.get())})}}function Ao(s,e,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const o=_n(s,e,a);return o.customData._tokenResponse=i,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(s,e){return Rr(s,"POST","/v1/accounts:delete",e)}async function jo(s,e){return Rr(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jR(s,e=!1){const i=_t(s),a=await i.getIdToken(e),o=rh(a);ne(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,d=u?.sign_in_provider;return{claims:o,token:a,authTime:za(sd(o.auth_time)),issuedAtTime:za(sd(o.iat)),expirationTime:za(sd(o.exp)),signInProvider:d||null,signInSecondFactor:u?.sign_in_second_factor||null}}function sd(s){return Number(s)*1e3}function rh(s){const[e,i,a]=s.split(".");if(e===void 0||i===void 0||a===void 0)return Io("JWT malformed, contained fewer than 3 sections"),null;try{const o=zo(i);return o?JSON.parse(o):(Io("Failed to decode base64 JWT payload"),null)}catch(o){return Io("Caught error parsing JWT payload as JSON",o?.toString()),null}}function yy(s){const e=rh(s);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(s,e,i=!1){if(i)return e;try{return await e}catch(a){throw a instanceof Sn&&GR(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function GR({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=za(this.lastLoginAt),this.creationTime=za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(s){const e=s.auth,i=await s.getIdToken(),a=await Ya(s,jo(e,{idToken:i}));ne(a?.users.length,e,"internal-error");const o=a.users[0];s._notifyReloadListener(o);const u=o.providerUserInfo?.length?Bb(o.providerUserInfo):[],d=QR(s.providerData,u),h=s.isAnonymous,p=!(s.email&&o.passwordHash)&&!d?.length,m=h?p:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(s,y)}async function FR(s){const e=_t(s);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QR(s,e){return[...s.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function Bb(s){return s.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(s,e){const i=await zb(s,{},async()=>{const a=Cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,d=await Hb(s,o,"/v1/token",`key=${u}`),h=await s._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:a};return s.emulatorConfig&&wr(s.emulatorConfig.host)&&(p.credentials="include"),Ub.fetch()(d,p)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function KR(s,e){return Rr(s,"POST","/v2/accounts:revokeToken",pc(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const i=yy(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:a,refreshToken:o,expiresIn:u}=await XR(e,i);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(e,i,a){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,i){const{refreshToken:a,accessToken:o,expirationTime:u}=i,d=new cr;return a&&(ne(typeof a=="string","internal-error",{appName:e}),d.refreshToken=a),o&&(ne(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),u&&(ne(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(s,e){ne(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class rn{constructor({uid:e,auth:i,stsTokenManager:a,...o}){this.providerId="firebase",this.proactiveRefresh=new YR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Rd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const i=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return ne(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return jR(this,e)}reload(){return FR(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),i&&await Go(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Oi(this.auth));const e=await this.getIdToken();return await Ya(this,VR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const a=i.displayName??void 0,o=i.email??void 0,u=i.phoneNumber??void 0,d=i.photoURL??void 0,h=i.tenantId??void 0,p=i._redirectEventId??void 0,m=i.createdAt??void 0,y=i.lastLoginAt??void 0,{uid:b,emailVerified:v,isAnonymous:I,providerData:x,stsTokenManager:q}=i;ne(b&&q,e,"internal-error");const K=cr.fromJSON(this.name,q);ne(typeof b=="string",e,"internal-error"),Ti(a,e.name),Ti(o,e.name),ne(typeof v=="boolean",e,"internal-error"),ne(typeof I=="boolean",e,"internal-error"),Ti(u,e.name),Ti(d,e.name),Ti(h,e.name),Ti(p,e.name),Ti(m,e.name),Ti(y,e.name);const re=new rn({uid:b,auth:e,email:o,emailVerified:v,displayName:a,isAnonymous:I,photoURL:d,phoneNumber:u,tenantId:h,stsTokenManager:K,createdAt:m,lastLoginAt:y});return x&&Array.isArray(x)&&(re.providerData=x.map(be=>({...be}))),p&&(re._redirectEventId=p),re}static async _fromIdTokenResponse(e,i,a=!1){const o=new cr;o.updateFromServerResponse(i);const u=new rn({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await Go(u),u}static async _fromGetAccountInfoResponse(e,i,a){const o=i.users[0];ne(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Bb(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!u?.length,h=new cr;h.updateFromIdToken(a);const p=new rn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:d}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new Map;function Hn(s){Gn(s instanceof Function,"Expected a class definition");let e=vy.get(s);return e?(Gn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,vy.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}qb.type="NONE";const by=qb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(s,e,i){return`firebase:${s}:${e}:${i}`}class ur{constructor(e,i,a){this.persistence=e,this.auth=i,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=Oo(this.userKey,o.apiKey,u),this.fullPersistenceKey=Oo("persistence",o.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await jo(this.auth,{idToken:e}).catch(()=>{});return i?rn._fromGetAccountInfoResponse(this.auth,i,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,a="authUser"){if(!i.length)return new ur(Hn(by),e,a);const o=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let u=o[0]||Hn(by);const d=Oo(a,e.config.apiKey,e.name);let h=null;for(const m of i)try{const y=await m._get(d);if(y){let b;if(typeof y=="string"){const v=await jo(e,{idToken:y}).catch(()=>{});if(!v)break;b=await rn._fromGetAccountInfoResponse(e,v,y)}else b=rn._fromJSON(e,y);m!==u&&(h=b),u=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ur(u,e,a):(u=p[0],h&&await u._set(d,h.toJSON()),await Promise.all(i.map(async m=>{if(m!==u)try{await m._remove(d)}catch{}})),new ur(u,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qb(e))return"Blackberry";if(Xb(e))return"Webos";if(jb(e))return"Safari";if((e.includes("chrome/")||Gb(e))&&!e.includes("edge/"))return"Chrome";if(Fb(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if(a?.length===2)return a[1]}return"Other"}function Vb(s=vt()){return/firefox\//i.test(s)}function jb(s=vt()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gb(s=vt()){return/crios\//i.test(s)}function Yb(s=vt()){return/iemobile/i.test(s)}function Fb(s=vt()){return/android/i.test(s)}function Qb(s=vt()){return/blackberry/i.test(s)}function Xb(s=vt()){return/webos/i.test(s)}function ah(s=vt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function WR(s=vt()){return ah(s)&&!!window.navigator?.standalone}function ZR(){return qC()&&document.documentMode===10}function Kb(s=vt()){return ah(s)||Fb(s)||Xb(s)||Qb(s)||/windows phone/i.test(s)||Yb(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(s,e=[]){let i;switch(s){case"Browser":i=Sy(vt());break;case"Worker":i=`${Sy(vt())}-${s}`;break;default:i=s}const a=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Ar}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const a=u=>new Promise((d,h)=>{try{const p=e(u);d(p)}catch(p){h(p)}});a.onAbort=i,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const a of this.queue)await a(e),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(s,e={}){return Rr(s,"GET","/v2/passwordPolicy",pc(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=6;class tN{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??eN,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=e.length>=a),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,i,a,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,i,a,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ey(this),this.idTokenSubscription=new Ey(this),this.beforeStateQueue=new $R(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Hn(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await jo(this,{idToken:e}),a=await rn._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(nn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,d=a?._redirectEventId,h=await this.tryRedirectSignIn(e);(!u||u===d)&&h?.user&&(a=h.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Oi(this));const i=e?_t(e):null;return i&&ne(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Oi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Oi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JR(this),i=new tN(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,i,a){return this.registerStateListener(this.authStateSubscription,e,i,a)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,a){return this.registerStateListener(this.idTokenSubscription,e,i,a)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await KR(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const a=await this.getOrInitRedirectPersistenceManager(i);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Hn(e)||this._popupRedirectResolver;ne(i,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Hn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,a,o){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let d=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(h,this,"internal-error"),h.then(()=>{d||u(this.currentUser)}),typeof i=="function"){const p=e.addObserver(i,a,o);return()=>{d=!0,p()}}else{const p=e.addObserver(i);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&kR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function mc(s){return _t(s)}class Ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=WC(i=>this.observer=i)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iN(s){lh=s}function sN(s){return lh.loadJS(s)}function rN(){return lh.gapiScript}function aN(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(s,e){const i=ys(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),u=i.getOptions();if(Mi(u,e??{}))return o;jn(o,"already-initialized")}return i.initialize({options:e})}function oN(s,e){const i=e?.persistence||[],a=(Array.isArray(i)?i:[i]).map(Hn);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(a,e?.popupRedirectResolver)}function cN(s,e,i){const a=mc(s);ne(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,u=Zb(e),{host:d,port:h}=uN(e),p=h===null?"":`:${h}`,m={url:`${u}//${d}${p}/`},y=Object.freeze({host:d,port:h,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){ne(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ne(Mi(m,a.config.emulator)&&Mi(y,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=m,a.emulatorConfig=y,a.settings.appVerificationDisabledForTesting=!0,wr(d)?($v(`${u}//${d}${p}`),Jv("Auth",!0)):fN()}function Zb(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function uN(s){const e=Zb(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:Ty(a.substr(u.length+1))}}else{const[u,d]=a.split(":");return{host:u,port:Ty(d)}}}function Ty(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function fN(){function s(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,i){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(s,e){return Pb(s,"POST","/v1/accounts:signInWithIdp",pc(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="http://localhost";class fs extends $b{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):jn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o,...u}=i;if(!a||!o)return null;const d=new fs(a,o);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const i=this.buildRequest();return fr(e,i)}_linkToIdToken(e,i){const a=this.buildRequest();return a.idToken=i,fr(e,a)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,fr(e,i)}buildRequest(){const e={requestUri:dN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Cr(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Jb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends tl{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return fs._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:a}=e;if(!i&&!a)return null;try{return Ci.credential(i,a)}catch{return null}}}Ci.GOOGLE_SIGN_IN_METHOD="google.com";Ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends tl{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.GITHUB_SIGN_IN_METHOD="github.com";Ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends tl{constructor(){super("twitter.com")}static credential(e,i){return fs._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=e;if(!i||!a)return null;try{return Ri.credential(i,a)}catch{return null}}}Ri.TWITTER_SIGN_IN_METHOD="twitter.com";Ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(s,e){return Pb(s,"POST","/v1/accounts:signUp",pc(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,a,o=!1){const u=await rn._fromIdTokenResponse(e,a,o),d=wy(a);return new Di({user:u,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(e,i,a){await e._updateTokensIfNecessary(a,!0);const o=wy(a);return new Di({user:e,providerId:o,_tokenResponse:a,operationType:i})}}function wy(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(s){if(nn(s.app))return Promise.reject(Oi(s));const e=mc(s);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Di({user:e.currentUser,providerId:null,operationType:"signIn"});const i=await hN(e,{returnSecureToken:!0}),a=await Di._fromIdTokenResponse(e,"signIn",i,!0);return await e._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Sn{constructor(e,i,a,o){super(i.code,i.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,i,a,o){return new Yo(e,i,a,o)}}function eS(s,e,i,a){return(e==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(s,u,e,a):u})}async function mN(s,e,i=!1){const a=await Ya(s,e._linkToIdToken(s.auth,await s.getIdToken()),i);return Di._forOperation(s,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(s,e,i=!1){const{auth:a}=s;if(nn(a.app))return Promise.reject(Oi(a));const o="reauthenticate";try{const u=await Ya(s,eS(a,o,e,s),i);ne(u.idToken,a,"internal-error");const d=rh(u.idToken);ne(d,a,"internal-error");const{sub:h}=d;return ne(s.uid===h,a,"user-mismatch"),Di._forOperation(s,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&jn(a,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(s,e,i=!1){if(nn(s.app))return Promise.reject(Oi(s));const a="signIn",o=await eS(s,a,e),u=await Di._fromIdTokenResponse(s,a,o);return i||await s._updateCurrentUser(u.user),u}function yN(s,e,i,a){return _t(s).onIdTokenChanged(e,i,a)}function vN(s,e,i){return _t(s).beforeAuthStateChanged(e,i)}function bN(s,e,i,a){return _t(s).onAuthStateChanged(e,i,a)}const Fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=1e3,EN=10;class nS extends tS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),o=this.localCache[i];a!==o&&e(i,o,a)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((d,h,p)=>{this.notifyListeners(d,p)});return}const a=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},u=this.storage.getItem(a);ZR()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,EN):o()}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:a}),!0)})},SN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}nS.type="LOCAL";const TN=nS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS extends tS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}iS.type="SESSION";const sS=iS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const a=new gc(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:a,eventType:o,data:u}=i.data,d=this.handlersMap[o];if(!d?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const h=Array.from(d).map(async m=>m(i.origin,u)),p=await wN(h);i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:p})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(s="",e=10){let i="";for(let a=0;a<e;a++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,d;return new Promise((h,p)=>{const m=oh("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},a);d={messageChannel:o,onMessage(b){const v=b;if(v.data.eventId===m)switch(v.data.status){case"ack":clearTimeout(y),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),h(v.data.response);break;default:clearTimeout(y),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:m,data:i},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function AN(s){yn().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function RN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NN(){return navigator?.serviceWorker?.controller||null}function IN(){return rS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="firebaseLocalStorageDb",ON=1,Qo="firebaseLocalStorage",lS="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function _c(s,e){return s.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function xN(){const s=indexedDB.deleteDatabase(aS);return new nl(s).toPromise()}function Nd(){const s=indexedDB.open(aS,ON);return new Promise((e,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(Qo,{keyPath:lS})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(Qo)?e(a):(a.close(),await xN(),e(await Nd()))})})}async function Cy(s,e,i){const a=_c(s,!0).put({[lS]:e,value:i});return new nl(a).toPromise()}async function MN(s,e){const i=_c(s,!1).get(e),a=await new nl(i).toPromise();return a===void 0?null:a.value}function Ay(s,e){const i=_c(s,!0).delete(e);return new nl(i).toPromise()}const DN=800,kN=3;class oS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nd(),this.db)}async _withRetries(e){let i=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(i++>kN)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(IN()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await RN(),!this.activeServiceWorker)return;this.sender=new CN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nd();return await Cy(e,Fo,"1"),await Ay(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>Cy(a,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(a=>MN(a,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ay(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=_c(o,!1).getAll();return new nl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oS.type="LOCAL";const LN=oS;new el(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(s,e){return e?Hn(e):(ne(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends $b{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,i){return fr(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function zN(s){return _N(s.auth,new ch(s),s.bypassAuthState)}function PN(s){const{auth:e,user:i}=s;return ne(i,e,"internal-error"),gN(i,new ch(s),s.bypassAuthState)}async function HN(s){const{auth:e,user:i}=s;return ne(i,e,"internal-error"),mN(i,new ch(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,i,a,o,u=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:a,postBody:o,tenantId:u,error:d,type:h}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zN;case"linkViaPopup":case"linkViaRedirect":return HN;case"reauthViaPopup":case"reauthViaRedirect":return PN;default:jn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new el(2e3,1e4);class lr extends cS{constructor(e,i,a,o,u){super(e,i,o,u),this.provider=a,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BN.get())};e()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="pendingRedirect",xo=new Map;class VN extends cS{constructor(e,i,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const a=await jN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(i){e=()=>Promise.reject(i)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jN(s,e){const i=FN(e),a=YN(s);if(!await a._isAvailable())return!1;const o=await a._get(i)==="true";return await a._remove(i),o}function GN(s,e){xo.set(s._key(),e)}function YN(s){return Hn(s._redirectPersistence)}function FN(s){return Oo(qN,s.config.apiKey,s.name)}async function QN(s,e,i=!1){if(nn(s.app))return Promise.reject(Oi(s));const a=mc(s),o=UN(a,e),d=await new VN(a,o,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=600*1e3;class KN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(i=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WN(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!uS(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";i.onError(_n(this.auth,a))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const a=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ry(e))}saveEventToCache(e){this.cachedEventUids.add(Ry(e)),this.lastProcessedEventTime=Date.now()}}function Ry(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function uS({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function WN(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uS(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(s,e={}){return Rr(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JN=/^https?/;async function eI(s){if(s.config.emulator)return;const{authorizedDomains:e}=await ZN(s);for(const i of e)try{if(tI(i))return}catch{}jn(s,"unauthorized-domain")}function tI(s){const e=Ad(),{protocol:i,hostname:a}=new URL(e);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!JN.test(i))return!1;if($N.test(s))return a===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new el(3e4,6e4);function Ny(){const s=yn().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function iI(s){return new Promise((e,i)=>{function a(){Ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ny(),i(_n(s,"network-request-failed"))},timeout:nI.get()})}if(yn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(yn().gapi?.load)a();else{const o=aN("iframefcb");return yn()[o]=()=>{gapi.load?a():i(_n(s,"network-request-failed"))},sN(`${rN()}?onload=${o}`).catch(u=>i(u))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function sI(s){return Mo=Mo||iI(s),Mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new el(5e3,15e3),aI="__/auth/iframe",lI="emulator/auth/iframe",oI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uI(s){const e=s.config;ne(e.authDomain,s,"auth-domain-config-required");const i=e.emulator?sh(e,lI):`https://${s.config.authDomain}/${aI}`,a={apiKey:e.apiKey,appName:s.name,v:Ar},o=cI.get(s.config.apiHost);o&&(a.eid=o);const u=s._getFrameworks();return u.length&&(a.fw=u.join(",")),`${i}?${Cr(a).slice(1)}`}async function fI(s){const e=await sI(s),i=yn().gapi;return ne(i,s,"internal-error"),e.open({where:document.body,url:uI(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oI,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const d=_n(s,"network-request-failed"),h=yn().setTimeout(()=>{u(d)},rI.get());function p(){yn().clearTimeout(h),o(a)}a.ping(p).then(p,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hI=500,pI=600,mI="_blank",gI="http://localhost";class Iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _I(s,e,i,a=hI,o=pI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let h="";const p={...dI,width:a.toString(),height:o.toString(),top:u,left:d},m=vt().toLowerCase();i&&(h=Gb(m)?mI:i),Vb(m)&&(e=e||gI,p.scrollbars="yes");const y=Object.entries(p).reduce((v,[I,x])=>`${v}${I}=${x},`,"");if(WR(m)&&h!=="_self")return yI(e||"",h),new Iy(null);const b=window.open(e||"",h,y);ne(b,s,"popup-blocked");try{b.focus()}catch{}return new Iy(b)}function yI(s,e){const i=document.createElement("a");i.href=s,i.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="__/auth/handler",bI="emulator/auth/handler",SI=encodeURIComponent("fac");async function Oy(s,e,i,a,o,u){ne(s.config.authDomain,s,"auth-domain-config-required"),ne(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:Ar,eventId:o};if(e instanceof Jb){e.setDefaultLanguage(s.languageCode),d.providerId=e.providerId||"",yd(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries({}))d[y]=b}if(e instanceof tl){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(d.scopes=y.join(","))}s.tenantId&&(d.tid=s.tenantId);const h=d;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const p=await s._getAppCheckToken(),m=p?`#${SI}=${encodeURIComponent(p)}`:"";return`${EI(s)}?${Cr(h).slice(1)}${m}`}function EI({config:s}){return s.emulator?sh(s,bI):`https://${s.authDomain}/${vI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="webStorageSupport";class TI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sS,this._completeRedirectFn=QN,this._overrideRedirectResult=GN}async _openPopup(e,i,a,o){Gn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await Oy(e,i,a,Ad(),o);return _I(e,u,oh())}async _openRedirect(e,i,a,o){await this._originValidation(e);const u=await Oy(e,i,a,Ad(),o);return AN(u),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:u}=this.eventManagers[i];return o?Promise.resolve(o):(Gn(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(e);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(e){const i=await fI(e),a=new KN(e);return i.register("authEvent",o=>(ne(o?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=i,a}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(rd,{type:rd},o=>{const u=o?.[0]?.[rd];u!==void 0&&i(!!u),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=eI(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Kb()||jb()||ah()}}const wI=TI;var xy="@firebase/auth",My="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RI(s){vn(new cn("auth",(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:h}=a.options;ne(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const p={apiKey:d,authDomain:h,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wb(s)},m=new nN(a,o,u,p);return oN(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,a)=>{e.getProvider("auth-internal").initialize()})),vn(new cn("auth-internal",e=>{const i=mc(e.getProvider("auth").getImmediate());return(a=>new CI(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(xy,My,AI(s)),Wt(xy,My,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=300,II=Zv("authIdTokenMaxAge")||NI;let Dy=null;const OI=s=>async e=>{const i=e&&await e.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>II)return;const o=i?.token;Dy!==o&&(Dy=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function xI(s=Zd()){const e=ys(s,"auth");if(e.isInitialized())return e.getImmediate();const i=lN(s,{popupRedirectResolver:wI,persistence:[LN,TN,sS]}),a=Zv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const d=OI(u.toString());vN(i,d,()=>d(i.currentUser)),yN(i,h=>d(h))}}const o=Kv("auth");return o&&cN(i,`http://${o}`),i}function MI(){return document.getElementsByTagName("head")?.[0]??document}iN({loadJS(s){return new Promise((e,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=e,a.onerror=o=>{const u=_n("internal-error");u.customData=o,i(u)},a.type="text/javascript",a.charset="UTF-8",MI().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RI("Browser");var ky={};const Ly="@firebase/database",Uy="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fS="";function DI(s){fS=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,i){i==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(i))}get(e){const i=this.domStorage_.getItem(this.prefixedName_(e));return i==null?null:ja(i)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,i){i==null?delete this.cache_[e]:this.cache_[e]=i}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kI(e)}}catch{}return new LI},as=dS("localStorage"),UI=dS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new fc("@firebase/database"),zI=(function(){let s=1;return function(){return s++}})(),hS=function(s){const e=JC(s),i=new KC;i.update(e);const a=i.digest();return Fd.encodeByteArray(a)},il=function(...s){let e="";for(let i=0;i<s.length;i++){const a=s[i];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?e+=il.apply(null,a):typeof a=="object"?e+=ot(a):e+=a,e+=" "}return e};let Pa=null,zy=!0;const PI=function(s,e){H(!0,"Can't turn on custom loggers persistently."),dr.logLevel=Ie.VERBOSE,Pa=dr.log.bind(dr)},gt=function(...s){if(zy===!0&&(zy=!1,Pa===null&&UI.get("logging_enabled")===!0&&PI()),Pa){const e=il.apply(null,s);Pa(e)}},sl=function(s){return function(...e){gt(s,...e)}},Id=function(...s){const e="FIREBASE INTERNAL ERROR: "+il(...s);dr.error(e)},Yn=function(...s){const e=`FIREBASE FATAL ERROR: ${il(...s)}`;throw dr.error(e),new Error(e)},Nt=function(...s){const e="FIREBASE WARNING: "+il(...s);dr.warn(e)},HI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pS=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},BI=function(s){if(document.readyState==="complete")s();else{let e=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},_r="[MIN_NAME]",ds="[MAX_NAME]",Nr=function(s,e){if(s===e)return 0;if(s===_r||e===ds)return-1;if(e===_r||s===ds)return 1;{const i=Py(s),a=Py(e);return i!==null?a!==null?i-a===0?s.length-e.length:i-a:-1:a!==null?1:s<e?-1:1}},qI=function(s,e){return s===e?0:s<e?-1:1},xa=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+ot(e))},uh=function(s){if(typeof s!="object"||s===null)return ot(s);const e=[];for(const a in s)e.push(a);e.sort();let i="{";for(let a=0;a<e.length;a++)a!==0&&(i+=","),i+=ot(e[a]),i+=":",i+=uh(s[e[a]]);return i+="}",i},mS=function(s,e){const i=s.length;if(i<=e)return[s];const a=[];for(let o=0;o<i;o+=e)o+e>i?a.push(s.substring(o,i)):a.push(s.substring(o,o+e));return a};function It(s,e){for(const i in s)s.hasOwnProperty(i)&&e(i,s[i])}const gS=function(s){H(!pS(s),"Invalid JSON number");const e=11,i=52,a=(1<<e-1)-1;let o,u,d,h,p;s===0?(u=0,d=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-a)?(h=Math.min(Math.floor(Math.log(s)/Math.LN2),a),u=h+a,d=Math.round(s*Math.pow(2,i-h)-Math.pow(2,i))):(u=0,d=Math.round(s/Math.pow(2,1-a-i))));const m=[];for(p=i;p;p-=1)m.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)m.push(u%2?1:0),u=Math.floor(u/2);m.push(o?1:0),m.reverse();const y=m.join("");let b="";for(p=0;p<64;p+=8){let v=parseInt(y.substr(p,8),2).toString(16);v.length===1&&(v="0"+v),b=b+v}return b.toLowerCase()},VI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function GI(s,e){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const a=new Error(s+" at "+e._path.toString()+": "+i);return a.code=s.toUpperCase(),a}const YI=new RegExp("^-?(0*)\\d{1,10}$"),FI=-2147483648,QI=2147483647,Py=function(s){if(YI.test(s)){const e=Number(s);if(e>=FI&&e<=QI)return e}return null},Ir=function(s){try{s()}catch(e){setTimeout(()=>{const i=e.stack||"";throw Nt("Exception was thrown by user callback.",i),e},Math.floor(0))}},XI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ha=function(s,e){const i=setTimeout(s,e);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,i){this.appCheckProvider=i,this.appName=e.name,nn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=i?.getImmediate({optional:!0}),this.appCheck||i?.get().then(a=>this.appCheck=a)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((i,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(i,a):i(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,i,a){this.appName_=e,this.firebaseOptions_=i,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(i=>i&&i.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(i,a):i(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(i=>i.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(i=>i.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(e)}}class Do{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Do.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="5",_S="v",yS="s",vS="r",bS="f",SS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ES="ls",TS="p",Od="ac",wS="websocket",CS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,i,a,o,u=!1,d="",h=!1,p=!1,m=null){this.secure=i,this.namespace=a,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=as.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&as.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${i}`}}function ZI(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function RS(s,e,i){H(typeof e=="string","typeof type must == string"),H(typeof i=="object","typeof params must == object");let a;if(e===wS)a=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===CS)a=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ZI(s)&&(i.ns=s.namespace);const o=[];return It(i,(u,d)=>{o.push(u+"="+d)}),a+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.counters_={}}incrementCounter(e,i=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=i}get(){return OC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={},ld={};function dh(s){const e=s.toString();return ad[e]||(ad[e]=new $I),ad[e]}function JI(s,e){const i=s.toString();return ld[i]||(ld[i]=e()),ld[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,i){this.closeAfterResponse=e,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,i){for(this.pendingResponses[e]=i;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<a.length;++o)a[o]&&Ir(()=>{this.onMessage_(a[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="start",tO="close",nO="pLPCommand",iO="pRTLPCB",NS="id",IS="pw",OS="ser",sO="cb",rO="seg",aO="ts",lO="d",oO="dframe",xS=1870,MS=30,cO=xS-MS,uO=25e3,fO=3e4;class or{constructor(e,i,a,o,u,d,h){this.connId=e,this.repoInfo=i,this.applicationId=a,this.appCheckToken=o,this.authToken=u,this.transportSessionId=d,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sl(e),this.stats_=dh(i),this.urlFn=p=>(this.appCheckToken&&(p[Od]=this.appCheckToken),RS(i,CS,p))}open(e,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new eO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fO)),BI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hh((...u)=>{const[d,h,p,m,y]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Hy)this.id=h,this.password=p;else if(d===tO)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,h]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,h)},()=>{this.onClosed_()},this.urlFn);const a={};a[Hy]="t",a[OS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[sO]=this.scriptTagHolder.uniqueCallbackIdentifier),a[_S]=fh,this.transportSessionId&&(a[yS]=this.transportSessionId),this.lastSessionId&&(a[ES]=this.lastSessionId),this.applicationId&&(a[TS]=this.applicationId),this.appCheckToken&&(a[Od]=this.appCheckToken),typeof location<"u"&&location.hostname&&SS.test(location.hostname)&&(a[vS]=bS);const o=this.urlFn(a);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){or.forceAllow_=!0}static forceDisallow(){or.forceDisallow_=!0}static isAvailable(){return or.forceAllow_?!0:!or.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VI()&&!jI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const i=ot(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=Qv(i),o=mS(a,cO);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,i){this.myDisconnFrame=document.createElement("iframe");const a={};a[oO]="t",a[NS]=e,a[IS]=i,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const i=ot(e).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class hh{constructor(e,i,a,o){this.onDisconnect=a,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zI(),window[nO+this.uniqueCallbackIdentifier]=e,window[iO+this.uniqueCallbackIdentifier]=i,this.myIFrame=hh.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(h){gt("frame writing exception"),h.stack&&gt(h.stack),gt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,i){for(this.myID=e,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[NS]=this.myID,e[IS]=this.myPW,e[OS]=this.currentSerial;let i=this.urlFn(e),a="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+MS+a.length<=xS;){const d=this.pendingSegs.shift();a=a+"&"+rO+o+"="+d.seg+"&"+aO+o+"="+d.ts+"&"+lO+o+"="+d.d,o++}return i=i+a,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(e,i,a){this.pendingSegs.push({seg:e,ts:i,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,i){this.outstandingRequests.add(i);const a=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(a,Math.floor(uO)),u=()=>{clearTimeout(o),a()};this.addTag(e,u)}addTag(e,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const o=a.readyState;(!o||o==="loaded"||o==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),i())},a.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=16384,hO=45e3;let Xo=null;typeof MozWebSocket<"u"?Xo=MozWebSocket:typeof WebSocket<"u"&&(Xo=WebSocket);class sn{constructor(e,i,a,o,u,d,h){this.connId=e,this.applicationId=a,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sl(this.connId),this.stats_=dh(i),this.connURL=sn.connectionURL_(i,d,h,o,a),this.nodeAdmin=i.nodeAdmin}static connectionURL_(e,i,a,o,u){const d={};return d[_S]=fh,typeof location<"u"&&location.hostname&&SS.test(location.hostname)&&(d[vS]=bS),i&&(d[yS]=i),a&&(d[ES]=a),o&&(d[Od]=o),u&&(d[TS]=u),RS(e,wS,d)}open(e,i){this.onDisconnect=i,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,as.set("previous_websocket_failure",!0);try{let a;VC(),this.mySock=new Xo(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(i);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&Xo!==null&&!sn.forceDisallow_}static previouslyFailed(){return as.isInMemoryStorage||as.get("previous_websocket_failure")===!0}markConnectionHealthy(){as.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const a=ja(i);this.onMessage(a)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const i=Number(e);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const i=e.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const a=this.extractFrameCount_(i);a!==null&&this.appendFrame_(a)}}send(e){this.resetKeepAlive();const i=ot(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=mS(i,dO);a.length>1&&this.sendString_(String(a.length));for(let o=0;o<a.length;o++)this.sendString_(a[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hO))}sendString_(e){try{this.mySock.send(e)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{static get ALL_TRANSPORTS(){return[or,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const i=sn&&sn.isAvailable();let a=i&&!sn.previouslyFailed();if(e.webSocketOnly&&(i||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[sn];else{const o=this.transports_=[];for(const u of Fa.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);Fa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=6e4,mO=5e3,gO=10*1024,_O=100*1024,od="t",By="d",yO="s",qy="r",vO="e",Vy="o",jy="a",Gy="n",Yy="p",bO="h";class SO{constructor(e,i,a,o,u,d,h,p,m,y){this.id=e,this.repoInfo_=i,this.applicationId_=a,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=d,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sl("c:"+this.id+":"),this.transportManager_=new Fa(i),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,a)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Ha(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_O?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return i=>{e===this.conn_?this.onConnectionLost_(i):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return i=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(i):e===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(e){const i={t:"d",d:e};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(od in e){const i=e[od];i===jy?this.upgradeIfSecondaryHealthy_():i===qy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Vy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const i=xa("t",e),a=xa("d",e);if(i==="c")this.onSecondaryControl_(a);else if(i==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const i=xa("t",e),a=xa("d",e);i==="c"?this.onControl_(a):i==="d"&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const i=xa(od,e);if(By in e){const a=e[By];if(i===bO){const o={...a};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Gy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===yO?this.onConnectionShutdown_(a):i===qy?this.onReset_(a):i===vO?Id("Server Error: "+a):i===Vy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Id("Unknown control packet command: "+i)}}onHandshake_(e){const i=e.ts,a=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),fh!==a&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,a),Ha(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,i){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ha(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(as.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{put(e,i,a,o){}merge(e,i,a,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,i,a){}onDisconnectMerge(e,i,a){}onDisconnectCancel(e,i){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...i){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let o=0;o<a.length;o++)a[o].callback.apply(a[o].context,i)}}on(e,i,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:i,context:a});const o=this.getInitialEvent(e);o&&i.apply(a,o)}off(e,i,a){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===i&&(!a||a===o[u].context)){o.splice(u,1);return}}validateEventType_(e){H(this.allowedEvents_.find(i=>i===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends kS{static getInstance(){return new Ko}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=32,Qy=768;class ke{constructor(e,i){if(i===void 0){this.pieces_=e.split("/");let a=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[a]=this.pieces_[o],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=i}toString(){let e="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(e+="/"+this.pieces_[i]);return e||"/"}}function Ee(){return new ke("")}function ue(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function ki(s){return s.pieces_.length-s.pieceNum_}function Ue(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new ke(s.pieces_,e)}function LS(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function EO(s){let e="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[i])));return e||"/"}function US(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function zS(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)e.push(s.pieces_[i]);return new ke(e,0)}function tt(s,e){const i=[];for(let a=s.pieceNum_;a<s.pieces_.length;a++)i.push(s.pieces_[a]);if(e instanceof ke)for(let a=e.pieceNum_;a<e.pieces_.length;a++)i.push(e.pieces_[a]);else{const a=e.split("/");for(let o=0;o<a.length;o++)a[o].length>0&&i.push(a[o])}return new ke(i,0)}function me(s){return s.pieceNum_>=s.pieces_.length}function Ct(s,e){const i=ue(s),a=ue(e);if(i===null)return e;if(i===a)return Ct(Ue(s),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function ph(s,e){if(ki(s)!==ki(e))return!1;for(let i=s.pieceNum_,a=e.pieceNum_;i<=s.pieces_.length;i++,a++)if(s.pieces_[i]!==e.pieces_[a])return!1;return!0}function an(s,e){let i=s.pieceNum_,a=e.pieceNum_;if(ki(s)>ki(e))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==e.pieces_[a])return!1;++i,++a}return!0}class TO{constructor(e,i){this.errorPrefix_=i,this.parts_=US(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=uc(this.parts_[a]);PS(this)}}function wO(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=uc(e),PS(s)}function CO(s){const e=s.parts_.pop();s.byteLength_-=uc(e),s.parts_.length>0&&(s.byteLength_-=1)}function PS(s){if(s.byteLength_>Qy)throw new Error(s.errorPrefix_+"has a key path longer than "+Qy+" bytes ("+s.byteLength_+").");if(s.parts_.length>Fy)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fy+") or object contains a cycle "+is(s))}function is(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends kS{static getInstance(){return new mh}constructor(){super(["visible"]);let e,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const a=!document[e];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=1e3,AO=300*1e3,Xy=30*1e3,RO=1.3,NO=3e4,IO="server_kill",Ky=3;class qn extends DS{constructor(e,i,a,o,u,d,h,p){if(super(),this.repoInfo_=e,this.applicationId_=i,this.onDataUpdate_=a,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=qn.nextPersistentConnectionId_++,this.log_=sl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ma,this.maxReconnectDelay_=AO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ko.getInstance().on("online",this.onOnline_,this)}sendRequest(e,i,a){const o=++this.requestNumber_,u={r:o,a:e,b:i};this.log_(ot(u)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),a&&(this.requestCBHash_[o]=a)}get(e){this.initConnection_();const i=new cc,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const h=d.d;d.s==="ok"?i.resolve(h):i.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),i.promise}listen(e,i,a,o){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:i,query:e,tag:a};this.listens.get(d).set(u,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const i=this.outstandingGets_[e];this.sendRequest("g",i.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(a)})}sendListen_(e){const i=e.query,a=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+a+" for "+o);const u={p:a},d="q";e.tag&&(u.q=i._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,h=>{const p=h.d,m=h.s;qn.warnOnListenWarnings_(p,i),(this.listens.get(a)&&this.listens.get(a).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(a,o),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,i){if(e&&typeof e=="object"&&Xn(e,"w")){const a=gr(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',u=i._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,i=QC(e)?"auth":"gauth",a={cred:e};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(i,a,o=>{const u=o.s,d=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const i=e.s,a=e.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,a)})}unlisten(e,i){const a=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+o),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,o)&&this.connected_&&this.sendUnlisten_(a,o,e._queryObject,i)}sendUnlisten_(e,i,a,o){this.log_("Unlisten on "+e+" for "+i);const u={p:e},d="n";o&&(u.q=a,u.t=o),this.sendRequest(d,u)}onDisconnectPut(e,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,i,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:i,onComplete:a})}onDisconnectMerge(e,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,i,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:i,onComplete:a})}onDisconnectCancel(e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(e,i,a,o){const u={p:i,d:a};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{o&&setTimeout(()=>{o(d.s,d.d)},Math.floor(0))})}put(e,i,a,o){this.putInternal("p",e,i,a,o)}merge(e,i,a,o){this.putInternal("m",e,i,a,o)}putInternal(e,i,a,o,u){this.initConnection_();const d={p:i,d:a};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+i)}sendPut_(e){const i=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(i,a,u=>{this.log_(i+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const i={c:e};this.log_("reportStats",i),this.sendRequest("s",i,a=>{if(a.s!=="ok"){const u=a.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const i=e.r,a=this.requestCBHash_[i];a&&(delete this.requestCBHash_[i],a(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,i){this.log_("handleServerMessage",e,i),e==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):e==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):e==="c"?this.onListenRevoked_(i.p,i.q):e==="ac"?this.onAuthRevoked_(i.s,i.d):e==="apc"?this.onAppCheckRevoked_(i.s,i.d):e==="sd"?this.onSecurityDebugPacket_(i):Id("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>NO&&(this.reconnectDelay_=Ma),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-e);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+qn.nextConnectionId_++,u=this.lastSessionId;let d=!1,h=null;const p=function(){h?h.close():(d=!0,a())},m=function(b){H(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(b)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);d?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=v&&v.token,h=new SO(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,a,I=>{Nt(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(IO)},u))}catch(b){this.log_("Failed to get token: "+b),d||(this.repoInfo_.nodeAdmin&&Nt(b),p())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yd(this.interruptReasons_)&&(this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const i=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const i=this.outstandingPuts_[e];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,i){let a;i?a=i.map(u=>uh(u)).join("$"):a="default";const o=this.removeListen_(e,a);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,i){const a=new ke(e).toString();let o;if(this.listens.has(a)){const u=this.listens.get(a);o=u.get(i),u.delete(i),u.size===0&&this.listens.delete(a)}else o=void 0;return o}onAuthRevoked_(e,i){gt("Auth token revoked: "+e+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ky&&(this.reconnectDelay_=Xy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,i){gt("App check token revoked: "+e+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ky&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const i of e.values())this.sendListen_(i);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let i="js";e["sdk."+i+"."+fS.replace(/\./g,"-")]=1,Xd()?e["framework.cordova"]=1:tb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ko.getInstance().currentlyOnline();return yd(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,i){this.name=e,this.node=i}static Wrap(e,i){return new fe(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,i){const a=new fe(_r,e),o=new fe(_r,i);return this.compare(a,o)!==0}minPost(){return fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class HS extends yc{static get __EMPTY_NODE(){return Ro}static set __EMPTY_NODE(e){Ro=e}compare(e,i){return Nr(e.name,i.name)}isDefinedOn(e){throw Tr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,i){return!1}minPost(){return fe.MIN}maxPost(){return new fe(ds,Ro)}makePost(e,i){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new fe(e,Ro)}toString(){return".key"}}const hr=new HS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,i,a,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=i?a(e.key,i):1,o&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(e.key,e.value):i={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,i,a,o,u){this.key=e,this.value=i,this.color=a??lt.RED,this.left=o??At.EMPTY_NODE,this.right=u??At.EMPTY_NODE}copy(e,i,a,o,u){return new lt(e??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,a){let o=this;const u=a(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,i,a),null):u===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,i,a)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,i){let a,o;if(a=this,i(e,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,i),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),i(e,a.key)===0){if(a.right.isEmpty())return At.EMPTY_NODE;o=a.right.min_(),a=a.copy(o.key,o.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,i))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class OO{copy(e,i,a,o,u){return this}insert(e,i,a){return new lt(e,i,null)}remove(e,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(e,i=At.EMPTY_NODE){this.comparator_=e,this.root_=i}insert(e,i){return new At(this.comparator_,this.root_.insert(e,i,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new At(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let i,a=this.root_;for(;!a.isEmpty();){if(i=this.comparator_(e,a.key),i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}getPredecessorKey(e){let i,a=this.root_,o=null;for(;!a.isEmpty();)if(i=this.comparator_(e,a.key),i===0){if(a.left.isEmpty())return o?o.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else i<0?a=a.left:i>0&&(o=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new No(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,i){return new No(this.root_,e,this.comparator_,!1,i)}getReverseIteratorFrom(e,i){return new No(this.root_,e,this.comparator_,!0,i)}getReverseIterator(e){return new No(this.root_,null,this.comparator_,!0,e)}}At.EMPTY_NODE=new OO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(s,e){return Nr(s.name,e.name)}function gh(s,e){return Nr(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xd;function MO(s){xd=s}const BS=function(s){return typeof s=="number"?"number:"+gS(s):"string:"+s},qS=function(s){if(s.isLeafNode()){const e=s.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else H(s===xd||s.isEmpty(),"priority of unexpected type.");H(s===xd||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wy;class at{static set __childrenNodeConstructor(e){Wy=e}static get __childrenNodeConstructor(){return Wy}constructor(e,i=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=i,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new at(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:ue(e)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,i){return null}updateImmediateChild(e,i){return e===".priority"?this.updatePriority(i):i.isEmpty()&&e!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,i).updatePriority(this.priorityNode_)}updateChild(e,i){const a=ue(e);return a===null?i:i.isEmpty()&&a!==".priority"?this:(H(a!==".priority"||ki(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,i){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+BS(this.priorityNode_.val())+":");const i=typeof this.value_;e+=i+":",i==="number"?e+=gS(this.value_):e+=this.value_,this.lazyHash_=hS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===at.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof at.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const i=typeof e.value_,a=typeof this.value_,o=at.VALUE_TYPE_ORDER.indexOf(i),u=at.VALUE_TYPE_ORDER.indexOf(a);return H(o>=0,"Unknown leaf type: "+i),H(u>=0,"Unknown leaf type: "+a),o===u?a==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const i=e;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VS,jS;function DO(s){VS=s}function kO(s){jS=s}class LO extends yc{compare(e,i){const a=e.node.getPriority(),o=i.node.getPriority(),u=a.compareTo(o);return u===0?Nr(e.name,i.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,i){return!e.getPriority().equals(i.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(ds,new at("[PRIORITY-POST]",jS))}makePost(e,i){const a=VS(e);return new fe(i,new at("[PRIORITY-POST]",a))}toString(){return".priority"}}const Ye=new LO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=Math.log(2);class zO{constructor(e){const i=u=>parseInt(Math.log(u)/UO,10),a=u=>parseInt(Array(u+1).join("1"),2);this.count=i(e+1),this.current_=this.count-1;const o=a(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wo=function(s,e,i,a){s.sort(e);const o=function(p,m){const y=m-p;let b,v;if(y===0)return null;if(y===1)return b=s[p],v=i?i(b):b,new lt(v,b.node,lt.BLACK,null,null);{const I=parseInt(y/2,10)+p,x=o(p,I),q=o(I+1,m);return b=s[I],v=i?i(b):b,new lt(v,b.node,lt.BLACK,x,q)}},u=function(p){let m=null,y=null,b=s.length;const v=function(x,q){const K=b-x,re=b;b-=x;const be=o(K+1,re),ge=s[K],Oe=i?i(ge):ge;I(new lt(Oe,ge.node,q,null,be))},I=function(x){m?(m.left=x,m=x):(y=x,m=x)};for(let x=0;x<p.count;++x){const q=p.nextBitIsOne(),K=Math.pow(2,p.count-(x+1));q?v(K,lt.BLACK):(v(K,lt.BLACK),v(K,lt.RED))}return y},d=new zO(s.length),h=u(d);return new At(a||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd;const ar={};class Bn{static get Default(){return H(ar&&Ye,"ChildrenNode.ts has not been loaded"),cd=cd||new Bn({".priority":ar},{".priority":Ye}),cd}constructor(e,i){this.indexes_=e,this.indexSet_=i}get(e){const i=gr(this.indexes_,e);if(!i)throw new Error("No index defined for "+e);return i instanceof At?i:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,i){H(e!==hr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let o=!1;const u=i.getIterator(fe.Wrap);let d=u.getNext();for(;d;)o=o||e.isDefinedOn(d.node),a.push(d),d=u.getNext();let h;o?h=Wo(a,e.getCompare()):h=ar;const p=e.toString(),m={...this.indexSet_};m[p]=e;const y={...this.indexes_};return y[p]=h,new Bn(y,m)}addToIndexes(e,i){const a=Po(this.indexes_,(o,u)=>{const d=gr(this.indexSet_,u);if(H(d,"Missing index implementation for "+u),o===ar)if(d.isDefinedOn(e.node)){const h=[],p=i.getIterator(fe.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),Wo(h,d.getCompare())}else return ar;else{const h=i.get(e.name);let p=o;return h&&(p=p.remove(new fe(e.name,h))),p.insert(e,e.node)}});return new Bn(a,this.indexSet_)}removeFromIndexes(e,i){const a=Po(this.indexes_,o=>{if(o===ar)return o;{const u=i.get(e.name);return u?o.remove(new fe(e.name,u)):o}});return new Bn(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da;class ee{static get EMPTY_NODE(){return Da||(Da=new ee(new At(gh),null,Bn.Default))}constructor(e,i,a){this.children_=e,this.priorityNode_=i,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&qS(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Da}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const i=this.children_.get(e);return i===null?Da:i}}getChild(e){const i=ue(e);return i===null?this:this.getImmediateChild(i).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,i){if(H(i,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(i);{const a=new fe(e,i);let o,u;i.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(a,this.children_)):(o=this.children_.insert(e,i),u=this.indexMap_.addToIndexes(a,this.children_));const d=o.isEmpty()?Da:this.priorityNode_;return new ee(o,d,u)}}updateChild(e,i){const a=ue(e);if(a===null)return i;{H(ue(e)!==".priority"||ki(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(a).updateChild(Ue(e),i);return this.updateImmediateChild(a,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const i={};let a=0,o=0,u=!0;if(this.forEachChild(Ye,(d,h)=>{i[d]=h.val(e),a++,u&&ee.INTEGER_REGEXP_.test(d)?o=Math.max(o,Number(d)):u=!1}),!e&&u&&o<2*a){const d=[];for(const h in i)d[h]=i[h];return d}else return e&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+BS(this.getPriority().val())+":"),this.forEachChild(Ye,(i,a)=>{const o=a.hash();o!==""&&(e+=":"+i+":"+o)}),this.lazyHash_=e===""?"":hS(e)}return this.lazyHash_}getPredecessorChildName(e,i,a){const o=this.resolveIndex_(a);if(o){const u=o.getPredecessorKey(new fe(e,i));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const i=this.resolveIndex_(e);if(i){const a=i.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(e){const i=this.getFirstChildName(e);return i?new fe(i,this.children_.get(i)):null}getLastChildName(e){const i=this.resolveIndex_(e);if(i){const a=i.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(e){const i=this.getLastChildName(e);return i?new fe(i,this.children_.get(i)):null}forEachChild(e,i){const a=this.resolveIndex_(e);return a?a.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,i){const a=this.resolveIndex_(i);if(a)return a.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,fe.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,i){const a=this.resolveIndex_(i);if(a)return a.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,fe.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rl?-1:0}withIndex(e){if(e===hr||this.indexMap_.hasIndex(e))return this;{const i=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,i)}}isIndexed(e){return e===hr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const i=e;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const a=this.getIterator(Ye),o=i.getIterator(Ye);let u=a.getNext(),d=o.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=a.getNext(),d=o.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===hr?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PO extends ee{constructor(){super(new At(gh),ee.EMPTY_NODE,Bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const rl=new PO;Object.defineProperties(fe,{MIN:{value:new fe(_r,ee.EMPTY_NODE)},MAX:{value:new fe(ds,rl)}});HS.__EMPTY_NODE=ee.EMPTY_NODE;at.__childrenNodeConstructor=ee;MO(rl);kO(rl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=!0;function dt(s,e=null){if(s===null)return ee.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new at(i,dt(e))}if(!(s instanceof Array)&&HO){const i=[];let a=!1;if(It(s,(d,h)=>{if(d.substring(0,1)!=="."){const p=dt(h);p.isEmpty()||(a=a||!p.getPriority().isEmpty(),i.push(new fe(d,p)))}}),i.length===0)return ee.EMPTY_NODE;const u=Wo(i,xO,d=>d.name,gh);if(a){const d=Wo(i,Ye.getCompare());return new ee(u,dt(e),new Bn({".priority":d},{".priority":Ye}))}else return new ee(u,dt(e),Bn.Default)}else{let i=ee.EMPTY_NODE;return It(s,(a,o)=>{if(Xn(s,a)&&a.substring(0,1)!=="."){const u=dt(o);(u.isLeafNode()||!u.isEmpty())&&(i=i.updateImmediateChild(a,u))}}),i.updatePriority(dt(e))}}DO(dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO extends yc{constructor(e){super(),this.indexPath_=e,H(!me(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,i){const a=this.extractChild(e.node),o=this.extractChild(i.node),u=a.compareTo(o);return u===0?Nr(e.name,i.name):u}makePost(e,i){const a=dt(e),o=ee.EMPTY_NODE.updateChild(this.indexPath_,a);return new fe(i,o)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,rl);return new fe(ds,e)}toString(){return US(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO extends yc{compare(e,i){const a=e.node.compareTo(i.node);return a===0?Nr(e.name,i.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,i){return!e.equals(i)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(e,i){const a=dt(e);return new fe(i,a)}toString(){return".value"}}const VO=new qO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(s){return{type:"value",snapshotNode:s}}function yr(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function Qa(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function Xa(s,e,i){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:i}}function jO(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.index_=e}updateChild(e,i,a,o,u,d){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(i);return h.getChild(o).equals(a.getChild(o))&&h.isEmpty()===a.isEmpty()||(d!=null&&(a.isEmpty()?e.hasChild(i)?d.trackChildChange(Qa(i,h)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?d.trackChildChange(yr(i,a)):d.trackChildChange(Xa(i,a,h))),e.isLeafNode()&&a.isEmpty())?e:e.updateImmediateChild(i,a).withIndex(this.index_)}updateFullNode(e,i,a){return a!=null&&(e.isLeafNode()||e.forEachChild(Ye,(o,u)=>{i.hasChild(o)||a.trackChildChange(Qa(o,u))}),i.isLeafNode()||i.forEachChild(Ye,(o,u)=>{if(e.hasChild(o)){const d=e.getImmediateChild(o);d.equals(u)||a.trackChildChange(Xa(o,u,d))}else a.trackChildChange(yr(o,u))})),i.withIndex(this.index_)}updatePriority(e,i){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.indexedFilter_=new _h(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ka.getStartPost_(e),this.endPost_=Ka.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,a=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return i&&a}updateChild(e,i,a,o,u,d){return this.matches(new fe(i,a))||(a=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,i,a,o,u,d)}updateFullNode(e,i,a){i.isLeafNode()&&(i=ee.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(ee.EMPTY_NODE);const u=this;return i.forEachChild(Ye,(d,h)=>{u.matches(new fe(d,h))||(o=o.updateImmediateChild(d,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,a)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const i=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),i)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const i=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),i)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=i=>{const a=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new Ka(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,i,a,o,u,d){return this.rangedFilter_.matches(new fe(i,a))||(a=ee.EMPTY_NODE),e.getImmediateChild(i).equals(a)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,i,a,o,u,d):this.fullLimitUpdateChild_(e,i,a,u,d)}updateFullNode(e,i,a){let o;if(i.isLeafNode()||i.isEmpty())o=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=ee.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const h=u.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),d++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(ee.EMPTY_NODE);let u;this.reverse_?u=o.getReverseIterator(this.index_):u=o.getIterator(this.index_);let d=0;for(;u.hasNext();){const h=u.getNext();d<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?d++:o=o.updateImmediateChild(h.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,a)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,i,a,o,u){let d;if(this.reverse_){const b=this.index_.getCompare();d=(v,I)=>b(I,v)}else d=this.index_.getCompare();const h=e;H(h.numChildren()===this.limit_,"");const p=new fe(i,a),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(h.hasChild(i)){const b=h.getImmediateChild(i);let v=o.getChildAfterChild(this.index_,m,this.reverse_);for(;v!=null&&(v.name===i||h.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const I=v==null?1:d(v,p);if(y&&!a.isEmpty()&&I>=0)return u?.trackChildChange(Xa(i,a,b)),h.updateImmediateChild(i,a);{u?.trackChildChange(Qa(i,b));const q=h.updateImmediateChild(i,ee.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(u?.trackChildChange(yr(v.name,v.node)),q.updateImmediateChild(v.name,v.node)):q}}else return a.isEmpty()?e:y&&d(m,p)>=0?(u!=null&&(u.trackChildChange(Qa(m.name,m.node)),u.trackChildChange(yr(i,a))),h.updateImmediateChild(i,a).updateImmediateChild(m.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_r}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ds}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ye}copy(){const e=new yh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function YO(s){return s.loadsAllData()?new _h(s.getIndex()):s.hasLimit()?new GO(s):new Ka(s)}function FO(s,e){const i=s.copy();return i.limitSet_=!0,i.limit_=e,i.viewFrom_="r",i}function Zy(s){const e={};if(s.isDefault())return e;let i;if(s.index_===Ye?i="$priority":s.index_===VO?i="$value":s.index_===hr?i="$key":(H(s.index_ instanceof BO,"Unrecognized index type!"),i=s.index_.toString()),e.orderBy=ot(i),s.startSet_){const a=s.startAfterSet_?"startAfter":"startAt";e[a]=ot(s.indexStartValue_),s.startNameSet_&&(e[a]+=","+ot(s.indexStartName_))}if(s.endSet_){const a=s.endBeforeSet_?"endBefore":"endAt";e[a]=ot(s.indexEndValue_),s.endNameSet_&&(e[a]+=","+ot(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function $y(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),e.vf=i}return s.index_!==Ye&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends DS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,i){return i!==void 0?"tag$"+i:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,i,a,o){super(),this.repoInfo_=e,this.onDataUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.log_=sl("p:rest:"),this.listens_={}}listen(e,i,a,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=Zo.getListenId_(e,a),h={};this.listens_[d]=h;const p=Zy(e._queryParams);this.restRequest_(u+".json",p,(m,y)=>{let b=y;if(m===404&&(b=null,m=null),m===null&&this.onDataUpdate_(u,b,!1,a),gr(this.listens_,d)===h){let v;m?m===401?v="permission_denied":v="rest_error:"+m:v="ok",o(v,null)}})}unlisten(e,i){const a=Zo.getListenId_(e,i);delete this.listens_[a]}get(e){const i=Zy(e._queryParams),a=e._path.toString(),o=new cc;return this.restRequest_(a+".json",i,(u,d)=>{let h=d;u===404&&(h=null,u=null),u===null?(this.onDataUpdate_(a,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,i={},a){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(i.auth=o.accessToken),u&&u.token&&(i.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cr(i);this.log_("Sending REST request for "+d);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(a&&h.readyState===4){this.log_("REST Response for "+d+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=ja(h.responseText)}catch{Nt("Failed to parse JSON response for "+d+": "+h.responseText)}a(null,p)}else h.status!==401&&h.status!==404&&Nt("Got unsuccessful REST response for "+d+" Status: "+h.status),a(h.status);a=null}},h.open("GET",d,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,i){this.rootNode_=this.rootNode_.updateChild(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){return{value:null,children:new Map}}function YS(s,e,i){if(me(e))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,i);else{const a=ue(e);s.children.has(a)||s.children.set(a,$o());const o=s.children.get(a);e=Ue(e),YS(o,e,i)}}function Md(s,e,i){s.value!==null?i(e,s.value):XO(s,(a,o)=>{const u=new ke(e.toString()+"/"+a);Md(o,u,i)})}function XO(s,e){s.children.forEach((i,a)=>{e(a,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),i={...e};return this.last_&&It(this.last_,(a,o)=>{i[a]=i[a]-o}),this.last_=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=10*1e3,WO=30*1e3,ZO=300*1e3;class $O{constructor(e,i){this.server_=i,this.statsToReport_={},this.statsListener_=new KO(e);const a=Jy+(WO-Jy)*Math.random();Ha(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),i={};let a=!1;It(e,(o,u)=>{u>0&&Xn(this.statsToReport_,o)&&(i[o]=u,a=!0)}),a&&this.server_.reportStats(i),Ha(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ln;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ln||(ln={}));function FS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,i,a){this.path=e,this.affectedTree=i,this.revert=a,this.type=ln.ACK_USER_WRITE,this.source=FS()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new ke(e));return new Jo(Ee(),i,this.revert)}}else return H(ue(this.path)===e,"operationForChild called for unrelated child."),new Jo(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,i){this.source=e,this.path=i,this.type=ln.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new Wa(this.source,Ee()):new Wa(this.source,Ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,i,a){this.source=e,this.path=i,this.snap=a,this.type=ln.OVERWRITE}operationForChild(e){return me(this.path)?new hs(this.source,Ee(),this.snap.getImmediateChild(e)):new hs(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,i,a){this.source=e,this.path=i,this.children=a,this.type=ln.MERGE}operationForChild(e){if(me(this.path)){const i=this.children.subtree(new ke(e));return i.isEmpty()?null:i.value?new hs(this.source,Ee(),i.value):new Za(this.source,Ee(),i)}else return H(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Za(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,i,a){this.node_=e,this.fullyInitialized_=i,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const i=ue(e);return this.isCompleteForChild(i)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ex(s,e,i,a){const o=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&s.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(jO(d.childName,d.snapshotNode))}),ka(s,o,"child_removed",e,a,i),ka(s,o,"child_added",e,a,i),ka(s,o,"child_moved",u,a,i),ka(s,o,"child_changed",e,a,i),ka(s,o,"value",e,a,i),o}function ka(s,e,i,a,o,u){const d=a.filter(h=>h.type===i);d.sort((h,p)=>nx(s,h,p)),d.forEach(h=>{const p=tx(s,h,u);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,s.query_))})})}function tx(s,e,i){return e.type==="value"||e.type==="child_removed"||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function nx(s,e,i){if(e.childName==null||i.childName==null)throw Tr("Should only compare child_ events.");const a=new fe(e.childName,e.snapshotNode),o=new fe(i.childName,i.snapshotNode);return s.index_.compare(a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(s,e){return{eventCache:s,serverCache:e}}function Ba(s,e,i,a){return vc(new ps(e,i,a),s.serverCache)}function QS(s,e,i,a){return vc(s.eventCache,new ps(e,i,a))}function Dd(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function ms(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud;const ix=()=>(ud||(ud=new At(qI)),ud);class ze{static fromObject(e){let i=new ze(null);return It(e,(a,o)=>{i=i.set(new ke(a),o)}),i}constructor(e,i=ix()){this.value=e,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,i){if(this.value!=null&&i(this.value))return{path:Ee(),value:this.value};if(me(e))return null;{const a=ue(e),o=this.children.get(a);if(o!==null){const u=o.findRootMostMatchingPathAndValue(Ue(e),i);return u!=null?{path:tt(new ke(a),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const i=ue(e),a=this.children.get(i);return a!==null?a.subtree(Ue(e)):new ze(null)}}set(e,i){if(me(e))return new ze(i,this.children);{const a=ue(e),u=(this.children.get(a)||new ze(null)).set(Ue(e),i),d=this.children.insert(a,u);return new ze(this.value,d)}}remove(e){if(me(e))return this.children.isEmpty()?new ze(null):new ze(null,this.children);{const i=ue(e),a=this.children.get(i);if(a){const o=a.remove(Ue(e));let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),this.value===null&&u.isEmpty()?new ze(null):new ze(this.value,u)}else return this}}get(e){if(me(e))return this.value;{const i=ue(e),a=this.children.get(i);return a?a.get(Ue(e)):null}}setTree(e,i){if(me(e))return i;{const a=ue(e),u=(this.children.get(a)||new ze(null)).setTree(Ue(e),i);let d;return u.isEmpty()?d=this.children.remove(a):d=this.children.insert(a,u),new ze(this.value,d)}}fold(e){return this.fold_(Ee(),e)}fold_(e,i){const a={};return this.children.inorderTraversal((o,u)=>{a[o]=u.fold_(tt(e,o),i)}),i(e,this.value,a)}findOnPath(e,i){return this.findOnPath_(e,Ee(),i)}findOnPath_(e,i,a){const o=this.value?a(i,this.value):!1;if(o)return o;if(me(e))return null;{const u=ue(e),d=this.children.get(u);return d?d.findOnPath_(Ue(e),tt(i,u),a):null}}foreachOnPath(e,i){return this.foreachOnPath_(e,Ee(),i)}foreachOnPath_(e,i,a){if(me(e))return this;{this.value&&a(i,this.value);const o=ue(e),u=this.children.get(o);return u?u.foreachOnPath_(Ue(e),tt(i,o),a):new ze(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,i){this.children.inorderTraversal((a,o)=>{o.foreach_(tt(e,a),i)}),this.value&&i(e,this.value)}foreachChild(e){this.children.inorderTraversal((i,a)=>{a.value&&e(i,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new ze(null))}}function qa(s,e,i){if(me(e))return new on(new ze(i));{const a=s.writeTree_.findRootMostValueAndPath(e);if(a!=null){const o=a.path;let u=a.value;const d=Ct(o,e);return u=u.updateChild(d,i),new on(s.writeTree_.set(o,u))}else{const o=new ze(i),u=s.writeTree_.setTree(e,o);return new on(u)}}}function ev(s,e,i){let a=s;return It(i,(o,u)=>{a=qa(a,tt(e,o),u)}),a}function tv(s,e){if(me(e))return on.empty();{const i=s.writeTree_.setTree(e,new ze(null));return new on(i)}}function kd(s,e){return vs(s,e)!=null}function vs(s,e){const i=s.writeTree_.findRootMostValueAndPath(e);return i!=null?s.writeTree_.get(i.path).getChild(Ct(i.path,e)):null}function nv(s){const e=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Ye,(a,o)=>{e.push(new fe(a,o))}):s.writeTree_.children.inorderTraversal((a,o)=>{o.value!=null&&e.push(new fe(a,o.value))}),e}function xi(s,e){if(me(e))return s;{const i=vs(s,e);return i!=null?new on(new ze(i)):new on(s.writeTree_.subtree(e))}}function Ld(s){return s.writeTree_.isEmpty()}function vr(s,e){return XS(Ee(),s.writeTree_,e)}function XS(s,e,i){if(e.value!=null)return i.updateChild(s,e.value);{let a=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(H(u.value!==null,"Priority writes must always be leaf nodes"),a=u.value):i=XS(tt(s,o),u,i)}),!i.getChild(s).isEmpty()&&a!==null&&(i=i.updateChild(tt(s,".priority"),a)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(s,e){return $S(e,s)}function sx(s,e,i,a,o){H(a>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:e,snap:i,writeId:a,visible:o}),o&&(s.visibleWrites=qa(s.visibleWrites,e,i)),s.lastWriteId=a}function rx(s,e){for(let i=0;i<s.allWrites.length;i++){const a=s.allWrites[i];if(a.writeId===e)return a}return null}function ax(s,e){const i=s.allWrites.findIndex(h=>h.writeId===e);H(i>=0,"removeWrite called with nonexistent writeId.");const a=s.allWrites[i];s.allWrites.splice(i,1);let o=a.visible,u=!1,d=s.allWrites.length-1;for(;o&&d>=0;){const h=s.allWrites[d];h.visible&&(d>=i&&lx(h,a.path)?o=!1:an(a.path,h.path)&&(u=!0)),d--}if(o){if(u)return ox(s),!0;if(a.snap)s.visibleWrites=tv(s.visibleWrites,a.path);else{const h=a.children;It(h,p=>{s.visibleWrites=tv(s.visibleWrites,tt(a.path,p))})}return!0}else return!1}function lx(s,e){if(s.snap)return an(s.path,e);for(const i in s.children)if(s.children.hasOwnProperty(i)&&an(tt(s.path,i),e))return!0;return!1}function ox(s){s.visibleWrites=KS(s.allWrites,cx,Ee()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function cx(s){return s.visible}function KS(s,e,i){let a=on.empty();for(let o=0;o<s.length;++o){const u=s[o];if(e(u)){const d=u.path;let h;if(u.snap)an(i,d)?(h=Ct(i,d),a=qa(a,h,u.snap)):an(d,i)&&(h=Ct(d,i),a=qa(a,Ee(),u.snap.getChild(h)));else if(u.children){if(an(i,d))h=Ct(i,d),a=ev(a,h,u.children);else if(an(d,i))if(h=Ct(d,i),me(h))a=ev(a,Ee(),u.children);else{const p=gr(u.children,ue(h));if(p){const m=p.getChild(Ue(h));a=qa(a,Ee(),m)}}}else throw Tr("WriteRecord should have .snap or .children")}}return a}function WS(s,e,i,a,o){if(!a&&!o){const u=vs(s.visibleWrites,e);if(u!=null)return u;{const d=xi(s.visibleWrites,e);if(Ld(d))return i;if(i==null&&!kd(d,Ee()))return null;{const h=i||ee.EMPTY_NODE;return vr(d,h)}}}else{const u=xi(s.visibleWrites,e);if(!o&&Ld(u))return i;if(!o&&i==null&&!kd(u,Ee()))return null;{const d=function(m){return(m.visible||o)&&(!a||!~a.indexOf(m.writeId))&&(an(m.path,e)||an(e,m.path))},h=KS(s.allWrites,d,e),p=i||ee.EMPTY_NODE;return vr(h,p)}}}function ux(s,e,i){let a=ee.EMPTY_NODE;const o=vs(s.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Ye,(u,d)=>{a=a.updateImmediateChild(u,d)}),a;if(i){const u=xi(s.visibleWrites,e);return i.forEachChild(Ye,(d,h)=>{const p=vr(xi(u,new ke(d)),h);a=a.updateImmediateChild(d,p)}),nv(u).forEach(d=>{a=a.updateImmediateChild(d.name,d.node)}),a}else{const u=xi(s.visibleWrites,e);return nv(u).forEach(d=>{a=a.updateImmediateChild(d.name,d.node)}),a}}function fx(s,e,i,a,o){H(a||o,"Either existingEventSnap or existingServerSnap must exist");const u=tt(e,i);if(kd(s.visibleWrites,u))return null;{const d=xi(s.visibleWrites,u);return Ld(d)?o.getChild(i):vr(d,o.getChild(i))}}function dx(s,e,i,a){const o=tt(e,i),u=vs(s.visibleWrites,o);if(u!=null)return u;if(a.isCompleteForChild(i)){const d=xi(s.visibleWrites,o);return vr(d,a.getNode().getImmediateChild(i))}else return null}function hx(s,e){return vs(s.visibleWrites,e)}function px(s,e,i,a,o,u,d){let h;const p=xi(s.visibleWrites,e),m=vs(p,Ee());if(m!=null)h=m;else if(i!=null)h=vr(p,i);else return[];if(h=h.withIndex(d),!h.isEmpty()&&!h.isLeafNode()){const y=[],b=d.getCompare(),v=u?h.getReverseIteratorFrom(a,d):h.getIteratorFrom(a,d);let I=v.getNext();for(;I&&y.length<o;)b(I,a)!==0&&y.push(I),I=v.getNext();return y}else return[]}function mx(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function ec(s,e,i,a){return WS(s.writeTree,s.treePath,e,i,a)}function Eh(s,e){return ux(s.writeTree,s.treePath,e)}function iv(s,e,i,a){return fx(s.writeTree,s.treePath,e,i,a)}function tc(s,e){return hx(s.writeTree,tt(s.treePath,e))}function gx(s,e,i,a,o,u){return px(s.writeTree,s.treePath,e,i,a,o,u)}function Th(s,e,i){return dx(s.writeTree,s.treePath,e,i)}function ZS(s,e){return $S(tt(s.treePath,e),s.writeTree)}function $S(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,a=e.childName;H(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),H(a!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(a);if(o){const u=o.type;if(i==="child_added"&&u==="child_removed")this.changeMap.set(a,Xa(a,e.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&u==="child_added")this.changeMap.delete(a);else if(i==="child_removed"&&u==="child_changed")this.changeMap.set(a,Qa(a,o.oldSnap));else if(i==="child_changed"&&u==="child_added")this.changeMap.set(a,yr(a,e.snapshotNode));else if(i==="child_changed"&&u==="child_changed")this.changeMap.set(a,Xa(a,e.snapshotNode,o.oldSnap));else throw Tr("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{getCompleteChild(e){return null}getChildAfterChild(e,i,a){return null}}const JS=new yx;class wh{constructor(e,i,a=null){this.writes_=e,this.viewCache_=i,this.optCompleteServerCache_=a}getCompleteChild(e){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(e))return i.getNode().getImmediateChild(e);{const a=this.optCompleteServerCache_!=null?new ps(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Th(this.writes_,e,a)}}getChildAfterChild(e,i,a){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ms(this.viewCache_),u=gx(this.writes_,o,i,1,a,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(s){return{filter:s}}function bx(s,e){H(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function Sx(s,e,i,a,o){const u=new _x;let d,h;if(i.type===ln.OVERWRITE){const m=i;m.source.fromUser?d=Ud(s,e,m.path,m.snap,a,o,u):(H(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!me(m.path),d=nc(s,e,m.path,m.snap,a,o,h,u))}else if(i.type===ln.MERGE){const m=i;m.source.fromUser?d=Tx(s,e,m.path,m.children,a,o,u):(H(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),d=zd(s,e,m.path,m.children,a,o,h,u))}else if(i.type===ln.ACK_USER_WRITE){const m=i;m.revert?d=Ax(s,e,m.path,a,o,u):d=wx(s,e,m.path,m.affectedTree,a,o,u)}else if(i.type===ln.LISTEN_COMPLETE)d=Cx(s,e,i.path,a,u);else throw Tr("Unknown operation type: "+i.type);const p=u.getChanges();return Ex(e,d,p),{viewCache:d,changes:p}}function Ex(s,e,i){const a=e.eventCache;if(a.isFullyInitialized()){const o=a.getNode().isLeafNode()||a.getNode().isEmpty(),u=Dd(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!a.getNode().equals(u)||!a.getNode().getPriority().equals(u.getPriority()))&&i.push(GS(Dd(e)))}}function eE(s,e,i,a,o,u){const d=e.eventCache;if(tc(a,i)!=null)return e;{let h,p;if(me(i))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=ms(e),y=m instanceof ee?m:ee.EMPTY_NODE,b=Eh(a,y);h=s.filter.updateFullNode(e.eventCache.getNode(),b,u)}else{const m=ec(a,ms(e));h=s.filter.updateFullNode(e.eventCache.getNode(),m,u)}else{const m=ue(i);if(m===".priority"){H(ki(i)===1,"Can't have a priority with additional path components");const y=d.getNode();p=e.serverCache.getNode();const b=iv(a,i,y,p);b!=null?h=s.filter.updatePriority(y,b):h=d.getNode()}else{const y=Ue(i);let b;if(d.isCompleteForChild(m)){p=e.serverCache.getNode();const v=iv(a,i,d.getNode(),p);v!=null?b=d.getNode().getImmediateChild(m).updateChild(y,v):b=d.getNode().getImmediateChild(m)}else b=Th(a,m,e.serverCache);b!=null?h=s.filter.updateChild(d.getNode(),m,b,y,o,u):h=d.getNode()}}return Ba(e,h,d.isFullyInitialized()||me(i),s.filter.filtersNodes())}}function nc(s,e,i,a,o,u,d,h){const p=e.serverCache;let m;const y=d?s.filter:s.filter.getIndexedFilter();if(me(i))m=y.updateFullNode(p.getNode(),a,null);else if(y.filtersNodes()&&!p.isFiltered()){const I=p.getNode().updateChild(i,a);m=y.updateFullNode(p.getNode(),I,null)}else{const I=ue(i);if(!p.isCompleteForPath(i)&&ki(i)>1)return e;const x=Ue(i),K=p.getNode().getImmediateChild(I).updateChild(x,a);I===".priority"?m=y.updatePriority(p.getNode(),K):m=y.updateChild(p.getNode(),I,K,x,JS,null)}const b=QS(e,m,p.isFullyInitialized()||me(i),y.filtersNodes()),v=new wh(o,b,u);return eE(s,b,i,o,v,h)}function Ud(s,e,i,a,o,u,d){const h=e.eventCache;let p,m;const y=new wh(o,e,u);if(me(i))m=s.filter.updateFullNode(e.eventCache.getNode(),a,d),p=Ba(e,m,!0,s.filter.filtersNodes());else{const b=ue(i);if(b===".priority")m=s.filter.updatePriority(e.eventCache.getNode(),a),p=Ba(e,m,h.isFullyInitialized(),h.isFiltered());else{const v=Ue(i),I=h.getNode().getImmediateChild(b);let x;if(me(v))x=a;else{const q=y.getCompleteChild(b);q!=null?LS(v)===".priority"&&q.getChild(zS(v)).isEmpty()?x=q:x=q.updateChild(v,a):x=ee.EMPTY_NODE}if(I.equals(x))p=e;else{const q=s.filter.updateChild(h.getNode(),b,x,v,y,d);p=Ba(e,q,h.isFullyInitialized(),s.filter.filtersNodes())}}}return p}function sv(s,e){return s.eventCache.isCompleteForChild(e)}function Tx(s,e,i,a,o,u,d){let h=e;return a.foreach((p,m)=>{const y=tt(i,p);sv(e,ue(y))&&(h=Ud(s,h,y,m,o,u,d))}),a.foreach((p,m)=>{const y=tt(i,p);sv(e,ue(y))||(h=Ud(s,h,y,m,o,u,d))}),h}function rv(s,e,i){return i.foreach((a,o)=>{e=e.updateChild(a,o)}),e}function zd(s,e,i,a,o,u,d,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;me(i)?m=a:m=new ze(null).setTree(i,a);const y=e.serverCache.getNode();return m.children.inorderTraversal((b,v)=>{if(y.hasChild(b)){const I=e.serverCache.getNode().getImmediateChild(b),x=rv(s,I,v);p=nc(s,p,new ke(b),x,o,u,d,h)}}),m.children.inorderTraversal((b,v)=>{const I=!e.serverCache.isCompleteForChild(b)&&v.value===null;if(!y.hasChild(b)&&!I){const x=e.serverCache.getNode().getImmediateChild(b),q=rv(s,x,v);p=nc(s,p,new ke(b),q,o,u,d,h)}}),p}function wx(s,e,i,a,o,u,d){if(tc(o,i)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(a.value!=null){if(me(i)&&p.isFullyInitialized()||p.isCompleteForPath(i))return nc(s,e,i,p.getNode().getChild(i),o,u,h,d);if(me(i)){let m=new ze(null);return p.getNode().forEachChild(hr,(y,b)=>{m=m.set(new ke(y),b)}),zd(s,e,i,m,o,u,h,d)}else return e}else{let m=new ze(null);return a.foreach((y,b)=>{const v=tt(i,y);p.isCompleteForPath(v)&&(m=m.set(y,p.getNode().getChild(v)))}),zd(s,e,i,m,o,u,h,d)}}function Cx(s,e,i,a,o){const u=e.serverCache,d=QS(e,u.getNode(),u.isFullyInitialized()||me(i),u.isFiltered());return eE(s,d,i,a,JS,o)}function Ax(s,e,i,a,o,u){let d;if(tc(a,i)!=null)return e;{const h=new wh(a,e,o),p=e.eventCache.getNode();let m;if(me(i)||ue(i)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ec(a,ms(e));else{const b=e.serverCache.getNode();H(b instanceof ee,"serverChildren would be complete if leaf node"),y=Eh(a,b)}y=y,m=s.filter.updateFullNode(p,y,u)}else{const y=ue(i);let b=Th(a,y,e.serverCache);b==null&&e.serverCache.isCompleteForChild(y)&&(b=p.getImmediateChild(y)),b!=null?m=s.filter.updateChild(p,y,b,Ue(i),h,u):e.eventCache.getNode().hasChild(y)?m=s.filter.updateChild(p,y,ee.EMPTY_NODE,Ue(i),h,u):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=ec(a,ms(e)),d.isLeafNode()&&(m=s.filter.updateFullNode(m,d,u)))}return d=e.serverCache.isFullyInitialized()||tc(a,Ee())!=null,Ba(e,m,d,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,i){this.query_=e,this.eventRegistrations_=[];const a=this.query_._queryParams,o=new _h(a.getIndex()),u=YO(a);this.processor_=vx(u);const d=i.serverCache,h=i.eventCache,p=o.updateFullNode(ee.EMPTY_NODE,d.getNode(),null),m=u.updateFullNode(ee.EMPTY_NODE,h.getNode(),null),y=new ps(p,d.isFullyInitialized(),o.filtersNodes()),b=new ps(m,h.isFullyInitialized(),u.filtersNodes());this.viewCache_=vc(b,y),this.eventGenerator_=new JO(this.query_)}get query(){return this.query_}}function Nx(s){return s.viewCache_.serverCache.getNode()}function Ix(s,e){const i=ms(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!me(e)&&!i.getImmediateChild(ue(e)).isEmpty())?i.getChild(e):null}function av(s){return s.eventRegistrations_.length===0}function Ox(s,e){s.eventRegistrations_.push(e)}function lv(s,e,i){const a=[];if(i){H(e==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(i,o);d&&a.push(d)})}if(e){let o=[];for(let u=0;u<s.eventRegistrations_.length;++u){const d=s.eventRegistrations_[u];if(!d.matches(e))o.push(d);else if(e.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(u+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return a}function ov(s,e,i,a){e.type===ln.MERGE&&e.source.queryId!==null&&(H(ms(s.viewCache_),"We should always have a full cache before handling merges"),H(Dd(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,u=Sx(s.processor_,o,e,i,a);return bx(s.processor_,u.viewCache),H(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=u.viewCache,tE(s,u.changes,u.viewCache.eventCache.getNode(),null)}function xx(s,e){const i=s.viewCache_.eventCache,a=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Ye,(u,d)=>{a.push(yr(u,d))}),i.isFullyInitialized()&&a.push(GS(i.getNode())),tE(s,a,i.getNode(),e)}function tE(s,e,i,a){const o=a?[a]:s.eventRegistrations_;return ex(s.eventGenerator_,e,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;class Mx{constructor(){this.views=new Map}}function Dx(s){H(!ic,"__referenceConstructor has already been defined"),ic=s}function kx(){return H(ic,"Reference.ts has not been loaded"),ic}function Lx(s){return s.views.size===0}function Ch(s,e,i,a){const o=e.source.queryId;if(o!==null){const u=s.views.get(o);return H(u!=null,"SyncTree gave us an op for an invalid query."),ov(u,e,i,a)}else{let u=[];for(const d of s.views.values())u=u.concat(ov(d,e,i,a));return u}}function Ux(s,e,i,a,o){const u=e._queryIdentifier,d=s.views.get(u);if(!d){let h=ec(i,o?a:null),p=!1;h?p=!0:a instanceof ee?(h=Eh(i,a),p=!1):(h=ee.EMPTY_NODE,p=!1);const m=vc(new ps(h,p,!1),new ps(a,o,!1));return new Rx(e,m)}return d}function zx(s,e,i,a,o,u){const d=Ux(s,e,a,o,u);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,d),Ox(d,i),xx(d,i)}function Px(s,e,i,a){const o=e._queryIdentifier,u=[];let d=[];const h=Li(s);if(o==="default")for(const[p,m]of s.views.entries())d=d.concat(lv(m,i,a)),av(m)&&(s.views.delete(p),m.query._queryParams.loadsAllData()||u.push(m.query));else{const p=s.views.get(o);p&&(d=d.concat(lv(p,i,a)),av(p)&&(s.views.delete(o),p.query._queryParams.loadsAllData()||u.push(p.query)))}return h&&!Li(s)&&u.push(new(kx())(e._repo,e._path)),{removed:u,events:d}}function nE(s){const e=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||e.push(i);return e}function pr(s,e){let i=null;for(const a of s.views.values())i=i||Ix(a,e);return i}function iE(s,e){if(e._queryParams.loadsAllData())return bc(s);{const a=e._queryIdentifier;return s.views.get(a)}}function sE(s,e){return iE(s,e)!=null}function Li(s){return bc(s)!=null}function bc(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;function Hx(s){H(!sc,"__referenceConstructor has already been defined"),sc=s}function Bx(){return H(sc,"Reference.ts has not been loaded"),sc}let qx=1;class cv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ze(null),this.pendingWriteTree_=mx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rE(s,e,i,a,o){return sx(s.pendingWriteTree_,e,i,a,o),o?al(s,new hs(FS(),e,i)):[]}function ls(s,e,i=!1){const a=rx(s.pendingWriteTree_,e);if(ax(s.pendingWriteTree_,e)){let u=new ze(null);return a.snap!=null?u=u.set(Ee(),!0):It(a.children,d=>{u=u.set(new ke(d),!0)}),al(s,new Jo(a.path,u,i))}else return[]}function Sc(s,e,i){return al(s,new hs(vh(),e,i))}function Vx(s,e,i){const a=ze.fromObject(i);return al(s,new Za(vh(),e,a))}function jx(s,e){return al(s,new Wa(vh(),e))}function Gx(s,e,i){const a=Rh(s,i);if(a){const o=Nh(a),u=o.path,d=o.queryId,h=Ct(u,e),p=new Wa(bh(d),h);return Ih(s,u,p)}else return[]}function Pd(s,e,i,a,o=!1){const u=e._path,d=s.syncPointTree_.get(u);let h=[];if(d&&(e._queryIdentifier==="default"||sE(d,e))){const p=Px(d,e,i,a);Lx(d)&&(s.syncPointTree_=s.syncPointTree_.remove(u));const m=p.removed;if(h=p.events,!o){const y=m.findIndex(v=>v._queryParams.loadsAllData())!==-1,b=s.syncPointTree_.findOnPath(u,(v,I)=>Li(I));if(y&&!b){const v=s.syncPointTree_.subtree(u);if(!v.isEmpty()){const I=Qx(v);for(let x=0;x<I.length;++x){const q=I[x],K=q.query,re=oE(s,q);s.listenProvider_.startListening(Va(K),rc(s,K),re.hashFn,re.onComplete)}}}!b&&m.length>0&&!a&&(y?s.listenProvider_.stopListening(Va(e),null):m.forEach(v=>{const I=s.queryToTagMap.get(Ec(v));s.listenProvider_.stopListening(Va(v),I)}))}Xx(s,m)}return h}function Yx(s,e,i,a){const o=Rh(s,a);if(o!=null){const u=Nh(o),d=u.path,h=u.queryId,p=Ct(d,e),m=new hs(bh(h),p,i);return Ih(s,d,m)}else return[]}function Fx(s,e,i,a){const o=Rh(s,a);if(o){const u=Nh(o),d=u.path,h=u.queryId,p=Ct(d,e),m=ze.fromObject(i),y=new Za(bh(h),p,m);return Ih(s,d,y)}else return[]}function uv(s,e,i,a=!1){const o=e._path;let u=null,d=!1;s.syncPointTree_.foreachOnPath(o,(v,I)=>{const x=Ct(v,o);u=u||pr(I,x),d=d||Li(I)});let h=s.syncPointTree_.get(o);h?(d=d||Li(h),u=u||pr(h,Ee())):(h=new Mx,s.syncPointTree_=s.syncPointTree_.set(o,h));let p;u!=null?p=!0:(p=!1,u=ee.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((I,x)=>{const q=pr(x,Ee());q&&(u=u.updateImmediateChild(I,q))}));const m=sE(h,e);if(!m&&!e._queryParams.loadsAllData()){const v=Ec(e);H(!s.queryToTagMap.has(v),"View does not exist, but we have a tag");const I=Kx();s.queryToTagMap.set(v,I),s.tagToQueryMap.set(I,v)}const y=Sh(s.pendingWriteTree_,o);let b=zx(h,e,i,y,u,p);if(!m&&!d&&!a){const v=iE(h,e);b=b.concat(Wx(s,e,v))}return b}function Ah(s,e,i){const o=s.pendingWriteTree_,u=s.syncPointTree_.findOnPath(e,(d,h)=>{const p=Ct(d,e),m=pr(h,p);if(m)return m});return WS(o,e,u,i,!0)}function al(s,e){return aE(e,s.syncPointTree_,null,Sh(s.pendingWriteTree_,Ee()))}function aE(s,e,i,a){if(me(s.path))return lE(s,e,i,a);{const o=e.get(Ee());i==null&&o!=null&&(i=pr(o,Ee()));let u=[];const d=ue(s.path),h=s.operationForChild(d),p=e.children.get(d);if(p&&h){const m=i?i.getImmediateChild(d):null,y=ZS(a,d);u=u.concat(aE(h,p,m,y))}return o&&(u=u.concat(Ch(o,s,a,i))),u}}function lE(s,e,i,a){const o=e.get(Ee());i==null&&o!=null&&(i=pr(o,Ee()));let u=[];return e.children.inorderTraversal((d,h)=>{const p=i?i.getImmediateChild(d):null,m=ZS(a,d),y=s.operationForChild(d);y&&(u=u.concat(lE(y,h,p,m)))}),o&&(u=u.concat(Ch(o,s,a,i))),u}function oE(s,e){const i=e.query,a=rc(s,i);return{hashFn:()=>(Nx(e)||ee.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return a?Gx(s,i._path,a):jx(s,i._path);{const u=GI(o,i);return Pd(s,i,null,u)}}}}function rc(s,e){const i=Ec(e);return s.queryToTagMap.get(i)}function Ec(s){return s._path.toString()+"$"+s._queryIdentifier}function Rh(s,e){return s.tagToQueryMap.get(e)}function Nh(s){const e=s.indexOf("$");return H(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new ke(s.substr(0,e))}}function Ih(s,e,i){const a=s.syncPointTree_.get(e);H(a,"Missing sync point for query tag that we're tracking");const o=Sh(s.pendingWriteTree_,e);return Ch(a,i,o,null)}function Qx(s){return s.fold((e,i,a)=>{if(i&&Li(i))return[bc(i)];{let o=[];return i&&(o=nE(i)),It(a,(u,d)=>{o=o.concat(d)}),o}})}function Va(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(Bx())(s._repo,s._path):s}function Xx(s,e){for(let i=0;i<e.length;++i){const a=e[i];if(!a._queryParams.loadsAllData()){const o=Ec(a),u=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(u)}}}function Kx(){return qx++}function Wx(s,e,i){const a=e._path,o=rc(s,e),u=oE(s,i),d=s.listenProvider_.startListening(Va(e),o,u.hashFn,u.onComplete),h=s.syncPointTree_.subtree(a);if(o)H(!Li(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,y,b)=>{if(!me(m)&&y&&Li(y))return[bc(y).query];{let v=[];return y&&(v=v.concat(nE(y).map(I=>I.query))),It(b,(I,x)=>{v=v.concat(x)}),v}});for(let m=0;m<p.length;++m){const y=p[m];s.listenProvider_.stopListening(Va(y),rc(s,y))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.node_=e}getImmediateChild(e){const i=this.node_.getImmediateChild(e);return new Oh(i)}node(){return this.node_}}class xh{constructor(e,i){this.syncTree_=e,this.path_=i}getImmediateChild(e){const i=tt(this.path_,e);return new xh(this.syncTree_,i)}node(){return Ah(this.syncTree_,this.path_)}}const Zx=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},fv=function(s,e,i){if(!s||typeof s!="object")return s;if(H(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return $x(s[".sv"],e,i);if(typeof s[".sv"]=="object")return Jx(s[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},$x=function(s,e,i){switch(s){case"timestamp":return i.timestamp;default:H(!1,"Unexpected server value: "+s)}},Jx=function(s,e,i){s.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const a=s.increment;typeof a!="number"&&H(!1,"Unexpected increment value: "+a);const o=e.node();if(H(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return a;const d=o.getValue();return typeof d!="number"?a:d+a},eM=function(s,e,i,a){return Mh(e,new xh(i,s),a)},cE=function(s,e,i){return Mh(s,new Oh(e),i)};function Mh(s,e,i){const a=s.getPriority().val(),o=fv(a,e.getImmediateChild(".priority"),i);let u;if(s.isLeafNode()){const d=s,h=fv(d.getValue(),e,i);return h!==d.getValue()||o!==d.getPriority().val()?new at(h,dt(o)):s}else{const d=s;return u=d,o!==d.getPriority().val()&&(u=u.updatePriority(new at(o))),d.forEachChild(Ye,(h,p)=>{const m=Mh(p,e.getImmediateChild(h),i);m!==p&&(u=u.updateImmediateChild(h,m))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e="",i=null,a={children:{},childCount:0}){this.name=e,this.parent=i,this.node=a}}function kh(s,e){let i=e instanceof ke?e:new ke(e),a=s,o=ue(i);for(;o!==null;){const u=gr(a.node.children,o)||{children:{},childCount:0};a=new Dh(o,a,u),i=Ue(i),o=ue(i)}return a}function Or(s){return s.node.value}function uE(s,e){s.node.value=e,Hd(s)}function fE(s){return s.node.childCount>0}function tM(s){return Or(s)===void 0&&!fE(s)}function Tc(s,e){It(s.node.children,(i,a)=>{e(new Dh(i,s,a))})}function dE(s,e,i,a){i&&e(s),Tc(s,o=>{dE(o,e,!0)})}function nM(s,e,i){let a=s.parent;for(;a!==null;){if(e(a))return!0;a=a.parent}return!1}function ll(s){return new ke(s.parent===null?s.name:ll(s.parent)+"/"+s.name)}function Hd(s){s.parent!==null&&iM(s.parent,s.name,s)}function iM(s,e,i){const a=tM(i),o=Xn(s.node.children,e);a&&o?(delete s.node.children[e],s.node.childCount--,Hd(s)):!a&&!o&&(s.node.children[e]=i.node,s.node.childCount++,Hd(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=/[\[\].#$\/\u0000-\u001F\u007F]/,rM=/[\[\].#$\u0000-\u001F\u007F]/,fd=10*1024*1024,hE=function(s){return typeof s=="string"&&s.length!==0&&!sM.test(s)},pE=function(s){return typeof s=="string"&&s.length!==0&&!rM.test(s)},aM=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),pE(s)},mE=function(s,e,i,a){a&&e===void 0||Lh(Kd(s,"value"),e,i)},Lh=function(s,e,i){const a=i instanceof ke?new TO(i,s):i;if(e===void 0)throw new Error(s+"contains undefined "+is(a));if(typeof e=="function")throw new Error(s+"contains a function "+is(a)+" with contents = "+e.toString());if(pS(e))throw new Error(s+"contains "+e.toString()+" "+is(a));if(typeof e=="string"&&e.length>fd/3&&uc(e)>fd)throw new Error(s+"contains a string greater than "+fd+" utf8 bytes "+is(a)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(It(e,(d,h)=>{if(d===".value")o=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!hE(d)))throw new Error(s+" contains an invalid key ("+d+") "+is(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wO(a,d),Lh(s,h,a),CO(a)}),o&&u)throw new Error(s+' contains ".value" child '+is(a)+" in addition to actual children.")}},gE=function(s,e,i,a){if(!pE(i))throw new Error(Kd(s,e)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lM=function(s,e,i,a){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),gE(s,e,i)},_E=function(s,e){if(ue(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},oM=function(s,e){const i=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!aM(i))throw new Error(Kd(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uh(s,e){let i=null;for(let a=0;a<e.length;a++){const o=e[a],u=o.getPath();i!==null&&!ph(u,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:u}),i.events.push(o)}i&&s.eventLists_.push(i)}function yE(s,e,i){Uh(s,i),vE(s,a=>ph(a,e))}function Fn(s,e,i){Uh(s,i),vE(s,a=>an(a,e)||an(e,a))}function vE(s,e){s.recursionDepth_++;let i=!0;for(let a=0;a<s.eventLists_.length;a++){const o=s.eventLists_[a];if(o){const u=o.path;e(u)?(uM(s.eventLists_[a]),s.eventLists_[a]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function uM(s){for(let e=0;e<s.events.length;e++){const i=s.events[e];if(i!==null){s.events[e]=null;const a=i.getEventRunner();Pa&&gt("event: "+i.toString()),Ir(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM="repo_interrupt",dM=25;class hM{constructor(e,i,a,o){this.repoInfo_=e,this.forceRestClient_=i,this.authTokenProvider_=a,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$o(),this.transactionQueueTree_=new Dh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pM(s,e,i){if(s.stats_=dh(s.repoInfo_),s.forceRestClient_||XI())s.server_=new Zo(s.repoInfo_,(a,o,u,d)=>{dv(s,a,o,u,d)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>hv(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(i)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}s.persistentConnection_=new qn(s.repoInfo_,e,(a,o,u,d)=>{dv(s,a,o,u,d)},a=>{hv(s,a)},a=>{mM(s,a)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(a=>{s.server_.refreshAuthToken(a)}),s.appCheckProvider_.addTokenChangeListener(a=>{s.server_.refreshAppCheckToken(a.token)}),s.statsReporter_=JI(s.repoInfo_,()=>new $O(s.stats_,s.server_)),s.infoData_=new QO,s.infoSyncTree_=new cv({startListening:(a,o,u,d)=>{let h=[];const p=s.infoData_.getNode(a._path);return p.isEmpty()||(h=Sc(s.infoSyncTree_,a._path,p),setTimeout(()=>{d("ok")},0)),h},stopListening:()=>{}}),Ph(s,"connected",!1),s.serverSyncTree_=new cv({startListening:(a,o,u,d)=>(s.server_.listen(a,u,o,(h,p)=>{const m=d(h,p);Fn(s.eventQueue_,a._path,m)}),[]),stopListening:(a,o)=>{s.server_.unlisten(a,o)}})}function bE(s){const i=s.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function zh(s){return Zx({timestamp:bE(s)})}function dv(s,e,i,a,o){s.dataUpdateCount++;const u=new ke(e);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,i):i;let d=[];if(o)if(a){const p=Po(i,m=>dt(m));d=Fx(s.serverSyncTree_,u,p,o)}else{const p=dt(i);d=Yx(s.serverSyncTree_,u,p,o)}else if(a){const p=Po(i,m=>dt(m));d=Vx(s.serverSyncTree_,u,p)}else{const p=dt(i);d=Sc(s.serverSyncTree_,u,p)}let h=u;d.length>0&&(h=wc(s,u)),Fn(s.eventQueue_,h,d)}function hv(s,e){Ph(s,"connected",e),e===!1&&_M(s)}function mM(s,e){It(e,(i,a)=>{Ph(s,i,a)})}function Ph(s,e,i){const a=new ke("/.info/"+e),o=dt(i);s.infoData_.updateSnapshot(a,o);const u=Sc(s.infoSyncTree_,a,o);Fn(s.eventQueue_,a,u)}function SE(s){return s.nextWriteId_++}function gM(s,e,i,a,o){Hh(s,"set",{path:e.toString(),value:i,priority:a});const u=zh(s),d=dt(i,a),h=Ah(s.serverSyncTree_,e),p=cE(d,h,u),m=SE(s),y=rE(s.serverSyncTree_,e,p,m,!0);Uh(s.eventQueue_,y),s.server_.put(e.toString(),d.val(!0),(v,I)=>{const x=v==="ok";x||Nt("set at "+e+" failed: "+v);const q=ls(s.serverSyncTree_,m,!x);Fn(s.eventQueue_,e,q),bM(s,o,v,I)});const b=RE(s,e);wc(s,b),Fn(s.eventQueue_,b,[])}function _M(s){Hh(s,"onDisconnectEvents");const e=zh(s),i=$o();Md(s.onDisconnect_,Ee(),(o,u)=>{const d=eM(o,u,s.serverSyncTree_,e);YS(i,o,d)});let a=[];Md(i,Ee(),(o,u)=>{a=a.concat(Sc(s.serverSyncTree_,o,u));const d=RE(s,o);wc(s,d)}),s.onDisconnect_=$o(),Fn(s.eventQueue_,Ee(),a)}function yM(s,e,i){let a;ue(e._path)===".info"?a=uv(s.infoSyncTree_,e,i):a=uv(s.serverSyncTree_,e,i),yE(s.eventQueue_,e._path,a)}function EE(s,e,i){let a;ue(e._path)===".info"?a=Pd(s.infoSyncTree_,e,i):a=Pd(s.serverSyncTree_,e,i),yE(s.eventQueue_,e._path,a)}function vM(s){s.persistentConnection_&&s.persistentConnection_.interrupt(fM)}function Hh(s,...e){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),gt(i,...e)}function bM(s,e,i,a){e&&Ir(()=>{if(i==="ok")e(null);else{const o=(i||"error").toUpperCase();let u=o;a&&(u+=": "+a);const d=new Error(u);d.code=o,e(d)}})}function TE(s,e,i){return Ah(s.serverSyncTree_,e,i)||ee.EMPTY_NODE}function Bh(s,e=s.transactionQueueTree_){if(e||Cc(s,e),Or(e)){const i=CE(s,e);H(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&SM(s,ll(e),i)}else fE(e)&&Tc(e,i=>{Bh(s,i)})}function SM(s,e,i){const a=i.map(m=>m.currentWriteId),o=TE(s,e,a);let u=o;const d=o.hash();for(let m=0;m<i.length;m++){const y=i[m];H(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const b=Ct(e,y.path);u=u.updateChild(b,y.currentOutputSnapshotRaw)}const h=u.val(!0),p=e;s.server_.put(p.toString(),h,m=>{Hh(s,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const b=[];for(let v=0;v<i.length;v++)i[v].status=2,y=y.concat(ls(s.serverSyncTree_,i[v].currentWriteId)),i[v].onComplete&&b.push(()=>i[v].onComplete(null,!0,i[v].currentOutputSnapshotResolved)),i[v].unwatcher();Cc(s,kh(s.transactionQueueTree_,e)),Bh(s,s.transactionQueueTree_),Fn(s.eventQueue_,e,y);for(let v=0;v<b.length;v++)Ir(b[v])}else{if(m==="datastale")for(let b=0;b<i.length;b++)i[b].status===3?i[b].status=4:i[b].status=0;else{Nt("transaction at "+p.toString()+" failed: "+m);for(let b=0;b<i.length;b++)i[b].status=4,i[b].abortReason=m}wc(s,e)}},d)}function wc(s,e){const i=wE(s,e),a=ll(i),o=CE(s,i);return EM(s,o,a),a}function EM(s,e,i){if(e.length===0)return;const a=[];let o=[];const d=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=Ct(i,p.path);let y=!1,b;if(H(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,b=p.abortReason,o=o.concat(ls(s.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=dM)y=!0,b="maxretry",o=o.concat(ls(s.serverSyncTree_,p.currentWriteId,!0));else{const v=TE(s,p.path,d);p.currentInputSnapshot=v;const I=e[h].update(v.val());if(I!==void 0){Lh("transaction failed: Data returned ",I,p.path);let x=dt(I);typeof I=="object"&&I!=null&&Xn(I,".priority")||(x=x.updatePriority(v.getPriority()));const K=p.currentWriteId,re=zh(s),be=cE(x,v,re);p.currentOutputSnapshotRaw=x,p.currentOutputSnapshotResolved=be,p.currentWriteId=SE(s),d.splice(d.indexOf(K),1),o=o.concat(rE(s.serverSyncTree_,p.path,be,p.currentWriteId,p.applyLocally)),o=o.concat(ls(s.serverSyncTree_,K,!0))}else y=!0,b="nodata",o=o.concat(ls(s.serverSyncTree_,p.currentWriteId,!0))}Fn(s.eventQueue_,i,o),o=[],y&&(e[h].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(b==="nodata"?a.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):a.push(()=>e[h].onComplete(new Error(b),!1,null))))}Cc(s,s.transactionQueueTree_);for(let h=0;h<a.length;h++)Ir(a[h]);Bh(s,s.transactionQueueTree_)}function wE(s,e){let i,a=s.transactionQueueTree_;for(i=ue(e);i!==null&&Or(a)===void 0;)a=kh(a,i),e=Ue(e),i=ue(e);return a}function CE(s,e){const i=[];return AE(s,e,i),i.sort((a,o)=>a.order-o.order),i}function AE(s,e,i){const a=Or(e);if(a)for(let o=0;o<a.length;o++)i.push(a[o]);Tc(e,o=>{AE(s,o,i)})}function Cc(s,e){const i=Or(e);if(i){let a=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[a]=i[o],a++);i.length=a,uE(e,i.length>0?i:void 0)}Tc(e,a=>{Cc(s,a)})}function RE(s,e){const i=ll(wE(s,e)),a=kh(s.transactionQueueTree_,e);return nM(a,o=>{dd(s,o)}),dd(s,a),dE(a,o=>{dd(s,o)}),i}function dd(s,e){const i=Or(e);if(i){const a=[];let o=[],u=-1;for(let d=0;d<i.length;d++)i[d].status===3||(i[d].status===1?(H(u===d-1,"All SENT items should be at beginning of queue."),u=d,i[d].status=3,i[d].abortReason="set"):(H(i[d].status===0,"Unexpected transaction status in abort"),i[d].unwatcher(),o=o.concat(ls(s.serverSyncTree_,i[d].currentWriteId,!0)),i[d].onComplete&&a.push(i[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?uE(e,void 0):i.length=u+1,Fn(s.eventQueue_,ll(e),o);for(let d=0;d<a.length;d++)Ir(a[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(s){let e="";const i=s.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let o=i[a];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function wM(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const a=i.split("=");a.length===2?e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):Nt(`Invalid query segment '${i}' in query '${s}'`)}return e}const pv=function(s,e){const i=CM(s),a=i.namespace;i.domain==="firebase.com"&&Yn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&i.domain!=="localhost"&&Yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||HI();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new AS(i.host,i.secure,a,o,e,"",a!==i.subdomain),path:new ke(i.pathString)}},CM=function(s){let e="",i="",a="",o="",u="",d=!0,h="https",p=443;if(typeof s=="string"){let m=s.indexOf("//");m>=0&&(h=s.substring(0,m-1),s=s.substring(m+2));let y=s.indexOf("/");y===-1&&(y=s.length);let b=s.indexOf("?");b===-1&&(b=s.length),e=s.substring(0,Math.min(y,b)),y<b&&(o=TM(s.substring(y,b)));const v=wM(s.substring(Math.min(s.length,b)));m=e.indexOf(":"),m>=0?(d=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const I=e.slice(0,m);if(I.toLowerCase()==="localhost")i="localhost";else if(I.split(".").length<=2)i=I;else{const x=e.indexOf(".");a=e.substring(0,x).toLowerCase(),i=e.substring(x+1),u=a}"ns"in v&&(u=v.ns)}return{host:e,port:p,domain:i,subdomain:a,secure:d,scheme:h,pathString:o,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",AM=(function(){let s=0;const e=[];return function(i){const a=i===s;s=i;let o;const u=new Array(8);for(o=7;o>=0;o--)u[o]=mv.charAt(i%64),i=Math.floor(i/64);H(i===0,"Cannot push at time == 0");let d=u.join("");if(a){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)d+=mv.charAt(e[o]);return H(d.length===20,"nextPushId: Length should be 20."),d}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,i,a,o){this.eventType=e,this.eventRegistration=i,this.snapshot=a,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ot(this.snapshot.exportVal())}}class NM{constructor(e,i,a){this.eventRegistration=e,this.error=i,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,i){this.snapshotCallback=e,this.cancelCallback=i}onValue(e,i){this.snapshotCallback.call(null,e,i)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,i,a,o){this._repo=e,this._path=i,this._queryParams=a,this._orderByCalled=o}get key(){return me(this._path)?null:LS(this._path)}get ref(){return new Ui(this._repo,this._path)}get _queryIdentifier(){const e=$y(this._queryParams),i=uh(e);return i==="{}"?"default":i}get _queryObject(){return $y(this._queryParams)}isEqual(e){if(e=_t(e),!(e instanceof Ac))return!1;const i=this._repo===e._repo,a=ph(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return i&&a&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+EO(this._path)}}class Ui extends Ac{constructor(e,i){super(e,i,new yh,!1)}get parent(){const e=zS(this._path);return e===null?null:new Ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ac{constructor(e,i,a){this._node=e,this.ref=i,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const i=new ke(e),a=br(this.ref,e);return new ac(this._node.getChild(i),a,Ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,o)=>e(new ac(o,br(this.ref,a),Ye)))}hasChild(e){const i=new ke(e);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function IM(s,e){return s=_t(s),s._checkNotDeleted("ref"),br(s._root,e)}function br(s,e){return s=_t(s),ue(s._path)===null?lM("child","path",e):gE("child","path",e),new Ui(s._repo,tt(s._path,e))}function OM(s,e){s=_t(s),_E("push",s._path),mE("push",e,s._path,!0);const i=bE(s._repo),a=AM(i),o=br(s,a),u=br(s,a);let d;return e!=null?d=xM(u,e).then(()=>u):d=Promise.resolve(u),o.then=d.then.bind(d),o.catch=d.then.bind(d,void 0),o}function xM(s,e){s=_t(s),_E("set",s._path),mE("set",e,s._path,!1);const i=new cc;return gM(s._repo,s._path,e,null,i.wrapCallback(()=>{})),i.promise}class Rc{constructor(e,i){this.eventType=e,this.callbackContext=i}respondsTo(e){let i=e==="children_added"?"child_added":e;return i=i==="children_removed"?"child_removed":i,this.eventType===i}createCancelEvent(e,i){return this.callbackContext.hasCancelCallback?new NM(this,e,i):null}createEvent(e,i){H(e.childName!=null,"Child events should have a childName.");const a=br(new Ui(i._repo,i._path),e.childName),o=i._queryParams.getIndex();return new RM(e.type,this,new ac(e.snapshotNode,a,o),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Rc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function MM(s,e,i,a,o){const u=new NE(i,void 0),d=new Rc(e,u);return yM(s._repo,s,d),()=>EE(s._repo,s,d)}function DM(s,e,i,a){return MM(s,"child_added",e)}function kM(s,e,i){let a=null;const o=i?new NE(i):null;a=new Rc(e,o),EE(s._repo,s,a)}class LM{}class UM extends LM{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ac(e._repo,e._path,FO(e._queryParams,this._limit),e._orderByCalled)}}function zM(s){if(Math.floor(s)!==s||s<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new UM(s)}function PM(s,...e){let i=_t(s);for(const a of e)i=a._apply(i);return i}Dx(Ui);Hx(Ui);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM="FIREBASE_DATABASE_EMULATOR_HOST",Bd={};let BM=!1;function qM(s,e,i,a){const o=e.lastIndexOf(":"),u=e.substring(0,o),d=wr(u);s.repoInfo_=new AS(e,d,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),a&&(s.authTokenProvider_=a)}function VM(s,e,i,a,o){let u=a||s.options.databaseURL;u===void 0&&(s.options.projectId||Yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",s.options.projectId),u=`${s.options.projectId}-default-rtdb.firebaseio.com`);let d=pv(u,o),h=d.repoInfo,p;typeof process<"u"&&ky&&(p=ky[HM]),p?(u=`http://${p}?ns=${h.namespace}`,d=pv(u,o),h=d.repoInfo):d.repoInfo.secure;const m=new WI(s.name,s.options,e);oM("Invalid Firebase Database URL",d),me(d.path)||Yn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=GM(h,s,m,new KI(s,i));return new YM(y,s)}function jM(s,e){const i=Bd[e];(!i||i[s.key]!==s)&&Yn(`Database ${e}(${s.repoInfo_}) has already been deleted.`),vM(s),delete i[s.key]}function GM(s,e,i,a){let o=Bd[e.name];o||(o={},Bd[e.name]=o);let u=o[s.toURLString()];return u&&Yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new hM(s,BM,i,a),o[s.toURLString()]=u,u}class YM{constructor(e,i){this._repoInternal=e,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ui(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yn("Cannot call "+e+" on a deleted database.")}}function FM(s=Zd(),e){const i=ys(s,"database").getImmediate({identifier:e});if(!i._instanceStarted){const a=UC("database");a&&QM(i,...a)}return i}function QM(s,e,i,a={}){s=_t(s),s._checkNotDeleted("useEmulator");const o=`${e}:${i}`,u=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Mi(a,u.repoInfo_.emulatorOptions))return;Yn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)a.mockUserToken&&Yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new Do(Do.OWNER);else if(a.mockUserToken){const h=typeof a.mockUserToken=="string"?a.mockUserToken:zC(a.mockUserToken,s.app.options.projectId);d=new Do(h)}wr(e)&&($v(e),Jv("Database",!0)),qM(u,o,a,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(s){DI(Ar),vn(new cn("database",(e,{instanceIdentifier:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return VM(a,o,u,i)},"PUBLIC").setMultipleInstances(!0)),Wt(Ly,Uy,s),Wt(Ly,Uy,"esm2020")}qn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};qn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};XM();/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),WM=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,a)=>a?a.toUpperCase():i.toLowerCase()),gv=s=>{const e=WM(s);return e.charAt(0).toUpperCase()+e.slice(1)},IE=(...s)=>s.filter((e,i,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===i).join(" ").trim(),ZM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $M={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=L.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:o="",children:u,iconNode:d,...h},p)=>L.createElement("svg",{ref:p,...$M,width:e,height:e,stroke:s,strokeWidth:a?Number(i)*24/Number(e):i,className:IE("lucide",o),...!u&&!ZM(h)&&{"aria-hidden":"true"},...h},[...d.map(([m,y])=>L.createElement(m,y)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=(s,e)=>{const i=L.forwardRef(({className:a,...o},u)=>L.createElement(JM,{ref:u,iconNode:e,className:IE(`lucide-${KM(gv(s))}`,`lucide-${s}`,a),...o}));return i.displayName=gv(s),i};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],tD=OE("maximize-2",eD);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],iD=OE("minimize-2",nD);function sD(){const[s,e]=L.useState([]),[i,a]=L.useState(""),[o,u]=L.useState(null),[d,h]=L.useState(!1),p=L.useRef(null),m=FM(Cd),b=IM(m,"prod/chat/messages"),v=PM(b,zM(100));L.useEffect(()=>{const x=xI(Cd),q=bN(x,K=>{K?u(K):pN(x)});return()=>q()},[]),L.useEffect(()=>{p.current?.scrollIntoView({behavior:"smooth"})},[s]),L.useEffect(()=>{const x=q=>{const K=q.val();e(re=>[...re,K])};return DM(v,x),()=>kM(v,"child_added",x)},[]);const I=x=>{if(x.preventDefault(),!i.trim())return;const q=o?.uid||"";OM(b,{text:i,sender:q}),a("")};return j.jsxs(Ww,{className:`flex flex-col shadow-lg border fixed z-50 bg-card transition-all duration-300 transform origin-bottom-right ${d?"bottom-0 right-0 w-screen h-screen rounded-none":"bottom-6 right-6 w-96 h-[32rem] rounded-xl"}
      `,children:[j.jsxs(Zw,{className:`border-b bg-card sticky top-0 z-10 flex flex-row items-center justify-between ${d?"p-6":"p-4"}`,children:[j.jsx($w,{className:"text-base",children:"Global Chat"}),j.jsx(gd,{size:"icon",variant:"ghost",onClick:()=>h(x=>!x),"aria-label":d?"Minimize chat":"Maximize chat",children:d?j.jsx(iD,{className:"w-5 h-5"}):j.jsx(tD,{className:"w-5 h-5"})})]}),j.jsx(CC,{className:"flex-1 overflow-y-auto px-4 py-4",children:j.jsxs(Jw,{className:"flex flex-col space-y-3 p-0",children:[s.map((x,q)=>j.jsx("div",{className:`max-w-[75%] rounded-lg px-4 py-2 border text-sm ${x.sender===(o?.uid||"")?"bg-primary text-primary-foreground self-end":"bg-muted text-muted-foreground self-start"}`,children:x.text},q)),j.jsx("div",{ref:p})]})}),j.jsx(eC,{className:`border-t ${d?"p-6":"p-2"}`,children:j.jsxs("form",{onSubmit:I,className:"flex gap-2 w-full",children:[j.jsx(tC,{value:i,onChange:x=>a(x.target.value),placeholder:"Type a message...",className:"flex-1",disabled:!o}),j.jsx(gd,{type:"submit",disabled:!o,children:"Send"})]})})]})}const rD={theme:"system",setTheme:()=>null},aD=L.createContext(rD);function lD({children:s,defaultTheme:e="system",storageKey:i="vite-ui-theme",...a}){const[o,u]=L.useState(()=>localStorage.getItem(i)||e);L.useEffect(()=>{const h=window.document.documentElement;if(h.classList.remove("light","dark"),o==="system"){const p=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";h.classList.add(p);return}h.classList.add(o)},[o]);const d={theme:o,setTheme:h=>{localStorage.setItem(i,h),u(h)}};return j.jsx(aD.Provider,{...a,value:d,children:s})}function oD(){return j.jsxs(lD,{defaultTheme:"system",storageKey:"vite-ui-theme",children:[j.jsx("div",{className:"flex min-h-svh flex-col items-center justify-center",children:j.jsx(gd,{children:"Click me"})}),j.jsx(sD,{})]})}lw.createRoot(document.getElementById("root")).render(j.jsx(L.StrictMode,{children:j.jsx(oD,{})}));
