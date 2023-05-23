(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},738:e=>{e.exports=function(e){return e[1]}},192:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(738),r=o.n(n),i=o(705),a=o.n(i)()(r());a.push([e.id,"*{box-sizing:border-box;font-family:Verdana,Geneva,Tahoma,sans-serif;font-size:20px}body{background-color:#e6ff08}.container{background-color:#4d0e81;max-width:calc(40px * 10);max-height:calc(40px * 10);display:flex;flex-wrap:wrap;margin:auto}.box{background-color:#1ffc31;width:40px;height:40px;border:1px solid #00008b;display:flex;align-items:center;justify-content:center}.box.initial{border:3px solid gray;border-style:outset;cursor:pointer;background-color:#261158}.box.bomb-count-1{color:#f50606}.box.bomb-count-2{color:#0803f8}.box.bomb-count-3{color:#dae90a}.box.bomb-count-4{color:#ff00b3}.box.bomb-count-5{color:#ff0404}.box.bomb-count-6{color:#0bffae}.box.bomb-count-7{color:#0bffae}",""]);const c=a},379:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=n.base?s[0]+n.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var d=o(f),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(v);else{var p=r(v,n);n.byIndex=c,t.splice(c,0,{identifier:f,updater:p,references:1})}a.push(f)}return a}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=o(i[a]);t[c].references--}for(var s=n(e,r),u=0;u<i.length;u++){var l=o(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,o){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(i)?i:String(i)),r)}var i}var n=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isBomb=t,this.coordinates=o}var o,n;return o=e,n=[{key:"setBoxValue",value:function(e){this.value=e}},{key:"setBoxType",value:function(){if(this.isBomb)this.setBoxValue("💣");else{var e=c(this.coordinates),t=0;e.forEach((function(e){(1===e||e.isBomb)&&t++})),t&&this.setBoxValue(t)}}},{key:"showBoxValue",value:function(){this.boxElem.innerHTML=this.value||""}},{key:"setFlag",value:function(e){this.isFlagged=e,this.boxElem.innerHTML=e?"⚑":""}},{key:"open",value:function(){this.isOpenned=!0,this.boxElem.classList.remove("initial"),this.showBoxValue()}},{key:"onBoxClick",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isFlagged?this.setFlag(!1):(this.value||this.isOpenned?this.value&&e||"number"==typeof this.value?this.open():this.isBomb&&i.forEach((function(e){e.forEach((function(e){e.open()}))})):(this.open(),c(this.coordinates).forEach((function(e){e.isOpenned||e.onBoxClick(!0)}))),this.showBoxValue())}},{key:"createBoxOnArea",value:function(){var e=this,t=document.createElement("div");t.classList.add("box"),t.classList.add("initial"),this.value&&t.classList.add("bomb-count-".concat(this.value)),this.boxElem=t,this.boxElem.addEventListener("click",(function(){return e.onBoxClick()})),this.boxElem.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setFlag(!0)})),a.appendChild(t)}}],n&&t(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),e}();function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:100)-e,o=Math.random();return(o=Math.floor(o*t))+e}var i=[],a=document.createElement("div");function c(e){var t,o,n,r,a,c,s,u,l=e.x,f=e.y;return[null===(t=i[f-1])||void 0===t?void 0:t[l],null===(o=i[f-1])||void 0===o?void 0:o[l+1],null===(n=i[f])||void 0===n?void 0:n[l+1],null===(r=i[f+1])||void 0===r?void 0:r[l+1],null===(a=i[f+1])||void 0===a?void 0:a[l],null===(c=i[f+1])||void 0===c?void 0:c[l-1],null===(s=i[f])||void 0===s?void 0:s[l-1],null===(u=i[f-1])||void 0===u?void 0:u[l-1]].filter((function(e){return void 0!==e}))}a.className="container",document.body.prepend(a);var s=o(379),u=o.n(s),l=o(795),f=o.n(l),d=o(569),v=o.n(d),p=o(565),h=o.n(p),b=o(216),m=o.n(b),y=o(589),x=o.n(y),g=o(192),E={};E.styleTagTransform=x(),E.setAttributes=h(),E.insert=v().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=m(),u()(g.Z,E),g.Z&&g.Z.locals&&g.Z.locals,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;i=Array.from({length:t},(function(){return Array.from({length:e},(function(){return 0}))})),function(e){for(var t=e,o=i.length,n=i[0].length;t;){var a=r(0,n-1),c=r(0,o-1);i[c][a]||(i[c][a]=1,t--)}}(o),console.log(i),i.forEach((function(e,t){e.forEach((function(e,o){var r=function(e,t){var o=new n(e,t);return o.setBoxType(),o.createBoxOnArea(),o}(Boolean(e),{x:o,y:t});i[t][o]=r}))}))}()})()})();