// build time:Wed May 30 2018 20:12:20 GMT+0800 (中国标准时间)
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,document):"function"==typeof define&&define.amd?define(null,function(){t(e,document)}):e.plyr=t(e,document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(){var e,n,a,r=navigator.userAgent,s=navigator.appName,o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(s="IE",o="11;"):-1!==(n=r.indexOf("MSIE"))?(s="IE",o=r.substring(n+5)):-1!==(n=r.indexOf("Chrome"))?(s="Chrome",o=r.substring(n+7)):-1!==(n=r.indexOf("Safari"))?(s="Safari",o=r.substring(n+7),-1!==(n=r.indexOf("Version"))&&(o=r.substring(n+8))):-1!==(n=r.indexOf("Firefox"))?(s="Firefox",o=r.substring(n+8)):(e=r.lastIndexOf(" ")+1)<(n=r.lastIndexOf("/"))&&(s=r.substring(e,n),o=r.substring(n+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!==(a=o.indexOf(";"))&&(o=o.substring(0,a)),-1!==(a=o.indexOf(" "))&&(o=o.substring(0,a)),i=parseInt(""+o,10),isNaN(i)&&(o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10)),{name:s,version:i,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform),touch:"ontouchstart"in t.documentElement}}function a(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function r(e){if(!t.querySelectorAll('script[src="'+e+'"]').length){var n=t.createElement("script");n.src=e;var a=t.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)}}function s(e,t){return Array.prototype.indexOf&&-1!=e.indexOf(t)}function o(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function i(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var a=n>0?t.cloneNode(!0):t,r=e[n],s=r.parentNode,o=r.nextSibling;a.appendChild(r),o?s.insertBefore(a,o):s.appendChild(a)}}function l(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function u(e){e&&e.parentNode.removeChild(e)}function c(e,t){e.insertBefore(t,e.firstChild)}function p(e,t){for(var n in t)e.setAttribute(n,"boolean"==typeof t[n]&&t[n]?"":t[n])}function d(e,n,a){var r=t.createElement(e);p(r,a),c(n,r)}function A(e){return e.replace(".","")}function m(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var a=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=a+(n?" "+t:"")}}function f(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className):!1}function y(e,t,n,a){e&&g(e,t,n,!0,a)}function b(e,t,n,a){e&&g(e,t,n,!1,a)}function v(e,t,n,a,r){y(e,t,function(t){n&&n.apply(e,[t]),a.apply(e,[t])},r)}function g(e,t,n,a,r){var s=t.split(" ");if("boolean"!=typeof r&&(r=!1),e instanceof NodeList)for(var o=0;o<e.length;o++)e[o]instanceof Node&&g(e[o],arguments[1],arguments[2],arguments[3]);else for(var i=0;i<s.length;i++)e[a?"addEventListener":"removeEventListener"](s[i],n,r)}function h(e,t,n,a){if(e&&t){"boolean"!=typeof n&&(n=!1);var r=new CustomEvent(t,{bubbles:n,detail:a});e.dispatchEvent(r)}}function k(e,t){return e?(t="boolean"==typeof t?t:!e.getAttribute("aria-pressed"),e.setAttribute("aria-pressed",t),t):void 0}function w(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function T(){var e=arguments;if(e.length){if(1==e.lenth)return e[0];for(var t=Array.prototype.shift.call(e),n=e.length,a=0;n>a;a++){var r=e[a];for(var s in r)r[s]&&r[s].constructor&&r[s].constructor===Object?(t[s]=t[s]||{},T(t[s],r[s])):t[s]=r[s]}return t}}function x(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},n="webkit moz o ms khtml".split(" ");if("undefined"!=typeof t.cancelFullScreen)e.supportsFullScreen=!0;else for(var a=0,r=n.length;r>a;a++){if(e.prefix=n[a],"undefined"!=typeof t[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof t.msExitFullscreen&&t.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=t.body),this.prefix){case"":return t.fullscreenElement==e;case"moz":return t.mozFullScreenElement==e;default:return t[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return"undefined"==typeof e&&(e=t.body),""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]()},e.cancelFullScreen=function(){return""===this.prefix?t.cancelFullScreen():t[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?t.fullscreenElement:t[this.prefix+"FullscreenElement"]}),e}function _(){var t={supported:function(){if(!("localStorage"in e))return!1;try{e.localStorage.setItem("___test","OK");var t=e.localStorage.getItem("___test");return e.localStorage.removeItem("___test"),"OK"===t}catch(n){return!1}return!1}()};return t}function E(g,T){function E(t,n){T.debug&&e.console&&console[n?"warn":"log"](t)}function S(){var e=[],t=T.iconUrl+"#"+T.iconPrefix;return s(T.controls,"play-large")&&e.push('<button type="button" data-plyr="play" class="plyr__play-large">','<svg><use xlink:href="'+t+'-play" /></svg>','<span class="plyr__sr-only">'+T.i18n.play+"</span>","</button>"),e.push('<div class="plyr__controls">'),s(T.controls,"restart")&&e.push('<button type="button" data-plyr="restart">','<svg><use xlink:href="'+t+'-restart" /></svg>','<span class="plyr__sr-only">'+T.i18n.restart+"</span>","</button>"),s(T.controls,"rewind")&&e.push('<button type="button" data-plyr="rewind">','<svg><use xlink:href="'+t+'-rewind" /></svg>','<span class="plyr__sr-only">'+T.i18n.rewind+"</span>","</button>"),s(T.controls,"play")&&e.push('<button type="button" data-plyr="play">','<svg><use xlink:href="'+t+'-play" /></svg>','<span class="plyr__sr-only">'+T.i18n.play+"</span>","</button>",'<button type="button" data-plyr="pause">','<svg><use xlink:href="'+t+'-pause" /></svg>','<span class="plyr__sr-only">'+T.i18n.pause+"</span>","</button>"),s(T.controls,"fast-forward")&&e.push('<button type="button" data-plyr="fast-forward">','<svg><use xlink:href="'+t+'-fast-forward" /></svg>','<span class="plyr__sr-only">'+T.i18n.forward+"</span>","</button>"),s(T.controls,"progress")&&(e.push('<span class="plyr__progress">','<label for="seek{id}" class="plyr__sr-only">Seek</label>','<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">','<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>','<progress class="plyr__progress--buffer" max="100" value="0">',"<span>0</span>% "+T.i18n.buffered,"</progress>"),T.tooltips.seek&&e.push('<span class="plyr__tooltip">00:00</span>'),e.push("</span>")),s(T.controls,"current-time")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+T.i18n.currentTime+"</span>",'<span class="plyr__time--current">00:00</span>',"</span>"),s(T.controls,"duration")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+T.i18n.duration+"</span>",'<span class="plyr__time--duration">00:00</span>',"</span>"),s(T.controls,"mute")&&e.push('<button type="button" data-plyr="mute">','<svg class="icon--muted"><use xlink:href="'+t+'-muted" /></svg>','<svg><use xlink:href="'+t+'-volume" /></svg>','<span class="plyr__sr-only">'+T.i18n.toggleMute+"</span>","</button>"),s(T.controls,"volume")&&e.push('<span class="plyr__volume">','<label for="volume{id}" class="plyr__sr-only">'+T.i18n.volume+"</label>",'<input id="volume{id}" class="plyr__volume--input" type="range" min="0" max="10" value="5" data-plyr="volume">','<progress class="plyr__volume--display" max="10" value="0" role="presentation"></progress>',"</span>"),s(T.controls,"captions")&&e.push('<button type="button" data-plyr="captions">','<svg class="icon--captions-on"><use xlink:href="'+t+'-captions-on" /></svg>','<svg><use xlink:href="'+t+'-captions-off" /></svg>','<span class="plyr__sr-only">'+T.i18n.toggleCaptions+"</span>","</button>"),s(T.controls,"fullscreen")&&e.push('<button type="button" data-plyr="fullscreen">','<svg class="icon--exit-fullscreen"><use xlink:href="'+t+'-exit-fullscreen" /></svg>','<svg><use xlink:href="'+t+'-enter-fullscreen" /></svg>','<span class="plyr__sr-only">'+T.i18n.toggleFullscreen+"</span>","</button>"),e.push("</div>"),e.join("")}function I(){if(Se.supported.full&&("audio"!=Se.type||T.fullscreen.allowAudio)&&T.fullscreen.enabled){var e=C.supportsFullScreen;e||T.fullscreen.fallback&&!V()?(E((e?"Native":"Fallback")+" fullscreen enabled"),m(Se.container,T.classes.fullscreen.enabled,!0)):E("Fullscreen not supported and fallback disabled"),k(Se.buttons.fullscreen,!1),H()}}function N(){if("video"===Se.type){L(T.selectors.captions)||Se.videoContainer.insertAdjacentHTML("afterbegin",'<div class="'+A(T.selectors.captions)+'"></div>'),Se.usingTextTracks=!1,Se.media.textTracks&&(Se.usingTextTracks=!0);for(var e,t="",n=Se.media.childNodes,a=0;a<n.length;a++)"track"===n[a].nodeName.toLowerCase()&&(e=n[a].kind,"captions"!==e&&"subtitles"!==e||(t=n[a].getAttribute("src")));if(Se.captionExists=!0,""===t?(Se.captionExists=!1,E("No caption track found")):E("Caption track found; URI: "+t),Se.captionExists){for(var r=Se.media.textTracks,s=0;s<r.length;s++)r[s].mode="hidden";if(R(Se),("IE"===Se.browser.name&&Se.browser.version>=10||"Firefox"===Se.browser.name&&Se.browser.version>=31)&&(E("Detected browser with known TextTrack issues - using manual fallback"),Se.usingTextTracks=!1),Se.usingTextTracks){E("TextTracks supported");for(var o=0;o<r.length;o++){var i=r[o];"captions"!==i.kind&&"subtitles"!==i.kind||y(i,"cuechange",function(){this.activeCues[0]&&"text"in this.activeCues[0]?P(this.activeCues[0].getCueAsHTML()):P()})}}else if(E("TextTracks not supported so rendering captions manually"),Se.currentCaption="",Se.captions=[],""!==t){var l=new XMLHttpRequest;l.onreadystatechange=function(){if(4===l.readyState)if(200===l.status){var e,t=[],n=l.responseText;t=n.split("\n\n");for(var a=0;a<t.length;a++){e=t[a],Se.captions[a]=[];var r=e.split("\n"),s=0;-1===r[s].indexOf(":")&&(s=1),Se.captions[a]=[r[s],r[s+1]]}Se.captions.shift(),E("Successfully loaded the caption file via AJAX")}else E("There was a problem loading the caption file via AJAX",!0)},l.open("get",t,!0),l.send()}}else m(Se.container,T.classes.captions.enabled)}}function P(e){var n=L(T.selectors.captions),a=t.createElement("span");n.innerHTML="","undefined"==typeof e&&(e=""),"string"==typeof e?a.innerHTML=e.trim():a.appendChild(e),n.appendChild(a);n.offsetHeight}function M(e){function t(e,t){var n=[];n=e.split(" --> ");for(var a=0;a<n.length;a++)n[a]=n[a].replace(/(\d+:\d+:\d+\.\d+).*/,"$1");return r(n[t])}function n(e){return t(e,0)}function a(e){return t(e,1)}function r(e){if(null===e||void 0===e)return 0;var t,n=[],a=[];return n=e.split(","),a=n[0].split(":"),t=Math.floor(60*a[0]*60)+Math.floor(60*a[1])+Math.floor(a[2])}if(!Se.usingTextTracks&&"video"===Se.type&&Se.supported.full&&(Se.subcount=0,e="number"==typeof e?e:Se.media.currentTime,Se.captions[Se.subcount])){for(;a(Se.captions[Se.subcount][0])<e.toFixed(1);)if(Se.subcount++,Se.subcount>Se.captions.length-1){Se.subcount=Se.captions.length-1;break}Se.media.currentTime.toFixed(1)>=n(Se.captions[Se.subcount][0])&&Se.media.currentTime.toFixed(1)<=a(Se.captions[Se.subcount][0])?(Se.currentCaption=Se.captions[Se.subcount][1],P(Se.currentCaption)):P()}}function R(){Se.buttons.captions&&(m(Se.container,T.classes.captions.enabled,!0),T.captions.defaultActive&&(m(Se.container,T.classes.captions.active,!0),k(Se.buttons.captions,!0)))}function B(e){return Se.container.querySelectorAll(e)}function L(e){return B(e)[0]}function V(){try{return e.self!==e.top}catch(t){return!0}}function H(){function e(e){9===e.which&&Se.isFullscreen&&(e.target!==a||e.shiftKey?e.target===n&&e.shiftKey&&(e.preventDefault(),a.focus()):(e.preventDefault(),n.focus()))}var t=B("input:not([disabled]), button:not([disabled])"),n=t[0],a=t[t.length-1];y(Se.container,"keydown",e)}function O(e,t){if("string"==typeof t)d(e,Se.media,{src:t});else if(t.constructor===Array)for(var n=t.length-1;n>=0;n--)d(e,Se.media,t[n])}function W(){var e=T.html;E("Injecting custom controls"),e||(e=S()),e=o(e,"{seektime}",T.seekTime),e=o(e,"{id}",Math.floor(1e4*Math.random()));var n;if(null!==T.selectors.controls.container&&(n=T.selectors.controls.container,"string"==typeof selector&&(n=t.querySelector(n))),n instanceof HTMLElement||(n=Se.container),n.insertAdjacentHTML("beforeend",e),T.tooltips.controls)for(var a=B([T.selectors.controls.wrapper," ",T.selectors.labels," .",T.classes.hidden].join("")),r=a.length-1;r>=0;r--){var s=a[r];m(s,T.classes.hidden,!1),m(s,T.classes.tooltip,!0)}}function G(){try{return Se.controls=L(T.selectors.controls.wrapper),Se.buttons={},Se.buttons.seek=L(T.selectors.buttons.seek),Se.buttons.play=B(T.selectors.buttons.play),Se.buttons.pause=L(T.selectors.buttons.pause),Se.buttons.restart=L(T.selectors.buttons.restart),Se.buttons.rewind=L(T.selectors.buttons.rewind),Se.buttons.forward=L(T.selectors.buttons.forward),Se.buttons.fullscreen=L(T.selectors.buttons.fullscreen),Se.buttons.mute=L(T.selectors.buttons.mute),Se.buttons.captions=L(T.selectors.buttons.captions),Se.progress={},Se.progress.container=L(T.selectors.progress.container),Se.progress.buffer={},Se.progress.buffer.bar=L(T.selectors.progress.buffer),Se.progress.buffer.text=Se.progress.buffer.bar&&Se.progress.buffer.bar.getElementsByTagName("span")[0],Se.progress.played=L(T.selectors.progress.played),Se.progress.tooltip=Se.progress.container&&Se.progress.container.querySelector("."+T.classes.tooltip),Se.volume={},Se.volume.input=L(T.selectors.volume.input),Se.volume.display=L(T.selectors.volume.display),Se.duration=L(T.selectors.duration),Se.currentTime=L(T.selectors.currentTime),Se.seekTime=B(T.selectors.seekTime),!0}catch(e){return E("It looks like there is a problem with your controls html",!0),q(!0),!1}}function Y(){m(Se.container,T.selectors.container.replace(".",""),Se.supported.full)}function q(e){e?Se.media.setAttribute("controls",""):Se.media.removeAttribute("controls")}function z(e){var t=T.i18n.play;if("undefined"!=typeof T.title&&T.title.length&&(t+=", "+T.title),Se.supported.full&&Se.buttons.play)for(var n=Se.buttons.play.length-1;n>=0;n--)Se.buttons.play[n].setAttribute("aria-label",t);e instanceof HTMLElement&&e.setAttribute("title",T.i18n.frameTitle.replace("{title}",T.title))}function Q(){if(!Se.media)return E("No audio or video element found",!0),!1;if(Se.supported.full&&(m(Se.container,T.classes.type.replace("{0}",Se.type),!0),s(T.types.embed,Se.type)&&m(Se.container,T.classes.type.replace("{0}","video"),!0),m(Se.container,T.classes.stopped,T.autoplay),m(Se.container,T.classes.isIos,Se.browser.ios),m(Se.container,T.classes.isTouch,Se.browser.touch),"video"===Se.type)){var e=t.createElement("div");e.setAttribute("class",T.classes.videoWrapper),i(Se.media,e),Se.videoContainer=e}s(T.types.embed,Se.type)&&(j(),Se.embedId=null)}function j(){for(var n=t.createElement("div"),a=Se.embedId,s=Se.type+"-"+Math.floor(1e4*Math.random()),o=B('[id^="'+Se.type+'-"]'),i=o.length-1;i>=0;i--)u(o[i]);if(m(Se.media,T.classes.videoWrapper,!0),m(Se.media,T.classes.embedWrapper,!0),"youtube"===Se.type)Se.media.appendChild(n),n.setAttribute("id",s),"object"==typeof YT?U(a,n):(r(T.urls.youtube.api),e.onYouTubeReadyCallbacks=e.onYouTubeReadyCallbacks||[],e.onYouTubeReadyCallbacks.push(function(){U(a,n)}),e.onYouTubeIframeAPIReady=function(){e.onYouTubeReadyCallbacks.forEach(function(e){e()})});else if("vimeo"===Se.type){var l=t.createElement("iframe");l.loaded=!1,y(l,"load",function(){l.loaded=!0}),p(l,{src:"https://player.vimeo.com/video/"+a+"?player_id="+s+"&api=1&badge=0&byline=0&portrait=0&title=0",id:s,webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",frameborder:0}),Se.supported.full?(n.appendChild(l),Se.media.appendChild(n)):Se.media.appendChild(l),"$f"in e||r(T.urls.vimeo.api);var c=e.setInterval(function(){"$f"in e&&l.loaded&&(e.clearInterval(c),X.call(l))},50)}else if("soundcloud"===Se.type){var d=t.createElement("iframe");d.loaded=!1,y(d,"load",function(){d.loaded=!0}),p(d,{src:"https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/"+a,id:s}),n.appendChild(d),Se.media.appendChild(n),e.SC||r(T.urls.soundcloud.api);var A=e.setInterval(function(){e.SC&&d.loaded&&(e.clearInterval(A),Z.call(d))},50)}}function D(){Se.container.plyr.embed=Se.embed,Fe(),z(L("iframe"))}function U(t,n){"timer"in Se||(Se.timer={}),Se.embed=new YT.Player(n.id,{videoId:t,playerVars:{autoplay:T.autoplay?1:0,controls:Se.supported.full?0:1,rel:0,showinfo:0,iv_load_policy:3,cc_load_policy:T.captions.defaultActive?1:0,cc_lang_pref:"en",wmode:"transparent",modestbranding:1,disablekb:1,origin:"*"},events:{onError:function(e){h(Se.container,"error",!0,{code:e.data,embed:e.target})},onReady:function(t){var n=t.target;Se.media.play=function(){n.playVideo(),Se.media.paused=!1},Se.media.pause=function(){n.pauseVideo(),Se.media.paused=!0},Se.media.stop=function(){n.stopVideo(),Se.media.paused=!0},Se.media.duration=n.getDuration(),Se.media.paused=!0,Se.media.currentTime=n.getCurrentTime(),Se.media.muted=n.isMuted(),T.title=n.getVideoData().title,h(Se.media,"timeupdate"),e.clearInterval(Se.timer.buffering),Se.timer.buffering=e.setInterval(function(){Se.media.buffered=n.getVideoLoadedFraction(),h(Se.media,"progress"),1===Se.media.buffered&&(e.clearInterval(Se.timer.buffering),h(Se.media,"canplaythrough"))},200),D(),fe()},onStateChange:function(t){var n=t.target;switch(e.clearInterval(Se.timer.playing),t.data){case 0:Se.media.paused=!0,h(Se.media,"ended");break;case 1:Se.media.paused=!1,Se.media.seeking=!1,h(Se.media,"play"),h(Se.media,"playing"),Se.timer.playing=e.setInterval(function(){Se.media.currentTime=n.getCurrentTime(),h(Se.media,"timeupdate")},100);break;case 2:Se.media.paused=!0,h(Se.media,"pause")}}}})}function X(){Se.embed=$f(this),Se.embed.addEvent("ready",function(){Se.media.play=function(){Se.embed.api("play"),Se.media.paused=!1},Se.media.pause=function(){Se.embed.api("pause"),Se.media.paused=!0},Se.media.stop=function(){Se.embed.api("stop"),Se.media.paused=!0},Se.media.paused=!0,Se.media.currentTime=0,D(),Se.embed.api("getCurrentTime",function(e){Se.media.currentTime=e,h(Se.media,"timeupdate")}),Se.embed.api("getDuration",function(e){Se.media.duration=e,fe()}),Se.embed.addEvent("play",function(){Se.media.paused=!1,h(Se.media,"play"),h(Se.media,"playing")}),Se.embed.addEvent("pause",function(){Se.media.paused=!0,h(Se.media,"pause")}),Se.embed.addEvent("playProgress",function(e){Se.media.seeking=!1,Se.media.currentTime=e.seconds,h(Se.media,"timeupdate")}),Se.embed.addEvent("loadProgress",function(e){Se.media.buffered=e.percent,h(Se.media,"progress"),1===parseInt(e.percent)&&h(Se.media,"canplaythrough")}),Se.embed.addEvent("finish",function(){Se.media.paused=!0,h(Se.media,"ended")}),T.autoplay&&Se.embed.api("play")})}function Z(){Se.embed=e.SC.Widget(this),Se.embed.bind(e.SC.Widget.Events.READY,function(){Se.media.play=function(){Se.embed.play(),Se.media.paused=!1},Se.media.pause=function(){Se.embed.pause(),Se.media.paused=!0},Se.media.stop=function(){Se.embed.seekTo(0),Se.embed.pause(),Se.media.paused=!0},Se.media.paused=!0,Se.media.currentTime=0,D(),Se.embed.getPosition(function(e){Se.media.currentTime=e,h(Se.media,"timeupdate")}),Se.embed.getDuration(function(e){Se.media.duration=e/1e3,fe()}),Se.embed.bind(e.SC.Widget.Events.PLAY,function(){Se.media.paused=!1,h(Se.media,"play"),h(Se.media,"playing")}),Se.embed.bind(e.SC.Widget.Events.PAUSE,function(){Se.media.paused=!0,h(Se.media,"pause")}),Se.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS,function(e){Se.media.seeking=!1,Se.media.currentTime=e.currentPosition/1e3,h(Se.media,"timeupdate")}),Se.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS,function(e){Se.media.buffered=e.loadProgress,h(Se.media,"progress"),1===parseInt(e.loadProgress)&&h(Se.media,"canplaythrough")}),Se.embed.bind(e.SC.Widget.Events.FINISH,function(){Se.media.paused=!0,h(Se.media,"ended")}),T.autoplay&&Se.embed.play()})}function $(){"play"in Se.media&&Se.media.play()}function J(){"pause"in Se.media&&Se.media.pause()}function K(e){e===!0?$():e===!1?J():Se.media[Se.media.paused?"play":"pause"]()}function ee(e){"number"!=typeof e&&(e=T.seekTime),ne(Se.media.currentTime-e)}function te(e){"number"!=typeof e&&(e=T.seekTime),ne(Se.media.currentTime+e)}function ne(e){var t=0,n=Se.media.paused,a=ae();"number"==typeof e?t=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(t=e.target.value/e.target.max*a),0>t?t=0:t>a&&(t=a),be(t);try{Se.media.currentTime=t.toFixed(1)}catch(r){}if(s(T.types.embed,Se.type)){switch(Se.type){case"youtube":Se.embed.seekTo(t);break;case"vimeo":Se.embed.api("seekTo",t.toFixed(0));break;case"soundcloud":Se.embed.seekTo(1e3*t)}n&&J(),h(Se.media,"timeupdate"),Se.media.seeking=!0}E("Seeking to "+Se.media.currentTime+" seconds"),M(t)}function ae(){var e=parseInt(T.duration),t=0;return null===Se.media.duration||isNaN(Se.media.duration)||(t=Se.media.duration),isNaN(e)?t:e}function re(){m(Se.container,T.classes.playing,!Se.media.paused),m(Se.container,T.classes.stopped,Se.media.paused),ge(Se.media.paused)}function se(e){var n=C.supportsFullScreen;e&&e.type===C.fullScreenEventName?Se.isFullscreen=C.isFullScreen(Se.container):n?(C.isFullScreen(Se.container)?C.cancelFullScreen():C.requestFullScreen(Se.container),Se.isFullscreen=C.isFullScreen(Se.container)):(Se.isFullscreen=!Se.isFullscreen,Se.isFullscreen?(y(t,"keyup",oe),t.body.style.overflow="hidden"):(b(t,"keyup",oe),t.body.style.overflow="")),m(Se.container,T.classes.fullscreen.active,Se.isFullscreen),Se.isFullscreen?Se.container.setAttribute("tabindex","-1"):Se.container.removeAttribute("tabindex"),H(Se.isFullscreen),k(Se.buttons.fullscreen,Se.isFullscreen),h(Se.container,Se.isFullscreen?"enterfullscreen":"exitfullscreen")}function oe(e){27===(e.which||e.charCode||e.keyCode)&&Se.isFullscreen&&se()}function ie(e){if("boolean"!=typeof e&&(e=!Se.media.muted),k(Se.buttons.mute,e),Se.media.muted=e,0===Se.media.volume&&le(T.volume),s(T.types.embed,Se.type)){switch(Se.type){case"youtube":Se.embed[Se.media.muted?"mute":"unMute"]();break;case"vimeo":Se.embed.api("setVolume",Se.media.muted?0:parseFloat(T.volume/10));break;case"soundcloud":Se.embed.setVolume(Se.media.muted?0:parseFloat(T.volume/10))}h(Se.media,"volumechange")}}function le(t){if("undefined"==typeof t&&(t=T.volume,T.storage.enabled&&_().supported&&(t=e.localStorage.getItem(T.storage.key),e.localStorage.removeItem("plyr-volume"))),(null===t||isNaN(t))&&(t=T.volume),t>10&&(t=10),0>t&&(t=0),Se.media.volume=parseFloat(t/10),Se.volume.display&&(Se.volume.display.value=t),s(T.types.embed,Se.type)){switch(Se.type){case"youtube":Se.embed.setVolume(100*Se.media.volume);break;case"vimeo":Se.embed.api("setVolume",Se.media.volume);break;case"soundcloud":Se.embed.setVolume(Se.media.volume)}h(Se.media,"volumechange")}Se.media.muted&&t>0&&ie()}function ue(){var t=Se.media.muted?0:10*Se.media.volume;Se.supported.full&&(Se.volume.input&&(Se.volume.input.value=t),Se.volume.display&&(Se.volume.display.value=t)),T.storage.enabled&&_().supported&&!isNaN(t)&&e.localStorage.setItem(T.storage.key,t),m(Se.container,T.classes.muted,0===t),Se.supported.full&&Se.buttons.mute&&k(Se.buttons.mute,0===t)}function ce(e){Se.supported.full&&Se.buttons.captions&&("boolean"!=typeof e&&(e=-1===Se.container.className.indexOf(T.classes.captions.active)),Se.captionsEnabled=e,k(Se.buttons.captions,Se.captionsEnabled),m(Se.container,T.classes.captions.active,Se.captionsEnabled),h(Se.container,Se.captionsEnabled?"captionsenabled":"captionsdisabled"))}function pe(e){var t="waiting"===e.type;clearTimeout(Se.timers.loading),Se.timers.loading=setTimeout(function(){m(Se.container,T.classes.loading,t)},t?250:0)}function de(e){var t=Se.progress.played,n=0,a=ae();if(e)switch(e.type){case"timeupdate":case"seeking":n=w(Se.media.currentTime,a),"timeupdate"==e.type&&Se.buttons.seek&&(Se.buttons.seek.value=n);break;case"playing":case"progress":t=Se.progress.buffer,n=function(){var e=Se.media.buffered;return e&&e.length?w(e.end(0),a):"number"==typeof e?100*e:0}()}Ae(t,n)}function Ae(e,t){"undefined"==typeof t&&(t=0),e instanceof HTMLElement?e.value=t:(e.bar&&(e.bar.value=t),e.text&&(e.text.innerHTML=t))}function me(e,t){if(t){isNaN(e)&&(e=0),Se.secs=parseInt(e%60),Se.mins=parseInt(e/60%60),Se.hours=parseInt(e/60/60%60);var n=parseInt(ae()/60/60%60)>0;Se.secs=("0"+Se.secs).slice(-2),Se.mins=("0"+Se.mins).slice(-2),t.innerHTML=(n?Se.hours+":":"")+Se.mins+":"+Se.secs}}function fe(){if(Se.supported.full){var e=ae()||0;!Se.duration&&T.displayDuration&&Se.media.paused&&me(e,Se.currentTime),Se.duration&&me(e,Se.duration),ve()}}function ye(e){me(Se.media.currentTime,Se.currentTime),e&&"timeupdate"==e.type&&Se.media.seeking||de(e)}function be(e){"number"!=typeof e&&(e=0);var t=ae(),n=w(e,t);Se.progress&&Se.progress.played&&(Se.progress.played.value=n),Se.buttons&&Se.buttons.seek&&(Se.buttons.seek.value=n)}function ve(e){var t=ae();if(T.tooltips.seek&&Se.progress.container&&0!==t){var n=Se.progress.container.getBoundingClientRect(),a=0,r=T.classes.tooltip+"--visible";if(e)a=100/n.width*(e.pageX-n.left);else{if(!f(Se.progress.tooltip,r))return;a=Se.progress.tooltip.style.left.replace("%","")}0>a?a=0:a>100&&(a=100),me(t/100*a,Se.progress.tooltip),Se.progress.tooltip.style.left=a+"%",e&&s(["mouseenter","mouseleave"],e.type)&&m(Se.progress.tooltip,r,"mouseenter"===e.type)}}function ge(t){if(T.hideControls&&"audio"!==Se.type){var n=0,a=!1,r=t;"boolean"!=typeof t&&(t&&t.type?(a="enterfullscreen"===t.type,r=s(["mousemove","mouseenter","focus"],t.type),"mousemove"===t.type&&(n=2e3),"focus"===t.type&&(n=3e3)):r=!1),e.clearTimeout(Se.timers.hover),(r||Se.media.paused)&&(m(Se.container,T.classes.hideControls,!1),Se.media.paused)||r&&Se.media.paused||(Se.timers.hover=e.setTimeout(function(){Se.controls.active&&!a||m(Se.container,T.classes.hideControls,!0)},n))}}function he(e){if("undefined"!=typeof e)return void ke(e);var t;switch(Se.type){case"youtube":t=Se.embed.getVideoUrl();break;case"vimeo":Se.embed.api("getVideoUrl",function(e){t=e});break;case"soundcloud":Se.embed.getCurrentSound(function(e){t=e.permalink_url});break;default:t=Se.media.currentSrc}return t||""}function ke(n){if(!("undefined"!=typeof n&&"sources"in n&&n.sources.length))return void E("Invalid source format",!0);if(J(),be(),Ae(Se.progress.buffer),_e(),"youtube"===Se.type?(Se.embed.destroy(),e.clearInterval(Se.timer.buffering),e.clearInterval(Se.timer.playing)):"video"===Se.type&&Se.videoContainer&&u(Se.videoContainer),Se.embed=null,u(Se.media),"type"in n&&(Se.type=n.type,"video"===Se.type)){var a=n.sources[0];"type"in a&&s(T.types.embed,a.type)&&(Se.type=a.type)}switch(Se.supported=F.supported(Se.type),Se.type){case"video":Se.media=t.createElement("video");break;case"audio":Se.media=t.createElement("audio");break;case"youtube":case"vimeo":case"soundcloud":Se.media=t.createElement("div"),Se.embedId=n.sources[0].src}c(Se.container,Se.media),"undefined"!=typeof n.autoplay&&(T.autoplay=n.autoplay),s(T.types.html5,Se.type)&&(T.crossorigin&&Se.media.setAttribute("crossorigin",""),T.autoplay&&Se.media.setAttribute("autoplay",""),"poster"in n&&Se.media.setAttribute("poster",n.poster),T.loop&&Se.media.setAttribute("loop","")),Se.container.className=Se.originalClassName,m(Se.container,T.classes.fullscreen.active,Se.isFullscreen),m(Se.container,T.classes.captions.active,Se.captionsEnabled),Y(),s(T.types.html5,Se.type)&&O("source",n.sources),Q(),s(T.types.html5,Se.type)&&("tracks"in n&&O("track",n.tracks),Se.media.load(),Fe(),fe()),T.title=n.title,z(),Se.container.plyr.media=Se.media}function we(e){"video"===Se.type&&Se.media.setAttribute("poster",e)}function Te(){function n(){var e=Se.media.paused;e?$():J();var t=Se.buttons[e?"play":"pause"],n=Se.buttons[e?"pause":"play"];if(n=n&&n.length>1?n[n.length-1]:n[0]){var a=f(t,T.classes.tabFocus);setTimeout(function(){n.focus(),a&&(m(t,T.classes.tabFocus,!1),m(n,T.classes.tabFocus,!0))},100)}}function a(){var e=t.activeElement;e&&e!=t.body?t.querySelector&&(e=t.querySelector(":focus")):e=null;for(var n in Se.buttons){var a=Se.buttons[n];if(a instanceof NodeList)for(var r=0;r<a.length;r++)m(a[r],T.classes.tabFocus,a[r]===e);else m(a,T.classes.tabFocus,a===e)}}var r="IE"==Se.browser.name?"change":"input";y(e,"keyup",function(e){var t=e.keyCode?e.keyCode:e.which;9==t&&a()}),y(t.body,"click",function(){m(L("."+T.classes.tabFocus),T.classes.tabFocus,!1)});for(var s in Se.buttons){var o=Se.buttons[s];y(o,"blur",function(){m(o,"tab-focus",!1)})}v(Se.buttons.play,"click",T.listeners.play,n),v(Se.buttons.pause,"click",T.listeners.pause,n),v(Se.buttons.restart,"click",T.listeners.restart,ne),v(Se.buttons.rewind,"click",T.listeners.rewind,ee),v(Se.buttons.forward,"click",T.listeners.forward,te),v(Se.buttons.seek,r,T.listeners.seek,ne),v(Se.volume.input,r,T.listeners.volume,function(){le(Se.volume.input.value)}),v(Se.buttons.mute,"click",T.listeners.mute,ie),v(Se.buttons.fullscreen,"click",T.listeners.fullscreen,se),C.supportsFullScreen&&y(t,C.fullScreenEventName,se),y(Se.buttons.captions,"click",ce),y(Se.progress.container,"mouseenter mouseleave mousemove",ve),T.hideControls&&(y(Se.container,"mouseenter mouseleave mousemove enterfullscreen",ge),y(Se.controls,"mouseenter mouseleave",function(e){Se.controls.active="mouseenter"===e.type}),y(Se.controls,"focus blur",ge,!0))}function xe(){if(y(Se.media,"timeupdate seeking",ye),y(Se.media,"timeupdate",M),y(Se.media,"durationchange loadedmetadata",fe),y(Se.media,"ended",function(){"video"===Se.type&&P(),re(),T.showPosterOnEnd&&(ne(0),Se.media.load())}),y(Se.media,"progress playing",de),y(Se.media,"volumechange",ue),y(Se.media,"play pause",re),y(Se.media,"waiting canplay seeked",pe),T.clickToPlay&&"audio"!==Se.type){var e=L("."+T.classes.videoWrapper);if(!e)return;e.style.cursor="pointer",y(e,"click",function(){Se.media.paused?$():Se.media.ended?(ne(),$()):J()})}y(Se.media,T.events.join(" "),function(e){h(Se.container,e.type,!0)})}function _e(){if(s(T.types.html5,Se.type)){for(var e=Se.media.querySelectorAll("source"),t=0;t<e.length;t++)u(e[t]);Se.media.setAttribute("src","data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAGm1kYXQAAAGzABAHAAABthBgUYI9t+8AAAMNbW9vdgAAAGxtdmhkAAAAAMXMvvrFzL76AAAD6AAAACoAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhpb2RzAAAAABCAgIAHAE/////+/wAAAiF0cmFrAAAAXHRraGQAAAAPxcy++sXMvvoAAAABAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAgAAAAIAAAAAAG9bWRpYQAAACBtZGhkAAAAAMXMvvrFzL76AAAAGAAAAAEVxwAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABaG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAShzdGJsAAAAxHN0c2QAAAAAAAAAAQAAALRtcDR2AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAgACABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAXmVzZHMAAAAAA4CAgE0AAQAEgICAPyARAAAAAAMNQAAAAAAFgICALQAAAbABAAABtYkTAAABAAAAASAAxI2IAMUARAEUQwAAAbJMYXZjNTMuMzUuMAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAASAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1My4yMS4x"),
Se.media.load(),E("Cancelled network requests for old media")}}function Ee(){if(!Se.init)return null;if(Se.container.setAttribute("class",A(T.selectors.container)),Se.init=!1,u(L(T.selectors.controls.wrapper)),"youtube"===Se.type)return void Se.embed.destroy();"video"===Se.type&&(u(L(T.selectors.captions)),l(Se.videoContainer)),q(!0);var e=Se.media.cloneNode(!0);Se.media.parentNode.replaceChild(e,Se.media)}function Ce(){if(Se.init)return null;if(C=x(),Se.browser=n(),Se.media=Se.container.querySelectorAll("audio, video")[0],Se.media||(Se.media=Se.container.querySelectorAll("div")[0]),Se.media){Se.originalClassName=Se.container.className;var e=Se.media.tagName.toLowerCase();if("div"===e?(Se.type=Se.media.getAttribute("data-type"),Se.embedId=Se.media.getAttribute("data-video-id"),Se.media.removeAttribute("data-type"),Se.media.removeAttribute("data-video-id")):(Se.type=e,T.crossorigin=null!==Se.media.getAttribute("crossorigin"),T.autoplay=T.autoplay||null!==Se.media.getAttribute("autoplay"),T.loop=T.loop||null!==Se.media.getAttribute("loop")),Se.supported=F.supported(Se.type),Y(),!Se.supported.basic)return!1;if(E(Se.browser.name+" "+Se.browser.version),Q(),s(T.types.html5,Se.type)){if(!Se.supported.full)return void(Se.init=!0);Fe(),z(),T.autoplay&&$()}Se.init=!0}}function Fe(){if(!Se.supported.full)return E("No full support for this media type ("+Se.type+")",!0),u(L(T.selectors.controls.wrapper)),u(L(T.selectors.buttons.play)),void q(!0);var e=!B(T.selectors.controls.wrapper).length;e&&W(),G()&&(e&&Te(),xe(),q(),I(),N(),le(),ue(),ye(),re(),fe(),h(Se.container,"ready"))}var Se=this;return Se.container=g,Se.timers={},E(T),Ce(),Se.init?{media:Se.media,play:$,pause:J,restart:ne,rewind:ee,forward:te,seek:ne,source:he,poster:we,setVolume:le,togglePlay:K,toggleMute:ie,toggleCaptions:ce,toggleFullscreen:se,isFullscreen:function(){return Se.isFullscreen||!1},support:function(e){return a(Se,e)},destroy:Ee,restore:Ce}:{}}var C,F={},S={enabled:!0,debug:!1,autoplay:!1,loop:!1,seekTime:10,volume:5,duration:null,displayDuration:!0,iconPrefix:"icon",iconUrl:"",clickToPlay:!0,hideControls:!0,showPosterOnEnd:!1,tooltips:{controls:!1,seek:!0},selectors:{container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{seek:'[data-plyr="seek"]',play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',forward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',fullscreen:'[data-plyr="fullscreen"]'},volume:{input:'[data-plyr="volume"]',display:".plyr__volume--display"},progress:{container:".plyr__progress",buffer:".plyr__progress--buffer",played:".plyr__progress--played"},captions:".plyr__captions",currentTime:".plyr__time--current",duration:".plyr__time--duration"},classes:{videoWrapper:"plyr__video-wrapper",embedWrapper:"plyr__video-embed",type:"plyr--{0}",stopped:"plyr--stopped",playing:"plyr--playing",muted:"plyr--muted",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",active:"plyr--fullscreen-active"},tabFocus:"tab-focus"},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,allowAudio:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","fullscreen"],i18n:{restart:"Restart",rewind:"Rewind {seektime} secs",play:"Play",pause:"Pause",forward:"Forward {seektime} secs",played:"played",buffered:"buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",toggleMute:"Toggle Mute",toggleCaptions:"Toggle Captions",toggleFullscreen:"Toggle Fullscreen",frameTitle:"Player for {title}"},types:{embed:["youtube","vimeo","soundcloud"],html5:["video","audio"]},urls:{vimeo:{api:"https://cdn.plyr.io/froogaloop/1.0.1/plyr.froogaloop.js"},youtube:{api:"https://www.youtube.com/iframe_api"},soundcloud:{api:"https://w.soundcloud.com/player/api.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,forward:null,mute:null,volume:null,captions:null,fullscreen:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","emptied"]};return F.supported=function(e){var a,r,s=n(),o="IE"===s.name&&s.version<=9,i=/iPhone|iPod/i.test(navigator.userAgent),l=!!t.createElement("audio").canPlayType,u=!!t.createElement("video").canPlayType;switch(e){case"video":a=u,r=a&&!o&&!i;break;case"audio":a=l,r=a&&!o;break;case"vimeo":case"youtube":case"soundcloud":a=!0,r=!o&&!i;break;default:a=l&&u,r=a&&!o}return{basic:a,full:r}},F.setup=function(e,n){var a=[];if("string"==typeof e?e=t.querySelectorAll(e):e instanceof HTMLElement?e=[e]:e instanceof NodeList||"string"==typeof e||("undefined"==typeof n&&"object"==typeof e&&(n=e),e=t.querySelectorAll(S.selectors.container)),!F.supported().basic||!e.length)return!1;for(var r=0;r<e.length;r++){var s=e[r];if("undefined"==typeof s.plyr){var o=T(S,n,JSON.parse(s.getAttribute("data-plyr")));if(!o.enabled)return;var i=new E(s,o);s.plyr=Object.keys(i).length?i:!1,h(s,"setup",{plyr:s.plyr})}a.push(s.plyr)}return a},F}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"==typeof window.CustomEvent?!1:(e.prototype=window.Event.prototype,void(window.CustomEvent=e))}();
//rebuild by neat 