parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vNQ0":[function(require,module,exports) {

},{}],"QvaY":[function(require,module,exports) {
"use strict";require("nes.css/css/nes.min.css");var e=document.getElementById("display"),t=document.getElementById("buttonAdd"),n=document.getElementById("buttonBucket"),d=document.getElementById("buttonWorker"),i=document.getElementById("buttonRobot"),s=document.getElementById("main-theme"),c=document.getElementById("music-play"),o=0,a=0,l=0,r=0,u=20,m=200,b=1e3;function f(){return s.paused?s.play():s.pause()}function v(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}function y(){e.textContent=v(o)}function I(){n.textContent="Increase bucket capacity (cost = "+u+")"}function E(){d.textContent="Hire a worker (cost = "+m+")"}function L(){i.textContent="Buy a robot (cost = "+b+")"}function k(){o+=1+a,y(),w()}function B(){o>=u?(n.disabled=!1,n.classList.remove("is-disabled")):(n.disabled=!0,n.classList.add("is-disabled"))}function g(){o>=m?(d.disabled=!1,d.classList.remove("is-disabled")):(d.disabled=!0,d.classList.add("is-disabled"))}function p(){o>=b?(i.disabled=!1,i.classList.remove("is-disabled")):(i.disabled=!0,i.classList.add("is-disabled"))}function w(){B(),g(),p()}function x(){o-=u,a+=2,u=(1.25*u).toFixed(2),y(),I(),w()}function C(){o-=m,l++,m=(1.25*m).toFixed(2),y(),E(),w()}function F(){o-=b,r++,b=(1.25*b).toFixed(2),y(),L(),w()}function S(){for(var e=0;e<l;e++)k()}function U(){for(var e=0;e<r;e++)k()}s.volume=.5,s.play(),y(),I(),E(),L(),n.disabled=!0,d.disabled=!0,i.disabled=!0,t.addEventListener("click",k),n.addEventListener("click",x),d.addEventListener("click",C),i.addEventListener("click",F),c.addEventListener("click",f),workerInterval=window.setInterval(S,5e3),robotInterval=window.setInterval(U,1e3);
},{"nes.css/css/nes.min.css":"vNQ0"}]},{},["QvaY"], null)
//# sourceMappingURL=/personal/js.ed7308f6.js.map