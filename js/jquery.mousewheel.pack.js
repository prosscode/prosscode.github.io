// build time:Fri Aug 31 2018 20:14:40 GMT+0800 (中国标准时间)
(function(e){function t(t){var n=t||window.event,i=[].slice.call(arguments,1),l=0,s=0,o=0,t=e.event.fix(n);t.type="mousewheel";n.wheelDelta&&(l=n.wheelDelta/120);n.detail&&(l=-n.detail/3);o=l;n.axis!==void 0&&n.axis===n.HORIZONTAL_AXIS&&(o=0,s=-1*l);n.wheelDeltaY!==void 0&&(o=n.wheelDeltaY/120);n.wheelDeltaX!==void 0&&(s=-1*n.wheelDeltaX/120);i.unshift(t,l,s,o);return(e.event.dispatch||e.event.handle).apply(this,i)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var i=n.length;i;)e.event.fixHooks[n[--i]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,false);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,false);else this.onmousewheel=null}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})(jQuery);
//rebuild by neat 