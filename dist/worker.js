!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){var n=[{name:"First Link",url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"},{name:"Second Link",url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"},{name:"my resume",url:"https://parthsarthiprasad.github.io/"}];t.exports=()=>{try{const t=JSON.stringify(n);return new Response(t,{headers:{"content-type":"application/json; charset=UTF-8"}})}catch(t){return new Response(t)}}},function(t,e,n){const r=n(2),s=n(0),a=n(3);addEventListener("fetch",t=>{t.respondWith(async function(t){try{const e=new r;e.get(".*/links",s),e.get(".*/*",a);return await e.route(t)}catch(t){return new Response(t)}}(t.request))})},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),r=n("connect"),s=n("delete"),a=n("get"),o=n("head"),i=n("options"),c=n("patch"),h=n("post"),l=n("put"),u=n("trace"),p=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[]}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}connect(t,e){return this.handle([r,p(t)],e)}delete(t,e){return this.handle([s,p(t)],e)}get(t,e){return this.handle([a,p(t)],e)}head(t,e){return this.handle([o,p(t)],e)}options(t,e){return this.handle([i,p(t)],e)}patch(t,e){return this.handle([c,p(t)],e)}post(t,e){return this.handle([h,p(t)],e)}put(t,e){return this.handle([l,p(t)],e)}trace(t,e){return this.handle([u,p(t)],e)}all(t){return this.handle([],t)}route(t){const e=this.resolve(t);return e?e.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}},function(t,e,n){const r=n(0),s={headers:{"content-type":"text/html"}};var a=["https://www.facebook.com/parth.sarthi.543","https://www.linkedin.com/in/parth-sarthi-prasad-510600185/","https://github.com/parthsarthiprasad","https://www.instagram.com/sarthparthi/","mailto: parthp.co18@nsut.ac.in"],o=["https://simpleicons.org/icons/facebook.svg","https://simpleicons.org/icons/linkedin.svg","https://simpleicons.org/icons/github.svg","https://simpleicons.org/icons/instagram.svg","https://simpleicons.org/icons/gmail.svg"];class i{constructor(t=[]){this.tableData=t}element(t){this.tableData.forEach(e=>{var n=`<a href="${e.url}">${e.name}</a>`;t.append(n,{html:!0})})}}class c{constructor(t=[],e=[]){this.socialdata=t,this.svglinks=e}element(t){t.setAttribute("style","display: flex");for(var e=0;e<this.socialdata.length;e++){var n=`<a href ="${this.socialdata[e]}" ><svg width="100%" height= "100%" viewBox = "0 0 150 150" ><image xlink:href="${this.svglinks[e]}"></image></svg></a>`;t.append(n,{html:!0})}}}class h{element(t){t.setInnerContent("Parth Sarthi Prasad")}}class l{constructor(t,e){this.attributeName=t,this.attributeValue=e}element(t){t.setAttribute(this.attributeName,this.attributeValue)}}t.exports=async()=>{const t=await fetch("https://static-links-page.signalnerve.workers.dev",s);return data=await async function(){var t=r(),e=await t.json();return e=JSON.stringify(e),e=JSON.parse(e)}(),(t=>(new HTMLRewriter).on("#avatar",new l("src","https://www.kindpng.com/picc/b/22/223941.png")).on("title",new h).on("body",new l("style","background-color: blue")).on("#profile",new l("style"," display: flex")).on("#links",new i(t)).on("#social",new c(a,o)))(data).transform(t)}}]);