var Np=Object.defineProperty;var Ep=(o,l,c)=>l in o?Np(o,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[l]=c;var Dt=(o,l,c)=>Ep(o,typeof l!="symbol"?l+"":l,c);function Up(o,l){for(var c=0;c<l.length;c++){const u=l[c];if(typeof u!="string"&&!Array.isArray(u)){for(const p in u)if(p!=="default"&&!(p in o)){const m=Object.getOwnPropertyDescriptor(u,p);m&&Object.defineProperty(o,p,m.get?m:{enumerable:!0,get:()=>u[p]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();function cr(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var rs={exports:{}},Fi={},os={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Ip(){if(kd)return K;kd=1;var o=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),N=Symbol.iterator;function B(w){return w===null||typeof w!="object"?null:(w=N&&w[N]||w["@@iterator"],typeof w=="function"?w:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,_={};function L(w,E,Q){this.props=w,this.context=E,this.refs=_,this.updater=Q||G}L.prototype.isReactComponent={},L.prototype.setState=function(w,E){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,E,"setState")},L.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function ie(){}ie.prototype=L.prototype;function se(w,E,Q){this.props=w,this.context=E,this.refs=_,this.updater=Q||G}var ne=se.prototype=new ie;ne.constructor=se,J(ne,L.prototype),ne.isPureReactComponent=!0;var le=Array.isArray,Ne=Object.prototype.hasOwnProperty,Be={current:null},Fe={key:!0,ref:!0,__self:!0,__source:!0};function tt(w,E,Q){var X,ee={},te=null,ce=null;if(E!=null)for(X in E.ref!==void 0&&(ce=E.ref),E.key!==void 0&&(te=""+E.key),E)Ne.call(E,X)&&!Fe.hasOwnProperty(X)&&(ee[X]=E[X]);var re=arguments.length-2;if(re===1)ee.children=Q;else if(1<re){for(var pe=Array(re),Qe=0;Qe<re;Qe++)pe[Qe]=arguments[Qe+2];ee.children=pe}if(w&&w.defaultProps)for(X in re=w.defaultProps,re)ee[X]===void 0&&(ee[X]=re[X]);return{$$typeof:o,type:w,key:te,ref:ce,props:ee,_owner:Be.current}}function qt(w,E){return{$$typeof:o,type:w.type,key:E,ref:w.ref,props:w.props,_owner:w._owner}}function Ct(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function la(w){var E={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Q){return E[Q]})}var vt=/\/+/g;function Je(w,E){return typeof w=="object"&&w!==null&&w.key!=null?la(""+w.key):E.toString(36)}function ct(w,E,Q,X,ee){var te=typeof w;(te==="undefined"||te==="boolean")&&(w=null);var ce=!1;if(w===null)ce=!0;else switch(te){case"string":case"number":ce=!0;break;case"object":switch(w.$$typeof){case o:case l:ce=!0}}if(ce)return ce=w,ee=ee(ce),w=X===""?"."+Je(ce,0):X,le(ee)?(Q="",w!=null&&(Q=w.replace(vt,"$&/")+"/"),ct(ee,E,Q,"",function(Qe){return Qe})):ee!=null&&(Ct(ee)&&(ee=qt(ee,Q+(!ee.key||ce&&ce.key===ee.key?"":(""+ee.key).replace(vt,"$&/")+"/")+w)),E.push(ee)),1;if(ce=0,X=X===""?".":X+":",le(w))for(var re=0;re<w.length;re++){te=w[re];var pe=X+Je(te,re);ce+=ct(te,E,Q,pe,ee)}else if(pe=B(w),typeof pe=="function")for(w=pe.call(w),re=0;!(te=w.next()).done;)te=te.value,pe=X+Je(te,re++),ce+=ct(te,E,Q,pe,ee);else if(te==="object")throw E=String(w),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return ce}function xt(w,E,Q){if(w==null)return w;var X=[],ee=0;return ct(w,X,"","",function(te){return E.call(Q,te,ee++)}),X}function Oe(w){if(w._status===-1){var E=w._result;E=E(),E.then(function(Q){(w._status===0||w._status===-1)&&(w._status=1,w._result=Q)},function(Q){(w._status===0||w._status===-1)&&(w._status=2,w._result=Q)}),w._status===-1&&(w._status=0,w._result=E)}if(w._status===1)return w._result.default;throw w._result}var ye={current:null},D={transition:null},V={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:D,ReactCurrentOwner:Be};function R(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:xt,forEach:function(w,E,Q){xt(w,function(){E.apply(this,arguments)},Q)},count:function(w){var E=0;return xt(w,function(){E++}),E},toArray:function(w){return xt(w,function(E){return E})||[]},only:function(w){if(!Ct(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},K.Component=L,K.Fragment=c,K.Profiler=p,K.PureComponent=se,K.StrictMode=u,K.Suspense=v,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,K.act=R,K.cloneElement=function(w,E,Q){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=J({},w.props),ee=w.key,te=w.ref,ce=w._owner;if(E!=null){if(E.ref!==void 0&&(te=E.ref,ce=Be.current),E.key!==void 0&&(ee=""+E.key),w.type&&w.type.defaultProps)var re=w.type.defaultProps;for(pe in E)Ne.call(E,pe)&&!Fe.hasOwnProperty(pe)&&(X[pe]=E[pe]===void 0&&re!==void 0?re[pe]:E[pe])}var pe=arguments.length-2;if(pe===1)X.children=Q;else if(1<pe){re=Array(pe);for(var Qe=0;Qe<pe;Qe++)re[Qe]=arguments[Qe+2];X.children=re}return{$$typeof:o,type:w.type,key:ee,ref:te,props:X,_owner:ce}},K.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:m,_context:w},w.Consumer=w},K.createElement=tt,K.createFactory=function(w){var E=tt.bind(null,w);return E.type=w,E},K.createRef=function(){return{current:null}},K.forwardRef=function(w){return{$$typeof:x,render:w}},K.isValidElement=Ct,K.lazy=function(w){return{$$typeof:C,_payload:{_status:-1,_result:w},_init:Oe}},K.memo=function(w,E){return{$$typeof:b,type:w,compare:E===void 0?null:E}},K.startTransition=function(w){var E=D.transition;D.transition={};try{w()}finally{D.transition=E}},K.unstable_act=R,K.useCallback=function(w,E){return ye.current.useCallback(w,E)},K.useContext=function(w){return ye.current.useContext(w)},K.useDebugValue=function(){},K.useDeferredValue=function(w){return ye.current.useDeferredValue(w)},K.useEffect=function(w,E){return ye.current.useEffect(w,E)},K.useId=function(){return ye.current.useId()},K.useImperativeHandle=function(w,E,Q){return ye.current.useImperativeHandle(w,E,Q)},K.useInsertionEffect=function(w,E){return ye.current.useInsertionEffect(w,E)},K.useLayoutEffect=function(w,E){return ye.current.useLayoutEffect(w,E)},K.useMemo=function(w,E){return ye.current.useMemo(w,E)},K.useReducer=function(w,E,Q){return ye.current.useReducer(w,E,Q)},K.useRef=function(w){return ye.current.useRef(w)},K.useState=function(w){return ye.current.useState(w)},K.useSyncExternalStore=function(w,E,Q){return ye.current.useSyncExternalStore(w,E,Q)},K.useTransition=function(){return ye.current.useTransition()},K.version="18.3.1",K}var Nd;function ks(){return Nd||(Nd=1,os.exports=Ip()),os.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function Tp(){if(Ed)return Fi;Ed=1;var o=ks(),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function f(x,v,b){var C,N={},B=null,G=null;b!==void 0&&(B=""+b),v.key!==void 0&&(B=""+v.key),v.ref!==void 0&&(G=v.ref);for(C in v)u.call(v,C)&&!m.hasOwnProperty(C)&&(N[C]=v[C]);if(x&&x.defaultProps)for(C in v=x.defaultProps,v)N[C]===void 0&&(N[C]=v[C]);return{$$typeof:l,type:x,key:B,ref:G,props:N,_owner:p.current}}return Fi.Fragment=c,Fi.jsx=f,Fi.jsxs=f,Fi}var Ud;function zp(){return Ud||(Ud=1,rs.exports=Tp()),rs.exports}var a=zp(),z=ks();const Pt=cr(z),Lp=Up({__proto__:null,default:Pt},[z]);var rr={},ss={exports:{}},Ge={},ls={exports:{}},cs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function Dp(){return Id||(Id=1,(function(o){function l(D,V){var R=D.length;D.push(V);e:for(;0<R;){var w=R-1>>>1,E=D[w];if(0<p(E,V))D[w]=V,D[R]=E,R=w;else break e}}function c(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var V=D[0],R=D.pop();if(R!==V){D[0]=R;e:for(var w=0,E=D.length,Q=E>>>1;w<Q;){var X=2*(w+1)-1,ee=D[X],te=X+1,ce=D[te];if(0>p(ee,R))te<E&&0>p(ce,ee)?(D[w]=ce,D[te]=R,w=te):(D[w]=ee,D[X]=R,w=X);else if(te<E&&0>p(ce,R))D[w]=ce,D[te]=R,w=te;else break e}}return V}function p(D,V){var R=D.sortIndex-V.sortIndex;return R!==0?R:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var f=Date,x=f.now();o.unstable_now=function(){return f.now()-x}}var v=[],b=[],C=1,N=null,B=3,G=!1,J=!1,_=!1,L=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(D){for(var V=c(b);V!==null;){if(V.callback===null)u(b);else if(V.startTime<=D)u(b),V.sortIndex=V.expirationTime,l(v,V);else break;V=c(b)}}function le(D){if(_=!1,ne(D),!J)if(c(v)!==null)J=!0,Oe(Ne);else{var V=c(b);V!==null&&ye(le,V.startTime-D)}}function Ne(D,V){J=!1,_&&(_=!1,ie(tt),tt=-1),G=!0;var R=B;try{for(ne(V),N=c(v);N!==null&&(!(N.expirationTime>V)||D&&!la());){var w=N.callback;if(typeof w=="function"){N.callback=null,B=N.priorityLevel;var E=w(N.expirationTime<=V);V=o.unstable_now(),typeof E=="function"?N.callback=E:N===c(v)&&u(v),ne(V)}else u(v);N=c(v)}if(N!==null)var Q=!0;else{var X=c(b);X!==null&&ye(le,X.startTime-V),Q=!1}return Q}finally{N=null,B=R,G=!1}}var Be=!1,Fe=null,tt=-1,qt=5,Ct=-1;function la(){return!(o.unstable_now()-Ct<qt)}function vt(){if(Fe!==null){var D=o.unstable_now();Ct=D;var V=!0;try{V=Fe(!0,D)}finally{V?Je():(Be=!1,Fe=null)}}else Be=!1}var Je;if(typeof se=="function")Je=function(){se(vt)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,xt=ct.port2;ct.port1.onmessage=vt,Je=function(){xt.postMessage(null)}}else Je=function(){L(vt,0)};function Oe(D){Fe=D,Be||(Be=!0,Je())}function ye(D,V){tt=L(function(){D(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_continueExecution=function(){J||G||(J=!0,Oe(Ne))},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qt=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return B},o.unstable_getFirstCallbackNode=function(){return c(v)},o.unstable_next=function(D){switch(B){case 1:case 2:case 3:var V=3;break;default:V=B}var R=B;B=V;try{return D()}finally{B=R}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var R=B;B=D;try{return V()}finally{B=R}},o.unstable_scheduleCallback=function(D,V,R){var w=o.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?w+R:w):R=w,D){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=R+E,D={id:C++,callback:V,priorityLevel:D,startTime:R,expirationTime:E,sortIndex:-1},R>w?(D.sortIndex=R,l(b,D),c(v)===null&&D===c(b)&&(_?(ie(tt),tt=-1):_=!0,ye(le,R-w))):(D.sortIndex=E,l(v,D),J||G||(J=!0,Oe(Ne))),D},o.unstable_shouldYield=la,o.unstable_wrapCallback=function(D){var V=B;return function(){var R=B;B=V;try{return D.apply(this,arguments)}finally{B=R}}}})(cs)),cs}var Td;function Pp(){return Td||(Td=1,ls.exports=Dp()),ls.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function qp(){if(zd)return Ge;zd=1;var o=ks(),l=Pp();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,p={};function m(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(p[e]=t,e=0;e<t.length;e++)u.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},N={};function B(e){return v.call(N,e)?!0:v.call(C,e)?!1:b.test(e)?N[e]=!0:(C[e]=!0,!1)}function G(e,t,i,n){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J(e,t,i,n){if(t===null||typeof t>"u"||G(e,t,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _(e,t,i,n,r,s,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=d}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];L[t]=new _(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ie,se);L[t]=new _(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ie,se);L[t]=new _(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ie,se);L[t]=new _(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,i,n){var r=L.hasOwnProperty(t)?L[t]:null;(r!==null?r.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(J(t,i,r,n)&&(i=null),n||r===null?B(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):r.mustUseProperty?e[r.propertyName]=i===null?r.type===3?!1:"":i:(t=r.attributeName,n=r.attributeNamespace,i===null?e.removeAttribute(t):(r=r.type,i=r===3||r===4&&i===!0?"":""+i,n?e.setAttributeNS(n,t,i):e.setAttribute(t,i))))}var le=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),Be=Symbol.for("react.portal"),Fe=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),qt=Symbol.for("react.profiler"),Ct=Symbol.for("react.provider"),la=Symbol.for("react.context"),vt=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),D=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,w;function E(e){if(w===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var Q=!1;function X(e,t){if(!e||Q)return"";Q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(A){var n=A}Reflect.construct(e,[],t)}else{try{t.call()}catch(A){n=A}e.call(t.prototype)}else{try{throw Error()}catch(A){n=A}e()}}catch(A){if(A&&n&&typeof A.stack=="string"){for(var r=A.stack.split(`
`),s=n.stack.split(`
`),d=r.length-1,h=s.length-1;1<=d&&0<=h&&r[d]!==s[h];)h--;for(;1<=d&&0<=h;d--,h--)if(r[d]!==s[h]){if(d!==1||h!==1)do if(d--,h--,0>h||r[d]!==s[h]){var g=`
`+r[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=h);break}}}finally{Q=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?E(e):""}function ee(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fe:return"Fragment";case Be:return"Portal";case qt:return"Profiler";case tt:return"StrictMode";case Je:return"Suspense";case ct:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case la:return(e.displayName||"Context")+".Consumer";case Ct:return(e._context.displayName||"Context")+".Provider";case vt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xt:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===tt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qe(e){var t=pe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yi(e){e._valueTracker||(e._valueTracker=Qe(e))}function zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=pe(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ur(e,t){var i=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ls(e,t){var i=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;i=re(t.value!=null?t.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ds(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function mr(e,t){Ds(e,t);var i=re(t.value),n=t.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pr(e,t.type,i):t.hasOwnProperty("defaultValue")&&pr(e,t.type,re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ps(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function pr(e,t,i){(t!=="number"||Ji(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var ti=Array.isArray;function Aa(e,t,i,n){if(e=e.options,t){t={};for(var r=0;r<i.length;r++)t["$"+i[r]]=!0;for(i=0;i<e.length;i++)r=t.hasOwnProperty("$"+e[i].value),e[i].selected!==r&&(e[i].selected=r),r&&n&&(e[i].defaultSelected=!0)}else{for(i=""+re(i),t=null,r=0;r<e.length;r++){if(e[r].value===i){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function hr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qs(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(c(92));if(ti(i)){if(1<i.length)throw Error(c(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:re(i)}}function Bs(e,t){var i=re(t.value),n=re(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function Rs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,Fs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,n,r){MSApp.execUnsafeLocalFunction(function(){return e(t,i,n,r)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ai(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tu=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){Tu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ii[t]=ii[e]})});function Os(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||ii.hasOwnProperty(e)&&ii[e]?(""+t).trim():t+"px"}function _s(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var n=i.indexOf("--")===0,r=Os(i,t[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,r):e[i]=r}}var zu=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gr(e,t){if(t){if(zu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function yr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vr=null;function xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Ca=null,ka=null;function Ws(e){if(e=Ci(e)){if(typeof br!="function")throw Error(c(280));var t=e.stateNode;t&&(t=bn(t),br(e.stateNode,e.type,t))}}function Hs(e){Ca?ka?ka.push(e):ka=[e]:Ca=e}function Vs(){if(Ca){var e=Ca,t=ka;if(ka=Ca=null,Ws(e),t)for(e=0;e<t.length;e++)Ws(t[e])}}function $s(e,t){return e(t)}function Gs(){}var wr=!1;function Ys(e,t,i){if(wr)return e(t,i);wr=!0;try{return $s(e,t,i)}finally{wr=!1,(Ca!==null||ka!==null)&&(Gs(),Vs())}}function ni(e,t){var i=e.stateNode;if(i===null)return null;var n=bn(i);if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(c(231,t,typeof i));return i}var jr=!1;if(x)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){jr=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{jr=!1}function Lu(e,t,i,n,r,s,d,h,g){var A=Array.prototype.slice.call(arguments,3);try{t.apply(i,A)}catch(U){this.onError(U)}}var oi=!1,Ki=null,Xi=!1,Sr=null,Du={onError:function(e){oi=!0,Ki=e}};function Pu(e,t,i,n,r,s,d,h,g){oi=!1,Ki=null,Lu.apply(Du,arguments)}function qu(e,t,i,n,r,s,d,h,g){if(Pu.apply(this,arguments),oi){if(oi){var A=Ki;oi=!1,Ki=null}else throw Error(c(198));Xi||(Xi=!0,Sr=A)}}function ca(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qs(e){if(ca(e)!==e)throw Error(c(188))}function Bu(e){var t=e.alternate;if(!t){if(t=ca(e),t===null)throw Error(c(188));return t!==e?null:e}for(var i=e,n=t;;){var r=i.return;if(r===null)break;var s=r.alternate;if(s===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===i)return Qs(r),e;if(s===n)return Qs(r),t;s=s.sibling}throw Error(c(188))}if(i.return!==n.return)i=r,n=s;else{for(var d=!1,h=r.child;h;){if(h===i){d=!0,i=r,n=s;break}if(h===n){d=!0,n=r,i=s;break}h=h.sibling}if(!d){for(h=s.child;h;){if(h===i){d=!0,i=s,n=r;break}if(h===n){d=!0,n=s,i=r;break}h=h.sibling}if(!d)throw Error(c(189))}}if(i.alternate!==n)throw Error(c(190))}if(i.tag!==3)throw Error(c(188));return i.stateNode.current===i?e:t}function Ks(e){return e=Bu(e),e!==null?Xs(e):null}function Xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xs(e);if(t!==null)return t;e=e.sibling}return null}var Zs=l.unstable_scheduleCallback,el=l.unstable_cancelCallback,Ru=l.unstable_shouldYield,Mu=l.unstable_requestPaint,be=l.unstable_now,Fu=l.unstable_getCurrentPriorityLevel,Ar=l.unstable_ImmediatePriority,tl=l.unstable_UserBlockingPriority,Zi=l.unstable_NormalPriority,Ou=l.unstable_LowPriority,al=l.unstable_IdlePriority,en=null,bt=null;function _u(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(en,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Vu,Wu=Math.log,Hu=Math.LN2;function Vu(e){return e>>>=0,e===0?32:31-(Wu(e)/Hu|0)|0}var tn=64,an=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nn(e,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,r=e.suspendedLanes,s=e.pingedLanes,d=i&268435455;if(d!==0){var h=d&~r;h!==0?n=si(h):(s&=d,s!==0&&(n=si(s)))}else d=i&~r,d!==0?n=si(d):s!==0&&(n=si(s));if(n===0)return 0;if(t!==0&&t!==n&&(t&r)===0&&(r=n&-n,s=t&-t,r>=s||r===16&&(s&4194240)!==0))return t;if((n&4)!==0&&(n|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)i=31-dt(t),r=1<<i,n|=e[i],t&=~r;return n}function $u(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gu(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-dt(s),h=1<<d,g=r[d];g===-1?((h&i)===0||(h&n)!==0)&&(r[d]=$u(h,t)):g<=t&&(e.expiredLanes|=h),s&=~h}}function Cr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function il(){var e=tn;return tn<<=1,(tn&4194240)===0&&(tn=64),e}function kr(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function li(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=i}function Yu(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var r=31-dt(i),s=1<<r;t[r]=0,n[r]=-1,e[r]=-1,i&=~s}}function Nr(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-dt(i),r=1<<n;r&t|e[n]&t&&(e[n]|=t),i&=~r}}var oe=0;function nl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var rl,Er,ol,sl,ll,Ur=!1,rn=[],Bt=null,Rt=null,Mt=null,ci=new Map,di=new Map,Ft=[],Ju="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cl(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function ui(e,t,i,n,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ci(t),t!==null&&Er(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Qu(e,t,i,n,r){switch(t){case"focusin":return Bt=ui(Bt,e,t,i,n,r),!0;case"dragenter":return Rt=ui(Rt,e,t,i,n,r),!0;case"mouseover":return Mt=ui(Mt,e,t,i,n,r),!0;case"pointerover":var s=r.pointerId;return ci.set(s,ui(ci.get(s)||null,e,t,i,n,r)),!0;case"gotpointercapture":return s=r.pointerId,di.set(s,ui(di.get(s)||null,e,t,i,n,r)),!0}return!1}function dl(e){var t=da(e.target);if(t!==null){var i=ca(t);if(i!==null){if(t=i.tag,t===13){if(t=Js(i),t!==null){e.blockedOn=t,ll(e.priority,function(){ol(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function on(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Tr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);vr=n,i.target.dispatchEvent(n),vr=null}else return t=Ci(i),t!==null&&Er(t),e.blockedOn=i,!1;t.shift()}return!0}function ul(e,t,i){on(e)&&i.delete(t)}function Ku(){Ur=!1,Bt!==null&&on(Bt)&&(Bt=null),Rt!==null&&on(Rt)&&(Rt=null),Mt!==null&&on(Mt)&&(Mt=null),ci.forEach(ul),di.forEach(ul)}function mi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ur||(Ur=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ku)))}function pi(e){function t(r){return mi(r,e)}if(0<rn.length){mi(rn[0],e);for(var i=1;i<rn.length;i++){var n=rn[i];n.blockedOn===e&&(n.blockedOn=null)}}for(Bt!==null&&mi(Bt,e),Rt!==null&&mi(Rt,e),Mt!==null&&mi(Mt,e),ci.forEach(t),di.forEach(t),i=0;i<Ft.length;i++)n=Ft[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<Ft.length&&(i=Ft[0],i.blockedOn===null);)dl(i),i.blockedOn===null&&Ft.shift()}var Na=le.ReactCurrentBatchConfig,sn=!0;function Xu(e,t,i,n){var r=oe,s=Na.transition;Na.transition=null;try{oe=1,Ir(e,t,i,n)}finally{oe=r,Na.transition=s}}function Zu(e,t,i,n){var r=oe,s=Na.transition;Na.transition=null;try{oe=4,Ir(e,t,i,n)}finally{oe=r,Na.transition=s}}function Ir(e,t,i,n){if(sn){var r=Tr(e,t,i,n);if(r===null)Yr(e,t,n,ln,i),cl(e,n);else if(Qu(r,e,t,i,n))n.stopPropagation();else if(cl(e,n),t&4&&-1<Ju.indexOf(e)){for(;r!==null;){var s=Ci(r);if(s!==null&&rl(s),s=Tr(e,t,i,n),s===null&&Yr(e,t,n,ln,i),s===r)break;r=s}r!==null&&n.stopPropagation()}else Yr(e,t,n,null,i)}}var ln=null;function Tr(e,t,i,n){if(ln=null,e=xr(n),e=da(e),e!==null)if(t=ca(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Js(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function ml(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fu()){case Ar:return 1;case tl:return 4;case Zi:case Ou:return 16;case al:return 536870912;default:return 16}default:return 16}}var Ot=null,zr=null,cn=null;function pl(){if(cn)return cn;var e,t=zr,i=t.length,n,r="value"in Ot?Ot.value:Ot.textContent,s=r.length;for(e=0;e<i&&t[e]===r[e];e++);var d=i-e;for(n=1;n<=d&&t[i-n]===r[s-n];n++);return cn=r.slice(e,1<n?1-n:void 0)}function dn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function un(){return!0}function hl(){return!1}function Ke(e){function t(i,n,r,s,d){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(i=e[h],this[h]=i?i(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?un:hl,this.isPropagationStopped=hl,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=un)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=un)},persist:function(){},isPersistent:un}),t}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lr=Ke(Ea),hi=R({},Ea,{view:0,detail:0}),em=Ke(hi),Dr,Pr,fi,mn=R({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Br,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(Dr=e.screenX-fi.screenX,Pr=e.screenY-fi.screenY):Pr=Dr=0,fi=e),Dr)},movementY:function(e){return"movementY"in e?e.movementY:Pr}}),fl=Ke(mn),tm=R({},mn,{dataTransfer:0}),am=Ke(tm),im=R({},hi,{relatedTarget:0}),qr=Ke(im),nm=R({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),rm=Ke(nm),om=R({},Ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Ke(om),lm=R({},Ea,{data:0}),gl=Ke(lm),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=um[e])?!!t[e]:!1}function Br(){return mm}var pm=R({},hi,{key:function(e){if(e.key){var t=cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Br,charCode:function(e){return e.type==="keypress"?dn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hm=Ke(pm),fm=R({},mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yl=Ke(fm),gm=R({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Br}),ym=Ke(gm),vm=R({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),xm=Ke(vm),bm=R({},mn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wm=Ke(bm),jm=[9,13,27,32],Rr=x&&"CompositionEvent"in window,gi=null;x&&"documentMode"in document&&(gi=document.documentMode);var Sm=x&&"TextEvent"in window&&!gi,vl=x&&(!Rr||gi&&8<gi&&11>=gi),xl=" ",bl=!1;function wl(e,t){switch(e){case"keyup":return jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ua=!1;function Am(e,t){switch(e){case"compositionend":return jl(t);case"keypress":return t.which!==32?null:(bl=!0,xl);case"textInput":return e=t.data,e===xl&&bl?null:e;default:return null}}function Cm(e,t){if(Ua)return e==="compositionend"||!Rr&&wl(e,t)?(e=pl(),cn=zr=Ot=null,Ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vl&&t.locale!=="ko"?null:t.data;default:return null}}var km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!km[e.type]:t==="textarea"}function Al(e,t,i,n){Hs(n),t=yn(t,"onChange"),0<t.length&&(i=new Lr("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var yi=null,vi=null;function Nm(e){_l(e,0)}function pn(e){var t=Da(e);if(zs(t))return e}function Em(e,t){if(e==="change")return t}var Cl=!1;if(x){var Mr;if(x){var Fr="oninput"in document;if(!Fr){var kl=document.createElement("div");kl.setAttribute("oninput","return;"),Fr=typeof kl.oninput=="function"}Mr=Fr}else Mr=!1;Cl=Mr&&(!document.documentMode||9<document.documentMode)}function Nl(){yi&&(yi.detachEvent("onpropertychange",El),vi=yi=null)}function El(e){if(e.propertyName==="value"&&pn(vi)){var t=[];Al(t,vi,e,xr(e)),Ys(Nm,t)}}function Um(e,t,i){e==="focusin"?(Nl(),yi=t,vi=i,yi.attachEvent("onpropertychange",El)):e==="focusout"&&Nl()}function Im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pn(vi)}function Tm(e,t){if(e==="click")return pn(t)}function zm(e,t){if(e==="input"||e==="change")return pn(t)}function Lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Lm;function xi(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!v.call(t,r)||!ut(e[r],t[r]))return!1}return!0}function Ul(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Il(e,t){var i=Ul(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ul(i)}}function Tl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zl(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Ji(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dm(e){var t=zl(),i=e.focusedElem,n=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Tl(i.ownerDocument.documentElement,i)){if(n!==null&&Or(i)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=i.textContent.length,s=Math.min(n.start,r);n=n.end===void 0?s:Math.min(n.end,r),!e.extend&&s>n&&(r=n,n=s,s=r),r=Il(i,s);var d=Il(i,n);r&&d&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pm=x&&"documentMode"in document&&11>=document.documentMode,Ia=null,_r=null,bi=null,Wr=!1;function Ll(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Wr||Ia==null||Ia!==Ji(n)||(n=Ia,"selectionStart"in n&&Or(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bi&&xi(bi,n)||(bi=n,n=yn(_r,"onSelect"),0<n.length&&(t=new Lr("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=Ia)))}function hn(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Ta={animationend:hn("Animation","AnimationEnd"),animationiteration:hn("Animation","AnimationIteration"),animationstart:hn("Animation","AnimationStart"),transitionend:hn("Transition","TransitionEnd")},Hr={},Dl={};x&&(Dl=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function fn(e){if(Hr[e])return Hr[e];if(!Ta[e])return e;var t=Ta[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Dl)return Hr[e]=t[i];return e}var Pl=fn("animationend"),ql=fn("animationiteration"),Bl=fn("animationstart"),Rl=fn("transitionend"),Ml=new Map,Fl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Ml.set(e,t),m(t,[e])}for(var Vr=0;Vr<Fl.length;Vr++){var $r=Fl[Vr],qm=$r.toLowerCase(),Bm=$r[0].toUpperCase()+$r.slice(1);_t(qm,"on"+Bm)}_t(Pl,"onAnimationEnd"),_t(ql,"onAnimationIteration"),_t(Bl,"onAnimationStart"),_t("dblclick","onDoubleClick"),_t("focusin","onFocus"),_t("focusout","onBlur"),_t(Rl,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Ol(e,t,i){var n=e.type||"unknown-event";e.currentTarget=i,qu(n,t,void 0,e),e.currentTarget=null}function _l(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],r=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var d=n.length-1;0<=d;d--){var h=n[d],g=h.instance,A=h.currentTarget;if(h=h.listener,g!==s&&r.isPropagationStopped())break e;Ol(r,h,A),s=g}else for(d=0;d<n.length;d++){if(h=n[d],g=h.instance,A=h.currentTarget,h=h.listener,g!==s&&r.isPropagationStopped())break e;Ol(r,h,A),s=g}}}if(Xi)throw e=Sr,Xi=!1,Sr=null,e}function ue(e,t){var i=t[eo];i===void 0&&(i=t[eo]=new Set);var n=e+"__bubble";i.has(n)||(Wl(t,e,2,!1),i.add(n))}function Gr(e,t,i){var n=0;t&&(n|=4),Wl(i,e,n,t)}var gn="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[gn]){e[gn]=!0,u.forEach(function(i){i!=="selectionchange"&&(Rm.has(i)||Gr(i,!1,e),Gr(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gn]||(t[gn]=!0,Gr("selectionchange",!1,t))}}function Wl(e,t,i,n){switch(ml(t)){case 1:var r=Xu;break;case 4:r=Zu;break;default:r=Ir}i=r.bind(null,t,i,e),r=void 0,!jr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,i,{capture:!0,passive:r}):e.addEventListener(t,i,!0):r!==void 0?e.addEventListener(t,i,{passive:r}):e.addEventListener(t,i,!1)}function Yr(e,t,i,n,r){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var h=n.stateNode.containerInfo;if(h===r||h.nodeType===8&&h.parentNode===r)break;if(d===4)for(d=n.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===r||g.nodeType===8&&g.parentNode===r))return;d=d.return}for(;h!==null;){if(d=da(h),d===null)return;if(g=d.tag,g===5||g===6){n=s=d;continue e}h=h.parentNode}}n=n.return}Ys(function(){var A=s,U=xr(i),I=[];e:{var k=Ml.get(e);if(k!==void 0){var P=Lr,M=e;switch(e){case"keypress":if(dn(i)===0)break e;case"keydown":case"keyup":P=hm;break;case"focusin":M="focus",P=qr;break;case"focusout":M="blur",P=qr;break;case"beforeblur":case"afterblur":P=qr;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=fl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=ym;break;case Pl:case ql:case Bl:P=rm;break;case Rl:P=xm;break;case"scroll":P=em;break;case"wheel":P=wm;break;case"copy":case"cut":case"paste":P=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=yl}var F=(t&4)!==0,we=!F&&e==="scroll",j=F?k!==null?k+"Capture":null:k;F=[];for(var y=A,S;y!==null;){S=y;var T=S.stateNode;if(S.tag===5&&T!==null&&(S=T,j!==null&&(T=ni(y,j),T!=null&&F.push(Si(y,T,S)))),we)break;y=y.return}0<F.length&&(k=new P(k,M,null,i,U),I.push({event:k,listeners:F}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",k&&i!==vr&&(M=i.relatedTarget||i.fromElement)&&(da(M)||M[kt]))break e;if((P||k)&&(k=U.window===U?U:(k=U.ownerDocument)?k.defaultView||k.parentWindow:window,P?(M=i.relatedTarget||i.toElement,P=A,M=M?da(M):null,M!==null&&(we=ca(M),M!==we||M.tag!==5&&M.tag!==6)&&(M=null)):(P=null,M=A),P!==M)){if(F=fl,T="onMouseLeave",j="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(F=yl,T="onPointerLeave",j="onPointerEnter",y="pointer"),we=P==null?k:Da(P),S=M==null?k:Da(M),k=new F(T,y+"leave",P,i,U),k.target=we,k.relatedTarget=S,T=null,da(U)===A&&(F=new F(j,y+"enter",M,i,U),F.target=S,F.relatedTarget=we,T=F),we=T,P&&M)t:{for(F=P,j=M,y=0,S=F;S;S=za(S))y++;for(S=0,T=j;T;T=za(T))S++;for(;0<y-S;)F=za(F),y--;for(;0<S-y;)j=za(j),S--;for(;y--;){if(F===j||j!==null&&F===j.alternate)break t;F=za(F),j=za(j)}F=null}else F=null;P!==null&&Hl(I,k,P,F,!1),M!==null&&we!==null&&Hl(I,we,M,F,!0)}}e:{if(k=A?Da(A):window,P=k.nodeName&&k.nodeName.toLowerCase(),P==="select"||P==="input"&&k.type==="file")var O=Em;else if(Sl(k))if(Cl)O=zm;else{O=Im;var W=Um}else(P=k.nodeName)&&P.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(O=Tm);if(O&&(O=O(e,A))){Al(I,O,i,U);break e}W&&W(e,k,A),e==="focusout"&&(W=k._wrapperState)&&W.controlled&&k.type==="number"&&pr(k,"number",k.value)}switch(W=A?Da(A):window,e){case"focusin":(Sl(W)||W.contentEditable==="true")&&(Ia=W,_r=A,bi=null);break;case"focusout":bi=_r=Ia=null;break;case"mousedown":Wr=!0;break;case"contextmenu":case"mouseup":case"dragend":Wr=!1,Ll(I,i,U);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":Ll(I,i,U)}var H;if(Rr)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Ua?wl(e,i)&&($="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&($="onCompositionStart");$&&(vl&&i.locale!=="ko"&&(Ua||$!=="onCompositionStart"?$==="onCompositionEnd"&&Ua&&(H=pl()):(Ot=U,zr="value"in Ot?Ot.value:Ot.textContent,Ua=!0)),W=yn(A,$),0<W.length&&($=new gl($,e,null,i,U),I.push({event:$,listeners:W}),H?$.data=H:(H=jl(i),H!==null&&($.data=H)))),(H=Sm?Am(e,i):Cm(e,i))&&(A=yn(A,"onBeforeInput"),0<A.length&&(U=new gl("onBeforeInput","beforeinput",null,i,U),I.push({event:U,listeners:A}),U.data=H))}_l(I,t)})}function Si(e,t,i){return{instance:e,listener:t,currentTarget:i}}function yn(e,t){for(var i=t+"Capture",n=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ni(e,i),s!=null&&n.unshift(Si(e,s,r)),s=ni(e,t),s!=null&&n.push(Si(e,s,r))),e=e.return}return n}function za(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hl(e,t,i,n,r){for(var s=t._reactName,d=[];i!==null&&i!==n;){var h=i,g=h.alternate,A=h.stateNode;if(g!==null&&g===n)break;h.tag===5&&A!==null&&(h=A,r?(g=ni(i,s),g!=null&&d.unshift(Si(i,g,h))):r||(g=ni(i,s),g!=null&&d.push(Si(i,g,h)))),i=i.return}d.length!==0&&e.push({event:t,listeners:d})}var Mm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function Vl(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(Fm,"")}function vn(e,t,i){if(t=Vl(t),Vl(e)!==t&&i)throw Error(c(425))}function xn(){}var Jr=null,Qr=null;function Kr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xr=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,$l=typeof Promise=="function"?Promise:void 0,_m=typeof queueMicrotask=="function"?queueMicrotask:typeof $l<"u"?function(e){return $l.resolve(null).then(e).catch(Wm)}:Xr;function Wm(e){setTimeout(function(){throw e})}function Zr(e,t){var i=t,n=0;do{var r=i.nextSibling;if(e.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(n===0){e.removeChild(r),pi(t);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=r}while(i);pi(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var La=Math.random().toString(36).slice(2),wt="__reactFiber$"+La,Ai="__reactProps$"+La,kt="__reactContainer$"+La,eo="__reactEvents$"+La,Hm="__reactListeners$"+La,Vm="__reactHandles$"+La;function da(e){var t=e[wt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[kt]||i[wt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Gl(e);e!==null;){if(i=e[wt])return i;e=Gl(e)}return t}e=i,i=e.parentNode}return null}function Ci(e){return e=e[wt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Da(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function bn(e){return e[Ai]||null}var to=[],Pa=-1;function Ht(e){return{current:e}}function me(e){0>Pa||(e.current=to[Pa],to[Pa]=null,Pa--)}function de(e,t){Pa++,to[Pa]=e.current,e.current=t}var Vt={},Le=Ht(Vt),_e=Ht(!1),ua=Vt;function qa(e,t){var i=e.type.contextTypes;if(!i)return Vt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in i)r[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function We(e){return e=e.childContextTypes,e!=null}function wn(){me(_e),me(Le)}function Yl(e,t,i){if(Le.current!==Vt)throw Error(c(168));de(Le,t),de(_e,i)}function Jl(e,t,i){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var r in n)if(!(r in t))throw Error(c(108,ce(e)||"Unknown",r));return R({},i,n)}function jn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,ua=Le.current,de(Le,e),de(_e,_e.current),!0}function Ql(e,t,i){var n=e.stateNode;if(!n)throw Error(c(169));i?(e=Jl(e,t,ua),n.__reactInternalMemoizedMergedChildContext=e,me(_e),me(Le),de(Le,e)):me(_e),de(_e,i)}var Nt=null,Sn=!1,ao=!1;function Kl(e){Nt===null?Nt=[e]:Nt.push(e)}function $m(e){Sn=!0,Kl(e)}function $t(){if(!ao&&Nt!==null){ao=!0;var e=0,t=oe;try{var i=Nt;for(oe=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}Nt=null,Sn=!1}catch(r){throw Nt!==null&&(Nt=Nt.slice(e+1)),Zs(Ar,$t),r}finally{oe=t,ao=!1}}return null}var Ba=[],Ra=0,An=null,Cn=0,at=[],it=0,ma=null,Et=1,Ut="";function pa(e,t){Ba[Ra++]=Cn,Ba[Ra++]=An,An=e,Cn=t}function Xl(e,t,i){at[it++]=Et,at[it++]=Ut,at[it++]=ma,ma=e;var n=Et;e=Ut;var r=32-dt(n)-1;n&=~(1<<r),i+=1;var s=32-dt(t)+r;if(30<s){var d=r-r%5;s=(n&(1<<d)-1).toString(32),n>>=d,r-=d,Et=1<<32-dt(t)+r|i<<r|n,Ut=s+e}else Et=1<<s|i<<r|n,Ut=e}function io(e){e.return!==null&&(pa(e,1),Xl(e,1,0))}function no(e){for(;e===An;)An=Ba[--Ra],Ba[Ra]=null,Cn=Ba[--Ra],Ba[Ra]=null;for(;e===ma;)ma=at[--it],at[it]=null,Ut=at[--it],at[it]=null,Et=at[--it],at[it]=null}var Xe=null,Ze=null,he=!1,mt=null;function Zl(e,t){var i=st(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function ec(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=ma!==null?{id:Et,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=st(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Xe=e,Ze=null,!0):!1;default:return!1}}function ro(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oo(e){if(he){var t=Ze;if(t){var i=t;if(!ec(e,t)){if(ro(e))throw Error(c(418));t=Wt(i.nextSibling);var n=Xe;t&&ec(e,t)?Zl(n,i):(e.flags=e.flags&-4097|2,he=!1,Xe=e)}}else{if(ro(e))throw Error(c(418));e.flags=e.flags&-4097|2,he=!1,Xe=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function kn(e){if(e!==Xe)return!1;if(!he)return tc(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kr(e.type,e.memoizedProps)),t&&(t=Ze)){if(ro(e))throw ac(),Error(c(418));for(;t;)Zl(e,t),t=Wt(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Ze=Wt(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Xe?Wt(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=Ze;e;)e=Wt(e.nextSibling)}function Ma(){Ze=Xe=null,he=!1}function so(e){mt===null?mt=[e]:mt.push(e)}var Gm=le.ReactCurrentBatchConfig;function ki(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(c(309));var n=i.stateNode}if(!n)throw Error(c(147,e));var r=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var h=r.refs;d===null?delete h[s]:h[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(c(284));if(!i._owner)throw Error(c(290,e))}return e}function Nn(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ic(e){var t=e._init;return t(e._payload)}function nc(e){function t(j,y){if(e){var S=j.deletions;S===null?(j.deletions=[y],j.flags|=16):S.push(y)}}function i(j,y){if(!e)return null;for(;y!==null;)t(j,y),y=y.sibling;return null}function n(j,y){for(j=new Map;y!==null;)y.key!==null?j.set(y.key,y):j.set(y.index,y),y=y.sibling;return j}function r(j,y){return j=ea(j,y),j.index=0,j.sibling=null,j}function s(j,y,S){return j.index=S,e?(S=j.alternate,S!==null?(S=S.index,S<y?(j.flags|=2,y):S):(j.flags|=2,y)):(j.flags|=1048576,y)}function d(j){return e&&j.alternate===null&&(j.flags|=2),j}function h(j,y,S,T){return y===null||y.tag!==6?(y=Zo(S,j.mode,T),y.return=j,y):(y=r(y,S),y.return=j,y)}function g(j,y,S,T){var O=S.type;return O===Fe?U(j,y,S.props.children,T,S.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Oe&&ic(O)===y.type)?(T=r(y,S.props),T.ref=ki(j,y,S),T.return=j,T):(T=Kn(S.type,S.key,S.props,null,j.mode,T),T.ref=ki(j,y,S),T.return=j,T)}function A(j,y,S,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=es(S,j.mode,T),y.return=j,y):(y=r(y,S.children||[]),y.return=j,y)}function U(j,y,S,T,O){return y===null||y.tag!==7?(y=wa(S,j.mode,T,O),y.return=j,y):(y=r(y,S),y.return=j,y)}function I(j,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Zo(""+y,j.mode,S),y.return=j,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ne:return S=Kn(y.type,y.key,y.props,null,j.mode,S),S.ref=ki(j,null,y),S.return=j,S;case Be:return y=es(y,j.mode,S),y.return=j,y;case Oe:var T=y._init;return I(j,T(y._payload),S)}if(ti(y)||V(y))return y=wa(y,j.mode,S,null),y.return=j,y;Nn(j,y)}return null}function k(j,y,S,T){var O=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:h(j,y,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ne:return S.key===O?g(j,y,S,T):null;case Be:return S.key===O?A(j,y,S,T):null;case Oe:return O=S._init,k(j,y,O(S._payload),T)}if(ti(S)||V(S))return O!==null?null:U(j,y,S,T,null);Nn(j,S)}return null}function P(j,y,S,T,O){if(typeof T=="string"&&T!==""||typeof T=="number")return j=j.get(S)||null,h(y,j,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ne:return j=j.get(T.key===null?S:T.key)||null,g(y,j,T,O);case Be:return j=j.get(T.key===null?S:T.key)||null,A(y,j,T,O);case Oe:var W=T._init;return P(j,y,S,W(T._payload),O)}if(ti(T)||V(T))return j=j.get(S)||null,U(y,j,T,O,null);Nn(y,T)}return null}function M(j,y,S,T){for(var O=null,W=null,H=y,$=y=0,Ie=null;H!==null&&$<S.length;$++){H.index>$?(Ie=H,H=null):Ie=H.sibling;var ae=k(j,H,S[$],T);if(ae===null){H===null&&(H=Ie);break}e&&H&&ae.alternate===null&&t(j,H),y=s(ae,y,$),W===null?O=ae:W.sibling=ae,W=ae,H=Ie}if($===S.length)return i(j,H),he&&pa(j,$),O;if(H===null){for(;$<S.length;$++)H=I(j,S[$],T),H!==null&&(y=s(H,y,$),W===null?O=H:W.sibling=H,W=H);return he&&pa(j,$),O}for(H=n(j,H);$<S.length;$++)Ie=P(H,j,$,S[$],T),Ie!==null&&(e&&Ie.alternate!==null&&H.delete(Ie.key===null?$:Ie.key),y=s(Ie,y,$),W===null?O=Ie:W.sibling=Ie,W=Ie);return e&&H.forEach(function(ta){return t(j,ta)}),he&&pa(j,$),O}function F(j,y,S,T){var O=V(S);if(typeof O!="function")throw Error(c(150));if(S=O.call(S),S==null)throw Error(c(151));for(var W=O=null,H=y,$=y=0,Ie=null,ae=S.next();H!==null&&!ae.done;$++,ae=S.next()){H.index>$?(Ie=H,H=null):Ie=H.sibling;var ta=k(j,H,ae.value,T);if(ta===null){H===null&&(H=Ie);break}e&&H&&ta.alternate===null&&t(j,H),y=s(ta,y,$),W===null?O=ta:W.sibling=ta,W=ta,H=Ie}if(ae.done)return i(j,H),he&&pa(j,$),O;if(H===null){for(;!ae.done;$++,ae=S.next())ae=I(j,ae.value,T),ae!==null&&(y=s(ae,y,$),W===null?O=ae:W.sibling=ae,W=ae);return he&&pa(j,$),O}for(H=n(j,H);!ae.done;$++,ae=S.next())ae=P(H,j,$,ae.value,T),ae!==null&&(e&&ae.alternate!==null&&H.delete(ae.key===null?$:ae.key),y=s(ae,y,$),W===null?O=ae:W.sibling=ae,W=ae);return e&&H.forEach(function(kp){return t(j,kp)}),he&&pa(j,$),O}function we(j,y,S,T){if(typeof S=="object"&&S!==null&&S.type===Fe&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ne:e:{for(var O=S.key,W=y;W!==null;){if(W.key===O){if(O=S.type,O===Fe){if(W.tag===7){i(j,W.sibling),y=r(W,S.props.children),y.return=j,j=y;break e}}else if(W.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Oe&&ic(O)===W.type){i(j,W.sibling),y=r(W,S.props),y.ref=ki(j,W,S),y.return=j,j=y;break e}i(j,W);break}else t(j,W);W=W.sibling}S.type===Fe?(y=wa(S.props.children,j.mode,T,S.key),y.return=j,j=y):(T=Kn(S.type,S.key,S.props,null,j.mode,T),T.ref=ki(j,y,S),T.return=j,j=T)}return d(j);case Be:e:{for(W=S.key;y!==null;){if(y.key===W)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){i(j,y.sibling),y=r(y,S.children||[]),y.return=j,j=y;break e}else{i(j,y);break}else t(j,y);y=y.sibling}y=es(S,j.mode,T),y.return=j,j=y}return d(j);case Oe:return W=S._init,we(j,y,W(S._payload),T)}if(ti(S))return M(j,y,S,T);if(V(S))return F(j,y,S,T);Nn(j,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(i(j,y.sibling),y=r(y,S),y.return=j,j=y):(i(j,y),y=Zo(S,j.mode,T),y.return=j,j=y),d(j)):i(j,y)}return we}var Fa=nc(!0),rc=nc(!1),En=Ht(null),Un=null,Oa=null,lo=null;function co(){lo=Oa=Un=null}function uo(e){var t=En.current;me(En),e._currentValue=t}function mo(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function _a(e,t){Un=e,lo=Oa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(He=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(lo!==e)if(e={context:e,memoizedValue:t,next:null},Oa===null){if(Un===null)throw Error(c(308));Oa=e,Un.dependencies={lanes:0,firstContext:e}}else Oa=Oa.next=e;return t}var ha=null;function po(e){ha===null?ha=[e]:ha.push(e)}function oc(e,t,i,n){var r=t.interleaved;return r===null?(i.next=i,po(t)):(i.next=r.next,r.next=i),t.interleaved=i,It(e,n)}function It(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Gt=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Z&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,It(e,i)}return r=n.interleaved,r===null?(t.next=t,po(n)):(t.next=r.next,r.next=t),n.interleaved=t,It(e,i)}function In(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,Nr(e,i)}}function lc(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var d={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?r=s=d:s=s.next=d,i=i.next}while(i!==null);s===null?r=s=t:s=s.next=t}else r=s=t;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Tn(e,t,i,n){var r=e.updateQueue;Gt=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,h=r.shared.pending;if(h!==null){r.shared.pending=null;var g=h,A=g.next;g.next=null,d===null?s=A:d.next=A,d=g;var U=e.alternate;U!==null&&(U=U.updateQueue,h=U.lastBaseUpdate,h!==d&&(h===null?U.firstBaseUpdate=A:h.next=A,U.lastBaseUpdate=g))}if(s!==null){var I=r.baseState;d=0,U=A=g=null,h=s;do{var k=h.lane,P=h.eventTime;if((n&k)===k){U!==null&&(U=U.next={eventTime:P,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var M=e,F=h;switch(k=t,P=i,F.tag){case 1:if(M=F.payload,typeof M=="function"){I=M.call(P,I,k);break e}I=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=F.payload,k=typeof M=="function"?M.call(P,I,k):M,k==null)break e;I=R({},I,k);break e;case 2:Gt=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,k=r.effects,k===null?r.effects=[h]:k.push(h))}else P={eventTime:P,lane:k,tag:h.tag,payload:h.payload,callback:h.callback,next:null},U===null?(A=U=P,g=I):U=U.next=P,d|=k;if(h=h.next,h===null){if(h=r.shared.pending,h===null)break;k=h,h=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);if(U===null&&(g=I),r.baseState=g,r.firstBaseUpdate=A,r.lastBaseUpdate=U,t=r.shared.interleaved,t!==null){r=t;do d|=r.lane,r=r.next;while(r!==t)}else s===null&&(r.shared.lanes=0);ya|=d,e.lanes=d,e.memoizedState=I}}function cc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],r=n.callback;if(r!==null){if(n.callback=null,n=i,typeof r!="function")throw Error(c(191,r));r.call(n)}}}var Ni={},jt=Ht(Ni),Ei=Ht(Ni),Ui=Ht(Ni);function fa(e){if(e===Ni)throw Error(c(174));return e}function fo(e,t){switch(de(Ui,t),de(Ei,e),de(jt,Ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fr(t,e)}me(jt),de(jt,t)}function Wa(){me(jt),me(Ei),me(Ui)}function dc(e){fa(Ui.current);var t=fa(jt.current),i=fr(t,e.type);t!==i&&(de(Ei,e),de(jt,i))}function go(e){Ei.current===e&&(me(jt),me(Ei))}var fe=Ht(0);function zn(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function vo(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Ln=le.ReactCurrentDispatcher,xo=le.ReactCurrentBatchConfig,ga=0,ge=null,Ce=null,Ee=null,Dn=!1,Ii=!1,Ti=0,Ym=0;function De(){throw Error(c(321))}function bo(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!ut(e[i],t[i]))return!1;return!0}function wo(e,t,i,n,r,s){if(ga=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ln.current=e===null||e.memoizedState===null?Xm:Zm,e=i(n,r),Ii){s=0;do{if(Ii=!1,Ti=0,25<=s)throw Error(c(301));s+=1,Ee=Ce=null,t.updateQueue=null,Ln.current=ep,e=i(n,r)}while(Ii)}if(Ln.current=Bn,t=Ce!==null&&Ce.next!==null,ga=0,Ee=Ce=ge=null,Dn=!1,t)throw Error(c(300));return e}function jo(){var e=Ti!==0;return Ti=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ge.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function rt(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ee===null?ge.memoizedState:Ee.next;if(t!==null)Ee=t,Ce=e;else{if(e===null)throw Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ee===null?ge.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function zi(e,t){return typeof t=="function"?t(e):t}function So(e){var t=rt(),i=t.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=e;var n=Ce,r=n.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}n.baseQueue=r=s,i.pending=null}if(r!==null){s=r.next,n=n.baseState;var h=d=null,g=null,A=s;do{var U=A.lane;if((ga&U)===U)g!==null&&(g=g.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),n=A.hasEagerState?A.eagerState:e(n,A.action);else{var I={lane:U,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};g===null?(h=g=I,d=n):g=g.next=I,ge.lanes|=U,ya|=U}A=A.next}while(A!==null&&A!==s);g===null?d=n:g.next=h,ut(n,t.memoizedState)||(He=!0),t.memoizedState=n,t.baseState=d,t.baseQueue=g,i.lastRenderedState=n}if(e=i.interleaved,e!==null){r=e;do s=r.lane,ge.lanes|=s,ya|=s,r=r.next;while(r!==e)}else r===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Ao(e){var t=rt(),i=t.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=e;var n=i.dispatch,r=i.pending,s=t.memoizedState;if(r!==null){i.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);ut(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),i.lastRenderedState=s}return[s,n]}function uc(){}function mc(e,t){var i=ge,n=rt(),r=t(),s=!ut(n.memoizedState,r);if(s&&(n.memoizedState=r,He=!0),n=n.queue,Co(fc.bind(null,i,n,e),[e]),n.getSnapshot!==t||s||Ee!==null&&Ee.memoizedState.tag&1){if(i.flags|=2048,Li(9,hc.bind(null,i,n,r,t),void 0,null),Ue===null)throw Error(c(349));(ga&30)!==0||pc(i,t,r)}return r}function pc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function hc(e,t,i,n){t.value=i,t.getSnapshot=n,gc(t)&&yc(e)}function fc(e,t,i){return i(function(){gc(t)&&yc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!ut(e,i)}catch{return!0}}function yc(e){var t=It(e,1);t!==null&&gt(t,e,1,-1)}function vc(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Km.bind(null,ge,e),[t.memoizedState,e]}function Li(e,t,i,n){return e={tag:e,create:t,destroy:i,deps:n,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e)),e}function xc(){return rt().memoizedState}function Pn(e,t,i,n){var r=St();ge.flags|=e,r.memoizedState=Li(1|t,i,void 0,n===void 0?null:n)}function qn(e,t,i,n){var r=rt();n=n===void 0?null:n;var s=void 0;if(Ce!==null){var d=Ce.memoizedState;if(s=d.destroy,n!==null&&bo(n,d.deps)){r.memoizedState=Li(t,i,s,n);return}}ge.flags|=e,r.memoizedState=Li(1|t,i,s,n)}function bc(e,t){return Pn(8390656,8,e,t)}function Co(e,t){return qn(2048,8,e,t)}function wc(e,t){return qn(4,2,e,t)}function jc(e,t){return qn(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ac(e,t,i){return i=i!=null?i.concat([e]):null,qn(4,4,Sc.bind(null,t,e),i)}function ko(){}function Cc(e,t){var i=rt();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&bo(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function kc(e,t){var i=rt();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&bo(t,n[1])?n[0]:(e=e(),i.memoizedState=[e,t],e)}function Nc(e,t,i){return(ga&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=i):(ut(i,t)||(i=il(),ge.lanes|=i,ya|=i,e.baseState=!0),t)}function Jm(e,t){var i=oe;oe=i!==0&&4>i?i:4,e(!0);var n=xo.transition;xo.transition={};try{e(!1),t()}finally{oe=i,xo.transition=n}}function Ec(){return rt().memoizedState}function Qm(e,t,i){var n=Xt(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Uc(e))Ic(t,i);else if(i=oc(e,t,i,n),i!==null){var r=Me();gt(i,e,n,r),Tc(i,t,n)}}function Km(e,t,i){var n=Xt(e),r={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Uc(e))Ic(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,h=s(d,i);if(r.hasEagerState=!0,r.eagerState=h,ut(h,d)){var g=t.interleaved;g===null?(r.next=r,po(t)):(r.next=g.next,g.next=r),t.interleaved=r;return}}catch{}finally{}i=oc(e,t,r,n),i!==null&&(r=Me(),gt(i,e,n,r),Tc(i,t,n))}}function Uc(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Ic(e,t){Ii=Dn=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Tc(e,t,i){if((i&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,Nr(e,i)}}var Bn={readContext:nt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Xm={readContext:nt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:bc,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Pn(4194308,4,Sc.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Pn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pn(4,2,e,t)},useMemo:function(e,t){var i=St();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var n=St();return t=i!==void 0?i(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Qm.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:vc,useDebugValue:ko,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=vc(!1),t=e[0];return e=Jm.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var n=ge,r=St();if(he){if(i===void 0)throw Error(c(407));i=i()}else{if(i=t(),Ue===null)throw Error(c(349));(ga&30)!==0||pc(n,t,i)}r.memoizedState=i;var s={value:i,getSnapshot:t};return r.queue=s,bc(fc.bind(null,n,s,e),[e]),n.flags|=2048,Li(9,hc.bind(null,n,s,i,t),void 0,null),i},useId:function(){var e=St(),t=Ue.identifierPrefix;if(he){var i=Ut,n=Et;i=(n&~(1<<32-dt(n)-1)).toString(32)+i,t=":"+t+"R"+i,i=Ti++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Ym++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zm={readContext:nt,useCallback:Cc,useContext:nt,useEffect:Co,useImperativeHandle:Ac,useInsertionEffect:wc,useLayoutEffect:jc,useMemo:kc,useReducer:So,useRef:xc,useState:function(){return So(zi)},useDebugValue:ko,useDeferredValue:function(e){var t=rt();return Nc(t,Ce.memoizedState,e)},useTransition:function(){var e=So(zi)[0],t=rt().memoizedState;return[e,t]},useMutableSource:uc,useSyncExternalStore:mc,useId:Ec,unstable_isNewReconciler:!1},ep={readContext:nt,useCallback:Cc,useContext:nt,useEffect:Co,useImperativeHandle:Ac,useInsertionEffect:wc,useLayoutEffect:jc,useMemo:kc,useReducer:Ao,useRef:xc,useState:function(){return Ao(zi)},useDebugValue:ko,useDeferredValue:function(e){var t=rt();return Ce===null?t.memoizedState=e:Nc(t,Ce.memoizedState,e)},useTransition:function(){var e=Ao(zi)[0],t=rt().memoizedState;return[e,t]},useMutableSource:uc,useSyncExternalStore:mc,useId:Ec,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=R({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function No(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:R({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Rn={isMounted:function(e){return(e=e._reactInternals)?ca(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var n=Me(),r=Xt(e),s=Tt(n,r);s.payload=t,i!=null&&(s.callback=i),t=Yt(e,s,r),t!==null&&(gt(t,e,r,n),In(t,e,r))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=Me(),r=Xt(e),s=Tt(n,r);s.tag=1,s.payload=t,i!=null&&(s.callback=i),t=Yt(e,s,r),t!==null&&(gt(t,e,r,n),In(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Me(),n=Xt(e),r=Tt(i,n);r.tag=2,t!=null&&(r.callback=t),t=Yt(e,r,n),t!==null&&(gt(t,e,n,i),In(t,e,n))}};function zc(e,t,i,n,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,d):t.prototype&&t.prototype.isPureReactComponent?!xi(i,n)||!xi(r,s):!0}function Lc(e,t,i){var n=!1,r=Vt,s=t.contextType;return typeof s=="object"&&s!==null?s=nt(s):(r=We(t)?ua:Le.current,n=t.contextTypes,s=(n=n!=null)?qa(e,r):Vt),t=new t(i,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rn,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),t}function Dc(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&Rn.enqueueReplaceState(t,t.state,null)}function Eo(e,t,i,n){var r=e.stateNode;r.props=i,r.state=e.memoizedState,r.refs={},ho(e);var s=t.contextType;typeof s=="object"&&s!==null?r.context=nt(s):(s=We(t)?ua:Le.current,r.context=qa(e,s)),r.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(No(e,t,s,i),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Rn.enqueueReplaceState(r,r.state,null),Tn(e,i,r,n),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ha(e,t){try{var i="",n=t;do i+=ee(n),n=n.return;while(n);var r=i}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:r,digest:null}}function Uo(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Io(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var tp=typeof WeakMap=="function"?WeakMap:Map;function Pc(e,t,i){i=Tt(-1,i),i.tag=3,i.payload={element:null};var n=t.value;return i.callback=function(){Vn||(Vn=!0,Vo=n),Io(e,t)},i}function qc(e,t,i){i=Tt(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var r=t.value;i.payload=function(){return n(r)},i.callback=function(){Io(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){Io(e,t),typeof n!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),i}function Bc(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new tp;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(i)||(r.add(i),e=fp.bind(null,e,t,i),t.then(e,e))}function Rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mc(e,t,i,n,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Tt(-1,1),t.tag=2,Yt(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var ap=le.ReactCurrentOwner,He=!1;function Re(e,t,i,n){t.child=e===null?rc(t,null,i,n):Fa(t,e.child,i,n)}function Fc(e,t,i,n,r){i=i.render;var s=t.ref;return _a(t,r),n=wo(e,t,i,n,s,r),i=jo(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,zt(e,t,r)):(he&&i&&io(t),t.flags|=1,Re(e,t,n,r),t.child)}function Oc(e,t,i,n,r){if(e===null){var s=i.type;return typeof s=="function"&&!Xo(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=s,_c(e,t,s,n,r)):(e=Kn(i.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&r)===0){var d=s.memoizedProps;if(i=i.compare,i=i!==null?i:xi,i(d,n)&&e.ref===t.ref)return zt(e,t,r)}return t.flags|=1,e=ea(s,n),e.ref=t.ref,e.return=t,t.child=e}function _c(e,t,i,n,r){if(e!==null){var s=e.memoizedProps;if(xi(s,n)&&e.ref===t.ref)if(He=!1,t.pendingProps=n=s,(e.lanes&r)!==0)(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,zt(e,t,r)}return To(e,t,i,n,r)}function Wc(e,t,i){var n=t.pendingProps,r=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de($a,et),et|=i;else{if((i&1073741824)===0)return e=s!==null?s.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de($a,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:i,de($a,et),et|=n}else s!==null?(n=s.baseLanes|i,t.memoizedState=null):n=i,de($a,et),et|=n;return Re(e,t,r,i),t.child}function Hc(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function To(e,t,i,n,r){var s=We(i)?ua:Le.current;return s=qa(t,s),_a(t,r),i=wo(e,t,i,n,s,r),n=jo(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,zt(e,t,r)):(he&&n&&io(t),t.flags|=1,Re(e,t,i,r),t.child)}function Vc(e,t,i,n,r){if(We(i)){var s=!0;jn(t)}else s=!1;if(_a(t,r),t.stateNode===null)Fn(e,t),Lc(t,i,n),Eo(t,i,n,r),n=!0;else if(e===null){var d=t.stateNode,h=t.memoizedProps;d.props=h;var g=d.context,A=i.contextType;typeof A=="object"&&A!==null?A=nt(A):(A=We(i)?ua:Le.current,A=qa(t,A));var U=i.getDerivedStateFromProps,I=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function";I||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==n||g!==A)&&Dc(t,d,n,A),Gt=!1;var k=t.memoizedState;d.state=k,Tn(t,n,d,r),g=t.memoizedState,h!==n||k!==g||_e.current||Gt?(typeof U=="function"&&(No(t,i,U,n),g=t.memoizedState),(h=Gt||zc(t,i,h,n,k,g,A))?(I||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),d.props=n,d.state=g,d.context=A,n=h):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{d=t.stateNode,sc(e,t),h=t.memoizedProps,A=t.type===t.elementType?h:pt(t.type,h),d.props=A,I=t.pendingProps,k=d.context,g=i.contextType,typeof g=="object"&&g!==null?g=nt(g):(g=We(i)?ua:Le.current,g=qa(t,g));var P=i.getDerivedStateFromProps;(U=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==I||k!==g)&&Dc(t,d,n,g),Gt=!1,k=t.memoizedState,d.state=k,Tn(t,n,d,r);var M=t.memoizedState;h!==I||k!==M||_e.current||Gt?(typeof P=="function"&&(No(t,i,P,n),M=t.memoizedState),(A=Gt||zc(t,i,A,n,k,M,g)||!1)?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,M,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,M,g)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),d.props=n,d.state=M,d.context=g,n=A):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),n=!1)}return zo(e,t,i,n,s,r)}function zo(e,t,i,n,r,s){Hc(e,t);var d=(t.flags&128)!==0;if(!n&&!d)return r&&Ql(t,i,!1),zt(e,t,s);n=t.stateNode,ap.current=t;var h=d&&typeof i.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&d?(t.child=Fa(t,e.child,null,s),t.child=Fa(t,null,h,s)):Re(e,t,h,s),t.memoizedState=n.state,r&&Ql(t,i,!0),t.child}function $c(e){var t=e.stateNode;t.pendingContext?Yl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yl(e,t.context,!1),fo(e,t.containerInfo)}function Gc(e,t,i,n,r){return Ma(),so(r),t.flags|=256,Re(e,t,i,n),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yc(e,t,i){var n=t.pendingProps,r=fe.current,s=!1,d=(t.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(r&2)!==0),h?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),de(fe,r&1),e===null)return oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=n.children,e=n.fallback,s?(n=t.mode,s=t.child,d={mode:"hidden",children:d},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=Xn(d,n,0,null),e=wa(e,n,i,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Do(i),t.memoizedState=Lo,e):Po(t,d));if(r=e.memoizedState,r!==null&&(h=r.dehydrated,h!==null))return ip(e,t,d,n,h,r,i);if(s){s=n.fallback,d=t.mode,r=e.child,h=r.sibling;var g={mode:"hidden",children:n.children};return(d&1)===0&&t.child!==r?(n=t.child,n.childLanes=0,n.pendingProps=g,t.deletions=null):(n=ea(r,g),n.subtreeFlags=r.subtreeFlags&14680064),h!==null?s=ea(h,s):(s=wa(s,d,i,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,d=e.child.memoizedState,d=d===null?Do(i):{baseLanes:d.baseLanes|i,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~i,t.memoizedState=Lo,n}return s=e.child,e=s.sibling,n=ea(s,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=i),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function Po(e,t){return t=Xn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mn(e,t,i,n){return n!==null&&so(n),Fa(t,e.child,null,i),e=Po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ip(e,t,i,n,r,s,d){if(i)return t.flags&256?(t.flags&=-257,n=Uo(Error(c(422))),Mn(e,t,d,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,r=t.mode,n=Xn({mode:"visible",children:n.children},r,0,null),s=wa(s,r,d,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,(t.mode&1)!==0&&Fa(t,e.child,null,d),t.child.memoizedState=Do(d),t.memoizedState=Lo,s);if((t.mode&1)===0)return Mn(e,t,d,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var h=n.dgst;return n=h,s=Error(c(419)),n=Uo(s,n,void 0),Mn(e,t,d,n)}if(h=(d&e.childLanes)!==0,He||h){if(n=Ue,n!==null){switch(d&-d){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(n.suspendedLanes|d))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,It(e,r),gt(n,e,r,-1))}return Ko(),n=Uo(Error(c(421))),Mn(e,t,d,n)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=gp.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,Ze=Wt(r.nextSibling),Xe=t,he=!0,mt=null,e!==null&&(at[it++]=Et,at[it++]=Ut,at[it++]=ma,Et=e.id,Ut=e.overflow,ma=t),t=Po(t,n.children),t.flags|=4096,t)}function Jc(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),mo(e.return,t,i)}function qo(e,t,i,n,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=r)}function Qc(e,t,i){var n=t.pendingProps,r=n.revealOrder,s=n.tail;if(Re(e,t,n.children,i),n=fe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,i,t);else if(e.tag===19)Jc(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(de(fe,n),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(i=t.child,r=null;i!==null;)e=i.alternate,e!==null&&zn(e)===null&&(r=i),i=i.sibling;i=r,i===null?(r=t.child,t.child=null):(r=i.sibling,i.sibling=null),qo(t,!1,r,i,s);break;case"backwards":for(i=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&zn(e)===null){t.child=r;break}e=r.sibling,r.sibling=i,i=r,r=e}qo(t,!0,i,null,s);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fn(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,i=ea(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=ea(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function np(e,t,i){switch(t.tag){case 3:$c(t),Ma();break;case 5:dc(t);break;case 1:We(t.type)&&jn(t);break;case 4:fo(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,r=t.memoizedProps.value;de(En,n._currentValue),n._currentValue=r;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(de(fe,fe.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Yc(e,t,i):(de(fe,fe.current&1),e=zt(e,t,i),e!==null?e.sibling:null);de(fe,fe.current&1);break;case 19:if(n=(i&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Qc(e,t,i);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),de(fe,fe.current),n)break;return null;case 22:case 23:return t.lanes=0,Wc(e,t,i)}return zt(e,t,i)}var Kc,Bo,Xc,Zc;Kc=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Bo=function(){},Xc=function(e,t,i,n){var r=e.memoizedProps;if(r!==n){e=t.stateNode,fa(jt.current);var s=null;switch(i){case"input":r=ur(e,r),n=ur(e,n),s=[];break;case"select":r=R({},r,{value:void 0}),n=R({},n,{value:void 0}),s=[];break;case"textarea":r=hr(e,r),n=hr(e,n),s=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=xn)}gr(i,n);var d;i=null;for(A in r)if(!n.hasOwnProperty(A)&&r.hasOwnProperty(A)&&r[A]!=null)if(A==="style"){var h=r[A];for(d in h)h.hasOwnProperty(d)&&(i||(i={}),i[d]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(p.hasOwnProperty(A)?s||(s=[]):(s=s||[]).push(A,null));for(A in n){var g=n[A];if(h=r!=null?r[A]:void 0,n.hasOwnProperty(A)&&g!==h&&(g!=null||h!=null))if(A==="style")if(h){for(d in h)!h.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(i||(i={}),i[d]="");for(d in g)g.hasOwnProperty(d)&&h[d]!==g[d]&&(i||(i={}),i[d]=g[d])}else i||(s||(s=[]),s.push(A,i)),i=g;else A==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(s=s||[]).push(A,g)):A==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(A,""+g):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(p.hasOwnProperty(A)?(g!=null&&A==="onScroll"&&ue("scroll",e),s||h===g||(s=[])):(s=s||[]).push(A,g))}i&&(s=s||[]).push("style",i);var A=s;(t.updateQueue=A)&&(t.flags|=4)}},Zc=function(e,t,i,n){i!==n&&(t.flags|=4)};function Di(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var r=e.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function rp(e,t,i){var n=t.pendingProps;switch(no(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return We(t.type)&&wn(),Pe(t),null;case 3:return n=t.stateNode,Wa(),me(_e),me(Le),vo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(kn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(Yo(mt),mt=null))),Bo(e,t),Pe(t),null;case 5:go(t);var r=fa(Ui.current);if(i=t.type,e!==null&&t.stateNode!=null)Xc(e,t,i,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Pe(t),null}if(e=fa(jt.current),kn(t)){n=t.stateNode,i=t.type;var s=t.memoizedProps;switch(n[wt]=t,n[Ai]=s,e=(t.mode&1)!==0,i){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(r=0;r<wi.length;r++)ue(wi[r],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":Ls(n,s),ue("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ue("invalid",n);break;case"textarea":qs(n,s),ue("invalid",n)}gr(i,s),r=null;for(var d in s)if(s.hasOwnProperty(d)){var h=s[d];d==="children"?typeof h=="string"?n.textContent!==h&&(s.suppressHydrationWarning!==!0&&vn(n.textContent,h,e),r=["children",h]):typeof h=="number"&&n.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&vn(n.textContent,h,e),r=["children",""+h]):p.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&ue("scroll",n)}switch(i){case"input":Yi(n),Ps(n,s,!0);break;case"textarea":Yi(n),Rs(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=xn)}n=r,t.updateQueue=n,n!==null&&(t.flags|=4)}else{d=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ms(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(i,{is:n.is}):(e=d.createElement(i),i==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,i),e[wt]=t,e[Ai]=n,Kc(e,t,!1,!1),t.stateNode=e;e:{switch(d=yr(i,n),i){case"dialog":ue("cancel",e),ue("close",e),r=n;break;case"iframe":case"object":case"embed":ue("load",e),r=n;break;case"video":case"audio":for(r=0;r<wi.length;r++)ue(wi[r],e);r=n;break;case"source":ue("error",e),r=n;break;case"img":case"image":case"link":ue("error",e),ue("load",e),r=n;break;case"details":ue("toggle",e),r=n;break;case"input":Ls(e,n),r=ur(e,n),ue("invalid",e);break;case"option":r=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},r=R({},n,{value:void 0}),ue("invalid",e);break;case"textarea":qs(e,n),r=hr(e,n),ue("invalid",e);break;default:r=n}gr(i,r),h=r;for(s in h)if(h.hasOwnProperty(s)){var g=h[s];s==="style"?_s(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Fs(e,g)):s==="children"?typeof g=="string"?(i!=="textarea"||g!=="")&&ai(e,g):typeof g=="number"&&ai(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(p.hasOwnProperty(s)?g!=null&&s==="onScroll"&&ue("scroll",e):g!=null&&ne(e,s,g,d))}switch(i){case"input":Yi(e),Ps(e,n,!1);break;case"textarea":Yi(e),Rs(e);break;case"option":n.value!=null&&e.setAttribute("value",""+re(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Aa(e,!!n.multiple,s,!1):n.defaultValue!=null&&Aa(e,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=xn)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Zc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(i=fa(Ui.current),fa(jt.current),kn(t)){if(n=t.stateNode,i=t.memoizedProps,n[wt]=t,(s=n.nodeValue!==i)&&(e=Xe,e!==null))switch(e.tag){case 3:vn(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vn(n.nodeValue,i,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[wt]=t,t.stateNode=n}return Pe(t),null;case 13:if(me(fe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&Ze!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ac(),Ma(),t.flags|=98560,s=!1;else if(s=kn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[wt]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),s=!1}else mt!==null&&(Yo(mt),mt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(fe.current&1)!==0?ke===0&&(ke=3):Ko())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Wa(),Bo(e,t),e===null&&ji(t.stateNode.containerInfo),Pe(t),null;case 10:return uo(t.type._context),Pe(t),null;case 17:return We(t.type)&&wn(),Pe(t),null;case 19:if(me(fe),s=t.memoizedState,s===null)return Pe(t),null;if(n=(t.flags&128)!==0,d=s.rendering,d===null)if(n)Di(s,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=zn(e),d!==null){for(t.flags|=128,Di(s,!1),n=d.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=i,i=t.child;i!==null;)s=i,e=n,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return de(fe,fe.current&1|2),t.child}e=e.sibling}s.tail!==null&&be()>Ga&&(t.flags|=128,n=!0,Di(s,!1),t.lanes=4194304)}else{if(!n)if(e=zn(d),e!==null){if(t.flags|=128,n=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!he)return Pe(t),null}else 2*be()-s.renderingStartTime>Ga&&i!==1073741824&&(t.flags|=128,n=!0,Di(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(i=s.last,i!==null?i.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=be(),t.sibling=null,i=fe.current,de(fe,n?i&1|2:i&1),t):(Pe(t),null);case 22:case 23:return Qo(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(et&1073741824)!==0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function op(e,t){switch(no(t),t.tag){case 1:return We(t.type)&&wn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wa(),me(_e),me(Le),vo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return go(t),null;case 13:if(me(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(fe),null;case 4:return Wa(),null;case 10:return uo(t.type._context),null;case 22:case 23:return Qo(),null;case 24:return null;default:return null}}var On=!1,qe=!1,sp=typeof WeakSet=="function"?WeakSet:Set,q=null;function Va(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ve(e,t,n)}else i.current=null}function Ro(e,t,i){try{i()}catch(n){ve(e,t,n)}}var ed=!1;function lp(e,t){if(Jr=sn,e=zl(),Or(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var d=0,h=-1,g=-1,A=0,U=0,I=e,k=null;t:for(;;){for(var P;I!==i||r!==0&&I.nodeType!==3||(h=d+r),I!==s||n!==0&&I.nodeType!==3||(g=d+n),I.nodeType===3&&(d+=I.nodeValue.length),(P=I.firstChild)!==null;)k=I,I=P;for(;;){if(I===e)break t;if(k===i&&++A===r&&(h=d),k===s&&++U===n&&(g=d),(P=I.nextSibling)!==null)break;I=k,k=I.parentNode}I=P}i=h===-1||g===-1?null:{start:h,end:g}}else i=null}i=i||{start:0,end:0}}else i=null;for(Qr={focusedElem:e,selectionRange:i},sn=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var M=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var F=M.memoizedProps,we=M.memoizedState,j=t.stateNode,y=j.getSnapshotBeforeUpdate(t.elementType===t.type?F:pt(t.type,F),we);j.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(T){ve(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return M=ed,ed=!1,M}function Pi(e,t,i){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ro(t,i,s)}r=r.next}while(r!==n)}}function _n(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==t)}}function Mo(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[Ai],delete t[eo],delete t[Hm],delete t[Vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=xn));else if(n!==4&&(e=e.child,e!==null))for(Fo(e,t,i),e=e.sibling;e!==null;)Fo(e,t,i),e=e.sibling}function Oo(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Oo(e,t,i),e=e.sibling;e!==null;)Oo(e,t,i),e=e.sibling}var Te=null,ht=!1;function Jt(e,t,i){for(i=i.child;i!==null;)nd(e,t,i),i=i.sibling}function nd(e,t,i){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(en,i)}catch{}switch(i.tag){case 5:qe||Va(i,t);case 6:var n=Te,r=ht;Te=null,Jt(e,t,i),Te=n,ht=r,Te!==null&&(ht?(e=Te,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Te.removeChild(i.stateNode));break;case 18:Te!==null&&(ht?(e=Te,i=i.stateNode,e.nodeType===8?Zr(e.parentNode,i):e.nodeType===1&&Zr(e,i),pi(e)):Zr(Te,i.stateNode));break;case 4:n=Te,r=ht,Te=i.stateNode.containerInfo,ht=!0,Jt(e,t,i),Te=n,ht=r;break;case 0:case 11:case 14:case 15:if(!qe&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var s=r,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&Ro(i,t,d),r=r.next}while(r!==n)}Jt(e,t,i);break;case 1:if(!qe&&(Va(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(h){ve(i,t,h)}Jt(e,t,i);break;case 21:Jt(e,t,i);break;case 22:i.mode&1?(qe=(n=qe)||i.memoizedState!==null,Jt(e,t,i),qe=n):Jt(e,t,i);break;default:Jt(e,t,i)}}function rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new sp),t.forEach(function(n){var r=yp.bind(null,e,n);i.has(n)||(i.add(n),n.then(r,r))})}}function ft(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];try{var s=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 5:Te=h.stateNode,ht=!1;break e;case 3:Te=h.stateNode.containerInfo,ht=!0;break e;case 4:Te=h.stateNode.containerInfo,ht=!0;break e}h=h.return}if(Te===null)throw Error(c(160));nd(s,d,r),Te=null,ht=!1;var g=r.alternate;g!==null&&(g.return=null),r.return=null}catch(A){ve(r,t,A)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)od(t,e),t=t.sibling}function od(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),At(e),n&4){try{Pi(3,e,e.return),_n(3,e)}catch(F){ve(e,e.return,F)}try{Pi(5,e,e.return)}catch(F){ve(e,e.return,F)}}break;case 1:ft(t,e),At(e),n&512&&i!==null&&Va(i,i.return);break;case 5:if(ft(t,e),At(e),n&512&&i!==null&&Va(i,i.return),e.flags&32){var r=e.stateNode;try{ai(r,"")}catch(F){ve(e,e.return,F)}}if(n&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,d=i!==null?i.memoizedProps:s,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&Ds(r,s),yr(h,d);var A=yr(h,s);for(d=0;d<g.length;d+=2){var U=g[d],I=g[d+1];U==="style"?_s(r,I):U==="dangerouslySetInnerHTML"?Fs(r,I):U==="children"?ai(r,I):ne(r,U,I,A)}switch(h){case"input":mr(r,s);break;case"textarea":Bs(r,s);break;case"select":var k=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var P=s.value;P!=null?Aa(r,!!s.multiple,P,!1):k!==!!s.multiple&&(s.defaultValue!=null?Aa(r,!!s.multiple,s.defaultValue,!0):Aa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ai]=s}catch(F){ve(e,e.return,F)}}break;case 6:if(ft(t,e),At(e),n&4){if(e.stateNode===null)throw Error(c(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(F){ve(e,e.return,F)}}break;case 3:if(ft(t,e),At(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(F){ve(e,e.return,F)}break;case 4:ft(t,e),At(e);break;case 13:ft(t,e),At(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ho=be())),n&4&&rd(e);break;case 22:if(U=i!==null&&i.memoizedState!==null,e.mode&1?(qe=(A=qe)||U,ft(t,e),qe=A):ft(t,e),At(e),n&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!U&&(e.mode&1)!==0)for(q=e,U=e.child;U!==null;){for(I=q=U;q!==null;){switch(k=q,P=k.child,k.tag){case 0:case 11:case 14:case 15:Pi(4,k,k.return);break;case 1:Va(k,k.return);var M=k.stateNode;if(typeof M.componentWillUnmount=="function"){n=k,i=k.return;try{t=n,M.props=t.memoizedProps,M.state=t.memoizedState,M.componentWillUnmount()}catch(F){ve(n,i,F)}}break;case 5:Va(k,k.return);break;case 22:if(k.memoizedState!==null){cd(I);continue}}P!==null?(P.return=k,q=P):cd(I)}U=U.sibling}e:for(U=null,I=e;;){if(I.tag===5){if(U===null){U=I;try{r=I.stateNode,A?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=I.stateNode,g=I.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=Os("display",d))}catch(F){ve(e,e.return,F)}}}else if(I.tag===6){if(U===null)try{I.stateNode.nodeValue=A?"":I.memoizedProps}catch(F){ve(e,e.return,F)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;U===I&&(U=null),I=I.return}U===I&&(U=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:ft(t,e),At(e),n&4&&rd(e);break;case 21:break;default:ft(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(ad(i)){var n=i;break e}i=i.return}throw Error(c(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(ai(r,""),n.flags&=-33);var s=id(e);Oo(e,s,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=id(e);Fo(e,h,d);break;default:throw Error(c(161))}}catch(g){ve(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cp(e,t,i){q=e,sd(e)}function sd(e,t,i){for(var n=(e.mode&1)!==0;q!==null;){var r=q,s=r.child;if(r.tag===22&&n){var d=r.memoizedState!==null||On;if(!d){var h=r.alternate,g=h!==null&&h.memoizedState!==null||qe;h=On;var A=qe;if(On=d,(qe=g)&&!A)for(q=r;q!==null;)d=q,g=d.child,d.tag===22&&d.memoizedState!==null?dd(r):g!==null?(g.return=d,q=g):dd(r);for(;s!==null;)q=s,sd(s),s=s.sibling;q=r,On=h,qe=A}ld(e)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,q=s):ld(e)}}function ld(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qe||_n(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!qe)if(i===null)n.componentDidMount();else{var r=t.elementType===t.type?i.memoizedProps:pt(t.type,i.memoizedProps);n.componentDidUpdate(r,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&cc(t,s,n);break;case 3:var d=t.updateQueue;if(d!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}cc(t,d,i)}break;case 5:var h=t.stateNode;if(i===null&&t.flags&4){i=h;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&i.focus();break;case"img":g.src&&(i.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var A=t.alternate;if(A!==null){var U=A.memoizedState;if(U!==null){var I=U.dehydrated;I!==null&&pi(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}qe||t.flags&512&&Mo(t)}catch(k){ve(t,t.return,k)}}if(t===e){q=null;break}if(i=t.sibling,i!==null){i.return=t.return,q=i;break}q=t.return}}function cd(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var i=t.sibling;if(i!==null){i.return=t.return,q=i;break}q=t.return}}function dd(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{_n(4,t)}catch(g){ve(t,i,g)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var r=t.return;try{n.componentDidMount()}catch(g){ve(t,r,g)}}var s=t.return;try{Mo(t)}catch(g){ve(t,s,g)}break;case 5:var d=t.return;try{Mo(t)}catch(g){ve(t,d,g)}}}catch(g){ve(t,t.return,g)}if(t===e){q=null;break}var h=t.sibling;if(h!==null){h.return=t.return,q=h;break}q=t.return}}var dp=Math.ceil,Wn=le.ReactCurrentDispatcher,_o=le.ReactCurrentOwner,ot=le.ReactCurrentBatchConfig,Z=0,Ue=null,je=null,ze=0,et=0,$a=Ht(0),ke=0,qi=null,ya=0,Hn=0,Wo=0,Bi=null,Ve=null,Ho=0,Ga=1/0,Lt=null,Vn=!1,Vo=null,Qt=null,$n=!1,Kt=null,Gn=0,Ri=0,$o=null,Yn=-1,Jn=0;function Me(){return(Z&6)!==0?be():Yn!==-1?Yn:Yn=be()}function Xt(e){return(e.mode&1)===0?1:(Z&2)!==0&&ze!==0?ze&-ze:Gm.transition!==null?(Jn===0&&(Jn=il()),Jn):(e=oe,e!==0||(e=window.event,e=e===void 0?16:ml(e.type)),e)}function gt(e,t,i,n){if(50<Ri)throw Ri=0,$o=null,Error(c(185));li(e,i,n),((Z&2)===0||e!==Ue)&&(e===Ue&&((Z&2)===0&&(Hn|=i),ke===4&&Zt(e,ze)),$e(e,n),i===1&&Z===0&&(t.mode&1)===0&&(Ga=be()+500,Sn&&$t()))}function $e(e,t){var i=e.callbackNode;Gu(e,t);var n=nn(e,e===Ue?ze:0);if(n===0)i!==null&&el(i),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(i!=null&&el(i),t===1)e.tag===0?$m(md.bind(null,e)):Kl(md.bind(null,e)),_m(function(){(Z&6)===0&&$t()}),i=null;else{switch(nl(n)){case 1:i=Ar;break;case 4:i=tl;break;case 16:i=Zi;break;case 536870912:i=al;break;default:i=Zi}i=bd(i,ud.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function ud(e,t){if(Yn=-1,Jn=0,(Z&6)!==0)throw Error(c(327));var i=e.callbackNode;if(Ya()&&e.callbackNode!==i)return null;var n=nn(e,e===Ue?ze:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=Qn(e,n);else{t=n;var r=Z;Z|=2;var s=hd();(Ue!==e||ze!==t)&&(Lt=null,Ga=be()+500,xa(e,t));do try{pp();break}catch(h){pd(e,h)}while(!0);co(),Wn.current=s,Z=r,je!==null?t=0:(Ue=null,ze=0,t=ke)}if(t!==0){if(t===2&&(r=Cr(e),r!==0&&(n=r,t=Go(e,r))),t===1)throw i=qi,xa(e,0),Zt(e,n),$e(e,be()),i;if(t===6)Zt(e,n);else{if(r=e.current.alternate,(n&30)===0&&!up(r)&&(t=Qn(e,n),t===2&&(s=Cr(e),s!==0&&(n=s,t=Go(e,s))),t===1))throw i=qi,xa(e,0),Zt(e,n),$e(e,be()),i;switch(e.finishedWork=r,e.finishedLanes=n,t){case 0:case 1:throw Error(c(345));case 2:ba(e,Ve,Lt);break;case 3:if(Zt(e,n),(n&130023424)===n&&(t=Ho+500-be(),10<t)){if(nn(e,0)!==0)break;if(r=e.suspendedLanes,(r&n)!==n){Me(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Xr(ba.bind(null,e,Ve,Lt),t);break}ba(e,Ve,Lt);break;case 4:if(Zt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,r=-1;0<n;){var d=31-dt(n);s=1<<d,d=t[d],d>r&&(r=d),n&=~s}if(n=r,n=be()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*dp(n/1960))-n,10<n){e.timeoutHandle=Xr(ba.bind(null,e,Ve,Lt),n);break}ba(e,Ve,Lt);break;case 5:ba(e,Ve,Lt);break;default:throw Error(c(329))}}}return $e(e,be()),e.callbackNode===i?ud.bind(null,e):null}function Go(e,t){var i=Bi;return e.current.memoizedState.isDehydrated&&(xa(e,t).flags|=256),e=Qn(e,t),e!==2&&(t=Ve,Ve=i,t!==null&&Yo(t)),e}function Yo(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function up(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var r=i[n],s=r.getSnapshot;r=r.value;try{if(!ut(s(),r))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Wo,t&=~Hn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-dt(t),n=1<<i;e[i]=-1,t&=~n}}function md(e){if((Z&6)!==0)throw Error(c(327));Ya();var t=nn(e,0);if((t&1)===0)return $e(e,be()),null;var i=Qn(e,t);if(e.tag!==0&&i===2){var n=Cr(e);n!==0&&(t=n,i=Go(e,n))}if(i===1)throw i=qi,xa(e,0),Zt(e,t),$e(e,be()),i;if(i===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ba(e,Ve,Lt),$e(e,be()),null}function Jo(e,t){var i=Z;Z|=1;try{return e(t)}finally{Z=i,Z===0&&(Ga=be()+500,Sn&&$t())}}function va(e){Kt!==null&&Kt.tag===0&&(Z&6)===0&&Ya();var t=Z;Z|=1;var i=ot.transition,n=oe;try{if(ot.transition=null,oe=1,e)return e()}finally{oe=n,ot.transition=i,Z=t,(Z&6)===0&&$t()}}function Qo(){et=$a.current,me($a)}function xa(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Om(i)),je!==null)for(i=je.return;i!==null;){var n=i;switch(no(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&wn();break;case 3:Wa(),me(_e),me(Le),vo();break;case 5:go(n);break;case 4:Wa();break;case 13:me(fe);break;case 19:me(fe);break;case 10:uo(n.type._context);break;case 22:case 23:Qo()}i=i.return}if(Ue=e,je=e=ea(e.current,null),ze=et=t,ke=0,qi=null,Wo=Hn=ya=0,Ve=Bi=null,ha!==null){for(t=0;t<ha.length;t++)if(i=ha[t],n=i.interleaved,n!==null){i.interleaved=null;var r=n.next,s=i.pending;if(s!==null){var d=s.next;s.next=r,n.next=d}i.pending=n}ha=null}return e}function pd(e,t){do{var i=je;try{if(co(),Ln.current=Bn,Dn){for(var n=ge.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Dn=!1}if(ga=0,Ee=Ce=ge=null,Ii=!1,Ti=0,_o.current=null,i===null||i.return===null){ke=1,qi=t,je=null;break}e:{var s=e,d=i.return,h=i,g=t;if(t=ze,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var A=g,U=h,I=U.tag;if((U.mode&1)===0&&(I===0||I===11||I===15)){var k=U.alternate;k?(U.updateQueue=k.updateQueue,U.memoizedState=k.memoizedState,U.lanes=k.lanes):(U.updateQueue=null,U.memoizedState=null)}var P=Rc(d);if(P!==null){P.flags&=-257,Mc(P,d,h,s,t),P.mode&1&&Bc(s,A,t),t=P,g=A;var M=t.updateQueue;if(M===null){var F=new Set;F.add(g),t.updateQueue=F}else M.add(g);break e}else{if((t&1)===0){Bc(s,A,t),Ko();break e}g=Error(c(426))}}else if(he&&h.mode&1){var we=Rc(d);if(we!==null){(we.flags&65536)===0&&(we.flags|=256),Mc(we,d,h,s,t),so(Ha(g,h));break e}}s=g=Ha(g,h),ke!==4&&(ke=2),Bi===null?Bi=[s]:Bi.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var j=Pc(s,g,t);lc(s,j);break e;case 1:h=g;var y=s.type,S=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Qt===null||!Qt.has(S)))){s.flags|=65536,t&=-t,s.lanes|=t;var T=qc(s,h,t);lc(s,T);break e}}s=s.return}while(s!==null)}gd(i)}catch(O){t=O,je===i&&i!==null&&(je=i=i.return);continue}break}while(!0)}function hd(){var e=Wn.current;return Wn.current=Bn,e===null?Bn:e}function Ko(){(ke===0||ke===3||ke===2)&&(ke=4),Ue===null||(ya&268435455)===0&&(Hn&268435455)===0||Zt(Ue,ze)}function Qn(e,t){var i=Z;Z|=2;var n=hd();(Ue!==e||ze!==t)&&(Lt=null,xa(e,t));do try{mp();break}catch(r){pd(e,r)}while(!0);if(co(),Z=i,Wn.current=n,je!==null)throw Error(c(261));return Ue=null,ze=0,ke}function mp(){for(;je!==null;)fd(je)}function pp(){for(;je!==null&&!Ru();)fd(je)}function fd(e){var t=xd(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?gd(e):je=t,_o.current=null}function gd(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=rp(i,t,et),i!==null){je=i;return}}else{if(i=op(i,t),i!==null){i.flags&=32767,je=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,je=null;return}}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);ke===0&&(ke=5)}function ba(e,t,i){var n=oe,r=ot.transition;try{ot.transition=null,oe=1,hp(e,t,i,n)}finally{ot.transition=r,oe=n}return null}function hp(e,t,i,n){do Ya();while(Kt!==null);if((Z&6)!==0)throw Error(c(327));i=e.finishedWork;var r=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=i.lanes|i.childLanes;if(Yu(e,s),e===Ue&&(je=Ue=null,ze=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||$n||($n=!0,bd(Zi,function(){return Ya(),null})),s=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||s){s=ot.transition,ot.transition=null;var d=oe;oe=1;var h=Z;Z|=4,_o.current=null,lp(e,i),od(i,e),Dm(Qr),sn=!!Jr,Qr=Jr=null,e.current=i,cp(i),Mu(),Z=h,oe=d,ot.transition=s}else e.current=i;if($n&&($n=!1,Kt=e,Gn=r),s=e.pendingLanes,s===0&&(Qt=null),_u(i.stateNode),$e(e,be()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)r=t[i],n(r.value,{componentStack:r.stack,digest:r.digest});if(Vn)throw Vn=!1,e=Vo,Vo=null,e;return(Gn&1)!==0&&e.tag!==0&&Ya(),s=e.pendingLanes,(s&1)!==0?e===$o?Ri++:(Ri=0,$o=e):Ri=0,$t(),null}function Ya(){if(Kt!==null){var e=nl(Gn),t=ot.transition,i=oe;try{if(ot.transition=null,oe=16>e?16:e,Kt===null)var n=!1;else{if(e=Kt,Kt=null,Gn=0,(Z&6)!==0)throw Error(c(331));var r=Z;for(Z|=4,q=e.current;q!==null;){var s=q,d=s.child;if((q.flags&16)!==0){var h=s.deletions;if(h!==null){for(var g=0;g<h.length;g++){var A=h[g];for(q=A;q!==null;){var U=q;switch(U.tag){case 0:case 11:case 15:Pi(8,U,s)}var I=U.child;if(I!==null)I.return=U,q=I;else for(;q!==null;){U=q;var k=U.sibling,P=U.return;if(td(U),U===A){q=null;break}if(k!==null){k.return=P,q=k;break}q=P}}}var M=s.alternate;if(M!==null){var F=M.child;if(F!==null){M.child=null;do{var we=F.sibling;F.sibling=null,F=we}while(F!==null)}}q=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,q=d;else e:for(;q!==null;){if(s=q,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Pi(9,s,s.return)}var j=s.sibling;if(j!==null){j.return=s.return,q=j;break e}q=s.return}}var y=e.current;for(q=y;q!==null;){d=q;var S=d.child;if((d.subtreeFlags&2064)!==0&&S!==null)S.return=d,q=S;else e:for(d=y;q!==null;){if(h=q,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:_n(9,h)}}catch(O){ve(h,h.return,O)}if(h===d){q=null;break e}var T=h.sibling;if(T!==null){T.return=h.return,q=T;break e}q=h.return}}if(Z=r,$t(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(en,e)}catch{}n=!0}return n}finally{oe=i,ot.transition=t}}return!1}function yd(e,t,i){t=Ha(i,t),t=Pc(e,t,1),e=Yt(e,t,1),t=Me(),e!==null&&(li(e,1,t),$e(e,t))}function ve(e,t,i){if(e.tag===3)yd(e,e,i);else for(;t!==null;){if(t.tag===3){yd(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Qt===null||!Qt.has(n))){e=Ha(i,e),e=qc(t,e,1),t=Yt(t,e,1),e=Me(),t!==null&&(li(t,1,e),$e(t,e));break}}t=t.return}}function fp(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&i,Ue===e&&(ze&i)===i&&(ke===4||ke===3&&(ze&130023424)===ze&&500>be()-Ho?xa(e,0):Wo|=i),$e(e,t)}function vd(e,t){t===0&&((e.mode&1)===0?t=1:(t=an,an<<=1,(an&130023424)===0&&(an=4194304)));var i=Me();e=It(e,t),e!==null&&(li(e,t,i),$e(e,i))}function gp(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),vd(e,i)}function yp(e,t){var i=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(t),vd(e,i)}var xd;xd=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)He=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return He=!1,np(e,t,i);He=(e.flags&131072)!==0}else He=!1,he&&(t.flags&1048576)!==0&&Xl(t,Cn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Fn(e,t),e=t.pendingProps;var r=qa(t,Le.current);_a(t,i),r=wo(null,t,n,e,r,i);var s=jo();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(n)?(s=!0,jn(t)):s=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ho(t),r.updater=Rn,t.stateNode=r,r._reactInternals=t,Eo(t,n,e,i),t=zo(null,t,n,!0,s,i)):(t.tag=0,he&&s&&io(t),Re(null,t,r,i),t=t.child),t;case 16:n=t.elementType;e:{switch(Fn(e,t),e=t.pendingProps,r=n._init,n=r(n._payload),t.type=n,r=t.tag=xp(n),e=pt(n,e),r){case 0:t=To(null,t,n,e,i);break e;case 1:t=Vc(null,t,n,e,i);break e;case 11:t=Fc(null,t,n,e,i);break e;case 14:t=Oc(null,t,n,pt(n.type,e),i);break e}throw Error(c(306,n,""))}return t;case 0:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:pt(n,r),To(e,t,n,r,i);case 1:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:pt(n,r),Vc(e,t,n,r,i);case 3:e:{if($c(t),e===null)throw Error(c(387));n=t.pendingProps,s=t.memoizedState,r=s.element,sc(e,t),Tn(t,n,null,i);var d=t.memoizedState;if(n=d.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){r=Ha(Error(c(423)),t),t=Gc(e,t,n,i,r);break e}else if(n!==r){r=Ha(Error(c(424)),t),t=Gc(e,t,n,i,r);break e}else for(Ze=Wt(t.stateNode.containerInfo.firstChild),Xe=t,he=!0,mt=null,i=rc(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ma(),n===r){t=zt(e,t,i);break e}Re(e,t,n,i)}t=t.child}return t;case 5:return dc(t),e===null&&oo(t),n=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,d=r.children,Kr(n,r)?d=null:s!==null&&Kr(n,s)&&(t.flags|=32),Hc(e,t),Re(e,t,d,i),t.child;case 6:return e===null&&oo(t),null;case 13:return Yc(e,t,i);case 4:return fo(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Fa(t,null,n,i):Re(e,t,n,i),t.child;case 11:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:pt(n,r),Fc(e,t,n,r,i);case 7:return Re(e,t,t.pendingProps,i),t.child;case 8:return Re(e,t,t.pendingProps.children,i),t.child;case 12:return Re(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(n=t.type._context,r=t.pendingProps,s=t.memoizedProps,d=r.value,de(En,n._currentValue),n._currentValue=d,s!==null)if(ut(s.value,d)){if(s.children===r.children&&!_e.current){t=zt(e,t,i);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var h=s.dependencies;if(h!==null){d=s.child;for(var g=h.firstContext;g!==null;){if(g.context===n){if(s.tag===1){g=Tt(-1,i&-i),g.tag=2;var A=s.updateQueue;if(A!==null){A=A.shared;var U=A.pending;U===null?g.next=g:(g.next=U.next,U.next=g),A.pending=g}}s.lanes|=i,g=s.alternate,g!==null&&(g.lanes|=i),mo(s.return,i,t),h.lanes|=i;break}g=g.next}}else if(s.tag===10)d=s.type===t.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(c(341));d.lanes|=i,h=d.alternate,h!==null&&(h.lanes|=i),mo(d,i,t),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Re(e,t,r.children,i),t=t.child}return t;case 9:return r=t.type,n=t.pendingProps.children,_a(t,i),r=nt(r),n=n(r),t.flags|=1,Re(e,t,n,i),t.child;case 14:return n=t.type,r=pt(n,t.pendingProps),r=pt(n.type,r),Oc(e,t,n,r,i);case 15:return _c(e,t,t.type,t.pendingProps,i);case 17:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:pt(n,r),Fn(e,t),t.tag=1,We(n)?(e=!0,jn(t)):e=!1,_a(t,i),Lc(t,n,r),Eo(t,n,r,i),zo(null,t,n,!0,e,i);case 19:return Qc(e,t,i);case 22:return Wc(e,t,i)}throw Error(c(156,t.tag))};function bd(e,t){return Zs(e,t)}function vp(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,i,n){return new vp(e,t,i,n)}function Xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return Xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vt)return 11;if(e===xt)return 14}return 2}function ea(e,t){var i=e.alternate;return i===null?(i=st(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Kn(e,t,i,n,r,s){var d=2;if(n=e,typeof e=="function")Xo(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Fe:return wa(i.children,r,s,t);case tt:d=8,r|=8;break;case qt:return e=st(12,i,t,r|2),e.elementType=qt,e.lanes=s,e;case Je:return e=st(13,i,t,r),e.elementType=Je,e.lanes=s,e;case ct:return e=st(19,i,t,r),e.elementType=ct,e.lanes=s,e;case ye:return Xn(i,r,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ct:d=10;break e;case la:d=9;break e;case vt:d=11;break e;case xt:d=14;break e;case Oe:d=16,n=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=st(d,i,t,r),t.elementType=e,t.type=n,t.lanes=s,t}function wa(e,t,i,n){return e=st(7,e,n,t),e.lanes=i,e}function Xn(e,t,i,n){return e=st(22,e,n,t),e.elementType=ye,e.lanes=i,e.stateNode={isHidden:!1},e}function Zo(e,t,i){return e=st(6,e,null,t),e.lanes=i,e}function es(e,t,i){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bp(e,t,i,n,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kr(0),this.expirationTimes=kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kr(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ts(e,t,i,n,r,s,d,h,g){return e=new bp(e,t,i,h,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=st(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(s),e}function wp(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Be,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}function wd(e){if(!e)return Vt;e=e._reactInternals;e:{if(ca(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var i=e.type;if(We(i))return Jl(e,i,t)}return t}function jd(e,t,i,n,r,s,d,h,g){return e=ts(i,n,!0,e,r,s,d,h,g),e.context=wd(null),i=e.current,n=Me(),r=Xt(i),s=Tt(n,r),s.callback=t??null,Yt(i,s,r),e.current.lanes=r,li(e,r,n),$e(e,n),e}function Zn(e,t,i,n){var r=t.current,s=Me(),d=Xt(r);return i=wd(i),t.context===null?t.context=i:t.pendingContext=i,t=Tt(s,d),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Yt(r,t,d),e!==null&&(gt(e,r,d,s),In(e,r,d)),d}function er(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function as(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function jp(){return null}var Ad=typeof reportError=="function"?reportError:function(e){console.error(e)};function is(e){this._internalRoot=e}tr.prototype.render=is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Zn(e,t,null,null)},tr.prototype.unmount=is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;va(function(){Zn(null,e,null,null)}),t[kt]=null}};function tr(e){this._internalRoot=e}tr.prototype.unstable_scheduleHydration=function(e){if(e){var t=sl();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Ft.length&&t!==0&&t<Ft[i].priority;i++);Ft.splice(i,0,e),i===0&&dl(e)}};function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ar(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cd(){}function Sp(e,t,i,n,r){if(r){if(typeof n=="function"){var s=n;n=function(){var A=er(d);s.call(A)}}var d=jd(t,n,e,0,null,!1,!1,"",Cd);return e._reactRootContainer=d,e[kt]=d.current,ji(e.nodeType===8?e.parentNode:e),va(),d}for(;r=e.lastChild;)e.removeChild(r);if(typeof n=="function"){var h=n;n=function(){var A=er(g);h.call(A)}}var g=ts(e,0,!1,null,null,!1,!1,"",Cd);return e._reactRootContainer=g,e[kt]=g.current,ji(e.nodeType===8?e.parentNode:e),va(function(){Zn(t,g,i,n)}),g}function ir(e,t,i,n,r){var s=i._reactRootContainer;if(s){var d=s;if(typeof r=="function"){var h=r;r=function(){var g=er(d);h.call(g)}}Zn(t,d,e,r)}else d=Sp(i,t,e,r,n);return er(d)}rl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=si(t.pendingLanes);i!==0&&(Nr(t,i|1),$e(t,be()),(Z&6)===0&&(Ga=be()+500,$t()))}break;case 13:va(function(){var n=It(e,1);if(n!==null){var r=Me();gt(n,e,1,r)}}),as(e,1)}},Er=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var i=Me();gt(t,e,134217728,i)}as(e,134217728)}},ol=function(e){if(e.tag===13){var t=Xt(e),i=It(e,t);if(i!==null){var n=Me();gt(i,e,t,n)}as(e,t)}},sl=function(){return oe},ll=function(e,t){var i=oe;try{return oe=e,t()}finally{oe=i}},br=function(e,t,i){switch(t){case"input":if(mr(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var r=bn(n);if(!r)throw Error(c(90));zs(n),mr(n,r)}}}break;case"textarea":Bs(e,i);break;case"select":t=i.value,t!=null&&Aa(e,!!i.multiple,t,!1)}},$s=Jo,Gs=va;var Ap={usingClientEntryPoint:!1,Events:[Ci,Da,bn,Hs,Vs,Jo]},Mi={findFiberByHostInstance:da,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cp={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ks(e),e===null?null:e.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nr.isDisabled&&nr.supportsFiber)try{en=nr.inject(Cp),bt=nr}catch{}}return Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap,Ge.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ns(t))throw Error(c(200));return wp(e,t,null,i)},Ge.createRoot=function(e,t){if(!ns(e))throw Error(c(299));var i=!1,n="",r=Ad;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=ts(e,1,!1,null,null,i,!1,n,r),e[kt]=t.current,ji(e.nodeType===8?e.parentNode:e),new is(t)},Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Ks(t),e=e===null?null:e.stateNode,e},Ge.flushSync=function(e){return va(e)},Ge.hydrate=function(e,t,i){if(!ar(t))throw Error(c(200));return ir(null,e,t,!0,i)},Ge.hydrateRoot=function(e,t,i){if(!ns(e))throw Error(c(405));var n=i!=null&&i.hydratedSources||null,r=!1,s="",d=Ad;if(i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),t=jd(t,null,e,1,i??null,r,!1,s,d),e[kt]=t.current,ji(e),n)for(e=0;e<n.length;e++)i=n[e],r=i._getVersion,r=r(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,r]:t.mutableSourceEagerHydrationData.push(i,r);return new tr(t)},Ge.render=function(e,t,i){if(!ar(t))throw Error(c(200));return ir(null,e,t,!1,i)},Ge.unmountComponentAtNode=function(e){if(!ar(e))throw Error(c(40));return e._reactRootContainer?(va(function(){ir(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Ge.unstable_batchedUpdates=Jo,Ge.unstable_renderSubtreeIntoContainer=function(e,t,i,n){if(!ar(i))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return ir(e,t,i,!1,n)},Ge.version="18.3.1-next-f1338f8080-20240426",Ge}var Ld;function iu(){if(Ld)return ss.exports;Ld=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),ss.exports=qp(),ss.exports}var Dd;function Bp(){if(Dd)return rr;Dd=1;var o=iu();return rr.createRoot=o.createRoot,rr.hydrateRoot=o.hydrateRoot,rr}var Rp=Bp(),ds,Pd;function Mp(){if(Pd)return ds;Pd=1;var o=typeof Element<"u",l=typeof Map=="function",c=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(m,f){if(m===f)return!0;if(m&&f&&typeof m=="object"&&typeof f=="object"){if(m.constructor!==f.constructor)return!1;var x,v,b;if(Array.isArray(m)){if(x=m.length,x!=f.length)return!1;for(v=x;v--!==0;)if(!p(m[v],f[v]))return!1;return!0}var C;if(l&&m instanceof Map&&f instanceof Map){if(m.size!==f.size)return!1;for(C=m.entries();!(v=C.next()).done;)if(!f.has(v.value[0]))return!1;for(C=m.entries();!(v=C.next()).done;)if(!p(v.value[1],f.get(v.value[0])))return!1;return!0}if(c&&m instanceof Set&&f instanceof Set){if(m.size!==f.size)return!1;for(C=m.entries();!(v=C.next()).done;)if(!f.has(v.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(f)){if(x=m.length,x!=f.length)return!1;for(v=x;v--!==0;)if(m[v]!==f[v])return!1;return!0}if(m.constructor===RegExp)return m.source===f.source&&m.flags===f.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof f.valueOf=="function")return m.valueOf()===f.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof f.toString=="function")return m.toString()===f.toString();if(b=Object.keys(m),x=b.length,x!==Object.keys(f).length)return!1;for(v=x;v--!==0;)if(!Object.prototype.hasOwnProperty.call(f,b[v]))return!1;if(o&&m instanceof Element)return!1;for(v=x;v--!==0;)if(!((b[v]==="_owner"||b[v]==="__v"||b[v]==="__o")&&m.$$typeof)&&!p(m[b[v]],f[b[v]]))return!1;return!0}return m!==m&&f!==f}return ds=function(f,x){try{return p(f,x)}catch(v){if((v.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw v}},ds}var Fp=Mp();const Op=cr(Fp);var us,qd;function _p(){if(qd)return us;qd=1;var o=function(l,c,u,p,m,f,x,v){if(!l){var b;if(c===void 0)b=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var C=[u,p,m,f,x,v],N=0;b=new Error(c.replace(/%s/g,function(){return C[N++]})),b.name="Invariant Violation"}throw b.framesToPop=1,b}};return us=o,us}var Wp=_p();const Bd=cr(Wp);var ms,Rd;function Hp(){return Rd||(Rd=1,ms=function(l,c,u,p){var m=u?u.call(p,l,c):void 0;if(m!==void 0)return!!m;if(l===c)return!0;if(typeof l!="object"||!l||typeof c!="object"||!c)return!1;var f=Object.keys(l),x=Object.keys(c);if(f.length!==x.length)return!1;for(var v=Object.prototype.hasOwnProperty.bind(c),b=0;b<f.length;b++){var C=f[b];if(!v(C))return!1;var N=l[C],B=c[C];if(m=u?u.call(p,N,B,C):void 0,m===!1||m===void 0&&N!==B)return!1}return!0}),ms}var Vp=Hp();const $p=cr(Vp);var nu=(o=>(o.BASE="base",o.BODY="body",o.HEAD="head",o.HTML="html",o.LINK="link",o.META="meta",o.NOSCRIPT="noscript",o.SCRIPT="script",o.STYLE="style",o.TITLE="title",o.FRAGMENT="Symbol(react.fragment)",o))(nu||{}),ps={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Md=Object.values(nu),Ns={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Gp=Object.entries(Ns).reduce((o,[l,c])=>(o[c]=l,o),{}),yt="data-rh",Qa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ka=(o,l)=>{for(let c=o.length-1;c>=0;c-=1){const u=o[c];if(Object.prototype.hasOwnProperty.call(u,l))return u[l]}return null},Yp=o=>{let l=Ka(o,"title");const c=Ka(o,Qa.TITLE_TEMPLATE);if(Array.isArray(l)&&(l=l.join("")),c&&l)return c.replace(/%s/g,()=>l);const u=Ka(o,Qa.DEFAULT_TITLE);return l||u||void 0},Jp=o=>Ka(o,Qa.ON_CHANGE_CLIENT_STATE)||(()=>{}),hs=(o,l)=>l.filter(c=>typeof c[o]<"u").map(c=>c[o]).reduce((c,u)=>({...c,...u}),{}),Qp=(o,l)=>l.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,u)=>{if(!c.length){const p=Object.keys(u);for(let m=0;m<p.length;m+=1){const x=p[m].toLowerCase();if(o.indexOf(x)!==-1&&u[x])return c.concat(u)}}return c},[]),Kp=o=>console&&typeof console.warn=="function"&&console.warn(o),Oi=(o,l,c)=>{const u={};return c.filter(p=>Array.isArray(p[o])?!0:(typeof p[o]<"u"&&Kp(`Helmet: ${o} should be of type "Array". Instead found type "${typeof p[o]}"`),!1)).map(p=>p[o]).reverse().reduce((p,m)=>{const f={};m.filter(v=>{let b;const C=Object.keys(v);for(let B=0;B<C.length;B+=1){const G=C[B],J=G.toLowerCase();l.indexOf(J)!==-1&&!(b==="rel"&&v[b].toLowerCase()==="canonical")&&!(J==="rel"&&v[J].toLowerCase()==="stylesheet")&&(b=J),l.indexOf(G)!==-1&&(G==="innerHTML"||G==="cssText"||G==="itemprop")&&(b=G)}if(!b||!v[b])return!1;const N=v[b].toLowerCase();return u[b]||(u[b]={}),f[b]||(f[b]={}),u[b][N]?!1:(f[b][N]=!0,!0)}).reverse().forEach(v=>p.push(v));const x=Object.keys(f);for(let v=0;v<x.length;v+=1){const b=x[v],C={...u[b],...f[b]};u[b]=C}return p},[]).reverse()},Xp=(o,l)=>{if(Array.isArray(o)&&o.length){for(let c=0;c<o.length;c+=1)if(o[c][l])return!0}return!1},Zp=o=>({baseTag:Qp(["href"],o),bodyAttributes:hs("bodyAttributes",o),defer:Ka(o,Qa.DEFER),encode:Ka(o,Qa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:hs("htmlAttributes",o),linkTags:Oi("link",["rel","href"],o),metaTags:Oi("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:Oi("noscript",["innerHTML"],o),onChangeClientState:Jp(o),scriptTags:Oi("script",["src","innerHTML"],o),styleTags:Oi("style",["cssText"],o),title:Yp(o),titleAttributes:hs("titleAttributes",o),prioritizeSeoTags:Xp(o,Qa.PRIORITIZE_SEO_TAGS)}),ru=o=>Array.isArray(o)?o.join(""):o,eh=(o,l)=>{const c=Object.keys(o);for(let u=0;u<c.length;u+=1)if(l[c[u]]&&l[c[u]].includes(o[c[u]]))return!0;return!1},fs=(o,l)=>Array.isArray(o)?o.reduce((c,u)=>(eh(u,l)?c.priority.push(u):c.default.push(u),c),{priority:[],default:[]}):{default:o,priority:[]},Fd=(o,l)=>({...o,[l]:void 0}),th=["noscript","script","style"],xs=(o,l=!0)=>l===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ou=o=>Object.keys(o).reduce((l,c)=>{const u=typeof o[c]<"u"?`${c}="${o[c]}"`:`${c}`;return l?`${l} ${u}`:u},""),ah=(o,l,c,u)=>{const p=ou(c),m=ru(l);return p?`<${o} ${yt}="true" ${p}>${xs(m,u)}</${o}>`:`<${o} ${yt}="true">${xs(m,u)}</${o}>`},ih=(o,l,c=!0)=>l.reduce((u,p)=>{const m=p,f=Object.keys(m).filter(b=>!(b==="innerHTML"||b==="cssText")).reduce((b,C)=>{const N=typeof m[C]>"u"?C:`${C}="${xs(m[C],c)}"`;return b?`${b} ${N}`:N},""),x=m.innerHTML||m.cssText||"",v=th.indexOf(o)===-1;return`${u}<${o} ${yt}="true" ${f}${v?"/>":`>${x}</${o}>`}`},""),su=(o,l={})=>Object.keys(o).reduce((c,u)=>{const p=Ns[u];return c[p||u]=o[u],c},l),nh=(o,l,c)=>{const u={key:l,[yt]:!0},p=su(c,u);return[Pt.createElement("title",p,l)]},sr=(o,l)=>l.map((c,u)=>{const p={key:u,[yt]:!0};return Object.keys(c).forEach(m=>{const x=Ns[m]||m;if(x==="innerHTML"||x==="cssText"){const v=c.innerHTML||c.cssText;p.dangerouslySetInnerHTML={__html:v}}else p[x]=c[m]}),Pt.createElement(o,p)}),lt=(o,l,c=!0)=>{switch(o){case"title":return{toComponent:()=>nh(o,l.title,l.titleAttributes),toString:()=>ah(o,l.title,l.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>su(l),toString:()=>ou(l)};default:return{toComponent:()=>sr(o,l),toString:()=>ih(o,l,c)}}},rh=({metaTags:o,linkTags:l,scriptTags:c,encode:u})=>{const p=fs(o,ps.meta),m=fs(l,ps.link),f=fs(c,ps.script);return{priorityMethods:{toComponent:()=>[...sr("meta",p.priority),...sr("link",m.priority),...sr("script",f.priority)],toString:()=>`${lt("meta",p.priority,u)} ${lt("link",m.priority,u)} ${lt("script",f.priority,u)}`},metaTags:p.default,linkTags:m.default,scriptTags:f.default}},oh=o=>{const{baseTag:l,bodyAttributes:c,encode:u=!0,htmlAttributes:p,noscriptTags:m,styleTags:f,title:x="",titleAttributes:v,prioritizeSeoTags:b}=o;let{linkTags:C,metaTags:N,scriptTags:B}=o,G={toComponent:()=>{},toString:()=>""};return b&&({priorityMethods:G,linkTags:C,metaTags:N,scriptTags:B}=rh(o)),{priority:G,base:lt("base",l,u),bodyAttributes:lt("bodyAttributes",c,u),htmlAttributes:lt("htmlAttributes",p,u),link:lt("link",C,u),meta:lt("meta",N,u),noscript:lt("noscript",m,u),script:lt("script",B,u),style:lt("style",f,u),title:lt("title",{title:x,titleAttributes:v},u)}},bs=oh,or=[],lu=!!(typeof window<"u"&&window.document&&window.document.createElement),ws=class{constructor(o,l){Dt(this,"instances",[]);Dt(this,"canUseDOM",lu);Dt(this,"context");Dt(this,"value",{setHelmet:o=>{this.context.helmet=o},helmetInstances:{get:()=>this.canUseDOM?or:this.instances,add:o=>{(this.canUseDOM?or:this.instances).push(o)},remove:o=>{const l=(this.canUseDOM?or:this.instances).indexOf(o);(this.canUseDOM?or:this.instances).splice(l,1)}}});this.context=o,this.canUseDOM=l||!1,l||(o.helmet=bs({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},sh={},cu=Pt.createContext(sh),ja,Es=(ja=class extends z.Component{constructor(c){super(c);Dt(this,"helmetData");this.helmetData=new ws(this.props.context||{},ja.canUseDOM)}render(){return Pt.createElement(cu.Provider,{value:this.helmetData.value},this.props.children)}},Dt(ja,"canUseDOM",lu),ja),Ja=(o,l)=>{const c=document.head||document.querySelector("head"),u=c.querySelectorAll(`${o}[${yt}]`),p=[].slice.call(u),m=[];let f;return l&&l.length&&l.forEach(x=>{const v=document.createElement(o);for(const b in x)if(Object.prototype.hasOwnProperty.call(x,b))if(b==="innerHTML")v.innerHTML=x.innerHTML;else if(b==="cssText")v.styleSheet?v.styleSheet.cssText=x.cssText:v.appendChild(document.createTextNode(x.cssText));else{const C=b,N=typeof x[C]>"u"?"":x[C];v.setAttribute(b,N)}v.setAttribute(yt,"true"),p.some((b,C)=>(f=C,v.isEqualNode(b)))?p.splice(f,1):m.push(v)}),p.forEach(x=>{var v;return(v=x.parentNode)==null?void 0:v.removeChild(x)}),m.forEach(x=>c.appendChild(x)),{oldTags:p,newTags:m}},js=(o,l)=>{const c=document.getElementsByTagName(o)[0];if(!c)return;const u=c.getAttribute(yt),p=u?u.split(","):[],m=[...p],f=Object.keys(l);for(const x of f){const v=l[x]||"";c.getAttribute(x)!==v&&c.setAttribute(x,v),p.indexOf(x)===-1&&p.push(x);const b=m.indexOf(x);b!==-1&&m.splice(b,1)}for(let x=m.length-1;x>=0;x-=1)c.removeAttribute(m[x]);p.length===m.length?c.removeAttribute(yt):c.getAttribute(yt)!==f.join(",")&&c.setAttribute(yt,f.join(","))},lh=(o,l)=>{typeof o<"u"&&document.title!==o&&(document.title=ru(o)),js("title",l)},Od=(o,l)=>{const{baseTag:c,bodyAttributes:u,htmlAttributes:p,linkTags:m,metaTags:f,noscriptTags:x,onChangeClientState:v,scriptTags:b,styleTags:C,title:N,titleAttributes:B}=o;js("body",u),js("html",p),lh(N,B);const G={baseTag:Ja("base",c),linkTags:Ja("link",m),metaTags:Ja("meta",f),noscriptTags:Ja("noscript",x),scriptTags:Ja("script",b),styleTags:Ja("style",C)},J={},_={};Object.keys(G).forEach(L=>{const{newTags:ie,oldTags:se}=G[L];ie.length&&(J[L]=ie),se.length&&(_[L]=G[L].oldTags)}),l&&l(),v(o,J,_)},_i=null,ch=o=>{_i&&cancelAnimationFrame(_i),o.defer?_i=requestAnimationFrame(()=>{Od(o,()=>{_i=null})}):(Od(o),_i=null)},dh=ch,_d=class extends z.Component{constructor(){super(...arguments);Dt(this,"rendered",!1)}shouldComponentUpdate(l){return!$p(l,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:l}=this.props.context;l.remove(this),this.emitChange()}emitChange(){const{helmetInstances:l,setHelmet:c}=this.props.context;let u=null;const p=Zp(l.get().map(m=>{const f={...m.props};return delete f.context,f}));Es.canUseDOM?dh(p):bs&&(u=bs(p)),c(u)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:l}=this.props.context;l.add(this),this.emitChange()}render(){return this.init(),null}},vs,uh=(vs=class extends z.Component{shouldComponentUpdate(o){return!Op(Fd(this.props,"helmetData"),Fd(o,"helmetData"))}mapNestedChildrenToProps(o,l){if(!l)return null;switch(o.type){case"script":case"noscript":return{innerHTML:l};case"style":return{cssText:l};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,l,c,u){return{...l,[o.type]:[...l[o.type]||[],{...c,...this.mapNestedChildrenToProps(o,u)}]}}mapObjectTypeChildren(o,l,c,u){switch(o.type){case"title":return{...l,[o.type]:u,titleAttributes:{...c}};case"body":return{...l,bodyAttributes:{...c}};case"html":return{...l,htmlAttributes:{...c}};default:return{...l,[o.type]:{...c}}}}mapArrayTypeChildrenToProps(o,l){let c={...l};return Object.keys(o).forEach(u=>{c={...c,[u]:o[u]}}),c}warnOnInvalidChildren(o,l){return Bd(Md.some(c=>o.type===c),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Md.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),Bd(!l||typeof l=="string"||Array.isArray(l)&&!l.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,l){let c={};return Pt.Children.forEach(o,u=>{if(!u||!u.props)return;const{children:p,...m}=u.props,f=Object.keys(m).reduce((v,b)=>(v[Gp[b]||b]=m[b],v),{});let{type:x}=u;switch(typeof x=="symbol"?x=x.toString():this.warnOnInvalidChildren(u,p),x){case"Symbol(react.fragment)":l=this.mapChildrenToProps(p,l);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(u,c,f,p);break;default:l=this.mapObjectTypeChildren(u,l,f,p);break}}),this.mapArrayTypeChildrenToProps(c,l)}render(){const{children:o,...l}=this.props;let c={...l},{helmetData:u}=l;if(o&&(c=this.mapChildrenToProps(o,c)),u&&!(u instanceof ws)){const p=u;u=new ws(p.context,!0),delete c.helmetData}return u?Pt.createElement(_d,{...c,context:u.value}):Pt.createElement(cu.Consumer,null,p=>Pt.createElement(_d,{...c,context:p}))}},Dt(vs,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),vs);iu();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(o[u]=c[u])}return o},Hi.apply(null,arguments)}var na;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(na||(na={}));const Wd="popstate";function mh(o){o===void 0&&(o={});function l(u,p){let{pathname:m,search:f,hash:x}=u.location;return Ss("",{pathname:m,search:f,hash:x},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function c(u,p){return typeof p=="string"?p:lr(p)}return hh(l,c,null,o)}function Se(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function Us(o,l){if(!o){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function ph(){return Math.random().toString(36).substr(2,8)}function Hd(o,l){return{usr:o.state,key:o.key,idx:l}}function Ss(o,l,c,u){return c===void 0&&(c=null),Hi({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof l=="string"?Xa(l):l,{state:c,key:l&&l.key||u||ph()})}function lr(o){let{pathname:l="/",search:c="",hash:u=""}=o;return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Xa(o){let l={};if(o){let c=o.indexOf("#");c>=0&&(l.hash=o.substr(c),o=o.substr(0,c));let u=o.indexOf("?");u>=0&&(l.search=o.substr(u),o=o.substr(0,u)),o&&(l.pathname=o)}return l}function hh(o,l,c,u){u===void 0&&(u={});let{window:p=document.defaultView,v5Compat:m=!1}=u,f=p.history,x=na.Pop,v=null,b=C();b==null&&(b=0,f.replaceState(Hi({},f.state,{idx:b}),""));function C(){return(f.state||{idx:null}).idx}function N(){x=na.Pop;let L=C(),ie=L==null?null:L-b;b=L,v&&v({action:x,location:_.location,delta:ie})}function B(L,ie){x=na.Push;let se=Ss(_.location,L,ie);b=C()+1;let ne=Hd(se,b),le=_.createHref(se);try{f.pushState(ne,"",le)}catch(Ne){if(Ne instanceof DOMException&&Ne.name==="DataCloneError")throw Ne;p.location.assign(le)}m&&v&&v({action:x,location:_.location,delta:1})}function G(L,ie){x=na.Replace;let se=Ss(_.location,L,ie);b=C();let ne=Hd(se,b),le=_.createHref(se);f.replaceState(ne,"",le),m&&v&&v({action:x,location:_.location,delta:0})}function J(L){let ie=p.location.origin!=="null"?p.location.origin:p.location.href,se=typeof L=="string"?L:lr(L);return se=se.replace(/ $/,"%20"),Se(ie,"No window.location.(origin|href) available to create URL for href: "+se),new URL(se,ie)}let _={get action(){return x},get location(){return o(p,f)},listen(L){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(Wd,N),v=L,()=>{p.removeEventListener(Wd,N),v=null}},createHref(L){return l(p,L)},createURL:J,encodeLocation(L){let ie=J(L);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:B,replace:G,go(L){return f.go(L)}};return _}var Vd;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Vd||(Vd={}));function fh(o,l,c){return c===void 0&&(c="/"),gh(o,l,c)}function gh(o,l,c,u){let p=typeof l=="string"?Xa(l):l,m=Is(p.pathname||"/",c);if(m==null)return null;let f=du(o);yh(f);let x=null,v=Uh(m);for(let b=0;x==null&&b<f.length;++b)x=kh(f[b],v);return x}function du(o,l,c,u){l===void 0&&(l=[]),c===void 0&&(c=[]),u===void 0&&(u="");let p=(m,f,x)=>{let v={relativePath:x===void 0?m.path||"":x,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};v.relativePath.startsWith("/")&&(Se(v.relativePath.startsWith(u),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(u.length));let b=ra([u,v.relativePath]),C=c.concat(v);m.children&&m.children.length>0&&(Se(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),du(m.children,l,C,b)),!(m.path==null&&!m.index)&&l.push({path:b,score:Ah(b,m.index),routesMeta:C})};return o.forEach((m,f)=>{var x;if(m.path===""||!((x=m.path)!=null&&x.includes("?")))p(m,f);else for(let v of uu(m.path))p(m,f,v)}),l}function uu(o){let l=o.split("/");if(l.length===0)return[];let[c,...u]=l,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(u.length===0)return p?[m,""]:[m];let f=uu(u.join("/")),x=[];return x.push(...f.map(v=>v===""?m:[m,v].join("/"))),p&&x.push(...f),x.map(v=>o.startsWith("/")&&v===""?"/":v)}function yh(o){o.sort((l,c)=>l.score!==c.score?c.score-l.score:Ch(l.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}const vh=/^:[\w-]+$/,xh=3,bh=2,wh=1,jh=10,Sh=-2,$d=o=>o==="*";function Ah(o,l){let c=o.split("/"),u=c.length;return c.some($d)&&(u+=Sh),l&&(u+=bh),c.filter(p=>!$d(p)).reduce((p,m)=>p+(vh.test(m)?xh:m===""?wh:jh),u)}function Ch(o,l){return o.length===l.length&&o.slice(0,-1).every((u,p)=>u===l[p])?o[o.length-1]-l[l.length-1]:0}function kh(o,l,c){let{routesMeta:u}=o,p={},m="/",f=[];for(let x=0;x<u.length;++x){let v=u[x],b=x===u.length-1,C=m==="/"?l:l.slice(m.length)||"/",N=Nh({path:v.relativePath,caseSensitive:v.caseSensitive,end:b},C),B=v.route;if(!N)return null;Object.assign(p,N.params),f.push({params:p,pathname:ra([m,N.pathname]),pathnameBase:Dh(ra([m,N.pathnameBase])),route:B}),N.pathnameBase!=="/"&&(m=ra([m,N.pathnameBase]))}return f}function Nh(o,l){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,u]=Eh(o.path,o.caseSensitive,o.end),p=l.match(c);if(!p)return null;let m=p[0],f=m.replace(/(.)\/+$/,"$1"),x=p.slice(1);return{params:u.reduce((b,C,N)=>{let{paramName:B,isOptional:G}=C;if(B==="*"){let _=x[N]||"";f=m.slice(0,m.length-_.length).replace(/(.)\/+$/,"$1")}const J=x[N];return G&&!J?b[B]=void 0:b[B]=(J||"").replace(/%2F/g,"/"),b},{}),pathname:m,pathnameBase:f,pattern:o}}function Eh(o,l,c){l===void 0&&(l=!1),c===void 0&&(c=!0),Us(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let u=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,x,v)=>(u.push({paramName:x,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(u.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,l?void 0:"i"),u]}function Uh(o){try{return o.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Us(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),o}}function Is(o,l){if(l==="/")return o;if(!o.toLowerCase().startsWith(l.toLowerCase()))return null;let c=l.endsWith("/")?l.length-1:l.length,u=o.charAt(c);return u&&u!=="/"?null:o.slice(c)||"/"}const Ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Th=o=>Ih.test(o);function zh(o,l){l===void 0&&(l="/");let{pathname:c,search:u="",hash:p=""}=typeof o=="string"?Xa(o):o,m;if(c)if(Th(c))m=c;else{if(c.includes("//")){let f=c;c=hu(c),Us(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+c))}c.startsWith("/")?m=Gd(c.substring(1),"/"):m=Gd(c,l)}else m=l;return{pathname:m,search:Ph(u),hash:qh(p)}}function Gd(o,l){let c=l.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function gs(o,l,c,u){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lh(o){return o.filter((l,c)=>c===0||l.route.path&&l.route.path.length>0)}function mu(o,l){let c=Lh(o);return l?c.map((u,p)=>p===c.length-1?u.pathname:u.pathnameBase):c.map(u=>u.pathnameBase)}function pu(o,l,c,u){u===void 0&&(u=!1);let p;typeof o=="string"?p=Xa(o):(p=Hi({},o),Se(!p.pathname||!p.pathname.includes("?"),gs("?","pathname","search",p)),Se(!p.pathname||!p.pathname.includes("#"),gs("#","pathname","hash",p)),Se(!p.search||!p.search.includes("#"),gs("#","search","hash",p)));let m=o===""||p.pathname==="",f=m?"/":p.pathname,x;if(f==null)x=c;else{let N=l.length-1;if(!u&&f.startsWith("..")){let B=f.split("/");for(;B[0]==="..";)B.shift(),N-=1;p.pathname=B.join("/")}x=N>=0?l[N]:"/"}let v=zh(p,x),b=f&&f!=="/"&&f.endsWith("/"),C=(m||f===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(b||C)&&(v.pathname+="/"),v}const hu=o=>o.replace(/\/\/+/g,"/"),ra=o=>hu(o.join("/")),Dh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Ph=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,qh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Bh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const fu=["post","put","patch","delete"];new Set(fu);const Rh=["get",...fu];new Set(Rh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(o[u]=c[u])}return o},Vi.apply(null,arguments)}const Ts=z.createContext(null),Mh=z.createContext(null),Sa=z.createContext(null),dr=z.createContext(null),sa=z.createContext({outlet:null,matches:[],isDataRoute:!1}),gu=z.createContext(null);function Fh(o,l){let{relative:c}=l===void 0?{}:l;$i()||Se(!1);let{basename:u,navigator:p}=z.useContext(Sa),{hash:m,pathname:f,search:x}=vu(o,{relative:c}),v=f;return u!=="/"&&(v=f==="/"?u:ra([u,f])),p.createHref({pathname:v,search:x,hash:m})}function $i(){return z.useContext(dr)!=null}function Gi(){return $i()||Se(!1),z.useContext(dr).location}function yu(o){z.useContext(Sa).static||z.useLayoutEffect(o)}function Ye(){let{isDataRoute:o}=z.useContext(sa);return o?Zh():Oh()}function Oh(){$i()||Se(!1);let o=z.useContext(Ts),{basename:l,future:c,navigator:u}=z.useContext(Sa),{matches:p}=z.useContext(sa),{pathname:m}=Gi(),f=JSON.stringify(mu(p,c.v7_relativeSplatPath)),x=z.useRef(!1);return yu(()=>{x.current=!0}),z.useCallback(function(b,C){if(C===void 0&&(C={}),!x.current)return;if(typeof b=="number"){u.go(b);return}let N=pu(b,JSON.parse(f),m,C.relative==="path");o==null&&l!=="/"&&(N.pathname=N.pathname==="/"?l:ra([l,N.pathname])),(C.replace?u.replace:u.push)(N,C.state,C)},[l,u,f,m,o])}function Za(){let{matches:o}=z.useContext(sa),l=o[o.length-1];return l?l.params:{}}function vu(o,l){let{relative:c}=l===void 0?{}:l,{future:u}=z.useContext(Sa),{matches:p}=z.useContext(sa),{pathname:m}=Gi(),f=JSON.stringify(mu(p,u.v7_relativeSplatPath));return z.useMemo(()=>pu(o,JSON.parse(f),m,c==="path"),[o,f,m,c])}function _h(o,l){return Wh(o,l)}function Wh(o,l,c,u){$i()||Se(!1);let{navigator:p}=z.useContext(Sa),{matches:m}=z.useContext(sa),f=m[m.length-1],x=f?f.params:{};f&&f.pathname;let v=f?f.pathnameBase:"/";f&&f.route;let b=Gi(),C;if(l){var N;let L=typeof l=="string"?Xa(l):l;v==="/"||(N=L.pathname)!=null&&N.startsWith(v)||Se(!1),C=L}else C=b;let B=C.pathname||"/",G=B;if(v!=="/"){let L=v.replace(/^\//,"").split("/");G="/"+B.replace(/^\//,"").split("/").slice(L.length).join("/")}let J=fh(o,{pathname:G}),_=Yh(J&&J.map(L=>Object.assign({},L,{params:Object.assign({},x,L.params),pathname:ra([v,p.encodeLocation?p.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?v:ra([v,p.encodeLocation?p.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),m,c,u);return l&&_?z.createElement(dr.Provider,{value:{location:Vi({pathname:"/",search:"",hash:"",state:null,key:"default"},C),navigationType:na.Pop}},_):_}function Hh(){let o=Xh(),l=Bh(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},l),c?z.createElement("pre",{style:p},c):null,null)}const Vh=z.createElement(Hh,null);class $h extends z.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){console.error("React Router caught the following error during render",l,c)}render(){return this.state.error!==void 0?z.createElement(sa.Provider,{value:this.props.routeContext},z.createElement(gu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gh(o){let{routeContext:l,match:c,children:u}=o,p=z.useContext(Ts);return p&&p.static&&p.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=c.route.id),z.createElement(sa.Provider,{value:l},u)}function Yh(o,l,c,u){var p;if(l===void 0&&(l=[]),c===void 0&&(c=null),u===void 0&&(u=null),o==null){var m;if(!c)return null;if(c.errors)o=c.matches;else if((m=u)!=null&&m.v7_partialHydration&&l.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let f=o,x=(p=c)==null?void 0:p.errors;if(x!=null){let C=f.findIndex(N=>N.route.id&&(x==null?void 0:x[N.route.id])!==void 0);C>=0||Se(!1),f=f.slice(0,Math.min(f.length,C+1))}let v=!1,b=-1;if(c&&u&&u.v7_partialHydration)for(let C=0;C<f.length;C++){let N=f[C];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(b=C),N.route.id){let{loaderData:B,errors:G}=c,J=N.route.loader&&B[N.route.id]===void 0&&(!G||G[N.route.id]===void 0);if(N.route.lazy||J){v=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}return f.reduceRight((C,N,B)=>{let G,J=!1,_=null,L=null;c&&(G=x&&N.route.id?x[N.route.id]:void 0,_=N.route.errorElement||Vh,v&&(b<0&&B===0?(ef("route-fallback"),J=!0,L=null):b===B&&(J=!0,L=N.route.hydrateFallbackElement||null)));let ie=l.concat(f.slice(0,B+1)),se=()=>{let ne;return G?ne=_:J?ne=L:N.route.Component?ne=z.createElement(N.route.Component,null):N.route.element?ne=N.route.element:ne=C,z.createElement(Gh,{match:N,routeContext:{outlet:C,matches:ie,isDataRoute:c!=null},children:ne})};return c&&(N.route.ErrorBoundary||N.route.errorElement||B===0)?z.createElement($h,{location:c.location,revalidation:c.revalidation,component:_,error:G,children:se(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):se()},null)}var xu=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(xu||{}),bu=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(bu||{});function Jh(o){let l=z.useContext(Ts);return l||Se(!1),l}function Qh(o){let l=z.useContext(Mh);return l||Se(!1),l}function Kh(o){let l=z.useContext(sa);return l||Se(!1),l}function wu(o){let l=Kh(),c=l.matches[l.matches.length-1];return c.route.id||Se(!1),c.route.id}function Xh(){var o;let l=z.useContext(gu),c=Qh(),u=wu();return l!==void 0?l:(o=c.errors)==null?void 0:o[u]}function Zh(){let{router:o}=Jh(xu.UseNavigateStable),l=wu(bu.UseNavigateStable),c=z.useRef(!1);return yu(()=>{c.current=!0}),z.useCallback(function(p,m){m===void 0&&(m={}),c.current&&(typeof p=="number"?o.navigate(p):o.navigate(p,Vi({fromRouteId:l},m)))},[o,l])}const Yd={};function ef(o,l,c){Yd[o]||(Yd[o]=!0)}function tf(o,l){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function xe(o){Se(!1)}function af(o){let{basename:l="/",children:c=null,location:u,navigationType:p=na.Pop,navigator:m,static:f=!1,future:x}=o;$i()&&Se(!1);let v=l.replace(/^\/*/,"/"),b=z.useMemo(()=>({basename:v,navigator:m,static:f,future:Vi({v7_relativeSplatPath:!1},x)}),[v,x,m,f]);typeof u=="string"&&(u=Xa(u));let{pathname:C="/",search:N="",hash:B="",state:G=null,key:J="default"}=u,_=z.useMemo(()=>{let L=Is(C,v);return L==null?null:{location:{pathname:L,search:N,hash:B,state:G,key:J},navigationType:p}},[v,C,N,B,G,J,p]);return _==null?null:z.createElement(Sa.Provider,{value:b},z.createElement(dr.Provider,{children:c,value:_}))}function nf(o){let{children:l,location:c}=o;return _h(As(l),c)}new Promise(()=>{});function As(o,l){l===void 0&&(l=[]);let c=[];return z.Children.forEach(o,(u,p)=>{if(!z.isValidElement(u))return;let m=[...l,p];if(u.type===z.Fragment){c.push.apply(c,As(u.props.children,m));return}u.type!==xe&&Se(!1),!u.props.index||!u.props.children||Se(!1);let f={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=As(u.props.children,m)),c.push(f)}),c}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(o[u]=c[u])}return o},Cs.apply(null,arguments)}function rf(o,l){if(o==null)return{};var c={};for(var u in o)if({}.hasOwnProperty.call(o,u)){if(l.indexOf(u)!==-1)continue;c[u]=o[u]}return c}function of(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function sf(o,l){return o.button===0&&(!l||l==="_self")&&!of(o)}const lf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cf="6";try{window.__reactRouterVersion=cf}catch{}const df="startTransition",Jd=Lp[df];function uf(o){let{basename:l,children:c,future:u,window:p}=o,m=z.useRef();m.current==null&&(m.current=mh({window:p,v5Compat:!0}));let f=m.current,[x,v]=z.useState({action:f.action,location:f.location}),{v7_startTransition:b}=u||{},C=z.useCallback(N=>{b&&Jd?Jd(()=>v(N)):v(N)},[v,b]);return z.useLayoutEffect(()=>f.listen(C),[f,C]),z.useEffect(()=>tf(u),[u]),z.createElement(af,{basename:l,children:c,location:x.location,navigationType:x.action,navigator:f,future:u})}const mf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=z.forwardRef(function(l,c){let{onClick:u,relative:p,reloadDocument:m,replace:f,state:x,target:v,to:b,preventScrollReset:C,viewTransition:N}=l,B=rf(l,lf),{basename:G}=z.useContext(Sa),J,_=!1;if(typeof b=="string"&&pf.test(b)&&(J=b,mf))try{let ne=new URL(window.location.href),le=b.startsWith("//")?new URL(ne.protocol+b):new URL(b),Ne=Is(le.pathname,G);le.origin===ne.origin&&Ne!=null?b=Ne+le.search+le.hash:_=!0}catch{}let L=Fh(b,{relative:p}),ie=hf(b,{replace:f,state:x,target:v,preventScrollReset:C,relative:p,viewTransition:N});function se(ne){u&&u(ne),ne.defaultPrevented||ie(ne)}return z.createElement("a",Cs({},B,{href:J||L,onClick:_||m?u:se,ref:c,target:v}))});var Qd;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(Qd||(Qd={}));var Kd;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Kd||(Kd={}));function hf(o,l){let{target:c,replace:u,state:p,preventScrollReset:m,relative:f,viewTransition:x}=l===void 0?{}:l,v=Ye(),b=Gi(),C=vu(o,{relative:f});return z.useCallback(N=>{if(sf(N,c)){N.preventDefault();let B=u!==void 0?u:lr(b)===lr(C);v(o,{replace:B,state:p,preventScrollReset:m,relative:f,viewTransition:x})}},[b,v,C,u,p,c,o,m,f,x])}function ei(o,l){typeof gtag<"u"&&gtag("event",o,l)}function ju(o){ei("generate_lead",{event_category:"contact",event_label:o.service||"general",language:o.language})}function oa(o){ei("phone_call_click",{event_category:"contact",phone_number:o.phone_number,location:o.location,language:o.language})}function Su(o){ei("cta_click",{event_category:"engagement",cta_label:o.label,location:o.location,language:o.language})}function Au(o){ei("service_view",{event_category:"engagement",service_name:o.service_name,service_slug:o.service_slug,language:o.language})}function Cu(o){ei("resource_view",{event_category:"engagement",resource_name:o.resource_name,resource_slug:o.resource_slug,language:o.language})}function ff(o){ei("language_switch",{event_category:"engagement",from_language:o.from,to_language:o.to})}const Xd=[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Practice Areas",path:"/services"},{label:"Resources",path:"/resources"},{label:"Success Stories",path:"/success-stories"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],Zd=[{label:"Inicio",path:"/es"},{label:"Sobre Nosotros",path:"/es/sobre-nosotros"},{label:"Servicios",path:"/es/servicios"},{label:"Recursos",path:"/es/recursos"},{label:"Historias de Éxito",path:"/es/historias-de-exito"},{label:"Blog",path:"/es/blog"},{label:"Contáctenos",path:"/es/contactenos"}];function gf(){const[o,l]=z.useState(!1),[c,u]=z.useState(!1),p=Gi(),m=Ye(),f=p.pathname.startsWith("/es"),x=b=>p.pathname===b;z.useEffect(()=>{const b=()=>u(window.scrollY>20);return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]),z.useEffect(()=>{l(!1),window.scrollTo({top:0,behavior:"smooth"})},[p.pathname]);const v=()=>{ff({from:f?"es":"en",to:f?"en":"es"}),m(f?"/":"/es")};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"bg-[#131E35] text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsxs("a",{href:"tel:2133881821",onClick:()=>oa({phone_number:"2133881821",location:"nav",language:f?"es":"en"}),className:"hover:text-[#D4A853] transition-colors flex items-center gap-1.5",children:[a.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),"(213) 388-1821"]}),a.jsx("a",{href:"tel:8552016898",onClick:()=>oa({phone_number:"8552016898",location:"nav",language:f?"es":"en"}),className:"hover:text-[#D4A853] transition-colors hidden sm:flex items-center gap-1.5",children:"Toll Free: (855) 201-6898"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("button",{onClick:v,className:"bg-[#D4A853] text-[#1B2A4A] px-3 py-0.5 rounded-full text-xs font-bold tracking-wide hover:bg-[#E8C97A] transition-colors cursor-pointer",children:f?"English":"Español"}),a.jsx("span",{className:"hidden sm:inline text-gray-400",children:"|"}),a.jsx("span",{className:"hidden sm:inline",children:f?"Consulta":"Consultation"})]})]})}),a.jsxs("nav",{className:`sticky top-0 z-50 transition-all duration-300 ${c?"bg-[#1B2A4A]/98 backdrop-blur-md shadow-lg":"bg-[#1B2A4A]"}`,children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between items-center h-20",children:[a.jsxs(Y,{to:"/",className:"flex flex-col items-start group",children:[a.jsxs("span",{className:"text-white font-serif text-xl md:text-2xl font-bold tracking-tight leading-tight",children:["Law Office of ",a.jsx("span",{className:"text-[#D4A853]",children:"Todd Becraft"})]}),a.jsx("span",{className:"text-gray-400 text-[11px] tracking-[0.2em] uppercase mt-0.5",children:f?"Abogados de Inmigración de Los Ángeles":"Los Angeles Immigration Lawyers"})]}),a.jsxs("div",{className:"hidden lg:flex items-center gap-5",children:[f?Zd.map(b=>a.jsx(Y,{to:b.path,className:`nav-link relative pb-1 whitespace-nowrap ${x(b.path)?"text-[#D4A853] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4A853]":""}`,children:b.label},b.path)):Xd.map(b=>a.jsx(Y,{to:b.path,className:`nav-link relative pb-1 whitespace-nowrap ${x(b.path)?"text-[#D4A853] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4A853]":""}`,children:b.label},b.path)),a.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6 py-2.5",children:f?"Consulta":"Consultation"})]}),a.jsx("button",{onClick:()=>l(!o),className:"lg:hidden text-white p-2","aria-label":"Toggle menu",children:o?a.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):a.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]})}),a.jsx("div",{className:`lg:hidden transition-all duration-300 overflow-hidden ${o?"max-h-[500px] border-t border-white/10":"max-h-0"}`,children:a.jsxs("div",{className:"px-4 py-4 space-y-1 bg-[#1B2A4A]",children:[f?Zd.map(b=>a.jsx(Y,{to:b.path,className:`block w-full text-left px-4 py-3 rounded-md text-sm tracking-wide transition-colors ${x(b.path)?"text-[#D4A853] bg-white/5":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:b.label},b.path)):Xd.map(b=>a.jsx(Y,{to:b.path,className:`block w-full text-left px-4 py-3 rounded-md text-sm tracking-wide transition-colors ${x(b.path)?"text-[#D4A853] bg-white/5":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:b.label},b.path)),a.jsx("div",{className:"pt-3 px-4",children:a.jsx("a",{href:"tel:2133881821",className:"btn-gold w-full text-center text-xs",children:"Call (213) 388-1821"})})]})})]})]})}function yf(){return a.jsxs("footer",{className:"bg-[#131E35] text-gray-300",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:[a.jsxs("div",{className:"lg:col-span-1",children:[a.jsxs("h3",{className:"text-white font-serif text-xl font-bold mb-2",children:["Law Office of ",a.jsx("span",{className:"text-[#D4A853]",children:"Todd Becraft"})]}),a.jsx("p",{className:"text-gray-400 text-xs tracking-[0.15em] uppercase mb-6",children:"Los Angeles Immigration Lawyers"}),a.jsx("div",{className:"gold-line mb-6"}),a.jsx("p",{className:"text-sm leading-relaxed text-gray-400",children:"Defending the rights of immigrants and their families for over 20 years. Dedicated exclusively to immigration law."}),a.jsx("div",{className:"mt-6 inline-block bg-[#D4A853] text-[#1B2A4A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide",children:"Se Habla Español"})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Quick Links"}),a.jsx("ul",{className:"space-y-3",children:[{label:"Home",path:"/"},{label:"About the Firm",path:"/about"},{label:"Practice Areas",path:"/services"},{label:"Success Stories",path:"/success-stories"},{label:"Contact Us",path:"/contact"}].map(o=>a.jsx("li",{children:a.jsx(Y,{to:o.path,className:"text-gray-400 hover:text-[#D4A853] transition-colors text-sm",children:o.label})},o.path))})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Practice Areas"}),a.jsx("ul",{className:"space-y-3",children:["Asylum","Deportation Defense","Green Cards","Family Immigration","Citizenship","DACA","U-Visa"].map(o=>a.jsx("li",{children:a.jsx(Y,{to:"/services",className:"text-gray-400 hover:text-[#D4A853] transition-colors text-sm",children:o})},o))})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Contact Us"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsxs("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),a.jsx("div",{className:"text-sm",children:a.jsx("p",{className:"text-gray-300",children:"Los Angeles, California"})})]}),a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),a.jsxs("div",{className:"text-sm",children:[a.jsx("a",{href:"tel:2133881821",className:"text-gray-300 hover:text-[#D4A853] transition-colors block",children:"(213) 388-1821"}),a.jsx("a",{href:"tel:8552016898",className:"text-gray-400 hover:text-[#D4A853] transition-colors block mt-1",children:"Toll Free: (855) 201-6898"})]})]}),a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),a.jsxs("div",{className:"text-sm text-gray-400",children:[a.jsx("p",{children:"Mon – Fri: 9:00 AM – 6:00 PM"}),a.jsx("p",{children:"Sat: By Appointment"})]})]})]}),a.jsx("div",{className:"flex gap-4 mt-6",children:["facebook","linkedin","twitter"].map(o=>a.jsxs("a",{href:"#",className:"w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#D4A853] hover:text-[#D4A853] transition-colors","aria-label":o,children:[o==="facebook"&&a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),o==="linkedin"&&a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),o==="twitter"&&a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})]},o))})]})]})}),a.jsx("div",{className:"border-t border-white/10",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:a.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[a.jsxs("p",{className:"text-gray-500 text-xs text-center md:text-left",children:["© ",new Date().getFullYear()," Law Office of Todd Becraft. All rights reserved."]}),a.jsx("p",{className:"text-gray-600 text-[10px] text-center md:text-right max-w-2xl leading-relaxed",children:"Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Past results do not guarantee future outcomes."})]})})})]})}const Wi=[{quote:"Attorney Todd Becraft is an exceptional and knowledgeable immigration attorney. He handled my case with such class and dignity — I won my case. I would highly recommend the Law Offices of Attny. Todd Becraft.",author:"Joseph M.",service:"via Yelp"},{quote:"I will always remember the professional legal services I received from the Law Office of Todd Becraft. All staff are caring and always work according to the instructions of their client. The services I received were far more than what I was charged.",author:"Tiwa Bob",service:"via Google"},{quote:"One hundred percent recommend as the best California immigration attorney, if not one of the best at the country level. His team together make perhaps the best team to handle cases of immigration in the country.",author:"Ariel Arauz",service:"via Google"},{quote:"He is a unique, incomparable and amazing lawyer I have never seen. He wiped tears in my eyes. I recommend to all people who have immigration problems, come talk to Mr. Todd Becraft — you will not be disappointed.",author:"Manu",service:"via Avvo"}];function vf(){const[o,l]=z.useState(0),[c,u]=z.useState(!1),p=z.useCallback(m=>{c||(u(!0),l(m),setTimeout(()=>u(!1),500))},[c]);return z.useEffect(()=>{const m=setInterval(()=>{p((o+1)%Wi.length)},6e3);return()=>clearInterval(m)},[o,p]),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"text-center mb-8",children:a.jsx("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/30",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})})}),a.jsx("div",{className:"min-h-[200px] flex items-center justify-center",children:a.jsxs("div",{className:`text-center transition-opacity duration-500 ${c?"opacity-0":"opacity-100"}`,children:[a.jsxs("blockquote",{className:"text-xl md:text-2xl font-serif text-[#1B2A4A] leading-relaxed max-w-3xl mx-auto mb-8 italic",children:['"',Wi[o].quote,'"']}),a.jsx("div",{className:"gold-line-center mb-4"}),a.jsx("p",{className:"text-[#D4A853] font-semibold tracking-wide",children:Wi[o].author}),a.jsx("p",{className:"text-gray-500 text-sm mt-1",children:Wi[o].service})]})}),a.jsx("div",{className:"flex justify-center gap-3 mt-8",children:Wi.map((m,f)=>a.jsx("button",{onClick:()=>p(f),className:`transition-all duration-300 rounded-full ${f===o?"w-8 h-2 bg-[#D4A853]":"w-2 h-2 bg-[#1B2A4A]/20 hover:bg-[#1B2A4A]/40"}`,"aria-label":`Go to testimonial ${f+1}`},f))}),a.jsx("p",{className:"text-center text-gray-400 text-xs mt-6",children:"From verified client reviews"})]})}const eu="https://www.becraftimmigrationlaw.com",xf="https://www.makeitglow.co/api/og/becraft-immigration";function Ae({title:o,description:l,canonical:c,ogImage:u,schema:p,hreflang:m}){const f=c?`${eu}${c}`:"",x=p?Array.isArray(p)?p:[p]:[],v=u||`${xf}?title=${encodeURIComponent(o)}&subtitle=${encodeURIComponent(l.slice(0,80))}`;return a.jsxs(uh,{children:[a.jsx("title",{children:o}),a.jsx("meta",{name:"description",content:l}),f&&a.jsx("link",{rel:"canonical",href:f}),a.jsx("meta",{property:"og:title",content:o}),a.jsx("meta",{property:"og:description",content:l}),a.jsx("meta",{property:"og:type",content:"website"}),f&&a.jsx("meta",{property:"og:url",content:f}),a.jsx("meta",{property:"og:image",content:v}),a.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),a.jsx("meta",{name:"twitter:title",content:o}),a.jsx("meta",{name:"twitter:description",content:l}),a.jsx("meta",{name:"twitter:image",content:v}),m==null?void 0:m.map(b=>a.jsx("link",{rel:"alternate",hrefLang:b.lang,href:`${eu}${b.path}`},b.lang)),x.map((b,C)=>a.jsx("script",{type:"application/ld+json",children:JSON.stringify(b)},C))]})}const bf=[{title:"Asylum",desc:"Protection for those fleeing persecution",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})},{title:"BIA & 9th Circuit Appeals",desc:"Challenging unfavorable decisions",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"})})},{title:"Cancellation of Removal",desc:"Stopping deportation proceedings",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})})},{title:"Citizenship & Naturalization",desc:"Becoming a U.S. citizen",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})},{title:"DACA",desc:"Deferred Action for Childhood Arrivals",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})})},{title:"Deportation Defense",desc:"Fighting removal from the U.S.",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"})})},{title:"Green Cards",desc:"Adjustment of Status applications",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})})},{title:"I-601A Waivers",desc:"Provisional unlawful presence waivers",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l2.25 2.25M9.75 14.25l2.25-2.25M6 3.75v16.5h12V8.25L13.5 3.75H6z"})})},{title:"K-1 Fiance Visas",desc:"Bringing your fiance to the U.S.",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})},{title:"TPS",desc:"Temporary Protected Status",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})},{title:"U-Visa",desc:"Protection for crime victims",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})},{title:"Family Immigration",desc:"Reuniting families in the U.S.",icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})})}],wf=[{name:"Three Best Rated",year:"2024"},{name:"10 Best Immigration Attorneys",year:"AIOLA"},{name:"AVVO Top Rated",year:"10.0 Rating"},{name:"21 Best by Expertise",year:"Los Angeles"}];function tu(){const o=Ye();return a.jsxs("div",{children:[a.jsx(Ae,{title:"Los Angeles Immigration Lawyers | Law Office of Todd Becraft",description:"Expert immigration attorneys in Los Angeles. Asylum, deportation defense, green cards, citizenship, DACA, and more. Free consultation: (213) 388-1821.",canonical:"/",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:[{lang:"en",path:"/"},{lang:"es",path:"/es"},{lang:"x-default",path:"/"}]}),a.jsxs("section",{className:"relative bg-[#1B2A4A] overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.4) 1px, transparent 0)",backgroundSize:"40px 40px"}}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-8"}),a.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6",children:["Defending Your Right to a"," ",a.jsx("span",{className:"text-[#D4A853]",children:"Better Future"})]}),a.jsx("p",{className:"text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl",children:"For over 20 years, the Law Office of Todd Becraft has fought tirelessly for immigrants and their families in Los Angeles and throughout the United States."}),a.jsx("p",{className:"text-gray-400 mb-10",children:"Immigration law is all we do — and we do it exceptionally well."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[a.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Consultation"]}),a.jsx("button",{onClick:()=>o("/services"),className:"btn-outline",children:"Our Practice Areas"})]}),a.jsxs("div",{className:"mt-10 flex items-center gap-3 text-gray-400 text-sm",children:[a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),a.jsx("span",{children:"(213) 388-1821"}),a.jsx("span",{className:"text-gray-600",children:"|"}),a.jsx("span",{children:"Toll Free: (855) 201-6898"})]})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"bg-white border-b border-gray-100",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",children:wf.map(l=>a.jsxs("div",{className:"text-center group",children:[a.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4A853]/30 mb-3 group-hover:border-[#D4A853] transition-colors",children:a.jsx("svg",{className:"w-7 h-7 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-4.27 1.772 6.003 6.003 0 01-4.27-1.772"})})}),a.jsx("p",{className:"font-serif font-bold text-[#1B2A4A] text-sm",children:l.name}),a.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:l.year})]},l.name))})})}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[a.jsxs("div",{children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-6",children:["Committed to Defending"," ",a.jsx("span",{className:"text-[#D4A853]",children:"Immigrants' Rights"})]}),a.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:"For over 20 years, the Law Office of Todd Becraft has defended the rights of immigrants from around the world. Based in Los Angeles, our firm is dedicated exclusively to immigration law — it is all we do."}),a.jsx("p",{className:"text-gray-600 leading-relaxed mb-8",children:"We understand that every immigration case represents a family's future. That is why we provide personalized, compassionate legal representation to each of our clients, treating every case with the urgency and dedication it deserves."}),a.jsxs("button",{onClick:()=>o("/about"),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Learn About Our Firm",a.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]}),a.jsxs("div",{className:"relative",children:[a.jsxs("div",{className:"rounded-sm overflow-hidden",children:[a.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",alt:"Todd Becraft, Founding Attorney",className:"w-full aspect-[4/5] object-cover object-top"}),a.jsxs("div",{className:"bg-[#1B2A4A] p-6",children:[a.jsx("p",{className:"text-white font-serif font-bold",children:"Todd Becraft"}),a.jsx("p",{className:"text-[#D4A853] text-xs tracking-wider uppercase mt-1",children:"Founding Attorney"})]})]}),a.jsxs("div",{className:"hidden bg-[#1B2A4A] rounded-sm p-10 md:p-12",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"20+"}),a.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Years of Experience"})]}),a.jsxs("div",{className:"border-t border-white/10 pt-6",children:[a.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"1000s"}),a.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Families Reunited"})]}),a.jsxs("div",{className:"border-t border-white/10 pt-6",children:[a.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"100%"}),a.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Focused on Immigration"})]}),a.jsxs("div",{className:"border-t border-white/10 pt-6",children:[a.jsx("p",{className:"text-lg font-serif text-white font-semibold",children:"Se Habla Espanol"}),a.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Bilingual Legal Services"})]})]})]}),a.jsx("div",{className:"absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A853]/20 rounded-sm -z-10"})]})]})})}),a.jsx("section",{className:"section-padding bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Our Practice Areas"}),a.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"We handle the full spectrum of immigration matters, from family-based petitions to complex deportation defense and federal court appeals."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:bf.map(l=>a.jsxs("button",{onClick:()=>o("/services"),className:"text-left p-6 bg-[#FAFAF8] rounded-sm border border-gray-100 card-hover group",children:[a.jsx("div",{className:"text-[#D4A853] mb-4 group-hover:scale-110 transition-transform origin-left",children:l.icon}),a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),a.jsx("p",{className:"text-gray-500 text-sm",children:l.desc})]},l.title))}),a.jsx("div",{className:"text-center mt-12",children:a.jsx("button",{onClick:()=>o("/services"),className:"btn-gold",children:"View All Practice Areas"})})]})}),a.jsx("section",{className:"section-padding bg-warm-gray",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-4",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold",children:"What Our Clients Say"})]}),a.jsx(vf,{})]})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16 md:py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-12",children:a.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold",children:["Thousands of Families ",a.jsx("span",{className:"text-[#D4A853]",children:"Reunited"})]})}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[{number:"20+",label:"Years of Practice"},{number:"12",label:"Practice Areas"},{number:"4",label:"Dedicated Attorneys & Staff"},{number:"2",label:"Languages Spoken"}].map(l=>a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-4xl md:text-5xl font-serif text-[#D4A853] font-bold mb-2",children:l.number}),a.jsx("p",{className:"text-gray-300 text-sm",children:l.label})]},l.label))})]})}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Schedule Your Consultation Today"}),a.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Take the first step toward securing your future. Our experienced immigration attorneys are ready to evaluate your case and discuss your options."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Call (213) 388-1821"]}),a.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Send Us a Message"})]}),a.jsxs("p",{className:"mt-6 text-sm text-gray-500",children:["Toll Free: ",a.jsx("a",{href:"tel:8552016898",className:"text-[#D4A853] hover:underline",children:"(855) 201-6898"}),a.jsx("span",{className:"mx-3 text-gray-300",children:"|"}),a.jsx("span",{className:"text-[#D4A853] font-semibold",children:"Se Habla Espanol"})]})]})})]})}const aa=[{name:"Todd Becraft",title:"Founding Attorney",photo:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",highlight:"20+ Years in Immigration Law",bio:["Todd Becraft is the founding attorney of the Law Office of Todd Becraft, where he has dedicated his career exclusively to immigration law for over 20 years. He is the past Chair of the AILA SoCal Chapter and former Chair of the Los Angeles County Bar Immigration Section.",'In 2009, Todd assumed the immigration practice of Immigration Judge Timothy Everett after Judge Everett left private practice to work for Immigration and Customs Enforcement. Prior to that, Mr. Becraft worked closely with Judy Wood, widely known as "Saint Judy," whose remarkable advocacy was portrayed in the motion picture of the same name.',"Mr. Becraft has successfully represented thousands of clients in asylum, deportation defense, cancellation of removal, family-based immigration, and federal court appeals before the Board of Immigration Appeals and the Ninth Circuit Court of Appeals."]},{name:"Dennis Escobar",title:"Lead Paralegal & Office Manager",photo:"https://images.makeitglow.co/projects/becraft-immigration/8f93bc42d26b873e-dennis-escobar-portrait-becraft-immigration-law-980x1337.webp",highlight:"25+ Years in Immigration Law",bio:["For more than 25 years, Dennis Escobar has dedicated his career to immigration law. As the Lead Paralegal and Office Manager, Dennis manages the daily operations of the office while working closely with attorneys and clients on nearly every stage of a case.","As an immigrant himself, Dennis knows firsthand the challenges families face. He is admired for his patience, dedication, and compassion, always taking the time to listen and address client concerns with care."]},{name:"Gianina Haro",title:"Paralegal",highlight:"30+ Years in Immigration Law",photo:"https://images.makeitglow.co/projects/becraft-immigration/4baa423944dd3952-gianina-haro-portrait-becraft-immigration-law-980x1337.webp",bio:["With over thirty years of experience in immigration law, Gianina Haro is a cornerstone of client support at the Law Office of Todd Becraft. She specializes in preparing filings, gathering evidence, and managing the details that keep cases moving forward seamlessly.","Fluent in both English and Spanish, Gianina bridges communication gaps, helping clients feel comfortable and understood. She works across a wide range of immigration matters, including asylum applications, family-based petitions, waivers, and naturalization."]},{name:"Imani Machado",title:"Marketing Director & Client Specialist",photo:"https://images.makeitglow.co/projects/becraft-immigration/c309104b568a8ee4-imani-machado-portrait-becraft-immigration-law-980x1337.webp",bio:["Imani Machado brings creativity, strategy, and compassion to her role as Marketing Director and Client Specialist. With over a decade of experience in legal marketing and client relations, she ensures that the firm's mission of advocacy extends beyond the courtroom and into every interaction with clients and the broader community.","Imani manages outreach efforts, develops educational resources, and works directly with clients to provide support and guidance throughout their immigration journey. Her dedication extends into the broader community, where she partners with organizations and initiatives that serve immigrant families across Southern California."]}],jf=[{title:"20+ Years of Experience",desc:"Two decades of dedicated immigration law practice means we have seen and successfully handled virtually every type of case.",icon:"clock"},{title:"Immigration Law Exclusively",desc:"We do not dabble in other areas. Immigration is our sole focus, giving us unmatched depth of knowledge.",icon:"focus"},{title:"Personalized Attention",desc:"Every case is personally handled by our attorneys. You work directly with experienced lawyers, not junior staff.",icon:"person"},{title:"Bilingual Services",desc:"Our team is fully bilingual in English and Spanish. Nothing is lost in translation when your future is on the line.",icon:"language"},{title:"Proven Track Record",desc:"Thousands of successful cases, including complex asylum claims and deportation defenses other firms turned away.",icon:"check"},{title:"Compassionate Advocacy",desc:"We understand the emotional toll of immigration proceedings. Our team provides genuine empathy and support.",icon:"heart"}];function Sf({type:o}){const l="w-6 h-6";switch(o){case"clock":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})});case"focus":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})});case"person":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})});case"language":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})});case"check":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})});case"heart":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})});default:return null}}function Af(){const o=Ye();return a.jsxs("div",{children:[a.jsx(Ae,{title:"About | Law Office of Todd Becraft",description:"Meet Attorney Todd Becraft — decades of immigration law experience in Los Angeles helping families, DACA recipients, asylum seekers, and more.",canonical:"/about",schema:{"@context":"https://schema.org","@type":"AboutPage",name:"About Todd Becraft"}}),a.jsxs("section",{className:"relative overflow-hidden",children:[a.jsxs("div",{className:"absolute inset-0",children:[a.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/d4f20bfcce771e9e-unnamed-10-scaled.webp",alt:"The Becraft Immigration Law team",className:"hidden md:block w-full h-full object-cover"}),a.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/team-9x16.jpg",alt:"The Becraft Immigration Law team",className:"block md:hidden w-full h-full object-cover"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/80 to-[#1B2A4A]/40"})]}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36",children:a.jsxs("div",{className:"max-w-xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6 leading-tight",children:["The People Behind ",a.jsx("span",{className:"text-[#D4A853]",children:"Your Case"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed mb-8",children:"A team that has dedicated their careers — over 50 combined years — exclusively to immigration law. We don't just handle cases. We change lives."}),a.jsx("button",{onClick:()=>o("/contact"),className:"btn-gold",children:"Meet With Us Today"})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"py-20 md:py-28 bg-white",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"grid lg:grid-cols-5 gap-16 items-start",children:[a.jsx("div",{className:"lg:col-span-2",children:a.jsxs("div",{className:"sticky top-28",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4 leading-tight",children:"Two Decades of Fighting for What's Right"}),a.jsxs("div",{className:"flex items-center gap-4 mt-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"20+"}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Years"})]}),a.jsx("div",{className:"w-px h-12 bg-gray-200"}),a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"1000s"}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Cases Won"})]}),a.jsx("div",{className:"w-px h-12 bg-gray-200"}),a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"100%"}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Immigration"})]})]})]})}),a.jsxs("div",{className:"lg:col-span-3 space-y-6",children:[a.jsx("p",{className:"text-gray-600 leading-relaxed text-lg",children:"The Law Office of Todd Becraft was founded with a clear mission: to provide exceptional legal representation to immigrants and their families. Over the past two decades, that mission has never wavered."}),a.jsx("p",{className:"text-gray-600 leading-relaxed",children:"From our offices on Wilshire Boulevard in the heart of Los Angeles, we have helped thousands of individuals navigate the complex U.S. immigration system. Whether our clients are seeking asylum from persecution, fighting deportation, reuniting with family members, or pursuing the dream of U.S. citizenship, we bring the same level of dedication, expertise, and personal attention to every case."}),a.jsx("p",{className:"text-gray-600 leading-relaxed",children:"What sets us apart is our exclusive focus on immigration law. While many firms spread their attention across multiple practice areas, we have chosen to dedicate our entire practice to immigration. This singular focus means we stay at the forefront of constantly changing immigration law and policy, giving our clients a critical advantage."}),a.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Our team members come from diverse backgrounds, and several are immigrants themselves. We understand the challenges our clients face — not just legally, but personally. That lived experience shapes our empathy, our urgency, and our unwavering commitment to every person who walks through our doors."})]})]})})}),a.jsx("section",{className:"bg-[#1B2A4A] overflow-hidden",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsxs("div",{className:"grid lg:grid-cols-2",children:[a.jsxs("div",{className:"relative h-[500px] lg:h-auto",children:[a.jsx("img",{src:aa[0].photo,alt:aa[0].name,className:"absolute inset-0 w-full h-full object-cover object-top"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B2A4A]/30"})]}),a.jsxs("div",{className:"px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center",children:[a.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase mb-3",style:{fontFamily:"'Inter', sans-serif"},children:aa[0].title}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-2",children:aa[0].name}),aa[0].highlight&&a.jsxs("p",{className:"text-[#D4A853]/70 text-sm mb-8 flex items-center gap-2",children:[a.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),aa[0].highlight]}),a.jsx("div",{className:"w-12 h-px bg-[#D4A853]/40 mb-8"}),a.jsx("div",{className:"space-y-4",children:aa[0].bio.map((l,c)=>a.jsx("p",{className:"text-gray-300 leading-relaxed text-[15px]",children:l},c))}),a.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[a.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AILA SoCal Past Chair"}),a.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Three Best Rated"}),a.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AVVO 10.0"}),a.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Pro Bono Award"})]})]})]})})}),a.jsx("section",{className:"py-20 md:py-28 bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Our Team"}),a.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Every member of our team shares the same commitment: fighting for our clients' futures."})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:aa.slice(1).map(l=>a.jsxs("div",{className:"group",children:[a.jsxs("div",{className:"relative overflow-hidden rounded-sm mb-6",children:[a.jsx("img",{src:l.photo,alt:l.name,className:"w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"}),a.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[a.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.15em] uppercase mb-1",style:{fontFamily:"'Inter', sans-serif"},children:l.title}),a.jsx("h3",{className:"text-xl font-serif text-white font-bold",children:l.name}),l.highlight&&a.jsx("p",{className:"text-white/50 text-xs mt-1",children:l.highlight})]})]}),a.jsx("div",{className:"space-y-3",children:l.bio.map((c,u)=>a.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:c},u))})]},l.name))})]})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-10",children:a.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase",style:{fontFamily:"'Inter', sans-serif"},children:"Recognition"})}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{name:"Three Best Rated",detail:"Best Immigration Lawyers in Los Angeles"},{name:"10 Best",detail:"American Institute of Legal Counsel"},{name:"AVVO 10.0",detail:"Superb Rating — Top Attorney"},{name:"Expertise",detail:"21 Best Immigration Lawyers in LA"}].map(l=>a.jsxs("div",{className:"text-center py-6 border border-white/5 rounded-sm hover:border-[#D4A853]/20 transition-colors",children:[a.jsx("svg",{className:"w-6 h-6 text-[#D4A853] mx-auto mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),a.jsx("h3",{className:"text-white font-serif font-bold text-sm",children:l.name}),a.jsx("p",{className:"text-gray-500 text-xs mt-1",children:l.detail})]},l.name))})]})}),a.jsx("section",{className:"py-20 md:py-28 bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Why Choose Us"})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:jf.map(l=>a.jsxs("div",{className:"flex gap-5",children:[a.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:a.jsx(Sf,{type:l.icon})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),a.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:l.desc})]})]},l.title))})]})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[a.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Ready to Discuss Your Case?"}),a.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us today for a free, confidential consultation with an experienced immigration attorney."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),a.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline",children:"Send a Message"})]})]})})]})}const Cf=[{title:"Asylum",slug:"asylum",description:"Protection for individuals who have been persecuted or fear persecution in their home country.",details:["We represent individuals seeking asylum based on persecution due to race, religion, nationality, political opinion, or membership in a particular social group.","Our firm has extensive experience preparing compelling asylum applications, including gathering country condition evidence, organizing supporting documentation, and preparing clients for their asylum interviews and hearings.","We handle both affirmative asylum cases filed with USCIS and defensive asylum claims in immigration court. Our attorneys have a strong track record of winning asylum cases that other firms considered unwinnable."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})},{title:"BIA & 9th Circuit Appeals",slug:"bia-and-9th-circuit-appeals",description:"Challenging unfavorable immigration court decisions at the appellate level.",details:["When an immigration judge issues an unfavorable decision, our attorneys are experienced in filing appeals with the Board of Immigration Appeals (BIA) and, when necessary, petitions for review with the Ninth Circuit Court of Appeals.","Appellate immigration work requires a different skill set than trial-level representation. Our attorneys are skilled legal writers who know how to identify reversible errors, construct persuasive legal arguments, and present cases effectively to appellate judges.","We have successfully reversed deportation orders and secured new hearings for clients whose cases were improperly decided at the trial level."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"})})},{title:"Cancellation of Removal",slug:"cancellation-of-removal",description:"A critical form of relief for individuals facing deportation who have deep ties to the United States.",details:["Cancellation of removal is a powerful defense for individuals in removal proceedings who can demonstrate long-term residence in the U.S. and strong equities such as U.S. citizen or permanent resident family members.","For non-permanent residents, we help clients demonstrate at least 10 years of continuous physical presence, good moral character, and that their removal would result in exceptional and extremely unusual hardship to a qualifying U.S. citizen or permanent resident relative.","For permanent residents, we assist those with 7 years of continuous residence and 5 years of lawful permanent resident status who can show they deserve relief despite any criminal history."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})})},{title:"Citizenship & Naturalization",slug:"citizenship-and-naturalization",description:"Guiding you through the process of becoming a United States citizen.",details:["Becoming a U.S. citizen is one of the most important milestones in an immigrant's journey. Our firm guides clients through every step of the naturalization process, from determining eligibility to preparing for the citizenship interview and exam.","We help with N-400 applications, addressing potential issues with continuous residence, physical presence, good moral character requirements, and any prior immigration or criminal history that could complicate the process.","We also assist individuals who may be eligible for citizenship through derivation or acquisition, including those who may already be citizens without realizing it."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})},{title:"DACA",slug:"daca",description:"Deferred Action for Childhood Arrivals — protecting those who were brought to the U.S. as children.",details:["The Law Office of Todd Becraft has helped countless DACA recipients with their initial applications and renewals. We understand the unique challenges facing Dreamers and are committed to helping them maintain their protected status.","Our services include initial DACA applications (when available), timely renewals to prevent gaps in work authorization, advance parole requests, and addressing any complications that may arise with DACA status.","We stay at the forefront of the constantly changing legal landscape surrounding DACA and ensure our clients are informed of any developments that may affect their status."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})})},{title:"Deportation & Removal Defense",slug:"deportation-and-removal",description:"Aggressive defense for individuals facing removal from the United States.",details:["Facing deportation is one of the most frightening experiences an immigrant can endure. Our attorneys are seasoned courtroom advocates who fight aggressively to keep families together and protect our clients' rights in immigration court.","We explore every possible form of relief available, including asylum, withholding of removal, protection under the Convention Against Torture, cancellation of removal, adjustment of status, voluntary departure, and prosecutorial discretion.","Our attorneys regularly appear before immigration courts in Los Angeles and throughout California, and we are prepared to take cases to the Board of Immigration Appeals and the Ninth Circuit when necessary."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"})})},{title:"Green Cards / Adjustment of Status",slug:"green-card-adjustment-of-status",description:"Helping eligible individuals obtain lawful permanent resident status in the United States.",details:["Whether through a family relationship, employment, or other qualifying category, we guide our clients through the complex process of obtaining their green cards.","Our services include family-based adjustment of status, consular processing for those outside the U.S., employment-based green cards, and green cards through special categories such as VAWA and the diversity visa lottery.","We carefully evaluate each client's eligibility, prepare thorough applications, and represent clients at their adjustment of status interviews to ensure the best possible outcome."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})})},{title:"I-601A Provisional Waivers",slug:"i-601a-provisional-waivers",description:"Waiving the unlawful presence bar so families can stay together during the visa process.",details:["The I-601A provisional unlawful presence waiver allows certain individuals who are immediate relatives of U.S. citizens to apply for a waiver of the 3-year and 10-year unlawful presence bars before departing the United States for their consular interview.","This waiver is critical because it significantly reduces the time families must be separated during the immigration process. Our attorneys have extensive experience demonstrating the extreme hardship to U.S. citizen spouses or parents that is required for waiver approval.","We handle the entire process from evaluating eligibility, preparing the waiver application with compelling hardship evidence, through to coordinating with the U.S. consulate for the immigrant visa interview."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l2.25 2.25M9.75 14.25l2.25-2.25M6 3.75v16.5h12V8.25L13.5 3.75H6z"})})},{title:"K-1 Fiance Visas",slug:"k-1-fiance-visa",description:"Bringing your fiance to the United States so you can marry and start your life together.",details:["The K-1 fiancé visa allows the foreign-citizen fiancé of a U.S. citizen to travel to the United States and marry their U.S. citizen petitioner within 90 days of arrival.","Our firm handles all aspects of the K-1 visa process, including preparing and filing the I-129F petition, gathering evidence of the bona fide relationship, coordinating with the National Visa Center, and preparing for the consular interview.","After marriage, we continue to assist with the adjustment of status process to obtain permanent resident status, as well as the removal of conditions on residence two years after the green card is issued."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})},{title:"Temporary Protected Status (TPS)",slug:"temporary-protected-status-tps",description:"Temporary protection for nationals of designated countries affected by armed conflict or natural disaster.",details:["TPS provides temporary lawful status and work authorization to nationals of countries that have been designated due to ongoing armed conflict, environmental disaster, or other extraordinary conditions.","Our firm assists clients with initial TPS applications, timely re-registrations, and associated employment authorization documents. We also advise TPS holders on pathways to more permanent immigration status when available.","We closely monitor TPS designations and terminations to ensure our clients are prepared for any changes that may affect their status."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})},{title:"U-Visa",slug:"u-visa",description:"Immigration relief for victims of certain crimes who have cooperated with law enforcement.",details:["The U-Visa provides immigration benefits to victims of qualifying crimes who have suffered substantial mental or physical abuse and who are helpful to law enforcement in the investigation or prosecution of criminal activity.","Our attorneys work closely with clients to document their victimization, obtain law enforcement certifications, and build compelling U-Visa petitions. We understand the sensitive nature of these cases and provide compassionate, trauma-informed representation.","We also assist U-Visa holders with work authorization, derivative petitions for qualifying family members, and adjustment of status to permanent residence after three years in U nonimmigrant status."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})},{title:"Family Immigration",description:"Reuniting families through family-based immigration petitions and sponsorship.",details:["Family unity is at the heart of U.S. immigration law, and our firm has helped thousands of families navigate the process of sponsoring loved ones for immigration to the United States.","We handle all categories of family-based immigration, including immediate relative petitions (spouses, minor children, and parents of U.S. citizens), family preference petitions, and the associated adjustment of status or consular processing applications.","Our attorneys address complex issues that can arise in family cases, including prior immigration violations, criminal history, fraud waivers, age-out issues, and the affidavit of support requirements."],icon:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})})}];function kf(){const o=Ye(),[l,c]=z.useState(null);return a.jsxs("div",{children:[a.jsx(Ae,{title:"Practice Areas | Law Office of Todd Becraft",description:"Full-service immigration law firm in Los Angeles. Asylum, BIA appeals, cancellation of removal, green cards, citizenship, DACA, U-Visa, and more.",canonical:"/services",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Practice ",a.jsx("span",{className:"text-[#D4A853]",children:"Areas"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Our firm handles the full range of immigration matters. From asylum and deportation defense to family reunification and citizenship, we have the experience and dedication your case demands."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-5xl mx-auto",children:a.jsx("div",{className:"space-y-6",children:Cf.map(u=>{const p=l===u.title;return a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[a.jsxs("button",{onClick:()=>c(p?null:u.title),className:"w-full text-left p-6 md:p-8 flex items-start gap-5",children:[a.jsx("div",{className:"flex-shrink-0 w-14 h-14 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:u.icon}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-1",children:u.title}),a.jsx("p",{className:"text-gray-500 text-sm",children:u.description})]}),a.jsx("div",{className:"flex-shrink-0 mt-1",children:a.jsx("svg",{className:`w-5 h-5 text-[#D4A853] transition-transform duration-300 ${p?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})})]}),a.jsx("div",{className:`transition-all duration-300 overflow-hidden ${p?"max-h-[600px] opacity-100":"max-h-0 opacity-0"}`,children:a.jsxs("div",{className:"px-6 md:px-8 pb-8 ml-0 md:ml-[4.75rem]",children:[a.jsx("div",{className:"gold-line mb-5"}),a.jsx("div",{className:"space-y-4",children:u.details.map((m,f)=>a.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:m},f))}),a.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[u.slug&&a.jsxs(Y,{to:`/services/${u.slug}`,onClick:m=>m.stopPropagation(),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Learn More",a.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),a.jsx("button",{onClick:m=>{m.stopPropagation(),o("/contact")},className:"inline-flex items-center text-gray-500 font-semibold text-sm tracking-wide uppercase hover:text-[#1B2A4A] transition-colors",children:"Discuss Your Case"})]})]})})]},u.title)})})})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[a.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Not Sure Which Service You Need?"}),a.jsx("p",{className:"text-gray-300 mb-8",children:"Every immigration case is unique. Contact us for a free consultation and we will help you understand your options."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),a.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline",children:"Contact Us Online"})]})]})})]})}const Nf=[{slug:"asylum",title:"Asylum",subtitle:"Understanding the Process and Challenges",metaDescription:"Explore the concept of asylum and its importance for individuals seeking safety in a new country. Learn the essentials now.",intro:"Federal law in Title 8 U.S. Code § 1158 establishes that any alien physically present in or arriving in the United States, regardless of status, may apply for asylum. Also governed by the UN's 1948 Universal Declaration of Human Rights, UNHCR Refugee Convention of 1951, and the Refugee Act of 1980, a refugee is defined as any person outside their country of nationality who is unable or unwilling to avail themselves of their country's protection due to persecution or well-founded fear of persecution based on nationality, religion, race, membership in a particular social group, or political opinion.",sections:[{heading:"Affirmative Process",paragraphs:["To apply through the affirmative process, you must be physically present in the United States and can apply regardless of your method of arrival or current immigration status. You must apply within one year of your last arrival date, unless circumstances materially changed or extraordinary circumstances caused a delay.","File Form I-589, Application for Asylum and Withholding of Removal with USCIS. After USCIS receives Form I-589, you will receive an acknowledgment of receipt and a notice to visit the nearest Application Support Center for fingerprinting.","Interview priority order: (1) previously scheduled but rescheduled cases; (2) applications pending 21 days or less; (3) all other pending applications, newest first. You may bring an attorney or accredited representative. Spouses and children seeking derivative asylum must also attend. Non-English speakers must bring an interpreter. Interviews typically last about one hour."]},{heading:"A Person Is Not Eligible to Apply for Asylum If They:",bullets:["Do not follow the one-year filing deadline for Form I-589","Had an immigration judge or the BIA deny their previous asylum application","Can be removed to a safe third country under a two-party or multi-party agreement"]},{heading:"Defensive Process",paragraphs:["The defensive process occurs when an alien requests asylum as a defense against removal. Cases are heard in adversarial proceedings before an immigration judge, who hears from both the alien and an ICE attorney.","There are generally two ways people can be placed into defensive asylum processing: (1) referral from USCIS after an affirmative asylum denial; or (2) apprehension without proper documents and a determination that credible fear exists."]},{heading:"Asylum Merits Interview",paragraphs:["Aliens in expedited removal who indicate intent to apply for asylum may be referred to USCIS for credible fear screenings. If credible fear is found, USCIS can either retain and schedule an Asylum Merits Interview, or issue a Notice to Appear. If no credible fear is found, the alien can request review by an immigration judge. This procedure applies only to adults and families placed in expedited removal after May 31, 2022."]}],cta:"Do you need help applying for asylum in the greater Los Angeles area? The Law Office of Todd Becraft understands the most effective ways to handle these cases, so we will be able to help you achieve the most favorable outcome for your particular case. Our firm works very closely with every person we represent, so you can know that we will be by your side the entire time."},{slug:"bia-and-9th-circuit-appeals",title:"BIA and 9th Circuit Appeals",subtitle:"9th Circuit Appeals and Immigration Decisions",metaDescription:"Understand the process of 9th Circuit appeals and how to address adverse immigration decisions effectively.",intro:"Once the Department of Homeland Security or an Immigration Judge has rendered a decision, there may be an administrative appeal to the Administrative Appeals Office (AAO) of the Department of Homeland Security or the Board of Immigration Appeals (BIA) of the Department of Justice. If the BIA denies your appeal, the next step is the Ninth Circuit Court of Appeals.",sections:[{heading:"How BIA Cases Work",paragraphs:["You must file a BIA appeal within 30 days of an immigration judge's denial using Form EOIR-26. The BIA is the highest administrative body for interpreting and applying immigration laws, located at EOIR headquarters in Falls Church, Virginia, with nationwide jurisdiction. BIA decisions are binding on all DHS officers and immigration judges unless modified by the Attorney General or a federal court.","The BIA reviews all evidence submitted to the immigration judge but does not consider new evidence. A decision typically takes at least six months, often more than a year.","The BIA may: send the case back to the immigration judge with new instructions; overturn the original decision (which could mean relief from deportation); or deny outright. If denied, the next step is the Ninth Circuit Court of Appeals."]},{heading:"How Ninth Circuit Cases Work",paragraphs:["The Ninth Circuit handles cases in California, Hawaii, Alaska, Washington, Oregon, Arizona, Idaho, Montana, and Nevada. After a BIA denial, file a Petition for Review with the Ninth Circuit.","Important: Filing with the Ninth Circuit does NOT automatically delay a removal order. You must also file a Motion to Stay Removal. Like the BIA, the Ninth Circuit does not consider new evidence. Decisions typically take more than two years.","If the Ninth Circuit rules in your favor, the court may grant permission to remain in the US, or send the case back to the BIA or immigration judge (a second denial remains possible). If denied, options include: requesting rehearing within 45 days; requesting rehearing en banc (rarely granted); or filing a writ of certiorari with the Supreme Court (even rarer)."]}],cta:"Our firm will invest the necessary time to fully prepare for your hearing and present the strongest possible arguments in your case. Call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles BIA and 9th Circuit appeals attorney."},{slug:"cancellation-of-removal",title:"Cancellation of Removal",subtitle:"A Lifeline for Noncitizens",metaDescription:"Understand cancellation of removal under INA for non-permanent residents and how it can protect against deportation.",intro:"Non-LPR cancellation of removal under INA § 240A(b)(1) is a defensive application only — you cannot apply affirmatively to USCIS. It is only available when you are already facing removal in immigration court. When granted, the person receives a green card.",sections:[{heading:"Cancellation of Removal Eligibility",paragraphs:["To qualify for standard cancellation of removal, you must prove all three of the following:"],numbered:["Prior to receiving a Notice to Appear, you maintained continuous physical presence in the US for 10 or more years and were a person of good moral character (INA § 101(f)) during that period","You were not convicted of any offense under INA § 212(a)(2), INA § 237(a)(2), or INA § 237(a)(3)","Removal would cause exceptional and extremely unusual hardship to a US citizen or LPR spouse, parent, or child, and you deserve a favorable exercise of discretion"]},{heading:"Alternative Eligibility — VAWA (Battered or Subjected to Cruelty)",bullets:["Battered or subjected to extreme cruelty by a US citizen or LPR spouse or parent","Continuous physical presence for 3 or more years, good moral character during that period","Not inadmissible under certain INA sections; not convicted of an aggravated felony","Removal would result in extreme hardship to them or their child"]},{heading:"Satisfying the 10-Year Residence Requirement",paragraphs:["Rent receipts, credit card statements, and pay stubs can help prove continuous residence. Affidavits from friends or family are acceptable when hard evidence is unavailable. Leaving the country for more than 90 days, or trips totaling more than 180 days, can negatively impact the 10-year calculation. Receiving a Notice to Appear stops the 10-year clock."]},{heading:"Satisfying the Qualifying Relative Requirement",paragraphs:["The qualifying relative must be a spouse, parent, or child who is either a US citizen or a lawful permanent resident. A child must be unmarried and under 21."]},{heading:"Satisfying the Exceptional and Extremely Unusual Hardship Requirement",paragraphs:["Hardship must go beyond simple sadness at separation. Unavailability of medical care in the home country often qualifies. Language barriers or a lack of support structures for qualifying relatives can also be factors in your favor."]},{heading:"Satisfying the Good Moral Character Requirement",paragraphs:["Your criminal record will be reviewed; convictions are damaging. Minor crimes can sometimes be overcome through evidence of volunteer service or steady employment."]}],cta:"You may call (213) 388-1821 or contact us online to arrange a consultation with our Los Angeles cancellation of removal lawyer."},{slug:"citizenship-and-naturalization",title:"Citizenship and Naturalization",subtitle:"The Citizenship and Naturalization Process Explained",metaDescription:"Understand Citizenship and Naturalization requirements. Find essential information to help you through the journey.",intro:"Naturalization is the process by which US citizenship is granted to a lawful permanent resident after satisfying the requirements of the INA. Acquisition of citizenship occurs through US citizen parents either at birth or after birth but before age 18.",sections:[{heading:"When Citizenship Is Available",bullets:["Valid green card/LPR status plus 5 years residing in the US","Married to a US citizen plus 3 years residing in the US","LPR status, served in the US military, plus 3 years in the US","Married to a US citizen being transferred abroad by a government agency, armed forces, or multinational company"]},{heading:"Requirements Under Title 8 U.S. Code § 1427(a)",bullets:["Resided for a minimum of 5 continuous years in the US after lawful admission for permanent residence, with physical presence for at least half that time","Resided continuously within the US from the date of application up to admission to citizenship","Been and still are a person of good moral character, abiding by the principles of the Constitution, well disposed to good order and happiness"]},{heading:"To Apply, You Must:",bullets:["Be at least 18 years of age when filing","Be able to read, write, and speak basic English","Prove understanding and knowledge of US history and government","Be willing to take the Oath of Allegiance"]},{heading:"The Naturalization Process",paragraphs:["Submit your application to USCIS. You may be required to submit biometric data. You will then attend an interview with a USCIS immigration officer and take a US government and history test. Benefits of citizenship include the right to vote, priority to petition for family members, the ability to travel with a US passport, eligibility for federal jobs, and much more."]},{heading:"Common Problems to Avoid",bullets:["Errors or inconsistencies in Form N-400","Outstanding warrants or criminal charges or convictions","Failure to fulfill any requirements of citizenship","Inconsistencies in prior immigration applications","Fraud or mistakes in the green card process","Any incomplete citizenship documents"]}],cta:"Our firm has been helping immigrants for more than a decade. You can call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles citizenship and naturalization lawyer."},{slug:"daca",title:"DACA",subtitle:"Insights into Immigration Relief Options",metaDescription:"Understand the complexities of DACA and how it still offers valuable benefits for eligible individuals in the U.S. today.",intro:"The US District Court for the Southern District of Texas imposed an injunction on July 16, 2021 (affirmed by the 5th Circuit) permanently enjoining DHS from granting DACA to new applicants, but it did not cancel existing DACA status for people in good standing. Benefits for eligible individuals include a two-year lawful status to reside in the US, the ability to apply for driver's licenses, and the ability to seek approval to leave and re-enter the country.",sections:[{heading:"DACA Requirements",paragraphs:["To be eligible for DACA, you must meet all of the following criteria:"],bullets:["Under 31 years of age on June 15, 2012 (born on or after June 16, 1981)","Came to the United States before reaching 16 years of age","Lived continuously in the United States since June 15, 2007","Physically present in the United States at time of filing and on June 15, 2012","Did not have lawful immigration status on June 15, 2012, or at time of filing","Currently enrolled in school, graduated high school or obtained a certificate of completion, obtained a GED, or were an honorably discharged veteran","Have not been convicted of a felony, significant misdemeanor, or three or more other misdemeanors, and do not pose a threat to national security or public safety"]},{heading:"DACA Filing Process",paragraphs:["You will need to collect and submit the following documentation:"],bullets:["Proof of identity: passport, national ID, birth certificate with photo ID, school or military ID, or a US government immigration document with photo","Proof of entry before age 16: passport with admission stamp, school records, Form I-94, travel records, INS/DHS document stating entry date, employment records, hospital or medical records","Proof of immigration status as of June 15, 2012","Proof of continuous presence in the US on June 15, 2012 and continuous residence since June 15, 2007 (rent receipts, utility bills, employment records, school records, bank transactions, etc.)","Proof of student status at time of request if applicable (school records, diploma, GED certificate)","Complete Form I-821D, Form I-765, and Form I-675 Worksheet; mail to the appropriate USCIS Lockbox; visit an ASC for biometric services"]}],cta:"Our firm understands how frightening many aspects of this process can be for people, but we will know how to walk you through the entire journey and make everything as simple as possible. You can call (213) 388-1821 or contact us online to receive a consultation with our Los Angeles DACA lawyer."},{slug:"deportation-and-removal",title:"Deportation and Removal",subtitle:"What You Need to Know",metaDescription:"Understand Deportation and Removal under U.S. law. Know your rights and options if facing removal proceedings.",intro:"Title 8 U.S. Code § 1229a governs removal proceedings. Few prospects can be more frightening for people who are lawful permanent residents or otherwise satisfying legal requirements to remain in the United States, because immigration officials may be preparing to argue that a person needs to be removed immediately. A deportation case ends with either deportation or remaining eligible to live and work in the US.",sections:[{heading:"When DHS Commonly Begins Deportation Cases",bullets:["Marriage fraud","Person entered the United States without proper authority","Person was initially in the US legally but visa has since expired","Person who violates terms of admission or works without permission","Green card holder found guilty of a serious crime or had difficulty with the law","Person with criminal convictions","Person whose asylum claim has been denied","Person who overstays a visa","Person filed for an immigration benefit and it was denied"]},{heading:"Deportation Hearings",paragraphs:["A Notice to Appear means DHS has already begun the removal or deportation process. This document includes the reasons for removal, the court location, the date and time of the first hearing, the legal authority relied upon, your right to hire an attorney, the consequences for failing to appear, and the requirement to provide your current address and phone number.",'Los Angeles Immigration Court is located on Olive Street in downtown LA. The first hearing is called a "master hearing" or "master calendar hearing." A final hearing — if multiple hearings occur — is called an "individual hearing." Other hearings may include bond redetermination hearings, withholding-only hearings, and rescission hearings.',"It is important for people to understand that arrests in Los Angeles do not automatically translate to deportations. You will not lose a visa or green card for criminal charges, but you could be at risk."]},{heading:"Most Common Crimes Among Immigrants Facing Removal",bullets:["Drug crimes","Domestic violence","Sex crimes","Firearm crimes","Theft or robbery charges","Fraud crimes"]},{heading:"Timeline",paragraphs:["Some people on an expedited docket may resolve their case within six months. Cancellation of removal generally takes up to a year and a half from the master calendar hearing. If cancellation is denied, you can appeal to the BIA."]}],cta:"Our firm understands that every client we serve is unique, and we take the time to really develop relationships with the people we serve. Take the first step when you call (213) 388-1821 or contact us online today to set up a consultation with our Los Angeles deportation and removal lawyer."},{slug:"green-card-adjustment-of-status",title:"Green Card / Adjustment of Status",subtitle:"Your Path to Permanent Residency",metaDescription:"Understand the Green Card process, from eligibility to application, and start your journey to permanent residency.",intro:"Adjustment of status is the process to apply for lawful permanent residence while inside the United States. A green card (Permanent Resident Card) gives you official immigration status, entitles you to certain rights, and is required to naturalize as a US citizen. Unlike consular processing, you do not have to return to your country of citizenship — a process that can save considerable time and expense.",sections:[{heading:"How to Apply for a Green Card",paragraphs:["Most applicants need to complete at least two forms: an immigrant petition and a green card application. Another person usually files the petition on your behalf as the sponsoring petitioner. The federal government states that being a permanent resident is a privilege, not a right."]},{heading:"Green Card Categories",bullets:["Family-based: immediate relatives of US citizens (spouse, unmarried child under 21, parents of adults); family preference categories; fiancé(e)s (K-1/K-2); widow(er)s; VAWA self-petitioners","Employment-based: EB-1 through EB-5 based on qualifications — extraordinary ability, outstanding researchers/professors, multinational managers, advanced degree professionals, skilled workers, and EB-5 investors","Special immigrants: Special Immigrant Juveniles; Afghan/Iraqi translators; religious workers; international organization employees","Refugee or asylee status (granted asylum or admitted as refugee at least one year ago)","Victims of human trafficking or crime (T and U visas)","Diversity Immigrant Visa Program (lottery)","Cuban Adjustment Act and other special programs"]},{heading:"The Application Process (Inside the US)",numbered:["File an immigrant petition with USCIS (e.g., Form I-130 for family-based, Form I-140 for employment-based)","Check visa availability using the DOS Visa Bulletin","File Form I-485 (Application to Register Permanent Residence or Adjust Status)","Attend a biometrics ASC appointment","Attend an interview when applicable","Respond to any requests for evidence","Receive a decision"]},{heading:"The Application Process (Outside the US — Consular Processing)",numbered:["File an immigrant petition","Wait for the petition decision","Receive NVC notification","Attend a consular office appointment at the nearest US Embassy or Consulate","Receive your green card"]}],cta:"Our firm will take the time to explain every single action that is happening in your case and how we are working for you. You can call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles green card/adjustment of status attorney."},{slug:"i-601a-provisional-waivers",title:"I-601A Provisional Waivers",subtitle:"The I 601A Application Process Explained",metaDescription:"Learn about the I 601A application process and how it can affect your immigration journey. Essential information inside.",intro:"Form I-601A (Application for Provisional Unlawful Presence Waiver) is for immigrant visa applicants who are relatives of US citizens or lawful permanent residents. It allows them to request a provisional waiver of unlawful presence grounds of inadmissibility under INA § 212(a)(9)(B) before departing the US for an immigrant visa interview. It does not waive other grounds of inadmissibility. When approved overseas, the person can return to the US and enjoy LPR status and a green card.",sections:[{heading:"Who Can File",bullets:["Relatives of US citizens or LPRs","Diversity Visa lottery winners","Other immigrant visa applicants"]},{heading:"Form I-601A Requirements",bullets:["Being at least 17 years of age","Being physically present in the US and able to provide biometrics","Being willing to leave the US to legally obtain an immigrant visa","A qualifying relative (spouse or parent who is a US citizen or LPR) would suffer extreme hardship if not united in the US","Inadmissible because of unlawful presence (180 days to 365 days during a single stay, or 1 year or more in a single stay)","Has a pending case with the US Department of State for an approved immigrant visa petition or Diversity Visa Program"]},{heading:"People Will Not Qualify If They:",bullets:["Are younger than 17 years of age","Have grounds of inadmissibility for any reason besides unlawful presence","Already have applications to adjust status","Are currently going through removal proceedings","Fail to include details of hardships a spouse or parent would face upon removal","Have a prior order of removal before or during a pending I-601A"]},{heading:"Extreme Hardship Factors Considered",bullets:["Financial harm: future employability, home or business loss, significant decline in standard of living","Health of qualifying relatives: ongoing specialized treatment for physical or mental conditions, limited availability in home country","Personal considerations: close relatives in US or home country, separation from family, ages of involved parties, length of US residence","Special considerations: religious, language, cultural, or ethnic obstacles; valid fears of harm or persecution in home country","Educational losses: lack of ability to pursue higher education, disruption to current programs"]},{heading:"Form I-601A Process",paragraphs:["The filing fee is $630 for Form I-601A plus an $85 biometrics fee. Processing times: Nebraska Service Center — approximately 27 months for I-601A; Potomac Service Center — approximately 35.5 months for I-601A. After approval, apply for a green card through consular processing. If denied, you can appeal within 30 days by filing Form I-290B."]}],cta:"Our firm has handled scores of these kinds of cases, so we know how to deal with every issue that might arise. Call (213) 388-1821 or contact us online to set up a consultation with our Los Angeles I-601A provisional waiver attorney."},{slug:"k-1-fiance-visa",title:"K-1 Fiancé Visa",subtitle:"K-1 Fiancé Visa Requirements and Process Explained",metaDescription:"Discover the essential details about the K-1 Fiancé Visa, a pathway to unite with your partner in the United States.",intro:"US citizens wanting to bring a foreign fiancé(e) to the United States must file Form I-129F (Petition for Alien Fiancé(e)). The couple must intend to marry within 90 days of the fiancé(e) entering the US. The marriage must be bona fide — reflecting genuine intent by both parties to establish a life together, not simply to obtain an immigration benefit. If the couple marries within 90 days of K-1 admission, the fiancé(e) can apply for green card status.",sections:[{heading:"K-1 Visa Eligibility",bullets:["You are a US citizen","You and your fiancé(e) intend to marry within 90 days of their admission on a K-1 visa","Both of you are legally free to marry (all prior marriages legally terminated by divorce, death, or annulment)","You and your fiancé(e) met in person at least once within the two-year period before filing the petition (waivable in cases of strict cultural/social customs or extreme hardship to the US citizen petitioner)"]},{heading:"Not Eligible If:",bullets:["You are already married","You plan to marry outside the United States","Your fiancé(e) already legally resides in the United States"]},{heading:"K-1 Visa Process",numbered:["File Form I-129F — USCIS reviews and may request additional evidence; if approved, sent to the DOS National Visa Center (NVC)","NVC forwards the petition to the US Embassy or consulate where your fiancé(e) will apply for the K-1 visa","Embassy or consulate notifies of visa interview date; fiancé(e) brings required forms and documents","Consular officer determines eligibility; if approved, K-1 visa is valid for up to six months for a single entry","Fiancé(e) travels to the US and seeks admission at a port of entry (CBP makes the final admission decision)","US citizen and fiancé(e) have 90 days to marry","After marriage: file Form I-485 for adjustment of status and a green card","If married less than two years at the time of I-485 approval: USCIS grants conditional permanent resident status, with a green card valid for 2 years","File Form I-751 (Petition to Remove Conditions on Residence) within 90 days before the green card expires"]}],cta:"Our firm has helped scores of people all over California get the K-1 visas they needed to marry. Call (213) 388-1821 or contact us online to set up a consultation with our Los Angeles K-1 lawyer."},{slug:"temporary-protected-status-tps",title:"Temporary Protected Status (TPS)",subtitle:"What You Need to Know",metaDescription:"Learn about Temporary Protected Status and how it impacts the lives of those facing extraordinary circumstances.",intro:"Temporary Protected Status (TPS) is a form of humanitarian relief that helps foreign nationals in the US who may not qualify for asylum but are fleeing or reluctant to return to potentially dangerous situations. The Secretary of Homeland Security designates countries when conditions temporarily prevent nationals from returning safely, or when a country cannot handle the return of its nationals.",sections:[{heading:"Currently Designated TPS Countries",bullets:["Afghanistan, Cameroon, El Salvador, Haiti, Honduras, Myanmar, Nepal, Nicaragua, Somalia, South Sudan, Sudan, Syria, Ukraine, Venezuela, Yemen"]},{heading:"TPS Requirements",paragraphs:["To be eligible, you must meet all of the following:"],bullets:["National of a designated TPS country (or, if stateless, last habitually resided in a designated country)","Filed during the initial open registration or re-registration period, or meet late initial filing requirements","Continuously physically present in the US since the effective date of the most recent designation","Continuously resided in the US since the country's specified date","Brief, casual, and innocent departures from the US are permitted; you must inform USCIS of any absences"]},{heading:"Disqualified If You:",bullets:["Have a felony conviction or two or more misdemeanor convictions in the US","Are found inadmissible under applicable grounds in INA § 212(a)","Are subject to mandatory bars to asylum (persecution of others, engaging or inciting terrorist activity)","Fail to meet continuous physical presence and residence requirements","Fail to register or re-register for TPS as required without good cause"]},{heading:"TPS Registration — Required Documents",bullets:["Form I-821 (Application for TPS) and optionally Form I-765 (Request for Employment Authorization)","Identity and nationality evidence: passport copy, birth certificate with photo ID, or national identity document","Date of entry evidence: passport copy, I-94, or continuous residence documents","Continuous residence evidence: rent receipts, employment records, utility bills, school records, hospital or medical records, church or organization attestations"]}],cta:"Our firm works very closely with every client, so you will be kept up to date on everything that is happening with your case. Call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles TPS attorney."},{slug:"u-visa",title:"U-Visa",subtitle:"U-Visa Process and Important Facts",metaDescription:"Explore the U-Visa process and its significance for individuals seeking safety and security in the United States.",intro:"U nonimmigrant status (U visa) is immigration relief for victims of certain crimes. It makes it safer for victims to report cases to law enforcement and help authorities pursue criminal cases. Benefits include temporary immigration status, work authorization, temporary status for qualifying family members, and the possibility of lawful permanent resident status. Created by the Victims of Trafficking and Violence Protection Act (VTVPA) in 2000, the most recent USCIS statistics show an 87 percent approval rate for U visa petitioners. A U visa should be free.",sections:[{heading:"Qualifying Criminal Activity Includes:",bullets:["Abduction, Abusive Sexual Contact, Blackmail, Domestic Violence, Extortion, False Imprisonment, Female Genital Mutilation, Felonious Assault","Fraud in Foreign Labor Contracting, Hostage, Incest, Involuntary Servitude, Kidnapping, Manslaughter, Murder, Obstruction of Justice","Peonage, Perjury, Prostitution, Sexual Assault, Sexual Exploitation, Slave Trade, Stalking, Torture, Trafficking, Witness Tampering","Unlawful Criminal Restraint, and other related crimes where elements are substantially similar","Attempts, conspiracies, or solicitations to commit any of these offenses"]},{heading:"U-Visa Eligibility Requirements",bullets:["You suffered substantial physical or mental abuse as a result of being a victim of qualifying criminal activity","You have information about the criminal activity (if under 16 or unable to provide due to disability, a parent, guardian, or next friend may possess this information)","You were, are, or are likely to be helpful to law enforcement in the investigation or prosecution","The crime occurred in the US or violated American laws","You are admissible to the US (if not, you can apply for a waiver on Form I-192)"]},{heading:"Applying for a U Visa (Inside the US)",bullets:["Form I-918, Petition for U Nonimmigrant Status","Form I-918, Supplement B, U Nonimmigrant Status Certification (signed by an authorized official of a certifying law enforcement agency)","Form I-192 if inadmissibility issues are present","A personal statement describing the criminal activity","Evidence to establish each eligibility requirement"]},{heading:"Applying for a U Visa (Outside the US)",bullets:["File all necessary forms with the Vermont Service Center","Follow instructions from the Vermont Service Center, including providing fingerprints at the nearest US Embassy or Consulate","If approved, engage in the consular process, including an interview with a consular officer at the nearest US Embassy or Consulate"]}],cta:"Our firm will know how to help you get around any complication and be able to achieve the most favorable possible outcome for your case. You may call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles U-Visa attorney."}];function Ef(o){return Nf.find(l=>l.slug===o)}const au={asylum:"asilo","cancellation-of-removal":"cancelacion-de-eliminacion","citizenship-and-naturalization":"ciudadania-y-naturalizacion",daca:"daca","deportation-and-removal":"deportacion-y-remocion","green-card-adjustment-of-status":"tarjeta-verde-ajuste-de-estatus","i-601a-provisional-waivers":"i-601a-exenciones-provisionales","k-1-fiance-visa":"visa-de-prometido-k-1","temporary-protected-status-tps":"estado-de-proteccion-temporal-tps","u-visa":"visa-u"};function Uf(){const{area:o}=Za(),l=o?Ef(o):void 0;return z.useEffect(()=>{l&&Au({service_name:l.title,service_slug:l.slug,language:"en"})},[l==null?void 0:l.slug]),l?a.jsxs("div",{children:[a.jsx(Ae,{title:`${l.title} | Law Office of Todd Becraft`,description:l.metaDescription,canonical:`/services/${l.slug}`,ogImage:`https://www.makeitglow.co/api/og/becraft-immigration?title=${encodeURIComponent(l.title)}&subtitle=${encodeURIComponent("Law Office of Todd Becraft")}`,schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:au[l.slug]?[{lang:"en",path:`/services/${l.slug}`},{lang:"es",path:`/es/servicios/${au[l.slug]}`},{lang:"x-default",path:`/services/${l.slug}`}]:void 0}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[a.jsx(Y,{to:"/services",className:"hover:text-[#D4A853] transition-colors",children:"Practice Areas"}),a.jsx("span",{children:"/"}),a.jsx("span",{className:"text-gray-300",children:l.title})]}),a.jsx("div",{className:"gold-line mb-6"}),a.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:l.title}),a.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:l.subtitle}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:l.intro})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx("div",{className:"space-y-10",children:l.sections.map((c,u)=>{var p;return a.jsxs("div",{children:[c.heading&&a.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>a.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:m},f)),c.bullets&&c.bullets.length>0&&a.jsx("ul",{className:"space-y-2 mb-4",children:c.bullets.map((m,f)=>a.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[a.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),a.jsx("span",{children:m})]},f))}),c.numbered&&c.numbered.length>0&&a.jsx("ol",{className:"space-y-2 mb-4",children:c.numbered.map((m,f)=>a.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[a.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:f+1}),a.jsx("span",{children:m})]},f))})]},u)})}),a.jsx("div",{className:"gold-line my-10"}),a.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[a.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:l.cta}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",onClick:()=>oa({phone_number:"2133881821",location:"service_cta",language:"en"}),className:"btn-gold",children:"Call (213) 388-1821"}),a.jsx(Y,{to:"/contact",onClick:()=>Su({label:"contact_us_online",location:"service_cta",language:"en"}),className:"btn-outline",children:"Contact Us Online"})]})]})]})}),a.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4",children:a.jsxs(Y,{to:"/services",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[a.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"All Practice Areas"]})})})]}):a.jsxs("div",{className:"section-padding text-center",children:[a.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Page Not Found"}),a.jsx("p",{className:"text-gray-500 mb-8",children:"That practice area doesn't exist."}),a.jsx(Y,{to:"/services",className:"btn-gold",children:"Back to Practice Areas"})]})}const ku=[{slug:"the-becraft-guide-to-avoiding-deportation",title:"The Becraft Guide to Avoiding Deportation",subtitle:"What Are Your Legal Rights If You Might Be Deported?",metaDescription:"A comprehensive guide to avoiding deportation from the Law Office of Todd Becraft — understand your legal options, defenses, and relief measures.",intro:"Deportation, also known as removal, is a serious and often distressing process in which a non-citizen is ordered to leave a country due to a violation of immigration laws. If you or someone you know is facing the risk of deportation, it is crucial to understand the legal options available. Several legal recourses can help challenge removal orders and provide avenues for remaining in the country lawfully. At the Law Office of Todd Becraft, we bring many years of experience helping people just like you to avoid getting deported.",sections:[{heading:"Understanding the Deportation Process",paragraphs:["Before diving into legal recourses, it is important to understand how deportation proceedings work. Deportation typically begins with an arrest or a notice to appear (NTA) before an immigration judge. The U.S. Immigration and Customs Enforcement (ICE) agency is responsible for enforcing deportation orders in the United States.","The process generally follows these steps:"],bullets:["Issuance of a Notice to Appear (NTA): This document outlines the reasons for the removal proceedings and specifies a court date.","Master Calendar Hearing: This initial hearing allows the non-citizen to respond to the charges and request relief.","Individual Hearing: If relief is sought, a separate hearing will be scheduled to present evidence and legal arguments.","Decision by the Immigration Judge: The judge will either grant relief or issue a deportation order.","Appeals: If the judge orders deportation, the individual may have options to appeal the decision.","Removal or Stay of Removal: If all legal options are exhausted, the individual may be deported or granted a stay of removal."]},{heading:"Legal Recourses for Avoiding Deportation",paragraphs:["There are several defenses and legal recourses available for individuals facing deportation. Each case is unique, and seeking legal counsel is crucial for determining the best course of action."]},{heading:"1. Challenging the Deportation Charges",paragraphs:["One of the first steps in fighting deportation is challenging the legal basis for removal. Possible defenses include:"],bullets:["Procedural Defects: If the NTA contains incorrect information, or if the government fails to follow proper procedures, the case may be dismissed.","Lack of Evidence: The government must prove that the individual is removable. If sufficient evidence is lacking, the case may be dismissed.","Unlawful Arrest or Detention: If an individual's rights were violated during the arrest or detention process, the removal proceedings could be challenged."]},{heading:"2. Asylum and Protection from Persecution",paragraphs:["Individuals who fear persecution in their home country due to race, religion, nationality, political opinion, or membership in a particular social group may apply for asylum. To be eligible, an applicant must:"],bullets:["File the application within one year of arrival in the U.S. (or show exceptional circumstances for late filing).","Demonstrate a credible fear of persecution.","Provide evidence supporting the claim."]},{heading:"3. Withholding of Removal",paragraphs:["Similar to asylum, withholding of removal prevents deportation if the individual can prove they would face persecution in their home country. However, the burden of proof is higher than for asylum, and withholding of removal does not provide a direct path to permanent residency.","This form of relief is particularly useful for individuals who miss the one-year deadline for asylum applications or who have been convicted of certain crimes that bar them from asylum eligibility."]},{heading:"4. Protection Under the Convention Against Torture (CAT)",paragraphs:["Individuals who can prove that they are likely to face torture by the government or with government acquiescence if returned to their home country may qualify for protection under CAT. Unlike asylum, this protection does not lead to permanent residency but it does prevent deportation to the home country."]},{heading:"5. Cancellation of Removal",paragraphs:["Cancellation of removal is a form of relief available to certain individuals who have established strong ties to the U.S. Eligibility criteria vary depending on whether the applicant is a lawful permanent resident (LPR) or a non-permanent resident."],bullets:["For Lawful Permanent Residents: Must have been an LPR for at least five years, resided in the U.S. continuously for at least seven years, and must not have been convicted of an aggravated felony.","For Non-Permanent Residents: Must have been physically present in the U.S. for at least ten years, demonstrate good moral character, and prove that removal would cause exceptional and extremely unusual hardship to a qualifying U.S. citizen or LPR family member."]},{heading:"6. Adjustment of Status",paragraphs:["Some individuals facing deportation may be eligible to adjust their status to that of a lawful permanent resident (green card holder). This option may be available if:"],bullets:["The individual has an immediate family member who is a U.S. citizen or lawful permanent resident and can petition for them.","The individual qualifies under certain employment-based categories.","The individual qualifies under special programs such as the Violence Against Women Act (VAWA) or special immigrant juvenile status (SIJS)."]},{heading:"7. Deferred Action and Prosecutorial Discretion",paragraphs:["In some cases, immigration authorities may decide not to pursue deportation — known as prosecutorial discretion. One well-known form is Deferred Action for Childhood Arrivals (DACA), which provides temporary relief from deportation to certain undocumented immigrants who arrived in the U.S. as children. Factors that may influence prosecutorial discretion include:"],bullets:["Length of time in the U.S.","Family ties in the U.S.","Contributions to the community.","Health issues."]},{heading:"8. Voluntary Departure",paragraphs:["If no other legal remedies are available, an individual may request voluntary departure. This allows them to leave the U.S. on their own terms rather than being forcibly removed, including the ability to reapply for legal entry in the future without the penalties associated with deportation."]},{heading:"9. Appeals and Motions to Reopen",paragraphs:["If a removal order is issued, there are still opportunities to challenge the decision through appeals and motions to reopen or reconsider. The appeals process can be complex, requiring legal expertise to navigate successfully."]}],cta:"Deportation is a serious legal matter, but numerous legal options exist for individuals at risk of removal. Seeking immediate legal counsel is essential. At the Law Office of Todd Becraft, we bring years of experience helping people avoid removal. Call us today: 213-388-1821."},{slug:"the-becraft-guide-to-how-to-get-a-green-card",title:"The Becraft Guide to How to Get a Green Card",subtitle:"How to Become a Lawful Permanent Resident of the United States",metaDescription:"A step-by-step guide to getting a green card from the Law Office of Todd Becraft — eligibility categories, application process, and what to expect.",intro:"A green card, officially known as a Permanent Resident Card, grants an immigrant the right to live and work permanently in the United States, a status known as Lawful Permanent Residency. Securing a green card is often a crucial step on the journey toward U.S. citizenship. At the Law Office of Todd Becraft, we bring many years of experience helping people navigate the challenging process of getting your green card.",sections:[{heading:"1. Green Card Eligibility Categories",paragraphs:["There are several ways to qualify for a green card, and each category has its own requirements."]},{heading:"A. Family-Based Green Cards",paragraphs:["Immediate Relatives of U.S. Citizens: If you are the spouse, unmarried child under 21, or parent of a U.S. citizen, you qualify as an immediate relative. This category is given priority, with no annual limit on green cards issued. Other family-based categories include unmarried sons and daughters of U.S. citizens over 21, married children of U.S. citizens, and siblings of U.S. citizens — though these are subject to annual quotas and longer waiting times."]},{heading:"B. Employment-Based Green Cards",paragraphs:["Many green cards are issued to foreign nationals who have been offered employment in the U.S. These are divided into categories (EB-1 through EB-5) based on qualifications, including priority workers, professionals with advanced degrees, skilled workers, and EB-5 investors willing to invest significant capital in a U.S. business."]},{heading:"C. Diversity Visa Lottery",paragraphs:["Each year, the Diversity Immigrant Visa Program randomly selects applicants from countries with historically low immigration rates to the U.S. If selected, winners can apply for a green card, provided they meet the eligibility requirements."]},{heading:"D. Humanitarian Grounds",paragraphs:["Individuals granted refugee or asylee status in the U.S. can apply for a green card after one year. Special categories also exist for victims of human trafficking (T visas) and crime victims (U visas), among others."]},{heading:"2. The Green Card Application Process",paragraphs:["While the process can vary depending on your eligibility category, it generally follows these key steps:"]},{heading:"A. Filing a Petition",paragraphs:["For family-sponsored green cards, the U.S. citizen or permanent resident sponsor must file Form I-130, Petition for Alien Relative, with USCIS. For employment-based green cards, the employer typically files Form I-140, Immigrant Petition for Alien Worker. A labor certification from the U.S. Department of Labor may also be required."]},{heading:"B. Adjustment of Status or Consular Processing",paragraphs:["If you're already in the U.S. under a non-immigrant visa, you can apply for adjustment of status by submitting Form I-485. If you're applying from outside the U.S., you will go through consular processing at a U.S. embassy or consulate in your home country."]},{heading:"C. Attend Your Interview",paragraphs:["In most cases, applicants are required to attend an interview either with USCIS (if adjusting status in the U.S.) or at a U.S. consulate (if applying from abroad). During the interview, you may be asked about your background, relationship to your sponsor, or your qualifications for the green card."]},{heading:"D. Receive Your Green Card",paragraphs:["If your application is approved, you will be issued a green card allowing you to live and work in the U.S. as a permanent resident. Your green card will initially be valid for 10 years (or two years for conditional residents like spouses of U.S. citizens)."]},{heading:"3. Special Considerations and Challenges",paragraphs:["Some green card categories are subject to annual quotas. If there is a backlog in your category, you may be assigned a priority date — check the Visa Bulletin published by the U.S. Department of State to track availability. Certain applicants may receive a conditional green card requiring them to file Form I-751 to remove conditions before it expires. If your application is denied, you may have the opportunity to appeal or file a motion to reopen."]},{heading:"4. Preparing for Life as a Green Card Holder",paragraphs:["As a permanent resident, you'll enjoy the ability to live and work anywhere in the U.S., access to government benefits, and a pathway to U.S. citizenship. However, green card holders also have responsibilities:"],bullets:["File U.S. income taxes annually.","Obey all federal, state, and local laws.","Renew your green card every 10 years.","Maintain your U.S. residency — prolonged absences can jeopardize your status."]}],cta:"Securing a green card is a major step toward achieving your goals in the United States. At the Law Office of Todd Becraft, we provide expert support tailored to your specific situation. Call us today to get the process started: 213-388-1821."},{slug:"the-becraft-guide-on-how-to-become-a-us-citizen",title:"The Becraft Guide on How to Become a US Citizen",subtitle:"The Pathway to American Citizenship",metaDescription:"A complete guide to U.S. naturalization from the Law Office of Todd Becraft — eligibility requirements, the step-by-step process, and life as a new citizen.",intro:"Becoming a U.S. citizen involves several legal steps, and a deep commitment to the values of freedom and democracy. You may be seeking greater security, new opportunities, or the chance to reunite with family. At the Law Office of Todd Becraft, we understand the complexities involved in immigration law and are dedicated to helping individuals and families through this important life transition.",sections:[{heading:"1. Eligibility: Are You Ready to Apply?",paragraphs:["Before you can apply for U.S. citizenship, you need to meet several requirements that ensure you've established yourself in the United States."]},{heading:"A. Lawful Permanent Resident Status",paragraphs:["The first step is holding the status of a Lawful Permanent Resident (LPR) — also known as having a green card. Most lawful permanent residents got their green card through family sponsorship, employment, or by being granted refugee or asylee status. Pathways to LPR status include:"],bullets:["Family Sponsorship","Employment-Based Immigration","Diversity Visa Lottery","Asylum or Refugee Status","Special Immigrant Categories (religious workers, international organization employees, U.S. military service members)"]},{heading:"B. Continuous Residence",paragraphs:["Once you have your green card, you need to have lived in the United States continuously for a certain period:"],bullets:["Five years of continuous residence is required for most applicants.","Three years of continuous residence is required if you are married to a U.S. citizen."]},{heading:"C. Physical Presence",bullets:["You must have been physically present in the U.S. for at least 30 months out of the last five years.","If applying based on marriage to a U.S. citizen, 18 months out of the last three years."]},{heading:"D. Good Moral Character",paragraphs:["You must demonstrate good moral character, meaning you've followed the laws, paid your taxes, and acted responsibly. Certain behaviors — such as committing serious crimes or failing to file taxes — can disqualify you."]},{heading:"E. Basic English Proficiency",paragraphs:["You need to show basic proficiency in reading, writing, and speaking English, tested during your citizenship interview. The test focuses on everyday language skills and uses simple sentences."]},{heading:"F. Knowledge of U.S. History and Civics",paragraphs:["You'll need to pass a civics test covering basic U.S. history and government. USCIS provides a list of 100 potential questions. You'll be asked up to 10 during your interview and need to get at least six correct."]},{heading:"2. The Naturalization Process: Step-by-Step"},{heading:"A. Filing Form N-400",paragraphs:["The first step is submitting Form N-400, Application for Naturalization. This form asks for information about your personal history, including address, employment, and travel history. The form can be filed online or by mail, and fees include a filing fee and biometrics fee."]},{heading:"B. Biometrics Appointment",paragraphs:["USCIS will schedule you for a biometrics appointment where your fingerprints, photo, and signature are collected for a background check."]},{heading:"C. The Naturalization Interview and Tests",paragraphs:["A USCIS officer will review your application and ask you questions to verify information. During the interview you'll also take:"],bullets:["English Test: You'll be asked to read and write simple sentences in English, and answer a few basic spoken questions.","Civics Test: You'll be asked up to 10 questions about American history and government — you need to get six correct to pass."]},{heading:"D. The Oath of Allegiance",paragraphs:["The final step is taking the Oath of Allegiance at your naturalization ceremony. You'll recite the oath alongside other new citizens and receive your Certificate of Naturalization — your official proof of U.S. citizenship."]},{heading:"3. Life as a U.S. Citizen",paragraphs:["Once you've completed the naturalization process, you'll enjoy all the rights and privileges of citizenship:"],bullets:["The right to vote in federal, state, and local elections.","Apply for a U.S. passport for easier international travel.","Sponsor family members for a green card.","Access to federal jobs and security clearances.","Full participation in jury duty and civic life."]},{heading:"4. Special Circumstances and Exceptions",bullets:["Military Service: May qualify for expedited naturalization without the usual residence requirements.","Older Applicants: Applicants 50+ who have lived in the U.S. as a green card holder for 20+ years may take the civics test in their native language.","Medical Exemptions: Applicants with physical or mental disabilities may qualify for a waiver from the English or civics tests."]}],cta:"Becoming a U.S. citizen is about becoming part of a nation with a rich history and a culture that celebrates individuality and freedom. The Law Office of Todd Becraft is ready to help you navigate every step of the journey. Call us today: 213-388-1821."},{slug:"video-tutorials",title:"Video Tutorials",subtitle:"Immigration information from Attorney Todd Becraft",metaDescription:"Watch Attorney Todd Becraft explain immigration processes, opportunities, and helpful information for immigrants to the United States.",intro:"Attorney Todd Becraft describes various immigration processes, opportunities and other helpful information for immigrants to the United States.",sections:[{heading:"What You'll Learn",bullets:["U-Visas, which ultimately become a Green Card, are available to victims of certain crimes if there's a police report.","Your rights if and when ICE knocks on your door.","Step-by-step explanations of common immigration processes."]}],cta:"Have questions about your specific situation? Call the Law Office of Todd Becraft today: 213-388-1821."}];function If(o){return ku.find(l=>l.slug===o)}function Tf(){return a.jsxs("div",{children:[a.jsx(Ae,{title:"Immigration Resources & Guides | Law Office of Todd Becraft",description:"Free immigration guides from Attorney Todd Becraft — how to get a green card, become a US citizen, avoid deportation, and more.",canonical:"/resources",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Immigration Resources & Guides | Law Office of Todd Becraft"}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Immigration ",a.jsx("span",{className:"text-[#D4A853]",children:"Resources"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Free guides and educational content from Attorney Todd Becraft to help you understand the immigration process and your legal options."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-5xl mx-auto",children:a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:ku.map(o=>a.jsxs(Y,{to:`/resources/${o.slug}`,className:"bg-white rounded-sm border border-gray-100 p-8 card-hover group",children:[a.jsx("div",{className:"gold-line mb-4"}),a.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2 group-hover:text-[#D4A853] transition-colors",children:o.title}),a.jsx("p",{className:"text-[#D4A853] text-sm font-medium mb-3",children:o.subtitle}),a.jsx("p",{className:"text-gray-500 text-sm leading-relaxed line-clamp-3",children:o.intro}),a.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase group-hover:text-[#C49A48] transition-colors",children:["Read Guide",a.jsx("svg",{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]},o.slug))})})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[a.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Situation?"}),a.jsx("p",{className:"text-gray-300 mb-8",children:"Our guides provide general information, but every case is unique. Contact us for a free consultation to discuss your specific circumstances."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),a.jsx(Y,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})})]})}function zf(){const{slug:o}=Za(),l=o?If(o):void 0;return z.useEffect(()=>{l&&Cu({resource_name:l.title,resource_slug:l.slug,language:"en"})},[l==null?void 0:l.slug]),l?a.jsxs("div",{children:[a.jsx(Ae,{title:`${l.title} | Becraft Immigration`,description:l.metaDescription,canonical:`/resources/${l.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:l.title,author:{"@type":"Person",name:"Todd Becraft"}}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[a.jsx(Y,{to:"/resources",className:"hover:text-[#D4A853] transition-colors",children:"Resources"}),a.jsx("span",{children:"/"}),a.jsx("span",{className:"text-gray-300",children:l.title})]}),a.jsx("div",{className:"gold-line mb-6"}),a.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:l.title}),a.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:l.subtitle}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:l.intro})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx("div",{className:"space-y-10",children:l.sections.map((c,u)=>{var p;return a.jsxs("div",{children:[c.heading&&a.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>a.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:m},f)),c.bullets&&c.bullets.length>0&&a.jsx("ul",{className:"space-y-2 mb-4",children:c.bullets.map((m,f)=>a.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[a.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),a.jsx("span",{children:m})]},f))}),c.numbered&&c.numbered.length>0&&a.jsx("ol",{className:"space-y-2 mb-4",children:c.numbered.map((m,f)=>a.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[a.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:f+1}),a.jsx("span",{children:m})]},f))})]},u)})}),a.jsx("div",{className:"gold-line my-10"}),a.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[a.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:l.cta}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),a.jsx(Y,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})]})}),a.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4",children:a.jsxs(Y,{to:"/resources",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[a.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"All Resources"]})})})]}):a.jsxs("div",{className:"section-padding text-center",children:[a.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Page Not Found"}),a.jsx("p",{className:"text-gray-500 mb-8",children:"That resource doesn't exist."}),a.jsx(Y,{to:"/resources",className:"btn-gold",children:"Back to Resources"})]})}const Lf=[{category:"Asylum & Convention Against Torture",title:"Asylum & Relief Under the Convention Against Torture",description:"We represent clients fleeing persecution due to political activities, religious beliefs, or membership in targeted social groups — including cases other attorneys have turned down.",outcome:"Through comprehensive country condition evidence, expert testimony, and compelling personal declarations, we have successfully obtained asylum for clients facing removal, providing them with permanent protection in the United States.",tag:"Asylum Granted"},{category:"Cancellation of Removal",title:"Cancellation of Removal for Non-Permanent Residents",description:"We defend long-term residents facing deportation who have U.S. citizen or permanent resident family members, demonstrating the exceptional and extremely unusual hardship removal would cause.",outcome:"Through medical evidence, school records, expert testimony, and financial documentation, we have persuaded immigration judges to cancel removal and grant our clients lawful permanent residence.",tag:"Removal Cancelled"},{category:"O-1 Extraordinary Ability Visa",title:"O-1 Extraordinary Ability Visa",description:"We prepare O-1 petitions for professionals with extraordinary ability or achievement, assembling the evidence needed to demonstrate sustained national or international acclaim.",outcome:"Our petition packages include expert recommendation letters, evidence of awards and publications, media coverage, and documentation of significant contributions to the field.",tag:"O-1 Approved"},{category:"P-3 Culturally Unique Artist Visa",title:"P-3 Culturally Unique Artist or Entertainer Visa",description:"We represent artists and entertainers performing traditional or culturally unique art forms, preparing P-3 petitions that establish the cultural merit of their work.",outcome:"Our petitions document the cultural uniqueness of the art form, the artist's credentials and international recognition, and the cultural value of planned U.S. performances.",tag:"P-3 Approved"},{category:"U-Visa for Crime Victims",title:"U-Visa for Victims of Crime",description:"We help victims of qualifying crimes who have cooperated with law enforcement obtain U-Visa protection, even when they face the prospect of deportation.",outcome:"We work with law enforcement to obtain the required certification, prepare comprehensive declarations, and submit evidence of physical and psychological impact to secure lawful status, work authorization, and a path to permanent residence.",tag:"U-Visa Approved"}],Df=[{quote:"Atty. Todd Becraft is one of a kind gentleman. Ever since he handled my immigration issues, everything just went to the right direction. You can feel that he treats you like a member of the family.",author:"Rolando G.",service:"via Yelp"},{quote:"The reception was fantastic and very professional. He showed me a lot of care by asking how my family is doing. I see him as an expert because of the way he asks questions and answers questions.",author:"John",service:"via Avvo"},{quote:"Attorney Todd Becraft is an exceptional and knowledgeable immigration attorney. He handled my case with such class and dignity — I won my case. Excellent staff, excellent customer service.",author:"Joseph M.",service:"via Yelp"},{quote:"I will always remember the professional legal services I received. All staff are caring and always work according to the instructions of their client. The services I received were far more than what I was charged.",author:"Tiwa Bob",service:"via Google"}];function Pf(){const o=Ye();return a.jsxs("div",{children:[a.jsx(Ae,{title:"Client Success Stories | Law Office of Todd Becraft",description:"Real immigration success stories from clients of the Law Office of Todd Becraft — asylum grants, green cards, citizenship, and deportation cases won.",canonical:"/success-stories",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Client Success Stories | Law Office of Todd Becraft"}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Success ",a.jsx("span",{className:"text-[#D4A853]",children:"Stories"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Every case we take on represents a family's future. Here are some of the outcomes we have achieved for our clients. While every case is different, these stories reflect our commitment to fighting for the best possible result."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Representative Case Results"}),a.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto text-sm",children:"The following are representative of the types of cases we handle and outcomes we have achieved. Past results do not guarantee future outcomes, as every case depends on its unique facts and circumstances."})]}),a.jsx("div",{className:"space-y-8",children:Lf.map((l,c)=>a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[a.jsxs("div",{className:"p-6 md:p-8",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[a.jsx("span",{className:"text-xs font-semibold tracking-wider uppercase text-[#D4A853]",children:l.category}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200",children:[a.jsx("svg",{className:"w-3.5 h-3.5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),l.tag]})]}),a.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-4",children:l.title}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"The Challenge"}),a.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.description})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"The Outcome"}),a.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.outcome})]})]})]}),a.jsx("div",{className:"h-0.5 bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853]/30 to-[#D4A853]/0"})]},c))})]})}),a.jsx("section",{className:"section-padding bg-[#1B2A4A]",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-4",children:"Client Testimonials"}),a.jsx("p",{className:"text-gray-400 max-w-xl mx-auto text-sm",children:"Hear from the families we have helped."})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Df.map((l,c)=>a.jsxs("div",{className:"border border-white/10 rounded-sm p-8 hover:border-[#D4A853]/30 transition-colors",children:[a.jsx("svg",{className:"w-8 h-8 text-[#D4A853]/30 mb-4",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})}),a.jsxs("blockquote",{className:"text-gray-200 leading-relaxed mb-6 italic font-serif",children:['"',l.quote,'"']}),a.jsx("div",{className:"gold-line mb-3"}),a.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.author}),a.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:l.service})]},c))}),a.jsx("p",{className:"text-center text-gray-500 text-xs mt-10",children:"* Testimonials are representative of client experiences. Past results do not guarantee future outcomes."})]})}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Let Us Fight for Your Future"}),a.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Every successful case starts with a conversation. Contact us today for a free consultation to discuss your immigration matter."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),a.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Schedule a Consultation"})]})]})})]})}function qf(){const[o,l]=z.useState({name:"",email:"",phone:"",service:"",message:""}),[c,u]=z.useState(!1),[p,m]=z.useState(!1),[f,x]=z.useState(""),v=C=>{l({...o,[C.target.name]:C.target.value})},b=async C=>{C.preventDefault(),u(!0),x("");try{(await fetch("https://formspree.io/f/xkokkjdk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(m(!0),ju({language:"en",service:o.service}),l({name:"",email:"",phone:"",service:"",message:""})):x("There was an error submitting your message. Please try again or call us directly.")}catch{x("There was an error submitting your message. Please try again or call us directly.")}finally{u(!1)}};return a.jsxs("div",{children:[a.jsx(Ae,{title:"Contact Us | Law Office of Todd Becraft",description:"Contact the Law Office of Todd Becraft for a free immigration consultation. Call (213) 388-1821 or fill out our online form.",canonical:"/contact",schema:{"@context":"https://schema.org","@type":"ContactPage",name:"Contact Law Office of Todd Becraft"}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Contact ",a.jsx("span",{className:"text-[#D4A853]",children:"Us"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Ready to take the next step? Reach out for a free, confidential consultation with an experienced immigration attorney."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsxs("div",{className:"grid lg:grid-cols-5 gap-12 lg:gap-16",children:[a.jsx("div",{className:"lg:col-span-3",children:a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-10",children:[a.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Send Us a Message"}),a.jsx("p",{className:"text-gray-500 text-sm mb-8",children:"Fill out the form below and we will get back to you promptly. All consultations are confidential."}),p?a.jsxs("div",{className:"text-center py-12",children:[a.jsx("div",{className:"w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4",children:a.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),a.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Message Sent Successfully"}),a.jsx("p",{className:"text-gray-500 mb-6",children:"Thank you for contacting us. We will review your message and respond as soon as possible."}),a.jsx("button",{onClick:()=>m(!1),className:"text-[#D4A853] font-semibold text-sm hover:text-[#C49A48] transition-colors",children:"Send Another Message"})]}):a.jsxs("form",{onSubmit:b,className:"space-y-6",children:[a.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),a.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:o.name,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"Your full name"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),a.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:o.email,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"your@email.com"})]})]}),a.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:o.phone,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"(555) 123-4567"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700 mb-2",children:"Service Needed"}),a.jsxs("select",{id:"service",name:"service",value:o.service,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 bg-white transition-colors appearance-none",style:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:"right 0.75rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.25em 1.25em"},children:[a.jsx("option",{value:"",children:"Select a service..."}),a.jsx("option",{value:"asylum",children:"Asylum"}),a.jsx("option",{value:"appeals",children:"BIA & 9th Circuit Appeals"}),a.jsx("option",{value:"cancellation",children:"Cancellation of Removal"}),a.jsx("option",{value:"citizenship",children:"Citizenship & Naturalization"}),a.jsx("option",{value:"daca",children:"DACA"}),a.jsx("option",{value:"deportation",children:"Deportation Defense"}),a.jsx("option",{value:"green-card",children:"Green Card / Adjustment of Status"}),a.jsx("option",{value:"waiver",children:"I-601A Provisional Waiver"}),a.jsx("option",{value:"k1-visa",children:"K-1 Fiance Visa"}),a.jsx("option",{value:"tps",children:"Temporary Protected Status (TPS)"}),a.jsx("option",{value:"u-visa",children:"U-Visa"}),a.jsx("option",{value:"family",children:"Family Immigration"}),a.jsx("option",{value:"other",children:"Other"})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Tell Us About Your Case *"}),a.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:o.message,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none",placeholder:"Please briefly describe your immigration matter..."})]}),f&&a.jsx("div",{className:"bg-red-50 border border-red-200 rounded-sm p-4",children:a.jsx("p",{className:"text-red-700 text-sm",children:f})}),a.jsx("button",{type:"submit",disabled:c,className:"btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",children:c?a.jsxs("span",{className:"flex items-center",children:[a.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):"Submit Message"}),a.jsx("p",{className:"text-xs text-gray-400",children:"By submitting this form, you agree that we may contact you regarding your inquiry. Submitting this form does not create an attorney-client relationship."})]})]})}),a.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[a.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8",children:[a.jsx("h3",{className:"text-white font-serif font-bold text-lg mb-6",children:"Call Us Today"}),a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("a",{href:"tel:2133881821",onClick:()=>oa({phone_number:"2133881821",location:"contact_page",language:"en"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[a.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Local"}),a.jsx("p",{className:"text-lg font-semibold",children:"(213) 388-1821"})]})]}),a.jsxs("a",{href:"tel:8552016898",onClick:()=>oa({phone_number:"8552016898",location:"contact_page",language:"en"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[a.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Toll Free"}),a.jsx("p",{className:"text-lg font-semibold",children:"(855) 201-6898"})]})]})]}),a.jsx("div",{className:"mt-6 bg-[#D4A853] text-[#1B2A4A] px-4 py-2 rounded-full text-sm font-bold tracking-wide text-center",children:"Se Habla Espanol"})]}),a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-6",children:"Office Information"}),a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:a.jsxs("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Location"}),a.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["3450 Wilshire Blvd. Suite 1015",a.jsx("br",{}),"Los Angeles, CA 90010"]})]})]}),a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Office Hours"}),a.jsxs("div",{className:"text-gray-500 text-sm mt-1 space-y-1",children:[a.jsx("p",{children:"Monday – Friday: 9:00 AM – 6:00 PM"}),a.jsx("p",{children:"Saturday: By Appointment"}),a.jsx("p",{children:"Sunday: Closed"})]})]})]}),a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Languages"}),a.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"English & Spanish"})]})]})]})]}),a.jsxs("div",{className:"bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-sm p-8 text-center",children:[a.jsx("svg",{className:"w-10 h-10 mx-auto text-[#D4A853] mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})}),a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-2",children:"Free Consultation"}),a.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"We offer free initial consultations to evaluate your immigration case. There is no obligation and all communications are strictly confidential."}),a.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6",children:"Call Now"})]}),a.jsx("div",{className:"bg-[#1B2A4A] rounded-sm overflow-hidden",children:a.jsxs("div",{className:"aspect-[4/3] flex items-center justify-center relative",children:[a.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.5) 1px, transparent 0)",backgroundSize:"20px 20px"}}),a.jsxs("div",{className:"text-center relative z-10",children:[a.jsxs("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/40 mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:[a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),a.jsx("p",{className:"text-gray-300 font-serif font-bold",children:"Los Angeles, California"}),a.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Serving clients throughout Southern California"})]})]})})]})]})})})]})}const Nu=[{slug:"new-restrictions-obtain-renew-us-work-permit-2026",title:"What Are the New Restrictions to Obtain and Renew a U.S. Work Permit? Understanding the Latest USCIS Changes in 2026",date:"July 20, 2026",excerpt:"USCIS has reduced many work permit validity periods from five years to 18 months, changed automatic renewal extensions, and proposed new restrictions for asylum applicants. Here is what every immigrant should know before filing Form I-765.",content:`## Understanding Employment Authorization and Who Qualifies

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
Call 213.388.1821 or email tb@becraftlaw.com to schedule a confidential consultation. Understanding your rights is the first step toward protecting your future.`}];function Bf(){const o=Ye();return a.jsxs("div",{children:[a.jsx(Ae,{title:"Immigration Blog | Law Office of Todd Becraft",description:"Immigration law news, updates, and guidance from the Law Office of Todd Becraft in Los Angeles.",canonical:"/blog",schema:{"@context":"https://schema.org","@type":"Blog",name:"Becraft Immigration Blog"}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Immigration Law ",a.jsx("span",{className:"text-[#D4A853]",children:"Blog"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Stay informed about the latest developments in immigration law, policy changes, and practical advice from the Law Office of Todd Becraft."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-5xl mx-auto",children:a.jsx("div",{className:"space-y-8",children:Nu.map(l=>a.jsx(Y,{to:`/blog/${l.slug}`,className:"block bg-white rounded-sm border border-gray-100 p-6 md:p-8 card-hover group",children:a.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:gap-8",children:[a.jsx("div",{className:"flex-shrink-0 mb-3 md:mb-0 md:w-40",children:a.jsx("span",{className:"text-sm text-[#D4A853] font-semibold",children:l.date})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3 group-hover:text-[#D4A853] transition-colors",children:l.title}),a.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-4",children:l.excerpt}),a.jsxs("span",{className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase group-hover:text-[#C49A48] transition-colors",children:["Read More",a.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})]})},l.slug))})})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[a.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Immigration Case?"}),a.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us for a free consultation. Our experienced immigration attorneys are ready to help."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),a.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline",children:"Contact Us Online"})]})]})})]})}function Rf(){const{slug:o}=Za(),l=Nu.find(c=>c.slug===o);return l?a.jsxs("div",{children:[a.jsx(Ae,{title:`${l.title} | Becraft Immigration Law`,description:l.excerpt,canonical:`/blog/${l.slug}`,schema:{"@context":"https://schema.org","@type":"BlogPosting",headline:l.title,datePublished:l.date,author:{"@type":"Organization",name:"Law Office of Todd Becraft"}}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",children:[a.jsxs(Y,{to:"/blog",className:"inline-flex items-center gap-1.5 text-[#D4A853] text-sm font-semibold mb-6 hover:text-[#E8C97A] transition-colors",children:[a.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"Back to Blog"]}),a.jsx("div",{className:"gold-line mb-6"}),a.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold mb-4 leading-tight",children:l.title}),a.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.date})]}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-3xl mx-auto",children:a.jsx("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed",children:l.content?a.jsx("div",{className:"prose prose-lg max-w-none",children:(()=>{const c=u=>u.split("**").map((p,m)=>m%2===1?a.jsx("strong",{children:p},m):a.jsx("span",{children:p},m));return l.content.split(`

`).map((u,p)=>{const m=u.trim();if(m.startsWith("## "))return a.jsx("h2",{className:"text-xl md:text-2xl font-serif font-bold text-[#1B2A4A] mt-8 mb-4",children:c(m.slice(3))},p);const f=m.split(`
`),x=f.findIndex(v=>v.trim().startsWith("- "));if(x!==-1&&f.slice(x).every(v=>v.trim().startsWith("- "))){const v=f.slice(0,x).join(" ").trim();return a.jsxs("div",{children:[v&&a.jsx("p",{className:"text-base leading-relaxed mb-2",children:c(v)}),a.jsx("ul",{className:"list-disc pl-6 mb-4 space-y-1",children:f.slice(x).map((b,C)=>a.jsx("li",{className:"text-base leading-relaxed",children:c(b.trim().slice(2))},C))})]},p)}return a.jsx("p",{className:"text-base leading-relaxed mb-4",children:c(m)},p)})})()}):l.sections?l.sections.map((c,u)=>{var p;return a.jsxs("div",{children:[c.heading&&a.jsx("h2",{className:"text-lg font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>a.jsx("p",{className:"text-base leading-relaxed mb-4",children:m},f))]},u)}):null})})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[a.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Immigration Case?"}),a.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us for a free consultation. Our experienced immigration attorneys are ready to help."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),a.jsx(Y,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})})]}):a.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-warm-white px-4",children:[a.jsx("h1",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Post not found"}),a.jsx(Y,{to:"/blog",className:"text-[#D4A853] font-semibold hover:underline",children:"← Back to Blog"})]})}const Mf=[{slug:"deportacion-y-remocion",title:"Deportación y Remoción",description:"Nuestros abogados luchan agresivamente para mantener a las familias unidas. Exploramos cada posible forma de alivio contra la deportación."},{slug:"ciudadania-y-naturalizacion",title:"Ciudadanía y Naturalización",description:"La Oficina Legal de Todd Becraft le puede asistir en realizar su sueño de ser ciudadano/a de los Estados Unidos."},{slug:"asilo",title:"Asilo",description:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo por persecución."},{slug:"tarjeta-verde-ajuste-de-estatus",title:"Tarjeta Verde / Ajuste de Estatus",description:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes por relaciones familiares o empleo."},{slug:"cancelacion-de-eliminacion",title:"Cancelación de Eliminación",description:"Una defensa poderosa para personas en procedimientos de remoción con residencia a largo plazo en los EE.UU."},{slug:"daca",title:"DACA",description:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes iniciales y renovaciones."},{slug:"visa-u",title:"Visa U",description:"La Oficina legal de Todd Becraft representa clientes víctimas de delitos que cooperan en una investigación criminal."},{slug:"estado-de-proteccion-temporal-tps",title:"Estado de Protección Temporal (TPS)",description:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones y documentos de autorización de trabajo."},{slug:"visa-de-prometido-k-1",title:"Visa de Prometido K-1",description:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar y casarse en los Estados Unidos."},{slug:"i-601a-exenciones-provisionales",title:"I-601A Exenciones Provisionales",description:"Permitimos a ciertos parientes inmediatos de ciudadanos de EE.UU. solicitar una exención antes de su entrevista consular."}],Ff=[{name:"Tiwa Bob",text:"Siempre viviré para recordar los servicios legales profesionales que recibí de la Oficina Legal de Todd Becraft. Todo el personal de este bufete de abogados es atento y siempre trabaja de acuerdo con las instrucciones de su cliente."},{name:"Ariel Arauz",text:"Ciertamente, el abogado Todd Becraft, es el mejor abogado de inmigración que conozco, entre sus cualidades se incluyen: Honestidad, dedicación, profesionalismo, muy inteligente, carisma, profundo conocimiento de la ley de inmigración, etc."},{name:"John",text:"En mi primer encuentro con él, la recepción fue fantástica y muy profesional. me mostró mucho cuidado al preguntar cómo está mi familia, para mí eso es una marca de una persona que se preocupa por otras personas."},{name:"Joseph M.",text:"El abogado Todd Becraft es un abogado de inmigración excepcional y conocedor. El abogado Todd manejó mi caso con tanta clase y dignidad que gané mi caso."}];function Of(){const o=Ye();return a.jsxs("div",{children:[a.jsx(Ae,{title:"Abogados de Inmigración en Los Ángeles | Ley Becraft",description:"Abogados de inmigración expertos en Los Ángeles. Asilo, defensa contra deportación, tarjetas verdes, ciudadanía y más. Consulta gratis: (213) 388-1821.",canonical:"/es",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:[{lang:"en",path:"/"},{lang:"es",path:"/es"},{lang:"x-default",path:"/"}]}),a.jsxs("section",{className:"relative bg-[#1B2A4A] overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.4) 1px, transparent 0)",backgroundSize:"40px 40px"}}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-8"}),a.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6",children:["Te Podemos Ayudar A Lograr Tu"," ",a.jsx("span",{className:"text-[#D4A853]",children:"Sueño Americano."})]}),a.jsx("p",{className:"text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl",children:"Honestos | Experimentados | Comprometidos Para Ayudarte"}),a.jsx("p",{className:"text-gray-400 mb-10",children:"Ley de inmigración es todo lo que hacemos — y lo hacemos excepcionalmente bien."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[a.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Consulta"]}),a.jsx("button",{onClick:()=>o("/es/servicios"),className:"btn-outline",children:"Nuestros Servicios"})]}),a.jsxs("div",{className:"mt-10 flex items-center gap-3 text-gray-400 text-sm",children:[a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),a.jsx("span",{children:"(213) 388-1821"}),a.jsx("span",{className:"text-gray-600",children:"|"}),a.jsx("span",{children:"Toll Free: (855) 201-6898"})]})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{id:"es-about",className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[a.jsxs("div",{children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-6",children:["Comprometidos a Defender los"," ",a.jsx("span",{className:"text-[#D4A853]",children:"Derechos de los Inmigrantes"})]}),a.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:"For more than 20 years, The Law Office of Todd Becraft has been dedicated to defending the rights of immigrants from all over the world. Based in Los Angeles California, our firm is dedicated exclusively to immigration law. Whether the case involves removal from the United States, a family petition, an asylum case, or a citizenship case we are committed to achieving the best results for our clients and their families. Our firm is fully bilingual (English / Spanish) because at the law office of Todd Becraft we believe that communication is the key to success in any legal matter. At The Law Office of Todd Becraft you will never have to wonder about the status of your case."})]}),a.jsxs("div",{className:"relative",children:[a.jsxs("div",{className:"rounded-sm overflow-hidden",children:[a.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",alt:"Todd Becraft, Abogado Fundador",className:"w-full aspect-[4/5] object-cover object-top"}),a.jsxs("div",{className:"bg-[#1B2A4A] p-6",children:[a.jsx("p",{className:"text-white font-serif font-bold",children:"Todd Becraft"}),a.jsx("p",{className:"text-[#D4A853] text-xs tracking-wider uppercase mt-1",children:"Abogado Fundador"})]})]}),a.jsx("div",{className:"absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A853]/20 rounded-sm -z-10"})]})]})})}),a.jsx("section",{id:"es-services",className:"section-padding bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Nuestros Servicios"}),a.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Manejamos una amplia gama de asuntos de inmigración, desde peticiones familiares hasta defensa de deportación y apelaciones en tribunales federales."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:Mf.map(l=>a.jsxs(Y,{to:`/es/servicios/${l.slug}`,className:"text-left p-6 bg-[#FAFAF8] rounded-sm border border-gray-100 card-hover group block",children:[a.jsx("div",{className:"text-[#D4A853] mb-4",children:a.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})}),a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2 group-hover:text-[#D4A853] transition-colors",children:l.title}),a.jsx("p",{className:"text-gray-500 text-sm",children:l.description})]},l.slug))}),a.jsx("div",{className:"mt-10 text-center",children:a.jsxs(Y,{to:"/es/servicios",className:"btn-gold inline-flex items-center",children:["Ver Todos los Servicios",a.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})]})}),a.jsx("section",{id:"es-testimonials",className:"section-padding bg-warm-gray",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold",children:"Testimonios"})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Ff.map(l=>a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[a.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(5)].map((c,u)=>a.jsx("svg",{className:"w-4 h-4 text-[#D4A853]",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},u))}),a.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed italic mb-6",children:['"',l.text,'"']}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center",children:a.jsx("span",{className:"text-[#D4A853] font-serif font-bold text-sm",children:l.name.charAt(0)})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-serif font-bold text-[#1B2A4A] text-sm",children:l.name}),a.jsx("p",{className:"text-gray-400 text-xs",children:"Cliente"})]})]})]},l.name))})]})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16 md:py-20",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-12",children:a.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold",children:["Miles de Familias ",a.jsx("span",{className:"text-[#D4A853]",children:"Reunidas"})]})}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[{number:"20+",label:"Años de Experiencia"},{number:"12",label:"Áreas de Práctica"},{number:"4",label:"Abogados y Personal"},{number:"2",label:"Idiomas"}].map(l=>a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-4xl md:text-5xl font-serif text-[#D4A853] font-bold mb-2",children:l.number}),a.jsx("p",{className:"text-gray-300 text-sm",children:l.label})]},l.label))})]})}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Guías Gratuitas de Inmigración"}),a.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Recursos educativos gratuitos preparados por el Abogado Todd Becraft para ayudarle a entender sus opciones."})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[a.jsxs(Y,{to:"/es/recursos/la-guia-becraft-para-evitar-la-deportacion",className:"p-8 bg-white rounded-sm border border-gray-100 card-hover group block",children:[a.jsx("div",{className:"text-[#D4A853] mb-4",children:a.jsx("svg",{className:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A853] transition-colors",children:"La Guía Becraft para Evitar la Deportación"}),a.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"Una guía completa sobre el proceso de deportación, sus derechos legales y todas las defensas disponibles para evitar la remoción."}),a.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] text-sm font-semibold",children:["Leer la Guía",a.jsx("svg",{className:"w-4 h-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]}),a.jsxs(Y,{to:"/es/recursos/la-guia-de-becraft-sobre-como-convertirse-en-ciudadano-estadounidense",className:"p-8 bg-white rounded-sm border border-gray-100 card-hover group block",children:[a.jsx("div",{className:"text-[#D4A853] mb-4",children:a.jsx("svg",{className:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"})})}),a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A853] transition-colors",children:"Cómo Convertirse en Ciudadano Estadounidense"}),a.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"Todo lo que necesita saber sobre el proceso de naturalización: requisitos de elegibilidad, el proceso paso a paso y los beneficios de la ciudadanía."}),a.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] text-sm font-semibold",children:["Leer la Guía",a.jsx("svg",{className:"w-4 h-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})]}),a.jsx("div",{className:"mt-8 text-center",children:a.jsx(Y,{to:"/es/recursos",className:"text-[#D4A853] hover:underline text-sm font-semibold",children:"Ver Todos los Recursos →"})})]})}),a.jsx("section",{id:"es-contact",className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Programe Su Consulta Hoy"}),a.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Dé el primer paso para asegurar su futuro. Nuestros abogados de inmigración con experiencia están listos para evaluar su caso y discutir sus opciones."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Llame al (213) 388-1821"]}),a.jsx("button",{onClick:()=>o("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Envíenos un Mensaje"})]}),a.jsxs("p",{className:"mt-6 text-sm text-gray-500",children:["Toll Free: ",a.jsx("a",{href:"tel:8552016898",className:"text-[#D4A853] hover:underline",children:"(855) 201-6898"}),a.jsx("span",{className:"mx-3 text-gray-300",children:"|"}),a.jsx("span",{className:"text-[#D4A853] font-semibold",children:"Se Habla Español"})]})]})})]})}const Eu=[{slug:"asilo",title:"Asilo",subtitle:"Proceso y Requisitos de Asilo",metaDescription:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo. Representamos a personas que solicitan asilo en Los Ángeles.",intro:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo. Representamos a personas que solicitan asilo por persecución por raza, religión, nacionalidad, opinión política o membresía en un grupo social particular.",sections:[{heading:"Proceso Afirmativo",paragraphs:["Un extranjero debe estar físicamente presente en los Estados Unidos para obtener asilo a través del proceso afirmativo.","Un extranjero debe solicitar asilo dentro de un año de su última fecha de llegada a los Estados Unidos.","Un extranjero también puede solicitar asilo afirmativo presentando el Formulario I-589, Solicitud de Asilo y Suspensión de Expulsión, al USCIS."]},{heading:"Proceso Defensivo",paragraphs:["Las solicitudes defensivas de asilo ocurren cuando los extranjeros solicitan asilo como defensa contra la expulsión de los Estados Unidos.","Los jueces de inmigración escucharán casos de asilo defensivo en procedimientos contradictorios. Un juez escuchará los argumentos tanto del extranjero como del gobierno de EE.UU."]},{heading:"Personas No Elegibles para el Asilo",bullets:["No siguió la fecha límite de presentación de un año para el Formulario I-589","Si un juez de inmigración o la Junta de Apelaciones de Inmigración negaron su solicitud de asilo anterior","Puede ser trasladado a un tercer país seguro en virtud de un acuerdo entre los EE.UU. y otros países"]}],cta:"¿Necesita ayuda para solicitar asilo en el área de Los Ángeles? La Oficina Legal de Todd Becraft entiende las formas más efectivas de manejar estos casos. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta."},{slug:"cancelacion-de-eliminacion",title:"Cancelación de Eliminación",subtitle:"Una Defensa Poderosa contra la Deportación",metaDescription:"La cancelación de deportación es una defensa poderosa para personas en procedimientos de remoción. Abogados de inmigración en Los Ángeles.",intro:"La cancelación de deportación es una defensa poderosa para personas en procedimientos de remoción que pueden demostrar residencia a largo plazo en los EE.UU. y vínculos familiares fuertes.",sections:[{heading:"Elegibilidad para Cancelación de Deportación",paragraphs:["Una persona puede ser elegible para que se cancele su remoción bajo la sección 240A(b) de la INA si puede establecer ante un juez de inmigración que cumple con ciertos requisitos."],bullets:["Ha mantenido presencia física continua en los EE.UU. durante diez años o más","Ha sido una persona de buen carácter moral durante ese período","No ha sido condenado por ciertos delitos","Su remoción causaría dificultades excepcionales a su cónyuge, padre o hijo ciudadano de EE.UU. o LPR"]},{heading:"Satisfacer el Requisito de Residencia de 10 Años",paragraphs:["Los recibos de alquiler, resúmenes de tarjetas de crédito y talones de pago pueden ser formas de evidencia para probar residencia continua.","Es importante que las personas entiendan que salir del país por más de 90 días o sumar más de 180 días puede afectar negativamente el cálculo de 10 años."]},{heading:"Requisito de Dificultad Excepcional",paragraphs:["Este requisito puede ser uno de los más difíciles de cumplir porque una persona necesita presentar motivos que vayan más allá de la simple tristeza de un familiar.","Cuando existe preocupación de que la atención médica no esté disponible en el país de origen, eso a menudo es suficiente para satisfacer esta carga."]}],cta:"Puede llamar al (213) 388-1821 o contáctenos en línea para concertar una consulta con nuestro abogado de cancelación de deportación en Los Ángeles."},{slug:"ciudadania-y-naturalizacion",title:"Ciudadanía y Naturalización",subtitle:"El Proceso de Naturalización Explicado",metaDescription:"Guiamos a nuestros clientes a través de cada paso del proceso de naturalización. Abogados de ciudadanía e inmigración en Los Ángeles.",intro:"Guiamos a nuestros clientes a través de cada paso del proceso de naturalización, desde determinar la elegibilidad hasta prepararse para la entrevista y el examen de ciudadanía.",sections:[{heading:"Requisitos de Naturalización",paragraphs:["La naturalización es el proceso mediante el cual se otorga la ciudadanía estadounidense a un residente permanente legal después de cumplir con los requisitos establecidos en la Ley de Inmigración y Nacionalidad."],bullets:["Tener al menos 18 años de edad al presentar la solicitud","Ser residente permanente legal (titular de tarjeta verde) durante al menos 5 años (3 años si está casado con ciudadano/a)","Haber vivido en los EE.UU. continuamente","Ser una persona de buen carácter moral","Ser capaz de leer, escribir y hablar inglés básico","Demostrar conocimiento de la historia y gobierno de EE.UU.","Estar dispuesto a prestar el Juramento de Lealtad"]},{heading:"El Proceso de Naturalización",paragraphs:["Cuando alguien envía su solicitud, es posible que deba someterse a la recopilación de datos biométricos. USCIS programa una cita y le informa la hora, el lugar y la fecha.","La naturalización también implica una entrevista con un oficial de inmigración de USCIS donde debe demostrar conocimiento del idioma inglés y del civismo.","También habrá un examen de historia y gobierno de los Estados Unidos."]}],cta:"Nuestra firma ha estado ayudando a inmigrantes por más de una década. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de ciudadanía y naturalización en Los Ángeles."},{slug:"daca",title:"DACA",subtitle:"Acción Diferida para los Llegados en la Infancia",metaDescription:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes y renovaciones. Abogados de DACA en Los Ángeles.",intro:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes iniciales y renovaciones. Monitoreamos los cambios en el programa para asegurarnos de que nuestros clientes estén preparados.",sections:[{heading:"Requisitos de DACA",paragraphs:["Las solicitudes de DACA solo se pueden otorgar cuando USCIS determina que una persona cumple con los siguientes criterios mínimos:"],bullets:["Tenían menos de 31 años el 15 de junio de 2012","Llegó a los Estados Unidos antes de cumplir los 16 años de edad","Ha vivido en los Estados Unidos continuamente desde el 15 de junio de 2007","Estaba presente en los EE.UU. el 15 de junio de 2012 y en el momento de hacer la solicitud","No tiene una condena por delito grave, delito menor significativo o tres o más delitos menores","No representa una amenaza para la seguridad nacional o pública","Tiene al menos 15 años de edad al momento de solicitar"]},{heading:"Proceso de Solicitud de DACA",paragraphs:["Aunque DACA se ha vuelto más complicado para nuevas personas en el programa, todavía ofrece beneficios considerables para personas elegibles.","Nuestros servicios incluyen solicitudes iniciales de DACA, renovaciones oportunas para prevenir brechas en la autorización de trabajo, solicitudes de advance parole, y abordar complicaciones con el estatus DACA."]}],cta:"Nuestra firma entiende lo aterrador que puede ser este proceso. Puede llamar al (213) 388-1821 o contáctenos en línea para recibir una consulta con nuestro abogado de DACA en Los Ángeles."},{slug:"deportacion-y-remocion",title:"Deportación y Remoción",subtitle:"Defensa Agresiva contra la Deportación",metaDescription:"Nuestros abogados son defensores experimentados que luchan agresivamente para mantener a las familias unidas. Defensa contra deportación en Los Ángeles.",intro:"Nuestros abogados son defensores experimentados en sala de audiencias que luchan agresivamente para mantener a las familias unidas. Exploramos cada posible forma de alivio.",sections:[{heading:"Audiencias de Deportación",paragraphs:["El Título 8 del Código de EE.UU. § 1229a es la ley federal relacionada con los procedimientos de deportación. Pocas perspectivas pueden ser más aterradoras que enfrentarse a la deportación.","Un caso de deportación terminará con la deportación de la persona a su país de origen o con la elegibilidad para continuar viviendo y trabajando en los EE.UU.","Cuando una persona recibe un Aviso de comparecencia en la corte de inmigración, el Departamento de Seguridad Nacional ha comenzado el proceso para deportarlo de los EE.UU."]},{heading:"Formas de Defensa",bullets:["Asilo y suspensión de remoción","Protección de la Convención contra la Tortura (CAT)","Cancelación de remoción","Ajuste de estatus","Salida voluntaria","Discreción del fiscal","Apelaciones ante la Junta de Apelaciones de Inmigración (BIA)","Apelaciones ante el Tribunal del 9no Circuito"]}],cta:"Nuestra firma entiende que cada cliente que servimos es único. Dé el primer paso cuando llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de deportación y remoción en Los Ángeles."},{slug:"tarjeta-verde-ajuste-de-estatus",title:"Tarjeta Verde / Ajuste de Estatus",subtitle:"Su Camino hacia la Residencia Permanente",metaDescription:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes. Abogados de tarjeta verde y ajuste de estatus en Los Ángeles.",intro:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes por relaciones familiares, empleo u otras categorías.",sections:[{heading:"Cómo Solicitar una Tarjeta Verde",paragraphs:["El Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) señala que el ajuste de estatus se refiere a un proceso que una persona puede usar para solicitar la residencia permanente legal sin tener que regresar a su país de origen.","La mayoría de las personas que solicitan tarjetas de residencia deben completar al menos dos formularios: una petición de inmigrante y una solicitud de tarjeta de residencia."]},{heading:"Categorías de Elegibilidad",bullets:["Basada en relaciones familiares (cónyuge, padre, hijo de ciudadano de EE.UU. o LPR)","Basada en empleo (trabajadores con habilidades especiales, trabajadores profesionales, otros trabajadores)","Lotería de visa de diversidad","Categorías humanitarias (asilo, refugiado, VAWA)","Visa U después de tres años"]}],cta:"Nuestra firma se tomará el tiempo para explicarle cada acción que ocurre en su caso. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de tarjeta verde en Los Ángeles."},{slug:"visa-de-prometido-k-1",title:"Visa de Prometido K-1",subtitle:"Requisitos y Proceso de la Visa K-1",metaDescription:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar a los Estados Unidos y casarse dentro de 90 días. Abogados en Los Ángeles.",intro:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar a los Estados Unidos y casarse dentro de los 90 días de llegada.",sections:[{heading:"Proceso de Visa K-1",paragraphs:["Ciudadanos de los Estados Unidos que deseen traer a su prometido/a extranjero/a al país para casarse deben presentar el Formulario I-129F, Petición para Prometido/a Extranjero/a.","Si el/la prometido/a se casa dentro de los 90 días posteriores a la admisión como no inmigrante K-1, puede solicitar el estatus de residente permanente legal."]},{heading:"Requisitos de Elegibilidad",bullets:["El peticionario debe ser ciudadano de los EE.UU.","Ambas partes deben ser legalmente libres para casarse","Las partes se han conocido en persona en los dos años anteriores a la solicitud (con excepciones)","El ciudadano de EE.UU. debe cumplir con los requisitos de ingresos"]}],cta:"Nuestra firma ha ayudado a muchas personas en todo California a obtener las visas K-1 que necesitaban para casarse. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de visa K-1 en Los Ángeles."},{slug:"estado-de-proteccion-temporal-tps",title:"Estado de Protección Temporal (TPS)",subtitle:"Lo Que Necesita Saber sobre el TPS",metaDescription:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones y documentos de autorización de trabajo. Abogados de TPS en Los Ángeles.",intro:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones oportunas y documentos de autorización de trabajo.",sections:[{heading:"¿Quién Califica para TPS?",paragraphs:["El Estado de Protección Temporal (TPS) es una forma de ayuda humanitaria para ciudadanos extranjeros dentro de los EE.UU. cuyo país de origen está designado por el Secretario de Seguridad Nacional."],bullets:["Es ciudadano del país designado para TPS","Ha residido continuamente en los EE.UU. desde la fecha especificada para el país","Ha estado presente físicamente en los EE.UU. continuamente desde la fecha designada","No ha sido condenado por dos o más delitos menores o un delito grave"]},{heading:"Países con TPS",paragraphs:["Los países con nacionales bajo TPS incluyen Somalia, Honduras, Nicaragua, Camerún, El Salvador, Haití, Siria, Sudán, Nepal, Sudán del Sur, Yemen, Venezuela, Myanmar, Ucrania y Afganistán."]}],cta:"Nuestra firma trabaja muy de cerca con cada cliente. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de TPS en Los Ángeles."},{slug:"i-601a-exenciones-provisionales",title:"I-601A Exenciones Provisionales",subtitle:"El Proceso de Exención Provisional I-601A",metaDescription:"La exención provisional I-601A permite a ciertos parientes inmediatos solicitar una exención antes de su entrevista consular. Abogados en Los Ángeles.",intro:"La exención provisional I-601A permite a ciertos parientes inmediatos de ciudadanos de EE.UU. solicitar una exención antes de salir de los EE.UU. para su entrevista consular.",sections:[{heading:"¿Qué es el Formulario I-601A?",paragraphs:["El Formulario I-601A, Solicitud de Exención Provisional de Presencia Ilegal, es diferente del Formulario I-601. Mientras que el I-601 es para extranjeros inadmisibles en los EE.UU., el I-601A es específicamente para personas que solo necesitan una exención por presencia ilegal.","Si bien el Formulario I-601A puede renunciar a la presencia ilegal, no renuncia a otros motivos de inadmisibilidad."]},{heading:"Requisitos para el I-601A",bullets:["Ser pariente inmediato de un ciudadano de los EE.UU. (cónyuge, hijo, padre)","Tener una petición de inmigrante aprobada (Formulario I-130)","Tener un caso pendiente con el Centro Nacional de Visas","Demostrar que la denegación causaría dificultades extremas al cónyuge o padre ciudadano de EE.UU."]}],cta:"Nuestra firma ha manejado muchos de estos casos, así que sabemos cómo abordar cualquier problema que pueda surgir. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de exenciones I-601A en Los Ángeles."},{slug:"visa-u",title:"Visa U",subtitle:"Beneficios de Inmigración para Víctimas de Delitos",metaDescription:"La Visa U proporciona beneficios de inmigración a víctimas de delitos que han cooperado con las autoridades. Abogados de Visa U en Los Ángeles.",intro:"La Visa U proporciona beneficios de inmigración a víctimas de delitos que han cooperado con las autoridades. También ayudamos con el ajuste de estatus a residencia permanente después de tres años.",sections:[{heading:"¿Qué es la Visa U?",paragraphs:["El estatus de no inmigrante U (la Visa U) es un programa de alivio de inmigración que busca hacer más seguro para las víctimas de ciertos delitos denunciar sus casos a la policía.","El Congreso aprobó la Ley de Protección de Víctimas de la Trata y la Violencia (VTVPA) en 2000 y creó dos categorías de visas de no inmigrante: la Visa U para víctimas de ciertos delitos y la Visa T para víctimas de trata de personas."]},{heading:"Elegibilidad para la Visa U",bullets:["Ha sufrido abuso físico o mental sustancial como resultado de haber sido víctima de actividad delictiva calificada","Tiene información sobre la actividad delictiva calificada","Ha sido útil, es útil o probablemente será útil para funcionarios del orden público en la investigación o enjuiciamiento de la actividad delictiva","La actividad delictiva violó las leyes de los EE.UU. o ocurrió en los EE.UU."]},{heading:"Actividades Delictivas Calificadas",bullets:["Violencia doméstica","Agresión sexual","Abuso sexual de un menor","Prostitución","Esclavitud","Tráfico de personas","Acoso","Secuestro","Extorsión","Testigo falso","Obstrucción de la justicia","Y otros delitos graves"]}],cta:"Nuestra firma sabrá cómo ayudarle a superar cualquier complicación y lograr el resultado más favorable posible para su caso. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de Visa U en Los Ángeles."}];function _f(o){return Eu.find(l=>l.slug===o)}const ys={asilo:"asylum","cancelacion-de-eliminacion":"cancellation-of-removal","ciudadania-y-naturalizacion":"citizenship-and-naturalization",daca:"daca","deportacion-y-remocion":"deportation-and-removal","tarjeta-verde-ajuste-de-estatus":"green-card-adjustment-of-status","i-601a-exenciones-provisionales":"i-601a-provisional-waivers","visa-de-prometido-k-1":"k-1-fiance-visa","estado-de-proteccion-temporal-tps":"temporary-protected-status-tps","visa-u":"u-visa"};function Wf(){const o=Ye(),[l,c]=z.useState(null);return a.jsxs("div",{children:[a.jsx(Ae,{title:"Nuestros Servicios | Abogados de Inmigración Los Ángeles",description:"Servicios completos de inmigración en Los Ángeles. Asilo, cancelación de deportación, tarjetas verdes, ciudadanía, DACA, Visa U y más. Consulta gratis: (213) 388-1821.",canonical:"/es/servicios",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Nuestros ",a.jsx("span",{className:"text-[#D4A853]",children:"Servicios"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Nuestra firma maneja la gama completa de asuntos de inmigración. Desde asilo y defensa contra la deportación hasta reunificación familiar y ciudadanía, tenemos la experiencia y dedicación que su caso exige."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-5xl mx-auto",children:a.jsx("div",{className:"space-y-6",children:Eu.map(u=>{const p=l===u.slug;return a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[a.jsxs("button",{onClick:()=>c(p?null:u.slug),className:"w-full text-left p-6 md:p-8 flex items-start gap-5",children:[a.jsx("div",{className:"flex-shrink-0 w-14 h-14 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:a.jsx("svg",{className:"w-7 h-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-1",children:u.title}),a.jsxs("p",{className:"text-gray-500 text-sm",children:[u.intro.substring(0,120),"..."]})]}),a.jsx("div",{className:"flex-shrink-0 mt-1",children:a.jsx("svg",{className:`w-5 h-5 text-[#D4A853] transition-transform duration-300 ${p?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})})]}),a.jsx("div",{className:`transition-all duration-300 overflow-hidden ${p?"max-h-[600px] opacity-100":"max-h-0 opacity-0"}`,children:a.jsxs("div",{className:"px-6 md:px-8 pb-8 ml-0 md:ml-[4.75rem]",children:[a.jsx("div",{className:"gold-line mb-5"}),a.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:u.intro}),a.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[a.jsxs(Y,{to:`/es/servicios/${u.slug}`,onClick:m=>m.stopPropagation(),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Leer Más",a.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),a.jsx("button",{onClick:m=>{m.stopPropagation(),o("/es/contactenos")},className:"inline-flex items-center text-gray-500 font-semibold text-sm tracking-wide uppercase hover:text-[#1B2A4A] transition-colors",children:"Consultar su Caso"})]})]})})]},u.slug)})})})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[a.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿No Está Seguro Qué Servicio Necesita?"}),a.jsx("p",{className:"text-gray-300 mb-8",children:"Cada caso de inmigración es único. Contáctenos para una consulta gratuita y le ayudaremos a entender sus opciones."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),a.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-outline",children:"Contáctenos en Línea"})]})]})})]})}function Hf(){const{area:o}=Za(),l=Ye(),c=o?_f(o):void 0;return z.useEffect(()=>{c&&Au({service_name:c.title,service_slug:c.slug,language:"es"})},[c==null?void 0:c.slug]),c?a.jsxs("div",{children:[a.jsx(Ae,{title:`${c.title} | Abogados de Inmigración Los Ángeles`,description:c.metaDescription,canonical:`/es/servicios/${c.slug}`,ogImage:`https://www.makeitglow.co/api/og/becraft-immigration?title=${encodeURIComponent(c.title)}&subtitle=${encodeURIComponent("Abogados de Inmigración · Los Ángeles")}`,schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:ys[c.slug]?[{lang:"en",path:`/services/${ys[c.slug]}`},{lang:"es",path:`/es/servicios/${c.slug}`},{lang:"x-default",path:`/services/${ys[c.slug]}`}]:void 0}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[a.jsx(Y,{to:"/es/servicios",className:"hover:text-[#D4A853] transition-colors",children:"Servicios"}),a.jsx("span",{children:"/"}),a.jsx("span",{className:"text-gray-300",children:c.title})]}),a.jsx("div",{className:"gold-line mb-6"}),a.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:c.title}),a.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:c.subtitle}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:c.intro})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx("div",{className:"space-y-10",children:c.sections.map((u,p)=>{var m;return a.jsxs("div",{children:[u.heading&&a.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:u.heading}),(m=u.paragraphs)==null?void 0:m.map((f,x)=>a.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:f},x)),u.bullets&&u.bullets.length>0&&a.jsx("ul",{className:"space-y-2 mb-4",children:u.bullets.map((f,x)=>a.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[a.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),a.jsx("span",{children:f})]},x))}),u.numbered&&u.numbered.length>0&&a.jsx("ol",{className:"space-y-2 mb-4",children:u.numbered.map((f,x)=>a.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[a.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:x+1}),a.jsx("span",{children:f})]},x))})]},p)})}),a.jsx("div",{className:"gold-line my-10"}),a.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[a.jsxs("h2",{className:"text-2xl font-serif text-white font-bold mb-3",children:["¿Necesita Ayuda con ",c.title,"?"]}),a.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:"Nuestros abogados de inmigración están listos para evaluar su caso. Consulta gratis disponible."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",onClick:()=>oa({phone_number:"2133881821",location:"service_cta",language:"es"}),className:"btn-gold",children:"Llame al (213) 388-1821"}),a.jsx("button",{onClick:()=>{Su({label:"contact_us_online",location:"service_cta",language:"es"}),l("/es/contactenos")},className:"btn-outline",children:"Envíenos un Mensaje"})]})]})]})}),a.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4",children:a.jsxs(Y,{to:"/es/servicios",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[a.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"Volver a Servicios"]})})})]}):a.jsxs("div",{className:"section-padding text-center",children:[a.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Página No Encontrada"}),a.jsx("p",{className:"text-gray-500 mb-8",children:"Ese servicio no existe."}),a.jsx(Y,{to:"/es/servicios",className:"btn-gold",children:"Volver a Servicios"})]})}const Uu=[{slug:"la-guia-becraft-para-evitar-la-deportacion",title:"La Guía Becraft para Evitar la Deportación",subtitle:"¿Cuáles Son Sus Derechos Legales Si Podría Ser Deportado?",metaDescription:"Una guía completa que cubre el proceso de deportación, defensas legales, y todas las opciones disponibles para evitar ser deportado. De la Oficina Legal de Todd Becraft.",intro:"La deportación, también conocida como expulsión, es un proceso grave en el que a un no ciudadano se le ordena abandonar el país debido a una violación de las leyes de inmigración. Esta guía le ayudará a entender sus derechos y opciones.",sections:[{heading:"Comprender el Proceso de Deportación",paragraphs:["Antes de analizar los recursos legales, es importante entender cómo funcionan los procedimientos de deportación. La deportación generalmente comienza con un arresto o un Aviso de Comparecencia (NTA) ante un juez de inmigración. La agencia de Inmigración y Control de Aduanas de EE.UU. (ICE) es responsable de hacer cumplir las órdenes de deportación.","El proceso generalmente sigue estos pasos:"],bullets:["Emisión de un Aviso de Comparecencia (NTA): Este documento describe los motivos de los procedimientos de expulsión y especifica una fecha en el tribunal.","Audiencia del Calendario Principal: Esta audiencia inicial permite al no ciudadano responder a los cargos y solicitar alivio.","Audiencia Individual: Si se busca alivio, se programará una audiencia separada para presentar pruebas y argumentos legales.","Decisión del Juez de Inmigración: El juez otorgará el alivio o emitirá una orden de deportación.","Apelaciones: Si el juez ordena la deportación, la persona puede tener opciones para apelar la decisión.","Expulsión o Suspensión de la Expulsión: Si se agotan todas las opciones legales, la persona puede ser deportada o se le puede otorgar una suspensión de la expulsión."]},{heading:"Recursos Legales contra la Deportación",paragraphs:["Existen varias defensas y recursos legales disponibles para las personas que enfrentan la deportación. Cada caso es único y buscar asesoramiento legal es crucial para determinar el mejor curso de acción."]},{heading:"1. Impugnar los Cargos",paragraphs:["Uno de los primeros pasos para combatir la deportación es cuestionar la base legal para la expulsión. Las posibles defensas incluyen:"],bullets:["Defectos de procedimiento: Si el NTA contiene información incorrecta, o si el gobierno no sigue los procedimientos adecuados, el caso puede ser desestimado.","Falta de evidencia: El gobierno debe probar que el individuo es expulsable. Si faltan pruebas suficientes, el caso puede ser desestimado.","Arresto o detención ilegal: Si se violaron los derechos de una persona durante el proceso de arresto o detención, se podrían impugnar los procedimientos de expulsión."]},{heading:"2. Asilo y Protección contra Persecución",paragraphs:["Las personas que temen persecución en su país de origen por raza, religión, nacionalidad, opinión política o membresía en un grupo social particular pueden solicitar asilo. Para ser elegible, el solicitante debe:"],bullets:["Presentar la solicitud dentro de un año de llegada a los EE.UU. (o mostrar circunstancias excepcionales para una presentación tardía).","Demostrar un miedo creíble de persecución.","Proporcionar evidencia que apoye la solicitud."]},{heading:"3. Cancelación de Remoción",paragraphs:["La cancelación de la expulsión es una forma de alivio disponible para ciertas personas que han establecido vínculos sólidos con los EE.UU. Los criterios de elegibilidad varían según si el solicitante es un residente permanente legal (LPR) o un residente no permanente."],bullets:["Para Residentes Permanentes Legales: Debe haber sido LPR durante al menos cinco años, haber residido continuamente en los EE.UU. durante al menos siete años, y no haber sido condenado por un delito grave agravado.","Para No Residentes Permanentes: Debe haber estado físicamente presente en los EE.UU. durante al menos diez años, demostrar buen carácter moral y probar que la expulsión causaría dificultades excepcionales y extremadamente inusuales a un familiar ciudadano de EE.UU. o LPR que califique."]},{heading:"4. Ajuste de Estatus",paragraphs:["Algunas personas que enfrentan la deportación pueden ser elegibles para ajustar su estatus al de residente permanente legal (titular de tarjeta verde). Esta opción puede estar disponible si:"],bullets:["El individuo tiene un familiar inmediato que es ciudadano de EE.UU. o residente permanente legal y puede peticionarlo.","El individuo califica bajo ciertas categorías de empleo.","El individuo califica bajo programas especiales como la Ley de Violencia contra la Mujer (VAWA) o el estatus de inmigrante juvenil especial (SIJS)."]},{heading:"5. Salida Voluntaria",paragraphs:["Si no hay otros recursos legales disponibles, una persona puede solicitar la salida voluntaria. Esto le permite salir de los EE.UU. en sus propios términos en lugar de ser expulsado por la fuerza, incluida la capacidad de volver a solicitar la entrada legal en el futuro sin las penalidades asociadas con la deportación."]}],cta:"La deportación es un asunto legal grave, pero existen numerosas opciones legales para las personas en riesgo de expulsión. Buscar asesoramiento legal inmediato es esencial. En la Oficina Legal de Todd Becraft, traemos años de experiencia ayudando a las personas a evitar la deportación. Llámenos hoy: (213) 388-1821."},{slug:"la-guia-de-becraft-sobre-como-convertirse-en-ciudadano-estadounidense",title:"La Guía de Becraft sobre Cómo Convertirse en Ciudadano Estadounidense",subtitle:"El Camino hacia la Ciudadanía Americana",metaDescription:"Una guía completa sobre el proceso de naturalización: requisitos de elegibilidad, el proceso paso a paso, y la vida como ciudadano estadounidense.",intro:"¿Es usted un residente no ciudadano de los Estados Unidos que desea convertirse en ciudadano? Esta guía completa le explicará todo lo que necesita saber sobre el proceso de naturalización.",sections:[{heading:"1. Elegibilidad: ¿Está Listo para Solicitar?",paragraphs:["Antes de poder solicitar la ciudadanía estadounidense, debe cumplir con varios requisitos que garanticen que se ha establecido en los Estados Unidos."]},{heading:"A. Estatus de Residente Permanente Legal",paragraphs:["El primer paso es tener el estatus de Residente Permanente Legal (LPR), también conocido como tener una tarjeta verde. La mayoría de los residentes permanentes legales obtuvieron su tarjeta verde a través de patrocinio familiar, empleo o al ser admitidos como refugiados o asilados."],bullets:["Patrocinio familiar","Inmigración basada en empleo","Lotería de Visa de Diversidad","Estatus de Asilo o Refugiado","Categorías especiales de inmigrantes"]},{heading:"B. Residencia Continua",paragraphs:["Una vez que tenga su tarjeta verde, deberá haber vivido en los Estados Unidos continuamente por un período determinado:"],bullets:["Se requieren cinco años de residencia continua para la mayoría de los solicitantes.","Se requieren tres años de residencia continua si está casado con un ciudadano de EE.UU."]},{heading:"C. Presencia Física",bullets:["Debe haber estado físicamente presente en los EE.UU. durante al menos 30 meses de los últimos cinco años.","Si solicita basándose en el matrimonio con un ciudadano de EE.UU., 18 meses de los últimos tres años."]},{heading:"D. Buen Carácter Moral",paragraphs:["Debe demostrar buen carácter moral, lo que significa que ha seguido las leyes, pagado sus impuestos y actuado de manera responsable. Ciertos comportamientos, como cometer delitos graves o no presentar declaraciones de impuestos, pueden descalificarlo."]},{heading:"E. Conocimiento Básico del Inglés",paragraphs:["Debe demostrar competencia básica en lectura, escritura y habla en inglés, que se evalúa durante su entrevista de ciudadanía. La prueba se enfoca en habilidades lingüísticas cotidianas y usa oraciones simples."]},{heading:"F. Conocimiento de la Historia y el Civismo de EE.UU.",paragraphs:["Deberá pasar una prueba de civismo que cubre la historia básica de EE.UU. y el gobierno. USCIS proporciona una lista de 100 preguntas posibles. Se le harán hasta 10 durante su entrevista y necesita responder al menos seis correctamente."]},{heading:"2. El Proceso de Naturalización: Paso a Paso"},{heading:"A. Presentar el Formulario N-400",paragraphs:["El primer paso es presentar el Formulario N-400, Solicitud de Naturalización. Este formulario solicita información sobre su historial personal. El formulario se puede presentar en línea o por correo."]},{heading:"B. Cita de Biometría",paragraphs:["USCIS le programará una cita de biometría donde se recopilan sus huellas dactilares, foto y firma para una verificación de antecedentes."]},{heading:"C. La Entrevista y los Exámenes de Naturalización",paragraphs:["Un oficial de USCIS revisará su solicitud y le hará preguntas para verificar la información. Durante la entrevista también tomará:"],bullets:["Prueba de inglés: Se le pedirá que lea y escriba oraciones simples en inglés, y responda algunas preguntas básicas habladas.","Prueba de civismo: Se le harán hasta 10 preguntas sobre la historia y el gobierno estadounidense; necesita acertar seis para aprobar."]},{heading:"D. El Juramento de Lealtad",paragraphs:["El último paso es prestar el Juramento de Lealtad en su ceremonia de naturalización. Recitará el juramento junto con otros nuevos ciudadanos y recibirá su Certificado de Naturalización, su prueba oficial de ciudadanía estadounidense."]},{heading:"3. La Vida como Ciudadano Estadounidense",paragraphs:["Una vez que haya completado el proceso de naturalización, disfrutará de todos los derechos y privilegios de la ciudadanía:"],bullets:["El derecho a votar en las elecciones federales, estatales y locales.","Solicitar un pasaporte estadounidense para viajes internacionales más fáciles.","Patrocinar a familiares para una tarjeta verde.","Acceso a empleos federales y autorizaciones de seguridad.","Plena participación en el servicio de jurado y la vida cívica."]},{heading:"4. Circunstancias Especiales y Excepciones",bullets:["Servicio militar: Puede calificar para la naturalización expedita sin los requisitos habituales de residencia.","Solicitantes mayores: Los solicitantes de 50 años o más que han vivido en los EE.UU. como titular de tarjeta verde durante 20 años o más pueden tomar el examen de civismo en su idioma nativo.","Exenciones médicas: Los solicitantes con discapacidades físicas o mentales pueden calificar para una exención de los exámenes de inglés o civismo."]}],cta:"Convertirse en ciudadano de los EE.UU. significa convertirse en parte de una nación con una rica historia. La Oficina Legal de Todd Becraft está lista para ayudarle a navegar cada paso del camino. Llámenos hoy: (213) 388-1821."}];function Vf(o){return Uu.find(l=>l.slug===o)}function $f(){const o=Ye();return a.jsxs("div",{children:[a.jsx(Ae,{title:"Recursos de Inmigración | Abogados de Inmigración Los Ángeles",description:"Guías gratuitas de inmigración en español de la Oficina Legal de Todd Becraft. Deportación, ciudadanía, tarjeta verde y más.",canonical:"/es/recursos",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Recursos ",a.jsx("span",{className:"text-[#D4A853]",children:"Gratuitos"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Guías completas sobre el proceso de inmigración, escritas por el Abogado Todd Becraft para ayudarle a entender sus derechos y opciones."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-5xl mx-auto",children:a.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Uu.map(l=>a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 card-hover flex flex-col",children:[a.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:a.jsx("svg",{className:"w-6 h-6 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),a.jsx("div",{className:"gold-line flex-1"})]}),a.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3",children:l.title}),a.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-6 flex-1",children:l.metaDescription}),a.jsxs(Y,{to:`/es/recursos/${l.slug}`,className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Leer la Guía",a.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]},l.slug))})})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[a.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿Tiene Preguntas Específicas sobre su Caso?"}),a.jsx("p",{className:"text-gray-300 mb-8",children:"Nuestros abogados están disponibles para una consulta gratuita. Hablamos español."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),a.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-outline",children:"Contáctenos en Línea"})]})]})})]})}function Gf(){const{slug:o}=Za(),l=Ye(),c=o?Vf(o):void 0;return z.useEffect(()=>{c&&Cu({resource_name:c.title,resource_slug:c.slug,language:"es"})},[c==null?void 0:c.slug]),c?a.jsxs("div",{children:[a.jsx(Ae,{title:`${c.title} | Abogados de Inmigración Los Ángeles`,description:c.metaDescription,canonical:`/es/recursos/${c.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:c.title,author:{"@type":"Person",name:"Todd Becraft"}}}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[a.jsx(Y,{to:"/es/recursos",className:"hover:text-[#D4A853] transition-colors",children:"Recursos"}),a.jsx("span",{children:"/"}),a.jsx("span",{className:"text-gray-300",children:c.title})]}),a.jsx("div",{className:"gold-line mb-6"}),a.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:c.title}),a.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:c.subtitle}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:c.intro})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx("div",{className:"space-y-10",children:c.sections.map((u,p)=>{var m;return a.jsxs("div",{children:[u.heading&&a.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:u.heading}),(m=u.paragraphs)==null?void 0:m.map((f,x)=>a.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:f},x)),u.bullets&&u.bullets.length>0&&a.jsx("ul",{className:"space-y-2 mb-4",children:u.bullets.map((f,x)=>a.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[a.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),a.jsx("span",{children:f})]},x))}),u.numbered&&u.numbered.length>0&&a.jsx("ol",{className:"space-y-2 mb-4",children:u.numbered.map((f,x)=>a.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[a.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:x+1}),a.jsx("span",{children:f})]},x))})]},p)})}),a.jsx("div",{className:"gold-line my-10"}),a.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[a.jsx("h2",{className:"text-2xl font-serif text-white font-bold mb-3",children:"¿Tiene Preguntas sobre su Caso?"}),a.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:c.cta}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),a.jsx("button",{onClick:()=>l("/es/contactenos"),className:"btn-outline",children:"Envíenos un Mensaje"})]})]})]})}),a.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4",children:a.jsxs(Y,{to:"/es/recursos",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[a.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"Volver a Recursos"]})})})]}):a.jsxs("div",{className:"section-padding text-center",children:[a.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Página No Encontrada"}),a.jsx("p",{className:"text-gray-500 mb-8",children:"Ese recurso no existe."}),a.jsx(Y,{to:"/es/recursos",className:"btn-gold",children:"Volver a Recursos"})]})}const Yf=[{category:"Asilo y Convención Contra la Tortura",title:"Asilo y Protección Bajo la Convención Contra la Tortura",description:"Representamos a clientes que huyen de persecución por actividades políticas, creencias religiosas o membresía en grupos sociales específicos — incluyendo casos que otros abogados han rechazado.",outcome:"A través de evidencia exhaustiva de condiciones del país, testimonios de expertos y declaraciones personales convincentes, hemos obtenido asilo exitosamente para clientes que enfrentaban deportación, brindándoles protección permanente en los Estados Unidos.",tag:"Asilo Concedido"},{category:"Cancelación de Remoción",title:"Cancelación de Remoción para No Residentes Permanentes",description:"Defendemos a residentes de largo plazo que enfrentan deportación y tienen familiares ciudadanos o residentes permanentes en EE. UU., demostrando el sufrimiento excepcional y extremadamente inusual que causaría su remoción.",outcome:"Con evidencia médica, expedientes escolares, testimonios de expertos y documentación financiera, hemos persuadido a jueces de inmigración para cancelar la remoción y otorgar residencia permanente legal a nuestros clientes.",tag:"Remoción Cancelada"},{category:"Visa O-1 de Habilidad Extraordinaria",title:"Visa O-1 de Habilidad Extraordinaria",description:"Preparamos peticiones O-1 para profesionales con habilidades o logros extraordinarios, reuniendo la evidencia necesaria para demostrar reconocimiento nacional o internacional sostenido.",outcome:"Nuestros paquetes de petición incluyen cartas de recomendación de expertos, evidencia de premios y publicaciones, cobertura mediática y documentación de contribuciones significativas al campo.",tag:"O-1 Aprobada"},{category:"Visa P-3 para Artistas",title:"Visa P-3 para Artistas o Entretenedores Culturalmente Únicos",description:"Representamos a artistas y entretenedores que realizan formas de arte tradicionales o culturalmente únicas, preparando peticiones P-3 que establecen el mérito cultural de su trabajo.",outcome:"Nuestras peticiones documentan la singularidad cultural de la forma artística, las credenciales del artista y su reconocimiento internacional, y el valor cultural de las actuaciones planeadas en EE. UU.",tag:"P-3 Aprobada"},{category:"Visa U para Víctimas de Crimen",title:"Visa U para Víctimas de Crimen",description:"Ayudamos a víctimas de crímenes calificados que han cooperado con las autoridades a obtener protección mediante la Visa U, incluso cuando enfrentan la posibilidad de deportación.",outcome:"Trabajamos con las autoridades para obtener la certificación requerida, preparamos declaraciones completas y presentamos evidencia del impacto físico y psicológico para asegurar estatus legal, autorización de trabajo y un camino hacia la residencia permanente.",tag:"Visa U Aprobada"}],Jf=[{quote:"El Abogado Todd Becraft es un caballero único en su clase. Desde que manejó mis problemas de inmigración, todo ha ido en la dirección correcta. Se puede sentir que te trata como un miembro de la familia.",author:"Rolando G.",service:"vía Yelp"},{quote:"La recepción fue fantástica y muy profesional. Me mostró mucho cuidado al preguntar cómo está mi familia. Lo veo como un experto por la manera en que hace y responde preguntas.",author:"John",service:"vía Avvo"},{quote:"El Abogado Todd Becraft es un abogado de inmigración excepcional y conocedor. Manejó mi caso con tal clase y dignidad — gané mi caso. Excelente personal, excelente servicio al cliente.",author:"Joseph M.",service:"vía Yelp"},{quote:"Siempre recordaré los servicios legales profesionales que recibí. Todo el personal es atento y siempre trabaja según las instrucciones de su cliente. Los servicios que recibí fueron mucho más de lo que me cobraron.",author:"Tiwa Bob",service:"vía Google"}];function Qf(){const o=Ye();return a.jsxs("div",{children:[a.jsx(Ae,{title:"Historias de Éxito | Abogados de Inmigración Los Ángeles",description:"Historias reales de éxito de clientes del Law Office of Todd Becraft — asilo concedido, tarjetas verdes, ciudadanía y casos de deportación ganados.",canonical:"/es/historias-de-exito",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Historias de Éxito | Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/success-stories"},{lang:"es",path:"/es/historias-de-exito"},{lang:"x-default",path:"/success-stories"}]}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Historias de ",a.jsx("span",{className:"text-[#D4A853]",children:"Éxito"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Cada caso que tomamos representa el futuro de una familia. Aquí presentamos algunos de los resultados que hemos logrado para nuestros clientes. Si bien cada caso es diferente, estas historias reflejan nuestro compromiso de luchar por el mejor resultado posible."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Resultados Representativos"}),a.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto text-sm",children:"Los siguientes son representativos de los tipos de casos que manejamos y los resultados que hemos logrado. Los resultados pasados no garantizan resultados futuros, ya que cada caso depende de sus circunstancias únicas."})]}),a.jsx("div",{className:"space-y-8",children:Yf.map((l,c)=>a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[a.jsxs("div",{className:"p-6 md:p-8",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[a.jsx("span",{className:"text-xs font-semibold tracking-wider uppercase text-[#D4A853]",children:l.category}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200",children:[a.jsx("svg",{className:"w-3.5 h-3.5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),l.tag]})]}),a.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-4",children:l.title}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"El Desafío"}),a.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.description})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"El Resultado"}),a.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.outcome})]})]})]}),a.jsx("div",{className:"h-0.5 bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853]/30 to-[#D4A853]/0"})]},c))})]})}),a.jsx("section",{className:"section-padding bg-[#1B2A4A]",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-4",children:"Testimonios de Clientes"}),a.jsx("p",{className:"text-gray-400 max-w-xl mx-auto text-sm",children:"Escuche a las familias que hemos ayudado."})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Jf.map((l,c)=>a.jsxs("div",{className:"border border-white/10 rounded-sm p-8 hover:border-[#D4A853]/30 transition-colors",children:[a.jsx("svg",{className:"w-8 h-8 text-[#D4A853]/30 mb-4",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})}),a.jsxs("blockquote",{className:"text-gray-200 leading-relaxed mb-6 italic font-serif",children:['"',l.quote,'"']}),a.jsx("div",{className:"gold-line mb-3"}),a.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.author}),a.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:l.service})]},c))}),a.jsx("p",{className:"text-center text-gray-500 text-xs mt-10",children:"* Los testimonios son representativos de las experiencias de los clientes. Los resultados pasados no garantizan resultados futuros."})]})}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Permítanos Luchar por Su Futuro"}),a.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Todo caso exitoso comienza con una conversación. Contáctenos hoy para una consulta gratuita sobre su situación migratoria."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),a.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Programar una Consulta"})]})]})})]})}const ia=[{name:"Todd Becraft",title:"Abogado Fundador",photo:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",highlight:"Más de 20 Años en Derecho Migratorio",bio:["Todd Becraft es el abogado fundador de la Law Office of Todd Becraft, donde ha dedicado su carrera exclusivamente al derecho migratorio durante más de 20 años. Es el actual Vicepresidente del Capítulo SoCal de AILA y ex Presidente de la Sección de Inmigración del Colegio de Abogados del Condado de Los Ángeles.",'En 2009, Todd asumió la práctica migratoria del Juez de Inmigración Timothy Everett tras el retiro de éste a la práctica privada. Antes de eso, el Sr. Becraft trabajó estrechamente con Judy Wood, conocida como "Saint Judy", cuya notable labor de defensa fue retratada en la película del mismo nombre.',"El Sr. Becraft ha representado con éxito a miles de clientes en casos de asilo, defensa contra deportación, cancelación de remoción, inmigración familiar y apelaciones ante la Junta de Apelaciones de Inmigración y el Tribunal de Apelaciones del Noveno Circuito."]},{name:"Dennis Escobar",title:"Paralegal Principal y Gerente de Oficina",photo:"https://images.makeitglow.co/projects/becraft-immigration/8f93bc42d26b873e-dennis-escobar-portrait-becraft-immigration-law-980x1337.webp",highlight:"Más de 25 Años en Derecho Migratorio",bio:["Durante más de 25 años, Dennis Escobar ha dedicado su carrera al derecho migratorio. Como Paralegal Principal y Gerente de Oficina, Dennis administra las operaciones diarias de la oficina mientras trabaja estrechamente con abogados y clientes en prácticamente todas las etapas de un caso.","Como inmigrante él mismo, Dennis conoce de primera mano los desafíos que enfrentan las familias. Es admirado por su paciencia, dedicación y compasión, siempre tomándose el tiempo para escuchar y atender las preocupaciones de los clientes con cuidado."]},{name:"Gianina Haro",title:"Paralegal",highlight:"Más de 30 Años en Derecho Migratorio",photo:"https://images.makeitglow.co/projects/becraft-immigration/4baa423944dd3952-gianina-haro-portrait-becraft-immigration-law-980x1337.webp",bio:["Con más de treinta años de experiencia en derecho migratorio, Gianina Haro es un pilar fundamental de apoyo al cliente en la Law Office of Todd Becraft. Se especializa en preparar trámites, recopilar evidencia y gestionar los detalles que mantienen los casos en movimiento.","Bilingüe en inglés y español, Gianina tiende puentes de comunicación, ayudando a los clientes a sentirse cómodos y comprendidos. Trabaja en una amplia gama de asuntos migratorios, incluyendo solicitudes de asilo, peticiones familiares, exenciones y naturalización."]},{name:"Imani Machado",title:"Directora de Marketing y Especialista en Clientes",photo:"https://images.makeitglow.co/projects/becraft-immigration/c309104b568a8ee4-imani-machado-portrait-becraft-immigration-law-980x1337.webp",bio:["Imani Machado aporta creatividad, estrategia y compasión a su rol como Directora de Marketing y Especialista en Clientes. Con más de una década de experiencia en marketing legal y relaciones con clientes, asegura que la misión de defensa del despacho se extienda más allá de la sala de audiencias.","Imani gestiona los esfuerzos de alcance comunitario, desarrolla recursos educativos y trabaja directamente con los clientes para brindarles apoyo y orientación a lo largo de su proceso migratorio. Su dedicación se extiende a la comunidad en general, donde colabora con organizaciones que sirven a familias inmigrantes en todo el sur de California."]}],Kf=[{title:"Más de 20 Años de Experiencia",desc:"Dos décadas de práctica dedicada al derecho migratorio significa que hemos visto y manejado exitosamente prácticamente todo tipo de caso.",icon:"clock"},{title:"Exclusivamente Derecho Migratorio",desc:"No incursionamos en otras áreas. La inmigración es nuestro único enfoque, lo que nos otorga un conocimiento sin igual en la materia.",icon:"focus"},{title:"Atención Personalizada",desc:"Cada caso es manejado personalmente por nuestros abogados. Usted trabaja directamente con abogados con experiencia, no con personal junior.",icon:"person"},{title:"Servicios Bilingües",desc:"Nuestro equipo es completamente bilingüe en inglés y español. Nada se pierde en la traducción cuando su futuro está en juego.",icon:"language"},{title:"Trayectoria Comprobada",desc:"Miles de casos exitosos, incluyendo complejas solicitudes de asilo y defensas contra deportación que otras firmas rechazaron.",icon:"check"},{title:"Defensa con Compasión",desc:"Entendemos el impacto emocional de los procedimientos migratorios. Nuestro equipo ofrece empatía genuina y apoyo en cada paso del camino.",icon:"heart"}];function Xf({type:o}){const l="w-6 h-6";switch(o){case"clock":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})});case"focus":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})});case"person":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})});case"language":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})});case"check":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})});case"heart":return a.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})});default:return null}}function Zf(){const o=Ye();return a.jsxs("div",{children:[a.jsx(Ae,{title:"Sobre Nosotros | Abogados de Inmigración Los Ángeles",description:"Conozca al Abogado Todd Becraft — décadas de experiencia en derecho migratorio en Los Ángeles ayudando a familias, beneficiarios de DACA, solicitantes de asilo y más.",canonical:"/es/sobre-nosotros",schema:{"@context":"https://schema.org","@type":"AboutPage",name:"Sobre Nosotros — Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/about"},{lang:"es",path:"/es/sobre-nosotros"},{lang:"x-default",path:"/about"}]}),a.jsxs("section",{className:"relative overflow-hidden",children:[a.jsxs("div",{className:"absolute inset-0",children:[a.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/d4f20bfcce771e9e-unnamed-10-scaled.webp",alt:"El equipo de Becraft Immigration Law",className:"hidden md:block w-full h-full object-cover"}),a.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/team-9x16.jpg",alt:"El equipo de Becraft Immigration Law",className:"block md:hidden w-full h-full object-cover"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/80 to-[#1B2A4A]/40"})]}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36",children:a.jsxs("div",{className:"max-w-xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6 leading-tight",children:["Las Personas Detrás de ",a.jsx("span",{className:"text-[#D4A853]",children:"Su Caso"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed mb-8",children:"Un equipo que ha dedicado sus carreras — más de 50 años combinados — exclusivamente al derecho migratorio. No solo manejamos casos. Cambiamos vidas."}),a.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-gold",children:"Reúnase con Nosotros Hoy"})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"py-20 md:py-28 bg-white",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"grid lg:grid-cols-5 gap-16 items-start",children:[a.jsx("div",{className:"lg:col-span-2",children:a.jsxs("div",{className:"sticky top-28",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4 leading-tight",children:"Dos Décadas Luchando por lo Justo"}),a.jsxs("div",{className:"flex items-center gap-4 mt-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"20+"}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Años"})]}),a.jsx("div",{className:"w-px h-12 bg-gray-200"}),a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"Miles"}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Casos Ganados"})]}),a.jsx("div",{className:"w-px h-12 bg-gray-200"}),a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"100%"}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Inmigración"})]})]})]})}),a.jsxs("div",{className:"lg:col-span-3 space-y-6",children:[a.jsx("p",{className:"text-gray-600 leading-relaxed text-lg",children:"La Law Office of Todd Becraft fue fundada con una misión clara: brindar representación legal excepcional a inmigrantes y sus familias. A lo largo de las últimas dos décadas, esa misión nunca ha vacilado."}),a.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Desde nuestras oficinas en Wilshire Boulevard, en el corazón de Los Ángeles, hemos ayudado a miles de personas a navegar el complejo sistema migratorio de los Estados Unidos. Ya sea que nuestros clientes busquen asilo por persecución, luchen contra la deportación, se reúnan con familiares o persigan el sueño de la ciudadanía estadounidense, aportamos el mismo nivel de dedicación, experiencia y atención personal a cada caso."}),a.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Lo que nos distingue es nuestro enfoque exclusivo en derecho migratorio. Mientras muchos despachos distribuyen su atención entre múltiples áreas de práctica, nosotros hemos elegido dedicar toda nuestra práctica a la inmigración. Este enfoque singular significa que nos mantenemos a la vanguardia de la ley y política migratoria en constante cambio, brindando a nuestros clientes una ventaja crítica."}),a.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Los miembros de nuestro equipo provienen de diversos orígenes, y varios son inmigrantes ellos mismos. Entendemos los desafíos que enfrentan nuestros clientes — no solo legalmente, sino personalmente. Esa experiencia vivida da forma a nuestra empatía, nuestra urgencia y nuestro compromiso inquebrantable con cada persona que cruza nuestras puertas."})]})]})})}),a.jsx("section",{className:"bg-[#1B2A4A] overflow-hidden",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsxs("div",{className:"grid lg:grid-cols-2",children:[a.jsxs("div",{className:"relative h-[500px] lg:h-auto",children:[a.jsx("img",{src:ia[0].photo,alt:ia[0].name,className:"absolute inset-0 w-full h-full object-cover object-top"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B2A4A]/30"})]}),a.jsxs("div",{className:"px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center",children:[a.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase mb-3",children:ia[0].title}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-2",children:ia[0].name}),ia[0].highlight&&a.jsxs("p",{className:"text-[#D4A853]/70 text-sm mb-8 flex items-center gap-2",children:[a.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),ia[0].highlight]}),a.jsx("div",{className:"w-12 h-px bg-[#D4A853]/40 mb-8"}),a.jsx("div",{className:"space-y-4",children:ia[0].bio.map((l,c)=>a.jsx("p",{className:"text-gray-300 leading-relaxed text-[15px]",children:l},c))}),a.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[a.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Vicepresidente AILA SoCal"}),a.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Three Best Rated"}),a.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AVVO 10.0"}),a.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Premio Pro Bono"})]})]})]})})}),a.jsx("section",{className:"py-20 md:py-28 bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Nuestro Equipo"}),a.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Cada miembro de nuestro equipo comparte el mismo compromiso: luchar por el futuro de nuestros clientes."})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:ia.slice(1).map(l=>a.jsxs("div",{className:"group",children:[a.jsxs("div",{className:"relative overflow-hidden rounded-sm mb-6",children:[a.jsx("img",{src:l.photo,alt:l.name,className:"w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"}),a.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[a.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.15em] uppercase mb-1",children:l.title}),a.jsx("h3",{className:"text-xl font-serif text-white font-bold",children:l.name}),l.highlight&&a.jsx("p",{className:"text-white/50 text-xs mt-1",children:l.highlight})]})]}),a.jsx("div",{className:"space-y-3",children:l.bio.map((c,u)=>a.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:c},u))})]},l.name))})]})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-10",children:a.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase",children:"Reconocimientos"})}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{name:"Three Best Rated",detail:"Mejores Abogados de Inmigración en Los Ángeles"},{name:"10 Best",detail:"Instituto Americano de Consejo Legal"},{name:"AVVO 10.0",detail:"Calificación Superior — Abogado Destacado"},{name:"Expertise",detail:"21 Mejores Abogados de Inmigración en LA"}].map(l=>a.jsxs("div",{className:"text-center py-6 border border-white/5 rounded-sm hover:border-[#D4A853]/20 transition-colors",children:[a.jsx("svg",{className:"w-6 h-6 text-[#D4A853] mx-auto mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),a.jsx("h3",{className:"text-white font-serif font-bold text-sm",children:l.name}),a.jsx("p",{className:"text-gray-500 text-xs mt-1",children:l.detail})]},l.name))})]})}),a.jsx("section",{className:"py-20 md:py-28 bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("div",{className:"gold-line-center mb-6"}),a.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"¿Por Qué Elegirnos?"})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Kf.map(l=>a.jsxs("div",{className:"flex gap-5",children:[a.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:a.jsx(Xf,{type:l.icon})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),a.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:l.desc})]})]},l.title))})]})}),a.jsx("section",{className:"bg-[#1B2A4A] py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[a.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿Listo para Hablar Sobre Su Caso?"}),a.jsx("p",{className:"text-gray-300 mb-8",children:"Contáctenos hoy para una consulta gratuita y confidencial con un abogado de inmigración con experiencia."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),a.jsx("button",{onClick:()=>o("/es/contactenos"),className:"btn-outline",children:"Envíenos un Mensaje"})]})]})})]})}function eg(){const[o,l]=z.useState({name:"",email:"",phone:"",service:"",message:""}),[c,u]=z.useState(!1),[p,m]=z.useState(!1),[f,x]=z.useState(""),v=C=>{l({...o,[C.target.name]:C.target.value})},b=async C=>{C.preventDefault(),u(!0),x("");try{(await fetch("https://formspree.io/f/xkokkjdk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(m(!0),ju({language:"es",service:o.service}),l({name:"",email:"",phone:"",service:"",message:""})):x("Hubo un error al enviar su mensaje. Por favor intente de nuevo o llámenos directamente.")}catch{x("Hubo un error al enviar su mensaje. Por favor intente de nuevo o llámenos directamente.")}finally{u(!1)}};return a.jsxs("div",{children:[a.jsx(Ae,{title:"Contáctenos | Abogados de Inmigración Los Ángeles",description:"Contáctenos para una consulta de inmigración. Llame al (213) 388-1821 o llene nuestro formulario en línea. Se habla español.",canonical:"/es/contactenos",schema:{"@context":"https://schema.org","@type":"ContactPage",name:"Contáctenos — Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/contact"},{lang:"es",path:"/es/contactenos"},{lang:"x-default",path:"/contact"}]}),a.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),a.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Contáctenos ",a.jsx("span",{className:"text-[#D4A853]",children:"Hoy"})]}),a.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"¿Listo para dar el siguiente paso? Comuníquese para una consulta confidencial con un abogado de inmigración con experiencia."})]})}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),a.jsx("section",{className:"section-padding bg-warm-white",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsxs("div",{className:"grid lg:grid-cols-5 gap-12 lg:gap-16",children:[a.jsx("div",{className:"lg:col-span-3",children:a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-10",children:[a.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Envíenos un Mensaje"}),a.jsx("p",{className:"text-gray-500 text-sm mb-8",children:"Complete el formulario y nos pondremos en contacto con usted a la brevedad. Todas las consultas son confidenciales."}),p?a.jsxs("div",{className:"text-center py-12",children:[a.jsx("div",{className:"w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4",children:a.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),a.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Mensaje Enviado con Éxito"}),a.jsx("p",{className:"text-gray-500 mb-6",children:"Gracias por contactarnos. Revisaremos su mensaje y responderemos a la brevedad posible."}),a.jsx("button",{onClick:()=>m(!1),className:"text-[#D4A853] font-semibold text-sm hover:text-[#C49A48] transition-colors",children:"Enviar Otro Mensaje"})]}):a.jsxs("form",{onSubmit:b,className:"space-y-6",children:[a.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Nombre Completo *"}),a.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:o.name,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"Su nombre completo"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Correo Electrónico *"}),a.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:o.email,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"su@correo.com"})]})]}),a.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Número de Teléfono"}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:o.phone,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"(555) 123-4567"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700 mb-2",children:"Servicio Requerido"}),a.jsxs("select",{id:"service",name:"service",value:o.service,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 bg-white transition-colors appearance-none",style:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:"right 0.75rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.25em 1.25em"},children:[a.jsx("option",{value:"",children:"Seleccione un servicio..."}),a.jsx("option",{value:"asilo",children:"Asilo"}),a.jsx("option",{value:"cancelacion",children:"Cancelación de Remoción"}),a.jsx("option",{value:"ciudadania",children:"Ciudadanía y Naturalización"}),a.jsx("option",{value:"daca",children:"DACA"}),a.jsx("option",{value:"deportacion",children:"Defensa contra Deportación"}),a.jsx("option",{value:"tarjeta-verde",children:"Tarjeta Verde / Ajuste de Estatus"}),a.jsx("option",{value:"exencion",children:"Exención Provisional I-601A"}),a.jsx("option",{value:"visa-k1",children:"Visa K-1 de Prometido(a)"}),a.jsx("option",{value:"tps",children:"Estado de Protección Temporal (TPS)"}),a.jsx("option",{value:"visa-u",children:"Visa U"}),a.jsx("option",{value:"familia",children:"Inmigración Familiar"}),a.jsx("option",{value:"otro",children:"Otro"})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Cuéntenos Sobre Su Caso *"}),a.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:o.message,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none",placeholder:"Describa brevemente su situación migratoria..."})]}),f&&a.jsx("div",{className:"bg-red-50 border border-red-200 rounded-sm p-4",children:a.jsx("p",{className:"text-red-700 text-sm",children:f})}),a.jsx("button",{type:"submit",disabled:c,className:"btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",children:c?a.jsxs("span",{className:"flex items-center",children:[a.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Enviando..."]}):"Enviar Mensaje"}),a.jsx("p",{className:"text-xs text-gray-400",children:"Al enviar este formulario, acepta que podamos contactarle respecto a su consulta. El envío de este formulario no crea una relación abogado-cliente."})]})]})}),a.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[a.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8",children:[a.jsx("h3",{className:"text-white font-serif font-bold text-lg mb-6",children:"Llámenos Hoy"}),a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("a",{href:"tel:2133881821",onClick:()=>oa({phone_number:"2133881821",location:"contact_page",language:"es"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[a.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Local"}),a.jsx("p",{className:"text-lg font-semibold",children:"(213) 388-1821"})]})]}),a.jsxs("a",{href:"tel:8552016898",onClick:()=>oa({phone_number:"8552016898",location:"contact_page",language:"es"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[a.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Línea Gratuita"}),a.jsx("p",{className:"text-lg font-semibold",children:"(855) 201-6898"})]})]})]}),a.jsx("div",{className:"mt-6 bg-[#D4A853] text-[#1B2A4A] px-4 py-2 rounded-full text-sm font-bold tracking-wide text-center",children:"Se Habla Español"})]}),a.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-6",children:"Información de la Oficina"}),a.jsx("div",{className:"gold-line mb-6"}),a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:a.jsxs("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Ubicación"}),a.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["3450 Wilshire Blvd. Suite 1015",a.jsx("br",{}),"Los Angeles, CA 90010"]})]})]}),a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Horario de Atención"}),a.jsxs("div",{className:"text-gray-500 text-sm mt-1 space-y-1",children:[a.jsx("p",{children:"Lunes – Viernes: 9:00 AM – 6:00 PM"}),a.jsx("p",{children:"Sábado: Con Cita Previa"}),a.jsx("p",{children:"Domingo: Cerrado"})]})]})]}),a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:a.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Idiomas"}),a.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Inglés y Español"})]})]})]})]}),a.jsxs("div",{className:"bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-sm p-8 text-center",children:[a.jsx("svg",{className:"w-10 h-10 mx-auto text-[#D4A853] mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})}),a.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-2",children:"Consulta"}),a.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"Ofrecemos consultas iniciales para evaluar su caso de inmigración. Sin ningún compromiso y toda comunicación es estrictamente confidencial."}),a.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6",children:"Llame Ahora"})]}),a.jsx("div",{className:"bg-[#1B2A4A] rounded-sm overflow-hidden",children:a.jsxs("div",{className:"aspect-[4/3] flex items-center justify-center relative",children:[a.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.5) 1px, transparent 0)",backgroundSize:"20px 20px"}}),a.jsxs("div",{className:"text-center relative z-10",children:[a.jsxs("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/40 mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:[a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),a.jsx("p",{className:"text-gray-300 font-serif font-bold",children:"Los Ángeles, California"}),a.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Atendemos clientes en todo el sur de California"})]})]})})]})]})})})]})}const Iu=[{slug:"hijos-padres-indocumentados-ciudadanos-derecho-nacimiento",title:"Los hijos de padres indocumentados son ciudadanos estadounidenses por derecho de nacimiento: Entienda sus derechos y el futuro de su familia.",excerpt:"Para muchas familias inmigrantes, una de las mayores ideas erróneas en torno a la ley de inmigración estadounidense es si un niño nacido en Estados Unidos se convierte automáticamente en ciudadano estadounidense si sus padres no tienen documentación en regla.",date:"19 de julio de 2026",author:"Todd Becraft",content:`
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
    `}];function tg(){return a.jsxs(a.Fragment,{children:[a.jsx(Ae,{title:"Blog de Inmigración | Bufete de Abogados de Todd Becraft",description:"Noticias, consejos y actualizaciones sobre inmigración de los expertos en derecho de inmigración de Los Ángeles.",canonical:"/es/blog",schema:{"@context":"https://schema.org","@type":"Blog",name:"Blog de Inmigración de Todd Becraft",description:"Noticias, consejos y actualizaciones sobre inmigración"}}),a.jsx("section",{className:"bg-gradient-to-b from-[#1B2A4A] to-[#243554] text-white py-20",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6"}),a.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight",children:"Blog de Inmigración"}),a.jsx("p",{className:"text-xl text-white/90 leading-relaxed",children:"Noticias, consejos y actualizaciones sobre inmigración de nuestros expertos en derecho de inmigración."})]})})}),a.jsx("section",{className:"py-20 bg-white",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Iu.map(o=>a.jsx(Y,{to:`/es/blog/${o.slug}`,className:"group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:a.jsxs("div",{className:"p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-3",children:[a.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})}),a.jsx("time",{children:o.date})]}),a.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3 group-hover:text-[#C5A572] transition-colors",children:o.title}),a.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:o.excerpt}),a.jsxs("div",{className:"flex items-center text-[#C5A572] font-medium group-hover:gap-2 transition-all",children:[a.jsx("span",{children:"Leer más"}),a.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})]})]})},o.slug))})})}),a.jsx("section",{className:"py-16 bg-gradient-to-b from-gray-50 to-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6 mx-auto"}),a.jsx("h2",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"¿Tiene preguntas sobre inmigración?"}),a.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Comuníquese con nosotros para una consulta confidencial."}),a.jsx(Y,{to:"/es/contactenos",className:"inline-block bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39560] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C5A572]/30",children:"Programe una Consulta"})]})})]})}function ag(){const{slug:o}=Za(),l=Iu.find(c=>c.slug===o);return l?a.jsxs(a.Fragment,{children:[a.jsx(Ae,{title:`${l.title} | Bufete de Abogados de Todd Becraft`,description:l.excerpt,canonical:`/es/blog/${l.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:l.title,author:{"@type":"Person",name:l.author},datePublished:l.date,description:l.excerpt}}),a.jsx("nav",{className:"bg-gray-50 border-b border-gray-200",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[a.jsx(Y,{to:"/es",className:"hover:text-[#C5A572] transition-colors",children:"Inicio"}),a.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})}),a.jsx(Y,{to:"/es/blog",className:"hover:text-[#C5A572] transition-colors",children:"Blog"}),a.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})}),a.jsx("span",{className:"text-gray-900",children:l.title})]})})}),a.jsx("article",{className:"py-12 bg-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6"}),a.jsx("h1",{className:"text-4xl sm:text-5xl font-serif font-bold text-[#1B2A4A] mb-6 tracking-tight leading-tight",children:l.title}),a.jsxs("div",{className:"flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})}),a.jsx("span",{children:l.author})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})}),a.jsx("time",{children:l.date})]})]}),a.jsx("div",{className:`prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#C5A572] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1B2A4A] prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700`,dangerouslySetInnerHTML:{__html:l.content}})]})}),a.jsx("section",{className:"py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"bg-gradient-to-br from-[#1B2A4A] to-[#243554] rounded-2xl p-8 sm:p-12 text-center text-white",children:[a.jsx("h2",{className:"text-3xl font-serif font-bold mb-4",children:"¿Necesita ayuda con su caso de inmigración?"}),a.jsx("p",{className:"text-xl text-white/90 mb-8 leading-relaxed",children:"Comuníquese con el Bufete de Abogados de Todd Becraft para una consulta confidencial."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[a.jsx(Y,{to:"/es/contactenos",className:"inline-block bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39560] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C5A572]/30",children:"Programe una Consulta"}),a.jsx("a",{href:"tel:213-388-1821",className:"inline-block bg-white text-[#1B2A4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",children:"Llame al 213-388-1821"})]})]})})}),a.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:a.jsxs(Y,{to:"/es/blog",className:"inline-flex items-center gap-2 text-[#C5A572] hover:gap-3 transition-all font-medium",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),a.jsx("span",{children:"Volver al Blog"})]})})]}):a.jsx("div",{className:"min-h-screen flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Artículo no encontrado"}),a.jsx(Y,{to:"/es/blog",className:"text-[#C5A572] hover:underline",children:"Volver al Blog"})]})})}function ig(){return a.jsx(Es,{children:a.jsx(uf,{basename:"",children:a.jsxs("div",{className:"min-h-screen flex flex-col",children:[a.jsx(gf,{}),a.jsx("main",{className:"flex-1",children:a.jsxs(nf,{children:[a.jsx(xe,{path:"/",element:a.jsx(tu,{})}),a.jsx(xe,{path:"/about",element:a.jsx(Af,{})}),a.jsx(xe,{path:"/services",element:a.jsx(kf,{})}),a.jsx(xe,{path:"/services/:area",element:a.jsx(Uf,{})}),a.jsx(xe,{path:"/resources",element:a.jsx(Tf,{})}),a.jsx(xe,{path:"/resources/:slug",element:a.jsx(zf,{})}),a.jsx(xe,{path:"/success-stories",element:a.jsx(Pf,{})}),a.jsx(xe,{path:"/contact",element:a.jsx(qf,{})}),a.jsx(xe,{path:"/blog",element:a.jsx(Bf,{})}),a.jsx(xe,{path:"/blog/:slug",element:a.jsx(Rf,{})}),a.jsx(xe,{path:"/es",element:a.jsx(Of,{})}),a.jsx(xe,{path:"/es/servicios",element:a.jsx(Wf,{})}),a.jsx(xe,{path:"/es/servicios/:area",element:a.jsx(Hf,{})}),a.jsx(xe,{path:"/es/recursos",element:a.jsx($f,{})}),a.jsx(xe,{path:"/es/recursos/:slug",element:a.jsx(Gf,{})}),a.jsx(xe,{path:"/es/sobre-nosotros",element:a.jsx(Zf,{})}),a.jsx(xe,{path:"/es/contactenos",element:a.jsx(eg,{})}),a.jsx(xe,{path:"/es/historias-de-exito",element:a.jsx(Qf,{})}),a.jsx(xe,{path:"/es/blog",element:a.jsx(tg,{})}),a.jsx(xe,{path:"/es/blog/:slug",element:a.jsx(ag,{})}),a.jsx(xe,{path:"*",element:a.jsx(tu,{})})]})}),a.jsx(yf,{})]})})})}Rp.createRoot(document.getElementById("root")).render(a.jsx(z.StrictMode,{children:a.jsx(Es,{children:a.jsx(ig,{})})}));
