var kp=Object.defineProperty;var Ep=(r,l,c)=>l in r?kp(r,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[l]=c;var Da=(r,l,c)=>Ep(r,typeof l!="symbol"?l+"":l,c);function Up(r,l){for(var c=0;c<l.length;c++){const u=l[c];if(typeof u!="string"&&!Array.isArray(u)){for(const p in u)if(p!=="default"&&!(p in r)){const m=Object.getOwnPropertyDescriptor(u,p);m&&Object.defineProperty(r,p,m.get?m:{enumerable:!0,get:()=>u[p]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();function co(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var os={exports:{}},Ft={},rs={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function Ip(){if(Cd)return K;Cd=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),f=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),k=Symbol.iterator;function B(w){return w===null||typeof w!="object"?null:(w=k&&w[k]||w["@@iterator"],typeof w=="function"?w:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,W={};function z(w,E,J){this.props=w,this.context=E,this.refs=W,this.updater=J||G}z.prototype.isReactComponent={},z.prototype.setState=function(w,E){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,E,"setState")},z.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function te(){}te.prototype=z.prototype;function se(w,E,J){this.props=w,this.context=E,this.refs=W,this.updater=J||G}var ne=se.prototype=new te;ne.constructor=se,Q(ne,z.prototype),ne.isPureReactComponent=!0;var le=Array.isArray,ke=Object.prototype.hasOwnProperty,Be={current:null},Fe={key:!0,ref:!0,__self:!0,__source:!0};function aa(w,E,J){var X,ee={},ae=null,ce=null;if(E!=null)for(X in E.ref!==void 0&&(ce=E.ref),E.key!==void 0&&(ae=""+E.key),E)ke.call(E,X)&&!Fe.hasOwnProperty(X)&&(ee[X]=E[X]);var oe=arguments.length-2;if(oe===1)ee.children=J;else if(1<oe){for(var pe=Array(oe),Je=0;Je<oe;Je++)pe[Je]=arguments[Je+2];ee.children=pe}if(w&&w.defaultProps)for(X in oe=w.defaultProps,oe)ee[X]===void 0&&(ee[X]=oe[X]);return{$$typeof:r,type:w,key:ae,ref:ce,props:ee,_owner:Be.current}}function Pa(w,E){return{$$typeof:r,type:w.type,key:E,ref:w.ref,props:w.props,_owner:w._owner}}function Ca(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function li(w){var E={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(J){return E[J]})}var va=/\/+/g;function Qe(w,E){return typeof w=="object"&&w!==null&&w.key!=null?li(""+w.key):E.toString(36)}function ca(w,E,J,X,ee){var ae=typeof w;(ae==="undefined"||ae==="boolean")&&(w=null);var ce=!1;if(w===null)ce=!0;else switch(ae){case"string":case"number":ce=!0;break;case"object":switch(w.$$typeof){case r:case l:ce=!0}}if(ce)return ce=w,ee=ee(ce),w=X===""?"."+Qe(ce,0):X,le(ee)?(J="",w!=null&&(J=w.replace(va,"$&/")+"/"),ca(ee,E,J,"",function(Je){return Je})):ee!=null&&(Ca(ee)&&(ee=Pa(ee,J+(!ee.key||ce&&ce.key===ee.key?"":(""+ee.key).replace(va,"$&/")+"/")+w)),E.push(ee)),1;if(ce=0,X=X===""?".":X+":",le(w))for(var oe=0;oe<w.length;oe++){ae=w[oe];var pe=X+Qe(ae,oe);ce+=ca(ae,E,J,pe,ee)}else if(pe=B(w),typeof pe=="function")for(w=pe.call(w),oe=0;!(ae=w.next()).done;)ae=ae.value,pe=X+Qe(ae,oe++),ce+=ca(ae,E,J,pe,ee);else if(ae==="object")throw E=String(w),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return ce}function xa(w,E,J){if(w==null)return w;var X=[],ee=0;return ca(w,X,"","",function(ae){return E.call(J,ae,ee++)}),X}function Oe(w){if(w._status===-1){var E=w._result;E=E(),E.then(function(J){(w._status===0||w._status===-1)&&(w._status=1,w._result=J)},function(J){(w._status===0||w._status===-1)&&(w._status=2,w._result=J)}),w._status===-1&&(w._status=0,w._result=E)}if(w._status===1)return w._result.default;throw w._result}var ye={current:null},D={transition:null},V={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:D,ReactCurrentOwner:Be};function R(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:xa,forEach:function(w,E,J){xa(w,function(){E.apply(this,arguments)},J)},count:function(w){var E=0;return xa(w,function(){E++}),E},toArray:function(w){return xa(w,function(E){return E})||[]},only:function(w){if(!Ca(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},K.Component=z,K.Fragment=c,K.Profiler=p,K.PureComponent=se,K.StrictMode=u,K.Suspense=v,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,K.act=R,K.cloneElement=function(w,E,J){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=Q({},w.props),ee=w.key,ae=w.ref,ce=w._owner;if(E!=null){if(E.ref!==void 0&&(ae=E.ref,ce=Be.current),E.key!==void 0&&(ee=""+E.key),w.type&&w.type.defaultProps)var oe=w.type.defaultProps;for(pe in E)ke.call(E,pe)&&!Fe.hasOwnProperty(pe)&&(X[pe]=E[pe]===void 0&&oe!==void 0?oe[pe]:E[pe])}var pe=arguments.length-2;if(pe===1)X.children=J;else if(1<pe){oe=Array(pe);for(var Je=0;Je<pe;Je++)oe[Je]=arguments[Je+2];X.children=oe}return{$$typeof:r,type:w.type,key:ee,ref:ae,props:X,_owner:ce}},K.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:m,_context:w},w.Consumer=w},K.createElement=aa,K.createFactory=function(w){var E=aa.bind(null,w);return E.type=w,E},K.createRef=function(){return{current:null}},K.forwardRef=function(w){return{$$typeof:x,render:w}},K.isValidElement=Ca,K.lazy=function(w){return{$$typeof:C,_payload:{_status:-1,_result:w},_init:Oe}},K.memo=function(w,E){return{$$typeof:b,type:w,compare:E===void 0?null:E}},K.startTransition=function(w){var E=D.transition;D.transition={};try{w()}finally{D.transition=E}},K.unstable_act=R,K.useCallback=function(w,E){return ye.current.useCallback(w,E)},K.useContext=function(w){return ye.current.useContext(w)},K.useDebugValue=function(){},K.useDeferredValue=function(w){return ye.current.useDeferredValue(w)},K.useEffect=function(w,E){return ye.current.useEffect(w,E)},K.useId=function(){return ye.current.useId()},K.useImperativeHandle=function(w,E,J){return ye.current.useImperativeHandle(w,E,J)},K.useInsertionEffect=function(w,E){return ye.current.useInsertionEffect(w,E)},K.useLayoutEffect=function(w,E){return ye.current.useLayoutEffect(w,E)},K.useMemo=function(w,E){return ye.current.useMemo(w,E)},K.useReducer=function(w,E,J){return ye.current.useReducer(w,E,J)},K.useRef=function(w){return ye.current.useRef(w)},K.useState=function(w){return ye.current.useState(w)},K.useSyncExternalStore=function(w,E,J){return ye.current.useSyncExternalStore(w,E,J)},K.useTransition=function(){return ye.current.useTransition()},K.version="18.3.1",K}var Nd;function Ns(){return Nd||(Nd=1,rs.exports=Ip()),rs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Tp(){if(kd)return Ft;kd=1;var r=Ns(),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function f(x,v,b){var C,k={},B=null,G=null;b!==void 0&&(B=""+b),v.key!==void 0&&(B=""+v.key),v.ref!==void 0&&(G=v.ref);for(C in v)u.call(v,C)&&!m.hasOwnProperty(C)&&(k[C]=v[C]);if(x&&x.defaultProps)for(C in v=x.defaultProps,v)k[C]===void 0&&(k[C]=v[C]);return{$$typeof:l,type:x,key:B,ref:G,props:k,_owner:p.current}}return Ft.Fragment=c,Ft.jsx=f,Ft.jsxs=f,Ft}var Ed;function qp(){return Ed||(Ed=1,os.exports=Tp()),os.exports}var i=qp(),q=Ns();const La=co(q),zp=Up({__proto__:null,default:La},[q]);var oo={},ss={exports:{}},Ge={},ls={exports:{}},cs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Dp(){return Ud||(Ud=1,(function(r){function l(D,V){var R=D.length;D.push(V);e:for(;0<R;){var w=R-1>>>1,E=D[w];if(0<p(E,V))D[w]=V,D[R]=E,R=w;else break e}}function c(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var V=D[0],R=D.pop();if(R!==V){D[0]=R;e:for(var w=0,E=D.length,J=E>>>1;w<J;){var X=2*(w+1)-1,ee=D[X],ae=X+1,ce=D[ae];if(0>p(ee,R))ae<E&&0>p(ce,ee)?(D[w]=ce,D[ae]=R,w=ae):(D[w]=ee,D[X]=R,w=X);else if(ae<E&&0>p(ce,R))D[w]=ce,D[ae]=R,w=ae;else break e}}return V}function p(D,V){var R=D.sortIndex-V.sortIndex;return R!==0?R:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var f=Date,x=f.now();r.unstable_now=function(){return f.now()-x}}var v=[],b=[],C=1,k=null,B=3,G=!1,Q=!1,W=!1,z=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(D){for(var V=c(b);V!==null;){if(V.callback===null)u(b);else if(V.startTime<=D)u(b),V.sortIndex=V.expirationTime,l(v,V);else break;V=c(b)}}function le(D){if(W=!1,ne(D),!Q)if(c(v)!==null)Q=!0,Oe(ke);else{var V=c(b);V!==null&&ye(le,V.startTime-D)}}function ke(D,V){Q=!1,W&&(W=!1,te(aa),aa=-1),G=!0;var R=B;try{for(ne(V),k=c(v);k!==null&&(!(k.expirationTime>V)||D&&!li());){var w=k.callback;if(typeof w=="function"){k.callback=null,B=k.priorityLevel;var E=w(k.expirationTime<=V);V=r.unstable_now(),typeof E=="function"?k.callback=E:k===c(v)&&u(v),ne(V)}else u(v);k=c(v)}if(k!==null)var J=!0;else{var X=c(b);X!==null&&ye(le,X.startTime-V),J=!1}return J}finally{k=null,B=R,G=!1}}var Be=!1,Fe=null,aa=-1,Pa=5,Ca=-1;function li(){return!(r.unstable_now()-Ca<Pa)}function va(){if(Fe!==null){var D=r.unstable_now();Ca=D;var V=!0;try{V=Fe(!0,D)}finally{V?Qe():(Be=!1,Fe=null)}}else Be=!1}var Qe;if(typeof se=="function")Qe=function(){se(va)};else if(typeof MessageChannel<"u"){var ca=new MessageChannel,xa=ca.port2;ca.port1.onmessage=va,Qe=function(){xa.postMessage(null)}}else Qe=function(){z(va,0)};function Oe(D){Fe=D,Be||(Be=!0,Qe())}function ye(D,V){aa=z(function(){D(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_continueExecution=function(){Q||G||(Q=!0,Oe(ke))},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pa=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_getFirstCallbackNode=function(){return c(v)},r.unstable_next=function(D){switch(B){case 1:case 2:case 3:var V=3;break;default:V=B}var R=B;B=V;try{return D()}finally{B=R}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var R=B;B=D;try{return V()}finally{B=R}},r.unstable_scheduleCallback=function(D,V,R){var w=r.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?w+R:w):R=w,D){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=R+E,D={id:C++,callback:V,priorityLevel:D,startTime:R,expirationTime:E,sortIndex:-1},R>w?(D.sortIndex=R,l(b,D),c(v)===null&&D===c(b)&&(W?(te(aa),aa=-1):W=!0,ye(le,R-w))):(D.sortIndex=E,l(v,D),Q||G||(Q=!0,Oe(ke))),D},r.unstable_shouldYield=li,r.unstable_wrapCallback=function(D){var V=B;return function(){var R=B;B=V;try{return D.apply(this,arguments)}finally{B=R}}}})(cs)),cs}var Id;function Lp(){return Id||(Id=1,ls.exports=Dp()),ls.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Pp(){if(Td)return Ge;Td=1;var r=Ns(),l=Lp();function c(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,p={};function m(e,a){f(e,a),f(e+"Capture",a)}function f(e,a){for(p[e]=a,e=0;e<a.length;e++)u.add(a[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},k={};function B(e){return v.call(k,e)?!0:v.call(C,e)?!1:b.test(e)?k[e]=!0:(C[e]=!0,!1)}function G(e,a,t,n){if(t!==null&&t.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q(e,a,t,n){if(a===null||typeof a>"u"||G(e,a,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function W(e,a,t,n,o,s,d){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=a,this.sanitizeURL=s,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];z[a]=new W(a,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(te,se);z[a]=new W(a,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(te,se);z[a]=new W(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(te,se);z[a]=new W(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,a,t,n){var o=z.hasOwnProperty(a)?z[a]:null;(o!==null?o.type!==0:n||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(Q(a,t,o,n)&&(t=null),n||o===null?B(a)&&(t===null?e.removeAttribute(a):e.setAttribute(a,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(a=o.attributeName,n=o.attributeNamespace,t===null?e.removeAttribute(a):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,n?e.setAttributeNS(n,a,t):e.setAttribute(a,t))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Be=Symbol.for("react.portal"),Fe=Symbol.for("react.fragment"),aa=Symbol.for("react.strict_mode"),Pa=Symbol.for("react.profiler"),Ca=Symbol.for("react.provider"),li=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),ca=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),D=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,w;function E(e){if(w===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);w=a&&a[1]||""}return`
`+w+e}var J=!1;function X(e,a){if(!e||J)return"";J=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(A){var n=A}Reflect.construct(e,[],a)}else{try{a.call()}catch(A){n=A}e.call(a.prototype)}else{try{throw Error()}catch(A){n=A}e()}}catch(A){if(A&&n&&typeof A.stack=="string"){for(var o=A.stack.split(`
`),s=n.stack.split(`
`),d=o.length-1,h=s.length-1;1<=d&&0<=h&&o[d]!==s[h];)h--;for(;1<=d&&0<=h;d--,h--)if(o[d]!==s[h]){if(d!==1||h!==1)do if(d--,h--,0>h||o[d]!==s[h]){var g=`
`+o[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=h);break}}}finally{J=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?E(e):""}function ee(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fe:return"Fragment";case Be:return"Portal";case Pa:return"Profiler";case aa:return"StrictMode";case Qe:return"Suspense";case ca:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case li:return(e.displayName||"Context")+".Consumer";case Ca:return(e._context.displayName||"Context")+".Provider";case va:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return a=e.displayName||null,a!==null?a:ae(e.type)||"Memo";case Oe:a=e._payload,e=e._init;try{return ae(e(a))}catch{}}return null}function ce(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(a);case 8:return a===aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Je(e){var a=pe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),n=""+e[a];if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,s=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function $t(e){e._valueTracker||(e._valueTracker=Je(e))}function Ts(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=pe(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mo(e,a){var t=a.checked;return R({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qs(e,a){var t=a.defaultValue==null?"":a.defaultValue,n=a.checked!=null?a.checked:a.defaultChecked;t=oe(a.value!=null?a.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function zs(e,a){a=a.checked,a!=null&&ne(e,"checked",a,!1)}function po(e,a){zs(e,a);var t=oe(a.value),n=a.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?ho(e,a.type,t):a.hasOwnProperty("defaultValue")&&ho(e,a.type,oe(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function Ds(e,a,t){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var n=a.type;if(!(n!=="submit"&&n!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,t||a===e.value||(e.value=a),e.defaultValue=a}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ho(e,a,t){(a!=="number"||Qt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var at=Array.isArray;function Ai(e,a,t,n){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+oe(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function fo(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(c(91));return R({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ls(e,a){var t=a.value;if(t==null){if(t=a.children,a=a.defaultValue,t!=null){if(a!=null)throw Error(c(92));if(at(t)){if(1<t.length)throw Error(c(93));t=t[0]}a=t}a==null&&(a=""),t=a}e._wrapperState={initialValue:oe(t)}}function Ps(e,a){var t=oe(a.value),n=oe(a.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),a.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function Bs(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Rs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Rs(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jt,Ms=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,t,n,o){MSApp.execUnsafeLocalFunction(function(){return e(a,t,n,o)})}:e})(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(Jt=Jt||document.createElement("div"),Jt.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Jt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function it(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tu=["Webkit","ms","Moz","O"];Object.keys(tt).forEach(function(e){Tu.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),tt[a]=tt[e]})});function Fs(e,a,t){return a==null||typeof a=="boolean"||a===""?"":t||typeof a!="number"||a===0||tt.hasOwnProperty(e)&&tt[e]?(""+a).trim():a+"px"}function Os(e,a){e=e.style;for(var t in a)if(a.hasOwnProperty(t)){var n=t.indexOf("--")===0,o=Fs(t,a[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,o):e[t]=o}}var qu=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yo(e,a){if(a){if(qu[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(c(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(c(61))}if(a.style!=null&&typeof a.style!="object")throw Error(c(62))}}function vo(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,Ci=null,Ni=null;function Ws(e){if(e=Ct(e)){if(typeof wo!="function")throw Error(c(280));var a=e.stateNode;a&&(a=bn(a),wo(e.stateNode,e.type,a))}}function Hs(e){Ci?Ni?Ni.push(e):Ni=[e]:Ci=e}function _s(){if(Ci){var e=Ci,a=Ni;if(Ni=Ci=null,Ws(e),a)for(e=0;e<a.length;e++)Ws(a[e])}}function Vs(e,a){return e(a)}function Ys(){}var So=!1;function Gs(e,a,t){if(So)return e(a,t);So=!0;try{return Vs(e,a,t)}finally{So=!1,(Ci!==null||Ni!==null)&&(Ys(),_s())}}function nt(e,a){var t=e.stateNode;if(t===null)return null;var n=bn(t);if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,a,typeof t));return t}var jo=!1;if(x)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){jo=!0}}),window.addEventListener("test",ot,ot),window.removeEventListener("test",ot,ot)}catch{jo=!1}function zu(e,a,t,n,o,s,d,h,g){var A=Array.prototype.slice.call(arguments,3);try{a.apply(t,A)}catch(U){this.onError(U)}}var rt=!1,Kt=null,Xt=!1,Ao=null,Du={onError:function(e){rt=!0,Kt=e}};function Lu(e,a,t,n,o,s,d,h,g){rt=!1,Kt=null,zu.apply(Du,arguments)}function Pu(e,a,t,n,o,s,d,h,g){if(Lu.apply(this,arguments),rt){if(rt){var A=Kt;rt=!1,Kt=null}else throw Error(c(198));Xt||(Xt=!0,Ao=A)}}function ci(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function $s(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Qs(e){if(ci(e)!==e)throw Error(c(188))}function Bu(e){var a=e.alternate;if(!a){if(a=ci(e),a===null)throw Error(c(188));return a!==e?null:e}for(var t=e,n=a;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return Qs(o),e;if(s===n)return Qs(o),a;s=s.sibling}throw Error(c(188))}if(t.return!==n.return)t=o,n=s;else{for(var d=!1,h=o.child;h;){if(h===t){d=!0,t=o,n=s;break}if(h===n){d=!0,n=o,t=s;break}h=h.sibling}if(!d){for(h=s.child;h;){if(h===t){d=!0,t=s,n=o;break}if(h===n){d=!0,n=s,t=o;break}h=h.sibling}if(!d)throw Error(c(189))}}if(t.alternate!==n)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:a}function Js(e){return e=Bu(e),e!==null?Ks(e):null}function Ks(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=Ks(e);if(a!==null)return a;e=e.sibling}return null}var Xs=l.unstable_scheduleCallback,Zs=l.unstable_cancelCallback,Ru=l.unstable_shouldYield,Mu=l.unstable_requestPaint,be=l.unstable_now,Fu=l.unstable_getCurrentPriorityLevel,Co=l.unstable_ImmediatePriority,el=l.unstable_UserBlockingPriority,Zt=l.unstable_NormalPriority,Ou=l.unstable_LowPriority,al=l.unstable_IdlePriority,en=null,ba=null;function Wu(e){if(ba&&typeof ba.onCommitFiberRoot=="function")try{ba.onCommitFiberRoot(en,e,void 0,(e.current.flags&128)===128)}catch{}}var da=Math.clz32?Math.clz32:Vu,Hu=Math.log,_u=Math.LN2;function Vu(e){return e>>>=0,e===0?32:31-(Hu(e)/_u|0)|0}var an=64,tn=4194304;function st(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nn(e,a){var t=e.pendingLanes;if(t===0)return 0;var n=0,o=e.suspendedLanes,s=e.pingedLanes,d=t&268435455;if(d!==0){var h=d&~o;h!==0?n=st(h):(s&=d,s!==0&&(n=st(s)))}else d=t&~o,d!==0?n=st(d):s!==0&&(n=st(s));if(n===0)return 0;if(a!==0&&a!==n&&(a&o)===0&&(o=n&-n,s=a&-a,o>=s||o===16&&(s&4194240)!==0))return a;if((n&4)!==0&&(n|=t&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=n;0<a;)t=31-da(a),o=1<<t,n|=e[t],a&=~o;return n}function Yu(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gu(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-da(s),h=1<<d,g=o[d];g===-1?((h&t)===0||(h&n)!==0)&&(o[d]=Yu(h,a)):g<=a&&(e.expiredLanes|=h),s&=~h}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function il(){var e=an;return an<<=1,(an&4194240)===0&&(an=64),e}function ko(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function lt(e,a,t){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-da(a),e[a]=t}function $u(e,a){var t=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-da(t),s=1<<o;a[o]=0,n[o]=-1,e[o]=-1,t&=~s}}function Eo(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-da(t),o=1<<n;o&a|e[n]&a&&(e[n]|=a),t&=~o}}var re=0;function tl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nl,Uo,ol,rl,sl,Io=!1,on=[],Ba=null,Ra=null,Ma=null,ct=new Map,dt=new Map,Fa=[],Qu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ll(e,a){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":ct.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":dt.delete(a.pointerId)}}function ut(e,a,t,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},a!==null&&(a=Ct(a),a!==null&&Uo(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function Ju(e,a,t,n,o){switch(a){case"focusin":return Ba=ut(Ba,e,a,t,n,o),!0;case"dragenter":return Ra=ut(Ra,e,a,t,n,o),!0;case"mouseover":return Ma=ut(Ma,e,a,t,n,o),!0;case"pointerover":var s=o.pointerId;return ct.set(s,ut(ct.get(s)||null,e,a,t,n,o)),!0;case"gotpointercapture":return s=o.pointerId,dt.set(s,ut(dt.get(s)||null,e,a,t,n,o)),!0}return!1}function cl(e){var a=di(e.target);if(a!==null){var t=ci(a);if(t!==null){if(a=t.tag,a===13){if(a=$s(t),a!==null){e.blockedOn=a,sl(e.priority,function(){ol(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rn(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=qo(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);xo=n,t.target.dispatchEvent(n),xo=null}else return a=Ct(t),a!==null&&Uo(a),e.blockedOn=t,!1;a.shift()}return!0}function dl(e,a,t){rn(e)&&t.delete(a)}function Ku(){Io=!1,Ba!==null&&rn(Ba)&&(Ba=null),Ra!==null&&rn(Ra)&&(Ra=null),Ma!==null&&rn(Ma)&&(Ma=null),ct.forEach(dl),dt.forEach(dl)}function mt(e,a){e.blockedOn===a&&(e.blockedOn=null,Io||(Io=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ku)))}function pt(e){function a(o){return mt(o,e)}if(0<on.length){mt(on[0],e);for(var t=1;t<on.length;t++){var n=on[t];n.blockedOn===e&&(n.blockedOn=null)}}for(Ba!==null&&mt(Ba,e),Ra!==null&&mt(Ra,e),Ma!==null&&mt(Ma,e),ct.forEach(a),dt.forEach(a),t=0;t<Fa.length;t++)n=Fa[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<Fa.length&&(t=Fa[0],t.blockedOn===null);)cl(t),t.blockedOn===null&&Fa.shift()}var ki=le.ReactCurrentBatchConfig,sn=!0;function Xu(e,a,t,n){var o=re,s=ki.transition;ki.transition=null;try{re=1,To(e,a,t,n)}finally{re=o,ki.transition=s}}function Zu(e,a,t,n){var o=re,s=ki.transition;ki.transition=null;try{re=4,To(e,a,t,n)}finally{re=o,ki.transition=s}}function To(e,a,t,n){if(sn){var o=qo(e,a,t,n);if(o===null)Qo(e,a,n,ln,t),ll(e,n);else if(Ju(o,e,a,t,n))n.stopPropagation();else if(ll(e,n),a&4&&-1<Qu.indexOf(e)){for(;o!==null;){var s=Ct(o);if(s!==null&&nl(s),s=qo(e,a,t,n),s===null&&Qo(e,a,n,ln,t),s===o)break;o=s}o!==null&&n.stopPropagation()}else Qo(e,a,n,null,t)}}var ln=null;function qo(e,a,t,n){if(ln=null,e=bo(n),e=di(e),e!==null)if(a=ci(e),a===null)e=null;else if(t=a.tag,t===13){if(e=$s(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return ln=e,null}function ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fu()){case Co:return 1;case el:return 4;case Zt:case Ou:return 16;case al:return 536870912;default:return 16}default:return 16}}var Oa=null,zo=null,cn=null;function ml(){if(cn)return cn;var e,a=zo,t=a.length,n,o="value"in Oa?Oa.value:Oa.textContent,s=o.length;for(e=0;e<t&&a[e]===o[e];e++);var d=t-e;for(n=1;n<=d&&a[t-n]===o[s-n];n++);return cn=o.slice(e,1<n?1-n:void 0)}function dn(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function un(){return!0}function pl(){return!1}function Ke(e){function a(t,n,o,s,d){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?un:pl,this.isPropagationStopped=pl,this}return R(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=un)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=un)},persist:function(){},isPersistent:un}),a}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=Ke(Ei),ht=R({},Ei,{view:0,detail:0}),em=Ke(ht),Lo,Po,ft,mn=R({},ht,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ft&&(ft&&e.type==="mousemove"?(Lo=e.screenX-ft.screenX,Po=e.screenY-ft.screenY):Po=Lo=0,ft=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Po}}),hl=Ke(mn),am=R({},mn,{dataTransfer:0}),im=Ke(am),tm=R({},ht,{relatedTarget:0}),Bo=Ke(tm),nm=R({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),om=Ke(nm),rm=R({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Ke(rm),lm=R({},Ei,{data:0}),fl=Ke(lm),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=um[e])?!!a[e]:!1}function Ro(){return mm}var pm=R({},ht,{key:function(e){if(e.key){var a=cm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=dn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?dn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hm=Ke(pm),fm=R({},mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gl=Ke(fm),gm=R({},ht,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),ym=Ke(gm),vm=R({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),xm=Ke(vm),bm=R({},mn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wm=Ke(bm),Sm=[9,13,27,32],Mo=x&&"CompositionEvent"in window,gt=null;x&&"documentMode"in document&&(gt=document.documentMode);var jm=x&&"TextEvent"in window&&!gt,yl=x&&(!Mo||gt&&8<gt&&11>=gt),vl=" ",xl=!1;function bl(e,a){switch(e){case"keyup":return Sm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ui=!1;function Am(e,a){switch(e){case"compositionend":return wl(a);case"keypress":return a.which!==32?null:(xl=!0,vl);case"textInput":return e=a.data,e===vl&&xl?null:e;default:return null}}function Cm(e,a){if(Ui)return e==="compositionend"||!Mo&&bl(e,a)?(e=ml(),cn=zo=Oa=null,Ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return yl&&a.locale!=="ko"?null:a.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sl(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Nm[e.type]:a==="textarea"}function jl(e,a,t,n){Hs(n),a=yn(a,"onChange"),0<a.length&&(t=new Do("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var yt=null,vt=null;function km(e){Ol(e,0)}function pn(e){var a=Di(e);if(Ts(a))return e}function Em(e,a){if(e==="change")return a}var Al=!1;if(x){var Fo;if(x){var Oo="oninput"in document;if(!Oo){var Cl=document.createElement("div");Cl.setAttribute("oninput","return;"),Oo=typeof Cl.oninput=="function"}Fo=Oo}else Fo=!1;Al=Fo&&(!document.documentMode||9<document.documentMode)}function Nl(){yt&&(yt.detachEvent("onpropertychange",kl),vt=yt=null)}function kl(e){if(e.propertyName==="value"&&pn(vt)){var a=[];jl(a,vt,e,bo(e)),Gs(km,a)}}function Um(e,a,t){e==="focusin"?(Nl(),yt=a,vt=t,yt.attachEvent("onpropertychange",kl)):e==="focusout"&&Nl()}function Im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pn(vt)}function Tm(e,a){if(e==="click")return pn(a)}function qm(e,a){if(e==="input"||e==="change")return pn(a)}function zm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ua=typeof Object.is=="function"?Object.is:zm;function xt(e,a){if(ua(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!v.call(a,o)||!ua(e[o],a[o]))return!1}return!0}function El(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ul(e,a){var t=El(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=El(t)}}function Il(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Il(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Tl(){for(var e=window,a=Qt();a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Qt(e.document)}return a}function Wo(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function Dm(e){var a=Tl(),t=e.focusedElem,n=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&Il(t.ownerDocument.documentElement,t)){if(n!==null&&Wo(t)){if(a=n.start,e=n.end,e===void 0&&(e=a),"selectionStart"in t)t.selectionStart=a,t.selectionEnd=Math.min(e,t.value.length);else if(e=(a=t.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,s=Math.min(n.start,o);n=n.end===void 0?s:Math.min(n.end,o),!e.extend&&s>n&&(o=n,n=s,s=o),o=Ul(t,s);var d=Ul(t,n);o&&d&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(a=a.createRange(),a.setStart(o.node,o.offset),e.removeAllRanges(),s>n?(e.addRange(a),e.extend(d.node,d.offset)):(a.setEnd(d.node,d.offset),e.addRange(a)))}}for(a=[],e=t;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<a.length;t++)e=a[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lm=x&&"documentMode"in document&&11>=document.documentMode,Ii=null,Ho=null,bt=null,_o=!1;function ql(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_o||Ii==null||Ii!==Qt(n)||(n=Ii,"selectionStart"in n&&Wo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bt&&xt(bt,n)||(bt=n,n=yn(Ho,"onSelect"),0<n.length&&(a=new Do("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=Ii)))}function hn(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Ti={animationend:hn("Animation","AnimationEnd"),animationiteration:hn("Animation","AnimationIteration"),animationstart:hn("Animation","AnimationStart"),transitionend:hn("Transition","TransitionEnd")},Vo={},zl={};x&&(zl=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function fn(e){if(Vo[e])return Vo[e];if(!Ti[e])return e;var a=Ti[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in zl)return Vo[e]=a[t];return e}var Dl=fn("animationend"),Ll=fn("animationiteration"),Pl=fn("animationstart"),Bl=fn("transitionend"),Rl=new Map,Ml="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wa(e,a){Rl.set(e,a),m(a,[e])}for(var Yo=0;Yo<Ml.length;Yo++){var Go=Ml[Yo],Pm=Go.toLowerCase(),Bm=Go[0].toUpperCase()+Go.slice(1);Wa(Pm,"on"+Bm)}Wa(Dl,"onAnimationEnd"),Wa(Ll,"onAnimationIteration"),Wa(Pl,"onAnimationStart"),Wa("dblclick","onDoubleClick"),Wa("focusin","onFocus"),Wa("focusout","onBlur"),Wa(Bl,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(wt));function Fl(e,a,t){var n=e.type||"unknown-event";e.currentTarget=t,Pu(n,a,void 0,e),e.currentTarget=null}function Ol(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var s=void 0;if(a)for(var d=n.length-1;0<=d;d--){var h=n[d],g=h.instance,A=h.currentTarget;if(h=h.listener,g!==s&&o.isPropagationStopped())break e;Fl(o,h,A),s=g}else for(d=0;d<n.length;d++){if(h=n[d],g=h.instance,A=h.currentTarget,h=h.listener,g!==s&&o.isPropagationStopped())break e;Fl(o,h,A),s=g}}}if(Xt)throw e=Ao,Xt=!1,Ao=null,e}function ue(e,a){var t=a[ar];t===void 0&&(t=a[ar]=new Set);var n=e+"__bubble";t.has(n)||(Wl(a,e,2,!1),t.add(n))}function $o(e,a,t){var n=0;a&&(n|=4),Wl(t,e,n,a)}var gn="_reactListening"+Math.random().toString(36).slice(2);function St(e){if(!e[gn]){e[gn]=!0,u.forEach(function(t){t!=="selectionchange"&&(Rm.has(t)||$o(t,!1,e),$o(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[gn]||(a[gn]=!0,$o("selectionchange",!1,a))}}function Wl(e,a,t,n){switch(ul(a)){case 1:var o=Xu;break;case 4:o=Zu;break;default:o=To}t=o.bind(null,a,t,e),o=void 0,!jo||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function Qo(e,a,t,n,o){var s=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var h=n.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(d===4)for(d=n.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;d=d.return}for(;h!==null;){if(d=di(h),d===null)return;if(g=d.tag,g===5||g===6){n=s=d;continue e}h=h.parentNode}}n=n.return}Gs(function(){var A=s,U=bo(t),I=[];e:{var N=Rl.get(e);if(N!==void 0){var L=Do,M=e;switch(e){case"keypress":if(dn(t)===0)break e;case"keydown":case"keyup":L=hm;break;case"focusin":M="focus",L=Bo;break;case"focusout":M="blur",L=Bo;break;case"beforeblur":case"afterblur":L=Bo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=hl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=ym;break;case Dl:case Ll:case Pl:L=om;break;case Bl:L=xm;break;case"scroll":L=em;break;case"wheel":L=wm;break;case"copy":case"cut":case"paste":L=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=gl}var F=(a&4)!==0,we=!F&&e==="scroll",S=F?N!==null?N+"Capture":null:N;F=[];for(var y=A,j;y!==null;){j=y;var T=j.stateNode;if(j.tag===5&&T!==null&&(j=T,S!==null&&(T=nt(y,S),T!=null&&F.push(jt(y,T,j)))),we)break;y=y.return}0<F.length&&(N=new L(N,M,null,t,U),I.push({event:N,listeners:F}))}}if((a&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",N&&t!==xo&&(M=t.relatedTarget||t.fromElement)&&(di(M)||M[Na]))break e;if((L||N)&&(N=U.window===U?U:(N=U.ownerDocument)?N.defaultView||N.parentWindow:window,L?(M=t.relatedTarget||t.toElement,L=A,M=M?di(M):null,M!==null&&(we=ci(M),M!==we||M.tag!==5&&M.tag!==6)&&(M=null)):(L=null,M=A),L!==M)){if(F=hl,T="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(F=gl,T="onPointerLeave",S="onPointerEnter",y="pointer"),we=L==null?N:Di(L),j=M==null?N:Di(M),N=new F(T,y+"leave",L,t,U),N.target=we,N.relatedTarget=j,T=null,di(U)===A&&(F=new F(S,y+"enter",M,t,U),F.target=j,F.relatedTarget=we,T=F),we=T,L&&M)a:{for(F=L,S=M,y=0,j=F;j;j=qi(j))y++;for(j=0,T=S;T;T=qi(T))j++;for(;0<y-j;)F=qi(F),y--;for(;0<j-y;)S=qi(S),j--;for(;y--;){if(F===S||S!==null&&F===S.alternate)break a;F=qi(F),S=qi(S)}F=null}else F=null;L!==null&&Hl(I,N,L,F,!1),M!==null&&we!==null&&Hl(I,we,M,F,!0)}}e:{if(N=A?Di(A):window,L=N.nodeName&&N.nodeName.toLowerCase(),L==="select"||L==="input"&&N.type==="file")var O=Em;else if(Sl(N))if(Al)O=qm;else{O=Im;var H=Um}else(L=N.nodeName)&&L.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(O=Tm);if(O&&(O=O(e,A))){jl(I,O,t,U);break e}H&&H(e,N,A),e==="focusout"&&(H=N._wrapperState)&&H.controlled&&N.type==="number"&&ho(N,"number",N.value)}switch(H=A?Di(A):window,e){case"focusin":(Sl(H)||H.contentEditable==="true")&&(Ii=H,Ho=A,bt=null);break;case"focusout":bt=Ho=Ii=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,ql(I,t,U);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":ql(I,t,U)}var _;if(Mo)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Ui?bl(e,t)&&(Y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&(yl&&t.locale!=="ko"&&(Ui||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Ui&&(_=ml()):(Oa=U,zo="value"in Oa?Oa.value:Oa.textContent,Ui=!0)),H=yn(A,Y),0<H.length&&(Y=new fl(Y,e,null,t,U),I.push({event:Y,listeners:H}),_?Y.data=_:(_=wl(t),_!==null&&(Y.data=_)))),(_=jm?Am(e,t):Cm(e,t))&&(A=yn(A,"onBeforeInput"),0<A.length&&(U=new fl("onBeforeInput","beforeinput",null,t,U),I.push({event:U,listeners:A}),U.data=_))}Ol(I,a)})}function jt(e,a,t){return{instance:e,listener:a,currentTarget:t}}function yn(e,a){for(var t=a+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=nt(e,t),s!=null&&n.unshift(jt(e,s,o)),s=nt(e,a),s!=null&&n.push(jt(e,s,o))),e=e.return}return n}function qi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hl(e,a,t,n,o){for(var s=a._reactName,d=[];t!==null&&t!==n;){var h=t,g=h.alternate,A=h.stateNode;if(g!==null&&g===n)break;h.tag===5&&A!==null&&(h=A,o?(g=nt(t,s),g!=null&&d.unshift(jt(t,g,h))):o||(g=nt(t,s),g!=null&&d.push(jt(t,g,h)))),t=t.return}d.length!==0&&e.push({event:a,listeners:d})}var Mm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function _l(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(Fm,"")}function vn(e,a,t){if(a=_l(a),_l(e)!==a&&t)throw Error(c(425))}function xn(){}var Jo=null,Ko=null;function Xo(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,Vl=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Vl<"u"?function(e){return Vl.resolve(null).then(e).catch(Hm)}:Zo;function Hm(e){setTimeout(function(){throw e})}function er(e,a){var t=a,n=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(n===0){e.removeChild(o),pt(a);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=o}while(t);pt(a)}function Ha(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function Yl(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return e;a--}else t==="/$"&&a++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),wa="__reactFiber$"+zi,At="__reactProps$"+zi,Na="__reactContainer$"+zi,ar="__reactEvents$"+zi,_m="__reactListeners$"+zi,Vm="__reactHandles$"+zi;function di(e){var a=e[wa];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Na]||t[wa]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Yl(e);e!==null;){if(t=e[wa])return t;e=Yl(e)}return a}e=t,t=e.parentNode}return null}function Ct(e){return e=e[wa]||e[Na],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Di(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function bn(e){return e[At]||null}var ir=[],Li=-1;function _a(e){return{current:e}}function me(e){0>Li||(e.current=ir[Li],ir[Li]=null,Li--)}function de(e,a){Li++,ir[Li]=e.current,e.current=a}var Va={},ze=_a(Va),We=_a(!1),ui=Va;function Pi(e,a){var t=e.type.contextTypes;if(!t)return Va;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===a)return n.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in t)o[s]=a[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function wn(){me(We),me(ze)}function Gl(e,a,t){if(ze.current!==Va)throw Error(c(168));de(ze,a),de(We,t)}function $l(e,a,t){var n=e.stateNode;if(a=a.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var o in n)if(!(o in a))throw Error(c(108,ce(e)||"Unknown",o));return R({},t,n)}function Sn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Va,ui=ze.current,de(ze,e),de(We,We.current),!0}function Ql(e,a,t){var n=e.stateNode;if(!n)throw Error(c(169));t?(e=$l(e,a,ui),n.__reactInternalMemoizedMergedChildContext=e,me(We),me(ze),de(ze,e)):me(We),de(We,t)}var ka=null,jn=!1,tr=!1;function Jl(e){ka===null?ka=[e]:ka.push(e)}function Ym(e){jn=!0,Jl(e)}function Ya(){if(!tr&&ka!==null){tr=!0;var e=0,a=re;try{var t=ka;for(re=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}ka=null,jn=!1}catch(o){throw ka!==null&&(ka=ka.slice(e+1)),Xs(Co,Ya),o}finally{re=a,tr=!1}}return null}var Bi=[],Ri=0,An=null,Cn=0,ia=[],ta=0,mi=null,Ea=1,Ua="";function pi(e,a){Bi[Ri++]=Cn,Bi[Ri++]=An,An=e,Cn=a}function Kl(e,a,t){ia[ta++]=Ea,ia[ta++]=Ua,ia[ta++]=mi,mi=e;var n=Ea;e=Ua;var o=32-da(n)-1;n&=~(1<<o),t+=1;var s=32-da(a)+o;if(30<s){var d=o-o%5;s=(n&(1<<d)-1).toString(32),n>>=d,o-=d,Ea=1<<32-da(a)+o|t<<o|n,Ua=s+e}else Ea=1<<s|t<<o|n,Ua=e}function nr(e){e.return!==null&&(pi(e,1),Kl(e,1,0))}function or(e){for(;e===An;)An=Bi[--Ri],Bi[Ri]=null,Cn=Bi[--Ri],Bi[Ri]=null;for(;e===mi;)mi=ia[--ta],ia[ta]=null,Ua=ia[--ta],ia[ta]=null,Ea=ia[--ta],ia[ta]=null}var Xe=null,Ze=null,he=!1,ma=null;function Xl(e,a){var t=sa(5,null,null,0);t.elementType="DELETED",t.stateNode=a,t.return=e,a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)}function Zl(e,a){switch(e.tag){case 5:var t=e.type;return a=a.nodeType!==1||t.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,Xe=e,Ze=Ha(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,Xe=e,Ze=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(t=mi!==null?{id:Ea,overflow:Ua}:null,e.memoizedState={dehydrated:a,treeContext:t,retryLane:1073741824},t=sa(18,null,null,0),t.stateNode=a,t.return=e,e.child=t,Xe=e,Ze=null,!0):!1;default:return!1}}function rr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sr(e){if(he){var a=Ze;if(a){var t=a;if(!Zl(e,a)){if(rr(e))throw Error(c(418));a=Ha(t.nextSibling);var n=Xe;a&&Zl(e,a)?Xl(n,t):(e.flags=e.flags&-4097|2,he=!1,Xe=e)}}else{if(rr(e))throw Error(c(418));e.flags=e.flags&-4097|2,he=!1,Xe=e}}}function ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Nn(e){if(e!==Xe)return!1;if(!he)return ec(e),he=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!Xo(e.type,e.memoizedProps)),a&&(a=Ze)){if(rr(e))throw ac(),Error(c(418));for(;a;)Xl(e,a),a=Ha(a.nextSibling)}if(ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(a===0){Ze=Ha(e.nextSibling);break e}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++}e=e.nextSibling}Ze=null}}else Ze=Xe?Ha(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=Ze;e;)e=Ha(e.nextSibling)}function Mi(){Ze=Xe=null,he=!1}function lr(e){ma===null?ma=[e]:ma.push(e)}var Gm=le.ReactCurrentBatchConfig;function Nt(e,a,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var n=t.stateNode}if(!n)throw Error(c(147,e));var o=n,s=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===s?a.ref:(a=function(d){var h=o.refs;d===null?delete h[s]:h[s]=d},a._stringRef=s,a)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function kn(e,a){throw e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function ic(e){var a=e._init;return a(e._payload)}function tc(e){function a(S,y){if(e){var j=S.deletions;j===null?(S.deletions=[y],S.flags|=16):j.push(y)}}function t(S,y){if(!e)return null;for(;y!==null;)a(S,y),y=y.sibling;return null}function n(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function o(S,y){return S=ei(S,y),S.index=0,S.sibling=null,S}function s(S,y,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<y?(S.flags|=2,y):j):(S.flags|=2,y)):(S.flags|=1048576,y)}function d(S){return e&&S.alternate===null&&(S.flags|=2),S}function h(S,y,j,T){return y===null||y.tag!==6?(y=Zr(j,S.mode,T),y.return=S,y):(y=o(y,j),y.return=S,y)}function g(S,y,j,T){var O=j.type;return O===Fe?U(S,y,j.props.children,T,j.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Oe&&ic(O)===y.type)?(T=o(y,j.props),T.ref=Nt(S,y,j),T.return=S,T):(T=Kn(j.type,j.key,j.props,null,S.mode,T),T.ref=Nt(S,y,j),T.return=S,T)}function A(S,y,j,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==j.containerInfo||y.stateNode.implementation!==j.implementation?(y=es(j,S.mode,T),y.return=S,y):(y=o(y,j.children||[]),y.return=S,y)}function U(S,y,j,T,O){return y===null||y.tag!==7?(y=wi(j,S.mode,T,O),y.return=S,y):(y=o(y,j),y.return=S,y)}function I(S,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Zr(""+y,S.mode,j),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ke:return j=Kn(y.type,y.key,y.props,null,S.mode,j),j.ref=Nt(S,null,y),j.return=S,j;case Be:return y=es(y,S.mode,j),y.return=S,y;case Oe:var T=y._init;return I(S,T(y._payload),j)}if(at(y)||V(y))return y=wi(y,S.mode,j,null),y.return=S,y;kn(S,y)}return null}function N(S,y,j,T){var O=y!==null?y.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return O!==null?null:h(S,y,""+j,T);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:return j.key===O?g(S,y,j,T):null;case Be:return j.key===O?A(S,y,j,T):null;case Oe:return O=j._init,N(S,y,O(j._payload),T)}if(at(j)||V(j))return O!==null?null:U(S,y,j,T,null);kn(S,j)}return null}function L(S,y,j,T,O){if(typeof T=="string"&&T!==""||typeof T=="number")return S=S.get(j)||null,h(y,S,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ke:return S=S.get(T.key===null?j:T.key)||null,g(y,S,T,O);case Be:return S=S.get(T.key===null?j:T.key)||null,A(y,S,T,O);case Oe:var H=T._init;return L(S,y,j,H(T._payload),O)}if(at(T)||V(T))return S=S.get(j)||null,U(y,S,T,O,null);kn(y,T)}return null}function M(S,y,j,T){for(var O=null,H=null,_=y,Y=y=0,Ie=null;_!==null&&Y<j.length;Y++){_.index>Y?(Ie=_,_=null):Ie=_.sibling;var ie=N(S,_,j[Y],T);if(ie===null){_===null&&(_=Ie);break}e&&_&&ie.alternate===null&&a(S,_),y=s(ie,y,Y),H===null?O=ie:H.sibling=ie,H=ie,_=Ie}if(Y===j.length)return t(S,_),he&&pi(S,Y),O;if(_===null){for(;Y<j.length;Y++)_=I(S,j[Y],T),_!==null&&(y=s(_,y,Y),H===null?O=_:H.sibling=_,H=_);return he&&pi(S,Y),O}for(_=n(S,_);Y<j.length;Y++)Ie=L(_,S,Y,j[Y],T),Ie!==null&&(e&&Ie.alternate!==null&&_.delete(Ie.key===null?Y:Ie.key),y=s(Ie,y,Y),H===null?O=Ie:H.sibling=Ie,H=Ie);return e&&_.forEach(function(ai){return a(S,ai)}),he&&pi(S,Y),O}function F(S,y,j,T){var O=V(j);if(typeof O!="function")throw Error(c(150));if(j=O.call(j),j==null)throw Error(c(151));for(var H=O=null,_=y,Y=y=0,Ie=null,ie=j.next();_!==null&&!ie.done;Y++,ie=j.next()){_.index>Y?(Ie=_,_=null):Ie=_.sibling;var ai=N(S,_,ie.value,T);if(ai===null){_===null&&(_=Ie);break}e&&_&&ai.alternate===null&&a(S,_),y=s(ai,y,Y),H===null?O=ai:H.sibling=ai,H=ai,_=Ie}if(ie.done)return t(S,_),he&&pi(S,Y),O;if(_===null){for(;!ie.done;Y++,ie=j.next())ie=I(S,ie.value,T),ie!==null&&(y=s(ie,y,Y),H===null?O=ie:H.sibling=ie,H=ie);return he&&pi(S,Y),O}for(_=n(S,_);!ie.done;Y++,ie=j.next())ie=L(_,S,Y,ie.value,T),ie!==null&&(e&&ie.alternate!==null&&_.delete(ie.key===null?Y:ie.key),y=s(ie,y,Y),H===null?O=ie:H.sibling=ie,H=ie);return e&&_.forEach(function(Np){return a(S,Np)}),he&&pi(S,Y),O}function we(S,y,j,T){if(typeof j=="object"&&j!==null&&j.type===Fe&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:e:{for(var O=j.key,H=y;H!==null;){if(H.key===O){if(O=j.type,O===Fe){if(H.tag===7){t(S,H.sibling),y=o(H,j.props.children),y.return=S,S=y;break e}}else if(H.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Oe&&ic(O)===H.type){t(S,H.sibling),y=o(H,j.props),y.ref=Nt(S,H,j),y.return=S,S=y;break e}t(S,H);break}else a(S,H);H=H.sibling}j.type===Fe?(y=wi(j.props.children,S.mode,T,j.key),y.return=S,S=y):(T=Kn(j.type,j.key,j.props,null,S.mode,T),T.ref=Nt(S,y,j),T.return=S,S=T)}return d(S);case Be:e:{for(H=j.key;y!==null;){if(y.key===H)if(y.tag===4&&y.stateNode.containerInfo===j.containerInfo&&y.stateNode.implementation===j.implementation){t(S,y.sibling),y=o(y,j.children||[]),y.return=S,S=y;break e}else{t(S,y);break}else a(S,y);y=y.sibling}y=es(j,S.mode,T),y.return=S,S=y}return d(S);case Oe:return H=j._init,we(S,y,H(j._payload),T)}if(at(j))return M(S,y,j,T);if(V(j))return F(S,y,j,T);kn(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,y!==null&&y.tag===6?(t(S,y.sibling),y=o(y,j),y.return=S,S=y):(t(S,y),y=Zr(j,S.mode,T),y.return=S,S=y),d(S)):t(S,y)}return we}var Fi=tc(!0),nc=tc(!1),En=_a(null),Un=null,Oi=null,cr=null;function dr(){cr=Oi=Un=null}function ur(e){var a=En.current;me(En),e._currentValue=a}function mr(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Wi(e,a){Un=e,cr=Oi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&a)!==0&&(_e=!0),e.firstContext=null)}function na(e){var a=e._currentValue;if(cr!==e)if(e={context:e,memoizedValue:a,next:null},Oi===null){if(Un===null)throw Error(c(308));Oi=e,Un.dependencies={lanes:0,firstContext:e}}else Oi=Oi.next=e;return a}var hi=null;function pr(e){hi===null?hi=[e]:hi.push(e)}function oc(e,a,t,n){var o=a.interleaved;return o===null?(t.next=t,pr(a)):(t.next=o.next,o.next=t),a.interleaved=t,Ia(e,n)}function Ia(e,a){e.lanes|=a;var t=e.alternate;for(t!==null&&(t.lanes|=a),t=e,e=e.return;e!==null;)e.childLanes|=a,t=e.alternate,t!==null&&(t.childLanes|=a),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ga=!1;function hr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ta(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function $a(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Z&2)!==0){var o=n.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a,Ia(e,t)}return o=n.interleaved,o===null?(a.next=a,pr(n)):(a.next=o.next,o.next=a),n.interleaved=a,Ia(e,t)}function In(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194240)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Eo(e,t)}}function sc(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?o=s=d:s=s.next=d,t=t.next}while(t!==null);s===null?o=s=a:s=s.next=a}else o=s=a;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}function Tn(e,a,t,n){var o=e.updateQueue;Ga=!1;var s=o.firstBaseUpdate,d=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var g=h,A=g.next;g.next=null,d===null?s=A:d.next=A,d=g;var U=e.alternate;U!==null&&(U=U.updateQueue,h=U.lastBaseUpdate,h!==d&&(h===null?U.firstBaseUpdate=A:h.next=A,U.lastBaseUpdate=g))}if(s!==null){var I=o.baseState;d=0,U=A=g=null,h=s;do{var N=h.lane,L=h.eventTime;if((n&N)===N){U!==null&&(U=U.next={eventTime:L,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var M=e,F=h;switch(N=a,L=t,F.tag){case 1:if(M=F.payload,typeof M=="function"){I=M.call(L,I,N);break e}I=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=F.payload,N=typeof M=="function"?M.call(L,I,N):M,N==null)break e;I=R({},I,N);break e;case 2:Ga=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,N=o.effects,N===null?o.effects=[h]:N.push(h))}else L={eventTime:L,lane:N,tag:h.tag,payload:h.payload,callback:h.callback,next:null},U===null?(A=U=L,g=I):U=U.next=L,d|=N;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;N=h,h=N.next,N.next=null,o.lastBaseUpdate=N,o.shared.pending=null}}while(!0);if(U===null&&(g=I),o.baseState=g,o.firstBaseUpdate=A,o.lastBaseUpdate=U,a=o.shared.interleaved,a!==null){o=a;do d|=o.lane,o=o.next;while(o!==a)}else s===null&&(o.shared.lanes=0);yi|=d,e.lanes=d,e.memoizedState=I}}function lc(e,a,t){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var n=e[a],o=n.callback;if(o!==null){if(n.callback=null,n=t,typeof o!="function")throw Error(c(191,o));o.call(n)}}}var kt={},Sa=_a(kt),Et=_a(kt),Ut=_a(kt);function fi(e){if(e===kt)throw Error(c(174));return e}function fr(e,a){switch(de(Ut,a),de(Et,e),de(Sa,kt),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:go(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=go(a,e)}me(Sa),de(Sa,a)}function Hi(){me(Sa),me(Et),me(Ut)}function cc(e){fi(Ut.current);var a=fi(Sa.current),t=go(a,e.type);a!==t&&(de(Et,e),de(Sa,t))}function gr(e){Et.current===e&&(me(Sa),me(Et))}var fe=_a(0);function qn(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var yr=[];function vr(){for(var e=0;e<yr.length;e++)yr[e]._workInProgressVersionPrimary=null;yr.length=0}var zn=le.ReactCurrentDispatcher,xr=le.ReactCurrentBatchConfig,gi=0,ge=null,Ce=null,Ee=null,Dn=!1,It=!1,Tt=0,$m=0;function De(){throw Error(c(321))}function br(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ua(e[t],a[t]))return!1;return!0}function wr(e,a,t,n,o,s){if(gi=s,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,zn.current=e===null||e.memoizedState===null?Xm:Zm,e=t(n,o),It){s=0;do{if(It=!1,Tt=0,25<=s)throw Error(c(301));s+=1,Ee=Ce=null,a.updateQueue=null,zn.current=ep,e=t(n,o)}while(It)}if(zn.current=Bn,a=Ce!==null&&Ce.next!==null,gi=0,Ee=Ce=ge=null,Dn=!1,a)throw Error(c(300));return e}function Sr(){var e=Tt!==0;return Tt=0,e}function ja(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ge.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function oa(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var a=Ee===null?ge.memoizedState:Ee.next;if(a!==null)Ee=a,Ce=e;else{if(e===null)throw Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ee===null?ge.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function qt(e,a){return typeof a=="function"?a(e):a}function jr(e){var a=oa(),t=a.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var n=Ce,o=n.baseQueue,s=t.pending;if(s!==null){if(o!==null){var d=o.next;o.next=s.next,s.next=d}n.baseQueue=o=s,t.pending=null}if(o!==null){s=o.next,n=n.baseState;var h=d=null,g=null,A=s;do{var U=A.lane;if((gi&U)===U)g!==null&&(g=g.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),n=A.hasEagerState?A.eagerState:e(n,A.action);else{var I={lane:U,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};g===null?(h=g=I,d=n):g=g.next=I,ge.lanes|=U,yi|=U}A=A.next}while(A!==null&&A!==s);g===null?d=n:g.next=h,ua(n,a.memoizedState)||(_e=!0),a.memoizedState=n,a.baseState=d,a.baseQueue=g,t.lastRenderedState=n}if(e=t.interleaved,e!==null){o=e;do s=o.lane,ge.lanes|=s,yi|=s,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[a.memoizedState,t.dispatch]}function Ar(e){var a=oa(),t=a.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,s=a.memoizedState;if(o!==null){t.pending=null;var d=o=o.next;do s=e(s,d.action),d=d.next;while(d!==o);ua(s,a.memoizedState)||(_e=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),t.lastRenderedState=s}return[s,n]}function dc(){}function uc(e,a){var t=ge,n=oa(),o=a(),s=!ua(n.memoizedState,o);if(s&&(n.memoizedState=o,_e=!0),n=n.queue,Cr(hc.bind(null,t,n,e),[e]),n.getSnapshot!==a||s||Ee!==null&&Ee.memoizedState.tag&1){if(t.flags|=2048,zt(9,pc.bind(null,t,n,o,a),void 0,null),Ue===null)throw Error(c(349));(gi&30)!==0||mc(t,a,o)}return o}function mc(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=ge.updateQueue,a===null?(a={lastEffect:null,stores:null},ge.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function pc(e,a,t,n){a.value=t,a.getSnapshot=n,fc(a)&&gc(e)}function hc(e,a,t){return t(function(){fc(a)&&gc(e)})}function fc(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ua(e,t)}catch{return!0}}function gc(e){var a=Ia(e,1);a!==null&&ga(a,e,1,-1)}function yc(e){var a=ja();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},a.queue=e,e=e.dispatch=Km.bind(null,ge,e),[a.memoizedState,e]}function zt(e,a,t,n){return e={tag:e,create:a,destroy:t,deps:n,next:null},a=ge.updateQueue,a===null?(a={lastEffect:null,stores:null},ge.updateQueue=a,a.lastEffect=e.next=e):(t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e)),e}function vc(){return oa().memoizedState}function Ln(e,a,t,n){var o=ja();ge.flags|=e,o.memoizedState=zt(1|a,t,void 0,n===void 0?null:n)}function Pn(e,a,t,n){var o=oa();n=n===void 0?null:n;var s=void 0;if(Ce!==null){var d=Ce.memoizedState;if(s=d.destroy,n!==null&&br(n,d.deps)){o.memoizedState=zt(a,t,s,n);return}}ge.flags|=e,o.memoizedState=zt(1|a,t,s,n)}function xc(e,a){return Ln(8390656,8,e,a)}function Cr(e,a){return Pn(2048,8,e,a)}function bc(e,a){return Pn(4,2,e,a)}function wc(e,a){return Pn(4,4,e,a)}function Sc(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function jc(e,a,t){return t=t!=null?t.concat([e]):null,Pn(4,4,Sc.bind(null,a,e),t)}function Nr(){}function Ac(e,a){var t=oa();a=a===void 0?null:a;var n=t.memoizedState;return n!==null&&a!==null&&br(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function Cc(e,a){var t=oa();a=a===void 0?null:a;var n=t.memoizedState;return n!==null&&a!==null&&br(a,n[1])?n[0]:(e=e(),t.memoizedState=[e,a],e)}function Nc(e,a,t){return(gi&21)===0?(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=t):(ua(t,a)||(t=il(),ge.lanes|=t,yi|=t,e.baseState=!0),a)}function Qm(e,a){var t=re;re=t!==0&&4>t?t:4,e(!0);var n=xr.transition;xr.transition={};try{e(!1),a()}finally{re=t,xr.transition=n}}function kc(){return oa().memoizedState}function Jm(e,a,t){var n=Xa(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},Ec(e))Uc(a,t);else if(t=oc(e,a,t,n),t!==null){var o=Me();ga(t,e,n,o),Ic(t,a,n)}}function Km(e,a,t){var n=Xa(e),o={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Uc(a,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var d=a.lastRenderedState,h=s(d,t);if(o.hasEagerState=!0,o.eagerState=h,ua(h,d)){var g=a.interleaved;g===null?(o.next=o,pr(a)):(o.next=g.next,g.next=o),a.interleaved=o;return}}catch{}finally{}t=oc(e,a,o,n),t!==null&&(o=Me(),ga(t,e,n,o),Ic(t,a,n))}}function Ec(e){var a=e.alternate;return e===ge||a!==null&&a===ge}function Uc(e,a){It=Dn=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Ic(e,a,t){if((t&4194240)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Eo(e,t)}}var Bn={readContext:na,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Xm={readContext:na,useCallback:function(e,a){return ja().memoizedState=[e,a===void 0?null:a],e},useContext:na,useEffect:xc,useImperativeHandle:function(e,a,t){return t=t!=null?t.concat([e]):null,Ln(4194308,4,Sc.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Ln(4194308,4,e,a)},useInsertionEffect:function(e,a){return Ln(4,2,e,a)},useMemo:function(e,a){var t=ja();return a=a===void 0?null:a,e=e(),t.memoizedState=[e,a],e},useReducer:function(e,a,t){var n=ja();return a=t!==void 0?t(a):a,n.memoizedState=n.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Jm.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var a=ja();return e={current:e},a.memoizedState=e},useState:yc,useDebugValue:Nr,useDeferredValue:function(e){return ja().memoizedState=e},useTransition:function(){var e=yc(!1),a=e[0];return e=Qm.bind(null,e[1]),ja().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,t){var n=ge,o=ja();if(he){if(t===void 0)throw Error(c(407));t=t()}else{if(t=a(),Ue===null)throw Error(c(349));(gi&30)!==0||mc(n,a,t)}o.memoizedState=t;var s={value:t,getSnapshot:a};return o.queue=s,xc(hc.bind(null,n,s,e),[e]),n.flags|=2048,zt(9,pc.bind(null,n,s,t,a),void 0,null),t},useId:function(){var e=ja(),a=Ue.identifierPrefix;if(he){var t=Ua,n=Ea;t=(n&~(1<<32-da(n)-1)).toString(32)+t,a=":"+a+"R"+t,t=Tt++,0<t&&(a+="H"+t.toString(32)),a+=":"}else t=$m++,a=":"+a+"r"+t.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},Zm={readContext:na,useCallback:Ac,useContext:na,useEffect:Cr,useImperativeHandle:jc,useInsertionEffect:bc,useLayoutEffect:wc,useMemo:Cc,useReducer:jr,useRef:vc,useState:function(){return jr(qt)},useDebugValue:Nr,useDeferredValue:function(e){var a=oa();return Nc(a,Ce.memoizedState,e)},useTransition:function(){var e=jr(qt)[0],a=oa().memoizedState;return[e,a]},useMutableSource:dc,useSyncExternalStore:uc,useId:kc,unstable_isNewReconciler:!1},ep={readContext:na,useCallback:Ac,useContext:na,useEffect:Cr,useImperativeHandle:jc,useInsertionEffect:bc,useLayoutEffect:wc,useMemo:Cc,useReducer:Ar,useRef:vc,useState:function(){return Ar(qt)},useDebugValue:Nr,useDeferredValue:function(e){var a=oa();return Ce===null?a.memoizedState=e:Nc(a,Ce.memoizedState,e)},useTransition:function(){var e=Ar(qt)[0],a=oa().memoizedState;return[e,a]},useMutableSource:dc,useSyncExternalStore:uc,useId:kc,unstable_isNewReconciler:!1};function pa(e,a){if(e&&e.defaultProps){a=R({},a),e=e.defaultProps;for(var t in e)a[t]===void 0&&(a[t]=e[t]);return a}return a}function kr(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:R({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Rn={isMounted:function(e){return(e=e._reactInternals)?ci(e)===e:!1},enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Me(),o=Xa(e),s=Ta(n,o);s.payload=a,t!=null&&(s.callback=t),a=$a(e,s,o),a!==null&&(ga(a,e,o,n),In(a,e,o))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Me(),o=Xa(e),s=Ta(n,o);s.tag=1,s.payload=a,t!=null&&(s.callback=t),a=$a(e,s,o),a!==null&&(ga(a,e,o,n),In(a,e,o))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Me(),n=Xa(e),o=Ta(t,n);o.tag=2,a!=null&&(o.callback=a),a=$a(e,o,n),a!==null&&(ga(a,e,n,t),In(a,e,n))}};function Tc(e,a,t,n,o,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,d):a.prototype&&a.prototype.isPureReactComponent?!xt(t,n)||!xt(o,s):!0}function qc(e,a,t){var n=!1,o=Va,s=a.contextType;return typeof s=="object"&&s!==null?s=na(s):(o=He(a)?ui:ze.current,n=a.contextTypes,s=(n=n!=null)?Pi(e,o):Va),a=new a(t,s),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rn,e.stateNode=a,a._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),a}function zc(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Rn.enqueueReplaceState(a,a.state,null)}function Er(e,a,t,n){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},hr(e);var s=a.contextType;typeof s=="object"&&s!==null?o.context=na(s):(s=He(a)?ui:ze.current,o.context=Pi(e,s)),o.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(kr(e,a,s,t),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(a=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),a!==o.state&&Rn.enqueueReplaceState(o,o.state,null),Tn(e,t,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function _i(e,a){try{var t="",n=a;do t+=ee(n),n=n.return;while(n);var o=t}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:a,stack:o,digest:null}}function Ur(e,a,t){return{value:e,source:null,stack:t??null,digest:a??null}}function Ir(e,a){try{console.error(a.value)}catch(t){setTimeout(function(){throw t})}}var ap=typeof WeakMap=="function"?WeakMap:Map;function Dc(e,a,t){t=Ta(-1,t),t.tag=3,t.payload={element:null};var n=a.value;return t.callback=function(){Vn||(Vn=!0,Vr=n),Ir(e,a)},t}function Lc(e,a,t){t=Ta(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=a.value;t.payload=function(){return n(o)},t.callback=function(){Ir(e,a)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ir(e,a),typeof n!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})}),t}function Pc(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new ap;var o=new Set;n.set(a,o)}else o=n.get(a),o===void 0&&(o=new Set,n.set(a,o));o.has(t)||(o.add(t),e=fp.bind(null,e,a,t),a.then(e,e))}function Bc(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Rc(e,a,t,n,o){return(e.mode&1)===0?(e===a?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(a=Ta(-1,1),a.tag=2,$a(t,a,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ip=le.ReactCurrentOwner,_e=!1;function Re(e,a,t,n){a.child=e===null?nc(a,null,t,n):Fi(a,e.child,t,n)}function Mc(e,a,t,n,o){t=t.render;var s=a.ref;return Wi(a,o),n=wr(e,a,t,n,s,o),t=Sr(),e!==null&&!_e?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~o,qa(e,a,o)):(he&&t&&nr(a),a.flags|=1,Re(e,a,n,o),a.child)}function Fc(e,a,t,n,o){if(e===null){var s=t.type;return typeof s=="function"&&!Xr(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(a.tag=15,a.type=s,Oc(e,a,s,n,o)):(e=Kn(t.type,null,n,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,(e.lanes&o)===0){var d=s.memoizedProps;if(t=t.compare,t=t!==null?t:xt,t(d,n)&&e.ref===a.ref)return qa(e,a,o)}return a.flags|=1,e=ei(s,n),e.ref=a.ref,e.return=a,a.child=e}function Oc(e,a,t,n,o){if(e!==null){var s=e.memoizedProps;if(xt(s,n)&&e.ref===a.ref)if(_e=!1,a.pendingProps=n=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(_e=!0);else return a.lanes=e.lanes,qa(e,a,o)}return Tr(e,a,t,n,o)}function Wc(e,a,t){var n=a.pendingProps,o=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Yi,ea),ea|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,de(Yi,ea),ea|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:t,de(Yi,ea),ea|=n}else s!==null?(n=s.baseLanes|t,a.memoizedState=null):n=t,de(Yi,ea),ea|=n;return Re(e,a,o,t),a.child}function Hc(e,a){var t=a.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(a.flags|=512,a.flags|=2097152)}function Tr(e,a,t,n,o){var s=He(t)?ui:ze.current;return s=Pi(a,s),Wi(a,o),t=wr(e,a,t,n,s,o),n=Sr(),e!==null&&!_e?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~o,qa(e,a,o)):(he&&n&&nr(a),a.flags|=1,Re(e,a,t,o),a.child)}function _c(e,a,t,n,o){if(He(t)){var s=!0;Sn(a)}else s=!1;if(Wi(a,o),a.stateNode===null)Fn(e,a),qc(a,t,n),Er(a,t,n,o),n=!0;else if(e===null){var d=a.stateNode,h=a.memoizedProps;d.props=h;var g=d.context,A=t.contextType;typeof A=="object"&&A!==null?A=na(A):(A=He(t)?ui:ze.current,A=Pi(a,A));var U=t.getDerivedStateFromProps,I=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function";I||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==n||g!==A)&&zc(a,d,n,A),Ga=!1;var N=a.memoizedState;d.state=N,Tn(a,n,d,o),g=a.memoizedState,h!==n||N!==g||We.current||Ga?(typeof U=="function"&&(kr(a,t,U,n),g=a.memoizedState),(h=Ga||Tc(a,t,h,n,N,g,A))?(I||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=g),d.props=n,d.state=g,d.context=A,n=h):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{d=a.stateNode,rc(e,a),h=a.memoizedProps,A=a.type===a.elementType?h:pa(a.type,h),d.props=A,I=a.pendingProps,N=d.context,g=t.contextType,typeof g=="object"&&g!==null?g=na(g):(g=He(t)?ui:ze.current,g=Pi(a,g));var L=t.getDerivedStateFromProps;(U=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==I||N!==g)&&zc(a,d,n,g),Ga=!1,N=a.memoizedState,d.state=N,Tn(a,n,d,o);var M=a.memoizedState;h!==I||N!==M||We.current||Ga?(typeof L=="function"&&(kr(a,t,L,n),M=a.memoizedState),(A=Ga||Tc(a,t,A,n,N,M,g)||!1)?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,M,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,M,g)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=M),d.props=n,d.state=M,d.context=g,n=A):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),n=!1)}return qr(e,a,t,n,s,o)}function qr(e,a,t,n,o,s){Hc(e,a);var d=(a.flags&128)!==0;if(!n&&!d)return o&&Ql(a,t,!1),qa(e,a,s);n=a.stateNode,ip.current=a;var h=d&&typeof t.getDerivedStateFromError!="function"?null:n.render();return a.flags|=1,e!==null&&d?(a.child=Fi(a,e.child,null,s),a.child=Fi(a,null,h,s)):Re(e,a,h,s),a.memoizedState=n.state,o&&Ql(a,t,!0),a.child}function Vc(e){var a=e.stateNode;a.pendingContext?Gl(e,a.pendingContext,a.pendingContext!==a.context):a.context&&Gl(e,a.context,!1),fr(e,a.containerInfo)}function Yc(e,a,t,n,o){return Mi(),lr(o),a.flags|=256,Re(e,a,t,n),a.child}var zr={dehydrated:null,treeContext:null,retryLane:0};function Dr(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gc(e,a,t){var n=a.pendingProps,o=fe.current,s=!1,d=(a.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(s=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),de(fe,o&1),e===null)return sr(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((a.mode&1)===0?a.lanes=1:e.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(d=n.children,e=n.fallback,s?(n=a.mode,s=a.child,d={mode:"hidden",children:d},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=Xn(d,n,0,null),e=wi(e,n,t,null),s.return=a,e.return=a,s.sibling=e,a.child=s,a.child.memoizedState=Dr(t),a.memoizedState=zr,e):Lr(a,d));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return tp(e,a,d,n,h,o,t);if(s){s=n.fallback,d=a.mode,o=e.child,h=o.sibling;var g={mode:"hidden",children:n.children};return(d&1)===0&&a.child!==o?(n=a.child,n.childLanes=0,n.pendingProps=g,a.deletions=null):(n=ei(o,g),n.subtreeFlags=o.subtreeFlags&14680064),h!==null?s=ei(h,s):(s=wi(s,d,t,null),s.flags|=2),s.return=a,n.return=a,n.sibling=s,a.child=n,n=s,s=a.child,d=e.child.memoizedState,d=d===null?Dr(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~t,a.memoizedState=zr,n}return s=e.child,e=s.sibling,n=ei(s,{mode:"visible",children:n.children}),(a.mode&1)===0&&(n.lanes=t),n.return=a,n.sibling=null,e!==null&&(t=a.deletions,t===null?(a.deletions=[e],a.flags|=16):t.push(e)),a.child=n,a.memoizedState=null,n}function Lr(e,a){return a=Xn({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Mn(e,a,t,n){return n!==null&&lr(n),Fi(a,e.child,null,t),e=Lr(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function tp(e,a,t,n,o,s,d){if(t)return a.flags&256?(a.flags&=-257,n=Ur(Error(c(422))),Mn(e,a,d,n)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(s=n.fallback,o=a.mode,n=Xn({mode:"visible",children:n.children},o,0,null),s=wi(s,o,d,null),s.flags|=2,n.return=a,s.return=a,n.sibling=s,a.child=n,(a.mode&1)!==0&&Fi(a,e.child,null,d),a.child.memoizedState=Dr(d),a.memoizedState=zr,s);if((a.mode&1)===0)return Mn(e,a,d,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var h=n.dgst;return n=h,s=Error(c(419)),n=Ur(s,n,void 0),Mn(e,a,d,n)}if(h=(d&e.childLanes)!==0,_e||h){if(n=Ue,n!==null){switch(d&-d){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|d))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Ia(e,o),ga(n,e,o,-1))}return Kr(),n=Ur(Error(c(421))),Mn(e,a,d,n)}return o.data==="$?"?(a.flags|=128,a.child=e.child,a=gp.bind(null,e),o._reactRetry=a,null):(e=s.treeContext,Ze=Ha(o.nextSibling),Xe=a,he=!0,ma=null,e!==null&&(ia[ta++]=Ea,ia[ta++]=Ua,ia[ta++]=mi,Ea=e.id,Ua=e.overflow,mi=a),a=Lr(a,n.children),a.flags|=4096,a)}function $c(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),mr(e.return,a,t)}function Pr(e,a,t,n,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=t,s.tailMode=o)}function Qc(e,a,t){var n=a.pendingProps,o=n.revealOrder,s=n.tail;if(Re(e,a,n.children,t),n=fe.current,(n&2)!==0)n=n&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,t,a);else if(e.tag===19)$c(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(de(fe,n),(a.mode&1)===0)a.memoizedState=null;else switch(o){case"forwards":for(t=a.child,o=null;t!==null;)e=t.alternate,e!==null&&qn(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),Pr(a,!1,o,t,s);break;case"backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&qn(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Pr(a,!0,t,null,s);break;case"together":Pr(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Fn(e,a){(a.mode&1)===0&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function qa(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),yi|=a.lanes,(t&a.childLanes)===0)return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,t=ei(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=ei(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function np(e,a,t){switch(a.tag){case 3:Vc(a),Mi();break;case 5:cc(a);break;case 1:He(a.type)&&Sn(a);break;case 4:fr(a,a.stateNode.containerInfo);break;case 10:var n=a.type._context,o=a.memoizedProps.value;de(En,n._currentValue),n._currentValue=o;break;case 13:if(n=a.memoizedState,n!==null)return n.dehydrated!==null?(de(fe,fe.current&1),a.flags|=128,null):(t&a.child.childLanes)!==0?Gc(e,a,t):(de(fe,fe.current&1),e=qa(e,a,t),e!==null?e.sibling:null);de(fe,fe.current&1);break;case 19:if(n=(t&a.childLanes)!==0,(e.flags&128)!==0){if(n)return Qc(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),de(fe,fe.current),n)break;return null;case 22:case 23:return a.lanes=0,Wc(e,a,t)}return qa(e,a,t)}var Jc,Br,Kc,Xc;Jc=function(e,a){for(var t=a.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Br=function(){},Kc=function(e,a,t,n){var o=e.memoizedProps;if(o!==n){e=a.stateNode,fi(Sa.current);var s=null;switch(t){case"input":o=mo(e,o),n=mo(e,n),s=[];break;case"select":o=R({},o,{value:void 0}),n=R({},n,{value:void 0}),s=[];break;case"textarea":o=fo(e,o),n=fo(e,n),s=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=xn)}yo(t,n);var d;t=null;for(A in o)if(!n.hasOwnProperty(A)&&o.hasOwnProperty(A)&&o[A]!=null)if(A==="style"){var h=o[A];for(d in h)h.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(p.hasOwnProperty(A)?s||(s=[]):(s=s||[]).push(A,null));for(A in n){var g=n[A];if(h=o!=null?o[A]:void 0,n.hasOwnProperty(A)&&g!==h&&(g!=null||h!=null))if(A==="style")if(h){for(d in h)!h.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in g)g.hasOwnProperty(d)&&h[d]!==g[d]&&(t||(t={}),t[d]=g[d])}else t||(s||(s=[]),s.push(A,t)),t=g;else A==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(s=s||[]).push(A,g)):A==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(A,""+g):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(p.hasOwnProperty(A)?(g!=null&&A==="onScroll"&&ue("scroll",e),s||h===g||(s=[])):(s=s||[]).push(A,g))}t&&(s=s||[]).push("style",t);var A=s;(a.updateQueue=A)&&(a.flags|=4)}},Xc=function(e,a,t,n){t!==n&&(a.flags|=4)};function Dt(e,a){if(!he)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Le(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function op(e,a,t){var n=a.pendingProps;switch(or(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(a),null;case 1:return He(a.type)&&wn(),Le(a),null;case 3:return n=a.stateNode,Hi(),me(We),me(ze),vr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Nn(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ma!==null&&($r(ma),ma=null))),Br(e,a),Le(a),null;case 5:gr(a);var o=fi(Ut.current);if(t=a.type,e!==null&&a.stateNode!=null)Kc(e,a,t,n,o),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!n){if(a.stateNode===null)throw Error(c(166));return Le(a),null}if(e=fi(Sa.current),Nn(a)){n=a.stateNode,t=a.type;var s=a.memoizedProps;switch(n[wa]=a,n[At]=s,e=(a.mode&1)!==0,t){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(o=0;o<wt.length;o++)ue(wt[o],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":qs(n,s),ue("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ue("invalid",n);break;case"textarea":Ls(n,s),ue("invalid",n)}yo(t,s),o=null;for(var d in s)if(s.hasOwnProperty(d)){var h=s[d];d==="children"?typeof h=="string"?n.textContent!==h&&(s.suppressHydrationWarning!==!0&&vn(n.textContent,h,e),o=["children",h]):typeof h=="number"&&n.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&vn(n.textContent,h,e),o=["children",""+h]):p.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&ue("scroll",n)}switch(t){case"input":$t(n),Ds(n,s,!0);break;case"textarea":$t(n),Bs(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=xn)}n=o,a.updateQueue=n,n!==null&&(a.flags|=4)}else{d=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(t,{is:n.is}):(e=d.createElement(t),t==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,t),e[wa]=a,e[At]=n,Jc(e,a,!1,!1),a.stateNode=e;e:{switch(d=vo(t,n),t){case"dialog":ue("cancel",e),ue("close",e),o=n;break;case"iframe":case"object":case"embed":ue("load",e),o=n;break;case"video":case"audio":for(o=0;o<wt.length;o++)ue(wt[o],e);o=n;break;case"source":ue("error",e),o=n;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=n;break;case"details":ue("toggle",e),o=n;break;case"input":qs(e,n),o=mo(e,n),ue("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=R({},n,{value:void 0}),ue("invalid",e);break;case"textarea":Ls(e,n),o=fo(e,n),ue("invalid",e);break;default:o=n}yo(t,o),h=o;for(s in h)if(h.hasOwnProperty(s)){var g=h[s];s==="style"?Os(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Ms(e,g)):s==="children"?typeof g=="string"?(t!=="textarea"||g!=="")&&it(e,g):typeof g=="number"&&it(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(p.hasOwnProperty(s)?g!=null&&s==="onScroll"&&ue("scroll",e):g!=null&&ne(e,s,g,d))}switch(t){case"input":$t(e),Ds(e,n,!1);break;case"textarea":$t(e),Bs(e);break;case"option":n.value!=null&&e.setAttribute("value",""+oe(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Ai(e,!!n.multiple,s,!1):n.defaultValue!=null&&Ai(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xn)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Le(a),null;case 6:if(e&&a.stateNode!=null)Xc(e,a,e.memoizedProps,n);else{if(typeof n!="string"&&a.stateNode===null)throw Error(c(166));if(t=fi(Ut.current),fi(Sa.current),Nn(a)){if(n=a.stateNode,t=a.memoizedProps,n[wa]=a,(s=n.nodeValue!==t)&&(e=Xe,e!==null))switch(e.tag){case 3:vn(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vn(n.nodeValue,t,(e.mode&1)!==0)}s&&(a.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[wa]=a,a.stateNode=n}return Le(a),null;case 13:if(me(fe),n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&Ze!==null&&(a.mode&1)!==0&&(a.flags&128)===0)ac(),Mi(),a.flags|=98560,s=!1;else if(s=Nn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[wa]=a}else Mi(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Le(a),s=!1}else ma!==null&&($r(ma),ma=null),s=!0;if(!s)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=t,a):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(a.child.flags|=8192,(a.mode&1)!==0&&(e===null||(fe.current&1)!==0?Ne===0&&(Ne=3):Kr())),a.updateQueue!==null&&(a.flags|=4),Le(a),null);case 4:return Hi(),Br(e,a),e===null&&St(a.stateNode.containerInfo),Le(a),null;case 10:return ur(a.type._context),Le(a),null;case 17:return He(a.type)&&wn(),Le(a),null;case 19:if(me(fe),s=a.memoizedState,s===null)return Le(a),null;if(n=(a.flags&128)!==0,d=s.rendering,d===null)if(n)Dt(s,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=qn(e),d!==null){for(a.flags|=128,Dt(s,!1),n=d.updateQueue,n!==null&&(a.updateQueue=n,a.flags|=4),a.subtreeFlags=0,n=t,t=a.child;t!==null;)s=t,e=n,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return de(fe,fe.current&1|2),a.child}e=e.sibling}s.tail!==null&&be()>Gi&&(a.flags|=128,n=!0,Dt(s,!1),a.lanes=4194304)}else{if(!n)if(e=qn(d),e!==null){if(a.flags|=128,n=!0,t=e.updateQueue,t!==null&&(a.updateQueue=t,a.flags|=4),Dt(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!he)return Le(a),null}else 2*be()-s.renderingStartTime>Gi&&t!==1073741824&&(a.flags|=128,n=!0,Dt(s,!1),a.lanes=4194304);s.isBackwards?(d.sibling=a.child,a.child=d):(t=s.last,t!==null?t.sibling=d:a.child=d,s.last=d)}return s.tail!==null?(a=s.tail,s.rendering=a,s.tail=a.sibling,s.renderingStartTime=be(),a.sibling=null,t=fe.current,de(fe,n?t&1|2:t&1),a):(Le(a),null);case 22:case 23:return Jr(),n=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(a.flags|=8192),n&&(a.mode&1)!==0?(ea&1073741824)!==0&&(Le(a),a.subtreeFlags&6&&(a.flags|=8192)):Le(a),null;case 24:return null;case 25:return null}throw Error(c(156,a.tag))}function rp(e,a){switch(or(a),a.tag){case 1:return He(a.type)&&wn(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Hi(),me(We),me(ze),vr(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 5:return gr(a),null;case 13:if(me(fe),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));Mi()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return me(fe),null;case 4:return Hi(),null;case 10:return ur(a.type._context),null;case 22:case 23:return Jr(),null;case 24:return null;default:return null}}var On=!1,Pe=!1,sp=typeof WeakSet=="function"?WeakSet:Set,P=null;function Vi(e,a){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){ve(e,a,n)}else t.current=null}function Rr(e,a,t){try{t()}catch(n){ve(e,a,n)}}var Zc=!1;function lp(e,a){if(Jo=sn,e=Tl(),Wo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var d=0,h=-1,g=-1,A=0,U=0,I=e,N=null;a:for(;;){for(var L;I!==t||o!==0&&I.nodeType!==3||(h=d+o),I!==s||n!==0&&I.nodeType!==3||(g=d+n),I.nodeType===3&&(d+=I.nodeValue.length),(L=I.firstChild)!==null;)N=I,I=L;for(;;){if(I===e)break a;if(N===t&&++A===o&&(h=d),N===s&&++U===n&&(g=d),(L=I.nextSibling)!==null)break;I=N,N=I.parentNode}I=L}t=h===-1||g===-1?null:{start:h,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ko={focusedElem:e,selectionRange:t},sn=!1,P=a;P!==null;)if(a=P,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,P=e;else for(;P!==null;){a=P;try{var M=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var F=M.memoizedProps,we=M.memoizedState,S=a.stateNode,y=S.getSnapshotBeforeUpdate(a.elementType===a.type?F:pa(a.type,F),we);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var j=a.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(T){ve(a,a.return,T)}if(e=a.sibling,e!==null){e.return=a.return,P=e;break}P=a.return}return M=Zc,Zc=!1,M}function Lt(e,a,t){var n=a.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Rr(a,t,s)}o=o.next}while(o!==n)}}function Wn(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==a)}}function Mr(e){var a=e.ref;if(a!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof a=="function"?a(e):a.current=e}}function ed(e){var a=e.alternate;a!==null&&(e.alternate=null,ed(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[wa],delete a[At],delete a[ar],delete a[_m],delete a[Vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fr(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.nodeType===8?t.parentNode.insertBefore(e,a):t.insertBefore(e,a):(t.nodeType===8?(a=t.parentNode,a.insertBefore(e,t)):(a=t,a.appendChild(e)),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=xn));else if(n!==4&&(e=e.child,e!==null))for(Fr(e,a,t),e=e.sibling;e!==null;)Fr(e,a,t),e=e.sibling}function Or(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Or(e,a,t),e=e.sibling;e!==null;)Or(e,a,t),e=e.sibling}var Te=null,ha=!1;function Qa(e,a,t){for(t=t.child;t!==null;)td(e,a,t),t=t.sibling}function td(e,a,t){if(ba&&typeof ba.onCommitFiberUnmount=="function")try{ba.onCommitFiberUnmount(en,t)}catch{}switch(t.tag){case 5:Pe||Vi(t,a);case 6:var n=Te,o=ha;Te=null,Qa(e,a,t),Te=n,ha=o,Te!==null&&(ha?(e=Te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Te.removeChild(t.stateNode));break;case 18:Te!==null&&(ha?(e=Te,t=t.stateNode,e.nodeType===8?er(e.parentNode,t):e.nodeType===1&&er(e,t),pt(e)):er(Te,t.stateNode));break;case 4:n=Te,o=ha,Te=t.stateNode.containerInfo,ha=!0,Qa(e,a,t),Te=n,ha=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var s=o,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&Rr(t,a,d),o=o.next}while(o!==n)}Qa(e,a,t);break;case 1:if(!Pe&&(Vi(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(h){ve(t,a,h)}Qa(e,a,t);break;case 21:Qa(e,a,t);break;case 22:t.mode&1?(Pe=(n=Pe)||t.memoizedState!==null,Qa(e,a,t),Pe=n):Qa(e,a,t);break;default:Qa(e,a,t)}}function nd(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new sp),a.forEach(function(n){var o=yp.bind(null,e,n);t.has(n)||(t.add(n),n.then(o,o))})}}function fa(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];try{var s=e,d=a,h=d;e:for(;h!==null;){switch(h.tag){case 5:Te=h.stateNode,ha=!1;break e;case 3:Te=h.stateNode.containerInfo,ha=!0;break e;case 4:Te=h.stateNode.containerInfo,ha=!0;break e}h=h.return}if(Te===null)throw Error(c(160));td(s,d,o),Te=null,ha=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(A){ve(o,a,A)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)od(a,e),a=a.sibling}function od(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fa(a,e),Aa(e),n&4){try{Lt(3,e,e.return),Wn(3,e)}catch(F){ve(e,e.return,F)}try{Lt(5,e,e.return)}catch(F){ve(e,e.return,F)}}break;case 1:fa(a,e),Aa(e),n&512&&t!==null&&Vi(t,t.return);break;case 5:if(fa(a,e),Aa(e),n&512&&t!==null&&Vi(t,t.return),e.flags&32){var o=e.stateNode;try{it(o,"")}catch(F){ve(e,e.return,F)}}if(n&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,d=t!==null?t.memoizedProps:s,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&zs(o,s),vo(h,d);var A=vo(h,s);for(d=0;d<g.length;d+=2){var U=g[d],I=g[d+1];U==="style"?Os(o,I):U==="dangerouslySetInnerHTML"?Ms(o,I):U==="children"?it(o,I):ne(o,U,I,A)}switch(h){case"input":po(o,s);break;case"textarea":Ps(o,s);break;case"select":var N=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var L=s.value;L!=null?Ai(o,!!s.multiple,L,!1):N!==!!s.multiple&&(s.defaultValue!=null?Ai(o,!!s.multiple,s.defaultValue,!0):Ai(o,!!s.multiple,s.multiple?[]:"",!1))}o[At]=s}catch(F){ve(e,e.return,F)}}break;case 6:if(fa(a,e),Aa(e),n&4){if(e.stateNode===null)throw Error(c(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(F){ve(e,e.return,F)}}break;case 3:if(fa(a,e),Aa(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{pt(a.containerInfo)}catch(F){ve(e,e.return,F)}break;case 4:fa(a,e),Aa(e);break;case 13:fa(a,e),Aa(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(_r=be())),n&4&&nd(e);break;case 22:if(U=t!==null&&t.memoizedState!==null,e.mode&1?(Pe=(A=Pe)||U,fa(a,e),Pe=A):fa(a,e),Aa(e),n&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!U&&(e.mode&1)!==0)for(P=e,U=e.child;U!==null;){for(I=P=U;P!==null;){switch(N=P,L=N.child,N.tag){case 0:case 11:case 14:case 15:Lt(4,N,N.return);break;case 1:Vi(N,N.return);var M=N.stateNode;if(typeof M.componentWillUnmount=="function"){n=N,t=N.return;try{a=n,M.props=a.memoizedProps,M.state=a.memoizedState,M.componentWillUnmount()}catch(F){ve(n,t,F)}}break;case 5:Vi(N,N.return);break;case 22:if(N.memoizedState!==null){ld(I);continue}}L!==null?(L.return=N,P=L):ld(I)}U=U.sibling}e:for(U=null,I=e;;){if(I.tag===5){if(U===null){U=I;try{o=I.stateNode,A?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=I.stateNode,g=I.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=Fs("display",d))}catch(F){ve(e,e.return,F)}}}else if(I.tag===6){if(U===null)try{I.stateNode.nodeValue=A?"":I.memoizedProps}catch(F){ve(e,e.return,F)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;U===I&&(U=null),I=I.return}U===I&&(U=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:fa(a,e),Aa(e),n&4&&nd(e);break;case 21:break;default:fa(a,e),Aa(e)}}function Aa(e){var a=e.flags;if(a&2){try{e:{for(var t=e.return;t!==null;){if(ad(t)){var n=t;break e}t=t.return}throw Error(c(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(it(o,""),n.flags&=-33);var s=id(e);Or(e,s,o);break;case 3:case 4:var d=n.stateNode.containerInfo,h=id(e);Fr(e,h,d);break;default:throw Error(c(161))}}catch(g){ve(e,e.return,g)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function cp(e,a,t){P=e,rd(e)}function rd(e,a,t){for(var n=(e.mode&1)!==0;P!==null;){var o=P,s=o.child;if(o.tag===22&&n){var d=o.memoizedState!==null||On;if(!d){var h=o.alternate,g=h!==null&&h.memoizedState!==null||Pe;h=On;var A=Pe;if(On=d,(Pe=g)&&!A)for(P=o;P!==null;)d=P,g=d.child,d.tag===22&&d.memoizedState!==null?cd(o):g!==null?(g.return=d,P=g):cd(o);for(;s!==null;)P=s,rd(s),s=s.sibling;P=o,On=h,Pe=A}sd(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,P=s):sd(e)}}function sd(e){for(;P!==null;){var a=P;if((a.flags&8772)!==0){var t=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Pe||Wn(5,a);break;case 1:var n=a.stateNode;if(a.flags&4&&!Pe)if(t===null)n.componentDidMount();else{var o=a.elementType===a.type?t.memoizedProps:pa(a.type,t.memoizedProps);n.componentDidUpdate(o,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=a.updateQueue;s!==null&&lc(a,s,n);break;case 3:var d=a.updateQueue;if(d!==null){if(t=null,a.child!==null)switch(a.child.tag){case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}lc(a,d,t)}break;case 5:var h=a.stateNode;if(t===null&&a.flags&4){t=h;var g=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&t.focus();break;case"img":g.src&&(t.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var A=a.alternate;if(A!==null){var U=A.memoizedState;if(U!==null){var I=U.dehydrated;I!==null&&pt(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Pe||a.flags&512&&Mr(a)}catch(N){ve(a,a.return,N)}}if(a===e){P=null;break}if(t=a.sibling,t!==null){t.return=a.return,P=t;break}P=a.return}}function ld(e){for(;P!==null;){var a=P;if(a===e){P=null;break}var t=a.sibling;if(t!==null){t.return=a.return,P=t;break}P=a.return}}function cd(e){for(;P!==null;){var a=P;try{switch(a.tag){case 0:case 11:case 15:var t=a.return;try{Wn(4,a)}catch(g){ve(a,t,g)}break;case 1:var n=a.stateNode;if(typeof n.componentDidMount=="function"){var o=a.return;try{n.componentDidMount()}catch(g){ve(a,o,g)}}var s=a.return;try{Mr(a)}catch(g){ve(a,s,g)}break;case 5:var d=a.return;try{Mr(a)}catch(g){ve(a,d,g)}}}catch(g){ve(a,a.return,g)}if(a===e){P=null;break}var h=a.sibling;if(h!==null){h.return=a.return,P=h;break}P=a.return}}var dp=Math.ceil,Hn=le.ReactCurrentDispatcher,Wr=le.ReactCurrentOwner,ra=le.ReactCurrentBatchConfig,Z=0,Ue=null,Se=null,qe=0,ea=0,Yi=_a(0),Ne=0,Pt=null,yi=0,_n=0,Hr=0,Bt=null,Ve=null,_r=0,Gi=1/0,za=null,Vn=!1,Vr=null,Ja=null,Yn=!1,Ka=null,Gn=0,Rt=0,Yr=null,$n=-1,Qn=0;function Me(){return(Z&6)!==0?be():$n!==-1?$n:$n=be()}function Xa(e){return(e.mode&1)===0?1:(Z&2)!==0&&qe!==0?qe&-qe:Gm.transition!==null?(Qn===0&&(Qn=il()),Qn):(e=re,e!==0||(e=window.event,e=e===void 0?16:ul(e.type)),e)}function ga(e,a,t,n){if(50<Rt)throw Rt=0,Yr=null,Error(c(185));lt(e,t,n),((Z&2)===0||e!==Ue)&&(e===Ue&&((Z&2)===0&&(_n|=t),Ne===4&&Za(e,qe)),Ye(e,n),t===1&&Z===0&&(a.mode&1)===0&&(Gi=be()+500,jn&&Ya()))}function Ye(e,a){var t=e.callbackNode;Gu(e,a);var n=nn(e,e===Ue?qe:0);if(n===0)t!==null&&Zs(t),e.callbackNode=null,e.callbackPriority=0;else if(a=n&-n,e.callbackPriority!==a){if(t!=null&&Zs(t),a===1)e.tag===0?Ym(ud.bind(null,e)):Jl(ud.bind(null,e)),Wm(function(){(Z&6)===0&&Ya()}),t=null;else{switch(tl(n)){case 1:t=Co;break;case 4:t=el;break;case 16:t=Zt;break;case 536870912:t=al;break;default:t=Zt}t=xd(t,dd.bind(null,e))}e.callbackPriority=a,e.callbackNode=t}}function dd(e,a){if($n=-1,Qn=0,(Z&6)!==0)throw Error(c(327));var t=e.callbackNode;if($i()&&e.callbackNode!==t)return null;var n=nn(e,e===Ue?qe:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||a)a=Jn(e,n);else{a=n;var o=Z;Z|=2;var s=pd();(Ue!==e||qe!==a)&&(za=null,Gi=be()+500,xi(e,a));do try{pp();break}catch(h){md(e,h)}while(!0);dr(),Hn.current=s,Z=o,Se!==null?a=0:(Ue=null,qe=0,a=Ne)}if(a!==0){if(a===2&&(o=No(e),o!==0&&(n=o,a=Gr(e,o))),a===1)throw t=Pt,xi(e,0),Za(e,n),Ye(e,be()),t;if(a===6)Za(e,n);else{if(o=e.current.alternate,(n&30)===0&&!up(o)&&(a=Jn(e,n),a===2&&(s=No(e),s!==0&&(n=s,a=Gr(e,s))),a===1))throw t=Pt,xi(e,0),Za(e,n),Ye(e,be()),t;switch(e.finishedWork=o,e.finishedLanes=n,a){case 0:case 1:throw Error(c(345));case 2:bi(e,Ve,za);break;case 3:if(Za(e,n),(n&130023424)===n&&(a=_r+500-be(),10<a)){if(nn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Zo(bi.bind(null,e,Ve,za),a);break}bi(e,Ve,za);break;case 4:if(Za(e,n),(n&4194240)===n)break;for(a=e.eventTimes,o=-1;0<n;){var d=31-da(n);s=1<<d,d=a[d],d>o&&(o=d),n&=~s}if(n=o,n=be()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*dp(n/1960))-n,10<n){e.timeoutHandle=Zo(bi.bind(null,e,Ve,za),n);break}bi(e,Ve,za);break;case 5:bi(e,Ve,za);break;default:throw Error(c(329))}}}return Ye(e,be()),e.callbackNode===t?dd.bind(null,e):null}function Gr(e,a){var t=Bt;return e.current.memoizedState.isDehydrated&&(xi(e,a).flags|=256),e=Jn(e,a),e!==2&&(a=Ve,Ve=t,a!==null&&$r(a)),e}function $r(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function up(e){for(var a=e;;){if(a.flags&16384){var t=a.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var o=t[n],s=o.getSnapshot;o=o.value;try{if(!ua(s(),o))return!1}catch{return!1}}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Za(e,a){for(a&=~Hr,a&=~_n,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var t=31-da(a),n=1<<t;e[t]=-1,a&=~n}}function ud(e){if((Z&6)!==0)throw Error(c(327));$i();var a=nn(e,0);if((a&1)===0)return Ye(e,be()),null;var t=Jn(e,a);if(e.tag!==0&&t===2){var n=No(e);n!==0&&(a=n,t=Gr(e,n))}if(t===1)throw t=Pt,xi(e,0),Za(e,a),Ye(e,be()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,bi(e,Ve,za),Ye(e,be()),null}function Qr(e,a){var t=Z;Z|=1;try{return e(a)}finally{Z=t,Z===0&&(Gi=be()+500,jn&&Ya())}}function vi(e){Ka!==null&&Ka.tag===0&&(Z&6)===0&&$i();var a=Z;Z|=1;var t=ra.transition,n=re;try{if(ra.transition=null,re=1,e)return e()}finally{re=n,ra.transition=t,Z=a,(Z&6)===0&&Ya()}}function Jr(){ea=Yi.current,me(Yi)}function xi(e,a){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Om(t)),Se!==null)for(t=Se.return;t!==null;){var n=t;switch(or(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&wn();break;case 3:Hi(),me(We),me(ze),vr();break;case 5:gr(n);break;case 4:Hi();break;case 13:me(fe);break;case 19:me(fe);break;case 10:ur(n.type._context);break;case 22:case 23:Jr()}t=t.return}if(Ue=e,Se=e=ei(e.current,null),qe=ea=a,Ne=0,Pt=null,Hr=_n=yi=0,Ve=Bt=null,hi!==null){for(a=0;a<hi.length;a++)if(t=hi[a],n=t.interleaved,n!==null){t.interleaved=null;var o=n.next,s=t.pending;if(s!==null){var d=s.next;s.next=o,n.next=d}t.pending=n}hi=null}return e}function md(e,a){do{var t=Se;try{if(dr(),zn.current=Bn,Dn){for(var n=ge.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Dn=!1}if(gi=0,Ee=Ce=ge=null,It=!1,Tt=0,Wr.current=null,t===null||t.return===null){Ne=1,Pt=a,Se=null;break}e:{var s=e,d=t.return,h=t,g=a;if(a=qe,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var A=g,U=h,I=U.tag;if((U.mode&1)===0&&(I===0||I===11||I===15)){var N=U.alternate;N?(U.updateQueue=N.updateQueue,U.memoizedState=N.memoizedState,U.lanes=N.lanes):(U.updateQueue=null,U.memoizedState=null)}var L=Bc(d);if(L!==null){L.flags&=-257,Rc(L,d,h,s,a),L.mode&1&&Pc(s,A,a),a=L,g=A;var M=a.updateQueue;if(M===null){var F=new Set;F.add(g),a.updateQueue=F}else M.add(g);break e}else{if((a&1)===0){Pc(s,A,a),Kr();break e}g=Error(c(426))}}else if(he&&h.mode&1){var we=Bc(d);if(we!==null){(we.flags&65536)===0&&(we.flags|=256),Rc(we,d,h,s,a),lr(_i(g,h));break e}}s=g=_i(g,h),Ne!==4&&(Ne=2),Bt===null?Bt=[s]:Bt.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,a&=-a,s.lanes|=a;var S=Dc(s,g,a);sc(s,S);break e;case 1:h=g;var y=s.type,j=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Ja===null||!Ja.has(j)))){s.flags|=65536,a&=-a,s.lanes|=a;var T=Lc(s,h,a);sc(s,T);break e}}s=s.return}while(s!==null)}fd(t)}catch(O){a=O,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function pd(){var e=Hn.current;return Hn.current=Bn,e===null?Bn:e}function Kr(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ue===null||(yi&268435455)===0&&(_n&268435455)===0||Za(Ue,qe)}function Jn(e,a){var t=Z;Z|=2;var n=pd();(Ue!==e||qe!==a)&&(za=null,xi(e,a));do try{mp();break}catch(o){md(e,o)}while(!0);if(dr(),Z=t,Hn.current=n,Se!==null)throw Error(c(261));return Ue=null,qe=0,Ne}function mp(){for(;Se!==null;)hd(Se)}function pp(){for(;Se!==null&&!Ru();)hd(Se)}function hd(e){var a=vd(e.alternate,e,ea);e.memoizedProps=e.pendingProps,a===null?fd(e):Se=a,Wr.current=null}function fd(e){var a=e;do{var t=a.alternate;if(e=a.return,(a.flags&32768)===0){if(t=op(t,a,ea),t!==null){Se=t;return}}else{if(t=rp(t,a),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Se=null;return}}if(a=a.sibling,a!==null){Se=a;return}Se=a=e}while(a!==null);Ne===0&&(Ne=5)}function bi(e,a,t){var n=re,o=ra.transition;try{ra.transition=null,re=1,hp(e,a,t,n)}finally{ra.transition=o,re=n}return null}function hp(e,a,t,n){do $i();while(Ka!==null);if((Z&6)!==0)throw Error(c(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if($u(e,s),e===Ue&&(Se=Ue=null,qe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Yn||(Yn=!0,xd(Zt,function(){return $i(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=ra.transition,ra.transition=null;var d=re;re=1;var h=Z;Z|=4,Wr.current=null,lp(e,t),od(t,e),Dm(Ko),sn=!!Jo,Ko=Jo=null,e.current=t,cp(t),Mu(),Z=h,re=d,ra.transition=s}else e.current=t;if(Yn&&(Yn=!1,Ka=e,Gn=o),s=e.pendingLanes,s===0&&(Ja=null),Wu(t.stateNode),Ye(e,be()),a!==null)for(n=e.onRecoverableError,t=0;t<a.length;t++)o=a[t],n(o.value,{componentStack:o.stack,digest:o.digest});if(Vn)throw Vn=!1,e=Vr,Vr=null,e;return(Gn&1)!==0&&e.tag!==0&&$i(),s=e.pendingLanes,(s&1)!==0?e===Yr?Rt++:(Rt=0,Yr=e):Rt=0,Ya(),null}function $i(){if(Ka!==null){var e=tl(Gn),a=ra.transition,t=re;try{if(ra.transition=null,re=16>e?16:e,Ka===null)var n=!1;else{if(e=Ka,Ka=null,Gn=0,(Z&6)!==0)throw Error(c(331));var o=Z;for(Z|=4,P=e.current;P!==null;){var s=P,d=s.child;if((P.flags&16)!==0){var h=s.deletions;if(h!==null){for(var g=0;g<h.length;g++){var A=h[g];for(P=A;P!==null;){var U=P;switch(U.tag){case 0:case 11:case 15:Lt(8,U,s)}var I=U.child;if(I!==null)I.return=U,P=I;else for(;P!==null;){U=P;var N=U.sibling,L=U.return;if(ed(U),U===A){P=null;break}if(N!==null){N.return=L,P=N;break}P=L}}}var M=s.alternate;if(M!==null){var F=M.child;if(F!==null){M.child=null;do{var we=F.sibling;F.sibling=null,F=we}while(F!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,P=d;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Lt(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,P=S;break e}P=s.return}}var y=e.current;for(P=y;P!==null;){d=P;var j=d.child;if((d.subtreeFlags&2064)!==0&&j!==null)j.return=d,P=j;else e:for(d=y;P!==null;){if(h=P,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Wn(9,h)}}catch(O){ve(h,h.return,O)}if(h===d){P=null;break e}var T=h.sibling;if(T!==null){T.return=h.return,P=T;break e}P=h.return}}if(Z=o,Ya(),ba&&typeof ba.onPostCommitFiberRoot=="function")try{ba.onPostCommitFiberRoot(en,e)}catch{}n=!0}return n}finally{re=t,ra.transition=a}}return!1}function gd(e,a,t){a=_i(t,a),a=Dc(e,a,1),e=$a(e,a,1),a=Me(),e!==null&&(lt(e,1,a),Ye(e,a))}function ve(e,a,t){if(e.tag===3)gd(e,e,t);else for(;a!==null;){if(a.tag===3){gd(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ja===null||!Ja.has(n))){e=_i(t,e),e=Lc(a,e,1),a=$a(a,e,1),e=Me(),a!==null&&(lt(a,1,e),Ye(a,e));break}}a=a.return}}function fp(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),a=Me(),e.pingedLanes|=e.suspendedLanes&t,Ue===e&&(qe&t)===t&&(Ne===4||Ne===3&&(qe&130023424)===qe&&500>be()-_r?xi(e,0):Hr|=t),Ye(e,a)}function yd(e,a){a===0&&((e.mode&1)===0?a=1:(a=tn,tn<<=1,(tn&130023424)===0&&(tn=4194304)));var t=Me();e=Ia(e,a),e!==null&&(lt(e,a,t),Ye(e,t))}function gp(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),yd(e,t)}function yp(e,a){var t=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(a),yd(e,t)}var vd;vd=function(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps||We.current)_e=!0;else{if((e.lanes&t)===0&&(a.flags&128)===0)return _e=!1,np(e,a,t);_e=(e.flags&131072)!==0}else _e=!1,he&&(a.flags&1048576)!==0&&Kl(a,Cn,a.index);switch(a.lanes=0,a.tag){case 2:var n=a.type;Fn(e,a),e=a.pendingProps;var o=Pi(a,ze.current);Wi(a,t),o=wr(null,a,n,e,o,t);var s=Sr();return a.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,He(n)?(s=!0,Sn(a)):s=!1,a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hr(a),o.updater=Rn,a.stateNode=o,o._reactInternals=a,Er(a,n,e,t),a=qr(null,a,n,!0,s,t)):(a.tag=0,he&&s&&nr(a),Re(null,a,o,t),a=a.child),a;case 16:n=a.elementType;e:{switch(Fn(e,a),e=a.pendingProps,o=n._init,n=o(n._payload),a.type=n,o=a.tag=xp(n),e=pa(n,e),o){case 0:a=Tr(null,a,n,e,t);break e;case 1:a=_c(null,a,n,e,t);break e;case 11:a=Mc(null,a,n,e,t);break e;case 14:a=Fc(null,a,n,pa(n.type,e),t);break e}throw Error(c(306,n,""))}return a;case 0:return n=a.type,o=a.pendingProps,o=a.elementType===n?o:pa(n,o),Tr(e,a,n,o,t);case 1:return n=a.type,o=a.pendingProps,o=a.elementType===n?o:pa(n,o),_c(e,a,n,o,t);case 3:e:{if(Vc(a),e===null)throw Error(c(387));n=a.pendingProps,s=a.memoizedState,o=s.element,rc(e,a),Tn(a,n,null,t);var d=a.memoizedState;if(n=d.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){o=_i(Error(c(423)),a),a=Yc(e,a,n,t,o);break e}else if(n!==o){o=_i(Error(c(424)),a),a=Yc(e,a,n,t,o);break e}else for(Ze=Ha(a.stateNode.containerInfo.firstChild),Xe=a,he=!0,ma=null,t=nc(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Mi(),n===o){a=qa(e,a,t);break e}Re(e,a,n,t)}a=a.child}return a;case 5:return cc(a),e===null&&sr(a),n=a.type,o=a.pendingProps,s=e!==null?e.memoizedProps:null,d=o.children,Xo(n,o)?d=null:s!==null&&Xo(n,s)&&(a.flags|=32),Hc(e,a),Re(e,a,d,t),a.child;case 6:return e===null&&sr(a),null;case 13:return Gc(e,a,t);case 4:return fr(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Fi(a,null,n,t):Re(e,a,n,t),a.child;case 11:return n=a.type,o=a.pendingProps,o=a.elementType===n?o:pa(n,o),Mc(e,a,n,o,t);case 7:return Re(e,a,a.pendingProps,t),a.child;case 8:return Re(e,a,a.pendingProps.children,t),a.child;case 12:return Re(e,a,a.pendingProps.children,t),a.child;case 10:e:{if(n=a.type._context,o=a.pendingProps,s=a.memoizedProps,d=o.value,de(En,n._currentValue),n._currentValue=d,s!==null)if(ua(s.value,d)){if(s.children===o.children&&!We.current){a=qa(e,a,t);break e}}else for(s=a.child,s!==null&&(s.return=a);s!==null;){var h=s.dependencies;if(h!==null){d=s.child;for(var g=h.firstContext;g!==null;){if(g.context===n){if(s.tag===1){g=Ta(-1,t&-t),g.tag=2;var A=s.updateQueue;if(A!==null){A=A.shared;var U=A.pending;U===null?g.next=g:(g.next=U.next,U.next=g),A.pending=g}}s.lanes|=t,g=s.alternate,g!==null&&(g.lanes|=t),mr(s.return,t,a),h.lanes|=t;break}g=g.next}}else if(s.tag===10)d=s.type===a.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(c(341));d.lanes|=t,h=d.alternate,h!==null&&(h.lanes|=t),mr(d,t,a),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===a){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Re(e,a,o.children,t),a=a.child}return a;case 9:return o=a.type,n=a.pendingProps.children,Wi(a,t),o=na(o),n=n(o),a.flags|=1,Re(e,a,n,t),a.child;case 14:return n=a.type,o=pa(n,a.pendingProps),o=pa(n.type,o),Fc(e,a,n,o,t);case 15:return Oc(e,a,a.type,a.pendingProps,t);case 17:return n=a.type,o=a.pendingProps,o=a.elementType===n?o:pa(n,o),Fn(e,a),a.tag=1,He(n)?(e=!0,Sn(a)):e=!1,Wi(a,t),qc(a,n,o),Er(a,n,o,t),qr(null,a,n,!0,e,t);case 19:return Qc(e,a,t);case 22:return Wc(e,a,t)}throw Error(c(156,a.tag))};function xd(e,a){return Xs(e,a)}function vp(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sa(e,a,t,n){return new vp(e,a,t,n)}function Xr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return Xr(e)?1:0;if(e!=null){if(e=e.$$typeof,e===va)return 11;if(e===xa)return 14}return 2}function ei(e,a){var t=e.alternate;return t===null?(t=sa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Kn(e,a,t,n,o,s){var d=2;if(n=e,typeof e=="function")Xr(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Fe:return wi(t.children,o,s,a);case aa:d=8,o|=8;break;case Pa:return e=sa(12,t,a,o|2),e.elementType=Pa,e.lanes=s,e;case Qe:return e=sa(13,t,a,o),e.elementType=Qe,e.lanes=s,e;case ca:return e=sa(19,t,a,o),e.elementType=ca,e.lanes=s,e;case ye:return Xn(t,o,s,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ca:d=10;break e;case li:d=9;break e;case va:d=11;break e;case xa:d=14;break e;case Oe:d=16,n=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return a=sa(d,t,a,o),a.elementType=e,a.type=n,a.lanes=s,a}function wi(e,a,t,n){return e=sa(7,e,n,a),e.lanes=t,e}function Xn(e,a,t,n){return e=sa(22,e,n,a),e.elementType=ye,e.lanes=t,e.stateNode={isHidden:!1},e}function Zr(e,a,t){return e=sa(6,e,null,a),e.lanes=t,e}function es(e,a,t){return a=sa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function bp(e,a,t,n,o){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function as(e,a,t,n,o,s,d,h,g){return e=new bp(e,a,t,h,g),a===1?(a=1,s===!0&&(a|=8)):a=0,s=sa(3,null,null,a),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hr(s),e}function wp(e,a,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Be,key:n==null?null:""+n,children:e,containerInfo:a,implementation:t}}function bd(e){if(!e)return Va;e=e._reactInternals;e:{if(ci(e)!==e||e.tag!==1)throw Error(c(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(He(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(He(t))return $l(e,t,a)}return a}function wd(e,a,t,n,o,s,d,h,g){return e=as(t,n,!0,e,o,s,d,h,g),e.context=bd(null),t=e.current,n=Me(),o=Xa(t),s=Ta(n,o),s.callback=a??null,$a(t,s,o),e.current.lanes=o,lt(e,o,n),Ye(e,n),e}function Zn(e,a,t,n){var o=a.current,s=Me(),d=Xa(o);return t=bd(t),a.context===null?a.context=t:a.pendingContext=t,a=Ta(s,d),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=$a(o,a,d),e!==null&&(ga(e,o,d,s),In(e,o,d)),d}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sd(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function is(e,a){Sd(e,a),(e=e.alternate)&&Sd(e,a)}function Sp(){return null}var jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ts(e){this._internalRoot=e}ao.prototype.render=ts.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));Zn(e,a,null,null)},ao.prototype.unmount=ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;vi(function(){Zn(null,e,null,null)}),a[Na]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var a=rl();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Fa.length&&a!==0&&a<Fa[t].priority;t++);Fa.splice(t,0,e),t===0&&cl(e)}};function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ad(){}function jp(e,a,t,n,o){if(o){if(typeof n=="function"){var s=n;n=function(){var A=eo(d);s.call(A)}}var d=wd(a,n,e,0,null,!1,!1,"",Ad);return e._reactRootContainer=d,e[Na]=d.current,St(e.nodeType===8?e.parentNode:e),vi(),d}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var h=n;n=function(){var A=eo(g);h.call(A)}}var g=as(e,0,!1,null,null,!1,!1,"",Ad);return e._reactRootContainer=g,e[Na]=g.current,St(e.nodeType===8?e.parentNode:e),vi(function(){Zn(a,g,t,n)}),g}function to(e,a,t,n,o){var s=t._reactRootContainer;if(s){var d=s;if(typeof o=="function"){var h=o;o=function(){var g=eo(d);h.call(g)}}Zn(a,d,e,o)}else d=jp(t,a,e,o,n);return eo(d)}nl=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var t=st(a.pendingLanes);t!==0&&(Eo(a,t|1),Ye(a,be()),(Z&6)===0&&(Gi=be()+500,Ya()))}break;case 13:vi(function(){var n=Ia(e,1);if(n!==null){var o=Me();ga(n,e,1,o)}}),is(e,1)}},Uo=function(e){if(e.tag===13){var a=Ia(e,134217728);if(a!==null){var t=Me();ga(a,e,134217728,t)}is(e,134217728)}},ol=function(e){if(e.tag===13){var a=Xa(e),t=Ia(e,a);if(t!==null){var n=Me();ga(t,e,a,n)}is(e,a)}},rl=function(){return re},sl=function(e,a){var t=re;try{return re=e,a()}finally{re=t}},wo=function(e,a,t){switch(a){case"input":if(po(e,t),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var o=bn(n);if(!o)throw Error(c(90));Ts(n),po(n,o)}}}break;case"textarea":Ps(e,t);break;case"select":a=t.value,a!=null&&Ai(e,!!t.multiple,a,!1)}},Vs=Qr,Ys=vi;var Ap={usingClientEntryPoint:!1,Events:[Ct,Di,bn,Hs,_s,Qr]},Mt={findFiberByHostInstance:di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cp={bundleType:Mt.bundleType,version:Mt.version,rendererPackageName:Mt.rendererPackageName,rendererConfig:Mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Js(e),e===null?null:e.stateNode},findFiberByHostInstance:Mt.findFiberByHostInstance||Sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{en=no.inject(Cp),ba=no}catch{}}return Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap,Ge.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ns(a))throw Error(c(200));return wp(e,a,null,t)},Ge.createRoot=function(e,a){if(!ns(e))throw Error(c(299));var t=!1,n="",o=jd;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=as(e,1,!1,null,null,t,!1,n,o),e[Na]=a.current,St(e.nodeType===8?e.parentNode:e),new ts(a)},Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Js(a),e=e===null?null:e.stateNode,e},Ge.flushSync=function(e){return vi(e)},Ge.hydrate=function(e,a,t){if(!io(a))throw Error(c(200));return to(null,e,a,!0,t)},Ge.hydrateRoot=function(e,a,t){if(!ns(e))throw Error(c(405));var n=t!=null&&t.hydratedSources||null,o=!1,s="",d=jd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),a=wd(a,null,e,1,t??null,o,!1,s,d),e[Na]=a.current,St(e),n)for(e=0;e<n.length;e++)t=n[e],o=t._getVersion,o=o(t._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[t,o]:a.mutableSourceEagerHydrationData.push(t,o);return new ao(a)},Ge.render=function(e,a,t){if(!io(a))throw Error(c(200));return to(null,e,a,!1,t)},Ge.unmountComponentAtNode=function(e){if(!io(e))throw Error(c(40));return e._reactRootContainer?(vi(function(){to(null,null,e,!1,function(){e._reactRootContainer=null,e[Na]=null})}),!0):!1},Ge.unstable_batchedUpdates=Qr,Ge.unstable_renderSubtreeIntoContainer=function(e,a,t,n){if(!io(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return to(e,a,t,!1,n)},Ge.version="18.3.1-next-f1338f8080-20240426",Ge}var qd;function iu(){if(qd)return ss.exports;qd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),ss.exports=Pp(),ss.exports}var zd;function Bp(){if(zd)return oo;zd=1;var r=iu();return oo.createRoot=r.createRoot,oo.hydrateRoot=r.hydrateRoot,oo}var Rp=Bp(),ds,Dd;function Mp(){if(Dd)return ds;Dd=1;var r=typeof Element<"u",l=typeof Map=="function",c=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(m,f){if(m===f)return!0;if(m&&f&&typeof m=="object"&&typeof f=="object"){if(m.constructor!==f.constructor)return!1;var x,v,b;if(Array.isArray(m)){if(x=m.length,x!=f.length)return!1;for(v=x;v--!==0;)if(!p(m[v],f[v]))return!1;return!0}var C;if(l&&m instanceof Map&&f instanceof Map){if(m.size!==f.size)return!1;for(C=m.entries();!(v=C.next()).done;)if(!f.has(v.value[0]))return!1;for(C=m.entries();!(v=C.next()).done;)if(!p(v.value[1],f.get(v.value[0])))return!1;return!0}if(c&&m instanceof Set&&f instanceof Set){if(m.size!==f.size)return!1;for(C=m.entries();!(v=C.next()).done;)if(!f.has(v.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(f)){if(x=m.length,x!=f.length)return!1;for(v=x;v--!==0;)if(m[v]!==f[v])return!1;return!0}if(m.constructor===RegExp)return m.source===f.source&&m.flags===f.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof f.valueOf=="function")return m.valueOf()===f.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof f.toString=="function")return m.toString()===f.toString();if(b=Object.keys(m),x=b.length,x!==Object.keys(f).length)return!1;for(v=x;v--!==0;)if(!Object.prototype.hasOwnProperty.call(f,b[v]))return!1;if(r&&m instanceof Element)return!1;for(v=x;v--!==0;)if(!((b[v]==="_owner"||b[v]==="__v"||b[v]==="__o")&&m.$$typeof)&&!p(m[b[v]],f[b[v]]))return!1;return!0}return m!==m&&f!==f}return ds=function(f,x){try{return p(f,x)}catch(v){if((v.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw v}},ds}var Fp=Mp();const Op=co(Fp);var us,Ld;function Wp(){if(Ld)return us;Ld=1;var r=function(l,c,u,p,m,f,x,v){if(!l){var b;if(c===void 0)b=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var C=[u,p,m,f,x,v],k=0;b=new Error(c.replace(/%s/g,function(){return C[k++]})),b.name="Invariant Violation"}throw b.framesToPop=1,b}};return us=r,us}var Hp=Wp();const Pd=co(Hp);var ms,Bd;function _p(){return Bd||(Bd=1,ms=function(l,c,u,p){var m=u?u.call(p,l,c):void 0;if(m!==void 0)return!!m;if(l===c)return!0;if(typeof l!="object"||!l||typeof c!="object"||!c)return!1;var f=Object.keys(l),x=Object.keys(c);if(f.length!==x.length)return!1;for(var v=Object.prototype.hasOwnProperty.bind(c),b=0;b<f.length;b++){var C=f[b];if(!v(C))return!1;var k=l[C],B=c[C];if(m=u?u.call(p,k,B,C):void 0,m===!1||m===void 0&&k!==B)return!1}return!0}),ms}var Vp=_p();const Yp=co(Vp);var tu=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(tu||{}),ps={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Rd=Object.values(tu),ks={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Gp=Object.entries(ks).reduce((r,[l,c])=>(r[c]=l,r),{}),ya="data-rh",Ji={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ki=(r,l)=>{for(let c=r.length-1;c>=0;c-=1){const u=r[c];if(Object.prototype.hasOwnProperty.call(u,l))return u[l]}return null},$p=r=>{let l=Ki(r,"title");const c=Ki(r,Ji.TITLE_TEMPLATE);if(Array.isArray(l)&&(l=l.join("")),c&&l)return c.replace(/%s/g,()=>l);const u=Ki(r,Ji.DEFAULT_TITLE);return l||u||void 0},Qp=r=>Ki(r,Ji.ON_CHANGE_CLIENT_STATE)||(()=>{}),hs=(r,l)=>l.filter(c=>typeof c[r]<"u").map(c=>c[r]).reduce((c,u)=>({...c,...u}),{}),Jp=(r,l)=>l.filter(c=>typeof c.base<"u").map(c=>c.base).reverse().reduce((c,u)=>{if(!c.length){const p=Object.keys(u);for(let m=0;m<p.length;m+=1){const x=p[m].toLowerCase();if(r.indexOf(x)!==-1&&u[x])return c.concat(u)}}return c},[]),Kp=r=>console&&typeof console.warn=="function"&&console.warn(r),Ot=(r,l,c)=>{const u={};return c.filter(p=>Array.isArray(p[r])?!0:(typeof p[r]<"u"&&Kp(`Helmet: ${r} should be of type "Array". Instead found type "${typeof p[r]}"`),!1)).map(p=>p[r]).reverse().reduce((p,m)=>{const f={};m.filter(v=>{let b;const C=Object.keys(v);for(let B=0;B<C.length;B+=1){const G=C[B],Q=G.toLowerCase();l.indexOf(Q)!==-1&&!(b==="rel"&&v[b].toLowerCase()==="canonical")&&!(Q==="rel"&&v[Q].toLowerCase()==="stylesheet")&&(b=Q),l.indexOf(G)!==-1&&(G==="innerHTML"||G==="cssText"||G==="itemprop")&&(b=G)}if(!b||!v[b])return!1;const k=v[b].toLowerCase();return u[b]||(u[b]={}),f[b]||(f[b]={}),u[b][k]?!1:(f[b][k]=!0,!0)}).reverse().forEach(v=>p.push(v));const x=Object.keys(f);for(let v=0;v<x.length;v+=1){const b=x[v],C={...u[b],...f[b]};u[b]=C}return p},[]).reverse()},Xp=(r,l)=>{if(Array.isArray(r)&&r.length){for(let c=0;c<r.length;c+=1)if(r[c][l])return!0}return!1},Zp=r=>({baseTag:Jp(["href"],r),bodyAttributes:hs("bodyAttributes",r),defer:Ki(r,Ji.DEFER),encode:Ki(r,Ji.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:hs("htmlAttributes",r),linkTags:Ot("link",["rel","href"],r),metaTags:Ot("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Ot("noscript",["innerHTML"],r),onChangeClientState:Qp(r),scriptTags:Ot("script",["src","innerHTML"],r),styleTags:Ot("style",["cssText"],r),title:$p(r),titleAttributes:hs("titleAttributes",r),prioritizeSeoTags:Xp(r,Ji.PRIORITIZE_SEO_TAGS)}),nu=r=>Array.isArray(r)?r.join(""):r,eh=(r,l)=>{const c=Object.keys(r);for(let u=0;u<c.length;u+=1)if(l[c[u]]&&l[c[u]].includes(r[c[u]]))return!0;return!1},fs=(r,l)=>Array.isArray(r)?r.reduce((c,u)=>(eh(u,l)?c.priority.push(u):c.default.push(u),c),{priority:[],default:[]}):{default:r,priority:[]},Md=(r,l)=>({...r,[l]:void 0}),ah=["noscript","script","style"],xs=(r,l=!0)=>l===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ou=r=>Object.keys(r).reduce((l,c)=>{const u=typeof r[c]<"u"?`${c}="${r[c]}"`:`${c}`;return l?`${l} ${u}`:u},""),ih=(r,l,c,u)=>{const p=ou(c),m=nu(l);return p?`<${r} ${ya}="true" ${p}>${xs(m,u)}</${r}>`:`<${r} ${ya}="true">${xs(m,u)}</${r}>`},th=(r,l,c=!0)=>l.reduce((u,p)=>{const m=p,f=Object.keys(m).filter(b=>!(b==="innerHTML"||b==="cssText")).reduce((b,C)=>{const k=typeof m[C]>"u"?C:`${C}="${xs(m[C],c)}"`;return b?`${b} ${k}`:k},""),x=m.innerHTML||m.cssText||"",v=ah.indexOf(r)===-1;return`${u}<${r} ${ya}="true" ${f}${v?"/>":`>${x}</${r}>`}`},""),ru=(r,l={})=>Object.keys(r).reduce((c,u)=>{const p=ks[u];return c[p||u]=r[u],c},l),nh=(r,l,c)=>{const u={key:l,[ya]:!0},p=ru(c,u);return[La.createElement("title",p,l)]},so=(r,l)=>l.map((c,u)=>{const p={key:u,[ya]:!0};return Object.keys(c).forEach(m=>{const x=ks[m]||m;if(x==="innerHTML"||x==="cssText"){const v=c.innerHTML||c.cssText;p.dangerouslySetInnerHTML={__html:v}}else p[x]=c[m]}),La.createElement(r,p)}),la=(r,l,c=!0)=>{switch(r){case"title":return{toComponent:()=>nh(r,l.title,l.titleAttributes),toString:()=>ih(r,l.title,l.titleAttributes,c)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ru(l),toString:()=>ou(l)};default:return{toComponent:()=>so(r,l),toString:()=>th(r,l,c)}}},oh=({metaTags:r,linkTags:l,scriptTags:c,encode:u})=>{const p=fs(r,ps.meta),m=fs(l,ps.link),f=fs(c,ps.script);return{priorityMethods:{toComponent:()=>[...so("meta",p.priority),...so("link",m.priority),...so("script",f.priority)],toString:()=>`${la("meta",p.priority,u)} ${la("link",m.priority,u)} ${la("script",f.priority,u)}`},metaTags:p.default,linkTags:m.default,scriptTags:f.default}},rh=r=>{const{baseTag:l,bodyAttributes:c,encode:u=!0,htmlAttributes:p,noscriptTags:m,styleTags:f,title:x="",titleAttributes:v,prioritizeSeoTags:b}=r;let{linkTags:C,metaTags:k,scriptTags:B}=r,G={toComponent:()=>{},toString:()=>""};return b&&({priorityMethods:G,linkTags:C,metaTags:k,scriptTags:B}=oh(r)),{priority:G,base:la("base",l,u),bodyAttributes:la("bodyAttributes",c,u),htmlAttributes:la("htmlAttributes",p,u),link:la("link",C,u),meta:la("meta",k,u),noscript:la("noscript",m,u),script:la("script",B,u),style:la("style",f,u),title:la("title",{title:x,titleAttributes:v},u)}},bs=rh,ro=[],su=!!(typeof window<"u"&&window.document&&window.document.createElement),ws=class{constructor(r,l){Da(this,"instances",[]);Da(this,"canUseDOM",su);Da(this,"context");Da(this,"value",{setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?ro:this.instances,add:r=>{(this.canUseDOM?ro:this.instances).push(r)},remove:r=>{const l=(this.canUseDOM?ro:this.instances).indexOf(r);(this.canUseDOM?ro:this.instances).splice(l,1)}}});this.context=r,this.canUseDOM=l||!1,l||(r.helmet=bs({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},sh={},lu=La.createContext(sh),Si,Es=(Si=class extends q.Component{constructor(c){super(c);Da(this,"helmetData");this.helmetData=new ws(this.props.context||{},Si.canUseDOM)}render(){return La.createElement(lu.Provider,{value:this.helmetData.value},this.props.children)}},Da(Si,"canUseDOM",su),Si),Qi=(r,l)=>{const c=document.head||document.querySelector("head"),u=c.querySelectorAll(`${r}[${ya}]`),p=[].slice.call(u),m=[];let f;return l&&l.length&&l.forEach(x=>{const v=document.createElement(r);for(const b in x)if(Object.prototype.hasOwnProperty.call(x,b))if(b==="innerHTML")v.innerHTML=x.innerHTML;else if(b==="cssText")v.styleSheet?v.styleSheet.cssText=x.cssText:v.appendChild(document.createTextNode(x.cssText));else{const C=b,k=typeof x[C]>"u"?"":x[C];v.setAttribute(b,k)}v.setAttribute(ya,"true"),p.some((b,C)=>(f=C,v.isEqualNode(b)))?p.splice(f,1):m.push(v)}),p.forEach(x=>{var v;return(v=x.parentNode)==null?void 0:v.removeChild(x)}),m.forEach(x=>c.appendChild(x)),{oldTags:p,newTags:m}},Ss=(r,l)=>{const c=document.getElementsByTagName(r)[0];if(!c)return;const u=c.getAttribute(ya),p=u?u.split(","):[],m=[...p],f=Object.keys(l);for(const x of f){const v=l[x]||"";c.getAttribute(x)!==v&&c.setAttribute(x,v),p.indexOf(x)===-1&&p.push(x);const b=m.indexOf(x);b!==-1&&m.splice(b,1)}for(let x=m.length-1;x>=0;x-=1)c.removeAttribute(m[x]);p.length===m.length?c.removeAttribute(ya):c.getAttribute(ya)!==f.join(",")&&c.setAttribute(ya,f.join(","))},lh=(r,l)=>{typeof r<"u"&&document.title!==r&&(document.title=nu(r)),Ss("title",l)},Fd=(r,l)=>{const{baseTag:c,bodyAttributes:u,htmlAttributes:p,linkTags:m,metaTags:f,noscriptTags:x,onChangeClientState:v,scriptTags:b,styleTags:C,title:k,titleAttributes:B}=r;Ss("body",u),Ss("html",p),lh(k,B);const G={baseTag:Qi("base",c),linkTags:Qi("link",m),metaTags:Qi("meta",f),noscriptTags:Qi("noscript",x),scriptTags:Qi("script",b),styleTags:Qi("style",C)},Q={},W={};Object.keys(G).forEach(z=>{const{newTags:te,oldTags:se}=G[z];te.length&&(Q[z]=te),se.length&&(W[z]=G[z].oldTags)}),l&&l(),v(r,Q,W)},Wt=null,ch=r=>{Wt&&cancelAnimationFrame(Wt),r.defer?Wt=requestAnimationFrame(()=>{Fd(r,()=>{Wt=null})}):(Fd(r),Wt=null)},dh=ch,Od=class extends q.Component{constructor(){super(...arguments);Da(this,"rendered",!1)}shouldComponentUpdate(l){return!Yp(l,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:l}=this.props.context;l.remove(this),this.emitChange()}emitChange(){const{helmetInstances:l,setHelmet:c}=this.props.context;let u=null;const p=Zp(l.get().map(m=>{const f={...m.props};return delete f.context,f}));Es.canUseDOM?dh(p):bs&&(u=bs(p)),c(u)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:l}=this.props.context;l.add(this),this.emitChange()}render(){return this.init(),null}},vs,uh=(vs=class extends q.Component{shouldComponentUpdate(r){return!Op(Md(this.props,"helmetData"),Md(r,"helmetData"))}mapNestedChildrenToProps(r,l){if(!l)return null;switch(r.type){case"script":case"noscript":return{innerHTML:l};case"style":return{cssText:l};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,l,c,u){return{...l,[r.type]:[...l[r.type]||[],{...c,...this.mapNestedChildrenToProps(r,u)}]}}mapObjectTypeChildren(r,l,c,u){switch(r.type){case"title":return{...l,[r.type]:u,titleAttributes:{...c}};case"body":return{...l,bodyAttributes:{...c}};case"html":return{...l,htmlAttributes:{...c}};default:return{...l,[r.type]:{...c}}}}mapArrayTypeChildrenToProps(r,l){let c={...l};return Object.keys(r).forEach(u=>{c={...c,[u]:r[u]}}),c}warnOnInvalidChildren(r,l){return Pd(Rd.some(c=>r.type===c),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Rd.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),Pd(!l||typeof l=="string"||Array.isArray(l)&&!l.some(c=>typeof c!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,l){let c={};return La.Children.forEach(r,u=>{if(!u||!u.props)return;const{children:p,...m}=u.props,f=Object.keys(m).reduce((v,b)=>(v[Gp[b]||b]=m[b],v),{});let{type:x}=u;switch(typeof x=="symbol"?x=x.toString():this.warnOnInvalidChildren(u,p),x){case"Symbol(react.fragment)":l=this.mapChildrenToProps(p,l);break;case"link":case"meta":case"noscript":case"script":case"style":c=this.flattenArrayTypeChildren(u,c,f,p);break;default:l=this.mapObjectTypeChildren(u,l,f,p);break}}),this.mapArrayTypeChildrenToProps(c,l)}render(){const{children:r,...l}=this.props;let c={...l},{helmetData:u}=l;if(r&&(c=this.mapChildrenToProps(r,c)),u&&!(u instanceof ws)){const p=u;u=new ws(p.context,!0),delete c.helmetData}return u?La.createElement(Od,{...c,context:u.value}):La.createElement(lu.Consumer,null,p=>La.createElement(Od,{...c,context:p}))}},Da(vs,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),vs);iu();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _t(){return _t=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},_t.apply(null,arguments)}var ni;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(ni||(ni={}));const Wd="popstate";function mh(r){r===void 0&&(r={});function l(u,p){let{pathname:m,search:f,hash:x}=u.location;return js("",{pathname:m,search:f,hash:x},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function c(u,p){return typeof p=="string"?p:lo(p)}return hh(l,c,null,r)}function je(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function cu(r,l){if(!r){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function ph(){return Math.random().toString(36).substr(2,8)}function Hd(r,l){return{usr:r.state,key:r.key,idx:l}}function js(r,l,c,u){return c===void 0&&(c=null),_t({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof l=="string"?Xi(l):l,{state:c,key:l&&l.key||u||ph()})}function lo(r){let{pathname:l="/",search:c="",hash:u=""}=r;return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Xi(r){let l={};if(r){let c=r.indexOf("#");c>=0&&(l.hash=r.substr(c),r=r.substr(0,c));let u=r.indexOf("?");u>=0&&(l.search=r.substr(u),r=r.substr(0,u)),r&&(l.pathname=r)}return l}function hh(r,l,c,u){u===void 0&&(u={});let{window:p=document.defaultView,v5Compat:m=!1}=u,f=p.history,x=ni.Pop,v=null,b=C();b==null&&(b=0,f.replaceState(_t({},f.state,{idx:b}),""));function C(){return(f.state||{idx:null}).idx}function k(){x=ni.Pop;let z=C(),te=z==null?null:z-b;b=z,v&&v({action:x,location:W.location,delta:te})}function B(z,te){x=ni.Push;let se=js(W.location,z,te);b=C()+1;let ne=Hd(se,b),le=W.createHref(se);try{f.pushState(ne,"",le)}catch(ke){if(ke instanceof DOMException&&ke.name==="DataCloneError")throw ke;p.location.assign(le)}m&&v&&v({action:x,location:W.location,delta:1})}function G(z,te){x=ni.Replace;let se=js(W.location,z,te);b=C();let ne=Hd(se,b),le=W.createHref(se);f.replaceState(ne,"",le),m&&v&&v({action:x,location:W.location,delta:0})}function Q(z){let te=p.location.origin!=="null"?p.location.origin:p.location.href,se=typeof z=="string"?z:lo(z);return se=se.replace(/ $/,"%20"),je(te,"No window.location.(origin|href) available to create URL for href: "+se),new URL(se,te)}let W={get action(){return x},get location(){return r(p,f)},listen(z){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(Wd,k),v=z,()=>{p.removeEventListener(Wd,k),v=null}},createHref(z){return l(p,z)},createURL:Q,encodeLocation(z){let te=Q(z);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:B,replace:G,go(z){return f.go(z)}};return W}var _d;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(_d||(_d={}));function fh(r,l,c){return c===void 0&&(c="/"),gh(r,l,c)}function gh(r,l,c,u){let p=typeof l=="string"?Xi(l):l,m=Us(p.pathname||"/",c);if(m==null)return null;let f=du(r);yh(f);let x=null,v=Uh(m);for(let b=0;x==null&&b<f.length;++b)x=Nh(f[b],v);return x}function du(r,l,c,u){l===void 0&&(l=[]),c===void 0&&(c=[]),u===void 0&&(u="");let p=(m,f,x)=>{let v={relativePath:x===void 0?m.path||"":x,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};v.relativePath.startsWith("/")&&(je(v.relativePath.startsWith(u),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(u.length));let b=oi([u,v.relativePath]),C=c.concat(v);m.children&&m.children.length>0&&(je(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),du(m.children,l,C,b)),!(m.path==null&&!m.index)&&l.push({path:b,score:Ah(b,m.index),routesMeta:C})};return r.forEach((m,f)=>{var x;if(m.path===""||!((x=m.path)!=null&&x.includes("?")))p(m,f);else for(let v of uu(m.path))p(m,f,v)}),l}function uu(r){let l=r.split("/");if(l.length===0)return[];let[c,...u]=l,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(u.length===0)return p?[m,""]:[m];let f=uu(u.join("/")),x=[];return x.push(...f.map(v=>v===""?m:[m,v].join("/"))),p&&x.push(...f),x.map(v=>r.startsWith("/")&&v===""?"/":v)}function yh(r){r.sort((l,c)=>l.score!==c.score?c.score-l.score:Ch(l.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}const vh=/^:[\w-]+$/,xh=3,bh=2,wh=1,Sh=10,jh=-2,Vd=r=>r==="*";function Ah(r,l){let c=r.split("/"),u=c.length;return c.some(Vd)&&(u+=jh),l&&(u+=bh),c.filter(p=>!Vd(p)).reduce((p,m)=>p+(vh.test(m)?xh:m===""?wh:Sh),u)}function Ch(r,l){return r.length===l.length&&r.slice(0,-1).every((u,p)=>u===l[p])?r[r.length-1]-l[l.length-1]:0}function Nh(r,l,c){let{routesMeta:u}=r,p={},m="/",f=[];for(let x=0;x<u.length;++x){let v=u[x],b=x===u.length-1,C=m==="/"?l:l.slice(m.length)||"/",k=kh({path:v.relativePath,caseSensitive:v.caseSensitive,end:b},C),B=v.route;if(!k)return null;Object.assign(p,k.params),f.push({params:p,pathname:oi([m,k.pathname]),pathnameBase:qh(oi([m,k.pathnameBase])),route:B}),k.pathnameBase!=="/"&&(m=oi([m,k.pathnameBase]))}return f}function kh(r,l){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[c,u]=Eh(r.path,r.caseSensitive,r.end),p=l.match(c);if(!p)return null;let m=p[0],f=m.replace(/(.)\/+$/,"$1"),x=p.slice(1);return{params:u.reduce((b,C,k)=>{let{paramName:B,isOptional:G}=C;if(B==="*"){let W=x[k]||"";f=m.slice(0,m.length-W.length).replace(/(.)\/+$/,"$1")}const Q=x[k];return G&&!Q?b[B]=void 0:b[B]=(Q||"").replace(/%2F/g,"/"),b},{}),pathname:m,pathnameBase:f,pattern:r}}function Eh(r,l,c){l===void 0&&(l=!1),c===void 0&&(c=!0),cu(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let u=[],p="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,x,v)=>(u.push({paramName:x,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(u.push({paramName:"*"}),p+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":r!==""&&r!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,l?void 0:"i"),u]}function Uh(r){try{return r.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return cu(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),r}}function Us(r,l){if(l==="/")return r;if(!r.toLowerCase().startsWith(l.toLowerCase()))return null;let c=l.endsWith("/")?l.length-1:l.length,u=r.charAt(c);return u&&u!=="/"?null:r.slice(c)||"/"}function Ih(r,l){l===void 0&&(l="/");let{pathname:c,search:u="",hash:p=""}=typeof r=="string"?Xi(r):r,m;return c?(c=hu(c),c.startsWith("/")?m=Yd(c.substring(1),"/"):m=Yd(c,l)):m=l,{pathname:m,search:zh(u),hash:Dh(p)}}function Yd(r,l){let c=l.replace(/\/+$/,"").split("/");return r.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function gs(r,l,c,u){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Th(r){return r.filter((l,c)=>c===0||l.route.path&&l.route.path.length>0)}function mu(r,l){let c=Th(r);return l?c.map((u,p)=>p===c.length-1?u.pathname:u.pathnameBase):c.map(u=>u.pathnameBase)}function pu(r,l,c,u){u===void 0&&(u=!1);let p;typeof r=="string"?p=Xi(r):(p=_t({},r),je(!p.pathname||!p.pathname.includes("?"),gs("?","pathname","search",p)),je(!p.pathname||!p.pathname.includes("#"),gs("#","pathname","hash",p)),je(!p.search||!p.search.includes("#"),gs("#","search","hash",p)));let m=r===""||p.pathname==="",f=m?"/":p.pathname,x;if(f==null)x=c;else{let k=l.length-1;if(!u&&f.startsWith("..")){let B=f.split("/");for(;B[0]==="..";)B.shift(),k-=1;p.pathname=B.join("/")}x=k>=0?l[k]:"/"}let v=Ih(p,x),b=f&&f!=="/"&&f.endsWith("/"),C=(m||f===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(b||C)&&(v.pathname+="/"),v}const hu=r=>r.replace(/\/\/+/g,"/"),oi=r=>hu(r.join("/")),qh=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),zh=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Dh=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Lh(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const fu=["post","put","patch","delete"];new Set(fu);const Ph=["get",...fu];new Set(Ph);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vt(){return Vt=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},Vt.apply(null,arguments)}const Is=q.createContext(null),Bh=q.createContext(null),ji=q.createContext(null),uo=q.createContext(null),si=q.createContext({outlet:null,matches:[],isDataRoute:!1}),gu=q.createContext(null);function Rh(r,l){let{relative:c}=l===void 0?{}:l;Yt()||je(!1);let{basename:u,navigator:p}=q.useContext(ji),{hash:m,pathname:f,search:x}=vu(r,{relative:c}),v=f;return u!=="/"&&(v=f==="/"?u:oi([u,f])),p.createHref({pathname:v,search:x,hash:m})}function Yt(){return q.useContext(uo)!=null}function Gt(){return Yt()||je(!1),q.useContext(uo).location}function yu(r){q.useContext(ji).static||q.useLayoutEffect(r)}function $e(){let{isDataRoute:r}=q.useContext(si);return r?Kh():Mh()}function Mh(){Yt()||je(!1);let r=q.useContext(Is),{basename:l,future:c,navigator:u}=q.useContext(ji),{matches:p}=q.useContext(si),{pathname:m}=Gt(),f=JSON.stringify(mu(p,c.v7_relativeSplatPath)),x=q.useRef(!1);return yu(()=>{x.current=!0}),q.useCallback(function(b,C){if(C===void 0&&(C={}),!x.current)return;if(typeof b=="number"){u.go(b);return}let k=pu(b,JSON.parse(f),m,C.relative==="path");r==null&&l!=="/"&&(k.pathname=k.pathname==="/"?l:oi([l,k.pathname])),(C.replace?u.replace:u.push)(k,C.state,C)},[l,u,f,m,r])}function Zi(){let{matches:r}=q.useContext(si),l=r[r.length-1];return l?l.params:{}}function vu(r,l){let{relative:c}=l===void 0?{}:l,{future:u}=q.useContext(ji),{matches:p}=q.useContext(si),{pathname:m}=Gt(),f=JSON.stringify(mu(p,u.v7_relativeSplatPath));return q.useMemo(()=>pu(r,JSON.parse(f),m,c==="path"),[r,f,m,c])}function Fh(r,l){return Oh(r,l)}function Oh(r,l,c,u){Yt()||je(!1);let{navigator:p}=q.useContext(ji),{matches:m}=q.useContext(si),f=m[m.length-1],x=f?f.params:{};f&&f.pathname;let v=f?f.pathnameBase:"/";f&&f.route;let b=Gt(),C;if(l){var k;let z=typeof l=="string"?Xi(l):l;v==="/"||(k=z.pathname)!=null&&k.startsWith(v)||je(!1),C=z}else C=b;let B=C.pathname||"/",G=B;if(v!=="/"){let z=v.replace(/^\//,"").split("/");G="/"+B.replace(/^\//,"").split("/").slice(z.length).join("/")}let Q=fh(r,{pathname:G}),W=Yh(Q&&Q.map(z=>Object.assign({},z,{params:Object.assign({},x,z.params),pathname:oi([v,p.encodeLocation?p.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?v:oi([v,p.encodeLocation?p.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),m,c,u);return l&&W?q.createElement(uo.Provider,{value:{location:Vt({pathname:"/",search:"",hash:"",state:null,key:"default"},C),navigationType:ni.Pop}},W):W}function Wh(){let r=Jh(),l=Lh(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),c=r instanceof Error?r.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},l),c?q.createElement("pre",{style:p},c):null,null)}const Hh=q.createElement(Wh,null);class _h extends q.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){console.error("React Router caught the following error during render",l,c)}render(){return this.state.error!==void 0?q.createElement(si.Provider,{value:this.props.routeContext},q.createElement(gu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vh(r){let{routeContext:l,match:c,children:u}=r,p=q.useContext(Is);return p&&p.static&&p.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=c.route.id),q.createElement(si.Provider,{value:l},u)}function Yh(r,l,c,u){var p;if(l===void 0&&(l=[]),c===void 0&&(c=null),u===void 0&&(u=null),r==null){var m;if(!c)return null;if(c.errors)r=c.matches;else if((m=u)!=null&&m.v7_partialHydration&&l.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let f=r,x=(p=c)==null?void 0:p.errors;if(x!=null){let C=f.findIndex(k=>k.route.id&&(x==null?void 0:x[k.route.id])!==void 0);C>=0||je(!1),f=f.slice(0,Math.min(f.length,C+1))}let v=!1,b=-1;if(c&&u&&u.v7_partialHydration)for(let C=0;C<f.length;C++){let k=f[C];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(b=C),k.route.id){let{loaderData:B,errors:G}=c,Q=k.route.loader&&B[k.route.id]===void 0&&(!G||G[k.route.id]===void 0);if(k.route.lazy||Q){v=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}return f.reduceRight((C,k,B)=>{let G,Q=!1,W=null,z=null;c&&(G=x&&k.route.id?x[k.route.id]:void 0,W=k.route.errorElement||Hh,v&&(b<0&&B===0?(Xh("route-fallback"),Q=!0,z=null):b===B&&(Q=!0,z=k.route.hydrateFallbackElement||null)));let te=l.concat(f.slice(0,B+1)),se=()=>{let ne;return G?ne=W:Q?ne=z:k.route.Component?ne=q.createElement(k.route.Component,null):k.route.element?ne=k.route.element:ne=C,q.createElement(Vh,{match:k,routeContext:{outlet:C,matches:te,isDataRoute:c!=null},children:ne})};return c&&(k.route.ErrorBoundary||k.route.errorElement||B===0)?q.createElement(_h,{location:c.location,revalidation:c.revalidation,component:W,error:G,children:se(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):se()},null)}var xu=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(xu||{}),bu=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(bu||{});function Gh(r){let l=q.useContext(Is);return l||je(!1),l}function $h(r){let l=q.useContext(Bh);return l||je(!1),l}function Qh(r){let l=q.useContext(si);return l||je(!1),l}function wu(r){let l=Qh(),c=l.matches[l.matches.length-1];return c.route.id||je(!1),c.route.id}function Jh(){var r;let l=q.useContext(gu),c=$h(),u=wu();return l!==void 0?l:(r=c.errors)==null?void 0:r[u]}function Kh(){let{router:r}=Gh(xu.UseNavigateStable),l=wu(bu.UseNavigateStable),c=q.useRef(!1);return yu(()=>{c.current=!0}),q.useCallback(function(p,m){m===void 0&&(m={}),c.current&&(typeof p=="number"?r.navigate(p):r.navigate(p,Vt({fromRouteId:l},m)))},[r,l])}const Gd={};function Xh(r,l,c){Gd[r]||(Gd[r]=!0)}function Zh(r,l){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function xe(r){je(!1)}function ef(r){let{basename:l="/",children:c=null,location:u,navigationType:p=ni.Pop,navigator:m,static:f=!1,future:x}=r;Yt()&&je(!1);let v=l.replace(/^\/*/,"/"),b=q.useMemo(()=>({basename:v,navigator:m,static:f,future:Vt({v7_relativeSplatPath:!1},x)}),[v,x,m,f]);typeof u=="string"&&(u=Xi(u));let{pathname:C="/",search:k="",hash:B="",state:G=null,key:Q="default"}=u,W=q.useMemo(()=>{let z=Us(C,v);return z==null?null:{location:{pathname:z,search:k,hash:B,state:G,key:Q},navigationType:p}},[v,C,k,B,G,Q,p]);return W==null?null:q.createElement(ji.Provider,{value:b},q.createElement(uo.Provider,{children:c,value:W}))}function af(r){let{children:l,location:c}=r;return Fh(As(l),c)}new Promise(()=>{});function As(r,l){l===void 0&&(l=[]);let c=[];return q.Children.forEach(r,(u,p)=>{if(!q.isValidElement(u))return;let m=[...l,p];if(u.type===q.Fragment){c.push.apply(c,As(u.props.children,m));return}u.type!==xe&&je(!1),!u.props.index||!u.props.children||je(!1);let f={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=As(u.props.children,m)),c.push(f)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)({}).hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},Cs.apply(null,arguments)}function tf(r,l){if(r==null)return{};var c={};for(var u in r)if({}.hasOwnProperty.call(r,u)){if(l.indexOf(u)!==-1)continue;c[u]=r[u]}return c}function nf(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function of(r,l){return r.button===0&&(!l||l==="_self")&&!nf(r)}const rf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sf="6";try{window.__reactRouterVersion=sf}catch{}const lf="startTransition",$d=zp[lf];function cf(r){let{basename:l,children:c,future:u,window:p}=r,m=q.useRef();m.current==null&&(m.current=mh({window:p,v5Compat:!0}));let f=m.current,[x,v]=q.useState({action:f.action,location:f.location}),{v7_startTransition:b}=u||{},C=q.useCallback(k=>{b&&$d?$d(()=>v(k)):v(k)},[v,b]);return q.useLayoutEffect(()=>f.listen(C),[f,C]),q.useEffect(()=>Zh(u),[u]),q.createElement(ef,{basename:l,children:c,location:x.location,navigationType:x.action,navigator:f,future:u})}const df=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$=q.forwardRef(function(l,c){let{onClick:u,relative:p,reloadDocument:m,replace:f,state:x,target:v,to:b,preventScrollReset:C,viewTransition:k}=l,B=tf(l,rf),{basename:G}=q.useContext(ji),Q,W=!1;if(typeof b=="string"&&uf.test(b)&&(Q=b,df))try{let ne=new URL(window.location.href),le=b.startsWith("//")?new URL(ne.protocol+b):new URL(b),ke=Us(le.pathname,G);le.origin===ne.origin&&ke!=null?b=ke+le.search+le.hash:W=!0}catch{}let z=Rh(b,{relative:p}),te=mf(b,{replace:f,state:x,target:v,preventScrollReset:C,relative:p,viewTransition:k});function se(ne){u&&u(ne),ne.defaultPrevented||te(ne)}return q.createElement("a",Cs({},B,{href:Q||z,onClick:W||m?u:se,ref:c,target:v}))});var Qd;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Qd||(Qd={}));var Jd;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Jd||(Jd={}));function mf(r,l){let{target:c,replace:u,state:p,preventScrollReset:m,relative:f,viewTransition:x}=l===void 0?{}:l,v=$e(),b=Gt(),C=vu(r,{relative:f});return q.useCallback(k=>{if(of(k,c)){k.preventDefault();let B=u!==void 0?u:lo(b)===lo(C);v(r,{replace:B,state:p,preventScrollReset:m,relative:f,viewTransition:x})}},[b,v,C,u,p,c,r,m,f,x])}function et(r,l){typeof gtag<"u"&&gtag("event",r,l)}function Su(r){et("generate_lead",{event_category:"contact",event_label:r.service||"general",language:r.language})}function ri(r){et("phone_call_click",{event_category:"contact",phone_number:r.phone_number,location:r.location,language:r.language})}function ju(r){et("cta_click",{event_category:"engagement",cta_label:r.label,location:r.location,language:r.language})}function Au(r){et("service_view",{event_category:"engagement",service_name:r.service_name,service_slug:r.service_slug,language:r.language})}function Cu(r){et("resource_view",{event_category:"engagement",resource_name:r.resource_name,resource_slug:r.resource_slug,language:r.language})}function pf(r){et("language_switch",{event_category:"engagement",from_language:r.from,to_language:r.to})}const Kd=[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Practice Areas",path:"/services"},{label:"Resources",path:"/resources"},{label:"Success Stories",path:"/success-stories"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],Xd=[{label:"Inicio",path:"/es"},{label:"Sobre Nosotros",path:"/es/sobre-nosotros"},{label:"Servicios",path:"/es/servicios"},{label:"Recursos",path:"/es/recursos"},{label:"Historias de Éxito",path:"/es/historias-de-exito"},{label:"Blog",path:"/es/blog"},{label:"Contáctenos",path:"/es/contactenos"}];function hf(){const[r,l]=q.useState(!1),[c,u]=q.useState(!1),p=Gt(),m=$e(),f=p.pathname.startsWith("/es"),x=b=>p.pathname===b;q.useEffect(()=>{const b=()=>u(window.scrollY>20);return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]),q.useEffect(()=>{l(!1),window.scrollTo({top:0,behavior:"smooth"})},[p.pathname]);const v=()=>{pf({from:f?"es":"en",to:f?"en":"es"}),m(f?"/":"/es")};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"bg-[#131E35] text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[i.jsxs("div",{className:"flex items-center gap-6",children:[i.jsxs("a",{href:"tel:2133881821",onClick:()=>ri({phone_number:"2133881821",location:"nav",language:f?"es":"en"}),className:"hover:text-[#D4A853] transition-colors flex items-center gap-1.5",children:[i.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),"(213) 388-1821"]}),i.jsx("a",{href:"tel:8552016898",onClick:()=>ri({phone_number:"8552016898",location:"nav",language:f?"es":"en"}),className:"hover:text-[#D4A853] transition-colors hidden sm:flex items-center gap-1.5",children:"Toll Free: (855) 201-6898"})]}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("button",{onClick:v,className:"bg-[#D4A853] text-[#1B2A4A] px-3 py-0.5 rounded-full text-xs font-bold tracking-wide hover:bg-[#E8C97A] transition-colors cursor-pointer",children:f?"English":"Español"}),i.jsx("span",{className:"hidden sm:inline text-gray-400",children:"|"}),i.jsx("span",{className:"hidden sm:inline",children:f?"Consulta":"Consultation"})]})]})}),i.jsxs("nav",{className:`sticky top-0 z-50 transition-all duration-300 ${c?"bg-[#1B2A4A]/98 backdrop-blur-md shadow-lg":"bg-[#1B2A4A]"}`,children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex justify-between items-center h-20",children:[i.jsxs($,{to:"/",className:"flex flex-col items-start group",children:[i.jsxs("span",{className:"text-white font-serif text-xl md:text-2xl font-bold tracking-tight leading-tight",children:["Law Office of ",i.jsx("span",{className:"text-[#D4A853]",children:"Todd Becraft"})]}),i.jsx("span",{className:"text-gray-400 text-[11px] tracking-[0.2em] uppercase mt-0.5",children:f?"Abogados de Inmigración de Los Ángeles":"Los Angeles Immigration Lawyers"})]}),i.jsxs("div",{className:"hidden lg:flex items-center gap-5",children:[f?Xd.map(b=>i.jsx($,{to:b.path,className:`nav-link relative pb-1 whitespace-nowrap ${x(b.path)?"text-[#D4A853] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4A853]":""}`,children:b.label},b.path)):Kd.map(b=>i.jsx($,{to:b.path,className:`nav-link relative pb-1 whitespace-nowrap ${x(b.path)?"text-[#D4A853] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4A853]":""}`,children:b.label},b.path)),i.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6 py-2.5",children:f?"Consulta":"Consultation"})]}),i.jsx("button",{onClick:()=>l(!r),className:"lg:hidden text-white p-2","aria-label":"Toggle menu",children:r?i.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):i.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]})}),i.jsx("div",{className:`lg:hidden transition-all duration-300 overflow-hidden ${r?"max-h-[500px] border-t border-white/10":"max-h-0"}`,children:i.jsxs("div",{className:"px-4 py-4 space-y-1 bg-[#1B2A4A]",children:[f?Xd.map(b=>i.jsx($,{to:b.path,className:`block w-full text-left px-4 py-3 rounded-md text-sm tracking-wide transition-colors ${x(b.path)?"text-[#D4A853] bg-white/5":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:b.label},b.path)):Kd.map(b=>i.jsx($,{to:b.path,className:`block w-full text-left px-4 py-3 rounded-md text-sm tracking-wide transition-colors ${x(b.path)?"text-[#D4A853] bg-white/5":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:b.label},b.path)),i.jsx("div",{className:"pt-3 px-4",children:i.jsx("a",{href:"tel:2133881821",className:"btn-gold w-full text-center text-xs",children:"Call (213) 388-1821"})})]})})]})]})}function ff(){return i.jsxs("footer",{className:"bg-[#131E35] text-gray-300",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:[i.jsxs("div",{className:"lg:col-span-1",children:[i.jsxs("h3",{className:"text-white font-serif text-xl font-bold mb-2",children:["Law Office of ",i.jsx("span",{className:"text-[#D4A853]",children:"Todd Becraft"})]}),i.jsx("p",{className:"text-gray-400 text-xs tracking-[0.15em] uppercase mb-6",children:"Los Angeles Immigration Lawyers"}),i.jsx("div",{className:"gold-line mb-6"}),i.jsx("p",{className:"text-sm leading-relaxed text-gray-400",children:"Defending the rights of immigrants and their families for over 20 years. Dedicated exclusively to immigration law."}),i.jsx("div",{className:"mt-6 inline-block bg-[#D4A853] text-[#1B2A4A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide",children:"Se Habla Español"})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Quick Links"}),i.jsx("ul",{className:"space-y-3",children:[{label:"Home",path:"/"},{label:"About the Firm",path:"/about"},{label:"Practice Areas",path:"/services"},{label:"Success Stories",path:"/success-stories"},{label:"Contact Us",path:"/contact"}].map(r=>i.jsx("li",{children:i.jsx($,{to:r.path,className:"text-gray-400 hover:text-[#D4A853] transition-colors text-sm",children:r.label})},r.path))})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Practice Areas"}),i.jsx("ul",{className:"space-y-3",children:["Asylum","Deportation Defense","Green Cards","Family Immigration","Citizenship","DACA","U-Visa"].map(r=>i.jsx("li",{children:i.jsx($,{to:"/services",className:"text-gray-400 hover:text-[#D4A853] transition-colors text-sm",children:r})},r))})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-white font-semibold text-sm uppercase tracking-wider mb-6",children:"Contact Us"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsxs("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),i.jsx("div",{className:"text-sm",children:i.jsx("p",{className:"text-gray-300",children:"Los Angeles, California"})})]}),i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),i.jsxs("div",{className:"text-sm",children:[i.jsx("a",{href:"tel:2133881821",className:"text-gray-300 hover:text-[#D4A853] transition-colors block",children:"(213) 388-1821"}),i.jsx("a",{href:"tel:8552016898",className:"text-gray-400 hover:text-[#D4A853] transition-colors block mt-1",children:"Toll Free: (855) 201-6898"})]})]}),i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx("svg",{className:"w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),i.jsxs("div",{className:"text-sm text-gray-400",children:[i.jsx("p",{children:"Mon – Fri: 9:00 AM – 6:00 PM"}),i.jsx("p",{children:"Sat: By Appointment"})]})]})]}),i.jsx("div",{className:"flex gap-4 mt-6",children:[{social:"facebook",href:"https://www.facebook.com/becraftimmigrationlaw/",label:"Follow the Law Office of Todd Becraft on Facebook"},{social:"linkedin",href:"https://www.linkedin.com/in/todd-becraft-4076b78",label:"Connect with Todd Becraft on LinkedIn"},{social:"instagram",href:"https://www.instagram.com/lawofficeoftoddbecraft/",label:"Follow the Law Office of Todd Becraft on Instagram"}].map(({social:r,href:l,label:c})=>i.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#D4A853] hover:text-[#D4A853] transition-colors","aria-label":c,children:[r==="facebook"&&i.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),r==="linkedin"&&i.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),r==="instagram"&&i.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})]},r))})]})]})}),i.jsx("div",{className:"border-t border-white/10",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:i.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[i.jsxs("p",{className:"text-gray-500 text-xs text-center md:text-left",children:["© ",new Date().getFullYear()," Law Office of Todd Becraft. All rights reserved."]}),i.jsx("p",{className:"text-gray-600 text-[10px] text-center md:text-right max-w-2xl leading-relaxed",children:"Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Past results do not guarantee future outcomes."})]})})})]})}const Ht=[{quote:"Attorney Todd Becraft is an exceptional and knowledgeable immigration attorney. He handled my case with such class and dignity — I won my case. I would highly recommend the Law Offices of Attny. Todd Becraft.",author:"Joseph M.",service:"via Yelp"},{quote:"I will always remember the professional legal services I received from the Law Office of Todd Becraft. All staff are caring and always work according to the instructions of their client. The services I received were far more than what I was charged.",author:"Tiwa Bob",service:"via Google"},{quote:"One hundred percent recommend as the best California immigration attorney, if not one of the best at the country level. His team together make perhaps the best team to handle cases of immigration in the country.",author:"Ariel Arauz",service:"via Google"},{quote:"He is a unique, incomparable and amazing lawyer I have never seen. He wiped tears in my eyes. I recommend to all people who have immigration problems, come talk to Mr. Todd Becraft — you will not be disappointed.",author:"Manu",service:"via Avvo"}];function gf(){const[r,l]=q.useState(0),[c,u]=q.useState(!1),p=q.useCallback(m=>{c||(u(!0),l(m),setTimeout(()=>u(!1),500))},[c]);return q.useEffect(()=>{const m=setInterval(()=>{p((r+1)%Ht.length)},6e3);return()=>clearInterval(m)},[r,p]),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"text-center mb-8",children:i.jsx("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/30",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})})}),i.jsx("div",{className:"min-h-[200px] flex items-center justify-center",children:i.jsxs("div",{className:`text-center transition-opacity duration-500 ${c?"opacity-0":"opacity-100"}`,children:[i.jsxs("blockquote",{className:"text-xl md:text-2xl font-serif text-[#1B2A4A] leading-relaxed max-w-3xl mx-auto mb-8 italic",children:['"',Ht[r].quote,'"']}),i.jsx("div",{className:"gold-line-center mb-4"}),i.jsx("p",{className:"text-[#D4A853] font-semibold tracking-wide",children:Ht[r].author}),i.jsx("p",{className:"text-gray-500 text-sm mt-1",children:Ht[r].service})]})}),i.jsx("div",{className:"flex justify-center gap-3 mt-8",children:Ht.map((m,f)=>i.jsx("button",{onClick:()=>p(f),className:`transition-all duration-300 rounded-full ${f===r?"w-8 h-2 bg-[#D4A853]":"w-2 h-2 bg-[#1B2A4A]/20 hover:bg-[#1B2A4A]/40"}`,"aria-label":`Go to testimonial ${f+1}`},f))}),i.jsx("p",{className:"text-center text-gray-400 text-xs mt-6",children:"From verified client reviews"})]})}const Zd="https://www.becraftimmigrationlaw.com",yf="https://www.makeitglow.co/api/og/becraft-immigration";function Ae({title:r,description:l,canonical:c,ogImage:u,schema:p,hreflang:m}){const f=c?`${Zd}${c}`:"",x=p?Array.isArray(p)?p:[p]:[],v=u||`${yf}?title=${encodeURIComponent(r)}&subtitle=${encodeURIComponent(l.slice(0,80))}`;return i.jsxs(uh,{children:[i.jsx("title",{children:r}),i.jsx("meta",{name:"description",content:l}),f&&i.jsx("link",{rel:"canonical",href:f}),i.jsx("meta",{property:"og:title",content:r}),i.jsx("meta",{property:"og:description",content:l}),i.jsx("meta",{property:"og:type",content:"website"}),f&&i.jsx("meta",{property:"og:url",content:f}),i.jsx("meta",{property:"og:image",content:v}),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),i.jsx("meta",{name:"twitter:title",content:r}),i.jsx("meta",{name:"twitter:description",content:l}),i.jsx("meta",{name:"twitter:image",content:v}),m==null?void 0:m.map(b=>i.jsx("link",{rel:"alternate",hrefLang:b.lang,href:`${Zd}${b.path}`},b.lang)),x.map((b,C)=>i.jsx("script",{type:"application/ld+json",children:JSON.stringify(b)},C))]})}const vf=[{title:"Asylum",desc:"Protection for those fleeing persecution",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})},{title:"BIA & 9th Circuit Appeals",desc:"Challenging unfavorable decisions",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"})})},{title:"Cancellation of Removal",desc:"Stopping deportation proceedings",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})})},{title:"Citizenship & Naturalization",desc:"Becoming a U.S. citizen",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})},{title:"DACA",desc:"Deferred Action for Childhood Arrivals",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})})},{title:"Deportation Defense",desc:"Fighting removal from the U.S.",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"})})},{title:"Green Cards",desc:"Adjustment of Status applications",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})})},{title:"I-601A Waivers",desc:"Provisional unlawful presence waivers",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l2.25 2.25M9.75 14.25l2.25-2.25M6 3.75v16.5h12V8.25L13.5 3.75H6z"})})},{title:"K-1 Fiance Visas",desc:"Bringing your fiance to the U.S.",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})},{title:"TPS",desc:"Temporary Protected Status",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})},{title:"U-Visa",desc:"Protection for crime victims",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})},{title:"Family Immigration",desc:"Reuniting families in the U.S.",icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})})}],xf=[{name:"Three Best Rated",year:"2024"},{name:"10 Best Immigration Attorneys",year:"AIOLA"},{name:"AVVO Top Rated",year:"10.0 Rating"},{name:"21 Best by Expertise",year:"Los Angeles"}];function eu(){const r=$e();return i.jsxs("div",{children:[i.jsx(Ae,{title:"Los Angeles Immigration Lawyers | Law Office of Todd Becraft",description:"Expert immigration attorneys in Los Angeles. Asylum, deportation defense, green cards, citizenship, DACA, and more. Call (213) 388-1821.",canonical:"/",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:[{lang:"en",path:"/"},{lang:"es",path:"/es"},{lang:"x-default",path:"/"}]}),i.jsxs("section",{className:"relative bg-[#1B2A4A] overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.4) 1px, transparent 0)",backgroundSize:"40px 40px"}}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-8"}),i.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6",children:["Defending Your Right to a"," ",i.jsx("span",{className:"text-[#D4A853]",children:"Better Future"})]}),i.jsx("p",{className:"text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl",children:"For over 20 years, the Law Office of Todd Becraft has fought tirelessly for immigrants and their families in Los Angeles and throughout the United States."}),i.jsx("p",{className:"text-gray-400 mb-10",children:"Immigration law is all we do — and we do it exceptionally well."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[i.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[i.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Consultation"]}),i.jsx("button",{onClick:()=>r("/services"),className:"btn-outline",children:"Our Practice Areas"})]}),i.jsxs("div",{className:"mt-10 flex items-center gap-3 text-gray-400 text-sm",children:[i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),i.jsx("span",{children:"(213) 388-1821"}),i.jsx("span",{className:"text-gray-600",children:"|"}),i.jsx("span",{children:"Toll Free: (855) 201-6898"})]})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"bg-white border-b border-gray-100",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",children:xf.map(l=>i.jsxs("div",{className:"text-center group",children:[i.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4A853]/30 mb-3 group-hover:border-[#D4A853] transition-colors",children:i.jsx("svg",{className:"w-7 h-7 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-4.27 1.772 6.003 6.003 0 01-4.27-1.772"})})}),i.jsx("p",{className:"font-serif font-bold text-[#1B2A4A] text-sm",children:l.name}),i.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:l.year})]},l.name))})})}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[i.jsxs("div",{children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-6",children:["Committed to Defending"," ",i.jsx("span",{className:"text-[#D4A853]",children:"Immigrants' Rights"})]}),i.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:"For over 20 years, the Law Office of Todd Becraft has defended the rights of immigrants from around the world. Based in Los Angeles, our firm is dedicated exclusively to immigration law — it is all we do."}),i.jsx("p",{className:"text-gray-600 leading-relaxed mb-8",children:"We understand that every immigration case represents a family's future. That is why we provide personalized, compassionate legal representation to each of our clients, treating every case with the urgency and dedication it deserves."}),i.jsxs("button",{onClick:()=>r("/about"),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Learn About Our Firm",i.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"rounded-sm overflow-hidden",children:[i.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",alt:"Todd Becraft, Founding Attorney",className:"w-full aspect-[4/5] object-cover object-top"}),i.jsxs("div",{className:"bg-[#1B2A4A] p-6",children:[i.jsx("p",{className:"text-white font-serif font-bold",children:"Todd Becraft"}),i.jsx("p",{className:"text-[#D4A853] text-xs tracking-wider uppercase mt-1",children:"Founding Attorney"})]})]}),i.jsxs("div",{className:"hidden bg-[#1B2A4A] rounded-sm p-10 md:p-12",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"20+"}),i.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Years of Experience"})]}),i.jsxs("div",{className:"border-t border-white/10 pt-6",children:[i.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"1000s"}),i.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Families Reunited"})]}),i.jsxs("div",{className:"border-t border-white/10 pt-6",children:[i.jsx("p",{className:"text-4xl font-serif text-[#D4A853] font-bold",children:"100%"}),i.jsx("p",{className:"text-gray-300 text-sm mt-1",children:"Focused on Immigration"})]}),i.jsxs("div",{className:"border-t border-white/10 pt-6",children:[i.jsx("p",{className:"text-lg font-serif text-white font-semibold",children:"Se Habla Espanol"}),i.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Bilingual Legal Services"})]})]})]}),i.jsx("div",{className:"absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A853]/20 rounded-sm -z-10"})]})]})})}),i.jsx("section",{className:"section-padding bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Our Practice Areas"}),i.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"We handle the full spectrum of immigration matters, from family-based petitions to complex deportation defense and federal court appeals."})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:vf.map(l=>i.jsxs("button",{onClick:()=>r("/services"),className:"text-left p-6 bg-[#FAFAF8] rounded-sm border border-gray-100 card-hover group",children:[i.jsx("div",{className:"text-[#D4A853] mb-4 group-hover:scale-110 transition-transform origin-left",children:l.icon}),i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),i.jsx("p",{className:"text-gray-500 text-sm",children:l.desc})]},l.title))}),i.jsx("div",{className:"text-center mt-12",children:i.jsx("button",{onClick:()=>r("/services"),className:"btn-gold",children:"View All Practice Areas"})})]})}),i.jsx("section",{className:"section-padding bg-warm-gray",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold",children:"What Our Clients Say"})]}),i.jsx(gf,{})]})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16 md:py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"text-center mb-12",children:i.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold",children:["Thousands of Families ",i.jsx("span",{className:"text-[#D4A853]",children:"Reunited"})]})}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[{number:"20+",label:"Years of Practice"},{number:"12",label:"Practice Areas"},{number:"4",label:"Dedicated Attorneys & Staff"},{number:"2",label:"Languages Spoken"}].map(l=>i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-4xl md:text-5xl font-serif text-[#D4A853] font-bold mb-2",children:l.number}),i.jsx("p",{className:"text-gray-300 text-sm",children:l.label})]},l.label))})]})}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Schedule Your Consultation Today"}),i.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Take the first step toward securing your future. Our experienced immigration attorneys are ready to evaluate your case and discuss your options."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[i.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Call (213) 388-1821"]}),i.jsx("button",{onClick:()=>r("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Send Us a Message"})]}),i.jsxs("p",{className:"mt-6 text-sm text-gray-500",children:["Toll Free: ",i.jsx("a",{href:"tel:8552016898",className:"text-[#D4A853] hover:underline",children:"(855) 201-6898"}),i.jsx("span",{className:"mx-3 text-gray-300",children:"|"}),i.jsx("span",{className:"text-[#D4A853] font-semibold",children:"Se Habla Espanol"})]})]})})]})}const ii=[{name:"Todd Becraft",title:"Founding Attorney",photo:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",highlight:"20+ Years in Immigration Law",bio:["Todd Becraft is the founding attorney of the Law Office of Todd Becraft, where he has dedicated his career exclusively to immigration law for over 20 years. He is the past Chair of the AILA SoCal Chapter and former Chair of the Los Angeles County Bar Immigration Section.",'In 2009, Todd assumed the immigration practice of Immigration Judge Timothy Everett after Judge Everett left private practice to work for Immigration and Customs Enforcement. Prior to that, Mr. Becraft worked closely with Judy Wood, widely known as "Saint Judy," whose remarkable advocacy was portrayed in the motion picture of the same name.',"Mr. Becraft has successfully represented thousands of clients in asylum, deportation defense, cancellation of removal, family-based immigration, and federal court appeals before the Board of Immigration Appeals and the Ninth Circuit Court of Appeals."]},{name:"Dennis Escobar",title:"Lead Paralegal & Office Manager",photo:"https://images.makeitglow.co/projects/becraft-immigration/8f93bc42d26b873e-dennis-escobar-portrait-becraft-immigration-law-980x1337.webp",highlight:"25+ Years in Immigration Law",bio:["For more than 25 years, Dennis Escobar has dedicated his career to immigration law. As the Lead Paralegal and Office Manager, Dennis manages the daily operations of the office while working closely with attorneys and clients on nearly every stage of a case.","As an immigrant himself, Dennis knows firsthand the challenges families face. He is admired for his patience, dedication, and compassion, always taking the time to listen and address client concerns with care."]},{name:"Gianina Haro",title:"Paralegal",highlight:"30+ Years in Immigration Law",photo:"https://images.makeitglow.co/projects/becraft-immigration/4baa423944dd3952-gianina-haro-portrait-becraft-immigration-law-980x1337.webp",bio:["With over thirty years of experience in immigration law, Gianina Haro is a cornerstone of client support at the Law Office of Todd Becraft. She specializes in preparing filings, gathering evidence, and managing the details that keep cases moving forward seamlessly.","Fluent in both English and Spanish, Gianina bridges communication gaps, helping clients feel comfortable and understood. She works across a wide range of immigration matters, including asylum applications, family-based petitions, waivers, and naturalization."]},{name:"Imani Machado",title:"Marketing Director & Client Specialist",photo:"https://images.makeitglow.co/projects/becraft-immigration/c309104b568a8ee4-imani-machado-portrait-becraft-immigration-law-980x1337.webp",bio:["Imani Machado brings creativity, strategy, and compassion to her role as Marketing Director and Client Specialist. With over a decade of experience in legal marketing and client relations, she ensures that the firm's mission of advocacy extends beyond the courtroom and into every interaction with clients and the broader community.","Imani manages outreach efforts, develops educational resources, and works directly with clients to provide support and guidance throughout their immigration journey. Her dedication extends into the broader community, where she partners with organizations and initiatives that serve immigrant families across Southern California."]}],bf=[{title:"20+ Years of Experience",desc:"Two decades of dedicated immigration law practice means we have seen and successfully handled virtually every type of case.",icon:"clock"},{title:"Immigration Law Exclusively",desc:"We do not dabble in other areas. Immigration is our sole focus, giving us unmatched depth of knowledge.",icon:"focus"},{title:"Personalized Attention",desc:"Every case is personally handled by our attorneys. You work directly with experienced lawyers, not junior staff.",icon:"person"},{title:"Bilingual Services",desc:"Our team is fully bilingual in English and Spanish. Nothing is lost in translation when your future is on the line.",icon:"language"},{title:"Proven Track Record",desc:"Thousands of successful cases, including complex asylum claims and deportation defenses other firms turned away.",icon:"check"},{title:"Compassionate Advocacy",desc:"We understand the emotional toll of immigration proceedings. Our team provides genuine empathy and support.",icon:"heart"}];function wf({type:r}){const l="w-6 h-6";switch(r){case"clock":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})});case"focus":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})});case"person":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})});case"language":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})});case"check":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})});case"heart":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})});default:return null}}function Sf(){const r=$e();return i.jsxs("div",{children:[i.jsx(Ae,{title:"About | Law Office of Todd Becraft",description:"Meet Attorney Todd Becraft — decades of immigration law experience in Los Angeles helping families, DACA recipients, asylum seekers, and more.",canonical:"/about",schema:{"@context":"https://schema.org","@type":"AboutPage",name:"About Todd Becraft"}}),i.jsxs("section",{className:"relative overflow-hidden",children:[i.jsxs("div",{className:"absolute inset-0",children:[i.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/d4f20bfcce771e9e-unnamed-10-scaled.webp",alt:"The Becraft Immigration Law team",className:"hidden md:block w-full h-full object-cover"}),i.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/team-9x16.jpg",alt:"The Becraft Immigration Law team",className:"block md:hidden w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/80 to-[#1B2A4A]/40"})]}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36",children:i.jsxs("div",{className:"max-w-xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6 leading-tight",children:["The People Behind ",i.jsx("span",{className:"text-[#D4A853]",children:"Your Case"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed mb-8",children:"A team that has dedicated their careers — over 50 combined years — exclusively to immigration law. We don't just handle cases. We change lives."}),i.jsx("button",{onClick:()=>r("/contact"),className:"btn-gold",children:"Meet With Us Today"})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"py-20 md:py-28 bg-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid lg:grid-cols-5 gap-16 items-start",children:[i.jsx("div",{className:"lg:col-span-2",children:i.jsxs("div",{className:"sticky top-28",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4 leading-tight",children:"Two Decades of Fighting for What's Right"}),i.jsxs("div",{className:"flex items-center gap-4 mt-8",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"20+"}),i.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Years"})]}),i.jsx("div",{className:"w-px h-12 bg-gray-200"}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"1000s"}),i.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Cases Won"})]}),i.jsx("div",{className:"w-px h-12 bg-gray-200"}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"100%"}),i.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Immigration"})]})]})]})}),i.jsxs("div",{className:"lg:col-span-3 space-y-6",children:[i.jsx("p",{className:"text-gray-600 leading-relaxed text-lg",children:"The Law Office of Todd Becraft was founded with a clear mission: to provide exceptional legal representation to immigrants and their families. Over the past two decades, that mission has never wavered."}),i.jsx("p",{className:"text-gray-600 leading-relaxed",children:"From our offices on Wilshire Boulevard in the heart of Los Angeles, we have helped thousands of individuals navigate the complex U.S. immigration system. Whether our clients are seeking asylum from persecution, fighting deportation, reuniting with family members, or pursuing the dream of U.S. citizenship, we bring the same level of dedication, expertise, and personal attention to every case."}),i.jsx("p",{className:"text-gray-600 leading-relaxed",children:"What sets us apart is our exclusive focus on immigration law. While many firms spread their attention across multiple practice areas, we have chosen to dedicate our entire practice to immigration. This singular focus means we stay at the forefront of constantly changing immigration law and policy, giving our clients a critical advantage."}),i.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Our team members come from diverse backgrounds, and several are immigrants themselves. We understand the challenges our clients face — not just legally, but personally. That lived experience shapes our empathy, our urgency, and our unwavering commitment to every person who walks through our doors."})]})]})})}),i.jsx("section",{className:"bg-[#1B2A4A] overflow-hidden",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"grid lg:grid-cols-2",children:[i.jsxs("div",{className:"relative h-[500px] lg:h-auto",children:[i.jsx("img",{src:ii[0].photo,alt:ii[0].name,className:"absolute inset-0 w-full h-full object-cover object-top"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B2A4A]/30"})]}),i.jsxs("div",{className:"px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center",children:[i.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase mb-3",style:{fontFamily:"'Inter', sans-serif"},children:ii[0].title}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-2",children:ii[0].name}),ii[0].highlight&&i.jsxs("p",{className:"text-[#D4A853]/70 text-sm mb-8 flex items-center gap-2",children:[i.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),ii[0].highlight]}),i.jsx("div",{className:"w-12 h-px bg-[#D4A853]/40 mb-8"}),i.jsx("div",{className:"space-y-4",children:ii[0].bio.map((l,c)=>i.jsx("p",{className:"text-gray-300 leading-relaxed text-[15px]",children:l},c))}),i.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[i.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AILA SoCal Past Chair"}),i.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Three Best Rated"}),i.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AVVO 10.0"}),i.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Pro Bono Award"})]})]})]})})}),i.jsx("section",{className:"py-20 md:py-28 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Our Team"}),i.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Every member of our team shares the same commitment: fighting for our clients' futures."})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:ii.slice(1).map(l=>i.jsxs("div",{className:"group",children:[i.jsxs("div",{className:"relative overflow-hidden rounded-sm mb-6",children:[i.jsx("img",{src:l.photo,alt:l.name,className:"w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"}),i.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[i.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.15em] uppercase mb-1",style:{fontFamily:"'Inter', sans-serif"},children:l.title}),i.jsx("h3",{className:"text-xl font-serif text-white font-bold",children:l.name}),l.highlight&&i.jsx("p",{className:"text-white/50 text-xs mt-1",children:l.highlight})]})]}),i.jsx("div",{className:"space-y-3",children:l.bio.map((c,u)=>i.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:c},u))})]},l.name))})]})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"text-center mb-10",children:i.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase",style:{fontFamily:"'Inter', sans-serif"},children:"Recognition"})}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{name:"Three Best Rated",detail:"Best Immigration Lawyers in Los Angeles"},{name:"10 Best",detail:"American Institute of Legal Counsel"},{name:"AVVO 10.0",detail:"Superb Rating — Top Attorney"},{name:"Expertise",detail:"21 Best Immigration Lawyers in LA"}].map(l=>i.jsxs("div",{className:"text-center py-6 border border-white/5 rounded-sm hover:border-[#D4A853]/20 transition-colors",children:[i.jsx("svg",{className:"w-6 h-6 text-[#D4A853] mx-auto mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),i.jsx("h3",{className:"text-white font-serif font-bold text-sm",children:l.name}),i.jsx("p",{className:"text-gray-500 text-xs mt-1",children:l.detail})]},l.name))})]})}),i.jsx("section",{className:"py-20 md:py-28 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Why Choose Us"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:bf.map(l=>i.jsxs("div",{className:"flex gap-5",children:[i.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:i.jsx(wf,{type:l.icon})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),i.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:l.desc})]})]},l.title))})]})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Ready to Discuss Your Case?"}),i.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us today for a free, confidential consultation with an experienced immigration attorney."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),i.jsx("button",{onClick:()=>r("/contact"),className:"btn-outline",children:"Send a Message"})]})]})})]})}const jf=[{title:"Asylum",slug:"asylum",description:"Protection for individuals who have been persecuted or fear persecution in their home country.",details:["We represent individuals seeking asylum based on persecution due to race, religion, nationality, political opinion, or membership in a particular social group.","Our firm has extensive experience preparing compelling asylum applications, including gathering country condition evidence, organizing supporting documentation, and preparing clients for their asylum interviews and hearings.","We handle both affirmative asylum cases filed with USCIS and defensive asylum claims in immigration court. Our attorneys have a strong track record of winning asylum cases that other firms considered unwinnable."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})},{title:"BIA & 9th Circuit Appeals",slug:"bia-and-9th-circuit-appeals",description:"Challenging unfavorable immigration court decisions at the appellate level.",details:["When an immigration judge issues an unfavorable decision, our attorneys are experienced in filing appeals with the Board of Immigration Appeals (BIA) and, when necessary, petitions for review with the Ninth Circuit Court of Appeals.","Appellate immigration work requires a different skill set than trial-level representation. Our attorneys are skilled legal writers who know how to identify reversible errors, construct persuasive legal arguments, and present cases effectively to appellate judges.","We have successfully reversed deportation orders and secured new hearings for clients whose cases were improperly decided at the trial level."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"})})},{title:"Cancellation of Removal",slug:"cancellation-of-removal",description:"A critical form of relief for individuals facing deportation who have deep ties to the United States.",details:["Cancellation of removal is a powerful defense for individuals in removal proceedings who can demonstrate long-term residence in the U.S. and strong equities such as U.S. citizen or permanent resident family members.","For non-permanent residents, we help clients demonstrate at least 10 years of continuous physical presence, good moral character, and that their removal would result in exceptional and extremely unusual hardship to a qualifying U.S. citizen or permanent resident relative.","For permanent residents, we assist those with 7 years of continuous residence and 5 years of lawful permanent resident status who can show they deserve relief despite any criminal history."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})})},{title:"Citizenship & Naturalization",slug:"citizenship-and-naturalization",description:"Guiding you through the process of becoming a United States citizen.",details:["Becoming a U.S. citizen is one of the most important milestones in an immigrant's journey. Our firm guides clients through every step of the naturalization process, from determining eligibility to preparing for the citizenship interview and exam.","We help with N-400 applications, addressing potential issues with continuous residence, physical presence, good moral character requirements, and any prior immigration or criminal history that could complicate the process.","We also assist individuals who may be eligible for citizenship through derivation or acquisition, including those who may already be citizens without realizing it."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})},{title:"DACA",slug:"daca",description:"Deferred Action for Childhood Arrivals — protecting those who were brought to the U.S. as children.",details:["The Law Office of Todd Becraft has helped countless DACA recipients with their initial applications and renewals. We understand the unique challenges facing Dreamers and are committed to helping them maintain their protected status.","Our services include initial DACA applications (when available), timely renewals to prevent gaps in work authorization, advance parole requests, and addressing any complications that may arise with DACA status.","We stay at the forefront of the constantly changing legal landscape surrounding DACA and ensure our clients are informed of any developments that may affect their status."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})})},{title:"Deportation & Removal Defense",slug:"deportation-and-removal",description:"Aggressive defense for individuals facing removal from the United States.",details:["Facing deportation is one of the most frightening experiences an immigrant can endure. Our attorneys are seasoned courtroom advocates who fight aggressively to keep families together and protect our clients' rights in immigration court.","We explore every possible form of relief available, including asylum, withholding of removal, protection under the Convention Against Torture, cancellation of removal, adjustment of status, voluntary departure, and prosecutorial discretion.","Our attorneys regularly appear before immigration courts in Los Angeles and throughout California, and we are prepared to take cases to the Board of Immigration Appeals and the Ninth Circuit when necessary."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"})})},{title:"Green Cards / Adjustment of Status",slug:"green-card-adjustment-of-status",description:"Helping eligible individuals obtain lawful permanent resident status in the United States.",details:["Whether through a family relationship, employment, or other qualifying category, we guide our clients through the complex process of obtaining their green cards.","Our services include family-based adjustment of status, consular processing for those outside the U.S., employment-based green cards, and green cards through special categories such as VAWA and the diversity visa lottery.","We carefully evaluate each client's eligibility, prepare thorough applications, and represent clients at their adjustment of status interviews to ensure the best possible outcome."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})})},{title:"I-601A Provisional Waivers",slug:"i-601a-provisional-waivers",description:"Waiving the unlawful presence bar so families can stay together during the visa process.",details:["The I-601A provisional unlawful presence waiver allows certain individuals who are immediate relatives of U.S. citizens to apply for a waiver of the 3-year and 10-year unlawful presence bars before departing the United States for their consular interview.","This waiver is critical because it significantly reduces the time families must be separated during the immigration process. Our attorneys have extensive experience demonstrating the extreme hardship to U.S. citizen spouses or parents that is required for waiver approval.","We handle the entire process from evaluating eligibility, preparing the waiver application with compelling hardship evidence, through to coordinating with the U.S. consulate for the immigrant visa interview."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l2.25 2.25M9.75 14.25l2.25-2.25M6 3.75v16.5h12V8.25L13.5 3.75H6z"})})},{title:"K-1 Fiance Visas",slug:"k-1-fiance-visa",description:"Bringing your fiance to the United States so you can marry and start your life together.",details:["The K-1 fiancé visa allows the foreign-citizen fiancé of a U.S. citizen to travel to the United States and marry their U.S. citizen petitioner within 90 days of arrival.","Our firm handles all aspects of the K-1 visa process, including preparing and filing the I-129F petition, gathering evidence of the bona fide relationship, coordinating with the National Visa Center, and preparing for the consular interview.","After marriage, we continue to assist with the adjustment of status process to obtain permanent resident status, as well as the removal of conditions on residence two years after the green card is issued."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})},{title:"Temporary Protected Status (TPS)",slug:"temporary-protected-status-tps",description:"Temporary protection for nationals of designated countries affected by armed conflict or natural disaster.",details:["TPS provides temporary lawful status and work authorization to nationals of countries that have been designated due to ongoing armed conflict, environmental disaster, or other extraordinary conditions.","Our firm assists clients with initial TPS applications, timely re-registrations, and associated employment authorization documents. We also advise TPS holders on pathways to more permanent immigration status when available.","We closely monitor TPS designations and terminations to ensure our clients are prepared for any changes that may affect their status."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})},{title:"U-Visa",slug:"u-visa",description:"Immigration relief for victims of certain crimes who have cooperated with law enforcement.",details:["The U-Visa provides immigration benefits to victims of qualifying crimes who have suffered substantial mental or physical abuse and who are helpful to law enforcement in the investigation or prosecution of criminal activity.","Our attorneys work closely with clients to document their victimization, obtain law enforcement certifications, and build compelling U-Visa petitions. We understand the sensitive nature of these cases and provide compassionate, trauma-informed representation.","We also assist U-Visa holders with work authorization, derivative petitions for qualifying family members, and adjustment of status to permanent residence after three years in U nonimmigrant status."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})},{title:"Family Immigration",description:"Reuniting families through family-based immigration petitions and sponsorship.",details:["Family unity is at the heart of U.S. immigration law, and our firm has helped thousands of families navigate the process of sponsoring loved ones for immigration to the United States.","We handle all categories of family-based immigration, including immediate relative petitions (spouses, minor children, and parents of U.S. citizens), family preference petitions, and the associated adjustment of status or consular processing applications.","Our attorneys address complex issues that can arise in family cases, including prior immigration violations, criminal history, fraud waivers, age-out issues, and the affidavit of support requirements."],icon:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})})}];function Af(){const r=$e(),[l,c]=q.useState(null);return i.jsxs("div",{children:[i.jsx(Ae,{title:"Practice Areas | Law Office of Todd Becraft",description:"Full-service immigration law firm in Los Angeles. Asylum, BIA appeals, cancellation of removal, green cards, citizenship, DACA, U-Visa, and more.",canonical:"/services",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Practice ",i.jsx("span",{className:"text-[#D4A853]",children:"Areas"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Our firm handles the full range of immigration matters. From asylum and deportation defense to family reunification and citizenship, we have the experience and dedication your case demands."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-5xl mx-auto",children:i.jsx("div",{className:"space-y-6",children:jf.map(u=>{const p=l===u.title;return i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[i.jsxs("button",{onClick:()=>c(p?null:u.title),className:"w-full text-left p-6 md:p-8 flex items-start gap-5",children:[i.jsx("div",{className:"flex-shrink-0 w-14 h-14 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:u.icon}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-1",children:u.title}),i.jsx("p",{className:"text-gray-500 text-sm",children:u.description})]}),i.jsx("div",{className:"flex-shrink-0 mt-1",children:i.jsx("svg",{className:`w-5 h-5 text-[#D4A853] transition-transform duration-300 ${p?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})})]}),i.jsx("div",{className:`transition-all duration-300 overflow-hidden ${p?"max-h-[600px] opacity-100":"max-h-0 opacity-0"}`,children:i.jsxs("div",{className:"px-6 md:px-8 pb-8 ml-0 md:ml-[4.75rem]",children:[i.jsx("div",{className:"gold-line mb-5"}),i.jsx("div",{className:"space-y-4",children:u.details.map((m,f)=>i.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:m},f))}),i.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[u.slug&&i.jsxs($,{to:`/services/${u.slug}`,onClick:m=>m.stopPropagation(),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Learn More",i.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),i.jsx("button",{onClick:m=>{m.stopPropagation(),r("/contact")},className:"inline-flex items-center text-gray-500 font-semibold text-sm tracking-wide uppercase hover:text-[#1B2A4A] transition-colors",children:"Discuss Your Case"})]})]})})]},u.title)})})})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Not Sure Which Service You Need?"}),i.jsx("p",{className:"text-gray-300 mb-8",children:"Every immigration case is unique. Contact us for a consultation and we will help you understand your options."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),i.jsx("button",{onClick:()=>r("/contact"),className:"btn-outline",children:"Contact Us Online"})]})]})})]})}const Cf=[{slug:"asylum",title:"Asylum",subtitle:"Understanding the Process and Challenges",metaDescription:"Explore the concept of asylum and its importance for individuals seeking safety in a new country. Learn the essentials now.",intro:"Federal law in Title 8 U.S. Code § 1158 establishes that any alien physically present in or arriving in the United States, regardless of status, may apply for asylum. Also governed by the UN's 1948 Universal Declaration of Human Rights, UNHCR Refugee Convention of 1951, and the Refugee Act of 1980, a refugee is defined as any person outside their country of nationality who is unable or unwilling to avail themselves of their country's protection due to persecution or well-founded fear of persecution based on nationality, religion, race, membership in a particular social group, or political opinion.",sections:[{heading:"Affirmative Process",paragraphs:["To apply through the affirmative process, you must be physically present in the United States and can apply regardless of your method of arrival or current immigration status. You must apply within one year of your last arrival date, unless circumstances materially changed or extraordinary circumstances caused a delay.","File Form I-589, Application for Asylum and Withholding of Removal with USCIS. After USCIS receives Form I-589, you will receive an acknowledgment of receipt and a notice to visit the nearest Application Support Center for fingerprinting.","Interview priority order: (1) previously scheduled but rescheduled cases; (2) applications pending 21 days or less; (3) all other pending applications, newest first. You may bring an attorney or accredited representative. Spouses and children seeking derivative asylum must also attend. Non-English speakers must bring an interpreter. Interviews typically last about one hour."]},{heading:"A Person Is Not Eligible to Apply for Asylum If They:",bullets:["Do not follow the one-year filing deadline for Form I-589","Had an immigration judge or the BIA deny their previous asylum application","Can be removed to a safe third country under a two-party or multi-party agreement"]},{heading:"Defensive Process",paragraphs:["The defensive process occurs when an alien requests asylum as a defense against removal. Cases are heard in adversarial proceedings before an immigration judge, who hears from both the alien and an ICE attorney.","There are generally two ways people can be placed into defensive asylum processing: (1) referral from USCIS after an affirmative asylum denial; or (2) apprehension without proper documents and a determination that credible fear exists."]},{heading:"Asylum Merits Interview",paragraphs:["Aliens in expedited removal who indicate intent to apply for asylum may be referred to USCIS for credible fear screenings. If credible fear is found, USCIS can either retain and schedule an Asylum Merits Interview, or issue a Notice to Appear. If no credible fear is found, the alien can request review by an immigration judge. This procedure applies only to adults and families placed in expedited removal after May 31, 2022."]}],cta:"Do you need help applying for asylum in the greater Los Angeles area? The Law Office of Todd Becraft understands the most effective ways to handle these cases, so we will be able to help you achieve the most favorable outcome for your particular case. Our firm works very closely with every person we represent, so you can know that we will be by your side the entire time."},{slug:"bia-and-9th-circuit-appeals",title:"BIA and 9th Circuit Appeals",subtitle:"9th Circuit Appeals and Immigration Decisions",metaDescription:"Understand the process of 9th Circuit appeals and how to address adverse immigration decisions effectively.",intro:"Once the Department of Homeland Security or an Immigration Judge has rendered a decision, there may be an administrative appeal to the Administrative Appeals Office (AAO) of the Department of Homeland Security or the Board of Immigration Appeals (BIA) of the Department of Justice. If the BIA denies your appeal, the next step is the Ninth Circuit Court of Appeals.",sections:[{heading:"How BIA Cases Work",paragraphs:["You must file a BIA appeal within 30 days of an immigration judge's denial using Form EOIR-26. The BIA is the highest administrative body for interpreting and applying immigration laws, located at EOIR headquarters in Falls Church, Virginia, with nationwide jurisdiction. BIA decisions are binding on all DHS officers and immigration judges unless modified by the Attorney General or a federal court.","The BIA reviews all evidence submitted to the immigration judge but does not consider new evidence. A decision typically takes at least six months, often more than a year.","The BIA may: send the case back to the immigration judge with new instructions; overturn the original decision (which could mean relief from deportation); or deny outright. If denied, the next step is the Ninth Circuit Court of Appeals."]},{heading:"How Ninth Circuit Cases Work",paragraphs:["The Ninth Circuit handles cases in California, Hawaii, Alaska, Washington, Oregon, Arizona, Idaho, Montana, and Nevada. After a BIA denial, file a Petition for Review with the Ninth Circuit.","Important: Filing with the Ninth Circuit does NOT automatically delay a removal order. You must also file a Motion to Stay Removal. Like the BIA, the Ninth Circuit does not consider new evidence. Decisions typically take more than two years.","If the Ninth Circuit rules in your favor, the court may grant permission to remain in the US, or send the case back to the BIA or immigration judge (a second denial remains possible). If denied, options include: requesting rehearing within 45 days; requesting rehearing en banc (rarely granted); or filing a writ of certiorari with the Supreme Court (even rarer)."]}],cta:"Our firm will invest the necessary time to fully prepare for your hearing and present the strongest possible arguments in your case. Call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles BIA and 9th Circuit appeals attorney."},{slug:"cancellation-of-removal",title:"Cancellation of Removal",subtitle:"A Lifeline for Noncitizens",metaDescription:"Understand cancellation of removal under INA for non-permanent residents and how it can protect against deportation.",intro:"Non-LPR cancellation of removal under INA § 240A(b)(1) is a defensive application only — you cannot apply affirmatively to USCIS. It is only available when you are already facing removal in immigration court. When granted, the person receives a green card.",sections:[{heading:"Cancellation of Removal Eligibility",paragraphs:["To qualify for standard cancellation of removal, you must prove all three of the following:"],numbered:["Prior to receiving a Notice to Appear, you maintained continuous physical presence in the US for 10 or more years and were a person of good moral character (INA § 101(f)) during that period","You were not convicted of any offense under INA § 212(a)(2), INA § 237(a)(2), or INA § 237(a)(3)","Removal would cause exceptional and extremely unusual hardship to a US citizen or LPR spouse, parent, or child, and you deserve a favorable exercise of discretion"]},{heading:"Alternative Eligibility — VAWA (Battered or Subjected to Cruelty)",bullets:["Battered or subjected to extreme cruelty by a US citizen or LPR spouse or parent","Continuous physical presence for 3 or more years, good moral character during that period","Not inadmissible under certain INA sections; not convicted of an aggravated felony","Removal would result in extreme hardship to them or their child"]},{heading:"Satisfying the 10-Year Residence Requirement",paragraphs:["Rent receipts, credit card statements, and pay stubs can help prove continuous residence. Affidavits from friends or family are acceptable when hard evidence is unavailable. Leaving the country for more than 90 days, or trips totaling more than 180 days, can negatively impact the 10-year calculation. Receiving a Notice to Appear stops the 10-year clock."]},{heading:"Satisfying the Qualifying Relative Requirement",paragraphs:["The qualifying relative must be a spouse, parent, or child who is either a US citizen or a lawful permanent resident. A child must be unmarried and under 21."]},{heading:"Satisfying the Exceptional and Extremely Unusual Hardship Requirement",paragraphs:["Hardship must go beyond simple sadness at separation. Unavailability of medical care in the home country often qualifies. Language barriers or a lack of support structures for qualifying relatives can also be factors in your favor."]},{heading:"Satisfying the Good Moral Character Requirement",paragraphs:["Your criminal record will be reviewed; convictions are damaging. Minor crimes can sometimes be overcome through evidence of volunteer service or steady employment."]}],cta:"You may call (213) 388-1821 or contact us online to arrange a consultation with our Los Angeles cancellation of removal lawyer."},{slug:"citizenship-and-naturalization",title:"Citizenship and Naturalization",subtitle:"The Citizenship and Naturalization Process Explained",metaDescription:"Understand Citizenship and Naturalization requirements. Find essential information to help you through the journey.",intro:"Naturalization is the process by which US citizenship is granted to a lawful permanent resident after satisfying the requirements of the INA. Acquisition of citizenship occurs through US citizen parents either at birth or after birth but before age 18.",sections:[{heading:"When Citizenship Is Available",bullets:["Valid green card/LPR status plus 5 years residing in the US","Married to a US citizen plus 3 years residing in the US","LPR status, served in the US military, plus 3 years in the US","Married to a US citizen being transferred abroad by a government agency, armed forces, or multinational company"]},{heading:"Requirements Under Title 8 U.S. Code § 1427(a)",bullets:["Resided for a minimum of 5 continuous years in the US after lawful admission for permanent residence, with physical presence for at least half that time","Resided continuously within the US from the date of application up to admission to citizenship","Been and still are a person of good moral character, abiding by the principles of the Constitution, well disposed to good order and happiness"]},{heading:"To Apply, You Must:",bullets:["Be at least 18 years of age when filing","Be able to read, write, and speak basic English","Prove understanding and knowledge of US history and government","Be willing to take the Oath of Allegiance"]},{heading:"The Naturalization Process",paragraphs:["Submit your application to USCIS. You may be required to submit biometric data. You will then attend an interview with a USCIS immigration officer and take a US government and history test. Benefits of citizenship include the right to vote, priority to petition for family members, the ability to travel with a US passport, eligibility for federal jobs, and much more."]},{heading:"Common Problems to Avoid",bullets:["Errors or inconsistencies in Form N-400","Outstanding warrants or criminal charges or convictions","Failure to fulfill any requirements of citizenship","Inconsistencies in prior immigration applications","Fraud or mistakes in the green card process","Any incomplete citizenship documents"]}],cta:"Our firm has been helping immigrants for more than a decade. You can call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles citizenship and naturalization lawyer."},{slug:"daca",title:"DACA",subtitle:"Insights into Immigration Relief Options",metaDescription:"Understand the complexities of DACA and how it still offers valuable benefits for eligible individuals in the U.S. today.",intro:"The US District Court for the Southern District of Texas imposed an injunction on July 16, 2021 (affirmed by the 5th Circuit) permanently enjoining DHS from granting DACA to new applicants, but it did not cancel existing DACA status for people in good standing. Benefits for eligible individuals include a two-year lawful status to reside in the US, the ability to apply for driver's licenses, and the ability to seek approval to leave and re-enter the country.",sections:[{heading:"DACA Requirements",paragraphs:["To be eligible for DACA, you must meet all of the following criteria:"],bullets:["Under 31 years of age on June 15, 2012 (born on or after June 16, 1981)","Came to the United States before reaching 16 years of age","Lived continuously in the United States since June 15, 2007","Physically present in the United States at time of filing and on June 15, 2012","Did not have lawful immigration status on June 15, 2012, or at time of filing","Currently enrolled in school, graduated high school or obtained a certificate of completion, obtained a GED, or were an honorably discharged veteran","Have not been convicted of a felony, significant misdemeanor, or three or more other misdemeanors, and do not pose a threat to national security or public safety"]},{heading:"DACA Filing Process",paragraphs:["You will need to collect and submit the following documentation:"],bullets:["Proof of identity: passport, national ID, birth certificate with photo ID, school or military ID, or a US government immigration document with photo","Proof of entry before age 16: passport with admission stamp, school records, Form I-94, travel records, INS/DHS document stating entry date, employment records, hospital or medical records","Proof of immigration status as of June 15, 2012","Proof of continuous presence in the US on June 15, 2012 and continuous residence since June 15, 2007 (rent receipts, utility bills, employment records, school records, bank transactions, etc.)","Proof of student status at time of request if applicable (school records, diploma, GED certificate)","Complete Form I-821D, Form I-765, and Form I-675 Worksheet; mail to the appropriate USCIS Lockbox; visit an ASC for biometric services"]}],cta:"Our firm understands how frightening many aspects of this process can be for people, but we will know how to walk you through the entire journey and make everything as simple as possible. You can call (213) 388-1821 or contact us online to receive a consultation with our Los Angeles DACA lawyer."},{slug:"deportation-and-removal",title:"Deportation and Removal",subtitle:"What You Need to Know",metaDescription:"Understand Deportation and Removal under U.S. law. Know your rights and options if facing removal proceedings.",intro:"Title 8 U.S. Code § 1229a governs removal proceedings. Few prospects can be more frightening for people who are lawful permanent residents or otherwise satisfying legal requirements to remain in the United States, because immigration officials may be preparing to argue that a person needs to be removed immediately. A deportation case ends with either deportation or remaining eligible to live and work in the US.",sections:[{heading:"When DHS Commonly Begins Deportation Cases",bullets:["Marriage fraud","Person entered the United States without proper authority","Person was initially in the US legally but visa has since expired","Person who violates terms of admission or works without permission","Green card holder found guilty of a serious crime or had difficulty with the law","Person with criminal convictions","Person whose asylum claim has been denied","Person who overstays a visa","Person filed for an immigration benefit and it was denied"]},{heading:"Deportation Hearings",paragraphs:["A Notice to Appear means DHS has already begun the removal or deportation process. This document includes the reasons for removal, the court location, the date and time of the first hearing, the legal authority relied upon, your right to hire an attorney, the consequences for failing to appear, and the requirement to provide your current address and phone number.",'Los Angeles Immigration Court is located on Olive Street in downtown LA. The first hearing is called a "master hearing" or "master calendar hearing." A final hearing — if multiple hearings occur — is called an "individual hearing." Other hearings may include bond redetermination hearings, withholding-only hearings, and rescission hearings.',"It is important for people to understand that arrests in Los Angeles do not automatically translate to deportations. You will not lose a visa or green card for criminal charges, but you could be at risk."]},{heading:"Most Common Crimes Among Immigrants Facing Removal",bullets:["Drug crimes","Domestic violence","Sex crimes","Firearm crimes","Theft or robbery charges","Fraud crimes"]},{heading:"Timeline",paragraphs:["Some people on an expedited docket may resolve their case within six months. Cancellation of removal generally takes up to a year and a half from the master calendar hearing. If cancellation is denied, you can appeal to the BIA."]}],cta:"Our firm understands that every client we serve is unique, and we take the time to really develop relationships with the people we serve. Take the first step when you call (213) 388-1821 or contact us online today to set up a consultation with our Los Angeles deportation and removal lawyer."},{slug:"green-card-adjustment-of-status",title:"Green Card / Adjustment of Status",subtitle:"Your Path to Permanent Residency",metaDescription:"Understand the Green Card process, from eligibility to application, and start your journey to permanent residency.",intro:"Adjustment of status is the process to apply for lawful permanent residence while inside the United States. A green card (Permanent Resident Card) gives you official immigration status, entitles you to certain rights, and is required to naturalize as a US citizen. Unlike consular processing, you do not have to return to your country of citizenship — a process that can save considerable time and expense.",sections:[{heading:"How to Apply for a Green Card",paragraphs:["Most applicants need to complete at least two forms: an immigrant petition and a green card application. Another person usually files the petition on your behalf as the sponsoring petitioner. The federal government states that being a permanent resident is a privilege, not a right."]},{heading:"Green Card Categories",bullets:["Family-based: immediate relatives of US citizens (spouse, unmarried child under 21, parents of adults); family preference categories; fiancé(e)s (K-1/K-2); widow(er)s; VAWA self-petitioners","Employment-based: EB-1 through EB-5 based on qualifications — extraordinary ability, outstanding researchers/professors, multinational managers, advanced degree professionals, skilled workers, and EB-5 investors","Special immigrants: Special Immigrant Juveniles; Afghan/Iraqi translators; religious workers; international organization employees","Refugee or asylee status (granted asylum or admitted as refugee at least one year ago)","Victims of human trafficking or crime (T and U visas)","Diversity Immigrant Visa Program (lottery)","Cuban Adjustment Act and other special programs"]},{heading:"The Application Process (Inside the US)",numbered:["File an immigrant petition with USCIS (e.g., Form I-130 for family-based, Form I-140 for employment-based)","Check visa availability using the DOS Visa Bulletin","File Form I-485 (Application to Register Permanent Residence or Adjust Status)","Attend a biometrics ASC appointment","Attend an interview when applicable","Respond to any requests for evidence","Receive a decision"]},{heading:"The Application Process (Outside the US — Consular Processing)",numbered:["File an immigrant petition","Wait for the petition decision","Receive NVC notification","Attend a consular office appointment at the nearest US Embassy or Consulate","Receive your green card"]}],cta:"Our firm will take the time to explain every single action that is happening in your case and how we are working for you. You can call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles green card/adjustment of status attorney."},{slug:"i-601a-provisional-waivers",title:"I-601A Provisional Waivers",subtitle:"The I 601A Application Process Explained",metaDescription:"Learn about the I 601A application process and how it can affect your immigration journey. Essential information inside.",intro:"Form I-601A (Application for Provisional Unlawful Presence Waiver) is for immigrant visa applicants who are relatives of US citizens or lawful permanent residents. It allows them to request a provisional waiver of unlawful presence grounds of inadmissibility under INA § 212(a)(9)(B) before departing the US for an immigrant visa interview. It does not waive other grounds of inadmissibility. When approved overseas, the person can return to the US and enjoy LPR status and a green card.",sections:[{heading:"Who Can File",bullets:["Relatives of US citizens or LPRs","Diversity Visa lottery winners","Other immigrant visa applicants"]},{heading:"Form I-601A Requirements",bullets:["Being at least 17 years of age","Being physically present in the US and able to provide biometrics","Being willing to leave the US to legally obtain an immigrant visa","A qualifying relative (spouse or parent who is a US citizen or LPR) would suffer extreme hardship if not united in the US","Inadmissible because of unlawful presence (180 days to 365 days during a single stay, or 1 year or more in a single stay)","Has a pending case with the US Department of State for an approved immigrant visa petition or Diversity Visa Program"]},{heading:"People Will Not Qualify If They:",bullets:["Are younger than 17 years of age","Have grounds of inadmissibility for any reason besides unlawful presence","Already have applications to adjust status","Are currently going through removal proceedings","Fail to include details of hardships a spouse or parent would face upon removal","Have a prior order of removal before or during a pending I-601A"]},{heading:"Extreme Hardship Factors Considered",bullets:["Financial harm: future employability, home or business loss, significant decline in standard of living","Health of qualifying relatives: ongoing specialized treatment for physical or mental conditions, limited availability in home country","Personal considerations: close relatives in US or home country, separation from family, ages of involved parties, length of US residence","Special considerations: religious, language, cultural, or ethnic obstacles; valid fears of harm or persecution in home country","Educational losses: lack of ability to pursue higher education, disruption to current programs"]},{heading:"Form I-601A Process",paragraphs:["The filing fee is $630 for Form I-601A plus an $85 biometrics fee. Processing times: Nebraska Service Center — approximately 27 months for I-601A; Potomac Service Center — approximately 35.5 months for I-601A. After approval, apply for a green card through consular processing. If denied, you can appeal within 30 days by filing Form I-290B."]}],cta:"Our firm has handled scores of these kinds of cases, so we know how to deal with every issue that might arise. Call (213) 388-1821 or contact us online to set up a consultation with our Los Angeles I-601A provisional waiver attorney."},{slug:"k-1-fiance-visa",title:"K-1 Fiancé Visa",subtitle:"K-1 Fiancé Visa Requirements and Process Explained",metaDescription:"Discover the essential details about the K-1 Fiancé Visa, a pathway to unite with your partner in the United States.",intro:"US citizens wanting to bring a foreign fiancé(e) to the United States must file Form I-129F (Petition for Alien Fiancé(e)). The couple must intend to marry within 90 days of the fiancé(e) entering the US. The marriage must be bona fide — reflecting genuine intent by both parties to establish a life together, not simply to obtain an immigration benefit. If the couple marries within 90 days of K-1 admission, the fiancé(e) can apply for green card status.",sections:[{heading:"K-1 Visa Eligibility",bullets:["You are a US citizen","You and your fiancé(e) intend to marry within 90 days of their admission on a K-1 visa","Both of you are legally free to marry (all prior marriages legally terminated by divorce, death, or annulment)","You and your fiancé(e) met in person at least once within the two-year period before filing the petition (waivable in cases of strict cultural/social customs or extreme hardship to the US citizen petitioner)"]},{heading:"Not Eligible If:",bullets:["You are already married","You plan to marry outside the United States","Your fiancé(e) already legally resides in the United States"]},{heading:"K-1 Visa Process",numbered:["File Form I-129F — USCIS reviews and may request additional evidence; if approved, sent to the DOS National Visa Center (NVC)","NVC forwards the petition to the US Embassy or consulate where your fiancé(e) will apply for the K-1 visa","Embassy or consulate notifies of visa interview date; fiancé(e) brings required forms and documents","Consular officer determines eligibility; if approved, K-1 visa is valid for up to six months for a single entry","Fiancé(e) travels to the US and seeks admission at a port of entry (CBP makes the final admission decision)","US citizen and fiancé(e) have 90 days to marry","After marriage: file Form I-485 for adjustment of status and a green card","If married less than two years at the time of I-485 approval: USCIS grants conditional permanent resident status, with a green card valid for 2 years","File Form I-751 (Petition to Remove Conditions on Residence) within 90 days before the green card expires"]}],cta:"Our firm has helped scores of people all over California get the K-1 visas they needed to marry. Call (213) 388-1821 or contact us online to set up a consultation with our Los Angeles K-1 lawyer."},{slug:"temporary-protected-status-tps",title:"Temporary Protected Status (TPS)",subtitle:"What You Need to Know",metaDescription:"Learn about Temporary Protected Status and how it impacts the lives of those facing extraordinary circumstances.",intro:"Temporary Protected Status (TPS) is a form of humanitarian relief that helps foreign nationals in the US who may not qualify for asylum but are fleeing or reluctant to return to potentially dangerous situations. The Secretary of Homeland Security designates countries when conditions temporarily prevent nationals from returning safely, or when a country cannot handle the return of its nationals.",sections:[{heading:"Currently Designated TPS Countries",bullets:["Afghanistan, Cameroon, El Salvador, Haiti, Honduras, Myanmar, Nepal, Nicaragua, Somalia, South Sudan, Sudan, Syria, Ukraine, Venezuela, Yemen"]},{heading:"TPS Requirements",paragraphs:["To be eligible, you must meet all of the following:"],bullets:["National of a designated TPS country (or, if stateless, last habitually resided in a designated country)","Filed during the initial open registration or re-registration period, or meet late initial filing requirements","Continuously physically present in the US since the effective date of the most recent designation","Continuously resided in the US since the country's specified date","Brief, casual, and innocent departures from the US are permitted; you must inform USCIS of any absences"]},{heading:"Disqualified If You:",bullets:["Have a felony conviction or two or more misdemeanor convictions in the US","Are found inadmissible under applicable grounds in INA § 212(a)","Are subject to mandatory bars to asylum (persecution of others, engaging or inciting terrorist activity)","Fail to meet continuous physical presence and residence requirements","Fail to register or re-register for TPS as required without good cause"]},{heading:"TPS Registration — Required Documents",bullets:["Form I-821 (Application for TPS) and optionally Form I-765 (Request for Employment Authorization)","Identity and nationality evidence: passport copy, birth certificate with photo ID, or national identity document","Date of entry evidence: passport copy, I-94, or continuous residence documents","Continuous residence evidence: rent receipts, employment records, utility bills, school records, hospital or medical records, church or organization attestations"]}],cta:"Our firm works very closely with every client, so you will be kept up to date on everything that is happening with your case. Call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles TPS attorney."},{slug:"u-visa",title:"U-Visa",subtitle:"U-Visa Process and Important Facts",metaDescription:"Explore the U-Visa process and its significance for individuals seeking safety and security in the United States.",intro:"U nonimmigrant status (U visa) is immigration relief for victims of certain crimes. It makes it safer for victims to report cases to law enforcement and help authorities pursue criminal cases. Benefits include temporary immigration status, work authorization, temporary status for qualifying family members, and the possibility of lawful permanent resident status. Created by the Victims of Trafficking and Violence Protection Act (VTVPA) in 2000, the most recent USCIS statistics show an 87 percent approval rate for U visa petitioners. A U visa should be free.",sections:[{heading:"Qualifying Criminal Activity Includes:",bullets:["Abduction, Abusive Sexual Contact, Blackmail, Domestic Violence, Extortion, False Imprisonment, Female Genital Mutilation, Felonious Assault","Fraud in Foreign Labor Contracting, Hostage, Incest, Involuntary Servitude, Kidnapping, Manslaughter, Murder, Obstruction of Justice","Peonage, Perjury, Prostitution, Sexual Assault, Sexual Exploitation, Slave Trade, Stalking, Torture, Trafficking, Witness Tampering","Unlawful Criminal Restraint, and other related crimes where elements are substantially similar","Attempts, conspiracies, or solicitations to commit any of these offenses"]},{heading:"U-Visa Eligibility Requirements",bullets:["You suffered substantial physical or mental abuse as a result of being a victim of qualifying criminal activity","You have information about the criminal activity (if under 16 or unable to provide due to disability, a parent, guardian, or next friend may possess this information)","You were, are, or are likely to be helpful to law enforcement in the investigation or prosecution","The crime occurred in the US or violated American laws","You are admissible to the US (if not, you can apply for a waiver on Form I-192)"]},{heading:"Applying for a U Visa (Inside the US)",bullets:["Form I-918, Petition for U Nonimmigrant Status","Form I-918, Supplement B, U Nonimmigrant Status Certification (signed by an authorized official of a certifying law enforcement agency)","Form I-192 if inadmissibility issues are present","A personal statement describing the criminal activity","Evidence to establish each eligibility requirement"]},{heading:"Applying for a U Visa (Outside the US)",bullets:["File all necessary forms with the Vermont Service Center","Follow instructions from the Vermont Service Center, including providing fingerprints at the nearest US Embassy or Consulate","If approved, engage in the consular process, including an interview with a consular officer at the nearest US Embassy or Consulate"]}],cta:"Our firm will know how to help you get around any complication and be able to achieve the most favorable possible outcome for your case. You may call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles U-Visa attorney."}];function Nf(r){return Cf.find(l=>l.slug===r)}const au={asylum:"asilo","cancellation-of-removal":"cancelacion-de-eliminacion","citizenship-and-naturalization":"ciudadania-y-naturalizacion",daca:"daca","deportation-and-removal":"deportacion-y-remocion","green-card-adjustment-of-status":"tarjeta-verde-ajuste-de-estatus","i-601a-provisional-waivers":"i-601a-exenciones-provisionales","k-1-fiance-visa":"visa-de-prometido-k-1","temporary-protected-status-tps":"estado-de-proteccion-temporal-tps","u-visa":"visa-u"};function kf(){const{area:r}=Zi(),l=r?Nf(r):void 0;return q.useEffect(()=>{l&&Au({service_name:l.title,service_slug:l.slug,language:"en"})},[l==null?void 0:l.slug]),l?i.jsxs("div",{children:[i.jsx(Ae,{title:`${l.title} | Law Office of Todd Becraft`,description:l.metaDescription,canonical:`/services/${l.slug}`,ogImage:`https://www.makeitglow.co/api/og/becraft-immigration?title=${encodeURIComponent(l.title)}&subtitle=${encodeURIComponent("Law Office of Todd Becraft")}`,schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:au[l.slug]?[{lang:"en",path:`/services/${l.slug}`},{lang:"es",path:`/es/servicios/${au[l.slug]}`},{lang:"x-default",path:`/services/${l.slug}`}]:void 0}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[i.jsx($,{to:"/services",className:"hover:text-[#D4A853] transition-colors",children:"Practice Areas"}),i.jsx("span",{children:"/"}),i.jsx("span",{className:"text-gray-300",children:l.title})]}),i.jsx("div",{className:"gold-line mb-6"}),i.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:l.title}),i.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:l.subtitle}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:l.intro})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("div",{className:"space-y-10",children:l.sections.map((c,u)=>{var p;return i.jsxs("div",{children:[c.heading&&i.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>i.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:m},f)),c.bullets&&c.bullets.length>0&&i.jsx("ul",{className:"space-y-2 mb-4",children:c.bullets.map((m,f)=>i.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[i.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),i.jsx("span",{children:m})]},f))}),c.numbered&&c.numbered.length>0&&i.jsx("ol",{className:"space-y-2 mb-4",children:c.numbered.map((m,f)=>i.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[i.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:f+1}),i.jsx("span",{children:m})]},f))})]},u)})}),i.jsx("div",{className:"gold-line my-10"}),i.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[i.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:l.cta}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",onClick:()=>ri({phone_number:"2133881821",location:"service_cta",language:"en"}),className:"btn-gold",children:"Call (213) 388-1821"}),i.jsx($,{to:"/contact",onClick:()=>ju({label:"contact_us_online",location:"service_cta",language:"en"}),className:"btn-outline",children:"Contact Us Online"})]})]})]})}),i.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4",children:i.jsxs($,{to:"/services",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[i.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"All Practice Areas"]})})})]}):i.jsxs("div",{className:"section-padding text-center",children:[i.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Page Not Found"}),i.jsx("p",{className:"text-gray-500 mb-8",children:"That practice area doesn't exist."}),i.jsx($,{to:"/services",className:"btn-gold",children:"Back to Practice Areas"})]})}const Nu=[{slug:"the-becraft-guide-to-avoiding-deportation",title:"The Becraft Guide to Avoiding Deportation",subtitle:"What Are Your Legal Rights If You Might Be Deported?",metaDescription:"A comprehensive guide to avoiding deportation from the Law Office of Todd Becraft — understand your legal options, defenses, and relief measures.",intro:"Deportation, also known as removal, is a serious and often distressing process in which a non-citizen is ordered to leave a country due to a violation of immigration laws. If you or someone you know is facing the risk of deportation, it is crucial to understand the legal options available. Several legal recourses can help challenge removal orders and provide avenues for remaining in the country lawfully. At the Law Office of Todd Becraft, we bring many years of experience helping people just like you to avoid getting deported.",sections:[{heading:"Understanding the Deportation Process",paragraphs:["Before diving into legal recourses, it is important to understand how deportation proceedings work. Deportation typically begins with an arrest or a notice to appear (NTA) before an immigration judge. The U.S. Immigration and Customs Enforcement (ICE) agency is responsible for enforcing deportation orders in the United States.","The process generally follows these steps:"],bullets:["Issuance of a Notice to Appear (NTA): This document outlines the reasons for the removal proceedings and specifies a court date.","Master Calendar Hearing: This initial hearing allows the non-citizen to respond to the charges and request relief.","Individual Hearing: If relief is sought, a separate hearing will be scheduled to present evidence and legal arguments.","Decision by the Immigration Judge: The judge will either grant relief or issue a deportation order.","Appeals: If the judge orders deportation, the individual may have options to appeal the decision.","Removal or Stay of Removal: If all legal options are exhausted, the individual may be deported or granted a stay of removal."]},{heading:"Legal Recourses for Avoiding Deportation",paragraphs:["There are several defenses and legal recourses available for individuals facing deportation. Each case is unique, and seeking legal counsel is crucial for determining the best course of action."]},{heading:"1. Challenging the Deportation Charges",paragraphs:["One of the first steps in fighting deportation is challenging the legal basis for removal. Possible defenses include:"],bullets:["Procedural Defects: If the NTA contains incorrect information, or if the government fails to follow proper procedures, the case may be dismissed.","Lack of Evidence: The government must prove that the individual is removable. If sufficient evidence is lacking, the case may be dismissed.","Unlawful Arrest or Detention: If an individual's rights were violated during the arrest or detention process, the removal proceedings could be challenged."]},{heading:"2. Asylum and Protection from Persecution",paragraphs:["Individuals who fear persecution in their home country due to race, religion, nationality, political opinion, or membership in a particular social group may apply for asylum. To be eligible, an applicant must:"],bullets:["File the application within one year of arrival in the U.S. (or show exceptional circumstances for late filing).","Demonstrate a credible fear of persecution.","Provide evidence supporting the claim."]},{heading:"3. Withholding of Removal",paragraphs:["Similar to asylum, withholding of removal prevents deportation if the individual can prove they would face persecution in their home country. However, the burden of proof is higher than for asylum, and withholding of removal does not provide a direct path to permanent residency.","This form of relief is particularly useful for individuals who miss the one-year deadline for asylum applications or who have been convicted of certain crimes that bar them from asylum eligibility."]},{heading:"4. Protection Under the Convention Against Torture (CAT)",paragraphs:["Individuals who can prove that they are likely to face torture by the government or with government acquiescence if returned to their home country may qualify for protection under CAT. Unlike asylum, this protection does not lead to permanent residency but it does prevent deportation to the home country."]},{heading:"5. Cancellation of Removal",paragraphs:["Cancellation of removal is a form of relief available to certain individuals who have established strong ties to the U.S. Eligibility criteria vary depending on whether the applicant is a lawful permanent resident (LPR) or a non-permanent resident."],bullets:["For Lawful Permanent Residents: Must have been an LPR for at least five years, resided in the U.S. continuously for at least seven years, and must not have been convicted of an aggravated felony.","For Non-Permanent Residents: Must have been physically present in the U.S. for at least ten years, demonstrate good moral character, and prove that removal would cause exceptional and extremely unusual hardship to a qualifying U.S. citizen or LPR family member."]},{heading:"6. Adjustment of Status",paragraphs:["Some individuals facing deportation may be eligible to adjust their status to that of a lawful permanent resident (green card holder). This option may be available if:"],bullets:["The individual has an immediate family member who is a U.S. citizen or lawful permanent resident and can petition for them.","The individual qualifies under certain employment-based categories.","The individual qualifies under special programs such as the Violence Against Women Act (VAWA) or special immigrant juvenile status (SIJS)."]},{heading:"7. Deferred Action and Prosecutorial Discretion",paragraphs:["In some cases, immigration authorities may decide not to pursue deportation — known as prosecutorial discretion. One well-known form is Deferred Action for Childhood Arrivals (DACA), which provides temporary relief from deportation to certain undocumented immigrants who arrived in the U.S. as children. Factors that may influence prosecutorial discretion include:"],bullets:["Length of time in the U.S.","Family ties in the U.S.","Contributions to the community.","Health issues."]},{heading:"8. Voluntary Departure",paragraphs:["If no other legal remedies are available, an individual may request voluntary departure. This allows them to leave the U.S. on their own terms rather than being forcibly removed, including the ability to reapply for legal entry in the future without the penalties associated with deportation."]},{heading:"9. Appeals and Motions to Reopen",paragraphs:["If a removal order is issued, there are still opportunities to challenge the decision through appeals and motions to reopen or reconsider. The appeals process can be complex, requiring legal expertise to navigate successfully."]}],cta:"Deportation is a serious legal matter, but numerous legal options exist for individuals at risk of removal. Seeking immediate legal counsel is essential. At the Law Office of Todd Becraft, we bring years of experience helping people avoid removal. Call us today: 213-388-1821."},{slug:"the-becraft-guide-to-how-to-get-a-green-card",title:"The Becraft Guide to How to Get a Green Card",subtitle:"How to Become a Lawful Permanent Resident of the United States",metaDescription:"A step-by-step guide to getting a green card from the Law Office of Todd Becraft — eligibility categories, application process, and what to expect.",intro:"A green card, officially known as a Permanent Resident Card, grants an immigrant the right to live and work permanently in the United States, a status known as Lawful Permanent Residency. Securing a green card is often a crucial step on the journey toward U.S. citizenship. At the Law Office of Todd Becraft, we bring many years of experience helping people navigate the challenging process of getting your green card.",sections:[{heading:"1. Green Card Eligibility Categories",paragraphs:["There are several ways to qualify for a green card, and each category has its own requirements."]},{heading:"A. Family-Based Green Cards",paragraphs:["Immediate Relatives of U.S. Citizens: If you are the spouse, unmarried child under 21, or parent of a U.S. citizen, you qualify as an immediate relative. This category is given priority, with no annual limit on green cards issued. Other family-based categories include unmarried sons and daughters of U.S. citizens over 21, married children of U.S. citizens, and siblings of U.S. citizens — though these are subject to annual quotas and longer waiting times."]},{heading:"B. Employment-Based Green Cards",paragraphs:["Many green cards are issued to foreign nationals who have been offered employment in the U.S. These are divided into categories (EB-1 through EB-5) based on qualifications, including priority workers, professionals with advanced degrees, skilled workers, and EB-5 investors willing to invest significant capital in a U.S. business."]},{heading:"C. Diversity Visa Lottery",paragraphs:["Each year, the Diversity Immigrant Visa Program randomly selects applicants from countries with historically low immigration rates to the U.S. If selected, winners can apply for a green card, provided they meet the eligibility requirements."]},{heading:"D. Humanitarian Grounds",paragraphs:["Individuals granted refugee or asylee status in the U.S. can apply for a green card after one year. Special categories also exist for victims of human trafficking (T visas) and crime victims (U visas), among others."]},{heading:"2. The Green Card Application Process",paragraphs:["While the process can vary depending on your eligibility category, it generally follows these key steps:"]},{heading:"A. Filing a Petition",paragraphs:["For family-sponsored green cards, the U.S. citizen or permanent resident sponsor must file Form I-130, Petition for Alien Relative, with USCIS. For employment-based green cards, the employer typically files Form I-140, Immigrant Petition for Alien Worker. A labor certification from the U.S. Department of Labor may also be required."]},{heading:"B. Adjustment of Status or Consular Processing",paragraphs:["If you're already in the U.S. under a non-immigrant visa, you can apply for adjustment of status by submitting Form I-485. If you're applying from outside the U.S., you will go through consular processing at a U.S. embassy or consulate in your home country."]},{heading:"C. Attend Your Interview",paragraphs:["In most cases, applicants are required to attend an interview either with USCIS (if adjusting status in the U.S.) or at a U.S. consulate (if applying from abroad). During the interview, you may be asked about your background, relationship to your sponsor, or your qualifications for the green card."]},{heading:"D. Receive Your Green Card",paragraphs:["If your application is approved, you will be issued a green card allowing you to live and work in the U.S. as a permanent resident. Your green card will initially be valid for 10 years (or two years for conditional residents like spouses of U.S. citizens)."]},{heading:"3. Special Considerations and Challenges",paragraphs:["Some green card categories are subject to annual quotas. If there is a backlog in your category, you may be assigned a priority date — check the Visa Bulletin published by the U.S. Department of State to track availability. Certain applicants may receive a conditional green card requiring them to file Form I-751 to remove conditions before it expires. If your application is denied, you may have the opportunity to appeal or file a motion to reopen."]},{heading:"4. Preparing for Life as a Green Card Holder",paragraphs:["As a permanent resident, you'll enjoy the ability to live and work anywhere in the U.S., access to government benefits, and a pathway to U.S. citizenship. However, green card holders also have responsibilities:"],bullets:["File U.S. income taxes annually.","Obey all federal, state, and local laws.","Renew your green card every 10 years.","Maintain your U.S. residency — prolonged absences can jeopardize your status."]}],cta:"Securing a green card is a major step toward achieving your goals in the United States. At the Law Office of Todd Becraft, we provide expert support tailored to your specific situation. Call us today to get the process started: 213-388-1821."},{slug:"the-becraft-guide-on-how-to-become-a-us-citizen",title:"The Becraft Guide on How to Become a US Citizen",subtitle:"The Pathway to American Citizenship",metaDescription:"A complete guide to U.S. naturalization from the Law Office of Todd Becraft — eligibility requirements, the step-by-step process, and life as a new citizen.",intro:"Becoming a U.S. citizen involves several legal steps, and a deep commitment to the values of freedom and democracy. You may be seeking greater security, new opportunities, or the chance to reunite with family. At the Law Office of Todd Becraft, we understand the complexities involved in immigration law and are dedicated to helping individuals and families through this important life transition.",sections:[{heading:"1. Eligibility: Are You Ready to Apply?",paragraphs:["Before you can apply for U.S. citizenship, you need to meet several requirements that ensure you've established yourself in the United States."]},{heading:"A. Lawful Permanent Resident Status",paragraphs:["The first step is holding the status of a Lawful Permanent Resident (LPR) — also known as having a green card. Most lawful permanent residents got their green card through family sponsorship, employment, or by being granted refugee or asylee status. Pathways to LPR status include:"],bullets:["Family Sponsorship","Employment-Based Immigration","Diversity Visa Lottery","Asylum or Refugee Status","Special Immigrant Categories (religious workers, international organization employees, U.S. military service members)"]},{heading:"B. Continuous Residence",paragraphs:["Once you have your green card, you need to have lived in the United States continuously for a certain period:"],bullets:["Five years of continuous residence is required for most applicants.","Three years of continuous residence is required if you are married to a U.S. citizen."]},{heading:"C. Physical Presence",bullets:["You must have been physically present in the U.S. for at least 30 months out of the last five years.","If applying based on marriage to a U.S. citizen, 18 months out of the last three years."]},{heading:"D. Good Moral Character",paragraphs:["You must demonstrate good moral character, meaning you've followed the laws, paid your taxes, and acted responsibly. Certain behaviors — such as committing serious crimes or failing to file taxes — can disqualify you."]},{heading:"E. Basic English Proficiency",paragraphs:["You need to show basic proficiency in reading, writing, and speaking English, tested during your citizenship interview. The test focuses on everyday language skills and uses simple sentences."]},{heading:"F. Knowledge of U.S. History and Civics",paragraphs:["You'll need to pass a civics test covering basic U.S. history and government. USCIS provides a list of 100 potential questions. You'll be asked up to 10 during your interview and need to get at least six correct."]},{heading:"2. The Naturalization Process: Step-by-Step"},{heading:"A. Filing Form N-400",paragraphs:["The first step is submitting Form N-400, Application for Naturalization. This form asks for information about your personal history, including address, employment, and travel history. The form can be filed online or by mail, and fees include a filing fee and biometrics fee."]},{heading:"B. Biometrics Appointment",paragraphs:["USCIS will schedule you for a biometrics appointment where your fingerprints, photo, and signature are collected for a background check."]},{heading:"C. The Naturalization Interview and Tests",paragraphs:["A USCIS officer will review your application and ask you questions to verify information. During the interview you'll also take:"],bullets:["English Test: You'll be asked to read and write simple sentences in English, and answer a few basic spoken questions.","Civics Test: You'll be asked up to 10 questions about American history and government — you need to get six correct to pass."]},{heading:"D. The Oath of Allegiance",paragraphs:["The final step is taking the Oath of Allegiance at your naturalization ceremony. You'll recite the oath alongside other new citizens and receive your Certificate of Naturalization — your official proof of U.S. citizenship."]},{heading:"3. Life as a U.S. Citizen",paragraphs:["Once you've completed the naturalization process, you'll enjoy all the rights and privileges of citizenship:"],bullets:["The right to vote in federal, state, and local elections.","Apply for a U.S. passport for easier international travel.","Sponsor family members for a green card.","Access to federal jobs and security clearances.","Full participation in jury duty and civic life."]},{heading:"4. Special Circumstances and Exceptions",bullets:["Military Service: May qualify for expedited naturalization without the usual residence requirements.","Older Applicants: Applicants 50+ who have lived in the U.S. as a green card holder for 20+ years may take the civics test in their native language.","Medical Exemptions: Applicants with physical or mental disabilities may qualify for a waiver from the English or civics tests."]}],cta:"Becoming a U.S. citizen is about becoming part of a nation with a rich history and a culture that celebrates individuality and freedom. The Law Office of Todd Becraft is ready to help you navigate every step of the journey. Call us today: 213-388-1821."},{slug:"video-tutorials",title:"Video Tutorials",subtitle:"Immigration information from Attorney Todd Becraft",metaDescription:"Watch Attorney Todd Becraft explain immigration processes, opportunities, and helpful information for immigrants to the United States.",intro:"Attorney Todd Becraft describes various immigration processes, opportunities and other helpful information for immigrants to the United States.",sections:[{heading:"What You'll Learn",bullets:["U-Visas, which ultimately become a Green Card, are available to victims of certain crimes if there's a police report.","Your rights if and when ICE knocks on your door.","Step-by-step explanations of common immigration processes."]}],cta:"Have questions about your specific situation? Call the Law Office of Todd Becraft today: 213-388-1821."}];function Ef(r){return Nu.find(l=>l.slug===r)}function Uf(){return i.jsxs("div",{children:[i.jsx(Ae,{title:"Immigration Resources & Guides | Law Office of Todd Becraft",description:"Free immigration guides from Attorney Todd Becraft — how to get a green card, become a US citizen, avoid deportation, and more.",canonical:"/resources",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Immigration Resources & Guides | Law Office of Todd Becraft"}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Immigration ",i.jsx("span",{className:"text-[#D4A853]",children:"Resources"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Free guides and educational content from Attorney Todd Becraft to help you understand the immigration process and your legal options."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-5xl mx-auto",children:i.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:Nu.map(r=>i.jsxs($,{to:`/resources/${r.slug}`,className:"bg-white rounded-sm border border-gray-100 p-8 card-hover group",children:[i.jsx("div",{className:"gold-line mb-4"}),i.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2 group-hover:text-[#D4A853] transition-colors",children:r.title}),i.jsx("p",{className:"text-[#D4A853] text-sm font-medium mb-3",children:r.subtitle}),i.jsx("p",{className:"text-gray-500 text-sm leading-relaxed line-clamp-3",children:r.intro}),i.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase group-hover:text-[#C49A48] transition-colors",children:["Read Guide",i.jsx("svg",{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]},r.slug))})})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Situation?"}),i.jsx("p",{className:"text-gray-300 mb-8",children:"Our guides provide general information, but every case is unique. Contact us for a consultation to discuss your specific circumstances."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),i.jsx($,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})})]})}function If(){const{slug:r}=Zi(),l=r?Ef(r):void 0;return q.useEffect(()=>{l&&Cu({resource_name:l.title,resource_slug:l.slug,language:"en"})},[l==null?void 0:l.slug]),l?i.jsxs("div",{children:[i.jsx(Ae,{title:`${l.title} | Becraft Immigration`,description:l.metaDescription,canonical:`/resources/${l.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:l.title,author:{"@type":"Person",name:"Todd Becraft"}}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[i.jsx($,{to:"/resources",className:"hover:text-[#D4A853] transition-colors",children:"Resources"}),i.jsx("span",{children:"/"}),i.jsx("span",{className:"text-gray-300",children:l.title})]}),i.jsx("div",{className:"gold-line mb-6"}),i.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:l.title}),i.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:l.subtitle}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:l.intro})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("div",{className:"space-y-10",children:l.sections.map((c,u)=>{var p;return i.jsxs("div",{children:[c.heading&&i.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>i.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:m},f)),c.bullets&&c.bullets.length>0&&i.jsx("ul",{className:"space-y-2 mb-4",children:c.bullets.map((m,f)=>i.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[i.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),i.jsx("span",{children:m})]},f))}),c.numbered&&c.numbered.length>0&&i.jsx("ol",{className:"space-y-2 mb-4",children:c.numbered.map((m,f)=>i.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[i.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:f+1}),i.jsx("span",{children:m})]},f))})]},u)})}),i.jsx("div",{className:"gold-line my-10"}),i.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[i.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:l.cta}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),i.jsx($,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})]})}),i.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4",children:i.jsxs($,{to:"/resources",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[i.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"All Resources"]})})})]}):i.jsxs("div",{className:"section-padding text-center",children:[i.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Page Not Found"}),i.jsx("p",{className:"text-gray-500 mb-8",children:"That resource doesn't exist."}),i.jsx($,{to:"/resources",className:"btn-gold",children:"Back to Resources"})]})}const Tf=[{category:"Asylum & Convention Against Torture",title:"Asylum & Relief Under the Convention Against Torture",description:"We represent clients fleeing persecution due to political activities, religious beliefs, or membership in targeted social groups — including cases other attorneys have turned down.",outcome:"Through comprehensive country condition evidence, expert testimony, and compelling personal declarations, we have successfully obtained asylum for clients facing removal, providing them with permanent protection in the United States.",tag:"Asylum Granted"},{category:"Cancellation of Removal",title:"Cancellation of Removal for Non-Permanent Residents",description:"We defend long-term residents facing deportation who have U.S. citizen or permanent resident family members, demonstrating the exceptional and extremely unusual hardship removal would cause.",outcome:"Through medical evidence, school records, expert testimony, and financial documentation, we have persuaded immigration judges to cancel removal and grant our clients lawful permanent residence.",tag:"Removal Cancelled"},{category:"O-1 Extraordinary Ability Visa",title:"O-1 Extraordinary Ability Visa",description:"We prepare O-1 petitions for professionals with extraordinary ability or achievement, assembling the evidence needed to demonstrate sustained national or international acclaim.",outcome:"Our petition packages include expert recommendation letters, evidence of awards and publications, media coverage, and documentation of significant contributions to the field.",tag:"O-1 Approved"},{category:"P-3 Culturally Unique Artist Visa",title:"P-3 Culturally Unique Artist or Entertainer Visa",description:"We represent artists and entertainers performing traditional or culturally unique art forms, preparing P-3 petitions that establish the cultural merit of their work.",outcome:"Our petitions document the cultural uniqueness of the art form, the artist's credentials and international recognition, and the cultural value of planned U.S. performances.",tag:"P-3 Approved"},{category:"U-Visa for Crime Victims",title:"U-Visa for Victims of Crime",description:"We help victims of qualifying crimes who have cooperated with law enforcement obtain U-Visa protection, even when they face the prospect of deportation.",outcome:"We work with law enforcement to obtain the required certification, prepare comprehensive declarations, and submit evidence of physical and psychological impact to secure lawful status, work authorization, and a path to permanent residence.",tag:"U-Visa Approved"}],qf=[{quote:"Atty. Todd Becraft is one of a kind gentleman. Ever since he handled my immigration issues, everything just went to the right direction. You can feel that he treats you like a member of the family.",author:"Rolando G.",service:"via Yelp"},{quote:"The reception was fantastic and very professional. He showed me a lot of care by asking how my family is doing. I see him as an expert because of the way he asks questions and answers questions.",author:"John",service:"via Avvo"},{quote:"Attorney Todd Becraft is an exceptional and knowledgeable immigration attorney. He handled my case with such class and dignity — I won my case. Excellent staff, excellent customer service.",author:"Joseph M.",service:"via Yelp"},{quote:"I will always remember the professional legal services I received. All staff are caring and always work according to the instructions of their client. The services I received were far more than what I was charged.",author:"Tiwa Bob",service:"via Google"}];function zf(){const r=$e();return i.jsxs("div",{children:[i.jsx(Ae,{title:"Client Success Stories | Law Office of Todd Becraft",description:"Real immigration success stories from clients of the Law Office of Todd Becraft — asylum grants, green cards, citizenship, and deportation cases won.",canonical:"/success-stories",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Client Success Stories | Law Office of Todd Becraft"}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Success ",i.jsx("span",{className:"text-[#D4A853]",children:"Stories"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Every case we take on represents a family's future. Here are some of the outcomes we have achieved for our clients. While every case is different, these stories reflect our commitment to fighting for the best possible result."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-5xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Representative Case Results"}),i.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto text-sm",children:"The following are representative of the types of cases we handle and outcomes we have achieved. Past results do not guarantee future outcomes, as every case depends on its unique facts and circumstances."})]}),i.jsx("div",{className:"space-y-8",children:Tf.map((l,c)=>i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[i.jsxs("div",{className:"p-6 md:p-8",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[i.jsx("span",{className:"text-xs font-semibold tracking-wider uppercase text-[#D4A853]",children:l.category}),i.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200",children:[i.jsx("svg",{className:"w-3.5 h-3.5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),l.tag]})]}),i.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-4",children:l.title}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"The Challenge"}),i.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.description})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"The Outcome"}),i.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.outcome})]})]})]}),i.jsx("div",{className:"h-0.5 bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853]/30 to-[#D4A853]/0"})]},c))})]})}),i.jsx("section",{className:"section-padding bg-[#1B2A4A]",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-4",children:"Client Testimonials"}),i.jsx("p",{className:"text-gray-400 max-w-xl mx-auto text-sm",children:"Hear from the families we have helped."})]}),i.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:qf.map((l,c)=>i.jsxs("div",{className:"border border-white/10 rounded-sm p-8 hover:border-[#D4A853]/30 transition-colors",children:[i.jsx("svg",{className:"w-8 h-8 text-[#D4A853]/30 mb-4",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})}),i.jsxs("blockquote",{className:"text-gray-200 leading-relaxed mb-6 italic font-serif",children:['"',l.quote,'"']}),i.jsx("div",{className:"gold-line mb-3"}),i.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.author}),i.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:l.service})]},c))}),i.jsx("p",{className:"text-center text-gray-500 text-xs mt-10",children:"* Testimonials are representative of client experiences. Past results do not guarantee future outcomes."})]})}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Let Us Fight for Your Future"}),i.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Every successful case starts with a conversation. Contact us today for a free consultation to discuss your immigration matter."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),i.jsx("button",{onClick:()=>r("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Schedule a Consultation"})]})]})})]})}function Df(){const[r,l]=q.useState({name:"",email:"",phone:"",service:"",message:""}),[c,u]=q.useState(!1),[p,m]=q.useState(!1),[f,x]=q.useState(""),v=C=>{l({...r,[C.target.name]:C.target.value})},b=async C=>{C.preventDefault(),u(!0),x("");try{(await fetch("https://formspree.io/f/xkokkjdk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(m(!0),Su({language:"en",service:r.service}),l({name:"",email:"",phone:"",service:"",message:""})):x("There was an error submitting your message. Please try again or call us directly.")}catch{x("There was an error submitting your message. Please try again or call us directly.")}finally{u(!1)}};return i.jsxs("div",{children:[i.jsx(Ae,{title:"Contact Us | Law Office of Todd Becraft",description:"Contact the Law Office of Todd Becraft for an immigration consultation. Call (213) 388-1821 or fill out our online form.",canonical:"/contact",schema:{"@context":"https://schema.org","@type":"ContactPage",name:"Contact Law Office of Todd Becraft"}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Contact ",i.jsx("span",{className:"text-[#D4A853]",children:"Us"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Ready to take the next step? Reach out for a confidential consultation with an experienced immigration attorney."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"grid lg:grid-cols-5 gap-12 lg:gap-16",children:[i.jsx("div",{className:"lg:col-span-3",children:i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-10",children:[i.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Send Us a Message"}),i.jsx("p",{className:"text-gray-500 text-sm mb-8",children:"Fill out the form below and we will get back to you promptly. All consultations are confidential."}),p?i.jsxs("div",{className:"text-center py-12",children:[i.jsx("div",{className:"w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4",children:i.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),i.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Message Sent Successfully"}),i.jsx("p",{className:"text-gray-500 mb-6",children:"Thank you for contacting us. We will review your message and respond as soon as possible."}),i.jsx("button",{onClick:()=>m(!1),className:"text-[#D4A853] font-semibold text-sm hover:text-[#C49A48] transition-colors",children:"Send Another Message"})]}):i.jsxs("form",{onSubmit:b,className:"space-y-6",children:[i.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),i.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:r.name,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"Your full name"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),i.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:r.email,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"your@email.com"})]})]}),i.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),i.jsx("input",{type:"tel",id:"phone",name:"phone",value:r.phone,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"(555) 123-4567"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700 mb-2",children:"Service Needed"}),i.jsxs("select",{id:"service",name:"service",value:r.service,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 bg-white transition-colors appearance-none",style:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:"right 0.75rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.25em 1.25em"},children:[i.jsx("option",{value:"",children:"Select a service..."}),i.jsx("option",{value:"asylum",children:"Asylum"}),i.jsx("option",{value:"appeals",children:"BIA & 9th Circuit Appeals"}),i.jsx("option",{value:"cancellation",children:"Cancellation of Removal"}),i.jsx("option",{value:"citizenship",children:"Citizenship & Naturalization"}),i.jsx("option",{value:"daca",children:"DACA"}),i.jsx("option",{value:"deportation",children:"Deportation Defense"}),i.jsx("option",{value:"green-card",children:"Green Card / Adjustment of Status"}),i.jsx("option",{value:"waiver",children:"I-601A Provisional Waiver"}),i.jsx("option",{value:"k1-visa",children:"K-1 Fiance Visa"}),i.jsx("option",{value:"tps",children:"Temporary Protected Status (TPS)"}),i.jsx("option",{value:"u-visa",children:"U-Visa"}),i.jsx("option",{value:"family",children:"Family Immigration"}),i.jsx("option",{value:"other",children:"Other"})]})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Tell Us About Your Case *"}),i.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:r.message,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none",placeholder:"Please briefly describe your immigration matter..."})]}),f&&i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-sm p-4",children:i.jsx("p",{className:"text-red-700 text-sm",children:f})}),i.jsx("button",{type:"submit",disabled:c,className:"btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",children:c?i.jsxs("span",{className:"flex items-center",children:[i.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[i.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),i.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):"Submit Message"}),i.jsx("p",{className:"text-xs text-gray-400",children:"By submitting this form, you agree that we may contact you regarding your inquiry. Submitting this form does not create an attorney-client relationship."})]})]})}),i.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[i.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8",children:[i.jsx("h3",{className:"text-white font-serif font-bold text-lg mb-6",children:"Call Us Today"}),i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("a",{href:"tel:2133881821",onClick:()=>ri({phone_number:"2133881821",location:"contact_page",language:"en"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[i.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Local"}),i.jsx("p",{className:"text-lg font-semibold",children:"(213) 388-1821"})]})]}),i.jsxs("a",{href:"tel:8552016898",onClick:()=>ri({phone_number:"8552016898",location:"contact_page",language:"en"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[i.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Toll Free"}),i.jsx("p",{className:"text-lg font-semibold",children:"(855) 201-6898"})]})]})]}),i.jsx("div",{className:"mt-6 bg-[#D4A853] text-[#1B2A4A] px-4 py-2 rounded-full text-sm font-bold tracking-wide text-center",children:"Se Habla Espanol"})]}),i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-6",children:"Office Information"}),i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("div",{className:"space-y-5",children:[i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:i.jsxs("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Location"}),i.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["3450 Wilshire Blvd. Suite 1015",i.jsx("br",{}),"Los Angeles, CA 90010"]})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Office Hours"}),i.jsxs("div",{className:"text-gray-500 text-sm mt-1 space-y-1",children:[i.jsx("p",{children:"Monday – Friday: 9:00 AM – 6:00 PM"}),i.jsx("p",{children:"Saturday: By Appointment"}),i.jsx("p",{children:"Sunday: Closed"})]})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Languages"}),i.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"English & Spanish"})]})]})]})]}),i.jsxs("div",{className:"bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-sm p-8 text-center",children:[i.jsx("svg",{className:"w-10 h-10 mx-auto text-[#D4A853] mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})}),i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-2",children:"Consultation"}),i.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"We offer initial consultations to evaluate your immigration case. There is no obligation and all communications are strictly confidential."}),i.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6",children:"Call Now"})]}),i.jsx("div",{className:"bg-[#1B2A4A] rounded-sm overflow-hidden",children:i.jsxs("div",{className:"aspect-[4/3] flex items-center justify-center relative",children:[i.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.5) 1px, transparent 0)",backgroundSize:"20px 20px"}}),i.jsxs("div",{className:"text-center relative z-10",children:[i.jsxs("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/40 mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:[i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),i.jsx("p",{className:"text-gray-300 font-serif font-bold",children:"Los Angeles, California"}),i.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Serving clients throughout Southern California"})]})]})})]})]})})})]})}const ku=[{slug:"notice-to-appear-nta-immigration-court-removal-proceedings-guide",title:"What to Do If You Receive a Notice to Appear (NTA): A Complete Guide to Immigration Court and Removal Proceedings",date:"September 22, 2026",excerpt:"A Notice to Appear is a charging document, not a final order of deportation. Learn what an NTA means, what happens at your first immigration court hearing, and what defenses and forms of relief may be available in removal proceedings.",content:`Receiving a Notice to Appear (NTA) can be one of the most stressful moments in an immigrant's life. The document may contain allegations about your immigration history and legal charges explaining why the U.S. government believes you may be removable from the United States.

However, receiving a Notice to Appear does not automatically mean you will be deported.

An NTA generally means that the Department of Homeland Security (DHS) is seeking to place you in removal proceedings before an immigration judge. Depending on your immigration history, family relationships, fear of returning to your country, criminal history, and other circumstances, you may have defenses or forms of immigration relief available.

The most important thing is to take the NTA seriously and act quickly.

At The Law Office of Todd Becraft, we assist immigrants facing complex immigration matters, including removal proceedings, asylum cases, family-based immigration issues, and cases involving criminal history.

This guide explains what a Notice to Appear means, what happens after receiving one, and what steps you should consider taking to protect yourself.

## What Is a Notice to Appear (NTA)?

A Notice to Appear, commonly called an NTA, is Form I-862. It is the charging document used by the Department of Homeland Security in removal proceedings.

The NTA generally contains factual allegations about the person and lists one or more legal charges explaining why DHS believes that person may be removed from the United States.

Removal proceedings generally commence when DHS files the NTA with the immigration court after serving it on the noncitizen.

An NTA may contain information concerning:
- Your name and identifying information
- Your country of citizenship
- When and how you entered the United States
- Your immigration status
- Alleged immigration violations
- Criminal convictions or conduct, when relevant
- The legal grounds DHS claims make you removable
- The immigration court involved in the proceedings
- Your hearing date and time, if already scheduled

In some situations, the initial NTA may not contain the date and time of the first hearing. The immigration court may later issue a separate Notice of Hearing with scheduling information.

Never assume that you do not have a hearing simply because a date does not appear on the original NTA.

## Does Receiving an NTA Mean You Are Going to Be Deported?

No. An NTA should not be confused with a final order of removal.

Receiving an NTA generally means that the government is alleging that you are removable and is beginning the legal process through which an immigration judge will consider the case.

During removal proceedings, DHS can pursue its allegations and charges. The person in proceedings may be able to challenge those allegations, contest removability when legally appropriate, present evidence, and apply for available forms of relief.

This distinction is extremely important.

An NTA is essentially the beginning of the government's case. It is not necessarily the final outcome of your immigration case.

## What Should You Do Immediately After Receiving an NTA?

## 1. Do Not Ignore the Notice to Appear

Ignoring an NTA can have extremely serious consequences.

Do not throw the document away because you think the government made a mistake. Do not assume a pending immigration application will automatically resolve the situation. Do not assume that having U.S. citizen children or being married to a U.S. citizen automatically protects you from removal.

Keep the NTA and every other document you receive from:
- Immigration and Customs Enforcement (ICE)
- Department of Homeland Security (DHS)
- U.S. Citizenship and Immigration Services (USCIS)
- Immigration Court
- Executive Office for Immigration Review (EOIR)

These documents can become extremely important when an immigration attorney evaluates your case.

## 2. Read Every Allegation Carefully

The NTA contains factual allegations about your immigration situation.

For example, DHS might allege that:
- You are not a U.S. citizen or national.
- You are a citizen of a particular country.
- You entered the United States on a particular date.
- You entered without being admitted or paroled.
- You entered with a visa but remained beyond your authorized stay.
- You committed or were convicted of a particular criminal offense.

Do not automatically assume every allegation is correct.

Dates may be incorrect. Immigration history may be incomplete. A criminal conviction may be characterized in a way that requires further legal analysis.

An experienced immigration attorney can compare the NTA with your immigration and criminal records and determine whether the government's allegations and legal charges should be admitted, denied, or challenged.

## 3. Determine Whether Your Case Is in Immigration Court

Being served with an NTA and having the NTA filed with immigration court are related but distinct steps.

After receiving an NTA, determine whether your case has been entered into the immigration court system.

You can check your case through the Executive Office for Immigration Review's Automated Case Information system using your Alien Registration Number, commonly known as an A-Number.

Continue monitoring the case because hearing information can change.

## 4. Never Miss an Immigration Court Hearing

This is one of the most important rules after receiving an NTA.

Do not miss your immigration court hearing.

Under certain circumstances, failing to appear can result in an immigration judge ordering you removed in absentia, meaning the removal order can be entered while you are not present.

If you move, you must also make sure that the immigration court has your correct address.

Do not assume that updating your address with USCIS automatically updates your address with immigration court.

Current EOIR instructions require individuals with pending immigration court or Board of Immigration Appeals matters to report changes in their address or contact information within five working days.

Missing a hearing because you did not receive a notice after moving can create a complicated legal problem.

## What Happens at Your First Immigration Court Hearing?

The first immigration court appearance is generally called a Master Calendar Hearing.

Think of this as a preliminary court hearing rather than the full trial of your immigration case.

During a Master Calendar Hearing, the immigration judge may address procedural issues, representation, the allegations contained in the NTA, the government's charges of removability, and the forms of immigration relief you may seek.

The immigration judge may ask you to respond to the allegations contained in the NTA.

This process is sometimes referred to as taking pleadings.

You may be asked whether certain factual allegations are true or false and whether you concede or contest the government's charge that you are removable.

These answers can have significant legal consequences.

This is why it can be extremely important to have an immigration attorney review your NTA and immigration history before you make admissions in immigration court.

If you intend to seek relief from removal, the judge may establish deadlines for applications, supporting documents, evidence, and other filings.

Eventually, cases requiring testimony and evidence may proceed to an Individual Calendar Hearing, sometimes called a merits hearing.

## Can You Fight a Notice to Appear?

Potentially, yes.

Receiving an NTA does not mean there is nothing you can do.

An immigration attorney generally needs to investigate two major questions:

First: Has DHS correctly established that you are removable under immigration law?

Second: Even if you are legally removable, do you qualify for a form of relief that could allow you to remain in the United States?

Depending on the circumstances, possible defenses or forms of relief can include:
- Asylum
- Withholding of removal
- Protection under the Convention Against Torture
- Adjustment of status
- Cancellation of removal
- Certain immigration waivers
- Challenges to DHS's charges
- Other humanitarian or statutory immigration protections

The appropriate defense depends entirely on the facts of the individual case.

Two immigrants can appear to have very similar situations but have completely different legal options because of differences in their immigration history, manner of entry, family relationships, criminal records, prior applications, or previous immigration proceedings.

## NTA and Asylum Cases

A Notice to Appear is especially significant for immigrants who are afraid to return to their home countries.

An eligible person who is already in removal proceedings may seek defensive asylum before an immigration judge.

This differs from affirmative asylum.

Affirmative asylum generally begins with USCIS for someone who is not currently in removal proceedings. Defensive asylum is pursued before an immigration judge as a defense against removal.

An asylum applicant generally needs to demonstrate that they satisfy the legal requirements for asylum, including establishing qualifying past persecution or a well-founded fear of future persecution connected to a legally protected ground.

Depending on the circumstances, an attorney may also evaluate eligibility for:
- Withholding of removal
- Protection under the Convention Against Torture (CAT)

These forms of protection have different legal standards and consequences.

## Hypothetical Case Study: Asylum Applicant Receives an NTA

Consider a hypothetical immigrant named Daniel.

Daniel fled his home country after receiving repeated threats because of his political activities.

After arriving in the United States, Daniel eventually finds himself in removal proceedings and receives a Notice to Appear.

Daniel panics.

He assumes: "I received deportation papers. That means they're sending me back."

That is not necessarily what the NTA means.

Daniel's immigration attorney reviews his NTA, his manner of entry, the timing of his asylum claim, his immigration history, and the circumstances surrounding the threats he experienced.

The attorney then begins developing evidence that could potentially support Daniel's request for protection.

That evidence might include:
- Threatening messages
- Police reports
- Medical records
- Witness declarations
- Political membership records
- Photographs
- Social media evidence
- News reports
- Human rights reports
- Country-condition evidence
- Expert testimony, when appropriate

Daniel may then have an opportunity to present his case before an immigration judge.

The important lesson is: receiving an NTA does not automatically determine whether someone qualifies for asylum. It begins or relates to a legal process in which eligibility for protection may be decided.

## What Happens When Someone Overstays a Visa and Receives an NTA?

Visa overstays are another common reason people may find themselves in removal proceedings.

Imagine someone legally entered the United States using a visitor visa.

The individual was authorized to remain for a limited period but stayed after that authorized period expired.

Years later, the person receives an NTA alleging that they are removable because they remained in the United States beyond the period permitted.

Many people immediately think: "I overstayed my visa, so there is nothing an immigration lawyer can do."

That conclusion can be premature.

The overstay may establish an important part of the government's case, but an immigration attorney still needs to evaluate the person's entire situation.

That analysis could include:
- How the individual entered the United States
- The date of entry
- Immigration status at entry
- Length of time in the United States
- Marriage to a U.S. citizen or permanent resident
- U.S. citizen or permanent resident children or parents
- Approved or pending family petitions
- Prior immigration applications
- Employment-based immigration history
- Criminal history
- Previous immigration proceedings
- Prior removal orders
- Possible adjustment of status
- Potential waivers
- Cancellation of removal eligibility
- Asylum or humanitarian protection

A visa overstay is one fact in the immigration case. It does not necessarily answer every question about whether the person has a legal avenue to remain in the United States.

## Hypothetical Case Study: Visa Overstay and Marriage to a U.S. Citizen

Consider another hypothetical example.

María legally entered the United States many years ago with a visitor visa.

She remained after her authorized stay expired.

Years later, María married a U.S. citizen. The couple built a life together and began exploring the immigration process.

Then María receives a Notice to Appear.

She assumes that because she is married to an American citizen, the immigration court cannot order her removed.

This assumption could be dangerous.

Marriage to a U.S. citizen can create significant immigration opportunities, but it does not automatically terminate removal proceedings.

An immigration attorney would need to investigate issues such as:
- Whether María was inspected and admitted when she entered
- Whether the marriage is legally valid and bona fide
- Whether an I-130 has been filed or approved
- Whether María has previous immigration violations
- Whether she has ever made a false claim to U.S. citizenship
- Whether fraud or misrepresentation issues exist
- Whether she has criminal history
- Whether she has prior removal proceedings
- Whether she qualifies to adjust status
- Whether a waiver is necessary
- Which agency or court has jurisdiction over the relevant applications

The lesson is simple: marriage to a U.S. citizen may provide an important path toward lawful permanent residence, but marriage alone does not automatically make an NTA disappear.

## What If You Receive an NTA Because of a Criminal Case?

Immigration cases involving arrests, criminal charges, or convictions can be particularly complicated.

Criminal law and immigration law interact in ways that are not always obvious.

Something considered relatively minor under state criminal law may potentially have serious immigration consequences.

At the same time, not every arrest or conviction automatically means deportation.

The exact details matter.

An immigration attorney may need to analyze:
- The exact criminal statute
- The elements of the offense
- The charging document
- The plea
- The conviction record
- The sentence imposed
- Whether the offense triggers a particular immigration ground
- The person's immigration status
- When the person entered the United States
- Prior convictions
- Potential defenses or waivers

This is why telling an immigration attorney, "It was only a misdemeanor," is not enough.

The attorney should review the actual criminal court records whenever possible.

## NTA and Criminal Convictions: Why the Exact Record Matters

When a Notice to Appear is based on criminal history, one of the biggest mistakes an immigrant can make is assuming that the name commonly used for the offense tells the entire story.

Immigration law may analyze criminal convictions differently from state criminal law.

For example, DHS may allege that a conviction falls within a particular ground of removability. Whether that allegation is legally correct can depend on the statute of conviction, the elements of the offense, the record of conviction, immigration status, timing, and other factors.

An immigration attorney may need to obtain and review documents such as:
- Criminal complaint or information
- Charging documents
- Plea agreement
- Court minutes
- Judgment
- Sentencing records
- Disposition
- Relevant criminal statute
- Records showing whether a conviction was later modified or vacated

Do not rely solely on memory when discussing an old criminal case.

A case that happened 10 or 20 years ago may still become relevant when DHS initiates removal proceedings.

## Hypothetical Case Study: Green Card Holder With an Old Conviction

Consider a hypothetical lawful permanent resident named Carlos.

Carlos has had a green card for more than 20 years. He has worked in the United States, raised a family, paid taxes, and has U.S. citizen children.

More than a decade ago, Carlos was convicted of a criminal offense.

He completed probation and all other requirements imposed by the criminal court and has not been in trouble since.

Years later, Carlos receives an NTA alleging that his conviction makes him removable from the United States.

Carlos is shocked.

He believes: "I already completed my sentence. That case was over years ago."

From the criminal court's perspective, Carlos may have completed his sentence. But that does not necessarily mean the conviction cannot have immigration consequences.

An immigration attorney would need to determine whether DHS has correctly characterized the conviction and whether the conviction actually supports the ground of removability charged in the NTA.

The attorney would also investigate whether Carlos may qualify for any form of relief from removal.

Depending on the facts, issues could include:
- Length of lawful permanent residence
- Length of residence in the United States
- Date and manner of admission
- Exact criminal conviction
- Other criminal history
- Family relationships
- Rehabilitation
- Immigration history
- Eligibility for cancellation of removal
- Potential waivers
- Other defenses or forms of relief

The important lesson is that an old conviction should never be dismissed simply because the criminal sentence was completed.

At the same time, a person should not automatically assume that an old conviction guarantees deportation.

Criminal immigration cases require individualized legal analysis.

## Family-Based Immigration and Removal Proceedings

Another complicated situation occurs when someone has a family-based immigration petition but is also placed in removal proceedings.

Many immigrants understandably believe that having a U.S. citizen spouse, child, parent, or other qualifying family member automatically prevents deportation.

Unfortunately, immigration law is more complicated.

For example, an approved Form I-130, Petition for Alien Relative, establishes a qualifying family relationship for immigration purposes, but approval of an I-130 does not automatically grant a green card.

It also does not automatically terminate removal proceedings.

An immigration attorney may need to determine whether the individual can pursue adjustment of status and whether USCIS or the immigration judge has jurisdiction over the relevant application.

The attorney may also need to evaluate possible grounds of inadmissibility and whether any waiver is available or required.

## Hypothetical Case Study: Pending I-130 and Notice to Appear

Consider Luis, another hypothetical example.

Luis is married to a U.S. citizen.

His wife files an I-130 petition for him. While the family-based immigration process is underway, Luis receives an NTA.

Luis thinks: "My wife already petitioned for me, so immigration court isn't important anymore."

That could be a very serious mistake.

His immigration court case and family-based immigration process need to be evaluated together.

An immigration attorney may need to determine:
- Whether the I-130 is pending or approved
- Whether the marriage is bona fide
- How Luis entered the United States
- Whether he was inspected and admitted or paroled
- Whether he has previous immigration violations
- Whether he has prior removal orders
- Whether any fraud or misrepresentation issues exist
- Whether he has criminal history
- Whether he is eligible for adjustment of status
- Whether he requires a waiver
- Which agency has jurisdiction
- How the pending removal proceedings affect the overall strategy

Luis must continue taking his immigration court case seriously unless and until the court proceedings are properly resolved.

A pending family petition does not give someone permission to ignore an NTA or immigration court hearing.

## Can You Apply for a Green Card While in Removal Proceedings?

In certain circumstances, an individual in removal proceedings may potentially seek adjustment of status, but eligibility depends on the facts of the case.

There is no universal answer.

A person married to a U.S. citizen may be in a very different position depending on whether they entered the United States legally, entered without inspection, have prior removal orders, committed fraud or misrepresentation, have criminal history, or are subject to other grounds of inadmissibility.

This is why an NTA should be evaluated together with the person's entire immigration history, rather than as an isolated document.

## Cancellation of Removal

Another form of relief that may be available to certain people in removal proceedings is cancellation of removal.

There are different requirements for lawful permanent residents and certain nonpermanent residents.

Cancellation of removal is not simply granted because someone has lived in the United States for many years.

For certain nonpermanent residents, the legal requirements can involve issues such as continuous physical presence, good moral character, disqualifying offenses, and demonstrating the legally required level of hardship to qualifying relatives.

The hardship requirement can be particularly important.

Having a U.S. citizen child, spouse, or parent does not automatically establish eligibility.

A strong case may require detailed evidence showing how removal would affect qualifying family members.

Depending on the circumstances, evidence may include:
- Medical records
- Psychological evaluations
- School records
- Special education documentation
- Financial records
- Tax returns
- Employment records
- Evidence of family dependency
- Evidence concerning medical treatment
- Country-condition reports
- Evidence concerning access to healthcare abroad
- Evidence concerning a child's educational needs
- Expert evaluations or testimony
- Statements from family members and other witnesses

The goal is not simply to show that deportation would be difficult.

The evidence must address the specific legal standard applicable to the requested relief.

## Hypothetical Case Study: Long-Term Resident With U.S. Citizen Children

Imagine Ana, a hypothetical immigrant who has lived in the United States for many years.

She has U.S. citizen children, including one child who has significant educational and medical needs.

Ana receives a Notice to Appear and assumes that having American children automatically prevents deportation.

It does not.

However, her attorney evaluates whether she could potentially qualify for cancellation of removal.

Instead of simply telling the immigration judge that her children need her, the legal team develops evidence.

They gather medical records, school documentation, financial information, evidence of Ana's residence and history in the United States, and information concerning what would happen to the qualifying relatives if Ana were removed.

This example illustrates an important difference between having sympathetic circumstances and proving a legal case.

Immigration court decisions depend on legal requirements and evidence.

## What If the Notice to Appear Contains Incorrect Information?

Do not assume that information contained in an NTA is automatically correct simply because it appears on a government document.

The NTA may contain allegations concerning your:
- Citizenship
- Date of entry
- Place of entry
- Immigration status
- Manner of entry
- Immigration history
- Criminal history

If information appears incorrect, bring the issue to the attention of your immigration attorney.

EOIR advises respondents who believe there is an error in an NTA to raise the matter with the immigration judge.

How the issue should be handled depends on the nature and legal significance of the alleged error.

This is another reason an attorney should carefully review the NTA before pleadings are entered.

## What If Your NTA Does Not Have a Court Date?

Some people receive a Notice to Appear that does not contain the date or time of their first immigration hearing.

Do not interpret a missing hearing date as permission to forget about the case.

A separate Notice of Hearing may subsequently provide scheduling information.

You should continue monitoring your case and carefully review any correspondence from immigration authorities.

You can also check EOIR's Automated Case Information system using your A-Number.

If you have an attorney, maintain communication with the attorney's office regarding court notices and deadlines.

## What Happens If You Move After Receiving an NTA?

Moving is particularly important when you are in removal proceedings.

The immigration court needs accurate contact information.

Current EOIR instructions require respondents with pending immigration court or Board of Immigration Appeals matters to report changes to their address or contact information within five working days.

Depending on where the case is pending, the appropriate EOIR procedure must be followed.

For immigration court cases, this can involve Form EOIR-33/IC or EOIR's electronic Respondent Access system.

Do not assume that changing your address with:
- USCIS,
- the U.S. Postal Service,
- the DMV,
- ICE,
- or another government agency

automatically updates your address with immigration court.

Keeping the immigration court informed of your correct address is essential because hearing notices and other important documents may be sent to the address associated with your case.

## What Happens If You Miss Your Immigration Court Hearing?

Missing immigration court can have extremely serious consequences.

Under applicable circumstances, an immigration judge can issue an in absentia removal order, meaning a removal order is entered when the respondent does not appear.

If you have already missed a hearing, do not assume nothing can be done, but do not delay either.

The law provides specific rules governing when an in absentia removal order may potentially be challenged or rescinded.

Whether a motion may be available depends on the circumstances, including issues surrounding notice and the reason the individual failed to appear.

These cases can be highly technical.

Speak with an immigration attorney as quickly as possible.

## Do You Have Rights in Immigration Court?

Yes.

Removal proceedings are civil immigration proceedings, not criminal prosecutions, but respondents have important procedural rights.

These may include the right to:
- Obtain legal representation at no expense to the government
- Present evidence
- Examine evidence presented against them
- Object to evidence when appropriate
- Cross-examine government witnesses
- Present witnesses
- Apply for eligible forms of immigration relief
- Appeal certain decisions to the Board of Immigration Appeals

One phrase is especially important: "At no expense to the government."

Unlike many criminal proceedings, the federal government generally does not appoint and pay for an immigration attorney simply because someone cannot afford private counsel.

This makes obtaining qualified immigration representation as early as possible particularly important.

## Do You Need a Deportation Defense Attorney After Receiving an NTA?

You have the right to represent yourself in immigration proceedings, but removal cases can involve complicated questions involving federal immigration statutes, regulations, administrative decisions, federal court decisions, evidence, procedural rules, deadlines, and sometimes criminal law.

An experienced deportation defense attorney in Los Angeles can evaluate questions such as:
- Is the information on the NTA accurate?
- Has DHS properly charged removability?
- Should any allegations be denied or challenged?
- Does the person qualify for asylum?
- Is withholding of removal potentially available?
- Could Convention Against Torture protection apply?
- Is adjustment of status possible?
- Does an approved or pending I-130 affect the case?
- Is cancellation of removal potentially available?
- Is an immigration waiver necessary?
- Does criminal history create immigration consequences?
- Are there previous deportation or removal orders?
- Are there prior immigration applications that affect the case?
- What evidence should be collected?
- What deadlines must be followed?
- What should happen at the Master Calendar Hearing?
- What evidence will be needed for an Individual Calendar Hearing?

Waiting until shortly before the final hearing can make preparation substantially more difficult.

## Important Mistakes to Avoid After Receiving an NTA

**Ignoring the Notice.** Removal proceedings do not disappear simply because someone ignores the paperwork.

**Missing Immigration Court.** Never intentionally miss a hearing because you believe you have another immigration application pending.

**Moving Without Updating Your Address.** Failure to properly update your contact information can result in missing critical court correspondence.

**Assuming Marriage Automatically Stops Deportation.** Marriage to a U.S. citizen may create immigration opportunities, but it does not automatically terminate removal proceedings.

**Assuming U.S. Citizen Children Prevent Deportation.** Having U.S. citizen children can be highly relevant to certain immigration cases, but it is not automatic protection against removal.

**Assuming a Pending I-130 Protects You.** A family petition and an immigration court case are separate legal matters that may need to be coordinated.

**Assuming an Old Criminal Conviction Does Not Matter.** Some convictions can have immigration consequences years after the criminal case ended.

**Making Admissions Without Understanding the Consequences.** Statements and concessions made during immigration proceedings can have significant legal consequences.

**Waiting Until the Last Minute to Hire an Immigration Attorney.** Building a strong removal defense may require obtaining government records, criminal court documents, medical evidence, witness declarations, expert opinions, country-condition evidence, and other documentation. Preparation takes time.

**Using a Notario or Unqualified Immigration Consultant.** Be extremely cautious about receiving legal advice from someone who is not authorized to practice immigration law. Immigration court proceedings can determine whether a person is permitted to remain in the United States. This is not the time to rely on unqualified legal assistance.

## Documents to Bring to an Immigration Attorney After Receiving an NTA

If you have received a Notice to Appear, gather as much of your immigration history as possible.

Important documents can include:
- Complete Notice to Appear
- Notice of Hearing
- Passport
- Visa
- I-94 records
- Employment authorization documents
- Green card, if applicable
- USCIS notices
- Prior immigration applications
- I-130 petitions
- I-140 petitions
- Asylum applications
- Immigration court documents
- Prior deportation or removal orders
- Marriage certificate
- Divorce records
- Birth certificates
- Children's birth certificates
- Criminal court records
- Arrest and disposition records
- Evidence of residence in the United States
- Tax records
- Employment records
- Medical documentation
- Psychological evaluations
- School records
- Evidence concerning hardship
- Evidence supporting an asylum claim
- Evidence of threats or persecution
- Country-condition evidence

Do not worry if you do not have everything.

An immigration attorney can identify which documents are most important and may recommend obtaining additional records.

## A Notice to Appear Is Serious, but It Is Not the Final Decision

The most important thing to understand about an NTA is this: a Notice to Appear is a charging document. It is not automatically a final order of deportation.

DHS is stating why it believes you may be removable from the United States.

Immigration court provides a legal process through which the allegations and charges can be addressed and, when legally available, applications for relief from removal can be presented.

The correct strategy depends on the individual.

An asylum seeker may need to build extensive evidence showing persecution and dangerous country conditions.

A lawful permanent resident with a criminal conviction may need a detailed analysis of the criminal statute and record of conviction.

A visa overstay married to a U.S. citizen may need to determine whether adjustment of status or another family-based immigration strategy is available.

A long-term undocumented resident with qualifying family members may need to investigate cancellation of removal or other relief.

There is no single defense that applies to every NTA.

## Received a Notice to Appear in Los Angeles? Contact The Law Office of Todd Becraft

If you have received a Notice to Appear, immigration court hearing notice, ICE document, or other paperwork related to deportation or removal proceedings, do not wait until your immigration court date is approaching to understand your options.

The earlier your case is evaluated, the more time an immigration attorney may have to:
- Review the government's allegations
- Analyze the legal charges
- Obtain immigration records
- Review criminal records
- Investigate possible defenses
- Determine eligibility for immigration relief
- Prepare applications
- Gather supporting evidence
- Identify witnesses
- Prepare for immigration court

The Law Office of Todd Becraft assists individuals and families with immigration matters, including deportation and removal defense, asylum, family-based immigration, adjustment of status, immigration court proceedings, and complex immigration cases.

If you have received an NTA or have been placed in removal proceedings, contact The Law Office of Todd Becraft to schedule a consultation and learn what immigration options may be available based on your individual circumstances.

## Frequently Asked Questions About a Notice to Appear

**Does receiving an NTA mean I am being deported?**

Not automatically. An NTA contains the government's allegations and charges against you. It can begin removal proceedings once properly filed with immigration court, but the NTA itself does not necessarily determine the final outcome.

**Can I fight a Notice to Appear?**

Depending on your circumstances, you may be able to challenge the government's allegations or charges or apply for a form of relief from removal. Your options depend on your complete immigration and personal history.

**Can I apply for asylum after receiving an NTA?**

Potentially. Eligible individuals in removal proceedings may pursue defensive asylum before an immigration judge. Filing requirements and deadlines can be extremely important.

**Can marriage to a U.S. citizen stop deportation?**

Marriage to a U.S. citizen may create important immigration opportunities, but marriage does not automatically stop removal proceedings or guarantee a green card.

**I have an approved I-130. Can I still be deported?**

An approved I-130 establishes a qualifying family relationship but does not automatically provide lawful permanent resident status or terminate removal proceedings. Additional eligibility requirements must be evaluated.

**Can I receive an NTA for overstaying my visa?**

Yes. Remaining in the United States beyond an authorized period can potentially result in removal proceedings. However, an overstay does not necessarily mean that no other immigration relief is available.

**What happens if my NTA involves a criminal conviction?**

You should have the conviction reviewed by an immigration attorney familiar with the interaction between criminal and immigration law. The exact statute and criminal record can be extremely important.

**What happens if I miss immigration court?**

Missing a properly scheduled immigration hearing can have serious consequences, including a possible in absentia removal order. If you have already missed court, seek legal advice promptly.

**What if the information on my NTA is wrong?**

Do not ignore the error. An immigration attorney can review the allegations and determine how the incorrect information should be addressed in immigration court.

**What if my NTA does not list a hearing date?**

Continue monitoring your immigration court case. You may receive a separate Notice of Hearing containing the date, time, and location of your hearing.

**What should I do first after receiving an NTA?**

Keep all of your immigration documents, verify your immigration court information, make sure your address is current with EOIR, gather your immigration and criminal records, and obtain qualified legal advice as early as possible.

## Received a Notice to Appear? Contact The Law Office of Todd Becraft Today

If you or a loved one has received a Notice to Appear (NTA), has an upcoming immigration court hearing, or is facing removal or deportation proceedings, do not wait until the last minute to understand your legal options.

Every immigration case is different. Depending on your circumstances, there may be defenses or forms of relief available involving asylum, cancellation of removal, adjustment of status, family-based immigration, waivers, or other immigration protections.

The Law Office of Todd Becraft has extensive experience helping immigrants and their families navigate the U.S. immigration system. If you have received an NTA or are worried about deportation, speak with an experienced immigration attorney about your case.

Call The Law Office of Todd Becraft today at 213-388-1821 to schedule a consultation.

Do not ignore a Notice to Appear. Know your rights, understand your options, and get experienced immigration legal help as early as possible.`},{slug:"immigration-options-stepchildren-green-card-legal-status",title:"Immigration Options for Stepchildren: How a U.S. Citizen or Green Card Holder Can Help a Stepchild Obtain Legal Status",date:"September 18, 2026",excerpt:"U.S. immigration law allows qualifying stepparents to petition for their stepchildren, but the rules depend heavily on timing. Learn how the child’s age, the date of the marriage, marital status, and manner of entry can completely change the options available to a blended family.",content:`Blended families are increasingly common in the United States, and immigration law recognizes that a parent-child relationship can exist even when the parent is not biologically related to the child. For many immigrant families, this creates an important question: Can a U.S. citizen or lawful permanent resident help a stepchild obtain a green card or legal immigration status?

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
Call 213.388.1821 or email tb@becraftlaw.com to schedule a confidential consultation. Understanding your rights is the first step toward protecting your future.`}];function Lf(){const r=$e();return i.jsxs("div",{children:[i.jsx(Ae,{title:"Immigration Blog | Law Office of Todd Becraft",description:"Immigration law news, updates, and guidance from the Law Office of Todd Becraft in Los Angeles.",canonical:"/blog",schema:{"@context":"https://schema.org","@type":"Blog",name:"Becraft Immigration Blog"}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Immigration Law ",i.jsx("span",{className:"text-[#D4A853]",children:"Blog"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Stay informed about the latest developments in immigration law, policy changes, and practical advice from the Law Office of Todd Becraft."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-5xl mx-auto",children:i.jsx("div",{className:"space-y-8",children:ku.map(l=>i.jsx($,{to:`/blog/${l.slug}`,className:"block bg-white rounded-sm border border-gray-100 p-6 md:p-8 card-hover group",children:i.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:gap-8",children:[i.jsx("div",{className:"flex-shrink-0 mb-3 md:mb-0 md:w-40",children:i.jsx("span",{className:"text-sm text-[#D4A853] font-semibold",children:l.date})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3 group-hover:text-[#D4A853] transition-colors",children:l.title}),i.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-4",children:l.excerpt}),i.jsxs("span",{className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase group-hover:text-[#C49A48] transition-colors",children:["Read More",i.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})]})},l.slug))})})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Immigration Case?"}),i.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us for a consultation. Our experienced immigration attorneys are ready to help."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),i.jsx("button",{onClick:()=>r("/contact"),className:"btn-outline",children:"Contact Us Online"})]})]})})]})}function Pf(){const{slug:r}=Zi(),l=ku.find(c=>c.slug===r);return l?i.jsxs("div",{children:[i.jsx(Ae,{title:`${l.title} | Becraft Immigration Law`,description:l.excerpt,canonical:`/blog/${l.slug}`,schema:{"@context":"https://schema.org","@type":"BlogPosting",headline:l.title,datePublished:l.date,author:{"@type":"Organization",name:"Law Office of Todd Becraft"}}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",children:[i.jsxs($,{to:"/blog",className:"inline-flex items-center gap-1.5 text-[#D4A853] text-sm font-semibold mb-6 hover:text-[#E8C97A] transition-colors",children:[i.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"Back to Blog"]}),i.jsx("div",{className:"gold-line mb-6"}),i.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold mb-4 leading-tight",children:l.title}),i.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.date})]}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-3xl mx-auto",children:i.jsx("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed",children:l.content?i.jsx("div",{className:"prose prose-lg max-w-none",children:(()=>{const c=u=>u.split("**").map((p,m)=>m%2===1?i.jsx("strong",{children:p},m):i.jsx("span",{children:p},m));return l.content.split(`

`).map((u,p)=>{const m=u.trim();if(m.startsWith("## "))return i.jsx("h2",{className:"text-xl md:text-2xl font-serif font-bold text-[#1B2A4A] mt-8 mb-4",children:c(m.slice(3))},p);const f=m.split(`
`),x=f.findIndex(v=>v.trim().startsWith("- "));if(x!==-1&&f.slice(x).every(v=>v.trim().startsWith("- "))){const v=f.slice(0,x).join(" ").trim();return i.jsxs("div",{children:[v&&i.jsx("p",{className:"text-base leading-relaxed mb-2",children:c(v)}),i.jsx("ul",{className:"list-disc pl-6 mb-4 space-y-1",children:f.slice(x).map((b,C)=>i.jsx("li",{className:"text-base leading-relaxed",children:c(b.trim().slice(2))},C))})]},p)}return i.jsx("p",{className:"text-base leading-relaxed mb-4",children:c(m)},p)})})()}):l.sections?l.sections.map((c,u)=>{var p;return i.jsxs("div",{children:[c.heading&&i.jsx("h2",{className:"text-lg font-serif font-bold text-[#1B2A4A] mb-4",children:c.heading}),(p=c.paragraphs)==null?void 0:p.map((m,f)=>i.jsx("p",{className:"text-base leading-relaxed mb-4",children:m},f))]},u)}):null})})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"Have Questions About Your Immigration Case?"}),i.jsx("p",{className:"text-gray-300 mb-8",children:"Contact us for a consultation. Our experienced immigration attorneys are ready to help."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Call (213) 388-1821"}),i.jsx($,{to:"/contact",className:"btn-outline",children:"Contact Us Online"})]})]})})]}):i.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-warm-white px-4",children:[i.jsx("h1",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Post not found"}),i.jsx($,{to:"/blog",className:"text-[#D4A853] font-semibold hover:underline",children:"← Back to Blog"})]})}const Bf=[{slug:"deportacion-y-remocion",title:"Deportación y Remoción",description:"Nuestros abogados luchan agresivamente para mantener a las familias unidas. Exploramos cada posible forma de alivio contra la deportación."},{slug:"ciudadania-y-naturalizacion",title:"Ciudadanía y Naturalización",description:"La Oficina Legal de Todd Becraft le puede asistir en realizar su sueño de ser ciudadano/a de los Estados Unidos."},{slug:"asilo",title:"Asilo",description:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo por persecución."},{slug:"tarjeta-verde-ajuste-de-estatus",title:"Tarjeta Verde / Ajuste de Estatus",description:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes por relaciones familiares o empleo."},{slug:"cancelacion-de-eliminacion",title:"Cancelación de Eliminación",description:"Una defensa poderosa para personas en procedimientos de remoción con residencia a largo plazo en los EE.UU."},{slug:"daca",title:"DACA",description:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes iniciales y renovaciones."},{slug:"visa-u",title:"Visa U",description:"La Oficina legal de Todd Becraft representa clientes víctimas de delitos que cooperan en una investigación criminal."},{slug:"estado-de-proteccion-temporal-tps",title:"Estado de Protección Temporal (TPS)",description:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones y documentos de autorización de trabajo."},{slug:"visa-de-prometido-k-1",title:"Visa de Prometido K-1",description:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar y casarse en los Estados Unidos."},{slug:"i-601a-exenciones-provisionales",title:"I-601A Exenciones Provisionales",description:"Permitimos a ciertos parientes inmediatos de ciudadanos de EE.UU. solicitar una exención antes de su entrevista consular."}],Rf=[{name:"Tiwa Bob",text:"Siempre viviré para recordar los servicios legales profesionales que recibí de la Oficina Legal de Todd Becraft. Todo el personal de este bufete de abogados es atento y siempre trabaja de acuerdo con las instrucciones de su cliente."},{name:"Ariel Arauz",text:"Ciertamente, el abogado Todd Becraft, es el mejor abogado de inmigración que conozco, entre sus cualidades se incluyen: Honestidad, dedicación, profesionalismo, muy inteligente, carisma, profundo conocimiento de la ley de inmigración, etc."},{name:"John",text:"En mi primer encuentro con él, la recepción fue fantástica y muy profesional. me mostró mucho cuidado al preguntar cómo está mi familia, para mí eso es una marca de una persona que se preocupa por otras personas."},{name:"Joseph M.",text:"El abogado Todd Becraft es un abogado de inmigración excepcional y conocedor. El abogado Todd manejó mi caso con tanta clase y dignidad que gané mi caso."}];function Mf(){const r=$e();return i.jsxs("div",{children:[i.jsx(Ae,{title:"Abogados de Inmigración en Los Ángeles | Ley Becraft",description:"Abogados de inmigración expertos en Los Ángeles. Asilo, defensa contra deportación, tarjetas verdes, ciudadanía y más. Llame al (213) 388-1821.",canonical:"/es",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:[{lang:"en",path:"/"},{lang:"es",path:"/es"},{lang:"x-default",path:"/"}]}),i.jsxs("section",{className:"relative bg-[#1B2A4A] overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.4) 1px, transparent 0)",backgroundSize:"40px 40px"}}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-8"}),i.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6",children:["Te Podemos Ayudar A Lograr Tu"," ",i.jsx("span",{className:"text-[#D4A853]",children:"Sueño Americano."})]}),i.jsx("p",{className:"text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl",children:"Honestos | Experimentados | Comprometidos Para Ayudarte"}),i.jsx("p",{className:"text-gray-400 mb-10",children:"Ley de inmigración es todo lo que hacemos — y lo hacemos excepcionalmente bien."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[i.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[i.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Consulta"]}),i.jsx("button",{onClick:()=>r("/es/servicios"),className:"btn-outline",children:"Nuestros Servicios"})]}),i.jsxs("div",{className:"mt-10 flex items-center gap-3 text-gray-400 text-sm",children:[i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),i.jsx("span",{children:"(213) 388-1821"}),i.jsx("span",{className:"text-gray-600",children:"|"}),i.jsx("span",{children:"Toll Free: (855) 201-6898"})]})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{id:"es-about",className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[i.jsxs("div",{children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-6",children:["Comprometidos a Defender los"," ",i.jsx("span",{className:"text-[#D4A853]",children:"Derechos de los Inmigrantes"})]}),i.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:"For more than 20 years, The Law Office of Todd Becraft has been dedicated to defending the rights of immigrants from all over the world. Based in Los Angeles California, our firm is dedicated exclusively to immigration law. Whether the case involves removal from the United States, a family petition, an asylum case, or a citizenship case we are committed to achieving the best results for our clients and their families. Our firm is fully bilingual (English / Spanish) because at the law office of Todd Becraft we believe that communication is the key to success in any legal matter. At The Law Office of Todd Becraft you will never have to wonder about the status of your case."})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"rounded-sm overflow-hidden",children:[i.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",alt:"Todd Becraft, Abogado Fundador",className:"w-full aspect-[4/5] object-cover object-top"}),i.jsxs("div",{className:"bg-[#1B2A4A] p-6",children:[i.jsx("p",{className:"text-white font-serif font-bold",children:"Todd Becraft"}),i.jsx("p",{className:"text-[#D4A853] text-xs tracking-wider uppercase mt-1",children:"Abogado Fundador"})]})]}),i.jsx("div",{className:"absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A853]/20 rounded-sm -z-10"})]})]})})}),i.jsx("section",{id:"es-services",className:"section-padding bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Nuestros Servicios"}),i.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Manejamos una amplia gama de asuntos de inmigración, desde peticiones familiares hasta defensa de deportación y apelaciones en tribunales federales."})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:Bf.map(l=>i.jsxs($,{to:`/es/servicios/${l.slug}`,className:"text-left p-6 bg-[#FAFAF8] rounded-sm border border-gray-100 card-hover group block",children:[i.jsx("div",{className:"text-[#D4A853] mb-4",children:i.jsx("svg",{className:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})}),i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2 group-hover:text-[#D4A853] transition-colors",children:l.title}),i.jsx("p",{className:"text-gray-500 text-sm",children:l.description})]},l.slug))}),i.jsx("div",{className:"mt-10 text-center",children:i.jsxs($,{to:"/es/servicios",className:"btn-gold inline-flex items-center",children:["Ver Todos los Servicios",i.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})]})}),i.jsx("section",{id:"es-testimonials",className:"section-padding bg-warm-gray",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold",children:"Testimonios"})]}),i.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Rf.map(l=>i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[i.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(5)].map((c,u)=>i.jsx("svg",{className:"w-4 h-4 text-[#D4A853]",fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},u))}),i.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed italic mb-6",children:['"',l.text,'"']}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center",children:i.jsx("span",{className:"text-[#D4A853] font-serif font-bold text-sm",children:l.name.charAt(0)})}),i.jsxs("div",{children:[i.jsx("p",{className:"font-serif font-bold text-[#1B2A4A] text-sm",children:l.name}),i.jsx("p",{className:"text-gray-400 text-xs",children:"Cliente"})]})]})]},l.name))})]})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16 md:py-20",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"text-center mb-12",children:i.jsxs("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold",children:["Miles de Familias ",i.jsx("span",{className:"text-[#D4A853]",children:"Reunidas"})]})}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[{number:"20+",label:"Años de Experiencia"},{number:"12",label:"Áreas de Práctica"},{number:"4",label:"Abogados y Personal"},{number:"2",label:"Idiomas"}].map(l=>i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-4xl md:text-5xl font-serif text-[#D4A853] font-bold mb-2",children:l.number}),i.jsx("p",{className:"text-gray-300 text-sm",children:l.label})]},l.label))})]})}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Guías Gratuitas de Inmigración"}),i.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Recursos educativos gratuitos preparados por el Abogado Todd Becraft para ayudarle a entender sus opciones."})]}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[i.jsxs($,{to:"/es/recursos/la-guia-becraft-para-evitar-la-deportacion",className:"p-8 bg-white rounded-sm border border-gray-100 card-hover group block",children:[i.jsx("div",{className:"text-[#D4A853] mb-4",children:i.jsx("svg",{className:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A853] transition-colors",children:"La Guía Becraft para Evitar la Deportación"}),i.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"Una guía completa sobre el proceso de deportación, sus derechos legales y todas las defensas disponibles para evitar la remoción."}),i.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] text-sm font-semibold",children:["Leer la Guía",i.jsx("svg",{className:"w-4 h-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]}),i.jsxs($,{to:"/es/recursos/la-guia-de-becraft-sobre-como-convertirse-en-ciudadano-estadounidense",className:"p-8 bg-white rounded-sm border border-gray-100 card-hover group block",children:[i.jsx("div",{className:"text-[#D4A853] mb-4",children:i.jsx("svg",{className:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"})})}),i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A853] transition-colors",children:"Cómo Convertirse en Ciudadano Estadounidense"}),i.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"Todo lo que necesita saber sobre el proceso de naturalización: requisitos de elegibilidad, el proceso paso a paso y los beneficios de la ciudadanía."}),i.jsxs("span",{className:"mt-4 inline-flex items-center text-[#D4A853] text-sm font-semibold",children:["Leer la Guía",i.jsx("svg",{className:"w-4 h-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})]}),i.jsx("div",{className:"mt-8 text-center",children:i.jsx($,{to:"/es/recursos",className:"text-[#D4A853] hover:underline text-sm font-semibold",children:"Ver Todos los Recursos →"})})]})}),i.jsx("section",{id:"es-contact",className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Programe Su Consulta Hoy"}),i.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Dé el primer paso para asegurar su futuro. Nuestros abogados de inmigración con experiencia están listos para evaluar su caso y discutir sus opciones."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsxs("a",{href:"tel:2133881821",className:"btn-gold",children:[i.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),"Llame al (213) 388-1821"]}),i.jsx("button",{onClick:()=>r("/contact"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Envíenos un Mensaje"})]}),i.jsxs("p",{className:"mt-6 text-sm text-gray-500",children:["Toll Free: ",i.jsx("a",{href:"tel:8552016898",className:"text-[#D4A853] hover:underline",children:"(855) 201-6898"}),i.jsx("span",{className:"mx-3 text-gray-300",children:"|"}),i.jsx("span",{className:"text-[#D4A853] font-semibold",children:"Se Habla Español"})]})]})})]})}const Eu=[{slug:"asilo",title:"Asilo",subtitle:"Proceso y Requisitos de Asilo",metaDescription:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo. Representamos a personas que solicitan asilo en Los Ángeles.",intro:"La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo. Representamos a personas que solicitan asilo por persecución por raza, religión, nacionalidad, opinión política o membresía en un grupo social particular.",sections:[{heading:"Proceso Afirmativo",paragraphs:["Un extranjero debe estar físicamente presente en los Estados Unidos para obtener asilo a través del proceso afirmativo.","Un extranjero debe solicitar asilo dentro de un año de su última fecha de llegada a los Estados Unidos.","Un extranjero también puede solicitar asilo afirmativo presentando el Formulario I-589, Solicitud de Asilo y Suspensión de Expulsión, al USCIS."]},{heading:"Proceso Defensivo",paragraphs:["Las solicitudes defensivas de asilo ocurren cuando los extranjeros solicitan asilo como defensa contra la expulsión de los Estados Unidos.","Los jueces de inmigración escucharán casos de asilo defensivo en procedimientos contradictorios. Un juez escuchará los argumentos tanto del extranjero como del gobierno de EE.UU."]},{heading:"Personas No Elegibles para el Asilo",bullets:["No siguió la fecha límite de presentación de un año para el Formulario I-589","Si un juez de inmigración o la Junta de Apelaciones de Inmigración negaron su solicitud de asilo anterior","Puede ser trasladado a un tercer país seguro en virtud de un acuerdo entre los EE.UU. y otros países"]}],cta:"¿Necesita ayuda para solicitar asilo en el área de Los Ángeles? La Oficina Legal de Todd Becraft entiende las formas más efectivas de manejar estos casos. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta."},{slug:"cancelacion-de-eliminacion",title:"Cancelación de Eliminación",subtitle:"Una Defensa Poderosa contra la Deportación",metaDescription:"La cancelación de deportación es una defensa poderosa para personas en procedimientos de remoción. Abogados de inmigración en Los Ángeles.",intro:"La cancelación de deportación es una defensa poderosa para personas en procedimientos de remoción que pueden demostrar residencia a largo plazo en los EE.UU. y vínculos familiares fuertes.",sections:[{heading:"Elegibilidad para Cancelación de Deportación",paragraphs:["Una persona puede ser elegible para que se cancele su remoción bajo la sección 240A(b) de la INA si puede establecer ante un juez de inmigración que cumple con ciertos requisitos."],bullets:["Ha mantenido presencia física continua en los EE.UU. durante diez años o más","Ha sido una persona de buen carácter moral durante ese período","No ha sido condenado por ciertos delitos","Su remoción causaría dificultades excepcionales a su cónyuge, padre o hijo ciudadano de EE.UU. o LPR"]},{heading:"Satisfacer el Requisito de Residencia de 10 Años",paragraphs:["Los recibos de alquiler, resúmenes de tarjetas de crédito y talones de pago pueden ser formas de evidencia para probar residencia continua.","Es importante que las personas entiendan que salir del país por más de 90 días o sumar más de 180 días puede afectar negativamente el cálculo de 10 años."]},{heading:"Requisito de Dificultad Excepcional",paragraphs:["Este requisito puede ser uno de los más difíciles de cumplir porque una persona necesita presentar motivos que vayan más allá de la simple tristeza de un familiar.","Cuando existe preocupación de que la atención médica no esté disponible en el país de origen, eso a menudo es suficiente para satisfacer esta carga."]}],cta:"Puede llamar al (213) 388-1821 o contáctenos en línea para concertar una consulta con nuestro abogado de cancelación de deportación en Los Ángeles."},{slug:"ciudadania-y-naturalizacion",title:"Ciudadanía y Naturalización",subtitle:"El Proceso de Naturalización Explicado",metaDescription:"Guiamos a nuestros clientes a través de cada paso del proceso de naturalización. Abogados de ciudadanía e inmigración en Los Ángeles.",intro:"Guiamos a nuestros clientes a través de cada paso del proceso de naturalización, desde determinar la elegibilidad hasta prepararse para la entrevista y el examen de ciudadanía.",sections:[{heading:"Requisitos de Naturalización",paragraphs:["La naturalización es el proceso mediante el cual se otorga la ciudadanía estadounidense a un residente permanente legal después de cumplir con los requisitos establecidos en la Ley de Inmigración y Nacionalidad."],bullets:["Tener al menos 18 años de edad al presentar la solicitud","Ser residente permanente legal (titular de tarjeta verde) durante al menos 5 años (3 años si está casado con ciudadano/a)","Haber vivido en los EE.UU. continuamente","Ser una persona de buen carácter moral","Ser capaz de leer, escribir y hablar inglés básico","Demostrar conocimiento de la historia y gobierno de EE.UU.","Estar dispuesto a prestar el Juramento de Lealtad"]},{heading:"El Proceso de Naturalización",paragraphs:["Cuando alguien envía su solicitud, es posible que deba someterse a la recopilación de datos biométricos. USCIS programa una cita y le informa la hora, el lugar y la fecha.","La naturalización también implica una entrevista con un oficial de inmigración de USCIS donde debe demostrar conocimiento del idioma inglés y del civismo.","También habrá un examen de historia y gobierno de los Estados Unidos."]}],cta:"Nuestra firma ha estado ayudando a inmigrantes por más de una década. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de ciudadanía y naturalización en Los Ángeles."},{slug:"daca",title:"DACA",subtitle:"Acción Diferida para los Llegados en la Infancia",metaDescription:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes y renovaciones. Abogados de DACA en Los Ángeles.",intro:"Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes iniciales y renovaciones. Monitoreamos los cambios en el programa para asegurarnos de que nuestros clientes estén preparados.",sections:[{heading:"Requisitos de DACA",paragraphs:["Las solicitudes de DACA solo se pueden otorgar cuando USCIS determina que una persona cumple con los siguientes criterios mínimos:"],bullets:["Tenían menos de 31 años el 15 de junio de 2012","Llegó a los Estados Unidos antes de cumplir los 16 años de edad","Ha vivido en los Estados Unidos continuamente desde el 15 de junio de 2007","Estaba presente en los EE.UU. el 15 de junio de 2012 y en el momento de hacer la solicitud","No tiene una condena por delito grave, delito menor significativo o tres o más delitos menores","No representa una amenaza para la seguridad nacional o pública","Tiene al menos 15 años de edad al momento de solicitar"]},{heading:"Proceso de Solicitud de DACA",paragraphs:["Aunque DACA se ha vuelto más complicado para nuevas personas en el programa, todavía ofrece beneficios considerables para personas elegibles.","Nuestros servicios incluyen solicitudes iniciales de DACA, renovaciones oportunas para prevenir brechas en la autorización de trabajo, solicitudes de advance parole, y abordar complicaciones con el estatus DACA."]}],cta:"Nuestra firma entiende lo aterrador que puede ser este proceso. Puede llamar al (213) 388-1821 o contáctenos en línea para recibir una consulta con nuestro abogado de DACA en Los Ángeles."},{slug:"deportacion-y-remocion",title:"Deportación y Remoción",subtitle:"Defensa Agresiva contra la Deportación",metaDescription:"Nuestros abogados son defensores experimentados que luchan agresivamente para mantener a las familias unidas. Defensa contra deportación en Los Ángeles.",intro:"Nuestros abogados son defensores experimentados en sala de audiencias que luchan agresivamente para mantener a las familias unidas. Exploramos cada posible forma de alivio.",sections:[{heading:"Audiencias de Deportación",paragraphs:["El Título 8 del Código de EE.UU. § 1229a es la ley federal relacionada con los procedimientos de deportación. Pocas perspectivas pueden ser más aterradoras que enfrentarse a la deportación.","Un caso de deportación terminará con la deportación de la persona a su país de origen o con la elegibilidad para continuar viviendo y trabajando en los EE.UU.","Cuando una persona recibe un Aviso de comparecencia en la corte de inmigración, el Departamento de Seguridad Nacional ha comenzado el proceso para deportarlo de los EE.UU."]},{heading:"Formas de Defensa",bullets:["Asilo y suspensión de remoción","Protección de la Convención contra la Tortura (CAT)","Cancelación de remoción","Ajuste de estatus","Salida voluntaria","Discreción del fiscal","Apelaciones ante la Junta de Apelaciones de Inmigración (BIA)","Apelaciones ante el Tribunal del 9no Circuito"]}],cta:"Nuestra firma entiende que cada cliente que servimos es único. Dé el primer paso cuando llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de deportación y remoción en Los Ángeles."},{slug:"tarjeta-verde-ajuste-de-estatus",title:"Tarjeta Verde / Ajuste de Estatus",subtitle:"Su Camino hacia la Residencia Permanente",metaDescription:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes. Abogados de tarjeta verde y ajuste de estatus en Los Ángeles.",intro:"Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes por relaciones familiares, empleo u otras categorías.",sections:[{heading:"Cómo Solicitar una Tarjeta Verde",paragraphs:["El Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) señala que el ajuste de estatus se refiere a un proceso que una persona puede usar para solicitar la residencia permanente legal sin tener que regresar a su país de origen.","La mayoría de las personas que solicitan tarjetas de residencia deben completar al menos dos formularios: una petición de inmigrante y una solicitud de tarjeta de residencia."]},{heading:"Categorías de Elegibilidad",bullets:["Basada en relaciones familiares (cónyuge, padre, hijo de ciudadano de EE.UU. o LPR)","Basada en empleo (trabajadores con habilidades especiales, trabajadores profesionales, otros trabajadores)","Lotería de visa de diversidad","Categorías humanitarias (asilo, refugiado, VAWA)","Visa U después de tres años"]}],cta:"Nuestra firma se tomará el tiempo para explicarle cada acción que ocurre en su caso. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de tarjeta verde en Los Ángeles."},{slug:"visa-de-prometido-k-1",title:"Visa de Prometido K-1",subtitle:"Requisitos y Proceso de la Visa K-1",metaDescription:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar a los Estados Unidos y casarse dentro de 90 días. Abogados en Los Ángeles.",intro:"La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar a los Estados Unidos y casarse dentro de los 90 días de llegada.",sections:[{heading:"Proceso de Visa K-1",paragraphs:["Ciudadanos de los Estados Unidos que deseen traer a su prometido/a extranjero/a al país para casarse deben presentar el Formulario I-129F, Petición para Prometido/a Extranjero/a.","Si el/la prometido/a se casa dentro de los 90 días posteriores a la admisión como no inmigrante K-1, puede solicitar el estatus de residente permanente legal."]},{heading:"Requisitos de Elegibilidad",bullets:["El peticionario debe ser ciudadano de los EE.UU.","Ambas partes deben ser legalmente libres para casarse","Las partes se han conocido en persona en los dos años anteriores a la solicitud (con excepciones)","El ciudadano de EE.UU. debe cumplir con los requisitos de ingresos"]}],cta:"Nuestra firma ha ayudado a muchas personas en todo California a obtener las visas K-1 que necesitaban para casarse. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de visa K-1 en Los Ángeles."},{slug:"estado-de-proteccion-temporal-tps",title:"Estado de Protección Temporal (TPS)",subtitle:"Lo Que Necesita Saber sobre el TPS",metaDescription:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones y documentos de autorización de trabajo. Abogados de TPS en Los Ángeles.",intro:"Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones oportunas y documentos de autorización de trabajo.",sections:[{heading:"¿Quién Califica para TPS?",paragraphs:["El Estado de Protección Temporal (TPS) es una forma de ayuda humanitaria para ciudadanos extranjeros dentro de los EE.UU. cuyo país de origen está designado por el Secretario de Seguridad Nacional."],bullets:["Es ciudadano del país designado para TPS","Ha residido continuamente en los EE.UU. desde la fecha especificada para el país","Ha estado presente físicamente en los EE.UU. continuamente desde la fecha designada","No ha sido condenado por dos o más delitos menores o un delito grave"]},{heading:"Países con TPS",paragraphs:["Los países con nacionales bajo TPS incluyen Somalia, Honduras, Nicaragua, Camerún, El Salvador, Haití, Siria, Sudán, Nepal, Sudán del Sur, Yemen, Venezuela, Myanmar, Ucrania y Afganistán."]}],cta:"Nuestra firma trabaja muy de cerca con cada cliente. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de TPS en Los Ángeles."},{slug:"i-601a-exenciones-provisionales",title:"I-601A Exenciones Provisionales",subtitle:"El Proceso de Exención Provisional I-601A",metaDescription:"La exención provisional I-601A permite a ciertos parientes inmediatos solicitar una exención antes de su entrevista consular. Abogados en Los Ángeles.",intro:"La exención provisional I-601A permite a ciertos parientes inmediatos de ciudadanos de EE.UU. solicitar una exención antes de salir de los EE.UU. para su entrevista consular.",sections:[{heading:"¿Qué es el Formulario I-601A?",paragraphs:["El Formulario I-601A, Solicitud de Exención Provisional de Presencia Ilegal, es diferente del Formulario I-601. Mientras que el I-601 es para extranjeros inadmisibles en los EE.UU., el I-601A es específicamente para personas que solo necesitan una exención por presencia ilegal.","Si bien el Formulario I-601A puede renunciar a la presencia ilegal, no renuncia a otros motivos de inadmisibilidad."]},{heading:"Requisitos para el I-601A",bullets:["Ser pariente inmediato de un ciudadano de los EE.UU. (cónyuge, hijo, padre)","Tener una petición de inmigrante aprobada (Formulario I-130)","Tener un caso pendiente con el Centro Nacional de Visas","Demostrar que la denegación causaría dificultades extremas al cónyuge o padre ciudadano de EE.UU."]}],cta:"Nuestra firma ha manejado muchos de estos casos, así que sabemos cómo abordar cualquier problema que pueda surgir. Llame al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de exenciones I-601A en Los Ángeles."},{slug:"visa-u",title:"Visa U",subtitle:"Beneficios de Inmigración para Víctimas de Delitos",metaDescription:"La Visa U proporciona beneficios de inmigración a víctimas de delitos que han cooperado con las autoridades. Abogados de Visa U en Los Ángeles.",intro:"La Visa U proporciona beneficios de inmigración a víctimas de delitos que han cooperado con las autoridades. También ayudamos con el ajuste de estatus a residencia permanente después de tres años.",sections:[{heading:"¿Qué es la Visa U?",paragraphs:["El estatus de no inmigrante U (la Visa U) es un programa de alivio de inmigración que busca hacer más seguro para las víctimas de ciertos delitos denunciar sus casos a la policía.","El Congreso aprobó la Ley de Protección de Víctimas de la Trata y la Violencia (VTVPA) en 2000 y creó dos categorías de visas de no inmigrante: la Visa U para víctimas de ciertos delitos y la Visa T para víctimas de trata de personas."]},{heading:"Elegibilidad para la Visa U",bullets:["Ha sufrido abuso físico o mental sustancial como resultado de haber sido víctima de actividad delictiva calificada","Tiene información sobre la actividad delictiva calificada","Ha sido útil, es útil o probablemente será útil para funcionarios del orden público en la investigación o enjuiciamiento de la actividad delictiva","La actividad delictiva violó las leyes de los EE.UU. o ocurrió en los EE.UU."]},{heading:"Actividades Delictivas Calificadas",bullets:["Violencia doméstica","Agresión sexual","Abuso sexual de un menor","Prostitución","Esclavitud","Tráfico de personas","Acoso","Secuestro","Extorsión","Testigo falso","Obstrucción de la justicia","Y otros delitos graves"]}],cta:"Nuestra firma sabrá cómo ayudarle a superar cualquier complicación y lograr el resultado más favorable posible para su caso. Puede llamar al (213) 388-1821 o contáctenos en línea para programar una consulta con nuestro abogado de Visa U en Los Ángeles."}];function Ff(r){return Eu.find(l=>l.slug===r)}const ys={asilo:"asylum","cancelacion-de-eliminacion":"cancellation-of-removal","ciudadania-y-naturalizacion":"citizenship-and-naturalization",daca:"daca","deportacion-y-remocion":"deportation-and-removal","tarjeta-verde-ajuste-de-estatus":"green-card-adjustment-of-status","i-601a-exenciones-provisionales":"i-601a-provisional-waivers","visa-de-prometido-k-1":"k-1-fiance-visa","estado-de-proteccion-temporal-tps":"temporary-protected-status-tps","visa-u":"u-visa"};function Of(){const r=$e(),[l,c]=q.useState(null);return i.jsxs("div",{children:[i.jsx(Ae,{title:"Nuestros Servicios | Abogados de Inmigración Los Ángeles",description:"Servicios completos de inmigración en Los Ángeles. Asilo, cancelación de deportación, tarjetas verdes, ciudadanía, DACA, Visa U y más. Llame al (213) 388-1821.",canonical:"/es/servicios",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Nuestros ",i.jsx("span",{className:"text-[#D4A853]",children:"Servicios"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Nuestra firma maneja la gama completa de asuntos de inmigración. Desde asilo y defensa contra la deportación hasta reunificación familiar y ciudadanía, tenemos la experiencia y dedicación que su caso exige."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-5xl mx-auto",children:i.jsx("div",{className:"space-y-6",children:Eu.map(u=>{const p=l===u.slug;return i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[i.jsxs("button",{onClick:()=>c(p?null:u.slug),className:"w-full text-left p-6 md:p-8 flex items-start gap-5",children:[i.jsx("div",{className:"flex-shrink-0 w-14 h-14 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:i.jsx("svg",{className:"w-7 h-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-1",children:u.title}),i.jsxs("p",{className:"text-gray-500 text-sm",children:[u.intro.substring(0,120),"..."]})]}),i.jsx("div",{className:"flex-shrink-0 mt-1",children:i.jsx("svg",{className:`w-5 h-5 text-[#D4A853] transition-transform duration-300 ${p?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})})]}),i.jsx("div",{className:`transition-all duration-300 overflow-hidden ${p?"max-h-[600px] opacity-100":"max-h-0 opacity-0"}`,children:i.jsxs("div",{className:"px-6 md:px-8 pb-8 ml-0 md:ml-[4.75rem]",children:[i.jsx("div",{className:"gold-line mb-5"}),i.jsx("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:u.intro}),i.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[i.jsxs($,{to:`/es/servicios/${u.slug}`,onClick:m=>m.stopPropagation(),className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Leer Más",i.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),i.jsx("button",{onClick:m=>{m.stopPropagation(),r("/es/contactenos")},className:"inline-flex items-center text-gray-500 font-semibold text-sm tracking-wide uppercase hover:text-[#1B2A4A] transition-colors",children:"Consultar su Caso"})]})]})})]},u.slug)})})})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿No Está Seguro Qué Servicio Necesita?"}),i.jsx("p",{className:"text-gray-300 mb-8",children:"Cada caso de inmigración es único. Contáctenos para una consulta y le ayudaremos a entender sus opciones."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),i.jsx("button",{onClick:()=>r("/es/contactenos"),className:"btn-outline",children:"Contáctenos en Línea"})]})]})})]})}function Wf(){const{area:r}=Zi(),l=$e(),c=r?Ff(r):void 0;return q.useEffect(()=>{c&&Au({service_name:c.title,service_slug:c.slug,language:"es"})},[c==null?void 0:c.slug]),c?i.jsxs("div",{children:[i.jsx(Ae,{title:`${c.title} | Abogados de Inmigración Los Ángeles`,description:c.metaDescription,canonical:`/es/servicios/${c.slug}`,ogImage:`https://www.makeitglow.co/api/og/becraft-immigration?title=${encodeURIComponent(c.title)}&subtitle=${encodeURIComponent("Abogados de Inmigración · Los Ángeles")}`,schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"},hreflang:ys[c.slug]?[{lang:"en",path:`/services/${ys[c.slug]}`},{lang:"es",path:`/es/servicios/${c.slug}`},{lang:"x-default",path:`/services/${ys[c.slug]}`}]:void 0}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[i.jsx($,{to:"/es/servicios",className:"hover:text-[#D4A853] transition-colors",children:"Servicios"}),i.jsx("span",{children:"/"}),i.jsx("span",{className:"text-gray-300",children:c.title})]}),i.jsx("div",{className:"gold-line mb-6"}),i.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:c.title}),i.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:c.subtitle}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:c.intro})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("div",{className:"space-y-10",children:c.sections.map((u,p)=>{var m;return i.jsxs("div",{children:[u.heading&&i.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:u.heading}),(m=u.paragraphs)==null?void 0:m.map((f,x)=>i.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:f},x)),u.bullets&&u.bullets.length>0&&i.jsx("ul",{className:"space-y-2 mb-4",children:u.bullets.map((f,x)=>i.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[i.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),i.jsx("span",{children:f})]},x))}),u.numbered&&u.numbered.length>0&&i.jsx("ol",{className:"space-y-2 mb-4",children:u.numbered.map((f,x)=>i.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[i.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:x+1}),i.jsx("span",{children:f})]},x))})]},p)})}),i.jsx("div",{className:"gold-line my-10"}),i.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[i.jsxs("h2",{className:"text-2xl font-serif text-white font-bold mb-3",children:["¿Necesita Ayuda con ",c.title,"?"]}),i.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:"Nuestros abogados de inmigración están listos para evaluar su caso. Consultas disponibles."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",onClick:()=>ri({phone_number:"2133881821",location:"service_cta",language:"es"}),className:"btn-gold",children:"Llame al (213) 388-1821"}),i.jsx("button",{onClick:()=>{ju({label:"contact_us_online",location:"service_cta",language:"es"}),l("/es/contactenos")},className:"btn-outline",children:"Envíenos un Mensaje"})]})]})]})}),i.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4",children:i.jsxs($,{to:"/es/servicios",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[i.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"Volver a Servicios"]})})})]}):i.jsxs("div",{className:"section-padding text-center",children:[i.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Página No Encontrada"}),i.jsx("p",{className:"text-gray-500 mb-8",children:"Ese servicio no existe."}),i.jsx($,{to:"/es/servicios",className:"btn-gold",children:"Volver a Servicios"})]})}const Uu=[{slug:"la-guia-becraft-para-evitar-la-deportacion",title:"La Guía Becraft para Evitar la Deportación",subtitle:"¿Cuáles Son Sus Derechos Legales Si Podría Ser Deportado?",metaDescription:"Una guía completa que cubre el proceso de deportación, defensas legales, y todas las opciones disponibles para evitar ser deportado. De la Oficina Legal de Todd Becraft.",intro:"La deportación, también conocida como expulsión, es un proceso grave en el que a un no ciudadano se le ordena abandonar el país debido a una violación de las leyes de inmigración. Esta guía le ayudará a entender sus derechos y opciones.",sections:[{heading:"Comprender el Proceso de Deportación",paragraphs:["Antes de analizar los recursos legales, es importante entender cómo funcionan los procedimientos de deportación. La deportación generalmente comienza con un arresto o un Aviso de Comparecencia (NTA) ante un juez de inmigración. La agencia de Inmigración y Control de Aduanas de EE.UU. (ICE) es responsable de hacer cumplir las órdenes de deportación.","El proceso generalmente sigue estos pasos:"],bullets:["Emisión de un Aviso de Comparecencia (NTA): Este documento describe los motivos de los procedimientos de expulsión y especifica una fecha en el tribunal.","Audiencia del Calendario Principal: Esta audiencia inicial permite al no ciudadano responder a los cargos y solicitar alivio.","Audiencia Individual: Si se busca alivio, se programará una audiencia separada para presentar pruebas y argumentos legales.","Decisión del Juez de Inmigración: El juez otorgará el alivio o emitirá una orden de deportación.","Apelaciones: Si el juez ordena la deportación, la persona puede tener opciones para apelar la decisión.","Expulsión o Suspensión de la Expulsión: Si se agotan todas las opciones legales, la persona puede ser deportada o se le puede otorgar una suspensión de la expulsión."]},{heading:"Recursos Legales contra la Deportación",paragraphs:["Existen varias defensas y recursos legales disponibles para las personas que enfrentan la deportación. Cada caso es único y buscar asesoramiento legal es crucial para determinar el mejor curso de acción."]},{heading:"1. Impugnar los Cargos",paragraphs:["Uno de los primeros pasos para combatir la deportación es cuestionar la base legal para la expulsión. Las posibles defensas incluyen:"],bullets:["Defectos de procedimiento: Si el NTA contiene información incorrecta, o si el gobierno no sigue los procedimientos adecuados, el caso puede ser desestimado.","Falta de evidencia: El gobierno debe probar que el individuo es expulsable. Si faltan pruebas suficientes, el caso puede ser desestimado.","Arresto o detención ilegal: Si se violaron los derechos de una persona durante el proceso de arresto o detención, se podrían impugnar los procedimientos de expulsión."]},{heading:"2. Asilo y Protección contra Persecución",paragraphs:["Las personas que temen persecución en su país de origen por raza, religión, nacionalidad, opinión política o membresía en un grupo social particular pueden solicitar asilo. Para ser elegible, el solicitante debe:"],bullets:["Presentar la solicitud dentro de un año de llegada a los EE.UU. (o mostrar circunstancias excepcionales para una presentación tardía).","Demostrar un miedo creíble de persecución.","Proporcionar evidencia que apoye la solicitud."]},{heading:"3. Cancelación de Remoción",paragraphs:["La cancelación de la expulsión es una forma de alivio disponible para ciertas personas que han establecido vínculos sólidos con los EE.UU. Los criterios de elegibilidad varían según si el solicitante es un residente permanente legal (LPR) o un residente no permanente."],bullets:["Para Residentes Permanentes Legales: Debe haber sido LPR durante al menos cinco años, haber residido continuamente en los EE.UU. durante al menos siete años, y no haber sido condenado por un delito grave agravado.","Para No Residentes Permanentes: Debe haber estado físicamente presente en los EE.UU. durante al menos diez años, demostrar buen carácter moral y probar que la expulsión causaría dificultades excepcionales y extremadamente inusuales a un familiar ciudadano de EE.UU. o LPR que califique."]},{heading:"4. Ajuste de Estatus",paragraphs:["Algunas personas que enfrentan la deportación pueden ser elegibles para ajustar su estatus al de residente permanente legal (titular de tarjeta verde). Esta opción puede estar disponible si:"],bullets:["El individuo tiene un familiar inmediato que es ciudadano de EE.UU. o residente permanente legal y puede peticionarlo.","El individuo califica bajo ciertas categorías de empleo.","El individuo califica bajo programas especiales como la Ley de Violencia contra la Mujer (VAWA) o el estatus de inmigrante juvenil especial (SIJS)."]},{heading:"5. Salida Voluntaria",paragraphs:["Si no hay otros recursos legales disponibles, una persona puede solicitar la salida voluntaria. Esto le permite salir de los EE.UU. en sus propios términos en lugar de ser expulsado por la fuerza, incluida la capacidad de volver a solicitar la entrada legal en el futuro sin las penalidades asociadas con la deportación."]}],cta:"La deportación es un asunto legal grave, pero existen numerosas opciones legales para las personas en riesgo de expulsión. Buscar asesoramiento legal inmediato es esencial. En la Oficina Legal de Todd Becraft, traemos años de experiencia ayudando a las personas a evitar la deportación. Llámenos hoy: (213) 388-1821."},{slug:"la-guia-de-becraft-sobre-como-convertirse-en-ciudadano-estadounidense",title:"La Guía de Becraft sobre Cómo Convertirse en Ciudadano Estadounidense",subtitle:"El Camino hacia la Ciudadanía Americana",metaDescription:"Una guía completa sobre el proceso de naturalización: requisitos de elegibilidad, el proceso paso a paso, y la vida como ciudadano estadounidense.",intro:"¿Es usted un residente no ciudadano de los Estados Unidos que desea convertirse en ciudadano? Esta guía completa le explicará todo lo que necesita saber sobre el proceso de naturalización.",sections:[{heading:"1. Elegibilidad: ¿Está Listo para Solicitar?",paragraphs:["Antes de poder solicitar la ciudadanía estadounidense, debe cumplir con varios requisitos que garanticen que se ha establecido en los Estados Unidos."]},{heading:"A. Estatus de Residente Permanente Legal",paragraphs:["El primer paso es tener el estatus de Residente Permanente Legal (LPR), también conocido como tener una tarjeta verde. La mayoría de los residentes permanentes legales obtuvieron su tarjeta verde a través de patrocinio familiar, empleo o al ser admitidos como refugiados o asilados."],bullets:["Patrocinio familiar","Inmigración basada en empleo","Lotería de Visa de Diversidad","Estatus de Asilo o Refugiado","Categorías especiales de inmigrantes"]},{heading:"B. Residencia Continua",paragraphs:["Una vez que tenga su tarjeta verde, deberá haber vivido en los Estados Unidos continuamente por un período determinado:"],bullets:["Se requieren cinco años de residencia continua para la mayoría de los solicitantes.","Se requieren tres años de residencia continua si está casado con un ciudadano de EE.UU."]},{heading:"C. Presencia Física",bullets:["Debe haber estado físicamente presente en los EE.UU. durante al menos 30 meses de los últimos cinco años.","Si solicita basándose en el matrimonio con un ciudadano de EE.UU., 18 meses de los últimos tres años."]},{heading:"D. Buen Carácter Moral",paragraphs:["Debe demostrar buen carácter moral, lo que significa que ha seguido las leyes, pagado sus impuestos y actuado de manera responsable. Ciertos comportamientos, como cometer delitos graves o no presentar declaraciones de impuestos, pueden descalificarlo."]},{heading:"E. Conocimiento Básico del Inglés",paragraphs:["Debe demostrar competencia básica en lectura, escritura y habla en inglés, que se evalúa durante su entrevista de ciudadanía. La prueba se enfoca en habilidades lingüísticas cotidianas y usa oraciones simples."]},{heading:"F. Conocimiento de la Historia y el Civismo de EE.UU.",paragraphs:["Deberá pasar una prueba de civismo que cubre la historia básica de EE.UU. y el gobierno. USCIS proporciona una lista de 100 preguntas posibles. Se le harán hasta 10 durante su entrevista y necesita responder al menos seis correctamente."]},{heading:"2. El Proceso de Naturalización: Paso a Paso"},{heading:"A. Presentar el Formulario N-400",paragraphs:["El primer paso es presentar el Formulario N-400, Solicitud de Naturalización. Este formulario solicita información sobre su historial personal. El formulario se puede presentar en línea o por correo."]},{heading:"B. Cita de Biometría",paragraphs:["USCIS le programará una cita de biometría donde se recopilan sus huellas dactilares, foto y firma para una verificación de antecedentes."]},{heading:"C. La Entrevista y los Exámenes de Naturalización",paragraphs:["Un oficial de USCIS revisará su solicitud y le hará preguntas para verificar la información. Durante la entrevista también tomará:"],bullets:["Prueba de inglés: Se le pedirá que lea y escriba oraciones simples en inglés, y responda algunas preguntas básicas habladas.","Prueba de civismo: Se le harán hasta 10 preguntas sobre la historia y el gobierno estadounidense; necesita acertar seis para aprobar."]},{heading:"D. El Juramento de Lealtad",paragraphs:["El último paso es prestar el Juramento de Lealtad en su ceremonia de naturalización. Recitará el juramento junto con otros nuevos ciudadanos y recibirá su Certificado de Naturalización, su prueba oficial de ciudadanía estadounidense."]},{heading:"3. La Vida como Ciudadano Estadounidense",paragraphs:["Una vez que haya completado el proceso de naturalización, disfrutará de todos los derechos y privilegios de la ciudadanía:"],bullets:["El derecho a votar en las elecciones federales, estatales y locales.","Solicitar un pasaporte estadounidense para viajes internacionales más fáciles.","Patrocinar a familiares para una tarjeta verde.","Acceso a empleos federales y autorizaciones de seguridad.","Plena participación en el servicio de jurado y la vida cívica."]},{heading:"4. Circunstancias Especiales y Excepciones",bullets:["Servicio militar: Puede calificar para la naturalización expedita sin los requisitos habituales de residencia.","Solicitantes mayores: Los solicitantes de 50 años o más que han vivido en los EE.UU. como titular de tarjeta verde durante 20 años o más pueden tomar el examen de civismo en su idioma nativo.","Exenciones médicas: Los solicitantes con discapacidades físicas o mentales pueden calificar para una exención de los exámenes de inglés o civismo."]}],cta:"Convertirse en ciudadano de los EE.UU. significa convertirse en parte de una nación con una rica historia. La Oficina Legal de Todd Becraft está lista para ayudarle a navegar cada paso del camino. Llámenos hoy: (213) 388-1821."}];function Hf(r){return Uu.find(l=>l.slug===r)}function _f(){const r=$e();return i.jsxs("div",{children:[i.jsx(Ae,{title:"Recursos de Inmigración | Abogados de Inmigración Los Ángeles",description:"Guías gratuitas de inmigración en español de la Oficina Legal de Todd Becraft. Deportación, ciudadanía, tarjeta verde y más.",canonical:"/es/recursos",schema:{"@context":"https://schema.org","@type":"LegalService",name:"Law Office of Todd Becraft",url:"https://becraftimmigrationlaw.com"}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Recursos ",i.jsx("span",{className:"text-[#D4A853]",children:"Gratuitos"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Guías completas sobre el proceso de inmigración, escritas por el Abogado Todd Becraft para ayudarle a entender sus derechos y opciones."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-5xl mx-auto",children:i.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Uu.map(l=>i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 card-hover flex flex-col",children:[i.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[i.jsx("div",{className:"w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:i.jsx("svg",{className:"w-6 h-6 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),i.jsx("div",{className:"gold-line flex-1"})]}),i.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3",children:l.title}),i.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-6 flex-1",children:l.metaDescription}),i.jsxs($,{to:`/es/recursos/${l.slug}`,className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:["Leer la Guía",i.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]},l.slug))})})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿Tiene Preguntas Específicas sobre su Caso?"}),i.jsx("p",{className:"text-gray-300 mb-8",children:"Nuestros abogados están disponibles para una consulta. Hablamos español."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),i.jsx("button",{onClick:()=>r("/es/contactenos"),className:"btn-outline",children:"Contáctenos en Línea"})]})]})})]})}function Vf(){const{slug:r}=Zi(),l=$e(),c=r?Hf(r):void 0;return q.useEffect(()=>{c&&Cu({resource_name:c.title,resource_slug:c.slug,language:"es"})},[c==null?void 0:c.slug]),c?i.jsxs("div",{children:[i.jsx(Ae,{title:`${c.title} | Abogados de Inmigración Los Ángeles`,description:c.metaDescription,canonical:`/es/recursos/${c.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:c.title,author:{"@type":"Person",name:"Todd Becraft"}}}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsxs("nav",{className:"mb-4 text-sm text-gray-400 flex items-center gap-2",children:[i.jsx($,{to:"/es/recursos",className:"hover:text-[#D4A853] transition-colors",children:"Recursos"}),i.jsx("span",{children:"/"}),i.jsx("span",{className:"text-gray-300",children:c.title})]}),i.jsx("div",{className:"gold-line mb-6"}),i.jsx("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-4",children:c.title}),i.jsx("p",{className:"text-xl text-[#D4A853] font-medium mb-6",children:c.subtitle}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:c.intro})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("div",{className:"space-y-10",children:c.sections.map((u,p)=>{var m;return i.jsxs("div",{children:[u.heading&&i.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-4",children:u.heading}),(m=u.paragraphs)==null?void 0:m.map((f,x)=>i.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:f},x)),u.bullets&&u.bullets.length>0&&i.jsx("ul",{className:"space-y-2 mb-4",children:u.bullets.map((f,x)=>i.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[i.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0"}),i.jsx("span",{children:f})]},x))}),u.numbered&&u.numbered.length>0&&i.jsx("ol",{className:"space-y-2 mb-4",children:u.numbered.map((f,x)=>i.jsxs("li",{className:"flex items-start gap-3 text-gray-600",children:[i.jsx("span",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center",children:x+1}),i.jsx("span",{children:f})]},x))})]},p)})}),i.jsx("div",{className:"gold-line my-10"}),i.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8 text-center",children:[i.jsx("h2",{className:"text-2xl font-serif text-white font-bold mb-3",children:"¿Tiene Preguntas sobre su Caso?"}),i.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:c.cta}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),i.jsx("button",{onClick:()=>l("/es/contactenos"),className:"btn-outline",children:"Envíenos un Mensaje"})]})]})]})}),i.jsx("section",{className:"py-8 bg-warm-white border-t border-gray-100",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4",children:i.jsxs($,{to:"/es/recursos",className:"inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group",children:[i.jsx("svg",{className:"w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),"Volver a Recursos"]})})})]}):i.jsxs("div",{className:"section-padding text-center",children:[i.jsx("h1",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"Página No Encontrada"}),i.jsx("p",{className:"text-gray-500 mb-8",children:"Ese recurso no existe."}),i.jsx($,{to:"/es/recursos",className:"btn-gold",children:"Volver a Recursos"})]})}const Yf=[{category:"Asilo y Convención Contra la Tortura",title:"Asilo y Protección Bajo la Convención Contra la Tortura",description:"Representamos a clientes que huyen de persecución por actividades políticas, creencias religiosas o membresía en grupos sociales específicos — incluyendo casos que otros abogados han rechazado.",outcome:"A través de evidencia exhaustiva de condiciones del país, testimonios de expertos y declaraciones personales convincentes, hemos obtenido asilo exitosamente para clientes que enfrentaban deportación, brindándoles protección permanente en los Estados Unidos.",tag:"Asilo Concedido"},{category:"Cancelación de Remoción",title:"Cancelación de Remoción para No Residentes Permanentes",description:"Defendemos a residentes de largo plazo que enfrentan deportación y tienen familiares ciudadanos o residentes permanentes en EE. UU., demostrando el sufrimiento excepcional y extremadamente inusual que causaría su remoción.",outcome:"Con evidencia médica, expedientes escolares, testimonios de expertos y documentación financiera, hemos persuadido a jueces de inmigración para cancelar la remoción y otorgar residencia permanente legal a nuestros clientes.",tag:"Remoción Cancelada"},{category:"Visa O-1 de Habilidad Extraordinaria",title:"Visa O-1 de Habilidad Extraordinaria",description:"Preparamos peticiones O-1 para profesionales con habilidades o logros extraordinarios, reuniendo la evidencia necesaria para demostrar reconocimiento nacional o internacional sostenido.",outcome:"Nuestros paquetes de petición incluyen cartas de recomendación de expertos, evidencia de premios y publicaciones, cobertura mediática y documentación de contribuciones significativas al campo.",tag:"O-1 Aprobada"},{category:"Visa P-3 para Artistas",title:"Visa P-3 para Artistas o Entretenedores Culturalmente Únicos",description:"Representamos a artistas y entretenedores que realizan formas de arte tradicionales o culturalmente únicas, preparando peticiones P-3 que establecen el mérito cultural de su trabajo.",outcome:"Nuestras peticiones documentan la singularidad cultural de la forma artística, las credenciales del artista y su reconocimiento internacional, y el valor cultural de las actuaciones planeadas en EE. UU.",tag:"P-3 Aprobada"},{category:"Visa U para Víctimas de Crimen",title:"Visa U para Víctimas de Crimen",description:"Ayudamos a víctimas de crímenes calificados que han cooperado con las autoridades a obtener protección mediante la Visa U, incluso cuando enfrentan la posibilidad de deportación.",outcome:"Trabajamos con las autoridades para obtener la certificación requerida, preparamos declaraciones completas y presentamos evidencia del impacto físico y psicológico para asegurar estatus legal, autorización de trabajo y un camino hacia la residencia permanente.",tag:"Visa U Aprobada"}],Gf=[{quote:"El Abogado Todd Becraft es un caballero único en su clase. Desde que manejó mis problemas de inmigración, todo ha ido en la dirección correcta. Se puede sentir que te trata como un miembro de la familia.",author:"Rolando G.",service:"vía Yelp"},{quote:"La recepción fue fantástica y muy profesional. Me mostró mucho cuidado al preguntar cómo está mi familia. Lo veo como un experto por la manera en que hace y responde preguntas.",author:"John",service:"vía Avvo"},{quote:"El Abogado Todd Becraft es un abogado de inmigración excepcional y conocedor. Manejó mi caso con tal clase y dignidad — gané mi caso. Excelente personal, excelente servicio al cliente.",author:"Joseph M.",service:"vía Yelp"},{quote:"Siempre recordaré los servicios legales profesionales que recibí. Todo el personal es atento y siempre trabaja según las instrucciones de su cliente. Los servicios que recibí fueron mucho más de lo que me cobraron.",author:"Tiwa Bob",service:"vía Google"}];function $f(){const r=$e();return i.jsxs("div",{children:[i.jsx(Ae,{title:"Historias de Éxito | Abogados de Inmigración Los Ángeles",description:"Historias reales de éxito de clientes del Law Office of Todd Becraft — asilo concedido, tarjetas verdes, ciudadanía y casos de deportación ganados.",canonical:"/es/historias-de-exito",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Historias de Éxito | Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/success-stories"},{lang:"es",path:"/es/historias-de-exito"},{lang:"x-default",path:"/success-stories"}]}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Historias de ",i.jsx("span",{className:"text-[#D4A853]",children:"Éxito"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Cada caso que tomamos representa el futuro de una familia. Aquí presentamos algunos de los resultados que hemos logrado para nuestros clientes. Si bien cada caso es diferente, estas historias reflejan nuestro compromiso de luchar por el mejor resultado posible."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-5xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Resultados Representativos"}),i.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto text-sm",children:"Los siguientes son representativos de los tipos de casos que manejamos y los resultados que hemos logrado. Los resultados pasados no garantizan resultados futuros, ya que cada caso depende de sus circunstancias únicas."})]}),i.jsx("div",{className:"space-y-8",children:Yf.map((l,c)=>i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 overflow-hidden card-hover",children:[i.jsxs("div",{className:"p-6 md:p-8",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[i.jsx("span",{className:"text-xs font-semibold tracking-wider uppercase text-[#D4A853]",children:l.category}),i.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200",children:[i.jsx("svg",{className:"w-3.5 h-3.5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),l.tag]})]}),i.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-4",children:l.title}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"El Desafío"}),i.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.description})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2",children:"El Resultado"}),i.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:l.outcome})]})]})]}),i.jsx("div",{className:"h-0.5 bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853]/30 to-[#D4A853]/0"})]},c))})]})}),i.jsx("section",{className:"section-padding bg-[#1B2A4A]",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-4",children:"Testimonios de Clientes"}),i.jsx("p",{className:"text-gray-400 max-w-xl mx-auto text-sm",children:"Escuche a las familias que hemos ayudado."})]}),i.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Gf.map((l,c)=>i.jsxs("div",{className:"border border-white/10 rounded-sm p-8 hover:border-[#D4A853]/30 transition-colors",children:[i.jsx("svg",{className:"w-8 h-8 text-[#D4A853]/30 mb-4",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"})}),i.jsxs("blockquote",{className:"text-gray-200 leading-relaxed mb-6 italic font-serif",children:['"',l.quote,'"']}),i.jsx("div",{className:"gold-line mb-3"}),i.jsx("p",{className:"text-[#D4A853] font-semibold text-sm",children:l.author}),i.jsx("p",{className:"text-gray-500 text-xs mt-0.5",children:l.service})]},c))}),i.jsx("p",{className:"text-center text-gray-500 text-xs mt-10",children:"* Los testimonios son representativos de las experiencias de los clientes. Los resultados pasados no garantizan resultados futuros."})]})}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Permítanos Luchar por Su Futuro"}),i.jsx("p",{className:"text-gray-600 mb-8 max-w-xl mx-auto",children:"Todo caso exitoso comienza con una conversación. Contáctenos hoy para una consulta sobre su situación migratoria."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),i.jsx("button",{onClick:()=>r("/es/contactenos"),className:"btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white",children:"Programar una Consulta"})]})]})})]})}const ti=[{name:"Todd Becraft",title:"Abogado Fundador",photo:"https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp",highlight:"Más de 20 Años en Derecho Migratorio",bio:["Todd Becraft es el abogado fundador de la Law Office of Todd Becraft, donde ha dedicado su carrera exclusivamente al derecho migratorio durante más de 20 años. Es el actual Vicepresidente del Capítulo SoCal de AILA y ex Presidente de la Sección de Inmigración del Colegio de Abogados del Condado de Los Ángeles.",'En 2009, Todd asumió la práctica migratoria del Juez de Inmigración Timothy Everett tras el retiro de éste a la práctica privada. Antes de eso, el Sr. Becraft trabajó estrechamente con Judy Wood, conocida como "Saint Judy", cuya notable labor de defensa fue retratada en la película del mismo nombre.',"El Sr. Becraft ha representado con éxito a miles de clientes en casos de asilo, defensa contra deportación, cancelación de remoción, inmigración familiar y apelaciones ante la Junta de Apelaciones de Inmigración y el Tribunal de Apelaciones del Noveno Circuito."]},{name:"Dennis Escobar",title:"Paralegal Principal y Gerente de Oficina",photo:"https://images.makeitglow.co/projects/becraft-immigration/8f93bc42d26b873e-dennis-escobar-portrait-becraft-immigration-law-980x1337.webp",highlight:"Más de 25 Años en Derecho Migratorio",bio:["Durante más de 25 años, Dennis Escobar ha dedicado su carrera al derecho migratorio. Como Paralegal Principal y Gerente de Oficina, Dennis administra las operaciones diarias de la oficina mientras trabaja estrechamente con abogados y clientes en prácticamente todas las etapas de un caso.","Como inmigrante él mismo, Dennis conoce de primera mano los desafíos que enfrentan las familias. Es admirado por su paciencia, dedicación y compasión, siempre tomándose el tiempo para escuchar y atender las preocupaciones de los clientes con cuidado."]},{name:"Gianina Haro",title:"Paralegal",highlight:"Más de 30 Años en Derecho Migratorio",photo:"https://images.makeitglow.co/projects/becraft-immigration/4baa423944dd3952-gianina-haro-portrait-becraft-immigration-law-980x1337.webp",bio:["Con más de treinta años de experiencia en derecho migratorio, Gianina Haro es un pilar fundamental de apoyo al cliente en la Law Office of Todd Becraft. Se especializa en preparar trámites, recopilar evidencia y gestionar los detalles que mantienen los casos en movimiento.","Bilingüe en inglés y español, Gianina tiende puentes de comunicación, ayudando a los clientes a sentirse cómodos y comprendidos. Trabaja en una amplia gama de asuntos migratorios, incluyendo solicitudes de asilo, peticiones familiares, exenciones y naturalización."]},{name:"Imani Machado",title:"Directora de Marketing y Especialista en Clientes",photo:"https://images.makeitglow.co/projects/becraft-immigration/c309104b568a8ee4-imani-machado-portrait-becraft-immigration-law-980x1337.webp",bio:["Imani Machado aporta creatividad, estrategia y compasión a su rol como Directora de Marketing y Especialista en Clientes. Con más de una década de experiencia en marketing legal y relaciones con clientes, asegura que la misión de defensa del despacho se extienda más allá de la sala de audiencias.","Imani gestiona los esfuerzos de alcance comunitario, desarrolla recursos educativos y trabaja directamente con los clientes para brindarles apoyo y orientación a lo largo de su proceso migratorio. Su dedicación se extiende a la comunidad en general, donde colabora con organizaciones que sirven a familias inmigrantes en todo el sur de California."]}],Qf=[{title:"Más de 20 Años de Experiencia",desc:"Dos décadas de práctica dedicada al derecho migratorio significa que hemos visto y manejado exitosamente prácticamente todo tipo de caso.",icon:"clock"},{title:"Exclusivamente Derecho Migratorio",desc:"No incursionamos en otras áreas. La inmigración es nuestro único enfoque, lo que nos otorga un conocimiento sin igual en la materia.",icon:"focus"},{title:"Atención Personalizada",desc:"Cada caso es manejado personalmente por nuestros abogados. Usted trabaja directamente con abogados con experiencia, no con personal junior.",icon:"person"},{title:"Servicios Bilingües",desc:"Nuestro equipo es completamente bilingüe en inglés y español. Nada se pierde en la traducción cuando su futuro está en juego.",icon:"language"},{title:"Trayectoria Comprobada",desc:"Miles de casos exitosos, incluyendo complejas solicitudes de asilo y defensas contra deportación que otras firmas rechazaron.",icon:"check"},{title:"Defensa con Compasión",desc:"Entendemos el impacto emocional de los procedimientos migratorios. Nuestro equipo ofrece empatía genuina y apoyo en cada paso del camino.",icon:"heart"}];function Jf({type:r}){const l="w-6 h-6";switch(r){case"clock":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})});case"focus":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"})});case"person":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})});case"language":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})});case"check":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})});case"heart":return i.jsx("svg",{className:l,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})});default:return null}}function Kf(){const r=$e();return i.jsxs("div",{children:[i.jsx(Ae,{title:"Sobre Nosotros | Abogados de Inmigración Los Ángeles",description:"Conozca al Abogado Todd Becraft — décadas de experiencia en derecho migratorio en Los Ángeles ayudando a familias, beneficiarios de DACA, solicitantes de asilo y más.",canonical:"/es/sobre-nosotros",schema:{"@context":"https://schema.org","@type":"AboutPage",name:"Sobre Nosotros — Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/about"},{lang:"es",path:"/es/sobre-nosotros"},{lang:"x-default",path:"/about"}]}),i.jsxs("section",{className:"relative overflow-hidden",children:[i.jsxs("div",{className:"absolute inset-0",children:[i.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/d4f20bfcce771e9e-unnamed-10-scaled.webp",alt:"El equipo de Becraft Immigration Law",className:"hidden md:block w-full h-full object-cover"}),i.jsx("img",{src:"https://images.makeitglow.co/projects/becraft-immigration/team-9x16.jpg",alt:"El equipo de Becraft Immigration Law",className:"block md:hidden w-full h-full object-cover"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/80 to-[#1B2A4A]/40"})]}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36",children:i.jsxs("div",{className:"max-w-xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6 leading-tight",children:["Las Personas Detrás de ",i.jsx("span",{className:"text-[#D4A853]",children:"Su Caso"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed mb-8",children:"Un equipo que ha dedicado sus carreras — más de 50 años combinados — exclusivamente al derecho migratorio. No solo manejamos casos. Cambiamos vidas."}),i.jsx("button",{onClick:()=>r("/es/contactenos"),className:"btn-gold",children:"Reúnase con Nosotros Hoy"})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"py-20 md:py-28 bg-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid lg:grid-cols-5 gap-16 items-start",children:[i.jsx("div",{className:"lg:col-span-2",children:i.jsxs("div",{className:"sticky top-28",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4 leading-tight",children:"Dos Décadas Luchando por lo Justo"}),i.jsxs("div",{className:"flex items-center gap-4 mt-8",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"20+"}),i.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Años"})]}),i.jsx("div",{className:"w-px h-12 bg-gray-200"}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"Miles"}),i.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Casos Ganados"})]}),i.jsx("div",{className:"w-px h-12 bg-gray-200"}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-3xl font-serif font-bold text-[#D4A853]",children:"100%"}),i.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Inmigración"})]})]})]})}),i.jsxs("div",{className:"lg:col-span-3 space-y-6",children:[i.jsx("p",{className:"text-gray-600 leading-relaxed text-lg",children:"La Law Office of Todd Becraft fue fundada con una misión clara: brindar representación legal excepcional a inmigrantes y sus familias. A lo largo de las últimas dos décadas, esa misión nunca ha vacilado."}),i.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Desde nuestras oficinas en Wilshire Boulevard, en el corazón de Los Ángeles, hemos ayudado a miles de personas a navegar el complejo sistema migratorio de los Estados Unidos. Ya sea que nuestros clientes busquen asilo por persecución, luchen contra la deportación, se reúnan con familiares o persigan el sueño de la ciudadanía estadounidense, aportamos el mismo nivel de dedicación, experiencia y atención personal a cada caso."}),i.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Lo que nos distingue es nuestro enfoque exclusivo en derecho migratorio. Mientras muchos despachos distribuyen su atención entre múltiples áreas de práctica, nosotros hemos elegido dedicar toda nuestra práctica a la inmigración. Este enfoque singular significa que nos mantenemos a la vanguardia de la ley y política migratoria en constante cambio, brindando a nuestros clientes una ventaja crítica."}),i.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Los miembros de nuestro equipo provienen de diversos orígenes, y varios son inmigrantes ellos mismos. Entendemos los desafíos que enfrentan nuestros clientes — no solo legalmente, sino personalmente. Esa experiencia vivida da forma a nuestra empatía, nuestra urgencia y nuestro compromiso inquebrantable con cada persona que cruza nuestras puertas."})]})]})})}),i.jsx("section",{className:"bg-[#1B2A4A] overflow-hidden",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"grid lg:grid-cols-2",children:[i.jsxs("div",{className:"relative h-[500px] lg:h-auto",children:[i.jsx("img",{src:ti[0].photo,alt:ti[0].name,className:"absolute inset-0 w-full h-full object-cover object-top"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B2A4A]/30"})]}),i.jsxs("div",{className:"px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center",children:[i.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase mb-3",children:ti[0].title}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white font-bold mb-2",children:ti[0].name}),ti[0].highlight&&i.jsxs("p",{className:"text-[#D4A853]/70 text-sm mb-8 flex items-center gap-2",children:[i.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),ti[0].highlight]}),i.jsx("div",{className:"w-12 h-px bg-[#D4A853]/40 mb-8"}),i.jsx("div",{className:"space-y-4",children:ti[0].bio.map((l,c)=>i.jsx("p",{className:"text-gray-300 leading-relaxed text-[15px]",children:l},c))}),i.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[i.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Vicepresidente AILA SoCal"}),i.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Three Best Rated"}),i.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"AVVO 10.0"}),i.jsx("span",{className:"text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full",children:"Premio Pro Bono"})]})]})]})})}),i.jsx("section",{className:"py-20 md:py-28 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"Nuestro Equipo"}),i.jsx("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"Cada miembro de nuestro equipo comparte el mismo compromiso: luchar por el futuro de nuestros clientes."})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:ti.slice(1).map(l=>i.jsxs("div",{className:"group",children:[i.jsxs("div",{className:"relative overflow-hidden rounded-sm mb-6",children:[i.jsx("img",{src:l.photo,alt:l.name,className:"w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"}),i.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[i.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.15em] uppercase mb-1",children:l.title}),i.jsx("h3",{className:"text-xl font-serif text-white font-bold",children:l.name}),l.highlight&&i.jsx("p",{className:"text-white/50 text-xs mt-1",children:l.highlight})]})]}),i.jsx("div",{className:"space-y-3",children:l.bio.map((c,u)=>i.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:c},u))})]},l.name))})]})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"text-center mb-10",children:i.jsx("p",{className:"text-[#D4A853] text-xs tracking-[0.2em] uppercase",children:"Reconocimientos"})}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{name:"Three Best Rated",detail:"Mejores Abogados de Inmigración en Los Ángeles"},{name:"10 Best",detail:"Instituto Americano de Consejo Legal"},{name:"AVVO 10.0",detail:"Calificación Superior — Abogado Destacado"},{name:"Expertise",detail:"21 Mejores Abogados de Inmigración en LA"}].map(l=>i.jsxs("div",{className:"text-center py-6 border border-white/5 rounded-sm hover:border-[#D4A853]/20 transition-colors",children:[i.jsx("svg",{className:"w-6 h-6 text-[#D4A853] mx-auto mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),i.jsx("h3",{className:"text-white font-serif font-bold text-sm",children:l.name}),i.jsx("p",{className:"text-gray-500 text-xs mt-1",children:l.detail})]},l.name))})]})}),i.jsx("section",{className:"py-20 md:py-28 bg-white",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"text-center mb-16",children:[i.jsx("div",{className:"gold-line-center mb-6"}),i.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4",children:"¿Por Qué Elegirnos?"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Qf.map(l=>i.jsxs("div",{className:"flex gap-5",children:[i.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]",children:i.jsx(Jf,{type:l.icon})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] mb-2",children:l.title}),i.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:l.desc})]})]},l.title))})]})}),i.jsx("section",{className:"bg-[#1B2A4A] py-16",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-white font-bold mb-4",children:"¿Listo para Hablar Sobre Su Caso?"}),i.jsx("p",{className:"text-gray-300 mb-8",children:"Contáctenos hoy para una consulta confidencial con un abogado de inmigración con experiencia."}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("a",{href:"tel:2133881821",className:"btn-gold",children:"Llame al (213) 388-1821"}),i.jsx("button",{onClick:()=>r("/es/contactenos"),className:"btn-outline",children:"Envíenos un Mensaje"})]})]})})]})}function Xf(){const[r,l]=q.useState({name:"",email:"",phone:"",service:"",message:""}),[c,u]=q.useState(!1),[p,m]=q.useState(!1),[f,x]=q.useState(""),v=C=>{l({...r,[C.target.name]:C.target.value})},b=async C=>{C.preventDefault(),u(!0),x("");try{(await fetch("https://formspree.io/f/xkokkjdk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(m(!0),Su({language:"es",service:r.service}),l({name:"",email:"",phone:"",service:"",message:""})):x("Hubo un error al enviar su mensaje. Por favor intente de nuevo o llámenos directamente.")}catch{x("Hubo un error al enviar su mensaje. Por favor intente de nuevo o llámenos directamente.")}finally{u(!1)}};return i.jsxs("div",{children:[i.jsx(Ae,{title:"Contáctenos | Abogados de Inmigración Los Ángeles",description:"Contáctenos para una consulta de inmigración. Llame al (213) 388-1821 o llene nuestro formulario en línea. Se habla español.",canonical:"/es/contactenos",schema:{"@context":"https://schema.org","@type":"ContactPage",name:"Contáctenos — Law Office of Todd Becraft"},hreflang:[{lang:"en",path:"/contact"},{lang:"es",path:"/es/contactenos"},{lang:"x-default",path:"/contact"}]}),i.jsxs("section",{className:"bg-[#1B2A4A] relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]"}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("h1",{className:"text-4xl md:text-5xl font-serif text-white font-bold mb-6",children:["Contáctenos ",i.jsx("span",{className:"text-[#D4A853]",children:"Hoy"})]}),i.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"¿Listo para dar el siguiente paso? Comuníquese para una consulta confidencial con un abogado de inmigración con experiencia."})]})}),i.jsx("div",{className:"h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]"})]}),i.jsx("section",{className:"section-padding bg-warm-white",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"grid lg:grid-cols-5 gap-12 lg:gap-16",children:[i.jsx("div",{className:"lg:col-span-3",children:i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8 md:p-10",children:[i.jsx("h2",{className:"text-2xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Envíenos un Mensaje"}),i.jsx("p",{className:"text-gray-500 text-sm mb-8",children:"Complete el formulario y nos pondremos en contacto con usted a la brevedad. Todas las consultas son confidenciales."}),p?i.jsxs("div",{className:"text-center py-12",children:[i.jsx("div",{className:"w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4",children:i.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),i.jsx("h3",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-2",children:"Mensaje Enviado con Éxito"}),i.jsx("p",{className:"text-gray-500 mb-6",children:"Gracias por contactarnos. Revisaremos su mensaje y responderemos a la brevedad posible."}),i.jsx("button",{onClick:()=>m(!1),className:"text-[#D4A853] font-semibold text-sm hover:text-[#C49A48] transition-colors",children:"Enviar Otro Mensaje"})]}):i.jsxs("form",{onSubmit:b,className:"space-y-6",children:[i.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Nombre Completo *"}),i.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:r.name,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"Su nombre completo"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Correo Electrónico *"}),i.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:r.email,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"su@correo.com"})]})]}),i.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Número de Teléfono"}),i.jsx("input",{type:"tel",id:"phone",name:"phone",value:r.phone,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors",placeholder:"(555) 123-4567"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700 mb-2",children:"Servicio Requerido"}),i.jsxs("select",{id:"service",name:"service",value:r.service,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 bg-white transition-colors appearance-none",style:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:"right 0.75rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.25em 1.25em"},children:[i.jsx("option",{value:"",children:"Seleccione un servicio..."}),i.jsx("option",{value:"asilo",children:"Asilo"}),i.jsx("option",{value:"cancelacion",children:"Cancelación de Remoción"}),i.jsx("option",{value:"ciudadania",children:"Ciudadanía y Naturalización"}),i.jsx("option",{value:"daca",children:"DACA"}),i.jsx("option",{value:"deportacion",children:"Defensa contra Deportación"}),i.jsx("option",{value:"tarjeta-verde",children:"Tarjeta Verde / Ajuste de Estatus"}),i.jsx("option",{value:"exencion",children:"Exención Provisional I-601A"}),i.jsx("option",{value:"visa-k1",children:"Visa K-1 de Prometido(a)"}),i.jsx("option",{value:"tps",children:"Estado de Protección Temporal (TPS)"}),i.jsx("option",{value:"visa-u",children:"Visa U"}),i.jsx("option",{value:"familia",children:"Inmigración Familiar"}),i.jsx("option",{value:"otro",children:"Otro"})]})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Cuéntenos Sobre Su Caso *"}),i.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:r.message,onChange:v,className:"w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none",placeholder:"Describa brevemente su situación migratoria..."})]}),f&&i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-sm p-4",children:i.jsx("p",{className:"text-red-700 text-sm",children:f})}),i.jsx("button",{type:"submit",disabled:c,className:"btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",children:c?i.jsxs("span",{className:"flex items-center",children:[i.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[i.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),i.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Enviando..."]}):"Enviar Mensaje"}),i.jsx("p",{className:"text-xs text-gray-400",children:"Al enviar este formulario, acepta que podamos contactarle respecto a su consulta. El envío de este formulario no crea una relación abogado-cliente."})]})]})}),i.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[i.jsxs("div",{className:"bg-[#1B2A4A] rounded-sm p-8",children:[i.jsx("h3",{className:"text-white font-serif font-bold text-lg mb-6",children:"Llámenos Hoy"}),i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("a",{href:"tel:2133881821",onClick:()=>ri({phone_number:"2133881821",location:"contact_page",language:"es"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[i.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Local"}),i.jsx("p",{className:"text-lg font-semibold",children:"(213) 388-1821"})]})]}),i.jsxs("a",{href:"tel:8552016898",onClick:()=>ri({phone_number:"8552016898",location:"contact_page",language:"es"}),className:"flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group",children:[i.jsx("div",{className:"w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors",children:i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider",children:"Línea Gratuita"}),i.jsx("p",{className:"text-lg font-semibold",children:"(855) 201-6898"})]})]})]}),i.jsx("div",{className:"mt-6 bg-[#D4A853] text-[#1B2A4A] px-4 py-2 rounded-full text-sm font-bold tracking-wide text-center",children:"Se Habla Español"})]}),i.jsxs("div",{className:"bg-white rounded-sm border border-gray-100 p-8",children:[i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-6",children:"Información de la Oficina"}),i.jsx("div",{className:"gold-line mb-6"}),i.jsxs("div",{className:"space-y-5",children:[i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:i.jsxs("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:[i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Ubicación"}),i.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["3450 Wilshire Blvd. Suite 1015",i.jsx("br",{}),"Los Angeles, CA 90010"]})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Horario de Atención"}),i.jsxs("div",{className:"text-gray-500 text-sm mt-1 space-y-1",children:[i.jsx("p",{children:"Lunes – Viernes: 9:00 AM – 6:00 PM"}),i.jsx("p",{children:"Sábado: Con Cita Previa"}),i.jsx("p",{children:"Domingo: Cerrado"})]})]})]}),i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0",children:i.jsx("svg",{className:"w-5 h-5 text-[#D4A853]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-[#1B2A4A] text-sm",children:"Idiomas"}),i.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Inglés y Español"})]})]})]})]}),i.jsxs("div",{className:"bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-sm p-8 text-center",children:[i.jsx("svg",{className:"w-10 h-10 mx-auto text-[#D4A853] mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})}),i.jsx("h3",{className:"font-serif font-bold text-[#1B2A4A] text-lg mb-2",children:"Consulta"}),i.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"Ofrecemos consultas iniciales para evaluar su caso de inmigración. Sin ningún compromiso y toda comunicación es estrictamente confidencial."}),i.jsx("a",{href:"tel:2133881821",className:"btn-gold text-xs px-6",children:"Llame Ahora"})]}),i.jsx("div",{className:"bg-[#1B2A4A] rounded-sm overflow-hidden",children:i.jsxs("div",{className:"aspect-[4/3] flex items-center justify-center relative",children:[i.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(212,168,83,0.5) 1px, transparent 0)",backgroundSize:"20px 20px"}}),i.jsxs("div",{className:"text-center relative z-10",children:[i.jsxs("svg",{className:"w-12 h-12 mx-auto text-[#D4A853]/40 mb-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:[i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),i.jsx("p",{className:"text-gray-300 font-serif font-bold",children:"Los Ángeles, California"}),i.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Atendemos clientes en todo el sur de California"})]})]})})]})]})})})]})}const Iu=[{slug:"que-hacer-si-recibe-notificacion-para-comparecer-nta-guia-tribunal-inmigracion",title:"Qué hacer si recibe una notificación para comparecer ante el tribunal (NTA): una guía completa sobre los procedimientos judiciales de inmigración y deportación",excerpt:"Recibir una Notificación para Comparecer (NTA) puede ser uno de los momentos más estresantes en la vida de un inmigrante, pero no significa automáticamente que será deportado. Esta guía explica qué es una NTA, qué sucede después de recibirla y qué medidas debe considerar para protegerse.",date:"22 de septiembre de 2026",author:"Todd Becraft",content:`
<p>Recibir un aviso para comparecer (NTA) puede ser uno de los momentos más estresantes en la vida de un inmigrante. El documento puede contener acusaciones sobre su historial migratorio y cargos legales que expliquen por qué el gobierno de los Estados Unidos cree que usted podría ser deportado.</p>

<p>Sin embargo, recibir una Notificación para Comparecer <strong>no</strong> significa automáticamente que será deportado.</p>

<p>Una Notificación de Comparecencia (NTA) generalmente significa que el Departamento de Seguridad Nacional (DHS) busca iniciar un proceso de deportación ante un juez de inmigración. Dependiendo de su historial migratorio, relaciones familiares, temor a regresar a su país, antecedentes penales y otras circunstancias, podría tener defensas u opciones de alivio migratorio disponibles.</p>

<p>Lo más importante es tomarse en serio la NTA y actuar con rapidez.</p>

<p>En el bufete de abogados de Todd Becraft ayudamos a los inmigrantes que se enfrentan a asuntos migratorios complejos, incluidos los procedimientos de deportación, los casos de asilo, los problemas de inmigración basados en la familia y los casos que involucran antecedentes penales.</p>

<p>Esta guía explica qué significa una Notificación para Comparecer, qué sucede después de recibirla y qué medidas debe considerar tomar para protegerse.</p>

<h2>¿Qué es una Notificación para Comparecer (NTA)?</h2>

<p>La Notificación para Comparecer, comúnmente llamada NTA, es el Formulario I-862. Es el documento de acusación utilizado por el Departamento de Seguridad Nacional en los procedimientos de deportación.</p>

<p>Por lo general, la NTA contiene alegaciones fácticas sobre la persona y enumera uno o más cargos legales que explican por qué el DHS cree que esa persona puede ser expulsada de los Estados Unidos.</p>

<p>Los procedimientos de expulsión generalmente comienzan cuando el DHS presenta la Notificación de Comparecencia ante el tribunal de inmigración después de notificarla al extranjero.</p>

<p>Una NTA puede contener información relativa a:</p>

<ul>
<li>Su nombre e información de identificación</li>
<li>Su país de ciudadanía</li>
<li>Cuándo y cómo ingresó a los Estados Unidos</li>
<li>Su estatus migratorio</li>
<li>Presuntas violaciones de las leyes de inmigración</li>
<li>Condenas o conductas delictivas, cuando corresponda</li>
<li>Los fundamentos legales que alega el DHS para que usted sea deportable</li>
<li>El tribunal de inmigración involucrado en el procedimiento</li>
<li>Fecha y hora de su audiencia, si ya está programada</li>
</ul>

<p>En algunos casos, la Notificación de Comparecencia inicial puede no contener la fecha y hora de la primera audiencia. El tribunal de inmigración puede emitir posteriormente un <strong>Aviso de Audiencia</strong> por separado con información de programación.</p>

<p>Nunca asuma que no tiene una audiencia simplemente porque no aparece una fecha en la notificación original de comparecencia.</p>

<h2>¿Recibir una notificación de comparecencia significa que va a ser deportado?</h2>

<p>No. Una notificación de comparecencia no debe confundirse con una orden de expulsión definitiva.</p>

<p>Recibir una Notificación de Comparecencia (NTA) generalmente significa que el gobierno alega que usted es susceptible de ser deportado y que está iniciando el proceso legal mediante el cual un juez de inmigración considerará el caso.</p>

<p>Durante el proceso de deportación, el DHS puede presentar alegaciones y cargos. La persona involucrada en el proceso puede impugnar dichas alegaciones, oponerse a la deportación cuando corresponda legalmente, presentar pruebas y solicitar las medidas de alivio disponibles.</p>

<p>Esta distinción es sumamente importante.</p>

<p>Una NTA es esencialmente el comienzo del caso del gobierno. No es necesariamente el resultado final de su caso de inmigración.</p>

<h2>¿Qué debe hacer inmediatamente después de recibir una NTA?</h2>

<p><strong>1. No ignore la citación para comparecer.</strong></p>

<p>Ignorar una notificación de comparecencia puede tener consecuencias extremadamente graves.</p>

<p>No tire el documento solo porque crea que el gobierno cometió un error. No dé por sentado que una solicitud de inmigración pendiente resolverá automáticamente la situación. No dé por sentado que tener hijos ciudadanos estadounidenses o estar casado con un ciudadano estadounidense lo protege automáticamente de la deportación.</p>

<p>Conserve la NTA y cualquier otro documento que reciba de:</p>

<ul>
<li>Servicio de Inmigración y Control de Aduanas (ICE)</li>
<li>Departamento de Seguridad Nacional (DHS)</li>
<li>Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS)</li>
<li>Tribunal de Inmigración</li>
<li>Oficina Ejecutiva de Revisión de Inmigración (EOIR)</li>
</ul>

<p>Estos documentos pueden resultar extremadamente importantes cuando un abogado de inmigración evalúa su caso.</p>

<p><strong>2. Lea atentamente cada acusación.</strong></p>

<p>La NTA contiene alegaciones basadas en hechos sobre su situación migratoria.</p>

<p>Por ejemplo, el DHS podría alegar que:</p>

<ul>
<li>Usted no es ciudadano ni nacional de los Estados Unidos.</li>
<li>Usted es ciudadano de un país en particular.</li>
<li>Usted ingresó a los Estados Unidos en una fecha determinada.</li>
<li>Usted ingresó sin haber sido admitido ni puesto en libertad condicional.</li>
<li>Usted ingresó con una visa, pero permaneció en el país más allá del tiempo de estadía autorizado.</li>
<li>Usted cometió o fue condenado por un delito penal en particular.</li>
</ul>

<p>No dé por sentado que todas las acusaciones son ciertas.</p>

<p>Las fechas pueden ser incorrectas. El historial migratorio puede estar incompleto. Una condena penal puede estar caracterizada de una manera que requiere un análisis legal más profundo.</p>

<p>Un abogado de inmigración con experiencia puede comparar la notificación de comparecencia con sus antecedentes migratorios y penales y determinar si las alegaciones y los cargos legales del gobierno deben ser admitidos, negados o impugnados.</p>

<p><strong>3. Determine si su caso se encuentra en el tribunal de inmigración.</strong></p>

<p>Recibir una notificación de comparecencia y que dicha notificación se presente ante el tribunal de inmigración son pasos relacionados pero distintos.</p>

<p>Tras recibir una NTA, determine si su caso ha sido ingresado en el sistema judicial de inmigración.</p>

<p>Puede consultar su caso a través del sistema automatizado de información de casos de la Oficina Ejecutiva de Revisión de Inmigración utilizando su Número de Registro de Extranjero, comúnmente conocido como Número A.</p>

<p>Siga de cerca el caso, ya que la información sobre la audiencia puede cambiar.</p>

<p><strong>4. Nunca falte a una audiencia en el tribunal de inmigración.</strong></p>

<p>Esta es una de las reglas más importantes después de recibir una NTA.</p>

<p>No falte a su audiencia en el tribunal de inmigración.</p>

<p>En determinadas circunstancias, no comparecer puede resultar en que un juez de inmigración ordene su expulsión <em>en ausencia</em>, lo que significa que la orden de expulsión puede emitirse incluso cuando usted no esté presente.</p>

<p>Si se muda, también debe asegurarse de que el tribunal de inmigración tenga su dirección correcta.</p>

<p>No dé por sentado que actualizar su dirección con el USCIS actualiza automáticamente su dirección ante el tribunal de inmigración.</p>

<p>Las instrucciones actuales de la EOIR requieren que las personas con asuntos pendientes ante el tribunal de inmigración o la Junta de Apelaciones de Inmigración informen los cambios en su dirección o información de contacto dentro de cinco días laborables.</p>

<p>Faltar a una audiencia por no haber recibido una notificación tras la mudanza puede generar un problema legal complicado.</p>

<h2>¿Qué sucede en su primera audiencia ante el tribunal de inmigración?</h2>

<p>La primera comparecencia ante el tribunal de inmigración generalmente se denomina Audiencia del Calendario Maestro.</p>

<p>Considere esto como una audiencia preliminar ante el tribunal, en lugar del juicio completo de su caso de inmigración.</p>

<p>Durante una Audiencia de Calendario Maestro, el juez de inmigración puede abordar cuestiones de procedimiento, la representación legal, las alegaciones contenidas en la NTA, los cargos de deportación del gobierno y las formas de alivio migratorio que usted pueda solicitar.</p>

<p>El juez de inmigración puede pedirle que responda a las acusaciones contenidas en la Notificación de Comparecencia.</p>

<p>Este proceso a veces se denomina toma de alegatos.</p>

<p>Es posible que se le pregunte si ciertas alegaciones de hecho son verdaderas o falsas y si usted acepta o refuta la acusación del gobierno de que usted es deportable.</p>

<p>Estas respuestas pueden tener importantes consecuencias legales.</p>

<p>Por eso puede ser extremadamente importante que un abogado de inmigración revise su NTA y su historial migratorio <strong>antes</strong> de hacer admisiones en el tribunal de inmigración.</p>

<p>Si usted tiene la intención de solicitar alivio para evitar la deportación, el juez podrá establecer plazos para la presentación de solicitudes, documentos justificativos, pruebas y demás trámites.</p>

<p>Finalmente, los casos que requieren testimonio y evidencia pueden proceder a una Audiencia de Calendario Individual, a veces llamada audiencia de fondo.</p>

<h2>¿Puede impugnar una Notificación para Comparecer?</h2>

<p>Potencialmente, sí.</p>

<p>Recibir una NTA no significa que no pueda hacer nada.</p>

<p>Un abogado de inmigración generalmente necesita investigar dos cuestiones principales:</p>

<p><strong>Primero:</strong> ¿Ha determinado correctamente el DHS que usted es susceptible de ser deportado según la ley de inmigración?</p>

<p><strong>Segundo:</strong> Aunque usted sea legalmente deportable, ¿reúne los requisitos para algún tipo de alivio que le permita permanecer en los Estados Unidos?</p>

<p>Dependiendo de las circunstancias, las posibles defensas o formas de alivio pueden incluir:</p>

<ul>
<li>Asilo</li>
<li>Retención de la expulsión</li>
<li>Protección en virtud de la Convención contra la Tortura</li>
<li>Ajuste de estatus</li>
<li>Cancelación de la expulsión</li>
<li>Ciertas exenciones de inmigración</li>
<li>Impugnaciones a las acusaciones del DHS</li>
<li>Otras protecciones humanitarias o legales para los inmigrantes</li>
</ul>

<p>La defensa apropiada depende enteramente de las circunstancias de cada caso particular.</p>

<p>Dos inmigrantes pueden parecer tener situaciones muy similares, pero tener opciones legales completamente diferentes debido a diferencias en su historial migratorio, forma de entrada, relaciones familiares, antecedentes penales, solicitudes anteriores o procedimientos migratorios previos.</p>

<h2>Casos de NTA y asilo</h2>

<p>Una Notificación para Comparecer es especialmente importante para los inmigrantes que temen regresar a sus países de origen.</p>

<p>Una persona elegible que ya se encuentra en un proceso de expulsión puede solicitar asilo defensivo ante un juez de inmigración.</p>

<p>Esto difiere del asilo afirmativo.</p>

<p>El asilo afirmativo generalmente se inicia ante el USCIS para una persona que no se encuentra actualmente en proceso de deportación. El asilo defensivo se solicita ante un juez de inmigración como defensa contra la deportación.</p>

<p>Por lo general, un solicitante de asilo debe demostrar que cumple con los requisitos legales para obtener asilo, incluyendo haber sufrido persecución en el pasado o tener un temor fundado de sufrir persecución en el futuro relacionado con un motivo legalmente protegido.</p>

<p>Dependiendo de las circunstancias, un abogado también puede evaluar la elegibilidad para:</p>

<ul>
<li>Retención de la expulsión</li>
<li>Protección en virtud de la Convención contra la Tortura (CAT)</li>
</ul>

<p>Estas formas de protección tienen diferentes estándares y consecuencias legales.</p>

<h2>Caso práctico hipotético: un solicitante de asilo recibe una NTA</h2>

<p>Consideremos un inmigrante hipotético llamado Daniel.</p>

<p>Daniel huyó de su país natal tras recibir repetidas amenazas debido a sus actividades políticas.</p>

<p>Tras llegar a Estados Unidos, Daniel se ve inmerso en un proceso de deportación y recibe una Notificación para Comparecer.</p>

<p>Daniel entra en pánico.</p>

<p>Él supone: «Recibí los papeles de deportación. Eso significa que me van a enviar de vuelta.»</p>

<p>Eso no es necesariamente lo que significa la NTA.</p>

<p>El abogado de inmigración de Daniel revisa su notificación de comparecencia, su forma de entrada al país, el momento en que presentó su solicitud de asilo, su historial migratorio y las circunstancias que rodearon las amenazas que sufrió.</p>

<p>El abogado comienza entonces a reunir pruebas que podrían respaldar la solicitud de protección de Daniel.</p>

<p>Esa evidencia podría incluir:</p>

<ul>
<li>Mensajes amenazantes</li>
<li>Informes policiales</li>
<li>Historiales médicos</li>
<li>Declaraciones de testigos</li>
<li>Registros de afiliación política</li>
<li>Fotografías</li>
<li>Evidencia en redes sociales</li>
<li>Informes de noticias</li>
<li>Informes sobre derechos humanos</li>
<li>Evidencia sobre las condiciones del país</li>
<li>Testimonio de expertos, cuando proceda</li>
</ul>

<p>Entonces, Daniel podría tener la oportunidad de presentar su caso ante un juez de inmigración.</p>

<p>La lección importante es que recibir una NTA no determina automáticamente si una persona reúne los requisitos para obtener asilo. Inicia o está relacionada con un proceso legal en el que se puede decidir la elegibilidad para la protección.</p>

<h2>¿Qué sucede cuando alguien se queda más tiempo del permitido por su visa y recibe una NTA?</h2>

<p>La permanencia tras expirar el visado es otra razón común por la que las personas pueden verse envueltas en un proceso de deportación.</p>

<p>Imagine que alguien entró legalmente a Estados Unidos con una visa de visitante.</p>

<p>Dicha persona estaba autorizada a permanecer por un período limitado, pero se quedó después de que expirara ese período autorizado.</p>

<p>Años después, la persona recibe una notificación de comparecencia alegando que es deportable porque permaneció en los Estados Unidos más allá del período permitido.</p>

<p>Muchas personas piensan inmediatamente: «Me quedé más tiempo del permitido por mi visa, así que un abogado de inmigración no puede hacer nada.»</p>

<p>Esa conclusión puede ser prematura.</p>

<p>La permanencia puede constituir una parte importante del caso del gobierno, pero un abogado de inmigración aún necesita evaluar la situación completa de la persona.</p>

<p>Ese análisis podría incluir:</p>

<ul>
<li>Cómo ingresó el individuo a los Estados Unidos</li>
<li>La fecha de entrada</li>
<li>Estatus migratorio al ingresar</li>
<li>Tiempo de residencia en Estados Unidos</li>
<li>Matrimonio con un ciudadano estadounidense o residente permanente</li>
<li>Hijos o padres ciudadanos estadounidenses o residentes permanentes</li>
<li>Peticiones familiares aprobadas o pendientes</li>
<li>Solicitudes de inmigración anteriores</li>
<li>Historial de inmigración basado en el empleo</li>
<li>Antecedentes penales</li>
<li>Procedimientos de inmigración anteriores</li>
<li>Órdenes de expulsión previas</li>
<li>Posible ajuste de estatus</li>
<li>Exenciones potenciales</li>
<li>Elegibilidad para la cancelación de la expulsión</li>
<li>Asilo o protección humanitaria</li>
</ul>

<p>El hecho de haber permanecido en el país más allá del plazo permitido por la visa es un dato relevante en un caso de inmigración. No necesariamente resuelve todas las dudas sobre si la persona tiene una vía legal para permanecer en Estados Unidos.</p>

<h2>Caso práctico hipotético: permanencia tras expirar la visa y matrimonio con un ciudadano estadounidense</h2>

<p>Consideremos otro ejemplo hipotético.</p>

<p><strong>María</strong> entró legalmente a los Estados Unidos hace muchos años con una visa de visitante.</p>

<p>Ella permaneció en el país después de que expirara su estadía autorizada.</p>

<p>Años después, María se casó con un ciudadano estadounidense. La pareja construyó una vida juntos y comenzó a explorar el proceso de inmigración.</p>

<p>Entonces María recibe una citación para comparecer.</p>

<p>Ella supone que, por estar casada con un ciudadano estadounidense, el tribunal de inmigración no puede ordenar su deportación.</p>

<p>Esta suposición podría ser peligrosa.</p>

<p>El matrimonio con un ciudadano estadounidense puede generar importantes oportunidades de inmigración, pero no pone fin automáticamente a los procedimientos de deportación.</p>

<p>Un abogado de inmigración tendría que investigar cuestiones como las siguientes:</p>

<ul>
<li>Si María fue inspeccionada y admitida al ingresar</li>
<li>Si el matrimonio es legalmente válido y de buena fe</li>
<li>Si se ha presentado o aprobado un Formulario I-130</li>
<li>Si María tiene antecedentes de infracciones migratorias</li>
<li>Si alguna vez ha hecho una declaración falsa sobre su ciudadanía estadounidense</li>
<li>Si existen problemas de fraude o tergiversación</li>
<li>Si tiene antecedentes penales</li>
<li>Si tiene antecedentes de procedimientos de expulsión</li>
<li>Si ella reúne los requisitos para ajustar su estatus</li>
<li>Si es necesaria una exención</li>
<li>Qué organismo o tribunal tiene jurisdicción sobre las solicitudes pertinentes</li>
</ul>

<p>La lección es sencilla: el matrimonio con un ciudadano estadounidense puede ser una vía importante para obtener la residencia permanente legal, pero el matrimonio por sí solo no hace que desaparezca automáticamente una NTA.</p>

<h2>¿Qué ocurre si recibe una NTA debido a un caso penal?</h2>

<p>Los casos de inmigración que implican arrestos, cargos penales o condenas pueden ser particularmente complicados.</p>

<p>El derecho penal y el derecho migratorio interactúan de maneras que no siempre son evidentes.</p>

<p>Algo que se considera relativamente menor según la legislación penal estatal puede tener graves consecuencias migratorias.</p>

<p>Al mismo tiempo, <strong>no todo arresto o condena implica automáticamente la deportación.</strong></p>

<p>Los detalles exactos importan.</p>

<p>Un abogado de inmigración podría necesitar analizar:</p>

<ul>
<li>El estatuto penal exacto</li>
<li>Los elementos del delito</li>
<li>El documento de acusación</li>
<li>La declaración de culpabilidad</li>
<li>El historial de condenas</li>
<li>La sentencia impuesta</li>
<li>Si el delito activa un determinado fundamento migratorio</li>
<li>El estatus migratorio de la persona</li>
<li>Cuándo la persona entró en los Estados Unidos</li>
<li>Antecedentes penales previos</li>
<li>Posibles defensas o exenciones</li>
</ul>

<p>Por eso, decirle a un abogado de inmigración «solo fue un delito menor» no es suficiente.</p>

<p>El abogado debe revisar los registros judiciales penales originales siempre que sea posible.</p>

<h2>Notificaciones de comparecencia y condenas penales: por qué importa el historial exacto</h2>

<p>Cuando una NTA se basa en antecedentes penales, uno de los mayores errores que puede cometer un inmigrante es suponer que el nombre comúnmente utilizado para el delito cuenta toda la historia.</p>

<p>La ley de inmigración puede analizar las condenas penales de manera diferente a la ley penal estatal.</p>

<p>Por ejemplo, el DHS puede alegar que una condena se ajusta a un determinado motivo de deportación. La validez legal de dicha alegación puede depender del estatuto en el que se dictó la condena, los elementos del delito, los antecedentes penales, el estatus migratorio, el momento en que ocurrió y otros factores.</p>

<p>Un abogado de inmigración podría necesitar obtener y revisar documentos como los siguientes:</p>

<ul>
<li>Denuncia o información penal</li>
<li>Documentos de acusación</li>
<li>Acuerdo de culpabilidad</li>
<li>Actas judiciales</li>
<li>Sentencia</li>
<li>Registros de la condena impuesta</li>
<li>Disposición</li>
<li>Estatuto penal pertinente</li>
<li>Registros que muestran si una condena fue posteriormente modificada o anulada</li>
</ul>

<p>No se fíe únicamente de la memoria al hablar de un antiguo caso penal.</p>

<p>Un caso ocurrido hace 10 o 20 años aún puede resultar relevante cuando el Departamento de Seguridad Nacional (DHS) inicie un proceso de deportación.</p>

<h2>Caso práctico hipotético: titular de la tarjeta de residencia permanente con antecedentes penales</h2>

<p>Consideremos un hipotético residente permanente legal llamado Carlos.</p>

<p>Carlos tiene la tarjeta de residencia permanente desde hace más de 20 años. Ha trabajado en Estados Unidos, ha formado una familia, ha pagado impuestos y tiene hijos que son ciudadanos estadounidenses.</p>

<p>Hace más de una década, Carlos fue condenado por un delito.</p>

<p>Cumplió con la libertad condicional y todos los demás requisitos impuestos por el tribunal penal, y desde entonces no ha vuelto a tener problemas con la ley.</p>

<p>Años después, Carlos recibe una notificación de comparecencia en la que se alega que su condena lo hace susceptible de ser expulsado de los Estados Unidos.</p>

<p>Carlos está conmocionado.</p>

<p>Él cree: «Ya cumplí mi condena. Ese caso terminó hace años.»</p>

<p>Desde la perspectiva del tribunal penal, es posible que Carlos ya haya cumplido su condena. Pero eso no significa necesariamente que la condena no pueda tener consecuencias migratorias.</p>

<p>Un abogado de inmigración tendría que determinar si el DHS ha caracterizado correctamente la condena y si la condena realmente respalda el motivo de deportación alegado en la NTA.</p>

<p>El abogado también investigaría si Carlos reúne los requisitos para algún tipo de alivio de la deportación.</p>

<p>Dependiendo de las circunstancias, los problemas podrían incluir:</p>

<ul>
<li>Duración de la residencia permanente legal</li>
<li>Tiempo de residencia en los Estados Unidos</li>
<li>Fecha y forma de admisión</li>
<li>Condena penal exacta</li>
<li>Otros antecedentes penales</li>
<li>Relaciones familiares</li>
<li>Rehabilitación</li>
<li>Historial migratorio</li>
<li>Requisitos para la cancelación de la expulsión</li>
<li>Exenciones potenciales</li>
<li>Otras defensas o formas de alivio</li>
</ul>

<p>La lección importante es que una condena antigua nunca debe ser desestimada simplemente porque la pena penal ya se haya cumplido.</p>

<p>Al mismo tiempo, una persona no debe asumir automáticamente que una condena antigua garantiza la deportación.</p>

<p>Los casos de inmigración penal requieren un análisis legal individualizado.</p>

<h2>Procedimientos de inmigración y expulsión basados en lazos familiares</h2>

<p>Otra situación complicada se presenta cuando alguien tiene una petición de inmigración basada en lazos familiares, pero también se encuentra en un proceso de deportación.</p>

<p>Es comprensible que muchos inmigrantes crean que tener un cónyuge, hijo, padre u otro familiar que cumpla los requisitos y sea ciudadano estadounidense evita automáticamente la deportación.</p>

<p>Desafortunadamente, la ley de inmigración es más complicada.</p>

<p>Por ejemplo, un Formulario I-130, Petición para Familiar Extranjero, aprobado establece una relación familiar que califica para fines de inmigración, pero la aprobación de un Formulario I-130 no otorga automáticamente una tarjeta de residencia.</p>

<p>Tampoco pone fin automáticamente a los procedimientos de expulsión.</p>

<p>Es posible que un abogado de inmigración deba determinar si la persona puede solicitar el ajuste de estatus y si el USCIS o el juez de inmigración tiene jurisdicción sobre la solicitud correspondiente.</p>

<p>El abogado también deberá evaluar los posibles motivos de inadmisibilidad y si existe o se requiere alguna exención.</p>

<h2>Caso práctico hipotético: solicitud I-130 pendiente y Notificación para Comparecer</h2>

<p>Consideremos a Luis, otro ejemplo hipotético.</p>

<p>Luis está casado con una ciudadana estadounidense.</p>

<p>Su esposa presenta una petición I-130 en su nombre. Mientras el proceso de inmigración basado en lazos familiares está en curso, Luis recibe una NTA.</p>

<p>Luis piensa: «Mi esposa ya presentó la solicitud por mí, así que el tribunal de inmigración ya no es importante.»</p>

<p>Eso podría ser un error muy grave.</p>

<p>Su caso ante el tribunal de inmigración y el proceso de inmigración basado en lazos familiares deben evaluarse conjuntamente.</p>

<p>Un abogado de inmigración podría necesitar determinar:</p>

<ul>
<li>Si el Formulario I-130 está pendiente o aprobado</li>
<li>Si el matrimonio es de buena fe</li>
<li>Cómo Luis entró en los Estados Unidos</li>
<li>Si fue inspeccionado y admitido o puesto en libertad condicional</li>
<li>Si tiene antecedentes de infracciones migratorias</li>
<li>Si tiene órdenes de expulsión previas</li>
<li>Si existe algún problema de fraude o tergiversación</li>
<li>Si tiene antecedentes penales</li>
<li>Si reúne los requisitos para el ajuste de estatus</li>
<li>Si necesita una exención</li>
<li>Qué organismo tiene jurisdicción</li>
<li>Cómo afectan los procedimientos de deportación pendientes a la estrategia general</li>
</ul>

<p>Luis debe seguir tomándose en serio su caso ante el tribunal de inmigración hasta que los procedimientos judiciales se resuelvan adecuadamente.</p>

<p>Una petición familiar pendiente <strong>no</strong> da permiso a nadie para ignorar una NTA o una audiencia en un tribunal de inmigración.</p>

<h2>¿Se puede solicitar la tarjeta de residencia permanente mientras se está en proceso de deportación?</h2>

<p>En determinadas circunstancias, una persona sujeta a un proceso de deportación puede solicitar un ajuste de estatus, pero la elegibilidad depende de las circunstancias del caso.</p>

<p>No existe una respuesta universal.</p>

<p>Una persona casada con un ciudadano estadounidense puede encontrarse en una situación muy diferente dependiendo de si entró legalmente a los Estados Unidos, entró sin inspección, tiene órdenes de expulsión previas, cometió fraude o falsedad, tiene antecedentes penales o está sujeta a otros motivos de inadmisibilidad.</p>

<p>Por eso, una NTA debe evaluarse junto con todo el historial migratorio de la persona, en lugar de como un documento aislado.</p>

<h2>Cancelación de la expulsión</h2>

<p>Otra forma de alivio que puede estar disponible para ciertas personas en procedimientos de expulsión es la cancelación de la expulsión.</p>

<p>Existen diferentes requisitos para los residentes permanentes legales y ciertos residentes no permanentes.</p>

<p>La cancelación de la deportación no se concede simplemente porque alguien haya vivido en Estados Unidos durante muchos años.</p>

<p>Para ciertos residentes no permanentes, los requisitos legales pueden incluir cuestiones como la presencia física continua, la buena conducta moral, los delitos que conllevan la descalificación y la demostración del nivel de dificultad legalmente exigido para los familiares que cumplen los requisitos.</p>

<p>El requisito de dificultad puede ser particularmente importante.</p>

<p>Tener un hijo, cónyuge o padre ciudadano estadounidense no garantiza automáticamente la elegibilidad.</p>

<p>Un caso sólido puede requerir pruebas detalladas que demuestren cómo la expulsión afectaría a los miembros de la familia que reúnen los requisitos.</p>

<p>Dependiendo de las circunstancias, las pruebas pueden incluir:</p>

<ul>
<li>Historiales médicos</li>
<li>Evaluaciones psicológicas</li>
<li>Registros escolares</li>
<li>Documentación de educación especial</li>
<li>Registros financieros</li>
<li>Declaraciones de impuestos</li>
<li>Registros de empleo</li>
<li>Evidencia de dependencia familiar</li>
<li>Evidencia relativa al tratamiento médico</li>
<li>Informes sobre la situación de los países</li>
<li>Evidencia relativa al acceso a la atención médica en el extranjero</li>
<li>Evidencia relativa a las necesidades educativas de un niño</li>
<li>Evaluaciones o testimonios de expertos</li>
<li>Declaraciones de familiares y otros testigos</li>
</ul>

<p>El objetivo no es simplemente demostrar que la deportación sería difícil.</p>

<p>Las pruebas deben abordar el estándar legal específico aplicable al alivio solicitado.</p>

<h2>Caso práctico hipotético: residente de larga duración con hijos ciudadanos estadounidenses</h2>

<p>Imagine a Ana, una inmigrante hipotética que ha vivido en los Estados Unidos durante muchos años.</p>

<p>Tiene hijos que son ciudadanos estadounidenses, entre ellos uno que tiene importantes necesidades educativas y médicas.</p>

<p>Ana recibe una Notificación para Comparecer y da por sentado que tener hijos estadounidenses evita automáticamente la deportación.</p>

<p>No es así.</p>

<p>Sin embargo, su abogado evalúa si ella podría reunir los requisitos para la cancelación de la expulsión.</p>

<p>En lugar de simplemente decirle al juez de inmigración que sus hijos la necesitan, el equipo legal reúne pruebas.</p>

<p>Recopilan historiales médicos, documentación escolar, información financiera, pruebas de la residencia e historial de Ana en Estados Unidos e información sobre qué ocurriría con los familiares que reúnen los requisitos si Ana fuera expulsada.</p>

<p>Este ejemplo ilustra una diferencia importante entre tener circunstancias favorables y probar un caso legal.</p>

<p>Las decisiones de los tribunales de inmigración dependen de los requisitos legales y las pruebas presentadas.</p>

<h2>¿Qué ocurre si la Notificación para Comparecer contiene información incorrecta?</h2>

<p>No dé por sentado que la información contenida en una NTA es automáticamente correcta simplemente porque aparece en un documento gubernamental.</p>

<p>La NTA puede contener alegaciones relacionadas con su:</p>

<ul>
<li>Ciudadanía</li>
<li>Fecha de entrada</li>
<li>Lugar de entrada</li>
<li>Estatus migratorio</li>
<li>Modo de entrada</li>
<li>Historial migratorio</li>
<li>Antecedentes penales</li>
</ul>

<p>Si la información parece incorrecta, comuníqueselo a su abogado de inmigración.</p>

<p>La EOIR aconseja a las personas en procedimientos que crean que hay un error en una notificación de comparecencia que planteen el asunto ante el juez de inmigración.</p>

<p>La forma de abordar el problema depende de la naturaleza y la importancia jurídica del presunto error.</p>

<p>Esta es otra razón por la que un abogado debe revisar cuidadosamente la Notificación de Comparecencia antes de presentar los alegatos.</p>

<h2>¿Qué sucede si su NTA no tiene fecha de audiencia?</h2>

<p>Algunas personas reciben una notificación para comparecer que no incluye la fecha ni la hora de su primera audiencia de inmigración.</p>

<p>No interprete la falta de una fecha de audiencia como una autorización para olvidarse del caso.</p>

<p>Un <strong>Aviso de Audiencia</strong> por separado podrá proporcionar posteriormente información sobre la programación.</p>

<p>Debe seguir haciendo un seguimiento de su caso y revisar detenidamente cualquier correspondencia de las autoridades de inmigración.</p>

<p>También puede consultar el sistema automatizado de información de casos de la EOIR utilizando su Número A.</p>

<p>Si tiene un abogado, mantenga comunicación con su oficina con respecto a las notificaciones judiciales y los plazos.</p>

<h2>¿Qué sucede si se muda después de recibir una NTA?</h2>

<p>La mudanza es especialmente importante cuando se está en procedimientos de expulsión.</p>

<p>El tribunal de inmigración necesita información de contacto precisa.</p>

<p>Las instrucciones actuales de la EOIR requieren que las personas con asuntos pendientes ante el tribunal de inmigración o la Junta de Apelaciones de Inmigración informen los cambios en su dirección o información de contacto dentro de cinco días laborables.</p>

<p>Dependiendo de la instancia en la que se encuentre pendiente el caso, deberá seguirse el procedimiento de la EOIR correspondiente.</p>

<p>En los casos de los tribunales de inmigración, esto puede implicar el Formulario EOIR-33/IC o el sistema electrónico de acceso para personas en procedimientos de la EOIR.</p>

<p>No asuma que cambiar su dirección con:</p>

<ul>
<li>USCIS,</li>
<li>el Servicio Postal de los Estados Unidos,</li>
<li>el DMV,</li>
<li>ICE,</li>
<li>o cualquier otra agencia gubernamental</li>
</ul>

<p>actualiza automáticamente su dirección en el tribunal de inmigración.</p>

<p>Es fundamental mantener informado al tribunal de inmigración de su dirección correcta, ya que las notificaciones de audiencias y otros documentos importantes pueden enviarse a la dirección asociada con su caso.</p>

<h2>¿Qué sucede si no se presenta a su audiencia en el tribunal de inmigración?</h2>

<p>Faltar a la audiencia de inmigración puede tener consecuencias extremadamente graves.</p>

<p>En determinadas circunstancias, un juez de inmigración puede emitir una orden de expulsión <em>en ausencia</em>, lo que significa que se emite una orden de expulsión cuando la persona no comparece.</p>

<p>Si ya ha faltado a una audiencia, no dé por sentado que no se puede hacer nada, pero tampoco se demore.</p>

<p>La ley establece normas específicas que rigen cuándo una orden de expulsión dictada en ausencia puede ser impugnada o revocada.</p>

<p>La posibilidad de interponer una moción depende de las circunstancias, incluyendo cuestiones relacionadas con la notificación y el motivo por el cual la persona no compareció.</p>

<p>Estos casos pueden ser muy técnicos.</p>

<p>Consulte con un abogado de inmigración lo antes posible.</p>

<h2>¿Tiene usted derechos en el tribunal de inmigración?</h2>

<p>Sí.</p>

<p>Los procedimientos de expulsión son procedimientos civiles de inmigración, no procesos penales, pero las personas en procedimientos tienen importantes derechos procesales.</p>

<p>Estos pueden incluir el derecho a:</p>

<ul>
<li>Obtener representación legal sin costo alguno para el gobierno</li>
<li>Presentar pruebas</li>
<li>Examinar las pruebas presentadas en su contra</li>
<li>Objetar las pruebas cuando corresponda</li>
<li>Interrogar a los testigos del gobierno</li>
<li>Presentar testigos</li>
<li>Solicitar las formas de alivio migratorio para las que sea elegible</li>
<li>Apelar ciertas decisiones ante la Junta de Apelaciones de Inmigración</li>
</ul>

<p>Una frase es especialmente importante: «sin costo alguno para el gobierno».</p>

<p>A diferencia de muchos procesos penales, el gobierno federal generalmente no designa ni paga a un abogado de inmigración simplemente porque alguien no pueda costearse un abogado privado.</p>

<p>Por ello, obtener representación legal cualificada en materia de inmigración lo antes posible es especialmente importante.</p>

<h2>¿Necesita un abogado de defensa contra la deportación después de recibir una NTA?</h2>

<p>Usted tiene derecho a representarse a sí mismo en los procedimientos de inmigración, pero los casos de deportación pueden implicar cuestiones complejas relacionadas con las leyes federales de inmigración, los reglamentos, las decisiones administrativas, las decisiones de los tribunales federales, las pruebas, las normas procesales, los plazos y, en ocasiones, el derecho penal.</p>

<p>Un abogado con experiencia en defensa contra la deportación en Los Ángeles puede evaluar cuestiones como:</p>

<ul>
<li>¿Es precisa la información de la NTA?</li>
<li>¿Ha alegado el DHS correctamente la deportabilidad?</li>
<li>¿Deben negarse o impugnarse algunas de las acusaciones?</li>
<li>¿La persona reúne los requisitos para obtener asilo?</li>
<li>¿Está disponible la retención de la expulsión?</li>
<li>¿Podría aplicarse la protección de la Convención contra la Tortura?</li>
<li>¿Es posible el ajuste de estatus?</li>
<li>¿Afecta al caso el hecho de que la solicitud I-130 esté aprobada o pendiente?</li>
<li>¿Es posible la cancelación de la expulsión?</li>
<li>¿Es necesaria una exención de inmigración?</li>
<li>¿Los antecedentes penales conllevan consecuencias migratorias?</li>
<li>¿Existen órdenes previas de deportación o expulsión?</li>
<li>¿Existen solicitudes de inmigración previas que afecten al caso?</li>
<li>¿Qué pruebas se deben recopilar?</li>
<li>¿Qué plazos deben cumplirse?</li>
<li>¿Qué debería ocurrir en la Audiencia del Calendario Maestro?</li>
<li>¿Qué pruebas serán necesarias para una Audiencia de Calendario Individual?</li>
</ul>

<p>Esperar hasta poco antes de la audiencia final puede dificultar considerablemente la preparación.</p>

<h2>Errores importantes que debe evitar después de recibir una NTA</h2>

<p><strong>Ignorar el aviso.</strong> Los trámites de expulsión no desaparecen simplemente porque alguien ignore la documentación.</p>

<p><strong>Faltar al tribunal de inmigración.</strong> Nunca falte intencionadamente a una audiencia porque crea que tiene otra solicitud de inmigración pendiente.</p>

<p><strong>Mudarse sin actualizar la dirección.</strong> Si no actualiza correctamente su información de contacto, puede perderse correspondencia judicial importante.</p>

<p><strong>Asumir que el matrimonio detiene automáticamente la deportación.</strong> El matrimonio con un ciudadano estadounidense puede crear oportunidades de inmigración, pero no pone fin automáticamente a los procedimientos de deportación.</p>

<p><strong>Suponer que tener hijos ciudadanos estadounidenses evita la deportación.</strong> Tener hijos ciudadanos estadounidenses puede ser muy relevante en ciertos casos de inmigración, pero no constituye una protección automática contra la deportación.</p>

<p><strong>Suponer que una solicitud I-130 pendiente le protege.</strong> Una petición familiar y un caso ante un tribunal de inmigración son asuntos legales separados que pueden requerir coordinación.</p>

<p><strong>Suponer que una condena penal antigua no importa.</strong> Algunas condenas pueden tener consecuencias migratorias años después de que haya finalizado el caso penal.</p>

<p><strong>Hacer admisiones sin comprender las consecuencias.</strong> Las declaraciones y concesiones realizadas durante los procedimientos de inmigración pueden tener importantes consecuencias legales.</p>

<p><strong>Esperar hasta el último minuto para contratar a un abogado de inmigración.</strong> Para elaborar una sólida defensa contra la deportación, puede ser necesario obtener registros gubernamentales, documentos judiciales penales, pruebas médicas, declaraciones de testigos, opiniones de expertos, pruebas sobre las condiciones del país y otra documentación. La preparación lleva tiempo.</p>

<p><strong>Utilizar un notario o un consultor de inmigración no cualificado.</strong> Tenga mucho cuidado al recibir asesoramiento legal de alguien que no esté autorizado para ejercer la abogacía en materia de inmigración. Los procedimientos ante los tribunales de inmigración pueden determinar si una persona tiene permiso para permanecer en Estados Unidos. Este no es el momento de recurrir a asistencia legal no cualificada.</p>

<h2>Documentos que debe llevar a un abogado de inmigración después de recibir una NTA</h2>

<p>Si ha recibido una Notificación para Comparecer, reúna la mayor cantidad posible de información sobre su historial migratorio.</p>

<p>Los documentos importantes pueden incluir:</p>

<ul>
<li>Notificación para Comparecer completa</li>
<li>Aviso de Audiencia</li>
<li>Pasaporte</li>
<li>Visa</li>
<li>Registros I-94</li>
<li>Documentos de autorización de empleo</li>
<li>Tarjeta de residencia permanente, si corresponde</li>
<li>Avisos de USCIS</li>
<li>Solicitudes de inmigración anteriores</li>
<li>Peticiones I-130</li>
<li>Peticiones I-140</li>
<li>Solicitudes de asilo</li>
<li>Documentos del tribunal de inmigración</li>
<li>Órdenes previas de deportación o expulsión</li>
<li>Certificado de matrimonio</li>
<li>Registros de divorcio</li>
<li>Certificados de nacimiento</li>
<li>Certificados de nacimiento de los hijos</li>
<li>Registros judiciales penales</li>
<li>Registros de arresto y disposición</li>
<li>Prueba de residencia en los Estados Unidos</li>
<li>Registros fiscales</li>
<li>Registros de empleo</li>
<li>Documentación médica</li>
<li>Evaluaciones psicológicas</li>
<li>Registros escolares</li>
<li>Evidencia relativa a las dificultades</li>
<li>Pruebas que respaldan una solicitud de asilo</li>
<li>Pruebas de amenazas o persecución</li>
<li>Evidencia sobre las condiciones del país</li>
</ul>

<p>No se preocupe si no tiene todo.</p>

<p>Un abogado de inmigración puede identificar qué documentos son los más importantes y puede recomendar la obtención de registros adicionales.</p>

<h2>Una Notificación para Comparecer es seria, pero no es la decisión final</h2>

<p>Lo más importante que hay que entender sobre una NTA es lo siguiente: una Notificación para Comparecer es un documento de acusación. No constituye automáticamente una orden final de deportación.</p>

<p>El DHS expone por qué cree que usted podría ser deportado de los Estados Unidos.</p>

<p>El tribunal de inmigración proporciona un proceso legal a través del cual se pueden abordar las alegaciones y los cargos y, cuando sea legalmente posible, se pueden presentar solicitudes de alivio de la deportación.</p>

<p>La estrategia correcta depende de cada persona.</p>

<p>Un solicitante de asilo puede necesitar reunir pruebas exhaustivas que demuestren persecución y condiciones peligrosas en su país de origen.</p>

<p>Un residente permanente legal con antecedentes penales puede necesitar un análisis detallado del estatuto penal y del registro de condenas.</p>

<p>Una persona que haya permanecido en el país más tiempo del permitido por su visa y esté casada con un ciudadano estadounidense podría necesitar determinar si tiene disponible la opción de ajustar su estatus o alguna otra estrategia de inmigración basada en lazos familiares.</p>

<p>Un residente indocumentado de larga duración con familiares que cumplan los requisitos puede necesitar investigar la cancelación de la expulsión u otras medidas de alivio.</p>

<p>No existe una única defensa que se aplique a todas las NTA.</p>

<h2>¿Recibió una Notificación para Comparecer en Los Ángeles? Comuníquese con el bufete de abogados de Todd Becraft</h2>

<p>Si ha recibido una notificación de comparecencia, notificación de audiencia ante el tribunal de inmigración, documento del ICE u otra documentación relacionada con los procedimientos de deportación o expulsión, <strong>no espere hasta que se acerque la fecha de su comparecencia ante el tribunal de inmigración para conocer sus opciones.</strong></p>

<p>Cuanto antes se evalúe su caso, más tiempo tendrá un abogado de inmigración para:</p>

<ul>
<li>Revisar las alegaciones del gobierno</li>
<li>Analizar los cargos legales</li>
<li>Obtener registros de inmigración</li>
<li>Revisar los antecedentes penales</li>
<li>Investigar posibles defensas</li>
<li>Determinar la elegibilidad para el alivio migratorio</li>
<li>Preparar las solicitudes</li>
<li>Reunir pruebas que lo respalden</li>
<li>Identificar testigos</li>
<li>Prepararse para el tribunal de inmigración</li>
</ul>

<p>El bufete de abogados de Todd Becraft ayuda a personas y familias con asuntos de inmigración, incluyendo defensa contra la deportación y expulsión, asilo, inmigración basada en lazos familiares, ajuste de estatus, procedimientos ante tribunales de inmigración y casos complejos de inmigración.</p>

<p>Si ha recibido una Notificación para Comparecer o se encuentra en procedimientos de expulsión, póngase en contacto con el bufete de abogados de Todd Becraft para programar una consulta y conocer las opciones de inmigración disponibles según sus circunstancias individuales.</p>

<h2>Preguntas frecuentes sobre una Notificación para Comparecer</h2>

<p><strong>¿Recibir una NTA significa que voy a ser deportado?</strong></p>

<p>No automáticamente. Una Notificación de Comparecencia contiene las alegaciones y cargos del gobierno en su contra. Una vez presentada correctamente ante el tribunal de inmigración, puede dar inicio a un proceso de deportación, pero la NTA en sí misma no determina necesariamente el resultado final.</p>

<p><strong>¿Puedo impugnar una Notificación para Comparecer?</strong></p>

<p>Dependiendo de sus circunstancias, es posible que pueda impugnar las acusaciones o cargos del gobierno o solicitar algún tipo de alivio de la deportación. Sus opciones dependen de su historial migratorio y personal completo.</p>

<p><strong>¿Puedo solicitar asilo después de recibir una NTA?</strong></p>

<p>Potencialmente. Las personas elegibles en procedimientos de expulsión pueden solicitar asilo defensivo ante un juez de inmigración. Los requisitos y plazos de presentación pueden ser extremadamente importantes.</p>

<p><strong>¿Puede el matrimonio con un ciudadano estadounidense evitar la deportación?</strong></p>

<p>El matrimonio con un ciudadano estadounidense puede crear importantes oportunidades de inmigración, pero no detiene automáticamente los procedimientos de deportación ni garantiza la obtención de la tarjeta de residencia permanente.</p>

<p><strong>Tengo una solicitud I-130 aprobada. ¿Aun así puedo ser deportado?</strong></p>

<p>Una solicitud I-130 aprobada establece una relación familiar que cumple con los requisitos, pero no otorga automáticamente el estatus de residente permanente legal ni pone fin a los procedimientos de deportación. Deben evaluarse los requisitos de elegibilidad adicionales.</p>

<p><strong>¿Puedo recibir una NTA por haber excedido el tiempo permitido por mi visa?</strong></p>

<p>Sí. Permanecer en Estados Unidos más allá del período autorizado puede dar lugar a un proceso de deportación. Sin embargo, el hecho de haber permanecido en el país más tiempo del permitido no significa necesariamente que no exista ninguna otra forma de alivio migratorio disponible.</p>

<p><strong>¿Qué ocurre si mi NTA está relacionada con una condena penal?</strong></p>

<p>Debería hacer que un abogado de inmigración familiarizado con la interacción entre el derecho penal y el derecho migratorio revise su condena. El estatuto exacto y los antecedentes penales pueden ser extremadamente importantes.</p>

<p><strong>¿Qué sucede si falto al tribunal de inmigración?</strong></p>

<p>Faltar a una audiencia de inmigración debidamente programada puede tener graves consecuencias, incluyendo una posible orden de expulsión en ausencia. Si ya ha faltado al tribunal, busque asesoramiento legal de inmediato.</p>

<p><strong>¿Qué ocurre si la información de mi NTA es incorrecta?</strong></p>

<p>No ignore el error. Un abogado de inmigración puede revisar las alegaciones y determinar cómo se debe abordar la información incorrecta en el tribunal de inmigración.</p>

<p><strong>¿Qué ocurre si mi NTA no indica una fecha para la audiencia?</strong></p>

<p>Continúe monitoreando su caso ante el tribunal de inmigración. Es posible que reciba un Aviso de Audiencia por separado que contenga la fecha, la hora y el lugar de su audiencia.</p>

<p><strong>¿Qué debo hacer primero después de recibir una NTA?</strong></p>

<p>Conserve todos sus documentos de inmigración, verifique la información de su tribunal de inmigración, asegúrese de que su dirección esté actualizada con la EOIR, recopile sus antecedentes penales y de inmigración, y obtenga asesoramiento legal calificado lo antes posible.</p>

<h2>¿Recibió una Notificación para Comparecer? Comuníquese hoy mismo con el bufete de abogados de Todd Becraft</h2>

<p>Si usted o un ser querido ha recibido una Notificación para Comparecer (NTA), tiene una audiencia próxima ante un tribunal de inmigración o se enfrenta a un proceso de expulsión o deportación, no espere hasta el último minuto para conocer sus opciones legales.</p>

<p>Cada caso de inmigración es diferente. Dependiendo de sus circunstancias, puede haber defensas o formas de alivio disponibles que incluyan asilo, cancelación de la expulsión, ajuste de estatus, inmigración basada en lazos familiares, exenciones u otras protecciones migratorias.</p>

<p>El bufete de abogados de Todd Becraft cuenta con amplia experiencia ayudando a inmigrantes y sus familias a desenvolverse en el sistema de inmigración estadounidense. Si ha recibido una NTA o le preocupa la deportación, consulte su caso con un abogado de inmigración con experiencia.</p>

<p><strong>Llame hoy mismo al bufete de abogados de Todd Becraft al 213-388-1821 para programar una consulta.</strong></p>

<p>No ignore una Notificación para Comparecer. Conozca sus derechos, comprenda sus opciones y obtenga ayuda legal especializada en inmigración lo antes posible.</p>
`},{slug:"nuevas-restricciones-obtener-renovar-permiso-trabajo-uscis-2026",title:"¿Cuáles son las nuevas restricciones para obtener y renovar un permiso de trabajo en EE. UU.? Entendiendo los últimos cambios del USCIS en 2026.",excerpt:"Para millones de inmigrantes, obtener un Documento de Autorización de Empleo (EAD) es uno de los hitos más importantes en su proceso migratorio. Conozca los cambios normativos del USCIS que afectan la validez, la renovación y la elegibilidad para los permisos de trabajo.",date:"6 de agosto de 2026",author:"Todd Becraft",content:`
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
    `}];function Zf(){return i.jsxs(i.Fragment,{children:[i.jsx(Ae,{title:"Blog de Inmigración | Bufete de Abogados de Todd Becraft",description:"Noticias, consejos y actualizaciones sobre inmigración de los expertos en derecho de inmigración de Los Ángeles.",canonical:"/es/blog",schema:{"@context":"https://schema.org","@type":"Blog",name:"Blog de Inmigración de Todd Becraft",description:"Noticias, consejos y actualizaciones sobre inmigración"}}),i.jsx("section",{className:"bg-gradient-to-b from-[#1B2A4A] to-[#243554] text-white py-20",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6"}),i.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight",children:"Blog de Inmigración"}),i.jsx("p",{className:"text-xl text-white/90 leading-relaxed",children:"Noticias, consejos y actualizaciones sobre inmigración de nuestros expertos en derecho de inmigración."})]})})}),i.jsx("section",{className:"py-20 bg-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Iu.map(r=>i.jsx($,{to:`/es/blog/${r.slug}`,className:"group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:i.jsxs("div",{className:"p-6",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-3",children:[i.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})}),i.jsx("time",{children:r.date})]}),i.jsx("h2",{className:"text-xl font-serif font-bold text-[#1B2A4A] mb-3 group-hover:text-[#C5A572] transition-colors",children:r.title}),i.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:r.excerpt}),i.jsxs("div",{className:"flex items-center text-[#C5A572] font-medium group-hover:gap-2 transition-all",children:[i.jsx("span",{children:"Leer más"}),i.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})]})]})},r.slug))})})}),i.jsx("section",{className:"py-16 bg-gradient-to-b from-gray-50 to-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[i.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6 mx-auto"}),i.jsx("h2",{className:"text-3xl font-serif font-bold text-[#1B2A4A] mb-4",children:"¿Tiene preguntas sobre inmigración?"}),i.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Comuníquese con nosotros para una consulta confidencial."}),i.jsx($,{to:"/es/contactenos",className:"inline-block bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39560] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C5A572]/30",children:"Programe una Consulta"})]})})]})}function eg(){const{slug:r}=Zi(),l=Iu.find(c=>c.slug===r);return l?i.jsxs(i.Fragment,{children:[i.jsx(Ae,{title:`${l.title} | Bufete de Abogados de Todd Becraft`,description:l.excerpt,canonical:`/es/blog/${l.slug}`,schema:{"@context":"https://schema.org","@type":"Article",headline:l.title,author:{"@type":"Person",name:l.author},datePublished:l.date,description:l.excerpt}}),i.jsx("nav",{className:"bg-gray-50 border-b border-gray-200",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:i.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[i.jsx($,{to:"/es",className:"hover:text-[#C5A572] transition-colors",children:"Inicio"}),i.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})}),i.jsx($,{to:"/es/blog",className:"hover:text-[#C5A572] transition-colors",children:"Blog"}),i.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})}),i.jsx("span",{className:"text-gray-900",children:l.title})]})})}),i.jsx("article",{className:"py-12 bg-white",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6"}),i.jsx("h1",{className:"text-4xl sm:text-5xl font-serif font-bold text-[#1B2A4A] mb-6 tracking-tight leading-tight",children:l.title}),i.jsxs("div",{className:"flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})}),i.jsx("span",{children:l.author})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})}),i.jsx("time",{children:l.date})]})]}),i.jsx("div",{className:`prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#C5A572] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1B2A4A] prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700`,dangerouslySetInnerHTML:{__html:l.content}})]})}),i.jsx("section",{className:"py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"bg-gradient-to-br from-[#1B2A4A] to-[#243554] rounded-2xl p-8 sm:p-12 text-center text-white",children:[i.jsx("h2",{className:"text-3xl font-serif font-bold mb-4",children:"¿Necesita ayuda con su caso de inmigración?"}),i.jsx("p",{className:"text-xl text-white/90 mb-8 leading-relaxed",children:"Comuníquese con el Bufete de Abogados de Todd Becraft para una consulta confidencial."}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsx($,{to:"/es/contactenos",className:"inline-block bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39560] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C5A572]/30",children:"Programe una Consulta"}),i.jsx("a",{href:"tel:213-388-1821",className:"inline-block bg-white text-[#1B2A4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",children:"Llame al 213-388-1821"})]})]})})}),i.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:i.jsxs($,{to:"/es/blog",className:"inline-flex items-center gap-2 text-[#C5A572] hover:gap-3 transition-all font-medium",children:[i.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),i.jsx("span",{children:"Volver al Blog"})]})})]}):i.jsx("div",{className:"min-h-screen flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Artículo no encontrado"}),i.jsx($,{to:"/es/blog",className:"text-[#C5A572] hover:underline",children:"Volver al Blog"})]})})}function ag(){return i.jsx(Es,{children:i.jsx(cf,{basename:"",children:i.jsxs("div",{className:"min-h-screen flex flex-col",children:[i.jsx(hf,{}),i.jsx("main",{className:"flex-1",children:i.jsxs(af,{children:[i.jsx(xe,{path:"/",element:i.jsx(eu,{})}),i.jsx(xe,{path:"/about",element:i.jsx(Sf,{})}),i.jsx(xe,{path:"/services",element:i.jsx(Af,{})}),i.jsx(xe,{path:"/services/:area",element:i.jsx(kf,{})}),i.jsx(xe,{path:"/resources",element:i.jsx(Uf,{})}),i.jsx(xe,{path:"/resources/:slug",element:i.jsx(If,{})}),i.jsx(xe,{path:"/success-stories",element:i.jsx(zf,{})}),i.jsx(xe,{path:"/contact",element:i.jsx(Df,{})}),i.jsx(xe,{path:"/blog",element:i.jsx(Lf,{})}),i.jsx(xe,{path:"/blog/:slug",element:i.jsx(Pf,{})}),i.jsx(xe,{path:"/es",element:i.jsx(Mf,{})}),i.jsx(xe,{path:"/es/servicios",element:i.jsx(Of,{})}),i.jsx(xe,{path:"/es/servicios/:area",element:i.jsx(Wf,{})}),i.jsx(xe,{path:"/es/recursos",element:i.jsx(_f,{})}),i.jsx(xe,{path:"/es/recursos/:slug",element:i.jsx(Vf,{})}),i.jsx(xe,{path:"/es/sobre-nosotros",element:i.jsx(Kf,{})}),i.jsx(xe,{path:"/es/contactenos",element:i.jsx(Xf,{})}),i.jsx(xe,{path:"/es/historias-de-exito",element:i.jsx($f,{})}),i.jsx(xe,{path:"/es/blog",element:i.jsx(Zf,{})}),i.jsx(xe,{path:"/es/blog/:slug",element:i.jsx(eg,{})}),i.jsx(xe,{path:"*",element:i.jsx(eu,{})})]})}),i.jsx(ff,{})]})})})}Rp.createRoot(document.getElementById("root")).render(i.jsx(q.StrictMode,{children:i.jsx(Es,{children:i.jsx(ag,{})})}));
