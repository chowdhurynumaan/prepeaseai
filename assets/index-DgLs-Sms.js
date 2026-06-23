function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t={exports:{}},n={},r={exports:{}},i={},s=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,w={};function b(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}function _(){}function E(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var S=E.prototype=new _;S.constructor=E,v(S,b.prototype),S.isPureReactComponent=!0;var k=Array.isArray,T=Object.prototype.hasOwnProperty,I={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,i={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)T.call(t,r)&&!C.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:I.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var A=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function D(e,t,n,r,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case s:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+R(l,0):r,k(i)?(n="",null!=e&&(n=e.replace(A,"$&/")+"/"),D(i,t,n,"",function(e){return e})):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(A,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",k(e))for(var u=0;u<e.length;u++){var c=r+R(a=e[u],u);l+=D(a,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(a=e.next()).done;)l+=D(a=a.value,t,n,c=r+R(a,u++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",function(e){return t.call(n,e,i++)}),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},M={transition:null},F={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:M,ReactCurrentOwner:I};function U(){throw Error("act(...) is not supported in production builds of React.")}i.Children={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i.Component=b,i.Fragment=a,i.Profiler=u,i.PureComponent=E,i.StrictMode=l,i.Suspense=f,i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,i.act=U,i.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=v({},e.props),i=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=I.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)T.call(t,u)&&!C.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:s,type:e.type,key:i,ref:o,props:r,_owner:a}},i.createContext=function(e){return(e={$$typeof:h,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},i.createElement=x,i.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},i.createRef=function(){return{current:null}},i.forwardRef=function(e){return{$$typeof:d,render:e}},i.isValidElement=N,i.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:L}},i.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},i.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},i.unstable_act=U,i.useCallback=function(e,t){return O.current.useCallback(e,t)},i.useContext=function(e){return O.current.useContext(e)},i.useDebugValue=function(){},i.useDeferredValue=function(e){return O.current.useDeferredValue(e)},i.useEffect=function(e,t){return O.current.useEffect(e,t)},i.useId=function(){return O.current.useId()},i.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},i.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},i.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},i.useMemo=function(e,t){return O.current.useMemo(e,t)},i.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},i.useRef=function(e){return O.current.useRef(e)},i.useState=function(e){return O.current.useState(e)},i.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},i.useTransition=function(){return O.current.useTransition()},i.version="18.3.1",r.exports=i;var V=r.exports;const j=e(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=V,B=Symbol.for("react.element"),$=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,H=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function W(e,t,n){var r,i={},s=null,o=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)q.call(t,r)&&!K.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:B,type:e,key:s,ref:o,props:i,_owner:H.current}}n.Fragment=$,n.jsx=W,n.jsxs=W,t.exports=n;var G=t.exports,Q={},Y={exports:{}},X={},J={exports:{}},Z={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,o=s>>>1;r<o;){var a=2*(r+1)-1,l=e[a],u=a+1,c=e[u];if(0>i(l,n))u<s&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[a]=n,r=a);else{if(!(u<s&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function b(e){if(m=!1,w(e),!p)if(null!==n(l))p=!0,D(_);else{var t=n(u);null!==t&&P(b,t.startTime-e)}}function _(t,i){p=!1,m&&(m=!1,y(T),T=-1),f=!0;var s=d;try{for(w(i),h=n(l);null!==h&&(!(h.expirationTime>i)||t&&!x());){var o=h.callback;if("function"==typeof o){h.callback=null,d=h.priorityLevel;var a=o(h.expirationTime<=i);i=e.unstable_now(),"function"==typeof a?h.callback=a:h===n(l)&&r(l),w(i)}else r(l);h=n(l)}if(null!==h)var c=!0;else{var g=n(u);null!==g&&P(b,g.startTime-i),c=!1}return c}finally{h=null,d=s,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,S=!1,k=null,T=-1,I=5,C=-1;function x(){return!(e.unstable_now()-C<I)}function N(){if(null!==k){var t=e.unstable_now();C=t;var n=!0;try{n=k(!0,t)}finally{n?E():(S=!1,k=null)}}else S=!1}if("function"==typeof v)E=function(){v(N)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=N,E=function(){R.postMessage(null)}}else E=function(){g(N,0)};function D(e){k=e,S||(S=!0,E())}function P(t,n){T=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,D(_))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var o=e.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?o+s:o:s=o,r){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:s,expirationTime:a=s+a,sortIndex:-1},s>o?(r.sortIndex=s,t(u,r),null===n(l)&&r===n(u)&&(m?(y(T),T=-1):m=!0,P(b,s-o))):(r.sortIndex=a,t(l,r),p||f||(p=!0,D(_))),r},e.unstable_shouldYield=x,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}(Z),J.exports=Z;var ee=J.exports,te=V,ne=ee;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ie=new Set,se={};function oe(e,t){ae(e,t),ae(e+"Capture",t)}function ae(e,t){for(se[e]=t,e=0;e<t.length;e++)ie.add(t[e])}var le=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),ue=Object.prototype.hasOwnProperty,ce=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,he={},de={};function fe(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new fe(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new fe(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new fe(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new fe(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){pe[e]=new fe(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){pe[e]=new fe(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){pe[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ge(e){return e[1].toUpperCase()}function ye(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!ue.call(de,e)||!ue.call(he,e)&&(ce.test(e)?de[e]=!0:(he[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)}),pe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){pe[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});var ve=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),be=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),Te=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),De=Symbol.iterator;function Pe(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=De&&e[De]||e["@@iterator"])?e:null}var Le,Oe=Object.assign;function Me(e){if(void 0===Le)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Le=t&&t[1]||""}return"\n"+Le+e}var Fe=!1;function Ue(e,t){if(!e||Fe)return"";Fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=a);break}}}finally{Fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Me(e):""}function Ve(e){switch(e.tag){case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return Me("Suspense");case 19:return Me("SuspenseList");case 0:case 2:case 15:return e=Ue(e.type,!1);case 11:return e=Ue(e.type.render,!1);case 1:return e=Ue(e.type,!0);default:return""}}function je(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case _e:return"Fragment";case be:return"Portal";case Se:return"Profiler";case Ee:return"StrictMode";case Ce:return"Suspense";case xe:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case ke:return(e._context.displayName||"Context")+".Provider";case Ie:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return null!==(t=e.displayName||null)?t:je(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return je(e(t))}catch(n){}}return null}function ze(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(t);case 8:return t===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function Be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function $e(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function qe(e){e._valueTracker||(e._valueTracker=function(e){var t=$e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function He(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$e(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ke(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function We(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ge(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Be(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Qe(e,t){null!=(t=t.checked)&&ye(e,"checked",t,!1)}function Ye(e,t){Qe(e,t);var n=Be(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Je(e,t.type,n):t.hasOwnProperty("defaultValue")&&Je(e,t.type,Be(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Xe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Je(e,t,n){"number"===t&&Ke(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ze=Array.isArray;function et(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Be(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function tt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(re(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nt(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(re(92));if(Ze(n)){if(1<n.length)throw Error(re(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Be(n)}}function rt(e,t){var n=Be(t.value),r=Be(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function it(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function st(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?st(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var at,lt,ut=(lt=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((at=at||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=at.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return lt(e,t)})}:lt);function ct(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dt=["Webkit","ms","Moz","O"];function ft(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ht.hasOwnProperty(e)&&ht[e]?(""+t).trim():t+"px"}function pt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ft(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ht).forEach(function(e){dt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ht[t]=ht[e]})});var mt=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(e,t){if(t){if(mt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(re(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(re(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(re(62))}}function yt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function wt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var bt=null,_t=null,Et=null;function St(e){if(e=ys(e)){if("function"!=typeof bt)throw Error(re(280));var t=e.stateNode;t&&(t=ws(t),bt(e.stateNode,e.type,t))}}function kt(e){_t?Et?Et.push(e):Et=[e]:_t=e}function Tt(){if(_t){var e=_t,t=Et;if(Et=_t=null,St(e),t)for(e=0;e<t.length;e++)St(t[e])}}function It(e,t){return e(t)}function Ct(){}var xt=!1;function Nt(e,t,n){if(xt)return e(t,n);xt=!0;try{return It(e,t,n)}finally{xt=!1,(null!==_t||null!==Et)&&(Ct(),Tt())}}function At(e,t){var n=e.stateNode;if(null===n)return null;var r=ws(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(re(231,t,typeof n));return n}var Rt=!1;if(le)try{var Dt={};Object.defineProperty(Dt,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",Dt,Dt),window.removeEventListener("test",Dt,Dt)}catch(lt){Rt=!1}function Pt(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Lt=!1,Ot=null,Mt=!1,Ft=null,Ut={onError:function(e){Lt=!0,Ot=e}};function Vt(e,t,n,r,i,s,o,a,l){Lt=!1,Ot=null,Pt.apply(Ut,arguments)}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function zt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Bt(e){if(jt(e)!==e)throw Error(re(188))}function $t(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=jt(e)))throw Error(re(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bt(i),e;if(s===r)return Bt(i),t;s=s.sibling}throw Error(re(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==r)throw Error(re(190))}if(3!==n.tag)throw Error(re(188));return n.stateNode.current===n?e:t}(e))?qt(e):null}function qt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qt(e);if(null!==t)return t;e=e.sibling}return null}var Ht=ne.unstable_scheduleCallback,Kt=ne.unstable_cancelCallback,Wt=ne.unstable_shouldYield,Gt=ne.unstable_requestPaint,Qt=ne.unstable_now,Yt=ne.unstable_getCurrentPriorityLevel,Xt=ne.unstable_ImmediatePriority,Jt=ne.unstable_UserBlockingPriority,Zt=ne.unstable_NormalPriority,en=ne.unstable_LowPriority,tn=ne.unstable_IdlePriority,nn=null,rn=null;var sn=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(on(e)/an|0)|0},on=Math.log,an=Math.LN2;var ln=64,un=4194304;function cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=268435455&n;if(0!==o){var a=o&~i;0!==a?r=cn(a):0!==(s&=o)&&(r=cn(s))}else 0!==(o=n&~i)?r=cn(o):0!==s&&(r=cn(s));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&4194240&s))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-sn(t)),r|=e[n],t&=~i;return r}function dn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function fn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function pn(){var e=ln;return!(4194240&(ln<<=1))&&(ln=64),e}function mn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-sn(t)]=n}function yn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vn=0;function wn(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var bn,_n,En,Sn,kn,Tn=!1,In=[],Cn=null,xn=null,Nn=null,An=new Map,Rn=new Map,Dn=[],Pn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ln(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function On(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=ys(t))&&_n(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Mn(e){var t=gs(e.target);if(null!==t){var n=jt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=zt(n)))return e.blockedOn=t,void kn(e.priority,function(){En(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Fn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ys(n))&&_n(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);vt=r,n.target.dispatchEvent(r),vt=null,t.shift()}return!0}function Un(e,t,n){Fn(e)&&n.delete(t)}function Vn(){Tn=!1,null!==Cn&&Fn(Cn)&&(Cn=null),null!==xn&&Fn(xn)&&(xn=null),null!==Nn&&Fn(Nn)&&(Nn=null),An.forEach(Un),Rn.forEach(Un)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Tn||(Tn=!0,ne.unstable_scheduleCallback(ne.unstable_NormalPriority,Vn)))}function zn(e){function t(t){return jn(t,e)}if(0<In.length){jn(In[0],e);for(var n=1;n<In.length;n++){var r=In[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Cn&&jn(Cn,e),null!==xn&&jn(xn,e),null!==Nn&&jn(Nn,e),An.forEach(t),Rn.forEach(t),n=0;n<Dn.length;n++)(r=Dn[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&null===(n=Dn[0]).blockedOn;)Mn(n),null===n.blockedOn&&Dn.shift()}var Bn=ve.ReactCurrentBatchConfig,$n=!0;function qn(e,t,n,r){var i=vn,s=Bn.transition;Bn.transition=null;try{vn=1,Kn(e,t,n,r)}finally{vn=i,Bn.transition=s}}function Hn(e,t,n,r){var i=vn,s=Bn.transition;Bn.transition=null;try{vn=4,Kn(e,t,n,r)}finally{vn=i,Bn.transition=s}}function Kn(e,t,n,r){if($n){var i=Gn(e,t,n,r);if(null===i)Bi(e,t,r,Wn,n),Ln(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Cn=On(Cn,e,t,n,r,i),!0;case"dragenter":return xn=On(xn,e,t,n,r,i),!0;case"mouseover":return Nn=On(Nn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return An.set(s,On(An.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rn.set(s,On(Rn.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Ln(e,r),4&t&&-1<Pn.indexOf(e)){for(;null!==i;){var s=ys(i);if(null!==s&&bn(s),null===(s=Gn(e,t,n,r))&&Bi(e,t,r,Wn,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var Wn=null;function Gn(e,t,n,r){if(Wn=null,null!==(e=gs(e=wt(r))))if(null===(t=jt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=zt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wn=e,null}function Qn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yt()){case Xt:return 1;case Jt:return 4;case Zt:case en:return 16;case tn:return 536870912;default:return 16}default:return 16}}var Yn=null,Xn=null,Jn=null;function Zn(){if(Jn)return Jn;var e,t,n=Xn,r=n.length,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return Jn=i.slice(e,1<t?1-t:void 0)}function er(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tr(){return!0}function nr(){return!1}function rr(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?tr:nr,this.isPropagationStopped=nr,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var ir,sr,or,ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lr=rr(ar),ur=Oe({},ar,{view:0,detail:0}),cr=rr(ur),hr=Oe({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&"mousemove"===e.type?(ir=e.screenX-or.screenX,sr=e.screenY-or.screenY):sr=ir=0,or=e),ir)},movementY:function(e){return"movementY"in e?e.movementY:sr}}),dr=rr(hr),fr=rr(Oe({},hr,{dataTransfer:0})),pr=rr(Oe({},ur,{relatedTarget:0})),mr=rr(Oe({},ar,{animationName:0,elapsedTime:0,pseudoElement:0})),gr=Oe({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yr=rr(gr),vr=rr(Oe({},ar,{data:0})),wr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},br={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Er(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=_r[e])&&!!t[e]}function Sr(){return Er}var kr=Oe({},ur,{key:function(e){if(e.key){var t=wr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=er(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?br[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return"keypress"===e.type?er(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?er(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tr=rr(kr),Ir=rr(Oe({},hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Cr=rr(Oe({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr})),xr=rr(Oe({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nr=Oe({},hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ar=rr(Nr),Rr=[9,13,27,32],Dr=le&&"CompositionEvent"in window,Pr=null;le&&"documentMode"in document&&(Pr=document.documentMode);var Lr=le&&"TextEvent"in window&&!Pr,Or=le&&(!Dr||Pr&&8<Pr&&11>=Pr),Mr=String.fromCharCode(32),Fr=!1;function Ur(e,t){switch(e){case"keyup":return-1!==Rr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var jr=!1;var zr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!zr[e.type]:"textarea"===t}function $r(e,t,n,r){kt(r),0<(t=qi(t,"onChange")).length&&(n=new lr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,Hr=null;function Kr(e){Mi(e,0)}function Wr(e){if(He(vs(e)))return e}function Gr(e,t){if("change"===e)return t}var Qr=!1;if(le){var Yr;if(le){var Xr="oninput"in document;if(!Xr){var Jr=document.createElement("div");Jr.setAttribute("oninput","return;"),Xr="function"==typeof Jr.oninput}Yr=Xr}else Yr=!1;Qr=Yr&&(!document.documentMode||9<document.documentMode)}function Zr(){qr&&(qr.detachEvent("onpropertychange",ei),Hr=qr=null)}function ei(e){if("value"===e.propertyName&&Wr(Hr)){var t=[];$r(t,Hr,e,wt(e)),Nt(Kr,t)}}function ti(e,t,n){"focusin"===e?(Zr(),Hr=n,(qr=t).attachEvent("onpropertychange",ei)):"focusout"===e&&Zr()}function ni(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Wr(Hr)}function ri(e,t){if("click"===e)return Wr(t)}function ii(e,t){if("input"===e||"change"===e)return Wr(t)}var si="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function oi(e,t){if(si(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ue.call(t,i)||!si(e[i],t[i]))return!1}return!0}function ai(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function li(e,t){var n,r=ai(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ai(r)}}function ui(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ui(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ci(){for(var e=window,t=Ke();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ke((e=t.contentWindow).document)}return t}function hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function di(e){var t=ci(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ui(n.ownerDocument.documentElement,n)){if(null!==r&&hi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=li(n,s);var o=li(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fi=le&&"documentMode"in document&&11>=document.documentMode,pi=null,mi=null,gi=null,yi=!1;function vi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yi||null==pi||pi!==Ke(r)||("selectionStart"in(r=pi)&&hi(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},gi&&oi(gi,r)||(gi=r,0<(r=qi(mi,"onSelect")).length&&(t=new lr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pi)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bi={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},_i={},Ei={};function Si(e){if(_i[e])return _i[e];if(!bi[e])return e;var t,n=bi[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ei)return _i[e]=n[t];return e}le&&(Ei=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);var ki=Si("animationend"),Ti=Si("animationiteration"),Ii=Si("animationstart"),Ci=Si("transitionend"),xi=new Map,Ni="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(e,t){xi.set(e,t),oe(t,[e])}for(var Ri=0;Ri<Ni.length;Ri++){var Di=Ni[Ri];Ai(Di.toLowerCase(),"on"+(Di[0].toUpperCase()+Di.slice(1)))}Ai(ki,"onAnimationEnd"),Ai(Ti,"onAnimationIteration"),Ai(Ii,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Ci,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Li=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function Oi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,l){if(Vt.apply(this,arguments),Lt){if(!Lt)throw Error(re(198));var u=Ot;Lt=!1,Ot=null,Mt||(Mt=!0,Ft=u)}}(r,t,void 0,e),e.currentTarget=null}function Mi(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Oi(i,a,u),s=l}else for(o=0;o<r.length;o++){if(l=(a=r[o]).instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Oi(i,a,u),s=l}}}if(Mt)throw e=Ft,Mt=!1,Ft=null,e}function Fi(e,t){var n=t[fs];void 0===n&&(n=t[fs]=new Set);var r=e+"__bubble";n.has(r)||(zi(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),zi(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[Vi]){e[Vi]=!0,ie.forEach(function(t){"selectionchange"!==t&&(Li.has(t)||Ui(t,!1,e),Ui(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vi]||(t[Vi]=!0,Ui("selectionchange",!1,t))}}function zi(e,t,n,r){switch(Qn(t)){case 1:var i=qn;break;case 4:i=Hn;break;default:i=Kn}n=i.bind(null,t,n,e),i=void 0,!Rt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,i){var s=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=gs(a)))return;if(5===(l=o.tag)||6===l){r=s=o;continue e}a=a.parentNode}}r=r.return}Nt(function(){var r=s,i=wt(n),o=[];e:{var a=xi.get(e);if(void 0!==a){var l=lr,u=e;switch(e){case"keypress":if(0===er(n))break e;case"keydown":case"keyup":l=Tr;break;case"focusin":u="focus",l=pr;break;case"focusout":u="blur",l=pr;break;case"beforeblur":case"afterblur":l=pr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=dr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=fr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Cr;break;case ki:case Ti:case Ii:l=mr;break;case Ci:l=xr;break;case"scroll":l=cr;break;case"wheel":l=Ar;break;case"copy":case"cut":case"paste":l=yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Ir}var c=!!(4&t),h=!c&&"scroll"===e,d=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=At(p,d))&&c.push($i(p,m,f)))),h)break;p=p.return}0<c.length&&(a=new l(a,u,null,n,i),o.push({event:a,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===vt||!(u=n.relatedTarget||n.fromElement)||!gs(u)&&!u[ds])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?gs(u):null)&&(u!==(h=jt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=dr,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Ir,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?a:vs(l),f=null==u?a:vs(u),(a=new c(m,p+"leave",l,n,i)).target=h,a.relatedTarget=f,m=null,gs(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=Hi(f))p++;for(f=0,m=d;m;m=Hi(m))f++;for(;0<p-f;)c=Hi(c),p--;for(;0<f-p;)d=Hi(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=Hi(c),d=Hi(d)}c=null}else c=null;null!==l&&Ki(o,a,l,c,!1),null!==u&&null!==h&&Ki(o,h,u,c,!0)}if("select"===(l=(a=r?vs(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=Gr;else if(Br(a))if(Qr)g=ii;else{g=ni;var y=ti}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=ri);switch(g&&(g=g(e,r))?$r(o,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&Je(a,"number",a.value)),y=r?vs(r):window,e){case"focusin":(Br(y)||"true"===y.contentEditable)&&(pi=y,mi=r,gi=null);break;case"focusout":gi=mi=pi=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,vi(o,n,i);break;case"selectionchange":if(fi)break;case"keydown":case"keyup":vi(o,n,i)}var v;if(Dr)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else jr?Ur(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Or&&"ko"!==n.locale&&(jr||"onCompositionStart"!==w?"onCompositionEnd"===w&&jr&&(v=Zn()):(Xn="value"in(Yn=i)?Yn.value:Yn.textContent,jr=!0)),0<(y=qi(r,w)).length&&(w=new vr(w,e,null,n,i),o.push({event:w,listeners:y}),v?w.data=v:null!==(v=Vr(n))&&(w.data=v))),(v=Lr?function(e,t){switch(e){case"compositionend":return Vr(t);case"keypress":return 32!==t.which?null:(Fr=!0,Mr);case"textInput":return(e=t.data)===Mr&&Fr?null:e;default:return null}}(e,n):function(e,t){if(jr)return"compositionend"===e||!Dr&&Ur(e,t)?(e=Zn(),Jn=Xn=Yn=null,jr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Or&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qi(r,"onBeforeInput")).length&&(i=new vr("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Mi(o,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=At(e,n))&&r.unshift($i(e,s,i)),null!=(s=At(e,t))&&r.push($i(e,s,i))),e=e.return}return r}function Hi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Ki(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==u&&(a=u,i?null!=(l=At(n,s))&&o.unshift($i(n,l,a)):i||null!=(l=At(n,s))&&o.push($i(n,l,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Wi=/\r\n?/g,Gi=/\u0000|\uFFFD/g;function Qi(e){return("string"==typeof e?e:""+e).replace(Wi,"\n").replace(Gi,"")}function Yi(e,t,n){if(t=Qi(t),Qi(e)!==t&&n)throw Error(re(425))}function Xi(){}var Ji=null,Zi=null;function es(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ts="function"==typeof setTimeout?setTimeout:void 0,ns="function"==typeof clearTimeout?clearTimeout:void 0,rs="function"==typeof Promise?Promise:void 0,is="function"==typeof queueMicrotask?queueMicrotask:void 0!==rs?function(e){return rs.resolve(null).then(e).catch(ss)}:ts;function ss(e){setTimeout(function(){throw e})}function os(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void zn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);zn(t)}function as(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ls(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var us=Math.random().toString(36).slice(2),cs="__reactFiber$"+us,hs="__reactProps$"+us,ds="__reactContainer$"+us,fs="__reactEvents$"+us,ps="__reactListeners$"+us,ms="__reactHandles$"+us;function gs(e){var t=e[cs];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ds]||n[cs]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ls(e);null!==e;){if(n=e[cs])return n;e=ls(e)}return t}n=(e=n).parentNode}return null}function ys(e){return!(e=e[cs]||e[ds])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function vs(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(re(33))}function ws(e){return e[hs]||null}var bs=[],_s=-1;function Es(e){return{current:e}}function Ss(e){0>_s||(e.current=bs[_s],bs[_s]=null,_s--)}function ks(e,t){_s++,bs[_s]=e.current,e.current=t}var Ts={},Is=Es(Ts),Cs=Es(!1),xs=Ts;function Ns(e,t){var n=e.type.contextTypes;if(!n)return Ts;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function As(e){return null!=(e=e.childContextTypes)}function Rs(){Ss(Cs),Ss(Is)}function Ds(e,t,n){if(Is.current!==Ts)throw Error(re(168));ks(Is,t),ks(Cs,n)}function Ps(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(re(108,ze(e)||"Unknown",i));return Oe({},n,r)}function Ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ts,xs=Is.current,ks(Is,e),ks(Cs,Cs.current),!0}function Os(e,t,n){var r=e.stateNode;if(!r)throw Error(re(169));n?(e=Ps(e,t,xs),r.__reactInternalMemoizedMergedChildContext=e,Ss(Cs),Ss(Is),ks(Is,e)):Ss(Cs),ks(Cs,n)}var Ms=null,Fs=!1,Us=!1;function Vs(e){null===Ms?Ms=[e]:Ms.push(e)}function js(){if(!Us&&null!==Ms){Us=!0;var e=0,t=vn;try{var n=Ms;for(vn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ms=null,Fs=!1}catch(i){throw null!==Ms&&(Ms=Ms.slice(e+1)),Ht(Xt,js),i}finally{vn=t,Us=!1}}return null}var zs=[],Bs=0,$s=null,qs=0,Hs=[],Ks=0,Ws=null,Gs=1,Qs="";function Ys(e,t){zs[Bs++]=qs,zs[Bs++]=$s,$s=e,qs=t}function Xs(e,t,n){Hs[Ks++]=Gs,Hs[Ks++]=Qs,Hs[Ks++]=Ws,Ws=e;var r=Gs;e=Qs;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gs=1<<32-sn(t)+i|n<<i|r,Qs=s+e}else Gs=1<<s|n<<i|r,Qs=e}function Js(e){null!==e.return&&(Ys(e,1),Xs(e,1,0))}function Zs(e){for(;e===$s;)$s=zs[--Bs],zs[Bs]=null,qs=zs[--Bs],zs[Bs]=null;for(;e===Ws;)Ws=Hs[--Ks],Hs[Ks]=null,Qs=Hs[--Ks],Hs[Ks]=null,Gs=Hs[--Ks],Hs[Ks]=null}var eo=null,to=null,no=!1,ro=null;function io(e,t){var n=Nc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,eo=e,to=as(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,eo=e,to=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ws?{id:Gs,overflow:Qs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,eo=e,to=null,!0);default:return!1}}function oo(e){return!(!(1&e.mode)||128&e.flags)}function ao(e){if(no){var t=to;if(t){var n=t;if(!so(e,t)){if(oo(e))throw Error(re(418));t=as(n.nextSibling);var r=eo;t&&so(e,t)?io(r,n):(e.flags=-4097&e.flags|2,no=!1,eo=e)}}else{if(oo(e))throw Error(re(418));e.flags=-4097&e.flags|2,no=!1,eo=e}}}function lo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;eo=e}function uo(e){if(e!==eo)return!1;if(!no)return lo(e),no=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!es(e.type,e.memoizedProps)),t&&(t=to)){if(oo(e))throw co(),Error(re(418));for(;t;)io(e,t),t=as(t.nextSibling)}if(lo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){to=as(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}to=null}}else to=eo?as(e.stateNode.nextSibling):null;return!0}function co(){for(var e=to;e;)e=as(e.nextSibling)}function ho(){to=eo=null,no=!1}function fo(e){null===ro?ro=[e]:ro.push(e)}var po=ve.ReactCurrentBatchConfig;function mo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(re(309));var r=n.stateNode}if(!r)throw Error(re(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(re(284));if(!n._owner)throw Error(re(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function vo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Oc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===_e?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===Ae&&yo(s)===t.type)?((r=i(t,n.props)).ref=mo(e,t,n),r.return=e,r):((r=Dc(n.type,n.key,n.props,null,e.mode,r)).ref=mo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Pc(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Oc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case we:return(n=Dc(t.type,t.key,t.props,null,e.mode,n)).ref=mo(e,null,t),n.return=e,n;case be:return(t=Mc(t,e.mode,n)).return=e,t;case Ae:return h(e,(0,t._init)(t._payload),n)}if(Ze(t)||Pe(t))return(t=Pc(t,e.mode,n,null)).return=e,t;go(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case we:return n.key===i?l(e,t,n,r):null;case be:return n.key===i?u(e,t,n,r):null;case Ae:return d(e,t,(i=n._init)(n._payload),r)}if(Ze(n)||Pe(n))return null!==i?null:c(e,t,n,r,null);go(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case we:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case be:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Ae:return f(e,t,n,(0,r._init)(r._payload),i)}if(Ze(r)||Pe(r))return c(t,e=e.get(n)||null,r,i,null);go(t,r)}return null}return function a(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===_e&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case we:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===_e){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Ae&&yo(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=mo(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===_e?((u=Pc(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=Dc(c.type,c.key,c.props,null,l.mode,p)).ref=mo(l,u,c),p.return=l,l=p)}return o(l);case be:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Mc(c,l.mode,p)).return=l,l=u}return o(l);case Ae:return a(l,u,(g=c._init)(c._payload),p)}if(Ze(c))return function(i,o,a,l){for(var u=null,c=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,a[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===a.length)return n(i,p),no&&Ys(i,m),u;if(null===p){for(;m<a.length;m++)null!==(p=h(i,a[m],l))&&(o=s(p,o,m),null===c?u=p:c.sibling=p,c=p);return no&&Ys(i,m),u}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach(function(e){return t(i,e)}),no&&Ys(i,m),u}(l,u,c,p);if(Pe(c))return function(i,o,a,l){var u=Pe(a);if("function"!=typeof u)throw Error(re(150));if(null==(a=u.call(a)))throw Error(re(151));for(var c=u=null,p=o,m=o=0,g=null,y=a.next();null!==p&&!y.done;m++,y=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=d(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),o=s(v,o,m),null===c?u=v:c.sibling=v,c=v,p=g}if(y.done)return n(i,p),no&&Ys(i,m),u;if(null===p){for(;!y.done;m++,y=a.next())null!==(y=h(i,y.value,l))&&(o=s(y,o,m),null===c?u=y:c.sibling=y,c=y);return no&&Ys(i,m),u}for(p=r(i,p);!y.done;m++,y=a.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach(function(e){return t(i,e)}),no&&Ys(i,m),u}(l,u,c,p);go(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=Oc(c,l.mode,p)).return=l,l=u),o(l)):n(l,u)}}var wo=vo(!0),bo=vo(!1),_o=Es(null),Eo=null,So=null,ko=null;function To(){ko=So=Eo=null}function Io(e){var t=_o.current;Ss(_o),e._currentValue=t}function Co(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xo(e,t){Eo=e,ko=So=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function No(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},null===So){if(null===Eo)throw Error(re(308));So=e,Eo.dependencies={lanes:0,firstContext:e}}else So=So.next=e;return t}var Ao=null;function Ro(e){null===Ao?Ao=[e]:Ao.push(e)}function Do(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,Po(e,r)}function Po(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Lo=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Uo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Iu){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Po(e,n)}return null===(i=r.interleaved)?(t.next=t,Ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,Po(e,n)}function Vo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yn(e,n)}}function jo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var i=e.updateQueue;Lo=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,u=l.next;l.next=null,null===o?s=u:o.next=u,o=l;var c=e.alternate;null!==c&&((a=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===a?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(o=0,c=u=l=null,a=s;;){var d=a.lane,f=a.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=Oe({},h,d);break e;case 2:Lo=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,o|=d;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(d=a).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Lu|=o,e.lanes=o,e.memoizedState=h}}function Bo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(re(191,i));i.call(r)}}}var $o={},qo=Es($o),Ho=Es($o),Ko=Es($o);function Wo(e){if(e===$o)throw Error(re(174));return e}function Go(e,t){switch(ks(Ko,t),ks(Ho,e),ks(qo,$o),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ot(null,"");break;default:t=ot(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ss(qo),ks(qo,t)}function Qo(){Ss(qo),Ss(Ho),Ss(Ko)}function Yo(e){Wo(Ko.current);var t=Wo(qo.current),n=ot(t,e.type);t!==n&&(ks(Ho,e),ks(qo,n))}function Xo(e){Ho.current===e&&(Ss(qo),Ss(Ho))}var Jo=Es(0);function Zo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=[];function ta(){for(var e=0;e<ea.length;e++)ea[e]._workInProgressVersionPrimary=null;ea.length=0}var na=ve.ReactCurrentDispatcher,ra=ve.ReactCurrentBatchConfig,ia=0,sa=null,oa=null,aa=null,la=!1,ua=!1,ca=0,ha=0;function da(){throw Error(re(321))}function fa(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!si(e[n],t[n]))return!1;return!0}function pa(e,t,n,r,i,s){if(ia=s,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=null===e||null===e.memoizedState?Xa:Ja,e=n(r,i),ua){s=0;do{if(ua=!1,ca=0,25<=s)throw Error(re(301));s+=1,aa=oa=null,t.updateQueue=null,na.current=Za,e=n(r,i)}while(ua)}if(na.current=Ya,t=null!==oa&&null!==oa.next,ia=0,aa=oa=sa=null,la=!1,t)throw Error(re(300));return e}function ma(){var e=0!==ca;return ca=0,e}function ga(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===aa?sa.memoizedState=aa=e:aa=aa.next=e,aa}function ya(){if(null===oa){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=oa.next;var t=null===aa?sa.memoizedState:aa.next;if(null!==t)aa=t,oa=e;else{if(null===e)throw Error(re(310));e={memoizedState:(oa=e).memoizedState,baseState:oa.baseState,baseQueue:oa.baseQueue,queue:oa.queue,next:null},null===aa?sa.memoizedState=aa=e:aa=aa.next=e}return aa}function va(e,t){return"function"==typeof t?t(e):t}function wa(e){var t=ya(),n=t.queue;if(null===n)throw Error(re(311));n.lastRenderedReducer=e;var r=oa,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ia&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(a=l=h,o=r):l=l.next=h,sa.lanes|=c,Lu|=c}u=u.next}while(null!==u&&u!==s);null===l?o=r:l.next=a,si(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,sa.lanes|=s,Lu|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=ya(),n=t.queue;if(null===n)throw Error(re(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);si(s,t.memoizedState)||(yl=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function _a(){}function Ea(e,t){var n=sa,r=ya(),i=t(),s=!si(r.memoizedState,i);if(s&&(r.memoizedState=i,yl=!0),r=r.queue,La(Ta.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==aa&&1&aa.memoizedState.tag){if(n.flags|=2048,Na(9,ka.bind(null,n,r,i,t),void 0,null),null===Cu)throw Error(re(349));30&ia||Sa(n,t,i)}return i}function Sa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ka(e,t,n,r){t.value=n,t.getSnapshot=r,Ia(t)&&Ca(e)}function Ta(e,t,n){return n(function(){Ia(t)&&Ca(e)})}function Ia(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!si(e,n)}catch(r){return!0}}function Ca(e){var t=Po(e,1);null!==t&&ec(t,e,1,-1)}function xa(e){var t=ga();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},t.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[t.memoizedState,e]}function Na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Aa(){return ya().memoizedState}function Ra(e,t,n,r){var i=ga();sa.flags|=e,i.memoizedState=Na(1|t,n,void 0,void 0===r?null:r)}function Da(e,t,n,r){var i=ya();r=void 0===r?null:r;var s=void 0;if(null!==oa){var o=oa.memoizedState;if(s=o.destroy,null!==r&&fa(r,o.deps))return void(i.memoizedState=Na(t,n,s,r))}sa.flags|=e,i.memoizedState=Na(1|t,n,s,r)}function Pa(e,t){return Ra(8390656,8,e,t)}function La(e,t){return Da(2048,8,e,t)}function Oa(e,t){return Da(4,2,e,t)}function Ma(e,t){return Da(4,4,e,t)}function Fa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ua(e,t,n){return n=null!=n?n.concat([e]):null,Da(4,4,Fa.bind(null,t,e),n)}function Va(){}function ja(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function za(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ba(e,t,n){return 21&ia?(si(n,t)||(n=pn(),sa.lanes|=n,Lu|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n)}function $a(e,t){var n=vn;vn=0!==n&&4>n?n:4,e(!0);var r=ra.transition;ra.transition={};try{e(!1),t()}finally{vn=n,ra.transition=r}}function qa(){return ya().memoizedState}function Ha(e,t,n){var r=Zu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wa(e))Ga(t,n);else if(null!==(n=Do(e,t,n,r))){ec(n,e,r,Ju()),Qa(n,t,r)}}function Ka(e,t,n){var r=Zu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wa(e))Ga(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,si(a,o)){var l=t.interleaved;return null===l?(i.next=i,Ro(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Do(e,t,i,r))&&(ec(n,e,r,i=Ju()),Qa(n,t,r))}}function Wa(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Ga(e,t){ua=la=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qa(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yn(e,n)}}var Ya={readContext:No,useCallback:da,useContext:da,useEffect:da,useImperativeHandle:da,useInsertionEffect:da,useLayoutEffect:da,useMemo:da,useReducer:da,useRef:da,useState:da,useDebugValue:da,useDeferredValue:da,useTransition:da,useMutableSource:da,useSyncExternalStore:da,useId:da,unstable_isNewReconciler:!1},Xa={readContext:No,useCallback:function(e,t){return ga().memoizedState=[e,void 0===t?null:t],e},useContext:No,useEffect:Pa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ra(4194308,4,Fa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var n=ga();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ga();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ha.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ga().memoizedState=e},useState:xa,useDebugValue:Va,useDeferredValue:function(e){return ga().memoizedState=e},useTransition:function(){var e=xa(!1),t=e[0];return e=$a.bind(null,e[1]),ga().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ga();if(no){if(void 0===n)throw Error(re(407));n=n()}else{if(n=t(),null===Cu)throw Error(re(349));30&ia||Sa(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Pa(Ta.bind(null,r,s,e),[e]),r.flags|=2048,Na(9,ka.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ga(),t=Cu.identifierPrefix;if(no){var n=Qs;t=":"+t+"R"+(n=(Gs&~(1<<32-sn(Gs)-1)).toString(32)+n),0<(n=ca++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ha++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ja={readContext:No,useCallback:ja,useContext:No,useEffect:La,useImperativeHandle:Ua,useInsertionEffect:Oa,useLayoutEffect:Ma,useMemo:za,useReducer:wa,useRef:Aa,useState:function(){return wa(va)},useDebugValue:Va,useDeferredValue:function(e){return Ba(ya(),oa.memoizedState,e)},useTransition:function(){return[wa(va)[0],ya().memoizedState]},useMutableSource:_a,useSyncExternalStore:Ea,useId:qa,unstable_isNewReconciler:!1},Za={readContext:No,useCallback:ja,useContext:No,useEffect:La,useImperativeHandle:Ua,useInsertionEffect:Oa,useLayoutEffect:Ma,useMemo:za,useReducer:ba,useRef:Aa,useState:function(){return ba(va)},useDebugValue:Va,useDeferredValue:function(e){var t=ya();return null===oa?t.memoizedState=e:Ba(t,oa.memoizedState,e)},useTransition:function(){return[ba(va)[0],ya().memoizedState]},useMutableSource:_a,useSyncExternalStore:Ea,useId:qa,unstable_isNewReconciler:!1};function el(e,t){if(e&&e.defaultProps){for(var n in t=Oe({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function tl(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Oe({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var nl={isMounted:function(e){return!!(e=e._reactInternals)&&jt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ju(),i=Zu(e),s=Fo(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Uo(e,s,i))&&(ec(t,e,i,r),Vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ju(),i=Zu(e),s=Fo(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Uo(e,s,i))&&(ec(t,e,i,r),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ju(),r=Zu(e),i=Fo(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Uo(e,i,r))&&(ec(t,e,r,n),Vo(t,e,r))}};function rl(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!oi(n,r)||!oi(i,s))}function il(e,t,n){var r=!1,i=Ts,s=t.contextType;return"object"==typeof s&&null!==s?s=No(s):(i=As(t)?xs:Is.current,s=(r=null!=(r=t.contextTypes))?Ns(e,i):Ts),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function sl(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function ol(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Oo(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=No(s):(s=As(t)?xs:Is.current,i.context=Ns(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(tl(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&nl.enqueueReplaceState(i,i.state,null),zo(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function al(e,t){try{var n="",r=t;do{n+=Ve(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cl="function"==typeof WeakMap?WeakMap:Map;function hl(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bu||(Bu=!0,$u=r),ul(0,t)},n}function dl(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ul(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){ul(0,t),"function"!=typeof r&&(null===qu?qu=new Set([this]):qu.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function fl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new cl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sc.bind(null,e,t,n),t.then(e,e))}function pl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ml(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Uo(n,t,1))),n.lanes|=1),e)}var gl=ve.ReactCurrentOwner,yl=!1;function vl(e,t,n,r){t.child=null===e?bo(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,i){n=n.render;var s=t.ref;return xo(t,i),r=pa(e,t,n,r,s,i),n=ma(),null===e||yl?(no&&n&&Js(t),t.flags|=1,vl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bl(e,t,i))}function bl(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Ac(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Dc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,_l(e,t,s,r,i))}if(s=e.child,0===(e.lanes&i)){var o=s.memoizedProps;if((n=null!==(n=n.compare)?n:oi)(o,r)&&e.ref===t.ref)return Bl(e,t,i)}return t.flags|=1,(e=Rc(s,r)).ref=t.ref,e.return=t,t.child=e}function _l(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(oi(s,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=s,0===(e.lanes&i))return t.lanes=e.lanes,Bl(e,t,i);131072&e.flags&&(yl=!0)}}return kl(e,t,n,r,i)}function El(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ks(Ru,Au),Au|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,ks(Ru,Au),Au|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ks(Ru,Au),Au|=n;else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,ks(Ru,Au),Au|=r;return vl(e,t,i,n),t.child}function Sl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,i){var s=As(n)?xs:Is.current;return s=Ns(t,s),xo(t,i),n=pa(e,t,n,r,s,i),r=ma(),null===e||yl?(no&&r&&Js(t),t.flags|=1,vl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bl(e,t,i))}function Tl(e,t,n,r,i){if(As(n)){var s=!0;Ls(t)}else s=!1;if(xo(t,i),null===t.stateNode)zl(e,t),il(t,n,r),ol(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=No(u):u=Ns(t,u=As(n)?xs:Is.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==u)&&sl(t,o,r,u),Lo=!1;var d=t.memoizedState;o.state=d,zo(t,r,o,i),l=t.memoizedState,a!==r||d!==l||Cs.current||Lo?("function"==typeof c&&(tl(t,n,c,r),l=t.memoizedState),(a=Lo||rl(t,n,a,r,d,l,u))?(h||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mo(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:el(t.type,a),o.props=u,h=t.pendingProps,d=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=No(l):l=Ns(t,l=As(n)?xs:Is.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==h||d!==l)&&sl(t,o,r,l),Lo=!1,d=t.memoizedState,o.state=d,zo(t,r,o,i);var p=t.memoizedState;a!==h||d!==p||Cs.current||Lo?("function"==typeof f&&(tl(t,n,f,r),p=t.memoizedState),(u=Lo||rl(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,s,i)}function Il(e,t,n,r,i,s){Sl(e,t);var o=!!(128&t.flags);if(!r&&!o)return i&&Os(t,n,!1),Bl(e,t,s);r=t.stateNode,gl.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=wo(t,e.child,null,s),t.child=wo(t,null,a,s)):vl(e,t,a,s),t.memoizedState=r.state,i&&Os(t,n,!0),t.child}function Cl(e){var t=e.stateNode;t.pendingContext?Ds(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ds(0,t.context,!1),Go(e,t.containerInfo)}function xl(e,t,n,r,i){return ho(),fo(i),t.flags|=256,vl(e,t,n,r),t.child}var Nl,Al,Rl,Dl,Pl={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ol(e,t,n){var r,i=t.pendingProps,s=Jo.current,o=!1,a=!!(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&!!(2&s)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),ks(Jo,1&s),null===e)return ao(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},1&i||null===o?o=Lc(a,i,0,null):(o.childLanes=0,o.pendingProps=a),e=Pc(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ll(n),t.memoizedState=Pl,e):Ml(t,a));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,o){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,o,r=ll(Error(re(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Lc({mode:"visible",children:r.children},i,0,null),(s=Pc(s,i,o,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,1&t.mode&&wo(t,e.child,null,o),t.child.memoizedState=Ll(o),t.memoizedState=Pl,s);if(!(1&t.mode))return Fl(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Fl(e,t,o,r=ll(s=Error(re(419)),r,void 0))}if(a=0!==(o&e.childLanes),yl||a){if(null!==(r=Cu)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|o))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Po(e,i),ec(r,e,i,-1))}return fc(),Fl(e,t,o,r=ll(Error(re(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,to=as(i.nextSibling),eo=t,no=!0,ro=null,null!==e&&(Hs[Ks++]=Gs,Hs[Ks++]=Qs,Hs[Ks++]=Ws,Gs=e.id,Qs=e.overflow,Ws=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,s,n);if(o){o=i.fallback,a=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&a||t.child===s?(i=Rc(s,l)).subtreeFlags=14680064&s.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?o=Rc(r,o):(o=Pc(o,a,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=null===(a=e.child.memoizedState)?Ll(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Pl,i}return e=(o=e.child).sibling,i=Rc(o,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ml(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&fo(r),wo(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ul(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Co(e.return,t,n)}function Vl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(vl(e,t,r.children,n),2&(r=Jo.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ul(e,n,t);else if(19===e.tag)Ul(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ks(Jo,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Zo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Zo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vl(t,!0,n,null,s);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function zl(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Lu|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(re(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function $l(e,t){if(!no)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hl(e,t,n){var r=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(t),null;case 1:case 17:return As(t.type)&&Rs(),ql(t),null;case 3:return r=t.stateNode,Qo(),Ss(Cs),Ss(Is),ta(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(uo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ro&&(ic(ro),ro=null))),Al(e,t),ql(t),null;case 5:Xo(t);var i=Wo(Ko.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(re(166));return ql(t),null}if(e=Wo(qo.current),uo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[cs]=t,r[hs]=s,e=!!(1&t.mode),n){case"dialog":Fi("cancel",r),Fi("close",r);break;case"iframe":case"object":case"embed":Fi("load",r);break;case"video":case"audio":for(i=0;i<Pi.length;i++)Fi(Pi[i],r);break;case"source":Fi("error",r);break;case"img":case"image":case"link":Fi("error",r),Fi("load",r);break;case"details":Fi("toggle",r);break;case"input":Ge(r,s),Fi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fi("invalid",r);break;case"textarea":nt(r,s),Fi("invalid",r)}for(var o in gt(n,s),i=null,s)if(s.hasOwnProperty(o)){var a=s[o];"children"===o?"string"==typeof a?r.textContent!==a&&(!0!==s.suppressHydrationWarning&&Yi(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==s.suppressHydrationWarning&&Yi(r.textContent,a,e),i=["children",""+a]):se.hasOwnProperty(o)&&null!=a&&"onScroll"===o&&Fi("scroll",r)}switch(n){case"input":qe(r),Xe(r,s,!0);break;case"textarea":qe(r),it(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Xi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=st(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[cs]=t,e[hs]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(o=yt(n,r),n){case"dialog":Fi("cancel",e),Fi("close",e),i=r;break;case"iframe":case"object":case"embed":Fi("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pi.length;i++)Fi(Pi[i],e);i=r;break;case"source":Fi("error",e),i=r;break;case"img":case"image":case"link":Fi("error",e),Fi("load",e),i=r;break;case"details":Fi("toggle",e),i=r;break;case"input":Ge(e,r),i=We(e,r),Fi("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Fi("invalid",e);break;case"textarea":nt(e,r),i=tt(e,r),Fi("invalid",e)}for(s in gt(n,i),a=i)if(a.hasOwnProperty(s)){var l=a[s];"style"===s?pt(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&ut(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&ct(e,l):"number"==typeof l&&ct(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(se.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Fi("scroll",e):null!=l&&ye(e,s,l,o))}switch(n){case"input":qe(e),Xe(e,r,!1);break;case"textarea":qe(e),it(e);break;case"option":null!=r.value&&e.setAttribute("value",""+Be(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?et(e,!!r.multiple,s,!1):null!=r.defaultValue&&et(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ql(t),null;case 6:if(e&&null!=t.stateNode)Dl(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(re(166));if(n=Wo(Ko.current),Wo(qo.current),uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[cs]=t,(s=r.nodeValue!==n)&&null!==(e=eo))switch(e.tag){case 3:Yi(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Yi(r.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[cs]=t,t.stateNode=r}return ql(t),null;case 13:if(Ss(Jo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(no&&null!==to&&1&t.mode&&!(128&t.flags))co(),ho(),t.flags|=98560,s=!1;else if(s=uo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(re(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(re(317));s[cs]=t}else ho(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),s=!1}else null!==ro&&(ic(ro),ro=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Jo.current?0===Du&&(Du=3):fc())),null!==t.updateQueue&&(t.flags|=4),ql(t),null);case 4:return Qo(),Al(e,t),null===e&&ji(t.stateNode.containerInfo),ql(t),null;case 10:return Io(t.type._context),ql(t),null;case 19:if(Ss(Jo),null===(s=t.memoizedState))return ql(t),null;if(r=!!(128&t.flags),null===(o=s.rendering))if(r)$l(s,!1);else{if(0!==Du||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=Zo(e))){for(t.flags|=128,$l(s,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ks(Jo,1&Jo.current|2),t.child}e=e.sibling}null!==s.tail&&Qt()>ju&&(t.flags|=128,r=!0,$l(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Zo(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),$l(s,!0),null===s.tail&&"hidden"===s.tailMode&&!o.alternate&&!no)return ql(t),null}else 2*Qt()-s.renderingStartTime>ju&&1073741824!==n&&(t.flags|=128,r=!0,$l(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=s.last)?n.sibling=o:t.child=o,s.last=o)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Qt(),t.sibling=null,n=Jo.current,ks(Jo,r?1&n|2:1&n),t):(ql(t),null);case 22:case 23:return uc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Au)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null;case 24:case 25:return null}throw Error(re(156,t.tag))}function Kl(e,t){switch(Zs(t),t.tag){case 1:return As(t.type)&&Rs(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qo(),Ss(Cs),Ss(Is),ta(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xo(t),null;case 13:if(Ss(Jo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(re(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ss(Jo),null;case 4:return Qo(),null;case 10:return Io(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Al=function(){},Rl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wo(qo.current);var s,o=null;switch(n){case"input":i=We(e,i),r=We(e,r),o=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),o=[];break;case"textarea":i=tt(e,i),r=tt(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Xi)}for(u in gt(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(se.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(null!=l||null!=a))if("style"===u)if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(se.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Fi("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Dl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Wl=!1,Gl=!1,Ql="function"==typeof WeakSet?WeakSet:Set,Yl=null;function Xl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Ec(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){Ec(e,t,r)}}var Zl=!1;function eu(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&Jl(t,n,s)}i=i.next}while(i!==r)}}function tu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nu(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ru(e){var t=e.alternate;null!==t&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[cs],delete t[hs],delete t[fs],delete t[ps],delete t[ms])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function iu(e){return 5===e.tag||3===e.tag||4===e.tag}function su(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ou(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Xi));else if(4!==r&&null!==(e=e.child))for(ou(e,t,n),e=e.sibling;null!==e;)ou(e,t,n),e=e.sibling}function au(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(au(e,t,n),e=e.sibling;null!==e;)au(e,t,n),e=e.sibling}var lu=null,uu=!1;function cu(e,t,n){for(n=n.child;null!==n;)hu(e,t,n),n=n.sibling}function hu(e,t,n){if(rn&&"function"==typeof rn.onCommitFiberUnmount)try{rn.onCommitFiberUnmount(nn,n)}catch(a){}switch(n.tag){case 5:Gl||Xl(n,t);case 6:var r=lu,i=uu;lu=null,cu(e,t,n),uu=i,null!==(lu=r)&&(uu?(e=lu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):lu.removeChild(n.stateNode));break;case 18:null!==lu&&(uu?(e=lu,n=n.stateNode,8===e.nodeType?os(e.parentNode,n):1===e.nodeType&&os(e,n),zn(e)):os(lu,n.stateNode));break;case 4:r=lu,i=uu,lu=n.stateNode.containerInfo,uu=!0,cu(e,t,n),lu=r,uu=i;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,void 0!==o&&(2&s||4&s)&&Jl(n,t,o),i=i.next}while(i!==r)}cu(e,t,n);break;case 1:if(!Gl&&(Xl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ec(n,t,a)}cu(e,t,n);break;case 21:cu(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,cu(e,t,n),Gl=r):cu(e,t,n);break;default:cu(e,t,n)}}function du(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ql),t.forEach(function(t){var r=Ic.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function fu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:lu=a.stateNode,uu=!1;break e;case 3:case 4:lu=a.stateNode.containerInfo,uu=!0;break e}a=a.return}if(null===lu)throw Error(re(160));hu(s,o,i),lu=null,uu=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(u){Ec(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)pu(t,e),t=t.sibling}function pu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fu(t,e),mu(e),4&r){try{eu(3,e,e.return),tu(3,e)}catch(m){Ec(e,e.return,m)}try{eu(5,e,e.return)}catch(m){Ec(e,e.return,m)}}break;case 1:fu(t,e),mu(e),512&r&&null!==n&&Xl(n,n.return);break;case 5:if(fu(t,e),mu(e),512&r&&null!==n&&Xl(n,n.return),32&e.flags){var i=e.stateNode;try{ct(i,"")}catch(m){Ec(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===s.type&&null!=s.name&&Qe(i,s),yt(a,o);var u=yt(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];"style"===c?pt(i,h):"dangerouslySetInnerHTML"===c?ut(i,h):"children"===c?ct(i,h):ye(i,c,h,u)}switch(a){case"input":Ye(i,s);break;case"textarea":rt(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?et(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?et(i,!!s.multiple,s.defaultValue,!0):et(i,!!s.multiple,s.multiple?[]:"",!1))}i[hs]=s}catch(m){Ec(e,e.return,m)}}break;case 6:if(fu(t,e),mu(e),4&r){if(null===e.stateNode)throw Error(re(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(m){Ec(e,e.return,m)}}break;case 3:if(fu(t,e),mu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(m){Ec(e,e.return,m)}break;case 4:default:fu(t,e),mu(e);break;case 13:fu(t,e),mu(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Vu=Qt())),4&r&&du(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(u=Gl)||c,fu(t,e),Gl=u):fu(t,e),mu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Yl=e,c=e.child;null!==c;){for(h=Yl=c;null!==Yl;){switch(f=(d=Yl).child,d.tag){case 0:case 11:case 14:case 15:eu(4,d,d.return);break;case 1:Xl(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(m){Ec(r,n,m)}}break;case 5:Xl(d,d.return);break;case 22:if(null!==d.memoizedState){wu(h);continue}}null!==f?(f.return=d,Yl=f):wu(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,u?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(a=h.stateNode,o=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=ft("display",o))}catch(m){Ec(e,e.return,m)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){Ec(e,e.return,m)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:fu(t,e),mu(e),4&r&&du(e);case 21:}}function mu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(iu(n)){var r=n;break e}n=n.return}throw Error(re(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(ct(i,""),r.flags&=-33),au(e,su(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;ou(e,su(e),s);break;default:throw Error(re(161))}}catch(o){Ec(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gu(e,t,n){Yl=e,yu(e)}function yu(e,t,n){for(var r=!!(1&e.mode);null!==Yl;){var i=Yl,s=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Wl;if(!o){var a=i.alternate,l=null!==a&&null!==a.memoizedState||Gl;a=Wl;var u=Gl;if(Wl=o,(Gl=l)&&!u)for(Yl=i;null!==Yl;)l=(o=Yl).child,22===o.tag&&null!==o.memoizedState?bu(i):null!==l?(l.return=o,Yl=l):bu(i);for(;null!==s;)Yl=s,yu(s),s=s.sibling;Yl=i,Wl=a,Gl=u}vu(e)}else 8772&i.subtreeFlags&&null!==s?(s.return=i,Yl=s):vu(e)}}function vu(e){for(;null!==Yl;){var t=Yl;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Gl||tu(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:el(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Bo(t,s,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Bo(t,o,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&zn(h)}}}break;default:throw Error(re(163))}Gl||512&t.flags&&nu(t)}catch(d){Ec(t,t.return,d)}}if(t===e){Yl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Yl=n;break}Yl=t.return}}function wu(e){for(;null!==Yl;){var t=Yl;if(t===e){Yl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Yl=n;break}Yl=t.return}}function bu(e){for(;null!==Yl;){var t=Yl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tu(4,t)}catch(l){Ec(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Ec(t,i,l)}}var s=t.return;try{nu(t)}catch(l){Ec(t,s,l)}break;case 5:var o=t.return;try{nu(t)}catch(l){Ec(t,o,l)}}}catch(l){Ec(t,t.return,l)}if(t===e){Yl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,Yl=a;break}Yl=t.return}}var _u,Eu=Math.ceil,Su=ve.ReactCurrentDispatcher,ku=ve.ReactCurrentOwner,Tu=ve.ReactCurrentBatchConfig,Iu=0,Cu=null,xu=null,Nu=0,Au=0,Ru=Es(0),Du=0,Pu=null,Lu=0,Ou=0,Mu=0,Fu=null,Uu=null,Vu=0,ju=1/0,zu=null,Bu=!1,$u=null,qu=null,Hu=!1,Ku=null,Wu=0,Gu=0,Qu=null,Yu=-1,Xu=0;function Ju(){return 6&Iu?Qt():-1!==Yu?Yu:Yu=Qt()}function Zu(e){return 1&e.mode?2&Iu&&0!==Nu?Nu&-Nu:null!==po.transition?(0===Xu&&(Xu=pn()),Xu):0!==(e=vn)?e:e=void 0===(e=window.event)?16:Qn(e.type):1}function ec(e,t,n,r){if(50<Gu)throw Gu=0,Qu=null,Error(re(185));gn(e,n,r),2&Iu&&e===Cu||(e===Cu&&(!(2&Iu)&&(Ou|=n),4===Du&&sc(e,Nu)),tc(e,r),1===n&&0===Iu&&!(1&t.mode)&&(ju=Qt()+500,Fs&&js()))}function tc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];-1===l?0!==(a&n)&&0===(a&r)||(i[o]=dn(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}(e,t);var r=hn(e,e===Cu?Nu:0);if(0===r)null!==n&&Kt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Kt(n),1===t)0===e.tag?function(e){Fs=!0,Vs(e)}(oc.bind(null,e)):Vs(oc.bind(null,e)),is(function(){!(6&Iu)&&js()}),n=null;else{switch(wn(r)){case 1:n=Xt;break;case 4:n=Jt;break;case 16:default:n=Zt;break;case 536870912:n=tn}n=Cc(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if(Yu=-1,Xu=0,6&Iu)throw Error(re(327));var n=e.callbackNode;if(bc()&&e.callbackNode!==n)return null;var r=hn(e,e===Cu?Nu:0);if(0===r)return null;if(30&r||0!==(r&e.expiredLanes)||t)t=pc(e,r);else{t=r;var i=Iu;Iu|=2;var s=dc();for(Cu===e&&Nu===t||(zu=null,ju=Qt()+500,cc(e,t));;)try{gc();break}catch(a){hc(e,a)}To(),Su.current=s,Iu=i,null!==xu?t=0:(Cu=null,Nu=0,t=Du)}if(0!==t){if(2===t&&(0!==(i=fn(e))&&(r=i,t=rc(e,i))),1===t)throw n=Pu,cc(e,0),sc(e,r),tc(e,Qt()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!si(s(),i))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=pc(e,r),2===t&&(s=fn(e),0!==s&&(r=s,t=rc(e,s))),1!==t)))throw n=Pu,cc(e,0),sc(e,r),tc(e,Qt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(re(345));case 2:case 5:wc(e,Uu,zu);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Vu+500-Qt())){if(0!==hn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){Ju(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ts(wc.bind(null,e,Uu,zu),t);break}wc(e,Uu,zu);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,(o=t[o])>i&&(i=o),r&=~s}if(r=i,10<(r=(120>(r=Qt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Eu(r/1960))-r)){e.timeoutHandle=ts(wc.bind(null,e,Uu,zu),r);break}wc(e,Uu,zu);break;default:throw Error(re(329))}}}return tc(e,Qt()),e.callbackNode===n?nc.bind(null,e):null}function rc(e,t){var n=Fu;return e.current.memoizedState.isDehydrated&&(cc(e,t).flags|=256),2!==(e=pc(e,t))&&(t=Uu,Uu=n,null!==t&&ic(t)),e}function ic(e){null===Uu?Uu=e:Uu.push.apply(Uu,e)}function sc(e,t){for(t&=~Mu,t&=~Ou,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function oc(e){if(6&Iu)throw Error(re(327));bc();var t=hn(e,0);if(!(1&t))return tc(e,Qt()),null;var n=pc(e,t);if(0!==e.tag&&2===n){var r=fn(e);0!==r&&(t=r,n=rc(e,r))}if(1===n)throw n=Pu,cc(e,0),sc(e,t),tc(e,Qt()),n;if(6===n)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Uu,zu),tc(e,Qt()),null}function ac(e,t){var n=Iu;Iu|=1;try{return e(t)}finally{0===(Iu=n)&&(ju=Qt()+500,Fs&&js())}}function lc(e){null!==Ku&&0===Ku.tag&&!(6&Iu)&&bc();var t=Iu;Iu|=1;var n=Tu.transition,r=vn;try{if(Tu.transition=null,vn=1,e)return e()}finally{vn=r,Tu.transition=n,!(6&(Iu=t))&&js()}}function uc(){Au=Ru.current,Ss(Ru)}function cc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ns(n)),null!==xu)for(n=xu.return;null!==n;){var r=n;switch(Zs(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Rs();break;case 3:Qo(),Ss(Cs),Ss(Is),ta();break;case 5:Xo(r);break;case 4:Qo();break;case 13:case 19:Ss(Jo);break;case 10:Io(r.type._context);break;case 22:case 23:uc()}n=n.return}if(Cu=e,xu=e=Rc(e.current,null),Nu=Au=t,Du=0,Pu=null,Mu=Ou=Lu=0,Uu=Fu=null,null!==Ao){for(t=0;t<Ao.length;t++)if(null!==(r=(n=Ao[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var o=s.next;s.next=i,r.next=o}n.pending=r}Ao=null}return e}function hc(e,t){for(;;){var n=xu;try{if(To(),na.current=Ya,la){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}la=!1}if(ia=0,aa=oa=sa=null,ua=!1,ca=0,ku.current=null,null===n||null===n.return){Du=1,Pu=t,xu=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Nu,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=a,h=c.tag;if(!(1&c.mode||0!==h&&11!==h&&15!==h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=pl(o);if(null!==f){f.flags&=-257,ml(f,o,a,0,t),1&f.mode&&fl(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){fl(s,u,t),fc();break e}l=Error(re(426))}else if(no&&1&a.mode){var g=pl(o);if(null!==g){!(65536&g.flags)&&(g.flags|=256),ml(g,o,a,0,t),fo(al(l,a));break e}}s=l=al(l,a),4!==Du&&(Du=2),null===Fu?Fu=[s]:Fu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,jo(s,hl(0,l,t));break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(128&s.flags||"function"!=typeof y.getDerivedStateFromError&&(null===v||"function"!=typeof v.componentDidCatch||null!==qu&&qu.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t,jo(s,dl(s,a,t));break e}}s=s.return}while(null!==s)}vc(n)}catch(w){t=w,xu===n&&null!==n&&(xu=n=n.return);continue}break}}function dc(){var e=Su.current;return Su.current=Ya,null===e?Ya:e}function fc(){0!==Du&&3!==Du&&2!==Du||(Du=4),null===Cu||!(268435455&Lu)&&!(268435455&Ou)||sc(Cu,Nu)}function pc(e,t){var n=Iu;Iu|=2;var r=dc();for(Cu===e&&Nu===t||(zu=null,cc(e,t));;)try{mc();break}catch(i){hc(e,i)}if(To(),Iu=n,Su.current=r,null!==xu)throw Error(re(261));return Cu=null,Nu=0,Du}function mc(){for(;null!==xu;)yc(xu)}function gc(){for(;null!==xu&&!Wt();)yc(xu)}function yc(e){var t=_u(e.alternate,e,Au);e.memoizedProps=e.pendingProps,null===t?vc(e):xu=t,ku.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Kl(n,t)))return n.flags&=32767,void(xu=n);if(null===e)return Du=6,void(xu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Hl(n,t,Au)))return void(xu=n);if(null!==(t=t.sibling))return void(xu=t);xu=t=e}while(null!==t);0===Du&&(Du=5)}function wc(e,t,n){var r=vn,i=Tu.transition;try{Tu.transition=null,vn=1,function(e,t,n,r){do{bc()}while(null!==Ku);if(6&Iu)throw Error(re(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Cu&&(xu=Cu=null,Nu=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Hu||(Hu=!0,Cc(Zt,function(){return bc(),null})),s=!!(15990&n.flags),!!(15990&n.subtreeFlags)||s){s=Tu.transition,Tu.transition=null;var o=vn;vn=1;var a=Iu;Iu|=4,ku.current=null,function(e,t){if(Ji=$n,hi(e=ci())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(b){n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(a=o+i),h!==s||0!==r&&3!==h.nodeType||(l=o+r),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zi={focusedElem:e,selectionRange:n},$n=!1,Yl=t;null!==Yl;)if(e=(t=Yl).child,1028&t.subtreeFlags&&null!==e)e.return=t,Yl=e;else for(;null!==Yl;){t=Yl;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:el(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(re(163))}}catch(b){Ec(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Yl=e;break}Yl=t.return}p=Zl,Zl=!1}(e,n),pu(n,e),di(Zi),$n=!!Ji,Zi=Ji=null,e.current=n,gu(n),Gt(),Iu=a,vn=o,Tu.transition=s}else e.current=n;if(Hu&&(Hu=!1,Ku=e,Wu=i),s=e.pendingLanes,0===s&&(qu=null),function(e){if(rn&&"function"==typeof rn.onCommitFiberRoot)try{rn.onCommitFiberRoot(nn,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),tc(e,Qt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bu)throw Bu=!1,e=$u,$u=null,e;!!(1&Wu)&&0!==e.tag&&bc(),s=e.pendingLanes,1&s?e===Qu?Gu++:(Gu=0,Qu=e):Gu=0,js()}(e,t,n,r)}finally{Tu.transition=i,vn=r}return null}function bc(){if(null!==Ku){var e=wn(Wu),t=Tu.transition,n=vn;try{if(Tu.transition=null,vn=16>e?16:e,null===Ku)var r=!1;else{if(e=Ku,Ku=null,Wu=0,6&Iu)throw Error(re(331));var i=Iu;for(Iu|=4,Yl=e.current;null!==Yl;){var s=Yl,o=s.child;if(16&Yl.flags){var a=s.deletions;if(null!==a){for(var l=0;l<a.length;l++){var u=a[l];for(Yl=u;null!==Yl;){var c=Yl;switch(c.tag){case 0:case 11:case 15:eu(8,c,s)}var h=c.child;if(null!==h)h.return=c,Yl=h;else for(;null!==Yl;){var d=(c=Yl).sibling,f=c.return;if(ru(c),c===u){Yl=null;break}if(null!==d){d.return=f,Yl=d;break}Yl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Yl=s}}if(2064&s.subtreeFlags&&null!==o)o.return=s,Yl=o;else e:for(;null!==Yl;){if(2048&(s=Yl).flags)switch(s.tag){case 0:case 11:case 15:eu(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,Yl=y;break e}Yl=s.return}}var v=e.current;for(Yl=v;null!==Yl;){var w=(o=Yl).child;if(2064&o.subtreeFlags&&null!==w)w.return=o,Yl=w;else e:for(o=v;null!==Yl;){if(2048&(a=Yl).flags)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(_){Ec(a,a.return,_)}if(a===o){Yl=null;break e}var b=a.sibling;if(null!==b){b.return=a.return,Yl=b;break e}Yl=a.return}}if(Iu=i,js(),rn&&"function"==typeof rn.onPostCommitFiberRoot)try{rn.onPostCommitFiberRoot(nn,e)}catch(_){}r=!0}return r}finally{vn=n,Tu.transition=t}}return!1}function _c(e,t,n){e=Uo(e,t=hl(0,t=al(n,t),1),1),t=Ju(),null!==e&&(gn(e,1,t),tc(e,t))}function Ec(e,t,n){if(3===e.tag)_c(e,e,n);else for(;null!==t;){if(3===t.tag){_c(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===qu||!qu.has(r))){t=Uo(t,e=dl(t,e=al(n,e),1),1),e=Ju(),null!==t&&(gn(t,1,e),tc(t,e));break}}t=t.return}}function Sc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Ju(),e.pingedLanes|=e.suspendedLanes&n,Cu===e&&(Nu&n)===n&&(4===Du||3===Du&&(130023424&Nu)===Nu&&500>Qt()-Vu?cc(e,0):Mu|=n),tc(e,t)}function kc(e,t){0===t&&(1&e.mode?(t=un,!(130023424&(un<<=1))&&(un=4194304)):t=1);var n=Ju();null!==(e=Po(e,t))&&(gn(e,t,n),tc(e,n))}function Tc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),kc(e,n)}function Ic(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(re(314))}null!==r&&r.delete(t),kc(e,n)}function Cc(e,t){return Ht(e,t)}function xc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nc(e,t,n,r){return new xc(e,t,n,r)}function Ac(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=Nc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dc(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)Ac(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case _e:return Pc(n.children,i,s,t);case Ee:o=8,i|=8;break;case Se:return(e=Nc(12,n,t,2|i)).elementType=Se,e.lanes=s,e;case Ce:return(e=Nc(13,n,t,i)).elementType=Ce,e.lanes=s,e;case xe:return(e=Nc(19,n,t,i)).elementType=xe,e.lanes=s,e;case Re:return Lc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case ke:o=10;break e;case Te:o=9;break e;case Ie:o=11;break e;case Ne:o=14;break e;case Ae:o=16,r=null;break e}throw Error(re(130,null==e?e:typeof e,""))}return(t=Nc(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Pc(e,t,n,r){return(e=Nc(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=Nc(22,e,r,t)).elementType=Re,e.lanes=n,e.stateNode={isHidden:!1},e}function Oc(e,t,n){return(e=Nc(6,e,null,t)).lanes=n,e}function Mc(e,t,n){return(t=Nc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,n,r,i,s,o,a,l){return e=new Fc(e,t,n,a,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Nc(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(s),e}function Vc(e){if(!e)return Ts;e:{if(jt(e=e._reactInternals)!==e||1!==e.tag)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(As(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(re(171))}if(1===e.tag){var n=e.type;if(As(n))return Ps(e,n,t)}return t}function jc(e,t,n,r,i,s,o,a,l){return(e=Uc(n,r,!0,e,0,s,0,a,l)).context=Vc(null),n=e.current,(s=Fo(r=Ju(),i=Zu(n))).callback=null!=t?t:null,Uo(n,s,i),e.current.lanes=i,gn(e,i,r),tc(e,r),e}function zc(e,t,n,r){var i=t.current,s=Ju(),o=Zu(i);return n=Vc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Uo(i,t,o))&&(ec(e,i,o,s),Vo(e,i,o)),o}function Bc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function $c(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qc(e,t){$c(e,t),(e=e.alternate)&&$c(e,t)}_u=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Cs.current)yl=!0;else{if(0===(e.lanes&n)&&!(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Cl(t),ho();break;case 5:Yo(t);break;case 1:As(t.type)&&Ls(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ks(_o,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ks(Jo,1&Jo.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ol(e,t,n):(ks(Jo,1&Jo.current),null!==(e=Bl(e,t,n))?e.sibling:null);ks(Jo,1&Jo.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return jl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),ks(Jo,Jo.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Bl(e,t,n)}(e,t,n);yl=!!(131072&e.flags)}else yl=!1,no&&1048576&t.flags&&Xs(t,qs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zl(e,t),e=t.pendingProps;var i=Ns(t,Is.current);xo(t,n),i=pa(null,t,r,e,i,n);var s=ma();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,As(r)?(s=!0,Ls(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Oo(t),i.updater=nl,t.stateNode=i,i._reactInternals=t,ol(t,r,e,n),t=Il(null,t,r,!0,s,n)):(t.tag=0,no&&s&&Js(t),vl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Ac(e)?1:0;if(null!=e){if((e=e.$$typeof)===Ie)return 11;if(e===Ne)return 14}return 2}(r),e=el(r,e),i){case 0:t=kl(null,t,r,e,n);break e;case 1:t=Tl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=bl(null,t,r,el(r.type,e),n);break e}throw Error(re(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,kl(e,t,r,i=t.elementType===r?i:el(r,i),n);case 1:return r=t.type,i=t.pendingProps,Tl(e,t,r,i=t.elementType===r?i:el(r,i),n);case 3:e:{if(Cl(t),null===e)throw Error(re(387));r=t.pendingProps,i=(s=t.memoizedState).element,Mo(e,t),zo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=xl(e,t,r,n,i=al(Error(re(423)),t));break e}if(r!==i){t=xl(e,t,r,n,i=al(Error(re(424)),t));break e}for(to=as(t.stateNode.containerInfo.firstChild),eo=t,no=!0,ro=null,n=bo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===i){t=Bl(e,t,n);break e}vl(e,t,r,n)}t=t.child}return t;case 5:return Yo(t),null===e&&ao(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,es(r,i)?o=null:null!==s&&es(r,s)&&(t.flags|=32),Sl(e,t),vl(e,t,o,n),t.child;case 6:return null===e&&ao(t),null;case 13:return Ol(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):vl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wl(e,t,r,i=t.elementType===r?i:el(r,i),n);case 7:return vl(e,t,t.pendingProps,n),t.child;case 8:case 12:return vl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ks(_o,r._currentValue),r._currentValue=o,null!==s)if(si(s.value,o)){if(s.children===i.children&&!Cs.current){t=Bl(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var a=s.dependencies;if(null!==a){o=s.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Fo(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Co(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(re(341));o.lanes|=n,null!==(a=o.alternate)&&(a.lanes|=n),Co(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}vl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xo(t,n),r=r(i=No(i)),t.flags|=1,vl(e,t,r,n),t.child;case 14:return i=el(r=t.type,t.pendingProps),bl(e,t,r,i=el(r.type,i),n);case 15:return _l(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:el(r,i),zl(e,t),t.tag=1,As(r)?(e=!0,Ls(t)):e=!1,xo(t,n),il(t,r,i),ol(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return jl(e,t,n);case 22:return El(e,t,n)}throw Error(re(156,t.tag))};var Hc="function"==typeof reportError?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}function Wc(e){this._internalRoot=e}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Yc(){}function Xc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if("function"==typeof i){var a=i;i=function(){var e=Bc(o);a.call(e)}}zc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=Bc(o);s.call(e)}}var o=jc(t,r,e,0,null,!1,0,"",Yc);return e._reactRootContainer=o,e[ds]=o.current,ji(8===e.nodeType?e.parentNode:e),lc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=Bc(l);a.call(e)}}var l=Uc(e,0,!1,null,0,!1,0,"",Yc);return e._reactRootContainer=l,e[ds]=l.current,ji(8===e.nodeType?e.parentNode:e),lc(function(){zc(t,l,n,r)}),l}(n,t,e,i,r);return Bc(o)}Wc.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(re(409));zc(e,t,null,null)},Wc.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lc(function(){zc(null,e,null,null)}),t[ds]=null}},Wc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&0!==t&&t<Dn[n].priority;n++);Dn.splice(n,0,e),0===n&&Mn(e)}},bn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cn(t.pendingLanes);0!==n&&(yn(t,1|n),tc(t,Qt()),!(6&Iu)&&(ju=Qt()+500,js()))}break;case 13:lc(function(){var t=Po(e,1);if(null!==t){var n=Ju();ec(t,e,1,n)}}),qc(e,1)}},_n=function(e){if(13===e.tag){var t=Po(e,134217728);if(null!==t)ec(t,e,134217728,Ju());qc(e,134217728)}},En=function(e){if(13===e.tag){var t=Zu(e),n=Po(e,t);if(null!==n)ec(n,e,t,Ju());qc(e,t)}},Sn=function(){return vn},kn=function(e,t){var n=vn;try{return vn=e,t()}finally{vn=n}},bt=function(e,t,n){switch(t){case"input":if(Ye(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ws(r);if(!i)throw Error(re(90));He(r),Ye(r,i)}}}break;case"textarea":rt(e,n);break;case"select":null!=(t=n.value)&&et(e,!!n.multiple,t,!1)}},It=ac,Ct=lc;var Jc={usingClientEntryPoint:!1,Events:[ys,vs,ws,kt,Tt,ac]},Zc={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eh={bundleType:Zc.bundleType,version:Zc.version,rendererPackageName:Zc.rendererPackageName,rendererConfig:Zc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=$t(e))?null:e.stateNode},findFiberByHostInstance:Zc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!th.isDisabled&&th.supportsFiber)try{nn=th.inject(eh),rn=th}catch(lt){}}X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jc,X.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gc(t))throw Error(re(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:be,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},X.createRoot=function(e,t){if(!Gc(e))throw Error(re(299));var n=!1,r="",i=Hc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,0,n,0,r,i),e[ds]=t.current,ji(8===e.nodeType?e.parentNode:e),new Kc(t)},X.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(re(188));throw e=Object.keys(e).join(","),Error(re(268,e))}return e=null===(e=$t(t))?null:e.stateNode},X.flushSync=function(e){return lc(e)},X.hydrate=function(e,t,n){if(!Qc(t))throw Error(re(200));return Xc(null,e,t,!0,n)},X.hydrateRoot=function(e,t,n){if(!Gc(e))throw Error(re(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",o=Hc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=jc(t,null,e,1,null!=n?n:null,i,0,s,o),e[ds]=t.current,ji(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wc(t)},X.render=function(e,t,n){if(!Qc(t))throw Error(re(200));return Xc(null,e,t,!1,n)},X.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(re(40));return!!e._reactRootContainer&&(lc(function(){Xc(null,null,e,!1,function(){e._reactRootContainer=null,e[ds]=null})}),!0)},X.unstable_batchedUpdates=ac,X.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(re(200));if(null==e||void 0===e._reactInternals)throw Error(re(38));return Xc(e,t,n,!1,r)},X.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),Y.exports=X;var nh=Y.exports;Q.createRoot=nh.createRoot,Q.hydrateRoot=nh.hydrateRoot;var rh={};
/**
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
 */const ih=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,u=t>>2,c=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ih(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw new oh;const l=t<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class oh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ah=function(e){return function(e){const t=ih(e);return sh.encodeByteArray(t,!0)}(e).replace(/\./g,"")},lh=function(e){try{return sh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
const uh=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ch=()=>{try{return uh()||(()=>{if("undefined"==typeof process)return;const e=rh.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&lh(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},hh=e=>{var t,n;return null===(n=null===(t=ch())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},dh=()=>{var e;return null===(e=ch())||void 0===e?void 0:e.config},fh=e=>{var t;return null===(t=ch())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class ph{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
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
 */
/**
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
 */
function mh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function gh(){return!function(){var e;const t=null===(e=ch())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class yh extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,yh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vh.prototype.create)}}class vh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(wh,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new yh(r,o,n)}}const wh=/\{\$([^}]+)}/g;function bh(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(_h(n)&&_h(s)){if(!bh(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _h(e){return null!==e&&"object"==typeof e}
/**
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
 */function Eh(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Sh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=kh),void 0===r.error&&(r.error=kh),void 0===r.complete&&(r.complete=kh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kh(){}
/**
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
 */function Th(e){return e&&e._delegate?e._delegate:e}class Ih{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const Ch="[DEFAULT]";
/**
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
 */class xh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ph;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ch})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Ch){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Ch){return this.instances.has(e)}getOptions(e=Ch){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Ch?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=Ch){return this.component?this.component.multipleInstances?e:Ch:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Nh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var Ah,Rh;(Rh=Ah||(Ah={}))[Rh.DEBUG=0]="DEBUG",Rh[Rh.VERBOSE=1]="VERBOSE",Rh[Rh.INFO=2]="INFO",Rh[Rh.WARN=3]="WARN",Rh[Rh.ERROR=4]="ERROR",Rh[Rh.SILENT=5]="SILENT";const Dh={debug:Ah.DEBUG,verbose:Ah.VERBOSE,info:Ah.INFO,warn:Ah.WARN,error:Ah.ERROR,silent:Ah.SILENT},Ph=Ah.INFO,Lh={[Ah.DEBUG]:"log",[Ah.VERBOSE]:"log",[Ah.INFO]:"info",[Ah.WARN]:"warn",[Ah.ERROR]:"error"},Oh=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Lh[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Mh{constructor(e){this.name=e,this._logLevel=Ph,this._logHandler=Oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ah))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Dh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ah.DEBUG,...e),this._logHandler(this,Ah.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ah.VERBOSE,...e),this._logHandler(this,Ah.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ah.INFO,...e),this._logHandler(this,Ah.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ah.WARN,...e),this._logHandler(this,Ah.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ah.ERROR,...e),this._logHandler(this,Ah.ERROR,...e)}}let Fh,Uh;const Vh=new WeakMap,jh=new WeakMap,zh=new WeakMap,Bh=new WeakMap,$h=new WeakMap;let qh={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return jh.get(e);if("objectStoreNames"===t)return e.objectStoreNames||zh.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wh(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Hh(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Gh(this),t),Wh(Vh.get(this))}:function(...t){return Wh(e.apply(Gh(this),t))}:function(t,...n){const r=e.call(Gh(this),t,...n);return zh.set(r,t.sort?t.sort():[t]),Wh(r)}}function Kh(e){return"function"==typeof e?Hh(e):(e instanceof IDBTransaction&&function(e){if(jh.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});jh.set(e,t)}(e),t=e,(Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,qh):e);var t}function Wh(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Wh(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Vh.set(t,e)}).catch(()=>{}),$h.set(t,e),t}(e);if(Bh.has(e))return Bh.get(e);const t=Kh(e);return t!==e&&(Bh.set(e,t),$h.set(t,e)),t}const Gh=e=>$h.get(e);const Qh=["get","getKey","getAll","getAllKeys","count"],Yh=["put","add","delete","clear"],Xh=new Map;function Jh(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Xh.get(t))return Xh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Qh.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Xh.set(t,s),s}qh=(e=>({...e,get:(t,n,r)=>Jh(t,n)||e.get(t,n,r),has:(t,n)=>!!Jh(t,n)||e.has(t,n)}))(qh);
/**
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
 */
class Zh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const ed="@firebase/app",td="0.10.13",nd=new Mh("@firebase/app"),rd="@firebase/app-compat",id="@firebase/analytics-compat",sd="@firebase/analytics",od="@firebase/app-check-compat",ad="@firebase/app-check",ld="@firebase/auth",ud="@firebase/auth-compat",cd="@firebase/database",hd="@firebase/data-connect",dd="@firebase/database-compat",fd="@firebase/functions",pd="@firebase/functions-compat",md="@firebase/installations",gd="@firebase/installations-compat",yd="@firebase/messaging",vd="@firebase/messaging-compat",wd="@firebase/performance",bd="@firebase/performance-compat",_d="@firebase/remote-config",Ed="@firebase/remote-config-compat",Sd="@firebase/storage",kd="@firebase/storage-compat",Td="@firebase/firestore",Id="@firebase/vertexai-preview",Cd="@firebase/firestore-compat",xd="firebase",Nd="[DEFAULT]",Ad={[ed]:"fire-core",[rd]:"fire-core-compat",[sd]:"fire-analytics",[id]:"fire-analytics-compat",[ad]:"fire-app-check",[od]:"fire-app-check-compat",[ld]:"fire-auth",[ud]:"fire-auth-compat",[cd]:"fire-rtdb",[hd]:"fire-data-connect",[dd]:"fire-rtdb-compat",[fd]:"fire-fn",[pd]:"fire-fn-compat",[md]:"fire-iid",[gd]:"fire-iid-compat",[yd]:"fire-fcm",[vd]:"fire-fcm-compat",[wd]:"fire-perf",[bd]:"fire-perf-compat",[_d]:"fire-rc",[Ed]:"fire-rc-compat",[Sd]:"fire-gcs",[kd]:"fire-gcs-compat",[Td]:"fire-fst",[Cd]:"fire-fst-compat",[Id]:"fire-vertex","fire-js":"fire-js",[xd]:"fire-js-all"},Rd=new Map,Dd=new Map,Pd=new Map;function Ld(e,t){try{e.container.addComponent(t)}catch(n){nd.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Od(e){const t=e.name;if(Pd.has(t))return nd.debug(`There were multiple attempts to register component ${t}.`),!1;Pd.set(t,e);for(const n of Rd.values())Ld(n,e);for(const n of Dd.values())Ld(n,e);return!0}function Md(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Fd(e){return void 0!==e.settings}
/**
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
 */const Ud=new vh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class Vd{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ih("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ud.create("app-deleted",{appName:this._name})}}
/**
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
 */const jd="10.14.1";function zd(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Nd,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Ud.create("bad-app-name",{appName:String(i)});if(n||(n=dh()),!n)throw Ud.create("no-options");const s=Rd.get(i);if(s){if(bh(n,s.options)&&bh(r,s.config))return s;throw Ud.create("duplicate-app",{appName:i})}const o=new Nh(i);for(const l of Pd.values())o.addComponent(l);const a=new Vd(n,r,o);return Rd.set(i,a),a}function Bd(e=Nd){const t=Rd.get(e);if(!t&&e===Nd&&dh())return zd();if(!t)throw Ud.create("no-app",{appName:e});return t}function $d(e,t,n){var r;let i=null!==(r=Ad[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void nd.warn(e.join(" "))}Od(new Ih(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}
/**
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
 */const qd="firebase-heartbeat-store";let Hd=null;function Kd(){return Hd||(Hd=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Wh(o);return r&&o.addEventListener("upgradeneeded",e=>{r(Wh(o.result),e.oldVersion,e.newVersion,Wh(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(qd)}catch(n){console.warn(n)}}}).catch(e=>{throw Ud.create("idb-open",{originalErrorMessage:e.message})})),Hd}async function Wd(e,t){try{const n=(await Kd()).transaction(qd,"readwrite"),r=n.objectStore(qd);await r.put(t,Gd(e)),await n.done}catch(n){if(n instanceof yh)nd.warn(n.message);else{const e=Ud.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});nd.warn(e.message)}}}function Gd(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class Qd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xd(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yd();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(n){nd.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Yd(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Jd(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=ah(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return nd.warn(t),""}}}function Yd(){return(new Date).toISOString().substring(0,10)}class Xd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Kd()).transaction(qd),n=await t.objectStore(qd).get(Gd(e));return await t.done,n}catch(t){if(t instanceof yh)nd.warn(t.message);else{const e=Ud.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});nd.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wd(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wd(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Jd(e){return ah(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var Zd;Zd="",Od(new Ih("platform-logger",e=>new Zh(e),"PRIVATE")),Od(new Ih("heartbeat",e=>new Qd(e),"PRIVATE")),$d(ed,td,Zd),$d(ed,td,"esm2017"),$d("fire-js","");function ef(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function tf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
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
 */
$d("firebase","10.14.1","app"),"function"==typeof SuppressedError&&SuppressedError;const nf=tf,rf=new vh("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),sf=new Mh("@firebase/auth");function of(e,...t){sf.logLevel<=Ah.ERROR&&sf.error(`Auth (${jd}): ${e}`,...t)}
/**
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
 */function af(e,...t){throw hf(e,...t)}function lf(e,...t){return hf(e,...t)}function uf(e,t,n){const r=Object.assign(Object.assign({},nf()),{[t]:n});return new vh("auth","Firebase",r).create(t,{appName:e.name})}function cf(e){return uf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return rf.create(e,...t)}function df(e,t,...n){if(!e)throw hf(t,...n)}function ff(e){const t="INTERNAL ASSERTION FAILED: "+e;throw of(t),new Error(t)}function pf(e,t){e||ff(t)}
/**
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
 */function mf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function gf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function yf(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==gf()&&"https:"!==gf()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class vf{constructor(e,t){this.shortDelay=e,this.longDelay=t,pf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mh())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return yf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function wf(e,t){pf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class bf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ff("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ff("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ff("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const _f={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ef=new vf(3e4,6e4);
/**
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
 */function Sf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function kf(e,t,n,r,i={}){return Tf(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Eh(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),bf.fetch()(If(e,e.config.apiHost,n,o),l)})}async function Tf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},_f),t);try{const t=new Cf(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw xf(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xf(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw xf(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw xf(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw uf(e,a,o);af(e,a)}}catch(i){if(i instanceof yh)throw i;af(e,"network-request-failed",{message:String(i)})}}function If(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?wf(e.config,i):`${e.config.apiScheme}://${i}`}class Cf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(lf(this.auth,"network-request-failed")),Ef.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xf(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=lf(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function Nf(e,t){return kf(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function Af(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Rf(e){return 1e3*Number(e)}function Df(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return of("JWT malformed, contained fewer than 3 sections"),null;try{const e=lh(n);return e?JSON.parse(e):(of("Failed to decode base64 JWT payload"),null)}catch(i){return of("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}function Pf(e){const t=Df(e);return df(t,"internal-error"),df(void 0!==t.exp,"internal-error"),df(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function Lf(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof yh&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Of{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Mf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Af(this.lastLoginAt),this.creationTime=Af(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Ff(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Lf(e,Nf(n,{idToken:r}));df(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Uf(s.providerUserInfo):[],a=(l=e.providerData,u=o,[...l.filter(e=>!u.some(t=>t.providerId===e.providerId)),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function Uf(e){return e.map(e=>{var{providerId:t}=e,n=ef(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
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
 */
/**
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
 */
class Vf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){df(e.idToken,"internal-error"),df(void 0!==e.idToken,"internal-error"),df(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){df(0!==e.length,"internal-error");const t=Pf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(df(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Tf(e,{},async()=>{const n=Eh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=If(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",bf.fetch()(s,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Vf;return n&&(df("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(df("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(df("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vf,this.toJSON())}_performRefresh(){return ff("not implemented")}}
/**
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
 */function jf(e,t){df("string"==typeof e||void 0===e,"internal-error",{appName:t})}class zf{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Of(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Lf(this,this.stsTokenManager.getToken(this.auth,e));return df(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Th(e),r=await n.getIdToken(t),i=Df(r);df(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Af(Rf(i.auth_time)),issuedAtTime:Af(Rf(i.iat)),expirationTime:Af(Rf(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Th(e);await Ff(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(df(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zf(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){df(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ff(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fd(this.auth.app))return Promise.reject(cf(this.auth));const e=await this.getIdToken();return await Lf(this,async function(e,t){return kf(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;df(v&&E,e,"internal-error");const S=Vf.fromJSON(this.name,E);df("string"==typeof v,e,"internal-error"),jf(c,e.name),jf(h,e.name),df("boolean"==typeof w,e,"internal-error"),df("boolean"==typeof b,e,"internal-error"),jf(d,e.name),jf(f,e.name),jf(p,e.name),jf(m,e.name),jf(g,e.name),jf(y,e.name);const k=new zf({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(k.providerData=_.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new Vf;r.updateFromServerResponse(t);const i=new zf({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ff(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];df(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?Uf(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),o=new Vf;o.updateFromIdToken(n);const a=new zf({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Mf(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,l),a}}
/**
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
 */const Bf=new Map;function $f(e){pf(e instanceof Function,"Expected a class definition");let t=Bf.get(e);return t?(pf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bf.set(e,t),t)}
/**
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
 */class qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qf.type="NONE";const Hf=qf;
/**
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
 */function Kf(e,t,n){return`firebase:${e}:${t}:${n}`}class Wf{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Kf(this.userKey,r.apiKey,i),this.fullPersistenceKey=Kf("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zf._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Wf($f(Hf),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||$f(Hf);const s=Kf(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=zf._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(l){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(l){}})),new Wf(i,e,n)):new Wf(i,e,n)}}
/**
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
 */function Gf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Jf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ep(t))return"Blackberry";if(tp(t))return"Webos";if(Yf(t))return"Safari";if((t.includes("chrome/")||Xf(t))&&!t.includes("edge/"))return"Chrome";if(Zf(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Qf(e=mh()){return/firefox\//i.test(e)}function Yf(e=mh()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xf(e=mh()){return/crios\//i.test(e)}function Jf(e=mh()){return/iemobile/i.test(e)}function Zf(e=mh()){return/android/i.test(e)}function ep(e=mh()){return/blackberry/i.test(e)}function tp(e=mh()){return/webos/i.test(e)}function np(e=mh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function rp(){return function(){const e=mh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function ip(e=mh()){return np(e)||Zf(e)||tp(e)||ep(e)||/windows phone/i.test(e)||Jf(e)}
/**
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
 */function sp(e,t=[]){let n;switch(e){case"Browser":n=Gf(mh());break;case"Worker":n=`${Gf(mh())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${jd}/${r}`}
/**
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
 */class op{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
/**
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
 */class ap{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
 */class lp{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cp(this),this.idTokenSubscription=new cp(this),this.beforeStateQueue=new op(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$f(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Wf.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Nf(this,{idToken:e}),n=await zf._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Fd(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return df(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ff(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fd(this.app))return Promise.reject(cf(this));const t=e?Th(e):null;return t&&df(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&df(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fd(this.app)?Promise.reject(cf(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fd(this.app)?Promise.reject(cf(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($f(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return kf(e,"GET","/v2/passwordPolicy",Sf(e,t))}
/**
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
 */(this),t=new ap(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vh("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return kf(e,"POST","/v2/accounts:revokeToken",Sf(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$f(e)||this._popupRedirectResolver;df(t,this,"argument-error"),this.redirectPersistenceManager=await Wf.create(this,[$f(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(df(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return df(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){sf.logLevel<=Ah.WARN&&sf.warn(`Auth (${jd}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function up(e){return Th(e)}class cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Sh(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return df(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let hp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dp(e,t,n){const r=up(e);df(r._canInitEmulator,r,"emulator-config-failed"),df(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=fp(t),{host:s,port:o}=function(e){const t=fp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:pp(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:pp(t)}}}(t),a=null===o?"":`:${o}`;r.config.emulator={url:`${i}//${s}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function fp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function pp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class mp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ff("not implemented")}_getIdTokenResponse(e){return ff("not implemented")}_linkToIdToken(e,t){return ff("not implemented")}_getReauthenticationResolver(e){return ff("not implemented")}}
/**
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
 */async function gp(e,t){return async function(e,t,n,r,i={}){const s=await kf(e,t,n,r,i);return"mfaPendingCredential"in s&&af(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",Sf(e,t))}
/**
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
 */class yp extends mp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):af("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ef(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new yp(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return gp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gp(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Eh(t)}return e}}
/**
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
 */class vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class wp extends vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */class bp extends wp{constructor(){super("facebook.com")}static credential(e){return yp._fromParams({providerId:bp.PROVIDER_ID,signInMethod:bp.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bp.credentialFromTaggedObject(e)}static credentialFromError(e){return bp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bp.credential(e.oauthAccessToken)}catch(t){return null}}}bp.FACEBOOK_SIGN_IN_METHOD="facebook.com",bp.PROVIDER_ID="facebook.com";
/**
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
 */
class _p extends wp{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yp._fromParams({providerId:_p.PROVIDER_ID,signInMethod:_p.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _p.credentialFromTaggedObject(e)}static credentialFromError(e){return _p.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _p.credential(t,n)}catch(r){return null}}}_p.GOOGLE_SIGN_IN_METHOD="google.com",_p.PROVIDER_ID="google.com";
/**
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
 */
class Ep extends wp{constructor(){super("github.com")}static credential(e){return yp._fromParams({providerId:Ep.PROVIDER_ID,signInMethod:Ep.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ep.credentialFromTaggedObject(e)}static credentialFromError(e){return Ep.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ep.credential(e.oauthAccessToken)}catch(t){return null}}}Ep.GITHUB_SIGN_IN_METHOD="github.com",Ep.PROVIDER_ID="github.com";
/**
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
 */
class Sp extends wp{constructor(){super("twitter.com")}static credential(e,t){return yp._fromParams({providerId:Sp.PROVIDER_ID,signInMethod:Sp.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sp.credentialFromTaggedObject(e)}static credentialFromError(e){return Sp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Sp.credential(t,n)}catch(r){return null}}}Sp.TWITTER_SIGN_IN_METHOD="twitter.com",Sp.PROVIDER_ID="twitter.com";
/**
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
 */
class kp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await zf._fromIdTokenResponse(e,n,r),s=Tp(n);return new kp({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Tp(n);return new kp({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Tp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */class Ip extends yh{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ip.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ip(e,t,n,r)}}function Cp(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ip._fromErrorAndOperation(e,n,t,r);throw n})}const xp="__sak";
/**
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
 */class Np{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xp,"1"),this.storage.removeItem(xp),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Ap extends Np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ip(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);rp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ap.type="LOCAL";const Rp=Ap;
/**
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
 */class Dp extends Np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dp.type="SESSION";const Pp=Dp;
/**
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
 */
/**
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
 */
class Lp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Lp(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Op(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Lp.receivers=[];class Mp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const l=Op("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
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
 */function Fp(){return window}
/**
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
 */
function Up(){return void 0!==Fp().WorkerGlobalScope&&"function"==typeof Fp().importScripts}
/**
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
 */
const Vp="firebaseLocalStorageDb",jp="firebaseLocalStorage",zp="fbase_key";class Bp{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $p(e,t){return e.transaction([jp],t?"readwrite":"readonly").objectStore(jp)}function qp(){const e=indexedDB.open(Vp,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(jp,{keyPath:zp})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(jp)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Vp);return new Bp(e).toPromise()}(),t(await qp()))})})}async function Hp(e,t,n){const r=$p(e,!0).put({[zp]:t,value:n});return new Bp(r).toPromise()}function Kp(e,t){const n=$p(e,!0).delete(t);return new Bp(n).toPromise()}class Wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await qp()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lp._getInstance(Up()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Mp(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qp();return await Hp(e,xp,"1"),await Kp(e,xp),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hp(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=$p(e,!1).get(t),r=await new Bp(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=$p(e,!1).getAll();return new Bp(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Wp.type="LOCAL";const Gp=Wp;new vf(3e4,6e4);
/**
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
 */
class Qp extends mp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gp(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yp(e){
/**
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
 */
return async function(e,t,n=!1){if(Fd(e.app))return Promise.reject(cf(e));const r="signIn",i=await Cp(e,r,t),s=await kp._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new Qp(e),e.bypassAuthState)}function Xp(e){const{auth:t,user:n}=e;return df(n,t,"internal-error"),
/**
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
 */
async function(e,t,n=!1){const{auth:r}=e;if(Fd(r.app))return Promise.reject(cf(r));const i="reauthenticate";try{const s=await Lf(e,Cp(r,i,t,e),n);df(s.idToken,r,"internal-error");const o=Df(s.idToken);df(o,r,"internal-error");const{sub:a}=o;return df(e.uid===a,r,"user-mismatch"),kp._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&af(r,"user-mismatch"),s}}(n,new Qp(e),e.bypassAuthState)}async function Jp(e){const{auth:t,user:n}=e;return df(n,t,"internal-error"),async function(e,t,n=!1){const r=await Lf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kp._forOperation(e,"link",r)}(n,new Qp(e),e.bypassAuthState)}
/**
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
 */class Zp{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yp;case"linkViaPopup":case"linkViaRedirect":return Jp;case"reauthViaPopup":case"reauthViaRedirect":return Xp;default:af(this.auth,"internal-error")}}resolve(e){pf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const em=new vf(2e3,1e4);class tm extends Zp{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tm.currentPopupAction&&tm.currentPopupAction.cancel(),tm.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return df(e,this.auth,"internal-error"),e}async onExecution(){pf(1===this.filter.length,"Popup operations only handle one event");const e=Op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(lf(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(lf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tm.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lf(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,em.get())};e()}}tm.currentPopupAction=null;
/**
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
 */
const nm="pendingRedirect",rm=new Map;class im extends Zp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=rm.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Kf(nm,e.config.apiKey,e.name)}(t),r=function(e){return $f(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}rm.set(this.auth._key(),e)}return this.bypassAuthState||rm.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function sm(e,t){rm.set(e._key(),t)}async function om(e,t,n=!1){if(Fd(e.app))return Promise.reject(cf(e));const r=up(e),i=
/**
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
 */
function(e,t){return t?$f(t):(df(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new im(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
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
 */class am{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return um(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!um(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(lf(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))}saveEventToCache(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()}}function lm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function um({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const cm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hm=/^https?/;async function dm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return kf(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(fm(r))return}catch(n){}af(e,"unauthorized-domain")}function fm(e){const t=mf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!hm.test(n))return!1;if(cm.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const pm=new vf(3e4,6e4);function mm(){const e=Fp().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function gm(e){return new Promise((t,n)=>{var r,i,s,o;function a(){mm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mm(),n(lf(e,"network-request-failed"))},timeout:pm.get()})}if(null===(i=null===(r=Fp().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Fp().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Fp()[t]=()=>{gapi.load?a():n(lf(e,"network-request-failed"))},(o=`${hp.gapiScript}?onload=${t}`,hp.loadJS(o)).catch(e=>n(e))}a()}}).catch(e=>{throw ym=null,e})}let ym=null;
/**
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
 */
const vm=new vf(5e3,15e3),wm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _m(e){const t=e.config;df(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wf(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:jd},i=bm.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eh(r).slice(1)}`}async function Em(e){const t=await function(e){return ym=ym||gm(e),ym}(e),n=Fp().gapi;return df(n,e,"internal-error"),t.open({where:document.body,url:_m(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wm,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=lf(e,"network-request-failed"),s=Fp().setTimeout(()=>{r(i)},vm.get());function o(){Fp().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
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
 */const Sm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class km{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Tm(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Sm),{width:r.toString(),height:i.toString(),top:s,left:o}),u=mh().toLowerCase();n&&(a=Xf(u)?"_blank":n),Qf(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=mh()){var t;return np(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new km(null);const h=window.open(t||"",a,c);df(h,e,"popup-blocked");try{h.focus()}catch(d){}return new km(h)}const Im="__/auth/handler",Cm="emulator/auth/handler",xm=encodeURIComponent("fac");async function Nm(e,t,n,r,i,s){df(e.config.authDomain,e,"auth-domain-config-required"),df(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:jd,eventId:i};if(t instanceof vp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof wp){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${xm}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Im}`;return wf(e,Cm)}
/**
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
 */(e)}?${Eh(a).slice(1)}${u}`}const Am="webStorageSupport";const Rm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pp,this._completeRedirectFn=om,this._overrideRedirectResult=sm}async _openPopup(e,t,n,r){var i;pf(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Tm(e,await Nm(e,t,n,mf(),r),Op())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Fp().location.href=e}(await Nm(e,t,n,mf(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(pf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Em(e),n=new am(e);return t.register("authEvent",t=>{df(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Am,{type:Am},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Am];void 0!==i&&t(!!i),af(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ip()||Yf()||np()}};var Dm="@firebase/auth",Pm="1.7.9";
/**
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
 */
class Lm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){df(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const Om=fh("authIdTokenMaxAge")||300;let Mm=null;var Fm;hp={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=lf("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Fm="Browser",Od(new Ih("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;df(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Fm,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sp(Fm)},l=new lp(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($f);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Od(new Ih("auth-internal",e=>{const t=up(e.getProvider("auth").getImmediate());return new Lm(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$d(Dm,Pm,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Fm)),$d(Dm,Pm,"esm2017");var Um,Vm,jm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],0>e?-1:0)}):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),l=s(1),u=s(16777216);function c(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(a,a);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!c(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(t);h(u)||0<u.l(e);)u=(s=o(n-=r)).j(t);c(s)&&(s=l),i=i.add(s),e=f(e,u)}return new m(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,p(n,2*i+2*s),n[2*i+2*s+1]+=l*g,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*m,p(n,2*i+2*s+1),n[2*i+2*s+2]+=l*m,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Vm=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=o(Math.pow(n,l)),i=i.j(l).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},Um=r}).apply(void 0!==jm?jm:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var zm,Bm,$m,qm,Hm,Km,Wm,Gm,Qm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Qm&&Qm];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,function(e,t){return t})}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function S(e){i.setTimeout(()=>{throw e},0)}function k(){var e=N;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var T=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new I,e=>e.reset());class I{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,x=!1,N=new class{constructor(){this.h=this.g=null}add(e,t){const n=T.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},A=()=>{const e=i.Promise.resolve(void 0);C=()=>{e.then(R)}};var R=()=>{for(var e;e=k();){try{e.h.call(e.g)}catch(n){S(n)}var t=T;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}x=!1};function D(){this.s=this.s,this.C=this.C}function P(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}D.prototype.s=!1,D.prototype.ma=function(){this.s||(this.s=!0,this.N())},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},P.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function O(e,t){if(P.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&O.aa.h.call(this)}}h(O,P);var M={2:"touch",3:"pen",4:"mouse"};O.prototype.h=function(){O.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),U=0;function V(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++U,this.da=this.fa=!1}function j(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function z(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}z.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=$(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new V(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),H={};function K(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);return null}return n=Z(n),e&&e[F]?e.K(t,n,!!o(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,l=X(e);if(l||(e[q]=l=new z(e)),n=l.add(t,n,r,a,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Y;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function W(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)W(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[F]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$(s=e.g[t],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,i)),(n=-1<e?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[F])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(B(n,e),0==n.h&&(n.src=null,t[q]=null)):j(e)}}}function Q(e){return e in H?H[e]:H[e]="on"+e}function Y(e,t){if(e.da)e=!0;else{t=new O(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function X(e){return(e=e[q])instanceof z?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){D.call(this),this.i=new z(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new P(t,e);else if(t instanceof P)t.target=t.target||e;else{var i=t;_(t=new P(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ne(o,r,!0,t)&&i}if(i=ne(o=t.g=e,r,!0,t)&&i,i=ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(o=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&B(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re(()=>{e.g=null,e.i&&(e.i=!1,ie(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,D),ee.prototype[F]=!0,ee.prototype.removeEventListener=function(e,t,n,r){W(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)j(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends D{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){D.call(this),this.h=e,this.g={}}h(oe,D);var ae=[];function le(e){v(e.g,function(e,t){this.g.hasOwnProperty(t)&&G(e)},e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),le(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,ce=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){P.call(this,"d")}function ye(){P.call(this,"c")}h(ge,P),h(ye,P);var ve={},we=null;function be(){return we=we||new ee}function _e(e){P.call(this,ve.La,e)}function Ee(e){const t=be();te(t,new _e(t))}function Se(e,t){P.call(this,ve.STAT_EVENT,e),this.stat=t}function ke(e){const t=be();te(t,new Se(t,e))}function Te(e,t){P.call(this,ve.Ma,e),this.size=t}function Ie(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function Ce(){this.g=!0}function xe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ue(n)}catch(a){return t}}(e,n)+(r?" "+r:"")})}ve.La="serverreachability",h(_e,P),ve.STAT_EVENT="statevent",h(Se,P),ve.Ma="timingevent",h(Te,P),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Ne,Ae={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Re={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function De(){}function Pe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Le}function Le(){this.i=null,this.g="",this.h=!1}h(De,de),De.prototype.g=function(){return new XMLHttpRequest},De.prototype.i=function(){return{}},Ne=new De;var Oe={},Me={};function Fe(e,t,n){e.L=1,e.v=ct(it(t)),e.m=n,e.P=!0,Ue(e,null)}function Ue(e,t){e.F=Date.now(),ze(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),St(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Le,e.g=hn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=K(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ve(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function je(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Oe:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ie(u(e.ba,e),t)}function $e(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function qe(e){0==e.j.G||e.J||on(e.j,e)}function He(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ke(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Xe(n.h,e)))if(!e.K&&Xe(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sn(n),Gt(n)}tn(n),ke(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ie(u(n.Za,n),6e3));if(1>=Ye(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else ln(n,11)}else if((e.K||n.g==e)&&sn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Je(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ut(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),o.K){Ze(r.h,o);var a=o,l=r.L;l&&(a.I=l),a.B&&($e(a),ze(a)),r.g=o}else en(r);0<n.i.length&&Yt(n)}else"stop"!=u[0]&&"close"!=u[0]||ln(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ln(n,7):Wt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ee()}catch(c){}}Pe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==$t(e)?t.j():this.Y(e)},Pe.prototype.Y=function(e){try{if(e==this.g)e:{const d=$t(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||qt(this.g)))){this.J||4!=d||7==t||Ee(),$e(this);var n=this.g.Z();this.X=n;t:if(Ve(this)){var r=qt(this.g);e="";var s=r.length,o=4==$t(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){He(this),qe(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,ke(12),He(this),qe(this);break e}xe(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ke(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=je(this,a),e==Me){4==d&&(this.s=4,ke(14),n=!1),xe(this.i,this.l,null,"[Incomplete Response]");break}if(e==Oe){this.s=4,ke(15),xe(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}xe(this.i,this.l,e,null),Ke(this,e)}if(Ve(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,ke(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),nn(h),h.M=!0,ke(11))}}else xe(this.i,this.l,a,"[Invalid Chunked Response]"),He(this),qe(this)}else xe(this.i,this.l,a,null),Ke(this,a);4==d&&He(this),this.o&&!this.J&&(4==d?on(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=$t(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),He(this),qe(this)}}}catch(d){}},Pe.prototype.cancel=function(){this.J=!0,He(this)},Pe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(Ee(),ke(17)),He(this),this.s=2,qe(this)):Be(this,this.S-e)};var We=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}Ge.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.s),this.l=e.l;var t=e.i,n=new wt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),at(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),ot(this,t[4]),this.l=ht(t[5]||"",!0),at(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function at(e,t,n){t instanceof wt?(e.i=t,function(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(_t(this,t),St(this,n,e))},e)),e.j=t}(e.i,e.h)):(n||(t=dt(t,yt)),e.i=new wt(t,e.h))}function ut(e,t,n){e.i.set(t,n)}function ct(e){return ut(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ft),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ft(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dt(t,pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")};var pt=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,vt=/#/g;function wt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function _t(e,t){bt(e),t=kt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Et(e,t){return bt(e),t=kt(e,t),e.g.has(t)}function St(e,t,n){_t(e,t),0<n.length&&(e.i=null,e.g.set(kt(e,t),d(n)),e.h+=n.length)}function kt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Tt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function It(){this.g=new he}function Ct(e,t,n){const r=n||"";try{tt(e,function(e,n){let i=e;o(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function xt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Nt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Rt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Dt(e)}function Dt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Pt(e){let t="";return v(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Lt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Pt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ut(e,t,n))}function Ot(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=wt.prototype).add=function(e,t){bt(this),this.i=null,e=kt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){bt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.na=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){bt(this);let t=[];if("string"==typeof e)Et(this,e)&&(t=t.concat(this.g.get(kt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return bt(this),this.i=null,Et(this,e=kt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},h(xt,de),xt.prototype.g=function(){return new Nt(this.l,this.j)},xt.prototype.i=function(e){return function(){return e}}({}),h(Nt,ee),(e=Nt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Dt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Dt(this)),this.g&&(this.readyState=3,Dt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rt(this):Dt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Rt(this))},e.Qa=function(e){this.g&&(this.response=e,Rt(this))},e.ga=function(){this.g&&Rt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Ot,ee);var Mt=/^https?$/i,Ft=["POST","PUT"];function Ut(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Vt(e),zt(e)}function Vt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function jt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=$t(e)||2!=e.Z()))if(e.u&&4==$t(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==$t(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var o=String(e.D).match(nt)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Mt.test(o?o.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<$t(e)?e.g.statusText:""}catch(l){a=""}e.l=a+" ["+e.Z()+"]",Vt(e)}}finally{zt(e)}}}function zt(e,t){if(e.g){Bt(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Bt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function $t(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ht(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kt(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ht("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ht("baseRetryDelayMs",5e3,e),this.cb=Ht("retryDelaySeedMs",1e4,e),this.Wa=Ht("forwardChannelMaxRetries",2,e),this.wa=Ht("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Da=new It,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Wt(e){if(Qt(e),3==e.G){var t=e.U++,n=it(e.I);if(ut(n,"SID",e.K),ut(n,"RID",t),ut(n,"TYPE","terminate"),Jt(e,n),(t=new Pe(e,e.j,t)).L=2,t.v=ct(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}un(e)}function Gt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Qt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Yt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||A(),x||(C(),x=!0),N.add(t,e),e.B=0}}function Xt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);ut(r,"SID",e.K),ut(r,"RID",n),ut(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Lt(r,e.m,e.o),n=new Pe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Zt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,n),Fe(n,r,t)}function Jt(e,t){e.H&&v(e.H,function(e,n){ut(t,n,e)}),e.l&&tt({},function(e,n){ut(t,n,e)})}function Zt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const l=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Ct(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function en(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||A(),x||(C(),x=!0),N.add(t,e),e.v=0}}function tn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ie(u(e.Fa,e),an(e,e.v)),e.v++,!0)}function nn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function rn(e){e.g=new Pe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);ut(t,"RID","rpc"),ut(t,"SID",e.K),ut(t,"AID",e.T),ut(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ut(t,"TO",e.ja),ut(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Lt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ct(it(t)),n.m=null,n.P=!0,Ue(n,e)}function sn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function on(e,t){var n=null;if(e.g==t){sn(e),nn(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=be(),new Te(r,n)),Yt(e)}else en(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ie(u(e.Ga,e,t),an(e,e.B)),e.B++,0)))}(e,t)||2==r&&tn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function an(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ct(r),t?function(e,t){const n=new Ce;if(i.Image){const r=new Image;r.onload=c(Tt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(Tt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(Tt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(Tt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout(()=>{n.abort(),Tt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Tt(0,0,!0,t):Tt(0,0,!1,t)}).catch(()=>{clearTimeout(r),Tt(0,0,!1,t)})}(r.toString(),n)}else ke(2);e.G=0,e.l&&e.l.sa(t),un(e),Qt(e)}function un(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ot(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new rt(null);r&&st(o,r),t&&(o.g=t),s&&ot(o,s),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&ut(r,n,t),ut(r,"VER",e.la),Jt(e,r),r}function hn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Ot(new xt({eb:n})):new Ot(e.pa)).Ha(e.J),t}function dn(){}function fn(){}function pn(e,t){ee.call(this),this.g=new Kt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new yn(this)}function mn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function yn(e){this.g=e}(e=Ot.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ne.g(),this.v=this.o?fe(this.o):fe(Ne),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Ut(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ft,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Ut(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),zt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zt(this,!0)),Ot.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?jt(this):this.bb())},e.bb=function(){jt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch(lt){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(lt){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ce(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Kt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){ke(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Yt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Pe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,i,t),ut(n=it(this.I),"RID",e),ut(n,"CVER",22),this.D&&ut(n,"X-HTTP-Session-Id",this.D),Jt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Pt(s)))+"&"+t:this.m&&Lt(n,this.m,s)),Je(this.h,i),this.Ua&&ut(n,"TYPE","init"),this.P?(ut(n,"$req",t),ut(n,"SID","null"),i.T=!0,Fe(i,n,null)):Fe(i,n,t),this.G=2}}else 3==this.G&&(e?Xt(this,e):0==this.i.length||Qe(this.h)||Xt(this))},e.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ie(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Gt(this),rn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),tn(this),ke(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=dn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new pn(e,t)},h(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Wt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new We(t.Ya++,e)),3==t.G&&Yt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Wt(this.g),delete this.g,pn.aa.N.call(this)},h(mn,ge),h(gn,ye),h(yn,dn),yn.prototype.ua=function(){te(this.g,"a")},yn.prototype.ta=function(e){te(this.g,new mn(e))},yn.prototype.sa=function(e){te(this.g,new gn)},yn.prototype.ra=function(){te(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,Gm=function(){return new fn},Wm=function(){return be()},Km=ve,Hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ae.NO_ERROR=0,Ae.TIMEOUT=8,Ae.HTTP_ERROR=6,qm=Ae,Re.COMPLETE="complete",$m=Re,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Bm=pe,Ot.prototype.listenOnce=Ot.prototype.L,Ot.prototype.getLastError=Ot.prototype.Ka,Ot.prototype.getLastErrorCode=Ot.prototype.Ba,Ot.prototype.getStatus=Ot.prototype.Z,Ot.prototype.getResponseJson=Ot.prototype.Oa,Ot.prototype.getResponseText=Ot.prototype.oa,Ot.prototype.send=Ot.prototype.ea,Ot.prototype.setWithCredentials=Ot.prototype.Ha,zm=Ot}).apply(void 0!==Qm?Qm:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Ym="@firebase/firestore";
/**
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
 */class Xm{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xm.UNAUTHENTICATED=new Xm(null),Xm.GOOGLE_CREDENTIALS=new Xm("google-credentials-uid"),Xm.FIRST_PARTY=new Xm("first-party-uid"),Xm.MOCK_USER=new Xm("mock-user");
/**
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
 */
let Jm="10.14.0";
/**
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
 */const Zm=new Mh("@firebase/firestore");function eg(){return Zm.logLevel}function tg(e,...t){if(Zm.logLevel<=Ah.DEBUG){const n=t.map(ig);Zm.debug(`Firestore (${Jm}): ${e}`,...n)}}function ng(e,...t){if(Zm.logLevel<=Ah.ERROR){const n=t.map(ig);Zm.error(`Firestore (${Jm}): ${e}`,...n)}}function rg(e,...t){if(Zm.logLevel<=Ah.WARN){const n=t.map(ig);Zm.warn(`Firestore (${Jm}): ${e}`,...n)}}function ig(e){if("string"==typeof e)return e;try{
/**
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
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
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
 */function sg(e="Unexpected state"){const t=`FIRESTORE (${Jm}) INTERNAL ASSERTION FAILED: `+e;throw ng(t),new Error(t)}function og(e,t){e||sg()}function ag(e,t){return e}
/**
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
 */const lg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ug extends yh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class cg{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
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
 */class hg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xm.UNAUTHENTICATED))}shutdown(){}}class fg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class pg{constructor(e){this.t=e,this.currentUser=Xm.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){og(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new cg;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cg,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{tg("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(tg("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cg)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(tg("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(og("string"==typeof t.accessToken),new hg(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return og(null===e||"string"==typeof e),new Xm(e)}}class mg{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Xm.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gg{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new mg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xm.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){og(void 0===this.o);const n=e=>{null!=e.error&&tg("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,tg("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{tg("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):tg("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(og("string"==typeof e.token),this.R=e.token,new yg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function wg(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class bg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=wg(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function _g(e,t){return e<t?-1:e>t?1:0}function Eg(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
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
 */class Sg{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ug(lg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ug(lg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ug(lg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ug(lg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Sg.fromMillis(Date.now())}static fromDate(e){return Sg.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Sg(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_g(this.nanoseconds,e.nanoseconds):_g(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class kg{constructor(e){this.timestamp=e}static fromTimestamp(e){return new kg(e)}static min(){return new kg(new Sg(0,0))}static max(){return new kg(new Sg(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Tg{constructor(e,t,n){void 0===t?t=0:t>e.length&&sg(),void 0===n?n=e.length-t:n>e.length-t&&sg(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Tg.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Tg?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ig extends Tg{construct(e,t,n){return new Ig(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ug(lg.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Ig(t)}static emptyPath(){return new Ig([])}}const Cg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xg extends Tg{construct(e,t,n){return new xg(e,t,n)}static isValidIdentifier(e){return Cg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xg.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new xg(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ug(lg.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ug(lg.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ug(lg.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ug(lg.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xg(t)}static emptyPath(){return new xg([])}}
/**
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
 */class Ng{constructor(e){this.path=e}static fromPath(e){return new Ng(Ig.fromString(e))}static fromName(e){return new Ng(Ig.fromString(e).popFirst(5))}static empty(){return new Ng(Ig.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ig.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ig.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ng(new Ig(e.slice()))}}function Ag(e){return new Rg(e.readTime,e.key,-1)}class Rg{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Rg(kg.min(),Ng.empty(),-1)}static max(){return new Rg(kg.max(),Ng.empty(),-1)}}function Dg(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ng.comparator(e.documentKey,t.documentKey),0!==n?n:_g(e.largestBatchId,t.largestBatchId)
/**
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
 */)}class Pg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
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
 */async function Lg(e){if(e.code!==lg.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;tg("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Og{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&sg(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Og((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Og?t:Og.resolve(t)}catch(t){return Og.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Og.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Og.reject(t)}static resolve(e){return new Og((t,n)=>{t(e)})}static reject(e){return new Og((t,n)=>{n(e)})}static waitFor(e){return new Og((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Og.resolve(!1);for(const n of e)t=t.next(e=>e?Og.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Og((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next(e=>{s[l]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new Og((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function Mg(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Fg{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function Ug(e){return null==e}function Vg(e){return 0===e&&1/e==-1/0}
/**
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
 */
function jg(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zg(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Bg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */Fg.oe=-1;class $g{constructor(e,t){this.comparator=e,this.root=t||Hg.EMPTY}insert(e,t){return new $g(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Hg.BLACK,null,null))}remove(e){return new $g(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Hg.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qg(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qg(this.root,e,this.comparator,!1)}getReverseIterator(){return new qg(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qg(this.root,e,this.comparator,!0)}}class qg{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Hg{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Hg.RED,this.left=null!=r?r:Hg.EMPTY,this.right=null!=i?i:Hg.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Hg(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Hg.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Hg.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hg.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hg.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw sg();if(this.right.isRed())throw sg();const e=this.left.check();if(e!==this.right.check())throw sg();return e+(this.isRed()?0:1)}}Hg.EMPTY=null,Hg.RED=!0,Hg.BLACK=!1,Hg.EMPTY=new class{constructor(){this.size=0}get key(){throw sg()}get value(){throw sg()}get color(){throw sg()}get left(){throw sg()}get right(){throw sg()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Hg(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Kg{constructor(e){this.comparator=e,this.data=new $g(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wg(this.data.getIterator())}getIteratorFrom(e){return new Wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Kg))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Kg(this.comparator);return t.data=e,t}}class Wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class Gg{constructor(e){this.fields=e,e.sort(xg.comparator)}static empty(){return new Gg([])}unionWith(e){let t=new Kg(xg.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Gg(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eg(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
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
 */class Qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class Yg{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Qg("Invalid base64 string: "+t):t}}(e);return new Yg(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Yg(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _g(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yg.EMPTY_BYTE_STRING=new Yg("");const Xg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jg(e){if(og(!!e),"string"==typeof e){let t=0;const n=Xg.exec(e);if(og(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Zg(e.seconds),nanos:Zg(e.nanos)}}function Zg(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ey(e){return"string"==typeof e?Yg.fromBase64String(e):Yg.fromUint8Array(e)}
/**
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
 */function ty(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ny(e){const t=e.mapValue.fields.__previous_value__;return ty(t)?ny(t):t}function ry(e){const t=Jg(e.mapValue.fields.__local_write_time__.timestampValue);return new Sg(t.seconds,t.nanos)}
/**
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
 */class iy{constructor(e,t,n,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class sy{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sy("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof sy&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const oy={};function ay(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ty(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:sg()}function ly(e,t){if(e===t)return!0;const n=ay(e);if(n!==ay(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ry(e).isEqual(ry(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Jg(e.timestampValue),r=Jg(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,ey(e.bytesValue).isEqual(ey(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Zg(e.geoPointValue.latitude)===Zg(t.geoPointValue.latitude)&&Zg(e.geoPointValue.longitude)===Zg(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Zg(e.integerValue)===Zg(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Zg(e.doubleValue),r=Zg(t.doubleValue);return n===r?Vg(n)===Vg(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Eg(e.arrayValue.values||[],t.arrayValue.values||[],ly);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(jg(n)!==jg(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ly(n[i],r[i])))return!1;return!0}(e,t);default:return sg()}var r}function uy(e,t){return void 0!==(e.values||[]).find(e=>ly(e,t))}function cy(e,t){if(e===t)return 0;const n=ay(e),r=ay(t);if(n!==r)return _g(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _g(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Zg(e.integerValue||e.doubleValue),r=Zg(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return hy(e.timestampValue,t.timestampValue);case 4:return hy(ry(e),ry(t));case 5:return _g(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ey(e),r=ey(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=_g(n[i],r[i]);if(0!==e)return e}return _g(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=_g(Zg(e.latitude),Zg(t.latitude));return 0!==n?n:_g(Zg(e.longitude),Zg(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return dy(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},l=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,c=_g((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:dy(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===oy&&t===oy)return 0;if(e===oy)return 1;if(t===oy)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=_g(r[o],s[o]);if(0!==e)return e;const t=cy(n[r[o]],i[s[o]]);if(0!==t)return t}return _g(r.length,s.length)}(e.mapValue,t.mapValue);default:throw sg()}}function hy(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return _g(e,t);const n=Jg(e),r=Jg(t),i=_g(n.seconds,r.seconds);return 0!==i?i:_g(n.nanos,r.nanos)}function dy(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=cy(n[i],r[i]);if(e)return e}return _g(n.length,r.length)}function fy(e){return py(e)}function py(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Jg(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ey(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Ng.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=py(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${py(e.fields[i])}`;return n+"}"}(e.mapValue):sg()}function my(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function gy(e){return!!e&&"integerValue"in e}function yy(e){return!!e&&"arrayValue"in e}function vy(e){return!!e&&"nullValue"in e}function wy(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function by(e){return!!e&&"mapValue"in e}function _y(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zg(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=_y(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_y(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Ey{constructor(e){this.value=e}static empty(){return new Ey({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!by(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_y(t)}setAll(e){let t=xg.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_y(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());by(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ly(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];by(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){zg(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Ey(_y(this.value))}}function Sy(e){const t=[];return zg(e.fields,(e,n)=>{const r=new xg([e]);if(by(n)){const e=Sy(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Gg(t)
/**
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
 */}class ky{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ky(e,0,kg.min(),kg.min(),kg.min(),Ey.empty(),0)}static newFoundDocument(e,t,n,r){return new ky(e,1,t,kg.min(),n,r,0)}static newNoDocument(e,t){return new ky(e,2,t,kg.min(),kg.min(),Ey.empty(),0)}static newUnknownDocument(e,t){return new ky(e,3,t,kg.min(),kg.min(),Ey.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(kg.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ey.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ey.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=kg.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ky&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ky(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Ty{constructor(e,t){this.position=e,this.inclusive=t}}function Iy(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ng.comparator(Ng.fromName(o.referenceValue),n.key):cy(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Cy(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ly(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class xy{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ny(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Ay{}class Ry extends Ay{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Uy(e,t,n):"array-contains"===t?new By(e,n):"in"===t?new $y(e,n):"not-in"===t?new qy(e,n):"array-contains-any"===t?new Hy(e,n):new Ry(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Vy(e,n):new jy(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(cy(t,this.value)):null!==t&&ay(this.value)===ay(t)&&this.matchesComparison(cy(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return sg()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dy extends Ay{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Dy(e,t)}matches(e){return Py(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Py(e){return"and"===e.op}function Ly(e){return function(e){for(const t of e.filters)if(t instanceof Dy)return!1;return!0}(e)&&Py(e)}function Oy(e){if(e instanceof Ry)return e.field.canonicalString()+e.op.toString()+fy(e.value);if(Ly(e))return e.filters.map(e=>Oy(e)).join(",");{const t=e.filters.map(e=>Oy(e)).join(",");return`${e.op}(${t})`}}function My(e,t){return e instanceof Ry?(n=e,(r=t)instanceof Ry&&n.op===r.op&&n.field.isEqual(r.field)&&ly(n.value,r.value)):e instanceof Dy?function(e,t){return t instanceof Dy&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&My(n,t.filters[r]),!0)}(e,t):void sg();var n,r}function Fy(e){return e instanceof Ry?`${(t=e).field.canonicalString()} ${t.op} ${fy(t.value)}`:e instanceof Dy?function(e){return e.op.toString()+" {"+e.getFilters().map(Fy).join(" ,")+"}"}(e):"Filter";var t}class Uy extends Ry{constructor(e,t,n){super(e,t,n),this.key=Ng.fromName(n.referenceValue)}matches(e){const t=Ng.comparator(e.key,this.key);return this.matchesComparison(t)}}class Vy extends Ry{constructor(e,t){super(e,"in",t),this.keys=zy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jy extends Ry{constructor(e,t){super(e,"not-in",t),this.keys=zy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zy(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>Ng.fromName(e.referenceValue))}class By extends Ry{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yy(t)&&uy(t.arrayValue,this.value)}}class $y extends Ry{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&uy(this.value.arrayValue,t)}}class qy extends Ry{constructor(e,t){super(e,"not-in",t)}matches(e){if(uy(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!uy(this.value.arrayValue,t)}}class Hy extends Ry{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yy(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>uy(this.value.arrayValue,e))}}
/**
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
 */class Ky{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function Wy(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ky(e,t,n,r,i,s,o)}function Gy(e){const t=ag(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Oy(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),Ug(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>fy(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>fy(e)).join(",")),t.ue=e}return t.ue}function Qy(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ny(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!My(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Cy(e.startAt,t.startAt)&&Cy(e.endAt,t.endAt)}function Yy(e){return Ng.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */class Xy{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Jy(e){return new Xy(e)}function Zy(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ev(e){return null!==e.collectionGroup}function tv(e){const t=ag(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Kg(xg.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new xy(r,n))}),e.has(xg.keyField().canonicalString())||t.ce.push(new xy(xg.keyField(),n))}return t.ce}function nv(e){const t=ag(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return Wy(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new xy(e.field,t)});const n=e.endAt?new Ty(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ty(e.startAt.position,e.startAt.inclusive):null;return Wy(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,tv(e))),t.le}function rv(e,t){const n=e.filters.concat([t]);return new Xy(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function iv(e,t,n){return new Xy(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sv(e,t){return Qy(nv(e),nv(t))&&e.limitType===t.limitType}function ov(e){return`${Gy(nv(e))}|lt:${e.limitType}`}function av(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Fy(e)).join(", ")}]`),Ug(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>fy(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>fy(e)).join(",")),`Target(${t})`}(nv(e))}; limitType=${e.limitType})`}function lv(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ng.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of tv(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Iy(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,tv(n),r)||n.endAt&&!function(e,t,n){const r=Iy(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,tv(n),r)));var n,r}function uv(e){return(t,n)=>{let r=!1;for(const i of tv(e)){const e=cv(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function cv(e,t,n){const r=e.field.isKeyField()?Ng.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?cy(r,i):sg()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return sg()}}
/**
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
 */class hv{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zg(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return Bg(this.inner)}size(){return this.innerSize}}
/**
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
 */const dv=new $g(Ng.comparator);function fv(){return dv}const pv=new $g(Ng.comparator);function mv(...e){let t=pv;for(const n of e)t=t.insert(n.key,n);return t}function gv(e){let t=pv;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function yv(){return wv()}function vv(){return wv()}function wv(){return new hv(e=>e.toString(),(e,t)=>e.isEqual(t))}const bv=new $g(Ng.comparator),_v=new Kg(Ng.comparator);function Ev(...e){let t=_v;for(const n of e)t=t.add(n);return t}const Sv=new Kg(_g);
/**
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
 */
function kv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vg(t)?"-0":t}}function Tv(e){return{integerValue:""+e}}function Iv(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Vg(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Tv(t):kv(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Cv{constructor(){this._=void 0}}function xv(e,t,n){return e instanceof Rv?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ty(t)&&(t=ny(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Dv?Pv(e,t):e instanceof Lv?Ov(e,t):function(e,t){const n=Av(e,t),r=Fv(n)+Fv(e.Pe);return gy(n)&&gy(e.Pe)?Tv(r):kv(e.serializer,r)}(e,t)}function Nv(e,t,n){return e instanceof Dv?Pv(e,t):e instanceof Lv?Ov(e,t):n}function Av(e,t){return e instanceof Mv?gy(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Rv extends Cv{}class Dv extends Cv{constructor(e){super(),this.elements=e}}function Pv(e,t){const n=Uv(t);for(const r of e.elements)n.some(e=>ly(e,r))||n.push(r);return{arrayValue:{values:n}}}class Lv extends Cv{constructor(e){super(),this.elements=e}}function Ov(e,t){let n=Uv(t);for(const r of e.elements)n=n.filter(e=>!ly(e,r));return{arrayValue:{values:n}}}class Mv extends Cv{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Fv(e){return Zg(e.integerValue||e.doubleValue)}function Uv(e){return yy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class Vv{constructor(e,t){this.field=e,this.transform=t}}class jv{constructor(e,t){this.version=e,this.transformResults=t}}class zv{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zv}static exists(e){return new zv(void 0,e)}static updateTime(e){return new zv(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bv(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class $v{}function qv(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ew(e.key,zv.none()):new Qv(e.key,e.data,zv.none());{const n=e.data,r=Ey.empty();let i=new Kg(xg.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Yv(e.key,r,new Gg(i.toArray()),zv.none())}}function Hv(e,t,n){var r;e instanceof Qv?function(e,t,n){const r=e.value.clone(),i=Jv(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Yv?function(e,t,n){if(!Bv(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Jv(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Xv(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Kv(e,t,n,r){return e instanceof Qv?function(e,t,n,r){if(!Bv(e.precondition,t))return n;const i=e.value.clone(),s=Zv(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Yv?function(e,t,n,r){if(!Bv(e.precondition,t))return n;const i=Zv(e.fieldTransforms,r,t),s=t.data;return s.setAll(Xv(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(i=t,s=n,Bv(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Wv(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Av(r.transform,e||null);null!=i&&(null===n&&(n=Ey.empty()),n.set(r.field,i))}return n||null}function Gv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Eg(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Dv&&r instanceof Dv||n instanceof Lv&&r instanceof Lv?Eg(n.elements,r.elements,ly):n instanceof Mv&&r instanceof Mv?ly(n.Pe,r.Pe):n instanceof Rv&&r instanceof Rv);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class Qv extends $v{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yv extends $v{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xv(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Jv(e,t,n){const r=new Map;og(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Nv(o,a,n[i]))}return r}function Zv(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,xv(e,s,t))}return r}class ew extends $v{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tw extends $v{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class nw{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Hv(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Kv(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Kv(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=vv();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=qv(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(kg.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ev())}isEqual(e){return this.batchId===e.batchId&&Eg(this.mutations,e.mutations,(e,t)=>Gv(e,t))&&Eg(this.baseMutations,e.baseMutations,(e,t)=>Gv(e,t))}}class rw{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){og(e.mutations.length===n.length);let r=function(){return bv}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new rw(e,t,n,r)}}
/**
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
 */class iw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class sw{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var ow,aw;function lw(e){if(void 0===e)return ng("GRPC error has no .code"),lg.UNKNOWN;switch(e){case ow.OK:return lg.OK;case ow.CANCELLED:return lg.CANCELLED;case ow.UNKNOWN:return lg.UNKNOWN;case ow.DEADLINE_EXCEEDED:return lg.DEADLINE_EXCEEDED;case ow.RESOURCE_EXHAUSTED:return lg.RESOURCE_EXHAUSTED;case ow.INTERNAL:return lg.INTERNAL;case ow.UNAVAILABLE:return lg.UNAVAILABLE;case ow.UNAUTHENTICATED:return lg.UNAUTHENTICATED;case ow.INVALID_ARGUMENT:return lg.INVALID_ARGUMENT;case ow.NOT_FOUND:return lg.NOT_FOUND;case ow.ALREADY_EXISTS:return lg.ALREADY_EXISTS;case ow.PERMISSION_DENIED:return lg.PERMISSION_DENIED;case ow.FAILED_PRECONDITION:return lg.FAILED_PRECONDITION;case ow.ABORTED:return lg.ABORTED;case ow.OUT_OF_RANGE:return lg.OUT_OF_RANGE;case ow.UNIMPLEMENTED:return lg.UNIMPLEMENTED;case ow.DATA_LOSS:return lg.DATA_LOSS;default:return sg()}}(aw=ow||(ow={}))[aw.OK=0]="OK",aw[aw.CANCELLED=1]="CANCELLED",aw[aw.UNKNOWN=2]="UNKNOWN",aw[aw.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",aw[aw.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",aw[aw.NOT_FOUND=5]="NOT_FOUND",aw[aw.ALREADY_EXISTS=6]="ALREADY_EXISTS",aw[aw.PERMISSION_DENIED=7]="PERMISSION_DENIED",aw[aw.UNAUTHENTICATED=16]="UNAUTHENTICATED",aw[aw.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",aw[aw.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",aw[aw.ABORTED=10]="ABORTED",aw[aw.OUT_OF_RANGE=11]="OUT_OF_RANGE",aw[aw.UNIMPLEMENTED=12]="UNIMPLEMENTED",aw[aw.INTERNAL=13]="INTERNAL",aw[aw.UNAVAILABLE=14]="UNAVAILABLE",aw[aw.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const uw=new Um([4294967295,4294967295],0);function cw(e){const t=(new TextEncoder).encode(e),n=new Vm;return n.update(t),new Uint8Array(n.digest())}function hw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Um([n,r],0),new Um([i,s],0)]}class dw{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new fw(`Invalid padding: ${t}`);if(n<0)throw new fw(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new fw(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new fw(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Um.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Um.fromNumber(n)));return 1===r.compare(uw)&&(r=new Um([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=cw(e),[n,r]=hw(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new dw(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.Ie)return;const t=cw(e),[n,r]=hw(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class fw extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class pw{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,mw.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new pw(kg.min(),r,new $g(_g),fv(),Ev())}}class mw{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new mw(n,t,Ev(),Ev(),Ev())}}
/**
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
 */class gw{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class yw{constructor(e,t){this.targetId=e,this.me=t}}class vw{constructor(e,t,n=Yg.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ww{constructor(){this.fe=0,this.ge=Ew(),this.pe=Yg.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ev(),t=Ev(),n=Ev();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:sg()}}),new mw(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Ew()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,og(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bw{constructor(e){this.Le=e,this.Be=new Map,this.ke=fv(),this.qe=_w(),this.Qe=new $g(_g)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:sg()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(Yy(i))if(0===n){const e=new Ng(i.path);this.Ue(t,e,ky.newNoDocument(e,kg.min()))}else og(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=ey(n).toUint8Array()}catch(a){if(a instanceof Qg)return rg("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new dw(s,r,i)}catch(a){return rg(a instanceof fw?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)}),r}rt(e){const t=new Map;this.Be.forEach((n,r)=>{const i=this.Je(r);if(i){if(n.current&&Yy(i.target)){const t=new Ng(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,ky.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}});let n=Ev();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));const r=new pw(e,t,this.Qe,this.ke,n);return this.ke=fv(),this.qe=_w(),this.Qe=new $g(_g),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ww,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Kg(_g),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||tg("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ww),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function _w(){return new $g(Ng.comparator)}function Ew(){return new $g(Ng.comparator)}const Sw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Tw=(()=>({and:"AND",or:"OR"}))();class Iw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cw(e,t){return e.useProto3Json||Ug(t)?t:{value:t}}function xw(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nw(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Aw(e,t){return xw(e,t.toTimestamp())}function Rw(e){return og(!!e),kg.fromTimestamp(function(e){const t=Jg(e);return new Sg(t.seconds,t.nanos)}(e))}function Dw(e,t){return Pw(e,t).canonicalString()}function Pw(e,t){const n=(r=e,new Ig(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Lw(e){const t=Ig.fromString(e);return og(Jw(t)),t}function Ow(e,t){return Dw(e.databaseId,t.path)}function Mw(e,t){const n=Lw(t);if(n.get(1)!==e.databaseId.projectId)throw new ug(lg.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ug(lg.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ng(Vw(n))}function Fw(e,t){return Dw(e.databaseId,t)}function Uw(e){return new Ig(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Vw(e){return og(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function jw(e,t,n){return{name:Ow(e,t),fields:n.value.mapValue.fields}}function zw(e,t){return{documents:[Fw(e,t.path)]}}function Bw(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fw(e,i);const s=function(e){if(0!==e.length)return Yw(Dy.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map(e=>{return{field:Gw((t=e).field),direction:Hw(t.dir)};var t})}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cw(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i};var l}function $w(e){let t=function(e){const t=Lw(e);return 4===t.length?Ig.emptyPath():Vw(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){og(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=qw(e);return t instanceof Dy&&Ly(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>{return new xy(Qw((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ug(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Ty(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ty(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new Xy(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",l,u)}function qw(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Qw(e.unaryFilter.field);return Ry.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Qw(e.unaryFilter.field);return Ry.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qw(e.unaryFilter.field);return Ry.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Qw(e.unaryFilter.field);return Ry.create(i,"!=",{nullValue:"NULL_VALUE"});default:return sg()}}(e):void 0!==e.fieldFilter?(t=e,Ry.create(Qw(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return sg()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Dy.create(e.compositeFilter.filters.map(e=>qw(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return sg()}}(e.compositeFilter.op))}(e):sg();var t}function Hw(e){return Sw[e]}function Kw(e){return kw[e]}function Ww(e){return Tw[e]}function Gw(e){return{fieldPath:e.canonicalString()}}function Qw(e){return xg.fromServerFormat(e.fieldPath)}function Yw(e){return e instanceof Ry?function(e){if("=="===e.op){if(wy(e.value))return{unaryFilter:{field:Gw(e.field),op:"IS_NAN"}};if(vy(e.value))return{unaryFilter:{field:Gw(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(wy(e.value))return{unaryFilter:{field:Gw(e.field),op:"IS_NOT_NAN"}};if(vy(e.value))return{unaryFilter:{field:Gw(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gw(e.field),op:Kw(e.op),value:e.value}}}(e):e instanceof Dy?function(e){const t=e.getFilters().map(e=>Yw(e));return 1===t.length?t[0]:{compositeFilter:{op:Ww(e.op),filters:t}}}(e):sg()}function Xw(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Jw(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Zw{constructor(e,t,n,r,i=kg.min(),s=kg.min(),o=Yg.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Zw(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zw(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class eb{constructor(e){this.ct=e}}function tb(e){const t=$w({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iv(t,t.limit,"L"):t}
/**
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
 */class nb{constructor(){this.un=new rb}addToCollectionParentIndex(e,t){return this.un.add(t),Og.resolve()}getCollectionParents(e,t){return Og.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Og.resolve()}deleteFieldIndex(e,t){return Og.resolve()}deleteAllFieldIndexes(e){return Og.resolve()}createTargetIndexes(e,t){return Og.resolve()}getDocumentsMatchingTarget(e,t){return Og.resolve(null)}getIndexType(e,t){return Og.resolve(0)}getFieldIndexes(e,t){return Og.resolve([])}getNextCollectionGroupToUpdate(e){return Og.resolve(null)}getMinOffset(e,t){return Og.resolve(Rg.min())}getMinOffsetFromCollectionGroup(e,t){return Og.resolve(Rg.min())}updateCollectionGroup(e,t,n){return Og.resolve()}updateIndexEntries(e,t){return Og.resolve()}}class rb{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Kg(Ig.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Kg(Ig.comparator)).toArray()}}
/**
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
 */class ib{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ib(0)}static kn(){return new ib(-1)}}
/**
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
 */class sb{constructor(){this.changes=new hv(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ky.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Og.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class ob{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class ab{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Kv(n.mutation,e,Gg.empty(),Sg.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Ev()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Ev()){const r=yv();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=mv();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=yv();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Ev()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=fv();const s=wv(),o=wv();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Yv)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Kv(o.mutation,t,o.mutation.getFieldMask(),Sg.now())):s.set(t.key,Gg.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new ob(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=wv();let r=new $g((e,t)=>e-t),i=Ev();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Gg.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Ev()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,u=vv();l.forEach(e=>{if(!i.has(e)){const r=qv(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Og.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Ng.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):ev(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Og.resolve(yv());let o=-1,a=i;return s.next(t=>Og.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Og.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,Ev())).next(e=>({batchId:o,changes:gv(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ng(t)).next(e=>{let t=mv();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=mv();return this.indexManager.getCollectionParents(e,i).next(o=>Og.forEach(o,o=>{const a=(l=t,u=o.child(i),new Xy(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ky.newInvalidDocument(r)))});let n=mv();return e.forEach((e,r)=>{const s=i.get(e);void 0!==s&&Kv(s.mutation,r,Gg.empty(),Sg.now()),lv(t,r)&&(n=n.insert(e,r))}),n})}}
/**
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
 */class lb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Og.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:Rw(n.createTime)}),Og.resolve();var n}getNamedQuery(e,t){return Og.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:tb(n.bundledQuery),readTime:Rw(n.readTime)}),Og.resolve();var n}}
/**
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
 */class ub{constructor(){this.overlays=new $g(Ng.comparator),this.Ir=new Map}getOverlay(e,t){return Og.resolve(this.overlays.get(t))}getOverlays(e,t){const n=yv();return Og.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),Og.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Ir.delete(n)),Og.resolve()}getOverlaysForCollection(e,t,n){const r=yv(),i=t.length+1,s=new Ng(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Og.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new $g((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=yv(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=yv(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Og.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new iw(t,n));let i=this.Ir.get(t);void 0===i&&(i=Ev(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cb{constructor(){this.sessionToken=Yg.EMPTY_BYTE_STRING}getSessionToken(e){return Og.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Og.resolve()}}
/**
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
 */class hb{constructor(){this.Tr=new Kg(db.Er),this.dr=new Kg(db.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new db(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Vr(new db(e,t))}mr(e,t){e.forEach(e=>this.removeReference(e,t))}gr(e){const t=new Ng(new Ig([])),n=new db(t,e),r=new db(t,e+1),i=[];return this.dr.forEachInRange([n,r],e=>{this.Vr(e),i.push(e.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Ng(new Ig([])),n=new db(t,e),r=new db(t,e+1);let i=Ev();return this.dr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new db(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class db{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Ng.comparator(e.key,t.key)||_g(e.wr,t.wr)}static Ar(e,t){return _g(e.wr,t.wr)||Ng.comparator(e.key,t.key)}}
/**
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
 */class fb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Kg(db.Er)}checkEmpty(e){return Og.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new nw(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.br=this.br.add(new db(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Og.resolve(s)}lookupMutationBatch(e,t){return Og.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return Og.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Og.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Og.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new db(t,0),r=new db(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],e=>{const t=this.Dr(e.wr);i.push(t)}),Og.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Kg(_g);return t.forEach(e=>{const t=new db(e,0),r=new db(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],e=>{n=n.add(e.wr)})}),Og.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ng.isDocumentKey(i)||(i=i.child(""));const s=new db(new Ng(i),0);let o=new Kg(_g);return this.br.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.wr)),!0)},s),Og.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach(e=>{const n=this.Dr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){og(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Og.forEach(t.mutations,r=>{const i=new db(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new db(t,0),r=this.br.firstAfterOrEqual(n);return Og.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Og.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class pb{constructor(e){this.Mr=e,this.docs=new $g(Ng.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Og.resolve(n?n.document.mutableCopy():ky.newInvalidDocument(t))}getEntries(e,t){let n=fv();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ky.newInvalidDocument(e))}),Og.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=fv();const s=t.path,o=new Ng(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Dg(Ag(o),n)<=0||(r.has(o.key)||lv(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Og.resolve(i)}getAllFromCollectionGroup(e,t,n,r){sg()}Or(e,t){return Og.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new mb(this)}getSize(e){return Og.resolve(this.size)}}class mb extends sb{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)}),Og.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
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
 */class gb{constructor(e){this.persistence=e,this.Nr=new hv(e=>Gy(e),Qy),this.lastRemoteSnapshotVersion=kg.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hb,this.targetCount=0,this.kr=ib.Bn()}forEachTarget(e,t){return this.Nr.forEach((e,n)=>t(n)),Og.resolve()}getLastRemoteSnapshotVersion(e){return Og.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Og.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Og.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Og.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ib(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Og.resolve()}updateTargetData(e,t){return this.Kn(t),Og.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Og.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Og.waitFor(i).next(()=>r)}getTargetCount(e){return Og.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Og.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Og.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Og.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Og.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Og.resolve(n)}containsKey(e,t){return Og.resolve(this.Br.containsKey(t))}}
/**
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
 */class yb{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Fg(0),this.Kr=!1,this.Kr=!0,this.$r=new cb,this.referenceDelegate=e(this),this.Ur=new gb(this),this.indexManager=new nb,this.remoteDocumentCache=new pb(e=>this.referenceDelegate.Wr(e)),this.serializer=new eb(t),this.Gr=new lb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ub,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new fb(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){tg("MemoryPersistence","Starting transaction:",e);const r=new vb(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(e=>this.referenceDelegate.jr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Hr(e,t){return Og.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class vb extends Pg{constructor(e){super(),this.currentSequenceNumber=e}}class wb{constructor(e){this.persistence=e,this.Jr=new hb,this.Yr=null}static Zr(e){return new wb(e)}get Xr(){if(this.Yr)return this.Yr;throw sg()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Og.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Og.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Og.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(e=>this.Xr.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Xr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Og.forEach(this.Xr,n=>{const r=Ng.fromPath(n);return this.ei(e,r).next(e=>{e||t.removeEntry(r,kg.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Og.or([()=>Og.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
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
 */class bb{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=Ev(),r=Ev();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new bb(e,t.fromCache,n,r)}}
/**
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
 */class _b{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class Eb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=gh()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(mh())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Zi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new _b;return this.Xi(e,t,n).next(r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)})}).next(()=>i.result)}es(e,t,n,r){return n.documentReadCount<this.ji?(eg()<=Ah.DEBUG&&tg("QueryEngine","SDK will not create cache indexes for query:",av(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Og.resolve()):(eg()<=Ah.DEBUG&&tg("QueryEngine","Query:",av(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(eg()<=Ah.DEBUG&&tg("QueryEngine","The SDK decides to create cache indexes for query:",av(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nv(t))):Og.resolve())}Yi(e,t){if(Zy(t))return Og.resolve(null);let n=nv(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=iv(t,null,"F"),n=nv(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=Ev(...r);return this.Ji.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,iv(t,null,"F")):this.rs(e,s,t,n)}))})))}Zi(e,t,n,r){return Zy(t)||r.isEqual(kg.min())?Og.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const s=this.ts(t,i);return this.ns(t,s,n,r)?Og.resolve(null):(eg()<=Ah.DEBUG&&tg("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),av(t)),this.rs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=kg.fromTimestamp(1e9===r?new Sg(n+1,0):new Sg(n,r));return new Rg(i,Ng.empty(),t)}(r,-1)).next(e=>e))})}ts(e,t){let n=new Kg(uv(e));return t.forEach((t,r)=>{lv(e,r)&&(n=n.add(r))}),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return eg()<=Ah.DEBUG&&tg("QueryEngine","Using full collection scan to execute query:",av(t)),this.Ji.getDocumentsMatchingQuery(e,t,Rg.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
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
 */class Sb{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new $g(_g),this._s=new hv(e=>Gy(e),Qy),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ab(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}async function kb(e,t){const n=ag(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=Ev();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({hs:e,removedBatchIds:i,addedBatchIds:s}))})})}function Tb(e){const t=ag(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Ib(e,t){const n=ag(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const o=[];t.targetChanges.forEach((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Ur.addMatchingKeys(e,s.addedDocuments,a)));let u=l.withSequenceNumber(e.currentSequenceNumber);var c,h,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(Yg.EMPTY_BYTE_STRING,kg.min()).withLastLimboFreeSnapshotVersion(kg.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(c=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ur.updateTargetData(e,u))});let a=fv(),l=Ev();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(function(e,t,n){let r=Ev(),i=Ev();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=fv();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(kg.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):tg("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Ps:r,Is:i}})}(e,s,t.documentUpdates).next(e=>{a=e.Ps,l=e.Is})),!r.isEqual(kg.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next(t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Og.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,l)).next(()=>a)}).then(e=>(n.os=i,e))}function Cb(e,t){const n=ag(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function xb(e,t,n){const r=ag(e),i=r.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(o){if(!Mg(o))throw o;tg("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Nb(e,t,n){const r=ag(e);let i=kg.min(),s=Ev();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=ag(e),i=r._s.get(n);return void 0!==i?Og.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,nv(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:kg.min(),n?s:Ev())).next(e=>(function(e,t,n){let r=e.us.get(t)||kg.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.us.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ts:s})))}class Ab{constructor(){this.activeTargetIds=Sv}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rb{constructor(){this.so=new Ab,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ab,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Db{_o(e){}shutdown(){}}
/**
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
 */class Pb{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){tg("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){tg("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Lb=null;function Ob(){return null===Lb?Lb=268435456+Math.round(2147483648*Math.random()):Lb++,"0x"+Lb.toString(16)
/**
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
 */}const Mb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Fb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
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
 */const Ub="WebChannelConnection";class Vb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const s=Ob(),o=this.xo(e,t.toUriEncodedString());tg("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,i),this.No(e,o,a,n).then(t=>(tg("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw rg("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jm,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}xo(e,t){const n=Mb[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=Ob();return new Promise((s,o)=>{const a=new zm;a.setWithCredentials(!0),a.listenOnce($m.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qm.NO_ERROR:const t=a.getResponseJson();tg(Ub,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case qm.TIMEOUT:tg(Ub,`RPC '${e}' ${i} timed out`),o(new ug(lg.DEADLINE_EXCEEDED,"Request time out"));break;case qm.HTTP_ERROR:const n=a.getStatus();if(tg(Ub,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(lg).indexOf(t)>=0?t:lg.UNKNOWN}(t.status);o(new ug(e,t.message))}else o(new ug(lg.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ug(lg.UNAVAILABLE,"Connection failed."));break;default:sg()}}finally{tg(Ub,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);tg(Ub,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)})}Bo(e,t,n){const r=Ob(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Gm(),o=Wm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");tg(Ub,`Creating RPC '${e}' stream ${r}: ${u}`,a);const c=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Fb({Io:t=>{d?tg(Ub,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(tg(Ub,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),tg(Ub,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},To:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return p(c,Bm.EventType.OPEN,()=>{d||(tg(Ub,`RPC '${e}' stream ${r} transport opened.`),f.yo())}),p(c,Bm.EventType.CLOSE,()=>{d||(d=!0,tg(Ub,`RPC '${e}' stream ${r} transport closed`),f.So())}),p(c,Bm.EventType.ERROR,t=>{d||(d=!0,rg(Ub,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new ug(lg.UNAVAILABLE,"The operation could not be completed")))}),p(c,Bm.EventType.MESSAGE,t=>{var n;if(!d){const i=t.data[0];og(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){tg(Ub,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=ow[e];if(void 0!==t)return lw(t)}(t),i=o.message;void 0===n&&(n=lg.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.So(new ug(n,i)),c.close()}else tg(Ub,`RPC '${e}' stream ${r} received:`,i),f.bo(i)}}),p(o,Km.STAT_EVENT,t=>{t.stat===Hm.PROXY?tg(Ub,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Hm.NOPROXY&&tg(Ub,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.wo()},0),f}}function jb(){return"undefined"!=typeof document?document:null}
/**
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
 */function zb(e){return new Iw(e,!0)}
/**
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
 */class Bb{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&tg("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
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
 */class $b{constructor(e,t,n,r,i,s,o,a){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Bb(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===lg.RESOURCE_EXHAUSTED?(ng(t.toString()),ng("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===lg.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Yo===t&&this.P_(e,n)},t=>{e(()=>{const e=new ug(lg.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(e=>{n(()=>this.I_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.e_?this.E_(e):this.onNext(e))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return tg("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(tg("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qb extends $b{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:sg(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(og(void 0===t||"string"==typeof t),Yg.fromBase64String(t||"")):(og(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Yg.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?lg.UNKNOWN:lw(e.code);return new ug(t,e.message||"")}(a);n=new vw(i,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mw(e,r.document.name),s=Rw(r.document.updateTime),o=r.document.createTime?Rw(r.document.createTime):kg.min(),a=new Ey({mapValue:{fields:r.document.fields}}),l=ky.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new gw(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Mw(e,r.document),s=r.readTime?Rw(r.readTime):kg.min(),o=ky.newNoDocument(i,s),a=r.removedTargetIds||[];n=new gw([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Mw(e,r.document),s=r.removedTargetIds||[];n=new gw([],s,i,null)}else{if(!("filter"in t))return sg();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new sw(r,i),o=e.targetId;n=new yw(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return kg.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?kg.min():t.readTime?Rw(t.readTime):kg.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Uw(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Yy(r)?{documents:zw(e,r)}:{query:Bw(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Nw(e,t.resumeToken);const r=Cw(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(kg.min())>0){n.readTime=xw(e,t.snapshotVersion.toTimestamp());const r=Cw(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return sg()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Uw(this.serializer),t.removeTarget=e,this.a_(t)}}class Hb extends $b{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return og(!!e.streamToken),this.lastStreamToken=e.streamToken,og(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){og(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(og(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?Rw(e.updateTime):Rw(t);return n.isEqual(kg.min())&&(n=Rw(t)),new jv(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Rw(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Uw(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof Qv)n={update:jw(e,t.key,t.value)};else if(t instanceof ew)n={delete:Ow(e,t.key)};else if(t instanceof Yv)n={update:jw(e,t.key,t.data),updateMask:Xw(t.fieldMask)};else{if(!(t instanceof tw))return sg();n={verify:Ow(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Rv)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Dv)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Lv)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Mv)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw sg()}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Aw(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:sg())),n;var r,i}(this.serializer,e))};this.a_(t)}}
/**
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
 */class Kb extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new ug(lg.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Mo(e,Pw(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===lg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ug(lg.UNKNOWN,e.toString())})}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Lo(e,Pw(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===lg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ug(lg.UNKNOWN,e.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Wb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ng(t),this.D_=!1):tg("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
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
 */class Gb{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(e=>{n.enqueueAndForget(async()=>{r_(this)&&(tg("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ag(e);t.L_.add(4),await Yb(t),t.q_.set("Unknown"),t.L_.delete(4),await Qb(t)}(this))})}),this.q_=new Wb(n,r)}}async function Qb(e){if(r_(e))for(const t of e.B_)await t(!0)}async function Yb(e){for(const t of e.B_)await t(!1)}function Xb(e,t){const n=ag(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),n_(n)?t_(n):__(n).r_()&&Zb(n,t))}function Jb(e,t){const n=ag(e),r=__(n);n.N_.delete(t),r.r_()&&e_(n,t),0===n.N_.size&&(r.r_()?r.o_():r_(n)&&n.q_.set("Unknown"))}function Zb(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(kg.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}__(e).A_(t)}function e_(e,t){e.Q_.xe(t),__(e).R_(t)}function t_(e){e.Q_=new bw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),__(e).start(),e.q_.v_()}function n_(e){return r_(e)&&!__(e).n_()&&e.N_.size>0}function r_(e){return 0===ag(e).L_.size}function i_(e){e.Q_=void 0}async function s_(e){e.q_.set("Online")}async function o_(e){e.N_.forEach((t,n)=>{Zb(e,t)})}async function a_(e,t){i_(e),n_(e)?(e.q_.M_(t),t_(e)):e.q_.set("Unknown")}async function l_(e,t,n){if(e.q_.set("Online"),t instanceof vw&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){tg("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await u_(e,r)}else if(t instanceof gw?e.Q_.Ke(t):t instanceof yw?e.Q_.He(t):e.Q_.We(t),!n.isEqual(kg.min()))try{const t=await Tb(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(Yg.EMPTY_BYTE_STRING,r.snapshotVersion)),e_(e,t);const i=new Zw(r.target,t,n,r.sequenceNumber);Zb(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){tg("RemoteStore","Failed to raise snapshot:",i),await u_(e,i)}}async function u_(e,t,n){if(!Mg(t))throw t;e.L_.add(1),await Yb(e),e.q_.set("Offline"),n||(n=()=>Tb(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{tg("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Qb(e)})}function c_(e,t){return t().catch(n=>u_(e,n,t))}async function h_(e){const t=ag(e),n=E_(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;d_(t);)try{const e=await Cb(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,f_(t,e)}catch(i){await u_(t,i)}p_(t)&&m_(t)}function d_(e){return r_(e)&&e.O_.length<10}function f_(e,t){e.O_.push(t);const n=E_(e);n.r_()&&n.V_&&n.m_(t.mutations)}function p_(e){return r_(e)&&!E_(e).n_()&&e.O_.length>0}function m_(e){E_(e).start()}async function g_(e){E_(e).p_()}async function y_(e){const t=E_(e);for(const n of e.O_)t.m_(n.mutations)}async function v_(e,t,n){const r=e.O_.shift(),i=rw.from(r,t,n);await c_(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await h_(e)}async function w_(e,t){t&&E_(e).V_&&await async function(e,t){if(function(e){switch(e){default:return sg();case lg.CANCELLED:case lg.UNKNOWN:case lg.DEADLINE_EXCEEDED:case lg.RESOURCE_EXHAUSTED:case lg.INTERNAL:case lg.UNAVAILABLE:case lg.UNAUTHENTICATED:return!1;case lg.INVALID_ARGUMENT:case lg.NOT_FOUND:case lg.ALREADY_EXISTS:case lg.PERMISSION_DENIED:case lg.FAILED_PRECONDITION:case lg.ABORTED:case lg.OUT_OF_RANGE:case lg.UNIMPLEMENTED:case lg.DATA_LOSS:return!0}}(n=t.code)&&n!==lg.ABORTED){const n=e.O_.shift();E_(e).s_(),await c_(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await h_(e)}var n}(e,t),p_(e)&&m_(e)}async function b_(e,t){const n=ag(e);n.asyncQueue.verifyOperationInProgress(),tg("RemoteStore","RemoteStore received new credentials");const r=r_(n);n.L_.add(3),await Yb(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Qb(n)}function __(e){return e.K_||(e.K_=function(e,t,n){const r=ag(e);return r.w_(),new qb(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:s_.bind(null,e),Ro:o_.bind(null,e),mo:a_.bind(null,e),d_:l_.bind(null,e)}),e.B_.push(async t=>{t?(e.K_.s_(),n_(e)?t_(e):e.q_.set("Unknown")):(await e.K_.stop(),i_(e))})),e.K_}function E_(e){return e.U_||(e.U_=function(e,t,n){const r=ag(e);return r.w_(),new Hb(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:g_.bind(null,e),mo:w_.bind(null,e),f_:y_.bind(null,e),g_:v_.bind(null,e)}),e.B_.push(async t=>{t?(e.U_.s_(),await h_(e)):(await e.U_.stop(),e.O_.length>0&&(tg("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_
/**
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
 */}class S_{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new cg,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new S_(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ug(lg.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function k_(e,t){if(ng("AsyncQueue",`${t}: ${e}`),Mg(e))return new ug(lg.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class T_{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ng.comparator(t.key,n.key):(e,t)=>Ng.comparator(e.key,t.key),this.keyedMap=mv(),this.sortedSet=new $g(this.comparator)}static emptySet(e){return new T_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof T_))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new T_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class I_{constructor(){this.W_=new $g(Ng.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):sg():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class C_{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new C_(e,t,T_.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sv(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class x_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class N_{constructor(){this.queries=A_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=ag(e),r=n.queries;n.queries=A_(),r.forEach((e,n)=>{for(const r of n.j_)r.onError(t)})}(this,new ug(lg.ABORTED,"Firestore shutting down"))}}function A_(){return new hv(e=>ov(e),sv)}async function R_(e,t){const n=ag(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new x_,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const e=k_(o,`Initialization of query '${av(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&O_(n)}async function D_(e,t){const n=ag(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function P_(e,t){const n=ag(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&O_(n)}function L_(e,t,n){const r=ag(e),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(t)}function O_(e){e.Y_.forEach(e=>{e.next()})}var M_,F_;(F_=M_||(M_={})).ea="default",F_.Cache="cache";class U_{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new C_(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=C_.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==M_.Cache}}
/**
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
 */class V_{constructor(e){this.key=e}}class j_{constructor(e){this.key=e}}class z_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ev(),this.mutatedKeys=Ev(),this.Aa=uv(e),this.Ra=new T_(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new I_,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),c=lv(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ga(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Aa(c,a)>0||l&&this.Aa(c,l)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:o,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return sg()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc)),this.pa(n),r=null!=r&&r;const o=t&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,l=a!==this.Ea;return this.Ea=a,0!==s.length||l?{snapshot:new C_(this.query,e.Ra,i,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new I_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ev(),this.Ra.forEach(e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))});const t=[];return e.forEach(e=>{this.da.has(e)||t.push(new j_(e))}),this.da.forEach(n=>{e.has(n)||t.push(new V_(n))}),t}ba(e){this.Ta=e.Ts,this.da=Ev();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return C_.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class B_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class $_{constructor(e){this.key=e,this.va=!1}}class q_{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new hv(e=>ov(e),sv),this.Ma=new Map,this.xa=new Set,this.Oa=new $g(Ng.comparator),this.Na=new Map,this.La=new hb,this.Ba={},this.ka=new Map,this.qa=ib.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function H_(e,t,n=!0){const r=dE(e);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await W_(r,t,n,!0),i}async function K_(e,t){const n=dE(e);await W_(n,t,!0,!1)}async function W_(e,t,n,r){const i=await function(e,t){const n=ag(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Ur.getTargetData(e,t).next(i=>i?(r=i,Og.resolve(r)):n.Ur.allocateTargetId(e).next(i=>(r=new Zw(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e})}(e.localStore,nv(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await Nb(e.localStore,t.query,!1).then(({documents:e})=>t.view.ma(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return oE(e,t.targetId,a.wa),a.snapshot}(e,t,n,r);const s=await Nb(e.localStore,t,!0),o=new z_(t,s.Ts),a=o.ma(s.documents),l=mw.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);oE(e,n,u.wa);const c=new B_(t,n,o);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Xb(e.remoteStore,i),a}async function G_(e,t,n){const r=ag(e),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(e=>!sv(e,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xb(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Jb(r.remoteStore,i.targetId),iE(r,i.targetId)}).catch(Lg)):(iE(r,i.targetId),await xb(r.localStore,i.targetId,!0))}async function Q_(e,t){const n=ag(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jb(n.remoteStore,r.targetId))}async function Y_(e,t,n){const r=function(e){const t=ag(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=eE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tE.bind(null,t),t}(e);try{const e=await function(e,t){const n=ag(e),r=Sg.now(),i=t.reduce((e,t)=>e.add(t.key),Ev());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=fv(),l=Ev();return n.cs.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=Wv(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Yv(e.key,t,Sy(t.value.mapValue),zv.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:gv(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new $g(_g)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await uE(r,e.changes),await h_(r.remoteStore)}catch(i){const e=k_(i,"Failed to persist write");n.reject(e)}}async function X_(e,t){const n=ag(e);try{const e=await Ib(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Na.get(t);r&&(og(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?og(r.va):e.removedDocuments.size>0&&(og(r.va),r.va=!1))}),await uE(n,e,t)}catch(r){await Lg(r)}}function J_(e,t,n){const r=ag(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=ag(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)}),r&&O_(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Z_(e,t,n){const r=ag(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),s=i&&i.key;if(s){let e=new $g(Ng.comparator);e=e.insert(s,ky.newNoDocument(s,kg.min()));const n=Ev().add(s),i=new pw(kg.min(),new Map,new $g(_g),e,n);await X_(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(t),lE(r)}else await xb(r.localStore,t,!1).then(()=>iE(r,t,n)).catch(Lg)}async function eE(e,t){const n=ag(e),r=t.batch.batchId;try{const e=await function(e,t){const n=ag(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Og.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);og(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ev();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);rE(n,r,null),nE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uE(n,e)}catch(i){await Lg(i)}}async function tE(e,t,n){const r=ag(e);try{const e=await function(e,t){const n=ag(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(og(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);rE(r,t,n),nE(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await uE(r,e)}catch(i){await Lg(i)}}function nE(e,t){(e.ka.get(t)||[]).forEach(e=>{e.resolve()}),e.ka.delete(t)}function rE(e,t,n){const r=ag(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function iE(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(t=>{e.La.containsKey(t)||sE(e,t)})}function sE(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(Jb(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),lE(e))}function oE(e,t,n){for(const r of n)r instanceof V_?(e.La.addReference(r.key,t),aE(e,r)):r instanceof j_?(tg("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||sE(e,r.key)):sg()}function aE(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(tg("SyncEngine","New document in limbo: "+n),e.xa.add(r),lE(e))}function lE(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Ng(Ig.fromString(t)),r=e.qa.next();e.Na.set(r,new $_(n)),e.Oa=e.Oa.insert(n,r),Xb(e.remoteStore,new Zw(nv(Jy(n.path)),r,"TargetPurposeLimboResolution",Fg.oe))}}async function uE(e,t,n){const r=ag(e),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((e,a)=>{o.push(r.Ka(a,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=bb.Wi(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(e,t){const n=ag(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Og.forEach(t,t=>Og.forEach(t.$i,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Og.forEach(t.Ui,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!Mg(r))throw r;tg("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,s))}async function cE(e,t){const n=ag(e);if(!n.currentUser.isEqual(t)){tg("SyncEngine","User change. New user:",t.toKey());const e=await kb(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach(e=>{e.forEach(e=>{e.reject(new ug(lg.CANCELLED,i))})}),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await uE(n,e.hs)}var r,i}function hE(e,t){const n=ag(e),r=n.Na.get(t);if(r&&r.va)return Ev().add(r.key);{let e=Ev();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function dE(e){const t=ag(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=X_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Z_.bind(null,t),t.Ca.d_=P_.bind(null,t.eventManager),t.Ca.$a=L_.bind(null,t.eventManager),t}class fE{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zb(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return function(e,t,n,r){return new Sb(e,t,n,r)}(this.persistence,new Eb,e.initialUser,this.serializer)}Ga(e){return new yb(wb.Zr,this.serializer)}Wa(e){return new Rb}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fE.provider={build:()=>new fE};class pE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>J_(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=cE.bind(null,this.syncEngine),await async function(e,t){const n=ag(e);t?(n.L_.delete(2),await Qb(n)):t||(n.L_.add(2),await Yb(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new N_}createDatastore(e){const t=zb(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Vb(r));var r;return function(e,t,n,r){return new Kb(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>J_(this.syncEngine,e,0),s=Pb.D()?new Pb:new Db,new Gb(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new q_(e,t,n,r,i,s);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=ag(e);tg("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await Yb(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}pE.provider={build:()=>new pE};
/**
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
 */
/**
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
 */
class mE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ng("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
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
 */class gE{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Xm.UNAUTHENTICATED,this.clientId=bg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{tg("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(tg("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cg;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=k_(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function yE(e,t){e.asyncQueue.verifyOperationInProgress(),tg("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await kb(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function vE(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){tg("FirestoreClient","Using user provided OfflineComponentProvider");try{await yE(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===lg.FAILED_PRECONDITION||n.code===lg.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;rg("Error using user provided cache. Falling back to memory cache: "+i),await yE(e,new fE)}}else tg("FirestoreClient","Using default OfflineComponentProvider"),await yE(e,new fE);var n;return e._offlineComponents}(e);tg("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>b_(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>b_(t.remoteStore,n)),e._onlineComponents=t}async function wE(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(tg("FirestoreClient","Using user provided OnlineComponentProvider"),await vE(e,e._uninitializedComponentsProvider._online)):(tg("FirestoreClient","Using default OnlineComponentProvider"),await vE(e,new pE))),e._onlineComponents}async function bE(e){const t=await wE(e),n=t.eventManager;return n.onListen=H_.bind(null,t.syncEngine),n.onUnlisten=G_.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=K_.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Q_.bind(null,t.syncEngine),n}
/**
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
 */
function _E(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const EE=new Map;
/**
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
 */function SE(e,t,n){if(!n)throw new ug(lg.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function kE(e){if(!Ng.isDocumentKey(e))throw new ug(lg.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function TE(e){if(Ng.isDocumentKey(e))throw new ug(lg.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function IE(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":sg()}function CE(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ug(lg.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=IE(e);throw new ug(lg.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */class xE{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ug(lg.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ug(lg.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new ug(lg.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_E(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ug(lg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ug(lg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ug(lg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class NE{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ug(lg.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ug(lg.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xE(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new dg;switch(e.type){case"firstParty":return new gg(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ug(lg.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=EE.get(e);t&&(tg("ComponentProvider","Removing Datastore"),EE.delete(e),t.terminate())}(this),Promise.resolve()}}function AE(e,t,n,r={}){var i;const s=(e=CE(e,NE))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&rg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Xm.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ah(JSON.stringify({alg:"none",type:"JWT"})),ah(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ug(lg.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Xm(s)}e._authCredentials=new fg(new hg(t,n))}}
/**
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
 */class RE{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new RE(this.firestore,e,this._query)}}class DE{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new PE(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new DE(this.firestore,e,this._key)}}class PE extends RE{constructor(e,t,n){super(e,t,Jy(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new DE(this.firestore,null,new Ng(e))}withConverter(e){return new PE(this.firestore,e,this._path)}}function LE(e,t,...n){if(e=Th(e),SE("collection","path",t),e instanceof NE){const r=Ig.fromString(t,...n);return TE(r),new PE(e,null,r)}{if(!(e instanceof DE||e instanceof PE))throw new ug(lg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ig.fromString(t,...n));return TE(r),new PE(e.firestore,null,r)}}function OE(e,t,...n){if(e=Th(e),1===arguments.length&&(t=bg.newId()),SE("doc","path",t),e instanceof NE){const r=Ig.fromString(t,...n);return kE(r),new DE(e,null,new Ng(r))}{if(!(e instanceof DE||e instanceof PE))throw new ug(lg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ig.fromString(t,...n));return kE(r),new DE(e.firestore,e instanceof PE?e.converter:null,new Ng(r))}}
/**
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
 */class ME{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Bb(this,"async_queue_retry"),this.Vu=()=>{const e=jb();e&&tg("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=jb();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=jb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new cg;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Mg(e))throw e;tg("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(e=>{this.Eu=e,this.du=!1;throw ng("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e}).then(e=>(this.du=!1,e))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=S_.createAndSchedule(this,e,t,n,e=>this.yu(e));return this.Tu.push(r),r}fu(){this.Eu&&sg()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class FE extends NE{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ME,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ME(e),this._firestoreClient=void 0,await e}}}function UE(e){if(e._terminated)throw new ug(lg.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,u=i,new iy(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,_E(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,l,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new gE(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
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
 */(e),e._firestoreClient}class VE{constructor(e){this._byteString=e}static fromBase64String(e){try{return new VE(Yg.fromBase64String(e))}catch(t){throw new ug(lg.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new VE(Yg.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class jE{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ug(lg.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xg(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */class zE{constructor(e){this._methodName=e}}
/**
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
 */class BE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ug(lg.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ug(lg.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _g(this._lat,e._lat)||_g(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class $E{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
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
 */const qE=/^__.*__$/;class HE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Yv(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qv(e,this.data,t,this.fieldTransforms)}}function KE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw sg()}}class WE{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new WE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sS(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(KE(this.Cu)&&qE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class GE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||zb(e)}Qu(e,t,n,r=!1){return new WE({Cu:e,methodName:t,qu:n,path:xg.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function QE(e){const t=e._freezeSettings(),n=zb(e._databaseId);return new GE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function YE(e,t,n,r,i,s={}){const o=e.Qu(s.merge||s.mergeFields?2:0,t,n,i);tS("Data must be an object, but it was:",o,r);const a=ZE(r,o);let l,u;if(s.merge)l=new Gg(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=nS(t,r,n);if(!o.contains(i))throw new ug(lg.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);oS(e,i)||e.push(i)}l=new Gg(e),u=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,u=o.fieldTransforms;return new HE(new Ey(a),l,u)}class XE extends zE{_toFieldTransform(e){return new Vv(e.path,new Rv)}isEqual(e){return e instanceof XE}}function JE(e,t){if(eS(e=Th(e)))return tS("Unsupported field value:",t,e),ZE(e,t);if(e instanceof zE)return function(e,t){if(!KE(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=JE(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Th(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Iv(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Sg.fromDate(e);return{timestampValue:xw(t.serializer,n)}}if(e instanceof Sg){const n=new Sg(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:xw(t.serializer,n)}}if(e instanceof BE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof VE)return{bytesValue:Nw(t.serializer,e._byteString)};if(e instanceof DE){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Dw(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof $E)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return kv(n.serializer,e)})}}}}};var n;throw t.Bu(`Unsupported field value: ${IE(e)}`)}(e,t)}function ZE(e,t){const n={};return Bg(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zg(e,(e,r)=>{const i=JE(r,t.Mu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function eS(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Sg||e instanceof BE||e instanceof VE||e instanceof DE||e instanceof zE||e instanceof $E)}function tS(e,t,n){if(!eS(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=IE(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function nS(e,t,n){if((t=Th(t))instanceof jE)return t._internalPath;if("string"==typeof t)return iS(e,t);throw sS("Field path arguments must be of type string or ",e,!1,void 0,n)}const rS=new RegExp("[~\\*/\\[\\]]");function iS(e,t,n){if(t.search(rS)>=0)throw sS(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new jE(...t.split("."))._internalPath}catch(r){throw sS(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sS(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ug(lg.INVALID_ARGUMENT,a+e+l)}function oS(e,t){return e.some(e=>e.isEqual(t))}
/**
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
 */class aS{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new DE(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new lS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(uS("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lS extends aS{data(){return super.data()}}function uS(e,t){return"string"==typeof t?iS(e,t):t instanceof jE?t._internalPath:t._delegate._internalPath}
/**
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
 */class cS{}class hS extends cS{}class dS extends hS{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new dS(e,t,n)}_apply(e){const t=this._parse(e);return gS(e._query,t),new RE(e.firestore,e.converter,rv(e._query,t))}_parse(e){const t=QE(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ug(lg.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){mS(o,s);const t=[];for(const n of o)t.push(pS(r,e,n));a={arrayValue:{values:t}}}else a=pS(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||mS(o,s),a=function(e,t,n,r=!1){return JE(n,e.Qu(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return Ry.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class fS extends cS{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fS(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Dy.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)gS(n,i),n=rv(n,i)}(e._query,t),new RE(e.firestore,e.converter,rv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function pS(e,t,n){if("string"==typeof(n=Th(n))){if(""===n)throw new ug(lg.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ev(t)&&-1!==n.indexOf("/"))throw new ug(lg.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ig.fromString(n));if(!Ng.isDocumentKey(r))throw new ug(lg.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return my(e,new Ng(r))}if(n instanceof DE)return my(e,n._key);throw new ug(lg.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${IE(n)}.`)}function mS(e,t){if(!Array.isArray(e)||0===e.length)throw new ug(lg.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function gS(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ug(lg.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ug(lg.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class yS{convertValue(e,t="none"){switch(ay(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Zg(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ey(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw sg()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return zg(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>Zg(e.doubleValue));return new $E(i)}convertGeoPoint(e){return new BE(Zg(e.latitude),Zg(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ny(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ry(e));default:return null}}convertTimestamp(e){const t=Jg(e);return new Sg(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ig.fromString(e);og(Jw(n));const r=new sy(n.get(1),n.get(3)),i=new Ng(n.popFirst(5));return r.isEqual(t)||ng(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */
/**
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
 */
class vS{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wS extends aS{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(uS("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class bS extends wS{data(e={}){return super.data(e)}}class _S{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new vS(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new bS(this._firestore,this._userDataWriter,n.key,n,new vS(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ug(lg.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new bS(e._firestore,e._userDataWriter,n.doc.key,n.doc,new vS(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new bS(e._firestore,e._userDataWriter,t.doc.key,t.doc,new vS(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:ES(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ES(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return sg()}}
/**
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
 */function SS(e){e=CE(e,DE);const t=CE(e.firestore,FE);return function(e,t,n={}){const r=new cg;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new mE({next:a=>{s.Za(),t.enqueueAndForget(()=>D_(e,o));const l=a.docs.has(n);!l&&a.fromCache?i.reject(new ug(lg.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?i.reject(new ug(lg.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new U_(Jy(n.path),s,{includeMetadataChanges:!0,_a:!0});return R_(e,o)}(await bE(e),e.asyncQueue,t,n,r)),r.promise}(UE(t),e._key).then(n=>function(e,t,n){const r=n.docs.get(t._key),i=new kS(e);return new wS(e,i,t._key,r,new vS(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}class kS extends yS{constructor(e){super(),this.firestore=e}convertBytes(e){return new VE(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new DE(this.firestore,null,t)}}function TS(e){e=CE(e,RE);const t=CE(e.firestore,FE),n=UE(t),r=new kS(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ug(lg.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new cg;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new mE({next:n=>{s.Za(),t.enqueueAndForget(()=>D_(e,o)),n.fromCache&&"server"===r.source?i.reject(new ug(lg.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new U_(n,s,{includeMetadataChanges:!0,_a:!0});return R_(e,o)}(await bE(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new _S(t,r,e,n))}function IS(e,t){const n=CE(e.firestore,FE),r=OE(e),i=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t);return function(e,t){return function(e,t){const n=new cg;return e.asyncQueue.enqueueAndForget(async()=>Y_(await function(e){return wE(e).then(e=>e.syncEngine)}(e),t,n)),n.promise}(UE(e),t)}(n,[YE(QE(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,zv.exists(!1))]).then(()=>r)}function CS(){return new XE("serverTimestamp")}!function(e,t=!0){Jm=jd,Od(new Ih("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new FE(new pg(e.getProvider("auth-internal")),new vg(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ug(lg.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sy(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),$d(Ym,"4.7.3",e),$d(Ym,"4.7.3","esm2017")}();const xS={apiKey:"AIzaSyAjGzS58U5ybbI5CYJUk2NRZBuLJpMJihQ",authDomain:"apps-e1163.firebaseapp.com",projectId:"apps-e1163",storageBucket:"apps-e1163.firebasestorage.app",messagingSenderId:"855206153422",appId:"1:855206153422:web:2a1366b2e7825304c3d49f",measurementId:"G-7YCKESJB8T"};let NS;console.log("🔧 Firebase Initializing for project:",xS.projectId);try{NS=zd(xS),console.log("✅ Firebase app initialized successfully")}catch($S){throw console.error("❌ Firebase initialization failed:",$S),$S}const AS=function(e=Bd()){const t=Md(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
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
 */
function(e,t){const n=Md(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(bh(n.getOptions(),null!=t?t:{}))return e;af(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Rm,persistence:[Gp,Rp,Pp]}),r=fh("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Om)return;const r=null==t?void 0:t.token;Mm!==r&&(Mm=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Th(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){Th(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const s=hh("auth");return s&&dp(n,`http://${s}`),n}(NS),RS=function(e){const t="string"==typeof e?e:"(default)",n=Md("object"==typeof e?e:Bd(),"firestore").getImmediate({identifier:t});if(!n._initialized){const e=(e=>{const t=hh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&AE(n,...e)}return n}(NS);(new _p).setCustomParameters({prompt:"select_account"});const DS="lesson_planner_app",PS={users:`${DS}/users`,profiles:`${DS}/profiles`,lessons:`${DS}/lessons`,audit:`${DS}/audit`};async function LS(){try{await(e=AS,Th(e).signOut())}catch($S){throw console.error("Sign-out error:",$S),$S}var e}function OS(e){console.log("📡 Setting up auth state listener...");try{return t=async t=>{if(console.log("👤 Auth state changed:",t?`User: ${t.email}`:"No user"),t)try{console.log("📋 Fetching user data for:",t.uid);const r=await async function(e){try{const t=OE(RS,PS.users,e),n=await SS(t);return n.exists()?n.data():null}catch(n){return console.error("Error getting user data:",n),null}}(t.uid);console.log("✅ User data fetched:",r?"Found":"Not found"),e({user:t,userData:r,status:(null==r?void 0:r.status)||"pending"})}catch(n){console.error("❌ Error in auth state callback:",n),e(null)}else console.log("🔓 No authenticated user"),e(null)},n=t=>{console.error("🔴 Auth listener error:",t),e(null)},Th(AS).onAuthStateChanged(t,n,r)}catch(n){return console.error("❌ Failed to set up auth listener:",n),e(null),()=>{}}var t,n,r}function MS({authState:e}){var t,n,r,i,s;const o="approved"===(null==(t=null==e?void 0:e.userData)?void 0:t.status),a=(null==(n=null==e?void 0:e.userData)?void 0:n.status)||"pending";return G.jsx("header",{className:"bg-white border-b border-slate-200 sticky top-0 z-40",children:G.jsx("div",{className:"max-w-7xl mx-auto px-6 py-4",children:G.jsxs("div",{className:"flex justify-between items-center",children:[G.jsxs("div",{className:"flex items-center space-x-3",children:[G.jsx("div",{className:"bg-brand-600 text-white p-2 rounded-lg",children:G.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:G.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),G.jsxs("div",{children:[G.jsxs("h1",{className:"text-xl font-bold",children:["PrepEase ",G.jsx("span",{className:"text-brand-600",children:"AI"})]}),G.jsx("p",{className:"text-xs text-slate-500",children:"Universal Modular Lesson Architect"})]})]}),G.jsxs("div",{className:"flex items-center space-x-4",children:[!o&&G.jsx("div",{className:"px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200",children:G.jsxs("p",{className:"text-xs font-semibold text-yellow-700",children:["⏳ ","rejected"===a?"Access Denied":"Awaiting Approval"]})}),o&&G.jsx("div",{className:"px-3 py-1 rounded-full bg-green-50 border border-green-200",children:G.jsx("p",{className:"text-xs font-semibold text-green-700",children:"✓ Approved"})}),G.jsxs("div",{className:"flex items-center space-x-3",children:[(null==(r=null==e?void 0:e.user)?void 0:r.photoURL)&&G.jsx("img",{src:e.user.photoURL,alt:e.user.displayName,className:"w-8 h-8 rounded-full"}),G.jsxs("div",{children:[G.jsx("p",{className:"text-sm font-medium text-slate-900",children:(null==(i=null==e?void 0:e.user)?void 0:i.displayName)||"User"}),G.jsx("p",{className:"text-xs text-slate-500",children:null==(s=null==e?void 0:e.user)?void 0:s.email})]}),G.jsx("button",{onClick:async()=>{try{await LS()}catch($S){console.error("Sign out error:",$S)}},className:"ml-4 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors",children:"Sign Out"})]})]})]})})})}function FS({onAuthStateChange:e,children:t}){const[n,r]=V.useState(!0);return V.useEffect(()=>OS(t=>{e(t),r(!1)}),[e]),n?G.jsx("div",{className:"h-full flex items-center justify-center bg-slate-50",children:G.jsxs("div",{className:"text-center",children:[G.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600 mx-auto mb-4"}),G.jsx("p",{className:"text-slate-600 font-medium",children:"Loading PrepEase AI..."})]})}):t}function US({authState:e}){var t;const[n,r]=V.useState(""),[i,s]=V.useState(""),[o,a]=V.useState(!1),[l,u]=V.useState(""),c="approved"===(null==(t=null==e?void 0:e.userData)?void 0:t.status);return G.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[G.jsx("div",{className:"lg:col-span-1 space-y-4",children:G.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-6 space-y-4",children:[G.jsx("h2",{className:"text-lg font-bold text-slate-900",children:"Generate Lesson Plan"}),!c&&G.jsx("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded-lg",children:G.jsx("p",{className:"text-sm text-yellow-700",children:"⏳ You need admin approval to generate lessons"})}),G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Lesson Topic *"}),G.jsx("input",{type:"text",value:n,onChange:e=>r(e.target.value),placeholder:"e.g., Understanding Fractions",disabled:!c,className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:bg-slate-50"})]}),G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Learning Standard *"}),G.jsx("input",{type:"text",value:i,onChange:e=>s(e.target.value),placeholder:"e.g., CCSS.MATH.2.NF.A.1",disabled:!c,className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:bg-slate-50"})]}),G.jsx("button",{onClick:async()=>{if(c)if(n&&i){a(!0);try{u("Lesson plan will be generated here...")}finally{a(!1)}}else alert("Please fill in all required fields");else alert("Please wait for admin approval before generating lessons")},disabled:o||!c||!n||!i,className:"w-full px-4 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 disabled:bg-slate-300 transition-colors",children:o?"Generating...":"Generate Lesson Plan"})]})}),G.jsx("div",{className:"lg:col-span-2",children:G.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-6",children:l?G.jsx("div",{className:"prose prose-sm max-w-none",children:G.jsx("p",{className:"text-slate-600",children:l})}):G.jsx("div",{className:"text-center py-12",children:G.jsx("p",{className:"text-slate-500",children:'Fill in the form and click "Generate Lesson Plan" to create a lesson'})})})})]})}async function VS(e,t,n,r){try{const i=await IS(LE(RS,PS.profiles),{createdBy:e,title:t,description:n,useLevels:r.useLevels??!0,levels:r.levels||"",useSegments:r.useSegments??!0,segments:r.segments||"",size:r.size||"24",demoNotes:r.demoNotes||"",resources:r.resources||"",accommodations:r.accommodations||"",scheduleBlocks:r.scheduleBlocks||[],createdAt:CS(),updatedAt:CS(),isPublic:!1,sharedWith:[],appId:DS});return await async function(e,t,n,r,i={}){try{await IS(LE(RS,PS.audit),{timestamp:CS(),userId:e,action:t,resourceType:n,resourceId:r,status:"success",changes:i,metadata:{userAgent:navigator.userAgent,timestamp:(new Date).toISOString()},appId:DS})}catch($S){console.error("Error logging audit entry:",$S)}}(e,"PROFILE_CREATED","profile",i.id,{title:t,description:n}),i.id}catch($S){throw console.error("Error creating profile:",$S),$S}}async function jS(e){try{const t=function(e,t,...n){let r=[];t instanceof cS&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof fS).length,n=e.filter(e=>e instanceof dS).length;if(t>1||t>0&&n>0)throw new ug(lg.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}(LE(RS,PS.profiles),function(e,t,n){const r=t,i=uS("where",e);return dS._create(i,r,n)}("createdBy","==",e)),n=await TS(t),r=[];return n.forEach(e=>{r.push({id:e.id,...e.data()})}),r}catch($S){return console.error("Error getting profiles:",$S),[]}}function zS({authState:e}){var t;const[n,r]=V.useState([]),[i,s]=V.useState(!0),[o,a]=V.useState(!1),[l,u]=V.useState({title:"",description:"",useLevels:!0,levels:"",useSegments:!0,segments:""}),c="approved"===(null==(t=null==e?void 0:e.userData)?void 0:t.status);V.useEffect(()=>{h()},[e]);const h=async()=>{var t;if(null==(t=null==e?void 0:e.user)?void 0:t.uid){s(!0);try{const t=await jS(e.user.uid);r(t)}finally{s(!1)}}};return G.jsxs("div",{className:"space-y-6",children:[G.jsxs("div",{className:"flex justify-between items-center",children:[G.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"School Structures"}),c&&G.jsx("button",{onClick:()=>a(!o),className:"px-4 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors",children:"+ New Profile"})]}),o&&G.jsxs("form",{onSubmit:async t=>{if(t.preventDefault(),c)try{await VS(e.user.uid,l.title,l.description,l),u({title:"",description:"",useLevels:!0,levels:"",useSegments:!0,segments:""}),a(!1),h()}catch($S){alert("Error creating profile: "+$S.message)}else alert("You must be approved to create profiles")},className:"bg-white rounded-lg border border-slate-200 p-6 space-y-4",children:[G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Profile Name *"}),G.jsx("input",{type:"text",required:!0,value:l.title,onChange:e=>u({...l,title:e.target.value}),placeholder:"e.g., Elementary Morning Program",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"})]}),G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Description"}),G.jsx("textarea",{value:l.description,onChange:e=>u({...l,description:e.target.value}),placeholder:"Describe your school structure...",rows:3,className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"})]}),G.jsx("div",{children:G.jsxs("label",{className:"flex items-center space-x-2",children:[G.jsx("input",{type:"checkbox",checked:l.useLevels,onChange:e=>u({...l,useLevels:e.target.checked}),className:"rounded"}),G.jsx("span",{className:"text-sm font-medium text-slate-700",children:"Use Grade Levels"})]})}),l.useLevels&&G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Levels (comma-separated)"}),G.jsx("input",{type:"text",value:l.levels,onChange:e=>u({...l,levels:e.target.value}),placeholder:"e.g., Grade 1, Grade 2, Grade 3",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"})]}),G.jsx("div",{children:G.jsxs("label",{className:"flex items-center space-x-2",children:[G.jsx("input",{type:"checkbox",checked:l.useSegments,onChange:e=>u({...l,useSegments:e.target.checked}),className:"rounded"}),G.jsx("span",{className:"text-sm font-medium text-slate-700",children:"Use Class Cohorts"})]})}),l.useSegments&&G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Cohorts (comma-separated)"}),G.jsx("input",{type:"text",value:l.segments,onChange:e=>u({...l,segments:e.target.value}),placeholder:"e.g., Cohort A, Cohort B",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"})]}),G.jsxs("div",{className:"flex space-x-3 pt-4",children:[G.jsx("button",{type:"submit",className:"flex-1 px-4 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors",children:"Create Profile"}),G.jsx("button",{type:"button",onClick:()=>a(!1),className:"flex-1 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors",children:"Cancel"})]})]}),i?G.jsx("div",{className:"text-center py-12",children:G.jsx("p",{className:"text-slate-500",children:"Loading profiles..."})}):0===n.length?G.jsxs("div",{className:"bg-slate-50 rounded-lg border border-slate-200 p-12 text-center",children:[G.jsx("p",{className:"text-slate-600 mb-4",children:"No school profiles yet"}),c&&G.jsx("button",{onClick:()=>a(!0),className:"px-4 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors",children:"Create First Profile"})]}):G.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:n.map(e=>G.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-6",children:[G.jsx("h3",{className:"text-lg font-bold text-slate-900",children:e.title}),G.jsx("p",{className:"text-sm text-slate-600 mt-2",children:e.description}),e.useLevels&&G.jsxs("p",{className:"text-xs text-slate-500 mt-2",children:[G.jsx("strong",{children:"Levels:"})," ",e.levels]}),e.useSegments&&G.jsxs("p",{className:"text-xs text-slate-500",children:[G.jsx("strong",{children:"Cohorts:"})," ",e.segments]})]},e.id))})]})}function BS(){const[e,t]=V.useState("lesson"),[n,r]=V.useState(null);return G.jsx(FS,{onAuthStateChange:r,children:n?G.jsxs("div",{className:"h-full flex flex-col bg-slate-50",children:[G.jsx(MS,{authState:n}),G.jsxs("main",{className:"flex-1 overflow-auto",children:[G.jsx("div",{className:"sticky top-16 bg-white border-b border-slate-200 px-6 py-4",children:G.jsxs("div",{className:"flex space-x-4 max-w-7xl mx-auto",children:[G.jsx("button",{onClick:()=>t("lesson"),className:"px-4 py-2 font-semibold text-sm transition-colors "+("lesson"===e?"text-brand-600 border-b-2 border-brand-600":"text-slate-600 hover:text-slate-900"),children:"Daily Lesson Planner"}),G.jsx("button",{onClick:()=>t("profile"),className:"px-4 py-2 font-semibold text-sm transition-colors "+("profile"===e?"text-brand-600 border-b-2 border-brand-600":"text-slate-600 hover:text-slate-900"),children:"School Structure"})]})}),G.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8",children:["lesson"===e&&G.jsx(US,{authState:n}),"profile"===e&&G.jsx(zS,{authState:n})]})]})]}):G.jsx("div",{className:"h-full flex items-center justify-center bg-slate-50",children:G.jsx("div",{className:"text-center",children:G.jsx("p",{className:"text-slate-500",children:"Loading..."})})})})}Q.createRoot(document.getElementById("root")).render(G.jsx(j.StrictMode,{children:G.jsx(BS,{})}));
