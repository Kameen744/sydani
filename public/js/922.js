"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[922],{6213:(a,t,s)=>{s.d(t,{Z:()=>d});var e=s(1519),o=s.n(e)()((function(a){return a[1]}));o.push([a.id,".icon-1x[data-v-0a144fa5]{font-size:24px!important}a[data-v-0a144fa5]{text-decoration:none}.text-primary[data-v-0a144fa5],a.text-primary[data-v-0a144fa5]:focus,a.text-primary[data-v-0a144fa5]:hover{color:#00adbb!important}.text-black[data-v-0a144fa5],.text-hover-black[data-v-0a144fa5]:hover{color:#000!important}.font-weight-bold[data-v-0a144fa5]{font-weight:700!important}.img-profile[data-v-0a144fa5]{border-radius:50%}",""]);const d=o},1519:a=>{a.exports=function(a){var t=[];return t.toString=function(){return this.map((function(t){var s=a(t);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(a,s,e){"string"==typeof a&&(a=[[null,a,""]]);var o={};if(e)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(o[i]=!0)}for(var n=0;n<a.length;n++){var c=[].concat(a[n]);e&&o[c[0]]||(s&&(c[2]?c[2]="".concat(s," and ").concat(c[2]):c[2]=s),t.push(c))}},t}},2446:(a,t,s)=>{var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},d=function(){var a={};return function(t){if(void 0===a[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(a){s=null}a[t]=s}return a[t]}}(),i=[];function n(a){for(var t=-1,s=0;s<i.length;s++)if(i[s].identifier===a){t=s;break}return t}function c(a,t){for(var s={},e=[],o=0;o<a.length;o++){var d=a[o],c=t.base?d[0]+t.base:d[0],r=s[c]||0,l="".concat(c," ").concat(r);s[c]=r+1;var v=n(l),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==v?(i[v].references++,i[v].updater(f)):i.push({identifier:l,updater:b(f,t),references:1}),e.push(l)}return e}function r(a){var t=document.createElement("style"),e=a.attributes||{};if(void 0===e.nonce){var o=s.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(a){t.setAttribute(a,e[a])})),"function"==typeof a.insert)a.insert(t);else{var i=d(a.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,v=(l=[],function(a,t){return l[a]=t,l.filter(Boolean).join("\n")});function f(a,t,s,e){var o=s?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(a.styleSheet)a.styleSheet.cssText=v(t,o);else{var d=document.createTextNode(o),i=a.childNodes;i[t]&&a.removeChild(i[t]),i.length?a.insertBefore(d,i[t]):a.appendChild(d)}}function p(a,t,s){var e=s.css,o=s.media,d=s.sourceMap;if(o?a.setAttribute("media",o):a.removeAttribute("media"),d&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),a.styleSheet)a.styleSheet.cssText=e;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(e))}}var m=null,h=0;function b(a,t){var s,e,o;if(t.singleton){var d=h++;s=m||(m=r(t)),e=f.bind(null,s,d,!1),o=f.bind(null,s,d,!0)}else s=r(t),e=p.bind(null,s,t),o=function(){!function(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a)}(s)};return e(a),function(t){if(t){if(t.css===a.css&&t.media===a.media&&t.sourceMap===a.sourceMap)return;e(a=t)}else o()}}a.exports=function(a,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var s=c(a=a||[],t);return function(a){if(a=a||[],"[object Array]"===Object.prototype.toString.call(a)){for(var e=0;e<s.length;e++){var o=n(s[e]);i[o].references--}for(var d=c(a,t),r=0;r<s.length;r++){var l=n(s[r]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}s=d}}}},3744:(a,t)=>{t.Z=(a,t)=>{const s=a.__vccOpts||a;for(const[a,e]of t)s[a]=e;return s}},922:(a,t,s)=>{s.r(t),s.d(t,{default:()=>v});var e=s(6598),o={class:"container",style:{"margin-top":"100px","margin-bottom":"50px"}},d=[(0,e.createStaticVNode)('<div class="row mt-5" data-v-0a144fa5><div class="col-lg-9 mb-3" data-v-0a144fa5><div class="row text-left mb-5" data-v-0a144fa5><div class="col-lg-4 mb-3 mb-sm-0" data-v-0a144fa5><select class="form-control form-control-lg bg-white bg-op-9 text-sm w-lg-50" data-toggle="select" tabindex="-98" data-v-0a144fa5><option selected disabled data-v-0a144fa5>New Post</option><option data-v-0a144fa5>Learn</option><option data-v-0a144fa5>Share</option><option data-v-0a144fa5>Build</option></select></div><div class="col-lg-4 mb-3 mb-sm-0" data-v-0a144fa5><select class="form-control form-control-lg bg-white bg-op-9 text-sm w-lg-50" data-toggle="select" tabindex="-98" data-v-0a144fa5><option data-v-0a144fa5>Categories</option><option data-v-0a144fa5>Learn</option><option data-v-0a144fa5>Share</option><option data-v-0a144fa5>Build</option></select></div><div class="col-lg-4 text-lg-right" data-v-0a144fa5><select class="form-control form-control-lg bg-white bg-op-9 ml-auto text-sm w-lg-50" data-toggle="select" tabindex="-98" data-v-0a144fa5><option data-v-0a144fa5>Filter by</option><option data-v-0a144fa5>Votes</option><option data-v-0a144fa5>Replys</option><option data-v-0a144fa5>Views</option></select></div></div><div class="shadow card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0" data-v-0a144fa5><div class="row align-items-center" data-v-0a144fa5><div class="col-md-8 mb-3 mb-sm-0" data-v-0a144fa5><h5 data-v-0a144fa5><a href="#" class="text-primary" data-v-0a144fa5>HELP! My Windows XP machine is down</a></h5><p class="text-sm" data-v-0a144fa5><span class="op-6" data-v-0a144fa5>Posted</span><a class="text-black" href="#" data-v-0a144fa5>54 minutes</a><span class="op-6" data-v-0a144fa5>ago by</span><a class="text-black" href="#" data-v-0a144fa5>DanielD</a></p><div class="text-sm op-5" data-v-0a144fa5><a class="text-black mr-2" href="#" data-v-0a144fa5>#Development</a><a class="text-black mr-2" href="#" data-v-0a144fa5>#AppStrap Theme</a></div></div><div class="col-md-4 op-7" data-v-0a144fa5><div class="row text-center op-7" data-v-0a144fa5><div class="col px-1" data-v-0a144fa5><i class="fas fa-thumbs-up" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>256 Votes</span></div><div class="col px-1" data-v-0a144fa5><i class="ion-ios-chatboxes-outline icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>251 Replys</span></div><div class="col px-1" data-v-0a144fa5><i class="ion-ios-eye-outline icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>223 Views</span></div></div></div></div></div><div class="shadow card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0" data-v-0a144fa5><div class="row align-items-center" data-v-0a144fa5><div class="col-md-8 mb-3 mb-sm-0" data-v-0a144fa5><h5 data-v-0a144fa5><a href="#" class="text-primary" data-v-0a144fa5>Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a></h5><p class="text-sm" data-v-0a144fa5><span class="op-6" data-v-0a144fa5>Posted</span><a class="text-black" href="#" data-v-0a144fa5>32 minutes</a><span class="op-6" data-v-0a144fa5>ago by</span><a class="text-black" href="#" data-v-0a144fa5>AppStrapMaster</a></p><div class="text-sm op-5" data-v-0a144fa5><a class="text-black mr-2" href="#" data-v-0a144fa5>#Bootstrap 4</a><a class="text-black mr-2" href="#" data-v-0a144fa5>#Wordpress</a></div></div><div class="col-md-4 op-7" data-v-0a144fa5><div class="row text-center op-7" data-v-0a144fa5><div class="col px-1" data-v-0a144fa5><i class="ion-connection-bars icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>245 Votes</span></div><div class="col px-1" data-v-0a144fa5><i class="ion-ios-chatboxes-outline icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>116 Replys</span></div><div class="col px-1" data-v-0a144fa5><i class="ion-ios-eye-outline icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>257 Views</span></div></div></div></div></div><div class="shadow card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-0" data-v-0a144fa5><div class="row align-items-center" data-v-0a144fa5><div class="col-md-8 mb-3 mb-sm-0" data-v-0a144fa5><h5 data-v-0a144fa5><a href="#" class="text-primary" data-v-0a144fa5>Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a></h5><p class="text-sm" data-v-0a144fa5><span class="op-6" data-v-0a144fa5>Posted</span><a class="text-black" href="#" data-v-0a144fa5>29 minutes</a><span class="op-6" data-v-0a144fa5>ago by</span><a class="text-black" href="#" data-v-0a144fa5>Themelize.me</a></p><div class="text-sm op-5" data-v-0a144fa5><a class="text-black mr-2" href="#" data-v-0a144fa5>#Android</a><a class="text-black mr-2" href="#" data-v-0a144fa5>#Bootstrap 4</a><a class="text-black mr-2" href="#" data-v-0a144fa5>#Wordpress</a><a class="text-black mr-2" href="#" data-v-0a144fa5>#Drupal</a></div></div><div class="col-md-4 op-7" data-v-0a144fa5><div class="row text-center op-7" data-v-0a144fa5><div class="col px-1" data-v-0a144fa5><i class="ion-connection-bars icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>49 Votes</span></div><div class="col px-1" data-v-0a144fa5><i class="ion-ios-chatboxes-outline icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>29 Replys</span></div><div class="col px-1" data-v-0a144fa5><i class="ion-ios-eye-outline icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>170 Views</span></div></div></div></div></div><div class="shadow card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0" data-v-0a144fa5><div class="row align-items-center" data-v-0a144fa5><div class="col-md-8 mb-3 mb-sm-0" data-v-0a144fa5><h5 data-v-0a144fa5><a href="#" class="text-primary" data-v-0a144fa5>Drupal 8 quick starter guide</a></h5><p class="text-sm" data-v-0a144fa5><span class="op-6" data-v-0a144fa5>Posted</span><a class="text-black" href="#" data-v-0a144fa5>53 minutes</a><span class="op-6" data-v-0a144fa5>ago by</span><a class="text-black" href="#" data-v-0a144fa5>Themelize.me</a></p><div class="text-sm op-5" data-v-0a144fa5><a class="text-black mr-2" href="#" data-v-0a144fa5>#iOS</a><a class="text-black mr-2" href="#" data-v-0a144fa5>#Bootstrap 4</a></div></div><div class="col-md-4 op-7" data-v-0a144fa5><div class="row text-center op-7" data-v-0a144fa5><div class="col px-1" data-v-0a144fa5><i class="ion-connection-bars icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>164 Votes</span></div><div class="col px-1" data-v-0a144fa5><i class="ion-ios-chatboxes-outline icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>82 Replys</span></div><div class="col px-1" data-v-0a144fa5><i class="ion-ios-eye-outline icon-1x" data-v-0a144fa5></i><span class="d-block text-sm" data-v-0a144fa5>240 Views</span></div></div></div></div></div></div><div class="col-lg-3 mb-4 mb-lg-0 px-lg-0 mt-lg-0" data-v-0a144fa5><div style="visibility:hidden;display:none;width:285px;height:801px;margin:0px;float:none;position:static;inset:85px auto auto;" data-v-0a144fa5></div><div data-settings="{&quot;parent&quot;:&quot;#content&quot;,&quot;mind&quot;:&quot;#header&quot;,&quot;top&quot;:10,&quot;breakpoint&quot;:992}" data-toggle="sticky" class="sticky" style="top:85px;" data-v-0a144fa5><div class="sticky-inner" data-v-0a144fa5><div class="bg-white mb-3" data-v-0a144fa5><h4 class="px-3 py-4 op-5 m-0" data-v-0a144fa5>Active Topics</h4><hr class="m-0" data-v-0a144fa5><div class="pos-relative px-3 py-3" data-v-0a144fa5><h6 class="text-primary text-sm" data-v-0a144fa5><a href="#" class="text-primary" data-v-0a144fa5>Why Bootstrap 4 is so awesome? </a></h6><p class="mb-0 text-sm" data-v-0a144fa5><span class="op-6" data-v-0a144fa5>Posted</span><a class="text-black" href="#" data-v-0a144fa5>39 minutes</a><span class="op-6" data-v-0a144fa5>ago by</span><a class="text-black" href="#" data-v-0a144fa5>AppStrapMaster</a></p></div><hr class="m-0" data-v-0a144fa5><div class="pos-relative px-3 py-3" data-v-0a144fa5><h6 class="text-primary text-sm" data-v-0a144fa5><a href="#" class="text-primary" data-v-0a144fa5>Custom shortcut or command to launch command in terminal? </a></h6><p class="mb-0 text-sm" data-v-0a144fa5><span class="op-6" data-v-0a144fa5>Posted</span><a class="text-black" href="#" data-v-0a144fa5>58 minutes</a><span class="op-6" data-v-0a144fa5>ago by</span><a class="text-black" href="#" data-v-0a144fa5>DanielD</a></p></div><hr class="m-0" data-v-0a144fa5><div class="pos-relative px-3 py-3" data-v-0a144fa5><h6 class="text-primary text-sm" data-v-0a144fa5><a href="#" class="text-primary" data-v-0a144fa5>HELP! My Windows XP machine is down </a></h6><p class="mb-0 text-sm" data-v-0a144fa5><span class="op-6" data-v-0a144fa5>Posted</span><a class="text-black" href="#" data-v-0a144fa5>48 minutes</a><span class="op-6" data-v-0a144fa5>ago by</span><a class="text-black" href="#" data-v-0a144fa5>DanielD</a></p></div><hr class="m-0" data-v-0a144fa5><div class="pos-relative px-3 py-3" data-v-0a144fa5><h6 class="text-primary text-sm" data-v-0a144fa5><a href="#" class="text-primary" data-v-0a144fa5>HELP! My Windows XP machine is down </a></h6><p class="mb-0 text-sm" data-v-0a144fa5><span class="op-6" data-v-0a144fa5>Posted</span><a class="text-black" href="#" data-v-0a144fa5>38 minutes</a><span class="op-6" data-v-0a144fa5>ago by</span><a class="text-black" href="#" data-v-0a144fa5>DanielD</a></p></div><hr class="m-0" data-v-0a144fa5></div></div></div></div></div>',1)];var i=s(2446),n=s.n(i),c=s(6213),r={insert:"head",singleton:!1};n()(c.Z,r);c.Z.locals;const l={},v=(0,s(3744).Z)(l,[["render",function(a,t){return(0,e.openBlock)(),(0,e.createElementBlock)("div",o,d)}],["__scopeId","data-v-0a144fa5"]])}}]);