// build time:Sat May 05 2018 17:42:05 GMT+0800 (中国标准时间)
$(function(){var e=false;if(!turnoffBackgroundImage){playBackground()}else{$("body").css({backgroundColor:backgroundColor?"#"+backgroundColor:"#446CB3"});$("#btn-view").hide()}$("#btn-view").on("click",showHideToggle);hljs.configure({useBR:true});hljs.initHighlightingOnLoad();$(".highlight").each(function(e,i){hljs.highlightBlock(i)});$("#show-menu").on("click",function(){if(!e)return;if($("#menu-list").is(":visible"))$("#menu-list").hide();else $("#menu-list").show()});var i=false;var o=0;$(window).scroll(function(e){i=true});$(document).bind("touchmove",function(e){i=true});setInterval(function(){e=$(window).width()<768;if(i){n();i=false}},200);function n(){var i=$(this).scrollTop();if(Math.abs(o-i)<=5){return}if(i>o&&i>$("#menu-outer").outerHeight()){if($("#menu-list").is(":visible")&&e){$("#menu-list").hide()}$("#menu-outer").removeClass("slide-down").addClass("slide-up")}else if(i+$(window).height()<$(document).height()){$("#menu-outer").removeClass("slide-up").addClass("slide-down")}o=i}TOCToggle();if($(".random-toc ol").children().length<=3){$(".random-toc-area").hide()}});var hideAll=false;function showHideToggle(){if(hideAll){$(".hide-area").show();$("#btn-view").html("Hide");$(".jiathis_style").css({display:"block"})}else{$(".jiathis_style").css({display:"none"});$(".hide-area").hide();$("#btn-view").html("Show");$("#menu-outer").removeClass("slide-up").addClass("slide-down")}hideAll=!hideAll}function openUserCard(){showHideToggle();$.fancybox({type:"html",autoSize:true,maxWidth:400,autoCenter:true,content:$("#user-card"),closeBtn:false,afterClose:showHideToggle})}var isTOCShow=true;function TOCToggle(){if(isTOCShow){$(".random-toc").show();$(".btn-hide-toc-show").hide();$(".btn-hide-toc-hide").show()}else{$(".random-toc").hide();$(".btn-hide-toc-show").show();$(".btn-hide-toc-hide").hide()}isTOCShow=!isTOCShow}function playBackground(){var e=[];if(backgroundImages&&backgroundImages.length>0){backgroundImages.forEach(function(i){if(!i)return;e.push({src:i.replace("__width__",window.screen.availWidth).replace("__height__",window.screen.availHeight)})})}if(e.length===0){var i="";var o="";if(unsplashConfig){if(unsplashConfig.gravity){i="&gravity="+unsplashConfig.gravity}if(unsplashConfig.blur){i+="&blur=1"}if(unsplashConfig.greyscale){o="/g"}}for(var n=1;n<=10;n++){e.push({src:["https://unsplash.it",o,"/",window.screen.availWidth,"/",window.screen.availHeight,"?random&t=",n,i].join("")})}}if("object"!==typeof vegasConfig){vegasConfig={shuffle:true}}vegasConfig.slides=e;$("body").vegas(vegasConfig)}
//rebuild by neat 