!function(){var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();const e=[1,4,7,31,32,33,34,35,36,37,40,41,42,43,44,45,46,47,91,92,93,94,95,96,97,100,101,102,103,104,105,106,107];function n(t,e,n,u){let a=u.getColumnNumber(),i=(u.getFileName(),u.getFunctionName()),s=u.getLineNumber(),l=u.getScriptNameOrSourceURL()+":"+s+":"+a;var g;if(i||(i="<anonymous>"),console.group(`${c("%s")} ${c("%s()")} ${r("<%s>")} ${c(":-")} ${c("%s")} ${o("%s")} ${c("= ↓")}`,l,i,`${`${(g=new Date).getHours()}`.padStart(2,"0")}:${`${g.getMinutes()}`.padStart(2,"0")}:${`${g.getSeconds()}`.padStart(2,"0")}:${`${g.getMilliseconds()}`.padStart(3,"0")}`,"[object Arguments]"===n?`Arguments(${Object.keys(e).length})`:e,n),console.log(t),"[object Arguments]"===n)for(let t in e)console.log(`${r("%s")} ${o("%s")} ${c("->")}`,t,Object.prototype.toString.call(e[t])),console.log("===>",e[t]);console.groupEnd()}function r(t){return`[${e[6]}m${t}[0m`}function o(t){return`[${e[21]}m${t}[0m`}function c(t){return`[${e[0]}m${t}[0m`}t.g.dlog=function(t,e="anonymous",r=!1){r&&console.trace();let o=function(){var t=Error.prepareStackTrace;Error.prepareStackTrace=function(t,e){return e};var e=(new Error).stack;return Error.prepareStackTrace=t,e.shift(),e.shift(),e[0]}();"__func__"===t?function(t,e,r){let o=r.getFunctionName();r.getFunction(),n("调用 "+(o||"匿名")+" 方法 | 参数个数: "+e.length,e,Object.prototype.toString.call(e),r)}(0,e,o):n(t,e,Object.prototype.toString.call(t),o)}}();