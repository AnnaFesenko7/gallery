!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequire36ed;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire36ed=i),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o;return e}}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,o){t&&l(e.prototype,t);o&&l(e,o);return e};var r=i("hKHmD"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){h.default(e,t,o[t])}))}return e};var d,h=(d=i("hKHmD"))&&d.__esModule?d:{default:d};var u={linkClass:".cardLink",linkImageClass:".cardImage"},p="explosion_Opened",x="explosion_Opening",m="explosionSummary",N="explosionControls",y="explosionSummaryContent",f="explosionTitle",v="explosionDescription",g="explosionImage",I="explosionClose",C="explosionNavs",S="explosionNav",w="explosionNavPrev",b="explosionNavNext",k="explosionCounter",z=function(){"use strict";function t(o,n){var i=this;e(s)(this,t),e(r)(this,"resize",(function(){i.modalContainerNode.classList.contains(p)&&(i.setInitSizesToImages(),i.setGalleryStyles())})),e(r)(this,"switchImage",(function(e){e.preventDefault;var t=e.target.closest("button");t&&(t.classList.contains(w)&&i.currentIndex>0&&(i.currentIndex-=1),t.classList.contains(b)&&i.currentIndex<i.size-1&&(i.currentIndex+=1),i.switchChanges(!0))})),e(r)(this,"activeGallery",(function(e){var t=i;e.preventDefault();var o=e.target.closest("a");!o||i.modalContainerNode.classList.contains(x)||i.modalContainerNode.classList.contains(p)||(i.throttledResize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=!1,n=null,i=null;return function s(){for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];if(o)return n=l,void(i=this);e.apply(this,l),o=!0,setTimeout((function(){o=!1,i&&(s.apply(i,n),i=null,n=null)}),t)}}(i.resize,200),window.addEventListener("resize",i.throttledResize),window.addEventListener("keydown",i.onEscClick),i.currentIndex=Array.from(i.linkNodes).findIndex((function(e){return o===e})),console.log(i.currentIndex),i.modalContainerNode.classList.add(x),i.setInitSizesToImages(),i.setInitPositionsToImages(),function(e,t){function o(){var n=Number(e.style.opacity);if(n<1)return n+=.1,e.style.opacity=n,void window.requestAnimationFrame(o);t&&t()}o()}(i.modalContainerNode,(function(){t.modalContainerNode.classList.replace(x,p),t.switchChanges()})))})),e(r)(this,"closeGallery",(function(e){var t=i;i.setInitPositionsToImages(),i.explosionImageNodes.forEach((function(e){e.style.opacity=1})),i.explosionSummaryNode.style.width=0,i.explosionControlsNode.style.marginTop="3000px",function(e,t){function o(){var n=Number(e.style.opacity);if(n>0)return n-=.01,e.style.opacity=n,void window.requestAnimationFrame(o);t&&t()}o()}(i.modalContainerNode,(function(){t.modalContainerNode.classList.remove(p),window.removeEventListener("resize",t.throttledResize),window.removeEventListener("keydown",t.onEscClick)}))})),e(r)(this,"onEscClick",(function(e){"Escape"!==event.key||i.closeGallery()})),this.options=e(c)({},u,n),this.containerNode=o,this.linkNodes=o.querySelectorAll(this.options.linkClass),console.log(this.linkNodes[0].dataset),this.minWidth=1023,this.minHeight=600,this.padding=32,this.showingCount=4,this.currentIndex=0,this.size=this.linkNodes.length,this.initModal(),this.events()}return e(a)(t,[{key:"initModal",value:function(){this.modalContainerNode=document.createElement("div"),this.modalContainerNode.className="explosion",this.modalContainerNode.innerHTML='\n    <div class="'.concat(m,'">\n  <div class="').concat(y,'">\n    <h2 class="').concat(f,'"></h2>\n    <p class="').concat(v,'"></p>\n  </div>\n</div>\n <div class="').concat(N,'">\n      <button class="').concat(I,'"></button>\n      <div class="').concat(C,'">\n        <button class="').concat(S,"  ").concat(w,'"></button>\n        <div class="').concat(k,'">1/').concat(this.size,'</div>\n        <button class="').concat(S,"  ").concat(b,'"></button>\n      </div>\n    </div>\n    <div class="').concat("explosionImages",'">\n     ').concat(Array.from(this.linkNodes).map((function(e){return' \n         <img\n            src="'.concat(e.getAttribute("href"),'" \n            alt="').concat(e.dataset.title,'"\n            class="').concat(g,'"\n            data-title="').concat(e.dataset.title,'"\n            data-description="').concat(e.dataset.description,'"\n          />')})).join(""),"\n  </div>\n     </div>\n    "),this.explosionImageNodes=this.modalContainerNode.querySelectorAll(".".concat(g)),this.explosionControlsNode=this.modalContainerNode.querySelector(".".concat(N)),this.explosionNavsNode=this.modalContainerNode.querySelector(".".concat(C)),this.explosionNavPrevNode=this.modalContainerNode.querySelector(".".concat(w)),this.explosionNavNextNode=this.modalContainerNode.querySelector(".".concat(b)),this.explosionCounterNode=this.modalContainerNode.querySelector(".".concat(k)),this.explosionSummaryNode=this.modalContainerNode.querySelector(".".concat(m)),this.explosionSummaryContentNode=this.modalContainerNode.querySelector(".".concat(y)),this.explosionTitleNode=this.modalContainerNode.querySelector(".".concat(f)),this.explosionDescriptionNode=this.modalContainerNode.querySelector(".".concat(v)),this.explosionCloseNodes=this.modalContainerNode.querySelector(".".concat(I)),document.body.appendChild(this.modalContainerNode)}},{key:"events",value:function(){this.containerNode.addEventListener("click",this.activeGallery),this.explosionNavsNode.addEventListener("click",this.switchImage),this.explosionCloseNodes.addEventListener("click",this.closeGallery)}},{key:"setInitSizesToImages",value:function(){var e=this;console.log(" this.explosionImageNodes",this.explosionImageNodes),this.linkNodes.forEach((function(t,o){var n=t.getBoundingClientRect();e.explosionImageNodes[o].style.width=n.width+"px",e.explosionImageNodes[o].style.height=n.height+"px"}))}},{key:"setInitPositionsToImages",value:function(){var e=this;this.linkNodes.forEach((function(t,o){var n=t.getBoundingClientRect();e.setPositionStyles(e.explosionImageNodes[o],n.left,n.top)}))}},{key:"setPositionStyles",value:function(e,t,o){e.style.transform="translate3d(".concat(t.toFixed(1),"px,\n     ").concat(o.toFixed(1),"px, 0)")}},{key:"switchChanges",value:function(e){this.setCurrentState(),this.switchDisableNav(),this.changeCounter(),this.changeSummary(e)}},{key:"setCurrentState",value:function(){var e=this;this.explosionPrevHiddenImageNodes=[],this.explosionPrevShowingImageNodes=[],this.explosionActiveImageNodes=[],this.explosionNextShowingImageNodes=[],this.explosionNextHiddenImageNodes=[],this.explosionImageNodes.forEach((function(t,o){o+e.showingCount<e.currentIndex?e.explosionPrevHiddenImageNodes.unshift(t):o<e.currentIndex?e.explosionPrevShowingImageNodes.unshift(t):o===e.currentIndex?e.explosionActiveImageNodes.push(t):o<=e.currentIndex+e.showingCount?e.explosionNextShowingImageNodes.push(t):e.explosionNextHiddenImageNodes.push(t)})),this.setGalleryStyles()}},{key:"setGalleryStyles",value:function(){var e=this,t=this.linkNodes[0].offsetWidth,o=this.linkNodes[0].offsetHeight,n=Math.max(this.minWidth,window.innerWidth),i=Math.max(this.minHeight,window.innerHeight);this.explosionPrevHiddenImageNodes.forEach((function(t){return e.setImageStyles(t,{top:-i,left:.31*n,opacity:.1,zIndex:1,scale:.4})})),this.setImageStyles(this.explosionPrevShowingImageNodes[0],{top:i-o,left:.29*n,opacity:.4,zIndex:4,scale:.75}),this.setImageStyles(this.explosionPrevShowingImageNodes[1],{top:.35*i,left:.11*n,opacity:.3,zIndex:3,scale:.6}),this.setImageStyles(this.explosionPrevShowingImageNodes[2],{top:.095*i,left:.17*n,opacity:.2,zIndex:2,scale:.5}),this.setImageStyles(this.explosionPrevShowingImageNodes[3],{top:-.3*o,left:.29*n,opacity:.1,zIndex:2,scale:.4}),this.explosionActiveImageNodes.forEach((function(s){return e.setImageStyles(s,{top:(i-o)/2,left:(n-t)/2,opacity:1,zIndex:5,scale:1.2})})),this.setImageStyles(this.explosionNextShowingImageNodes[0],{top:0,left:.52*n,opacity:.4,zIndex:4,scale:.75}),this.setImageStyles(this.explosionNextShowingImageNodes[1],{top:.12*i,left:.72*n,opacity:.3,zIndex:3,scale:.6}),this.setImageStyles(this.explosionNextShowingImageNodes[2],{top:.47*i,left:.67*n,opacity:.2,zIndex:2,scale:.5}),this.setImageStyles(this.explosionNextShowingImageNodes[3],{top:.67*o,left:.53*n,opacity:.1,zIndex:1,scale:.4}),this.explosionNextHiddenImageNodes.forEach((function(t){return e.setImageStyles(t,{top:i,left:.53*n,opacity:.1,zIndex:1,scale:.4})})),this.setControlsStyles(this.explosionControlsNode,{marginTop:(i-1.2*o)/2,height:1.2*o}),this.explosionSummaryNode.style.width="50%"}},{key:"setImageStyles",value:function(e,t){var o=t.top,n=t.left,i=t.opacity,s=t.zIndex,a=t.scale;e&&(e.style.opacity=i,e.style.transform="translate3d(".concat(n.toFixed(1),"px, \n    ").concat(o.toFixed(1),"px, 0) scale(").concat(a,")"),e.style.zIndex=s)}},{key:"setControlsStyles",value:function(e,t){var o=t.marginTop,n=t.height;e.style.marginTop=o+"px",e.style.height=n+"px"}},{key:"switchDisableNav",value:function(){0!==this.currentIndex||this.explosionNavPrevNode.disabled||(this.explosionNavPrevNode.disabled=!0),this.currentIndex>0&&this.explosionNavPrevNode.disabled&&(this.explosionNavPrevNode.disabled=!1),this.currentIndex!==this.size-1||this.explosionNavNextNode.disabled||(this.explosionNavNextNode.disabled=!0),this.currentIndex<this.size-1&&this.explosionNavNextNode.disabled&&(this.explosionNavNextNode.disabled=!1)}},{key:"changeCounter",value:function(){this.explosionCounterNode.innerText="".concat(this.currentIndex+1,"/").concat(this.size)}},{key:"changeSummary",value:function(e){var t=this.explosionImageNodes[this.currentIndex].dataset;if(e){var o=this;this.explosionSummaryContentNode.style.opacity=0,setTimeout((function(){o.explosionTitleNode.textContent=t.title,o.explosionDescriptionNode.textContent=t.description,o.explosionSummaryContentNode.style.opacity=1}),500)}else this.explosionTitleNode.textContent=t.title,this.explosionDescriptionNode.textContent=t.description}}]),t}();new z(document.querySelector(".gallery"))}();
//# sourceMappingURL=index.362a0f47.js.map