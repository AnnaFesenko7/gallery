function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,s){t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s;return e};const s={linkClass:".cardLink",linkImageClass:".cardImage"};new class{initModal(){this.modalContainerNode=document.createElement("div"),this.modalContainerNode.className="explosion",this.modalContainerNode.innerHTML=`\n    <div class="explosionSummary">\n  <div class="explosionSummaryContent">\n    <h2 class="explosionTitle"></h2>\n    <p class="explosionDescription"></p>\n  </div>\n</div>\n <div class="explosionControls">\n      <button class="explosionClose"></button>\n      <div class="explosionNavs">\n        <button class="explosionNav  explosionNavPrev"></button>\n        <div class="explosionCounter">1/${this.size}</div>\n        <button class="explosionNav  explosionNavNext"></button>\n      </div>\n    </div>\n    <div class="explosionImages">\n     ${Array.from(this.linkNodes).map((e=>` \n         <img\n            src="${e.getAttribute("href")}" \n            alt="${e.dataset.title}"\n            class="explosionImage"\n            data-title="${e.dataset.title}"\n            data-description="${e.dataset.description}"\n          />`)).join("")}\n  </div>\n     </div>\n    `,this.explosionImageNodes=this.modalContainerNode.querySelectorAll(".explosionImage"),this.explosionControlsNode=this.modalContainerNode.querySelector(".explosionControls"),this.explosionNavsNode=this.modalContainerNode.querySelector(".explosionNavs"),this.explosionNavPrevNode=this.modalContainerNode.querySelector(".explosionNavPrev"),this.explosionNavNextNode=this.modalContainerNode.querySelector(".explosionNavNext"),this.explosionCounterNode=this.modalContainerNode.querySelector(".explosionCounter"),this.explosionSummaryNode=this.modalContainerNode.querySelector(".explosionSummary"),this.explosionSummaryContentNode=this.modalContainerNode.querySelector(".explosionSummaryContent"),this.explosionTitleNode=this.modalContainerNode.querySelector(".explosionTitle"),this.explosionDescriptionNode=this.modalContainerNode.querySelector(".explosionDescription"),this.explosionCloseNodes=this.modalContainerNode.querySelector(".explosionClose"),document.body.appendChild(this.modalContainerNode)}events(){this.containerNode.addEventListener("click",this.activeGallery),this.explosionNavsNode.addEventListener("click",this.switchImage),this.explosionCloseNodes.addEventListener("click",this.closeGallery)}setInitSizesToImages(){console.log(" this.explosionImageNodes",this.explosionImageNodes),this.linkNodes.forEach(((e,t)=>{const s=e.getBoundingClientRect();this.explosionImageNodes[t].style.width=s.width+"px",this.explosionImageNodes[t].style.height=s.height+"px"}))}setInitPositionsToImages(){this.linkNodes.forEach(((e,t)=>{const s=e.getBoundingClientRect();this.setPositionStyles(this.explosionImageNodes[t],s.left,s.top)}))}setPositionStyles(e,t,s){e.style.transform=`translate3d(${t.toFixed(1)}px,\n     ${s.toFixed(1)}px, 0)`}switchChanges(e){this.setCurrentState(),this.switchDisableNav(),this.changeCounter(),this.changeSummary(e)}setCurrentState(){this.explosionPrevHiddenImageNodes=[],this.explosionPrevShowingImageNodes=[],this.explosionActiveImageNodes=[],this.explosionNextShowingImageNodes=[],this.explosionNextHiddenImageNodes=[],this.explosionImageNodes.forEach(((e,t)=>{t+this.showingCount<this.currentIndex?this.explosionPrevHiddenImageNodes.unshift(e):t<this.currentIndex?this.explosionPrevShowingImageNodes.unshift(e):t===this.currentIndex?this.explosionActiveImageNodes.push(e):t<=this.currentIndex+this.showingCount?this.explosionNextShowingImageNodes.push(e):this.explosionNextHiddenImageNodes.push(e)})),this.setGalleryStyles()}setGalleryStyles(){const e=this.linkNodes[0].offsetWidth,t=this.linkNodes[0].offsetHeight,s=Math.max(this.minWidth,window.innerWidth),o=Math.max(this.minHeight,window.innerHeight);this.explosionPrevHiddenImageNodes.forEach((e=>this.setImageStyles(e,{top:-o,left:.31*s,opacity:.1,zIndex:1,scale:.4}))),this.setImageStyles(this.explosionPrevShowingImageNodes[0],{top:o-t,left:.29*s,opacity:.4,zIndex:4,scale:.75}),this.setImageStyles(this.explosionPrevShowingImageNodes[1],{top:.35*o,left:.11*s,opacity:.3,zIndex:3,scale:.6}),this.setImageStyles(this.explosionPrevShowingImageNodes[2],{top:.095*o,left:.17*s,opacity:.2,zIndex:2,scale:.5}),this.setImageStyles(this.explosionPrevShowingImageNodes[3],{top:-.3*t,left:.29*s,opacity:.1,zIndex:2,scale:.4}),this.explosionActiveImageNodes.forEach((i=>this.setImageStyles(i,{top:(o-t)/2,left:(s-e)/2,opacity:1,zIndex:5,scale:1.2}))),this.setImageStyles(this.explosionNextShowingImageNodes[0],{top:0,left:.52*s,opacity:.4,zIndex:4,scale:.75}),this.setImageStyles(this.explosionNextShowingImageNodes[1],{top:.12*o,left:.72*s,opacity:.3,zIndex:3,scale:.6}),this.setImageStyles(this.explosionNextShowingImageNodes[2],{top:.47*o,left:.67*s,opacity:.2,zIndex:2,scale:.5}),this.setImageStyles(this.explosionNextShowingImageNodes[3],{top:.67*t,left:.53*s,opacity:.1,zIndex:1,scale:.4}),this.explosionNextHiddenImageNodes.forEach((e=>this.setImageStyles(e,{top:o,left:.53*s,opacity:.1,zIndex:1,scale:.4}))),this.setControlsStyles(this.explosionControlsNode,{marginTop:(o-1.2*t)/2,height:1.2*t}),this.explosionSummaryNode.style.width="50%"}setImageStyles(e,{top:t,left:s,opacity:o,zIndex:i,scale:n}){e&&(e.style.opacity=o,e.style.transform=`translate3d(${s.toFixed(1)}px, \n    ${t.toFixed(1)}px, 0) scale(${n})`,e.style.zIndex=i)}setControlsStyles(e,{marginTop:t,height:s}){e.style.marginTop=t+"px",e.style.height=s+"px"}switchDisableNav(){0!==this.currentIndex||this.explosionNavPrevNode.disabled||(this.explosionNavPrevNode.disabled=!0),this.currentIndex>0&&this.explosionNavPrevNode.disabled&&(this.explosionNavPrevNode.disabled=!1),this.currentIndex!==this.size-1||this.explosionNavNextNode.disabled||(this.explosionNavNextNode.disabled=!0),this.currentIndex<this.size-1&&this.explosionNavNextNode.disabled&&(this.explosionNavNextNode.disabled=!1)}changeCounter(){this.explosionCounterNode.innerText=`${this.currentIndex+1}/${this.size}`}changeSummary(e){const t=this.explosionImageNodes[this.currentIndex].dataset;e?(this.explosionSummaryContentNode.style.opacity=0,setTimeout((()=>{this.explosionTitleNode.textContent=t.title,this.explosionDescriptionNode.textContent=t.description,this.explosionSummaryContentNode.style.opacity=1}),500)):(this.explosionTitleNode.textContent=t.title,this.explosionDescriptionNode.textContent=t.description)}constructor(o,i){e(t)(this,"resize",(()=>{this.modalContainerNode.classList.contains("explosion_Opened")&&(this.setInitSizesToImages(),this.setGalleryStyles())})),e(t)(this,"switchImage",(e=>{e.preventDefault;const t=e.target.closest("button");t&&(t.classList.contains("explosionNavPrev")&&this.currentIndex>0&&(this.currentIndex-=1),t.classList.contains("explosionNavNext")&&this.currentIndex<this.size-1&&(this.currentIndex+=1),this.switchChanges(!0))})),e(t)(this,"activeGallery",(e=>{e.preventDefault();const t=e.target.closest("a");!t||this.modalContainerNode.classList.contains("explosion_Opening")||this.modalContainerNode.classList.contains("explosion_Opened")||(this.throttledResize=function(e,t=200){let s=!1,o=null,i=null;return function n(...l){if(s)return o=l,void(i=this);e.apply(this,l),s=!0,setTimeout((()=>{s=!1,i&&(n.apply(i,o),i=null,o=null)}),t)}}(this.resize,200),window.addEventListener("resize",this.throttledResize),window.addEventListener("keydown",this.onEscClick),this.currentIndex=Array.from(this.linkNodes).findIndex((e=>t===e)),console.log(this.currentIndex),this.modalContainerNode.classList.add("explosion_Opening"),this.setInitSizesToImages(),this.setInitPositionsToImages(),function(e,t){function s(){let o=Number(e.style.opacity);if(o<1)return o+=.1,e.style.opacity=o,void window.requestAnimationFrame(s);t&&t()}s()}(this.modalContainerNode,(()=>{this.modalContainerNode.classList.replace("explosion_Opening","explosion_Opened"),this.switchChanges()})))})),e(t)(this,"closeGallery",(e=>{this.setInitPositionsToImages(),this.explosionImageNodes.forEach((e=>{e.style.opacity=1})),this.explosionSummaryNode.style.width=0,this.explosionControlsNode.style.marginTop="3000px",function(e,t){function s(){let o=Number(e.style.opacity);if(o>0)return o-=.01,e.style.opacity=o,void window.requestAnimationFrame(s);t&&t()}s()}(this.modalContainerNode,(()=>{this.modalContainerNode.classList.remove("explosion_Opened"),window.removeEventListener("resize",this.throttledResize),window.removeEventListener("keydown",this.onEscClick)}))})),e(t)(this,"onEscClick",(e=>{"Escape"!==event.key||this.closeGallery()})),this.options={...s,...i},this.containerNode=o,this.linkNodes=o.querySelectorAll(this.options.linkClass),console.log(this.linkNodes[0].dataset),this.minWidth=1023,this.minHeight=600,this.padding=32,this.showingCount=4,this.currentIndex=0,this.size=this.linkNodes.length,this.initModal(),this.events()}}(document.querySelector(".gallery"));
//# sourceMappingURL=index.cb6a78cb.js.map
