!function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n(1);var i=new n(2),o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e.canvas,this.ctx=e.ctx,this.winW=i.getTargetWH()[0],this.winH=i.getTargetWH()[1],this.canvasW=.99*this.winW,this.canvasH=.8*this.winH,this.canvas.width=this.canvasW,this.canvas.height=this.canvasH,this.canvasPadding=5,this.ctx.lineWidth=e.penceilWeight||2,this.ctx.strokeStyle=e.penceilColor||"#222",this.canvas.style.backgroundColor=e.canvasColor||"none",this.drawHistoryStack=[],this.scaleList=[1,1],this.timeTravelStep=-1,this.updateParam()}var e,n,o;return e=t,(n=[{key:"updateParam",value:function(){this.drawLayerLeft=this.canvas.offsetLeft,this.drawLayerTop=this.canvas.offsetTop,this.cansLimitLt=this.canvasPadding,this.cansLimitRt=this.canvasW-this.canvasPadding,this.cansLimitTp=this.canvasPadding,this.cansLimitBt=this.canvasH-this.canvasPadding}},{key:"updateCtxStyle",value:function(t){this.ctx.lineWidth=t.penceilWeight||this.ctx.lineWidth,this.ctx.strokeStyle=t.penceilColor||this.ctx.strokeStyle,this.canvas.style.backgroundColor=t.canvasColor||this.canvas.style.backgroundColor}},{key:"mouseXY",value:function(t){var e=(t=t||window.event).clientX||t.pageX||t.touches[0].clientX||t.touches[0].pageX,n=t.clientY||t.pageY||t.touches[0].clientY||t.touches[0].pageY;return[(e-this.drawLayerLeft)/this.scaleList[1],(n-this.drawLayerTop)/this.scaleList[1]]}},{key:"pushStack",value:function(){this.drawHistoryStack.length>19?(this.drawHistoryStack.shift(),this.drawHistoryStack.push(this.canvas.toDataURL())):(this.timeTravelStep++,this.drawHistoryStack.push(this.canvas.toDataURL()))}},{key:"syncData",value:function(t){console.log(t)}},{key:"drawEvent",value:function(t){var e=this,n=void 0,a=void 0,i=void 0;if("ontouchstart"in window?(n="ontouchstart",a="ontouchend",i="ontouchmove"):(n="onmousedown",a="onmouseup",i="onmousemove"),t)return this.canvas[n]=null,this.canvas[i]=null,void(this.canvas[a]=null);this.canvas[n]=function(t){e.ctx.beginPath(),e.canvas[i]=function(t){var n=e.mouseXY(t);n[0]<e.cansLimitLt||n[0]>e.cansLimitRt||n[1]<e.cansLimitTp||n[1]>e.cansLimitBt?e.canvas[i]=null:e.ctx.lineTo(n[0],n[1]),e.ctx.stroke()}},this.canvas[a]=function(t){e.canvas[i]=null,e.pushStack()}}},{key:"travel",value:function(t){var e,n=this;if(this.drawHistoryStack.length>0){if(t<0){if(--this.timeTravelStep<-1)return void(this.timeTravelStep=-1)}else if(t>0&&++this.timeTravelStep>=this.drawHistoryStack.length)return void(this.timeTravelStep=this.drawHistoryStack.length-1);this.ctx.clearRect(0,0,this.canvasW,this.canvasH),(e=new Image).src=n.drawHistoryStack[n.timeTravelStep],e.onload=function(){n.ctx.drawImage(e,0,0)}}}}])&&a(e.prototype,n),o&&a(e,o),t}();function s(t,e,n){if(n){if(t.value=(+t.value+.1).toFixed(1),e.scaleList[1]=+t.value,e.scaleList[1]>5)return e.scaleList[1]=5,void(t.value=5)}else if(t.value=(+t.value-.1).toFixed(1),e.scaleList[1]=+t.value,e.scaleList[1]<.1)return e.scaleList[1]=.1,void(t.value=.1);e.canvas.style.width=e.canvasW*e.scaleList[1]+"px",e.canvas.style.height=e.canvasH*e.scaleList[1]+"px",e.updateParam(),console.log(e.drawLayerLeft)}window.onload=function(){var t=!1,e=document.getElementById("canvas"),n=e.getContext("2d"),a=new o({canvas:e,ctx:n,penceilWeight:penceilWeight});!function(t){t.drawEvent(),window.onresize=function(){t.drawEvent(!0),t.updateParam(),t.drawEvent(),t.travel(0)}}(a),i.getEle("#backward").onclick=function(){a.travel(-1)},i.getEle("#forward").onclick=function(){a.travel(1)},i.getEle("#clearAll").onclick=function(){a.ctx.clearRect(0,0,a.canvasW,a.canvasH),a.timeTravelStep=-1,a.drawHistoryStack=[]},i.getEle("#penceilWeight").onchange=function(){this.value>120&&(this.value=120),this.value<1&&(this.value=1),a.updateCtxStyle({penceilWeight:this.value})},i.getEle("#penceilColor").onchange=function(){a.updateCtxStyle({penceilColor:this.value})},i.getEle("#canvasColor").onchange=function(){a.updateCtxStyle({canvasColor:this.value})};var c=i.getEle("#scaleNum");i.getEle("#larger").onclick=function(){s(c,a,!0)},i.getEle("#smaller").onclick=function(){s(c,a,!1)},i.getEle(".shareLayerBtn").onclick=function(){t=!t,i.getEle(".sub-window").style=t?"display:inline-block":"display:none"}}},function(t,e,n){},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,a,i;return e=t,i=[{key:"getEle",value:function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?document.querySelectorAll(t):document.querySelector(t)}},{key:"getTargetWH",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t?[t.offsetWidth,t.offsetHeight]:[window.document.body.offsetWidth||document.documentElement.clientWidth,window.document.body.offsetHeight||document.documentElement.clientHeight]}}],(a=null)&&n(e.prototype,a),i&&n(e,i),t}();t.exports=a}]);