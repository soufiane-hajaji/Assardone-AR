$("#LinkList3").each(function(){var e="<ul id='nav'><li class='home-icon'><a href='/'><i class='fa fa-home'></i></a></li><li><li><ul id='sub-menu'>";$("#LinkList3 li").each(function(){var t=$(this).text(),n=t.substr(0,1),r=t.substr(1);"_"==n?(n=$(this).find("a").attr("href"),e+='<li><a href="'+n+'">'+r+"</a></li>"):(n=$(this).find("a").attr("href"),e+='</ul></li><li><a href="'+n+'">'+t+"</a><ul id='sub-menu'>")});e+="</ul></li></ul>";$(this).html(e);$("#LinkList3 ul").each(function(){var e=$(this);if(e.html().replace(/\s|&nbsp;/g,"").length==0)e.remove()});$("#LinkList3 li").each(function(){var e=$(this);if(e.html().replace(/\s|&nbsp;/g,"").length==0)e.remove()})});
$('ul#sub-menu').parent('li').children('a').addClass('has-sub');
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"→",u=n.label||"- القائمة -",a=0,f=" noselected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();$(document).ready(function(){selectnav('nav1');selectnav('nav');});
function setRandomClass(){var e=$(".podcast").find(".child"),t=e.length,a=Math.floor(Math.random()*t);e.removeClass("podcasted"),e.eq(a).addClass("podcasted")}function foo(){var e=$(".podcast"),t=e.find(".podcasted"),a=t.find(".mag-thumb a").attr("data-thumburl"),s=t.find(".mag-title a").attr("data-titles"),n=t.find(".mag-thumb a").attr("data-img");e.find(".current .Thumb,.current .Title").attr("href",a),e.find(".current .Thumb img").attr("src",n),e.find(".current .Title").text(s)}function scrollToTop(){verticalOffset="undefined"==typeof verticalOffset?0:verticalOffset,element=$("body"),offset=element.offset(),offsetTop=offset.top,$("html, body").animate({scrollTop:offsetTop},1e3,"linear")}$("div#main-content .widget").each(function(){var w,y,k,e=$(this),T=e.find(".widget-content"),t=T.text().split("/"),a=e.find("h2.title").text(),s=t[0],n=t[1],i=t[2];t[3];e.find("h2.title").html('<div class="recent-posts-title"><h2><span>'+a+'</span><a href="/search/label/'+n+'" id="more">'+a+"</a></h2></div>"),$(T).addClass("ajaxIt"),s.match("simple")&&(e.addClass("simple"),k=y=w=!0),s.match("carousel")&&(e.addClass("carousel"),k=y=!(w=!1)),s.match("carousel2")&&(e.removeClass("carousel"),e.addClass("carousel2")),s.match("column")&&(e.addClass("column"),k=y=w=!1),s.match("podcast")&&(e.addClass("podcast"),k=y=w=!1);var C=[,"يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];$.ajax({url:"/feeds/posts/default/-/"+n+"?alt=json-in-script&max-results="+i,type:"get",dataType:"jsonp",success:function(e){for(var t="",a='<ul class="mag-post">',s=0;s<e.feed.entry.length;s++){for(var n=0;n<e.feed.entry[s].link.length;n++)if("alternate"==e.feed.entry[s].link[n].rel){t=e.feed.entry[s].link[n].href;break}var i,r,l=e.feed.entry[s].title.$t,d=e.feed.entry[s].category[0].term,o=e.feed.entry[s].author[0].name.$t,c=e.feed.entry[s].published.$t,u=c.substring(0,4),m=c.substring(5,7),f=c.substring(8,10),h=C[parseInt(m,10)]+" "+f+", "+u,p=e.feed.entry[s].content.$t,g=$("<div>").html(p),v=g.find("img:first").attr("src"),b=g.text().substr(0,100);i=-1<p.indexOf("http://www.youtube.com/embed/")||-1<p.indexOf("https://www.youtube.com/embed/")?'<div class="mag-thumb"><a data-img="'+v+'" data-thumburl="'+t+'" href="'+t+'" style="background:url('+e.feed.entry[s].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg")+') no-repeat center center;background-size: cover"/></div>':-1<p.indexOf("<img")?'<div class="mag-thumb"><a data-img="'+v+'" data-thumburl="'+t+'" href="'+t+'" style="background:url('+g.find("img:first").attr("src")+') no-repeat center center;background-size: cover"/></div>':'<div class="mag-thumb"><a data-img="'+v+'" data-thumburl="'+t+'" href="'+t+'" style="background:url(http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg) no-repeat center center;background-size: cover"/></div>',1==k&&(r="<a class='mag-tag' href=/search/label/"+d+">"+d+"</a>"),0==k&&(r=""),a+=1==y&&1==w||1==y?'<div class="block-columen child"><li>'+i+'<div class="mag-contentss gr_content">'+r+'<h3 class="mag-title"><a data-titles="'+l+'" href="'+t+'">'+l+'</a></h3><div class="recent-meta"><span class="recent-date">'+h+'</span><span class="recent-author">'+o+'</span></div><p class="mag-sum">'+b+"....</p></div></li></div>":'<div class="block-columen child"><li>'+i+'<div class="mag-contentss">'+r+"<a class='category' href=/search/label/"+d+">"+d+'</a><h3 class="mag-title"><a data-titles="'+l+'" href="'+t+'">'+l+'</a></h3><div class="recent-meta"><span class="recent-date">'+h+'</span><span class="recent-author">'+o+'</span></div><p class="mag-sum">'+b+"....</p></div></li></div>"}a+="</div></ul>",$(T).html(a),$(".podcast ul").prepend('<div class="Post current"><a class="Thumb" href="#"><img src=""/></a><a class="Title" href="#"></a></div>'),$("#main-content .carousel ul").owlCarousel({rtl:!0,loop:!0,margin:5,mouseDrag:!1,singleItem:!0,stopOnHover:!0,autoHeight:!0,navText:["",""],nav:!0,autoplay:!0,navSpeed:200,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$("#main-content .carousel2 ul").owlCarousel({rtl:!0,loop:!0,margin:5,mouseDrag:!1,singleItem:!0,stopOnHover:!0,autoHeight:!0,navText:["",""],nav:!0,autoplay:!0,navSpeed:400,responsive:{0:{items:1},600:{items:2},1e3:{items:2}}})}})}),$(".navrightop ul li a").each(function(){var e=$(this),t=e.text();e.html("<i class='fa fa-"+t+"'></i>")}),$("").insertBefore(".slider-wrapper2"),$("").wrap("<div class='wedtitle'/>"),setInterval(function(){setRandomClass(),foo()},4e3),document.addEventListener("DOMContentLoaded",function(){function e(e){if((document.layers||document.getElementById&&!document.all)&&(2==e.which||3==e.which))return!1}$("body").hasClass("desactiveted")&&(document.layers?(document.captureEvents(Event.MOUSEDOWN),document.onmousedown=e):(document.onmouseup=e,document.oncontextmenu=function(){if(document.all)return!1}),document.oncontextmenu=new Function("return false"),document.onselectstart=new Function("return false"),window&&(document.onmousedown=function(){return!1},document.onclick=function(){return!0}))}),$(function(){$("a#top-circle").on("click",scrollToTop)}),document.addEventListener("DOMContentLoaded",function(){$("").each(function(){var e,t,a,s,n=$(this),i=(n.find("h2"),n.find(".widget-content")),r=i.text(),l=r.split("/");r.match(/\/twitter/g)&&(e=l[1],t=l[0],i.html(''),twitterFetcher.fetch({id:e,domId:"twidget",maxTweets:t,enableLinks:!0,showPermalinks:!1,showUser:!1,showInteraction:!1,lang:"en"})),r.match(/\/flickr/g)&&(n.addClass("fd-widget"),i.html('<div class="flickr-widget"></div>'),i.find(".flickr-widget").jflickrfeed({limit:l[0],qstrings:{id:l[1]},itemTemplate:'<li><a title="{{title}}" target="_blank" style="background:url({{image_s}}) no-repeat center center;background-size: cover" href="{{link}}"/></li>'})),r.match(/\/dribbble/g)&&(a=l[1],s=l[0],n.addClass("fd-widget"),i.html('<div class="dribbble-widget"></div>'),$.jribbble.users(a).shots({per_page:s}).then(function(e){var t=[];e.forEach(function(e){t.push("<li>"),t.push('<a href="'+e.html_url+'" target="_blank">'),t.push('<img src="'+e.images.normal+'">'),t.push("</li>")}),$(".dribbble-widget").html(t.join(""))}))})});
$(".search-button").click(function() {return $(".search-box-overlay").addClass("search-box-overlay-show"), !1
}), $(".search-box-close").click(function() {return $(".search-box-overlay").removeClass("search-box-overlay-show"), !1
}), $(document).click(function(t) {return $(t.target).closest(".search-box-wrapper").length > 0 ? !0 : void $(".search-box-overlay").removeClass("search-box-overlay-show")}), $(document).ready(function() {});
$(window).one('load',function() {$("body").toggleClass(localStorage.toggled),$("#btn-nightmode").on("click",function(){"Night"!=localStorage.toggled?($("body").toggleClass("Night",!0),localStorage.toggled="Night",$(".section-center").css("display","block")):($("body").toggleClass("Night",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("Night")?$("#btn-nightmode").prop("checked",!0):$("#btn-nightmode").prop("checked",!1)});
(function(a){a.fn.simplyTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');c.addClass("content-tab").each(function(){a(this).hide();e.find(".wrap-tab").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".wrap-tab a").on("click",function(){var f=a(this).parent().index();a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);
$(document).ready(function(){$(".cmm-tabs").simplyTab({active:1,fx:"fade",showSpeed:400,hideSpeed:400}),$(".blogger-tab").append($("#comments")),$(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>"),$(".cmm-tabs-header").prepend("")}),$(document).ready(function(e){e("abbr.timeago").timeago()}),$(document).ready(function(){$("").parent("li").addClass("hasSub"),jQuery}),$(document).ready(function(){$("").wrap("<div class=''"),$("").wrap("<div class=''/>"),$("").each(function(){$(this).hoverTimeout(0,function(){$(this).children("ul").slideDown()},0,function(){$(this).children("ul").hide()})}),$("").each(function(){$(this).find("").attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}),$(".widget-content").each(function(){var e=$(this).text();e.substr(0,10).match("page")&&(e=e.replace("page/",""),$(this).html('<center><div id="fb-root"></div><div class="fb-page" data-href="'+e+'" data-width="300" data-height="230" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"></center>'))}),$(window).scroll(function(){200<$(this).scrollTop()?$("").fadeIn():$("").fadeOut()}),$("").hide().click(function(){return $("html, body").animate({scrollTop:0},1e3),!1});var t=$(".search");t.click(function(e){e.preventDefault(),t.is(".active")&&$(e.target).is(t)?t.removeClass("active"):(t.addClass("active"),t.find("input").focus())}),$("body").click(function(e){t.is(".active")&&!$(e.target).is(".search, .search form, .search input")&&t.removeClass("active")}),$(".social-widget").each(function(){var e=$(this);0===$(this).find(".sw-item").length&&e.remove(),$(this).find(".widget").removeClass("LinkList"),$(".social-widget .sw-item.facebook").find(".sw-desc").text("Likes"),$(".sw-item").each(function(){var e=$(this).find(".delete-count"),t=$(this).find(".sw-counter");$(e).before($(t)),$(e).remove()})});var e=$("").text();$("").text(e);var a=$("").text();$("").text(a);var i,n,c,s=$("").text();$("").text(s),$("").remove(),$("").tabslet({mouseevent:"click",attribute:"href",animation:!0}),0===$("").length&&$("").remove(),$("").replaceText("[]",""),$("").replaceText("[]",""),i=jQuery,n=i("a.newer-link"),c=i("a.older-link"),i.get(n.attr("href"),function(e){n.html("")},"html"),i.get(c.attr("href"),function(e){c.html("")},"html")});
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"))}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder)}else{a(b).removeAttr("src")}b.loaded=false}else{b.loaded=true}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);$(function(){$("img").lazyload({placeholder:"https://4.bp.blogspot.com/-oA8G9t61JXk/VtLrtkAzObI/AAAAAAAAFTY/EjT6jl2MEFM/s1600/bloggersstand.gif",effect:"fadeIn",threshold:"-50"})})
! function(b){var a = function(d,c){this.el = b(d);this.options = b.extend({}
,b.fn.typed.defaults,c);this.isInput = this.el.is("input");this.attr = this.options.attr;this.showCursor = this.isInput ? false:this.options.showCursor;this.elContent = this.attr ? this.el.attr(this.attr):this.el.text();this.contentType = this.options.contentType;this.typeSpeed = this.options.typeSpeed;this.startDelay = this.options.startDelay;this.backSpeed = this.options.backSpeed;this.backDelay = this.options.backDelay;this.strings = this.options.strings;this.strPos = 0;this.arrayPos = 0;this.stopNum = 0;this.loop = this.options.loop;this.loopCount = this.options.loopCount;this.curLoop = 0;this.stop = false;this.cursorChar = this.options.cursorChar;this.shuffle = this.options.shuffle;this.sequence = [];this.build()}
;a.prototype ={constructor:a,init:function(){var c = this;c.timeout = setTimeout(function(){for (var d = 0;d < c.strings.length;++d){c.sequence[d] = d}
if (c.shuffle){c.sequence = c.shuffleArray(c.sequence)}
c.typewrite(c.strings[c.sequence[c.arrayPos]],c.strPos)}
,c.startDelay)},build:function(){if (this.showCursor === true){this.cursor = b('<span class="typed-cursor">' + this.cursorChar + "</span>");this.el.after(this.cursor)}this.init()},typewrite:function(d,e){if (this.stop === true){return}
var f = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;var c = this;c.timeout = setTimeout(function(){var i = 0;var l = d.substr(e);if (l.charAt(0) === "^"){var k = 1;if (/^\^\d+/.test(l)){l = /\d+/.exec(l)[0];k += l.length;i = parseInt(l)}
d = d.substring(0,e) + d.substring(e + k)}
if (c.contentType === "html"){var h = d.substr(e).charAt(0);if (h === "<" || h === "&"){var g = "";var j = "";if (h === "<"){j = ">"}
else{j = ";"}while (d.substr(e).charAt(0) !== j){g += d.substr(e).charAt(0);e++}
e++;g += j}}c.timeout = setTimeout(function(){if (e === d.length){c.options.onStringTyped(c.arrayPos);if (c.arrayPos === c.strings.length - 1){c.options.callback();c.curLoop++;if (c.loop === false || c.curLoop === c.loopCount){return}}c.timeout = setTimeout(function(){c.backspace(d,e)},c.backDelay)}
else{if (e === 0){c.options.preStringTyped(c.arrayPos)}
var m = d.substr(0,e + 1);if (c.attr){c.el.attr(c.attr,m)}
else{if (c.isInput){c.el.val(m)}else{if (c.contentType === "html"){c.el.html(m)}else{c.el.text(m)}}}e++;c.typewrite(d,e)}},i)},f)},backspace:function(d,e){if (this.stop === true){return}
var f = Math.round(Math.random() * (100 - 30)) + this.backSpeed;var c = this;c.timeout = setTimeout(function(){if (c.contentType === "html"){if (d.substr(e).charAt(0) === ">"){var g = "";while (d.substr(e).charAt(0) !== "<"){g -= d.substr(e).charAt(0);e--}
e--;g += "<"}}var h = d.substr(0,e);if (c.attr){c.el.attr(c.attr,h)}else{if (c.isInput){c.el.val(h)}else{if (c.contentType === "html"){c.el.html(h)}else{c.el.text(h)}}}if (e > c.stopNum){e--;c.backspace(d,e)}
else{if (e <= c.stopNum){c.arrayPos++;if (c.arrayPos === c.strings.length){c.arrayPos = 0;if (c.shuffle){c.sequence = c.shuffleArray(c.sequence)}c.init()}
else{c.typewrite(c.strings[c.sequence[c.arrayPos]],e)}}}},f)},shuffleArray:function(f){var c,e,d = f.length;if (d){while (--d){e = Math.floor(Math.random() * (d + 1));c = f[e];f[e] = f[d];f[d] = c}}return f}
,reset:function(){var c = this;clearInterval(c.timeout);var d = this.el.attr("id");this.el.after('<span id="' + d + '"/>');this.el.remove();if (typeof this.cursor !== "undefined"){this.cursor.remove()}c.options.resetCallback()}};b.fn.typed = function(c){return this.each(function(){var f = b(this),e = f.data("typed"),d = typeof c == "object" && c;if (!e){f.data("typed",(e = new a(this,d)))}
if (typeof c == "string"){e[c]()}})};b.fn.typed.defaults ={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,shuffle:false,backDelay:500,loop:false,loopCount:false,showCursor:true,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);
$('.post-thumb img').attr('src', function(i, src) {return src.replace( 's72-c', 's720-c' );});
$('.post-thumb img').attr('src', function(i, src) {return src.replace( '/default.jpg', '/mqdefault.jpg' );});
var idBlog= "5085293420862991854";var idPage= "8253016714795235499"; $.ajax({dataType: "json",url: "https://www.blogger.com/feeds/"+idBlog+"/pages/default/"+idPage+"?alt=json-in-script",method: "GET",dataType: "jsonp",success: function(e) {var o, t = $(e.entry.content.$t),n = t.find("li"),a = t.find("script"),l = [];$allow = !0, $("body").append(a);for (o = 0; o < n.length; o += 1) l.push($(n[o]).text());o = window.location.hostname.toLowerCase(), n = window.location.href.toLowerCase();var s;l.length;for (s = 0; s < l.length; s += 1) {if (-1 != o.indexOf(l[s])) {break}s == l.length - 1 && $('body *').remove() && $('body').addClass('RE').append("<style>body.RE {background: url(//1.bp.blogspot.com/-_zweP9Nctcg/YMyPUQISaPI/AAAAAAAABIw/um1E2Od_pSskxtgynqPMXq3vumcHoTkvQCLcBGAsYHQ/s0/Soufiane-Hajaji.png) no-repeat center #eee;background-position: center center;height: 98vh;}</style>")}}});
$(document)['ready'](function () {$('#lf-copy')['html']('<a href="https://assardone-ar.blogspot.com" rel="dofollow" target="_blank">Assardone Template</a>');setInterval(function () {if (!$('#lf-copy:visible')['length']) {window['location']['href'] = 'https://assardone-ar.blogspot.com';};}, 20000);});
$(function() {$("#postAD-top")["append"]($("#HTML201"));$("#postAD-bottom")["append"]($("#HTML203"));var _0x8468x0 = Math["floor"]($(".post-body *")["length"] / 2);$(".post-body *:eq(" + _0x8468x0 + ")")["after"]($("#HTML202"));  });
$(function(){eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('b 3E=f 0!==6["11-2z"]?6["11-2z"]:"",1m=f 0!==6["2A-h"]?6["2A-h"]:"#3F",19=f 0!==6["2B-h"]?6["2B-h"]:"#3G",F=f 0!==6["2C-h"]?6["2C-h"]:"#3H",1n=f 0!==6.1n?6.1n:"3I, 3J, 3K, 3L-3M",2D=f 0!==6.H?6.H:"26",2E=!1!==6["1o-U"],2F=!1!==6["1o-3N"],3O=!1!==6["1o-3P"],2G=f 0!==6["1o-12"]?6["1o-12"]:"[\'O\', \'1a\', \'13\']",2H=f 0!==6.1M?6.1M:"3Q",2I=f 0!==6.1b?6.1b:"30",2J=f 0!==6.1N?6.1N:"3R://3S.3T.3U/3V/1p",2K=f 0!==6["P-8"]?6["P-8"]:"1q & 3W",2L=f 0!==6["7-8"]?6["7-8"]:"3X 2M 1p 14 3Y 3Z 40 2M 41 1O 2N 14 42 27 43. 44 45 46 1P 2N 47.",2O=f 0!==6["12-8"]?6["12-8"]:"48 1p 14 28",2P=f 0!==6["1r-8"]?6["1r-8"]:"4a",2Q=f 0!==6["O-8"]?6["O-8"]:"4b 4c",2R=f 0!==6["1a-8"]?6["1a-8"]:"4d",2S=f 0!==6["13-8"]?6["13-8"]:"4e",2T=f 0!==6["1r-V-8"]?6["1r-V-8"]:"2U 1Q 1p 2V 1Q 4f 1R 4g 4h 14 4i 4j.",2W=f 0!==6["O-V-8"]?6["O-V-8"]:"2U 1Q 1p 2V 1Q 29 14 27 1O O, e.g. 4k 27 4l, 1O 4m, 2a.",2X=f 0!==6["1a-V-8"]?6["1a-V-8"]:"1q 29 14 1O 4n, 4o 12, 2a.",2Y=f 0!==6["13-V-8"]?6["13-V-8"]:"1q 29 14 13, e.g. 4p, 4q 4r, 2a",2Z=f 0!==6["1c-31-8"]?6["1c-31-8"]:"4s 1q",32=f 0!==6["1c-U-8"]?6["1c-U-8"]:"4t 1q",33=f 0!==6["1c-2b-8"]?6["1c-2b-8"]:"4u 2b";$("<1s u=\'8/1t\'>:4v{--1m:"+1m+";--19:"+19+";--F:"+F+";}#4-3-7{1u:4w;2c:0;W:34;I:0 34;35-1v:4x;Q-h:1d;1S:1w;C-36:"+1n+";z-2d:4y;-v-1e-1f:q;-4z-1e-1f:q;-R-1e-1f:q;-D-1e-1f:q;-o-1e-1f:q;1e-1f:q;}#4-3-7.26{H:26;}#4-3-7.37{H:37;}#4-3-7 1T{h:b(--1m);C-15:1g;C-38:39;I:J 0;1h-X:1i;}#4-3-7 1T i{C-15:1w;C-1s:1i;I:0 E;}#4-3-7 2e{h:b(--1m);C-15:2f;C-38:39;I:0 0 J 0;1h-X:1i;}#4-3-7 p,#4-3-7 2g{h:b(--19);C-15:2f;1h-X:1.4A;I-W:1w;1h-X:1.4B;}#4-3-7 p:3a-3b{I-W:0;8-1j:4C;}#4-3-7 1k{4D-1s:q;I-W:J;1v:49%;16:1x-3c;}#4-3-7 1k:3a-3b{I-W:0;}#4-3-7 a{h:b(--F);8-4E:q;C-15:1U;1S-W:E;j-W:3d 4F b(--F);}#4-3-7 a:1V{j-W-h:4G;}#4-3-7 B{C-36:"+1n+";j:q;Q:b(--F);h:1d;C-15:2f;1S:2h J;I:0 2h;1y:2i;1h-X:1i;j:3d 4H b(--F);}B#4-3-U{Q:1d;h:b(--F);j-h:#4I;}#4-3-7 B:1V{Q:1d;h:b(--F);j-h:b(--F);}#4-3-7 B:Y{Q:#2j;h:#4J;1y:1z;}#4-3-7 B:Y:1V{j-h:#2j;}#4-3-7 1l{1u:2k;16:1x-3c;35-1v:4K%;1y:2i;}#4-3-7 A[u=K]{Q:#4L;h:b(--19);1v:1w;X:1w;1y:2i;1u:2k;4M:q;I:0 2h;z-2d:1;3e-1j:4N;j:q;4O:q;-v-1A:q;-R-1A:q;-D-1A:q;-o-1A:q;1A:q;}#4-3-7 A[u=K]:Y{1y:1z;}#4-3-7 A[u=K]:S::2l{1u:2k;1P:\'\';Q-h:b(--F);1v:1U;X:1U;}#4-3-7 A[u=K]:Y:S::2l{Q-h:#2j;}.3-17{16:q;1u:4P;Q-h:1d;h:b(--19);1S:J 1U;4Q:.9;z-2d:4R;1d-4S:1i;1h-X:1.2;C-15:4T;}.3-17{-v-w-L:E E M N(0,0,0,.2);-R-w-L:E E M N(0,0,0,.2);-D-w-L:E E M N(0,0,0,.2);-o-w-L:E E M N(0,0,0,.2);w-L:E E M N(0,0,0,.2);}#4-3-7{-v-w-L:0 1B 1g N(0,0,0,.25);-R-w-L:0 1B 1g N(0,0,0,.25);-D-w-L:0 1B 1g N(0,0,0,.25);-o-w-L:0 1B 1g N(0,0,0,.25);w-L:0 1B 1g N(0,0,0,.25);}#4-3-7{-v-j-y:J;-R-j-y:J;-D-j-y:J;-o-j-y:J;j-y:J;}#4-3-7 B,.3-17{-v-j-y:M;-R-j-y:M;-D-j-y:M;-o-j-y:M;j-y:M;}#4-3-7 A[u=K],#4-3-7 A[u=K]:S::2l{-v-j-y:1C%;-R-j-y:1C%;-D-j-y:1C%;-o-j-y:1C%;j-y:1C%;}#4-3-7 a,#4-3-7 B{-v-1D:1E .2s 1F-1G;-R-1D:1E .2s 1F-1G;-D-1D:1E .2s 1F-1G;-o-1D:1E .2s 1F-1G;1D:1E .2s 1F-1G;}#4-3-7 A[u=K]{16:-v-1x-Z;16:-D-1x-Z;16:1x-Z;-v-w-2m:T;-D-Z-2m:T;-R-w-2m:T;-v-3f-1P:T;3f-1P:T;-v-w-1j:T;-v-1j-3g:T;-D-Z-1j:T;1j-3g:T;-v-w-4U:3e;-v-w-H:1i;-v-Z-H:2n;-D-Z-H:2n;Z-H:2n;}</1s>").3h("4V"),!1===2F&&(4W={}),m(p){p.2o.1W=m(e,o){b i=p(18),t=p.4X({3i:[{u:2Q,G:"O",1H:2W},{u:2R,G:"1a",1H:2X},{u:2S,G:"13",1H:2Y}],P:"<i>&#4Y;</i>"+2K,7:2L,3j:2Z,3k:32,3l:33,3m:2O,3n:2P,3o:2T,H:2D,1M:2H,1b:2I,1N:2J,3p:2E,3q:m(){},3r:!1},e),n=x("2p"),r=x("1X");2q(n&&r&&"3s"!=o){b a=!0;"4Z"==n&&(a=!1),k(a,t.1b)}50{p("#4-3-7").1Y();b s=\'<1k><A u="K" 1I="4[]" G="1r" S="S" Y="Y"> <1l P="\'+t.3o+\'">\'+t.3n+"</1l></1k>",c=2G;O=1Z.2r(r),p.2t(t.3i,m(e,o){2q(""!==o.u&&""!==o.G&&-1<c.2u(o.G)){b i="";!1!==o.1H&&(i=\' P="\'+o.1H+\'"\'),s+=\'<1k><A u="K" 11="4-2v-\'+o.G+\'" 1I="4[]" G="\'+o.G+\'" 1J-1z="20"> <1l 1R="4-2v-\'+o.G+\'"\'+i+">"+o.u+"</1l></1k>"}});b l="";!0===t.3p&&(l+=\'<B 11="4-3-U" u="B">\'+t.3k+"</B>");b d=\'<21 11="4-3-7" 3t="\'+t.H+\'"><1T>\'+t.P+"</1T><p>"+t.7+\' <a 51="\'+t.1N+\'">\'+t.3l+\'</a><21 11="4-3-12" 1s="16:q;"><2e>\'+t.3m+"</2e><2g>"+s+\'</2g></21><p><B 11="4-3-28" u="B">\'+t.3j+"</B>"+l+"</p></21>";52(m(){p(i).53(d),p("#4-3-7").54().3u("55",m(){"3s"==o&&(p("#4-3-U").56("2w"),p.2t(O,m(e,o){p("A#4-2v-"+o).1K("S",!0)}))}),0<p("#4-3-7").22&&(p("#4-3-7 1l").1V(m(e){b o=p(18).2x("P");p(18).1J("3v",o).57("P"),p(\'<3w 3t="3-17"></3w>\').8(o).3h(i).1t("3x",e.3y-0+"23").1t("2c",e.3z+5+"23").3u("2y")},m(){p(18).2x("P",p(18).1J("3v")),p(".3-17").1Y()}).58(m(e){p(".3-17").1t("3x",e.3y+10+"23").1t("2c",e.3z+10+"23")}),p(59).5a(m(){p(".3-17").1Y()}))},t.1M),p("3A").20("2w","#4-3-28",m(){k(!0,t.1b),p(\'A[1I="4[]"][1J-1z="20"]\').1K("S",!0);b i=[];p.2t(p(\'A[1I="4[]"]\').5b(),m(e,o){i.5c(o.G)}),g("1X",1Z.5d(i),5e),t.3q.5f(18)}),p("3A").20("2w","#4-3-U",m(){p(\'A[1I="4[]"]:5g(:Y)\').2x("1J-1z","5h").1K("S",!1),p("#4-3-12").5i("2y",m(){p("#4-3-U").1K("Y",!0)})})}!0===t.3r&&p(\'A[u="K"].1W\').1K("S",!1)},p.2o.1W.3=m(){b e=x("1X");1L 1Z.2r(e)},p.2o.1W.5j=m(e){b o=x("2p"),i=x("1X");1L i=1Z.2r(i),!1!==o&&(!1!==i&&-1!==i.2u(e))};b k=m(e,o){g("2p",e,o),p("#4-3-7").5k("2y",m(){p(18).1Y()})},g=m(e,o,i){b t=5l 5m;t.5n(t.5o()+24*i*3B*3B*5p);b n="1b="+t.5q();1L 3C.3=e+"="+o+";"+n+";5r=/",x(e)},x=m(e){1R(b o=e+"=",i=5s(3C.3).5t(";"),t=0;t<i.22;t++){1R(b n=i[t];" "==n.5u(0);)n=n.3D(1);2q(0===n.2u(o))1L n.3D(o.22,n.22)}1L!1}}(5v);',62,342,'|||cookie|gdpr||SettingsCookie|message|text|||var||||void||color||border|||function||||none||||type|webkit|box||radius||input|button|font|ms|2px|URLcolor|value|direction|margin|10px|checkbox|shadow|3px|rgba|preferences|title|background|moz|checked|center|advanced|desc|bottom|height|disabled|flex||id|types|marketing|to|size|display|tooltip|this|TXTcolor|analytics|expires|btn|white|user|select|15px|line|normal|align|li|label|TTlcolor|Font|allow|cookies|Cookies|necessary|style|css|position|width|20px|inline|cursor|auto|appearance|8px|100|transition|all|ease|in|description|name|data|prop|return|delay|link|site|content|are|for|padding|h4|12px|hover|ihavecookies|cookieControlPrefs|remove|JSON|on|div|length|px|||rtl|your|accept|related|etc|information|left|index|h5|13px|ul|5px|pointer|dadce0|relative|before|pack|column|fn|cookieControl|if|parse||each|indexOf|cookietype|click|attr|fast|googleanalytics|TTl|TXT|URL|Cookie_direction|Cookie_allowadvanced|Cookie_allowgooglecookie|Cookie_allowtypes|Cookie_delay|Cookie_expires|Cookie_privacy_link|Cookie_title|Cookie_message|use|and|Cookie_cookieTypesTitle|Cookie_T_necessary|Cookie_T_preferences|Cookie_T_analytics|Cookie_T_marketing|Cookie_D_necessary|These|that|Cookie_D_preferences|Cookie_D_analytics|Cookie_D_marketing|Cookie_acceptBtnLabel||ccept|Cookie_advancedBtnLabel|Cookie_moreInfoLabel|30px|max|family|ltr|weight|bold|last|child|block|1px|vertical|justify|items|appendTo|cookieTypes|acceptBtnLabel|advancedBtnLabel|moreInfoLabel|cookieTypesTitle|fixedCookieTypeLabel|fixedCookieTypeDesc|allowBoxes|onAccept|uncheckBoxes|reinit|class|fadeIn|tiptext|span|top|pageY|pageX|body|60|document|substring|id_googleanalytics|FFB900|444444|2900FF|Tahoma|Helvetica|FreeSans|sans|serif|googlecookie|Cookie_allowmycookie|mycookie|600|https|policies|google|com|technologies|Privacy|We|understand|how|you|our|improve|experience|This|includes|personalizing|advertising|Select||Necessary|Site|Preferences|Analytics|Marketing|essential|the|website|work|correctly|remembering|username|colours|visits|browser|newsletters|social|media|Accept|Customise|More|root|fixed|375px|100000000000000|khtml|5em|75em|start|list|decoration|dotted|transparent|solid|e8e8e8|b5b5b5|90|f8f8f8|float|middle|outline|absolute|opacity|1000000000000000|space|11px|orient|head|cookieChoices|extend|x1F36A|false|else|href|setTimeout|append|hide|slow|trigger|removeAttr|mousemove|window|scroll|serializeArray|push|stringify|365|call|not|off|slideDown|preference|fadeOut|new|Date|setTime|getTime|1e3|toUTCString|path|decodeURIComponent|split|charAt|jQuery'.split('|'),0,{}))
$(window).one('load',function() {function preferences_code() {console.log('%cpreferences: is accepted', 'color:tomato');};
function analytics_code() {console.log('%canalytics: is accepted', 'color:tomato');
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', id_googleanalytics, 'auto', 'blogger');
ga('blogger.send', 'pageview');};function marketing_code() {console.log('%cmarketing: is accepted', 'color:tomato');};function domcookie() {!0===$.fn.ihavecookies.preference("preferences")&&preferences_code();!0===$.fn.ihavecookies.preference("analytics")&&analytics_code();!0===$.fn.ihavecookies.preference("marketing")&&marketing_code();};var options = {onAccept:function(){var myPreferences = $.fn.ihavecookies.cookie();console.log('%cYay! The following preferences were saved...', 'color:tomato');console.log(myPreferences);domcookie();}};if (Cookie_allowmycookie === true) {$('body').ihavecookies(options);domcookie();
$('#ihavecookiesBtn').on('click', function(){$('body').ihavecookies(options, 'reinit');});}});});function scrollToTop(){verticalOffset="undefined"!=typeof verticalOffset?verticalOffset:0,element=$("body"),offset=element.offset(),offsetTop=offset.top,$("html, body").animate({scrollTop:offsetTop},600,"linear").animate({scrollTop:25},200).animate({scrollTop:0},150).animate({scrollTop:0},50)}$(function(){$(document).on("scroll",function(){100<$(window).scrollTop()?$(".smoothscroll-top").addClass("show"):$(".smoothscroll-top").removeClass("show")}),$(".smoothscroll-top").on("click",scrollToTop)});
