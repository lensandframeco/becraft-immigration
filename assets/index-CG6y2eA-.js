var kp=Object.defineProperty;var Ep=(o,l,c)=>l in o?kp(o,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[l]=c;var La=(o,l,c)=>Ep(o,typeof l!="symbol"?l+"":l,c);function Up(o,l){for(var c=0;c<l.length;c++){const u=l[c];if(typeof u!="string"&&!Array.isArray(u)){for(const p in u)if(p!=="default"&&!(p in o)){const m=Object.getOwnPropertyDescriptor(u,p);m&&Object.defineProperty(o,p,m.get?m:{enumerable:!0,get:()=>u[p]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();function cr(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var rs={exports:{}},Fi={},os={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function Ip(){if(Cd)return K;Cd=1;var o=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),k=Symbol.iterator;function B(w){return w===null||typeof w!="object"?null:(w=k&&w[k]||w["@@iterator"],typeof w=="function"?w:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,_={};function q(w,E,Q){this.props=w,this.context=E,this.refs=_,this.updater=Q||$}q.prototype.isReactComponent={},q.prototype.setState=function(w,E){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,E,"setState")},q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function ie(){}ie.prototype=q.prototype;function se(w,E,Q){this.props=w,this.context=E,this.refs=_,this.updater=Q||$}var ne=se.prototype=new ie;ne.constructor=se,J(ne,q.prototype),ne.isPureReactComponent=!0;var le=Array.isArray,ke=Object.prototype.hasOwnProperty,Be={current:null},Fe={key:!0,ref:!0,__self:!0,__source:!0};function aa(w,E,Q){var X,ee={},ae=null,ce=null;if(E!=null)for(X in E.ref!==void 0&&(ce=E.ref),E.key!==void 0&&(ae=""+E.key),E)ke.call(E,X)&&!Fe.hasOwnProperty(X)&&(ee[X]=E[X]);var re=arguments.length-2;if(re===1)ee.children=Q;else if(1<re){for(var pe=Array(re),Qe=0;Qe<re;Qe++)pe[Qe]=arguments[Qe+2];ee.children=pe}if(w&&w.defaultProps)for(X in re=w.defaultProps,re)ee[X]===void 0&&(ee[X]=re[X]);return{$$typeof:o,type:w,key:ae,ref:ce,props:ee,_owner:Be.current}}function Pa(w,E){return{$$typeof:o,type:w.type,key:E,ref:w.ref,props:w.props,_owner:w._owner}}function Ca(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function lt(w){var E={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Q){return E[Q]})}var va=/\/+/g;function Je(w,E){return typeof w=="object"&&w!==null&&w.key!=null?lt(""+w.key):E.toString(36)}function ca(w,E,Q,X,ee){var ae=typeof w;(ae==="undefined"||ae==="boolean")&&(w=null);var ce=!1;if(w===null)ce=!0;else switch(ae){case"string":case"number":ce=!0;break;case"object":switch(w.$$typeof){case o:case l:ce=!0}}if(ce)return ce=w,ee=ee(ce),w=X===""?"."+Je(ce,0):X,le(ee)?(Q="",w!=null&&(Q=w.replace(va,"$&/")+"/"),ca(ee,E,Q,"",function(Qe){return Qe})):ee!=null&&(Ca(ee)&&(ee=Pa(ee,Q+(!ee.key||ce&&ce.key===ee.key?"":(""+ee.key).replace(va,"$&/")+"/")+w)),E.push(ee)),1;if(ce=0,X=X===""?".":X+":",le(w))for(var re=0;re<w.length;re++){ae=w[re];var pe=X+Je(ae,re);ce+=ca(ae,E,Q,pe,ee)}else if(pe=B(w),typeof pe=="function")for(w=pe.call(w),re=0;!(ae=w.next()).done;)ae=ae.value,pe=X+Je(ae,re++),ce+=ca(ae,E,Q,pe,ee);else if(ae==="object")throw E=String(w),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return ce}function xa(w,E,Q){if(w==null)return w;var X=[],ee=0;return ca(w,X,"","",function(ae){return E.call(Q,ae,ee++)}),X}function Oe(w){if(w._status===-1){var E=w._result;E=E(),E.then(function(Q){(w._status===0||w._status===-1)&&(w._status=1,w._result=Q)},function(Q){(w._status===0||w._status===-1)&&(w._status=2,w._result=Q)}),w._status===-1&&(w._status=0,w._result=E)}if(w._status===1)return w._result.default;throw w._result}var ye={current:null},L={transition:null},V={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:L,ReactCurrentOwner:Be};function R(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:xa,forEach:function(w,E,Q){xa(w,function(){E.apply(this,arguments)},Q)},count:function(w){var E=0;return xa(w,function(){E++}),E},toArray:function(w){return xa(w,function(E){return E})||[]},only:function(w){if(!Ca(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},K.Component=q,K.Fragment=c,K.Profiler=p,K.PureComponent=se,K.StrictMode=u,K.Suspense=v,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,K.act=R,K.cloneElement=function(w,E,Q){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=J({},w.props),ee=w.key,ae=w.ref,ce=w._owner;if(E!=null){if(E.ref!==void 0&&(ae=E.ref,ce=Be.current),E.key!==void 0&&(ee=""+E.key),w.type&&w.type.defaultProps)var re=w.type.defaultProps;for(pe in E)ke.call(E,pe)&&!Fe.hasOwnProperty(pe)&&(X[pe]=E[pe]===void 0&&re!==void 0?re[pe]:E[pe])}var pe=arguments.length-2;if(pe===1)X.children=Q;else if(1<pe){re=Array(pe);for(var Qe=0;Qe<pe;Qe++)re[Qe]=arguments[Qe+2];X.children=re}return{$$typeof:o,type:w.type,key:ee,ref:ae,props:X,_owner:ce}},K.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:m,_context:w},w.Consumer=w},K.createElement=aa,K.createFactory=function(w){var E=aa.bind(null,w);return E.type=w,E},K.createRef=function(){return{current:null}},K.forwardRef=function(w){return{$$typeof:x,render:w}},K.isValidElement=Ca,K.lazy=function(w){return{$$typeof:C,_payload:{_status:-1,_result:w},_init:Oe}},K.memo=function(w,E){return{$$typeof:b,type:w,compare:E===void 0?null:E}},K.startTransition=function(w){var E=L.transition;L.transition={};try{w()}finally{L.transition=E}},K.unstable_act=R,K.useCallback=function(w,E){return ye.current.useCallback(w,E)},K.useContext=function(w){return ye.current.useContext(w)},K.useDebugValue=function(){},K.useDeferredValue=function(w){return ye.current.useDeferredValue(w)},K.useEffect=function(w,E){return ye.current.useEffect(w,E)},K.useId=function(){return ye.current.useId()},K.useImperativeHandle=function(w,E,Q){return ye.current.useImperativeHandle(w,E,Q)},K.useInsertionEffect=function(w,E){return ye.current.useInsertionEffect(w,E)},K.useLayoutEffect=function(w,E){return ye.current.useLayoutEffect(w,E)},K.useMemo=function(w,E){return ye.current.useMemo(w,E)},K.useReducer=function(w,E,Q){return ye.current.useReducer(w,E,Q)},K.useRef=function(w){return ye.current.useRef(w)},K.useState=function(w){return ye.current.useState(w)},K.useSyncExternalStore=function(w,E,Q){return ye.current.useSyncExternalStore(w,E,Q)},K.useTransition=function(){return ye.current.useTransition()},K.version="18.3.1",K}var Nd;function Ns(){return Nd||(Nd=1,os.exports=Ip()),os.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function zp(){if(kd)return Fi;kd=1;var o=Ns(),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function f(x,v,b){var C,k={},B=null,$=null;b!==void 0&&(B=""+b),v.key!==void 0&&(B=""+v.key),v.ref!==void 0&&($=v.ref);for(C in v)u.call(v,C)&&!m.hasOwnProperty(C)&&(k[C]=v[C]);if(x&&x.defaultProps)for(C in v=x.defaultProps,v)k[C]===void 0&&(k[C]=v[C]);return{$$typeof:l,type:x,key:B,ref:$,props:k,_owner:p.current}}return Fi.Fragment=c,Fi.jsx=f,Fi.jsxs=f,Fi}var Ed;function Tp(){return Ed||(Ed=1,rs.exports=zp()),rs.exports}var t=Tp(),T=Ns();const Da=cr(T),qp=Up({__proto__:null,default:Da},[T]);var rr={},ss={exports:{}},$e={},ls={exports:{}},cs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Lp(){return Ud||(Ud=1,(function(o){function l(L,V){var R=L.length;L.push(V);e:for(;0<R;){var w=R-1>>>1,E=L[w];if(0<p(E,V))L[w]=V,L[R]=E,R=w;else break e}}function c(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var V=L[0],R=L.pop();if(R!==V){L[0]=R;e:for(var w=0,E=L.length,Q=E>>>1;w<Q;){var X=2*(w+1)-1,ee=L[X],ae=X+1,ce=L[ae];if(0>p(ee,R))ae<E&&0>p(ce,ee)?(L[w]=ce,L[ae]=R,w=ae):(L[w]=ee,L[X]=R,w=X);else if(ae<E&&0>p(ce,R))L[w]=ce,L[ae]=R,w=ae;else break e}}return V}function p(L,V){var R=L.sortIndex-V.sortIndex;return R!==0?R:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var f=Date,x=f.now();o.unstable_now=function(){return f.now()-x}}var v=[],b=[],C=1,k=null,B=3,$=!1,J=!1,_=!1,q=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(L){for(var V=c(b);V!==null;){if(V.callback===null)u(b);else if(V.startTime<=L)u(b),V.sortIndex=V.expirationTime,l(v,V);else break;V=c(b)}}function le(L){if(_=!1,ne(L),!J)if(c(v)!==null)J=!0,Oe(ke);else{var V=c(b);V!==null&&ye(le,V.startTime-L)}}function ke(L,V){J=!1,_&&(_=!1,ie(aa),aa=-1),$=!0;var R=B;try{for(ne(V),k=c(v);k!==null&&(!(k.expirationTime>V)||L&&!lt());){var w=k.callback;if(typeof w=="function"){k.callback=null,B=k.priorityLevel;var E=w(k.expirationTime<=V);V=o.unstable_now(),typeof E=="function"?k.callback=E:k===c(v)&&u(v),ne(V)}else u(v);k=c(v)}if(k!==null)var Q=!0;else{var X=c(b);X!==null&&ye(le,X.startTime-V),Q=!1}return Q}finally{k=null,B=R,$=!1}}var Be=!1,Fe=null,aa=-1,Pa=5,Ca=-1;function lt(){return!(o.unstable_now()-Ca<Pa)}function va(){if(Fe!==null){var L=o.unstable_now();Ca=L;var V=!0;try{V=Fe(!0,L)}finally{V?Je():(Be=!1,Fe=null)}}else Be=!1}var Je;if(typeof se=="function")Je=function(){se(va)};else if(typeof MessageChannel<"u"){var ca=new MessageChannel,xa=ca.port2;ca.port1.onmessage=va,Je=function(){xa.postMessage(null)}}else Je=function(){q(va,0)};function Oe(L){Fe=L,Be||(Be=!0,Je())}function ye(L,V){aa=q(function(){L(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_continueExecution=function(){J||$||(J=!0,Oe(ke))},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pa=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return B},o.unstable_getFirstCallbackNode=function(){return c(v)},o.unstable_next=function(L){switch(B){case 1:case 2:case 3:var V=3;break;default:V=B}var R=B;B=V;try{return L()}finally{B=R}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=B;B=L;try{return V()}finally{B=R}},o.unstable_scheduleCallback=function(L,V,R){var w=o.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?w+R:w):R=w,L){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=R+E,L={id:C++,callback:V,priorityLevel:L,startTime:R,expirationTime:E,sortIndex:-1},R>w?(L.sortIndex=R,l(b,L),c(v)===null&&L===c(b)&&(_?(ie(aa),aa=-1):_=!0,ye(le,R-w))):(L.sortIndex=E,l(v,L),J||$||(J=!0,Oe(ke))),L},o.unstable_shouldYield=lt,o.unstable_wrapCallback=function(L){var V=B;return function(){var R=B;B=V;try{return L.apply(this,arguments)}finally{B=R}}}})(cs)),cs}var Id;function Dp(){return Id||(Id=1,ls.exports=Lp()),ls.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function Pp(){if(zd)return $e;zd=1;var o=Ns(),l=Dp();function c(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,p={};function m(e,a){f(e,a),f(e+"Capture",a)}function f(e,a){for(p[e]=a,e=0;e<a.length;e++)u.add(a[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},k={};function B(e){return v.call(k,e)?!0:v.call(C,e)?!1:b.test(e)?k[e]=!0:(C[e]=!0,!1)}function $(e,a,i,n){if(i!==null&&i.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J(e,a,i,n){if(a===null||typeof a>"u"||$(e,a,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function _(e,a,i,n,r,s,d){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=i,this.propertyName=e,this.type=a,this.sanitizeURL=s,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];q[a]=new _(a,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(ie,se);q[a]=new _(a,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(ie,se);q[a]=new _(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(ie,se);q[a]=new _(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,a,i,n){var r=q.hasOwnProperty(a)?q[a]:null;(r!==null?r.type!==0:n||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(J(a,i,r,n)&&(i=null),n||r===null?B(a)&&(i===null?e.removeAttribute(a):e.setAttribute(a,""+i)):r.mustUseProperty?e[r.propertyName]=i===null?r.type===3?!1:"":i:(a=r.attributeName,n=r.attributeNamespace,i===null?e.removeAttribute(a):(r=r.type,i=r===3||r===4&&i===!0?"":""+i,n?e.setAttributeNS(n,a,i):e.setAttribute(a,i))))}var le=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Be=Symbol.for("react.portal"),Fe=Symbol.for("react.fragment"),aa=Symbol.for("react.strict_mode"),Pa=Symbol.for("react.profiler"),Ca=Symbol.for("react.provider"),lt=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),ca=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),L=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,w;function E(e){if(w===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);w=a&&a[1]||""}return`
`+w+e}var Q=!1;function X(e,a){if(!e||Q)return"";Q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(A){var n=A}Reflect.construct(e,[],a)}else{try{a.call()}catch(A){n=A}e.call(a.prototype)}else{try{throw Error()}catch(A){n=A}e()}}catch(A){if(A&&n&&typeof A.stack=="string"){for(var r=A.stack.split(`
`),s=n.stack.split(`
`),d=r.length-1,h=s.length-1;1<=d&&0<=h&&r[d]!==s[h];)h--;for(;1<=d&&0<=h;d--,h--)if(r[d]!==s[h]){if(d!==1||h!==1)do if(d--,h--,0>h||r[d]!==s[h]){var g=`
`+r[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=h);break}}}finally{Q=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?E(e):""}function ee(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fe:return"Fragment";case Be:return"Portal";case Pa:return"Profiler";case aa:return"StrictMode";case Je:return"Suspense";case ca:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lt:return(e.displayName||"Context")+".Consumer";case Ca:return(e._context.displayName||"Context")+".Provider";case va:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return a=e.displayName||null,a!==null?a:ae(e.type)||"Memo";case Oe:a=e._payload,e=e._init;try{return ae(e(a))}catch{}}return null}function ce(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(a);case 8:return a===aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Qe(e){var a=pe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),n=""+e[a];if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Yi(e){e._valueTracker||(e._valueTracker=Qe(e))}function zs(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var i=a.getValue(),n="";return e&&(n=pe(e)?e.checked?"true":"false":e.value),e=n,e!==i?(a.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ur(e,a){var i=a.checked;return R({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ts(e,a){var i=a.defaultValue==null?"":a.defaultValue,n=a.checked!=null?a.checked:a.defaultChecked;i=re(a.value!=null?a.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function qs(e,a){a=a.checked,a!=null&&ne(e,"checked",a,!1)}function mr(e,a){qs(e,a);var i=re(a.value),n=a.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?pr(e,a.type,i):a.hasOwnProperty("defaultValue")&&pr(e,a.type,re(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function Ls(e,a,i){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var n=a.type;if(!(n!=="submit"&&n!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,i||a===e.value||(e.value=a),e.defaultValue=a}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function pr(e,a,i){(a!=="number"||Ji(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var ai=Array.isArray;function At(e,a,i,n){if(e=e.options,a){a={};for(var r=0;r<i.length;r++)a["$"+i[r]]=!0;for(i=0;i<e.length;i++)r=a.hasOwnProperty("$"+e[i].value),e[i].selected!==r&&(e[i].selected=r),r&&n&&(e[i].defaultSelected=!0)}else{for(i=""+re(i),a=null,r=0;r<e.length;r++){if(e[r].value===i){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}a!==null||e[r].disabled||(a=e[r])}a!==null&&(a.selected=!0)}}function hr(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(c(91));return R({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ds(e,a){var i=a.value;if(i==null){if(i=a.children,a=a.defaultValue,i!=null){if(a!=null)throw Error(c(92));if(ai(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),i=a}e._wrapperState={initialValue:re(i)}}function Ps(e,a){var i=re(a.value),n=re(a.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),a.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function Bs(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Rs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fr(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Rs(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,Ms=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,i,n,r){MSApp.execUnsafeLocalFunction(function(){return e(a,i,n,r)})}:e})(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function ti(e,a){if(a){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=a;return}}e.textContent=a}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zu=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){zu.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),ii[a]=ii[e]})});function Fs(e,a,i){return a==null||typeof a=="boolean"||a===""?"":i||typeof a!="number"||a===0||ii.hasOwnProperty(e)&&ii[e]?(""+a).trim():a+"px"}function Os(e,a){e=e.style;for(var i in a)if(a.hasOwnProperty(i)){var n=i.indexOf("--")===0,r=Fs(i,a[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,r):e[i]=r}}var Tu=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gr(e,a){if(a){if(Tu[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(c(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(c(61))}if(a.style!=null&&typeof a.style!="object")throw Error(c(62))}}function yr(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vr=null;function xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Ct=null,Nt=null;function _s(e){if(e=Ci(e)){if(typeof br!="function")throw Error(c(280));var a=e.stateNode;a&&(a=bn(a),br(e.stateNode,e.type,a))}}function Ws(e){Ct?Nt?Nt.push(e):Nt=[e]:Ct=e}function Hs(){if(Ct){var e=Ct,a=Nt;if(Nt=Ct=null,_s(e),a)for(e=0;e<a.length;e++)_s(a[e])}}function Vs(e,a){return e(a)}function Gs(){}var wr=!1;function $s(e,a,i){if(wr)return e(a,i);wr=!0;try{return Vs(e,a,i)}finally{wr=!1,(Ct!==null||Nt!==null)&&(Gs(),Hs())}}function ni(e,a){var i=e.stateNode;if(i===null)return null;var n=bn(i);if(n===null)return null;i=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(c(231,a,typeof i));return i}var jr=!1;if(x)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){jr=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{jr=!1}function qu(e,a,i,n,r,s,d,h,g){var A=Array.prototype.slice.call(arguments,3);try{a.apply(i,A)}catch(U){this.onError(U)}}var oi=!1,Ki=null,Xi=!1,Sr=null,Lu={onError:function(e){oi=!0,Ki=e}};function Du(e,a,i,n,r,s,d,h,g){oi=!1,Ki=null,qu.apply(Lu,arguments)}function Pu(e,a,i,n,r,s,d,h,g){if(Du.apply(this,arguments),oi){if(oi){var A=Ki;oi=!1,Ki=null}else throw Error(c(198));Xi||(Xi=!0,Sr=A)}}function ct(e){var a=e,i=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(i=a.return),e=a.return;while(e)}return a.tag===3?i:null}function Ys(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Js(e){if(ct(e)!==e)throw Error(c(188))}function Bu(e){var a=e.alternate;if(!a){if(a=ct(e),a===null)throw Error(c(188));return a!==e?null:e}for(var i=e,n=a;;){var r=i.return;if(r===null)break;var s=r.alternate;if(s===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===i)return Js(r),e;if(s===n)return Js(r),a;s=s.sibling}throw Error(c(188))}if(i.return!==n.return)i=r,n=s;else{for(var d=!1,h=r.child;h;){if(h===i){d=!0,i=r,n=s;break}if(h===n){d=!0,n=r,i=s;break}h=h.sibling}if(!d){for(h=s.child;h;){if(h===i){d=!0,i=s,n=r;break}if(h===n){d=!0,n=s,i=r;break}h=h.sibling}if(!d)throw Error(c(189))}}if(i.alternate!==n)throw Error(c(190))}if(i.tag!==3)throw Error(c(188));return i.stateNode.current===i?e:a}function Qs(e){return e=Bu(e),e!==null?Ks(e):null}function Ks(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=Ks(e);if(a!==null)return a;e=e.sibling}return null}var Xs=l.unstable_scheduleCallback,Zs=l.unstable_cancelCallback,Ru=l.unstable_shouldYield,Mu=l.unstable_requestPaint,be=l.unstable_now,Fu=l.unstable_getCurrentPriorityLevel,Ar=l.unstable_ImmediatePriority,el=l.unstable_UserBlockingPriority,Zi=l.unstable_NormalPriority,Ou=l.unstable_LowPriority,al=l.unstable_IdlePriority,en=null,ba=null;function _u(e){if(ba&&typeof ba.onCommitFiberRoot=="function")try{ba.onCommitFiberRoot(en,e,void 0,(e.current.flags&128)===128)}catch{}}var da=Math.clz32?Math.clz32:Vu,Wu=Math.log,Hu=Math.LN2;function Vu(e){return e>>>=0,e===0?32:31-(Wu(e)/Hu|0)|0}var an=64,tn=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nn(e,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,r=e.suspendedLanes,s=e.pingedLanes,d=i&268435455;if(d!==0){var h=d&~r;h!==0?n=si(h):(s&=d,s!==0&&(n=si(s)))}else d=i&~r,d!==0?n=si(d):s!==0&&(n=si(s));if(n===0)return 0;if(a!==0&&a!==n&&(a&r)===0&&(r=n&-n,s=a&-a,r>=s||r===16&&(s&4194240)!==0))return a;if((n&4)!==0&&(n|=i&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=n;0<a;)i=31-da(a),r=1<<i,n|=e[i],a&=~r;return n}function Gu(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $u(e,a){for(var i=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-da(s),h=1<<d,g=r[d];g===-1?((h&i)===0||(h&n)!==0)&&(r[d]=Gu(h,a)):g<=a&&(e.expiredLanes|=h),s&=~h}}function Cr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tl(){var e=an;return an<<=1,(an&4194240)===0&&(an=64),e}function Nr(e){for(var a=[],i=0;31>i;i++)a.push(e);return a}function li(e,a,i){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-da(a),e[a]=i}function Yu(e,a){var i=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var r=31-da(i),s=1<<r;a[r]=0,n[r]=-1,e[r]=-1,i&=~s}}function kr(e,a){var i=e.entangledLanes|=a;for(e=e.entanglements;i;){var n=31-da(i),r=1<<n;r&a|e[n]&a&&(e[n]|=a),i&=~r}}var oe=0;function il(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nl,Er,rl,ol,sl,Ur=!1,rn=[],Ba=null,Ra=null,Ma=null,ci=new Map,di=new Map,Fa=[],Ju="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ll(e,a){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":ci.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(a.pointerId)}}function ui(e,a,i,n,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[r]},a!==null&&(a=Ci(a),a!==null&&Er(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),e)}function Qu(e,a,i,n,r){switch(a){case"focusin":return Ba=ui(Ba,e,a,i,n,r),!0;case"dragenter":return Ra=ui(Ra,e,a,i,n,r),!0;case"mouseover":return Ma=ui(Ma,e,a,i,n,r),!0;case"pointerover":var s=r.pointerId;return ci.set(s,ui(ci.get(s)||null,e,a,i,n,r)),!0;case"gotpointercapture":return s=r.pointerId,di.set(s,ui(di.get(s)||null,e,a,i,n,r)),!0}return!1}function cl(e){var a=dt(e.target);if(a!==null){var i=ct(a);if(i!==null){if(a=i.tag,a===13){if(a=Ys(i),a!==null){e.blockedOn=a,sl(e.priority,function(){rl(i)});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function on(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var i=zr(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);vr=n,i.target.dispatchEvent(n),vr=null}else return a=Ci(i),a!==null&&Er(a),e.blockedOn=i,!1;a.shift()}return!0}function dl(e,a,i){on(e)&&i.delete(a)}function Ku(){Ur=!1,Ba!==null&&on(Ba)&&(Ba=null),Ra!==null&&on(Ra)&&(Ra=null),Ma!==null&&on(Ma)&&(Ma=null),ci.forEach(dl),di.forEach(dl)}function mi(e,a){e.blockedOn===a&&(e.blockedOn=null,Ur||(Ur=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ku)))}function pi(e){function a(r){return mi(r,e)}if(0<rn.length){mi(rn[0],e);for(var i=1;i<rn.length;i++){var n=rn[i];n.blockedOn===e&&(n.blockedOn=null)}}for(Ba!==null&&mi(Ba,e),Ra!==null&&mi(Ra,e),Ma!==null&&mi(Ma,e),ci.forEach(a),di.forEach(a),i=0;i<Fa.length;i++)n=Fa[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<Fa.length&&(i=Fa[0],i.blockedOn===null);)cl(i),i.blockedOn===null&&Fa.shift()}var kt=le.ReactCurrentBatchConfig,sn=!0;function Xu(e,a,i,n){var r=oe,s=kt.transition;kt.transition=null;try{oe=1,Ir(e,a,i,n)}finally{oe=r,kt.transition=s}}function Zu(e,a,i,n){var r=oe,s=kt.transition;kt.transition=null;try{oe=4,Ir(e,a,i,n)}finally{oe=r,kt.transition=s}}function Ir(e,a,i,n){if(sn){var r=zr(e,a,i,n);if(r===null)Yr(e,a,n,ln,i),ll(e,n);else if(Qu(r,e,a,i,n))n.stopPropagation();else if(ll(e,n),a&4&&-1<Ju.indexOf(e)){for(;r!==null;){var s=Ci(r);if(s!==null&&nl(s),s=zr(e,a,i,n),s===null&&Yr(e,a,n,ln,i),s===r)break;r=s}r!==null&&n.stopPropagation()}else Yr(e,a,n,null,i)}}var ln=null;function zr(e,a,i,n){if(ln=null,e=xr(n),e=dt(e),e!==null)if(a=ct(e),a===null)e=null;else if(i=a.tag,i===13){if(e=Ys(a),e!==null)return e;e=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return ln=e,null}function ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fu()){case Ar:return 1;case el:return 4;case Zi:case Ou:return 16;case al:return 536870912;default:return 16}default:return 16}}var Oa=null,Tr=null,cn=null;function ml(){if(cn)return cn;var e,a=Tr,i=a.length,n,r="value"in Oa?Oa.value:Oa.textContent,s=r.length;for(e=0;e<i&&a[e]===r[e];e++);var d=i-e;for(n=1;n<=d&&a[i-n]===r[s-n];n++);return cn=r.slice(e,1<n?1-n:void 0)}function dn(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function un(){return!0}function pl(){return!1}function Ke(e){function a(i,n,r,s,d){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(i=e[h],this[h]=i?i(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?un:pl,this.isPropagationStopped=pl,this}return R(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=un)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=un)},persist:function(){},isPersistent:un}),a}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qr=Ke(Et),hi=R({},Et,{view:0,detail:0}),em=Ke(hi),Lr,Dr,fi,mn=R({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Br,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(Lr=e.screenX-fi.screenX,Dr=e.screenY-fi.screenY):Dr=Lr=0,fi=e),Lr)},movementY:function(e){return"movementY"in e?e.movementY:Dr}}),hl=Ke(mn),am=R({},mn,{dataTransfer:0}),tm=Ke(am),im=R({},hi,{relatedTarget:0}),Pr=Ke(im),nm=R({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),rm=Ke(nm),om=R({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Ke(om),lm=R({},Et,{data:0}),fl=Ke(lm),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=um[e])?!!a[e]:!1}function Br(){return mm}var pm=R({},hi,{key:function(e){if(e.key){var a=cm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=dn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Br,charCode:function(e){return e.type==="keypress"?dn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hm=Ke(pm),fm=R({},mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gl=Ke(fm),gm=R({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Br}),ym=Ke(gm),vm=R({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),xm=Ke(vm),bm=R({},mn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wm=Ke(bm),jm=[9,13,27,32],Rr=x&&"CompositionEvent"in window,gi=null;x&&"documentMode"in document&&(gi=document.documentMode);var Sm=x&&"TextEvent"in window&&!gi,yl=x&&(!Rr||gi&&8<gi&&11>=gi),vl=" ",xl=!1;function bl(e,a){switch(e){case"keyup":return jm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Am(e,a){switch(e){case"compositionend":return wl(a);case"keypress":return a.which!==32?null:(xl=!0,vl);case"textInput":return e=a.data,e===vl&&xl?null:e;default:return null}}function Cm(e,a){if(Ut)return e==="compositionend"||!Rr&&bl(e,a)?(e=ml(),cn=Tr=Oa=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return yl&&a.locale!=="ko"?null:a.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jl(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Nm[e.type]:a==="textarea"}function Sl(e,a,i,n){Ws(n),a=yn(a,"onChange"),0<a.length&&(i=new qr("onChange","change",null,i,n),e.push({event:i,listeners:a}))}var yi=null,vi=null;function km(e){Ol(e,0)}function pn(e){var a=Lt(e);if(zs(a))return e}function Em(e,a){if(e==="change")return a}var Al=!1;if(x){var Mr;if(x){var Fr="oninput"in document;if(!Fr){var Cl=document.createElement("div");Cl.setAttribute("oninput","return;"),Fr=typeof Cl.oninput=="function"}Mr=Fr}else Mr=!1;Al=Mr&&(!document.documentMode||9<document.documentMode)}function Nl(){yi&&(yi.detachEvent("onpropertychange",kl),vi=yi=null)}function kl(e){if(e.propertyName==="value"&&pn(vi)){var a=[];Sl(a,vi,e,xr(e)),$s(km,a)}}function Um(e,a,i){e==="focusin"?(Nl(),yi=a,vi=i,yi.attachEvent("onpropertychange",kl)):e==="focusout"&&Nl()}function Im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pn(vi)}function zm(e,a){if(e==="click")return pn(a)}function Tm(e,a){if(e==="input"||e==="change")return pn(a)}function qm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ua=typeof Object.is=="function"?Object.is:qm;function xi(e,a){if(ua(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var i=Object.keys(e),n=Object.keys(a);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!v.call(a,r)||!ua(e[r],a[r]))return!1}return!0}function El(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ul(e,a){var i=El(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=a&&n>=a)return{node:i,offset:a-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=El(i)}}function Il(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Il(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function zl(){for(var e=window,a=Ji();a instanceof e.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)e=a.contentWindow;else break;a=Ji(e.document)}return a}function Or(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function Lm(e){var a=zl(),i=e.focusedElem,n=e.selectionRange;if(a!==i&&i&&i.ownerDocument&&Il(i.ownerDocument.documentElement,i)){if(n!==null&&Or(i)){if(a=n.start,e=n.end,e===void 0&&(e=a),"selectionStart"in i)i.selectionStart=a,i.selectionEnd=Math.min(e,i.value.length);else if(e=(a=i.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var r=i.textContent.length,s=Math.min(n.start,r);n=n.end===void 0?s:Math.min(n.end,r),!e.extend&&s>n&&(r=n,n=s,s=r),r=Ul(i,s);var d=Ul(i,n);r&&d&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(a=a.createRange(),a.setStart(r.node,r.offset),e.removeAllRanges(),s>n?(e.addRange(a),e.extend(d.node,d.offset)):(a.setEnd(d.node,d.offset),e.addRange(a)))}}for(a=[],e=i;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<a.length;i++)e=a[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dm=x&&"documentMode"in document&&11>=document.documentMode,It=null,_r=null,bi=null,Wr=!1;function Tl(e,a,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Wr||It==null||It!==Ji(n)||(n=It,"selectionStart"in n&&Or(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bi&&xi(bi,n)||(bi=n,n=yn(_r,"onSelect"),0<n.length&&(a=new qr("onSelect","select",null,a,i),e.push({event:a,listeners:n}),a.target=It)))}function hn(e,a){var i={};return i[e.toLowerCase()]=a.toLowerCase(),i["Webkit"+e]="webkit"+a,i["Moz"+e]="moz"+a,i}var zt={animationend:hn("Animation","AnimationEnd"),animationiteration:hn("Animation","AnimationIteration"),animationstart:hn("Animation","AnimationStart"),transitionend:hn("Transition","TransitionEnd")},Hr={},ql={};x&&(ql=document.createElement("div").style,"AnimationEvent"in window||(delete zt.animationend.animation,delete zt.animationiteration.animation,delete zt.animationstart.animation),"TransitionEvent"in window||delete zt.transitionend.transition);function fn(e){if(Hr[e])return Hr[e];if(!zt[e])return e;var a=zt[e],i;for(i in a)if(a.hasOwnProperty(i)&&i in ql)return Hr[e]=a[i];return e}var Ll=fn("animationend"),Dl=fn("animationiteration"),Pl=fn("animationstart"),Bl=fn("transitionend"),Rl=new Map,Ml="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _a(e,a){Rl.set(e,a),m(a,[e])}for(var Vr=0;Vr<Ml.length;Vr++){var Gr=Ml[Vr],Pm=Gr.toLowerCase(),Bm=Gr[0].toUpperCase()+Gr.slice(1);_a(Pm,"on"+Bm)}_a(Ll,"onAnimationEnd"),_a(Dl,"onAnimationIteration"),_a(Pl,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(Bl,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Fl(e,a,i){var n=e.type||"unknown-event";e.currentTarget=i,Pu(n,a,void 0,e),e.currentTarget=null}function Ol(e,a){a=(a&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],r=n.event;n=n.listeners;e:{var s=void 0;if(a)for(var d=n.length-1;0<=d;d--){var h=n[d],g=h.instance,A=h.currentTarget;if(h=h.listener,g!==s&&r.isPropagationStopped())break e;Fl(r,h,A),s=g}else for(d=0;d<n.length;d++){if(h=n[d],g=h.instance,A=h.currentTarget,h=h.listener,g!==s&&r.isPropagationStopped())break e;Fl(r,h,A),s=g}}}if(Xi)throw e=Sr,Xi=!1,Sr=null,e}function ue(e,a){var i=a[eo];i===void 0&&(i=a[eo]=new Set);var n=e+"__bubble";i.has(n)||(_l(a,e,2,!1),i.add(n))}function $r(e,a,i){var n=0;a&&(n|=4),_l(i,e,n,a)}var gn="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[gn]){e[gn]=!0,u.forEach(function(i){i!=="selectionchange"&&(Rm.has(i)||$r(i,!1,e),$r(i,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[gn]||(a[gn]=!0,$r("selectionchange",!1,a))}}function _l(e,a,i,n){switch(ul(a)){case 1:var r=Xu;break;case 4:r=Zu;break;default:r=Ir}i=r.bind(null,a,i,e),r=void 0,!jr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(a,i,{capture:!0,passive:r}):e.addEventListener(a,i,!0):r!==void 0?e.addEventListener(a,i,{passive:r}):e.addEventListener(a,i,!1)}function Yr(e,a,i,n,r){var s=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var h=n.stateNode.containerInfo;if(h===r||h.nodeType===8&&h.parentNode===r)break;if(d===4)for(d=n.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===r||g.nodeType===8&&g.parentNode===r))return;d=d.return}for(;h!==null;){if(d=dt(h),d===null)return;if(g=d.tag,g===5||g===6){n=s=d;continue e}h=h.parentNode}}n=n.return}$s(function(){var A=s,U=xr(i),I=[];e:{var N=Rl.get(e);if(N!==void 0){var D=qr,M=e;switch(e){case"keypress":if(dn(i)===0)break e;case"keydown":case"keyup":D=hm;break;case"focusin":M="focus",D=Pr;break;case"focusout":M="blur",D=Pr;break;case"beforeblur":case"afterblur":D=Pr;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=hl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=ym;break;case Ll:case Dl:case Pl:D=rm;break;case Bl:D=xm;break;case"scroll":D=em;break;case"wheel":D=wm;break;case"copy":case"cut":case"paste":D=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=gl}var F=(a&4)!==0,we=!F&&e==="scroll",j=F?N!==null?N+"Capture":null:N;F=[];for(var y=A,S;y!==null;){S=y;var z=S.stateNode;if(S.tag===5&&z!==null&&(S=z,j!==null&&(z=ni(y,j),z!=null&&F.push(Si(y,z,S)))),we)break;y=y.return}0<F.length&&(N=new D(N,M,null,i,U),I.push({event:N,listeners:F}))}}if((a&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",N&&i!==vr&&(M=i.relatedTarget||i.fromElement)&&(dt(M)||M[Na]))break e;if((D||N)&&(N=U.window===U?U:(N=U.ownerDocument)?N.defaultView||N.parentWindow:window,D?(M=i.relatedTarget||i.toElement,D=A,M=M?dt(M):null,M!==null&&(we=ct(M),M!==we||M.tag!==5&&M.tag!==6)&&(M=null)):(D=null,M=A),D!==M)){if(F=hl,z="onMouseLeave",j="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(F=gl,z="onPointerLeave",j="onPointerEnter",y="pointer"),we=D==null?N:Lt(D),S=M==null?N:Lt(M),N=new F(z,y+"leave",D,i,U),N.target=we,N.relatedTarget=S,z=null,dt(U)===A&&(F=new F(j,y+"enter",M,i,U),F.target=S,F.relatedTarget=we,z=F),we=z,D&&M)a:{for(F=D,j=M,y=0,S=F;S;S=Tt(S))y++;for(S=0,z=j;z;z=Tt(z))S++;for(;0<y-S;)F=Tt(F),y--;for(;0<S-y;)j=Tt(j),S--;for(;y--;){if(F===j||j!==null&&F===j.alternate)break a;F=Tt(F),j=Tt(j)}F=null}else F=null;D!==null&&Wl(I,N,D,F,!1),M!==null&&we!==null&&Wl(I,we,M,F,!0)}}e:{if(N=A?Lt(A):window,D=N.nodeName&&N.nodeName.toLowerCase(),D==="select"||D==="input"&&N.type==="file")var O=Em;else if(jl(N))if(Al)O=Tm;else{O=Im;var W=Um}else(D=N.nodeName)&&D.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(O=zm);if(O&&(O=O(e,A))){Sl(I,O,i,U);break e}W&&W(e,N,A),e==="focusout"&&(W=N._wrapperState)&&W.controlled&&N.type==="number"&&pr(N,"number",N.value)}switch(W=A?Lt(A):window,e){case"focusin":(jl(W)||W.contentEditable==="true")&&(It=W,_r=A,bi=null);break;case"focusout":bi=_r=It=null;break;case"mousedown":Wr=!0;break;case"contextmenu":case"mouseup":case"dragend":Wr=!1,Tl(I,i,U);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":Tl(I,i,U)}var H;if(Rr)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Ut?bl(e,i)&&(G="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(G="onCompositionStart");G&&(yl&&i.locale!=="ko"&&(Ut||G!=="onCompositionStart"?G==="onCompositionEnd"&&Ut&&(H=ml()):(Oa=U,Tr="value"in Oa?Oa.value:Oa.textContent,Ut=!0)),W=yn(A,G),0<W.length&&(G=new fl(G,e,null,i,U),I.push({event:G,listeners:W}),H?G.data=H:(H=wl(i),H!==null&&(G.data=H)))),(H=Sm?Am(e,i):Cm(e,i))&&(A=yn(A,"onBeforeInput"),0<A.length&&(U=new fl("onBeforeInput","beforeinput",null,i,U),I.push({event:U,listeners:A}),U.data=H))}Ol(I,a)})}function Si(e,a,i){return{instance:e,listener:a,currentTarget:i}}function yn(e,a){for(var i=a+"Capture",n=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ni(e,i),s!=null&&n.unshift(Si(e,s,r)),s=ni(e,a),s!=null&&n.push(Si(e,s,r))),e=e.return}return n}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wl(e,a,i,n,r){for(var s=a._reactName,d=[];i!==null&&i!==n;){var h=i,g=h.alternate,A=h.stateNode;if(g!==null&&g===n)break;h.tag===5&&A!==null&&(h=A,r?(g=ni(i,s),g!=null&&d.unshift(Si(i,g,h))):r||(g=ni(i,s),g!=null&&d.push(Si(i,g,h)))),i=i.return}d.length!==0&&e.push({event:a,listeners:d})}var Mm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function Hl(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(Fm,"")}function vn(e,a,i){if(a=Hl(a),Hl(e)!==a&&i)throw Error(c(425))}function xn(){}var Jr=null,Qr=null;function Kr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Xr=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,Vl=typeof Promise=="function"?Promise:void 0,_m=typeof queueMicrotask=="function"?queueMicrotask:typeof Vl<"u"?function(e){return Vl.resolve(null).then(e).catch(Wm)}:Xr;function Wm(e){setTimeout(function(){throw e})}function Zr(e,a){var i=a,n=0;do{var r=i.nextSibling;if(e.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(n===0){e.removeChild(r),pi(a);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=r}while(i);pi(a)}function Wa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function Gl(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(a===0)return e;a--}else i==="/$"&&a++}e=e.previousSibling}return null}var qt=Math.random().toString(36).slice(2),wa="__reactFiber$"+qt,Ai="__reactProps$"+qt,Na="__reactContainer$"+qt,eo="__reactEvents$"+qt,Hm="__reactListeners$"+qt,Vm="__reactHandles$"+qt;function dt(e){var a=e[wa];if(a)return a;for(var i=e.parentNode;i;){if(a=i[Na]||i[wa]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(e=Gl(e);e!==null;){if(i=e[wa])return i;e=Gl(e)}return a}e=i,i=e.parentNode}return null}function Ci(e){return e=e[wa]||e[Na],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function bn(e){return e[Ai]||null}var ao=[],Dt=-1;function Ha(e){return{current:e}}function me(e){0>Dt||(e.current=ao[Dt],ao[Dt]=null,Dt--)}function de(e,a){Dt++,ao[Dt]=e.current,e.current=a}var Va={},qe=Ha(Va),_e=Ha(!1),ut=Va;function Pt(e,a){var i=e.type.contextTypes;if(!i)return Va;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===a)return n.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in i)r[s]=a[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),r}function We(e){return e=e.childContextTypes,e!=null}function wn(){me(_e),me(qe)}function $l(e,a,i){if(qe.current!==Va)throw Error(c(168));de(qe,a),de(_e,i)}function Yl(e,a,i){var n=e.stateNode;if(a=a.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var r in n)if(!(r in a))throw Error(c(108,ce(e)||"Unknown",r));return R({},i,n)}function jn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Va,ut=qe.current,de(qe,e),de(_e,_e.current),!0}function Jl(e,a,i){var n=e.stateNode;if(!n)throw Error(c(169));i?(e=Yl(e,a,ut),n.__reactInternalMemoizedMergedChildContext=e,me(_e),me(qe),de(qe,e)):me(_e),de(_e,i)}var ka=null,Sn=!1,to=!1;function Ql(e){ka===null?ka=[e]:ka.push(e)}function Gm(e){Sn=!0,Ql(e)}function Ga(){if(!to&&ka!==null){to=!0;var e=0,a=oe;try{var i=ka;for(oe=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}ka=null,Sn=!1}catch(r){throw ka!==null&&(ka=ka.slice(e+1)),Xs(Ar,Ga),r}finally{oe=a,to=!1}}return null}var Bt=[],Rt=0,An=null,Cn=0,ta=[],ia=0,mt=null,Ea=1,Ua="";function pt(e,a){Bt[Rt++]=Cn,Bt[Rt++]=An,An=e,Cn=a}function Kl(e,a,i){ta[ia++]=Ea,ta[ia++]=Ua,ta[ia++]=mt,mt=e;var n=Ea;e=Ua;var r=32-da(n)-1;n&=~(1<<r),i+=1;var s=32-da(a)+r;if(30<s){var d=r-r%5;s=(n&(1<<d)-1).toString(32),n>>=d,r-=d,Ea=1<<32-da(a)+r|i<<r|n,Ua=s+e}else Ea=1<<s|i<<r|n,Ua=e}function io(e){e.return!==null&&(pt(e,1),Kl(e,1,0))}function no(e){for(;e===An;)An=Bt[--Rt],Bt[Rt]=null,Cn=Bt[--Rt],Bt[Rt]=null;for(;e===mt;)mt=ta[--ia],ta[ia]=null,Ua=ta[--ia],ta[ia]=null,Ea=ta[--ia],ta[ia]=null}var Xe=null,Ze=null,he=!1,ma=null;function Xl(e,a){var i=sa(5,null,null,0);i.elementType="DELETED",i.stateNode=a,i.return=e,a=e.deletions,a===null?(e.deletions=[i],e.flags|=16):a.push(i)}function Zl(e,a){switch(e.tag){case 5:var i=e.type;return a=a.nodeType!==1||i.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,Xe=e,Ze=Wa(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,Xe=e,Ze=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(i=mt!==null?{id:Ea,overflow:Ua}:null,e.memoizedState={dehydrated:a,treeContext:i,retryLane:1073741824},i=sa(18,null,null,0),i.stateNode=a,i.return=e,e.child=i,Xe=e,Ze=null,!0):!1;default:return!1}}function ro(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oo(e){if(he){var a=Ze;if(a){var i=a;if(!Zl(e,a)){if(ro(e))throw Error(c(418));a=Wa(i.nextSibling);var n=Xe;a&&Zl(e,a)?Xl(n,i):(e.flags=e.flags&-4097|2,he=!1,Xe=e)}}else{if(ro(e))throw Error(c(418));e.flags=e.flags&-4097|2,he=!1,Xe=e}}}function ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Nn(e){if(e!==Xe)return!1;if(!he)return ec(e),he=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!Kr(e.type,e.memoizedProps)),a&&(a=Ze)){if(ro(e))throw ac(),Error(c(418));for(;a;)Xl(e,a),a=Wa(a.nextSibling)}if(ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(a===0){Ze=Wa(e.nextSibling);break e}a--}else i!=="$"&&i!=="$!"&&i!=="$?"||a++}e=e.nextSibling}Ze=null}}else Ze=Xe?Wa(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=Ze;e;)e=Wa(e.nextSibling)}function Mt(){Ze=Xe=null,he=!1}function so(e){ma===null?ma=[e]:ma.push(e)}var $m=le.ReactCurrentBatchConfig;function Ni(e,a,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(c(309));var n=i.stateNode}if(!n)throw Error(c(147,e));var r=n,s=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===s?a.ref:(a=function(d){var h=r.refs;d===null?delete h[s]:h[s]=d},a._stringRef=s,a)}if(typeof e!="string")throw Error(c(284));if(!i._owner)throw Error(c(290,e))}return e}function kn(e,a){throw e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function tc(e){var a=e._init;return a(e._payload)}function ic(e){function a(j,y){if(e){var S=j.deletions;S===null?(j.deletions=[y],j.flags|=16):S.push(y)}}function i(j,y){if(!e)return null;for(;y!==null;)a(j,y),y=y.sibling;return null}function n(j,y){for(j=new Map;y!==null;)y.key!==null?j.set(y.key,y):j.set(y.index,y),y=y.sibling;return j}function r(j,y){return j=et(j,y),j.index=0,j.sibling=null,j}function s(j,y,S){return j.index=S,e?(S=j.alternate,S!==null?(S=S.index,S<y?(j.flags|=2,y):S):(j.flags|=2,y)):(j.flags|=1048576,y)}function d(j){return e&&j.alternate===null&&(j.flags|=2),j}function h(j,y,S,z){return y===null||y.tag!==6?(y=Zo(S,j.mode,z),y.return=j,y):(y=r(y,S),y.return=j,y)}function g(j,y,S,z){var O=S.type;return O===Fe?U(j,y,S.props.children,z,S.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Oe&&tc(O)===y.type)?(z=r(y,S.props),z.ref=Ni(j,y,S),z.return=j,z):(z=Kn(S.type,S.key,S.props,null,j.mode,z),z.ref=Ni(j,y,S),z.return=j,z)}function A(j,y,S,z){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=es(S,j.mode,z),y.return=j,y):(y=r(y,S.children||[]),y.return=j,y)}function U(j,y,S,z,O){return y===null||y.tag!==7?(y=wt(S,j.mode,z,O),y.return=j,y):(y=r(y,S),y.return=j,y)}function I(j,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Zo(""+y,j.mode,S),y.return=j,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ke:return S=Kn(y.type,y.key,y.props,null,j.mode,S),S.ref=Ni(j,null,y),S.return=j,S;case Be:return y=es(y,j.mode,S),y.return=j,y;case Oe:var z=y._init;return I(j,z(y._payload),S)}if(ai(y)||V(y))return y=wt(y,j.mode,S,null),y.return=j,y;kn(j,y)}return null}function N(j,y,S,z){var O=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:h(j,y,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ke:return S.key===O?g(j,y,S,z):null;case Be:return S.key===O?A(j,y,S,z):null;case Oe:return O=S._init,N(j,y,O(S._payload),z)}if(ai(S)||V(S))return O!==null?null:U(j,y,S,z,null);kn(j,S)}return null}function D(j,y,S,z,O){if(typeof z=="string"&&z!==""||typeof z=="number")return j=j.get(S)||null,h(y,j,""+z,O);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ke:return j=j.get(z.key===null?S:z.key)||null,g(y,j,z,O);case Be:return j=j.get(z.key===null?S:z.key)||null,A(y,j,z,O);case Oe:var W=z._init;return D(j,y,S,W(z._payload),O)}if(ai(z)||V(z))return j=j.get(S)||null,U(y,j,z,O,null);kn(y,z)}return null}function M(j,y,S,z){for(var O=null,W=null,H=y,G=y=0,Ie=null;H!==null&&G<S.length;G++){H.index>G?(Ie=H,H=null):Ie=H.sibling;var te=N(j,H,S[G],z);if(te===null){H===null&&(H=Ie);break}e&&H&&te.alternate===null&&a(j,H),y=s(te,y,G),W===null?O=te:W.sibling=te,W=te,H=Ie}if(G===S.length)return i(j,H),he&&pt(j,G),O;if(H===null){for(;G<S.length;G++)H=I(j,S[G],z),H!==null&&(y=s(H,y,G),W===null?O=H:W.sibling=H,W=H);return he&&pt(j,G),O}for(H=n(j,H);G<S.length;G++)Ie=D(H,j,G,S[G],z),Ie!==null&&(e&&Ie.alternate!==null&&H.delete(Ie.key===null?G:Ie.key),y=s(Ie,y,G),W===null?O=Ie:W.sibling=Ie,W=Ie);return e&&H.forEach(function(at){return a(j,at)}),he&&pt(j,G),O}function F(j,y,S,z){var O=V(S);if(typeof O!="function")throw Error(c(150));if(S=O.call(S),S==null)throw Error(c(151));for(var W=O=null,H=y,G=y=0,Ie=null,te=S.next();H!==null&&!te.done;G++,te=S.next()){H.index>G?(Ie=H,H=null):Ie=H.sibling;var at=N(j,H,te.value,z);if(at===null){H===null&&(H=Ie);break}e&&H&&at.alternate===null&&a(j,H),y=s(at,y,G),W===null?O=at:W.sibling=at,W=at,H=Ie}if(te.done)return i(j,H),he&&pt(j,G),O;if(H===null){for(;!te.done;G++,te=S.next())te=I(j,te.value,z),te!==null&&(y=s(te,y,G),W===null?O=te:W.sibling=te,W=te);return he&&pt(j,G),O}for(H=n(j,H);!te.done;G++,te=S.next())te=D(H,j,G,te.value,z),te!==null&&(e&&te.alternate!==null&&H.delete(te.key===null?G:te.key),y=s(te,y,G),W===null?O=te:W.sibling=te,W=te);return e&&H.forEach(function(Np){return a(j,Np)}),he&&pt(j,G),O}function we(j,y,S,z){if(typeof S=="object"&&S!==null&&S.type===Fe&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ke:e:{for(var O=S.key,W=y;W!==null;){if(W.key===O){if(O=S.type,O===Fe){if(W.tag===7){i(j,W.sibling),y=r(W,S.props.children),y.return=j,j=y;break e}}else if(W.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Oe&&tc(O)===W.type){i(j,W.sibling),y=r(W,S.props),y.ref=Ni(j,W,S),y.return=j,j=y;break e}i(j,W);break}else a(j,W);W=W.sibling}S.type===Fe?(y=wt(S.props.children,j.mode,z,S.key),y.return=j,j=y):(z=Kn(S.type,S.key,S.props,null,j.mode,z),z.ref=Ni(j,y,S),z.return=j,j=z)}return d(j);case Be:e:{for(W=S.key;y!==null;){if(y.key===W)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){i(j,y.sibling),y=r(y,S.children||[]),y.return=j,j=y;break e}else{i(j,y);break}else a(j,y);y=y.sibling}y=es(S,j.mode,z),y.return=j,j=y}return d(j);case Oe:return W=S._init,we(j,y,W(S._payload),z)}if(ai(S))return M(j,y,S,z);if(V(S))return F(j,y,S,z);kn(j,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(i(j,y.sibling),y=r(y,S),y.return=j,j=y):(i(j,y),y=Zo(S,j.mode,z),y.return=j,j=y),d(j)):i(j,y)}return we}var Ft=ic(!0),nc=ic(!1),En=Ha(null),Un=null,Ot=null,lo=null;function co(){lo=Ot=Un=null}function uo(e){var a=En.current;me(En),e._currentValue=a}function mo(e,a,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===i)break;e=e.return}}function _t(e,a){Un=e,lo=Ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&a)!==0&&(He=!0),e.firstContext=null)}function na(e){var a=e._currentValue;if(lo!==e)if(e={context:e,memoizedValue:a,next:null},Ot===null){if(Un===null)throw Error(c(308));Ot=e,Un.dependencies={lanes:0,firstContext:e}}else Ot=Ot.next=e;return a}var ht=null;function po(e){ht===null?ht=[e]:ht.push(e)}function rc(e,a,i,n){var r=a.interleaved;return r===null?(i.next=i,po(a)):(i.next=r.next,r.next=i),a.interleaved=i,Ia(e,n)}function Ia(e,a){e.lanes|=a;var i=e.alternate;for(i!==null&&(i.lanes|=a),i=e,e=e.return;e!==null;)e.childLanes|=a,i=e.alternate,i!==null&&(i.childLanes|=a),i=e,e=e.return;return i.tag===3?i.stateNode:null}var $a=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function za(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function Ya(e,a,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Z&2)!==0){var r=n.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),n.pending=a,Ia(e,i)}return r=n.interleaved,r===null?(a.next=a,po(n)):(a.next=r.next,r.next=a),n.interleaved=a,Ia(e,i)}function In(e,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194240)!==0)){var n=a.lanes;n&=e.pendingLanes,i|=n,a.lanes=i,kr(e,i)}}function sc(e,a){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var d={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?r=s=d:s=s.next=d,i=i.next}while(i!==null);s===null?r=s=a:s=s.next=a}else r=s=a;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=a:e.next=a,i.lastBaseUpdate=a}function zn(e,a,i,n){var r=e.updateQueue;$a=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,h=r.shared.pending;if(h!==null){r.shared.pending=null;var g=h,A=g.next;g.next=null,d===null?s=A:d.next=A,d=g;var U=e.alternate;U!==null&&(U=U.updateQueue,h=U.lastBaseUpdate,h!==d&&(h===null?U.firstBaseUpdate=A:h.next=A,U.lastBaseUpdate=g))}if(s!==null){var I=r.baseState;d=0,U=A=g=null,h=s;do{var N=h.lane,D=h.eventTime;if((n&N)===N){U!==null&&(U=U.next={eventTime:D,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var M=e,F=h;switch(N=a,D=i,F.tag){case 1:if(M=F.payload,typeof M=="function"){I=M.call(D,I,N);break e}I=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=F.payload,N=typeof M=="function"?M.call(D,I,N):M,N==null)break e;I=R({},I,N);break e;case 2:$a=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,N=r.effects,N===null?r.effects=[h]:N.push(h))}else D={eventTime:D,lane:N,tag:h.tag,payload:h.payload,callback:h.callback,next:null},U===null?(A=U=D,g=I):U=U.next=D,d|=N;if(h=h.next,h===null){if(h=r.shared.pending,h===null)break;N=h,h=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);if(U===null&&(g=I),r.baseState=g,r.firstBaseUpdate=A,r.lastBaseUpdate=U,a=r.shared.interleaved,a!==null){r=a;do d|=r.lane,r=r.next;while(r!==a)}else s===null&&(r.shared.lanes=0);yt|=d,e.lanes=d,e.memoizedState=I}}function lc(e,a,i){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var n=e[a],r=n.callback;if(r!==null){if(n.callback=null,n=i,typeof r!="function")throw Error(c(191,r));r.call(n)}}}var ki={},ja=Ha(ki),Ei=Ha(ki),Ui=Ha(ki);function ft(e){if(e===ki)throw Error(c(174));return e}function fo(e,a){switch(de(Ui,a),de(Ei,e),de(ja,ki),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:fr(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=fr(a,e)}me(ja),de(ja,a)}function Wt(){me(ja),me(Ei),me(Ui)}function cc(e){ft(Ui.current);var a=ft(ja.current),i=fr(a,e.type);a!==i&&(de(Ei,e),de(ja,i))}function go(e){Ei.current===e&&(me(ja),me(Ei))}var fe=Ha(0);function Tn(e){for(var a=e;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var yo=[];function vo(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var qn=le.ReactCurrentDispatcher,xo=le.ReactCurrentBatchConfig,gt=0,ge=null,Ce=null,Ee=null,Ln=!1,Ii=!1,zi=0,Ym=0;function Le(){throw Error(c(321))}function bo(e,a){if(a===null)return!1;for(var i=0;i<a.length&&i<e.length;i++)if(!ua(e[i],a[i]))return!1;return!0}function wo(e,a,i,n,r,s){if(gt=s,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,qn.current=e===null||e.memoizedState===null?Xm:Zm,e=i(n,r),Ii){s=0;do{if(Ii=!1,zi=0,25<=s)throw Error(c(301));s+=1,Ee=Ce=null,a.updateQueue=null,qn.current=ep,e=i(n,r)}while(Ii)}if(qn.current=Bn,a=Ce!==null&&Ce.next!==null,gt=0,Ee=Ce=ge=null,Ln=!1,a)throw Error(c(300));return e}function jo(){var e=zi!==0;return zi=0,e}function Sa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ge.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ra(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var a=Ee===null?ge.memoizedState:Ee.next;if(a!==null)Ee=a,Ce=e;else{if(e===null)throw Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ee===null?ge.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Ti(e,a){return typeof a=="function"?a(e):a}function So(e){var a=ra(),i=a.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=e;var n=Ce,r=n.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}n.baseQueue=r=s,i.pending=null}if(r!==null){s=r.next,n=n.baseState;var h=d=null,g=null,A=s;do{var U=A.lane;if((gt&U)===U)g!==null&&(g=g.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),n=A.hasEagerState?A.eagerState:e(n,A.action);else{var I={lane:U,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};g===null?(h=g=I,d=n):g=g.next=I,ge.lanes|=U,yt|=U}A=A.next}while(A!==null&&A!==s);g===null?d=n:g.next=h,ua(n,a.memoizedState)||(He=!0),a.memoizedState=n,a.baseState=d,a.baseQueue=g,i.lastRenderedState=n}if(e=i.interleaved,e!==null){r=e;do s=r.lane,ge.lanes|=s,yt|=s,r=r.next;while(r!==e)}else r===null&&(i.lanes=0);return[a.memoizedState,i.dispatch]}function Ao(e){var a=ra(),i=a.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=e;var n=i.dispatch,r=i.pending,s=a.memoizedState;if(r!==null){i.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);ua(s,a.memoizedState)||(He=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),i.lastRenderedState=s}return[s,n]}function dc(){}function uc(e,a){var i=ge,n=ra(),r=a(),s=!ua(n.memoizedState,r);if(s&&(n.memoizedState=r,He=!0),n=n.queue,Co(hc.bind(null,i,n,e),[e]),n.getSnapshot!==a||s||Ee!==null&&Ee.memoizedState.tag&1){if(i.flags|=2048,qi(9,pc.bind(null,i,n,r,a),void 0,null),Ue===null)throw Error(c(349));(gt&30)!==0||mc(i,a,r)}return r}function mc(e,a,i){e.flags|=16384,e={getSnapshot:a,value:i},a=ge.updateQueue,a===null?(a={lastEffect:null,stores:null},ge.updateQueue=a,a.stores=[e]):(i=a.stores,i===null?a.stores=[e]:i.push(e))}function pc(e,a,i,n){a.value=i,a.getSnapshot=n,fc(a)&&gc(e)}function hc(e,a,i){return i(function(){fc(a)&&gc(e)})}function fc(e){var a=e.getSnapshot;e=e.value;try{var i=a();return!ua(e,i)}catch{return!0}}function gc(e){var a=Ia(e,1);a!==null&&ga(a,e,1,-1)}function yc(e){var a=Sa();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},a.queue=e,e=e.dispatch=Km.bind(null,ge,e),[a.memoizedState,e]}function qi(e,a,i,n){return e={tag:e,create:a,destroy:i,deps:n,next:null},a=ge.updateQueue,a===null?(a={lastEffect:null,stores:null},ge.updateQueue=a,a.lastEffect=e.next=e):(i=a.lastEffect,i===null?a.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,a.lastEffect=e)),e}function vc(){return ra().memoizedState}function Dn(e,a,i,n){var r=Sa();ge.flags|=e,r.memoizedState=qi(1|a,i,void 0,n===void 0?null:n)}function Pn(e,a,i,n){var r=ra();n=n===void 0?null:n;var s=void 0;if(Ce!==null){var d=Ce.memoizedState;if(s=d.destroy,n!==null&&bo(n,d.deps)){r.memoizedState=qi(a,i,s,n);return}}ge.flags|=e,r.memoizedState=qi(1|a,i,s,n)}function xc(e,a){return Dn(8390656,8,e,a)}function Co(e,a){return Pn(2048,8,e,a)}function bc(e,a){return Pn(4,2,e,a)}function wc(e,a){return Pn(4,4,e,a)}function jc(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Sc(e,a,i){return i=i!=null?i.concat([e]):null,Pn(4,4,jc.bind(null,a,e),i)}function No(){}function Ac(e,a){var i=ra();a=a===void 0?null:a;var n=i.memoizedState;return n!==null&&a!==null&&bo(a,n[1])?n[0]:(i.memoizedState=[e,a],e)}function Cc(e,a){var i=ra();a=a===void 0?null:a;var n=i.memoizedState;return n!==null&&a!==null&&bo(a,n[1])?n[0]:(e=e(),i.memoizedState=[e,a],e)}function Nc(e,a,i){return(gt&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=i):(ua(i,a)||(i=tl(),ge.lanes|=i,yt|=i,e.baseState=!0),a)}function Jm(e,a){var i=oe;oe=i!==0&&4>i?i:4,e(!0);var n=xo.transition;xo.transition={};try{e(!1),a()}finally{oe=i,xo.transition=n}}function kc(){return ra().memoizedState}function Qm(e,a,i){var n=Xa(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Ec(e))Uc(a,i);else if(i=rc(e,a,i,n),i!==null){var r=Me();ga(i,e,n,r),Ic(i,a,n)}}function Km(e,a,i){var n=Xa(e),r={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Uc(a,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var d=a.lastRenderedState,h=s(d,i);if(r.hasEagerState=!0,r.eagerState=h,ua(h,d)){var g=a.interleaved;g===null?(r.next=r,po(a)):(r.next=g.next,g.next=r),a.interleaved=r;return}}catch{}finally{}i=rc(e,a,r,n),i!==null&&(r=Me(),ga(i,e,n,r),Ic(i,a,n))}}function Ec(e){var a=e.alternate;return e===ge||a!==null&&a===ge}function Uc(e,a){Ii=Ln=!0;var i=e.pending;i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a}function Ic(e,a,i){if((i&4194240)!==0){var n=a.lanes;n&=e.pendingLanes,i|=n,a.lanes=i,kr(e,i)}}var Bn={readContext:na,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Xm={readContext:na,useCallback:function(e,a){return Sa().memoizedState=[e,a===void 0?null:a],e},useContext:na,useEffect:xc,useImperativeHandle:function(e,a,i){return i=i!=null?i.concat([e]):null,Dn(4194308,4,jc.bind(null,a,e),i)},useLayoutEffect:function(e,a){return Dn(4194308,4,e,a)},useInsertionEffect:function(e,a){return Dn(4,2,e,a)},useMemo:function(e,a){var i=Sa();return a=a===void 0?null:a,e=e(),i.memoizedState=[e,a],e},useReducer:function(e,a,i){var n=Sa();return a=i!==void 0?i(a):a,n.memoizedState=n.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Qm.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var a=Sa();return e={current:e},a.memoizedState=e},useState:yc,useDebugValue:No,useDeferredValue:function(e){return Sa().memoizedState=e},useTransition:function(){var e=yc(!1),a=e[0];return e=Jm.bind(null,e[1]),Sa().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,i){var n=ge,r=Sa();if(he){if(i===void 0)throw Error(c(407));i=i()}else{if(i=a(),Ue===null)throw Error(c(349));(gt&30)!==0||mc(n,a,i)}r.memoizedState=i;var s={value:i,getSnapshot:a};return r.queue=s,xc(hc.bind(null,n,s,e),[e]),n.flags|=2048,qi(9,pc.bind(null,n,s,i,a),void 0,null),i},useId:function(){var e=Sa(),a=Ue.identifierPrefix;if(he){var i=Ua,n=Ea;i=(n&~(1<<32-da(n)-1)).toString(32)+i,a=":"+a+"R"+i,i=zi++,0<i&&(a+="H"+i.toString(32)),a+=":"}else i=Ym++,a=":"+a+"r"+i.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},Zm={readContext:na,useCallback:Ac,useContext:na,useEffect:Co,useImperativeHandle:Sc,useInsertionEffect:bc,useLayoutEffect:wc,useMemo:Cc,useReducer:So,useRef:vc,useState:function(){return So(Ti)},useDebugValue:No,useDeferredValue:function(e){var a=ra();return Nc(a,Ce.memoizedState,e)},useTransition:function(){var e=So(Ti)[0],a=ra().memoizedState;return[e,a]},useMutableSource:dc,useSyncExternalStore:uc,useId:kc,unstable_isNewReconciler:!1},ep={readContext:na,useCallback:Ac,useContext:na,useEffect:Co,useImperativeHandle:Sc,useInsertionEffect:bc,useLayoutEffect:wc,useMemo:Cc,useReducer:Ao,useRef:vc,useState:function(){return Ao(Ti)},useDebugValue:No,useDeferredValue:function(e){var a=ra();return Ce===null?a.memoizedState=e:Nc(a,Ce.memoizedState,e)},useTransition:function(){var e=Ao(Ti)[0],a=ra().memoizedState;return[e,a]},useMutableSource:dc,useSyncExternalStore:uc,useId:kc,unstable_isNewReconciler:!1};function pa(e,a){if(e&&e.defaultProps){a=R({},a),e=e.defaultProps;for(var i in e)a[i]===void 0&&(a[i]=e[i]);return a}return a}function ko(e,a,i,n){a=e.memoizedState,i=i(n,a),i=i==null?a:R({},a,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Rn={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,a,i){e=e._reactInternals;var n=Me(),r=Xa(e),s=za(n,r);s.payload=a,i!=null&&(s.callback=i),a=Ya(e,s,r),a!==null&&(ga(a,e,r,n),In(a,e,r))},enqueueReplaceState:function(e,a,i){e=e._reactInternals;var n=Me(),r=Xa(e),s=za(n,r);s.tag=1,s.payload=a,i!=null&&(s.callback=i),a=Ya(e,s,r),a!==null&&(ga(a,e,r,n),In(a,e,r))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var i=Me(),n=Xa(e),r=za(i,n);r.tag=2,a!=null&&(r.callback=a),a=Ya(e,r,n),a!==null&&(ga(a,e,n,i),In(a,e,n))}};function zc(e,a,i,n,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,d):a.prototype&&a.prototype.isPureReactComponent?!xi(i,n)||!xi(r,s):!0}function Tc(e,a,i){var n=!1,r=Va,s=a.contextType;return typeof s=="object"&&s!==null?s=na(s):(r=We(a)?ut:qe.current,n=a.contextTypes,s=(n=n!=null)?Pt(e,r):Va),a=new a(i,s),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rn,e.stateNode=a,a._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),a}function qc(e,a,i,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,n),a.state!==e&&Rn.enqueueReplaceState(a,a.state,null)}function Eo(e,a,i,n){var r=e.stateNode;r.props=i,r.state=e.memoizedState,r.refs={},ho(e);var s=a.contextType;typeof s=="object"&&s!==null?r.context=na(s):(s=We(a)?ut:qe.current,r.context=Pt(e,s)),r.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(ko(e,a,s,i),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&Rn.enqueueReplaceState(r,r.state,null),zn(e,i,r,n),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ht(e,a){try{var i="",n=a;do i+=ee(n),n=n.return;while(n);var r=i}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:a,stack:r,digest:null}}function Uo(e,a,i){return{value:e,source:null,stack:i??null,digest:a??null}}function Io(e,a){try{console.error(a.value)}catch(i){setTimeout(function(){throw i})}}var ap=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,a,i){i=za(-1,i),i.tag=3,i.payload={element:null};var n=a.value;return i.callback=function(){Vn||(Vn=!0,Vo=n),Io(e,a)},i}function Dc(e,a,i){i=za(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var r=a.value;i.payload=function(){return n(r)},i.callback=function(){Io(e,a)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){Io(e,a),typeof n!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})}),i}function Pc(e,a,i){var n=e.pingCache;if(n===null){n=e.pingCache=new ap;var r=new Set;n.set(a,r)}else r=n.get(a),r===void 0&&(r=new Set,n.set(a,r));r.has(i)||(r.add(i),e=fp.bind(null,e,a,i),a.then(e,e))}function Bc(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Rc(e,a,i,n,r){return(e.mode&1)===0?(e===a?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(a=za(-1,1),a.tag=2,Ya(i,a,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var tp=le.ReactCurrentOwner,He=!1;function Re(e,a,i,n){a.child=e===null?nc(a,null,i,n):Ft(a,e.child,i,n)}function Mc(e,a,i,n,r){i=i.render;var s=a.ref;return _t(a,r),n=wo(e,a,i,n,s,r),i=jo(),e!==null&&!He?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r,Ta(e,a,r)):(he&&i&&io(a),a.flags|=1,Re(e,a,n,r),a.child)}function Fc(e,a,i,n,r){if(e===null){var s=i.type;return typeof s=="function"&&!Xo(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(a.tag=15,a.type=s,Oc(e,a,s,n,r)):(e=Kn(i.type,null,n,a,a.mode,r),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,(e.lanes&r)===0){var d=s.memoizedProps;if(i=i.compare,i=i!==null?i:xi,i(d,n)&&e.ref===a.ref)return Ta(e,a,r)}return a.flags|=1,e=et(s,n),e.ref=a.ref,e.return=a,a.child=e}function Oc(e,a,i,n,r){if(e!==null){var s=e.memoizedProps;if(xi(s,n)&&e.ref===a.ref)if(He=!1,a.pendingProps=n=s,(e.lanes&r)!==0)(e.flags&131072)!==0&&(He=!0);else return a.lanes=e.lanes,Ta(e,a,r)}return zo(e,a,i,n,r)}function _c(e,a,i){var n=a.pendingProps,r=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Gt,ea),ea|=i;else{if((i&1073741824)===0)return e=s!==null?s.baseLanes|i:i,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,de(Gt,ea),ea|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:i,de(Gt,ea),ea|=n}else s!==null?(n=s.baseLanes|i,a.memoizedState=null):n=i,de(Gt,ea),ea|=n;return Re(e,a,r,i),a.child}function Wc(e,a){var i=a.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(a.flags|=512,a.flags|=2097152)}function zo(e,a,i,n,r){var s=We(i)?ut:qe.current;return s=Pt(a,s),_t(a,r),i=wo(e,a,i,n,s,r),n=jo(),e!==null&&!He?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r,Ta(e,a,r)):(he&&n&&io(a),a.flags|=1,Re(e,a,i,r),a.child)}function Hc(e,a,i,n,r){if(We(i)){var s=!0;jn(a)}else s=!1;if(_t(a,r),a.stateNode===null)Fn(e,a),Tc(a,i,n),Eo(a,i,n,r),n=!0;else if(e===null){var d=a.stateNode,h=a.memoizedProps;d.props=h;var g=d.context,A=i.contextType;typeof A=="object"&&A!==null?A=na(A):(A=We(i)?ut:qe.current,A=Pt(a,A));var U=i.getDerivedStateFromProps,I=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function";I||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==n||g!==A)&&qc(a,d,n,A),$a=!1;var N=a.memoizedState;d.state=N,zn(a,n,d,r),g=a.memoizedState,h!==n||N!==g||_e.current||$a?(typeof U=="function"&&(ko(a,i,U,n),g=a.memoizedState),(h=$a||zc(a,i,h,n,N,g,A))?(I||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=g),d.props=n,d.state=g,d.context=A,n=h):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{d=a.stateNode,oc(e,a),h=a.memoizedProps,A=a.type===a.elementType?h:pa(a.type,h),d.props=A,I=a.pendingProps,N=d.context,g=i.contextType,typeof g=="object"&&g!==null?g=na(g):(g=We(i)?ut:qe.current,g=Pt(a,g));var D=i.getDerivedStateFromProps;(U=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==I||N!==g)&&qc(a,d,n,g),$a=!1,N=a.memoizedState,d.state=N,zn(a,n,d,r);var M=a.memoizedState;h!==I||N!==M||_e.current||$a?(typeof D=="function"&&(ko(a,i,D,n),M=a.memoizedState),(A=$a||zc(a,i,A,n,N,M,g)||!1)?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,M,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,M,g)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=M),d.props=n,d.state=M,d.context=g,n=A):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),n=!1)}return To(e,a,i,n,s,r)}function To(e,a,i,n,r,s){Wc(e,a);var d=(a.flags&128)!==0;if(!n&&!d)return r&&Jl(a,i,!1),Ta(e,a,s);n=a.stateNode,tp.current=a;var h=d&&typeof i.getDerivedStateFromError!="function"?null:n.render();return a.flags|=1,e!==null&&d?(a.child=Ft(a,e.child,null,s),a.child=Ft(a,null,h,s)):Re(e,a,h,s),a.memoizedState=n.state,r&&Jl(a,i,!0),a.child}function Vc(e){var a=e.stateNode;a.pendingContext?$l(e,a.pendingContext,a.pendingContext!==a.context):a.context&&$l(e,a.context,!1),fo(e,a.containerInfo)}function Gc(e,a,i,n,r){return Mt(),so(r),a.flags|=256,Re(e,a,i,n),a.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function $c(e,a,i){var n=a.pendingProps,r=fe.current,s=!1,d=(a.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(r&2)!==0),h?(s=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),de(fe,r&1),e===null)return oo(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((a.mode&1)===0?a.lanes=1:e.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(d=n.children,e=n.fallback,s?(n=a.mode,s=a.child,d={mode:"hidden",children:d},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=Xn(d,n,0,null),e=wt(e,n,i,null),s.return=a,e.return=a,s.sibling=e,a.child=s,a.child.memoizedState=Lo(i),a.memoizedState=qo,e):Do(a,d));if(r=e.memoizedState,r!==null&&(h=r.dehydrated,h!==null))return ip(e,a,d,n,h,r,i);if(s){s=n.fallback,d=a.mode,r=e.child,h=r.sibling;var g={mode:"hidden",children:n.children};return(d&1)===0&&a.child!==r?(n=a.child,n.childLanes=0,n.pendingProps=g,a.deletions=null):(n=et(r,g),n.subtreeFlags=r.subtreeFlags&14680064),h!==null?s=et(h,s):(s=wt(s,d,i,null),s.flags|=2),s.return=a,n.return=a,n.sibling=s,a.child=n,n=s,s=a.child,d=e.child.memoizedState,d=d===null?Lo(i):{baseLanes:d.baseLanes|i,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~i,a.memoizedState=qo,n}return s=e.child,e=s.sibling,n=et(s,{mode:"visible",children:n.children}),(a.mode&1)===0&&(n.lanes=i),n.return=a,n.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=n,a.memoizedState=null,n}function Do(e,a){return a=Xn({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Mn(e,a,i,n){return n!==null&&so(n),Ft(a,e.child,null,i),e=Do(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function ip(e,a,i,n,r,s,d){if(i)return a.flags&256?(a.flags&=-257,n=Uo(Error(c(422))),Mn(e,a,d,n)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(s=n.fallback,r=a.mode,n=Xn({mode:"visible",children:n.children},r,0,null),s=wt(s,r,d,null),s.flags|=2,n.return=a,s.return=a,n.sibling=s,a.child=n,(a.mode&1)!==0&&Ft(a,e.child,null,d),a.child.memoizedState=Lo(d),a.memoizedState=qo,s);if((a.mode&1)===0)return Mn(e,a,d,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var h=n.dgst;return n=h,s=Error(c(419)),n=Uo(s,n,void 0),Mn(e,a,d,n)}if(h=(d&e.childLanes)!==0,He||h){if(n=Ue,n!==null){switch(d&-d){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(n.suspendedLanes|d))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ia(e,r),ga(n,e,r,-1))}return Ko(),n=Uo(Error(c(421))),Mn(e,a,d,n)}return r.data==="$?"?(a.flags|=128,a.child=e.child,a=gp.bind(null,e),r._reactRetry=a,null):(e=s.treeContext,Ze=Wa(r.nextSibling),Xe=a,he=!0,ma=null,e!==null&&(ta[ia++]=Ea,ta[ia++]=Ua,ta[ia++]=mt,Ea=e.id,Ua=e.overflow,mt=a),a=Do(a,n.children),a.flags|=4096,a)}function Yc(e,a,i){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),mo(e.return,a,i)}function Po(e,a,i,n,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=r)}function Jc(e,a,i){var n=a.pendingProps,r=n.revealOrder,s=n.tail;if(Re(e,a,n.children,i),n=fe.current,(n&2)!==0)n=n&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,i,a);else if(e.tag===19)Yc(e,i,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(de(fe,n),(a.mode&1)===0)a.memoizedState=null;else switch(r){case"forwards":for(i=a.child,r=null;i!==null;)e=i.alternate,e!==null&&Tn(e)===null&&(r=i),i=i.sibling;i=r,i===null?(r=a.child,a.child=null):(r=i.sibling,i.sibling=null),Po(a,!1,r,i,s);break;case"backwards":for(i=null,r=a.child,a.child=null;r!==null;){if(e=r.alternate,e!==null&&Tn(e)===null){a.child=r;break}e=r.sibling,r.sibling=i,i=r,r=e}Po(a,!0,i,null,s);break;case"together":Po(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Fn(e,a){(a.mode&1)===0&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function Ta(e,a,i){if(e!==null&&(a.dependencies=e.dependencies),yt|=a.lanes,(i&a.childLanes)===0)return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,i=et(e,e.pendingProps),a.child=i,i.return=a;e.sibling!==null;)e=e.sibling,i=i.sibling=et(e,e.pendingProps),i.return=a;i.sibling=null}return a.child}function np(e,a,i){switch(a.tag){case 3:Vc(a),Mt();break;case 5:cc(a);break;case 1:We(a.type)&&jn(a);break;case 4:fo(a,a.stateNode.containerInfo);break;case 10:var n=a.type._context,r=a.memoizedProps.value;de(En,n._currentValue),n._currentValue=r;break;case 13:if(n=a.memoizedState,n!==null)return n.dehydrated!==null?(de(fe,fe.current&1),a.flags|=128,null):(i&a.child.childLanes)!==0?$c(e,a,i):(de(fe,fe.current&1),e=Ta(e,a,i),e!==null?e.sibling:null);de(fe,fe.current&1);break;case 19:if(n=(i&a.childLanes)!==0,(e.flags&128)!==0){if(n)return Jc(e,a,i);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),de(fe,fe.current),n)break;return null;case 22:case 23:return a.lanes=0,_c(e,a,i)}return Ta(e,a,i)}var Qc,Bo,Kc,Xc;Qc=function(e,a){for(var i=a.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break;for(;i.sibling===null;){if(i.return===null||i.return===a)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Bo=function(){},Kc=function(e,a,i,n){var r=e.memoizedProps;if(r!==n){e=a.stateNode,ft(ja.current);var s=null;switch(i){case"input":r=ur(e,r),n=ur(e,n),s=[];break;case"select":r=R({},r,{value:void 0}),n=R({},n,{value:void 0}),s=[];break;case"textarea":r=hr(e,r),n=hr(e,n),s=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=xn)}gr(i,n);var d;i=null;for(A in r)if(!n.hasOwnProperty(A)&&r.hasOwnProperty(A)&&r[A]!=null)if(A==="style"){var h=r[A];for(d in h)h.hasOwnProperty(d)&&(i||(i={}),i[d]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(p.hasOwnProperty(A)?s||(s=[]):(s=s||[]).push(A,null));for(A in n){var g=n[A];if(h=r!=null?r[A]:void 0,n.hasOwnProperty(A)&&g!==h&&(g!=null||h!=null))if(A==="style")if(h){for(d in h)!h.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(i||(i={}),i[d]="");for(d in g)g.hasOwnProperty(d)&&h[d]!==g[d]&&(i||(i={}),i[d]=g[d])}else i||(s||(s=[]),s.push(A,i)),i=g;else A==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(s=s||[]).push(A,g)):A==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(A,""+g):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(p.hasOwnProperty(A)?(g!=null&&A==="onScroll"&&ue("scroll",e),s||h===g||(s=[])):(s=s||[]).push(A,g))}i&&(s=s||[]).push("style",i);var A=s;(a.updateQueue=A)&&(a.flags|=4)}},Xc=function(e,a,i,n){i!==n&&(a.flags|=4)};function Li(e,a){if(!he)switch(e.tailMode){case"hidden":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function De(e){var a=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(a)for(var r=e.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=i,a}function rp(e,a,i){var n=a.pendingProps;switch(no(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(a),null;case 1:return We(a.type)&&wn(),De(a),null;case 3:return n=a.stateNode,Wt(),me(_e),me(qe),vo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Nn(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ma!==null&&(Yo(ma),ma=null))),Bo(e,a),De(a),null;case 5:go(a);var r=ft(Ui.current);if(i=a.type,e!==null&&a.stateNode!=null)Kc(e,a,i,n,r),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!n){if(a.stateNode===null)throw Error(c(166));return De(a),null}if(e=ft(ja.current),Nn(a)){n=a.stateNode,i=a.type;var s=a.memoizedProps;switch(n[wa]=a,n[Ai]=s,e=(a.mode&1)!==0,i){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(r=0;r<wi.length;r++)ue(wi[r],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":Ts(n,s),ue("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ue("invalid",n);break;case"textarea":Ds(n,s),ue("invalid",n)}gr(i,s),r=null;for(var d in s)if(s.hasOwnProperty(d)){var h=s[d];d==="children"?typeof h=="string"?n.textContent!==h&&(s.suppressHydrationWarning!==!0&&vn(n.textContent,h,e),r=["children",h]):typeof h=="number"&&n.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&vn(n.textContent,h,e),r=["children",""+h]):p.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&ue("scroll",n)}switch(i){case"input":Yi(n),Ls(n,s,!0);break;case"textarea":Yi(n),Bs(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=xn)}n=r,a.updateQueue=n,n!==null&&(a.flags|=4)}else{d=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rs(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(i,{is:n.is}):(e=d.createElement(i),i==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,i),e[wa]=a,e[Ai]=n,Qc(e,a,!1,!1),a.stateNode=e;e:{switch(d=yr(i,n),i){case"dialog":ue("cancel",e),ue("close",e),r=n;break;case"iframe":case"object":case"embed":ue("load",e),r=n;break;case"video":case"audio":for(r=0;r<wi.length;r++)ue(wi[r],e);r=n;break;case"source":ue("error",e),r=n;break;case"img":case"image":case"link":ue("error",e),ue("load",e),r=n;break;case"details":ue("toggle",e),r=n;break;case"input":Ts(e,n),r=ur(e,n),ue("invalid",e);break;case"option":r=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},r=R({},n,{value:void 0}),ue("invalid",e);break;case"textarea":Ds(e,n),r=hr(e,n),ue("invalid",e);break;default:r=n}gr(i,r),h=r;for(s in h)if(h.hasOwnProperty(s)){var g=h[s];s==="style"?Os(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Ms(e,g)):s==="children"?typeof g=="string"?(i!=="textarea"||g!=="")&&ti(e,g):typeof g=="number"&&ti(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(p.hasOwnProperty(s)?g!=null&&s==="onScroll"&&ue("scroll",e):g!=null&&ne(e,s,g,d))}switch(i){case"input":Yi(e),Ls(e,n,!1);break;case"textarea":Yi(e),Bs(e);break;case"option":n.value!=null&&e.setAttribute("value",""+re(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?At(e,!!n.multiple,s,!1):n.defaultValue!=null&&At(e,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=xn)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return De(a),null;case 6:if(e&&a.stateNode!=null)Xc(e,a,e.memoizedProps,n);else{if(typeof n!="string"&&a.stateNode===null)throw Error(c(166));if(i=ft(Ui.current),ft(ja.current),Nn(a)){if(n=a.stateNode,i=a.memoizedProps,n[wa]=a,(s=n.nodeValue!==i)&&(e=Xe,e!==null))switch(e.tag){case 3:vn(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vn(n.nodeValue,i,(e.mode&1)!==0)}s&&(a.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[wa]=a,a.stateNode=n}return De(a),null;case 13:if(me(fe),n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&Ze!==null&&(a.mode&1)!==0&&(a.flags&128)===0)ac(),Mt(),a.flags|=98560,s=!1;else if(s=Nn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[wa]=a}else Mt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;De(a),s=!1}else ma!==null&&(Yo(ma),ma=null),s=!0;if(!s)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=i,a):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(a.child.flags|=8192,(a.mode&1)!==0&&(e===null||(fe.current&1)!==0?Ne===0&&(Ne=3):Ko())),a.updateQueue!==null&&(a.flags|=4),De(a),null);case 4:return Wt(),Bo(e,a),e===null&&ji(a.stateNode.containerInfo),De(a),null;case 10:return uo(a.type._context),De(a),null;case 17:return We(a.type)&&wn(),De(a),null;case 19:if(me(fe),s=a.memoizedState,s===null)return De(a),null;if(n=(a.flags&128)!==0,d=s.rendering,d===null)if(n)Li(s,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=Tn(e),d!==null){for(a.flags|=128,Li(s,!1),n=d.updateQueue,n!==null&&(a.updateQueue=n,a.flags|=4),a.subtreeFlags=0,n=i,i=a.child;i!==null;)s=i,e=n,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return de(fe,fe.current&1|2),a.child}e=e.sibling}s.tail!==null&&be()>$t&&(a.flags|=128,n=!0,Li(s,!1),a.lanes=4194304)}else{if(!n)if(e=Tn(d),e!==null){if(a.flags|=128,n=!0,i=e.updateQueue,i!==null&&(a.updateQueue=i,a.flags|=4),Li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!he)return De(a),null}else 2*be()-s.renderingStartTime>$t&&i!==1073741824&&(a.flags|=128,n=!0,Li(s,!1),a.lanes=4194304);s.isBackwards?(d.sibling=a.child,a.child=d):(i=s.last,i!==null?i.sibling=d:a.child=d,s.last=d)}return s.tail!==null?(a=s.tail,s.rendering=a,s.tail=a.sibling,s.renderingStartTime=be(),a.sibling=null,i=fe.current,de(fe,n?i&1|2:i&1),a):(De(a),null);case 22:case 23:return Qo(),n=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(a.flags|=8192),n&&(a.mode&1)!==0?(ea&1073741824)!==0&&(De(a),a.subtreeFlags&6&&(a.flags|=8192)):De(a),null;case 24:return null;case 25:return null}throw Error(c(156,a.tag))}function op(e,a){switch(no(a),a.tag){case 1:return We(a.type)&&wn(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Wt(),me(_e),me(qe),vo(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 5:return go(a),null;case 13:if(me(fe),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));Mt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return me(fe),null;case 4:return Wt(),null;case 10:return uo(a.type._context),null;case 22:case 23:return Qo(),null;case 24:return null;default:return null}}var On=!1,Pe=!1,sp=typeof WeakSet=="function"?WeakSet:Set,P=null;function Vt(e,a){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ve(e,a,n)}else i.current=null}function Ro(e,a,i){try{i()}catch(n){ve(e,a,n)}}var Zc=!1;function lp(e,a){if(Jr=sn,e=zl(),Or(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var d=0,h=-1,g=-1,A=0,U=0,I=e,N=null;a:for(;;){for(var D;I!==i||r!==0&&I.nodeType!==3||(h=d+r),I!==s||n!==0&&I.nodeType!==3||(g=d+n),I.nodeType===3&&(d+=I.nodeValue.length),(D=I.firstChild)!==null;)N=I,I=D;for(;;){if(I===e)break a;if(N===i&&++A===r&&(h=d),N===s&&++U===n&&(g=d),(D=I.nextSibling)!==null)break;I=N,N=I.parentNode}I=D}i=h===-1||g===-1?null:{start:h,end:g}}else i=null}i=i||{start:0,end:0}}else i=null;for(Qr={focusedElem:e,selectionRange:i},sn=!1,P=a;P!==null;)if(a=P,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,P=e;else for(;P!==null;){a=P;try{var M=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var F=M.memoizedProps,we=M.memoizedState,j=a.stateNode,y=j.getSnapshotBeforeUpdate(a.elementType===a.type?F:pa(a.type,F),we);j.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=a.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(z){ve(a,a.return,z)}if(e=a.sibling,e!==null){e.return=a.return,P=e;break}P=a.return}return M=Zc,Zc=!1,M}function Di(e,a,i){var n=a.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ro(a,i,s)}r=r.next}while(r!==n)}}function _n(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==a)}}function Mo(e){var a=e.ref;if(a!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof a=="function"?a(e):a.current=e}}function ed(e){var a=e.alternate;a!==null&&(e.alternate=null,ed(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[wa],delete a[Ai],delete a[eo],delete a[Hm],delete a[Vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,a,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?i.nodeType===8?i.parentNode.insertBefore(e,a):i.insertBefore(e,a):(i.nodeType===8?(a=i.parentNode,a.insertBefore(e,i)):(a=i,a.appendChild(e)),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=xn));else if(n!==4&&(e=e.child,e!==null))for(Fo(e,a,i),e=e.sibling;e!==null;)Fo(e,a,i),e=e.sibling}function Oo(e,a,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?i.insertBefore(e,a):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Oo(e,a,i),e=e.sibling;e!==null;)Oo(e,a,i),e=e.sibling}var ze=null,ha=!1;function Ja(e,a,i){for(i=i.child;i!==null;)id(e,a,i),i=i.sibling}function id(e,a,i){if(ba&&typeof ba.onCommitFiberUnmount=="function")try{ba.onCommitFiberUnmount(en,i)}catch{}switch(i.tag){case 5:Pe||Vt(i,a);case 6:var n=ze,r=ha;ze=null,Ja(e,a,i),ze=n,ha=r,ze!==null&&(ha?(e=ze,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):ze.removeChild(i.stateNode));break;case 18:ze!==null&&(ha?(e=ze,i=i.stateNode,e.nodeType===8?Zr(e.parentNode,i):e.nodeType===1&&Zr(e,i),pi(e)):Zr(ze,i.stateNode));break;case 4:n=ze,r=ha,ze=i.stateNode.containerInfo,ha=!0,Ja(e,a,i),ze=n,ha=r;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var s=r,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&Ro(i,a,d),r=r.next}while(r!==n)}Ja(e,a,i);break;case 1:if(!Pe&&(Vt(i,a),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(h){ve(i,a,h)}Ja(e,a,i);break;case 21:Ja(e,a,i);break;case 22:i.mode&1?(Pe=(n=Pe)||i.memoizedState!==null,Ja(e,a,i),Pe=n):Ja(e,a,i);break;default:Ja(e,a,i)}}function nd(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new sp),a.forEach(function(n){var r=yp.bind(null,e,n);i.has(n)||(i.add(n),n.then(r,r))})}}function fa(e,a){var i=a.deletions;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];try{var s=e,d=a,h=d;e:for(;h!==null;){switch(h.tag){case 5:ze=h.stateNode,ha=!1;break e;case 3:ze=h.stateNode.containerInfo,ha=!0;break e;case 4:ze=h.stateNode.containerInfo,ha=!0;break e}h=h.return}if(ze===null)throw Error(c(160));id(s,d,r),ze=null,ha=!1;var g=r.alternate;g!==null&&(g.return=null),r.return=null}catch(A){ve(r,a,A)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)rd(a,e),a=a.sibling}function rd(e,a){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fa(a,e),Aa(e),n&4){try{Di(3,e,e.return),_n(3,e)}catch(F){ve(e,e.return,F)}try{Di(5,e,e.return)}catch(F){ve(e,e.return,F)}}break;case 1:fa(a,e),Aa(e),n&512&&i!==null&&Vt(i,i.return);break;case 5:if(fa(a,e),Aa(e),n&512&&i!==null&&Vt(i,i.return),e.flags&32){var r=e.stateNode;try{ti(r,"")}catch(F){ve(e,e.return,F)}}if(n&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,d=i!==null?i.memoizedProps:s,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&qs(r,s),yr(h,d);var A=yr(h,s);for(d=0;d<g.length;d+=2){var U=g[d],I=g[d+1];U==="style"?Os(r,I):U==="dangerouslySetInnerHTML"?Ms(r,I):U==="children"?ti(r,I):ne(r,U,I,A)}switch(h){case"input":mr(r,s);break;case"textarea":Ps(r,s);break;case"select":var N=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var D=s.value;D!=null?At(r,!!s.multiple,D,!1):N!==!!s.multiple&&(s.defaultValue!=null?At(r,!!s.multiple,s.defaultValue,!0):At(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ai]=s}catch(F){ve(e,e.return,F)}}break;case 6:if(fa(a,e),Aa(e),n&4){if(e.stateNode===null)throw Error(c(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(F){ve(e,e.return,F)}}break;case 3:if(fa(a,e),Aa(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{pi(a.containerInfo)}catch(F){ve(e,e.return,F)}break;case 4:fa(a,e),Aa(e);break;case 13:fa(a,e),Aa(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ho=be())),n&4&&nd(e);break;case 22:if(U=i!==null&&i.memoizedState!==null,e.mode&1?(Pe=(A=Pe)||U,fa(a,e),Pe=A):fa(a,e),Aa(e),n&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!U&&(e.mode&1)!==0)for(P=e,U=e.child;U!==null;){for(I=P=U;P!==null;){switch(N=P,D=N.child,N.tag){case 0:case 11:case 14:case 15:Di(4,N,N.return);break;case 1:Vt(N,N.return);var M=N.stateNode;if(typeof M.componentWillUnmount=="function"){n=N,i=N.return;try{a=n,M.props=a.memoizedProps,M.state=a.memoizedState,M.componentWillUnmount()}catch(F){ve(n,i,F)}}break;case 5:Vt(N,N.return);break;case 22:if(N.memoizedState!==null){ld(I);continue}}D!==null?(D.return=N,P=D):ld(I)}U=U.sibling}e:for(U=null,I=e;;){if(I.tag===5){if(U===null){U=I;try{r=I.stateNode,A?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=I.stateNode,g=I.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=Fs("display",d))}catch(F){ve(e,e.return,F)}}}else if(I.tag===6){if(U===null)try{I.stateNode.nodeValue=A?"":I.memoizedProps}catch(F){ve(e,e.return,F)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;U===I&&(U=null),I=I.return}U===I&&(U=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:fa(a,e),Aa(e),n&4&&nd(e);break;case 21:break;default:fa(a,e),Aa(e)}}function Aa(e){var a=e.flags;if(a&2){try{e:{for(var i=e.return;i!==null;){if(ad(i)){var n=i;break e}i=i.return}throw Error(c(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(ti(r,""),n.flags&=-33);var s=td(e);Oo(e,s,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=td(e);Fo(e,h,d);break;default:throw Error(c(161))}}catch(g){ve(e,e.return,g)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function cp(e,a,i){P=e,od(e)}function od(e,a,i){for(var n=(e.mode&1)!==0;P!==null;){var r=P,s=r.child;if(r.tag===22&&n){var d=r.memoizedState!==null||On;if(!d){var h=r.alternate,g=h!==null&&h.memoizedState!==null||Pe;h=On;var A=Pe;if(On=d,(Pe=g)&&!A)for(P=r;P!==null;)d=P,g=d.child,d.tag===22&&d.memoizedState!==null?cd(r):g!==null?(g.return=d,P=g):cd(r);for(;s!==null;)P=s,od(s),s=s.sibling;P=r,On=h,Pe=A}sd(e)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,P=s):sd(e)}}function sd(e){for(;P!==null;){var a=P;if((a.flags&8772)!==0){var i=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Pe||_n(5,a);break;case 1:var n=a.stateNode;if(a.flags&4&&!Pe)if(i===null)n.componentDidMount();else{var r=a.elementType===a.type?i.memoizedProps:pa(a.type,i.memoizedProps);n.componentDidUpdate(r,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=a.updateQueue;s!==null&&lc(a,s,n);break;case 3:var d=a.updateQueue;if(d!==null){if(i=null,a.child!==null)switch(a.child.tag){case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}lc(a,d,i)}break;case 5:var h=a.stateNode;if(i===null&&a.flags&4){i=h;var g=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&i.focus();break;case"img":g.src&&(i.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var A=a.alternate;if(A!==null){var U=A.memoizedState;if(U!==null){var I=U.dehydrated;I!==null&&pi(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Pe||a.flags&512&&Mo(a)}catch(N){ve(a,a.return,N)}}if(a===e){P=null;break}if(i=a.sibling,i!==null){i.return=a.return,P=i;break}P=a.return}}function ld(e){for(;P!==null;){var a=P;if(a===e){P=null;break}var i=a.sibling;if(i!==null){i.return=a.return,P=i;break}P=a.return}}function cd(e){for(;P!==null;){var a=P;try{switch(a.tag){case 0:case 11:case 15:var i=a.return;try{_n(4,a)}catch(g){ve(a,i,g)}break;case 1:var n=a.stateNode;if(typeof n.componentDidMount=="function"){var r=a.return;try{n.componentDidMount()}catch(g){ve(a,r,g)}}var s=a.return;try{Mo(a)}catch(g){ve(a,s,g)}break;case 5:var d=a.return;try{Mo(a)}catch(g){ve(a,d,g)}}}catch(g){ve(a,a.return,g)}if(a===e){P=null;break}var h=a.sibling;if(h!==null){h.return=a.return,P=h;break}P=a.return}}var dp=Math.ceil,Wn=le.ReactCurrentDispatcher,_o=le.ReactCurrentOwner,oa=le.ReactCurrentBatchConfig,Z=0,Ue=null,je=null,Te=0,ea=0,Gt=Ha(0),Ne=0,Pi=null,yt=0,Hn=0,Wo=0,Bi=null,Ve=null,Ho=0,$t=1/0,qa=null,Vn=!1,Vo=null,Qa=null,Gn=!1,Ka=null,$n=0,Ri=0,Go=null,Yn=-1,Jn=0;function Me(){return(Z&6)!==0?be():Yn!==-1?Yn:Yn=be()}function Xa(e){return(e.mode&1)===0?1:(Z&2)!==0&&Te!==0?Te&-Te:$m.transition!==null?(Jn===0&&(Jn=tl()),Jn):(e=oe,e!==0||(e=window.event,e=e===void 0?16:ul(e.type)),e)}function ga(e,a,i,n){if(50<Ri)throw Ri=0,Go=null,Error(c(185));li(e,i,n),((Z&2)===0||e!==Ue)&&(e===Ue&&((Z&2)===0&&(Hn|=i),Ne===4&&Za(e,Te)),Ge(e,n),i===1&&Z===0&&(a.mode&1)===0&&($t=be()+500,Sn&&Ga()))}function Ge(e,a){var i=e.callbackNode;$u(e,a);var n=nn(e,e===Ue?Te:0);if(n===0)i!==null&&Zs(i),e.callbackNode=null,e.callbackPriority=0;else if(a=n&-n,e.callbackPriority!==a){if(i!=null&&Zs(i),a===1)e.tag===0?Gm(ud.bind(null,e)):Ql(ud.bind(null,e)),_m(function(){(Z&6)===0&&Ga()}),i=null;else{switch(il(n)){case 1:i=Ar;break;case 4:i=el;break;case 16:i=Zi;break;case 536870912:i=al;break;default:i=Zi}i=xd(i,dd.bind(null,e))}e.callbackPriority=a,e.callbackNode=i}}function dd(e,a){if(Yn=-1,Jn=0,(Z&6)!==0)throw Error(c(327));var i=e.callbackNode;if(Yt()&&e.callbackNode!==i)return null;var n=nn(e,e===Ue?Te:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||a)a=Qn(e,n);else{a=n;var r=Z;Z|=2;var s=pd();(Ue!==e||Te!==a)&&(qa=null,$t=be()+500,xt(e,a));do try{pp();break}catch(h){md(e,h)}while(!0);co(),Wn.current=s,Z=r,je!==null?a=0:(Ue=null,Te=0,a=Ne)}if(a!==0){if(a===2&&(r=Cr(e),r!==0&&(n=r,a=$o(e,r))),a===1)throw i=Pi,xt(e,0),Za(e,n),Ge(e,be()),i;if(a===6)Za(e,n);else{if(r=e.current.alternate,(n&30)===0&&!up(r)&&(a=Qn(e,n),a===2&&(s=Cr(e),s!==0&&(n=s,a=$o(e,s))),a===1))throw i=Pi,xt(e,0),Za(e,n),Ge(e,be()),i;switch(e.finishedWork=r,e.finishedLanes=n,a){case 0:case 1:throw Error(c(345));case 2:bt(e,Ve,qa);break;case 3:if(Za(e,n),(n&130023424)===n&&(a=Ho+500-be(),10<a)){if(nn(e,0)!==0)break;if(r=e.suspendedLanes,(r&n)!==n){Me(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Xr(bt.bind(null,e,Ve,qa),a);break}bt(e,Ve,qa);break;case 4:if(Za(e,n),(n&4194240)===n)break;for(a=e.eventTimes,r=-1;0<n;){var d=31-da(n);s=1<<d,d=a[d],d>r&&(r=d),n&=~s}if(n=r,n=be()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*dp(n/1960))-n,10<n){e.timeoutHandle=Xr(bt.bind(null,e,Ve,qa),n);break}bt(e,Ve,qa);break;case 5:bt(e,Ve,qa);break;default:throw Error(c(329))}}}return Ge(e,be()),e.callbackNode===i?dd.bind(null,e):null}function $o(e,a){var i=Bi;return e.current.memoizedState.isDehydrated&&(xt(e,a).flags|=256),e=Qn(e,a),e!==2&&(a=Ve,Ve=i,a!==null&&Yo(a)),e}function Yo(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function up(e){for(var a=e;;){if(a.flags&16384){var i=a.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var r=i[n],s=r.getSnapshot;r=r.value;try{if(!ua(s(),r))return!1}catch{return!1}}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Za(e,a){for(a&=~Wo,a&=~Hn,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var i=31-da(a),n=1<<i;e[i]=-1,a&=~n}}function ud(e){if((Z&6)!==0)throw Error(c(327));Yt();var a=nn(e,0);if((a&1)===0)return Ge(e,be()),null;var i=Qn(e,a);if(e.tag!==0&&i===2){var n=Cr(e);n!==0&&(a=n,i=$o(e,n))}if(i===1)throw i=Pi,xt(e,0),Za(e,a),Ge(e,be()),i;if(i===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,bt(e,Ve,qa),Ge(e,be()),null}function Jo(e,a){var i=Z;Z|=1;try{return e(a)}finally{Z=i,Z===0&&($t=be()+500,Sn&&Ga())}}function vt(e){Ka!==null&&Ka.tag===0&&(Z&6)===0&&Yt();var a=Z;Z|=1;var i=oa.transition,n=oe;try{if(oa.transition=null,oe=1,e)return e()}finally{oe=n,oa.transition=i,Z=a,(Z&6)===0&&Ga()}}function Qo(){ea=Gt.current,me(Gt)}function xt(e,a){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Om(i)),je!==null)for(i=je.return;i!==null;){var n=i;switch(no(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&wn();break;case 3:Wt(),me(_e),me(qe),vo();break;case 5:go(n);break;case 4:Wt();break;case 13:me(fe);break;case 19:me(fe);break;case 10:uo(n.type._context);break;case 22:case 23:Qo()}i=i.return}if(Ue=e,je=e=et(e.current,null),Te=ea=a,Ne=0,Pi=null,Wo=Hn=yt=0,Ve=Bi=null,ht!==null){for(a=0;a<ht.length;a++)if(i=ht[a],n=i.interleaved,n!==null){i.interleaved=null;var r=n.next,s=i.pending;if(s!==null){var d=s.next;s.next=r,n.next=d}i.pending=n}ht=null}return e}function md(e,a){do{var i=je;try{if(co(),qn.current=Bn,Ln){for(var n=ge.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Ln=!1}if(gt=0,Ee=Ce=ge=null,Ii=!1,zi=0,_o.current=null,i===null||i.return===null){Ne=1,Pi=a,je=null;break}e:{var s=e,d=i.return,h=i,g=a;if(a=Te,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var A=g,U=h,I=U.tag;if((U.mode&1)===0&&(I===0||I===11||I===15)){var N=U.alternate;N?(U.updateQueue=N.updateQueue,U.memoizedState=N.memoizedState,U.lanes=N.lanes):(U.updateQueue=null,U.memoizedState=null)}var D=Bc(d);if(D!==null){D.flags&=-257,Rc(D,d,h,s,a),D.mode&1&&Pc(s,A,a),a=D,g=A;var M=a.updateQueue;if(M===null){var F=new Set;F.add(g),a.updateQueue=F}else M.add(g);break e}else{if((a&1)===0){Pc(s,A,a),Ko();break e}g=Error(c(426))}}else if(he&&h.mode&1){var we=Bc(d);if(we!==null){(we.flags&65536)===0&&(we.flags|=256),Rc(we,d,h,s,a),so(Ht(g,h));break e}}s=g=Ht(g,h),Ne!==4&&(Ne=2),Bi===null?Bi=[s]:Bi.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,a&=-a,s.lanes|=a;var j=Lc(s,g,a);sc(s,j);break e;case 1:h=g;var y=s.type,S=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Qa===null||!Qa.has(S)))){s.flags|=65536,a&=-a,s.lanes|=a;var z=Dc(s,h,a);sc(s,z);break e}}s=s.return}while(s!==null)}fd(i)}catch(O){a=O,je===i&&i!==null&&(je=i=i.return);continue}break}while(!0)}function pd(){var e=Wn.current;return Wn.current=Bn,e===null?Bn:e}function Ko(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ue===null||(yt&268435455)===0&&(Hn&268435455)===0||Za(Ue,Te)}function Qn(e,a){var i=Z;Z|=2;var n=pd();(Ue!==e||Te!==a)&&(qa=null,xt(e,a));do try{mp();break}catch(r){md(e,r)}while(!0);if(co(),Z=i,Wn.current=n,je!==null)throw Error(c(261));return Ue=null,Te=0,Ne}function mp(){for(;je!==null;)hd(je)}function pp(){for(;je!==null&&!Ru();)hd(je)}function hd(e){var a=vd(e.alternate,e,ea);e.memoizedProps=e.pendingProps,a===null?fd(e):je=a,_o.current=null}function fd(e){var a=e;do{var i=a.alternate;if(e=a.return,(a.flags&32768)===0){if(i=rp(i,a,ea),i!==null){je=i;return}}else{if(i=op(i,a),i!==null){i.flags&=32767,je=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,je=null;return}}if(a=a.sibling,a!==null){je=a;return}je=a=e}while(a!==null);Ne===0&&(Ne=5)}function bt(e,a,i){var n=oe,r=oa.transition;try{oa.transition=null,oe=1,hp(e,a,i,n)}finally{oa.transition=r,oe=n}return null}function hp(e,a,i,n){do Yt();while(Ka!==null);if((Z&6)!==0)throw Error(c(327));i=e.finishedWork;var r=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=i.lanes|i.childLanes;if(Yu(e,s),e===Ue&&(je=Ue=null,Te=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Gn||(Gn=!0,xd(Zi,function(){return Yt(),null})),s=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||s){s=oa.transition,oa.transition=null;var d=oe;oe=1;var h=Z;Z|=4,_o.current=null,lp(e,i),rd(i,e),Lm(Qr),sn=!!Jr,Qr=Jr=null,e.current=i,cp(i),Mu(),Z=h,oe=d,oa.transition=s}else e.current=i;if(Gn&&(Gn=!1,Ka=e,$n=r),s=e.pendingLanes,s===0&&(Qa=null),_u(i.stateNode),Ge(e,be()),a!==null)for(n=e.onRecoverableError,i=0;i<a.length;i++)r=a[i],n(r.value,{componentStack:r.stack,digest:r.digest});if(Vn)throw Vn=!1,e=Vo,Vo=null,e;return($n&1)!==0&&e.tag!==0&&Yt(),s=e.pendingLanes,(s&1)!==0?e===Go?Ri++:(Ri=0,Go=e):Ri=0,Ga(),null}function Yt(){if(Ka!==null){var e=il($n),a=oa.transition,i=oe;try{if(oa.transition=null,oe=16>e?16:e,Ka===null)var n=!1;else{if(e=Ka,Ka=null,$n=0,(Z&6)!==0)throw Error(c(331));var r=Z;for(Z|=4,P=e.current;P!==null;){var s=P,d=s.child;if((P.flags&16)!==0){var h=s.deletions;if(h!==null){for(var g=0;g<h.length;g++){var A=h[g];for(P=A;P!==null;){var U=P;switch(U.tag){case 0:case 11:case 15:Di(8,U,s)}var I=U.child;if(I!==null)I.return=U,P=I;else for(;P!==null;){U=P;var N=U.sibling,D=U.return;if(ed(U),U===A){P=null;break}if(N!==null){N.return=D,P=N;break}P=D}}}var M=s.alternate;if(M!==null){var F=M.child;if(F!==null){M.child=null;do{var we=F.sibling;F.sibling=null,F=we}while(F!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,P=d;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Di(9,s,s.return)}var j=s.sibling;if(j!==null){j.return=s.return,P=j;break e}P=s.return}}var y=e.current;for(P=y;P!==null;){d=P;var S=d.child;if((d.subtreeFlags&2064)!==0&&S!==null)S.return=d,P=S;else e:for(d=y;P!==null;){if(h=P,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:_n(9,h)}}catch(O){ve(h,h.return,O)}if(h===d){P=null;break e}var z=h.sibling;if(z!==null){z.return=h.return,P=z;break e}P=h.return}}if(Z=r,Ga(),ba&&typeof ba.onPostCommitFiberRoot=="function")try{ba.onPostCommitFiberRoot(en,e)}catch{}n=!0}return n}finally{oe=i,oa.transition=a}}return!1}function gd(e,a,i){a=Ht(i,a),a=Lc(e,a,1),e=Ya(e,a,1),a=Me(),e!==null&&(li(e,1,a),Ge(e,a))}function ve(e,a,i){if(e.tag===3)gd(e,e,i);else for(;a!==null;){if(a.tag===3){gd(a,e,i);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Qa===null||!Qa.has(n))){e=Ht(i,e),e=Dc(a,e,1),a=Ya(a,e,1),e=Me(),a!==null&&(li(a,1,e),Ge(a,e));break}}a=a.return}}function fp(e,a,i){var n=e.pingCache;n!==null&&n.delete(a),a=Me(),e.pingedLanes|=e.suspendedLanes&i,Ue===e&&(Te&i)===i&&(Ne===4||Ne===3&&(Te&130023424)===Te&&500>be()-Ho?xt(e,0):Wo|=i),Ge(e,a)}function yd(e,a){a===0&&((e.mode&1)===0?a=1:(a=tn,tn<<=1,(tn&130023424)===0&&(tn=4194304)));var i=Me();e=Ia(e,a),e!==null&&(li(e,a,i),Ge(e,i))}function gp(e){var a=e.memoizedState,i=0;a!==null&&(i=a.retryLane),yd(e,i)}function yp(e,a){var i=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(a),yd(e,i)}var vd;vd=function(e,a,i){if(e!==null)if(e.memoizedProps!==a.pendingProps||_e.current)He=!0;else{if((e.lanes&i)===0&&(a.flags&128)===0)return He=!1,np(e,a,i);He=(e.flags&131072)!==0}else He=!1,he&&(a.flags&1048576)!==0&&Kl(a,Cn,a.index);switch(a.lanes=0,a.tag){case 2:var n=a.type;Fn(e,a),e=a.pendingProps;var r=Pt(a,qe.current);_t(a,i),r=wo(null,a,n,e,r,i);var s=jo();return a.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,We(n)?(s=!0,jn(a)):s=!1,a.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ho(a),r.updater=Rn,a.stateNode=r,r._reactInternals=a,Eo(a,n,e,i),a=To(null,a,n,!0,s,i)):(a.tag=0,he&&s&&io(a),Re(null,a,r,i),a=a.child),a;case 16:n=a.elementType;e:{switch(Fn(e,a),e=a.pendingProps,r=n._init,n=r(n._payload),a.type=n,r=a.tag=xp(n),e=pa(n,e),r){case 0:a=zo(null,a,n,e,i);break e;case 1:a=Hc(null,a,n,e,i);break e;case 11:a=Mc(null,a,n,e,i);break e;case 14:a=Fc(null,a,n,pa(n.type,e),i);break e}throw Error(c(306,n,""))}return a;case 0:return n=a.type,r=a.pendingProps,r=a.elementType===n?r:pa(n,r),zo(e,a,n,r,i);case 1:return n=a.type,r=a.pendingProps,r=a.elementType===n?r:pa(n,r),Hc(e,a,n,r,i);case 3:e:{if(Vc(a),e===null)throw Error(c(387));n=a.pendingProps,s=a.memoizedState,r=s.element,oc(e,a),zn(a,n,null,i);var d=a.memoizedState;if(n=d.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){r=Ht(Error(c(423)),a),a=Gc(e,a,n,i,r);break e}else if(n!==r){r=Ht(Error(c(424)),a),a=Gc(e,a,n,i,r);break e}else for(Ze=Wa(a.stateNode.containerInfo.firstChild),Xe=a,he=!0,ma=null,i=nc(a,null,n,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Mt(),n===r){a=Ta(e,a,i);break e}Re(e,a,n,i)}a=a.child}return a;case 5:return cc(a),e===null&&oo(a),n=a.type,r=a.pendingProps,s=e!==null?e.memoizedProps:null,d=r.children,Kr(n,r)?d=null:s!==null&&Kr(n,s)&&(a.flags|=32),Wc(e,a),Re(e,a,d,i),a.child;case 6:return e===null&&oo(a),null;case 13:return $c(e,a,i);case 4:return fo(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Ft(a,null,n,i):Re(e,a,n,i),a.child;case 11:return n=a.type,r=a.pendingProps,r=a.elementType===n?r:pa(n,r),Mc(e,a,n,r,i);case 7:return Re(e,a,a.pendingProps,i),a.child;case 8:return Re(e,a,a.pendingProps.children,i),a.child;case 12:return Re(e,a,a.pendingProps.children,i),a.child;case 10:e:{if(n=a.type._context,r=a.pendingProps,s=a.memoizedProps,d=r.value,de(En,n._currentValue),n._currentValue=d,s!==null)if(ua(s.value,d)){if(s.children===r.children&&!_e.current){a=Ta(e,a,i);break e}}else for(s=a.child,s!==null&&(s.return=a);s!==null;){var h=s.dependencies;if(h!==null){d=s.child;for(var g=h.firstContext;g!==null;){if(g.context===n){if(s.tag===1){g=za(-1,i&-i),g.tag=2;var A=s.updateQueue;if(A!==null){A=A.shared;var U=A.pending;U===null?g.next=g:(g.next=U.next,U.next=g),A.pending=g}}s.lanes|=i,g=s.alternate,g!==null&&(g.lanes|=i),mo(s.return,i,a),h.lanes|=i;break}g=g.next}}else if(s.tag===10)d=s.type===a.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(c(341));d.lanes|=i,h=d.alternate,h!==null&&(h.lanes|=i),mo(d,i,a),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===a){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Re(e,a,r.children,i),a=a.child}return a;case 9:return r=a.type,n=a.pendingProps.children,_t(a,i),r=na(r),n=n(r),a.flags|=1,Re(e,a,n,i),a.child;case 14:return n=a.type,r=pa(n,a.pendingProps),r=pa(n.type,r),Fc(e,a,n,r,i);case 15:return Oc(e,a,a.type,a.pendingProps,i);case 17:return n=a.type,r=a.pendingProps,r=a.elementType===n?r:pa(n,r),Fn(e,a),a.tag=1,We(n)?(e=!0,jn(a)):e=!1,_t(a,i),Tc(a,n,r),Eo(a,n,r,i),To(null,a,n,!0,e,i);case 19:return Jc(e,a,i);case 22:return _c(e,a,i)}throw Error(c(156,a.tag))};function xd(e,a){return Xs(e,a)}function vp(e,a,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sa(e,a,i,n){return new vp(e,a,i,n)}function Xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return Xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===va)return 11;if(e===xa)return 14}return 2}function et(e,a){var i=e.alternate;return i===null?(i=sa(e.tag,a,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=a,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,a=e.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Kn(e,a,i,n,r,s){var d=2;if(n=e,typeof e=="function")Xo(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Fe:return wt(i.children,r,s,a);case aa:d=8,r|=8;break;case Pa:return e=sa(12,i,a,r|2),e.elementType=Pa,e.lanes=s,e;case Je:return e=sa(13,i,a,r),e.elementType=Je,e.lanes=s,e;case ca:return e=sa(19,i,a,r),e.elementType=ca,e.lanes=s,e;case ye:return Xn(i,r,s,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ca:d=10;break e;case lt:d=9;break e;case va:d=11;break e;case xa:d=14;break e;case Oe:d=16,n=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return a=sa(d,i,a,r),a.elementType=e,a.type=n,a.lanes=s,a}function wt(e,a,i,n){return e=sa(7,e,n,a),e.lanes=i,e}function Xn(e,a,i,n){return e=sa(22,e,n,a),e.elementType=ye,e.lanes=i,e.stateNode={isHidden:!1},e}function Zo(e,a,i){return e=sa(6,e,null,a),e.lanes=i,e}function es(e,a,i){return a=sa(4,e.children!==null?e.children:[],e.key,a),a.lanes=i,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function bp(e,a,i,n,r){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nr(0),this.expirationTimes=Nr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nr(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function as(e,a,i,n,r,s,d,h,g){return e=new bp(e,a,i,h,g),a===1?(a=1,s===!0&&(a|=8)):a=0,s=sa(3,null,null,a),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(s),e}function wp(e,a,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Be,key:n==null?null:""+n,children:e,containerInfo:a,implementation:i}}function bd(e){if(!e)return Va;e=e._reactInternals;e:{if(ct(e)!==e||e.tag!==1)throw Error(c(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(We(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(c(171))}if(e.tag===1){var i=e.type;if(We(i))return Yl(e,i,a)}return a}function wd(e,a,i,n,r,s,d,h,g){return e=as(i,n,!0,e,r,s,d,h,g),e.context=bd(null),i=e.current,n=Me(),r=Xa(i),s=za(n,r),s.callback=a??null,Ya(i,s,r),e.current.lanes=r,li(e,r,n),Ge(e,n),e}function Zn(e,a,i,n){var r=a.current,s=Me(),d=Xa(r);return i=bd(i),a.context===null?a.context=i:a.pendingContext=i,a=za(s,d),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=Ya(r,a,d),e!==null&&(ga(e,r,d,s),In(e,r,d)),d}function er(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jd(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<a?i:a}}function ts(e,a){jd(e,a),(e=e.alternate)&&jd(e,a)}function jp(){return null}var Sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function is(e){this._internalRoot=e}ar.prototype.render=is.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));Zn(e,a,null,null)},ar.prototype.unmount=is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;vt(function(){Zn(null,e,null,null)}),a[Na]=null}};function ar(e){this._internalRoot=e}ar.prototype.unstable_scheduleHydration=function(e){if(e){var a=ol();e={blockedOn:null,target:e,priority:a};for(var i=0;i<Fa.length&&a!==0&&a<Fa[i].priority;i++);Fa.splice(i,0,e),i===0&&cl(e)}};function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ad(){}function Sp(e,a,i,n,r){if(r){if(typeof n=="function"){var s=n;n=function(){var A=er(d);s.call(A)}}var d=wd(a,n,e,0,null,!1,!1,"",Ad);return e._reactRootContainer=d,e[Na]=d.current,ji(e.nodeType===8?e.parentNode:e),vt(),d}for(;r=e.lastChild;)e.removeChild(r);if(typeof n=="function"){var h=n;n=function(){var A=er(g);h.call(A)}}var g=as(e,0,!1,null,null,!1,!1,"",Ad);return e._reactRootContainer=g,e[Na]=g.current,ji(e.nodeType===8?e.parentNode:e),vt(function(){Zn(a,g,i,n)}),g}function ir(e,a,i,n,r){var s=i._reactRootContainer;if(s){var d=s;if(typeof r=="function"){var h=r;r=function(){var g=er(d);h.call(g)}}Zn(a,d,e,r)}else d=Sp(i,a,e,r,n);return er(d)}nl=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var i=si(a.pendingLanes);i!==0&&(kr(a,i|1),Ge(a,be()),(Z&6)===0&&($t=be()+500,Ga()))}break;case 13:vt(function(){var n=Ia(e,1);if(n!==null){var r=Me();ga(n,e,1,r)}}),ts(e,1)}},Er=function(e){if(e.tag===13){var a=Ia(e,134217728);if(a!==null){var i=Me();ga(a,e,134217728,i)}ts(e,134217728)}},rl=function(e){if(e.tag===13){var a=Xa(e),i=Ia(e,a);if(i!==null){var n=Me();ga(i,e,a,n)}ts(e,a)}},ol=function(){return oe},sl=function(e,a){var i=oe;try{return oe=e,a()}finally{oe=i}},br=function(e,a,i){switch(a){case"input":if(mr(e,i),a=i.name,i.type==="radio"&&a!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<i.length;a++){var n=i[a];if(n!==e&&n.form===e.form){var r=bn(n);if(!r)throw Error(c(90));zs(n),mr(n,r)}}}break;case"textarea":Ps(e,i);break;case"select":a=i.value,a!=null&&At(e,!!i.multiple,a,!1)}},Vs=Jo,Gs=vt;var Ap={usingClientEntryPoint:!1,Events:[Ci,Lt,bn,Ws,Hs,Jo]},Mi={findFiberByHostInstance:dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cp={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qs(e),e===null?null:e.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nr.isDisabled&&nr.supportsFiber)try{en=nr.inject(Cp),ba=nr}catch{}}return $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap,$e.createPortal=function(e,a){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ns(a))throw Error(c(200));return wp(e,a,null,i)},$e.createRoot=function(e,a){if(!ns(e))throw Error(c(299));var i=!1,n="",r=Sd;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=as(e,1,!1,null,null,i,!1,n,r),e[Na]=a.current,ji(e.nodeType===8?e.parentNode:e),new is(a)},$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Qs(a),e=e===null?null:e.stateNode,e},$e.flushSync=function(e){return vt(e)},$e.hydrate=function(e,a,i){if(!tr(a))throw Error(c(200));return ir(null,e,a,!0,i)},$e.hydrateRoot=function(e,a,i){if(!ns(e))throw Error(c(405));var n=i!=null&&i.hydratedSources||null,r=!1,s="",d=Sd;if(i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),a=wd(a,null,e,1,i??null,r,!1,s,d),e[Na]=a.current,ji(e),n)for(e=0;e<n.length;e++)i=n[e],r=i._getVersion,r=r(i._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[i,r]:a.mutableSourceEagerHydrationData.push(i,r);return new ar(a)},$e.render=function(e,a,i){if(!tr(a))throw Error(c(200));return ir(null,e,a,!1,i)},$e.unmountComponentAtNode=function(e){if(!tr(e))throw Error(c(40));return e._reactRootContainer?(vt(function(){ir(null,null,e,!1,function(){e._reactRootContainer=null,e[Na]=null})}),!0):!1},$e.unstable_batchedUpdates=Jo,$e.unstable_renderSubtreeIntoContainer=function(e,a,i,n){if(!tr(i))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return ir(e,a,i,!1,n)},$e.version="18.3.1-next-f1338f8080-20240426",$e}var Td;function tu(){if(Td)return ss.exports;Td=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),ss.exports=Pp(),ss.exports}var qd;function Bp(){if(qd)return rr;qd=1;var o=tu();return rr.createRoot=o.createRoot,rr.hydrateRoot=o.hydrateRoot,rr}var Rp=Bp(),ds,Ld;function Mp(){if(Ld)return ds;Ld=1;var o=typeof Element<"u",l=typeof Map=="function",c=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(m,f){if(m===f)return!0;if(m&&f&&typeof m=="object"&&typeof f=="object"){if(m.constructor!==f.constructor)return!1;var x,v,b;if(Array.isArray(m)){if(x=m.length,x!=f.length)return!1;for(v=x;v--!==0;)if(!p(m[v],f[v]))return!1;return!0}var C;if(l&&m instanceof Map&&f instanceof Map){if(m.size!==f.size)return!1;for(C=m.entries();!(v=C.next()).done;)if(!f.has(v.value[0]))return!1;for(C=m.entries();!(v=C.next()).done;)if(!p(v.value[1],f.get(v.value[0])))return!1;return!0}if(c&&m instanceof Set&&f instanceof Set){if(m.size!==f.size)return!1;for(C=m.entries();!(v=C.next()).done;)if(!f.has(v.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(f)){if(x=m.length,x!=f.length)return!1;for(v=x;v--!==0;)if(m[v]!==f[v])return!1;return!0}if(m.constructor===RegExp)return m.source===f.source&&m.flags===f.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof f.valueOf=="function")return m.valueOf()===f.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof f.toString=="function")return m.toString()===f.toString();if(b=Object.keys(m),x=b.length,x!==Object.keys(f).length)return!1;for(v=x;v--!==0;)if(!Object.prototype.hasOwnProperty.call(f,b[v]))return!1;if(o&&m instanceof Element)return!1;for(v=x;v--!==0;)if(!((b[v]==="_owner"||b[v]==="__v"||b[v]==="__o")&&m.$$typeof)&&!p(m[b[v]],f[b[v]]))return!1;return!0}return m!==m&&f!==f}return ds=function(f,x){try{return p(f,x)}catch(v){if((v.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw v}},ds}var Fp=Mp();const Op=cr(Fp);var us,Dd;function _p(){if(Dd)return us;Dd=1;var o=function(l,c,u,p,m,f,x,v){if(!l){var b;if(c===void 0)b=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var C=[u,p,m,f,x,v],k=0;b=new Error(c.replace(/%s/g,function(){return C[k++]})),b.name="Invariant Violation"}throw b.framesToPop=1,b}};return us=o,us}var Wp=_p();const Pd=cr(Wp);var ms,Bd;function Hp(){return Bd||(Bd=1,ms=function(l,c,u,p){var m=u?u.call(p,l,c):void 0;if(m!==void 0)return!!m;if(l===c)return!0;if(typeof l!="object"||!l||typeof c!="object"||!c)return!1;var f=Object.keys(l),x=Object.keys(c);if(f.length!==x.length)return!1;for(var v=Object.prototype.hasOwnProperty.bind(c),b=0;b<f.length;b++){var C=f[b];if(!v(C))return!1;var k=l[C],B=c[C];if(m=u?u.call(p,k,B,C):void 0,m===!1||m===void 0&&k!==B)return!1}return!0}),ms}var Vp=Hp();const Gp=cr(Vp);var iu=(o=>(o.BASE="base",o.BODY="body",o.HEAD="head",o.HTML="html",o.LINK="link",o.META="meta",o.NOSCRIPT="noscript",o.SCRIPT="script",o.STYLE="style",o.TITLE="title",o.FRAGMENT="Symbol(react.fragment)",o))(iu||{}),ps={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Rd=Object.values(iu),ks={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},$p=Object.entries(ks).reduce((o,[l,c])=>(o[c]=l,o),{}),ya="data-rh",Qt={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Kt=(o,l)=>{for(let c=o.length-1;c>=0;c-=1){const u=o[c];if(Object.prototype.hasOwnProperty.call(u,l))return u[l]}return null},Yp=o=>{let l=Kt(o,"title");const c=Kt(o,Qt.TITLE_TEMPLATE);if(Array.isArray(l)&&(l=l.join("")),c&&l)return c.replace(/%s/g,()=>l);const u=Kt(o,Qt.DEFAULT_TITLE);return l||u||void 0},Jp=o=>Kt(o,Qt.ON_CHANGE_CLIENT_STATE)||(()=>{}),hs=(o,l)=>l.filter(c=>typeof c[o]<"u").map(c=>c[o]).reduce((c,u)=>({...c,...u}),{}),Qp=(o,l)=>l.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,u)=>{if(!c.length){const p=Object.keys(u);for(let m=0;m<p.length;m+=1){const x=p[m].toLowerCase();if(o.indexOf(x)!==-1&&u[x])return c.concat(u)}}return c},[]),Kp=o=>console&&typeof console.warn=="function"&&console.warn(o),Oi=(o,l,c)=>{const u={};return c.filter(p=>Array.isArray(p[o])?!0:(typeof p[o]<"u"&&Kp(`Helmet: ${o} should be of type "Array". Instead found type "${typeof p[o]}"`),!1)).map(p=>p[o]).reverse().reduce((p,m)=>{const f={};m.filter(v=>{let b;const C=Object.keys(v);for(let B=0;B<C.length;B+=1){const $=C[B],J=$.toLowerCase();l.indexOf(J)!==-1&&!(b==="rel"&&v[b].toLowerCase()==="canonical")&&!(J==="rel"&&v[J].toLowerCase()==="stylesheet")&&(b=J),l.indexOf($)!==-1&&($==="innerHTML"||$==="cssText"||$==="itemprop")&&(b=$)}if(!b||!v[b])return!1;const k=v[b].toLowerCase();return u[b]||(u[b]={}),f[b]||(f[b]={}),u[b][k]?!1:(f[b][k]=!0,!0)}).reverse().forEach(v=>p.push(v));const x=Object.keys(f);for(let v=0;v<x.length;v+=1){const b=x[v],C={...u[b],...f[b]};u[b]=C}return p},[]).reverse()},Xp=(o,l)=>{if(Array.isArray(o)&&o.length){for(let c=0;c<o.length;c+=1)if(o[c][l])return!0}return!1},Zp=o=>({baseTag:Qp(["href"],o),bodyAttributes:hs("bodyAttributes",o),defer:Kt(o,Qt.DEFER),encode:Kt(o,Qt.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:hs("htmlAttributes",o),linkTags:Oi("link",["rel","href"],o),metaTags:Oi("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:Oi("noscript",["innerHTML"],o),onChangeClientState:Jp(o),scriptTags:Oi("script",["src","innerHTML"],o),styleTags:Oi("style",["cssText"],o),title:Yp(o),titleAttributes:hs("titleAttributes",o),prioritizeSeoTags:Xp(o,Qt.PRIORITIZE_SEO_TAGS)}),nu=o=>Array.isArray(o)?o.join(""):o,eh=(o,l)=>{const c=Object.keys(o);for(let u=0;u<c.length;u+=1)if(l[c[u]]&&l[c[u]].includes(o[c[u]]))return!0;return!1},fs=(o,l)=>Array.isArray(o)?o.reduce((c,u)=>(eh(u,l)?c.priority.push(u):c.default.push(u),c),{priority:[],default:[]}):{default:o,priority:[]},Md=(o,l)=>({...o,[l]:void 0}),ah=["noscript","script","style"],xs=(o,l=!0)=>l===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ru=o=>Object.keys(o).reduce((l,c)=>{const u=typeof o[c]<"u"?`${c}="${o[c]}"`:`${c}`;return l?`${l} ${u}`:u},""),th=(o,l,c,u)=>{const p=ru(c),m=nu(l);return p?`<${o} ${ya}="true" ${p}>${xs(m,u)}</${o}>`:`<${o} ${ya}="true">${xs(m,u)}</${o}>`},ih=(o,l,c=!0)=>l.reduce((u,p)=>{const m=p,f=Object.keys(m).filter(b=>!(b==="innerHTML"||b==="cssText")).reduce((b,C)=>{const k=typeof m[C]>"u"?C:`${C}="${xs(m[C],c)}"`;return b?`${b} ${k}`:k},""),x=m.innerHTML||m.cssText||"",v=ah.indexOf(o)===-1;return`${u}<${o} ${ya}="true" ${f}${v?"/>":`>${x}</${o}>`}`},""),ou=(o,l={})=>Object.keys(o).reduce((c,u)=>{const p=ks[u];return c[p||u]=o[u],c},l),nh=(o,l,c)=>{const u={key:l,[ya]:!0},p=ou(c,u);return[Da.createElement("title",p,l)]},sr=(o,l)=>l.map((c,u)=>{const p={key:u,[ya]:!0};return Object.keys(c).forEach(m=>{const x=ks[m]||m;if(x==="innerHTML"||x==="cssText"){const v=c.innerHTML||c.cssText;p.dangerouslySetInnerHTML={__html:v}}else p[x]=c[m]}),Da.createElement(o,p)}),la=(o,l,c=!0)=>{switch(o){case"title":return{toComponent:()=>nh(o,l.title,l.titleAttributes),toString:()=>th(o,l.title,l.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ou(l),toString:()=>ru(l)};default:return{toComponent:()=>sr(o,l),toString:()=>ih(o,l,c)}}},rh=({metaTags:o,linkTags:l,scriptTags:c,encode:u})=>{const p=fs(o,ps.meta),m=fs(l,ps.link),f=fs(c,ps.script);return{priorityMethods:{toComponent:()=>[...sr("meta",p.priority),...sr("link",m.priority),...sr("script",f.priority)],toString:()=>`${la("meta",p.priority,u)} ${la("link",m.priority,u)} ${la("script",f.priority,u)}`},metaTags:p.default,linkTags:m.default,scriptTags:f.default}},oh=o=>{const{baseTag:l,bodyAttributes:c,encode:u=!0,htmlAttributes:p,noscriptTags:m,styleTags:f,title:x="",titleAttributes:v,prioritizeSeoTags:b}=o;let{linkTags:C,metaTags:k,scriptTags:B}=o,$={toComponent:()=>{},toString:()=>""};return b&&({priorityMethods:$,linkTags:C,metaTags:k,scriptTags:B}=rh(o)),{priority:$,base:la("base",l,u),bodyAttributes:la("bodyAttributes",c,u),htmlAttributes:la("htmlAttributes",p,u),link:la("link",C,u),meta:la("meta",k,u),noscript:la("noscript",m,u),script:la("script",B,u),style:la("style",f,u),title:la("title",{title:x,titleAttributes:v},u)}},bs=oh,or=[],su=!!(typeof window<"u"&&window.document&&window.document.createElement),ws=class{constructor(o,l){La(this,"instances",[]);La(this,"canUseDOM",su);La(this,"context");La(this,"value",{setHelmet:o=>{this.context.helmet=o},helmetInstances:{get:()=>this.canUseDOM?or:this.instances,add:o=>{(this.canUseDOM?or:this.instances).push(o)},remove:o=>{const l=(this.canUseDOM?or:this.instances).indexOf(o);(this.canUseDOM?or:this.instances).splice(l,1)}}});this.context=o,this.canUseDOM=l||!1,l||(o.helmet=bs({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},sh={},lu=Da.createContext(sh),jt,Es=(jt=class extends T.Component{constructor(c){super(c);La(this,"helmetData");this.helmetData=new ws(this.props.context||{},jt.canUseDOM)}render(){return Da.createElement(lu.Provider,{value:this.helmetData.value},this.props.children)}},La(jt,"canUseDOM",su),jt),Jt=(o,l)=>{const c=document.head||document.querySelector("head"),u=c.querySelectorAll(`${o}[${ya}]`),p=[].slice.call(u),m=[];let f;return l&&l.length&&l.forEach(x=>{const v=document.createElement(o);for(const b in x)if(Object.prototype.hasOwnProperty.call(x,b))if(b==="innerHTML")v.innerHTML=x.innerHTML;else if(b==="cssText")v.styleSheet?v.styleSheet.cssText=x.cssText:v.appendChild(document.createTextNode(x.cssText));else{const C=b,k=typeof x[C]>"u"?"":x[C];v.setAttribute(b,k)}v.setAttribute(ya,"true"),p.some((b,C)=>(f=C,v.isEqualNode(b)))?p.splice(f,1):m.push(v)}),p.forEach(x=>{var v;return(v=x.parentNode)==null?void 0:v.removeChild(x)}),m.forEach(x=>c.appendChild(x)),{oldTags:p,newTags:m}},js=(o,l)=>{const c=document.getElementsByTagName(o)[0];if(!c)return;const u=c.getAttribute(ya),p=u?u.split(","):[],m=[...p],f=Object.keys(l);for(const x of f){const v=l[x]||"";c.getAttribute(x)!==v&&c.setAttribute(x,v),p.indexOf(x)===-1&&p.push(x);const b=m.indexOf(x);b!==-1&&m.splice(b,1)}for(let x=m.length-1;x>=0;x-=1)c.removeAttribute(m[x]);p.length===m.length?c.removeAttribute(ya):c.getAttribute(ya)!==f.join(",")&&c.setAttribute(ya,f.join(","))},lh=(o,l)=>{typeof o<"u"&&document.title!==o&&(document.title=nu(o)),js("title",l)},Fd=(o,l)=>{const{baseTag:c,bodyAttributes:u,htmlAttributes:p,linkTags:m,metaTags:f,noscriptTags:x,onChangeClientState:v,scriptTags:b,styleTags:C,title:k,titleAttributes:B}=o;js("body",u),js("html",p),lh(k,B);const $={baseTag:Jt("base",c),linkTags:Jt("link",m),metaTags:Jt("meta",f),noscriptTags:Jt("noscript",x),scriptTags:Jt("script",b),styleTags:Jt("style",C)},J={},_={};Object.keys($).forEach(q=>{const{newTags:ie,oldTags:se}=$[q];ie.length&&(J[q]=ie),se.length&&(_[q]=$[q].oldTags)}),l&&l(),v(o,J,_)},_i=null,ch=o=>{_i&&cancelAnimationFrame(_i),o.defer?_i=requestAnimationFrame(()=>{Fd(o,()=>{_i=null})}):(Fd(o),_i=null)},dh=ch,Od=class extends T.Component{constructor(){super(...arguments);La(this,"rendered",!1)}shouldComponentUpdate(l){return!Gp(l,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:l}=this.props.context;l.remove(this),this.emitChange()}emitChange(){const{helmetInstances:l,setHelmet:c}=this.props.context;let u=null;const p=Zp(l.get().map(m=>{const f={...m.props};return delete f.context,f}));Es.canUseDOM?dh(p):bs&&(u=bs(p)),c(u)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:l}=this.props.context;l.add(this),this.emitChange()}render(){return this.init(),null}},vs,uh=(vs=class extends T.Component{shouldComponentUpdate(o){return!Op(Md(this.props,"helmetData"),Md(o,"helmetData"))}mapNestedChildrenToProps(o,l){if(!l)return null;switch(o.type){case"script":case"noscript":return{innerHTML:l};case"style":return{cssText:l};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,l,c,u){return{...l,[o.type]:[...l[o.type]||[],{...c,...this.mapNestedChildrenToProps(o,u)}]}}mapObjectTypeChildren(o,l,c,u){switch(o.type){case"title":return{...l,[o.type]:u,titleAttributes:{...c}};case"body":return{...l,bodyAttributes:{...c}};case"html":return{...l,htmlAttributes:{...c}};default:return{...l,[o.type]:{...c}}}}mapArrayTypeChildrenToProps(o,l){let c={...l};return Object.keys(o).forEach(u=>{c={...c,[u]:o[u]}}),c}warnOnInvalidChildren(o,l){return Pd(Rd.some(c=>o.type===c),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Rd.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),Pd(!l||typeof l=="string"||Array.isArray(l)&&!l.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,l){let c={};return Da.Children.forEach(o,u=>{if(!u||!u.props)return;const{children:p,...m}=u.props,f=Object.keys(m).reduce((v,b)=>(v[$p[b]||b]=m[b],v),{});let{type:x}=u;switch(typeof x=="symbol"?x=x.toString():this.warnOnInvalidChildren(u,p),x){case"Symbol(react.fragment)":l=this.mapChildrenToProps(p,l);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(u,c,f,p);break;default:l=this.mapObjectTypeChildren(u,l,f,p);break}}),this.mapArrayTypeChildrenToProps(c,l)}render(){const{children:o,...l}=this.props;let c={...l},{helmetData:u}=l;if(o&&(c=this.mapChildrenToProps(o,c)),u&&!(u instanceof ws)){const p=u;u=new ws(p.context,!0),delete c.helmetData}return u?Da.createElement(Od,{...c,context:u.value}):Da.createElement(lu.Consumer,null,p=>Da.createElement(Od,{...c,context:p}))}},La(vs,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),vs);tu();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(o[u]=c[u])}return o},Hi.apply(null,arguments)}var nt;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(nt||(nt={}));const _d="popstate";function mh(o){o===void 0&&(o={});function l(u,p){let{pathname:m,search:f,hash:x}=u.location;return Ss("",{pathname:m,search:f,hash:x},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function c(u,p){return typeof p=="string"?p:lr(p)}return hh(l,c,null,o)}function Se(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function cu(o,l){if(!o){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function ph(){return Math.random().toString(36).substr(2,8)}function Wd(o,l){return{usr:o.state,key:o.key,idx:l}}function Ss(o,l,c,u){return c===void 0&&(c=null),Hi({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof l=="string"?Xt(l):l,{state:c,key:l&&l.key||u||ph()})}function lr(o){let{pathname:l="/",search:c="",hash:u=""}=o;return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Xt(o){let l={};if(o){let c=o.indexOf("#");c>=0&&(l.hash=o.substr(c),o=o.substr(0,c));let u=o.indexOf("?");u>=0&&(l.search=o.substr(u),o=o.substr(0,u)),o&&(l.pathname=o)}return l}function hh(o,l,c,u){u===void 0&&(u={});let{window:p=document.defaultView,v5Compat:m=!1}=u,f=p.history,x=nt.Pop,v=null,b=C();b==null&&(b=0,f.replaceState(Hi({},f.state,{idx:b}),""));function C(){return(f.state||{idx:null}).idx}function k(){x=nt.Pop;let q=C(),ie=q==null?null:q-b;b=q,v&&v({action:x,location:_.location,delta:ie})}function B(q,ie){x=nt.Push;let se=Ss(_.location,q,ie);b=C()+1;let ne=Wd(se,b),le=_.createHref(se);try{f.pushState(ne,"",le)}catch(ke){if(ke instanceof DOMException&&ke.name==="DataCloneError")throw ke;p.location.assign(le)}m&&v&&v({action:x,location:_.location,delta:1})}function $(q,ie){x=nt.Replace;let se=Ss(_.location,q,ie);b=C();let ne=Wd(se,b),le=_.createHref(se);f.replaceState(ne,"",le),m&&v&&v({action:x,location:_.location,delta:0})}function J(q){let ie=p.location.origin!=="null"?p.location.origin:p.location.href,se=typeof q=="string"?q:lr(q);return se=se.replace(/ $/,"%20"),Se(ie,"No window.location.(origin|href) available to create URL for href: "+se),new URL(se,ie)}let _={get action(){return x},get location(){return o(p,f)},listen(q){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(_d,k),v=q,()=>{p.removeEventListener(_d,k),v=null}},createHref(q){return l(p,q)},createURL:J,encodeLocation(q){let ie=J(q);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:B,replace:$,go(q){return f.go(q)}};return _}var Hd;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Hd||(Hd={}));function fh(o,l,c){return c===void 0&&(c="/"),gh(o,l,c)}function gh(o,l,c,u){let p=typeof l=="string"?Xt(l):l,m=Us(p.pathname||"/",c);if(m==null)return null;let f=du(o);yh(f);let x=null,v=Uh(m);for(let b=0;x==null&&b<f.length;++b)x=Nh(f[b],v);return x}function du(o,l,c,u){l===void 0&&(l=[]),c===void 0&&(c=[]),u===void 0&&(u="");let p=(m,f,x)=>{let v={relativePath:x===void 0?m.path||"":x,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};v.relativePath.startsWith("/")&&(Se(v.relativePath.startsWith(u),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(u.length));let b=rt([u,v.relativePath]),C=c.concat(v);m.children&&m.children.length>0&&(Se(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),du(m.children,l,C,b)),!(m.path==null&&!m.index)&&l.push({path:b,score:Ah(b,m.index),routesMeta:C})};return o.forEach((m,f)=>{var x;if(m.path===""||!((x=m.path)!=null&&x.includes("?")))p(m,f);else for(let v of uu(m.path))p(m,f,v)}),l}function uu(o){let l=o.split("/");if(l.length===0)return[];let[c,...u]=l,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(u.length===0)return p?[m,""]:[m];let f=uu(u.join("/")),x=[];return x.push(...f.map(v=>v===""?m:[m,v].join("/"))),p&&x.push(...f),x.map(v=>o.startsWith("/")&&v===""?"/":v)}function yh(o){o.sort((l,c)=>l.score!==c.score?c.score-l.score:Ch(l.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}const vh=/^:[\w-]+$/,xh=3,bh=2,wh=1,jh=10,Sh=-2,Vd=o=>o==="*";function Ah(o,l){let c=o.split("/"),u=c.length;return c.some(Vd)&&(u+=Sh),l&&(u+=bh),c.filter(p=>!Vd(p)).reduce((p,m)=>p+(vh.test(m)?xh:m===""?wh:jh),u)}function Ch(o,l){return o.length===l.length&&o.slice(0,-1).every((u,p)=>u===l[p])?o[o.length-1]-l[l.length-1]:0}function Nh(o,l,c){let{routesMeta:u}=o,p={},m="/",f=[];for(let x=0;x<u.length;++x){let v=u[x],b=x===u.length-1,C=m==="/"?l:l.slice(m.length)||"/",k=kh({path:v.relativePath,caseSensitive:v.caseSensitive,end:b},C),B=v.route;if(!k)return null;Object.assign(p,k.params),f.push({params:p,pathname:rt([m,k.pathname]),pathnameBase:Th(rt([m,k.pathnameBase])),route:B}),k.pathnameBase!=="/"&&(m=rt([m,k.pathnameBase]))}return f}function kh(o,l){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,u]=Eh(o.path,o.caseSensitive,o.end),p=l.match(c);if(!p)return null;let m=p[0],f=m.replace(/(.)\/+$/,"$1"),x=p.slice(1);return{params:u.reduce((b,C,k)=>{let{paramName:B,isOptional:$}=C;if(B==="*"){let _=x[k]||"";f=m.slice(0,m.length-_.length).replace(/(.)\/+$/,"$1")}const J=x[k];return $&&!J?b[B]=void 0:b[B]=(J||"").replace(/%2F/g,"/"),b},{}),pathname:m,pathnameBase:f,pattern:o}}function Eh(o,l,c){l===void 0&&(l=!1),c===void 0&&(c=!0),cu(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let u=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,x,v)=>(u.push({paramName:x,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(u.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,l?void 0:"i"),u]}function Uh(o){try{return o.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return cu(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),o}}function Us(o,l){if(l==="/")return o;if(!o.toLowerCase().startsWith(l.toLowerCase()))return null;let c=l.endsWith("/")?l.length-1:l.length,u=o.charAt(c);return u&&u!=="/"?null:o.slice(c)||"/"}function Ih(o,l){l===void 0&&(l="/");let{pathname:c,search:u="",hash:p=""}=typeof o=="string"?Xt(o):o,m;return c?(c=hu(c),c.startsWith("/")?m=Gd(c.substring(1),"/"):m=Gd(c,l)):m=l,{pathname:m,search:qh(u),hash:Lh(p)}}function Gd(o,l){let c=l.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function gs(o,l,c,u){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zh(o){return o.filter((l,c)=>c===0||l.route.path&&l.route.path.length>0)}function mu(o,l){let c=zh(o);return l?c.map((u,p)=>p===c.length-1?u.pathname:u.pathnameBase):c.map(u=>u.pathnameBase)}function pu(o,l,c,u){u===void 0&&(u=!1);let p;typeof o=="string"?p=Xt(o):(p=Hi({},o),Se(!p.pathname||!p.pathname.includes("?"),gs("?","pathname","search",p)),Se(!p.pathname||!p.pathname.includes("#"),gs("#","pathname","hash",p)),Se(!p.search||!p.search.includes("#"),gs("#","search","hash",p)));let m=o===""||p.pathname==="",f=m?"/":p.pathname,x;if(f==null)x=c;else{let k=l.length-1;if(!u&&f.startsWith("..")){let B=f.split("/");for(;B[0]==="..";)B.shift(),k-=1;p.pathname=B.join("/")}x=k>=0?l[k]:"/"}let v=Ih(p,x),b=f&&f!=="/"&&f.endsWith("/"),C=(m||f===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(b||C)&&(v.pathname+="/"),v}const hu=o=>o.replace(/\/\/+/g,"/"),rt=o=>hu(o.join("/")),Th=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),qh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Lh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Dh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const fu=["post","put","patch","delete"];new Set(fu);const Ph=["get",...fu];new Set(Ph);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(o[u]=c[u])}return o},Vi.apply(null,arguments)}const Is=T.createContext(null),Bh=T.createContext(null),St=T.createContext(null),dr=T.createContext(null),st=T.createContext({outlet:null,matches:[],isDataRoute:!1}),gu=T.createContext(null);function Rh(o,l){let{relative:c}=l===void 0?{}:l;Gi()||Se(!1);let{basename:u,navigator:p}=T.useContext(St),{hash:m,pathname:f,search:x}=vu(o,{relative:c}),v=f;return u!=="/"&&(v=f==="/"?u:rt([u,f])),p.createHref({pathname:v,search:x,hash:m})}function Gi(){return T.useContext(dr)!=null}function $i(){return Gi()||Se(!1),T.useContext(dr).location}function yu(o){T.useContext(St).static||T.useLayoutEffect(o)}function Ye(){let{isDataRoute:o}=T.useContext(st);return o?Kh():Mh()}function Mh(){Gi()||Se(!1);let o=T.useContext(Is),{basename:l,future:c,navigator:u}=T.useContext(St),{matches:p}=T.useContext(st),{pathname:m}=$i(),f=JSON.stringify(mu(p,c.v7_relativeSplatPath)),x=T.useRef(!1);return yu(()=>{x.current=!0}),T.useCallback(function(b,C){if(C===void 0&&(C={}),!x.current)return;if(typeof b=="number"){u.go(b);return}let k=pu(b,JSON.parse(f),m,C.relative==="path");o==null&&l!=="/"&&(k.pathname=k.pathname==="/"?l:rt([l,k.pathname])),(C.replace?u.replace:u.push)(k,C.state,C)},[l,u,f,m,o])}function Zt(){let{matches:o}=T.useContext(st),l=o[o.length-1];return l?l.params:{}}function vu(o,l){let{relative:c}=l===void 0?{}:l,{future:u}=T.useContext(St),{matches:p}=T.useContext(st),{pathname:m}=$i(),f=JSON.stringify(mu(p,u.v7_relativeSplatPath));return T.useMemo(()=>pu(o,JSON.parse(f),m,c==="path"),[o,f,m,c])}function Fh(o,l){return Oh(o,l)}function Oh(o,l,c,u){Gi()||Se(!1);let{navigator:p}=T.useContext(St),{matches:m}=T.useContext(st),f=m[m.length-1],x=f?f.params:{};f&&f.pathname;let v=f?f.pathnameBase:"/";f&&f.route;let b=$i(),C;if(l){var k;let q=typeof l=="string"?Xt(l):l;v==="/"||(k=q.pathname)!=null&&k.startsWith(v)||Se(!1),C=q}else C=b;let B=C.pathname||"/",$=B;if(v!=="/"){let q=v.replace(/^\//,"").split("/");$="/"+B.replace(/^\//,"").split("/").slice(q.length).join("/")}let J=fh(o,{pathname:$}),_=Gh(J&&J.map(q=>Object.assign({},q,{params:Object.assign({},x,q.params),pathname:rt([v,p.encodeLocation?p.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?v:rt([v,p.encodeLocation?p.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),m,c,u);return l&&_?T.createElement(dr.Provider,{value:{location:Vi({pathname:"/",search:"",hash:"",state:null,key:"default"},C),navigationType:nt.Pop}},_):_}function _h(){let o=Qh(),l=Dh(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},l),c?T.createElement("pre",{style:p},c):null,null)}const Wh=T.createElement(_h,null);class Hh extends T.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){console.error("React Router caught the following error during render",l,c)}render(){return this.state.error!==void 0?T.createElement(st.Provider,{value:this.props.routeContext},T.createElement(gu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vh(o){let{routeContext:l,match:c,children:u}=o,p=T.useContext(Is);return p&&p.static&&p.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=c.route.id),T.createElement(st.Provider,{value:l},u)}function Gh(o,l,c,u){var p;if(l===void 0&&(l=[]),c===void 0&&(c=null),u===void 0&&(u=null),o==null){var m;if(!c)return null;if(c.errors)o=c.matches;else if((m=u)!=null&&m.v7_partialHydration&&l.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let f=o,x=(p=c)==null?void 0:p.errors;if(x!=null){let C=f.findIndex(k=>k.route.id&&(x==null?void 0:x[k.route.id])!==void 0);C>=0||Se(!1),f=f.slice(0,Math.min(f.length,C+1))}let v=!1,b=-1;if(c&&u&&u.v7_partialHydration)for(let C=0;C<f.length;C++){let k=f[C];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(b=C),k.route.id){let{loaderData:B,errors:$}=c,J=k.route.loader&&B[k.route.id]===void 0&&(!$||$[k.route.id]===void 0);if(k.route.lazy||J){v=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}return f.reduceRight((C,k,B)=>{let $,J=!1,_=null,q=null;c&&($=x&&k.route.id?x[k.route.id]:void 0,_=k.route.errorElement||Wh,v&&(b<0&&B===0?(Xh("route-fallback"),J=!0,q=null):b===B&&(J=!0,q=k.route.hydrateFallbackElement||null)));let ie=l.concat(f.slice(0,B+1)),se=()=>{let ne;return $?ne=_:J?ne=q:k.route.Component?ne=T.createElement(k.route.Component,null):k.route.element?ne=k.route.element:ne=C,T.createElement(Vh,{match:k,routeContext:{outlet:C,matches:ie,isDataRoute:c!=null},children:ne})};return c&&(k.route.ErrorBoundary||k.route.errorElement||B===0)?T.createElement(Hh,{location:c.location,revalidation:c.revalidation,component:_,error:$,children:se(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):se()},null)}var xu=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(xu||{}),bu=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(bu||{});function $h(o){let l=T.useContext(Is);return l||Se(!1),l}function Yh(o){let l=T.useContext(Bh);return l||Se(!1),l}function Jh(o){let l=T.useContext(st);return l||Se(!1),l}function wu(o){let l=Jh(),c=l.matches[l.matches.length-1];return c.route.id||Se(!1),c.route.id}function Qh(){var o;let l=T.useContext(gu),c=Yh(),u=wu();return l!==void 0?l:(o=c.errors)==null?void 0:o[u]}function Kh(){let{router:o}=$h(xu.UseNavigateStable),l=wu(bu.UseNavigateStable),c=T.useRef(!1);return yu(()=>{c.current=!0}),T.useCallback(function(p,m){m===void 0&&(m={}),c.current&&(typeof p=="number"?o.navigate(p):o.navigate(p,Vi({fromRouteId:l},m)))},[o,l])}const $d={};function Xh(o,l,c){$d[o]||($d[o]=!0)}function Zh(o,l){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function xe(o){Se(!1)}function ef(o){let{basename:l="/",children:c=null,location:u,navigationType:p=nt.Pop,navigator:m,static:f=!1,future:x}=o;Gi()&&Se(!1);let v=l.replace(/^\/*/,"/"),b=T.useMemo(()=>({basename:v,navigator:m,static:f,future:Vi({v7_relativeSplatPath:!1},x)}),[v,x,m,f]);typeof u=="string"&&(u=Xt(u));let{pathname:C="/",search:k="",hash:B="",state:$=null,key:J="default"}=u,_=T.useMemo(()=>{let q=Us(C,v);return q==null?null:{location:{pathname:q,search:k,hash:B,state:$,key:J},navigationType:p}},[v,C,k,B,$,J,p]);return _==null?null:T.createElement(St.Provider,{value:b},T.createElement(dr.Provider,{children:c,value:_}))}function af(o){let{children:l,location:c}=o;return Fh(As(l),c)}new Promise(()=>{});function As(o,l){l===void 0&&(l=[]);let c=[];return T.Children.forEach(o,(u,p)=>{if(!T.isValidElement(u))return;let m=[...l,p];if(u.type===T.Fragment){c.push.apply(c,As(u.props.children,m));return}u.type!==xe&&Se(!1),!u.props.index||!u.props.children||Se(!1);let f={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=As(u.props.children,m)),c.push(f)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(o[u]=c[u])}return o},Cs.apply(null,arguments)}function tf(o,l){if(o==null)return{};var c={};for(var u in o)if({}.hasOwnProperty.call(o,u)){if(l.indexOf(u)!==-1)continue;c[u]=o[u]}return c}function nf(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function rf(o,l){return o.button===0&&(!l||l==="_self")&&!nf(o)}const of=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sf="6";try{window.__reactRouterVersion=sf}catch{}const lf="startTransition",Yd=qp[lf];function cf(o){let{basename:l,children:c,future:u,window:p}=o,m=T.useRef();m.current==null&&(m.current=mh({window:p,v5Compat:!0}));let f=m.current,[x,v]=T.useState({action:f.action,location:f.location}),{v7_startTransition:b}=u||{},C=T.useCallback(k=>{b&&Yd?Yd(()=>v(k)):v(k)},[v,b]);return T.useLayoutEffect(()=>f.listen(C),[f,C]),T.useEffect(()=>Zh(u),[u]),T.createElement(ef,{basename:l,children:c,location:x.location,navigationType:x.action,navigator:f,future:u})}const df=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=T.forwardRef(function(l,c){let{onClick:u,relative:p,reloadDocument:m,replace:f,state:x,target:v,to:b,preventScrollReset:C,viewTransition:k}=l,B=tf(l,of),{basename:$}=T.useContext(St),J,_=!1;if(typeof b=="string"&&uf.test(b)&&(J=b,df))try{let ne=new URL(window.location.href),le=b.startsWith("//")?new URL(ne.protocol+b):new URL(b),ke=Us(le.pathname,$);le.origin===ne.origin&&ke!=null?b=ke+le.search+le.hash:_=!0}catch{}let q=Rh(b,{relative:p}),ie=mf(b,{replace:f,state:x,target:v,preventScrollReset:C,relative:p,viewTransition:k});function se(ne){u&&u(ne),ne.defaultPrevented||ie(ne)}return T.createElement("a",Cs({},B,{href:J||q,onClick:_||m?u:se,ref:c,target:v}))});var Jd;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(Jd||(Jd={}));var Qd;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Qd||(Qd={}));function mf(o,l){let{target:c,replace:u,state:p,preventScrollReset:m,relative:f,viewTransition:x}=l===void 0?{}:l,v=Ye(),b=$i(),C=vu(o,{relative:f});return T.useCallback(k=>{if(rf(k,c)){k.preventDefault();let B=u!==void 0?u:lr(b)===lr(C);v(o,{replace:B,state:p,preventScrollReset:m,relative:f,viewTransition:x})}},[b,v,C,u,p,c,o,m,f,x])}function ei(o,l){typeof gtag<"u"&&gtag("event",o,l)}function ju(o){ei("generate_lead",{event_category:"contact",event_label:o.service||"general",language:o.language})}function ot(o){ei("phone_call_click",{event_category:"contact",phone_number:o.phone_number,location:o.location,language:o.language})}function Su(o){ei("cta_click",{event_category:"engagement",cta_label:o.label,location:o.location,language:o.language})}function Au(o){ei("service_view",{event_category:"engagement",service_name:o.service_name,service_slug:o.service_slug,language:o.language})}function Cu(o){ei("resource_view",{event_category:"engagement",resource_name:o.resource_name,resource_slug:o.resource_slug,language:o.language})}function pf(o){ei("language_switch",{event_category:"engagement",from_language:o.from,to_language:o.to})}const Kd=[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Practice Areas",path:"/services"},{label:"Resources",path:"/resources"},{label:"Success Stories",path:"/success-stories"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],Xd=[{label:"Inicio",path:"/es"},{label:"Sobre Nosotros",path:"/es/sobre-nosotros"},{label:"Servicios",path:"/es/servicios"},{label:"Recursos",path:"/es/recursos"},{label:"Historias de Éxito",path:"/es/historias-de-exito"},{label:"Blog",path:"/es/blog"},{label:"Contáctenos",path:"/es/contactenos"}];function hf(){const[o,l]=T.useState(!1),[c,u]=T.useState(!1),p=$i(),m=Ye(),f=p.pathname.startsWith("/es"),x=b=>p.pathname===b;T.useEffect(()=>{const b=()=>u(window.scrollY>20);return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]),T.useEffect(()=>{l(!1),window.scrollTo({top:0,behavior:"smooth"})},[p.pathname]);const v=()=>{pf({from:f?"es":"en",to:f?"en":"es"}),m(f?"/":"/es")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"bg-[#131E35] text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsxs("a",{href:"tel:2133881821",onClick:()=>ot({phone_number:"2133881821",location:"nav",language:f?"es":"en"}),className:"hover:text-[#D4A853] transition-colors flex items-center gap-1.5",children:[t.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),"(213) 388-1821"]}),t.jsx("a",{href:"tel:8552016898",onClick:()=>ot({phone_number:"8552016898",location:"nav",language:f?"es":"en"}),className:"hover:text-[#D4A853] transition-colors hidden sm:flex items-center gap-1.5",children:"Toll Free: (855) 201-6898"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("button",{onClick:v,className:"bg-[#D4A853] text-[#1B2A4A] px-3 py-0.5 rounded-full text-xs font-bold tracking-wide hover:bg-[#E8C97A] transition-colors cursor-pointer",children:f?"English":"Español"}),t.jsx("span",{className:"hidden sm:inline text-gray-400",children:"|"}),t.jsx("span",{className:"hidden sm:inline",children:f?"Consulta":"Consultation"})]})]})}),t.jsxs("nav",{className:`sticky top-0 z-50 transition-all duration-300 ${c?"bg-[#1B2A4A]/98 backdrop-blur-md shadow-lg":"bg-[#1B2A4A]"}`,children:[t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"flex justify-between items-center h-20",children:[t.jsxs(Y,{to:"/",className:"flex flex-col items-start group",children:[t.jsxs("span",{className:"text-white font-serif text-xl md:text-2xl font-bold tracking-tight leading-tight",children:["Law Office of ",t.jsx("span",{className:"text-[#D4A853]",children:"Todd Becraft"})]}),t.jsx("span",{className:"text-gray-400 text-[11px] tracking-[0.2em] uppercase mt-0.5",children:f?"Abogados de Inmigración de Los Ángeles":"Los Angeles Immigration Lawyers"})]}),t.jsxs("div",{className:"hidden lg:flex items-center gap-5",children:[f?Xd.map(b=>t.jsx(Y,{to:b.path,className:`nav-link relative pb-1 whitespace-nowrap ${x(b.path)?"text-[#D4A853] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4A853]":""}`,children:b.label},b.path)):Kd.map(b=>t.jsx(Y,{to:b.path,className:`nav-link relative pb-1 whitespace-nowrap ${x(b.path)?"text-[#D4A853] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4A853]":""}`,children:b.label},b.path)),t.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6 py-2.5",children:f?"Consulta":"Consultation"})]}),t.jsx("button",{onClick:()=>l(!o),className:"lg:hidden text-white p-2","aria-label":"Toggle menu",children:o?t.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):t.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]})}),t.jsx("div",{className:`lg:hidden transition-all duration-300 overflow-hidden ${o?"max-h-[500px] border-t border-white/10":"max-h-0"}`,children:t.jsxs("div",{className:"px-4 py-4 space-y-1 bg-[#1B2A4A]",children:[f?Xd.map(b=>t.jsx(Y,{to:b.path,className:`block w-full text-left px-4 py-3 rounded-md text-sm tracking-wide transition-colors ${x(b.path)?"text-[#D4A853] bg-white/5":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:b.label},b.path)):Kd.map(b=>t.jsx(Y,{to:b.path,className:`block w-full text-left px-4 py-3 rounded-md text-sm tracking-wide transition-colors ${x(b.path)?"text-[#D4A853] bg-white/5":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:b.label},b.path)),t.jsx("div",{className:"pt-3 px-4",children:t.jsx("a",{href:"tel:2133881821",className:"btn-gold w-full text-center text-xs",children:"Call (213) 388-1821"})})]})})]})]})}function ff(){return t.jsxs("footer",{className:"bg-[#131E35] text-gray-300",children:[t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:[t.jsxs("div",{className:"lg:col-span-1",children:[t.jsxs("h3",{className:"text-white font-serif text-xl font-bold mb-2",children:["Law Office of ",t.jsx("span",{className:"text-[#D4A853]",children:"Todd Becraft"})]}),t.jsx("p",{className:"text-gray-400 text-xs tracking-[0.15em] uppercase mb-6",children:"Los Angeles Immigration Lawyers"}),t.jsx("div",{className:"gold-line mb-6"}),t.jsx("p",{className:"text-sm leading-relaxed text-gray-400",children:"Defending the rights of immigrants and their families for over 20 years. Dedicated exclusively to immigration law."}),t.jsx("div",{className:"mt-6 inline-block bg-[#D4A853] text-[#1B2A4A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide",children:"Se Habla Español"})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Quick Links"}),t.jsx("ul",{className:"space-y-3",children:[{label:"Home",path:"/"},{label:"About the Firm",path:"/about"},{label:"Practice Areas",path:"/services"},{label:"Success Stories",path:"/success-stories"},{label:"Contact Us",path:"/contact"}].map(o=>t.jsx("li",{children:t.jsx(Y,{to:o.path,className:"text-gray-400 hover:text-[#D4A853] transition-colors text-sm",children:o.label})},o.path))})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Practice Areas"}),t.jsx("ul",{className:"space-y-3",children:["Asylum","Deportation Defense","Green Cards","Family Immigration","Citizenship","DACA","U-Visa"].map(o=>t.jsx("li",{children:t.jsx(Y,{to:"/services",className:"text-gray-400 hover:text-[#D4A853] transition-colors text-sm",children:o})},o))})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Contact Us"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsxs("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),t.jsx("div",{className:"text-sm",children:t.jsx("p",{className:"text-gray-300",children:"Los Angeles, California"})})]}),t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),t.jsxs("div",{className:"text-sm",children:[t.jsx("a",{href:"tel:2133881821",className:"text-gray-300 hover:text-[#D4A853] transition-colors block",children:"(213) 388-1821"}),t.jsx("a",{href:"tel:8552016898",className:"text-gray-400 hover:text-[#D4A853] transition-colors block mt-1",children:"Toll Free: (855) 201-6898"})]})]}),t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),t.jsxs("div",{className:"text-sm text-gray-400",children:[t.jsx("p",{children:"Mon – Fri: 9:00 AM – 6:00 PM"}),t.jsx("p",{children:"Sat: By Appointment"})]})]})]}),t.jsx("div",{className:"flex gap-4 mt-6",children:["facebook","linkedin","twitter"].map(o=>t.jsxs("a",{href:"#",className:"w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#D4A853] hover:text-[#D4A853] transition-colors","aria-label":o,children:[o==="facebook"&&t.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),o==="linkedin"&&t.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),o==="twitter"&&t.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})]},o))})]})]})}),t.jsx("div",{className:"border-t border-white/10",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:t.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[t.jsxs("p",{className:"text-gray-500 text-xs text-center md:text-left",children:["© ",new Date().getFullYear()," Law Office of Todd Becraft. All rights reserved."]}),t.jsx("p",{className:"text-gray-600 text-[10px] text-center md:text-right max-w-2xl leading-relaxed",children:"Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Past results do not guarantee future outcomes."})]})})})]})}const Wi=[{quote:"Attorney Todd Becraft is an exceptional and knowledgeable immigration attorney. He handled my case with such class and dignity — I won my case. I would highly recommend the Law Offices of Attny. Todd Becraft.",author:"Joseph M.",service:"via Yelp"},{quote:"I will always remember the professional legal services I received from the Law Office of Todd Becraft. All staff are caring and always work according to the instructions of their client. The services I received were far more than what I was charged.",author:"Tiwa Bob",service:"via Google"},{quote:"One hundred percent recommend as the best California immigration attorney, if not one of the best at the country level. His team together make perhaps the best team to handle cases of immigration in the country.",author:"Ariel Arauz",service:"via Google"},{quote:"He is a unique, incomparable and amazing lawyer I have never seen. He wiped tears in my eyes. I recommend to all people who have immigration problems, come talk to Mr. Todd Becraft — you will not be disappointed.",author:"Manu",service:"via Avvo"}];function gf(){const[o,l]=T.useState(0),[c,u]=T.useState(!1),p=T.useCallback(m=>{c||(u(!0),l(m),setTimeout(()=>u(!1),500))},[c]);return T.useEffect(()=>{const m=setInterval(()=>{p((o+1)%Wi.length)},6e3);return()=>clearInterval(m)},[o,p]),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"text-center mb-8",children:t.jsx("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/30",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})})}),t.jsx("div",{className:"min-h-[200px] flex items-center justify-center",children:t.jsxs("div",{className:`text-center transition-opacity duration-500 ${c?"opacity-0":"opacity-100"}`,children:[t.jsxs("blockquote",{className:"text-xl md:text-2xl font-serif text-[#1B2A4A] leading-relaxed max-w-3xl mx-auto mb-8 italic",children:['"',Wi[o].quote,'"']}),t.jsx("div",{className:"gold-line-center mb-4"}),t.jsx("p",{className:"text-[#D4A853] font-semibold tracking-wide",children:Wi[o].author}),t.jsx("p",{className:"text-gray-500 text-sm mt-1",children:Wi[o].service})]})}),t.jsx("div",{className:"flex justify-center gap-3 mt-8",children:Wi.map((m,f)=>t.jsx("button",{onClick:()=>p(f),className:`transition-all duration-300 rounded-full ${f===o?"w-8 h-2 bg-[#D4A853]":"w-2 h-2 bg-[#1B2A4A]/20 hover:bg-[#1B2A4A]/40"}`,"aria-label":`Go to testimonial ${f+1}`},f))}),t.jsx("p",{className:"text-center text-gray-400 text-xs mt-6",children:"From verified client reviews"})]})}const Zd="https://www.becraftimmigrationlaw.com",yf="https://www.makeitglow.co/api/og/becraft-immigration";function Ae({title:o,description:l,canonical:c,ogImage:u,schema:p,hreflang:m}){const f=c?`${Zd}${c}`:"",x=p?Array.isArray(p)?p:[p]:[],v=u||`${yf}?title=${encodeURIComponent(o)}&subtitle=${encodeURIComponent(l.slice(0,80))}`;return t.jsxs(uh,{children:[t.jsx("title",{children:o}),t.jsx("meta",{name:"description",content:l}),f&&t.jsx("link",{rel:"canonical",href:f}),t.jsx("meta",{property:"og:title",content:o}),t.jsx("meta",{property:"og:description",content:l}),t.jsx("meta",{property:"og:type",content:"website"}),f&&t.jsx("meta",{property:"og:url",content:f}),t.jsx("meta",{property:"og:image",content:v}),t.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),t.jsx("meta",{name:"twitter:title",content:o}),t.jsx("meta",{name:"twitter:description",content:l}),t.jsx("meta",{name:"twitter:image",content:v}),m==null?void 0:m.map(b=>t.jsx("link",{rel:"alternate",hrefLang:b.lang,href:`${Zd}${b.path}`},b.lang)),x.map((b,C)=>t.jsx("script",{type:"application/ld+json",children:JSON.stringify(b)},C))]})}const vf=[{title:"Asylum",desc:"Protection for those fleeing persecution",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})},{title:"BIA & 9th Circuit Appeals",desc:"Challenging unfavorable decisions",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"})})},{title:"Cancellation of Removal",desc:"Stopping deportation proceedings",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})})},{title:"Citizenship & Naturalization",desc:"Becoming a U.S. citizen",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})},{title:"DACA",desc:"Deferred Action for Childhood Arrivals",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})})},{title:"Deportation Defense",desc:"Fighting removal from the U.S.",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"})})},{title:"Green Cards",desc:"Adjustment of Status applications",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})})},{title:"I-601A Waivers",desc:"Provisional unlawful presence waivers",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l2.25 2.25M9.75 14.25l2.25-2.25M6 3.75v16.5h12V8.25L13.5 3.75H6z"})})},{title:"K-1 Fiance Visas",desc:"Bringing your fiance to the U.S.",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})},{title:"TPS",desc:"Temporary Protected Status",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})},{title:"U-Visa",desc:"Protection for crime victims",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})},{title:"Family Immigration",desc:"Reuniting families in the U.S.",icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})})}],xf=[{name:"Three Best Rated",year:"2024"},{name:"10 Best Immigration Attorneys",year:"AIOLA"},{name:"AVVO Top Rated",year:"10.0 Rating"},{name:"21 Best by Expertise",year:"Los Angeles"}];function eu(){const o=Ye();return t.jsxs("div",{children:[t.jsx(Ae,{title:"Los Angeles Immigration Lawyers | Law Office of Todd Becraft",description:"Expert immigration attorneys in Los Angeles. Asylum, deportation defense, green cards, citizenship, DACA, and more. Call (213) 388-1821.",canonical:"/",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:[{lang:"en",path:"/"},{lang:"es",path:"/es"},{lang:"x-default",path:"/"}]}),t.jsxs("section",{className:"relative bg-[#1B2A4A] overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.4) 1px, transparent 0)",backgroundSize:"40px 40px"}}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-8"}),t.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6",children:["Defending Your Right to a"," ",t.jsx("span",{className:"text-[#D4A853]",children:"Better Future"})]}),t.jsx("p",{className:"text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl",children:"For over 20 years, the Law Office of Todd Becraft has fought tirelessly for immigrants and their families in Los Angeles and throughout the United States."}),t.jsx("p",{className:"text-gray-400 mb-10",children:"Immigration law is all we do — and we do it exceptionally well."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[t.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Consultation"]}),t.jsx("button",{onClick:()=>o("/services"),className:"btn-outline",children:"Our Practice Areas"})]}),t.jsxs("div",{className:"mt-10 flex items-center gap-3 text-gray-400 text-sm",children:[t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),t.jsx("span",{children:"(213) 388-1821"}),t.jsx("span",{className:"text-gray-600",children:"|"}),t.jsx("span",{children:"Toll Free: (855) 201-6898"})]})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"bg-white border-b border-gray-100",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",children:xf.map(l=>t.jsxs("div",{className:"text-center group",children:[t.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4A853]/30 mb-3 group-hover:border-[#D4A853] transition-colors",children:t.jsx("svg",{className:"w-7 h-7 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-4.27 1.772 6.003 6.003 0 01-4.27-1.772"})})}),t.jsx("p",{className:"font-serif font-bold text-[#1B2A4A] text-sm",children:l.name}),t.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:l.year})]},l.name))})})}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[t.jsxs("div",{children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-6",children:["Committed to Defending"," ",t.jsx("span",{className:"text-[#D4A853]",children:"Immigrants' Rights"})]}),t.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:"For over 20 years, the Law Office of Todd Becraft has defended the rights of immigrants from around the world. Based in Los Angeles, our firm is dedicated exclusively to immigration law — it is all we do."}),t.jsx("p",{className:"text-gray-600 leading-relaxed mb-8",children:"We understand that every immigration case represents a family's future. That is why we provide personalized, compassionate legal representation to each of our clients, treating every case with the urgency and dedication it deserves."}),t.jsxs("button",{onClick:()=>o("/about"),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Learn About Our Firm",t.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]}),t.jsxs("div",{className:"relative",children:[t.jsxs("div",{className:"rounded-sm overflow-hidden",children:[t.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",alt:"Todd Becraft, Founding Attorney",className:"w-full aspect-[4/5] object-cover object-top"}),t.jsxs("div",{className:"bg-[#1B2A4A] p-6",children:[t.jsx("p",{className:"text-white font-serif font-bold",children:"Todd Becraft"}),t.jsx("p",{className:"text-[#D4A853] text-xs tracking-wider uppercase mt-1",children:"Founding Attorney"})]})]}),t.jsxs("div",{className:"hidden bg-[#1B2A4A] rounded-sm p-10 md:p-12",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"20+"}),t.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Years of Experience"})]}),t.jsxs("div",{className:"border-t border-white/10 pt-6",children:[t.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"1000s"}),t.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Families Reunited"})]}),t.jsxs("div",{className:"border-t border-white/10 pt-6",children:[t.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"100%"}),t.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Focused on Immigration"})]}),t.jsxs("div",{className:"border-t border-white/10 pt-6",children:[t.jsx("p",{className:"text-lg font-serif text-white font-semibold",children:"Se Habla Espanol"}),t.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Bilingual Legal Services"})]})]})]}),t.jsx("div",{className:"absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A853]/20 rounded-sm -z-10"})]})]})})}),t.jsx("section",{className:"section-padding bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Our Practice Areas"}),t.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"We handle the full spectrum of immigration matters, from family-based petitions to complex deportation defense and federal court appeals."})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:vf.map(l=>t.jsxs("button",{onClick:()=>o("/services"),className:"text-left p-6 bg-[#FAFAF8] rounded-sm border border-gray-100 card-hover group",children:[t.jsx("div",{className:"text-[#D4A853] mb-4 group-hover:scale-110 transition-transform origin-left",children:l.icon}),t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),t.jsx("p",{className:"text-gray-500 text-sm",children:l.desc})]},l.title))}),t.jsx("div",{className:"text-center mt-12",children:t.jsx("button",{onClick:()=>o("/services"),className:"btn-gold",children:"View All Practice Areas"})})]})}),t.jsx("section",{className:"section-padding bg-warm-gray",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-4",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold",children:"What Our Clients Say"})]}),t.jsx(gf,{})]})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16 md:py-20",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("div",{className:"text-center mb-12",children:t.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold",children:["Thousands of Families ",t.jsx("span",{className:"text-[#D4A853]",children:"Reunited"})]})}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[{number:"20+",label:"Years of Practice"},{number:"12",label:"Practice Areas"},{number:"4",label:"Dedicated Attorneys & Staff"},{number:"2",label:"Languages Spoken"}].map(l=>t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-4xl md:text-5xl font-serif text-[#D4A853] font-bold mb-2",children:l.number}),t.jsx("p",{className:"text-gray-300 text-sm",children:l.label})]},l.label))})]})}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Schedule Your Consultation Today"}),t.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Take the first step toward securing your future. Our experienced immigration attorneys are ready to evaluate your case and discuss your options."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[t.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Call (213) 388-1821"]}),t.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Send Us a Message"})]}),t.jsxs("p",{className:"mt-6 text-sm text-gray-500",children:["Toll Free: ",t.jsx("a",{href:"tel:8552016898",className:"text-[#D4A853] hover:underline",children:"(855) 201-6898"}),t.jsx("span",{className:"mx-3 text-gray-300",children:"|"}),t.jsx("span",{className:"text-[#D4A853] font-semibold",children:"Se Habla Espanol"})]})]})})]})}const tt=[{name:"Todd Becraft",title:"Founding Attorney",photo:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",highlight:"20+ Years in Immigration Law",bio:["Todd Becraft is the founding attorney of the Law Office of Todd Becraft, where he has dedicated his career exclusively to immigration law for over 20 years. He is the past Chair of the AILA SoCal Chapter and former Chair of the Los Angeles County Bar Immigration Section.",'In 2009, Todd assumed the immigration practice of Immigration Judge Timothy Everett after Judge Everett left private practice to work for Immigration and Customs Enforcement. Prior to that, Mr. Becraft worked closely with Judy Wood, widely known as "Saint Judy," whose remarkable advocacy was portrayed in the motion picture of the same name.',"Mr. Becraft has successfully represented thousands of clients in asylum, deportation defense, cancellation of removal, family-based immigration, and federal court appeals before the Board of Immigration Appeals and the Ninth Circuit Court of Appeals."]},{name:"Dennis Escobar",title:"Lead Paralegal & Office Manager",photo:"https://images.makeitglow.co/projects/becraft-immigration/8f93bc42d26b873e-dennis-escobar-portrait-becraft-immigration-law-980x1337.webp",highlight:"25+ Years in Immigration Law",bio:["For more than 25 years, Dennis Escobar has dedicated his career to immigration law. As the Lead Paralegal and Office Manager, Dennis manages the daily operations of the office while working closely with attorneys and clients on nearly every stage of a case.","As an immigrant himself, Dennis knows firsthand the challenges families face. He is admired for his patience, dedication, and compassion, always taking the time to listen and address client concerns with care."]},{name:"Gianina Haro",title:"Paralegal",highlight:"30+ Years in Immigration Law",photo:"https://images.makeitglow.co/projects/becraft-immigration/4baa423944dd3952-gianina-haro-portrait-becraft-immigration-law-980x1337.webp",bio:["With over thirty years of experience in immigration law, Gianina Haro is a cornerstone of client support at the Law Office of Todd Becraft. She specializes in preparing filings, gathering evidence, and managing the details that keep cases moving forward seamlessly.","Fluent in both English and Spanish, Gianina bridges communication gaps, helping clients feel comfortable and understood. She works across a wide range of immigration matters, including asylum applications, family-based petitions, waivers, and naturalization."]},{name:"Imani Machado",title:"Marketing Director & Client Specialist",photo:"https://images.makeitglow.co/projects/becraft-immigration/c309104b568a8ee4-imani-machado-portrait-becraft-immigration-law-980x1337.webp",bio:["Imani Machado brings creativity, strategy, and compassion to her role as Marketing Director and Client Specialist. With over a decade of experience in legal marketing and client relations, she ensures that the firm's mission of advocacy extends beyond the courtroom and into every interaction with clients and the broader community.","Imani manages outreach efforts, develops educational resources, and works directly with clients to provide support and guidance throughout their immigration journey. Her dedication extends into the broader community, where she partners with organizations and initiatives that serve immigrant families across Southern California."]}],bf=[{title:"20+ Years of Experience",desc:"Two decades of dedicated immigration law practice means we have seen and successfully handled virtually every type of case.",icon:"clock"},{title:"Immigration Law Exclusively",desc:"We do not dabble in other areas. Immigration is our sole focus, giving us unmatched depth of knowledge.",icon:"focus"},{title:"Personalized Attention",desc:"Every case is personally handled by our attorneys. You work directly with experienced lawyers, not junior staff.",icon:"person"},{title:"Bilingual Services",desc:"Our team is fully bilingual in English and Spanish. Nothing is lost in translation when your future is on the line.",icon:"language"},{title:"Proven Track Record",desc:"Thousands of successful cases, including complex asylum claims and deportation defenses other firms turned away.",icon:"check"},{title:"Compassionate Advocacy",desc:"We understand the emotional toll of immigration proceedings. Our team provides genuine empathy and support.",icon:"heart"}];function wf({type:o}){const l="w-6 h-6";switch(o){case"clock":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})});case"focus":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})});case"person":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})});case"language":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})});case"check":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})});case"heart":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})});default:return null}}function jf(){const o=Ye();return t.jsxs("div",{children:[t.jsx(Ae,{title:"About | Law Office of Todd Becraft",description:"Meet Attorney Todd Becraft — decades of immigration law experience in Los Angeles helping families, DACA recipients, asylum seekers, and more.",canonical:"/about",schema:{"@context":"https://schema.org","@type":"AboutPage",name:"About Todd Becraft"}}),t.jsxs("section",{className:"relative overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0",children:[t.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/d4f20bfcce771e9e-unnamed-10-scaled.webp",alt:"The Becraft Immigration Law team",className:"hidden md:block w-full h-full object-cover"}),t.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/team-9x16.jpg",alt:"The Becraft Immigration Law team",className:"block md:hidden w-full h-full object-cover"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/80 to-[#1B2A4A]/40"})]}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36",children:t.jsxs("div",{className:"max-w-xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6 leading-tight",children:["The People Behind ",t.jsx("span",{className:"text-[#D4A853]",children:"Your Case"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed mb-8",children:"A team that has dedicated their careers — over 50 combined years — exclusively to immigration law. We don't just handle cases. We change lives."}),t.jsx("button",{onClick:()=>o("/contact"),className:"btn-gold",children:"Meet With Us Today"})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"py-20 md:py-28 bg-white",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid lg:grid-cols-5 gap-16 items-start",children:[t.jsx("div",{className:"lg:col-span-2",children:t.jsxs("div",{className:"sticky top-28",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4 leading-tight",children:"Two Decades of Fighting for What's Right"}),t.jsxs("div",{className:"flex items-center gap-4 mt-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"20+"}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Years"})]}),t.jsx("div",{className:"w-px h-12 bg-gray-200"}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"1000s"}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Cases Won"})]}),t.jsx("div",{className:"w-px h-12 bg-gray-200"}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"100%"}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Immigration"})]})]})]})}),t.jsxs("div",{className:"lg:col-span-3 space-y-6",children:[t.jsx("p",{className:"text-gray-600 leading-relaxed text-lg",children:"The Law Office of Todd Becraft was founded with a clear mission: to provide exceptional legal representation to immigrants and their families. Over the past two decades, that mission has never wavered."}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:"From our offices on Wilshire Boulevard in the heart of Los Angeles, we have helped thousands of individuals navigate the complex U.S. immigration system. Whether our clients are seeking asylum from persecution, fighting deportation, reuniting with family members, or pursuing the dream of U.S. citizenship, we bring the same level of dedication, expertise, and personal attention to every case."}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:"What sets us apart is our exclusive focus on immigration law. While many firms spread their attention across multiple practice areas, we have chosen to dedicate our entire practice to immigration. This singular focus means we stay at the forefront of constantly changing immigration law and policy, giving our clients a critical advantage."}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Our team members come from diverse backgrounds, and several are immigrants themselves. We understand the challenges our clients face — not just legally, but personally. That lived experience shapes our empathy, our urgency, and our unwavering commitment to every person who walks through our doors."})]})]})})}),t.jsx("section",{className:"bg-[#1B2A4A] overflow-hidden",children:t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"grid lg:grid-cols-2",children:[t.jsxs("div",{className:"relative h-[500px] lg:h-auto",children:[t.jsx("img",{src:tt[0].photo,alt:tt[0].name,className:"absolute inset-0 w-full h-full object-cover object-top"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B2A4A]/30"})]}),t.jsxs("div",{className:"px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center",children:[t.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase mb-3",style:{fontFamily:"'Inter', sans-serif"},children:tt[0].title}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-2",children:tt[0].name}),tt[0].highlight&&t.jsxs("p",{className:"text-[#D4A853]/70 text-sm mb-8 flex items-center gap-2",children:[t.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),tt[0].highlight]}),t.jsx("div",{className:"w-12 h-px bg-[#D4A853]/40 mb-8"}),t.jsx("div",{className:"space-y-4",children:tt[0].bio.map((l,c)=>t.jsx("p",{className:"text-gray-300 leading-relaxed text-[15px]",children:l},c))}),t.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[t.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AILA SoCal Past Chair"}),t.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Three Best Rated"}),t.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AVVO 10.0"}),t.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Pro Bono Award"})]})]})]})})}),t.jsx("section",{className:"py-20 md:py-28 bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Our Team"}),t.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Every member of our team shares the same commitment: fighting for our clients' futures."})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:tt.slice(1).map(l=>t.jsxs("div",{className:"group",children:[t.jsxs("div",{className:"relative overflow-hidden rounded-sm mb-6",children:[t.jsx("img",{src:l.photo,alt:l.name,className:"w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"}),t.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[t.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.15em] uppercase mb-1",style:{fontFamily:"'Inter', sans-serif"},children:l.title}),t.jsx("h3",{className:"text-xl font-serif text-white font-bold",children:l.name}),l.highlight&&t.jsx("p",{className:"text-white/50 text-xs mt-1",children:l.highlight})]})]}),t.jsx("div",{className:"space-y-3",children:l.bio.map((c,u)=>t.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:c},u))})]},l.name))})]})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("div",{className:"text-center mb-10",children:t.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase",style:{fontFamily:"'Inter', sans-serif"},children:"Recognition"})}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{name:"Three Best Rated",detail:"Best Immigration Lawyers in Los Angeles"},{name:"10 Best",detail:"American Institute of Legal Counsel"},{name:"AVVO 10.0",detail:"Superb Rating — Top Attorney"},{name:"Expertise",detail:"21 Best Immigration Lawyers in LA"}].map(l=>t.jsxs("div",{className:"text-center py-6 border border-white/5 rounded-sm hover:border-[#D4A853]/20 transition-colors",children:[t.jsx("svg",{className:"w-6 h-6 text-[#D4A853] mx-auto mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),t.jsx("h3",{className:"text-white font-serif font-bold text-sm",children:l.name}),t.jsx("p",{className:"text-gray-500 text-xs mt-1",children:l.detail})]},l.name))})]})}),t.jsx("section",{className:"py-20 md:py-28 bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Why Choose Us"})]}),t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:bf.map(l=>t.jsxs("div",{className:"flex gap-5",children:[t.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:t.jsx(wf,{type:l.icon})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),t.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:l.desc})]})]},l.title))})]})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Ready to Discuss Your Case?"}),t.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us today for a free, confidential consultation with an experienced immigration attorney."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),t.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline",children:"Send a Message"})]})]})})]})}const Sf=[{title:"Asylum",slug:"asylum",description:"Protection for individuals who have been persecuted or fear persecution in their home country.",details:["We represent individuals seeking asylum based on persecution due to race, religion, nationality, political opinion, or membership in a particular social group.","Our firm has extensive experience preparing compelling asylum applications, including gathering country condition evidence, organizing supporting documentation, and preparing clients for their asylum interviews and hearings.","We handle both affirmative asylum cases filed with USCIS and defensive asylum claims in immigration court. Our attorneys have a strong track record of winning asylum cases that other firms considered unwinnable."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})},{title:"BIA & 9th Circuit Appeals",slug:"bia-and-9th-circuit-appeals",description:"Challenging unfavorable immigration court decisions at the appellate level.",details:["When an immigration judge issues an unfavorable decision, our attorneys are experienced in filing appeals with the Board of Immigration Appeals (BIA) and, when necessary, petitions for review with the Ninth Circuit Court of Appeals.","Appellate immigration work requires a different skill set than trial-level representation. Our attorneys are skilled legal writers who know how to identify reversible errors, construct persuasive legal arguments, and present cases effectively to appellate judges.","We have successfully reversed deportation orders and secured new hearings for clients whose cases were improperly decided at the trial level."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"})})},{title:"Cancellation of Removal",slug:"cancellation-of-removal",description:"A critical form of relief for individuals facing deportation who have deep ties to the United States.",details:["Cancellation of removal is a powerful defense for individuals in removal proceedings who can demonstrate long-term residence in the U.S. and strong equities such as U.S. citizen or permanent resident family members.","For non-permanent residents, we help clients demonstrate at least 10 years of continuous physical presence, good moral character, and that their removal would result in exceptional and extremely unusual hardship to a qualifying U.S. citizen or permanent resident relative.","For permanent residents, we assist those with 7 years of continuous residence and 5 years of lawful permanent resident status who can show they deserve relief despite any criminal history."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})})},{title:"Citizenship & Naturalization",slug:"citizenship-and-naturalization",description:"Guiding you through the process of becoming a United States citizen.",details:["Becoming a U.S. citizen is one of the most important milestones in an immigrant's journey. Our firm guides clients through every step of the naturalization process, from determining eligibility to preparing for the citizenship interview and exam.","We help with N-400 applications, addressing potential issues with continuous residence, physical presence, good moral character requirements, and any prior immigration or criminal history that could complicate the process.","We also assist individuals who may be eligible for citizenship through derivation or acquisition, including those who may already be citizens without realizing it."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})},{title:"DACA",slug:"daca",description:"Deferred Action for Childhood Arrivals — protecting those who were brought to the U.S. as children.",details:["The Law Office of Todd Becraft has helped countless DACA recipients with their initial applications and renewals. We understand the unique challenges facing Dreamers and are committed to helping them maintain their protected status.","Our services include initial DACA applications (when available), timely renewals to prevent gaps in work authorization, advance parole requests, and addressing any complications that may arise with DACA status.","We stay at the forefront of the constantly changing legal landscape surrounding DACA and ensure our clients are informed of any developments that may affect their status."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})})},{title:"Deportation & Removal Defense",slug:"deportation-and-removal",description:"Aggressive defense for individuals facing removal from the United States.",details:["Facing deportation is one of the most frightening experiences an immigrant can endure. Our attorneys are seasoned courtroom advocates who fight aggressively to keep families together and protect our clients' rights in immigration court.","We explore every possible form of relief available, including asylum, withholding of removal, protection under the Convention Against Torture, cancellation of removal, adjustment of status, voluntary departure, and prosecutorial discretion.","Our attorneys regularly appear before immigration courts in Los Angeles and throughout California, and we are prepared to take cases to the Board of Immigration Appeals and the Ninth Circuit when necessary."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"})})},{title:"Green Cards / Adjustment of Status",slug:"green-card-adjustment-of-status",description:"Helping eligible individuals obtain lawful permanent resident status in the United States.",details:["Whether through a family relationship, employment, or other qualifying category, we guide our clients through the complex process of obtaining their green cards.","Our services include family-based adjustment of status, consular processing for those outside the U.S., employment-based green cards, and green cards through special categories such as VAWA and the diversity visa lottery.","We carefully evaluate each client's eligibility, prepare thorough applications, and represent clients at their adjustment of status interviews to ensure the best possible outcome."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})})},{title:"I-601A Provisional Waivers",slug:"i-601a-provisional-waivers",description:"Waiving the unlawful presence bar so families can stay together during the visa process.",details:["The I-601A provisional unlawful presence waiver allows certain individuals who are immediate relatives of U.S. citizens to apply for a waiver of the 3-year and 10-year unlawful presence bars before departing the United States for their consular interview.","This waiver is critical because it significantly reduces the time families must be separated during the immigration process. Our attorneys have extensive experience demonstrating the extreme hardship to U.S. citizen spouses or parents that is required for waiver approval.","We handle the entire process from evaluating eligibility, preparing the waiver application with compelling hardship evidence, through to coordinating with the U.S. consulate for the immigrant visa interview."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l2.25 2.25M9.75 14.25l2.25-2.25M6 3.75v16.5h12V8.25L13.5 3.75H6z"})})},{title:"K-1 Fiance Visas",slug:"k-1-fiance-visa",description:"Bringing your fiance to the United States so you can marry and start your life together.",details:["The K-1 fiancé visa allows the foreign-citizen fiancé of a U.S. citizen to travel to the United States and marry their U.S. citizen petitioner within 90 days of arrival.","Our firm handles all aspects of the K-1 visa process, including preparing and filing the I-129F petition, gathering evidence of the bona fide relationship, coordinating with the National Visa Center, and preparing for the consular interview.","After marriage, we continue to assist with the adjustment of status process to obtain permanent resident status, as well as the removal of conditions on residence two years after the green card is issued."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})},{title:"Temporary Protected Status (TPS)",slug:"temporary-protected-status-tps",description:"Temporary protection for nationals of designated countries affected by armed conflict or natural disaster.",details:["TPS provides temporary lawful status and work authorization to nationals of countries that have been designated due to ongoing armed conflict, environmental disaster, or other extraordinary conditions.","Our firm assists clients with initial TPS applications, timely re-registrations, and associated employment authorization documents. We also advise TPS holders on pathways to more permanent immigration status when available.","We closely monitor TPS designations and terminations to ensure our clients are prepared for any changes that may affect their status."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})},{title:"U-Visa",slug:"u-visa",description:"Immigration relief for victims of certain crimes who have cooperated with law enforcement.",details:["The U-Visa provides immigration benefits to victims of qualifying crimes who have suffered substantial mental or physical abuse and who are helpful to law enforcement in the investigation or prosecution of criminal activity.","Our attorneys work closely with clients to document their victimization, obtain law enforcement certifications, and build compelling U-Visa petitions. We understand the sensitive nature of these cases and provide compassionate, trauma-informed representation.","We also assist U-Visa holders with work authorization, derivative petitions for qualifying family members, and adjustment of status to permanent residence after three years in U nonimmigrant status."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})},{title:"Family Immigration",description:"Reuniting families through family-based immigration petitions and sponsorship.",details:["Family unity is at the heart of U.S. immigration law, and our firm has helped thousands of families navigate the process of sponsoring loved ones for immigration to the United States.","We handle all categories of family-based immigration, including immediate relative petitions (spouses, minor children, and parents of U.S. citizens), family preference petitions, and the associated adjustment of status or consular processing applications.","Our attorneys address complex issues that can arise in family cases, including prior immigration violations, criminal history, fraud waivers, age-out issues, and the affidavit of support requirements."],icon:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})})}];function Af(){const o=Ye(),[l,c]=T.useState(null);return t.jsxs("div",{children:[t.jsx(Ae,{title:"Practice Areas | Law Office of Todd Becraft",description:"Full-service immigration law firm in Los Angeles. Asylum, BIA appeals, cancellation of removal, green cards, citizenship, DACA, U-Visa, and more.",canonical:"/services",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Practice ",t.jsx("span",{className:"text-[#D4A853]",children:"Areas"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Our firm handles the full range of immigration matters. From asylum and deportation defense to family reunification and citizenship, we have the experience and dedication your case demands."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-5xl mx-auto",children:t.jsx("div",{className:"space-y-6",children:Sf.map(u=>{const p=l===u.title;return t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[t.jsxs("button",{onClick:()=>c(p?null:u.title),className:"w-full text-left p-6 md:p-8 flex items-start gap-5",children:[t.jsx("div",{className:"flex-shrink-0 w-14 h-14 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:u.icon}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-1",children:u.title}),t.jsx("p",{className:"text-gray-500 text-sm",children:u.description})]}),t.jsx("div",{className:"flex-shrink-0 mt-1",children:t.jsx("svg",{className:`w-5 h-5 text-[#D4A853] transition-transform duration-300 ${p?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})})]}),t.jsx("div",{className:`transition-all duration-300 overflow-hidden ${p?"max-h-[600px] opacity-100":"max-h-0 opacity-0"}`,children:t.jsxs("div",{className:"px-6 md:px-8 pb-8 ml-0 md:ml-[4.75rem]",children:[t.jsx("div",{className:"gold-line mb-5"}),t.jsx("div",{className:"space-y-4",children:u.details.map((m,f)=>t.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:m},f))}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[u.slug&&t.jsxs(Y,{to:`/services/${u.slug}`,onClick:m=>m.stopPropagation(),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Learn More",t.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),t.jsx("button",{onClick:m=>{m.stopPropagation(),o("/contact")},className:"inline-flex items-center text-gray-500 font-semibold text-sm tracking-wide uppercase hover:text-[#1B2A4A] transition-colors",children:"Discuss Your Case"})]})]})})]},u.title)})})})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Not Sure Which Service You Need?"}),t.jsx("p",{className:"text-gray-300 mb-8",children:"Every immigration case is unique. Contact us for a consultation and we will help you understand your options."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),t.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline",children:"Contact Us Online"})]})]})})]})}const Cf=[{slug:"asylum",title:"Asylum",subtitle:"Understanding the Process and Challenges",metaDescription:"Explore the concept of asylum and its importance for individuals seeking safety in a new country. Learn the essentials now.",intro:"Federal law in Title 8 U.S. Code § 1158 establishes that any alien physically present in or arriving in the United States, regardless of status, may apply for asylum. Also governed by the UN's 1948 Universal Declaration of Human Rights, UNHCR Refugee Convention of 1951, and the Refugee Act of 1980, a refugee is defined as any person outside their country of nationality who is unable or unwilling to avail themselves of their country's protection due to persecution or well-founded fear of persecution based on nationality, religion, race, membership in a particular social group, or political opinion.",sections:[{heading:"Affirmative Process",paragraphs:["To apply through the affirmative process, you must be physically present in the United States and can apply regardless of your method of arrival or current immigration status. You must apply within one year of your last arrival date, unless circumstances materially changed or extraordinary circumstances caused a delay.","File Form I-589, Application for Asylum and Withholding of Removal with USCIS. After USCIS receives Form I-589, you will receive an acknowledgment of receipt and a notice to visit the nearest Application Support Center for fingerprinting.","Interview priority order: (1) previously scheduled but rescheduled cases; (2) applications pending 21 days or less; (3) all other pending applications, newest first. You may bring an attorney or accredited representative. Spouses and children seeking derivative asylum must also attend. Non-English speakers must bring an interpreter. Interviews typically last about one hour."]},{heading:"A Person Is Not Eligible to Apply for Asylum If They:",bullets:["Do not follow the one-year filing deadline for Form I-589","Had an immigration judge or the BIA deny their previous asylum application","Can be removed to a safe third country under a two-party or multi-party agreement"]},{heading:"Defensive Process",paragraphs:["The defensive process occurs when an alien requests asylum as a defense against removal. Cases are heard in adversarial proceedings before an immigration judge, who hears from both the alien and an ICE attorney.","There are generally two ways people can be placed into defensive asylum processing: (1) referral from USCIS after an affirmative asylum denial; or (2) apprehension without proper documents and a determination that credible fear exists."]},{heading:"Asylum Merits Interview",paragraphs:["Aliens in expedited removal who indicate intent to apply for asylum may be referred to USCIS for credible fear screenings. If credible fear is found, USCIS can either retain and schedule an Asylum Merits Interview, or issue a Notice to Appear. If no credible fear is found, the alien can request review by an immigration judge. This procedure applies only to adults and families placed in expedited removal after May 31, 2022."]}],cta:"Do you need help applying for asylum in the greater Los Angeles area? The Law Office of Todd Becraft understands the most effective ways to handle these cases, so we will be able to help you achieve the most favorable outcome for your particular case. Our firm works very closely with every person we represent, so you can know that we will be by your side the entire time."},{slug:"bia-and-9th-circuit-appeals",title:"BIA and 9th Circuit Appeals",subtitle:"9th Circuit Appeals and Immigration Decisions",metaDescription:"Understand the process of 9th Circuit appeals and how to address adverse immigration decisions effectively.",intro:"Once the Department of Homeland Security or an Immigration Judge has rendered a decision, there may be an administrative appeal to the Administrative Appeals Office (AAO) of the Department of Homeland Security or the Board of Immigration Appeals (BIA) of the Department of Justice. If the BIA denies your appeal, the next step is the Ninth Circuit Court of Appeals.",sections:[{heading:"How BIA Cases Work",paragraphs:["You must file a BIA appeal within 30 days of an immigration judge's denial using Form EOIR-26. The BIA is the highest administrative body for interpreting and applying immigration laws, located at EOIR headquarters in Falls Church, Virginia, with nationwide jurisdiction. BIA decisions are binding on all DHS officers and immigration judges unless modified by the Attorney General or a federal court.","The BIA reviews all evidence submitted to the immigration judge but does not consider new evidence. A decision typically takes at least six months, often more than a year.","The BIA may: send the case back to the immigration judge with new instructions; overturn the original decision (which could mean relief from deportation); or deny outright. If denied, the next step is the Ninth Circuit Court of Appeals."]},{heading:"How Ninth Circuit Cases Work",paragraphs:["The Ninth Circuit handles cases in California, Hawaii, Alaska, Washington, Oregon, Arizona, Idaho, Montana, and Nevada. After a BIA denial, file a Petition for Review with the Ninth Circuit.","Important: Filing with the Ninth Circuit does NOT automatically delay a removal order. You must also file a Motion to Stay Removal. Like the BIA, the Ninth Circuit does not consider new evidence. Decisions typically take more than two years.","If the Ninth Circuit rules in your favor, the court may grant permission to remain in the US, or send the case back to the BIA or immigration judge (a second denial remains possible). If denied, options include: requesting rehearing within 45 days; requesting rehearing en banc (rarely granted); or filing a writ of certiorari with the Supreme Court (even rarer)."]}],cta:"Our firm will invest the necessary time to fully prepare for your hearing and present the strongest possible arguments in your case. Call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles BIA and 9th Circuit appeals attorney."},{slug:"cancellation-of-removal",title:"Cancellation of Removal",subtitle:"A Lifeline for Noncitizens",metaDescription:"Understand cancellation of removal under INA for non-permanent residents and how it can protect against deportation.",intro:"Non-LPR cancellation of removal under INA § 240A(b)(1) is a defensive application only — you cannot apply affirmatively to USCIS. It is only available when you are already facing removal in immigration court. When granted, the person receives a green card.",sections:[{heading:"Cancellation of Removal Eligibility",paragraphs:["To qualify for standard cancellation of removal, you must prove all three of the following:"],numbered:["Prior to receiving a Notice to Appear, you maintained continuous physical presence in the US for 10 or more years and were a person of good moral character (INA § 101(f)) during that period","You were not convicted of any offense under INA § 212(a)(2), INA § 237(a)(2), or INA § 237(a)(3)","Removal would cause exceptional and extremely unusual hardship to a US citizen or LPR spouse, parent, or child, and you deserve a favorable exercise of discretion"]},{heading:"Alternative Eligibility — VAWA (Battered or Subjected to Cruelty)",bullets:["Battered or subjected to extreme cruelty by a US citizen or LPR spouse or parent","Continuous physical presence for 3 or more years, good moral character during that period","Not inadmissible under certain INA sections; not convicted of an aggravated felony","Removal would result in extreme hardship to them or their child"]},{heading:"Satisfying the 10-Year Residence Requirement",paragraphs:["Rent receipts, credit card statements, and pay stubs can help prove continuous residence. Affidavits from friends or family are acceptable when hard evidence is unavailable. Leaving the country for more than 90 days, or trips totaling more than 180 days, can negatively impact the 10-year calculation. Receiving a Notice to Appear stops the 10-year clock."]},{heading:"Satisfying the Qualifying Relative Requirement",paragraphs:["The qualifying relative must be a spouse, parent, or child who is either a US citizen or a lawful permanent resident. A child must be unmarried and under 21."]},{heading:"Satisfying the Exceptional and Extremely Unusual Hardship Requirement",paragraphs:["Hardship must go beyond simple sadness at separation. Unavailability of medical care in the home country often qualifies. Language barriers or a lack of support structures for qualifying relatives can also be factors in your favor."]},{heading:"Satisfying the Good Moral Character Requirement",paragraphs:["Your criminal record will be reviewed; convictions are damaging. Minor crimes can sometimes be overcome through evidence of volunteer service or steady employment."]}],cta:"You may call (213) 388-1821 or contact us online to arrange a consultation with our Los Angeles cancellation of removal lawyer."},{slug:"citizenship-and-naturalization",title:"Citizenship and Naturalization",subtitle:"The Citizenship and Naturalization Process Explained",metaDescription:"Understand Citizenship and Naturalization requirements. Find essential information to help you through the journey.",intro:"Naturalization is the process by which US citizenship is granted to a lawful permanent resident after satisfying the requirements of the INA. Acquisition of citizenship occurs through US citizen parents either at birth or after birth but before age 18.",sections:[{heading:"When Citizenship Is Available",bullets:["Valid green card/LPR status plus 5 years residing in the US","Married to a US citizen plus 3 years residing in the US","LPR status, served in the US military, plus 3 years in the US","Married to a US citizen being transferred abroad by a government agency, armed forces, or multinational company"]},{heading:"Requirements Under Title 8 U.S. Code § 1427(a)",bullets:["Resided for a minimum of 5 continuous years in the US after lawful admission for permanent residence, with physical presence for at least half that time","Resided continuously within the US from the date of application up to admission to citizenship","Been and still are a person of good moral character, abiding by the principles of the Constitution, well disposed to good order and happiness"]},{heading:"To Apply, You Must:",bullets:["Be at least 18 years of age when filing","Be able to read, write, and speak basic English","Prove understanding and knowledge of US history and government","Be willing to take the Oath of Allegiance"]},{heading:"The Naturalization Process",paragraphs:["Submit your application to USCIS. You may be required to submit biometric data. You will then attend an interview with a USCIS immigration officer and take a US government and history test. Benefits of citizenship include the right to vote, priority to petition for family members, the ability to travel with a US passport, eligibility for federal jobs, and much more."]},{heading:"Common Problems to Avoid",bullets:["Errors or inconsistencies in Form N-400","Outstanding warrants or criminal charges or convictions","Failure to fulfill any requirements of citizenship","Inconsistencies in prior immigration applications","Fraud or mistakes in the green card process","Any incomplete citizenship documents"]}],cta:"Our firm has been helping immigrants for more than a decade. You can call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles citizenship and naturalization lawyer."},{slug:"daca",title:"DACA",subtitle:"Insights into Immigration Relief Options",metaDescription:"Understand the complexities of DACA and how it still offers valuable benefits for eligible individuals in the U.S. today.",intro:"The US District Court for the Southern District of Texas imposed an injunction on July 16, 2021 (affirmed by the 5th Circuit) permanently enjoining DHS from granting DACA to new applicants, but it did not cancel existing DACA status for people in good standing. Benefits for eligible individuals include a two-year lawful status to reside in the US, the ability to apply for driver's licenses, and the ability to seek approval to leave and re-enter the country.",sections:[{heading:"DACA Requirements",paragraphs:["To be eligible for DACA, you must meet all of the following criteria:"],bullets:["Under 31 years of age on June 15, 2012 (born on or after June 16, 1981)","Came to the United States before reaching 16 years of age","Lived continuously in the United States since June 15, 2007","Physically present in the United States at time of filing and on June 15, 2012","Did not have lawful immigration status on June 15, 2012, or at time of filing","Currently enrolled in school, graduated high school or obtained a certificate of completion, obtained a GED, or were an honorably discharged veteran","Have not been convicted of a felony, significant misdemeanor, or three or more other misdemeanors, and do not pose a threat to national security or public safety"]},{heading:"DACA Filing Process",paragraphs:["You will need to collect and submit the following documentation:"],bullets:["Proof of identity: passport, national ID, birth certificate with photo ID, school or military ID, or a US government immigration document with photo","Proof of entry before age 16: passport with admission stamp, school records, Form I-94, travel records, INS/DHS document stating entry date, employment records, hospital or medical records","Proof of immigration status as of June 15, 2012","Proof of continuous presence in the US on June 15, 2012 and continuous residence since June 15, 2007 (rent receipts, utility bills, employment records, school records, bank transactions, etc.)","Proof of student status at time of request if applicable (school records, diploma, GED certificate)","Complete Form I-821D, Form I-765, and Form I-675 Worksheet; mail to the appropriate USCIS Lockbox; visit an ASC for biometric services"]}],cta:"Our firm understands how frightening many aspects of this process can be for people, but we will know how to walk you through the entire journey and make everything as simple as possible. You can call (213) 388-1821 or contact us online to receive a consultation with our Los Angeles DACA lawyer."},{slug:"deportation-and-removal",title:"Deportation and Removal",subtitle:"What You Need to Know",metaDescription:"Understand Deportation and Removal under U.S. law. Know your rights and options if facing removal proceedings.",intro:"Title 8 U.S. Code § 1229a governs removal proceedings. Few prospects can be more frightening for people who are lawful permanent residents or otherwise satisfying legal requirements to remain in the United States, because immigration officials may be preparing to argue that a person needs to be removed immediately. A deportation case ends with either deportation or remaining eligible to live and work in the US.",sections:[{heading:"When DHS Commonly Begins Deportation Cases",bullets:["Marriage fraud","Person entered the United States without proper authority","Person was initially in the US legally but visa has since expired","Person who violates terms of admission or works without permission","Green card holder found guilty of a serious crime or had difficulty with the law","Person with criminal convictions","Person whose asylum claim has been denied","Person who overstays a visa","Person filed for an immigration benefit and it was denied"]},{heading:"Deportation Hearings",paragraphs:["A Notice to Appear means DHS has already begun the removal or deportation process. This document includes the reasons for removal, the court location, the date and time of the first hearing, the legal authority relied upon, your right to hire an attorney, the consequences for failing to appear, and the requirement to provide your current address and phone number.",'Los Angeles Immigration Court is located on Olive Street in downtown LA. The first hearing is called a "master hearing" or "master calendar hearing." A final hearing — if multiple hearings occur — is called an "individual hearing." Other hearings may include bond redetermination hearings, withholding-only hearings, and rescission hearings.',"It is important for people to understand that arrests in Los Angeles do not automatically translate to deportations. You will not lose a visa or green card for criminal charges, but you could be at risk."]},{heading:"Most Common Crimes Among Immigrants Facing Removal",bullets:["Drug crimes","Domestic violence","Sex crimes","Firearm crimes","Theft or robbery charges","Fraud crimes"]},{heading:"Timeline",paragraphs:["Some people on an expedited docket may resolve their case within six months. Cancellation of removal generally takes up to a year and a half from the master calendar hearing. If cancellation is denied, you can appeal to the BIA."]}],cta:"Our firm understands that every client we serve is unique, and we take the time to really develop relationships with the people we serve. Take the first step when you call (213) 388-1821 or contact us online today to set up a consultation with our Los Angeles deportation and removal lawyer."},{slug:"green-card-adjustment-of-status",title:"Green Card / Adjustment of Status",subtitle:"Your Path to Permanent Residency",metaDescription:"Understand the Green Card process, from eligibility to application, and start your journey to permanent residency.",intro:"Adjustment of status is the process to apply for lawful permanent residence while inside the United States. A green card (Permanent Resident Card) gives you official immigration status, entitles you to certain rights, and is required to naturalize as a US citizen. Unlike consular processing, you do not have to return to your country of citizenship — a process that can save considerable time and expense.",sections:[{heading:"How to Apply for a Green Card",paragraphs:["Most applicants need to complete at least two forms: an immigrant petition and a green card application. Another person usually files the petition on your behalf as the sponsoring petitioner. The federal government states that being a permanent resident is a privilege, not a right."]},{heading:"Green Card Categories",bullets:["Family-based: immediate relatives of US citizens (spouse, unmarried child under 21, parents of adults); family preference categories; fiancé(e)s (K-1/K-2); widow(er)s; VAWA self-petitioners","Employment-based: EB-1 through EB-5 based on qualifications — extraordinary ability, outstanding researchers/professors, multinational managers, advanced degree professionals, skilled workers, and EB-5 investors","Special immigrants: Special Immigrant Juveniles; Afghan/Iraqi translators; religious workers; international organization employees","Refugee or asylee status (granted asylum or admitted as refugee at least one year ago)","Victims of human trafficking or crime (T and U visas)","Diversity Immigrant Visa Program (lottery)","Cuban Adjustment Act and other special programs"]},{heading:"The Application Process (Inside the US)",numbered:["File an immigrant petition with USCIS (e.g., Form I-130 for family-based, Form I-140 for employment-based)","Check visa availability using the DOS Visa Bulletin","File Form I-485 (Application to Register Permanent Residence or Adjust Status)","Attend a biometrics ASC appointment","Attend an interview when applicable","Respond to any requests for evidence","Receive a decision"]},{heading:"The Application Process (Outside the US — Consular Processing)",numbered:["File an immigrant petition","Wait for the petition decision","Receive NVC notification","Attend a consular office appointment at the nearest US Embassy or Consulate","Receive your green card"]}],cta:"Our firm will take the time to explain every single action that is happening in your case and how we are working for you. You can call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles green card/adjustment of status attorney."},{slug:"i-601a-provisional-waivers",title:"I-601A Provisional Waivers",subtitle:"The I 601A Application Process Explained",metaDescription:"Learn about the I 601A application process and how it can affect your immigration journey. Essential information inside.",intro:"Form I-601A (Application for Provisional Unlawful Presence Waiver) is for immigrant visa applicants who are relatives of US citizens or lawful permanent residents. It allows them to request a provisional waiver of unlawful presence grounds of inadmissibility under INA § 212(a)(9)(B) before departing the US for an immigrant visa interview. It does not waive other grounds of inadmissibility. When approved overseas, the person can return to the US and enjoy LPR status and a green card.",sections:[{heading:"Who Can File",bullets:["Relatives of US citizens or LPRs","Diversity Visa lottery winners","Other immigrant visa applicants"]},{heading:"Form I-601A Requirements",bullets:["Being at least 17 years of age","Being physically present in the US and able to provide biometrics","Being willing to leave the US to legally obtain an immigrant visa","A qualifying relative (spouse or parent who is a US citizen or LPR) would suffer extreme hardship if not united in the US","Inadmissible because of unlawful presence (180 days to 365 days during a single stay, or 1 year or more in a single stay)","Has a pending case with the US Department of State for an approved immigrant visa petition or Diversity Visa Program"]},{heading:"People Will Not Qualify If They:",bullets:["Are younger than 17 years of age","Have grounds of inadmissibility for any reason besides unlawful presence","Already have applications to adjust status","Are currently going through removal proceedings","Fail to include details of hardships a spouse or parent would face upon removal","Have a prior order of removal before or during a pending I-601A"]},{heading:"Extreme Hardship Factors Considered",bullets:["Financial harm: future employability, home or business loss, significant decline in standard of living","Health of qualifying relatives: ongoing specialized treatment for physical or mental conditions, limited availability in home country","Personal considerations: close relatives in US or home country, separation from family, ages of involved parties, length of US residence","Special considerations: religious, language, cultural, or ethnic obstacles; valid fears of harm or persecution in home country","Educational losses: lack of ability to pursue higher education, disruption to current programs"]},{heading:"Form I-601A Process",paragraphs:["The filing fee is $630 for Form I-601A plus an $85 biometrics fee. Processing times: Nebraska Service Center — approximately 27 months for I-601A; Potomac Service Center — approximately 35.5 months for I-601A. After approval, apply for a green card through consular processing. If denied, you can appeal within 30 days by filing Form I-290B."]}],cta:"Our firm has handled scores of these kinds of cases, so we know how to deal with every issue that might arise. Call (213) 388-1821 or contact us online to set up a consultation with our Los Angeles I-601A provisional waiver attorney."},{slug:"k-1-fiance-visa",title:"K-1 Fiancé Visa",subtitle:"K-1 Fiancé Visa Requirements and Process Explained",metaDescription:"Discover the essential details about the K-1 Fiancé Visa, a pathway to unite with your partner in the United States.",intro:"US citizens wanting to bring a foreign fiancé(e) to the United States must file Form I-129F (Petition for Alien Fiancé(e)). The couple must intend to marry within 90 days of the fiancé(e) entering the US. The marriage must be bona fide — reflecting genuine intent by both parties to establish a life together, not simply to obtain an immigration benefit. If the couple marries within 90 days of K-1 admission, the fiancé(e) can apply for green card status.",sections:[{heading:"K-1 Visa Eligibility",bullets:["You are a US citizen","You and your fiancé(e) intend to marry within 90 days of their admission on a K-1 visa","Both of you are legally free to marry (all prior marriages legally terminated by divorce, death, or annulment)","You and your fiancé(e) met in person at least once within the two-year period before filing the petition (waivable in cases of strict cultural/social customs or extreme hardship to the US citizen petitioner)"]},{heading:"Not Eligible If:",bullets:["You are already married","You plan to marry outside the United States","Your fiancé(e) already legally resides in the United States"]},{heading:"K-1 Visa Process",numbered:["File Form I-129F — USCIS reviews and may request additional evidence; if approved, sent to the DOS National Visa Center (NVC)","NVC forwards the petition to the US Embassy or consulate where your fiancé(e) will apply for the K-1 visa","Embassy or consulate notifies of visa interview date; fiancé(e) brings required forms and documents","Consular officer determines eligibility; if approved, K-1 visa is valid for up to six months for a single entry","Fiancé(e) travels to the US and seeks admission at a port of entry (CBP makes the final admission decision)","US citizen and fiancé(e) have 90 days to marry","After marriage: file Form I-485 for adjustment of status and a green card","If married less than two years at the time of I-485 approval: USCIS grants conditional permanent resident status, with a green card valid for 2 years","File Form I-751 (Petition to Remove Conditions on Residence) within 90 days before the green card expires"]}],cta:"Our firm has helped scores of people all over California get the K-1 visas they needed to marry. Call (213) 388-1821 or contact us online to set up a consultation with our Los Angeles K-1 lawyer."},{slug:"temporary-protected-status-tps",title:"Temporary Protected Status (TPS)",subtitle:"What You Need to Know",metaDescription:"Learn about Temporary Protected Status and how it impacts the lives of those facing extraordinary circumstances.",intro:"Temporary Protected Status (TPS) is a form of humanitarian relief that helps foreign nationals in the US who may not qualify for asylum but are fleeing or reluctant to return to potentially dangerous situations. The Secretary of Homeland Security designates countries when conditions temporarily prevent nationals from returning safely, or when a country cannot handle the return of its nationals.",sections:[{heading:"Currently Designated TPS Countries",bullets:["Afghanistan, Cameroon, El Salvador, Haiti, Honduras, Myanmar, Nepal, Nicaragua, Somalia, South Sudan, Sudan, Syria, Ukraine, Venezuela, Yemen"]},{heading:"TPS Requirements",paragraphs:["To be eligible, you must meet all of the following:"],bullets:["National of a designated TPS country (or, if stateless, last habitually resided in a designated country)","Filed during the initial open registration or re-registration period, or meet late initial filing requirements","Continuously physically present in the US since the effective date of the most recent designation","Continuously resided in the US since the country's specified date","Brief, casual, and innocent departures from the US are permitted; you must inform USCIS of any absences"]},{heading:"Disqualified If You:",bullets:["Have a felony conviction or two or more misdemeanor convictions in the US","Are found inadmissible under applicable grounds in INA § 212(a)","Are subject to mandatory bars to asylum (persecution of others, engaging or inciting terrorist activity)","Fail to meet continuous physical presence and residence requirements","Fail to register or re-register for TPS as required without good cause"]},{heading:"TPS Registration — Required Documents",bullets:["Form I-821 (Application for TPS) and optionally Form I-765 (Request for Employment Authorization)","Identity and nationality evidence: passport copy, birth certificate with photo ID, or national identity document","Date of entry evidence: passport copy, I-94, or continuous residence documents","Continuous residence evidence: rent receipts, employment records, utility bills, school records, hospital or medical records, church or organization attestations"]}],cta:"Our firm works very closely with every client, so you will be kept up to date on everything that is happening with your case. Call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles TPS attorney."},{slug:"u-visa",title:"U-Visa",subtitle:"U-Visa Process and Important Facts",metaDescription:"Explore the U-Visa process and its significance for individuals seeking safety and security in the United States.",intro:"U nonimmigrant status (U visa) is immigration relief for victims of certain crimes. It makes it safer for victims to report cases to law enforcement and help authorities pursue criminal cases. Benefits include temporary immigration status, work authorization, temporary status for qualifying family members, and the possibility of lawful permanent resident status. Created by the Victims of Trafficking and Violence Protection Act (VTVPA) in 2000, the most recent USCIS statistics show an 87 percent approval rate for U visa petitioners. A U visa should be free.",sections:[{heading:"Qualifying Criminal Activity Includes:",bullets:["Abduction, Abusive Sexual Contact, Blackmail, Domestic Violence, Extortion, False Imprisonment, Female Genital Mutilation, Felonious Assault","Fraud in Foreign Labor Contracting, Hostage, Incest, Involuntary Servitude, Kidnapping, Manslaughter, Murder, Obstruction of Justice","Peonage, Perjury, Prostitution, Sexual Assault, Sexual Exploitation, Slave Trade, Stalking, Torture, Trafficking, Witness Tampering","Unlawful Criminal Restraint, and other related crimes where elements are substantially similar","Attempts, conspiracies, or solicitations to commit any of these offenses"]},{heading:"U-Visa Eligibility Requirements",bullets:["You suffered substantial physical or mental abuse as a result of being a victim of qualifying criminal activity","You have information about the criminal activity (if under 16 or unable to provide due to disability, a parent, guardian, or next friend may possess this information)","You were, are, or are likely to be helpful to law enforcement in the investigation or prosecution","The crime occurred in the US or violated American laws","You are admissible to the US (if not, you can apply for a waiver on Form I-192)"]},{heading:"Applying for a U Visa (Inside the US)",bullets:["Form I-918, Petition for U Nonimmigrant Status","Form I-918, Supplement B, U Nonimmigrant Status Certification (signed by an authorized official of a certifying law enforcement agency)","Form I-192 if inadmissibility issues are present","A personal statement describing the criminal activity","Evidence to establish each eligibility requirement"]},{heading:"Applying for a U Visa (Outside the US)",bullets:["File all necessary forms with the Vermont Service Center","Follow instructions from the Vermont Service Center, including providing fingerprints at the nearest US Embassy or Consulate","If approved, engage in the consular process, including an interview with a consular officer at the nearest US Embassy or Consulate"]}],cta:"Our firm will know how to help you get around any complication and be able to achieve the most favorable possible outcome for your case. You may call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles U-Visa attorney."}];function Nf(o){return Cf.find(l=>l.slug===o)}const au={asylum:"asilo","cancellation-of-removal":"cancelacion-de-eliminacion","citizenship-and-naturalization":"ciudadania-y-naturalizacion",daca:"daca","deportation-and-removal":"deportacion-y-remocion","green-card-adjustment-of-status":"tarjeta-verde-ajuste-de-estatus","i-601a-provisional-waivers":"i-601a-exenciones-provisionales","k-1-fiance-visa":"visa-de-prometido-k-1","temporary-protected-status-tps":"estado-de-proteccion-temporal-tps","u-visa":"visa-u"};function kf(){const{area:o}=Zt(),l=o?Nf(o):void 0;return T.useEffect(()=>{l&&Au({service_name:l.title,service_slug:l.slug,language:"en"})},[l==null?void 0:l.slug]),l?t.jsxs("div",{children:[t.jsx(Ae,{title:`${l.title} | Law Office of Todd Becraft`,description:l.metaDescription,canonical:`/services/${l.slug}`,ogImage:`https://www.makeitglow.co/api/og/becraft-immigration?title=${encodeURIComponent(l.title)}&subtitle=${encodeURIComponent("Law Office of Todd Becraft")}`,schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:au[l.slug]?[{lang:"en",path:`/services/${l.slug}`},{lang:"es",path:`/es/servicios/${au[l.slug]}`},{lang:"x-default",path:`/services/${l.slug}`}]:void 0}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[t.jsx(Y,{to:"/services",className:"hover:text-[#D4A853] transition-colors",children:"Practice Areas"}),t.jsx("span",{children:"/"}),t.jsx("span",{className:"text-gray-300",children:l.title})]}),t.jsx("div",{className:"gold-line mb-6"}),t.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:l.title}),t.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:l.subtitle}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:l.intro})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx("div",{className:"space-y-10",children:l.sections.map((c,u)=>{var p;return t.jsxs("div",{children:[c.heading&&t.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>t.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:m},f)),c.bullets&&c.bullets.length>0&&t.jsx("ul",{className:"space-y-2 mb-4",children:c.bullets.map((m,f)=>t.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[t.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),t.jsx("span",{children:m})]},f))}),c.numbered&&c.numbered.length>0&&t.jsx("ol",{className:"space-y-2 mb-4",children:c.numbered.map((m,f)=>t.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[t.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:f+1}),t.jsx("span",{children:m})]},f))})]},u)})}),t.jsx("div",{className:"gold-line my-10"}),t.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[t.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:l.cta}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",onClick:()=>ot({phone_number:"2133881821",location:"service_cta",language:"en"}),className:"btn-gold",children:"Call (213) 388-1821"}),t.jsx(Y,{to:"/contact",onClick:()=>Su({label:"contact_us_online",location:"service_cta",language:"en"}),className:"btn-outline",children:"Contact Us Online"})]})]})]})}),t.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:t.jsx("div",{className:"max-w-4xl mx-auto px-4",children:t.jsxs(Y,{to:"/services",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[t.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"All Practice Areas"]})})})]}):t.jsxs("div",{className:"section-padding text-center",children:[t.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Page Not Found"}),t.jsx("p",{className:"text-gray-500 mb-8",children:"That practice area doesn't exist."}),t.jsx(Y,{to:"/services",className:"btn-gold",children:"Back to Practice Areas"})]})}const Nu=[{slug:"the-becraft-guide-to-avoiding-deportation",title:"The Becraft Guide to Avoiding Deportation",subtitle:"What Are Your Legal Rights If You Might Be Deported?",metaDescription:"A comprehensive guide to avoiding deportation from the Law Office of Todd Becraft — understand your legal options, defenses, and relief measures.",intro:"Deportation, also known as removal, is a serious and often distressing process in which a non-citizen is ordered to leave a country due to a violation of immigration laws. If you or someone you know is facing the risk of deportation, it is crucial to understand the legal options available. Several legal recourses can help challenge removal orders and provide avenues for remaining in the country lawfully. At the Law Office of Todd Becraft, we bring many years of experience helping people just like you to avoid getting deported.",sections:[{heading:"Understanding the Deportation Process",paragraphs:["Before diving into legal recourses, it is important to understand how deportation proceedings work. Deportation typically begins with an arrest or a notice to appear (NTA) before an immigration judge. The U.S. Immigration and Customs Enforcement (ICE) agency is responsible for enforcing deportation orders in the United States.","The process generally follows these steps:"],bullets:["Issuance of a Notice to Appear (NTA): This document outlines the reasons for the removal proceedings and specifies a court date.","Master Calendar Hearing: This initial hearing allows the non-citizen to respond to the charges and request relief.","Individual Hearing: If relief is sought, a separate hearing will be scheduled to present evidence and legal arguments.","Decision by the Immigration Judge: The judge will either grant relief or issue a deportation order.","Appeals: If the judge orders deportation, the individual may have options to appeal the decision.","Removal or Stay of Removal: If all legal options are exhausted, the individual may be deported or granted a stay of removal."]},{heading:"Legal Recourses for Avoiding Deportation",paragraphs:["There are several defenses and legal recourses available for individuals facing deportation. Each case is unique, and seeking legal counsel is crucial for determining the best course of action."]},{heading:"1. Challenging the Deportation Charges",paragraphs:["One of the first steps in fighting deportation is challenging the legal basis for removal. Possible defenses include:"],bullets:["Procedural Defects: If the NTA contains incorrect information, or if the government fails to follow proper procedures, the case may be dismissed.","Lack of Evidence: The government must prove that the individual is removable. If sufficient evidence is lacking, the case may be dismissed.","Unlawful Arrest or Detention: If an individual's rights were violated during the arrest or detention process, the removal proceedings could be challenged."]},{heading:"2. Asylum and Protection from Persecution",paragraphs:["Individuals who fear persecution in their home country due to race, religion, nationality, political opinion, or membership in a particular social group may apply for asylum. To be eligible, an applicant must:"],bullets:["File the application within one year of arrival in the U.S. (or show exceptional circumstances for late filing).","Demonstrate a credible fear of persecution.","Provide evidence supporting the claim."]},{heading:"3. Withholding of Removal",paragraphs:["Similar to asylum, withholding of removal prevents deportation if the individual can prove they would face persecution in their home country. However, the burden of proof is higher than for asylum, and withholding of removal does not provide a direct path to permanent residency.","This form of relief is particularly useful for individuals who miss the one-year deadline for asylum applications or who have been convicted of certain crimes that bar them from asylum eligibility."]},{heading:"4. Protection Under the Convention Against Torture (CAT)",paragraphs:["Individuals who can prove that they are likely to face torture by the government or with government acquiescence if returned to their home country may qualify for protection under CAT. Unlike asylum, this protection does not lead to permanent residency but it does prevent deportation to the home country."]},{heading:"5. Cancellation of Removal",paragraphs:["Cancellation of removal is a form of relief available to certain individuals who have established strong ties to the U.S. Eligibility criteria vary depending on whether the applicant is a lawful permanent resident (LPR) or a non-permanent resident."],bullets:["For Lawful Permanent Residents: Must have been an LPR for at least five years, resided in the U.S. continuously for at least seven years, and must not have been convicted of an aggravated felony.","For Non-Permanent Residents: Must have been physically present in the U.S. for at least ten years, demonstrate good moral character, and prove that removal would cause exceptional and extremely unusual hardship to a qualifying U.S. citizen or LPR family member."]},{heading:"6. Adjustment of Status",paragraphs:["Some individuals facing deportation may be eligible to adjust their status to that of a lawful permanent resident (green card holder). This option may be available if:"],bullets:["The individual has an immediate family member who is a U.S. citizen or lawful permanent resident and can petition for them.","The individual qualifies under certain employment-based categories.","The individual qualifies under special programs such as the Violence Against Women Act (VAWA) or special immigrant juvenile status (SIJS)."]},{heading:"7. Deferred Action and Prosecutorial Discretion",paragraphs:["In some cases, immigration authorities may decide not to pursue deportation — known as prosecutorial discretion. One well-known form is Deferred Action for Childhood Arrivals (DACA), which provides temporary relief from deportation to certain undocumented immigrants who arrived in the U.S. as children. Factors that may influence prosecutorial discretion include:"],bullets:["Length of time in the U.S.","Family ties in the U.S.","Contributions to the community.","Health issues."]},{heading:"8. Voluntary Departure",paragraphs:["If no other legal remedies are available, an individual may request voluntary departure. This allows them to leave the U.S. on their own terms rather than being forcibly removed, including the ability to reapply for legal entry in the future without the penalties associated with deportation."]},{heading:"9. Appeals and Motions to Reopen",paragraphs:["If a removal order is issued, there are still opportunities to challenge the decision through appeals and motions to reopen or reconsider. The appeals process can be complex, requiring legal expertise to navigate successfully."]}],cta:"Deportation is a serious legal matter, but numerous legal options exist for individuals at risk of removal. Seeking immediate legal counsel is essential. At the Law Office of Todd Becraft, we bring years of experience helping people avoid removal. Call us today: 213-388-1821."},{slug:"the-becraft-guide-to-how-to-get-a-green-card",title:"The Becraft Guide to How to Get a Green Card",subtitle:"How to Become a Lawful Permanent Resident of the United States",metaDescription:"A step-by-step guide to getting a green card from the Law Office of Todd Becraft — eligibility categories, application process, and what to expect.",intro:"A green card, officially known as a Permanent Resident Card, grants an immigrant the right to live and work permanently in the United States, a status known as Lawful Permanent Residency. Securing a green card is often a crucial step on the journey toward U.S. citizenship. At the Law Office of Todd Becraft, we bring many years of experience helping people navigate the challenging process of getting your green card.",sections:[{heading:"1. Green Card Eligibility Categories",paragraphs:["There are several ways to qualify for a green card, and each category has its own requirements."]},{heading:"A. Family-Based Green Cards",paragraphs:["Immediate Relatives of U.S. Citizens: If you are the spouse, unmarried child under 21, or parent of a U.S. citizen, you qualify as an immediate relative. This category is given priority, with no annual limit on green cards issued. Other family-based categories include unmarried sons and daughters of U.S. citizens over 21, married children of U.S. citizens, and siblings of U.S. citizens — though these are subject to annual quotas and longer waiting times."]},{heading:"B. Employment-Based Green Cards",paragraphs:["Many green cards are issued to foreign nationals who have been offered employment in the U.S. These are divided into categories (EB-1 through EB-5) based on qualifications, including priority workers, professionals with advanced degrees, skilled workers, and EB-5 investors willing to invest significant capital in a U.S. business."]},{heading:"C. Diversity Visa Lottery",paragraphs:["Each year, the Diversity Immigrant Visa Program randomly selects applicants from countries with historically low immigration rates to the U.S. If selected, winners can apply for a green card, provided they meet the eligibility requirements."]},{heading:"D. Humanitarian Grounds",paragraphs:["Individuals granted refugee or asylee status in the U.S. can apply for a green card after one year. Special categories also exist for victims of human trafficking (T visas) and crime victims (U visas), among others."]},{heading:"2. The Green Card Application Process",paragraphs:["While the process can vary depending on your eligibility category, it generally follows these key steps:"]},{heading:"A. Filing a Petition",paragraphs:["For family-sponsored green cards, the U.S. citizen or permanent resident sponsor must file Form I-130, Petition for Alien Relative, with USCIS. For employment-based green cards, the employer typically files Form I-140, Immigrant Petition for Alien Worker. A labor certification from the U.S. Department of Labor may also be required."]},{heading:"B. Adjustment of Status or Consular Processing",paragraphs:["If you're already in the U.S. under a non-immigrant visa, you can apply for adjustment of status by submitting Form I-485. If you're applying from outside the U.S., you will go through consular processing at a U.S. embassy or consulate in your home country."]},{heading:"C. Attend Your Interview",paragraphs:["In most cases, applicants are required to attend an interview either with USCIS (if adjusting status in the U.S.) or at a U.S. consulate (if applying from abroad). During the interview, you may be asked about your background, relationship to your sponsor, or your qualifications for the green card."]},{heading:"D. Receive Your Green Card",paragraphs:["If your application is approved, you will be issued a green card allowing you to live and work in the U.S. as a permanent resident. Your green card will initially be valid for 10 years (or two years for conditional residents like spouses of U.S. citizens)."]},{heading:"3. Special Considerations and Challenges",paragraphs:["Some green card categories are subject to annual quotas. If there is a backlog in your category, you may be assigned a priority date — check the Visa Bulletin published by the U.S. Department of State to track availability. Certain applicants may receive a conditional green card requiring them to file Form I-751 to remove conditions before it expires. If your application is denied, you may have the opportunity to appeal or file a motion to reopen."]},{heading:"4. Preparing for Life as a Green Card Holder",paragraphs:["As a permanent resident, you'll enjoy the ability to live and work anywhere in the U.S., access to government benefits, and a pathway to U.S. citizenship. However, green card holders also have responsibilities:"],bullets:["File U.S. income taxes annually.","Obey all federal, state, and local laws.","Renew your green card every 10 years.","Maintain your U.S. residency — prolonged absences can jeopardize your status."]}],cta:"Securing a green card is a major step toward achieving your goals in the United States. At the Law Office of Todd Becraft, we provide expert support tailored to your specific situation. Call us today to get the process started: 213-388-1821."},{slug:"the-becraft-guide-on-how-to-become-a-us-citizen",title:"The Becraft Guide on How to Become a US Citizen",subtitle:"The Pathway to American Citizenship",metaDescription:"A complete guide to U.S. naturalization from the Law Office of Todd Becraft — eligibility requirements, the step-by-step process, and life as a new citizen.",intro:"Becoming a U.S. citizen involves several legal steps, and a deep commitment to the values of freedom and democracy. You may be seeking greater security, new opportunities, or the chance to reunite with family. At the Law Office of Todd Becraft, we understand the complexities involved in immigration law and are dedicated to helping individuals and families through this important life transition.",sections:[{heading:"1. Eligibility: Are You Ready to Apply?",paragraphs:["Before you can apply for U.S. citizenship, you need to meet several requirements that ensure you've established yourself in the United States."]},{heading:"A. Lawful Permanent Resident Status",paragraphs:["The first step is holding the status of a Lawful Permanent Resident (LPR) — also known as having a green card. Most lawful permanent residents got their green card through family sponsorship, employment, or by being granted refugee or asylee status. Pathways to LPR status include:"],bullets:["Family Sponsorship","Employment-Based Immigration","Diversity Visa Lottery","Asylum or Refugee Status","Special Immigrant Categories (religious workers, international organization employees, U.S. military service members)"]},{heading:"B. Continuous Residence",paragraphs:["Once you have your green card, you need to have lived in the United States continuously for a certain period:"],bullets:["Five years of continuous residence is required for most applicants.","Three years of continuous residence is required if you are married to a U.S. citizen."]},{heading:"C. Physical Presence",bullets:["You must have been physically present in the U.S. for at least 30 months out of the last five years.","If applying based on marriage to a U.S. citizen, 18 months out of the last three years."]},{heading:"D. Good Moral Character",paragraphs:["You must demonstrate good moral character, meaning you've followed the laws, paid your taxes, and acted responsibly. Certain behaviors — such as committing serious crimes or failing to file taxes — can disqualify you."]},{heading:"E. Basic English Proficiency",paragraphs:["You need to show basic proficiency in reading, writing, and speaking English, tested during your citizenship interview. The test focuses on everyday language skills and uses simple sentences."]},{heading:"F. Knowledge of U.S. History and Civics",paragraphs:["You'll need to pass a civics test covering basic U.S. history and government. USCIS provides a list of 100 potential questions. You'll be asked up to 10 during your interview and need to get at least six correct."]},{heading:"2. The Naturalization Process: Step-by-Step"},{heading:"A. Filing Form N-400",paragraphs:["The first step is submitting Form N-400, Application for Naturalization. This form asks for information about your personal history, including address, employment, and travel history. The form can be filed online or by mail, and fees include a filing fee and biometrics fee."]},{heading:"B. Biometrics Appointment",paragraphs:["USCIS will schedule you for a biometrics appointment where your fingerprints, photo, and signature are collected for a background check."]},{heading:"C. The Naturalization Interview and Tests",paragraphs:["A USCIS officer will review your application and ask you questions to verify information. During the interview you'll also take:"],bullets:["English Test: You'll be asked to read and write simple sentences in English, and answer a few basic spoken questions.","Civics Test: You'll be asked up to 10 questions about American history and government — you need to get six correct to pass."]},{heading:"D. The Oath of Allegiance",paragraphs:["The final step is taking the Oath of Allegiance at your naturalization ceremony. You'll recite the oath alongside other new citizens and receive your Certificate of Naturalization — your official proof of U.S. citizenship."]},{heading:"3. Life as a U.S. Citizen",paragraphs:["Once you've completed the naturalization process, you'll enjoy all the rights and privileges of citizenship:"],bullets:["The right to vote in federal, state, and local elections.","Apply for a U.S. passport for easier international travel.","Sponsor family members for a green card.","Access to federal jobs and security clearances.","Full participation in jury duty and civic life."]},{heading:"4. Special Circumstances and Exceptions",bullets:["Military Service: May qualify for expedited naturalization without the usual residence requirements.","Older Applicants: Applicants 50+ who have lived in the U.S. as a green card holder for 20+ years may take the civics test in their native language.","Medical Exemptions: Applicants with physical or mental disabilities may qualify for a waiver from the English or civics tests."]}],cta:"Becoming a U.S. citizen is about becoming part of a nation with a rich history and a culture that celebrates individuality and freedom. The Law Office of Todd Becraft is ready to help you navigate every step of the journey. Call us today: 213-388-1821."},{slug:"video-tutorials",title:"Video Tutorials",subtitle:"Immigration information from Attorney Todd Becraft",metaDescription:"Watch Attorney Todd Becraft explain immigration processes, opportunities, and helpful information for immigrants to the United States.",intro:"Attorney Todd Becraft describes various immigration processes, opportunities and other helpful information for immigrants to the United States.",sections:[{heading:"What You'll Learn",bullets:["U-Visas, which ultimately become a Green Card, are available to victims of certain crimes if there's a police report.","Your rights if and when ICE knocks on your door.","Step-by-step explanations of common immigration processes."]}],cta:"Have questions about your specific situation? Call the Law Office of Todd Becraft today: 213-388-1821."}];function Ef(o){return Nu.find(l=>l.slug===o)}function Uf(){return t.jsxs("div",{children:[t.jsx(Ae,{title:"Immigration Resources & Guides | Law Office of Todd Becraft",description:"Free immigration guides from Attorney Todd Becraft — how to get a green card, become a US citizen, avoid deportation, and more.",canonical:"/resources",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Immigration Resources & Guides | Law Office of Todd Becraft"}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Immigration ",t.jsx("span",{className:"text-[#D4A853]",children:"Resources"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Free guides and educational content from Attorney Todd Becraft to help you understand the immigration process and your legal options."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-5xl mx-auto",children:t.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:Nu.map(o=>t.jsxs(Y,{to:`/resources/${o.slug}`,className:"bg-white rounded-sm border border-gray-100 p-8 card-hover group",children:[t.jsx("div",{className:"gold-line mb-4"}),t.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2 group-hover:text-[#D4A853] transition-colors",children:o.title}),t.jsx("p",{className:"text-[#D4A853] text-sm font-medium mb-3",children:o.subtitle}),t.jsx("p",{className:"text-gray-500 text-sm leading-relaxed line-clamp-3",children:o.intro}),t.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase group-hover:text-[#C49A48] transition-colors",children:["Read Guide",t.jsx("svg",{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]},o.slug))})})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Situation?"}),t.jsx("p",{className:"text-gray-300 mb-8",children:"Our guides provide general information, but every case is unique. Contact us for a consultation to discuss your specific circumstances."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),t.jsx(Y,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})})]})}function If(){const{slug:o}=Zt(),l=o?Ef(o):void 0;return T.useEffect(()=>{l&&Cu({resource_name:l.title,resource_slug:l.slug,language:"en"})},[l==null?void 0:l.slug]),l?t.jsxs("div",{children:[t.jsx(Ae,{title:`${l.title} | Becraft Immigration`,description:l.metaDescription,canonical:`/resources/${l.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:l.title,author:{"@type":"Person",name:"Todd Becraft"}}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[t.jsx(Y,{to:"/resources",className:"hover:text-[#D4A853] transition-colors",children:"Resources"}),t.jsx("span",{children:"/"}),t.jsx("span",{className:"text-gray-300",children:l.title})]}),t.jsx("div",{className:"gold-line mb-6"}),t.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:l.title}),t.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:l.subtitle}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:l.intro})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx("div",{className:"space-y-10",children:l.sections.map((c,u)=>{var p;return t.jsxs("div",{children:[c.heading&&t.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>t.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:m},f)),c.bullets&&c.bullets.length>0&&t.jsx("ul",{className:"space-y-2 mb-4",children:c.bullets.map((m,f)=>t.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[t.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),t.jsx("span",{children:m})]},f))}),c.numbered&&c.numbered.length>0&&t.jsx("ol",{className:"space-y-2 mb-4",children:c.numbered.map((m,f)=>t.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[t.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:f+1}),t.jsx("span",{children:m})]},f))})]},u)})}),t.jsx("div",{className:"gold-line my-10"}),t.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[t.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:l.cta}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),t.jsx(Y,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})]})}),t.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:t.jsx("div",{className:"max-w-4xl mx-auto px-4",children:t.jsxs(Y,{to:"/resources",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[t.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"All Resources"]})})})]}):t.jsxs("div",{className:"section-padding text-center",children:[t.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Page Not Found"}),t.jsx("p",{className:"text-gray-500 mb-8",children:"That resource doesn't exist."}),t.jsx(Y,{to:"/resources",className:"btn-gold",children:"Back to Resources"})]})}const zf=[{category:"Asylum & Convention Against Torture",title:"Asylum & Relief Under the Convention Against Torture",description:"We represent clients fleeing persecution due to political activities, religious beliefs, or membership in targeted social groups — including cases other attorneys have turned down.",outcome:"Through comprehensive country condition evidence, expert testimony, and compelling personal declarations, we have successfully obtained asylum for clients facing removal, providing them with permanent protection in the United States.",tag:"Asylum Granted"},{category:"Cancellation of Removal",title:"Cancellation of Removal for Non-Permanent Residents",description:"We defend long-term residents facing deportation who have U.S. citizen or permanent resident family members, demonstrating the exceptional and extremely unusual hardship removal would cause.",outcome:"Through medical evidence, school records, expert testimony, and financial documentation, we have persuaded immigration judges to cancel removal and grant our clients lawful permanent residence.",tag:"Removal Cancelled"},{category:"O-1 Extraordinary Ability Visa",title:"O-1 Extraordinary Ability Visa",description:"We prepare O-1 petitions for professionals with extraordinary ability or achievement, assembling the evidence needed to demonstrate sustained national or international acclaim.",outcome:"Our petition packages include expert recommendation letters, evidence of awards and publications, media coverage, and documentation of significant contributions to the field.",tag:"O-1 Approved"},{category:"P-3 Culturally Unique Artist Visa",title:"P-3 Culturally Unique Artist or Entertainer Visa",description:"We represent artists and entertainers performing traditional or culturally unique art forms, preparing P-3 petitions that establish the cultural merit of their work.",outcome:"Our petitions document the cultural uniqueness of the art form, the artist's credentials and international recognition, and the cultural value of planned U.S. performances.",tag:"P-3 Approved"},{category:"U-Visa for Crime Victims",title:"U-Visa for Victims of Crime",description:"We help victims of qualifying crimes who have cooperated with law enforcement obtain U-Visa protection, even when they face the prospect of deportation.",outcome:"We work with law enforcement to obtain the required certification, prepare comprehensive declarations, and submit evidence of physical and psychological impact to secure lawful status, work authorization, and a path to permanent residence.",tag:"U-Visa Approved"}],Tf=[{quote:"Atty. Todd Becraft is one of a kind gentleman. Ever since he handled my immigration issues, everything just went to the right direction. You can feel that he treats you like a member of the family.",author:"Rolando G.",service:"via Yelp"},{quote:"The reception was fantastic and very professional. He showed me a lot of care by asking how my family is doing. I see him as an expert because of the way he asks questions and answers questions.",author:"John",service:"via Avvo"},{quote:"Attorney Todd Becraft is an exceptional and knowledgeable immigration attorney. He handled my case with such class and dignity — I won my case. Excellent staff, excellent customer service.",author:"Joseph M.",service:"via Yelp"},{quote:"I will always remember the professional legal services I received. All staff are caring and always work according to the instructions of their client. The services I received were far more than what I was charged.",author:"Tiwa Bob",service:"via Google"}];function qf(){const o=Ye();return t.jsxs("div",{children:[t.jsx(Ae,{title:"Client Success Stories | Law Office of Todd Becraft",description:"Real immigration success stories from clients of the Law Office of Todd Becraft — asylum grants, green cards, citizenship, and deportation cases won.",canonical:"/success-stories",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Client Success Stories | Law Office of Todd Becraft"}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Success ",t.jsx("span",{className:"text-[#D4A853]",children:"Stories"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Every case we take on represents a family's future. Here are some of the outcomes we have achieved for our clients. While every case is different, these stories reflect our commitment to fighting for the best possible result."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-5xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Representative Case Results"}),t.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto text-sm",children:"The following are representative of the types of cases we handle and outcomes we have achieved. Past results do not guarantee future outcomes, as every case depends on its unique facts and circumstances."})]}),t.jsx("div",{className:"space-y-8",children:zf.map((l,c)=>t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[t.jsxs("div",{className:"p-6 md:p-8",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[t.jsx("span",{className:"text-xs font-semibold tracking-wider uppercase text-[#D4A853]",children:l.category}),t.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200",children:[t.jsx("svg",{className:"w-3.5 h-3.5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),l.tag]})]}),t.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-4",children:l.title}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"The Challenge"}),t.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.description})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"The Outcome"}),t.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.outcome})]})]})]}),t.jsx("div",{className:"h-0.5 bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853]/30 to-[#D4A853]/0"})]},c))})]})}),t.jsx("section",{className:"section-padding bg-[#1B2A4A]",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-4",children:"Client Testimonials"}),t.jsx("p",{className:"text-gray-400 max-w-xl mx-auto text-sm",children:"Hear from the families we have helped."})]}),t.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Tf.map((l,c)=>t.jsxs("div",{className:"border border-white/10 rounded-sm p-8 hover:border-[#D4A853]/30 transition-colors",children:[t.jsx("svg",{className:"w-8 h-8 text-[#D4A853]/30 mb-4",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})}),t.jsxs("blockquote",{className:"text-gray-200 leading-relaxed mb-6 italic font-serif",children:['"',l.quote,'"']}),t.jsx("div",{className:"gold-line mb-3"}),t.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.author}),t.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:l.service})]},c))}),t.jsx("p",{className:"text-center text-gray-500 text-xs mt-10",children:"* Testimonials are representative of client experiences. Past results do not guarantee future outcomes."})]})}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Let Us Fight for Your Future"}),t.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Every successful case starts with a conversation. Contact us today for a free consultation to discuss your immigration matter."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),t.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Schedule a Consultation"})]})]})})]})}function Lf(){const[o,l]=T.useState({name:"",email:"",phone:"",service:"",message:""}),[c,u]=T.useState(!1),[p,m]=T.useState(!1),[f,x]=T.useState(""),v=C=>{l({...o,[C.target.name]:C.target.value})},b=async C=>{C.preventDefault(),u(!0),x("");try{(await fetch("https://formspree.io/f/xkokkjdk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(m(!0),ju({language:"en",service:o.service}),l({name:"",email:"",phone:"",service:"",message:""})):x("There was an error submitting your message. Please try again or call us directly.")}catch{x("There was an error submitting your message. Please try again or call us directly.")}finally{u(!1)}};return t.jsxs("div",{children:[t.jsx(Ae,{title:"Contact Us | Law Office of Todd Becraft",description:"Contact the Law Office of Todd Becraft for an immigration consultation. Call (213) 388-1821 or fill out our online form.",canonical:"/contact",schema:{"@context":"https://schema.org","@type":"ContactPage",name:"Contact Law Office of Todd Becraft"}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Contact ",t.jsx("span",{className:"text-[#D4A853]",children:"Us"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Ready to take the next step? Reach out for a confidential consultation with an experienced immigration attorney."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"grid lg:grid-cols-5 gap-12 lg:gap-16",children:[t.jsx("div",{className:"lg:col-span-3",children:t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-10",children:[t.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Send Us a Message"}),t.jsx("p",{className:"text-gray-500 text-sm mb-8",children:"Fill out the form below and we will get back to you promptly. All consultations are confidential."}),p?t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4",children:t.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),t.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Message Sent Successfully"}),t.jsx("p",{className:"text-gray-500 mb-6",children:"Thank you for contacting us. We will review your message and respond as soon as possible."}),t.jsx("button",{onClick:()=>m(!1),className:"text-[#D4A853] font-semibold text-sm hover:text-[#C49A48] transition-colors",children:"Send Another Message"})]}):t.jsxs("form",{onSubmit:b,className:"space-y-6",children:[t.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),t.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:o.name,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"Your full name"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),t.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:o.email,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"your@email.com"})]})]}),t.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),t.jsx("input",{type:"tel",id:"phone",name:"phone",value:o.phone,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"(555) 123-4567"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700 mb-2",children:"Service Needed"}),t.jsxs("select",{id:"service",name:"service",value:o.service,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 bg-white transition-colors appearance-none",style:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:"right 0.75rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.25em 1.25em"},children:[t.jsx("option",{value:"",children:"Select a service..."}),t.jsx("option",{value:"asylum",children:"Asylum"}),t.jsx("option",{value:"appeals",children:"BIA & 9th Circuit Appeals"}),t.jsx("option",{value:"cancellation",children:"Cancellation of Removal"}),t.jsx("option",{value:"citizenship",children:"Citizenship & Naturalization"}),t.jsx("option",{value:"daca",children:"DACA"}),t.jsx("option",{value:"deportation",children:"Deportation Defense"}),t.jsx("option",{value:"green-card",children:"Green Card / Adjustment of Status"}),t.jsx("option",{value:"waiver",children:"I-601A Provisional Waiver"}),t.jsx("option",{value:"k1-visa",children:"K-1 Fiance Visa"}),t.jsx("option",{value:"tps",children:"Temporary Protected Status (TPS)"}),t.jsx("option",{value:"u-visa",children:"U-Visa"}),t.jsx("option",{value:"family",children:"Family Immigration"}),t.jsx("option",{value:"other",children:"Other"})]})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Tell Us About Your Case *"}),t.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:o.message,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none",placeholder:"Please briefly describe your immigration matter..."})]}),f&&t.jsx("div",{className:"bg-red-50 border border-red-200 rounded-sm p-4",children:t.jsx("p",{className:"text-red-700 text-sm",children:f})}),t.jsx("button",{type:"submit",disabled:c,className:"btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",children:c?t.jsxs("span",{className:"flex items-center",children:[t.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),t.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):"Submit Message"}),t.jsx("p",{className:"text-xs text-gray-400",children:"By submitting this form, you agree that we may contact you regarding your inquiry. Submitting this form does not create an attorney-client relationship."})]})]})}),t.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[t.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8",children:[t.jsx("h3",{className:"text-white font-serif font-bold text-lg mb-6",children:"Call Us Today"}),t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("a",{href:"tel:2133881821",onClick:()=>ot({phone_number:"2133881821",location:"contact_page",language:"en"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[t.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Local"}),t.jsx("p",{className:"text-lg font-semibold",children:"(213) 388-1821"})]})]}),t.jsxs("a",{href:"tel:8552016898",onClick:()=>ot({phone_number:"8552016898",location:"contact_page",language:"en"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[t.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Toll Free"}),t.jsx("p",{className:"text-lg font-semibold",children:"(855) 201-6898"})]})]})]}),t.jsx("div",{className:"mt-6 bg-[#D4A853] text-[#1B2A4A] px-4 py-2 rounded-full text-sm font-bold tracking-wide text-center",children:"Se Habla Espanol"})]}),t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-6",children:"Office Information"}),t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("div",{className:"space-y-5",children:[t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:t.jsxs("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Location"}),t.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["3450 Wilshire Blvd. Suite 1015",t.jsx("br",{}),"Los Angeles, CA 90010"]})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Office Hours"}),t.jsxs("div",{className:"text-gray-500 text-sm mt-1 space-y-1",children:[t.jsx("p",{children:"Monday – Friday: 9:00 AM – 6:00 PM"}),t.jsx("p",{children:"Saturday: By Appointment"}),t.jsx("p",{children:"Sunday: Closed"})]})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Languages"}),t.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"English & Spanish"})]})]})]})]}),t.jsxs("div",{className:"bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-sm p-8 text-center",children:[t.jsx("svg",{className:"w-10 h-10 mx-auto text-[#D4A853] mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})}),t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-2",children:"Consultation"}),t.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"We offer initial consultations to evaluate your immigration case. There is no obligation and all communications are strictly confidential."}),t.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6",children:"Call Now"})]}),t.jsx("div",{className:"bg-[#1B2A4A] rounded-sm overflow-hidden",children:t.jsxs("div",{className:"aspect-[4/3] flex items-center justify-center relative",children:[t.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.5) 1px, transparent 0)",backgroundSize:"20px 20px"}}),t.jsxs("div",{className:"text-center relative z-10",children:[t.jsxs("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/40 mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:[t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),t.jsx("p",{className:"text-gray-300 font-serif font-bold",children:"Los Angeles, California"}),t.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Serving clients throughout Southern California"})]})]})})]})]})})})]})}const ku=[{slug:"immigration-options-stepchildren-green-card-legal-status",title:"Immigration Options for Stepchildren: How a U.S. Citizen or Green Card Holder Can Help a Stepchild Obtain Legal Status",date:"September 18, 2026",excerpt:"U.S. immigration law allows qualifying stepparents to petition for their stepchildren, but the rules depend heavily on timing. Learn how the child’s age, the date of the marriage, marital status, and manner of entry can completely change the options available to a blended family.",content:`Blended families are increasingly common in the United States, and immigration law recognizes that a parent-child relationship can exist even when the parent is not biologically related to the child. For many immigrant families, this creates an important question: Can a U.S. citizen or lawful permanent resident help a stepchild obtain a green card or legal immigration status?

In many cases, the answer is yes.

U.S. immigration law allows qualifying stepparents to petition for their stepchildren. However, stepchild immigration cases contain strict requirements involving the child's age, the date of the marriage that created the stepparent relationship, the immigration status of the petitioner, the child's marital status, and whether the child is currently inside or outside the United States.

One date can completely change the immigration options available to a family.

At the Law Office of Todd Becraft, we help families understand their options under U.S. immigration law and determine the appropriate strategy for bringing families together legally.

## Who Qualifies as a Stepchild Under U.S. Immigration Law?

One of the most important rules involves the child's age when the marriage creating the stepparent relationship occurred.

For immigration purposes, a qualifying stepparent-stepchild relationship generally must have been created before the child's 18th birthday.

In other words, the U.S. citizen or lawful permanent resident must generally have married the child's biological parent before the child turned 18.

This requirement can be extremely important.

Example:

Maria has a 15-year-old son named Daniel. Maria marries John, a U.S. citizen.

Because Daniel was under 18 when Maria and John married, John may potentially qualify as Daniel's stepparent for immigration purposes and may be able to file an immigration petition for him.

Now change one fact.

Suppose Daniel was already 18 years and two months old when Maria married John.

Even though Daniel may consider John his stepfather in everyday life, the marriage generally would not create the qualifying stepparent-stepchild relationship required under this particular immigration provision.

This is why families should consider immigration consequences before delaying a marriage when children are approaching their 18th birthdays.

## Does the Stepparent Have to Adopt the Stepchild?

This is one of the most common misconceptions involving stepchildren and immigration.

No. A qualifying stepparent generally does not have to legally adopt the stepchild before filing an immigration petition.

A stepchild relationship can arise through the valid marriage between the stepparent and the child's biological parent, provided the marriage occurred before the child's 18th birthday.

Adoption is a separate area of immigration law with its own requirements.

Families should therefore avoid assuming that adoption is necessary—or that completing an adoption automatically solves an immigration problem. Adoption-based immigration cases can involve different age, custody, residence, and procedural requirements.

## Can a U.S. Citizen Petition for a Stepchild?

Yes, if the relationship satisfies immigration requirements.

A U.S. citizen stepparent can generally file Form I-130, Petition for Alien Relative, for a qualifying stepchild.

For immigration purposes, the child's age and marital status can affect the immigration category and the time required to obtain permanent residence.

When a qualifying stepchild is unmarried and under 21, the child may potentially qualify as an immediate relative of a U.S. citizen.

This classification can be extremely valuable because immediate-relative immigrant visas are not subject to the same annual numerical limits that apply to many family-preference categories.

However, families should not assume that filing an I-130 automatically produces a green card.

The I-130 establishes the qualifying family relationship. The child must still qualify for permanent residence and complete either adjustment of status in the United States or immigrant visa processing abroad, depending on the circumstances.

## Stepchild Already Living in the United States

When a stepchild is already in the United States, one possible immigration strategy is adjustment of status, which allows certain eligible immigrants to apply for permanent residence without leaving the country.

A typical case involving an eligible immediate relative might involve filing:
- Form I-130, Petition for Alien Relative;
- Form I-485, Application to Register Permanent Residence or Adjust Status;
- Form I-864, Affidavit of Support;
- required medical examination documentation;
- supporting civil documents; and
- other applications or evidence appropriate to the case.

Eligibility for adjustment of status depends on much more than simply having a U.S. citizen stepparent.

An immigration attorney should review how the child entered the United States, the child's immigration history, any prior removal proceedings, previous immigration applications, criminal history, fraud or misrepresentation concerns, and other potential grounds of inadmissibility.

## Case Study: Stepchild Entered With a Visa

Consider this hypothetical situation.

Carlos is 17 and entered the United States legally with a visitor visa. His mother later marries a U.S. citizen while Carlos is still 17.

His stepfather wants to help Carlos obtain permanent residence.

Because the marriage occurred before Carlos turned 18, a qualifying stepchild relationship may exist. If Carlos meets the remaining requirements for adjustment of status, the family may potentially pursue an I-130 petition and adjustment-of-status strategy.

However, the attorney should still examine Carlos's complete immigration history before anything is filed.

The important lesson is that being a stepchild creates a potential family relationship for immigration purposes; it does not erase every other immigration requirement.

## What If the Stepchild Entered the United States Without Inspection?

This situation can be significantly more complicated.

Suppose a child crossed the border without being inspected and admitted or paroled and later acquired a U.S. citizen stepparent.

The existence of a qualifying U.S. citizen stepparent does not automatically mean that the child can obtain a green card inside the United States.

Adjustment-of-status eligibility often depends on the manner of entry and whether a specific exception or other immigration provision applies.

Depending on the facts, the case may involve consular processing, waivers, protection-based relief, prior petitions, INA §245(i), or other legal considerations.

Leaving the United States without first understanding the consequences can also create serious problems because unlawful presence and other issues can potentially trigger inadmissibility bars.

Families should therefore obtain individualized legal advice before deciding that a stepchild should simply "go back home and do the interview."

## Stepchild Living Outside the United States

If a qualifying stepchild lives abroad, the process generally begins when the eligible stepparent files Form I-130.

After USCIS approves the petition, the case can generally proceed through the National Visa Center (NVC) and ultimately to immigrant visa processing at the appropriate U.S. embassy or consulate.

The process may include:
- Filing Form I-130 and supporting evidence.
- USCIS review and approval.
- Transfer to the National Visa Center.
- Payment of applicable government fees.
- Submission of financial sponsorship documentation.
- Submission of civil documents.
- Completion of the required medical examination.
- Consular interview.
- Immigrant visa issuance if the applicant is approved.
- Admission to the United States as a lawful permanent resident.

Every case is different, and approval of an I-130 does not guarantee approval of an immigrant visa.

## What Documents Prove a Stepparent-Stepchild Relationship?

Documentation is extremely important in family-based immigration.

USCIS instructions identify evidence such as the child's birth certificate and the marriage certificate showing that the stepparent married the child's natural parent before the child's 18th birthday.

If either spouse had a previous marriage, evidence showing that those marriages were legally terminated may also be required.

Depending on the case, documents could include marriage certificates, divorce judgments, death certificates, birth certificates, passports, immigration records and certified translations.

USCIS may issue a Request for Evidence (RFE) when documentation is incomplete or when additional evidence is needed.

Preparing the petition correctly from the beginning can help reduce unnecessary complications.

## Does a U.S. Citizen Need a Separate I-130 for Each Stepchild?

This is another extremely important issue.

When a U.S. citizen petitions for an immediate-relative spouse, the spouse's children do not simply become derivative beneficiaries of that immediate-relative petition.

A qualifying stepchild generally needs a separate petition.

Example:

David, a U.S. citizen, marries Elena, who has two children, ages 11 and 16.

David wants to sponsor the entire family.

The immigration filings must account separately for Elena and each qualifying child. Families should not assume that filing an I-130 for Elena automatically gives her children permanent residence through the same immediate-relative petition.

Failing to file the necessary petitions for the children can cause significant delays.

## What If the Stepparent Is a Green Card Holder?

Lawful permanent residents can also petition for certain qualifying family members, but the process is different from immediate-relative immigration through a U.S. citizen.

Spouses and qualifying unmarried children of permanent residents generally fall within family-preference categories where visa availability matters.

This means families may have to consider the Visa Bulletin, priority dates and possible waiting periods.

The petitioner's later naturalization can also change the case.

For example, if a permanent resident becomes a U.S. citizen while family petitions are pending, it may be possible or necessary to update the immigration classification.

This transition should be reviewed carefully because immediate-relative cases operate differently from preference-category cases, including rules concerning derivative beneficiaries.

## What Happens When a Stepchild Turns 21?

Age is critical in family immigration.

Generally, a "child" for many immigration purposes is an unmarried person under 21. Turning 21 can potentially move someone into a different immigration classification and create a much longer wait.

However, the Child Status Protection Act (CSPA) may protect some applicants from "aging out."

CSPA calculations can be complicated and vary according to the immigration category.

Families should never assume that a child has automatically lost eligibility simply because the child turned 21 while an immigration case was pending.

At the same time, they should never assume CSPA automatically protects the child.

The dates should be analyzed carefully.

## What If the Stepchild Gets Married?

Marital status can dramatically affect immigration eligibility.

A person who marries generally no longer qualifies as an unmarried "child" for categories requiring unmarried status.

For permanent-resident petitioners, marriage can be particularly significant because there is no family-preference category allowing an LPR to petition for a married son or daughter in the same way a U.S. citizen can.

If a beneficiary is considering marriage while an immigration petition is pending, the family should speak with an immigration attorney first.

A marriage can potentially change—or in some situations eliminate—the immigration category under which the petition was filed.

## K-1 Fiancé Visa and K-2 Children

Stepchildren can also become relevant when a U.S. citizen is bringing a foreign fiancé to the United States.

Eligible children of a K-1 fiancé may potentially obtain K-2 visas.

After the K-1 parent enters the United States and marries the U.S. citizen petitioner, the children must address their own adjustment-of-status requirements.

Again, timing is extremely important.

The marriage creating the stepchild relationship generally must occur before the child's 18th birthday for the U.S. citizen spouse to establish the qualifying stepchild relationship needed for the child's adjustment through that relationship.

Example:

A U.S. citizen petitions for his fiancé, who has a 17-year-old daughter.

The fiancé and daughter enter using K-1 and K-2 visas. If the couple waits too long and the daughter turns 18 before the marriage takes place, the family may encounter a serious stepchild eligibility problem.

This is an example of how a seemingly small delay can have major immigration consequences.

## What About K-3 and K-4 Visas?

Immigration law also provides K-3 and K-4 classifications involving certain spouses of U.S. citizens and their children, although these classifications are far less commonly used in practice today.

Families considering fiancé, spouse or child immigration should evaluate the current processing environment rather than relying on outdated information found online.

## Does a Stepchild Automatically Become a U.S. Citizen?

Not necessarily.

This distinction is extremely important.

A stepchild may qualify for immigration benefits based on a stepparent relationship without automatically acquiring U.S. citizenship through that stepparent.

The Department of State specifically explains that although a qualifying stepchild can potentially immigrate through a U.S. citizen stepparent, a stepchild does not acquire citizenship under INA Section 320 merely through the stepparent relationship.

Citizenship cases should therefore be analyzed separately from green card eligibility.

## What If the Stepparent Adopts the Child?

Adoption may create additional possibilities, but immigration law imposes specific requirements on adoption-based immigration.

Depending on the type of case, issues may include:
- the child's age when the adoption occurred;
- legal custody;
- physical residence with the adoptive parent;
- whether the adoption is legally valid;
- the child's country of origin;
- Hague Adoption Convention requirements; and
- whether other statutory requirements have been satisfied.

A family should not pursue an adoption solely because someone told them it would "fix" an immigration case without first receiving qualified legal advice.

## Case Study: Two Children, Two Different Outcomes

Consider a mother with two children.

Her daughter is 16, and her son is 19 when she marries a U.S. citizen.

The U.S. citizen wants to sponsor both children.

For the 16-year-old daughter, the marriage occurred before her 18th birthday, potentially creating a qualifying stepparent-stepchild relationship.

For the 19-year-old son, however, the marriage occurred after his 18th birthday.

Therefore, the same marriage can produce completely different immigration consequences for two siblings.

The older child may need a different immigration strategy, potentially through the biological parent after that parent becomes a permanent resident or U.S. citizen, depending on the circumstances.

This is why immigration planning for blended families should consider every family member individually.

## Common Mistakes in Stepchild Immigration Cases

Several mistakes can cause unnecessary delays or even jeopardize immigration eligibility.

One of the biggest is waiting until after the child's 18th birthday to marry without understanding the immigration consequences.

Another is assuming the child is automatically included in the biological parent's immigration petition.

Other common problems include filing under the wrong immigration category, failing to provide divorce records from previous marriages, overlooking unlawful entry, ignoring prior removal orders, misunderstanding CSPA protections, allowing a beneficiary to marry without considering the effect on the petition, and assuming an approved I-130 means the green card is guaranteed.

Immigration cases should be evaluated as complete legal histories rather than simply collections of forms.

## Immigration Options for Stepchildren Require Careful Planning

Stepchild immigration can provide a powerful path toward family reunification, but the rules are highly dependent on timing.

The difference between marrying before or after a child's 18th birthday can completely change whether a qualifying stepchild relationship exists under immigration law.

The child's age at later stages of the process, marital status, manner of entry into the United States, immigration history, petitioner's citizenship or permanent-resident status and possible inadmissibility issues can also affect the case.

Families should therefore avoid relying on another person's immigration experience or assuming that every child in a blended family will follow the same process.

## Speak With the Law Office of Todd Becraft About Immigration Options for Your Stepchild

If you are a U.S. citizen or lawful permanent resident with a stepchild, you may have immigration options that can help keep your family together.

The Law Office of Todd Becraft represents individuals and families in complex U.S. immigration matters, including family-based immigration, green cards, adjustment of status, consular processing, immigration petitions, waivers, citizenship, asylum and removal defense.

Every family's situation is different. Before filing an immigration petition, or before making a decision that could affect your child's eligibility, understanding the available options can make an enormous difference.

Call the Law Office of Todd Becraft at 213-388-1821 to schedule a consultation and discuss the immigration options available for your family.

Whether your stepchild is already in the United States or living abroad, the first step is determining which immigration strategy fits the facts of your case.

This article provides general educational information and does not constitute legal advice. Immigration laws, policies, government fees and procedures can change, and individual eligibility depends on the specific facts of each case.`},{slug:"new-restrictions-obtain-renew-us-work-permit-2026",title:"What Are the New Restrictions to Obtain and Renew a U.S. Work Permit? Understanding the Latest USCIS Changes in 2026",date:"August 6, 2026",excerpt:"USCIS has reduced many work permit validity periods from five years to 18 months, changed automatic renewal extensions, and proposed new restrictions for asylum applicants. Here is what every immigrant should know before filing Form I-765.",content:`## Understanding Employment Authorization and Who Qualifies

For millions of immigrants, obtaining a U.S. Employment Authorization Document (EAD), commonly referred to as a work permit, is one of the most significant milestones in their immigration journey. A valid work permit allows eligible noncitizens to work legally in the United States, obtain a Social Security number, qualify for a driver's license in many states, establish financial independence, and support their families while pursuing lawful immigration status.

In recent years, however, U.S. Citizenship and Immigration Services (USCIS) has implemented several major policy changes that affect who qualifies for a work permit, how long Employment Authorization Documents remain valid, and how renewal applications are processed. These changes have left many immigrants, employers, and even immigration professionals with questions.

Adding to the uncertainty, the federal government has proposed additional restrictions for asylum applicants seeking work authorization. If finalized, these proposals would significantly change the timeline for obtaining an Employment Authorization Document and impose new eligibility requirements.

At The Law Office of Todd Becraft, we understand that employment authorization is often more than just permission to work; it is the foundation of financial security for immigrant families. Whether you are applying for your first work permit or preparing to renew an existing Employment Authorization Document, understanding the latest immigration laws is essential to protecting both your ability to work and your long-term immigration goals.

This comprehensive guide explains the current rules, the most important policy changes, who qualifies for employment authorization, and what every immigrant should know before filing Form I-765, Application for Employment Authorization.

## What Is an Employment Authorization Document (EAD)?

An Employment Authorization Document (EAD) is an official identification card issued by U.S. Citizenship and Immigration Services (USCIS) that authorizes certain non-U.S. citizens to legally work in the United States.

The document contains:
- Your photograph
- Alien Registration Number (A-Number), if applicable
- USCIS eligibility category
- Card expiration date
- Employment authorization information

The EAD is proof that an employer may legally hire you under federal immigration law.

However, many immigrants misunderstand what a work permit actually represents.

An Employment Authorization Document does not automatically grant lawful immigration status.

Likewise, a work permit is not:
- A Green Card
- U.S. citizenship
- A visa
- Permanent residency
- Permission to travel internationally
- Protection from deportation

Instead, an Employment Authorization Document is generally tied to an underlying immigration benefit or immigration status. If that underlying status changes or ends, eligibility for employment authorization may also change.

## Why Work Permits Are So Important

For many immigrant families, the ability to work legally is life-changing.

Employment authorization allows immigrants to:
- Earn lawful income
- Pay taxes
- Support their families
- Build credit
- Open bank accounts
- Qualify for many professional licenses
- Obtain a Social Security number
- Establish employment history
- Contribute to the U.S. economy

Without employment authorization, many immigrants face severe financial hardship while waiting for USCIS to process lengthy immigration cases.

Because immigration processing delays can sometimes last months—or even years—Congress created employment authorization for many qualifying applicants so they could legally support themselves while their immigration cases remain pending.

## Who Can Obtain a U.S. Work Permit?

One of the biggest misconceptions is that anyone living in the United States can apply for a work permit.

That is incorrect.

Employment authorization is available only to immigrants who qualify under specific categories established by federal immigration law.

## Adjustment of Status Applicants

Individuals applying for lawful permanent residence through Form I-485 (Adjustment of Status) are often eligible to apply for an Employment Authorization Document while waiting for USCIS to decide their Green Card application.

This category includes many immigrants who are:
- Married to U.S. citizens
- Sponsored by family members
- Sponsored through employment
- Applying under certain humanitarian programs

One of the most common eligibility categories is Category C09, which applies to applicants with pending adjustment-of-status cases.

## Pending Asylum Applicants

Individuals with properly filed asylum applications may qualify to apply for employment authorization after satisfying the applicable waiting period established by immigration regulations.

The waiting period for asylum applicants has become one of the most discussed areas of immigration law due to recent proposed federal changes, which we will discuss later in this guide.

The most common asylum work permit category is Category C08.

## Individuals Granted Asylum

Once asylum has been approved, the individual becomes authorized to work in the United States.

Although employment authorization exists by operation of law, many asylees still apply for an Employment Authorization Document because employers frequently request physical proof of work authorization during the hiring process.

## Refugees

Refugees admitted to the United States are generally authorized to work immediately upon arrival.

Many refugees obtain Employment Authorization Documents even though federal law already recognizes their authorization to work.

## Temporary Protected Status (TPS)

Certain nationals of countries designated for Temporary Protected Status (TPS) may qualify for employment authorization while TPS remains valid.

TPS designations frequently change depending on world events, armed conflicts, environmental disasters, and federal government decisions.

Because each country's TPS designation follows its own timeline, applicants should verify current eligibility before filing.

## DACA Recipients

Individuals approved under Deferred Action for Childhood Arrivals (DACA) may receive Employment Authorization Documents while maintaining DACA eligibility.

Although DACA has faced years of litigation and policy changes, existing recipients who continue meeting program requirements may remain eligible for employment authorization under current federal procedures.

## Humanitarian Immigration Programs

Several humanitarian immigration categories may also permit employment authorization.

Examples include:
- U Visa applicants
- T Visa applicants
- Violence Against Women Act (VAWA) applicants
- Certain parole programs
- Special Immigrant Juvenile Status (SIJS)
- Certain humanitarian parole recipients

Eligibility depends entirely upon the applicant's specific immigration circumstances.

## Who Does NOT Automatically Qualify?

Just as important as knowing who qualifies is understanding who does not automatically receive employment authorization.

Many immigrants mistakenly believe they may legally work simply because they:
- Entered the United States legally
- Married a U.S. citizen
- Filed an immigration petition
- Have children who are U.S. citizens
- Have lived in the country for many years
- Are waiting for an immigration interview
- Have a pending consultation with an attorney

None of these circumstances alone creates employment authorization.

## Case Study: Tourist Visa Holder

Sofia enters the United States on a B-2 tourist visa.

Three months later, she marries a U.S. citizen.

Although she immediately becomes eligible to begin the adjustment-of-status process, she cannot legally start working the day after the wedding.

She must first properly file her Green Card application, submit Form I-765 if eligible, and wait until USCIS approves her Employment Authorization Document—or otherwise obtain authorization through another qualifying category.

Beginning employment before receiving authorization may create immigration complications depending on the circumstances of the case.

## Common Misconception: Filing an Immigration Application Does Not Automatically Allow You to Work

Another misunderstanding involves pending immigration cases.

Simply filing paperwork with USCIS does not automatically authorize employment.

## Case Study: Pending Green Card Applicant

David files Form I-485 after marrying a U.S. citizen.

His attorney submits both his adjustment-of-status application and Form I-765 at the same time.

David receives USCIS receipt notices two weeks later.

Although his Green Card application is pending, and USCIS has accepted his work permit application for processing, David cannot legally begin working until USCIS approves his Employment Authorization Document or another independent basis for employment authorization exists.

Many immigrants mistakenly believe that a receipt notice serves as work authorization.

In most cases, it does not.

## Why USCIS Closely Regulates Work Permits

Employment authorization has become one of the most scrutinized areas of immigration policy.

USCIS must balance several competing priorities:
- Protecting the U.S. labor market
- Preventing immigration fraud
- Conducting national security screening
- Verifying applicant identities
- Processing millions of immigration applications annually

Recent administrations have taken different approaches to employment authorization.

Some policies expanded work permit validity periods to reduce processing delays.

More recent policy changes have shortened validity periods and increased security screening, resulting in more frequent renewals for many applicants.

These changes reflect the federal government's effort to strengthen immigration vetting while managing one of the largest immigration systems in the world.

## Why These New Changes Matter

If you received a work permit several years ago, you may be surprised to learn that the rules governing Employment Authorization Documents have changed significantly.

Many immigrants who once received five-year work permits may now receive documents valid for only 18 months, depending on their immigration category.

Similarly, applicants who previously relied on automatic extensions while waiting for USCIS to process renewals may discover that those protections have changed substantially.

Understanding these new rules is essential because an expired Employment Authorization Document can interrupt employment, affect employer compliance with federal law, and create unnecessary financial hardship.

Fortunately, most problems can be avoided through early planning and proper legal guidance.

## Major Change #1: USCIS Reduced Certain Work Permit Validity Periods from Five Years to 18 Months

One of the most significant policy changes occurred in December 2025.

In 2023, USCIS expanded the validity period of Employment Authorization Documents for several immigration categories from two years to five years. The purpose was to reduce the growing backlog of renewal applications and minimize employment interruptions caused by long processing times.

However, in late 2025, USCIS reversed course.

For many applicants, the maximum validity period for newly issued work permits was reduced from five years to 18 months.

According to USCIS, the agency adopted the shorter validity period to allow more frequent security screening, identity verification, and eligibility reviews while applicants remain in pending immigration proceedings.

The policy primarily affects several of the most common immigration categories, including:
- Pending adjustment of status applicants (Category C09)
- Pending asylum applicants (Category C08)
- Refugees
- Individuals granted asylum
- Applicants seeking cancellation of removal
- Applicants requesting withholding of removal
- Certain humanitarian immigration categories

This means that immigrants who previously renewed their work permits once every five years may now need to renew them every year and a half.

## Why Did USCIS Make This Change?

USCIS stated that immigration benefits should reflect an applicant's current eligibility rather than allowing long periods to pass without updated screening.

The agency explained that shorter Employment Authorization Documents help:
- Conduct more frequent background checks
- Verify that applicants continue to qualify
- Detect fraud more quickly
- Improve national security screening
- Maintain accurate immigration records

Supporters argue that more frequent review strengthens the integrity of the immigration system.

Critics, however, argue that shorter validity periods create unnecessary paperwork, increase costs, burden employers, and overwhelm USCIS with additional renewal applications.

Regardless of political opinion, the new policy means immigrants must now pay much closer attention to their expiration dates.

## Does Every Work Permit Now Last Only 18 Months?

No.

One of the biggest misconceptions is that every Employment Authorization Document now expires after 18 months.

That is incorrect.

The 18-month limitation applies only to specific immigration categories identified by USCIS.

Other work authorization categories continue to follow different validity periods depending on:
- Immigration classification
- Underlying visa
- Temporary Protected Status designation
- Employment category
- Federal regulations
- Country-specific programs

Each case should be reviewed individually.

## What Happens If You Already Have a Five-Year Work Permit?

Many clients ask:

"My work permit says it expires in 2029. Will USCIS cancel it because of the new policy?"

Generally, no.

If USCIS already issued your Employment Authorization Document with a five-year expiration date before the new policy became effective, the agency does not automatically shorten the expiration date printed on your card.

However, when you later apply for renewal, the new validity rules may apply to the newly issued card.

## Case Study: Existing Five-Year Work Permit

Miguel received his adjustment-of-status Employment Authorization Document in September 2025.

The card expires in September 2030.

Several months later, USCIS announces that many future Employment Authorization Documents will only be valid for 18 months.

Miguel's current card generally remains valid until its printed expiration date.

However, when he later files a renewal, USCIS may issue a card valid for only 18 months instead of another five-year document.

Understanding the difference between current validity and future renewals is important.

## Major Change #2: Automatic Renewal Extensions Have Changed

Perhaps an even bigger surprise for many immigrants involves automatic extensions.

For years, certain immigrants who filed timely Employment Authorization Document renewals received automatic extensions while USCIS processed their new applications.

This policy helped prevent workers from losing their jobs simply because USCIS processing times were slow.

The automatic extension protected eligible workers even after the expiration date printed on their cards.

However, these protections have changed significantly.

## Understanding Automatic Extensions

An automatic extension is not the same as receiving a new work permit.

Instead, it temporarily allows certain applicants to continue working after their current Employment Authorization Document expires while USCIS reviews the renewal application.

This protection exists only if specific legal requirements are satisfied.

Not every applicant qualifies.

## Previous Automatic Extension Rules

Under earlier USCIS policies, many eligible applicants received automatic employment authorization extensions after timely filing Form I-765.

To address growing processing delays, the federal government expanded these protections.

For many categories, automatic extensions increased from 180 days to 540 days.

This allowed eligible immigrants to continue working while waiting for USCIS to process lengthy renewal applications.

The expansion protected thousands of workers from unnecessary employment interruptions.

## The October 2025 Policy Change

Beginning with many renewal applications filed after October 30, 2025, the broad automatic extension policy changed significantly.

Many applicants who previously relied upon automatic extensions may no longer receive them simply because they filed a renewal application.

Instead, eligibility now depends much more heavily on:
- Filing date
- Immigration category
- Applicable federal regulations
- Individual USCIS guidance
- Specific statutory authority

Applicants should never assume that filing Form I-765 automatically allows them to continue working after the expiration date on their Employment Authorization Document.

Every renewal should be reviewed individually.

## Why This Matters

Employment authorization affects far more than immigration paperwork.

Without valid authorization:
- Employers may be prohibited from continuing employment
- Payroll may be interrupted
- Health insurance may be affected
- Retirement contributions may stop
- Financial hardship may occur

A delayed renewal can affect an entire family.

## Case Study: Filing Too Late

Lucia works for a healthcare provider.

Her Employment Authorization Document expires on August 15.

She assumes that filing her renewal application one week before expiration automatically allows her to continue working.

Unfortunately, her immigration category no longer qualifies under the automatic extension rules that previously applied.

Her employer conducts an I-9 review and determines that Lucia no longer has evidence of valid employment authorization.

Although Lucia remains eligible to renew her work permit, she must stop working until USCIS approves the new Employment Authorization Document.

Had she consulted an immigration attorney months earlier, she could have better prepared for possible processing delays.

## Case Study: Early Planning Prevents Employment Gaps

David receives an Employment Authorization Document that expires in January.

Six months before expiration, he schedules a consultation with an immigration attorney.

Together they review:
- Immigration category
- Filing deadlines
- Supporting evidence
- USCIS processing times
- Current policy changes

His renewal application is filed as soon as regulations permit.

Although USCIS processing remains lengthy, early planning significantly reduces the risk of employment interruption.

Preparation often makes the difference between uninterrupted employment and months without income.

## Restriction #1: Not Every Renewal Is Automatic

Many immigrants mistakenly believe:

"I've renewed my work permit before, so renewing again should be simple."

Unfortunately, that assumption can create serious problems.

Each renewal requires USCIS to determine whether the applicant still qualifies under the underlying immigration category.

For example, a pending adjustment-of-status applicant generally remains eligible only while the Form I-485 application remains pending.

If USCIS denies the adjustment application, eligibility for employment authorization may also end.

Likewise, asylum applicants must continue meeting the requirements applicable to pending asylum cases.

Every renewal involves a fresh review of eligibility.

## Restriction #2: Your Underlying Immigration Case Controls Your Work Permit

One of the most important concepts in immigration law is this: a work permit is usually connected to another immigration benefit.

Examples include:
- Pending asylum
- Pending Green Card application
- Temporary Protected Status
- DACA
- Humanitarian parole
- Refugee status
- U Visa
- VAWA

If the underlying immigration case changes, Employment Authorization Document eligibility may change as well.

The work permit does not exist independently.

## Restriction #3: Criminal History Can Affect Renewal

USCIS conducts security screening during both initial applications and renewals.

Certain criminal convictions may:
- Affect the underlying immigration case
- Create inadmissibility issues
- Result in removal proceedings
- Affect eligibility for continued employment authorization

Not every arrest prevents renewal.

However, applicants should never assume that criminal history has no immigration consequences.

Experienced legal review is essential before filing.

## Restriction #4: Fraud Can Permanently Damage an Immigration Case

Immigration fraud remains one of the most serious issues USCIS investigates.

Examples include:
- Fake marriages
- False identities
- Fraudulent Social Security numbers
- Counterfeit immigration documents
- False employment history
- Material misrepresentations

Even if a fraudulent document was submitted years earlier, USCIS may review prior immigration filings during renewal applications.

Honesty remains critical throughout every stage of the immigration process.

## Restriction #5: Filing Errors Can Delay Approval

Many Employment Authorization Document delays occur because of avoidable mistakes.

Common filing errors include:
- Wrong eligibility category
- Missing signatures
- Incorrect filing fee
- Outdated forms
- Missing photographs
- Failure to respond to a Request for Evidence
- Incorrect mailing address
- Failure to update address after moving

Simple mistakes can add months to processing times.

Professional preparation often helps reduce unnecessary delays.

## Why Early Renewal Has Become More Important Than Ever

Under today's immigration policies, waiting until the last minute can have serious consequences.

Because many work permits now last only 18 months, automatic extension protections have changed, and USCIS processing times remain unpredictable, immigrants should begin preparing well before their Employment Authorization Document expires.

The earlier an attorney can review your case, the more options may be available to protect uninterrupted employment.

## Proposed Changes to Asylum Work Permits—What Every Asylum Seeker Should Know

For decades, one of the most important protections available to individuals seeking asylum in the United States has been the opportunity to obtain an Employment Authorization Document (EAD) while their asylum application remains pending. Because asylum cases often take years to resolve, employment authorization has allowed applicants to support themselves and their families while waiting for a decision from U.S. Citizenship and Immigration Services (USCIS) or the Immigration Court.

However, in February 2026, the Department of Homeland Security (DHS) published a proposed regulation that would significantly change the rules governing asylum-based work permits. If finalized, these changes would represent one of the most substantial reforms to asylum employment authorization in decades.

It is important to understand that, as of the date of this article, these changes are proposed, not final law. They are not currently in effect. However, because they could dramatically affect future asylum applicants, it is important to understand what has been proposed and how these changes could impact your case.

At The Law Office of Todd Becraft, we closely monitor every significant development in immigration law. Our goal is to help clients prepare for changes before they happen so they can make informed decisions about their future.

## Why Is the Government Proposing These Changes?

According to the Department of Homeland Security, the proposed rule is intended to:
- Discourage fraudulent asylum claims filed primarily to obtain work authorization
- Reduce incentives for unlawful migration
- Strengthen national security screening
- Ensure that asylum applicants are fully vetted before receiving permission to work
- Align employment authorization more closely with the government's ability to process asylum cases

Supporters argue that these reforms would preserve the integrity of the asylum system by ensuring that only individuals with legitimate asylum claims receive employment authorization.

Critics argue that the proposals could force legitimate asylum seekers—many of whom have fled persecution, violence, or political oppression—to remain unemployed for extended periods while their asylum applications are pending.

Regardless of one's perspective, these proposed changes could significantly alter how asylum applicants obtain work authorization.

## Proposed Change #1: The Asylum Waiting Period Would Increase from 150 Days to 365 Days

Currently, asylum applicants generally become eligible to file Form I-765 after their asylum application has been pending for 150 days, provided they have not caused delays in the asylum process.

USCIS generally cannot approve the work permit until at least 180 days have elapsed.

The proposed regulation would dramatically change that timeline.

Instead of waiting approximately five months before filing for employment authorization, asylum applicants would have to wait 365 calendar days before they could even submit an initial Employment Authorization Document application.

In practical terms, this means an asylum seeker could spend an entire year without even being permitted to apply for a work permit.

## Why Does This Matter?

For many asylum seekers, employment authorization is not simply a convenience—it is essential for survival.

Most asylum applicants arrive in the United States with limited financial resources after fleeing persecution in their home countries.

Without legal authorization to work, they may struggle to:
- Pay rent
- Purchase food
- Obtain transportation
- Support their children
- Access healthcare
- Build financial stability

Doubling the waiting period could create significant hardships for thousands of families.

## Case Study: A Family Seeking Safety

Consider the following example.

Daniela and her two children flee political persecution in Venezuela.

After arriving in the United States, she promptly files a complete asylum application.

Under current rules, Daniela generally becomes eligible to apply for employment authorization after satisfying the existing waiting period.

Under the proposed regulation, however, she would have to wait an entire year before filing Form I-765.

Even after filing, USCIS would still need time to process her application.

Without employment authorization, Daniela could struggle to support her family despite having followed every legal requirement.

## Proposed Change #2: USCIS Could Pause Initial Asylum Work Permit Applications

Perhaps one of the least understood proposals involves what many immigration attorneys have called the "asylum work permit freeze."

Under the proposal, USCIS could temporarily stop accepting initial Employment Authorization Document applications from asylum applicants under certain circumstances.

Specifically, if the agency determines that the average processing time for affirmative asylum cases exceeds 180 days during a designated review period, USCIS would have authority to suspend acceptance of new asylum work permit applications.

The suspension would remain in place until processing times improve.

This proposal has generated considerable concern because asylum applicants would have no control over the government's processing times.

## What Could This Mean?

Imagine that an asylum applicant patiently waits the proposed 365 days before becoming eligible to apply for a work permit.

On the day the waiting period ends, USCIS announces that it has temporarily suspended acceptance of new asylum work permit applications because affirmative asylum processing times remain above the required threshold.

The applicant would have completed the entire waiting period but still could not submit Form I-765.

This means some asylum seekers could wait significantly longer than one year before even beginning the Employment Authorization Document process.

## Case Study: Waiting Beyond One Year

Alejandro files a complete asylum application immediately after arriving in the United States.

He carefully follows every USCIS instruction.

He attends every appointment.

He does not delay his case.

After waiting 365 days, he prepares his Employment Authorization Document application.

However, USCIS has temporarily paused acceptance of initial asylum work permit applications due to asylum processing times.

Although Alejandro complied with every legal requirement, he cannot yet submit Form I-765.

His ability to work now depends on factors entirely outside his control.

## Proposed Change #3: Illegal Entry Could Affect Eligibility for a Work Permit

Another highly discussed proposal concerns the manner in which an asylum applicant entered the United States.

Under the proposed regulation, certain individuals who entered between official ports of entry could become ineligible for asylum-based employment authorization.

However, the proposal contains important exceptions.

It is not accurate to say that every person who crossed the border unlawfully would automatically be denied a work permit.

Instead, the proposal generally provides that certain applicants may remain eligible if they:
- Presented themselves to immigration authorities within approximately 48 hours after entry
- Expressed a fear of persecution
- Indicated an intention to seek asylum
- Established good cause for entering outside an official port of entry
- Qualified under certain exceptions, including protections for some unaccompanied children

Each case would depend on its individual facts.

## Why Is the 48-Hour Rule Significant?

Many asylum seekers flee dangerous situations with little time to plan their journey.

Some enter the United States in remote areas because official ports of entry are inaccessible or because they are escaping immediate threats.

Under the proposed regulation, individuals who promptly report to immigration authorities and express their intention to seek asylum may still qualify under one of the proposed exceptions.

However, applicants who wait several days—or longer—to contact immigration authorities could face additional obstacles when seeking employment authorization.

## Case Study: Promptly Reporting to Authorities

José escapes gang violence in Central America.

After entering the United States, he immediately approaches Border Patrol officers and explains that he fears returning to his country.

He requests asylum within the required timeframe.

If the proposed regulation becomes final, José may qualify under one of the exceptions that preserve eligibility for employment authorization.

Now consider another individual who enters the United States but waits several weeks before contacting immigration authorities.

That applicant may face significantly greater difficulty obtaining an Employment Authorization Document if the proposal becomes law.

## Additional Proposed Restrictions

The proposed regulation contains several other provisions that could affect asylum applicants seeking employment authorization.

## Expanded Background Screening

USCIS would continue strengthening identity verification and security screening before issuing Employment Authorization Documents.

Applicants may experience additional review of:
- Biometrics
- Criminal history
- Immigration history
- National security information
- Identity verification

## Increased Biometrics Requirements

The proposal would require additional biometrics collection for certain Employment Authorization Document applications.

Failure to attend scheduled biometrics appointments could result in denial of the work permit application.

## Criminal History Restrictions

The proposed regulation would expand the circumstances under which criminal conduct may affect Employment Authorization Document eligibility.

Applicants with arrests or criminal convictions should always consult an experienced immigration attorney before filing.

## One-Year Asylum Filing Deadline

Certain applicants who fail to submit their asylum application within one year of arriving in the United States could encounter additional restrictions under the proposed Employment Authorization Document rules.

Although existing asylum law already contains a one-year filing deadline with certain exceptions, the proposal would place additional emphasis on timely asylum filings when evaluating employment authorization eligibility.

## USCIS Discretion

Another important proposal would expressly recognize that approval of an asylum-based Employment Authorization Document remains discretionary.

This means USCIS would evaluate each case individually rather than automatically approving every applicant who satisfies the minimum waiting period.

## What Should Asylum Applicants Do Right Now?

Fortunately, these proposals are not currently final law.

Applicants should avoid making immigration decisions based solely on proposed regulations.

Instead, asylum seekers should focus on:
- Filing complete asylum applications
- Keeping copies of every immigration document
- Maintaining records of entry into the United States
- Attending every interview and hearing
- Avoiding unnecessary delays
- Consulting experienced immigration counsel regarding current eligibility

Immigration law changes frequently.

Professional guidance ensures applicants understand the rules that apply today—not simply those being discussed in future proposals.

## Why Legal Representation Has Become More Important Than Ever

Employment authorization rules are becoming increasingly complex.

An experienced immigration attorney can help determine:
- Whether you currently qualify for employment authorization
- Whether proposed changes affect your case
- Which Employment Authorization Document category applies
- When you may legally file Form I-765
- Whether delays affect your eligibility
- Whether criminal history creates immigration concerns
- Whether you qualify for any exceptions

Attempting to navigate changing immigration regulations without professional legal guidance may lead to unnecessary delays or costly mistakes.

## Looking Ahead

Whether or not these proposed asylum Employment Authorization Document restrictions become final, they demonstrate an important reality: immigration law continues to evolve.

Applicants who rely on outdated information from friends, social media, or old internet articles may unknowingly follow rules that are no longer accurate.

Remaining informed and working with an experienced immigration attorney is the best way to protect your rights and your future.

## Frequently Asked Questions About Work Permits

## Can I Start Working as Soon as I File Form I-765?

No.

One of the most common misconceptions is that simply filing Form I-765, Application for Employment Authorization, allows an immigrant to begin working immediately.

In most cases, this is incorrect.

Unless another law independently authorizes employment, you generally must wait until USCIS approves your Employment Authorization Document before accepting employment.

Receiving a USCIS receipt notice does not usually authorize employment.

## Does Having a Work Permit Mean I Have Legal Immigration Status?

Not necessarily.

An Employment Authorization Document authorizes employment—it does not automatically grant lawful immigration status.

For example:
- An asylum applicant may have a valid work permit while the asylum application remains pending
- A person with a pending adjustment-of-status application may possess an Employment Authorization Document even though USCIS has not yet approved a Green Card
- Certain humanitarian applicants may receive employment authorization while their underlying immigration cases remain undecided

Your immigration status depends upon the underlying immigration benefit—not simply the existence of an Employment Authorization Document.

## Can My Work Permit Be Revoked?

Yes.

USCIS may terminate employment authorization if:
- The underlying immigration benefit is denied
- Eligibility no longer exists
- Fraud or material misrepresentation is discovered
- Certain criminal conduct affects eligibility
- Federal regulations require termination

Because each immigration category follows different rules, applicants should immediately consult an immigration attorney if they receive notices questioning their eligibility.

## Does a Work Permit Protect Me From Deportation?

No.

Another widespread misconception is that possessing a valid Employment Authorization Document prevents removal from the United States.

It does not.

A work permit authorizes employment. It does not provide immunity from removal proceedings if the individual becomes removable under immigration law.

For example, an asylum applicant with a valid Employment Authorization Document may still be placed in removal proceedings if the underlying asylum claim is denied or other legal issues arise.

## Can I Travel Outside the United States With Only a Work Permit?

Generally, no.

A work permit is not a travel document.

Many immigrants mistakenly believe that an Employment Authorization Document allows international travel.

For many applicants with pending adjustment-of-status cases, leaving the United States without Advance Parole may jeopardize the immigration application.

Before making any international travel plans, consult an experienced immigration attorney to determine whether additional travel authorization is required.

## What Happens If My Work Permit Expires?

If your Employment Authorization Document expires and you do not qualify for an automatic extension or another independent basis for employment authorization, you generally may no longer continue working legally.

Employers have legal obligations under federal law to verify continuing employment authorization.

This is one reason why early renewal planning is so important.

## The Most Common Mistakes Applicants Make

Although USCIS processing times are beyond an applicant's control, many delays result from avoidable mistakes.

## Waiting Too Long to Renew

One of the most common errors is waiting until the last few weeks before expiration.

Because many Employment Authorization Documents now remain valid for only 18 months, the renewal cycle arrives much sooner than many immigrants expect.

USCIS processing times vary.

Waiting until the last minute increases the likelihood of an employment interruption.

## Filing Under the Wrong Eligibility Category

Every Employment Authorization Document category has specific eligibility requirements.

Examples include:
- C08 – Pending asylum applicants
- C09 – Pending adjustment of status
- A03 – Refugees
- A05 – Asylees

Selecting the wrong eligibility category can result in delays, Requests for Evidence (RFEs), or denials.

## Failing to Respond to USCIS Requests

USCIS frequently issues Requests for Evidence (RFEs) when additional documentation is needed.

Ignoring an RFE or responding after the deadline may result in denial of the application.

Always read USCIS notices carefully and respond within the required timeframe.

## Moving Without Updating USCIS

Federal law generally requires many noncitizens to notify USCIS after changing their address.

Failure to update your address may cause you to miss:
- Biometrics appointments
- Interview notices
- Requests for Evidence
- Approval notices
- Employment Authorization Documents mailed by USCIS

Missing important correspondence can delay your case significantly.

## Using Incorrect Forms

USCIS periodically updates immigration forms.

Submitting an outdated version of Form I-765 may result in rejection.

Always verify that you are using the current edition accepted by USCIS.

## Failing to Attend Biometrics Appointments

Many immigration benefits require biometrics.

Failure to attend a scheduled appointment without obtaining a proper rescheduling may lead to denial.

Always attend every appointment unless USCIS officially approves a rescheduling request.

## Employer Responsibilities Under Form I-9

Employment authorization affects employers as well as employees.

Federal law requires employers to complete Form I-9, Employment Eligibility Verification, for every employee hired in the United States.

Employers must verify both identity and authorization to work.

However, employers also have important legal responsibilities.

They cannot:
- Demand unnecessary immigration documents
- Discriminate based on national origin
- Refuse valid documentation
- Treat immigrants differently because of citizenship status if federal law prohibits such discrimination

Employers should also understand that changes to automatic Employment Authorization Document extensions may affect how Form I-9 documentation is reviewed.

When in doubt, both employers and employees should seek legal guidance.

## Practical Tips to Protect Your Employment Authorization

Preparation remains one of the best ways to avoid unnecessary immigration problems.

## Monitor Your Expiration Date

Do not rely on memory.

Keep reminders several months before your Employment Authorization Document expires.

## Keep Copies of Every Filing

Maintain organized copies of:
- Form I-765
- USCIS receipt notices
- Approval notices
- Employment Authorization Documents
- Immigration petitions
- Supporting evidence

Good recordkeeping often simplifies future renewals.

## Save Every USCIS Notice

Even routine correspondence may become important later.

Keep both paper and electronic copies whenever possible.

## Respond Promptly

Never ignore mail from USCIS.

Many immigration deadlines cannot be extended.

## Notify USCIS of Address Changes

Moving without updating USCIS can delay or jeopardize your immigration case.

Always update your address promptly if required.

## Seek Legal Advice Before Problems Arise

Many immigration issues become far easier to resolve when addressed early.

Waiting until employment authorization expires—or after USCIS issues a denial—may limit available options.

## Case Study: Early Legal Guidance Prevents a Crisis

María received an Employment Authorization Document through her pending adjustment-of-status application.

She assumed the renewal process would be identical to her previous application.

Fortunately, six months before expiration she consulted an immigration attorney.

During the consultation, her attorney discovered:
- USCIS had changed Employment Authorization Document validity periods
- Automatic renewal protections had changed
- Additional supporting evidence would strengthen the renewal application

Because María prepared early, she filed her renewal as soon as regulations permitted.

Although USCIS processing remained lengthy, she avoided many of the problems that affect applicants who wait until the final weeks before expiration.

## Immigration Laws Continue to Change

One of the greatest challenges facing immigrants today is the rapid pace of immigration policy changes.

Employment authorization rules that existed only two or three years ago may no longer apply.

Examples include:
- Reduced Employment Authorization Document validity periods
- New automatic renewal requirements
- Proposed asylum Employment Authorization Document restrictions
- Updated filing procedures
- Revised USCIS forms
- New background screening requirements

This is why relying on outdated internet articles or social media posts can be risky.

Immigration law is constantly evolving.

## Why Experienced Legal Representation Matters

Every immigration case is unique.

Two applicants with similar immigration histories may receive different outcomes depending on:
- Immigration category
- Criminal history
- Prior immigration violations
- Filing dates
- USCIS processing changes
- Court decisions
- Federal regulations

An experienced immigration attorney can evaluate your circumstances and develop a strategy tailored to your case.

Professional legal guidance may help:
- Determine eligibility for employment authorization
- Identify the correct Form I-765 category
- Avoid filing errors
- Respond to Requests for Evidence
- Address prior immigration issues
- Protect pending Green Card applications
- Navigate asylum-related employment authorization rules
- Prepare timely renewal applications
- Minimize employment interruptions

## How The Law Office of Todd Becraft Can Help

At The Law Office of Todd Becraft, we understand how important employment authorization is for immigrant families.

Whether you are applying for your first work permit, renewing an existing Employment Authorization Document, adjusting your status, seeking asylum, or facing changing immigration policies, our legal team is committed to protecting your rights and helping you navigate every stage of the immigration process.

We provide individualized legal guidance for clients throughout Southern California and beyond, carefully evaluating each case to determine the best strategy under current immigration law.

## Final Thoughts

Recent USCIS policy changes have fundamentally changed the way many immigrants obtain and renew Employment Authorization Documents. The reduction of validity periods from five years to 18 months for many categories, changes to automatic renewal protections, and proposed restrictions affecting asylum applicants demonstrate that employment authorization rules continue to evolve.

The most important lesson is simple: do not wait until your work permit is about to expire.

Early planning, accurate filings, and experienced legal guidance can help protect your ability to work legally while avoiding unnecessary delays, denials, and interruptions in employment.

If you have questions about obtaining, renewing, or replacing a work permit—or if you are concerned about how recent immigration policy changes may affect your case—The Law Office of Todd Becraft is here to help.

Our experienced immigration team can evaluate your eligibility, explain your options, and guide you through every step of the process.

Call The Law Office of Todd Becraft today at (213) 388-1821 to schedule a confidential consultation and protect your right to work legally in the United States.`},{slug:"children-undocumented-parents-us-citizens-birthright",title:"Children of Undocumented Parents Are U.S. Citizens by Birthright: Understanding Your Rights and Your Family's Future",date:"July 19, 2026",excerpt:"For many immigrant families, one of the biggest misconceptions surrounding U.S. immigration law is whether a child born in the United States automatically becomes a U.S. citizen if their parents are undocumented. The answer, under current United States law, is yes.",content:`For many immigrant families, one of the biggest misconceptions surrounding U.S. immigration law is whether a child born in the United States automatically becomes a U.S. citizen if their parents are undocumented.

The answer, under current United States law, is yes.

A child born in the United States is generally a U.S. citizen at birth, regardless of the immigration status of the parents. This constitutional protection has existed for more than 150 years and has helped millions of families build their lives in America.

However, while a U.S.-born child receives citizenship automatically, that citizenship does not immediately provide legal immigration status to undocumented parents. Understanding the difference is essential for making informed decisions about your family's future.

At The Law Office of Todd Becraft, we help immigrant families understand their rights, explore available immigration options, and create legal strategies that protect both parents and children.

## What Is Birthright Citizenship?

Birthright citizenship is the legal principle that grants U.S. citizenship to nearly every child born on American soil.

This right comes from the Fourteenth Amendment of the United States Constitution, adopted in 1868, which states that:

"All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States."

In practical terms, this means that if a baby is born in California, Texas, New York, Florida, or any other U.S. state or territory, that child is generally recognized as an American citizen from birth.

The immigration status of the parents does not determine the child's citizenship.

## Does It Matter If the Parents Entered Without Inspection?

No.

Whether the parents:
- Entered without inspection
- Overstayed a visa
- Have Temporary Protected Status (TPS)
- Have Deferred Action
- Are awaiting asylum
- Have pending immigration cases
- Have no lawful immigration status

Their child born in the United States is generally still a U.S. citizen at birth.

This constitutional protection applies broadly to nearly all children born within U.S. jurisdiction.

## What Rights Does a U.S. Citizen Child Have?

A child who is born in the United States enjoys the same constitutional protections and legal rights as any other American citizen.

These rights include:
- Receiving a U.S. birth certificate
- Applying for a U.S. passport
- Receiving a Social Security Number
- Living and working in the United States
- Voting once they reach legal voting age
- Accessing public education
- Eligibility for certain government benefits, depending on program requirements
- The ability to sponsor certain qualifying relatives in the future

These rights belong to the child—not automatically to the parents.

## A Common Misunderstanding

One of the most common myths in immigration law is:

"If I have a U.S. citizen baby, I automatically receive legal status."

Unfortunately, that is not true.

Having a U.S. citizen child does not automatically:
- Stop deportation proceedings
- Provide a Green Card
- Grant lawful status
- Prevent ICE enforcement
- Provide work authorization
- Lead to automatic citizenship for parents

Each immigration case is unique and depends on multiple factors.

## When Can a U.S. Citizen Child Petition for Their Parents?

A U.S. citizen child may petition for a parent only after turning 21 years old.

Even then, eligibility depends on many legal considerations.

Parents may still face challenges involving:
- Unlawful presence
- Prior removal orders
- Immigration violations
- Illegal entries
- Criminal history
- Bars to admissibility

In many situations, additional waivers or legal strategies may still be necessary.

This is why consulting an experienced immigration attorney is so important.

## Case Study: Maria and José

Maria and José entered the United States without inspection over fifteen years ago.

They settled in Los Angeles, worked hard, paid taxes using ITIN numbers, and raised three children.

Their youngest daughter, Rosa, was born in California.

Because Rosa was born in the United States, she became a U.S. citizen immediately after birth.

However, Maria and José remained undocumented.

For years, they believed that having an American child automatically protected them from deportation.

Unfortunately, that belief was incorrect.

When they finally consulted an immigration attorney, they learned they still needed to explore legal options such as:
- Family-based immigration
- Waivers
- Adjustment strategies
- Humanitarian relief
- Other available forms of immigration relief

By obtaining proper legal guidance, they were able to create a long-term plan instead of relying on misinformation.

## Case Study: Carlos

Carlos entered the United States with a tourist visa but remained after it expired.

Years later, his son was born in Texas.

Carlos assumed that because his child was an American citizen, he could immediately apply for permanent residency.

After speaking with an immigration lawyer, he discovered that his immigration history required careful legal analysis before filing any applications.

Instead of submitting paperwork that could have harmed his case, he developed a strategic immigration plan tailored to his circumstances.

Proper legal advice saved him significant time, money, and stress.

## Why Birth Certificates Matter

A child's U.S. birth certificate serves as official evidence of birth in the United States.

Parents should keep multiple certified copies because they are often required when applying for:
- U.S. passports
- School enrollment
- Social Security benefits
- Government identification
- Immigration petitions in the future

Protecting these important documents is essential.

## Can Immigration Authorities Deport Parents of U.S. Citizen Children?

Yes.

Although immigration authorities often consider family ties, having a U.S. citizen child does not automatically prevent removal from the United States.

Immigration courts evaluate many different factors.

Every case depends on:
- Immigration history
- Criminal history
- Humanitarian factors
- Existing immigration applications
- Family relationships
- Available forms of relief

This is why individualized legal representation is critical.

## What Happens If Parents Are Detained?

If undocumented parents are detained, their U.S. citizen children remain U.S. citizens.

However, parents should have an emergency preparedness plan that includes:
- Trusted caregivers
- Medical information
- School records
- Birth certificates
- Passports
- Important financial documents
- Emergency contact information

Planning ahead can help reduce uncertainty during difficult situations.

## Can a U.S. Citizen Child Lose Citizenship?

Generally, no.

Birthright citizenship is permanent unless citizenship was obtained through fraud or voluntarily relinquished under very limited legal circumstances.

A child born in the United States does not lose citizenship simply because:
- The family moves abroad
- Parents are deported
- Parents are undocumented
- Parents return to their home country

The child's citizenship remains intact.

## Common Immigration Myths

**Myth #1: Having a U.S. Citizen Baby Gives Parents a Green Card**

False.

There is no automatic Green Card simply because a child is born in the United States.

**Myth #2: The Government Can Take Away the Child's Citizenship Because the Parents Are Undocumented**

False.

Citizenship belongs to the child.

The parents' immigration status generally does not affect the child's citizenship.

**Myth #3: Parents Should Avoid Registering the Baby**

False.

Parents should obtain:
- Birth certificate
- Social Security Number
- U.S. passport when appropriate

These documents protect the child's legal rights.

**Myth #4: Every Parent Can Obtain Legal Status Once Their Child Turns 21**

Not necessarily.

Many parents still face legal obstacles that require experienced legal representation.

## Why Legal Advice Matters

Immigration law is one of the most complex areas of American law.

Every family's circumstances are different.

Factors that may affect your case include:
- Date of entry
- Method of entry
- Prior immigration applications
- Criminal history
- Marriage to a U.S. citizen
- Previous removal proceedings
- Immigration waivers
- Humanitarian protections

An experienced immigration attorney can evaluate your specific situation and identify available legal pathways.

## Frequently Asked Questions

**Is my child automatically a U.S. citizen if born in California?**

Yes. In most cases, children born in the United States are U.S. citizens at birth regardless of their parents' immigration status.

**Can my child sponsor me immediately?**

No. A U.S. citizen child generally must be at least 21 years old before filing a petition for a parent.

**Does having a U.S. citizen child stop deportation?**

No. Citizenship of the child alone does not automatically prevent removal proceedings.

**Can I apply for a Green Card because my child was born here?**

Not automatically. Eligibility depends on your entire immigration history and other legal factors.

**Should I speak with an immigration attorney?**

Absolutely. Receiving individualized legal advice can help you avoid costly mistakes and identify the best legal strategy for your family's future.

## Protect Your Family with Experienced Immigration Guidance

Every immigrant family's story is unique. While birthright citizenship provides important constitutional protections for children born in the United States, parents should not rely on myths or misinformation when making decisions about their immigration future.

Whether you are undocumented, have overstayed a visa, are seeking lawful permanent residence, or want to understand your family's legal options, professional guidance can make all the difference.

At The Law Office of Todd Becraft, we are committed to helping families understand their rights, evaluate their immigration options, and pursue lawful solutions with compassion, integrity, and personalized legal representation.

Our team understands the challenges immigrant families face and is dedicated to guiding clients through every step of the immigration process.

Contact The Law Office of Todd Becraft today to schedule a confidential consultation and learn about the immigration options available to you and your family.`},{slug:"affirmative-vs-defensive-asylum",title:"Affirmative Asylum vs. Defensive Asylum: Understanding the Difference and How the U.S. Asylum Process Works",date:"July 18, 2026",excerpt:"For people who are afraid to return to their home countries because of persecution, asylum may provide a path to protection in the United States. However, applying for asylum is not a single, identical process for every applicant.",content:`For people who are afraid to return to their home countries because of persecution, asylum may provide a path to protection in the United States. However, applying for asylum is not a single, identical process for every applicant.

There are two primary ways an asylum claim may proceed in the United States: affirmative asylum and defensive asylum.

Both processes involve seeking protection based on persecution or a well-founded fear of future persecution, but they begin in very different circumstances. An affirmative asylum case generally starts with U.S. Citizenship and Immigration Services (USCIS), while a defensive asylum case takes place before an immigration judge because the individual is already in removal proceedings.

Understanding the difference between affirmative asylum vs. defensive asylum can be extremely important for immigrants seeking protection in the United States.

## What Is Asylum in the United States?

Asylum is a form of humanitarian protection available to certain people who are physically present in the United States or who arrive in the United States and cannot safely return to their country of origin.

Generally, an applicant must demonstrate past persecution or a well-founded fear of future persecution connected to at least one of five protected grounds:

Race, religion, nationality, political opinion, or membership in a particular social group.

Being afraid to return home, by itself, does not necessarily establish eligibility for asylum. The applicant generally needs to establish the required connection—or "nexus"—between the persecution and a legally protected ground.

For example, someone fleeing generalized economic hardship normally does not qualify for asylum merely because living conditions are difficult. Similarly, being a victim of ordinary crime does not automatically establish an asylum claim.

The legal analysis becomes different when the applicant can demonstrate that the harm was inflicted, or is feared, because of a protected characteristic or protected ground and the other asylum requirements are satisfied.

This distinction is one reason asylum cases can become legally complicated.

## What Is Affirmative Asylum?

Affirmative asylum generally refers to an asylum application made by someone who is not currently in removal proceedings before an immigration judge.

The applicant generally files the appropriate asylum application with USCIS and presents the case through the affirmative asylum process.

The applicant may have originally entered the United States with a visa, entered through another lawful process, or be in another immigration situation that permits the asylum application to proceed affirmatively, depending on the circumstances.

The central distinction is procedural: the applicant is requesting asylum before being placed in removal proceedings.

An affirmative asylum case may involve several important components, including:

Form I-589, Application for Asylum and for Withholding of Removal; a detailed personal declaration; identity documents; evidence of past persecution; medical or psychological documentation when relevant; police or government records when available; witness declarations; photographs; threatening messages; news reports; human-rights documentation; and country-condition evidence.

The specific evidence needed depends heavily on the facts of the individual case.

## Example of an Affirmative Asylum Case

Consider a hypothetical applicant named Daniela.

Daniela was politically active in her home country. She participated in peaceful demonstrations criticizing government corruption and posted political commentary online.

After becoming more visible, Daniela allegedly began receiving threats. Government-linked individuals questioned her family about her activities. She was detained following a demonstration, interrogated about her political involvement, and later received messages warning her to stop criticizing the government.

Daniela eventually traveled to the United States.

She is not currently in removal proceedings and decides to seek asylum.

Her attorney could evaluate whether an affirmative asylum application is appropriate and whether the evidence establishes persecution based on political opinion.

Evidence in a case like Daniela's might include photographs from demonstrations, social-media posts, threatening messages, arrest or detention records, witness declarations, news reports about the political situation, and reports documenting government treatment of political opponents.

No single document necessarily determines the outcome. The evidence must work together to tell a credible and legally sufficient story.

## The Importance of the One-Year Asylum Filing Deadline

One of the most important rules prospective asylum applicants should understand is the one-year filing deadline.

In general, an asylum application must be filed within one year after the applicant's arrival in the United States. Certain exceptions may apply, including qualifying changed circumstances or extraordinary circumstances.

This rule can have enormous consequences.

Imagine that an individual enters the United States and waits several years before seeking legal advice because the person incorrectly assumes there is no deadline.

The underlying fear of persecution may be genuine, but the delay can create an additional legal issue that must be addressed.

Anyone considering asylum should therefore obtain legal advice as early as possible rather than assuming that waiting will have no effect on the case.

## What Happens During an Affirmative Asylum Case?

After an affirmative asylum application is properly filed, USCIS processes the case according to applicable procedures.

An asylum officer may interview the applicant and evaluate the application, testimony, credibility, supporting documents, country conditions, and applicable law.

The interview can be one of the most important stages of the process.

The applicant may be questioned about why they left their country, what happened to them, who harmed or threatened them, why they believe they were targeted, whether they sought government protection, why they cannot relocate safely within their country, and what they believe would happen if they returned.

Consistency can be extremely important.

For example, suppose an applicant's declaration states that an attack occurred in March, but during the interview the applicant repeatedly says it happened in July. A simple mistake does not automatically destroy an asylum claim, particularly when trauma, translation issues, memory, or other circumstances provide an explanation. Nevertheless, significant inconsistencies can create credibility questions.

Careful preparation therefore matters.

## What Happens if USCIS Does Not Grant Affirmative Asylum?

This is an area where many applicants become confused.

A USCIS decision not to grant an affirmative asylum application does not necessarily mean that every opportunity to pursue asylum has ended.

Depending on the applicant's immigration status and circumstances, DHS may initiate removal proceedings. When an affirmative asylum application is referred into immigration court proceedings, an immigration judge can consider the asylum claim.

At that point, the case moves into the immigration court system.

The immigration judge independently evaluates the case under the applicable law and evidence.

## What Is Defensive Asylum?

Defensive asylum is asylum requested in proceedings before an immigration judge as protection from removal from the United States.

In other words, the applicant is already facing an immigration court process and raises asylum as a defense against being removed to a country where the applicant claims to fear persecution.

Removal proceedings generally begin when the Department of Homeland Security files a Notice to Appear with the immigration court after it has been served on the individual.

Unlike an affirmative case handled initially through USCIS, a defensive asylum case is litigated before an immigration judge within the Department of Justice's Executive Office for Immigration Review.

A government attorney may represent DHS in the proceedings.

## Example of Defensive Asylum

Consider another hypothetical applicant, Carlos.

Carlos fled his home country after receiving repeated threats because of his involvement with an opposition political organization.

He is eventually placed in removal proceedings.

Carlos tells his attorney that returning home could put his life in danger.

Instead of filing an ordinary affirmative case with USCIS, his attorney determines that because Carlos is already in immigration court proceedings, his asylum claim must be presented in the appropriate defensive posture before the immigration judge.

Carlos may present testimony and documentary evidence demonstrating what happened to him and why he believes he would face persecution if returned.

The government may challenge aspects of his claim, and the immigration judge evaluates the evidence and applicable law.

This is fundamentally different from simply attending a USCIS asylum interview.

## Defensive Asylum and Immigration Court

Immigration court proceedings can involve multiple hearings.

A person may first attend a master calendar hearing, which generally addresses procedural issues, pleadings, applications for relief, deadlines, representation, and scheduling.

Later, the court may schedule an individual hearing, sometimes referred to as a merits hearing.

At the merits hearing, the applicant may testify extensively about the asylum claim. Witnesses may testify, documentary evidence may be considered, attorneys may present legal arguments, and the DHS attorney may question the applicant.

The immigration judge ultimately decides whether the applicant has established eligibility for asylum or other applicable protection.

## Evidence Can Make a Major Difference

Asylum cases frequently depend on much more than an applicant simply saying, "I am afraid to go home."

A strong case seeks to explain why the person is afraid and connects that fear to evidence and asylum law.

Consider an applicant who claims religious persecution.

She states that members of a religious minority in her country are routinely targeted and that she personally received death threats.

Useful evidence might include threatening messages, photographs showing damage to her place of worship, witness statements, proof of religious participation, police reports, medical records after an attack, and credible reports documenting persecution of members of her religion.

Not every asylum applicant will possess this type of documentation.

People fleeing persecution often leave quickly and may be unable to obtain police reports or other official records. In some cases, the government itself may be responsible for the persecution.

The absence of a particular document therefore does not automatically mean that a claim cannot succeed. The overall evidence, credibility, explanations, and circumstances matter.

## Another Case Study: Persecution by Non-Government Actors

Suppose Andrés is threatened repeatedly by an organized group in his country.

He reports the threats to local authorities, but the police refuse to protect him. Some officers allegedly cooperate with the group.

Andrés eventually flees to the United States.

His case could raise several complex questions.

Why was Andrés targeted? Was the reason connected to a protected asylum ground? How severe were the threats? Was the government unable or unwilling to provide protection under the applicable legal standard? Could Andrés safely relocate elsewhere in the country? Is there evidence demonstrating the relationship between the persecutors and local authorities?

Simply establishing that dangerous people threatened Andrés may not be enough. His attorney would need to analyze whether the facts satisfy the legal requirements for asylum.

This illustrates why two applicants who experienced similar violence can receive different legal assessments.

## Affirmative Asylum vs. Defensive Asylum: The Key Difference

The easiest way to understand the distinction is to look at where the case begins and who decides it.

In an affirmative asylum case, a person who is not in removal proceedings generally seeks asylum through USCIS.

In a defensive asylum case, the applicant is already before the immigration court and seeks asylum as protection against removal.

Both cases may rely on similar types of evidence. Both require careful preparation. Both may involve complicated questions regarding credibility, past persecution, future persecution, protected grounds, government protection, internal relocation, statutory bars, filing deadlines, and country conditions.

But procedurally, they are very different.

## Can an Immigration Judge Deny Asylum?

Yes.

An immigration judge can grant or deny an asylum application after evaluating the facts, evidence, testimony, credibility, and law.

When an immigration judge issues an appealable decision, a party may in appropriate circumstances seek review by the Board of Immigration Appeals (BIA).

Appeal deadlines can be extremely strict. EOIR currently states that Form EOIR-26 generally must be received by the BIA within 30 calendar days after the immigration judge renders an oral decision or mails a written decision.

Because missing a deadline can have serious consequences, anyone considering an immigration appeal should obtain legal guidance promptly.

## Common Mistakes in Asylum Cases

One of the biggest mistakes is waiting too long to seek advice, especially because of the one-year asylum filing rule.

Another is assuming that every dangerous situation automatically qualifies as persecution under U.S. asylum law.

Applicants may also hurt their cases by submitting incomplete applications, failing to explain apparent inconsistencies, providing poor translations, omitting important events, ignoring prior immigration history, or relying on generic country-condition information without connecting it to their personal circumstances.

Social-media activity can also become relevant. Statements made publicly online may be compared with information presented in an immigration case.

Accuracy and consistency are essential.

## Every Asylum Case Is Different

There is no universal asylum strategy.

A journalist threatened for exposing government corruption presents different legal questions from a religious minority facing organized persecution. A political activist's case differs from a person targeted because of membership in a particular social group.

Even two people from the same country may have dramatically different cases.

Immigration history matters.

Entry history matters.

Deadlines matter.

Prior applications matter.

Criminal history can matter.

The identity and motivation of the persecutor matter.

Country conditions matter.

Most importantly, the specific facts of the individual applicant's experience matter.

## Speak With an Experienced Los Angeles Asylum Attorney

Whether you are considering affirmative asylum in Los Angeles, have received a Notice to Appear, are facing removal proceedings in immigration court, or need to understand whether you may qualify for defensive asylum, getting legal guidance early can make an important difference.

The Law Office of Todd Becraft assists immigrants with complex immigration matters and understands that an asylum case is much more than paperwork. Behind every application is a person, a family, and often a history of fear, sacrifice, and uncertainty.

An experienced Los Angeles immigration attorney can evaluate your immigration history, discuss asylum eligibility, identify potential legal issues, help organize supporting evidence, prepare you for an asylum interview or immigration court hearing, and explain the options available based on your individual circumstances.

If you are afraid to return to your country, do not assume that you qualify—or that you do not qualify—without first understanding how U.S. asylum law applies to your specific situation.

Law Office of Todd Becraft

Los Angeles Immigration & Asylum Representation

213-388-1821

Cada paso a tu lado.

Disclaimer: This article is provided for general informational purposes and does not constitute legal advice. Immigration and asylum laws, regulations, policies, procedures, and court decisions can change. Eligibility and strategy depend on the specific facts of each case. Consult a qualified immigration attorney regarding your individual circumstances.`},{slug:"criminal-charges-affect-citizenship",title:"Can Criminal Charges Affect U.S. Citizenship?",date:"July 16, 2026",excerpt:"Understand how criminal charges and convictions may impact your eligibility for U.S. citizenship and what you need to know about Good Moral Character.",content:`Becoming a United States citizen is a dream shared by millions of immigrants. After years of living, working, paying taxes, and contributing to their communities, many lawful permanent residents eventually decide to apply for naturalization. However, one of the most common concerns applicants have is whether a criminal charge or conviction could prevent them from becoming a U.S. citizen.

The answer is it depends.

Not every arrest, citation, or criminal conviction automatically disqualifies someone from obtaining U.S. citizenship. However, certain criminal offenses can delay, complicate, or even permanently prevent naturalization. The impact depends on several factors, including the type of offense, when it occurred, whether it resulted in a conviction, and whether the applicant meets USCIS's Good Moral Character requirement.

At The Law Office of Todd Becraft, we understand that every immigration case is unique. If you have a criminal history and are considering applying for citizenship, obtaining legal advice before filing your application can help you avoid costly mistakes and protect your future.

## Why Does USCIS Review Criminal History?

When someone applies for naturalization, USCIS does much more than verify residency and English proficiency. Immigration officers carefully review an applicant's background to determine whether they qualify under federal immigration law.

One of the most important requirements is demonstrating Good Moral Character (GMC).

USCIS examines:
- Criminal records
- Arrest history
- Court dispositions
- Police reports
- Probation history
- Immigration records
- Tax compliance
- Child support obligations
- Truthfulness during the application process

The agency wants to ensure that applicants have respected U.S. laws and meet the legal standards required for citizenship.

## What Is Good Moral Character?

Good Moral Character does not mean someone has lived a perfect life.

Instead, USCIS evaluates whether an applicant has generally behaved responsibly and honestly during a specific period before applying for citizenship.

For most applicants, USCIS reviews the five years immediately preceding the filing of Form N-400.

For applicants married to U.S. citizens who qualify under the three-year rule, the review period is generally three years.

However, USCIS is not limited to those timeframes. Immigration officers may examine conduct that occurred much earlier if it helps determine whether the applicant currently possesses Good Moral Character.

## Arrests vs. Convictions

Many people assume that being arrested automatically disqualifies them from citizenship.

Fortunately, that is not true.

An arrest alone does not necessarily prevent naturalization.

USCIS will instead evaluate:
- Whether charges were filed.
- Whether the case was dismissed.
- Whether there was a conviction.
- The seriousness of the offense.
- The surrounding circumstances.

Applicants must disclose all arrests, even if charges were dropped or records were later sealed or expunged.

Failure to disclose an arrest may create a much larger problem than the arrest itself.

Honesty is critical throughout the immigration process.

## Criminal Charges That May Affect Citizenship

Not all criminal offenses carry the same immigration consequences.

Some minor offenses may have little or no effect, while others can permanently bar naturalization.

Examples of offenses USCIS may review carefully include:
- Domestic violence
- Drug-related offenses
- Theft
- Fraud
- Assault
- Identity theft
- Firearms offenses
- Certain DUI cases
- Crimes involving moral turpitude
- Aggravated felonies

Each case requires an individual legal analysis.

## Crimes Involving Moral Turpitude

One of the most misunderstood concepts in immigration law is the Crime Involving Moral Turpitude (CIMT).

Although the term may sound complicated, it generally refers to crimes involving dishonesty, fraud, theft, or other morally reprehensible conduct.

Examples may include:
- Fraud
- Embezzlement
- Identity theft
- Certain theft offenses
- Forgery
- Perjury

Not every theft or fraud offense automatically qualifies as a Crime Involving Moral Turpitude.

The specific facts, criminal statute, sentence, and circumstances all matter.

Because these determinations can be highly technical, applicants should always consult an experienced immigration attorney before filing for citizenship.

## Drug Offenses

Drug-related offenses often present significant immigration concerns.

Convictions involving controlled substances may affect both lawful permanent residence and eligibility for naturalization.

Simple possession cases, marijuana offenses, prescription drug violations, and drug trafficking offenses each carry different immigration consequences.

Some offenses create temporary barriers.

Others may permanently affect immigration status.

Every case deserves careful legal evaluation.

## Domestic Violence

Domestic violence convictions may create serious immigration problems.

USCIS reviews:
- Protective orders
- Assault convictions
- Violations of restraining orders
- Child abuse allegations
- Family violence offenses

Because these cases frequently involve plea agreements, applicants should never assume that accepting a criminal plea will have no immigration consequences.

What appears to be a favorable criminal resolution may still create immigration complications years later.

## Fraud Offenses

Fraud receives especially close attention during naturalization.

Examples include:
- Credit card fraud
- Insurance fraud
- Mortgage fraud
- Tax fraud
- Immigration fraud
- Healthcare fraud

Because citizenship applications require honesty, prior fraud convictions may raise questions about an applicant's Good Moral Character.

## Case Study: Shoplifting Charge

Ana became a lawful permanent resident through her employer.

Several years before applying for citizenship, she was arrested for shoplifting inexpensive merchandise from a department store.

The court sentenced her to community service, and she completed every requirement.

Before filing her citizenship application, Ana consulted an immigration attorney.

After reviewing the court records, rehabilitation efforts, and the amount of time that had passed, the attorney determined she remained eligible to apply.

Because she disclosed the conviction honestly and demonstrated rehabilitation, USCIS ultimately approved her naturalization application.

This case illustrates that not every criminal conviction permanently prevents citizenship.

## Case Study: Failure to Disclose an Arrest

Miguel had been arrested years earlier after a misunderstanding during a neighborhood dispute.

The charges were dismissed.

Believing the arrest no longer mattered, he answered "No" when asked whether he had ever been arrested.

During background checks, USCIS discovered the arrest record.

Although the dismissed charges themselves were not disqualifying, failing to disclose them created concerns regarding truthfulness.

Miguel's application was delayed while USCIS requested additional evidence and explanations.

Had he disclosed the arrest initially, the process would likely have been much smoother.

Honesty is often more important than the incident itself.

## Does a DUI Affect Citizenship?

Driving under the influence (DUI) is one of the most common questions immigration attorneys receive.

A single DUI conviction does not automatically prevent someone from becoming a U.S. citizen.

However, USCIS considers:
- Multiple DUI convictions
- Alcohol abuse patterns
- Drug-related DUIs
- Injuries caused by impaired driving
- Whether probation requirements were completed

Multiple alcohol-related offenses may raise concerns about Good Moral Character even if a single DUI would not.

Applicants with DUI histories should consult an immigration attorney before submitting Form N-400.

## Timing Matters

The timing of a criminal offense often affects its immigration consequences.

USCIS may evaluate:
- How long ago the offense occurred
- Whether probation has ended
- Evidence of rehabilitation
- Community involvement
- Employment history
- Compliance with court orders

Someone who made a mistake decades ago but has since demonstrated responsible behavior may be viewed very differently than someone with recent criminal activity.

Immigration officers examine the entire picture—not just one isolated event.

## Aggravated Felonies and Naturalization

Under U.S. immigration law, some criminal convictions are classified as aggravated felonies. Despite the name, an aggravated felony does not always have to be a felony under state law. It is a specific category of offenses defined by federal immigration statutes.

Examples may include:
- Murder
- Rape
- Sexual abuse of a minor
- Drug trafficking
- Firearms trafficking
- Money laundering involving large sums
- Certain fraud offenses with significant financial losses
- Some theft or burglary offenses with lengthy prison sentences
- Crimes of violence resulting in substantial prison time

For many immigrants, a conviction for an aggravated felony after certain dates can permanently prevent naturalization and may also lead to removal proceedings. Because the immigration consequences are severe, anyone with this type of conviction should seek legal advice immediately before filing any immigration application.

## Pending Criminal Charges

If you currently have pending criminal charges, applying for U.S. citizenship is usually not advisable until your criminal case has been resolved.

USCIS may:
- Delay your naturalization interview.
- Continue your case while awaiting the outcome.
- Deny the application if the criminal matter affects your eligibility.

Many applicants mistakenly believe that filing sooner will improve their chances. In reality, waiting until your criminal attorney and immigration attorney have reviewed your case may be the safer approach.

## Expunged or Sealed Records

One of the biggest misconceptions in immigration law is that an expunged or sealed criminal record disappears for immigration purposes.

Unfortunately, that is often not the case.

Even if a state court expunges a conviction, USCIS may still consider the underlying conduct when evaluating immigration benefits.

Applicants should always disclose arrests and convictions exactly as requested on Form N-400, even if:
- The case was dismissed.
- The conviction was expunged.
- The record was sealed.
- The offense occurred many years ago.

Attempting to hide an expunged case can create far greater problems than the original offense.

## Juvenile Offenses

Juvenile offenses are generally treated differently from adult criminal convictions.

In many situations:
- Juvenile adjudications are not considered criminal convictions for immigration purposes.
- Sealed juvenile records may still need to be discussed with an attorney.
- Serious offenses committed as a juvenile may still require legal analysis depending on the circumstances.

Because juvenile cases vary significantly from state to state, applicants should not assume they are automatically irrelevant.

## The Importance of Rehabilitation

USCIS does not evaluate only past mistakes. Officers also look for evidence that applicants have become responsible, law-abiding members of their communities.

Positive factors may include:
- Steady employment
- Community service
- Volunteer work
- Educational achievements
- Successful completion of probation
- Counseling or treatment programs
- Payment of restitution
- Consistent tax compliance
- Family responsibilities

Demonstrating rehabilitation can make a meaningful difference in cases where an applicant remains legally eligible for naturalization.

## Case Study: DUI and Rehabilitation

James became a lawful permanent resident through his U.S. citizen spouse. Several years later, he was arrested for driving under the influence after leaving a holiday party.

He accepted responsibility, completed every court requirement, attended alcohol education classes, paid all fines, and remained arrest-free for many years afterward.

Before applying for citizenship, James consulted an immigration attorney, who carefully reviewed his criminal history and supporting documents.

During his naturalization interview, James answered every question honestly and provided proof that he had completed all court-ordered requirements.

Because the offense did not permanently bar naturalization and he demonstrated Good Moral Character during the statutory period, USCIS approved his application.

This case shows that one mistake does not necessarily end someone's path to U.S. citizenship.

## Case Study: Fraud During the Naturalization Process

Another applicant had previously been convicted of identity theft.

Instead of disclosing the conviction on Form N-400, he answered "No" to every criminal history question.

During the background investigation, USCIS discovered certified court records documenting the conviction.

The application was denied—not only because of the underlying offense but also because the applicant made false statements during the naturalization process.

Attempting to hide criminal history almost always creates more serious immigration consequences than addressing it honestly from the beginning.

## What Happens During the Naturalization Interview?

If you have any criminal history, the USCIS officer will likely ask additional questions during your interview.

You may be asked to provide:
- Certified court dispositions
- Police reports
- Proof that fines were paid
- Evidence that probation was completed
- Proof of rehabilitation
- Certified sentencing records

The officer may also ask you to explain what happened in your own words.

Remain calm, answer honestly, and never guess if you are unsure. If you are represented by an immigration attorney, your attorney can help ensure that the process is handled appropriately.

## Frequently Asked Questions

**Can I become a U.S. citizen if I have been arrested?**

Yes. An arrest alone does not automatically prevent naturalization. USCIS considers the outcome of the case and the surrounding circumstances.

**Will a dismissed criminal case affect my citizenship application?**

Generally, a dismissed case is less serious than a conviction. However, you must still disclose it if the application asks about arrests.

**Can traffic tickets prevent naturalization?**

Most routine traffic citations do not affect citizenship, especially if all fines have been paid. More serious offenses, such as reckless driving or DUI, require closer legal analysis.

**What if my conviction happened decades ago?**

Older convictions may have less impact than recent criminal activity, particularly if you have demonstrated rehabilitation and Good Moral Character. However, every case should be reviewed individually.

**Should I apply for citizenship before speaking with an attorney?**

If you have any criminal history—even something you believe is minor—it is wise to consult an experienced immigration attorney before submitting Form N-400. A legal review may identify issues that could otherwise delay or jeopardize your application.

## Why Legal Guidance Is Essential

Immigration law and criminal law often overlap in complex ways. A plea agreement that seems favorable in criminal court may have unintended immigration consequences years later.

An experienced immigration attorney can:
- Review your criminal record.
- Obtain certified court documents.
- Determine whether your offense affects eligibility.
- Evaluate your Good Moral Character.
- Prepare a complete and accurate naturalization application.
- Help you respond to Requests for Evidence.
- Prepare you for your USCIS interview.
- Protect your legal rights throughout the process.

Receiving legal guidance before filing is often the best investment you can make in your future.

## Trust The Law Office of Todd Becraft

Having a criminal charge or conviction does not automatically mean you cannot become a U.S. citizen. Many lawful permanent residents with past legal issues successfully obtain naturalization every year. The key is understanding how your specific circumstances affect your eligibility and taking the appropriate steps before submitting your application.

At The Law Office of Todd Becraft, we understand that every immigration journey is unique. Our experienced legal team carefully evaluates each client's immigration history, criminal record, and eligibility to develop the strongest possible strategy. Whether you are applying for citizenship, responding to a Request for Evidence, or have concerns about how a past arrest or conviction may affect your future, we are here to provide knowledgeable guidance and compassionate representation.

If you have questions about criminal charges, Good Moral Character, or the naturalization process, contact The Law Office of Todd Becraft today to schedule a confidential consultation. We are committed to helping individuals and families navigate the complexities of U.S. immigration law with confidence, integrity, and personalized legal support every step of the way.`},{slug:"conditional-green-card-explained",title:"Conditional Green Card Explained: Everything You Need to Know About Conditional Permanent Residence",date:"June 15, 2026",excerpt:"Learn everything about Conditional Green Cards, including who receives them, how to remove conditions, common mistakes to avoid, and what happens if your marriage ends before filing Form I-751.",content:`For many immigrants and their families, receiving a Green Card is one of the most important milestones in the immigration process. However, some individuals are surprised to discover that their Green Card is only valid for two years instead of the standard ten years. This is known as a Conditional Green Card, and understanding how it works is critical to protecting your immigration status in the United States.

At the Law Office of Todd Becraft, we regularly assist clients with family-based immigration petitions, marriage-based Green Cards, and the process of removing conditions on permanent residence. This guide explains what a Conditional Green Card is, who receives one, how to remove the conditions, common mistakes to avoid, and what happens if the process is not completed correctly.

What Is a Conditional Green Card?

A Conditional Green Card is a temporary form of lawful permanent residence issued by USCIS to certain immigrants. It grants the same rights and privileges as a regular Green Card but is valid for only two years.

The most common recipients of Conditional Green Cards are individuals who obtain permanent residence through marriage to a U.S. citizen or lawful permanent resident when the marriage is less than two years old at the time permanent residence is granted.

The purpose of conditional residence is to allow USCIS to verify that the marriage is genuine and not entered into solely for immigration benefits.

Although the card is temporary, the holder is still considered a lawful permanent resident of the United States during the conditional period.

Who Receives a Conditional Green Card?

You may receive a Conditional Green Card if:

You obtained a Green Card through marriage.
Your marriage was less than two years old when your Green Card was approved.
You adjusted status within the United States.
You entered the United States with an immigrant visa based on a recent marriage.

For example:

Maria marries a U.S. citizen in January 2025. Her Green Card interview is approved in December 2025. Since the marriage is less than two years old at the time of approval, USCIS issues Maria a Conditional Green Card valid for two years.

If Maria's Green Card had been approved after the second anniversary of the marriage, she likely would have received a standard ten-year Green Card instead.

What Rights Does a Conditional Resident Have?

Many people mistakenly believe conditional residents have fewer rights than other Green Card holders. This is not true.

Conditional permanent residents can:

Live permanently in the United States.
Work legally in the United States.
Travel internationally.
Obtain a Social Security Number.
Purchase property.
Attend school.
Sponsor certain family members.
Build time toward U.S. citizenship eligibility.

In most situations, conditional residents are treated exactly like regular permanent residents.

The primary difference is that they must later file a petition to remove the conditions on residence.

Why Does USCIS Issue Conditional Green Cards?

Marriage-based immigration is one of the most commonly used immigration pathways in the United States.

Unfortunately, it has also historically been vulnerable to fraud.

Congress created conditional residence to discourage sham marriages and provide USCIS with a second opportunity to review the legitimacy of the relationship.

The government wants evidence that:

The couple continues to live together.
The marriage remains genuine.
The relationship was entered into in good faith.
The spouses have combined aspects of their lives.

This additional review helps USCIS identify fraudulent cases while allowing legitimate families to remain together.

Removing Conditions on Residence

The most important step for conditional residents is filing Form I-751, Petition to Remove Conditions on Residence.

This petition must generally be filed during the 90-day period immediately before the Conditional Green Card expires.

Failing to file on time can have serious consequences, including loss of lawful permanent resident status.

When filing Form I-751, couples must provide evidence demonstrating that the marriage is real and ongoing.

Common supporting evidence includes:

Joint bank accounts.
Joint tax returns.
Mortgage documents.
Lease agreements.
Utility bills.
Insurance policies.
Birth certificates of children.
Photographs together.
Travel records.
Affidavits from family and friends.

USCIS reviews the evidence and determines whether the conditions should be removed.

If approved, the immigrant receives a standard ten-year Green Card.

Case Study: A Successful Removal of Conditions

A client came to our office after receiving a Request for Evidence (RFE) from USCIS regarding a pending I-751 petition.

The couple had been married for several years but had not maintained extensive joint financial documentation because they preferred separate bank accounts.

USCIS questioned whether the marriage was bona fide.

Our office helped organize additional evidence, including:

Joint health insurance records.
Shared travel itineraries.
Family photographs.
Affidavits from relatives.
Evidence of shared household expenses.

After submitting the supplemental documentation, USCIS approved the petition and removed the conditions on residence.

This example demonstrates why proper preparation and documentation are critical.

What Happens If the Marriage Ends?

One of the most common concerns involves divorce before filing Form I-751.

Fortunately, divorce does not automatically prevent a conditional resident from obtaining a permanent Green Card.

USCIS recognizes that legitimate marriages sometimes fail.

In these situations, an immigrant may qualify for a waiver of the joint filing requirement.

The applicant must prove that:

The marriage was entered into in good faith.
The relationship was genuine when it began.
The marriage ended for legitimate reasons.

Evidence may include:

Marriage records.
Joint financial documents.
Photos throughout the relationship.
Counseling records.
Correspondence between spouses.

Each case is unique, and legal guidance can be extremely valuable.

Case Study: Divorce Does Not Always Mean Deportation

Consider a hypothetical example.

David married a U.S. citizen and received a Conditional Green Card. After eighteen months, the marriage ended in divorce.

David feared he would immediately lose his immigration status.

However, he had substantial evidence showing the marriage was genuine:

Joint taxes.
Joint lease agreements.
Shared insurance coverage.
Family photographs.
Statements from friends and relatives.

USCIS ultimately approved his waiver application and granted him a ten-year Green Card.

The key factor was proving the marriage was entered into honestly and not for immigration purposes.

Waivers Available for Conditional Residents

Several waivers may allow an individual to file Form I-751 without a spouse.

These include:

Good Faith Marriage Waiver
Available when the marriage was legitimate but ended in divorce or annulment.

Abuse or Battery Waiver
Available for victims of domestic violence, abuse, or extreme cruelty committed by the U.S. citizen or permanent resident spouse.

Extreme Hardship Waiver
Available when removal from the United States would result in extreme hardship to the immigrant.

Each waiver requires specific evidence and legal analysis.

Common Mistakes That Can Cause Problems

Many immigration complications arise because applicants misunderstand the conditional residence process.

Common mistakes include:

Missing the Filing Deadline
Waiting too long can result in loss of status and removal proceedings.

Insufficient Documentation
Submitting minimal evidence often triggers Requests for Evidence or interviews.

Ignoring USCIS Notices
Failure to respond to USCIS correspondence can lead to denial.

Traveling Without Proper Documentation
Conditional residents should ensure they maintain valid documentation while traveling internationally.

Assuming Divorce Ends Immigration Eligibility
Many people abandon their cases unnecessarily because they incorrectly believe divorce automatically disqualifies them.

USCIS Interviews for I-751 Petitions

USCIS may require an interview during the removal of conditions process.

At the interview, officers may ask questions regarding:

Daily routines.
Living arrangements.
Family relationships.
Shared finances.
Future plans as a couple.

The purpose is to verify that the marriage remains genuine.

Couples who maintain consistent documentation and truthful answers generally navigate the interview process successfully.

Can Conditional Residents Become U.S. Citizens?

Yes.

Time spent as a conditional resident counts toward naturalization eligibility.

For spouses of U.S. citizens, eligibility may begin after three years of permanent residence if all requirements are met.

For most other permanent residents, eligibility generally begins after five years.

A conditional resident does not lose the time already accumulated simply because the Green Card was conditional.

How Long Does the I-751 Process Take?

Processing times vary significantly.

Many applicants currently experience extended waiting periods due to USCIS backlogs.

Fortunately, filing Form I-751 generally extends permanent resident status while the petition remains pending.

USCIS often issues extension notices allowing applicants to continue working and traveling while waiting for a decision.

Because processing times frequently change, applicants should stay informed and maintain copies of all USCIS correspondence.

Why Legal Representation Matters

The removal of conditions process may appear straightforward, but even small mistakes can create significant delays and complications.

An experienced immigration attorney can:

Evaluate eligibility.
Identify potential red flags.
Organize supporting evidence.
Respond to Requests for Evidence.
Prepare clients for interviews.
Handle waiver applications.
Defend clients in removal proceedings if necessary.

Proper legal guidance often makes the difference between approval and prolonged immigration difficulties.

Final Thoughts on Conditional Green Cards

A Conditional Green Card is not a lesser form of permanent residence. It is simply an additional step designed to verify the legitimacy of certain immigration cases, particularly marriage-based Green Cards.

The most important responsibility for conditional residents is filing Form I-751 on time and providing strong evidence demonstrating that the marriage was entered into in good faith.

Whether you are happily married, facing divorce, responding to a Request for Evidence, or preparing for a USCIS interview, understanding your rights and obligations is essential.

At the Law Office of Todd Becraft, we help individuals and families navigate every stage of the immigration process, including Conditional Green Cards, marriage-based immigration, removal of conditions, Green Card renewals, citizenship applications, waivers, and deportation defense.

If you have questions about your Conditional Green Card or need assistance with Form I-751, our experienced immigration team is ready to help protect your future in the United States.

Contact us at 213.388.1821 or tb@becraftlaw.com`},{slug:"what-happens-if-uscis-requests-more-evidence-rfe",title:"What Happens If USCIS Requests More Evidence (RFE)?",date:"June 2, 2026",excerpt:"Received an RFE from USCIS? Learn what a Request for Evidence means, why USCIS issues them, and how to prepare a strong response to keep your immigration case on track.",content:`Receiving a Request for Evidence (RFE) from U.S. Citizenship and Immigration Services can feel overwhelming. Many applicants immediately fear that their immigration case is about to be denied. In reality, an RFE is often a normal part of the immigration process and, in many cases, simply means that the immigration officer reviewing your application needs additional documentation before making a final decision.

Whether you are applying for a marriage-based green card, adjustment of status, naturalization, asylum, a U visa, or an immigration waiver, a properly prepared response to an RFE can be the difference between approval and denial.

What Is a USCIS Request for Evidence?

A Request for Evidence, commonly referred to as an RFE, is an official notice issued by USCIS when the agency determines that additional information is required before it can adjudicate an application or petition.

An RFE does not mean your case has been denied. Instead, it means that USCIS needs more supporting documentation, requires clarification about facts in your application, wants updated evidence, has identified inconsistencies, or needs proof that you meet all eligibility requirements.

The RFE notice will explain what documents are missing, why the evidence is necessary, where to send the response, and the deadline to respond.

Why USCIS Issues Requests for Evidence

USCIS officers review thousands of applications every month. Even a minor omission can lead to an RFE. Common reasons include missing civil documents like birth certificates or marriage certificates, insufficient financial evidence such as IRS tax transcripts or pay stubs, lack of proof of a bona fide marriage, or incomplete medical examinations.

Is an RFE Bad News?

No. Receiving an RFE does not mean that USCIS intends to deny your case. In fact, many applications are approved shortly after the requested evidence is submitted. Think of an RFE as USCIS saying: "We need a little more information before we can approve your case."

What Happens After You Receive an RFE?

Read the notice carefully—every word matters. Identify exactly what USCIS is requesting, gather all supporting documents, and prepare a detailed response that includes a cover letter, copy of the RFE notice, and organized exhibits. Submit your response before the deadline, as USCIS generally denies cases if the response is late.

How Long Does USCIS Take After an RFE?

Processing times vary. Some applicants receive a decision within two to six weeks, while others may wait several months, depending on the complexity of the case, USCIS workload, security checks, and service center location.

Why You Should Work With an Experienced Immigration Attorney

At The Law Office of Todd Becraft, we have helped thousands of individuals and families successfully respond to USCIS Requests for Evidence. With more than three decades of immigration law experience, attorney Todd Becraft understands what USCIS is looking for and how to prepare strategic, persuasive responses.

If you have received an RFE, contact our office today at (213) 388-1821 for a consultation. We can review your case, explain your options, and help you submit a complete and compelling response.`},{slug:"2026-travel-ban",title:"2026 Travel Ban",date:"April 9, 2026",excerpt:"As of 2026, the U.S. does have an expanded visa/travel ban system, but it's not a single blanket ban—it's a mix of full bans, partial restrictions, and visa suspensions depending on the country. Botto",content:`As of 2026, the U.S. does have an expanded visa/travel ban system, but it's not a single blanket ban—it's a mix of full bans, partial restrictions, and visa suspensions depending on the country.
Bottom line
There is a current "travel ban," but it's layered:
Some countries = fully banned
Some = partially restricted
Many more = immigration (green card) paused
Here's the clearest breakdown
1. Full travel ban (most severe)
People from these countries generally cannot enter the U.S. on any visa (immigrant or nonimmigrant), unless they qualify for limited exceptions. This is the strictest category—entry is essentially blocked.
Examples include:
Afghanistan
Iran
Libya
Somalia
Sudan
Syria
Yemen
Haiti
Eritrea
Chad
Myanmar (Burma)
Burkina Faso
South Sudan
2. Partial travel ban (limited visas blocked)
People from these countries are restricted from certain visa types, typically:
Tourist (B-1/B-2)
Student (F, M)
Exchange (J)
They might still enter under other visa categories, but common travel visas are blocked.
Examples:
Cuba
Venezuela
Nigeria
Tanzania
Angola
Senegal
Zambia
Zimbabwe
Laos
Turkmenistan
3. Additional visa restrictions (separate policy)
There's also a separate policy (2026) where the U.S.:
Paused immigrant visa issuance for dozens of countries (very large list, ~70+)
This affects countries like:
Brazil
Russia
Pakistan
Egypt
Nigeria
Bangladesh
many others
Important: this doesn't always block tourists/students, but it blocks green cards/immigration visas.
Key rules that matter
The ban mainly applies to people who:
Are outside the U.S., AND
Don't already have a valid visa
If someone already had a valid visa before Jan 1, 2026 → they may still be able to enter.
There are exceptions for:
Green card holders
Dual citizens (using another passport)
Diplomats, refugees, some athletes, etc.
In conclusion:
Total affected countries: ~39 under travel bans
Plus ~70+ countries with immigrant visa suspensions
Policies started in 2025 and expanded in January 2026
If you have questions on how this may affect you or your loved ones, please contact our office. (213) 388-1821.`},{slug:"asylum-cooperative-agreements-what-are-they",title:"Asylum Cooperative Agreements – What are they?",date:"January 7, 2026",excerpt:"Asylum Cooperative Agreements (ACAs) are agreements the U.S. made with certain other countries that change where and how asylum seekers can apply for protection. What they are (in plain terms) ACAs al",content:`Asylum Cooperative Agreements (ACAs) are agreements the U.S. made with certain other countries that change where and how asylum seekers can apply for protection.
What they are (in plain terms)
ACAs allow the United States to transfer certain asylum seekers to a partner country instead of letting them apply for asylum in the U.S. The idea is that the person should seek protection in the first "safe" country they pass through or are sent to, rather than choosing the U.S.
They're sometimes referred to as "safe third country–type" agreements, although they are not identical to the U.S.–Canada Safe Third Country Agreement.
How they work
Under an ACA:

A person arrives at or enters the U.S. and asks for asylum.

If the person passed through or can be transferred to an ACA partner country, the U.S. may send them there instead.

The partner country is then responsible for handling that person's asylum claim.

Countries involved
During the Trump administration, ACAs were signed with:

Guatemala

Honduras

El Salvador

In practice, Guatemala was the primary country that actually received transferred asylum seekers.
Why they were controversial
Critics argued that:

The partner countries lacked strong asylum systems

They had high levels of violence and poverty

Many asylum seekers had no real ties to the country they were sent to

Transfers could put people at risk rather than protect them

Supporters argued that:

ACAs reduced pressure on the U.S. asylum system

They discouraged forum shopping (choosing the U.S. over closer countries)

They helped manage migration flows regionally

Current status (important)

ACAs were suspended and effectively ended in 2021 under the Biden administration.

As of now, the U.S. is not actively using ACAs in the form they existed from 2019–2020.

However, similar ideas continue to appear in immigration policy debates and proposals.

How they differ from "Remain in Mexico"

ACAs: Send asylum seekers to a different country to apply there.

Remain in Mexico (MPP): Required asylum seekers to wait in Mexico while their U.S. cases were processed.`},{slug:"how-to-prepare-for-the-ice-raids",title:"How to Prepare for an ICE Raid",date:"July 11, 2025",excerpt:"Do you know how to prepare for an ICE raid? Now is the time to learn… Know Your Rights (U.S. Law) You have the right to remain silent. – You do not have to speak to ICE agents or answer questions abou",content:`Do you know how to prepare for an ICE raid? Now is the time to learn…
Know Your Rights (U.S. Law)

You have the right to remain silent.
– You do not have to speak to ICE agents or answer questions about your immigration status, birthplace, or how you entered the U.S.
– Say: "I am exercising my right to remain silent."
You have the right to refuse entry without a warrant.
– ICE needs a judicial warrant signed by a judge to enter your home.
– A document signed by ICE (Form I-200 or I-205) is NOT a valid warrant.
– Ask them to slide the warrant under the door. Check for:
 Your full name and address.
 A signature from a federal judge.
Do not lie or give false documents.
– Never lie to ICE or show fake papers. That can hurt your case.

How to Prepare for an ICE Raid

Create a safety plan.
– Memorize important phone numbers (attorney, family).
– Prepare an emergency contact list and share it with someone you trust.
– Plan who will care for children or dependents if you're detained.
Keep documents ready and safe.
– Store copies of important documents (ID, passport, immigration paperwork) in a safe place.
– Give a trusted friend or family member access in case of emergency.
Know how to find legal help.
– Contact local immigrant rights groups.
– Have the name and number of a reputable immigration lawyer.

If ICE Approaches You
On the street or in public:

Ask: "Am I free to go?"
 If yes, walk away slowly and calmly.
 If not, say: "I choose to remain silent" and ask for a lawyer.

At your home:
Do not open the door unless they show a judicial warrant.

Speak through the door or stay silent.
Record (if safe to do so) or write down names, badge numbers, and what happened.

How to Prepare for an ICE Raid: A Checklist
Documents to Prepare

Copy of valid ID (passport, driver's license, consular ID)
Copy of any immigration paperwork (DACA, asylum, TPS, green card, etc.)
Birth certificates of children/family members
List of emergency contacts and lawyers
Power of attorney or guardianship documents (for children or dependents)

Emergency Contacts

Immigration attorney name & phone: __________
Family/friend who can pick up kids: __________
Trusted neighbor or co-worker: __________
Local immigrant support group: __________

Mental Prep

Memorize key phone numbers (attorney, family)
Practice staying calm and silent
Share this plan with people you trust`},{slug:"keep-you-and-your-family-safe",title:"How to Keep You and Your Family Safe During These Uncertain Times",date:"March 5, 2025",excerpt:"5 things you can do now to keep you and your family safe during these uncertain times 1. Talk to a lawyer With private attorneys: Call the American Immigration Lawyers Association at 1-800-954-0254 fo",content:`5 things you can do now to keep you and your family safe during these uncertain times
1. Talk to a lawyer

With private attorneys: Call the American Immigration Lawyers Association at 1-800-954-0254 for a referral.
With nonprofit organizations that employ U.S. licensed attorneys or Department of Justice accredited representatives: A list of these organizations can be found at Immigration Advocates Network or Illinois Access to Justice.

2. Create a safety plan to keep you and your family safe

Identify your emergency contacts and memorize their phone numbers.
Provide your child's school or day care with an emergency contact to pick up your child.
Provide authorization in writing for your emergency contact to make medical and legal decisions for your child.
Tell your loved ones that if you are detained by ICE, they can try to use ICE's online detainee locator to find you: https://locator.ice.gov/odls/#/search

3. Collect your documents in a safe place

Keep your identity information and financial information in a safe location.
Gather documents showing the length of time you have been in the United States; the most recent two years are most important. This can include U.S. income tax returns, utility bills, leases, school records, medical records, bank records, or other documents.
Make sure your emergency contact can access all of these documents.
Read and practice NIJC's guidance on what to do if you encounter ICE in your community.

4. Avoid immigration fraud

Only seek legal advice from an attorney or an accredited representative at a Department of Justice-recognized nonprofit organization.
Lawyers must have a license from a U.S. state to practice law. Ask to see their law license. Law licenses from other countries do not authorize the practice of law in the United States.
Accredited representatives must be accredited and work for a nonprofit agency recognized by the Department of Justice. Ask to see their accreditation documents.
Never sign an application with false information.
Never sign a blank form.
Ask for copies of everything you sign.
If the advice sounds too good to be true, get a second opinion before filing an immigration application.

5. Be alert for digital scams

Be skeptical of social media posts promising new or quick immigration relief.
The U.S. government (including Department of Homeland Security, U.S. Citizenship and Immigration Services, Immigration and Customs Enforcement, and State Department) will never contact you via WhatsApp or social media.
With limited exceptions, such as people who are released from detention and told they must check in with ICE via telephone, the U.S. government generally does not contact individuals by phone.
If you receive an unexpected message or phone call from someone who claims they are an immigration officer or other government official, do not respond or share personal information.
Do not wire or transfer money to pay a "processing fee" or for any other reason.
If in doubt, consult an attorney or accredited representative before taking any action.
Avoid sharing unverified information on social media.

Call my office if you questions and concerns about how to keep you and your family safe. (213) 388-1821`},{slug:"mass-deportations-be-prepared",title:"Mass Deportations – Be Prepared!",date:"January 17, 2025",excerpt:'What "mass deportations" might look like President-elect Donald Trump has threatened our immigrant communities by promising "mass deportations." One of the ways the Trump administration may do this is',content:`What "mass deportations" might look like
President-elect Donald Trump has threatened our immigrant communities by promising "mass deportations."
One of the ways the Trump administration may do this is the "expedited removal" program, combined with raids in neighborhoods and workplaces. Expedited removal, allows an immigration officer to quickly deport individuals without due process if the government can prove that they entered the United States without inspection and have been in the country for less than two years. People deported under expedited removal may be detained and deported without appearing before an immigration judge.
Other immigrants – regardless of how long they have been in the United States – may also experience immigration enforcement and removal. Anyone without secure immigration status may be subject to enforcement efforts. People who were ordered deported in the past and people who have had contact with the criminal legal system are at increased risk.
So what can you do to protect yourself or your family?

Seek a legal consultation
Create a safety plan

Identify your emergency contacts and memorize their phone numbers.
Provide your child's school or day care with an emergency contact to pick up your child.
Provide authorization in writing for your emergency contact to make medical and legal decisions for your child.
Tell your loved ones that if you are detained by ICE, they can try to use ICE's online detainee locator to find you: https://locator.ice.gov/odls/#/search

Collect your documents in a safe place

Keep your identity information and financial information in a safe location.
Gather documents showing the length of time you have been in the United States; the most recent two years are most important. This can include U.S. income tax returns, utility bills, leases, school records, medical records, bank records, or other documents.
Make sure your emergency contact can access all of these documents.

Avoid immigration fraud

Only seek legal advice from an attorney or an accredited representative at a Department of Justice-recognized nonprofit organization.
Lawyers must have a license from a U.S. state to practice law. Ask to see their law license. Law licenses from other countries do not authorize the practice of law in the United States.
Accredited representatives must be accredited and work for a nonprofit agency recognized by the Department of Justice. Ask to see their accreditation documents.
Never sign an application with false information.
Never sign a blank form.
Ask for copies of everything you sign.
If the advice sounds too good to be true, get a second opinion before filing an immigration application.

Be alert for digital scams

Be skeptical of social media posts promising new or quick immigration relief.
The U.S. government (including Department of Homeland Security, U.S. Citizenship and Immigration Services, Immigration and Customs Enforcement, and State Department) will never contact you via WhatsApp or social media.
With limited exceptions, such as people who are released from detention and told they must check in with ICE via telephone, the U.S. government generally does not contact individuals by phone.
If you receive an unexpected message or phone call from someone who claims they are an immigration officer or other government official, do not respond or share personal information. Do not wire or transfer money to pay a "processing fee" or for any other reason.
If in doubt, consult an attorney or accredited representative before taking any action.
Avoid sharing unverified information on social media`},{slug:"trump-won-now-what",title:"Trump won! Now what?",date:"November 13, 2024",excerpt:"In January, former President Donald Trump will retake the White House after years of vowing to vastly revamp the immigration system in the United States. With mass deportation as the central threat of",content:`In January, former President Donald Trump will retake the White House after years of vowing to vastly revamp the immigration system in the United States. With mass deportation as the central threat of his campaign, Trump will undoubtedly build on the sweeping crackdown that marked his first term.
He has threatened to restore the travel prohibition on foreigners from Muslim-majority countries (often called the "Muslim ban"). He wants to restart "Remain in Mexico"—which left thousands of vulnerable migrants and asylum seekers awaiting court hearings stranded in dangerous border towns. Trump has also taken his anti-immigrant rhetoric and proposals to new heights, notably by pledging to carry out the "largest domestic deportation operation in American history" and attacking legal immigration.
Random workplace raids, massive detention camps, and around-the-clock deportation flights. That's the radical vision to remove millions of undocumented immigrants put forward by Trump.
Trump's efforts to reshape the immigration community are likely to start immediately. Appearing on Fox News the morning after the election, the president-elect's spokesperson Karoline Leavitt celebrated a "resounding victory" and a "mandate to govern as he campaigned."
Immigrant rights groups and lawyers have been preparing for the possibility of a Trump comeback. Not unlike the first time around, they will inevitably pursue thoughtful litigation to stop some of the next administration's worst, and possibly unlawful, policies. "I've sued every president since George W. Bush, including Presidents Obama and Biden," Karen Tumlin, founder and director of Justice Action Center, said in a statement. "We have a simple message for President-elect Trump or his deputies if they decide to make good on their despicable plans: We will see you in court."
Still, the breadth and depth of Trump's agenda will have lasting impact, not only on immigrants who will directly bear the brunt of a heightened militarized immigration enforcement environment, but also on all Americans.
Here's how.
Launch Mass Deportation
Indiscriminate workplace raids, massive detention camps, and around-the-clock deportation flights. That's the radical vision to remove millions of undocumented immigrants put forward by Trump and Stephen Miller, his senior adviser on immigration. They would attempt to accomplish it by invoking a 18th-century wartime law known as the Alien Enemies Act—last used during World War II for the internment of Japanese, Italian, and German nationals—and deploying the full force of law enforcement agencies and the US military in violation of due process rights and the law.
A mass deportation campaign would permanently change the United States. It could lead to racial profiling, the potential separation of families, and the wrongful deportation of Americans and lawful residents. It would also ruin the economy.
The logistical and practical challenges of purging even 1 million people a year are considerable, not to mention the moral and human devastation. But, if realized, a recent analysis by the American Immigration Council found that such a project would cost $967.9 billion over more than a decade. The deportation of immigrant workers who are the backbone of so many critical industries would also break the economy, resulting in an estimated drop of up to 6.8 percent in gross domestic product.
End Birthright Citizenship
Trump promised to sign an executive order on day one to end the long-standing constitutional guarantee of citizenship for those born in the United States, regardless of their parents' immigration status. The order would instruct federal agencies to require that at least one parent be a US citizen or lawful permanent resident for a child to be granted automatic citizenship.
"This current policy is based on a historical myth and a willful misinterpretation of the law by the open borders advocate," Trump has said. Birthright citizenship is enshrined in the 14th Amendment of the Constitution—and reaffirmed in Supreme Court decisions—which states that, with very few exceptions, "all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the state wherein they reside."
Revive the "Muslim Ban"
During his first term, Trump took 472 executive actions in his bid to reshape the immigration system. One of them was the infamous "Protecting the Nation From Foreign Terrorist Entry Into the United States" order, which permanently suspended the resettlement of refugees from Syria and barred the entry of travelers from seven Muslim-majority countries—Iraq, Iran, Libya, Somalia, Sudan, Syria, and Yemen. The policy created instant chaos, sparked international repudiation, and galvanized Americans all over the country.
Trump has vowed to restore the so-called Muslim ban. The original iterations faced repeated legal challenges. Federal appeals courts ruled against the Trump administration, concluding that the executive order's "stated national security interest was provided in bad faith" and "drips with religious intolerance, animus, and discrimination." But in a 5–4 decision in June 2018, the Supreme Court allowed the Trump administration to carry out a version of the ban. On his first day in office, President Joe Biden issue a proclamation reversing it.
Hundreds of thousands of people from all over the world who currently benefit from Temporary Protected Status (TPS)—granted to those fleeing wars, natural disasters, and other country-specific circumstances— may lose protection against deportation.
That includes nationals of Haiti, Yemen, Afghanistan, Ukraine, and Venezuela. The Heritage Foundation's Project 2025 playbook, crafted by a number of administration-in-waiting former officials, specifically calls for the repeal of TPS designations.
While in office, Trump tried to cancelthe Obama-era Deferred Action for Childhood Arrivals (DACA) program that shields from deportation the undocumented youth brought to the United States as children. There were as many as 535,030 active DACA recipients as of June 2024. Miller has said a second Trump administration would again attack the program, whose fate already lies with the courts. "It would be absolutely catastrophic," Michelle Ming, political director at United We Dream, says of the prospect of tens of thousands of young people losing status. "It would destroy families. It would destroy entire communities."
Roll Back Refugee Resettlement
In a September social media post in which he introduced to concept of remigration, Trump said he would "suspend refugee resettlement." The first Trump administration dealt a massive blow to the US refugee resettlement program, and it likely wouldn't be different this time. In September, Trump said he would "ban refugee resettlement from terror-infested areas like the Gaza Strip."
As president, he set an annual cap of 15,000 refugee admissions. The number of admissions went from 84,994 during President Barack Obama's last year in office to a record low of 11,814 in 2020. Ultimately, the Trump administration resettled fewer refugees than any other going back at least to the Carter administration. Upon taking the White House, Joe Biden worked to restore the program, resettling 100,034 refugees in fiscal year 2024—the most in decades.
Restrict Legal Immigration
While Trump has tried to signal that he's in favor of legal immigration pathways, his allies have been preparing the terrain to severely restrict them. "Decades of 'we're not against legal immigration' will culminate in the largest cut to legal immigration in US history," David J. Bier, director of immigration studies at the Cato Institute, posted on X.
Their plans include severely curbing asylum, ending diversity lottery visas, and doing away with temporary legal programs like parole that have allowed immigrants from countries such as Haiti, Venezuela, Nicaragua, and Cuba to come to the United States after being vetted and securing a sponsor. They could even resuscitate the public charge rule making it harder for low-income immigrants to qualify for visas and green cards.
Immigration lawyers have additionally warned that, in a second Trump administration, visa processing might be subject to delays and increased denial rates. "If Donald Trump is elected president in November 2024," the National Foundation for American Policy stated, "he should be expected to restrict legal immigration, including green cards and [high-skilled] H-1B visas."
The Project 2025 agenda contemplates undermining T and U visas for undocumented immigrant victims of trafficking and certain crimes who cooperate with law enforcement. (These temporary protections serve as a powerful tool to encourage victims to report crimes and keep their communities safe.) It also envisions winding down crucial temporary agricultural worker programs.
Projecting a scenario in which Trump's policies result in less immigration and even more people leaving the United States than entering, a preelection Brookings Institution analysis concluded the GDP in 2025 would be $130 billion lower than under a Harris administration.`},{slug:"derivative-citizenship",title:"Derivative Citizenship",date:"October 28, 2024",excerpt:"This is a general description of how children born outside of the United States may derive U.S. citizenship automatically when their parent/s naturalize to U.S. citizenship. In order for an individual",content:`This is a general description of how children born outside of the United States may derive U.S. citizenship automatically when their parent/s naturalize to U.S. citizenship.
In order for an individual to apply to become a naturalized U.S. citizen (USC), s/he must be age 18 or older.
Thus, in the typical situation of a family living in the United States as lawful permanent residents, the minor children will not be eligible to file for naturalization with their parents. In many cases, these minor children do not need to request U.S. citizenship. Rather, it happens automatically when either parent naturalizes, if certain requirements are satisfied.
Permanent Resident Children
The laws regarding the derivative acquisition of U.S. citizenship by minor children were changed by the Child Citizenship Act of 2000 (CCA). This law became effective February 27, 2001, and remains effective. Under current law, children under 18 automatically acquire U.S. citizenship if three requirements are met.

The child must have U.S. lawful permanent resident status ("green card" holder).
At least one parent must be a U.S. citizen by birth or naturalization.
The child must be residing in the United States in the legal and physical custody of a USC parent.

In this situation, once all three requirements are met, U.S. citizenship is automatically conferred upon the child/ren by operation of law without the need to file a specific application requesting U.S. citizenship. These provisions apply to one's adopted child/ren as well as biological child/ren.
Recommendations: Obtain Documentation
U.S. citizenship is automatically conferred in the situations described above, and, thus, it is not legally necessary to obtain documentation of the child's U.S. citizenship. However, it is best to obtain official documentation of U.S. citizenship to avoid any possible future questions or complications. Typically, parents obtain a U.S. passport for their child, as this is needed for travel abroad. Additionally, it is possible to request a certificate of citizenship from the USCIS, using Form N-600.
Pre-Child Citizenship Act Cases: 18 Before 27.Feb.2001
As stated, the laws changed on February 27, 2001, thanks to the CCA. However, these laws do not apply retroactively. Any lawful permanent resident, who turned 18 prior to February 27, 2001, generally required both parents to naturalize prior to her/his 18th birthday, in order to acquire U.S. citizenship automatically.
There were three exceptions that permitted automatic acquisition of U.S. citizenship based on the naturalization of only one parent. These were: (1) one parent is deceased and the surviving parent is naturalizing; or (2) the naturalizing parent has custody of the child in a legal separation or divorce; or (3) the child was born out of wedlock and the naturalizing parent is the mother.
Conclusion
There are complexities to the rules governing acquisition of citizenship by operation of law. The situations described here are only one way that an individual may become a U.S. citizen without filing an application. Those with other questions or concerns about the eligibility of their children under the CCA or in other situations should discuss these with qualified immigration attorneys.`},{slug:"dv-lottery-is-open",title:"Diversity Visa Lottery is Open!",date:"October 9, 2024",excerpt:"The State Department is accepting online registrations for the Diversity Visa Lottery program for Fiscal Year (FY) 2026 from now until Tuesday, November 5, 2024, at 12:00 noon, Eastern Standard Time (",content:`The State Department is accepting online registrations for the Diversity Visa Lottery program for Fiscal Year (FY) 2026 from now until Tuesday, November 5, 2024, at 12:00 noon, Eastern Standard Time (EST).
It is completely free to submit an online registration.
Foreign nationals who want to have a chance of being selected must register for the lottery by this deadline.
Submission of more than one entry for a person will disqualify all entries for that person.
The Fiscal Year 2026 DV lottery program will have up to 55,000 green cards up for grabs that will be selected through a randomized computer-generated process.
Winners for FY 2026 are expected to be announced starting May 3, 2025, through September 30, 2026, on the Website by selecting DV Entrant Status Check.
Foreign nationals selected in the FY 2026 lottery are eligible to file their green card applications starting October 1, 2025.
Please note that all who are selected in the DV 2026 lottery must apply for their immigrant visas during fiscal year 2026 (October 1, 2025, through September 30, 2026).
Once all 55,000 diversity visas have been issued, the program will end. That is why it is so important for applicants to apply for an immigrant visa as early as possible.
You are eligible to participate if you meet the following requirements.
You must be a native of a country with historically low rates of immigration to the United States to enter
The list of eligible countries is available on the internet.
https://travel.state.gov/content/dam/visas/Diversity-Visa/DV-Instructions-Translations/dv-2025-instructions-translations/DV-2025_Instructions-faqs.pdf
If you are not a native of a country with historically low rates of immigration to the United States, there are two other ways you might be able to qualify.
Is your spouse a native of a country with historically low rates of immigration to the United States? If yes, you can claim your spouse's country of birth – provided that you and your spouse are named on the selected entry, are found eligible and issued diversity visas, and enter the United States at the same time.
Are you a native of a country that does not have historically low rates of immigration to the United States, and neither of your parents were born in or legally resident in your native country at the time of your birth? If both of those statements are true, you may claim the country of birth of one of your parents if it is a country whose natives are eligible for the DV-2026 program
Each DV applicant must meet the education/work experience requirement of the DV program by having either:
at least a high school education or its equivalent, defined as successful completion of a 12-year course of formal elementary and secondary education
OR two years of work experience within the past five years in an occupation that requires at least two years of training or experience to perform. The Department of State will use the U.S. Department of Labor's O*Net Online database to determine qualifying work experience.
Applicants should not submit an entry to the DV program unless they meet both of these requirements. Submission of more than one entry will disqualify you for a diversity visa.
Applicants may submit their Electronic Diversity Visa Entry Form (E-DV Entry Form or DS-5501), online at www.dvprogram.state.gov from now until Tuesday November 5th at 12 noon Eastern Daylight Time.
The State Department will not accept incomplete entries or entries sent by any other means. There is no cost to submit the online entry form.
After you submit a complete entry, you will see a confirmation screen containing your name and a unique confirmation number.  Print this confirmation screen for your records.
All DV entrants must go to the Entrant Status Check using the unique confirmation number saved from their DV online entry registration to find out whether their entry has been selected in the DV program.
The Entrant Status Check will be available on the E-DV website at dvprogram.state.gov from May 3, 2025, through September 30, 2026.
If your entry is selected, you will be directed to a confirmation page providing further instructions, including information about fees connected with immigration to the United States.
Entrant Status Check is the ONLY means by which the Department of State notifies selectees of their selection. The Department of State will not mail notification letters or notify selectees by email.
Finally, remember that you will not receive any emails or letter from the State Department. Applicants are only notified of selection through the Entrant Status Check located at: https://dvprogram.state.gov/`},{slug:"parole-in-place-update",title:"Parole in Place Update!",date:"September 20, 2024",excerpt:"New developments have emerged relating to a pending lawsuit before the U.S. District Court for the Eastern District of Texas known as Texas et. al. vs. DHS et. al., Case No. 6:24-cv-00306 (E.D. Tex.),",content:`New developments have emerged relating to a pending lawsuit before the U.S. District Court for the Eastern District of Texas known as  Texas et. al. vs. DHS et. al., Case No. 6:24-cv-00306 (E.D. Tex.), which halted the approval of applications filed under the Biden administration's parole in place program.
Lawsuit Updates
On August twenty sixth eleven different intervening parties who stood to benefit from the parole in place program filed a motion to be included in the Texas lawsuit.
On September third the Texas district court judge denied their request. As a result, the eleven parties filed an appeal to the U.S. Court of Appeals for the Fifth Circuit arguing that the lower court's denial of the motion to be included was incorrect.
On September eleventh the Fifth Circuit Court ordered the lower court to stop all proceedings until the appeals court has had the opportunity to hear the appeal.
A hearing date of October tenth has been scheduled, and the court has said that no further decisions can be made in the lower court until that date.
The appellate court's order states as follows, "Meaning no criticism of the district court's recognition of the need for prompt resolution, this panel must have an opportunity to consider the merits briefs, scheduled to be received by September 16, and to hear argument on the appeal of the denial of intervention. Accordingly, we administratively STAY proceedings in the district court pending a decision on the merits or other order of this court. The stay issued by the district court will remain in effect pending further order of this court."
How does this affect Parole in Place
In the meantime, the immigration service will continue accepting and processing parole in place applications under the Keeping Families Together program, but it cannot approve cases until further notice.
Although pending court proceedings have temporarily stopped the approval of Form I-131F applications, undocumented spouses and stepchildren of U.S. citizens eligible for PIP under the Keeping Families Together program should consider the possibility of filing their application with an immigration attorney as soon as possible.
Folks who receive biometrics appointments for PIP applications filed with immigration should continue to go their appointments.
Since it is unknown whether new court orders could stop the acceptance of applications in the near future it is very important for qualifying applicants to decide now and to discuss the advantages and disadvantages of filing a PIP application.
If you have questions about your eligibility for the program, please contact us to schedule a consultation.`},{slug:"conditional-v-permanent-green-card",title:"Conditional v Permanent Green Card",date:"September 6, 2024",excerpt:"CONDITIONAL GREEN CARD *Issued if married for less than 2 years at the time of approval. *Valid for 2 years *Must file form I-751 to remove conditions within 90 days before expiration. *Prove the marr",content:`CONDITIONAL GREEN CARD
*Issued if married for less than 2 years at the time of approval.
*Valid for 2 years
*Must file form I-751 to remove conditions within 90 days before expiration.
*Prove the marriage is bona fide (genuine).
PERMANENT GREEN CARD
*Issued if married for more than 2 years at the time of approval.
*Valid for 10 years
*Re-newal is straightforward with Form I-90.`},{slug:"bidens-new-rule-parole-in-place",title:"Biden's New Rule: Parole in Place",date:"August 23, 2024",excerpt:"Eligibility To be considered for a discretionary grant of parole in place under Keeping Families Together, you must meet these eligibility criteria: If you are the noncitizen spouse of a U.S. citizen,",content:`Eligibility
To be considered for a discretionary grant of parole in place under Keeping Families Together, you must meet these eligibility criteria:
If you are the noncitizen spouse of a U.S. citizen, you must:
Be present in the United States without admission or parole;
Have been continuously physically present in the United States since at least June 17, 2014, through the date of filing your request;
Have a legally valid marriage to a U.S. citizen on or before June 17, 2024;
Have no disqualifying criminal history and otherwise not deemed to be a threat to public safety, national security, or border security; and
Submit biometrics and undergo required background checks and national security and public safety vetting.
If you are the noncitizen stepchild of a U.S. citizen, you must:
Have been under the age of 21 and unmarried on June 17, 2024;
Be present in the United States without admission or parole;
Have been continuously physically present in the United States since at least June 17, 2024, through the date of filing your request;
Have a noncitizen parent who entered into a legally valid marriage with a U.S. citizen on or before June 17, 2024, and before your 18th birthday;
Have no disqualifying criminal history and otherwise not deemed to be a threat to public safety, national security, or border security*; and
Submit biometrics and undergo required background checks and national security and public safety vetting.
The burden is on the requestor to demonstrate by a preponderance of the evidence that they meet the eligibility criteria, and that parole is warranted as a matter of discretion for urgent humanitarian reasons or significant public benefit. A grant of parole in place under Keeping Families Together does not establish eligibility for other immigration benefits, including lawful permanent resident status.
Please contact our office if you have any questions.`},{slug:"5760-2",title:"Abandoning your Green Card",date:"August 16, 2024",excerpt:"When you return as a lawful permanent resident to the United States after a long absence, occasionally Border Patrol will accuse you of abandoning your green card. This can happen at any port of entry",content:`When you return as a lawful permanent resident to the United States after a long absence, occasionally Border Patrol will accuse you of abandoning your green card. This can happen at any port of entry. It's hard to know when the officer will be paying close enough attention to realize that you have been out of the country for longer than is commonly allowed under immigration law. Absences that cause a problem is six months in any calendar year.  This can be in one trip or cumulative.
 In my experience these types of problems usually arise at an airport port of entry. The officers can often seem quite intimidating because they have enormous power, and you have very few resources when you are at the border. Indeed, you have very few rights when you're at the border. It is sort of a no man's land legally.
The border patrol officer is essentially judge, jury and executioner. As a result, you may feel like you're at the whim of one individual. One of the most important things to remember is that you have an absolute right to have your case reviewed by an immigration judge, unfortunately many of the officers may not know this or do not want to let you exercise this right. You have no right to an attorney at the border however as a courtesy some Border Patrol agents will let you call a lawyer or make one phone call. Accordingly, it might be a good idea to always have the phone number of an immigration attorney at the ready. The officer is required to permit you into the country under something called parole. It's an odd legal fiction which allows you your "body" to enter the United States however legally you still remain at the border. You'll be referred to seeing an immigration judge. Unfortunately, the time between when you enter and the time when you actually have a hearing could be many years. The arguments that typically will succeed in this type of immigration court hearing involve proving that when you left the United States it was for an activity that had a defined beginning and end and that you intended to return to live in the United States. The primary three categories are:
•	Number one, you were taking care of an ill relative who either recovered or may have passed away.
•	Number two, you were attending school or some sort of training.
•	Number three, short term work project or assignment that had a defined beginning and end.
Associated with these arguments you must also prove your ties to the United States. This can be a long list of factors. Some of the most important ones are essentially related to money.
•	Banks account in the United States with a fair amount of money in it.
•	Maintained a home in the United States either a rental or you own the property.
•	At a great number of belongings in the United States.
•	Finally whether or not you have family in the United States.
Please contact my office if you'd like to discuss these issues in more depth.
https://iyo.jix.mybluehost.me/contact/`},{slug:"humanitarian-reinstatement",title:"Humanitarian Reinstatement",date:"August 8, 2024",excerpt:"Humanitarian reinstatement is a discretionary form remedy in U.S. immigration law that permits certain family-based immigrant visa petitions to continue even after the death of the petitioner. Normall",content:`Humanitarian reinstatement is a discretionary form remedy in U.S. immigration law that permits certain family-based immigrant visa petitions to continue even after the death of the petitioner. Normally, when a U.S. citizen or lawful permanent resident (LPR) files a petition (Form I-130) for his or her family member to live legally in the U.S., and the petitioner passes away before the family member has immigrated, the petition is automatically cancelled. However, under humanitarian reinstatement, the U.S. Citizenship and Immigration Services (USCIS) may permit the petition to continue despite the death of the petitioner.
Key Points:
Eligibility: Humanitarian reinstatement is most often available for beneficiaries of approved Form I-130 petitions. The petition must have been approved before the petitioner's death.
Factors Considered: USCIS considers several elements when deciding whether to grant humanitarian reinstatement, including:
The closeness of the intending immigrant's relationship to the deceased petitioner.
Whether the beneficiary is currenlty in the U.S. and has strong family ties in the U.S.
The hardship for the beneficiary if the petition is not reinstated.
The beneficiary's advanced age or health problems.
Whether the beneficiary has any U.S. citizen or LPR relatives who can act as a back up financial sponsor.
Substitute Sponsor: A substitute sponsor is usually necessary if humanitarian reinstatement is granted. This sponsor must be a U.S. citizen or LPR and must meet the financial requirements to support the beneficiary.
Discretionary: USCIS has the discretion to approve or deny requests for humanitarian reinstatement based on a case by case basis.
Process: To request humanitarian reinstatement, the beneficiary or their representative typically submits a written request to the USCIS office that approved the original petition, including evidence supporting the request.
Humanitarian reinstatement is not guaranteed and is considered on a case-by-case basis, focusing on the humanitarian aspects of each situation.`},{slug:"two-year-green-card",title:"Two Year Green Card",date:"July 29, 2024",excerpt:"A 2-year green card, actually known as a Conditional Permanent Resident Card, is the U.S. green card issued to immigrants who apply for their permanent residency through marriage to a United States ci",content:`A 2-year green card, actually known as a Conditional Permanent Resident Card, is the U.S. green card issued to immigrants who apply for their permanent residency through marriage to a United States citizen or lawful permanent resident. The main reason for a 2-year green card is to ensure that the of the marriage or investment is genuine and not fraudulent – meaning done merely to obtain legal immmigration status..
Here's a bit more of the specifics on how it works:
Conditional Status: When you are granted a 2-year green card, it means your permanent residency status is conditional and not actually permanent. This most often applies to those who have been married to a U.S. citizen or permanent resident for less than 2 years at the time of the issuance the green card.
Removing Conditions: Before the 2-year period ends, you must ask USCIS to remove the conditions on your resident status by filing Form I-751 (for marriage-based green cards) or Form I-829 (for investor-based green cards). This application should be filed within the 90-days before your 2-year green card expires.
Eligibility for Removal: To successfully remove the conditions, you generally need to prove that the marriage or investment was legitimate and not entered into solely to obtain immigration benefits. For marriage-based cases, this involves providing eproof of a genuine, ongoing relationship. Essentially re-proving that your marriage is "bona fide." You may be able to keep your green card even if you are now no longer together with your U.S. citzen spouse. In these cases you must prove that you are now divorced, not just separated, and that when you married it was a sincere and legitimate marriage or that you were abused. 
Permanent Green Card: Once the conditions are removed, you will be granted a 10-year green card, which is the standard permanent resident status.
It's cvery importatn to keep track of the expiration date of your 2-year green card and make sure that you file the necessary paperwork on time to keep your permanent residency status.`},{slug:"what-is-245i",title:'What is "245i"',date:"July 8, 2024",excerpt:'The "245(i) provision" refers to a part of the Immigration and Nationality Act that was created to allow certain undocumented immigrants to apply for adjustment of status (green card) without having t',content:`The "245(i) provision" refers to a part of the Immigration and Nationality Act that was created to allow certain undocumented immigrants to apply for adjustment of status (green card) without having to depart the United States. This section of the law was particularly helpful to those who entered the U.S. without inspection or overstayed their visas but had an eligible relative or employer willing to file an application for them.
Here's a brief overview of how it worked:
Eligibility: To qualify under 245(i), an immigrant needed to have an immigrant visa petition or labor certification application filed on their behalf on or before the cut off date of April 30, 2001. This petition or application will be "grandfathered" under 245(i) even if the beneficiary (the immigrant) was out of immigration status at the time.
Most importantly the application had be be "approvable when filed." This particularly important with regard to labor certifications which have a number of requirements to make them viable. VERY often they were not. Often because the sponsor could not afford to pay the immmigrant the wage required under the law. 
Application Process: Eligible immigrants could pay a penalty fee (which was part of the 245(i) provision) along with their application for adjustment of status. This allowed them to regularize their immigration status without leaving the U.S. and potentially triggering a bar on re-entry due to their unlawful presence.
Expiration: The 245(i) provision expired on April 30, 2001. After this date, immigrants who did not have a qualifying petition or application filed on for them could no longer benefit from this provision in the law.
Since the expiration of 245(i), there have been various attempts to revive or extend its benefits through legislative efforts, but as of my last update, it remained expired.`},{slug:"new-asylum-rules-2025",title:"New Asylum Rules in 2025: What You Must Know",date:"April 1, 2025",excerpt:"As of April 2025, significant changes to U.S. asylum law require many asylum seekers to first apply for protection in designated third countries before they are eligible to apply in the U.S.",content:`As of April 2025, significant changes to the United States asylum law have created new challenges for individuals seeking protection from persecution. These changes directly affect how and where asylum seekers must apply for asylum in the United States.

What Changed in U.S. Asylum Law in April 2025?
In April 2025, the United States implemented a stricter asylum eligibility rule requiring many asylum seekers to first apply for protection in another country before applying in the U.S. This policy is often referred to as a "third-country asylum requirement" or "safe third country rule."
Under this rule:
Individuals traveling to the United States through certain countries must first seek asylum in those countries
If they fail to do so, they may be deemed ineligible for asylum in the U.S.
The rule applies to many individuals arriving at the southern border
The goal of this policy is to reduce the number of asylum claims filed in the United States by requiring applicants to seek protection elsewhere first.

Which Countries Are Included?
As of April 2025, the United States has agreements with the following countries: Ecuador, Honduras, Guatemala, and Uganda.
Under these agreements, asylum seekers traveling through or able to access these countries may be required to apply for asylum there before seeking protection in the United States.

Why This Rule Matters for Asylum Seekers
This new requirement has significantly changed the asylum process and created additional legal barriers for immigrants. Now, many applicants must prove that they either applied for asylum in a third country and were denied, or were unable to safely apply in those countries.
Failure to meet these requirements may result in the denial of asylum claims.

Who Is Affected by the 2025 Asylum Rule?
This rule primarily affects individuals arriving at the U.S.-Mexico border, migrants traveling through Central America or other transit countries, and asylum seekers who did not apply for protection in designated countries.
However, the rule does not apply equally to everyone. Certain exceptions may exist depending on individual circumstances.

Exceptions to the Third-Country Asylum Rule
There are important exceptions to this rule that may allow individuals to still apply for asylum in the United States.
1. Lack of Access to a Safe Asylum System: If the third country does not provide a meaningful opportunity to apply for asylum, the requirement may not apply.
2. Immediate Danger or Unsafe Conditions: If the individual would face harm, violence, or persecution in the third country, they may be exempt from having to apply there.
3. Trafficking or Vulnerable Status: Victims of human trafficking, minors, or individuals with special vulnerabilities may qualify for exceptions.
4. Denial of Asylum in Another Country: If the individual applied for asylum in a third country and was denied, they may still be eligible to apply in the United States.

Challenges Created by the New Rule
1. Limited Resources in Third Countries: Countries like Honduras and Guatemala may lack the infrastructure to process large numbers of asylum applications effectively.
2. Safety Concerns: Some designated countries may not be safe for all asylum seekers, especially those fleeing violence, persecution, or organized crime.
3. Legal Complexity: The rule adds another layer of legal requirements, making it more difficult for individuals to navigate the asylum process without legal assistance.

How This Rule Affects Border Crossings
Individuals arriving at the U.S. border without first applying for asylum in a designated country may face immediate removal or deportation, ineligibility for asylum, and placement in expedited removal proceedings.
This makes it more critical than ever to understand the legal requirements before attempting to seek asylum.

Working with an Immigration Attorney
Navigating the new asylum rules requires legal knowledge, strategy, and careful preparation. An experienced immigration attorney in Los Angeles can evaluate your eligibility for asylum, determine if exceptions apply to your case, help you gather evidence and documentation, represent you in immigration court, and protect your rights throughout the process.
At The Law Office of Todd Becraft, we understand how complex asylum law can be, especially under the new 2025 regulations.

Other Immigration Options to Consider
If asylum is unavailable under the new rule, other forms of immigration relief may still be possible, including withholding of removal, protection under the Convention Against Torture (CAT), U visas for victims of crime, and T visas for victims of trafficking.
An immigration attorney can help determine the best legal strategy based on your situation.

Contact Us for a Confidential Consultation
If you or a loved one is seeking asylum or has questions about the new April 2025 asylum rule, do not wait to seek legal guidance.
Call 213.388.1821 or email tb@becraftlaw.com to schedule a confidential consultation. Understanding your rights is the first step toward protecting your future.`}];function Df(){const o=Ye();return t.jsxs("div",{children:[t.jsx(Ae,{title:"Immigration Blog | Law Office of Todd Becraft",description:"Immigration law news, updates, and guidance from the Law Office of Todd Becraft in Los Angeles.",canonical:"/blog",schema:{"@context":"https://schema.org","@type":"Blog",name:"Becraft Immigration Blog"}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Immigration Law ",t.jsx("span",{className:"text-[#D4A853]",children:"Blog"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Stay informed about the latest developments in immigration law, policy changes, and practical advice from the Law Office of Todd Becraft."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-5xl mx-auto",children:t.jsx("div",{className:"space-y-8",children:ku.map(l=>t.jsx(Y,{to:`/blog/${l.slug}`,className:"block bg-white rounded-sm border border-gray-100 p-6 md:p-8 card-hover group",children:t.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:gap-8",children:[t.jsx("div",{className:"flex-shrink-0 mb-3 md:mb-0 md:w-40",children:t.jsx("span",{className:"text-sm text-[#D4A853] font-semibold",children:l.date})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3 group-hover:text-[#D4A853] transition-colors",children:l.title}),t.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-4",children:l.excerpt}),t.jsxs("span",{className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase group-hover:text-[#C49A48] transition-colors",children:["Read More",t.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})]})},l.slug))})})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Immigration Case?"}),t.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us for a consultation. Our experienced immigration attorneys are ready to help."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),t.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline",children:"Contact Us Online"})]})]})})]})}function Pf(){const{slug:o}=Zt(),l=ku.find(c=>c.slug===o);return l?t.jsxs("div",{children:[t.jsx(Ae,{title:`${l.title} | Becraft Immigration Law`,description:l.excerpt,canonical:`/blog/${l.slug}`,schema:{"@context":"https://schema.org","@type":"BlogPosting",headline:l.title,datePublished:l.date,author:{"@type":"Organization",name:"Law Office of Todd Becraft"}}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",children:[t.jsxs(Y,{to:"/blog",className:"inline-flex items-center gap-1.5 text-[#D4A853] text-sm font-semibold mb-6 hover:text-[#E8C97A] transition-colors",children:[t.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"Back to Blog"]}),t.jsx("div",{className:"gold-line mb-6"}),t.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold mb-4 leading-tight",children:l.title}),t.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.date})]}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-3xl mx-auto",children:t.jsx("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed",children:l.content?t.jsx("div",{className:"prose prose-lg max-w-none",children:(()=>{const c=u=>u.split("**").map((p,m)=>m%2===1?t.jsx("strong",{children:p},m):t.jsx("span",{children:p},m));return l.content.split(`

`).map((u,p)=>{const m=u.trim();if(m.startsWith("## "))return t.jsx("h2",{className:"text-xl md:text-2xl font-serif font-bold text-[#1B2A4A] mt-8 mb-4",children:c(m.slice(3))},p);const f=m.split(`
`),x=f.findIndex(v=>v.trim().startsWith("- "));if(x!==-1&&f.slice(x).every(v=>v.trim().startsWith("- "))){const v=f.slice(0,x).join(" ").trim();return t.jsxs("div",{children:[v&&t.jsx("p",{className:"text-base leading-relaxed mb-2",children:c(v)}),t.jsx("ul",{className:"list-disc pl-6 mb-4 space-y-1",children:f.slice(x).map((b,C)=>t.jsx("li",{className:"text-base leading-relaxed",children:c(b.trim().slice(2))},C))})]},p)}return t.jsx("p",{className:"text-base leading-relaxed mb-4",children:c(m)},p)})})()}):l.sections?l.sections.map((c,u)=>{var p;return t.jsxs("div",{children:[c.heading&&t.jsx("h2",{className:"text-lg font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>t.jsx("p",{className:"text-base leading-relaxed mb-4",children:m},f))]},u)}):null})})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Immigration Case?"}),t.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us for a consultation. Our experienced immigration attorneys are ready to help."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),t.jsx(Y,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})})]}):t.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-warm-white px-4",children:[t.jsx("h1",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Post not found"}),t.jsx(Y,{to:"/blog",className:"text-[#D4A853] font-semibold hover:underline",children:"← Back to Blog"})]})}const Bf=[{slug:"deportacion-y-remocion",title:"Deportación y Remoción",description:"Nuestros abogados luchan agresivamente para mantener a las familias unidas. Exploramos cada posible forma de alivio contra la deportación."},{slug:"ciudadania-y-naturalizacion",title:"Ciudadanía y Naturalización",description:"La Oficina Legal de Todd Becraft le puede asistir en realizar su sueño de ser ciudadano/a de los Estados Unidos."},{slug:"asilo",title:"Asilo",description:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo por persecución."},{slug:"tarjeta-verde-ajuste-de-estatus",title:"Tarjeta Verde / Ajuste de Estatus",description:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes por relaciones familiares o empleo."},{slug:"cancelacion-de-eliminacion",title:"Cancelación de Eliminación",description:"Una defensa poderosa para personas en procedimientos de remoción con residencia a largo plazo en los EE.UU."},{slug:"daca",title:"DACA",description:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes iniciales y renovaciones."},{slug:"visa-u",title:"Visa U",description:"La Oficina legal de Todd Becraft representa clientes víctimas de delitos que cooperan en una investigación criminal."},{slug:"estado-de-proteccion-temporal-tps",title:"Estado de Protección Temporal (TPS)",description:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones y documentos de autorización de trabajo."},{slug:"visa-de-prometido-k-1",title:"Visa de Prometido K-1",description:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar y casarse en los Estados Unidos."},{slug:"i-601a-exenciones-provisionales",title:"I-601A Exenciones Provisionales",description:"Permitimos a ciertos parientes inmediatos de ciudadanos de EE.UU. solicitar una exención antes de su entrevista consular."}],Rf=[{name:"Tiwa Bob",text:"Siempre viviré para recordar los servicios legales profesionales que recibí de la Oficina Legal de Todd Becraft. Todo el personal de este bufete de abogados es atento y siempre trabaja de acuerdo con las instrucciones de su cliente."},{name:"Ariel Arauz",text:"Ciertamente, el abogado Todd Becraft, es el mejor abogado de inmigración que conozco, entre sus cualidades se incluyen: Honestidad, dedicación, profesionalismo, muy inteligente, carisma, profundo conocimiento de la ley de inmigración, etc."},{name:"John",text:"En mi primer encuentro con él, la recepción fue fantástica y muy profesional. me mostró mucho cuidado al preguntar cómo está mi familia, para mí eso es una marca de una persona que se preocupa por otras personas."},{name:"Joseph M.",text:"El abogado Todd Becraft es un abogado de inmigración excepcional y conocedor. El abogado Todd manejó mi caso con tanta clase y dignidad que gané mi caso."}];function Mf(){const o=Ye();return t.jsxs("div",{children:[t.jsx(Ae,{title:"Abogados de Inmigración en Los Ángeles | Ley Becraft",description:"Abogados de inmigración expertos en Los Ángeles. Asilo, defensa contra deportación, tarjetas verdes, ciudadanía y más. Llame al (213) 388-1821.",canonical:"/es",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:[{lang:"en",path:"/"},{lang:"es",path:"/es"},{lang:"x-default",path:"/"}]}),t.jsxs("section",{className:"relative bg-[#1B2A4A] overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.4) 1px, transparent 0)",backgroundSize:"40px 40px"}}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-8"}),t.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6",children:["Te Podemos Ayudar A Lograr Tu"," ",t.jsx("span",{className:"text-[#D4A853]",children:"Sueño Americano."})]}),t.jsx("p",{className:"text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl",children:"Honestos | Experimentados | Comprometidos Para Ayudarte"}),t.jsx("p",{className:"text-gray-400 mb-10",children:"Ley de inmigración es todo lo que hacemos — y lo hacemos excepcionalmente bien."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[t.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Consulta"]}),t.jsx("button",{onClick:()=>o("/es/servicios"),className:"btn-outline",children:"Nuestros Servicios"})]}),t.jsxs("div",{className:"mt-10 flex items-center gap-3 text-gray-400 text-sm",children:[t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),t.jsx("span",{children:"(213) 388-1821"}),t.jsx("span",{className:"text-gray-600",children:"|"}),t.jsx("span",{children:"Toll Free: (855) 201-6898"})]})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{id:"es-about",className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[t.jsxs("div",{children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-6",children:["Comprometidos a Defender los"," ",t.jsx("span",{className:"text-[#D4A853]",children:"Derechos de los Inmigrantes"})]}),t.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:"For more than 20 years, The Law Office of Todd Becraft has been dedicated to defending the rights of immigrants from all over the world. Based in Los Angeles California, our firm is dedicated exclusively to immigration law. Whether the case involves removal from the United States, a family petition, an asylum case, or a citizenship case we are committed to achieving the best results for our clients and their families. Our firm is fully bilingual (English / Spanish) because at the law office of Todd Becraft we believe that communication is the key to success in any legal matter. At The Law Office of Todd Becraft you will never have to wonder about the status of your case."})]}),t.jsxs("div",{className:"relative",children:[t.jsxs("div",{className:"rounded-sm overflow-hidden",children:[t.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",alt:"Todd Becraft, Abogado Fundador",className:"w-full aspect-[4/5] object-cover object-top"}),t.jsxs("div",{className:"bg-[#1B2A4A] p-6",children:[t.jsx("p",{className:"text-white font-serif font-bold",children:"Todd Becraft"}),t.jsx("p",{className:"text-[#D4A853] text-xs tracking-wider uppercase mt-1",children:"Abogado Fundador"})]})]}),t.jsx("div",{className:"absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A853]/20 rounded-sm -z-10"})]})]})})}),t.jsx("section",{id:"es-services",className:"section-padding bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Nuestros Servicios"}),t.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Manejamos una amplia gama de asuntos de inmigración, desde peticiones familiares hasta defensa de deportación y apelaciones en tribunales federales."})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:Bf.map(l=>t.jsxs(Y,{to:`/es/servicios/${l.slug}`,className:"text-left p-6 bg-[#FAFAF8] rounded-sm border border-gray-100 card-hover group block",children:[t.jsx("div",{className:"text-[#D4A853] mb-4",children:t.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})}),t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2 group-hover:text-[#D4A853] transition-colors",children:l.title}),t.jsx("p",{className:"text-gray-500 text-sm",children:l.description})]},l.slug))}),t.jsx("div",{className:"mt-10 text-center",children:t.jsxs(Y,{to:"/es/servicios",className:"btn-gold inline-flex items-center",children:["Ver Todos los Servicios",t.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})]})}),t.jsx("section",{id:"es-testimonials",className:"section-padding bg-warm-gray",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold",children:"Testimonios"})]}),t.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Rf.map(l=>t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[t.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(5)].map((c,u)=>t.jsx("svg",{className:"w-4 h-4 text-[#D4A853]",fill:"currentColor",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},u))}),t.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed italic mb-6",children:['"',l.text,'"']}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center",children:t.jsx("span",{className:"text-[#D4A853] font-serif font-bold text-sm",children:l.name.charAt(0)})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-serif font-bold text-[#1B2A4A] text-sm",children:l.name}),t.jsx("p",{className:"text-gray-400 text-xs",children:"Cliente"})]})]})]},l.name))})]})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16 md:py-20",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("div",{className:"text-center mb-12",children:t.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold",children:["Miles de Familias ",t.jsx("span",{className:"text-[#D4A853]",children:"Reunidas"})]})}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[{number:"20+",label:"Años de Experiencia"},{number:"12",label:"Áreas de Práctica"},{number:"4",label:"Abogados y Personal"},{number:"2",label:"Idiomas"}].map(l=>t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-4xl md:text-5xl font-serif text-[#D4A853] font-bold mb-2",children:l.number}),t.jsx("p",{className:"text-gray-300 text-sm",children:l.label})]},l.label))})]})}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Guías Gratuitas de Inmigración"}),t.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Recursos educativos gratuitos preparados por el Abogado Todd Becraft para ayudarle a entender sus opciones."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[t.jsxs(Y,{to:"/es/recursos/la-guia-becraft-para-evitar-la-deportacion",className:"p-8 bg-white rounded-sm border border-gray-100 card-hover group block",children:[t.jsx("div",{className:"text-[#D4A853] mb-4",children:t.jsx("svg",{className:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A853] transition-colors",children:"La Guía Becraft para Evitar la Deportación"}),t.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"Una guía completa sobre el proceso de deportación, sus derechos legales y todas las defensas disponibles para evitar la remoción."}),t.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] text-sm font-semibold",children:["Leer la Guía",t.jsx("svg",{className:"w-4 h-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]}),t.jsxs(Y,{to:"/es/recursos/la-guia-de-becraft-sobre-como-convertirse-en-ciudadano-estadounidense",className:"p-8 bg-white rounded-sm border border-gray-100 card-hover group block",children:[t.jsx("div",{className:"text-[#D4A853] mb-4",children:t.jsx("svg",{className:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"})})}),t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A853] transition-colors",children:"Cómo Convertirse en Ciudadano Estadounidense"}),t.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"Todo lo que necesita saber sobre el proceso de naturalización: requisitos de elegibilidad, el proceso paso a paso y los beneficios de la ciudadanía."}),t.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] text-sm font-semibold",children:["Leer la Guía",t.jsx("svg",{className:"w-4 h-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})]}),t.jsx("div",{className:"mt-8 text-center",children:t.jsx(Y,{to:"/es/recursos",className:"text-[#D4A853] hover:underline text-sm font-semibold",children:"Ver Todos los Recursos →"})})]})}),t.jsx("section",{id:"es-contact",className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Programe Su Consulta Hoy"}),t.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Dé el primer paso para asegurar su futuro. Nuestros abogados de inmigración con experiencia están listos para evaluar su caso y discutir sus opciones."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[t.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Llame al (213) 388-1821"]}),t.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Envíenos un Mensaje"})]}),t.jsxs("p",{className:"mt-6 text-sm text-gray-500",children:["Toll Free: ",t.jsx("a",{href:"tel:8552016898",className:"text-[#D4A853] hover:underline",children:"(855) 201-6898"}),t.jsx("span",{className:"mx-3 text-gray-300",children:"|"}),t.jsx("span",{className:"text-[#D4A853] font-semibold",children:"Se Habla Español"})]})]})})]})}const Eu=[{slug:"asilo",title:"Asilo",subtitle:"Proceso y Requisitos de Asilo",metaDescription:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo. Representamos a personas que solicitan asilo en Los Ángeles.",intro:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo. Representamos a personas que solicitan asilo por persecución por raza, religión, nacionalidad, opinión política o membresía en un grupo social particular.",sections:[{heading:"Proceso Afirmativo",paragraphs:["Un extranjero debe estar físicamente presente en los Estados Unidos para obtener asilo a través del proceso afirmativo.","Un extranjero debe solicitar asilo dentro de un año de su última fecha de llegada a los Estados Unidos.","Un extranjero también puede solicitar asilo afirmativo presentando el Formulario I-589, Solicitud de Asilo y Suspensión de Expulsión, al USCIS."]},{heading:"Proceso Defensivo",paragraphs:["Las solicitudes defensivas de asilo ocurren cuando los extranjeros solicitan asilo como defensa contra la expulsión de los Estados Unidos.","Los jueces de inmigración escucharán casos de asilo defensivo en procedimientos contradictorios. Un juez escuchará los argumentos tanto del extranjero como del gobierno de EE.UU."]},{heading:"Personas No Elegibles para el Asilo",bullets:["No siguió la fecha límite de presentación de un año para el Formulario I-589","Si un juez de inmigración o la Junta de Apelaciones de Inmigración negaron su solicitud de asilo anterior","Puede ser trasladado a un tercer país seguro en virtud de un acuerdo entre los EE.UU. y otros países"]}],cta:"¿Necesita ayuda para solicitar asilo en el área de Los Ángeles? La Oficina Legal de Todd Becraft entiende las formas más efectivas de manejar estos casos. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta."},{slug:"cancelacion-de-eliminacion",title:"Cancelación de Eliminación",subtitle:"Una Defensa Poderosa contra la Deportación",metaDescription:"La cancelación de deportación es una defensa poderosa para personas en procedimientos de remoción. Abogados de inmigración en Los Ángeles.",intro:"La cancelación de deportación es una defensa poderosa para personas en procedimientos de remoción que pueden demostrar residencia a largo plazo en los EE.UU. y vínculos familiares fuertes.",sections:[{heading:"Elegibilidad para Cancelación de Deportación",paragraphs:["Una persona puede ser elegible para que se cancele su remoción bajo la sección 240A(b) de la INA si puede establecer ante un juez de inmigración que cumple con ciertos requisitos."],bullets:["Ha mantenido presencia física continua en los EE.UU. durante diez años o más","Ha sido una persona de buen carácter moral durante ese período","No ha sido condenado por ciertos delitos","Su remoción causaría dificultades excepcionales a su cónyuge, padre o hijo ciudadano de EE.UU. o LPR"]},{heading:"Satisfacer el Requisito de Residencia de 10 Años",paragraphs:["Los recibos de alquiler, resúmenes de tarjetas de crédito y talones de pago pueden ser formas de evidencia para probar residencia continua.","Es importante que las personas entiendan que salir del país por más de 90 días o sumar más de 180 días puede afectar negativamente el cálculo de 10 años."]},{heading:"Requisito de Dificultad Excepcional",paragraphs:["Este requisito puede ser uno de los más difíciles de cumplir porque una persona necesita presentar motivos que vayan más allá de la simple tristeza de un familiar.","Cuando existe preocupación de que la atención médica no esté disponible en el país de origen, eso a menudo es suficiente para satisfacer esta carga."]}],cta:"Puede llamar al (213) 388-1821 o contáctenos en línea para concertar una consulta con nuestro abogado de cancelación de deportación en Los Ángeles."},{slug:"ciudadania-y-naturalizacion",title:"Ciudadanía y Naturalización",subtitle:"El Proceso de Naturalización Explicado",metaDescription:"Guiamos a nuestros clientes a través de cada paso del proceso de naturalización. Abogados de ciudadanía e inmigración en Los Ángeles.",intro:"Guiamos a nuestros clientes a través de cada paso del proceso de naturalización, desde determinar la elegibilidad hasta prepararse para la entrevista y el examen de ciudadanía.",sections:[{heading:"Requisitos de Naturalización",paragraphs:["La naturalización es el proceso mediante el cual se otorga la ciudadanía estadounidense a un residente permanente legal después de cumplir con los requisitos establecidos en la Ley de Inmigración y Nacionalidad."],bullets:["Tener al menos 18 años de edad al presentar la solicitud","Ser residente permanente legal (titular de tarjeta verde) durante al menos 5 años (3 años si está casado con ciudadano/a)","Haber vivido en los EE.UU. continuamente","Ser una persona de buen carácter moral","Ser capaz de leer, escribir y hablar inglés básico","Demostrar conocimiento de la historia y gobierno de EE.UU.","Estar dispuesto a prestar el Juramento de Lealtad"]},{heading:"El Proceso de Naturalización",paragraphs:["Cuando alguien envía su solicitud, es posible que deba someterse a la recopilación de datos biométricos. USCIS programa una cita y le informa la hora, el lugar y la fecha.","La naturalización también implica una entrevista con un oficial de inmigración de USCIS donde debe demostrar conocimiento del idioma inglés y del civismo.","También habrá un examen de historia y gobierno de los Estados Unidos."]}],cta:"Nuestra firma ha estado ayudando a inmigrantes por más de una década. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de ciudadanía y naturalización en Los Ángeles."},{slug:"daca",title:"DACA",subtitle:"Acción Diferida para los Llegados en la Infancia",metaDescription:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes y renovaciones. Abogados de DACA en Los Ángeles.",intro:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes iniciales y renovaciones. Monitoreamos los cambios en el programa para asegurarnos de que nuestros clientes estén preparados.",sections:[{heading:"Requisitos de DACA",paragraphs:["Las solicitudes de DACA solo se pueden otorgar cuando USCIS determina que una persona cumple con los siguientes criterios mínimos:"],bullets:["Tenían menos de 31 años el 15 de junio de 2012","Llegó a los Estados Unidos antes de cumplir los 16 años de edad","Ha vivido en los Estados Unidos continuamente desde el 15 de junio de 2007","Estaba presente en los EE.UU. el 15 de junio de 2012 y en el momento de hacer la solicitud","No tiene una condena por delito grave, delito menor significativo o tres o más delitos menores","No representa una amenaza para la seguridad nacional o pública","Tiene al menos 15 años de edad al momento de solicitar"]},{heading:"Proceso de Solicitud de DACA",paragraphs:["Aunque DACA se ha vuelto más complicado para nuevas personas en el programa, todavía ofrece beneficios considerables para personas elegibles.","Nuestros servicios incluyen solicitudes iniciales de DACA, renovaciones oportunas para prevenir brechas en la autorización de trabajo, solicitudes de advance parole, y abordar complicaciones con el estatus DACA."]}],cta:"Nuestra firma entiende lo aterrador que puede ser este proceso. Puede llamar al (213) 388-1821 o contáctenos en línea para recibir una consulta con nuestro abogado de DACA en Los Ángeles."},{slug:"deportacion-y-remocion",title:"Deportación y Remoción",subtitle:"Defensa Agresiva contra la Deportación",metaDescription:"Nuestros abogados son defensores experimentados que luchan agresivamente para mantener a las familias unidas. Defensa contra deportación en Los Ángeles.",intro:"Nuestros abogados son defensores experimentados en sala de audiencias que luchan agresivamente para mantener a las familias unidas. Exploramos cada posible forma de alivio.",sections:[{heading:"Audiencias de Deportación",paragraphs:["El Título 8 del Código de EE.UU. § 1229a es la ley federal relacionada con los procedimientos de deportación. Pocas perspectivas pueden ser más aterradoras que enfrentarse a la deportación.","Un caso de deportación terminará con la deportación de la persona a su país de origen o con la elegibilidad para continuar viviendo y trabajando en los EE.UU.","Cuando una persona recibe un Aviso de comparecencia en la corte de inmigración, el Departamento de Seguridad Nacional ha comenzado el proceso para deportarlo de los EE.UU."]},{heading:"Formas de Defensa",bullets:["Asilo y suspensión de remoción","Protección de la Convención contra la Tortura (CAT)","Cancelación de remoción","Ajuste de estatus","Salida voluntaria","Discreción del fiscal","Apelaciones ante la Junta de Apelaciones de Inmigración (BIA)","Apelaciones ante el Tribunal del 9no Circuito"]}],cta:"Nuestra firma entiende que cada cliente que servimos es único. Dé el primer paso cuando llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de deportación y remoción en Los Ángeles."},{slug:"tarjeta-verde-ajuste-de-estatus",title:"Tarjeta Verde / Ajuste de Estatus",subtitle:"Su Camino hacia la Residencia Permanente",metaDescription:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes. Abogados de tarjeta verde y ajuste de estatus en Los Ángeles.",intro:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes por relaciones familiares, empleo u otras categorías.",sections:[{heading:"Cómo Solicitar una Tarjeta Verde",paragraphs:["El Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) señala que el ajuste de estatus se refiere a un proceso que una persona puede usar para solicitar la residencia permanente legal sin tener que regresar a su país de origen.","La mayoría de las personas que solicitan tarjetas de residencia deben completar al menos dos formularios: una petición de inmigrante y una solicitud de tarjeta de residencia."]},{heading:"Categorías de Elegibilidad",bullets:["Basada en relaciones familiares (cónyuge, padre, hijo de ciudadano de EE.UU. o LPR)","Basada en empleo (trabajadores con habilidades especiales, trabajadores profesionales, otros trabajadores)","Lotería de visa de diversidad","Categorías humanitarias (asilo, refugiado, VAWA)","Visa U después de tres años"]}],cta:"Nuestra firma se tomará el tiempo para explicarle cada acción que ocurre en su caso. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de tarjeta verde en Los Ángeles."},{slug:"visa-de-prometido-k-1",title:"Visa de Prometido K-1",subtitle:"Requisitos y Proceso de la Visa K-1",metaDescription:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar a los Estados Unidos y casarse dentro de 90 días. Abogados en Los Ángeles.",intro:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar a los Estados Unidos y casarse dentro de los 90 días de llegada.",sections:[{heading:"Proceso de Visa K-1",paragraphs:["Ciudadanos de los Estados Unidos que deseen traer a su prometido/a extranjero/a al país para casarse deben presentar el Formulario I-129F, Petición para Prometido/a Extranjero/a.","Si el/la prometido/a se casa dentro de los 90 días posteriores a la admisión como no inmigrante K-1, puede solicitar el estatus de residente permanente legal."]},{heading:"Requisitos de Elegibilidad",bullets:["El peticionario debe ser ciudadano de los EE.UU.","Ambas partes deben ser legalmente libres para casarse","Las partes se han conocido en persona en los dos años anteriores a la solicitud (con excepciones)","El ciudadano de EE.UU. debe cumplir con los requisitos de ingresos"]}],cta:"Nuestra firma ha ayudado a muchas personas en todo California a obtener las visas K-1 que necesitaban para casarse. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de visa K-1 en Los Ángeles."},{slug:"estado-de-proteccion-temporal-tps",title:"Estado de Protección Temporal (TPS)",subtitle:"Lo Que Necesita Saber sobre el TPS",metaDescription:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones y documentos de autorización de trabajo. Abogados de TPS en Los Ángeles.",intro:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones oportunas y documentos de autorización de trabajo.",sections:[{heading:"¿Quién Califica para TPS?",paragraphs:["El Estado de Protección Temporal (TPS) es una forma de ayuda humanitaria para ciudadanos extranjeros dentro de los EE.UU. cuyo país de origen está designado por el Secretario de Seguridad Nacional."],bullets:["Es ciudadano del país designado para TPS","Ha residido continuamente en los EE.UU. desde la fecha especificada para el país","Ha estado presente físicamente en los EE.UU. continuamente desde la fecha designada","No ha sido condenado por dos o más delitos menores o un delito grave"]},{heading:"Países con TPS",paragraphs:["Los países con nacionales bajo TPS incluyen Somalia, Honduras, Nicaragua, Camerún, El Salvador, Haití, Siria, Sudán, Nepal, Sudán del Sur, Yemen, Venezuela, Myanmar, Ucrania y Afganistán."]}],cta:"Nuestra firma trabaja muy de cerca con cada cliente. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de TPS en Los Ángeles."},{slug:"i-601a-exenciones-provisionales",title:"I-601A Exenciones Provisionales",subtitle:"El Proceso de Exención Provisional I-601A",metaDescription:"La exención provisional I-601A permite a ciertos parientes inmediatos solicitar una exención antes de su entrevista consular. Abogados en Los Ángeles.",intro:"La exención provisional I-601A permite a ciertos parientes inmediatos de ciudadanos de EE.UU. solicitar una exención antes de salir de los EE.UU. para su entrevista consular.",sections:[{heading:"¿Qué es el Formulario I-601A?",paragraphs:["El Formulario I-601A, Solicitud de Exención Provisional de Presencia Ilegal, es diferente del Formulario I-601. Mientras que el I-601 es para extranjeros inadmisibles en los EE.UU., el I-601A es específicamente para personas que solo necesitan una exención por presencia ilegal.","Si bien el Formulario I-601A puede renunciar a la presencia ilegal, no renuncia a otros motivos de inadmisibilidad."]},{heading:"Requisitos para el I-601A",bullets:["Ser pariente inmediato de un ciudadano de los EE.UU. (cónyuge, hijo, padre)","Tener una petición de inmigrante aprobada (Formulario I-130)","Tener un caso pendiente con el Centro Nacional de Visas","Demostrar que la denegación causaría dificultades extremas al cónyuge o padre ciudadano de EE.UU."]}],cta:"Nuestra firma ha manejado muchos de estos casos, así que sabemos cómo abordar cualquier problema que pueda surgir. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de exenciones I-601A en Los Ángeles."},{slug:"visa-u",title:"Visa U",subtitle:"Beneficios de Inmigración para Víctimas de Delitos",metaDescription:"La Visa U proporciona beneficios de inmigración a víctimas de delitos que han cooperado con las autoridades. Abogados de Visa U en Los Ángeles.",intro:"La Visa U proporciona beneficios de inmigración a víctimas de delitos que han cooperado con las autoridades. También ayudamos con el ajuste de estatus a residencia permanente después de tres años.",sections:[{heading:"¿Qué es la Visa U?",paragraphs:["El estatus de no inmigrante U (la Visa U) es un programa de alivio de inmigración que busca hacer más seguro para las víctimas de ciertos delitos denunciar sus casos a la policía.","El Congreso aprobó la Ley de Protección de Víctimas de la Trata y la Violencia (VTVPA) en 2000 y creó dos categorías de visas de no inmigrante: la Visa U para víctimas de ciertos delitos y la Visa T para víctimas de trata de personas."]},{heading:"Elegibilidad para la Visa U",bullets:["Ha sufrido abuso físico o mental sustancial como resultado de haber sido víctima de actividad delictiva calificada","Tiene información sobre la actividad delictiva calificada","Ha sido útil, es útil o probablemente será útil para funcionarios del orden público en la investigación o enjuiciamiento de la actividad delictiva","La actividad delictiva violó las leyes de los EE.UU. o ocurrió en los EE.UU."]},{heading:"Actividades Delictivas Calificadas",bullets:["Violencia doméstica","Agresión sexual","Abuso sexual de un menor","Prostitución","Esclavitud","Tráfico de personas","Acoso","Secuestro","Extorsión","Testigo falso","Obstrucción de la justicia","Y otros delitos graves"]}],cta:"Nuestra firma sabrá cómo ayudarle a superar cualquier complicación y lograr el resultado más favorable posible para su caso. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de Visa U en Los Ángeles."}];function Ff(o){return Eu.find(l=>l.slug===o)}const ys={asilo:"asylum","cancelacion-de-eliminacion":"cancellation-of-removal","ciudadania-y-naturalizacion":"citizenship-and-naturalization",daca:"daca","deportacion-y-remocion":"deportation-and-removal","tarjeta-verde-ajuste-de-estatus":"green-card-adjustment-of-status","i-601a-exenciones-provisionales":"i-601a-provisional-waivers","visa-de-prometido-k-1":"k-1-fiance-visa","estado-de-proteccion-temporal-tps":"temporary-protected-status-tps","visa-u":"u-visa"};function Of(){const o=Ye(),[l,c]=T.useState(null);return t.jsxs("div",{children:[t.jsx(Ae,{title:"Nuestros Servicios | Abogados de Inmigración Los Ángeles",description:"Servicios completos de inmigración en Los Ángeles. Asilo, cancelación de deportación, tarjetas verdes, ciudadanía, DACA, Visa U y más. Llame al (213) 388-1821.",canonical:"/es/servicios",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Nuestros ",t.jsx("span",{className:"text-[#D4A853]",children:"Servicios"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Nuestra firma maneja la gama completa de asuntos de inmigración. Desde asilo y defensa contra la deportación hasta reunificación familiar y ciudadanía, tenemos la experiencia y dedicación que su caso exige."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-5xl mx-auto",children:t.jsx("div",{className:"space-y-6",children:Eu.map(u=>{const p=l===u.slug;return t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[t.jsxs("button",{onClick:()=>c(p?null:u.slug),className:"w-full text-left p-6 md:p-8 flex items-start gap-5",children:[t.jsx("div",{className:"flex-shrink-0 w-14 h-14 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:t.jsx("svg",{className:"w-7 h-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-1",children:u.title}),t.jsxs("p",{className:"text-gray-500 text-sm",children:[u.intro.substring(0,120),"..."]})]}),t.jsx("div",{className:"flex-shrink-0 mt-1",children:t.jsx("svg",{className:`w-5 h-5 text-[#D4A853] transition-transform duration-300 ${p?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})})]}),t.jsx("div",{className:`transition-all duration-300 overflow-hidden ${p?"max-h-[600px] opacity-100":"max-h-0 opacity-0"}`,children:t.jsxs("div",{className:"px-6 md:px-8 pb-8 ml-0 md:ml-[4.75rem]",children:[t.jsx("div",{className:"gold-line mb-5"}),t.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:u.intro}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs(Y,{to:`/es/servicios/${u.slug}`,onClick:m=>m.stopPropagation(),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Leer Más",t.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),t.jsx("button",{onClick:m=>{m.stopPropagation(),o("/es/contactenos")},className:"inline-flex items-center text-gray-500 font-semibold text-sm tracking-wide uppercase hover:text-[#1B2A4A] transition-colors",children:"Consultar su Caso"})]})]})})]},u.slug)})})})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿No Está Seguro Qué Servicio Necesita?"}),t.jsx("p",{className:"text-gray-300 mb-8",children:"Cada caso de inmigración es único. Contáctenos para una consulta y le ayudaremos a entender sus opciones."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),t.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-outline",children:"Contáctenos en Línea"})]})]})})]})}function _f(){const{area:o}=Zt(),l=Ye(),c=o?Ff(o):void 0;return T.useEffect(()=>{c&&Au({service_name:c.title,service_slug:c.slug,language:"es"})},[c==null?void 0:c.slug]),c?t.jsxs("div",{children:[t.jsx(Ae,{title:`${c.title} | Abogados de Inmigración Los Ángeles`,description:c.metaDescription,canonical:`/es/servicios/${c.slug}`,ogImage:`https://www.makeitglow.co/api/og/becraft-immigration?title=${encodeURIComponent(c.title)}&subtitle=${encodeURIComponent("Abogados de Inmigración · Los Ángeles")}`,schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:ys[c.slug]?[{lang:"en",path:`/services/${ys[c.slug]}`},{lang:"es",path:`/es/servicios/${c.slug}`},{lang:"x-default",path:`/services/${ys[c.slug]}`}]:void 0}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[t.jsx(Y,{to:"/es/servicios",className:"hover:text-[#D4A853] transition-colors",children:"Servicios"}),t.jsx("span",{children:"/"}),t.jsx("span",{className:"text-gray-300",children:c.title})]}),t.jsx("div",{className:"gold-line mb-6"}),t.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:c.title}),t.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:c.subtitle}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:c.intro})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx("div",{className:"space-y-10",children:c.sections.map((u,p)=>{var m;return t.jsxs("div",{children:[u.heading&&t.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:u.heading}),(m=u.paragraphs)==null?void 0:m.map((f,x)=>t.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:f},x)),u.bullets&&u.bullets.length>0&&t.jsx("ul",{className:"space-y-2 mb-4",children:u.bullets.map((f,x)=>t.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[t.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),t.jsx("span",{children:f})]},x))}),u.numbered&&u.numbered.length>0&&t.jsx("ol",{className:"space-y-2 mb-4",children:u.numbered.map((f,x)=>t.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[t.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:x+1}),t.jsx("span",{children:f})]},x))})]},p)})}),t.jsx("div",{className:"gold-line my-10"}),t.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[t.jsxs("h2",{className:"text-2xl font-serif text-white font-bold mb-3",children:["¿Necesita Ayuda con ",c.title,"?"]}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:"Nuestros abogados de inmigración están listos para evaluar su caso. Consultas disponibles."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",onClick:()=>ot({phone_number:"2133881821",location:"service_cta",language:"es"}),className:"btn-gold",children:"Llame al (213) 388-1821"}),t.jsx("button",{onClick:()=>{Su({label:"contact_us_online",location:"service_cta",language:"es"}),l("/es/contactenos")},className:"btn-outline",children:"Envíenos un Mensaje"})]})]})]})}),t.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:t.jsx("div",{className:"max-w-4xl mx-auto px-4",children:t.jsxs(Y,{to:"/es/servicios",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[t.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"Volver a Servicios"]})})})]}):t.jsxs("div",{className:"section-padding text-center",children:[t.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Página No Encontrada"}),t.jsx("p",{className:"text-gray-500 mb-8",children:"Ese servicio no existe."}),t.jsx(Y,{to:"/es/servicios",className:"btn-gold",children:"Volver a Servicios"})]})}const Uu=[{slug:"la-guia-becraft-para-evitar-la-deportacion",title:"La Guía Becraft para Evitar la Deportación",subtitle:"¿Cuáles Son Sus Derechos Legales Si Podría Ser Deportado?",metaDescription:"Una guía completa que cubre el proceso de deportación, defensas legales, y todas las opciones disponibles para evitar ser deportado. De la Oficina Legal de Todd Becraft.",intro:"La deportación, también conocida como expulsión, es un proceso grave en el que a un no ciudadano se le ordena abandonar el país debido a una violación de las leyes de inmigración. Esta guía le ayudará a entender sus derechos y opciones.",sections:[{heading:"Comprender el Proceso de Deportación",paragraphs:["Antes de analizar los recursos legales, es importante entender cómo funcionan los procedimientos de deportación. La deportación generalmente comienza con un arresto o un Aviso de Comparecencia (NTA) ante un juez de inmigración. La agencia de Inmigración y Control de Aduanas de EE.UU. (ICE) es responsable de hacer cumplir las órdenes de deportación.","El proceso generalmente sigue estos pasos:"],bullets:["Emisión de un Aviso de Comparecencia (NTA): Este documento describe los motivos de los procedimientos de expulsión y especifica una fecha en el tribunal.","Audiencia del Calendario Principal: Esta audiencia inicial permite al no ciudadano responder a los cargos y solicitar alivio.","Audiencia Individual: Si se busca alivio, se programará una audiencia separada para presentar pruebas y argumentos legales.","Decisión del Juez de Inmigración: El juez otorgará el alivio o emitirá una orden de deportación.","Apelaciones: Si el juez ordena la deportación, la persona puede tener opciones para apelar la decisión.","Expulsión o Suspensión de la Expulsión: Si se agotan todas las opciones legales, la persona puede ser deportada o se le puede otorgar una suspensión de la expulsión."]},{heading:"Recursos Legales contra la Deportación",paragraphs:["Existen varias defensas y recursos legales disponibles para las personas que enfrentan la deportación. Cada caso es único y buscar asesoramiento legal es crucial para determinar el mejor curso de acción."]},{heading:"1. Impugnar los Cargos",paragraphs:["Uno de los primeros pasos para combatir la deportación es cuestionar la base legal para la expulsión. Las posibles defensas incluyen:"],bullets:["Defectos de procedimiento: Si el NTA contiene información incorrecta, o si el gobierno no sigue los procedimientos adecuados, el caso puede ser desestimado.","Falta de evidencia: El gobierno debe probar que el individuo es expulsable. Si faltan pruebas suficientes, el caso puede ser desestimado.","Arresto o detención ilegal: Si se violaron los derechos de una persona durante el proceso de arresto o detención, se podrían impugnar los procedimientos de expulsión."]},{heading:"2. Asilo y Protección contra Persecución",paragraphs:["Las personas que temen persecución en su país de origen por raza, religión, nacionalidad, opinión política o membresía en un grupo social particular pueden solicitar asilo. Para ser elegible, el solicitante debe:"],bullets:["Presentar la solicitud dentro de un año de llegada a los EE.UU. (o mostrar circunstancias excepcionales para una presentación tardía).","Demostrar un miedo creíble de persecución.","Proporcionar evidencia que apoye la solicitud."]},{heading:"3. Cancelación de Remoción",paragraphs:["La cancelación de la expulsión es una forma de alivio disponible para ciertas personas que han establecido vínculos sólidos con los EE.UU. Los criterios de elegibilidad varían según si el solicitante es un residente permanente legal (LPR) o un residente no permanente."],bullets:["Para Residentes Permanentes Legales: Debe haber sido LPR durante al menos cinco años, haber residido continuamente en los EE.UU. durante al menos siete años, y no haber sido condenado por un delito grave agravado.","Para No Residentes Permanentes: Debe haber estado físicamente presente en los EE.UU. durante al menos diez años, demostrar buen carácter moral y probar que la expulsión causaría dificultades excepcionales y extremadamente inusuales a un familiar ciudadano de EE.UU. o LPR que califique."]},{heading:"4. Ajuste de Estatus",paragraphs:["Algunas personas que enfrentan la deportación pueden ser elegibles para ajustar su estatus al de residente permanente legal (titular de tarjeta verde). Esta opción puede estar disponible si:"],bullets:["El individuo tiene un familiar inmediato que es ciudadano de EE.UU. o residente permanente legal y puede peticionarlo.","El individuo califica bajo ciertas categorías de empleo.","El individuo califica bajo programas especiales como la Ley de Violencia contra la Mujer (VAWA) o el estatus de inmigrante juvenil especial (SIJS)."]},{heading:"5. Salida Voluntaria",paragraphs:["Si no hay otros recursos legales disponibles, una persona puede solicitar la salida voluntaria. Esto le permite salir de los EE.UU. en sus propios términos en lugar de ser expulsado por la fuerza, incluida la capacidad de volver a solicitar la entrada legal en el futuro sin las penalidades asociadas con la deportación."]}],cta:"La deportación es un asunto legal grave, pero existen numerosas opciones legales para las personas en riesgo de expulsión. Buscar asesoramiento legal inmediato es esencial. En la Oficina Legal de Todd Becraft, traemos años de experiencia ayudando a las personas a evitar la deportación. Llámenos hoy: (213) 388-1821."},{slug:"la-guia-de-becraft-sobre-como-convertirse-en-ciudadano-estadounidense",title:"La Guía de Becraft sobre Cómo Convertirse en Ciudadano Estadounidense",subtitle:"El Camino hacia la Ciudadanía Americana",metaDescription:"Una guía completa sobre el proceso de naturalización: requisitos de elegibilidad, el proceso paso a paso, y la vida como ciudadano estadounidense.",intro:"¿Es usted un residente no ciudadano de los Estados Unidos que desea convertirse en ciudadano? Esta guía completa le explicará todo lo que necesita saber sobre el proceso de naturalización.",sections:[{heading:"1. Elegibilidad: ¿Está Listo para Solicitar?",paragraphs:["Antes de poder solicitar la ciudadanía estadounidense, debe cumplir con varios requisitos que garanticen que se ha establecido en los Estados Unidos."]},{heading:"A. Estatus de Residente Permanente Legal",paragraphs:["El primer paso es tener el estatus de Residente Permanente Legal (LPR), también conocido como tener una tarjeta verde. La mayoría de los residentes permanentes legales obtuvieron su tarjeta verde a través de patrocinio familiar, empleo o al ser admitidos como refugiados o asilados."],bullets:["Patrocinio familiar","Inmigración basada en empleo","Lotería de Visa de Diversidad","Estatus de Asilo o Refugiado","Categorías especiales de inmigrantes"]},{heading:"B. Residencia Continua",paragraphs:["Una vez que tenga su tarjeta verde, deberá haber vivido en los Estados Unidos continuamente por un período determinado:"],bullets:["Se requieren cinco años de residencia continua para la mayoría de los solicitantes.","Se requieren tres años de residencia continua si está casado con un ciudadano de EE.UU."]},{heading:"C. Presencia Física",bullets:["Debe haber estado físicamente presente en los EE.UU. durante al menos 30 meses de los últimos cinco años.","Si solicita basándose en el matrimonio con un ciudadano de EE.UU., 18 meses de los últimos tres años."]},{heading:"D. Buen Carácter Moral",paragraphs:["Debe demostrar buen carácter moral, lo que significa que ha seguido las leyes, pagado sus impuestos y actuado de manera responsable. Ciertos comportamientos, como cometer delitos graves o no presentar declaraciones de impuestos, pueden descalificarlo."]},{heading:"E. Conocimiento Básico del Inglés",paragraphs:["Debe demostrar competencia básica en lectura, escritura y habla en inglés, que se evalúa durante su entrevista de ciudadanía. La prueba se enfoca en habilidades lingüísticas cotidianas y usa oraciones simples."]},{heading:"F. Conocimiento de la Historia y el Civismo de EE.UU.",paragraphs:["Deberá pasar una prueba de civismo que cubre la historia básica de EE.UU. y el gobierno. USCIS proporciona una lista de 100 preguntas posibles. Se le harán hasta 10 durante su entrevista y necesita responder al menos seis correctamente."]},{heading:"2. El Proceso de Naturalización: Paso a Paso"},{heading:"A. Presentar el Formulario N-400",paragraphs:["El primer paso es presentar el Formulario N-400, Solicitud de Naturalización. Este formulario solicita información sobre su historial personal. El formulario se puede presentar en línea o por correo."]},{heading:"B. Cita de Biometría",paragraphs:["USCIS le programará una cita de biometría donde se recopilan sus huellas dactilares, foto y firma para una verificación de antecedentes."]},{heading:"C. La Entrevista y los Exámenes de Naturalización",paragraphs:["Un oficial de USCIS revisará su solicitud y le hará preguntas para verificar la información. Durante la entrevista también tomará:"],bullets:["Prueba de inglés: Se le pedirá que lea y escriba oraciones simples en inglés, y responda algunas preguntas básicas habladas.","Prueba de civismo: Se le harán hasta 10 preguntas sobre la historia y el gobierno estadounidense; necesita acertar seis para aprobar."]},{heading:"D. El Juramento de Lealtad",paragraphs:["El último paso es prestar el Juramento de Lealtad en su ceremonia de naturalización. Recitará el juramento junto con otros nuevos ciudadanos y recibirá su Certificado de Naturalización, su prueba oficial de ciudadanía estadounidense."]},{heading:"3. La Vida como Ciudadano Estadounidense",paragraphs:["Una vez que haya completado el proceso de naturalización, disfrutará de todos los derechos y privilegios de la ciudadanía:"],bullets:["El derecho a votar en las elecciones federales, estatales y locales.","Solicitar un pasaporte estadounidense para viajes internacionales más fáciles.","Patrocinar a familiares para una tarjeta verde.","Acceso a empleos federales y autorizaciones de seguridad.","Plena participación en el servicio de jurado y la vida cívica."]},{heading:"4. Circunstancias Especiales y Excepciones",bullets:["Servicio militar: Puede calificar para la naturalización expedita sin los requisitos habituales de residencia.","Solicitantes mayores: Los solicitantes de 50 años o más que han vivido en los EE.UU. como titular de tarjeta verde durante 20 años o más pueden tomar el examen de civismo en su idioma nativo.","Exenciones médicas: Los solicitantes con discapacidades físicas o mentales pueden calificar para una exención de los exámenes de inglés o civismo."]}],cta:"Convertirse en ciudadano de los EE.UU. significa convertirse en parte de una nación con una rica historia. La Oficina Legal de Todd Becraft está lista para ayudarle a navegar cada paso del camino. Llámenos hoy: (213) 388-1821."}];function Wf(o){return Uu.find(l=>l.slug===o)}function Hf(){const o=Ye();return t.jsxs("div",{children:[t.jsx(Ae,{title:"Recursos de Inmigración | Abogados de Inmigración Los Ángeles",description:"Guías gratuitas de inmigración en español de la Oficina Legal de Todd Becraft. Deportación, ciudadanía, tarjeta verde y más.",canonical:"/es/recursos",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Recursos ",t.jsx("span",{className:"text-[#D4A853]",children:"Gratuitos"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Guías completas sobre el proceso de inmigración, escritas por el Abogado Todd Becraft para ayudarle a entender sus derechos y opciones."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-5xl mx-auto",children:t.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Uu.map(l=>t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 card-hover flex flex-col",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:t.jsx("svg",{className:"w-6 h-6 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),t.jsx("div",{className:"gold-line flex-1"})]}),t.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3",children:l.title}),t.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-6 flex-1",children:l.metaDescription}),t.jsxs(Y,{to:`/es/recursos/${l.slug}`,className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Leer la Guía",t.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]},l.slug))})})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿Tiene Preguntas Específicas sobre su Caso?"}),t.jsx("p",{className:"text-gray-300 mb-8",children:"Nuestros abogados están disponibles para una consulta. Hablamos español."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),t.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-outline",children:"Contáctenos en Línea"})]})]})})]})}function Vf(){const{slug:o}=Zt(),l=Ye(),c=o?Wf(o):void 0;return T.useEffect(()=>{c&&Cu({resource_name:c.title,resource_slug:c.slug,language:"es"})},[c==null?void 0:c.slug]),c?t.jsxs("div",{children:[t.jsx(Ae,{title:`${c.title} | Abogados de Inmigración Los Ángeles`,description:c.metaDescription,canonical:`/es/recursos/${c.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:c.title,author:{"@type":"Person",name:"Todd Becraft"}}}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[t.jsx(Y,{to:"/es/recursos",className:"hover:text-[#D4A853] transition-colors",children:"Recursos"}),t.jsx("span",{children:"/"}),t.jsx("span",{className:"text-gray-300",children:c.title})]}),t.jsx("div",{className:"gold-line mb-6"}),t.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:c.title}),t.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:c.subtitle}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:c.intro})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx("div",{className:"space-y-10",children:c.sections.map((u,p)=>{var m;return t.jsxs("div",{children:[u.heading&&t.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:u.heading}),(m=u.paragraphs)==null?void 0:m.map((f,x)=>t.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:f},x)),u.bullets&&u.bullets.length>0&&t.jsx("ul",{className:"space-y-2 mb-4",children:u.bullets.map((f,x)=>t.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[t.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),t.jsx("span",{children:f})]},x))}),u.numbered&&u.numbered.length>0&&t.jsx("ol",{className:"space-y-2 mb-4",children:u.numbered.map((f,x)=>t.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[t.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:x+1}),t.jsx("span",{children:f})]},x))})]},p)})}),t.jsx("div",{className:"gold-line my-10"}),t.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[t.jsx("h2",{className:"text-2xl font-serif text-white font-bold mb-3",children:"¿Tiene Preguntas sobre su Caso?"}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:c.cta}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),t.jsx("button",{onClick:()=>l("/es/contactenos"),className:"btn-outline",children:"Envíenos un Mensaje"})]})]})]})}),t.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:t.jsx("div",{className:"max-w-4xl mx-auto px-4",children:t.jsxs(Y,{to:"/es/recursos",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[t.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"Volver a Recursos"]})})})]}):t.jsxs("div",{className:"section-padding text-center",children:[t.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Página No Encontrada"}),t.jsx("p",{className:"text-gray-500 mb-8",children:"Ese recurso no existe."}),t.jsx(Y,{to:"/es/recursos",className:"btn-gold",children:"Volver a Recursos"})]})}const Gf=[{category:"Asilo y Convención Contra la Tortura",title:"Asilo y Protección Bajo la Convención Contra la Tortura",description:"Representamos a clientes que huyen de persecución por actividades políticas, creencias religiosas o membresía en grupos sociales específicos — incluyendo casos que otros abogados han rechazado.",outcome:"A través de evidencia exhaustiva de condiciones del país, testimonios de expertos y declaraciones personales convincentes, hemos obtenido asilo exitosamente para clientes que enfrentaban deportación, brindándoles protección permanente en los Estados Unidos.",tag:"Asilo Concedido"},{category:"Cancelación de Remoción",title:"Cancelación de Remoción para No Residentes Permanentes",description:"Defendemos a residentes de largo plazo que enfrentan deportación y tienen familiares ciudadanos o residentes permanentes en EE. UU., demostrando el sufrimiento excepcional y extremadamente inusual que causaría su remoción.",outcome:"Con evidencia médica, expedientes escolares, testimonios de expertos y documentación financiera, hemos persuadido a jueces de inmigración para cancelar la remoción y otorgar residencia permanente legal a nuestros clientes.",tag:"Remoción Cancelada"},{category:"Visa O-1 de Habilidad Extraordinaria",title:"Visa O-1 de Habilidad Extraordinaria",description:"Preparamos peticiones O-1 para profesionales con habilidades o logros extraordinarios, reuniendo la evidencia necesaria para demostrar reconocimiento nacional o internacional sostenido.",outcome:"Nuestros paquetes de petición incluyen cartas de recomendación de expertos, evidencia de premios y publicaciones, cobertura mediática y documentación de contribuciones significativas al campo.",tag:"O-1 Aprobada"},{category:"Visa P-3 para Artistas",title:"Visa P-3 para Artistas o Entretenedores Culturalmente Únicos",description:"Representamos a artistas y entretenedores que realizan formas de arte tradicionales o culturalmente únicas, preparando peticiones P-3 que establecen el mérito cultural de su trabajo.",outcome:"Nuestras peticiones documentan la singularidad cultural de la forma artística, las credenciales del artista y su reconocimiento internacional, y el valor cultural de las actuaciones planeadas en EE. UU.",tag:"P-3 Aprobada"},{category:"Visa U para Víctimas de Crimen",title:"Visa U para Víctimas de Crimen",description:"Ayudamos a víctimas de crímenes calificados que han cooperado con las autoridades a obtener protección mediante la Visa U, incluso cuando enfrentan la posibilidad de deportación.",outcome:"Trabajamos con las autoridades para obtener la certificación requerida, preparamos declaraciones completas y presentamos evidencia del impacto físico y psicológico para asegurar estatus legal, autorización de trabajo y un camino hacia la residencia permanente.",tag:"Visa U Aprobada"}],$f=[{quote:"El Abogado Todd Becraft es un caballero único en su clase. Desde que manejó mis problemas de inmigración, todo ha ido en la dirección correcta. Se puede sentir que te trata como un miembro de la familia.",author:"Rolando G.",service:"vía Yelp"},{quote:"La recepción fue fantástica y muy profesional. Me mostró mucho cuidado al preguntar cómo está mi familia. Lo veo como un experto por la manera en que hace y responde preguntas.",author:"John",service:"vía Avvo"},{quote:"El Abogado Todd Becraft es un abogado de inmigración excepcional y conocedor. Manejó mi caso con tal clase y dignidad — gané mi caso. Excelente personal, excelente servicio al cliente.",author:"Joseph M.",service:"vía Yelp"},{quote:"Siempre recordaré los servicios legales profesionales que recibí. Todo el personal es atento y siempre trabaja según las instrucciones de su cliente. Los servicios que recibí fueron mucho más de lo que me cobraron.",author:"Tiwa Bob",service:"vía Google"}];function Yf(){const o=Ye();return t.jsxs("div",{children:[t.jsx(Ae,{title:"Historias de Éxito | Abogados de Inmigración Los Ángeles",description:"Historias reales de éxito de clientes del Law Office of Todd Becraft — asilo concedido, tarjetas verdes, ciudadanía y casos de deportación ganados.",canonical:"/es/historias-de-exito",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Historias de Éxito | Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/success-stories"},{lang:"es",path:"/es/historias-de-exito"},{lang:"x-default",path:"/success-stories"}]}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Historias de ",t.jsx("span",{className:"text-[#D4A853]",children:"Éxito"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Cada caso que tomamos representa el futuro de una familia. Aquí presentamos algunos de los resultados que hemos logrado para nuestros clientes. Si bien cada caso es diferente, estas historias reflejan nuestro compromiso de luchar por el mejor resultado posible."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-5xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Resultados Representativos"}),t.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto text-sm",children:"Los siguientes son representativos de los tipos de casos que manejamos y los resultados que hemos logrado. Los resultados pasados no garantizan resultados futuros, ya que cada caso depende de sus circunstancias únicas."})]}),t.jsx("div",{className:"space-y-8",children:Gf.map((l,c)=>t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[t.jsxs("div",{className:"p-6 md:p-8",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[t.jsx("span",{className:"text-xs font-semibold tracking-wider uppercase text-[#D4A853]",children:l.category}),t.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200",children:[t.jsx("svg",{className:"w-3.5 h-3.5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),l.tag]})]}),t.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-4",children:l.title}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"El Desafío"}),t.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.description})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"El Resultado"}),t.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.outcome})]})]})]}),t.jsx("div",{className:"h-0.5 bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853]/30 to-[#D4A853]/0"})]},c))})]})}),t.jsx("section",{className:"section-padding bg-[#1B2A4A]",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-4",children:"Testimonios de Clientes"}),t.jsx("p",{className:"text-gray-400 max-w-xl mx-auto text-sm",children:"Escuche a las familias que hemos ayudado."})]}),t.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:$f.map((l,c)=>t.jsxs("div",{className:"border border-white/10 rounded-sm p-8 hover:border-[#D4A853]/30 transition-colors",children:[t.jsx("svg",{className:"w-8 h-8 text-[#D4A853]/30 mb-4",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})}),t.jsxs("blockquote",{className:"text-gray-200 leading-relaxed mb-6 italic font-serif",children:['"',l.quote,'"']}),t.jsx("div",{className:"gold-line mb-3"}),t.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.author}),t.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:l.service})]},c))}),t.jsx("p",{className:"text-center text-gray-500 text-xs mt-10",children:"* Los testimonios son representativos de las experiencias de los clientes. Los resultados pasados no garantizan resultados futuros."})]})}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Permítanos Luchar por Su Futuro"}),t.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Todo caso exitoso comienza con una conversación. Contáctenos hoy para una consulta sobre su situación migratoria."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),t.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Programar una Consulta"})]})]})})]})}const it=[{name:"Todd Becraft",title:"Abogado Fundador",photo:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",highlight:"Más de 20 Años en Derecho Migratorio",bio:["Todd Becraft es el abogado fundador de la Law Office of Todd Becraft, donde ha dedicado su carrera exclusivamente al derecho migratorio durante más de 20 años. Es el actual Vicepresidente del Capítulo SoCal de AILA y ex Presidente de la Sección de Inmigración del Colegio de Abogados del Condado de Los Ángeles.",'En 2009, Todd asumió la práctica migratoria del Juez de Inmigración Timothy Everett tras el retiro de éste a la práctica privada. Antes de eso, el Sr. Becraft trabajó estrechamente con Judy Wood, conocida como "Saint Judy", cuya notable labor de defensa fue retratada en la película del mismo nombre.',"El Sr. Becraft ha representado con éxito a miles de clientes en casos de asilo, defensa contra deportación, cancelación de remoción, inmigración familiar y apelaciones ante la Junta de Apelaciones de Inmigración y el Tribunal de Apelaciones del Noveno Circuito."]},{name:"Dennis Escobar",title:"Paralegal Principal y Gerente de Oficina",photo:"https://images.makeitglow.co/projects/becraft-immigration/8f93bc42d26b873e-dennis-escobar-portrait-becraft-immigration-law-980x1337.webp",highlight:"Más de 25 Años en Derecho Migratorio",bio:["Durante más de 25 años, Dennis Escobar ha dedicado su carrera al derecho migratorio. Como Paralegal Principal y Gerente de Oficina, Dennis administra las operaciones diarias de la oficina mientras trabaja estrechamente con abogados y clientes en prácticamente todas las etapas de un caso.","Como inmigrante él mismo, Dennis conoce de primera mano los desafíos que enfrentan las familias. Es admirado por su paciencia, dedicación y compasión, siempre tomándose el tiempo para escuchar y atender las preocupaciones de los clientes con cuidado."]},{name:"Gianina Haro",title:"Paralegal",highlight:"Más de 30 Años en Derecho Migratorio",photo:"https://images.makeitglow.co/projects/becraft-immigration/4baa423944dd3952-gianina-haro-portrait-becraft-immigration-law-980x1337.webp",bio:["Con más de treinta años de experiencia en derecho migratorio, Gianina Haro es un pilar fundamental de apoyo al cliente en la Law Office of Todd Becraft. Se especializa en preparar trámites, recopilar evidencia y gestionar los detalles que mantienen los casos en movimiento.","Bilingüe en inglés y español, Gianina tiende puentes de comunicación, ayudando a los clientes a sentirse cómodos y comprendidos. Trabaja en una amplia gama de asuntos migratorios, incluyendo solicitudes de asilo, peticiones familiares, exenciones y naturalización."]},{name:"Imani Machado",title:"Directora de Marketing y Especialista en Clientes",photo:"https://images.makeitglow.co/projects/becraft-immigration/c309104b568a8ee4-imani-machado-portrait-becraft-immigration-law-980x1337.webp",bio:["Imani Machado aporta creatividad, estrategia y compasión a su rol como Directora de Marketing y Especialista en Clientes. Con más de una década de experiencia en marketing legal y relaciones con clientes, asegura que la misión de defensa del despacho se extienda más allá de la sala de audiencias.","Imani gestiona los esfuerzos de alcance comunitario, desarrolla recursos educativos y trabaja directamente con los clientes para brindarles apoyo y orientación a lo largo de su proceso migratorio. Su dedicación se extiende a la comunidad en general, donde colabora con organizaciones que sirven a familias inmigrantes en todo el sur de California."]}],Jf=[{title:"Más de 20 Años de Experiencia",desc:"Dos décadas de práctica dedicada al derecho migratorio significa que hemos visto y manejado exitosamente prácticamente todo tipo de caso.",icon:"clock"},{title:"Exclusivamente Derecho Migratorio",desc:"No incursionamos en otras áreas. La inmigración es nuestro único enfoque, lo que nos otorga un conocimiento sin igual en la materia.",icon:"focus"},{title:"Atención Personalizada",desc:"Cada caso es manejado personalmente por nuestros abogados. Usted trabaja directamente con abogados con experiencia, no con personal junior.",icon:"person"},{title:"Servicios Bilingües",desc:"Nuestro equipo es completamente bilingüe en inglés y español. Nada se pierde en la traducción cuando su futuro está en juego.",icon:"language"},{title:"Trayectoria Comprobada",desc:"Miles de casos exitosos, incluyendo complejas solicitudes de asilo y defensas contra deportación que otras firmas rechazaron.",icon:"check"},{title:"Defensa con Compasión",desc:"Entendemos el impacto emocional de los procedimientos migratorios. Nuestro equipo ofrece empatía genuina y apoyo en cada paso del camino.",icon:"heart"}];function Qf({type:o}){const l="w-6 h-6";switch(o){case"clock":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})});case"focus":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})});case"person":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})});case"language":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})});case"check":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})});case"heart":return t.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})});default:return null}}function Kf(){const o=Ye();return t.jsxs("div",{children:[t.jsx(Ae,{title:"Sobre Nosotros | Abogados de Inmigración Los Ángeles",description:"Conozca al Abogado Todd Becraft — décadas de experiencia en derecho migratorio en Los Ángeles ayudando a familias, beneficiarios de DACA, solicitantes de asilo y más.",canonical:"/es/sobre-nosotros",schema:{"@context":"https://schema.org","@type":"AboutPage",name:"Sobre Nosotros — Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/about"},{lang:"es",path:"/es/sobre-nosotros"},{lang:"x-default",path:"/about"}]}),t.jsxs("section",{className:"relative overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0",children:[t.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/d4f20bfcce771e9e-unnamed-10-scaled.webp",alt:"El equipo de Becraft Immigration Law",className:"hidden md:block w-full h-full object-cover"}),t.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/team-9x16.jpg",alt:"El equipo de Becraft Immigration Law",className:"block md:hidden w-full h-full object-cover"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/80 to-[#1B2A4A]/40"})]}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36",children:t.jsxs("div",{className:"max-w-xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6 leading-tight",children:["Las Personas Detrás de ",t.jsx("span",{className:"text-[#D4A853]",children:"Su Caso"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed mb-8",children:"Un equipo que ha dedicado sus carreras — más de 50 años combinados — exclusivamente al derecho migratorio. No solo manejamos casos. Cambiamos vidas."}),t.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-gold",children:"Reúnase con Nosotros Hoy"})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"py-20 md:py-28 bg-white",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid lg:grid-cols-5 gap-16 items-start",children:[t.jsx("div",{className:"lg:col-span-2",children:t.jsxs("div",{className:"sticky top-28",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4 leading-tight",children:"Dos Décadas Luchando por lo Justo"}),t.jsxs("div",{className:"flex items-center gap-4 mt-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"20+"}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Años"})]}),t.jsx("div",{className:"w-px h-12 bg-gray-200"}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"Miles"}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Casos Ganados"})]}),t.jsx("div",{className:"w-px h-12 bg-gray-200"}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"100%"}),t.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Inmigración"})]})]})]})}),t.jsxs("div",{className:"lg:col-span-3 space-y-6",children:[t.jsx("p",{className:"text-gray-600 leading-relaxed text-lg",children:"La Law Office of Todd Becraft fue fundada con una misión clara: brindar representación legal excepcional a inmigrantes y sus familias. A lo largo de las últimas dos décadas, esa misión nunca ha vacilado."}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Desde nuestras oficinas en Wilshire Boulevard, en el corazón de Los Ángeles, hemos ayudado a miles de personas a navegar el complejo sistema migratorio de los Estados Unidos. Ya sea que nuestros clientes busquen asilo por persecución, luchen contra la deportación, se reúnan con familiares o persigan el sueño de la ciudadanía estadounidense, aportamos el mismo nivel de dedicación, experiencia y atención personal a cada caso."}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Lo que nos distingue es nuestro enfoque exclusivo en derecho migratorio. Mientras muchos despachos distribuyen su atención entre múltiples áreas de práctica, nosotros hemos elegido dedicar toda nuestra práctica a la inmigración. Este enfoque singular significa que nos mantenemos a la vanguardia de la ley y política migratoria en constante cambio, brindando a nuestros clientes una ventaja crítica."}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Los miembros de nuestro equipo provienen de diversos orígenes, y varios son inmigrantes ellos mismos. Entendemos los desafíos que enfrentan nuestros clientes — no solo legalmente, sino personalmente. Esa experiencia vivida da forma a nuestra empatía, nuestra urgencia y nuestro compromiso inquebrantable con cada persona que cruza nuestras puertas."})]})]})})}),t.jsx("section",{className:"bg-[#1B2A4A] overflow-hidden",children:t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"grid lg:grid-cols-2",children:[t.jsxs("div",{className:"relative h-[500px] lg:h-auto",children:[t.jsx("img",{src:it[0].photo,alt:it[0].name,className:"absolute inset-0 w-full h-full object-cover object-top"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B2A4A]/30"})]}),t.jsxs("div",{className:"px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center",children:[t.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase mb-3",children:it[0].title}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-2",children:it[0].name}),it[0].highlight&&t.jsxs("p",{className:"text-[#D4A853]/70 text-sm mb-8 flex items-center gap-2",children:[t.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),it[0].highlight]}),t.jsx("div",{className:"w-12 h-px bg-[#D4A853]/40 mb-8"}),t.jsx("div",{className:"space-y-4",children:it[0].bio.map((l,c)=>t.jsx("p",{className:"text-gray-300 leading-relaxed text-[15px]",children:l},c))}),t.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[t.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Vicepresidente AILA SoCal"}),t.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Three Best Rated"}),t.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AVVO 10.0"}),t.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Premio Pro Bono"})]})]})]})})}),t.jsx("section",{className:"py-20 md:py-28 bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Nuestro Equipo"}),t.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Cada miembro de nuestro equipo comparte el mismo compromiso: luchar por el futuro de nuestros clientes."})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:it.slice(1).map(l=>t.jsxs("div",{className:"group",children:[t.jsxs("div",{className:"relative overflow-hidden rounded-sm mb-6",children:[t.jsx("img",{src:l.photo,alt:l.name,className:"w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"}),t.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[t.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.15em] uppercase mb-1",children:l.title}),t.jsx("h3",{className:"text-xl font-serif text-white font-bold",children:l.name}),l.highlight&&t.jsx("p",{className:"text-white/50 text-xs mt-1",children:l.highlight})]})]}),t.jsx("div",{className:"space-y-3",children:l.bio.map((c,u)=>t.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:c},u))})]},l.name))})]})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("div",{className:"text-center mb-10",children:t.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase",children:"Reconocimientos"})}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{name:"Three Best Rated",detail:"Mejores Abogados de Inmigración en Los Ángeles"},{name:"10 Best",detail:"Instituto Americano de Consejo Legal"},{name:"AVVO 10.0",detail:"Calificación Superior — Abogado Destacado"},{name:"Expertise",detail:"21 Mejores Abogados de Inmigración en LA"}].map(l=>t.jsxs("div",{className:"text-center py-6 border border-white/5 rounded-sm hover:border-[#D4A853]/20 transition-colors",children:[t.jsx("svg",{className:"w-6 h-6 text-[#D4A853] mx-auto mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),t.jsx("h3",{className:"text-white font-serif font-bold text-sm",children:l.name}),t.jsx("p",{className:"text-gray-500 text-xs mt-1",children:l.detail})]},l.name))})]})}),t.jsx("section",{className:"py-20 md:py-28 bg-white",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"gold-line-center mb-6"}),t.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"¿Por Qué Elegirnos?"})]}),t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Jf.map(l=>t.jsxs("div",{className:"flex gap-5",children:[t.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:t.jsx(Qf,{type:l.icon})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),t.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:l.desc})]})]},l.title))})]})}),t.jsx("section",{className:"bg-[#1B2A4A] py-16",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿Listo para Hablar Sobre Su Caso?"}),t.jsx("p",{className:"text-gray-300 mb-8",children:"Contáctenos hoy para una consulta confidencial con un abogado de inmigración con experiencia."}),t.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[t.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),t.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-outline",children:"Envíenos un Mensaje"})]})]})})]})}function Xf(){const[o,l]=T.useState({name:"",email:"",phone:"",service:"",message:""}),[c,u]=T.useState(!1),[p,m]=T.useState(!1),[f,x]=T.useState(""),v=C=>{l({...o,[C.target.name]:C.target.value})},b=async C=>{C.preventDefault(),u(!0),x("");try{(await fetch("https://formspree.io/f/xkokkjdk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(m(!0),ju({language:"es",service:o.service}),l({name:"",email:"",phone:"",service:"",message:""})):x("Hubo un error al enviar su mensaje. Por favor intente de nuevo o llámenos directamente.")}catch{x("Hubo un error al enviar su mensaje. Por favor intente de nuevo o llámenos directamente.")}finally{u(!1)}};return t.jsxs("div",{children:[t.jsx(Ae,{title:"Contáctenos | Abogados de Inmigración Los Ángeles",description:"Contáctenos para una consulta de inmigración. Llame al (213) 388-1821 o llene nuestro formulario en línea. Se habla español.",canonical:"/es/contactenos",schema:{"@context":"https://schema.org","@type":"ContactPage",name:"Contáctenos — Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/contact"},{lang:"es",path:"/es/contactenos"},{lang:"x-default",path:"/contact"}]}),t.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),t.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Contáctenos ",t.jsx("span",{className:"text-[#D4A853]",children:"Hoy"})]}),t.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"¿Listo para dar el siguiente paso? Comuníquese para una consulta confidencial con un abogado de inmigración con experiencia."})]})}),t.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),t.jsx("section",{className:"section-padding bg-warm-white",children:t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"grid lg:grid-cols-5 gap-12 lg:gap-16",children:[t.jsx("div",{className:"lg:col-span-3",children:t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-10",children:[t.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Envíenos un Mensaje"}),t.jsx("p",{className:"text-gray-500 text-sm mb-8",children:"Complete el formulario y nos pondremos en contacto con usted a la brevedad. Todas las consultas son confidenciales."}),p?t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4",children:t.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),t.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Mensaje Enviado con Éxito"}),t.jsx("p",{className:"text-gray-500 mb-6",children:"Gracias por contactarnos. Revisaremos su mensaje y responderemos a la brevedad posible."}),t.jsx("button",{onClick:()=>m(!1),className:"text-[#D4A853] font-semibold text-sm hover:text-[#C49A48] transition-colors",children:"Enviar Otro Mensaje"})]}):t.jsxs("form",{onSubmit:b,className:"space-y-6",children:[t.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Nombre Completo *"}),t.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:o.name,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"Su nombre completo"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Correo Electrónico *"}),t.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:o.email,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"su@correo.com"})]})]}),t.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Número de Teléfono"}),t.jsx("input",{type:"tel",id:"phone",name:"phone",value:o.phone,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"(555) 123-4567"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700 mb-2",children:"Servicio Requerido"}),t.jsxs("select",{id:"service",name:"service",value:o.service,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 bg-white transition-colors appearance-none",style:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:"right 0.75rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.25em 1.25em"},children:[t.jsx("option",{value:"",children:"Seleccione un servicio..."}),t.jsx("option",{value:"asilo",children:"Asilo"}),t.jsx("option",{value:"cancelacion",children:"Cancelación de Remoción"}),t.jsx("option",{value:"ciudadania",children:"Ciudadanía y Naturalización"}),t.jsx("option",{value:"daca",children:"DACA"}),t.jsx("option",{value:"deportacion",children:"Defensa contra Deportación"}),t.jsx("option",{value:"tarjeta-verde",children:"Tarjeta Verde / Ajuste de Estatus"}),t.jsx("option",{value:"exencion",children:"Exención Provisional I-601A"}),t.jsx("option",{value:"visa-k1",children:"Visa K-1 de Prometido(a)"}),t.jsx("option",{value:"tps",children:"Estado de Protección Temporal (TPS)"}),t.jsx("option",{value:"visa-u",children:"Visa U"}),t.jsx("option",{value:"familia",children:"Inmigración Familiar"}),t.jsx("option",{value:"otro",children:"Otro"})]})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Cuéntenos Sobre Su Caso *"}),t.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:o.message,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none",placeholder:"Describa brevemente su situación migratoria..."})]}),f&&t.jsx("div",{className:"bg-red-50 border border-red-200 rounded-sm p-4",children:t.jsx("p",{className:"text-red-700 text-sm",children:f})}),t.jsx("button",{type:"submit",disabled:c,className:"btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",children:c?t.jsxs("span",{className:"flex items-center",children:[t.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),t.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Enviando..."]}):"Enviar Mensaje"}),t.jsx("p",{className:"text-xs text-gray-400",children:"Al enviar este formulario, acepta que podamos contactarle respecto a su consulta. El envío de este formulario no crea una relación abogado-cliente."})]})]})}),t.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[t.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8",children:[t.jsx("h3",{className:"text-white font-serif font-bold text-lg mb-6",children:"Llámenos Hoy"}),t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("a",{href:"tel:2133881821",onClick:()=>ot({phone_number:"2133881821",location:"contact_page",language:"es"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[t.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Local"}),t.jsx("p",{className:"text-lg font-semibold",children:"(213) 388-1821"})]})]}),t.jsxs("a",{href:"tel:8552016898",onClick:()=>ot({phone_number:"8552016898",location:"contact_page",language:"es"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[t.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Línea Gratuita"}),t.jsx("p",{className:"text-lg font-semibold",children:"(855) 201-6898"})]})]})]}),t.jsx("div",{className:"mt-6 bg-[#D4A853] text-[#1B2A4A] px-4 py-2 rounded-full text-sm font-bold tracking-wide text-center",children:"Se Habla Español"})]}),t.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-6",children:"Información de la Oficina"}),t.jsx("div",{className:"gold-line mb-6"}),t.jsxs("div",{className:"space-y-5",children:[t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:t.jsxs("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Ubicación"}),t.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["3450 Wilshire Blvd. Suite 1015",t.jsx("br",{}),"Los Angeles, CA 90010"]})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Horario de Atención"}),t.jsxs("div",{className:"text-gray-500 text-sm mt-1 space-y-1",children:[t.jsx("p",{children:"Lunes – Viernes: 9:00 AM – 6:00 PM"}),t.jsx("p",{children:"Sábado: Con Cita Previa"}),t.jsx("p",{children:"Domingo: Cerrado"})]})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:t.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Idiomas"}),t.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Inglés y Español"})]})]})]})]}),t.jsxs("div",{className:"bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-sm p-8 text-center",children:[t.jsx("svg",{className:"w-10 h-10 mx-auto text-[#D4A853] mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})}),t.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-2",children:"Consulta"}),t.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"Ofrecemos consultas iniciales para evaluar su caso de inmigración. Sin ningún compromiso y toda comunicación es estrictamente confidencial."}),t.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6",children:"Llame Ahora"})]}),t.jsx("div",{className:"bg-[#1B2A4A] rounded-sm overflow-hidden",children:t.jsxs("div",{className:"aspect-[4/3] flex items-center justify-center relative",children:[t.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.5) 1px, transparent 0)",backgroundSize:"20px 20px"}}),t.jsxs("div",{className:"text-center relative z-10",children:[t.jsxs("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/40 mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:[t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),t.jsx("p",{className:"text-gray-300 font-serif font-bold",children:"Los Ángeles, California"}),t.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Atendemos clientes en todo el sur de California"})]})]})})]})]})})})]})}const Iu=[{slug:"nuevas-restricciones-obtener-renovar-permiso-trabajo-uscis-2026",title:"¿Cuáles son las nuevas restricciones para obtener y renovar un permiso de trabajo en EE. UU.? Entendiendo los últimos cambios del USCIS en 2026.",excerpt:"Para millones de inmigrantes, obtener un Documento de Autorización de Empleo (EAD) es uno de los hitos más importantes en su proceso migratorio. Conozca los cambios normativos del USCIS que afectan la validez, la renovación y la elegibilidad para los permisos de trabajo.",date:"6 de agosto de 2026",author:"Todd Becraft",content:`
<h2>Comprender la autorización de empleo y quiénes cumplen los requisitos</h2>

<p>Para millones de inmigrantes, obtener un Documento de Autorización de Empleo de los Estados Unidos (EAD), comúnmente conocido como un permiso de trabajo, es uno de los hitos más importantes en su proceso migratorio. Un permiso de trabajo válido permite a los extranjeros elegibles trabajar legalmente en los Estados Unidos, obtener un número de Seguro Social, obtener una licencia de conducir en muchos estados, lograr la independencia financiera y mantener a sus familias mientras tramitan su estatus migratorio legal.</p>

<p>En los últimos años, sin embargo, el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) ha implementado varios cambios normativos importantes que afectan a quiénes pueden obtener un permiso de trabajo, la vigencia de los Documentos de Autorización de Empleo y el proceso de renovación. Estos cambios han generado dudas entre muchos inmigrantes, empleadores e incluso profesionales de la inmigración.</p>

<p>Para aumentar la incertidumbre, el gobierno federal ha propuesto restricciones adicionales para los solicitantes de asilo que buscan autorización de trabajo. De aprobarse, estas propuestas modificarían significativamente el plazo para obtener un Documento de Autorización de Empleo e impondrían nuevos requisitos de elegibilidad.</p>

<p>En el bufete de abogados de Todd Becraft, entendemos que la autorización de empleo suele ser más que un simple permiso para trabajar; es la base de la seguridad financiera para las familias inmigrantes. Ya sea que solicite su primer permiso de trabajo o se prepare para renovar un Documento de Autorización de Empleo existente, comprender las leyes de inmigración más recientes es fundamental para proteger tanto su capacidad de trabajar como sus objetivos migratorios a largo plazo.</p>

<p>Esta guía completa explica las normas vigentes, los cambios de política más importantes, quiénes cumplen los requisitos para obtener la autorización de empleo y qué debe saber todo inmigrante antes de presentar el Formulario I-765, Solicitud de autorización de empleo.</p>

<h2>¿Qué es un Documento de Autorización de Empleo (EAD)?</h2>

<p>Un Documento de Autorización de Empleo (EAD) es una tarjeta de identificación oficial emitida por el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) que autoriza a ciertos ciudadanos no estadounidenses a trabajar legalmente en los Estados Unidos.</p>

<p>El documento contiene:</p>

<ul>
<li>Tu fotografía</li>
<li>Número de registro de extranjero (número A), si corresponde</li>
<li>Categoría de elegibilidad de USCIS</li>
<li>Fecha de vencimiento de la tarjeta</li>
<li>Información sobre autorización de empleo</li>
</ul>

<p>El EAD es una prueba de que un empleador puede contratarte legalmente según la ley federal de inmigración.</p>

<p>Sin embargo, muchos inmigrantes no comprenden lo que realmente representa un permiso de trabajo.</p>

<p>El documento de autorización de empleo no otorga automáticamente un estatus migratorio legal.</p>

<p>Asimismo, un permiso de trabajo <strong>no</strong> es:</p>

<ul>
<li>Una tarjeta verde</li>
<li>Ciudadanía estadounidense</li>
<li>Una visa</li>
<li>Residencia permanente</li>
<li>Permiso para viajar internacionalmente</li>
<li>Protección contra la deportación</li>
</ul>

<p>En cambio, un documento de autorización de empleo generalmente está vinculado a un beneficio migratorio o estatus migratorio subyacente. Si dicho estatus cambia o finaliza, la elegibilidad para la autorización de empleo también puede variar.</p>

<h2>Por qué los permisos de trabajo son tan importantes</h2>

<p>Para muchas familias inmigrantes, la posibilidad de trabajar legalmente supone un cambio radical en sus vidas.</p>

<p>La autorización de empleo permite a los inmigrantes:</p>

<ul>
<li>Obtener ingresos legales</li>
<li>Pagar impuestos</li>
<li>Apoyar a sus familias</li>
<li>Generar crédito</li>
<li>Abrir cuentas bancarias</li>
<li>Cumplir los requisitos para obtener numerosas licencias profesionales</li>
<li>Obtener un número de Seguro Social</li>
<li>Establecer historial laboral</li>
<li>Contribuir a la economía estadounidense</li>
</ul>

<p>Sin autorización de trabajo, muchos inmigrantes se enfrentan a graves dificultades económicas mientras esperan que el USCIS tramite sus largos casos de inmigración.</p>

<p>Debido a que las demoras en la tramitación de los trámites de inmigración a veces pueden durar meses, o incluso años, el Congreso creó una autorización de empleo para muchos solicitantes que cumplían los requisitos, de modo que pudieran mantenerse legalmente mientras sus casos de inmigración permanecían pendientes.</p>

<h2>¿Quiénes pueden obtener un permiso de trabajo en Estados Unidos?</h2>

<p>Una de las mayores ideas erróneas es que cualquier persona que viva en Estados Unidos puede solicitar un permiso de trabajo.</p>

<p>Eso es incorrecto.</p>

<p>La autorización de empleo solo está disponible para los inmigrantes que cumplen con los requisitos de las categorías específicas establecidas por la ley federal de inmigración.</p>

<p>Algunas de las categorías más comunes incluyen:</p>

<h3>Solicitantes de ajuste de estatus</h3>

<p>Las personas que solicitan la residencia permanente legal a través del Formulario I-485 (Ajuste de estatus) a menudo pueden solicitar un Documento de Autorización de Empleo mientras esperan que el USCIS decida sobre su solicitud de Tarjeta Verde.</p>

<p>Esta categoría incluye a muchos inmigrantes que son:</p>

<ul>
<li>Casados con ciudadanos estadounidenses</li>
<li>Patrocinados por miembros de la familia</li>
<li>Patrocinados a través del empleo</li>
<li>Solicitantes en el marco de determinados programas humanitarios</li>
</ul>

<p>Una de las categorías de elegibilidad más comunes es la <strong>Categoría C09</strong>, que se aplica a los solicitantes con casos de ajuste de estatus pendientes.</p>

<h3>Solicitantes de asilo pendientes</h3>

<p>Las personas que hayan presentado correctamente sus solicitudes de asilo podrán optar a un permiso de trabajo tras cumplir el período de espera establecido por la normativa de inmigración.</p>

<p>El período de espera para los solicitantes de asilo se ha convertido en uno de los temas más debatidos en la legislación migratoria debido a las recientes propuestas de cambios federales, que analizaremos más adelante en esta guía.</p>

<p>La categoría más común de permiso de trabajo por asilo es la <strong>Categoría C08</strong>.</p>

<h3>Personas a las que se les ha concedido asilo</h3>

<p>Una vez aprobada la solicitud de asilo, la persona queda autorizada a trabajar en los Estados Unidos.</p>

<p>Aunque la autorización de empleo existe por ley, muchos solicitantes de asilo siguen solicitando un Documento de Autorización de Empleo porque los empleadores suelen pedir una prueba física de la autorización para trabajar durante el proceso de contratación.</p>

<h3>Refugiados</h3>

<p>Por lo general, los refugiados admitidos en Estados Unidos están autorizados a trabajar inmediatamente después de su llegada.</p>

<p>Muchos refugiados obtienen documentos de autorización de empleo a pesar de que la ley federal ya reconoce su autorización para trabajar.</p>

<h3>Estatus de Protección Temporal (TPS)</h3>

<p>Determinados nacionales de países designados para el Estatus de Protección Temporal (TPS) pueden reunir los requisitos para obtener una autorización de empleo mientras el TPS siga vigente.</p>

<p>Las designaciones de TPS cambian con frecuencia en función de los acontecimientos mundiales, los conflictos armados, los desastres ambientales y las decisiones del gobierno federal.</p>

<p>Dado que la designación de TPS de cada país sigue su propio cronograma, los solicitantes deben verificar su elegibilidad actual antes de presentar la solicitud.</p>

<h3>Beneficiarios de DACA</h3>

<p>Las personas aprobadas según la Acción Diferida para los Llegados en la Infancia (DACA) pueden recibir Documentos de Autorización de Empleo mientras mantienen su elegibilidad para DACA.</p>

<p>Aunque DACA ha enfrentado años de litigios y cambios de políticas, los beneficiarios actuales que continúan cumpliendo con los requisitos del programa pueden seguir siendo elegibles para la autorización de empleo bajo los procedimientos federales vigentes.</p>

<h3>Programas de Inmigración Humanitaria</h3>

<p>Varias categorías de inmigración humanitaria también pueden permitir la autorización de empleo.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>Solicitantes de visa U</li>
<li>Solicitantes de visa T</li>
<li>Solicitantes amparados por la Ley de Violencia contra la Mujer (VAWA)</li>
<li>Ciertos programas de libertad condicional</li>
<li>Estatus Especial de Inmigrante Juvenil (SIJS)</li>
<li>Ciertos beneficiarios de libertad condicional humanitaria</li>
</ul>

<p>La elegibilidad depende enteramente de las circunstancias migratorias específicas del solicitante.</p>

<h2>¿Quiénes NO califican automáticamente?</h2>

<p>Tan importante como saber quién califica es comprender quién no recibe automáticamente la autorización de empleo.</p>

<p>Muchos inmigrantes creen erróneamente que pueden trabajar legalmente simplemente porque:</p>

<ul>
<li>Entraron legalmente a los Estados Unidos.</li>
<li>Se casaron con un ciudadano estadounidense.</li>
<li>Presentaron una solicitud de inmigración.</li>
<li>Tienen hijos que son ciudadanos estadounidenses.</li>
<li>Han vivido en el país durante muchos años.</li>
<li>Están esperando una entrevista de inmigración.</li>
<li>Tienen una consulta pendiente con un abogado.</li>
</ul>

<p>Ninguna de estas circunstancias por sí sola constituye autorización de empleo.</p>

<h3>Caso práctico: Titular de visa de turista</h3>

<p>Sofía ingresa a Estados Unidos con una visa de turista B-2.</p>

<p>Tres meses después, se casa con un ciudadano estadounidense.</p>

<p>Aunque inmediatamente reúne los requisitos para iniciar el proceso de ajuste de estatus, legalmente no puede empezar a trabajar al día siguiente de la boda.</p>

<p>Primero debe presentar correctamente su solicitud de Tarjeta Verde, enviar el Formulario I-765 si cumple los requisitos y esperar a que el USCIS apruebe su Documento de Autorización de Empleo, o bien obtener la autorización a través de otra categoría que cumpla los requisitos.</p>

<p>Comenzar a trabajar antes de recibir la autorización puede generar complicaciones migratorias dependiendo de las circunstancias del caso.</p>

<h2>Idea errónea común: Presentar una solicitud de inmigración no le da automáticamente derecho a trabajar</h2>

<p>Otro malentendido tiene que ver con los casos de inmigración pendientes.</p>

<p>Simplemente presentar la documentación ante el USCIS no autoriza automáticamente el empleo.</p>

<p>Consideremos otro ejemplo.</p>

<h3>Caso práctico: Solicitante de tarjeta de residencia permanente en trámite</h3>

<p>David presenta el formulario I-485 después de casarse con una ciudadana estadounidense.</p>

<p>Su abogado presenta simultáneamente tanto la solicitud de ajuste de estatus como el formulario I-765.</p>

<p>David recibe los avisos de recepción del USCIS dos semanas después.</p>

<p>Aunque su solicitud de Green Card está pendiente y el USCIS ha aceptado su solicitud de permiso de trabajo para su procesamiento, David no puede comenzar a trabajar legalmente hasta que el USCIS apruebe su Documento de Autorización de Empleo o exista otra base independiente para la autorización de empleo.</p>

<p>Muchos inmigrantes creen erróneamente que un recibo sirve como autorización de trabajo.</p>

<p>En la mayoría de los casos, no lo es.</p>

<h2>¿Por qué el USCIS regula estrictamente los permisos de trabajo?</h2>

<p>La autorización de empleo se ha convertido en una de las áreas más examinadas de la política de inmigración.</p>

<p>El USCIS debe equilibrar varias prioridades contrapuestas:</p>

<ul>
<li>Proteger el mercado laboral estadounidense</li>
<li>Prevención del fraude migratorio</li>
<li>Realizar controles de seguridad nacional</li>
<li>Verificación de la identidad de los solicitantes</li>
<li>Tramitar millones de solicitudes de inmigración anualmente</li>
</ul>

<p>Las administraciones recientes han adoptado diferentes enfoques en materia de autorización de empleo.</p>

<p>Algunas políticas ampliaron los períodos de validez de los permisos de trabajo para reducir las demoras en la tramitación.</p>

<p>Los cambios normativos más recientes han acortado los períodos de validez y aumentado los controles de seguridad, lo que ha dado lugar a renovaciones más frecuentes para muchos solicitantes.</p>

<p>Estos cambios reflejan el esfuerzo del gobierno federal por reforzar los controles de inmigración al tiempo que gestiona uno de los sistemas de inmigración más grandes del mundo.</p>

<h2>Por qué importan estos nuevos cambios</h2>

<p>Si usted obtuvo un permiso de trabajo hace varios años, es posible que le sorprenda saber que las normas que rigen los documentos de autorización de empleo han cambiado significativamente.</p>

<p>Muchos inmigrantes que una vez recibieron permisos de trabajo de cinco años pueden recibir documentos válidos solo por 18 meses, dependiendo de su categoría migratoria.</p>

<p>Del mismo modo, los solicitantes que anteriormente dependían de las prórrogas automáticas mientras esperaban que el USCIS procesara las renovaciones pueden descubrir que esas protecciones han cambiado sustancialmente.</p>

<p>Es fundamental comprender estas nuevas normas, ya que un documento de autorización de empleo caducado puede interrumpir la relación laboral, afectar al cumplimiento por parte del empleador de la legislación federal y generar dificultades financieras innecesarias.</p>

<p>Afortunadamente, la mayoría de los problemas pueden evitarse mediante una planificación anticipada y un asesoramiento legal adecuado.</p>

<h2>Importantes cambios del USCIS en la renovación de permisos de trabajo y nuevas restricciones</h2>

<p>En la primera parte, explicamos qué es un Documento de Autorización de Empleo (EAD), quiénes cumplen los requisitos para obtener un permiso de trabajo y por qué la autorización de empleo es fundamental para millones de inmigrantes que viven en Estados Unidos. Sin embargo, comprender quiénes cumplen los requisitos es solo una parte de la historia.</p>

<p>En los últimos años, el USCIS ha modificado drásticamente la forma en que se emiten y renuevan los Documentos de Autorización de Empleo. Las políticas que antes permitían a muchos inmigrantes obtener permisos de trabajo con una validez de hasta cinco años se han revisado, y las protecciones de renovación automática que ayudaban a los trabajadores a evitar interrupciones en su empleo se han vuelto mucho más limitadas.</p>

<p>Para muchos inmigrantes, estos cambios significan una sola cosa: <strong>planificar con antelación nunca ha sido tan importante</strong>.</p>

<p>En el bufete de abogados de Todd Becraft, regularmente asesoramos a clientes cuyos permisos de trabajo están próximos a vencer. Muchos se sorprenden al descubrir que las normas de renovación en las que confiaban hace tan solo unos años quizás ya no se aplican hoy en día.</p>

<h2>Cambio importante n.º 1: El USCIS redujo ciertos períodos de validez de los permisos de trabajo de cinco años a 18 meses</h2>

<p>Uno de los cambios de política más significativos ocurrió en diciembre de 2025.</p>

<p>En 2023, el USCIS amplió el período de validez de los Documentos de Autorización de Empleo para varias categorías de inmigración de dos años a cinco años. El objetivo era reducir la creciente acumulación de solicitudes de renovación y minimizar las interrupciones laborales causadas por los largos tiempos de procesamiento.</p>

<p>Sin embargo, a finales de 2025, el USCIS cambió de rumbo.</p>

<p>Para muchos solicitantes, el período máximo de validez de los permisos de trabajo recién emitidos se redujo de cinco años a 18 meses.</p>

<p>Según el USCIS, la agencia adoptó el período de validez más corto para permitir controles de seguridad, verificación de identidad y revisiones de elegibilidad más frecuentes mientras los solicitantes permanecen en trámites de inmigración pendientes.</p>

<p>Esta política afecta principalmente a varias de las categorías de inmigración más comunes, entre ellas:</p>

<ul>
<li>Solicitantes con ajuste de estatus pendiente (Categoría C09)</li>
<li>Solicitantes de asilo pendientes (Categoría C08)</li>
<li>Refugiados</li>
<li>Personas a las que se les ha concedido asilo</li>
<li>Solicitantes que buscan la cancelación de la remoción</li>
<li>Solicitantes que solicitan la suspensión de la expulsión</li>
<li>Determinadas categorías de inmigración humanitaria</li>
</ul>

<p>Esto significa que los inmigrantes que antes renovaban sus permisos de trabajo cada cinco años ahora podrían tener que renovarlos cada año y medio.</p>

<h3>¿Por qué el USCIS realizó este cambio?</h3>

<p>El Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) declaró que los beneficios de inmigración deben reflejar la elegibilidad actual del solicitante, en lugar de permitir que transcurran largos períodos sin una evaluación actualizada.</p>

<p>La agencia explicó que los documentos de autorización de empleo más cortos ayudan a:</p>

<ul>
<li>Realizar verificaciones de antecedentes más frecuentes.</li>
<li>Verificar que los solicitantes sigan cumpliendo los requisitos.</li>
<li>Detectar el fraude más rápidamente.</li>
<li>Mejorar los controles de seguridad nacional.</li>
<li>Mantener registros de inmigración precisos.</li>
</ul>

<p>Quienes apoyan esta postura argumentan que una revisión más frecuente fortalece la integridad del sistema de inmigración.</p>

<p>Sin embargo, los críticos argumentan que los períodos de validez más cortos generan trámites innecesarios, aumentan los costos, suponen una carga para los empleadores y sobrecargan al USCIS con solicitudes de renovación adicionales.</p>

<p>Independientemente de la opinión política, la nueva política implica que los inmigrantes ahora deben prestar mucha más atención a las fechas de vencimiento de sus permisos.</p>

<h3>¿Ahora todos los permisos de trabajo tienen una duración de solo 18 meses?</h3>

<p>No.</p>

<p>Una de las mayores ideas erróneas es que todos los documentos de autorización de empleo caducan a los 18 meses.</p>

<p>Eso es incorrecto.</p>

<p>La limitación de 18 meses se aplica únicamente a categorías específicas de inmigración identificadas por el USCIS.</p>

<p>Otras categorías de autorización de trabajo siguen teniendo diferentes períodos de validez dependiendo de:</p>

<ul>
<li>Clasificación de inmigración</li>
<li>Visa subyacente</li>
<li>Designación de Estatus de Protección Temporal</li>
<li>Categoría de empleo</li>
<li>Regulaciones federales</li>
<li>Programas específicos por país</li>
</ul>

<p>Cada caso debe revisarse individualmente.</p>

<h3>¿Qué ocurre si ya tiene un permiso de trabajo de cinco años?</h3>

<p>Muchos clientes preguntan:</p>

<p>"Mi permiso de trabajo dice que vence en 2029. ¿Lo cancelará el USCIS debido a la nueva política?"</p>

<p>En general, no.</p>

<p>Si el USCIS ya le emitió su Documento de Autorización de Empleo con una fecha de vencimiento de cinco años antes de que la nueva política entrara en vigor, la agencia no acorta automáticamente la fecha de vencimiento impresa en su tarjeta.</p>

<p>Sin embargo, cuando solicite la renovación posteriormente, es posible que se apliquen las nuevas normas de validez a la tarjeta recién emitida.</p>

<h3>Caso práctico: Permiso de trabajo vigente con vigencia de cinco años</h3>

<p>Miguel recibió su Documento de Autorización de Empleo para el ajuste de estatus en septiembre de 2025.</p>

<p>La tarjeta caduca en septiembre de 2030.</p>

<p>Varios meses después, el USCIS anuncia que muchos futuros Documentos de Autorización de Empleo solo tendrán una validez de 18 meses.</p>

<p>La tarjeta actual de Miguel generalmente sigue siendo válida hasta su fecha de vencimiento impresa.</p>

<p>Sin embargo, cuando posteriormente solicite la renovación, el USCIS podría emitirle una tarjeta válida solo por 18 meses en lugar de otro documento con una validez de cinco años.</p>

<p>Es importante comprender la diferencia entre la validez actual y las renovaciones futuras.</p>

<h2>Cambio importante n.º 2: Las extensiones de renovación automática han cambiado</h2>

<p>Quizás una sorpresa aún mayor para muchos inmigrantes sean las prórrogas automáticas.</p>

<p>Durante años, ciertos inmigrantes que presentaron a tiempo las renovaciones de su Documento de Autorización de Empleo recibieron prórrogas automáticas mientras el USCIS procesaba sus nuevas solicitudes.</p>

<p>Esta política ayudó a evitar que los trabajadores perdieran sus empleos simplemente porque los tiempos de procesamiento del USCIS eran lentos.</p>

<p>La prórroga automática protegía a los trabajadores que cumplían los requisitos incluso después de la fecha de caducidad impresa en sus tarjetas.</p>

<p>Sin embargo, estas protecciones han cambiado significativamente.</p>

<h3>Comprender las extensiones automáticas</h3>

<p>Una extensión automática no es lo mismo que recibir un nuevo permiso de trabajo.</p>

<p>En cambio, permite temporalmente que ciertos solicitantes continúen trabajando después de que expire su Documento de Autorización de Empleo actual, mientras el USCIS revisa la solicitud de renovación.</p>

<p>Esta protección solo existe si se cumplen requisitos legales específicos.</p>

<p>No todos los solicitantes cumplen los requisitos.</p>

<h3>Reglas de extensión automática anteriores</h3>

<p>Según las políticas anteriores del USCIS, muchos solicitantes que cumplían los requisitos recibían extensiones automáticas de la autorización de empleo tras presentar a tiempo el formulario I-765.</p>

<p>Para hacer frente a las crecientes demoras en la tramitación de documentos, el gobierno federal amplió estas medidas de protección.</p>

<p>Para muchas categorías, las extensiones automáticas aumentaron de 180 días a 540 días.</p>

<p>Esto permitió a los inmigrantes que cumplían los requisitos seguir trabajando mientras esperaban a que el USCIS procesara las solicitudes de renovación, que suelen ser muy largas.</p>

<p>La ampliación protegió a miles de trabajadores de interrupciones laborales innecesarias.</p>

<h3>Cambio de política de octubre de 2025</h3>

<p>Comenzando con muchas solicitudes de renovación presentadas después del 30 de octubre de 2025, la política general de prórroga automática cambió significativamente.</p>

<p>Muchos solicitantes que anteriormente contaban con prórrogas automáticas podrían dejar de recibirlas simplemente por haber presentado una solicitud de renovación.</p>

<p>En cambio, ahora la elegibilidad depende mucho más de:</p>

<ul>
<li>Fecha de presentación</li>
<li>Categoría de inmigración</li>
<li>Reglamentos federales aplicables</li>
<li>Orientación individual del USCIS</li>
<li>Autoridad legal específica</li>
</ul>

<p>Los solicitantes nunca deben asumir que presentar el Formulario I-765 les permite automáticamente seguir trabajando después de la fecha de vencimiento de su Documento de Autorización de Empleo.</p>

<p>Cada renovación debe revisarse individualmente.</p>

<h3>Por qué esto importa</h3>

<p>La autorización de empleo afecta a mucho más que los trámites de inmigración.</p>

<p>Sin autorización válida:</p>

<ul>
<li>Los empleadores pueden tener prohibido continuar con la relación laboral.</li>
<li>Es posible que se interrumpa el pago de nóminas.</li>
<li>El seguro médico podría verse afectado.</li>
<li>Las aportaciones para la jubilación podrían cesar.</li>
<li>Pueden surgir dificultades económicas.</li>
</ul>

<p>Una renovación tardía puede afectar a toda una familia.</p>

<h3>Caso práctico: Presentar la solicitud demasiado tarde</h3>

<p>Lucía trabaja para un proveedor de servicios de salud.</p>

<p>Su documento de autorización de empleo vence el 15 de agosto.</p>

<p>Ella da por sentado que presentar su solicitud de renovación una semana antes de la fecha de vencimiento le permite automáticamente seguir trabajando.</p>

<p>Lamentablemente, su categoría migratoria ya no cumple con los requisitos para la prórroga automática que se aplicaba anteriormente.</p>

<p>Su empleador realiza una revisión del formulario I-9 y determina que Lucía ya no tiene pruebas de una autorización de empleo válida.</p>

<p>Aunque Lucía aún puede renovar su permiso de trabajo, debe dejar de trabajar hasta que el USCIS apruebe el nuevo Documento de Autorización de Empleo.</p>

<p>Si hubiera consultado con un abogado de inmigración meses antes, podría haberse preparado mejor para posibles retrasos en la tramitación.</p>

<h3>Caso práctico: La planificación temprana previene las interrupciones laborales</h3>

<p>David recibe un documento de autorización de empleo que vence en enero.</p>

<p>Seis meses antes de que expire, programa una consulta con un abogado de inmigración.</p>

<p>Juntos repasan:</p>

<ul>
<li>Categoría de inmigración</li>
<li>Plazos de presentación</li>
<li>Pruebas que lo respaldan</li>
<li>Tiempos de procesamiento del USCIS</li>
<li>Cambios en las políticas actuales</li>
</ul>

<p>Su solicitud de renovación se presenta tan pronto como lo permiten las regulaciones.</p>

<p>Aunque el proceso de tramitación del USCIS sigue siendo largo, una planificación anticipada reduce significativamente el riesgo de interrupción del empleo.</p>

<p>La preparación suele marcar la diferencia entre un empleo ininterrumpido y meses sin ingresos.</p>

<h2>Restricción n.º 1: No todas las renovaciones son automáticas</h2>

<p>Muchos inmigrantes creen erróneamente:</p>

<p>"Ya renové mi permiso de trabajo antes, así que renovarlo de nuevo debería ser sencillo."</p>

<p>Lamentablemente, esa suposición puede generar serios problemas.</p>

<p>Cada renovación requiere que el USCIS determine si el solicitante aún reúne los requisitos de la categoría de inmigración subyacente.</p>

<p>Por ejemplo:</p>

<p>Por lo general, un solicitante de ajuste de estatus pendiente solo conserva su elegibilidad mientras la solicitud del Formulario I-485 permanezca pendiente.</p>

<p>Si el USCIS deniega la solicitud de ajuste de estatus, también podría perderse la elegibilidad para la autorización de empleo.</p>

<p>Asimismo, los solicitantes de asilo deben seguir cumpliendo los requisitos aplicables a los casos de asilo pendientes.</p>

<p>Cada renovación implica una nueva revisión de los requisitos de elegibilidad.</p>

<h2>Restricción n.º 2: Su caso de inmigración subyacente rige su permiso de trabajo</h2>

<p>Uno de los conceptos más importantes en el derecho migratorio es este:</p>

<p>Un permiso de trabajo suele estar vinculado a otro beneficio migratorio.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>Asilo pendiente</li>
<li>Solicitud de tarjeta de residencia pendiente</li>
<li>Estatus de Protección Temporal</li>
<li>DACA</li>
<li>Libertad condicional humanitaria</li>
<li>Estatus de refugiado</li>
<li>Visa U</li>
<li>VAWA</li>
</ul>

<p>Si el caso de inmigración subyacente cambia, la elegibilidad para el Documento de Autorización de Empleo también podría cambiar.</p>

<p>El permiso de trabajo no existe de forma independiente.</p>

<h2>Restricción n.º 3: Los antecedentes penales pueden afectar la renovación</h2>

<p>El USCIS lleva a cabo controles de seguridad tanto durante las solicitudes iniciales como durante las renovaciones.</p>

<p>Ciertas condenas penales pueden:</p>

<ul>
<li>Afectar al caso de inmigración subyacente.</li>
<li>Generar problemas de inadmisibilidad.</li>
<li>Dar lugar a procedimientos de expulsión.</li>
<li>Afectar la elegibilidad para la autorización de empleo continua.</li>
</ul>

<p>No todos los arrestos impiden la renovación.</p>

<p>Sin embargo, los solicitantes nunca deben dar por sentado que los antecedentes penales no tienen consecuencias migratorias.</p>

<p>Es fundamental contar con la revisión de un abogado experto antes de presentar la solicitud.</p>

<h2>Restricción n.º 4: El fraude puede dañar permanentemente un caso de inmigración</h2>

<p>El fraude migratorio sigue siendo uno de los problemas más graves que investiga el USCIS.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>Matrimonios falsos</li>
<li>Identidades falsas</li>
<li>Números de Seguro Social fraudulentos</li>
<li>Documentos de inmigración falsificados</li>
<li>Historial laboral falso</li>
<li>Declaraciones falsas sustanciales</li>
</ul>

<p>Aunque se haya presentado un documento fraudulento años atrás, el USCIS puede revisar las solicitudes de inmigración anteriores durante el proceso de renovación.</p>

<p>La honestidad sigue siendo fundamental en cada etapa del proceso de inmigración.</p>

<h2>Restricción n.º 5: Los errores en la presentación de documentos pueden retrasar la aprobación</h2>

<p>Muchos retrasos en la tramitación de los documentos de autorización de empleo se deben a errores evitables.</p>

<p>Los errores comunes al presentar una solicitud incluyen:</p>

<ul>
<li>Categoría de elegibilidad incorrecta</li>
<li>Faltan firmas</li>
<li>Tarifa de presentación incorrecta</li>
<li>Formularios obsoletos</li>
<li>Fotografías faltantes</li>
<li>No responder a una solicitud de pruebas</li>
<li>Dirección postal incorrecta</li>
<li>No actualizar la dirección después de la mudanza</li>
</ul>

<p>Los errores simples pueden añadir meses a los tiempos de procesamiento.</p>

<p>La preparación profesional suele ayudar a reducir retrasos innecesarios.</p>

<h2>Por qué la renovación temprana se ha vuelto más importante que nunca</h2>

<p>Según las políticas de inmigración actuales, esperar hasta el último minuto puede tener graves consecuencias.</p>

<p>Porque:</p>

<ul>
<li>Muchos permisos de trabajo ahora duran solo 18 meses.</li>
<li>Las protecciones de extensión automática han cambiado.</li>
<li>Los tiempos de procesamiento del USCIS siguen siendo impredecibles.</li>
</ul>

<p>Los inmigrantes deben comenzar a prepararse mucho antes de que expire su Documento de Autorización de Empleo.</p>

<p>Cuanto antes un abogado pueda revisar su caso, más opciones tendrá para proteger su empleo sin interrupciones.</p>

<h2>Cambios propuestos a los permisos de trabajo para solicitantes de asilo: lo que todo solicitante de asilo debe saber</h2>

<p>Durante décadas, una de las protecciones más importantes para quienes buscan asilo en Estados Unidos ha sido la posibilidad de obtener un Documento de Autorización de Empleo (EAD) mientras su solicitud de asilo está pendiente. Dado que los casos de asilo suelen tardar años en resolverse, la autorización de empleo ha permitido a los solicitantes mantenerse a sí mismos y a sus familias mientras esperan la decisión del Servicio de Ciudadanía e Inmigración de Estados Unidos (USCIS) o del Tribunal de Inmigración.</p>

<p>Sin embargo, en febrero de 2026, el Departamento de Seguridad Nacional (DHS) publicó un reglamento propuesto que modificaría significativamente las normas que rigen los permisos de trabajo para solicitantes de asilo. De aprobarse, estos cambios representarían una de las reformas más importantes a la autorización de empleo para solicitantes de asilo en décadas.</p>

<p>Es importante comprender que, a la fecha de este artículo, estos cambios son <strong>propuestas, no ley definitiva</strong>. Actualmente no están en vigor. Sin embargo, dado que podrían afectar drásticamente a futuros solicitantes de asilo, es importante comprender qué se ha propuesto y cómo estos cambios podrían repercutir en su caso.</p>

<p>En el bufete de abogados de Todd Becraft seguimos de cerca cada novedad importante en materia de legislación migratoria. Nuestro objetivo es ayudar a nuestros clientes a prepararse para los cambios antes de que se produzcan, para que puedan tomar decisiones informadas sobre su futuro.</p>

<h3>¿Por qué propone el gobierno estos cambios?</h3>

<p>Según el Departamento de Seguridad Nacional, la norma propuesta tiene como objetivo:</p>

<ul>
<li>Desalentar las solicitudes de asilo fraudulentas presentadas principalmente para obtener un permiso de trabajo.</li>
<li>Reducir los incentivos para la migración ilegal.</li>
<li>Reforzar los controles de seguridad nacional.</li>
<li>Asegurar que los solicitantes de asilo sean sometidos a una investigación exhaustiva antes de recibir permiso para trabajar.</li>
<li>Alinear más estrechamente la autorización de empleo con la capacidad del gobierno para tramitar los casos de asilo.</li>
</ul>

<p>Quienes apoyan estas reformas argumentan que preservarían la integridad del sistema de asilo al garantizar que solo las personas con solicitudes de asilo legítimas reciban autorización de empleo.</p>

<p>Los críticos argumentan que las propuestas podrían obligar a los solicitantes de asilo legítimos —muchos de los cuales han huido de la persecución, la violencia o la opresión política— a permanecer desempleados durante largos períodos mientras sus solicitudes de asilo están pendientes.</p>

<p>Independientemente del punto de vista de cada uno, estos cambios propuestos podrían alterar significativamente la forma en que los solicitantes de asilo obtienen autorización de trabajo.</p>

<h2>Cambio propuesto n.º 1: El período de espera para solicitar asilo aumentaría de 150 días a 365 días</h2>

<p>Actualmente, los solicitantes de asilo generalmente cumplen los requisitos para presentar el Formulario I-765 después de que su solicitud de asilo haya estado pendiente por 150 días, siempre y cuando no hayan causado retrasos en el proceso de asilo.</p>

<p>El USCIS generalmente no puede aprobar el permiso de trabajo hasta que hayan transcurrido al menos 180 días.</p>

<p>La normativa propuesta alteraría drásticamente ese cronograma.</p>

<p>En lugar de esperar aproximadamente cinco meses antes de solicitar la autorización de empleo, los solicitantes de asilo tendrían que esperar 365 días naturales antes incluso de que pudieran presentar una solicitud inicial de Documento de Autorización de Empleo.</p>

<p>En la práctica, esto significa que un solicitante de asilo podría pasar un año entero sin que siquiera se le permita solicitar un permiso de trabajo.</p>

<h3>¿Por qué es importante esto?</h3>

<p>Para muchos solicitantes de asilo, la autorización de trabajo no es simplemente una comodidad, sino algo esencial para la supervivencia.</p>

<p>La mayoría de los solicitantes de asilo llegan a Estados Unidos con recursos económicos limitados tras huir de la persecución en sus países de origen.</p>

<p>Sin autorización legal para trabajar, pueden tener dificultades para:</p>

<ul>
<li>Pagar el alquiler.</li>
<li>Comprar comida.</li>
<li>Conseguir transporte.</li>
<li>Mantener a sus hijos.</li>
<li>Acceder a la atención médica.</li>
<li>Construir estabilidad financiera.</li>
</ul>

<p>Duplicar el período de espera podría generar dificultades importantes para miles de familias.</p>

<h3>Caso práctico: Una familia que busca seguridad</h3>

<p>Consideremos el siguiente ejemplo.</p>

<p>Daniela y sus dos hijos huyen de la persecución política en Venezuela.</p>

<p>Tras llegar a Estados Unidos, presenta de inmediato una solicitud de asilo completa.</p>

<p>Según las normas vigentes, Daniela generalmente reúne los requisitos para solicitar la autorización de trabajo una vez cumplido el período de espera establecido.</p>

<p>Sin embargo, según la normativa propuesta, tendría que esperar un año entero antes de presentar el formulario I-765.</p>

<p>Incluso después de presentar la solicitud, el USCIS aún necesitaría tiempo para procesarla.</p>

<p>Sin autorización para trabajar, Daniela podría tener dificultades para mantener a su familia a pesar de haber cumplido con todos los requisitos legales.</p>

<h2>Cambio propuesto n.º 2: El USCIS podría suspender las solicitudes iniciales de permisos de trabajo para solicitantes de asilo</h2>

<p>Quizás una de las propuestas menos comprendidas involucra lo que muchos abogados de inmigración han llamado la "congelación de los permisos de trabajo para solicitantes de asilo".</p>

<p>Según la propuesta, el USCIS podría dejar de aceptar temporalmente solicitudes de Documento de Autorización de Empleo de solicitantes de asilo en determinadas circunstancias.</p>

<p>Específicamente, si la agencia determina que el tiempo promedio de procesamiento para los casos de asilo afirmativo excede 180 días durante un período de revisión designado, el USCIS tendría autoridad para suspender la aceptación de nuevas solicitudes de permisos de trabajo por asilo.</p>

<p>La suspensión se mantendría vigente hasta que mejoren los tiempos de procesamiento.</p>

<p>Esta propuesta ha generado considerable preocupación porque los solicitantes de asilo no tendrían ningún control sobre los tiempos de tramitación del gobierno.</p>

<h3>¿Qué podría significar esto?</h3>

<p>Imagine que un solicitante de asilo espera pacientemente los 365 días propuestos antes de poder solicitar un permiso de trabajo.</p>

<p>El día en que finaliza el período de espera, el USCIS anuncia que ha suspendido temporalmente la aceptación de nuevas solicitudes de permisos de trabajo para solicitantes de asilo, debido a que los tiempos de procesamiento de las solicitudes de asilo siguen estando por encima del umbral requerido.</p>

<p>El solicitante habría cumplido todo el período de espera, pero aun así no podría presentar el Formulario I-765.</p>

<p>Esto significa que algunos solicitantes de asilo podrían tener que esperar bastante más de un año antes incluso de comenzar el proceso para obtener el Documento de Autorización de Empleo.</p>

<h3>Caso práctico: Esperar más de un año</h3>

<p>Alejandro presenta una solicitud de asilo completa inmediatamente después de llegar a Estados Unidos.</p>

<p>Sigue al pie de la letra todas las instrucciones del USCIS.</p>

<p>Asiste a todas las citas.</p>

<p>No retrasa su caso.</p>

<p>Tras esperar 365 días, prepara su solicitud de Documento de Autorización de Empleo.</p>

<p>Sin embargo, el USCIS ha suspendido temporalmente la aceptación de las solicitudes iniciales de permisos de trabajo para solicitantes de asilo debido a los tiempos de procesamiento de las solicitudes de asilo.</p>

<p>Aunque Alejandro cumplió con todos los requisitos legales, aún no puede presentar el Formulario I-765.</p>

<p>Su capacidad para trabajar ahora depende de factores que están completamente fuera de su control.</p>

<h2>Cambio propuesto n.º 3: La entrada ilegal podría afectar la elegibilidad para un permiso de trabajo</h2>

<p>Otra propuesta muy debatida se refiere a la forma en que un solicitante de asilo ingresó a los Estados Unidos.</p>

<p>Según la normativa propuesta, ciertas personas que ingresaron al país entre los puertos de entrada oficiales podrían quedar inhabilitadas para obtener un permiso de trabajo basado en el asilo.</p>

<p>Sin embargo, la propuesta contiene importantes excepciones.</p>

<p>No es exacto decir que a toda persona que cruzara la frontera ilegalmente se le denegaría automáticamente un permiso de trabajo.</p>

<p>En cambio, la propuesta generalmente establece que ciertos solicitantes pueden seguir siendo elegibles si:</p>

<ul>
<li>Se presentaron ante las autoridades de inmigración en aproximadamente 48 horas después de entrar.</li>
<li>Expresaron temor a la persecución.</li>
<li>Manifestaron su intención de solicitar asilo.</li>
<li>Justificaron el ingreso fuera de un puerto de entrada oficial.</li>
<li>Cumplen los requisitos para ciertas excepciones, incluidas las protecciones para algunos menores no acompañados.</li>
</ul>

<p>Cada caso dependería de sus circunstancias particulares.</p>

<h3>¿Por qué es importante la regla de las 48 horas?</h3>

<p>Muchos solicitantes de asilo huyen de situaciones peligrosas con poco tiempo para planificar su viaje.</p>

<p>Algunos ingresan a Estados Unidos por zonas remotas porque los puertos de entrada oficiales son inaccesibles o porque huyen de amenazas inmediatas.</p>

<p>Según la normativa propuesta, las personas que se presenten puntualmente ante las autoridades de inmigración y expresen su intención de solicitar asilo aún podrían acogerse a una de las excepciones propuestas.</p>

<p>Sin embargo, los solicitantes que esperen varios días, o incluso más, para ponerse en contacto con las autoridades de inmigración podrían enfrentarse a obstáculos adicionales al solicitar la autorización de empleo.</p>

<h3>Caso práctico: Presentarse de inmediato ante las autoridades</h3>

<p>José escapa de la violencia de las pandillas en Centroamérica.</p>

<p>Tras entrar en Estados Unidos, se acerca inmediatamente a los agentes de la Patrulla Fronteriza y les explica que teme regresar a su país.</p>

<p>Solicita asilo dentro del plazo establecido.</p>

<p>Si la normativa propuesta se aprueba definitivamente, José podría acogerse a alguna de las excepciones que preservan la elegibilidad para la autorización de empleo.</p>

<p>Consideremos ahora el caso de otra persona que entra en Estados Unidos pero espera varias semanas antes de ponerse en contacto con las autoridades de inmigración.</p>

<p>Dicho solicitante podría enfrentar dificultades considerablemente mayores para obtener un Documento de Autorización de Empleo si la propuesta se convierte en ley.</p>

<h2>Restricciones adicionales propuestas</h2>

<p>El reglamento propuesto contiene otras disposiciones que podrían afectar a los solicitantes de asilo que buscan autorización de trabajo.</p>

<p>Entre ellas se encuentran:</p>

<h3>Verificación de antecedentes ampliada</h3>

<p>El Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) continuará reforzando la verificación de identidad y los controles de seguridad antes de emitir los Documentos de Autorización de Empleo.</p>

<p>Los solicitantes pueden estar sujetos a una revisión adicional de:</p>

<ul>
<li>Biometría</li>
<li>Antecedentes penales</li>
<li>Historial migratorio</li>
<li>Información de seguridad nacional</li>
<li>Verificación de identidad</li>
</ul>

<h3>Mayores requisitos biométricos</h3>

<p>La propuesta requeriría la recopilación de datos biométricos adicionales para ciertas solicitudes de Documentos de Autorización de Empleo.</p>

<p>No presentarse a las citas programadas para la toma de datos biométricos podría resultar en la denegación de la solicitud de permiso de trabajo.</p>

<h3>Restricciones por antecedentes penales</h3>

<p>La normativa propuesta ampliaría las circunstancias en las que una conducta delictiva puede afectar a la elegibilidad para obtener un Documento de Autorización de Empleo.</p>

<p>Los solicitantes con antecedentes penales o condenas deben consultar siempre con un abogado de inmigración con experiencia antes de presentar su solicitud.</p>

<h3>Plazo de un año para solicitar asilo</h3>

<p>Ciertos solicitantes que no presenten su solicitud de asilo dentro del plazo de un año desde su llegada a Estados Unidos podrían enfrentarse a restricciones adicionales en virtud de las normas propuestas para el Documento de Autorización de Empleo.</p>

<p>Si bien la legislación vigente en materia de asilo ya contempla un plazo de presentación de solicitudes de un año, con ciertas excepciones, la propuesta haría mayor hincapié en la presentación oportuna de las solicitudes de asilo al evaluar la elegibilidad para la autorización de empleo.</p>

<h3>Discreción del USCIS</h3>

<p>Otra propuesta importante reconocería expresamente que la aprobación de un documento de autorización de empleo basado en el asilo sigue siendo discrecional.</p>

<p>Esto significa que el USCIS evaluaría cada caso individualmente en lugar de aprobar automáticamente a todos los solicitantes que cumplan con el período de espera mínimo.</p>

<h2>¿Qué deben hacer ahora mismo los solicitantes de asilo?</h2>

<p>Afortunadamente, estas propuestas no son ley definitiva.</p>

<p>Los solicitantes deben evitar tomar decisiones de inmigración basándose únicamente en las regulaciones propuestas.</p>

<p>En cambio, los solicitantes de asilo deberían centrarse en:</p>

<ul>
<li>Presentar solicitudes de asilo completas.</li>
<li>Conservar copias de todos los documentos de inmigración.</li>
<li>Mantener registros de entrada a los Estados Unidos.</li>
<li>Asistir a todas las entrevistas y audiencias.</li>
<li>Evitar retrasos innecesarios.</li>
<li>Consultar con un abogado de inmigración con experiencia para conocer su elegibilidad actual.</li>
</ul>

<p>La legislación migratoria cambia con frecuencia.</p>

<p>La orientación profesional garantiza que los solicitantes comprendan las normas que se aplican actualmente, y no solo las que se debaten en propuestas futuras.</p>

<h2>¿Por qué la representación legal se ha vuelto más importante que nunca?</h2>

<p>Las normas de autorización de empleo son cada vez más complejas.</p>

<p>Un abogado de inmigración con experiencia puede ayudar a determinar:</p>

<ul>
<li>Si actualmente reúne los requisitos para obtener la autorización de trabajo.</li>
<li>Si los cambios propuestos afectan a su caso.</li>
<li>Qué categoría de documento de autorización de empleo corresponde.</li>
<li>Cuándo puede presentar legalmente el Formulario I-765.</li>
<li>Si los retrasos afectan su elegibilidad.</li>
<li>Si los antecedentes penales generan preocupaciones en materia de inmigración.</li>
<li>Si usted reúne los requisitos para alguna excepción.</li>
</ul>

<p>Intentar adaptarse a las cambiantes normativas de inmigración sin asesoramiento legal profesional puede ocasionar retrasos innecesarios o errores costosos.</p>

<h2>Mirando hacia el futuro</h2>

<p>Independientemente de si estas restricciones propuestas para el Documento de Autorización de Empleo para solicitantes de asilo se convierten en definitivas, demuestran una realidad importante:</p>

<p>La legislación migratoria continúa evolucionando.</p>

<p>Los solicitantes que se basan en información desactualizada de amigos, redes sociales o artículos antiguos de internet pueden, sin saberlo, seguir normas que ya no son válidas.</p>

<p>Mantenerse informado y trabajar con un abogado de inmigración con experiencia es la mejor manera de proteger sus derechos y su futuro.</p>

<h2>Preguntas frecuentes sobre permisos de trabajo</h2>

<p>A lo largo de esta guía, hemos analizado el propósito de un Documento de Autorización de Empleo (EAD), quiénes cumplen los requisitos para obtener un permiso de trabajo, los importantes cambios en las políticas del USCIS que redujeron la validez de muchos EAD de cinco años a dieciocho meses, y las restricciones propuestas que afectan a los solicitantes de asilo. Una conclusión es clara: obtener y mantener un permiso de trabajo válido es cada vez más complejo.</p>

<p>Para muchos inmigrantes, un Documento de Autorización de Empleo representa mucho más que un simple permiso para trabajar. Es la posibilidad de mantener a una familia, lograr estabilidad financiera, desarrollar una carrera profesional y continuar con el proceso para obtener un estatus migratorio legal sin interrupciones innecesarias.</p>

<p>Lamentablemente, cada año miles de solicitantes sufren retrasos, denegaciones e interrupciones en su empleo que podrían haberse evitado, debido a que no comprenden las normas o se basan en información obsoleta.</p>

<h3>¿Puedo empezar a trabajar en cuanto presente el formulario I-765?</h3>

<p>No.</p>

<p>Una de las ideas erróneas más comunes es que simplemente presentar el Formulario I-765, Solicitud de autorización de empleo, permite que un inmigrante comience a trabajar de inmediato.</p>

<p>En la mayoría de los casos, esto es incorrecto.</p>

<p>A menos que otra ley autorice el empleo de forma independiente, por lo general debe esperar a que el USCIS apruebe su Documento de Autorización de Empleo antes de aceptar un trabajo.</p>

<p>Recibir una notificación de recibo del USCIS generalmente no autoriza el empleo.</p>

<h3>¿Tener un permiso de trabajo significa que tengo un estatus migratorio legal?</h3>

<p>No necesariamente.</p>

<p>Un documento de autorización de empleo autoriza el empleo, pero no otorga automáticamente un estatus migratorio legal.</p>

<p>Por ejemplo:</p>

<ul>
<li>Un solicitante de asilo puede tener un permiso de trabajo válido mientras su solicitud de asilo esté pendiente.</li>
<li>Una persona con una solicitud de ajuste de estatus pendiente puede poseer un Documento de Autorización de Empleo aunque el USCIS aún no haya aprobado su Tarjeta Verde.</li>
<li>Algunos solicitantes por razones humanitarias pueden recibir autorización de empleo mientras sus casos de inmigración subyacentes permanecen sin resolverse.</li>
</ul>

<p>Su estatus migratorio depende del beneficio migratorio subyacente, no simplemente de la existencia de un Documento de Autorización de Empleo.</p>

<h3>¿Pueden revocarme el permiso de trabajo?</h3>

<p>Sí.</p>

<p>El USCIS puede cancelar la autorización de empleo si:</p>

<ul>
<li>Se deniega la prestación migratoria subyacente.</li>
<li>Ya no existe la elegibilidad.</li>
<li>Se descubre fraude o tergiversación sustancial.</li>
<li>Cierta conducta delictiva afecta a la elegibilidad.</li>
<li>Las regulaciones federales exigen la cancelación.</li>
</ul>

<p>Dado que cada categoría de inmigración se rige por normas diferentes, los solicitantes deben consultar inmediatamente con un abogado de inmigración si reciben notificaciones que cuestionen su elegibilidad.</p>

<h3>¿Me protege un permiso de trabajo de la deportación?</h3>

<p>No.</p>

<p>Otra idea errónea muy extendida es que poseer un documento de autorización de empleo válido impide la expulsión de los Estados Unidos.</p>

<p>No lo hace.</p>

<p>Un permiso de trabajo autoriza el empleo.</p>

<p>No proporciona inmunidad frente a los procedimientos de expulsión si la persona se convierte en objeto de expulsión según la ley de inmigración.</p>

<p>Por ejemplo, un solicitante de asilo con un documento de autorización de empleo válido aún puede ser sometido a un proceso de expulsión si se deniega la solicitud de asilo subyacente o si surgen otros problemas legales.</p>

<h3>¿Puedo viajar fuera de Estados Unidos solo con un permiso de trabajo?</h3>

<p>En general, no.</p>

<p>Un permiso de trabajo no es un documento de viaje.</p>

<p>Muchos inmigrantes creen erróneamente que un documento de autorización de empleo les permite viajar internacionalmente.</p>

<p>Para muchos solicitantes con casos de ajuste de estatus pendientes, abandonar los Estados Unidos sin libertad condicional anticipada (Advance Parole) podría poner en peligro la solicitud de inmigración.</p>

<p>Antes de hacer cualquier plan de viaje internacional, consulte con un abogado de inmigración con experiencia para determinar si se requiere una autorización de viaje adicional.</p>

<h3>¿Qué sucede si mi permiso de trabajo vence?</h3>

<p>Si su documento de autorización de empleo caduca y usted no reúne los requisitos para una prórroga automática u otra base independiente para la autorización de empleo, por lo general ya no podrá seguir trabajando legalmente.</p>

<p>Los empleadores tienen la obligación legal, según la ley federal, de verificar la autorización de empleo vigente.</p>

<p>Esta es una de las razones por las que la planificación anticipada de la renovación es tan importante.</p>

<h2>Los errores más comunes que cometen los solicitantes</h2>

<p>Si bien los tiempos de procesamiento del USCIS están fuera del control del solicitante, muchos retrasos se deben a errores evitables.</p>

<h3>Esperar demasiado tiempo para renovar</h3>

<p>Uno de los errores más comunes es esperar hasta las últimas semanas antes de que caduque.</p>

<p>Debido a que muchos documentos de autorización de empleo ahora siguen siendo válidos solo por 18 meses, el ciclo de renovación llega mucho antes de lo que muchos inmigrantes esperan.</p>

<p>Los tiempos de procesamiento del USCIS varían.</p>

<p>Esperar hasta el último minuto aumenta la probabilidad de una interrupción del empleo.</p>

<h3>Presentar la solicitud bajo la categoría de elegibilidad incorrecta</h3>

<p>Cada categoría de Documento de Autorización de Empleo tiene requisitos de elegibilidad específicos.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>C08 – Solicitantes de asilo pendientes</li>
<li>C09 – Ajuste de estatus pendiente</li>
<li>A03 – Refugiados</li>
<li>A05 – Asilados</li>
</ul>

<p>Seleccionar la categoría de elegibilidad incorrecta puede ocasionar retrasos, solicitudes de pruebas adicionales (RFE) o denegaciones.</p>

<h3>No responder a las solicitudes del USCIS</h3>

<p>El USCIS emite con frecuencia solicitudes de pruebas (RFE) cuando se necesita documentación adicional.</p>

<p>Ignorar una solicitud de información adicional (RFE) o responder después de la fecha límite puede resultar en la denegación de la solicitud.</p>

<p>Lea siempre atentamente las notificaciones del USCIS y responda dentro del plazo establecido.</p>

<h3>Mudarse sin actualizar la información del USCIS</h3>

<p>La ley federal generalmente exige que muchos no ciudadanos notifiquen al USCIS después de cambiar su domicilio.</p>

<p>Si no actualiza su dirección, es posible que se pierda:</p>

<ul>
<li>Citas para datos biométricos</li>
<li>Avisos de entrevistas</li>
<li>Solicitudes de pruebas</li>
<li>Avisos de aprobación</li>
<li>Documentos de autorización de empleo enviados por correo por el USCIS</li>
</ul>

<p>La pérdida de correspondencia importante puede retrasar significativamente su caso.</p>

<h3>Uso de formularios incorrectos</h3>

<p>El USCIS actualiza periódicamente los formularios de inmigración.</p>

<p>Presentar una versión desactualizada del Formulario I-765 puede resultar en su rechazo.</p>

<p>Verifique siempre que esté utilizando la edición vigente aceptada por el USCIS.</p>

<h3>No presentarse a las citas para la toma de datos biométricos</h3>

<p>Muchos beneficios migratorios requieren datos biométricos.</p>

<p>No presentarse a una cita programada sin obtener una reprogramación adecuada puede conllevar la denegación.</p>

<p>Asista siempre a todas sus citas, a menos que el USCIS apruebe oficialmente una solicitud de reprogramación.</p>

<h2>Responsabilidades del empleador según el formulario I-9</h2>

<p>La autorización de empleo afecta tanto a los empleadores como a los empleados.</p>

<p>La ley federal exige que los empleadores completen el Formulario I-9, Verificación de Elegibilidad de Empleo, por cada empleado contratado en los Estados Unidos.</p>

<p>Los empleadores deben verificar ambos:</p>

<ul>
<li>Identidad</li>
<li>Autorización para trabajar</li>
</ul>

<p>Sin embargo, los empleadores también tienen importantes responsabilidades legales.</p>

<p>No pueden:</p>

<ul>
<li>Exigir documentos de inmigración innecesarios.</li>
<li>Discriminar por motivos de origen nacional.</li>
<li>Rechazar documentación válida.</li>
<li>Tratar a los inmigrantes de manera diferente debido a su estatus de ciudadanía si la ley federal prohíbe dicha discriminación.</li>
</ul>

<p>Los empleadores también deben comprender que los cambios en las extensiones automáticas del Documento de Autorización de Empleo pueden afectar la forma en que se revisa la documentación del Formulario I-9.</p>

<p>En caso de duda, tanto empleadores como empleados deben buscar asesoramiento legal.</p>

<h2>Consejos prácticos para proteger su autorización de empleo</h2>

<p>La preparación sigue siendo una de las mejores maneras de evitar problemas migratorios innecesarios.</p>

<p>Considere las siguientes recomendaciones:</p>

<h3>Controle su fecha de vencimiento</h3>

<p>No se fíe de la memoria.</p>

<p>Establezca recordatorios varios meses antes de que caduque su Documento de Autorización de Empleo.</p>

<h3>Conserve copias de todos los documentos presentados</h3>

<p>Mantenga copias organizadas de:</p>

<ul>
<li>Formulario I-765</li>
<li>Avisos de recepción del USCIS</li>
<li>Avisos de aprobación</li>
<li>Documentos de autorización de empleo</li>
<li>Peticiones de inmigración</li>
<li>Pruebas que lo respaldan</li>
</ul>

<p>Un buen registro de datos suele simplificar las renovaciones futuras.</p>

<h3>Guarde todos los avisos del USCIS</h3>

<p>Incluso la correspondencia rutinaria puede adquirir importancia más adelante.</p>

<p>Conserve copias tanto en papel como electrónicas siempre que sea posible.</p>

<h3>Responda con prontitud</h3>

<p>Nunca ignore el correo del USCIS.</p>

<p>Muchos plazos de inmigración no se pueden prorrogar.</p>

<h3>Notifique al USCIS sobre los cambios de domicilio</h3>

<p>Mudarse sin actualizar su información en el USCIS puede retrasar o poner en peligro su caso de inmigración.</p>

<p>Actualice siempre su dirección puntualmente si es necesario.</p>

<h3>Busque asesoramiento legal antes de que surjan problemas</h3>

<p>Muchos problemas de inmigración se resuelven con mucha más facilidad cuando se abordan a tiempo.</p>

<p>Esperar hasta que expire la autorización de empleo, o después de que el USCIS emita una denegación, puede limitar las opciones disponibles.</p>

<h3>Caso práctico: La orientación legal temprana previene una crisis</h3>

<p>María recibió un Documento de Autorización de Empleo a través de su solicitud pendiente de ajuste de estatus.</p>

<p>Ella suponía que el proceso de renovación sería idéntico al de su solicitud anterior.</p>

<p>Afortunadamente, seis meses antes de que expirara, consultó con un abogado de inmigración.</p>

<p>Durante la consulta, su abogado descubrió:</p>

<ul>
<li>El USCIS había modificado los períodos de validez de los Documentos de Autorización de Empleo.</li>
<li>Las protecciones de renovación automática habían cambiado.</li>
<li>Contar con pruebas adicionales reforzaría la solicitud de renovación.</li>
</ul>

<p>Como María se preparó con antelación, presentó su solicitud de renovación tan pronto como lo permitieron las normas.</p>

<p>Aunque el proceso de tramitación del USCIS siguió siendo largo, ella evitó muchos de los problemas que afectan a los solicitantes que esperan hasta las últimas semanas antes del vencimiento.</p>

<h2>Las leyes de inmigración siguen cambiando</h2>

<p>Uno de los mayores desafíos a los que se enfrentan los inmigrantes hoy en día es el rápido ritmo de los cambios en las políticas de inmigración.</p>

<p>Es posible que las normas de autorización de empleo que existían hace tan solo dos o tres años ya no se apliquen.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>Reducción de los períodos de validez del documento de autorización de empleo.</li>
<li>Nuevos requisitos de renovación automática.</li>
<li>Restricciones propuestas para el documento de autorización de empleo para solicitantes de asilo.</li>
<li>Procedimientos de presentación de documentos actualizados.</li>
<li>Formularios revisados del USCIS.</li>
<li>Nuevos requisitos de verificación de antecedentes.</li>
</ul>

<p>Por eso, confiar en artículos de internet o publicaciones en redes sociales desactualizados puede ser arriesgado.</p>

<p>La legislación migratoria está en constante evolución.</p>

<h2>Por qué es importante contar con representación legal experimentada</h2>

<p>Cada caso de inmigración es único.</p>

<p>Dos solicitantes con historiales migratorios similares pueden recibir resultados diferentes dependiendo de:</p>

<ul>
<li>Categoría de inmigración</li>
<li>Antecedentes penales</li>
<li>Infracciones migratorias previas</li>
<li>Fechas de presentación</li>
<li>Cambios en el procesamiento del USCIS</li>
<li>Decisiones judiciales</li>
<li>Regulaciones federales</li>
</ul>

<p>Un abogado de inmigración con experiencia puede evaluar sus circunstancias y desarrollar una estrategia adaptada a su caso.</p>

<p>El asesoramiento legal profesional puede ayudar a:</p>

<ul>
<li>Determinar la elegibilidad para la autorización de empleo.</li>
<li>Identificar la categoría correcta del Formulario I-765.</li>
<li>Evitar errores al presentar la documentación.</li>
<li>Responder a las solicitudes de pruebas.</li>
<li>Abordar problemas migratorios previos.</li>
<li>Proteger las solicitudes de Green Card pendientes.</li>
<li>Comprender las normas de autorización de empleo relacionadas con el asilo.</li>
<li>Preparar las solicitudes de renovación a tiempo.</li>
<li>Minimizar las interrupciones en el empleo.</li>
</ul>

<h2>Cómo puede ayudarle el bufete de abogados de Todd Becraft</h2>

<p>En el bufete de abogados de Todd Becraft comprendemos la importancia que tiene la autorización de empleo para las familias inmigrantes.</p>

<p>Ya sea que esté solicitando su primer permiso de trabajo, renovando un Documento de Autorización de Empleo existente, ajustando su estatus, solicitando asilo o enfrentando cambios en las políticas de inmigración, nuestro equipo legal está comprometido a proteger sus derechos y ayudarlo a navegar por cada etapa del proceso de inmigración.</p>

<p>Ofrecemos asesoramiento legal personalizado a clientes en todo el sur de California y más allá, evaluando cuidadosamente cada caso para determinar la mejor estrategia según la legislación migratoria vigente.</p>

<h2>Reflexiones finales</h2>

<p>Los recientes cambios en las políticas del USCIS han modificado radicalmente la forma en que muchos inmigrantes obtienen y renuevan sus Documentos de Autorización de Empleo. La reducción de los períodos de validez de cinco años a 18 meses para muchas categorías, los cambios en las protecciones de renovación automática y las restricciones propuestas que afectan a los solicitantes de asilo demuestran que las normas de autorización de empleo siguen evolucionando.</p>

<p>La lección más importante es simple: <strong>no espere hasta que su permiso de trabajo esté a punto de expirar</strong>.</p>

<p>Una planificación anticipada, la presentación precisa de documentos y el asesoramiento legal de expertos pueden ayudarle a proteger su capacidad para trabajar legalmente, evitando retrasos, denegaciones e interrupciones innecesarias en el empleo.</p>

<p>Si tiene preguntas sobre cómo obtener, renovar o reemplazar un permiso de trabajo, o si le preocupa cómo los recientes cambios en la política de inmigración pueden afectar su caso, el bufete de abogados de Todd Becraft está aquí para ayudar.</p>

<p>Nuestro experimentado equipo de inmigración puede evaluar su elegibilidad, explicarle sus opciones y guiarle en cada paso del proceso.</p>

<p>Llame hoy mismo al bufete de abogados de Todd Becraft al (213) 388-1821 para programar una consulta confidencial y proteger su derecho a trabajar legalmente en los Estados Unidos.</p>
`},{slug:"hijos-padres-indocumentados-ciudadanos-derecho-nacimiento",title:"Los hijos de padres indocumentados son ciudadanos estadounidenses por derecho de nacimiento: Entienda sus derechos y el futuro de su familia.",excerpt:"Para muchas familias inmigrantes, una de las mayores ideas erróneas en torno a la ley de inmigración estadounidense es si un niño nacido en Estados Unidos se convierte automáticamente en ciudadano estadounidense si sus padres no tienen documentación en regla.",date:"19 de julio de 2026",author:"Todd Becraft",content:`
<p>Para muchas familias inmigrantes, una de las mayores ideas erróneas en torno a la ley de inmigración estadounidense es si un niño nacido en Estados Unidos se convierte automáticamente en ciudadano estadounidense si sus padres no tienen documentación en regla.</p>

<p>La respuesta, según la legislación actual de Estados Unidos, es que un niño nacido en los Estados Unidos es generalmente un ciudadano estadounidense por nacimiento, independientemente del estatus migratorio de los padres. Esta protección constitucional existe desde hace más de 150 años y ha ayudado a millones de familias a construir sus vidas en Estados Unidos.</p>

<p>Sin embargo, aunque un niño nacido en Estados Unidos recibe la ciudadanía automáticamente, esa ciudadanía no proporciona de inmediato estatus migratorio legal a los padres indocumentados.Comprender la diferencia es fundamental para tomar decisiones informadas sobre el futuro de su familia.</p>

<p>En el bufete de abogados de Todd Becraft ayudamos a las familias inmigrantes a comprender sus derechos, explorar las opciones de inmigración disponibles y crear estrategias legales que protejan tanto a los padres como a los hijos.</p>

<h2>¿Qué es la ciudadanía por derecho de nacimiento?</h2>

<p>La ciudadanía por derecho de nacimiento es el principio legal que otorga la ciudadanía estadounidense a casi todos los niños nacidos en suelo estadounidense.</p>

<p>Este derecho proviene de la Decimocuarta Enmienda de la Constitución de los Estados Unidos, adoptada en 1868, que establece que:</p>

<p>"Todas las personas nacidas o naturalizadas en los Estados Unidos, y sujetas a su jurisdicción, son ciudadanos de los Estados Unidos."</p>

<p>En términos prácticos, esto significa que si un bebé nace en California, Texas, Nueva York, Florida o cualquier otro estado o territorio de los Estados Unidos, ese niño generalmente es reconocido como ciudadano estadounidense desde su nacimiento.</p>

<p>La situación migratoria de los padres no determina la ciudadanía del niño.</p>

<h2>¿Importa si los padres entraron sin inspección?</h2>

<p>No.</p>

<p>Si los padres:</p>

<ul>
<li>Ingresó sin inspección.</li>
<li>Me quedé más tiempo del permitido con mi visa.</li>
<li>Poseer Estatus de Protección Temporal (TPS)</li>
<li>Tener acción diferida</li>
<li>Están esperando asilo</li>
<li>Tengo casos de inmigración pendientes</li>
<li>No tengo estatus migratorio legal.</li>
</ul>

<p>Por lo general, el niño nacido en Estados Unidos sigue siendo ciudadano estadounidense al nacer.</p>

<p>Esta protección constitucional se aplica de forma general a casi todos los niños nacidos dentro de la jurisdicción de los Estados Unidos.</p>

<h2>¿Qué derechos tiene un niño ciudadano estadounidense?</h2>

<p>Un niño que nace en Estados Unidos goza de las mismas protecciones constitucionales y derechos legales que cualquier otro ciudadano estadounidense.</p>

<p>Estos derechos incluyen:</p>

<ul>
<li>Obtener un certificado de nacimiento estadounidense</li>
<li>Cómo solicitar un pasaporte estadounidense</li>
<li>Cómo obtener un número de Seguro Social</li>
<li>Vivir y trabajar en los Estados Unidos</li>
<li>Votar una vez que alcancen la edad legal para votar.</li>
<li>Acceso a la educación pública</li>
</ul>

<p>Requisitos para acceder a determinados beneficios gubernamentales, según las necesidades del programa.</p>

<p>La posibilidad de patrocinar a ciertos familiares que cumplan los requisitos en el futuro.</p>

<p>Estos derechos pertenecen al niño, no automáticamente a los padres.</p>

<h2>Un malentendido común</h2>

<p>Uno de los mitos más comunes en la legislación migratoria es:</p>

<ul>
<li>"Si tengo un bebé ciudadano estadounidense, automáticamente obtengo estatus legal."</li>
<li>Lamentablemente, eso no es cierto.</li>
<li>Tener un hijo ciudadano estadounidense no automáticamente:</li>
<li>Detener los procedimientos de deportación</li>
<li>Proporcionar una tarjeta verde</li>
<li>Otorgar estatus legal</li>
<li>Prevenir la aplicación de la ley por parte de ICE</li>
<li>Proporcionar autorización de trabajo</li>
<li>Conduce a la ciudadanía automática para los padres.</li>
<li>Cada caso de inmigración es único y depende de múltiples factores.</li>
</ul>

<h2>¿Cuándo puede un niño ciudadano estadounidense solicitar la reunificación familiar para sus padres?</h2>

<p>Un niño ciudadano estadounidense puede solicitar la restitución de un padre solo después de cumplir 21 años.</p>

<p>Incluso en ese caso, la elegibilidad depende de muchas consideraciones legales.</p>

<p>Los padres aún pueden enfrentar desafíos relacionados con:</p>

<ul>
<li>Presencia ilegal</li>
<li>Órdenes de remoción previas</li>
<li>Violaciones de inmigración</li>
<li>Entradas ilegales</li>
<li>Antecedentes penales</li>
<li>Obstáculos para la admisibilidad</li>
</ul>

<p>En muchas situaciones, aún pueden ser necesarias exenciones adicionales o estrategias legales.</p>

<p>Por eso es tan importante consultar con un abogado de inmigración con experiencia.</p>

<h2>Caso práctico: María y José</h2>

<p>María y José entraron a Estados Unidos sin pasar por ningún control hace más de quince años.</p>

<p>Se establecieron en Los Ángeles, trabajaron duro, pagaron impuestos utilizando números ITIN y criaron tres hijos.</p>

<p>Su hija menor, Rosa, nació en California.</p>

<p>Como Rosa nació en Estados Unidos, se convirtió en ciudadana estadounidense inmediatamente después de su nacimiento.</p>

<p>Sin embargo, María y José permanecieron indocumentados.</p>

<p>Durante años, creyeron que tener un hijo estadounidense los protegía automáticamente de la deportación.</p>

<p>Lamentablemente, esa creencia era errónea.</p>

<p>Cuando finalmente consultaron a un abogado de inmigración, se enteraron de que aún necesitaban explorar opciones legales como:</p>

<ul>
<li>Inmigración basada en lazos familiares</li>
<li>Exenciones</li>
<li>Estrategias de ajuste</li>
<li>Ayuda humanitaria</li>
<li>Otras formas disponibles de alivio migratorio</li>
</ul>

<p>Al obtener el asesoramiento legal adecuado, pudieron crear un plan a largo plazo en lugar de basarse en información errónea.</p>

<h2>Caso práctico: Carlos</h2>

<p>Carlos entró en Estados Unidos con un visado de turista, pero permaneció en el país después de que este expirara.</p>

<p>Años después, su hijo nació en Texas.</p>

<p>Carlos asumió que, dado que su hijo era ciudadano estadounidense, podía solicitar la residencia permanente de inmediato.</p>

<p>Tras hablar con un abogado de inmigración, descubrió que su historial migratorio requería un análisis legal minucioso antes de presentar cualquier solicitud.</p>

<p>En lugar de presentar documentación que pudiera haber perjudicado su caso, elaboró un plan estratégico de inmigración adaptado a sus circunstancias.</p>

<p>Un buen asesoramiento legal le ahorró mucho tiempo, dinero y estrés.</p>

<h2>¿Por qué son importantes los certificados de nacimiento?</h2>

<p>El certificado de nacimiento estadounidense de un niño sirve como prueba oficial de su nacimiento en los Estados Unidos.</p>

<p>Los padres deben conservar varias copias certificadas, ya que a menudo son necesarias al solicitar:</p>

<ul>
<li>Pasaportes estadounidenses</li>
<li>matriculación escolar</li>
<li>prestaciones de la Seguridad Social</li>
<li>identificación gubernamental</li>
<li>Peticiones de inmigración en el futuro</li>
<li>Proteger estos documentos importantes es fundamental.</li>
</ul>

<h2>¿Pueden las autoridades de inmigración deportar a los padres de niños ciudadanos estadounidenses?</h2>

<p>Sí.</p>

<p>Si bien las autoridades de inmigración suelen tener en cuenta los lazos familiares, tener un hijo ciudadano estadounidense no impide automáticamente la expulsión de Estados Unidos.</p>

<p>Los tribunales de inmigración evalúan muchos factores diferentes.</p>

<p>Cada caso depende de:</p>

<ul>
<li>Historia de la inmigración</li>
<li>Antecedentes penales</li>
<li>Factores humanitarios</li>
<li>Solicitudes de inmigración existentes</li>
<li>Relaciones familiares</li>
<li>Formas de alivio disponibles</li>
<li>Por eso, la representación legal individualizada es fundamental.</li>
</ul>

<h2>¿Qué ocurre si los padres son detenidos?</h2>

<p>Si los padres indocumentados son detenidos, sus hijos, que son ciudadanos estadounidenses, conservan la ciudadanía estadounidense.</p>

<p>Sin embargo, los padres deben tener un plan de preparación para emergencias que incluya:</p>

<ul>
<li>Cuidadores de confianza</li>
<li>Información médica</li>
<li>Registros escolares</li>
<li>certificados de nacimiento</li>
<li>Pasaportes</li>
<li>Documentos financieros importantes</li>
<li>Información de contacto en caso de emergencia</li>
</ul>

<p>Planificar con antelación puede ayudar a reducir la incertidumbre en situaciones difíciles.</p>

<h2>¿Puede un niño ciudadano estadounidense perder su ciudadanía?</h2>

<p>En general, no.</p>

<p>La ciudadanía por derecho de nacimiento es permanente, a menos que se haya obtenido mediante fraude o se haya renunciado a ella voluntariamente en circunstancias legales muy limitadas.</p>

<p>Un niño nacido en Estados Unidos no pierde la ciudadanía simplemente porque:</p>

<ul>
<li>La familia se muda al extranjero.</li>
<li>Los padres son deportados</li>
<li>Los padres no tienen documentos.</li>
<li>Los padres regresan a su país de origen.</li>
<li>La ciudadanía del niño permanece intacta.</li>
</ul>

<h2>Mitos comunes sobre la inmigración</h2>

<h3>Mito n.º 1: Tener un bebé ciudadano estadounidense otorga a los padres la tarjeta de residencia permanente (Green Card).</h3>

<p>FALSO.</p>

<p>No existe una tarjeta de residencia automática simplemente porque un niño haya nacido en los Estados Unidos.</p>

<h3>Mito n.º 2: El gobierno puede quitarle la ciudadanía al niño porque los padres son indocumentados.</h3>

<p>FALSO.</p>

<p>La ciudadanía pertenece al niño.</p>

<p>Por lo general, la situación migratoria de los padres no afecta a la ciudadanía del niño.</p>

<h3>Mito n.º 3: Los padres deben evitar registrar al bebé.</h3>

<p>FALSO.</p>

<p>Los padres deben obtener:</p>

<ul>
<li>Certificado de nacimiento</li>
<li>Número de seguro social</li>
<li>Pasaporte estadounidense cuando corresponda</li>
<li>Estos documentos protegen los derechos legales del niño.</li>
</ul>

<h3>Mito n.º 4: Todos los padres pueden obtener la condición de padres legales una vez que su hijo cumple 21 años.</h3>

<p>No necesariamente.</p>

<p>Muchos padres aún se enfrentan a obstáculos legales que requieren representación legal experimentada.</p>

<h2>Por qué es importante el asesoramiento legal</h2>

<p>El derecho migratorio es una de las áreas más complejas del derecho estadounidense.</p>

<p>Las circunstancias de cada familia son diferentes.</p>

<p>Entre los factores que pueden afectar su caso se incluyen:</p>

<ul>
<li>Fecha de entrada</li>
<li>Método de entrada</li>
<li>Solicitudes de inmigración anteriores</li>
<li>Antecedentes penales</li>
<li>Matrimonio con un ciudadano estadounidense</li>
<li>Procedimientos de remoción anteriores</li>
<li>Exenciones de inmigración</li>
<li>protecciones humanitarias</li>
</ul>

<p>Un abogado de inmigración con experiencia puede evaluar su situación específica e identificar las vías legales disponibles.</p>

<h2>Preguntas frecuentes</h2>

<h3>¿Mi hijo se convierte automáticamente en ciudadano estadounidense si nace en California?</h3>

<p>Sí. En la mayoría de los casos, los niños nacidos en Estados Unidos son ciudadanos estadounidenses al nacer, independientemente del estatus migratorio de sus padres.</p>

<h3>¿Puede mi hijo apadrinarme de inmediato?</h3>

<p>No. Un niño ciudadano estadounidense generalmente debe tener al menos 21 años antes de presentar una petición para un padre.</p>

<h3>¿El hecho de tener un hijo ciudadano estadounidense evita la deportación?</h3>

<p>No. La ciudadanía del niño por sí sola no impide automáticamente los procedimientos de expulsión.</p>

<h3>¿Puedo solicitar la Tarjeta Verde porque mi hijo nació aquí?</h3>

<p>No automáticamente. La elegibilidad depende de todo su historial migratorio y otros factores legales.</p>

<h3>¿Debería hablar con un abogado de inmigración?</h3>

<p>Por supuesto. Recibir asesoramiento legal personalizado puede ayudarle a evitar errores costosos e identificar la mejor estrategia legal para el futuro de su familia.</p>

<h2>Proteja a su familia con asesoramiento experto en inmigración.</h2>

<p>La historia de cada familia inmigrante es única. Si bien la ciudadanía por derecho de nacimiento brinda importantes protecciones constitucionales a los niños nacidos en Estados Unidos, los padres no deben basarse en mitos o información errónea al tomar decisiones sobre su futuro migratorio.</p>

<p>Tanto si eres indocumentado, como si has permanecido en el país más tiempo del permitido por tu visa, buscas la residencia permanente legal o quieres comprender las opciones legales de tu familia, la orientación profesional puede marcar la diferencia.</p>

<p>En el bufete de abogados de Todd Becraft nos comprometemos a ayudar a las familias a comprender sus derechos, evaluar sus opciones de inmigración y buscar soluciones legales con compasión, integridad y representación legal personalizada.</p>

<p>Nuestro equipo comprende los desafíos a los que se enfrentan las familias inmigrantes y se dedica a guiar a los clientes en cada paso del proceso de inmigración.</p>

<p>Póngase en contacto hoy mismo con el bufete de abogados de Todd Becraft para programar una consulta confidencial y conocer las opciones de inmigración disponibles para usted y su familia.</p>
    `},{slug:"asilo-afirmativo-frente-a-asilo-defensivo",title:"Asilo afirmativo frente a asilo defensivo: Entendiendo la diferencia y cómo funciona el proceso de asilo en Estados Unidos",excerpt:"Para quienes temen regresar a sus países de origen debido a la persecución, el asilo puede ofrecer una vía de protección en Estados Unidos. Conozca la diferencia entre el asilo afirmativo ante USCIS y el asilo defensivo ante un juez de inmigración.",date:"18 de julio de 2026",author:"Todd Becraft",content:`
<p>Para quienes temen regresar a sus países de origen debido a la persecución, el asilo puede ofrecer una vía de protección en Estados Unidos. Sin embargo, el proceso de solicitud de asilo no es único ni idéntico para todos los solicitantes.</p>

<p>En Estados Unidos existen dos vías principales para tramitar una solicitud de asilo: asilo afirmativo y asilo defensivo.</p>

<p>Ambos procesos implican solicitar protección por persecución o por un temor fundado a sufrir persecución futura, pero comienzan en circunstancias muy diferentes. Un caso de asilo afirmativo generalmente se inicia ante el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS), mientras que un caso de asilo defensivo se lleva a cabo ante un juez de inmigración porque la persona ya se encuentra en un proceso de deportación.</p>

<p>Comprender la diferencia entre asilo afirmativo y asilo defensivo puede ser de suma importancia para los inmigrantes que buscan protección en los Estados Unidos.</p>

<h2>¿Qué es el asilo en los Estados Unidos?</h2>

<p>El asilo es una forma de protección humanitaria disponible para ciertas personas que se encuentran físicamente presentes en los Estados Unidos o que llegan a los Estados Unidos y no pueden regresar de forma segura a su país de origen.</p>

<p>En general, el solicitante debe demostrar haber sufrido persecución en el pasado o tener un temor fundado de sufrir persecución en el futuro relacionado con al menos uno de los cinco motivos protegidos: raza, religión, nacionalidad, opinión política o pertenencia a un grupo social determinado.</p>

<p>El simple hecho de tener miedo a regresar a casa no garantiza necesariamente el derecho al asilo. Por lo general, el solicitante debe demostrar la conexión, o «nexo», necesaria entre la persecución y un motivo legalmente protegido.</p>

<p>Por ejemplo, una persona que huye de dificultades económicas generalizadas normalmente no reúne los requisitos para obtener asilo simplemente porque sus condiciones de vida son difíciles. Del mismo modo, ser víctima de un delito común no da derecho automáticamente a solicitar asilo.</p>

<p>El análisis jurídico cambia cuando el solicitante puede demostrar que el daño se produjo, o se teme, debido a una característica protegida o a un motivo protegido, y se cumplen los demás requisitos de asilo.</p>

<p>Esta distinción es una de las razones por las que los casos de asilo pueden volverse legalmente complicados.</p>

<h2>¿Qué es el asilo afirmativo?</h2>

<p>El asilo afirmativo generalmente se refiere a una solicitud de asilo realizada por alguien que no se encuentra actualmente en un proceso de expulsión ante un juez de inmigración.</p>

<p>Por lo general, el solicitante presenta la solicitud de asilo correspondiente ante el USCIS y expone su caso a través del proceso de asilo afirmativo.</p>

<p>Dependiendo de las circunstancias, el solicitante puede haber ingresado originalmente a los Estados Unidos con una visa, haber ingresado a través de otro proceso legal o encontrarse en otra situación migratoria que permita que la solicitud de asilo proceda afirmativamente.</p>

<p>La distinción fundamental es de carácter procesal: el solicitante pide asilo antes de que se inicien los procedimientos de expulsión.</p>

<p>Un caso de asilo afirmativo puede involucrar varios componentes importantes, entre ellos:</p>

<ul>
<li>Formulario I-589, Solicitud de asilo y de suspensión de la deportación</li>
<li>Una declaración personal detallada</li>
<li>Documentos de identidad</li>
<li>Pruebas de persecución pasada</li>
<li>Documentación médica o psicológica cuando corresponda</li>
<li>Registros policiales o gubernamentales cuando estén disponibles</li>
<li>Declaraciones de testigos</li>
<li>Fotografías</li>
<li>Mensajes amenazantes</li>
<li>Informes de prensa</li>
<li>Documentación sobre derechos humanos</li>
<li>Pruebas de la situación del país</li>
</ul>

<p>Las pruebas específicas necesarias dependen en gran medida de las circunstancias de cada caso.</p>

<h2>Ejemplo de un caso de asilo afirmativo</h2>

<p>Consideremos a una solicitante hipotética llamada Daniela.</p>

<p>Daniela era políticamente activa en su país de origen. Participaba en manifestaciones pacíficas que criticaban la corrupción gubernamental y publicaba comentarios políticos en internet.</p>

<p>Tras ganar mayor visibilidad, Daniela supuestamente comenzó a recibir amenazas. Personas vinculadas al gobierno interrogaron a su familia sobre sus actividades. Fue detenida después de una manifestación, interrogada sobre su participación política y, posteriormente, recibió mensajes que le advertían que dejara de criticar al gobierno.</p>

<p>Finalmente, Daniela viajó a los Estados Unidos.</p>

<p>Actualmente no se encuentra en proceso de expulsión y decide solicitar asilo.</p>

<p>Su abogado podría evaluar si una solicitud de asilo afirmativa es apropiada y si la evidencia establece persecución basada en opinión política.</p>

<p>Las pruebas en un caso como el de Daniela podrían incluir fotografías de manifestaciones, publicaciones en redes sociales, mensajes amenazantes, registros de arresto o detención, declaraciones de testigos, noticias sobre la situación política e informes que documenten el trato del gobierno a los opositores políticos.</p>

<p>Ningún documento por sí solo determina necesariamente el resultado. Las pruebas deben, en conjunto, conformar una historia creíble y legalmente suficiente.</p>

<h2>La importancia del plazo de un año para presentar la solicitud de asilo</h2>

<p>Una de las reglas más importantes que los posibles solicitantes de asilo deben comprender es el plazo de presentación de un año.</p>

<p>En general, la solicitud de asilo debe presentarse dentro del plazo de un año a partir de la llegada del solicitante a Estados Unidos. Pueden aplicarse ciertas excepciones, como circunstancias extraordinarias o cambios de circunstancias que justifiquen la solicitud.</p>

<p>Esta norma puede tener consecuencias enormes.</p>

<p>Imaginemos que una persona entra en Estados Unidos y espera varios años antes de buscar asesoramiento legal porque asume erróneamente que no hay un plazo límite.</p>

<p>El temor subyacente a la persecución puede ser genuino, pero la demora puede generar un problema legal adicional que debe abordarse.</p>

<p>Por lo tanto, cualquier persona que esté considerando solicitar asilo debería obtener asesoramiento legal lo antes posible, en lugar de suponer que la espera no tendrá ningún efecto en el caso.</p>

<h2>¿Qué sucede durante un caso de asilo afirmativo?</h2>

<p>Una vez presentada correctamente una solicitud de asilo afirmativa, el USCIS tramita el caso de acuerdo con los procedimientos aplicables.</p>

<p>Un funcionario de asilo puede entrevistar al solicitante y evaluar la solicitud, el testimonio, la credibilidad, los documentos justificativos, las condiciones del país y la legislación aplicable.</p>

<p>La entrevista puede ser una de las etapas más importantes del proceso.</p>

<p>Es posible que se interrogue al solicitante sobre los motivos por los que abandonó su país, qué le sucedió, quién le hizo daño o le amenazó, por qué cree que fue blanco de ataques, si solicitó protección gubernamental, por qué no puede reubicarse de forma segura dentro de su país y qué cree que sucedería si regresara.</p>

<p>La coherencia puede ser extremadamente importante.</p>

<p>Por ejemplo, supongamos que la declaración de un solicitante indica que el ataque ocurrió en marzo, pero durante la entrevista afirma repetidamente que sucedió en julio. Un simple error no invalida automáticamente una solicitud de asilo, sobre todo cuando un trauma, problemas de traducción, fallos de memoria u otras circunstancias ofrecen una explicación. Sin embargo, las inconsistencias significativas pueden generar dudas sobre su credibilidad.</p>

<p>Por lo tanto, una preparación cuidadosa es fundamental.</p>

<h2>¿Qué sucede si el USCIS no concede el asilo afirmativo?</h2>

<p>Esta es un área donde muchos solicitantes se confunden.</p>

<p>La decisión del USCIS de no conceder una solicitud de asilo afirmativa no significa necesariamente que se hayan agotado todas las oportunidades para solicitar asilo.</p>

<p>Según el estatus migratorio y las circunstancias del solicitante, el DHS puede iniciar un proceso de deportación. Cuando una solicitud de asilo afirmativa se remite a un tribunal de inmigración, un juez de inmigración puede considerar la solicitud de asilo.</p>

<p>En ese momento, el caso pasa al sistema judicial de inmigración.</p>

<p>El juez de inmigración evalúa el caso de forma independiente, de acuerdo con la ley aplicable y las pruebas presentadas.</p>

<h2>¿Qué es el asilo defensivo?</h2>

<p>El asilo defensivo se solicita en un procedimiento ante un juez de inmigración como protección contra la expulsión de los Estados Unidos.</p>

<p>En otras palabras, el solicitante ya se enfrenta a un proceso ante un tribunal de inmigración y plantea la solicitud de asilo como defensa contra la deportación a un país donde, según afirma, teme ser perseguido.</p>

<p>Los procedimientos de expulsión generalmente comienzan cuando el Departamento de Seguridad Nacional presenta una Notificación de Comparecencia ante el tribunal de inmigración después de haberla notificado al individuo.</p>

<p>A diferencia de un caso afirmativo que se tramita inicialmente a través del USCIS, un caso de asilo defensivo se litiga ante un juez de inmigración dentro de la Oficina Ejecutiva de Revisión de Inmigración del Departamento de Justicia.</p>

<p>Un abogado del gobierno puede representar al DHS en el proceso.</p>

<h2>Ejemplo de asilo defensivo</h2>

<p>Consideremos a otro solicitante hipotético, Carlos.</p>

<p>Carlos huyó de su país natal tras recibir repetidas amenazas debido a su participación en una organización política de oposición.</p>

<p>Finalmente, se inician los trámites para su deportación.</p>

<p>Carlos le dice a su abogado que regresar a casa podría poner su vida en peligro.</p>

<p>En lugar de presentar una solicitud afirmativa ordinaria ante el USCIS, su abogado determina que, dado que Carlos ya se encuentra en un proceso judicial de inmigración, su solicitud de asilo debe presentarse ante el juez de inmigración con la postura defensiva adecuada.</p>

<p>Carlos podrá presentar testimonios y pruebas documentales que demuestren lo que le sucedió y por qué cree que sería perseguido si regresara.</p>

<p>El gobierno puede impugnar aspectos de su solicitud, y el juez de inmigración evalúa las pruebas y la legislación aplicable.</p>

<p>Esto es fundamentalmente diferente a simplemente asistir a una entrevista de asilo con el USCIS.</p>

<h2>Tribunal de inmigración y asilo defensivo</h2>

<p>Los procedimientos ante los tribunales de inmigración pueden implicar múltiples audiencias.</p>

<p>Una persona puede asistir primero a una audiencia del calendario maestro, que generalmente aborda cuestiones de procedimiento, alegatos, solicitudes de reparación, plazos, representación y programación.</p>

<p>Posteriormente, el tribunal podrá programar una audiencia individual, a veces denominada audiencia de fondo.</p>

<p>En la audiencia de fondo, el solicitante puede testificar extensamente sobre su solicitud de asilo. Los testigos pueden declarar, se pueden considerar pruebas documentales, los abogados pueden presentar argumentos legales y el abogado del DHS puede interrogar al solicitante.</p>

<p>En última instancia, el juez de inmigración decide si el solicitante ha demostrado cumplir los requisitos para obtener asilo u otra protección aplicable.</p>

<h2>Las pruebas pueden marcar una gran diferencia</h2>

<p>Los casos de asilo a menudo dependen de mucho más que de que el solicitante simplemente diga: «Tengo miedo de volver a casa».</p>

<p>Un argumento sólido busca explicar por qué la persona tiene miedo y relaciona ese miedo con las pruebas y la ley de asilo.</p>

<p>Consideremos el caso de una solicitante que alega persecución religiosa.</p>

<p>Afirma que los miembros de una minoría religiosa en su país son blanco de ataques de forma habitual y que ella misma ha recibido amenazas de muerte.</p>

<p>Entre las pruebas útiles podrían incluirse mensajes amenazantes, fotografías que muestren daños en su lugar de culto, declaraciones de testigos, pruebas de participación religiosa, informes policiales, historiales médicos posteriores a un ataque e informes fidedignos que documenten la persecución de miembros de su religión.</p>

<p>No todos los solicitantes de asilo poseen este tipo de documentación.</p>

<p>Las personas que huyen de la persecución suelen marcharse rápidamente y es posible que no puedan obtener informes policiales ni otros registros oficiales. En algunos casos, el propio gobierno puede ser responsable de la persecución.</p>

<p>Por lo tanto, la ausencia de un documento en particular no significa automáticamente que una reclamación no pueda prosperar. Lo que importa es el conjunto de las pruebas, la credibilidad, las explicaciones y las circunstancias.</p>

<h2>Otro caso de estudio: persecución por parte de actores no gubernamentales</h2>

<p>Supongamos que Andrés es amenazado repetidamente por un grupo organizado en su país.</p>

<p>Denuncia las amenazas a las autoridades locales, pero la policía se niega a protegerlo. Al parecer, algunos agentes colaboran con el grupo.</p>

<p>Andrés finalmente huye a Estados Unidos.</p>

<p>Su caso podría plantear varias cuestiones complejas.</p>

<p>¿Por qué Andrés fue el objetivo? ¿Estaba el motivo relacionado con algún motivo de asilo protegido? ¿Cuán graves fueron las amenazas? ¿El gobierno no pudo o no quiso brindarle protección conforme a la normativa legal aplicable? ¿Podría Andrés trasladarse a otro lugar del país de forma segura? ¿Existe evidencia que demuestre la relación entre los perseguidores y las autoridades locales?</p>

<p>Simplemente demostrar que personas peligrosas amenazaron a Andrés podría no ser suficiente. Su abogado tendría que analizar si los hechos cumplen con los requisitos legales para obtener asilo.</p>

<p>Esto ilustra por qué dos solicitantes que sufrieron violencia similar pueden recibir evaluaciones legales diferentes.</p>

<h2>Asilo afirmativo frente a asilo defensivo: la diferencia clave</h2>

<p>La forma más sencilla de entender la distinción es observar dónde comienza el caso y quién lo decide.</p>

<p>En un caso de solicitud de asilo afirmativa, una persona que no está sujeta a un proceso de deportación generalmente solicita asilo a través del USCIS.</p>

<p>En un caso de asilo defensivo, el solicitante ya se encuentra ante el tribunal de inmigración y solicita asilo como protección contra la expulsión.</p>

<p>Ambos casos podrían basarse en tipos de pruebas similares. Ambos requieren una preparación minuciosa. Ambos podrían implicar cuestiones complejas relativas a la credibilidad, la persecución pasada y futura, los motivos protegidos, la protección gubernamental, la reubicación interna, las prohibiciones legales, los plazos de presentación de solicitudes y las condiciones del país.</p>

<p>Pero en cuanto al procedimiento, son muy diferentes.</p>

<h2>¿Puede un juez de inmigración denegar el asilo?</h2>

<p>Sí.</p>

<p>Un juez de inmigración puede conceder o denegar una solicitud de asilo tras evaluar los hechos, las pruebas, los testimonios, la credibilidad y la legislación aplicable.</p>

<p>Cuando un juez de inmigración emite una decisión apelable, una parte puede, en circunstancias apropiadas, solicitar una revisión por parte de la Junta de Apelaciones de Inmigración (BIA).</p>

<p>Los plazos de apelación pueden ser extremadamente estrictos. Actualmente, la EOIR establece que el Formulario EOIR-26 generalmente debe ser recibido por la BIA dentro de 30 días naturales después de que el juez de inmigración emita una decisión oral o envíe por correo una decisión escrita.</p>

<p>Dado que incumplir un plazo puede tener graves consecuencias, cualquier persona que esté considerando presentar una apelación en materia de inmigración debe obtener asesoramiento legal de inmediato.</p>

<h2>Errores comunes en los casos de asilo</h2>

<p>Uno de los mayores errores es esperar demasiado tiempo para buscar asesoramiento, especialmente debido a la norma que establece un plazo de un año para solicitar asilo.</p>

<p>Otro error consiste en suponer que toda situación peligrosa califica automáticamente como persecución según la ley de asilo de Estados Unidos.</p>

<p>Los solicitantes también pueden perjudicar sus casos al presentar solicitudes incompletas, no explicar inconsistencias evidentes, proporcionar traducciones deficientes, omitir eventos importantes, ignorar su historial migratorio previo o basarse en información genérica sobre las condiciones del país sin relacionarla con sus circunstancias personales.</p>

<p>La actividad en las redes sociales también puede resultar relevante. Las declaraciones realizadas públicamente en línea pueden compararse con la información presentada en un caso de inmigración.</p>

<p>La precisión y la coherencia son esenciales.</p>

<h2>Cada caso de asilo es diferente</h2>

<p>No existe una estrategia de asilo universal.</p>

<p>Un periodista amenazado por denunciar la corrupción gubernamental plantea cuestiones legales diferentes a las de una minoría religiosa que sufre persecución organizada. El caso de un activista político difiere del de una persona atacada por pertenecer a un grupo social determinado.</p>

<p>Incluso dos personas del mismo país pueden tener casos radicalmente diferentes.</p>

<ul>
<li>La historia de la inmigración importa.</li>
<li>El historial de entradas importa.</li>
<li>Los plazos importan.</li>
<li>Las solicitudes anteriores son importantes.</li>
<li>Los antecedentes penales pueden ser importantes.</li>
<li>La identidad y la motivación del perseguidor son importantes.</li>
<li>Las condiciones del país importan.</li>
</ul>

<p>Lo más importante es que importan los detalles específicos de la experiencia de cada solicitante.</p>

<h2>Hable con un abogado de asilo con experiencia en Los Ángeles</h2>

<p>Ya sea que esté considerando asilo afirmativo en Los Ángeles, haya recibido una Notificación para Comparecer, se enfrente a procedimientos de expulsión en el tribunal de inmigración o necesite comprender si puede calificar para asilo defensivo, contar con asesoramiento legal a tiempo puede marcar una diferencia importante.</p>

<p>El bufete de abogados de Todd Becraft brinda asistencia a inmigrantes con asuntos migratorios complejos y comprendemos que un caso de asilo es mucho más que papeleo. Detrás de cada solicitud hay una persona, una familia y, a menudo, una historia de miedo, sacrificio e incertidumbre.</p>

<p>Como abogados experimentados en inmigración de Los Ángeles, podemos evaluar su historial migratorio, analizar su elegibilidad para el asilo, identificar posibles problemas legales, ayudarle a organizar las pruebas que lo respalden, prepararlo para una entrevista de asilo o una audiencia ante un tribunal de inmigración y explicarle las opciones disponibles según sus circunstancias individuales.</p>

<p>Si teme regresar a su país, no dé por sentado que reúne los requisitos, o que no los reúne, sin antes comprender cómo se aplica la ley de asilo de Estados Unidos a su situación específica.</p>

<p><strong>Bufete de abogados de Todd Becraft</strong><br />
Representación legal en materia de inmigración y asilo en Los Ángeles<br />
213-388-1821<br />
<em>Cada paso a tu lado.</em></p>

<p><em>Descargo de responsabilidad: Este artículo se proporciona con fines informativos generales y no constituye asesoramiento legal. Las leyes, reglamentos, políticas, procedimientos y decisiones judiciales en materia de inmigración y asilo pueden cambiar. La elegibilidad y la estrategia dependen de las circunstancias específicas de cada caso. Consulte con un abogado de inmigración calificado sobre su situación particular.</em></p>
`},{slug:"cargos-penales-afectan-ciudadania",title:"¿Pueden los cargos penales afectar la ciudadanía estadounidense?",excerpt:"Comprenda cómo los antecedentes penales pueden afectar su solicitud de ciudadanía estadounidense, el requisito de buen carácter moral y qué hacer si tiene cargos o condenas.",date:"16 de julio de 2026",author:"Todd Becraft",content:`
<h2>¿Pueden los cargos penales afectar la ciudadanía estadounidense?</h2>

<p>Convertirse en ciudadano estadounidense es un sueño compartido por millones de inmigrantes. Tras años de vivir, trabajar, pagar impuestos y contribuir a sus comunidades, muchos residentes permanentes legales deciden solicitar la naturalización. Sin embargo, una de las preocupaciones más comunes entre los solicitantes es si una acusación o condena penal podría impedirles obtener la ciudadanía estadounidense.</p>

<p>La respuesta es: eso depende.</p>

<p>No todo arresto, citación o condena penal descalifica automáticamente a una persona para obtener la ciudadanía estadounidense. Sin embargo, ciertos delitos penales pueden retrasar, complicar o incluso impedir permanentemente la naturalización. El impacto depende de varios factores, incluido el tipo de delito, cuándo ocurrió, si resultó en una condena y si el solicitante cumple con los requisitos del USCIS. Un buen carácter moral es un requisito.</p>

<p>En el bufete de abogados de Todd Becraft, entendemos que cada caso de inmigración es único. Si tiene antecedentes penales y está considerando solicitar la ciudadanía, obtener asesoría legal antes de presentar su solicitud puede ayudarle a evitar errores costosos y proteger su futuro.</p>

<h2>¿Por qué el USCIS revisa los antecedentes penales?</h2>

<p>Cuando alguien solicita la naturalización, el USCIS hace mucho más que verificar la residencia y el dominio del inglés. Los oficiales de inmigración revisan minuciosamente los antecedentes del solicitante para determinar si cumple con los requisitos de la ley federal de inmigración.</p>

<p>Uno de los requisitos más importantes es demostrar un buen carácter moral (GCM).</p>

<p>USCIS examina:</p>

<ul>
<li>Antecedentes penales</li>
<li>Historial de arrestos</li>
<li>Resoluciones judiciales</li>
<li>Informes policiales</li>
<li>Historial de libertad condicional</li>
<li>Registros de inmigración</li>
<li>Cumplimiento tributario</li>
<li>Obligaciones de manutención infantil</li>
<li>Veracidad durante el proceso de solicitud</li>
</ul>

<p>La agencia quiere asegurarse de que los solicitantes hayan respetado las leyes estadounidenses y cumplan con los requisitos legales necesarios para obtener la ciudadanía.</p>

<h2>¿Qué es un buen carácter moral?</h2>

<p>Tener un buen carácter moral no significa haber vivido una vida perfecta.</p>

<p>En cambio, el USCIS evalúa si el solicitante se ha comportado de manera generalmente responsable y honesta durante un período específico antes de solicitar la ciudadanía.</p>

<p>Para la mayoría de los solicitantes, USCIS revisa los cinco años inmediatamente antes de la presentación del Formulario N-400.</p>

<p>Para los solicitantes casados con ciudadanos estadounidenses que cumplen los requisitos de la regla de los tres años, el período de revisión es generalmente de tres años.</p>

<p>Sin embargo, el USCIS no se limita a esos plazos. Los oficiales de inmigración pueden examinar conductas ocurridas mucho antes si esto ayuda a determinar si el solicitante posee actualmente una buena conducta moral.</p>

<h2>Detenciones frente a condenas</h2>

<p>Muchas personas dan por sentado que ser arrestado las descalifica automáticamente para obtener la ciudadanía.</p>

<p>Afortunadamente, eso no es cierto.</p>

<p>Un arresto por sí solo no impide necesariamente la naturalización.</p>

<p>En cambio, el USCIS evaluará:</p>

<ul>
<li>Si se presentaron cargos.</li>
<li>Si el caso fue desestimado.</li>
<li>Si hubo condena.</li>
<li>La gravedad del delito.</li>
<li>Las circunstancias circundantes.</li>
</ul>

<p>Los solicitantes deben revelar todos los arrestos, incluso si los cargos fueron retirados o los antecedentes penales fueron posteriormente sellados o eliminados.</p>

<p>No revelar una detención puede generar un problema mucho mayor que la propia detención.</p>

<p>La honestidad es fundamental durante todo el proceso de inmigración.</p>

<h2>Cargos penales que pueden afectar la ciudadanía</h2>

<p>No todos los delitos penales conllevan las mismas consecuencias migratorias.</p>

<p>Algunas infracciones menores pueden tener poco o ningún efecto, mientras que otras pueden impedir permanentemente la naturalización.</p>

<p>Algunos ejemplos de delitos que el USCIS puede revisar detenidamente incluyen:</p>

<ul>
<li>Violencia doméstica</li>
<li>Delitos relacionados con las drogas</li>
<li>Robo</li>
<li>Fraude</li>
<li>Agresión</li>
<li>Robo de identidad</li>
<li>Delitos relacionados con armas de fuego</li>
<li>Ciertos casos de DUI</li>
<li>Delitos que implican depravación moral</li>
<li>Delitos graves</li>
</ul>

<p>Cada caso requiere un análisis legal individual.</p>

<h2>Delitos que implican depravación moral</h2>

<p>Uno de los conceptos más incomprendidos en el derecho de inmigración son los delitos que implican depravación moral (DIM).</p>

<p>Aunque el término pueda sonar complicado, generalmente se refiere a delitos que implican deshonestidad, fraude, robo u otra conducta moralmente reprobable.</p>

<p>Algunos ejemplos pueden ser:</p>

<ul>
<li>Fraude</li>
<li>Malversación</li>
<li>Robo de identidad</li>
<li>Ciertos delitos de robo</li>
<li>Falsificación</li>
<li>Perjurio</li>
</ul>

<p>No todos los robos o fraudes se consideran automáticamente delitos que implican depravación moral.</p>

<p>Los hechos específicos, el estatuto penal, la sentencia y las circunstancias son factores importantes.</p>

<p>Dado que estas determinaciones pueden ser muy técnicas, los solicitantes siempre deben consultar con un abogado de inmigración con experiencia antes de solicitar la ciudadanía.</p>

<h2>Delitos relacionados con las drogas</h2>

<p>Los delitos relacionados con las drogas suelen plantear importantes problemas de inmigración.</p>

<p>Las condenas relacionadas con sustancias controladas pueden afectar tanto a la residencia permanente legal como a la elegibilidad para la naturalización.</p>

<p>Los casos de posesión simple, los delitos relacionados con la marihuana, las infracciones relativas a medicamentos recetados y los delitos de narcotráfico conllevan diferentes consecuencias migratorias.</p>

<p>Algunos delitos crean barreras temporales.</p>

<p>Otros factores pueden afectar de forma permanente el estatus migratorio.</p>

<p>Cada caso merece una evaluación legal minuciosa.</p>

<h2>Violencia doméstica</h2>

<p>Las condenas por violencia doméstica pueden generar graves problemas migratorios.</p>

<p>Reseñas de USCIS:</p>

<ul>
<li>Órdenes de protección</li>
<li>Condenas por agresión</li>
<li>Violaciones de órdenes de restricción</li>
<li>Acusaciones de abuso infantil</li>
<li>Delitos de violencia intrafamiliar</li>
</ul>

<p>Dado que estos casos suelen implicar acuerdos de culpabilidad, los solicitantes nunca deben asumir que aceptar una declaración de culpabilidad penal no tendrá consecuencias migratorias.</p>

<p>Lo que parece ser una resolución penal favorable aún puede generar complicaciones migratorias años después.</p>

<h2>Delitos de fraude</h2>

<p>El fraude recibe una atención especialmente minuciosa durante el proceso de naturalización.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>Fraude con tarjetas de crédito</li>
<li>Fraude de seguros</li>
<li>Fraude hipotecario</li>
<li>Fraude fiscal</li>
<li>Fraude migratorio</li>
<li>Fraude en el sector sanitario</li>
</ul>

<p>Dado que las solicitudes de ciudadanía exigen honestidad, las condenas previas por fraude pueden generar dudas sobre la buena conducta moral del solicitante.</p>

<h2>Caso práctico: Acusación de hurto en tienda</h2>

<p>Ana obtuvo la residencia permanente legal a través de su empleador.</p>

<p>Varios años antes de solicitar la ciudadanía, fue arrestada por robar mercancía barata de unos grandes almacenes.</p>

<p>El tribunal la condenó a realizar trabajos comunitarios y ella cumplió con todos los requisitos.</p>

<p>Antes de presentar su solicitud de ciudadanía, Ana consultó con un abogado de inmigración.</p>

<p>Tras revisar los expedientes judiciales, los esfuerzos de rehabilitación y el tiempo transcurrido, la abogada determinó que ella seguía cumpliendo los requisitos para presentar la solicitud.</p>

<p>Debido a que reveló su condena con honestidad y demostró haberse rehabilitado, el USCIS finalmente aprobó su solicitud de naturalización.</p>

<p>Este caso demuestra que no toda condena penal impide de forma permanente obtener la ciudadanía.</p>

<h2>Caso práctico: Omisión de informar sobre una detención</h2>

<p>Miguel había sido arrestado años antes tras un malentendido durante una disputa vecinal.</p>

<p>Los cargos fueron desestimados.</p>

<p>Creyendo que el arresto ya no importaba, respondió "No" cuando se le preguntó si alguna vez había sido arrestado.</p>

<p>Durante la verificación de antecedentes, el USCIS descubrió el historial de arrestos.</p>

<p>Si bien los cargos desestimados en sí mismos no eran motivo de descalificación, el hecho de no haberlos revelado generó dudas sobre la veracidad de la información.</p>

<p>La solicitud de Miguel se retrasó mientras el USCIS solicitaba pruebas y explicaciones adicionales.</p>

<p>Si hubiera revelado la detención desde el principio, el proceso probablemente habría sido mucho más sencillo.</p>

<p>La honestidad suele ser más importante que el incidente en sí.</p>

<h2>¿Afecta un cargo por conducir bajo los efectos del alcohol a la obtención de la ciudadanía?</h2>

<p>Conducir bajo los efectos del alcohol o las drogas (DUI, por sus siglas en inglés) es una de las preguntas más comunes que reciben los abogados de inmigración.</p>

<p>Una sola condena por conducir bajo los efectos del alcohol no impide automáticamente que una persona se convierta en ciudadana estadounidense.</p>

<p>Sin embargo, el USCIS considera lo siguiente:</p>

<ul>
<li>Múltiples condenas por conducir bajo los efectos del alcohol</li>
<li>Patrones de abuso de alcohol</li>
<li>Conducir bajo los efectos de las drogas</li>
<li>Lesiones causadas por conducir bajo los efectos del alcohol o las drogas</li>
<li>Si se cumplieron los requisitos de la libertad condicional</li>
</ul>

<p>La comisión de varios delitos relacionados con el alcohol puede generar dudas sobre la buena conducta moral, incluso si un solo delito de conducir bajo los efectos del alcohol no lo hiciera.</p>

<p>Los solicitantes con antecedentes por conducir bajo los efectos del alcohol o las drogas deben consultar con un abogado de inmigración antes de presentar el formulario N-400.</p>

<h2>El momento oportuno importa</h2>

<p>El momento en que se comete un delito suele influir en sus consecuencias migratorias.</p>

<p>El USCIS puede evaluar:</p>

<ul>
<li>¿Hace cuánto tiempo ocurrió el delito?</li>
<li>Si el período de libertad condicional ha terminado</li>
<li>Evidencia de rehabilitación</li>
<li>Participación de la comunidad</li>
<li>Historial laboral</li>
<li>Cumplimiento de las órdenes judiciales</li>
</ul>

<p>Una persona que cometió un error hace décadas, pero que desde entonces ha demostrado un comportamiento responsable, puede ser vista de forma muy diferente a alguien con antecedentes penales recientes.</p>

<p>Los agentes de inmigración examinan la situación en su conjunto, no solo un incidente aislado.</p>

<h2>Delitos graves y naturalización</h2>

<p>Según la ley de inmigración de EE. UU., algunas condenas penales se clasifican como delitos graves; a pesar de su nombre, un delito grave no siempre tiene que ser un delito grave según la ley estatal. Se trata de una categoría específica de delitos definida por las leyes federales de inmigración.</p>

<p>Algunos ejemplos pueden ser:</p>

<ul>
<li>Asesinato</li>
<li>Violación</li>
<li>Abuso sexual de un menor</li>
<li>Tráfico de drogas</li>
<li>Tráfico de armas de fuego</li>
<li>Blanqueo de dinero que involucra grandes sumas</li>
<li>Determinados delitos de fraude con pérdidas financieras significativas</li>
<li>Algunos delitos de robo o allanamiento conllevan largas penas de prisión</li>
<li>Delitos violentos que conllevan penas de prisión sustanciales</li>
</ul>

<p>Para muchos inmigrantes, una condena por un delito grave después de ciertas fechas puede impedirles de forma permanente la naturalización y también puede dar lugar a un proceso de deportación. Debido a la gravedad de las consecuencias migratorias, cualquier persona con este tipo de condena debe buscar asesoría legal de inmediato antes de presentar cualquier solicitud de inmigración.</p>

<h2>Cargos penales pendientes</h2>

<p>Si actualmente tiene cargos penales pendientes, por lo general no es recomendable solicitar la ciudadanía estadounidense hasta que su caso penal se haya resuelto.</p>

<p>USCIS puede:</p>

<ul>
<li>Posponer tu entrevista de naturalización</li>
<li>Continuar con su caso mientras espera el resultado</li>
<li>Denegar la solicitud si el antecedente penal afecta su elegibilidad</li>
</ul>

<p>Muchos solicitantes creen erróneamente que presentar la solicitud cuanto antes aumentará sus posibilidades. En realidad, esperar a que su abogado penalista y su abogado de inmigración revisen su caso puede ser la opción más segura.</p>

<h2>Registros eliminados o sellados</h2>

<p>Una de las mayores ideas erróneas en materia de derecho migratorio es que un antecedente penal borrado o sellado desaparece a efectos de inmigración.</p>

<p>Desafortunadamente, eso a menudo no es el caso.</p>

<p>Aunque un tribunal estatal elimine los antecedentes penales de una condena, el USCIS aún puede tener en cuenta la conducta subyacente al evaluar los beneficios de inmigración.</p>

<p>Los solicitantes siempre deben revelar los arrestos y las condenas exactamente como se solicita en el Formulario N-400, incluso si:</p>

<ul>
<li>El caso fue desestimado</li>
<li>La condena fue anulada</li>
<li>El expediente quedó sellado</li>
<li>El delito ocurrió hace muchos años</li>
</ul>

<p>Intentar ocultar un caso cuyos antecedentes penales han sido borrados puede generar problemas mucho mayores que el delito original.</p>

<h2>Delitos juveniles</h2>

<p>Los delitos cometidos por menores generalmente reciben un trato diferente al de las condenas penales de adultos.</p>

<p>En muchas situaciones:</p>

<ul>
<li>Las resoluciones judiciales dictadas por menores no se consideran condenas penales a efectos de inmigración</li>
<li>Los expedientes juveniles sellados aún podrían requerir la consulta con un abogado</li>
<li>Los delitos graves cometidos durante la minoría de edad aún pueden requerir un análisis legal dependiendo de las circunstancias</li>
</ul>

<p>Dado que los casos de menores varían significativamente de un estado a otro, los solicitantes no deben asumir que son automáticamente irrelevantes.</p>

<h2>La importancia de la rehabilitación</h2>

<p>El USCIS no evalúa únicamente los errores del pasado. Los funcionarios también buscan pruebas de que los solicitantes se han convertido en miembros responsables y respetuosos de la ley en sus comunidades.</p>

<p>Entre los factores positivos se incluyen:</p>

<ul>
<li>Empleo estable</li>
<li>Servicio comunitario</li>
<li>Trabajo voluntario</li>
<li>Logros educativos</li>
<li>Finalización satisfactoria del período de prueba</li>
<li>Programas de asesoramiento o tratamiento</li>
<li>Pago de la restitución</li>
<li>Cumplimiento tributario constante</li>
<li>Responsabilidades familiares</li>
</ul>

<p>Demostrar la rehabilitación puede marcar una diferencia significativa en los casos en que un solicitante sigue cumpliendo los requisitos legales para la naturalización.</p>

<h2>Caso práctico: Conducir bajo los efectos del alcohol y rehabilitación</h2>

<p>James obtuvo la residencia permanente legal gracias a su cónyuge, ciudadana estadounidense. Varios años después, fue arrestado por conducir bajo los efectos del alcohol tras salir de una fiesta navideña.</p>

<p>Aceptó su responsabilidad, cumplió con todos los requisitos judiciales, asistió a clases de educación sobre el alcohol, pagó todas las multas y permaneció sin ser arrestado durante muchos años después.</p>

<p>Antes de solicitar la ciudadanía, James consultó con un abogado de inmigración, quien revisó cuidadosamente sus antecedentes penales y los documentos que lo respaldaban.</p>

<p>Durante su entrevista de naturalización, James respondió a todas las preguntas con sinceridad y aportó pruebas de que había cumplido con todos los requisitos ordenados por el tribunal.</p>

<p>Dado que el delito no impedía de forma permanente la naturalización y que demostró tener buena conducta moral durante el período legal, el USCIS aprobó su solicitud.</p>

<p>Este caso demuestra que un solo error no necesariamente pone fin al camino de una persona hacia la ciudadanía estadounidense.</p>

<h2>Caso práctico: Fraude durante el proceso de naturalización</h2>

<p>Otro solicitante había sido condenado previamente por robo de identidad.</p>

<p>En lugar de revelar la condena en el formulario N-400, respondió "No" a todas las preguntas sobre antecedentes penales.</p>

<p>Durante la investigación de antecedentes, el USCIS descubrió registros judiciales certificados que documentaban la condena.</p>

<p>La solicitud fue denegada, no solo por el delito subyacente, sino también porque el solicitante hizo declaraciones falsas durante el proceso de naturalización.</p>

<p>Intentar ocultar los antecedentes penales casi siempre genera consecuencias migratorias más graves que abordarlos con honestidad desde el principio.</p>

<h2>¿Qué sucede durante la entrevista de naturalización?</h2>

<p>Si tiene antecedentes penales, es probable que el funcionario del USCIS le haga preguntas adicionales durante la entrevista.</p>

<p>Es posible que se le solicite que proporcione lo siguiente:</p>

<ul>
<li>Resoluciones judiciales certificadas</li>
<li>Informes policiales</li>
<li>Prueba de que se pagaron las multas</li>
<li>Pruebas de que se completó el período de libertad condicional</li>
<li>Prueba de rehabilitación</li>
<li>Registros de sentencias certificadas</li>
</ul>

<p>El agente también podría pedirle que explique lo sucedido con sus propias palabras.</p>

<p>Mantén la calma, responde con sinceridad y nunca adivines si no estás seguro. Si cuentas con la representación de un abogado de inmigración, este podrá garantizar que el proceso se lleve a cabo correctamente.</p>

<h2>Preguntas frecuentes</h2>

<h3>¿Puedo obtener la ciudadanía estadounidense si he sido arrestado?</h3>

<p>Sí. Un arresto por sí solo no impide automáticamente la naturalización. El USCIS considera el resultado del caso y las circunstancias que lo rodean.</p>

<h3>¿Afectará el sobreseimiento de mi caso penal a mi solicitud de ciudadanía?</h3>

<p>Por lo general, un caso desestimado es menos grave que una condena. Sin embargo, debe declararlo si la solicitud pregunta sobre arrestos.</p>

<h3>¿Pueden las multas de tráfico impedir la naturalización?</h3>

<p>La mayoría de las infracciones de tránsito rutinarias no afectan a la ciudadanía, especialmente si se han pagado todas las multas. Los delitos más graves, como la conducción temeraria o conducir bajo los efectos del alcohol o las drogas, requieren un análisis legal más exhaustivo.</p>

<h3>¿Y si mi condena se produjo hace décadas?</h3>

<p>Las condenas antiguas pueden tener menos impacto que los delitos recientes, sobre todo si se ha demostrado rehabilitación y buena conducta moral. Sin embargo, cada caso debe analizarse individualmente.</p>

<h3>¿Debo solicitar la ciudadanía antes de hablar con un abogado?</h3>

<p>Si tiene antecedentes penales, incluso si cree que son menores, es recomendable consultar con un abogado de inmigración con experiencia antes de presentar el Formulario N-400. Una revisión legal puede identificar problemas que podrían retrasar o poner en riesgo su solicitud.</p>

<h2>Por qué es esencial contar con asesoramiento legal</h2>

<p>El derecho migratorio y el derecho penal suelen superponerse de maneras complejas. Un acuerdo de culpabilidad que parezca favorable en un tribunal penal puede tener consecuencias migratorias imprevistas años después.</p>

<p>Un abogado de inmigración con experiencia puede:</p>

<ul>
<li>Revisar sus antecedentes penales</li>
<li>Obtener documentos judiciales certificados</li>
<li>Determinar si su delito afecta a su elegibilidad</li>
<li>Evaluar su buen carácter moral</li>
<li>Preparar una solicitud de naturalización completa y precisa</li>
<li>Ayudarle a responder a las solicitudes de pruebas</li>
<li>Prepararle para su entrevista con el USCIS</li>
<li>Proteger sus derechos legales durante todo el proceso</li>
</ul>

<p>Recibir asesoramiento legal antes de presentar una demanda suele ser la mejor inversión que puede hacer en su futuro.</p>

<h2>Confíe en el bufete de abogados de Todd Becraft</h2>

<p>Tener un cargo o condena penal no significa automáticamente que no pueda convertirse en ciudadano estadounidense. Muchos residentes permanentes legales con antecedentes legales obtienen la naturalización cada año. La clave está en comprender cómo sus circunstancias específicas afectan su elegibilidad y tomar las medidas adecuadas antes de presentar su solicitud.</p>

<p>En el bufete de abogados de Todd Becraft, entendemos que cada proceso migratorio es único. Nuestro experimentado equipo legal evalúa cuidadosamente el historial migratorio, los antecedentes penales y la elegibilidad de cada cliente para desarrollar la estrategia más sólida posible. Ya sea que esté solicitando la ciudadanía, respondiendo a una solicitud de información adicional o tenga inquietudes sobre cómo un arresto o condena anterior podría afectar su futuro, estamos aquí para brindarle asesoría experta y representación comprensiva.</p>

<p>Si tiene preguntas sobre cargos penales, buena conducta moral o el proceso de naturalización, póngase en contacto con el bufete de abogados de Todd Becraft. Llame hoy mismo para programar una consulta confidencial. Nos comprometemos a ayudar a individuos y familias a comprender las complejidades de la ley de inmigración estadounidense con confianza, integridad y apoyo legal personalizado en cada etapa del proceso.</p>
`},{slug:"tarjeta-verde-condicional-explicacion",title:"Explicación de la Tarjeta Verde Condicional: Todo lo que necesita saber sobre la residencia permanente condicional",excerpt:"Guía completa sobre las Tarjetas Verdes Condicionales: qué son, quién las recibe, cómo eliminar las condiciones, el Formulario I-751, exenciones disponibles y errores comunes que se deben evitar.",date:"15 de junio de 2026",author:"Todd Becraft",content:`
<h2>Explicación de la Tarjeta Verde Condicional: Todo lo que necesita saber sobre la residencia permanente condicional</h2>

<p>Para muchos inmigrantes y sus familias, recibir una Tarjeta Verde es uno de los hitos más importantes en el proceso de inmigración. Sin embargo, algunas personas se sorprenden al descubrir que su Tarjeta Verde solo es válida por dos años en lugar de los diez años estándar. Esto se conoce como Tarjeta Verde Condicional y comprender cómo funciona es fundamental para proteger su estatus migratorio en los Estados Unidos.</p>

<p>En el bufete de abogados de Todd Becraft, asistimos regularmente a clientes con peticiones de inmigración basadas en lazos familiares, tarjetas de residencia por matrimonio y el proceso para eliminar las condiciones de la residencia permanente. Esta guía explica qué es una tarjeta de residencia condicional, quién la recibe, cómo eliminar las condiciones, los errores comunes que se deben evitar y qué sucede si el proceso no se completa correctamente.</p>

<h2>¿Qué es una tarjeta de residencia condicional?</h2>

<p>La Tarjeta Verde Condicional es una forma temporal de residencia permanente legal que el USCIS otorga a ciertos inmigrantes. Confiere los mismos derechos y privilegios que una Tarjeta Verde regular, pero tiene una validez de solo dos años.</p>

<p>Los beneficiarios más comunes de las Tarjetas Verdes Condicionales son las personas que obtienen la residencia permanente a través del matrimonio con un ciudadano estadounidense o un residente permanente legal, cuando el matrimonio tiene menos de dos años de antigüedad en el momento en que se concede la residencia permanente.</p>

<p>El propósito de la residencia condicional es permitir que el USCIS verifique que el matrimonio es genuino y que no se contrajo únicamente para obtener beneficios migratorios.</p>

<p>Aunque la tarjeta es temporal, su titular sigue siendo considerado residente permanente legal de los Estados Unidos durante el período condicional.</p>

<h2>¿Quiénes reciben una tarjeta de residencia condicional?</h2>

<p>Usted podría recibir una Tarjeta Verde Condicional si:</p>

<ul>
<li>Usted obtuvo la Tarjeta Verde a través del matrimonio.</li>
<li>Su matrimonio tenía menos de dos años cuando se aprobó su Tarjeta Verde.</li>
<li>Usted ajustó su estatus dentro de los Estados Unidos.</li>
<li>Usted ingresó a los Estados Unidos con una visa de inmigrante basada en un matrimonio reciente.</li>
</ul>

<p>Por ejemplo:</p>

<p>María se casa con un ciudadano estadounidense en enero de 2025. Su entrevista para la Tarjeta Verde es aprobada en diciembre de 2025. Dado que el matrimonio tiene menos de dos años al momento de la aprobación, el USCIS le otorga a María una Tarjeta Verde Condicional válida por dos años.</p>

<p>Si la tarjeta de residencia permanente de María hubiera sido aprobada después del segundo aniversario de su matrimonio, probablemente habría recibido una tarjeta estándar de diez años.</p>

<h2>¿Qué derechos tiene un residente condicional?</h2>

<p>Mucha gente cree erróneamente que los residentes condicionales tienen menos derechos que otros titulares de la Tarjeta Verde. Esto no es cierto.</p>

<p>Los residentes permanentes condicionales pueden:</p>

<ul>
<li>Residir permanentemente en los Estados Unidos.</li>
<li>Trabajar legalmente en los Estados Unidos.</li>
<li>Viajar internacionalmente.</li>
<li>Obtén un número de Seguro Social.</li>
<li>Comprar una propiedad.</li>
<li>Asiste a la escuela.</li>
<li>Patrocina a ciertos miembros de la familia.</li>
<li>Acumule tiempo para cumplir con los requisitos para obtener la ciudadanía estadounidense.</li>
</ul>

<p>En la mayoría de los casos, los residentes condicionales reciben el mismo trato que los residentes permanentes regulares.</p>

<p>La principal diferencia radica en que posteriormente deben presentar una solicitud para eliminar las condiciones de residencia.</p>

<h2>¿Por qué el USCIS emite tarjetas de residencia condicionales?</h2>

<p>La inmigración basada en el matrimonio es una de las vías de inmigración más utilizadas en los Estados Unidos.</p>

<p>Lamentablemente, históricamente también ha sido vulnerable al fraude.</p>

<p>El Congreso creó la residencia condicional para desalentar los matrimonios fraudulentos y brindar al USCIS una segunda oportunidad para revisar la legitimidad de la relación.</p>

<p>El gobierno quiere pruebas de que:</p>

<ul>
<li>La pareja continúa viviendo junta.</li>
<li>El matrimonio sigue siendo auténtico.</li>
<li>La relación se estableció de buena fe.</li>
<li>Los cónyuges han combinado aspectos de sus vidas.</li>
</ul>

<p>Esta revisión adicional ayuda al USCIS a identificar casos fraudulentos, al tiempo que permite que las familias legítimas permanezcan juntas.</p>

<h2>Eliminación de las condiciones de residencia</h2>

<p>El paso más importante para los residentes condicionales es presentar el Formulario I-751, Solicitud para Eliminar las Condiciones de Residencia.</p>

<p>Esta solicitud generalmente debe presentarse durante el período de 90 días inmediatamente anterior al vencimiento de la Tarjeta Verde Condicional.</p>

<p>No presentar la solicitud a tiempo puede tener graves consecuencias, incluida la pérdida del estatus de residente permanente legal.</p>

<p>Al presentar el Formulario I-751, las parejas deben aportar pruebas que demuestren que el matrimonio es real y que sigue vigente.</p>

<p>Entre las pruebas de apoyo más comunes se incluyen:</p>

<ul>
<li>Cuentas bancarias conjuntas.</li>
<li>Declaraciones de impuestos conjuntas.</li>
<li>Documentos hipotecarios.</li>
<li>Contratos de arrendamiento.</li>
<li>facturas de servicios públicos.</li>
<li>pólizas de seguro.</li>
<li>Certificados de nacimiento de los niños.</li>
<li>Fotografías juntos.</li>
<li>Registros de viajes.</li>
<li>Declaraciones juradas de familiares y amigos.</li>
</ul>

<p>El USCIS revisa las pruebas y determina si deben eliminarse las condiciones.</p>

<p>Si se aprueba, el inmigrante recibe una tarjeta de residencia permanente (Green Card) estándar con una validez de diez años.</p>

<h2>Caso práctico: Eliminación exitosa de afecciones</h2>

<p>Un cliente acudió a nuestra oficina tras recibir una Solicitud de Evidencia (RFE, por sus siglas en inglés) del USCIS en relación con una petición I-751 pendiente.</p>

<p>La pareja llevaba varios años casada, pero no había mantenido una documentación financiera conjunta exhaustiva porque preferían tener cuentas bancarias separadas.</p>

<p>El USCIS cuestionó si el matrimonio era de buena fe.</p>

<p>Nuestra oficina ayudó a recopilar pruebas adicionales, entre ellas:</p>

<ul>
<li>Historiales conjuntos de seguro médico.</li>
<li>Itinerarios de viaje compartidos.</li>
<li>Fotografías familiares.</li>
<li>Declaraciones juradas de familiares.</li>
<li>Pruebas de gastos domésticos compartidos.</li>
</ul>

<p>Tras presentar la documentación complementaria, el USCIS aprobó la petición y eliminó las condiciones de residencia.</p>

<p>Este ejemplo demuestra por qué una preparación y documentación adecuadas son fundamentales.</p>

<h2>¿Qué sucede si el matrimonio termina?</h2>

<p>Una de las preocupaciones más comunes tiene que ver con el divorcio antes de presentar el Formulario I-751.</p>

<p>Afortunadamente, el divorcio no impide automáticamente que un residente condicional obtenga la tarjeta de residencia permanente (Green Card).</p>

<p>El USCIS reconoce que los matrimonios legítimos a veces fracasan.</p>

<p>En estas situaciones, un inmigrante puede reunir los requisitos para una exención del requisito de presentación conjunta de la solicitud.</p>

<p>El solicitante debe demostrar que:</p>

<ul>
<li>El matrimonio se contrajo de buena fe.</li>
<li>La relación era genuina cuando comenzó.</li>
<li>El matrimonio terminó por razones legítimas.</li>
</ul>

<p>Las pruebas pueden incluir:</p>

<ul>
<li>Registros matrimoniales.</li>
<li>Documentos financieros conjuntos.</li>
<li>Fotografías a lo largo de la relación.</li>
<li>Registros de asesoramiento.</li>
<li>Correspondencia entre cónyuges.</li>
</ul>

<p>Cada caso es único y el asesoramiento legal puede ser de gran valor.</p>

<h2>Caso práctico: El divorcio no siempre implica la deportación</h2>

<p>Consideremos un ejemplo hipotético.</p>

<p>David se casó con una ciudadana estadounidense y obtuvo la residencia permanente condicional. Dieciocho meses después, el matrimonio terminó en divorcio.</p>

<p>David temía perder inmediatamente su estatus migratorio.</p>

<p>Sin embargo, tenía pruebas sustanciales que demostraban que el matrimonio era genuino:</p>

<ul>
<li>Impuestos conjuntos.</li>
<li>Acuerdos de arrendamiento conjunto.</li>
<li>Cobertura de seguro compartida.</li>
<li>Fotografías familiares.</li>
<li>Declaraciones de amigos y familiares.</li>
</ul>

<p>El USCIS finalmente aprobó su solicitud de exención y le otorgó una tarjeta de residencia permanente (Green Card) con una validez de diez años.</p>

<p>El factor clave era demostrar que el matrimonio se había contraído de buena fe y no con fines migratorios.</p>

<h2>Exenciones disponibles para residentes condicionales</h2>

<p>Existen varias exenciones que permiten a una persona presentar el Formulario I-751 sin cónyuge.</p>

<p>Estos incluyen:</p>

<h3>Renuncia de buena fe al matrimonio</h3>

<p>Disponible cuando el matrimonio fue legítimo pero terminó en divorcio o anulación.</p>

<h3>Exención de responsabilidad por abuso o agresión</h3>

<p>Disponible para víctimas de violencia doméstica, abuso o crueldad extrema cometida por el cónyuge ciudadano estadounidense o residente permanente.</p>

<h3>Exención por dificultades extremas</h3>

<p>Disponible cuando la expulsión de los Estados Unidos suponga una dificultad extrema para el inmigrante.</p>

<p>Cada exención requiere pruebas específicas y un análisis legal.</p>

<h2>Errores comunes que pueden causar problemas</h2>

<p>Muchas complicaciones en materia de inmigración surgen porque los solicitantes no comprenden el proceso de residencia condicional.</p>

<p>Los errores comunes incluyen:</p>

<h3>No cumplir con el plazo de presentación</h3>

<p>Esperar demasiado tiempo puede resultar en la pérdida del estatus y en un proceso de expulsión.</p>

<h3>Documentación insuficiente</h3>

<p>La presentación de pruebas mínimas suele dar lugar a solicitudes de información adicional o a entrevistas.</p>

<h3>Ignorar las notificaciones del USCIS</h3>

<p>La falta de respuesta a la correspondencia del USCIS puede conllevar la denegación de la solicitud.</p>

<h3>Viajar sin la documentación adecuada</h3>

<p>Los residentes condicionales deben asegurarse de mantener una documentación válida durante sus viajes internacionales.</p>

<h3>Suponiendo que el divorcio pone fin a la elegibilidad para inmigrar</h3>

<p>Muchas personas abandonan sus casos innecesariamente porque creen erróneamente que el divorcio las descalifica automáticamente.</p>

<h2>Entrevistas de USCIS para peticiones I-751</h2>

<p>El USCIS puede requerir una entrevista durante el proceso de eliminación de las condiciones.</p>

<p>Durante la entrevista, los agentes pueden hacer preguntas sobre:</p>

<ul>
<li>Rutinas diarias.</li>
<li>Disposiciones de vivienda.</li>
<li>Relaciones familiares.</li>
<li>Finanzas compartidas.</li>
<li>Planes de futuro como pareja.</li>
</ul>

<p>El objetivo es verificar que el matrimonio sigue siendo genuino.</p>

<p>Las parejas que mantienen una documentación coherente y dan respuestas veraces suelen superar con éxito el proceso de entrevista.</p>

<h2>¿Pueden los residentes condicionales convertirse en ciudadanos estadounidenses?</h2>

<p>Sí.</p>

<p>El tiempo transcurrido como residente condicional cuenta para la elegibilidad para la naturalización.</p>

<p>En el caso de los cónyuges de ciudadanos estadounidenses, la elegibilidad puede comenzar después de tres años de residencia permanente si se cumplen todos los requisitos.</p>

<p>Para la mayoría de los demás residentes permanentes, la elegibilidad generalmente comienza después de cinco años.</p>

<p>Un residente condicional no pierde el tiempo ya acumulado simplemente porque la Tarjeta Verde es condicional.</p>

<h2>¿Cuánto tiempo dura el proceso I-751?</h2>

<p>Los tiempos de procesamiento varían significativamente.</p>

<p>Muchos solicitantes actualmente experimentan largos períodos de espera debido a la acumulación de solicitudes en el USCIS.</p>

<p>Afortunadamente, presentar el Formulario I-751 generalmente extiende el estatus de residente permanente mientras la petición permanece pendiente.</p>

<p>El USCIS suele emitir avisos de prórroga que permiten a los solicitantes seguir trabajando y viajando mientras esperan una decisión.</p>

<p>Dado que los tiempos de procesamiento cambian con frecuencia, los solicitantes deben mantenerse informados y conservar copias de toda la correspondencia del USCIS.</p>

<h2>Por qué es importante la representación legal</h2>

<p>El proceso de eliminación de condiciones puede parecer sencillo, pero incluso los errores pequeños pueden generar retrasos y complicaciones importantes.</p>

<p>Un abogado de inmigración con experiencia puede:</p>

<ul>
<li>Evaluar la elegibilidad.</li>
<li>Identifica posibles señales de alerta.</li>
<li>Organice las pruebas que lo respalden.</li>
<li>Responder a las solicitudes de pruebas.</li>
<li>Prepare a los clientes para las entrevistas.</li>
<li>Tramitar las solicitudes de exención.</li>
<li>Defender a los clientes en los procedimientos de expulsión, si fuera necesario.</li>
</ul>

<p>Una asesoría legal adecuada suele marcar la diferencia entre la aprobación y unas dificultades migratorias prolongadas.</p>

<h2>Consideraciones finales sobre las tarjetas de residencia condicionales</h2>

<p>La Tarjeta Verde Condicional no es una forma inferior de residencia permanente. Es simplemente un paso adicional diseñado para verificar la legitimidad de ciertos casos de inmigración, en particular las Tarjetas Verdes basadas en el matrimonio.</p>

<p>La responsabilidad más importante para los residentes condicionales es presentar el Formulario I-751 a tiempo y proporcionar pruebas sólidas que demuestren que el matrimonio se contrajo de buena fe.</p>

<p>Ya sea que esté felizmente casado, enfrentando un divorcio, respondiendo a una solicitud de pruebas o preparándose para una entrevista con el USCIS, comprender sus derechos y obligaciones es fundamental.</p>

<p>En el bufete de abogados de Todd Becraft, ayudamos a personas y familias a afrontar cada etapa del proceso de inmigración, incluyendo las tarjetas de residencia condicionales, la inmigración por matrimonio, la eliminación de condiciones, la renovación de la tarjeta de residencia, las solicitudes de ciudadanía, las exenciones y la defensa contra la deportación.</p>

<p>Si tiene preguntas sobre su Tarjeta Verde Condicional o necesita ayuda con el Formulario I-751, nuestro experimentado equipo de inmigración está listo para ayudarle a proteger su futuro en los Estados Unidos.</p>

<p>Contáctenos al 213.388.1821 o a tb@becraftlaw.com</p>
`},{slug:"que-preguntas-suelen-hacer-a-los-padres-en-una-entrevista-para-la-tarjeta-de-residencia",title:"¿Qué preguntas suelen hacer a los padres en una entrevista para la tarjeta de residencia?",excerpt:"Una guía completa con ejemplos reales, estudios de caso y consejos para prepararse para la entrevista.",date:"2 de junio de 2026",author:"Todd Becraft",content:`
<h2>Comprender el proceso de entrevista para la Tarjeta Verde para padres</h2>

<p>Para muchas familias inmigrantes, uno de los momentos más significativos del proceso migratorio es ayudar a uno de sus padres a obtener la residencia permanente legal en los Estados Unidos. Ya sea que patrocines a tu madre, a tu padre o a ambos, recibir una notificación de entrevista del Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) puede generar tanto entusiasmo como ansiedad.</p>

<p>Una de las preguntas más frecuentes que recibimos en el bufete de abogados de Todd Becraft es:</p>

<p><strong>"¿Qué preguntas suelen hacer a los padres en la entrevista para la tarjeta de residencia?"</strong></p>

<p>La respuesta depende de las circunstancias de cada caso, pero en la mayoría de los casos de residencia permanente basada en la paternidad, la entrevista está diseñada para verificar la elegibilidad, confirmar la relación paterno-filial, revisar el historial migratorio y determinar si el solicitante es admisible en los Estados Unidos.</p>

<p>A diferencia de las entrevistas para la tarjeta de residencia permanente basadas en el matrimonio, el USCIS generalmente no investiga si la relación es legítima. En cambio, el funcionario se centra en confirmar los hechos, revisar la documentación y asegurarse de que el solicitante cumpla con los requisitos para la residencia permanente según la ley de inmigración estadounidense.</p>

<p>Comprender las preguntas que se pueden formular y prepararse adecuadamente puede facilitar mucho el proceso.</p>

<h2>Por qué son importantes las entrevistas para la Tarjeta Verde para padres</h2>

<p>Si bien algunos casos de inmigración basados ​​en lazos familiares pueden aprobarse sin entrevista, muchos solicitantes aún deben asistir a una.</p>

<p>El funcionario del USCIS que realice la entrevista revisará lo siguiente:</p>

<ul>
<li>documentos de identidad</li>
<li>certificados de nacimiento</li>
<li>Relaciones familiares</li>
<li>Historia de la inmigración</li>
<li>patrocinio financiero</li>
<li>Resultados del examen médico</li>
<li>Antecedentes penales</li>
<li>Solicitudes de visa anteriores</li>
<li>Registros de viajes</li>
</ul>

<p>El objetivo es garantizar que toda la información presentada en la solicitud sea precisa y veraz.</p>

<p>Para los padres que buscan la residencia permanente a través de un hijo o hija ciudadano estadounidense, la preparación puede aumentar significativamente la confianza y reducir el estrés.</p>

<h2>¿Quién puede patrocinar a un padre para obtener la tarjeta de residencia permanente (Green Card)?</h2>

<p>Según la ley de inmigración estadounidense, solo un ciudadano estadounidense mayor de 21 años puede solicitar la residencia para uno de sus padres.</p>

<p>Los padres se clasifican como familiares directos, lo que ofrece ventajas significativas.</p>

<p>A diferencia de muchas otras categorías de inmigración familiar:</p>

<ul>
<li>No se aplica ninguna cuota anual de visados.</li>
<li>No hay lista de espera en función de la disponibilidad de visados.</li>
<li>A menudo es posible obtener tiempos de procesamiento más rápidos.</li>
<li>Las tarjetas de residencia permanente pueden estar disponibles inmediatamente después de su aprobación.</li>
</ul>

<p>Debido a estos beneficios, miles de ciudadanos estadounidenses presentan cada año solicitudes de residencia permanente para sus padres.</p>

<h2>¿Qué sucede durante la entrevista?</h2>

<p>La mayoría de las entrevistas comienzan con un funcionario del USCIS que toma juramento al solicitante.</p>

<p>A continuación, el funcionario verificará los documentos de identificación y revisará la información ya presentada en los formularios I-130 e I-485.</p>

<p>La entrevista suele durar entre 15 y 45 minutos, aunque los casos complejos pueden requerir más tiempo.</p>

<p>Las preguntas suelen clasificarse en varias categorías:</p>

<ul>
<li>Información personal</li>
<li>Relaciones familiares</li>
<li>Historia de la inmigración</li>
<li>Historia de los viajes</li>
<li>Historial laboral</li>
<li>Apoyo financiero</li>
<li>Antecedentes penales</li>
<li>Preguntas de seguridad</li>
</ul>

<p>Analicemos cada categoría en detalle.</p>

<h2>Preguntas sobre información personal</h2>

<p>Los funcionarios del USCIS suelen comenzar con preguntas básicas sobre la identidad.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>¿Cuál es su nombre legal completo?</li>
<li>¿Alguna vez has usado otro nombre?</li>
<li>¿Cuál es tu fecha de nacimiento?</li>
<li>¿Dónde naciste?</li>
<li>¿Cuál es su dirección actual?</li>
<li>¿Cuál es su número de teléfono?</li>
</ul>

<p>Aunque estas preguntas parezcan sencillas, los agentes las utilizan para verificar la identidad y asegurarse de que la información coincide con la solicitud.</p>

<h3>Caso práctico n.º 1: La dirección olvidada</h3>

<p>Una madre mexicana asistió a su entrevista para obtener la tarjeta de residencia permanente después de vivir con su hija durante casi tres años.</p>

<p>Cuando se le preguntó por su dirección actual, dio por error la dirección de su anterior apartamento en lugar de la de la casa de su hija, donde reside actualmente.</p>

<p>El agente se percató de la discrepancia de inmediato porque en su solicitud figuraba una dirección diferente.</p>

<p>Afortunadamente, explicó rápidamente el error y aportó la documentación que demostraba que se había mudado meses antes.</p>

<p>La entrevista continuó con éxito.</p>

<p>Este ejemplo pone de manifiesto por qué los solicitantes deben revisar cuidadosamente su documentación antes de asistir a la entrevista.</p>

<h2>Preguntas sobre el niño ciudadano estadounidense</h2>

<p>El funcionario normalmente hará preguntas sobre el hijo o la hija que presentó la petición.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>¿Cuál es el nombre completo de su hijo/a?</li>
<li>¿Cuándo nació su hijo?</li>
<li>¿Dónde vive su hijo?</li>
<li>¿A qué se dedica su hijo/a?</li>
<li>¿Está casado su hijo?</li>
<li>¿Cuántos hijos tiene tu hijo?</li>
<li>¿Cuándo obtuvo su hijo la ciudadanía estadounidense?</li>
</ul>

<p>Estas preguntas ayudan a verificar la relación entre padres e hijos.</p>

<h3>Caso práctico n.° 2: Confusión con la fecha de naturalización</h3>

<p>A un padre salvadoreño le preguntaron cuándo su hijo se convirtió en ciudadano estadounidense.</p>

<p>Afirmó erróneamente que su hijo se nacionalizó en 2015.</p>

<p>El expediente del USCIS mostraba que el hijo se había naturalizado en 2018.</p>

<p>El agente formuló preguntas adicionales para aclarar la discrepancia.</p>

<p>Afortunadamente, el padre explicó que había confundido la fecha de naturalización con el año en que su hijo recibió su tarjeta de residencia permanente.</p>

<p>Dado que la explicación era razonable y coherente con las pruebas, la solicitud fue aprobada.</p>

<p>Esto demuestra la importancia de repasar los principales hitos familiares antes de la entrevista.</p>

<h2>Preguntas sobre las relaciones familiares</h2>

<p>El agente podrá hacer preguntas detalladas sobre los miembros de la familia.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>¿Cuántos hijos tienes?</li>
<li>¿Cómo se llaman sus hijos?</li>
<li>¿Está casado?</li>
<li>¿Has estado casado/a antes?</li>
<li>¿Tienes nietos?</li>
<li>¿Dónde viven sus hijos?</li>
</ul>

<p>El agente busca coherencia entre el testimonio y los registros oficiales.</p>

<h3>Caso práctico n.° 3: Niño desaparecido en la solicitud</h3>

<p>Un solicitante olvidó incluir a un hijo adulto que vive en el extranjero al completar la documentación de inmigración.</p>

<p>Durante la entrevista, el agente le preguntó cuántos hijos tenía.</p>

<p>Ella respondió que tenía cuatro hijos.</p>

<p>La solicitud solo enumeraba tres.</p>

<p>Debido a la inconsistencia, el USCIS emitió una solicitud de pruebas y retrasó el caso hasta que se corrigiera la información faltante.</p>

<p>Finalmente se aprobó la tarjeta de residencia, pero el error añadió meses al proceso.</p>

<h2>Preguntas sobre la historia de la inmigración</h2>

<p>El historial migratorio es una de las partes más importantes de la entrevista.</p>

<p>Las preguntas más frecuentes incluyen:</p>

<ul>
<li>¿Cuándo entraste por primera vez a los Estados Unidos?</li>
<li>¿Qué tipo de visado utilizó?</li>
<li>¿Alguna vez te has quedado más tiempo del permitido por tu visa?</li>
<li>¿Alguna vez has trabajado sin autorización?</li>
<li>¿Alguna vez te han deportado?</li>
<li>¿Alguna vez te has visto involucrado en un proceso de deportación?</li>
<li>¿Has solicitado alguna vez beneficios de inmigración?</li>
</ul>

<p>La honestidad es absolutamente fundamental.</p>

<h3>Caso práctico n.° 4: Permanencia ilegal en el país tras un desfase de visado que no impidió su aprobación.</h3>

<p>Una madre entró en Estados Unidos con un visado de turista y permaneció en el país durante varios años más de lo permitido.</p>

<p>Cuando el USCIS le preguntó sobre su estancia ilegal, ella respondió con sinceridad y explicó las circunstancias.</p>

<p>Dado que era madre de un ciudadano estadounidense y cumplía con los demás requisitos para el ajuste de estatus, el hecho de haber permanecido en el país más tiempo del permitido no impidió automáticamente la aprobación.</p>

<p>El agente agradeció la respuesta sincera y el caso fue aprobado.</p>

<p>Muchos solicitantes creen erróneamente que admitir una estancia ilegal garantiza la denegación de la solicitud.</p>

<p>En realidad, la elegibilidad depende de las circunstancias específicas de cada caso.</p>

<h2>Preguntas sobre la historia de los viajes</h2>

<p>Los funcionarios del USCIS suelen revisar los registros de viajes internacionales.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>¿Cuándo fue la última vez que saliste de Estados Unidos?</li>
<li>¿Qué países has visitado?</li>
<li>¿Cuánto tiempo estuviste fuera del país?</li>
<li>¿Ha viajado al extranjero desde que presentó su solicitud?</li>
</ul>

<p>Los solicitantes deben revisar sus pasaportes y registros de viaje antes de asistir a la entrevista.</p>

<h3>Caso práctico n.º 5: Fechas de viaje que no coincidían</h3>

<p>Durante la entrevista, un padre no pudo recordar las fechas exactas del viaje.</p>

<p>El agente comparó sus respuestas con los sellos del pasaporte y descubrió inconsistencias.</p>

<p>Aunque no hubo fraude de por medio, el agente dedicó tiempo adicional a verificar la información.</p>

<p>Contar con una cronología sencilla del historial de viajes podría haber evitado complicaciones innecesarias.</p>

<h2>Preguntas sobre el empleo</h2>

<p>Algunos agentes hacen preguntas sobre el empleo actual o anterior.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>¿Actualmente trabajas?</li>
<li>¿Dónde trabajas?</li>
<li>¿Qué tipo de trabajo realizas?</li>
<li>¿Has trabajado en Estados Unidos?</li>
</ul>

<p>A los padres jubilados se les puede preguntar sobre pensiones, prestaciones de jubilación o trabajos anteriores.</p>

<h2>Preguntas sobre el apoyo financiero</h2>

<p>Los casos de inmigración basados ​​en lazos familiares requieren patrocinio financiero.</p>

<p>El agente puede preguntar:</p>

<ul>
<li>¿Quién te apoya económicamente?</li>
<li>¿Tu hijo/a te ayuda a pagar los gastos?</li>
<li>¿Recibe usted una pensión de jubilación?</li>
<li>¿Es usted propietario de alguna vivienda?</li>
<li>¿Recibe usted ingresos de otro país?</li>
</ul>

<p>El funcionario también podrá revisar la Declaración Jurada de Apoyo presentada por el niño patrocinador.</p>

<h3>Caso práctico n.° 6: Revisión conjunta del patrocinador</h3>

<p>La hija, ciudadana estadounidense, no ganaba lo suficiente como para mantener a su padre por sí sola.</p>

<p>La familia utilizó un patrocinador conjunto.</p>

<p>Durante la entrevista, el agente formuló preguntas básicas sobre la relación del copatrocinador con la familia y revisó los documentos financieros.</p>

<p>Como la documentación estaba completa, el funcionario aprobó el caso sin problemas.</p>

<h2>Preguntas sobre antecedentes penales</h2>

<p>El USCIS revisa minuciosamente los antecedentes penales.</p>

<p>Las preguntas más frecuentes incluyen:</p>

<ul>
<li>¿Alguna vez te han arrestado?</li>
<li>¿Alguna vez te han acusado de un delito?</li>
<li>¿Alguna vez ha sido condenado?</li>
<li>¿Alguna vez has estado en la cárcel?</li>
</ul>

<p>Incluso los incidentes menores deben ser divulgados.</p>

<h3>Caso práctico n.° 7: El antiguo arresto</h3>

<p>Un padre fue arrestado hace más de 30 años por un delito menor que posteriormente fue desestimado.</p>

<p>Como creía que no era importante, no lo mencionó en la solicitud.</p>

<p>El USCIS descubrió el arresto durante las verificaciones de antecedentes.</p>

<p>Esta omisión generó dudas sobre la credibilidad.</p>

<p>Aunque el caso finalmente fue aprobado tras la presentación de la documentación, el proceso se retrasó considerablemente.</p>

<p>La lección es sencilla: revele toda la información y deje que su abogado de inmigración determine qué es legalmente relevante.</p>

<h2>Cuestiones de seguridad y admisibilidad</h2>

<p>A todos los solicitantes se les formula una serie de preguntas relacionadas con la seguridad.</p>

<p>Algunos ejemplos son:</p>

<ul>
<li>¿Alguna vez has afirmado ser ciudadano estadounidense?</li>
<li>¿Alguna vez has votado en unas elecciones estadounidenses?</li>
<li>¿Alguna vez has cometido fraude migratorio?</li>
<li>¿Alguna vez has participado en actividades terroristas?</li>
<li>¿Alguna vez has pertenecido a una organización que promueva la violencia?</li>
</ul>

<p>La mayoría de los solicitantes responden "no" a estas preguntas.</p>

<p>Aunque puedan parecer inusuales, son una parte estándar de casi todas las entrevistas para obtener la tarjeta de residencia permanente.</p>

<h2>Preguntas del examen médico</h2>

<p>El examen médico de inmigración es otro requisito importante.</p>

<p>El agente puede preguntar:</p>

<ul>
<li>¿Completaste tu examen médico?</li>
<li>¿Tiene sus vacunas al día?</li>
<li>¿Ha presentado todos los formularios médicos requeridos?</li>
</ul>

<p>Los problemas con la documentación médica pueden retrasar la aprobación.</p>

<h2>¿Qué documentos deben traer los padres?</h2>

<p>Los solicitantes deberán traer los originales siempre que sea posible.</p>

<p>Entre los documentos recomendados se incluyen:</p>

<ul>
<li>Pasaporte</li>
<li>Documento de identificación emitido por el gobierno</li>
<li>Aviso de entrevista</li>
<li>Certificado de nacimiento</li>
<li>Certificado de matrimonio</li>
<li>Registros de divorcio</li>
<li>Registros de inmigración</li>
<li>Resultados del examen médico</li>
<li>Documentos de apoyo financiero</li>
<li>Declaraciones de impuestos, si se solicitan</li>
<li>Registros de viajes</li>
<li>Aprobaciones de inmigración previas</li>
</ul>

<p>La organización puede marcar una diferencia significativa en el buen desarrollo de la entrevista.</p>

<h2>Cómo prepararse para la entrevista de la Tarjeta Verde para padres</h2>

<p>La preparación es uno de los factores más importantes para lograr un resultado exitoso.</p>

<p>Antes de la entrevista:</p>

<ul>
<li>Revise todos los formularios de inmigración presentados.</li>
<li>Verifique las fechas importantes.</li>
<li>Revisar el historial de viajes.</li>
<li>Reúna los documentos justificativos.</li>
<li>Comente cualquier problema migratorio previo con su abogado.</li>
<li>Practica respondiendo preguntas comunes.</li>
<li>Llega temprano.</li>
<li>Vístase de forma profesional.</li>
<li>Mantén la calma y el respeto.</li>
<li>Responda con sinceridad.</li>
</ul>

<h2>Señales de alerta que pueden desencadenar un mayor escrutinio</h2>

<p>Ciertas cuestiones pueden dar lugar a preguntas adicionales.</p>

<p>Estos incluyen:</p>

<ul>
<li>Infracciones migratorias previas</li>
<li>Declaraciones falsas en las solicitudes</li>
<li>Antecedentes penales</li>
<li>Documentos faltantes</li>
<li>Respuestas inconsistentes</li>
<li>Múltiples entradas a los Estados Unidos</li>
<li>Denegaciones de visa anteriores</li>
</ul>

<p>Contar con representación legal experimentada puede ser de gran valor cuando surgen estos problemas.</p>

<h2>Reflexiones finales</h2>

<p>Para la mayoría de los padres, la entrevista para la tarjeta de residencia es mucho menos intimidante de lo que esperan. Los funcionarios del USCIS generalmente se centran en confirmar la información, revisar la elegibilidad y asegurarse de que la relación paterno-filial esté debidamente documentada.</p>

<p>Las preguntas más comunes se refieren a la identidad, las relaciones familiares, el historial migratorio, el historial de viajes, el patrocinio financiero y los antecedentes personales.</p>

<p>Los solicitantes que se preparan minuciosamente, revisan cuidadosamente su documentación y responden a las preguntas con sinceridad suelen estar en una excelente posición para obtener un resultado exitoso.</p>

<p>Cada caso de inmigración es único, e incluso los asuntos aparentemente menores pueden tener importantes consecuencias legales. Si usted o un ser querido se está preparando para una entrevista para la tarjeta de residencia permanente (green card) para padres, contar con asesoría legal experta puede marcar la diferencia.</p>

<h2>El bufete de abogados de Todd Becraft está aquí para ayudarle.</h2>

<p>El bufete de abogados de Todd Becraft ha ayudado a familias de todo Los Ángeles y el sur de California a desenvolverse en el complejo proceso de inmigración, que incluye peticiones basadas en lazos familiares, solicitudes de ajuste de estatus, entrevistas para la tarjeta de residencia, casos de naturalización, defensa contra la deportación, solicitudes de asilo y exenciones.</p>

<p>Si tiene preguntas sobre cómo patrocinar a un padre para obtener una tarjeta de residencia o sobre cómo prepararse para una entrevista con el USCIS, comuníquese hoy mismo con el bufete de abogados de Todd Becraft, 213-388-1821, para una consulta confidencial.</p>

<p><strong>Cada paso a tu lado.</strong></p>
    `}];function Zf(){return t.jsxs(t.Fragment,{children:[t.jsx(Ae,{title:"Blog de Inmigración | Bufete de Abogados de Todd Becraft",description:"Noticias, consejos y actualizaciones sobre inmigración de los expertos en derecho de inmigración de Los Ángeles.",canonical:"/es/blog",schema:{"@context":"https://schema.org","@type":"Blog",name:"Blog de Inmigración de Todd Becraft",description:"Noticias, consejos y actualizaciones sobre inmigración"}}),t.jsx("section",{className:"bg-gradient-to-b from-[#1B2A4A] to-[#243554] text-white py-20",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-3xl",children:[t.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6"}),t.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight",children:"Blog de Inmigración"}),t.jsx("p",{className:"text-xl text-white/90 leading-relaxed",children:"Noticias, consejos y actualizaciones sobre inmigración de nuestros expertos en derecho de inmigración."})]})})}),t.jsx("section",{className:"py-20 bg-white",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Iu.map(o=>t.jsx(Y,{to:`/es/blog/${o.slug}`,className:"group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-3",children:[t.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})}),t.jsx("time",{children:o.date})]}),t.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3 group-hover:text-[#C5A572] transition-colors",children:o.title}),t.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:o.excerpt}),t.jsxs("div",{className:"flex items-center text-[#C5A572] font-medium group-hover:gap-2 transition-all",children:[t.jsx("span",{children:"Leer más"}),t.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})]})]})},o.slug))})})}),t.jsx("section",{className:"py-16 bg-gradient-to-b from-gray-50 to-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6 mx-auto"}),t.jsx("h2",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"¿Tiene preguntas sobre inmigración?"}),t.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Comuníquese con nosotros para una consulta confidencial."}),t.jsx(Y,{to:"/es/contactenos",className:"inline-block bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39560] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C5A572]/30",children:"Programe una Consulta"})]})})]})}function eg(){const{slug:o}=Zt(),l=Iu.find(c=>c.slug===o);return l?t.jsxs(t.Fragment,{children:[t.jsx(Ae,{title:`${l.title} | Bufete de Abogados de Todd Becraft`,description:l.excerpt,canonical:`/es/blog/${l.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:l.title,author:{"@type":"Person",name:l.author},datePublished:l.date,description:l.excerpt}}),t.jsx("nav",{className:"bg-gray-50 border-b border-gray-200",children:t.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[t.jsx(Y,{to:"/es",className:"hover:text-[#C5A572] transition-colors",children:"Inicio"}),t.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})}),t.jsx(Y,{to:"/es/blog",className:"hover:text-[#C5A572] transition-colors",children:"Blog"}),t.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})}),t.jsx("span",{className:"text-gray-900",children:l.title})]})})}),t.jsx("article",{className:"py-12 bg-white",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6"}),t.jsx("h1",{className:"text-4xl sm:text-5xl font-serif font-bold text-[#1B2A4A] mb-6 tracking-tight leading-tight",children:l.title}),t.jsxs("div",{className:"flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})}),t.jsx("span",{children:l.author})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})}),t.jsx("time",{children:l.date})]})]}),t.jsx("div",{className:`prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#C5A572] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1B2A4A] prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700`,dangerouslySetInnerHTML:{__html:l.content}})]})}),t.jsx("section",{className:"py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200",children:t.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"bg-gradient-to-br from-[#1B2A4A] to-[#243554] rounded-2xl p-8 sm:p-12 text-center text-white",children:[t.jsx("h2",{className:"text-3xl font-serif font-bold mb-4",children:"¿Necesita ayuda con su caso de inmigración?"}),t.jsx("p",{className:"text-xl text-white/90 mb-8 leading-relaxed",children:"Comuníquese con el Bufete de Abogados de Todd Becraft para una consulta confidencial."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsx(Y,{to:"/es/contactenos",className:"inline-block bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39560] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C5A572]/30",children:"Programe una Consulta"}),t.jsx("a",{href:"tel:213-388-1821",className:"inline-block bg-white text-[#1B2A4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",children:"Llame al 213-388-1821"})]})]})})}),t.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:t.jsxs(Y,{to:"/es/blog",className:"inline-flex items-center gap-2 text-[#C5A572] hover:gap-3 transition-all font-medium",children:[t.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),t.jsx("span",{children:"Volver al Blog"})]})})]}):t.jsx("div",{className:"min-h-screen flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Artículo no encontrado"}),t.jsx(Y,{to:"/es/blog",className:"text-[#C5A572] hover:underline",children:"Volver al Blog"})]})})}function ag(){return t.jsx(Es,{children:t.jsx(cf,{basename:"",children:t.jsxs("div",{className:"min-h-screen flex flex-col",children:[t.jsx(hf,{}),t.jsx("main",{className:"flex-1",children:t.jsxs(af,{children:[t.jsx(xe,{path:"/",element:t.jsx(eu,{})}),t.jsx(xe,{path:"/about",element:t.jsx(jf,{})}),t.jsx(xe,{path:"/services",element:t.jsx(Af,{})}),t.jsx(xe,{path:"/services/:area",element:t.jsx(kf,{})}),t.jsx(xe,{path:"/resources",element:t.jsx(Uf,{})}),t.jsx(xe,{path:"/resources/:slug",element:t.jsx(If,{})}),t.jsx(xe,{path:"/success-stories",element:t.jsx(qf,{})}),t.jsx(xe,{path:"/contact",element:t.jsx(Lf,{})}),t.jsx(xe,{path:"/blog",element:t.jsx(Df,{})}),t.jsx(xe,{path:"/blog/:slug",element:t.jsx(Pf,{})}),t.jsx(xe,{path:"/es",element:t.jsx(Mf,{})}),t.jsx(xe,{path:"/es/servicios",element:t.jsx(Of,{})}),t.jsx(xe,{path:"/es/servicios/:area",element:t.jsx(_f,{})}),t.jsx(xe,{path:"/es/recursos",element:t.jsx(Hf,{})}),t.jsx(xe,{path:"/es/recursos/:slug",element:t.jsx(Vf,{})}),t.jsx(xe,{path:"/es/sobre-nosotros",element:t.jsx(Kf,{})}),t.jsx(xe,{path:"/es/contactenos",element:t.jsx(Xf,{})}),t.jsx(xe,{path:"/es/historias-de-exito",element:t.jsx(Yf,{})}),t.jsx(xe,{path:"/es/blog",element:t.jsx(Zf,{})}),t.jsx(xe,{path:"/es/blog/:slug",element:t.jsx(eg,{})}),t.jsx(xe,{path:"*",element:t.jsx(eu,{})})]})}),t.jsx(ff,{})]})})})}Rp.createRoot(document.getElementById("root")).render(t.jsx(T.StrictMode,{children:t.jsx(Es,{children:t.jsx(ag,{})})}));
