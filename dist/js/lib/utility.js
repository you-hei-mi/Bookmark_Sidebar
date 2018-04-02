/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";window.UtilityHelper=function(t){this.openUrl=((e,n="default",o=!0)=>{"about:blank"!==e.url&&(t.helper.model.setData({"u/lastOpened":e.id,"u/performReopening":o&&e.reopenSidebar||!1}),"incognito"===n?t.helper.model.call("openLink",{href:e.url,incognito:!0}):"newWindow"===n?t.helper.model.call("openLink",{href:e.url,newWindow:!0}):t.helper.model.call("openLink",{parentId:e.parentId,id:e.id,href:e.url,newTab:"newTab"===n,position:t.helper.model.getData("b/newTabPosition"),active:o}))}),this.openAllBookmarks=(e=>{t.helper.model.call("trackEvent",{category:"url",action:"open",label:"new_tab_all_children",value:e.length}),"afterCurrent"===t.helper.model.getData("b/newTabPosition")&&e.reverse(),e.forEach(e=>{this.openUrl(e,"newTab",!1)})}),this.isBackgroundConnected=(()=>{let e=chrome.runtime.connect();return!!e&&(e.disconnect(),!0)}),this.triggerEvent=((e,n={},o=null)=>{(o||document).dispatchEvent(new CustomEvent(t.opts.events[e],{detail:n,bubbles:!0,cancelable:!1}))}),this.copyToClipboard=(n=>{let o=e("<textarea />").text(n).appendTo(t.elements.iframeBody);o[0].select();let l=!1;try{l=t.elements.iframe[0].contentDocument.execCommand("copy")}catch(e){}return o.remove(),l}),this.isUrlOnBlacklist=(e=>{let t=!1;return["about:","https?://192.168.","192.168.","https?://localhost","localhost","https?://127.0.0.","127.0.0.","file://","chrome://","chrome-extension://"].some(n=>{if(0===e.search(new RegExp(n,"gi")))return t=!0,!0}),t}),this.isWindowed=(()=>{return window.screenX>12||window.screenY>12||Math.abs(window.screen.availWidth-window.innerWidth)>12})}})(jsu);