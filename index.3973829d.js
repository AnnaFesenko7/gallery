function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},l=r.parcelRequire36ed;null==l&&((l=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){i[t]=e},r.parcelRequire36ed=l),l.register("kyEFX",(function(e,r){var n,i;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var l={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)l[e[r]]=t[e[r]]},i=function(t){var e=l[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),l("kyEFX").register(JSON.parse('{"gwFA3":"index.3973829d.js","geg1f":"1.b1babd12.jpg","3HGNP":"2.a2ea5471.jpg","5N3Mr":"3.6a8aece8.jpg","cOWez":"4.8bc8e922.jpg","afaUO":"5.37c28ddb.jpg","GHNyY":"6.30ce2d37.jpg","dd94S":"7.66d7846f.jpg","aIDbu":"8.83c2f342.jpg","8OxH2":"9.6549a63e.jpg","lqKSR":"10.382973b2.jpg","l0giU":"11.5a2f5ab0.jpg"}'));var a;a=JSON.parse('[{"src":"images/gallery/1.jpg/","title":"Spider plant","description":"Pet friendly"},{"src":"/images/gallery/2.jpg","title":"Pilea Peperomioides","description":"Ideal for beginners"},{"src":"/images/gallery/3.jpg","title":"Swiss Cheese Plant","description":"Toxic to pets"},{"src":"/images/gallery/4.jpg","title":"The Unkillables plant bundle","description":"Outdoor plant"},{"src":"/images/gallery/5.jpg","title":"Pineapple plant","description":"Indoor plant"},{"src":"/images/gallery/6.jpg","title":"Rubber plant","description":"Low light levels"},{"src":"/images/gallery/7.jpg","title":"Snake plant","description":"Ideal for beginners"},{"src":"/images/gallery/8.jpg","title":"ZZ plant","description":"Low light levels"},{"src":"/images/gallery/9.jpg","title":"Sansevieria Zeylanica Fan","description":"Ideal for beginners"},{"src":"/images/gallery/10.jpg","title":"Swiss Cheese Plant","description":"Patterned leaves"},{"src":"/images/gallery/11.jpg","title":"Variegated Rubber plant","description":"Ideal for beginners"}]');var o,s;s=new URL(l("kyEFX").resolve("geg1f"),import.meta.url).toString();var g;g=new URL(l("kyEFX").resolve("3HGNP"),import.meta.url).toString();var c;c=new URL(l("kyEFX").resolve("5N3Mr"),import.meta.url).toString();var d;d=new URL(l("kyEFX").resolve("cOWez"),import.meta.url).toString();var p;p=new URL(l("kyEFX").resolve("afaUO"),import.meta.url).toString();var f;f=new URL(l("kyEFX").resolve("GHNyY"),import.meta.url).toString();var u;u=new URL(l("kyEFX").resolve("dd94S"),import.meta.url).toString();var v;v=new URL(l("kyEFX").resolve("aIDbu"),import.meta.url).toString();var m;m=new URL(l("kyEFX").resolve("8OxH2"),import.meta.url).toString();var y;y=new URL(l("kyEFX").resolve("lqKSR"),import.meta.url).toString();var S;S=new URL(l("kyEFX").resolve("l0giU"),import.meta.url).toString(),o={1:s,2:g,3:c,4:d,5:p,6:f,7:u,8:v,9:m,10:y,11:S},console.log(o),console.log(e(a));const H=document.querySelector(".gallery"),b=e(a).map((({description:t,src:e,title:r},n)=>`\n        <li class="galleryItem">\n\t\t\t\t\t<div class="card">\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\tclass="cardLink"\n\t\t\t\t\t\t\thref=${o[n+1]}\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t\tdata-title=${r}\n\t\t\t\t\t\t\tdata-description=${t}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div class="cardContent">\n\t\t\t\t\t\t\t\t<h3 class="cardTitle">${r}</h3>\n\t\t\t\t\t\t\t\t<p class="cardDescription">${t}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="cardHover"></div>\n\t\t\t\t\t\t\t <img class="cardImage" src=${o[n+1]} alt=${r} /> \n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n        `)).join("");H.insertAdjacentHTML("beforeend",b);
//# sourceMappingURL=index.3973829d.js.map