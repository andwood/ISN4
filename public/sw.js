if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise(async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()})),i.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},i=(i,n)=>{Promise.all(i.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(i)};self.define=(i,s,r)=>{n[i]||(n[i]=Promise.resolve().then(()=>{let n={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return n;case"module":return c;default:return e(i)}})).then(e=>{const i=r(...e);return n.default||(n.default=i),n})}))}}define("./sw.js",["./workbox-c578d712"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/icons/icon-128x128.png",revision:"9eb80121a04c0e8186141026a11dd1b4"},{url:"images/icons/icon-144x144.png",revision:"2b5af74fe4690e4b0af2644c68e2fcff"},{url:"images/icons/icon-152x152.png",revision:"8be4b9f87872b5363da3ee2e233b5fa1"},{url:"images/icons/icon-192x192.png",revision:"0e8cc11eb08d4a11ad1f4c49295aa2a0"},{url:"images/icons/icon-384x384.png",revision:"4c7c3b5ebf740311ec1800320baa3b8e"},{url:"images/icons/icon-512x512.png",revision:"9d166d4e17f622c8ef7e343527cc7e38"},{url:"images/icons/icon-72x72.png",revision:"863554f8cdb1873730b4d63c5561fbf1"},{url:"images/icons/icon-96x96.png",revision:"bb808d8921924aebb46502b2e2102f6d"},{url:"index.html",revision:"e30cdaa0d1880cc19656a315a5e8ecf5"},{url:"manifest.json",revision:"602160820e4dc7c3c9d822f5136a8362"}],{})}));
//# sourceMappingURL=sw.js.map
