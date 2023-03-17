(function(g){var window=this;'use strict';var lfb=function(a,b){a.Na("onAutonavCoundownStarted",b)},E5=function(a,b,c){g.zo(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.fg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.CJ&&(b.lengthText?(e=b.lengthText||null,f=b.Yu||null):b.lengthSeconds&&(e=g.SO(b.lengthSeconds),f=g.SO(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.AJ(d).type;var l=b instanceof g.CJ?b.isLivePlayback:null,m=b instanceof g.CJ?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],w=[];n&&r.push(n);p&&(r.push(p),w.push(p));q&&w.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.fM("Watch $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Fo(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:w.join(" \u2022 "),autoplayAlternativeHeader:b.rr};b instanceof g.BJ&&(c.playlist_length=b.playlistLength);a.update(c)},F5=function(a){var b=a.T(),c=b.C;
g.T.call(this,{G:"a",N:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",Ia:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},W:[{G:"div",X:{"aria-label":"{{timestamp}}"},Ia:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ia:["ytp-autonav-live-stamp"],qa:"Live"},{G:"div",
Ia:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"},{G:"div",N:"ytp-autonav-list-overlay",W:[{G:"div",N:"ytp-autonav-mix-text",qa:"Mix"},{G:"div",N:"ytp-autonav-mix-icon"}]}]},{G:"div",Ia:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],qa:"{{title}}"},{G:"div",Ia:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],qa:"{{author}}"},{G:"div",Ia:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],qa:"{{views_and_publish_time}}"}]});this.F=a;this.suggestion=
null;this.j=c;this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress)},G5=function(a,b){b=void 0===b?!1:b;
g.T.call(this,{G:"div",N:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.D=void 0;this.B=0;this.container=new g.T({G:"div",N:"ytp-autonav-endscreen-countdown-container"});g.D(this,this.container);this.container.Da(this.element);b=a.T();var d=b.C;this.F=a;this.suggestion=null;this.onVideoDataChange("newdata",this.F.getVideoData());this.S(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.K("web_rounded_thumbnails")&&e.push("rounded-thumbnail");
this.j=new g.T({G:"div",N:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",N:"ytp-autonav-endscreen-upnext-header"},{G:"div",N:"ytp-autonav-endscreen-upnext-alternative-header",qa:"{{autoplayAlternativeHeader}}"},{G:"a",N:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.Y:""},W:[{G:"div",Ia:e,X:{style:"{{background}}"},W:[{G:"div",
X:{"aria-label":"{{timestamp}}"},Ia:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ia:["ytp-autonav-live-stamp"],qa:"Live"},{G:"div",Ia:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"}]},{G:"div",N:"ytp-autonav-endscreen-video-info",W:[{G:"div",N:"ytp-autonav-endscreen-premium-badge"},{G:"div",N:"ytp-autonav-endscreen-upnext-title",qa:"{{title}}"},{G:"div",N:"ytp-autonav-endscreen-upnext-author",qa:"{{author}}"},{G:"div",N:"ytp-autonav-view-and-date",qa:"{{views_and_publish_time}}"},{G:"div",
N:"ytp-autonav-author-and-view",qa:"{{author_and_views}}"}]}]}]});g.D(this,this.j);this.j.Da(this.container.element);d||this.S(this.j.Ca("ytp-autonav-endscreen-link-container"),"click",this.UP);this.F.qb(this.container.element,this,115127);this.F.qb(this.j.Ca("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.T({G:"div",N:"ytp-autonav-overlay"});g.D(this,this.overlay);this.overlay.Da(this.container.element);this.u=new g.T({G:"div",N:"ytp-autonav-endscreen-button-container"});
g.D(this,this.u);this.u.Da(this.container.element);this.cancelButton=new g.T({G:"button",Ia:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancel autoplay"},qa:"Cancel"});g.D(this,this.cancelButton);this.cancelButton.Da(this.u.element);this.cancelButton.Pa("click",this.kZ,this);this.F.qb(this.cancelButton.element,this,115129);this.playButton=new g.T({G:"a",Ia:["ytp-autonav-endscreen-upnext-button",
"ytp-autonav-endscreen-upnext-play-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Play next video"},qa:"Play Now"});g.D(this,this.playButton);this.playButton.Da(this.u.element);this.playButton.Pa("click",this.UP,this);this.F.qb(this.playButton.element,this,115130);this.C=new g.no(function(){mfb(c)},500);
g.D(this,this.C);this.TP();this.S(a,"autonavvisibility",this.TP);this.F.K("web_autonav_color_transition")&&(this.S(a,"autonavchange",this.jZ),this.S(a,"onAutonavCoundownStarted",this.O4))},H5=function(a){var b=a.F.vk(!0,a.F.isFullscreen());
g.zo(a.container.element,"ytp-autonav-endscreen-small-mode",a.ih(b));g.zo(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.DH);g.zo(a.F.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.F.Jf());g.zo(a.F.getRootNode(),"countdown-running",a.Ak());g.zo(a.container.element,"ytp-player-content",a.F.Jf());g.Gl(a.overlay.element,{width:b.width+"px"});if(!a.Ak()){a.F.Jf()?nfb(a,Math.round(ofb(a)/1E3)):nfb(a);b=!!a.suggestion&&!!a.suggestion.rr;var c=a.F.Jf()||!b;
g.zo(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.zo(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.PN(a.u,a.F.Jf());g.zo(a.element,"ytp-enable-w2w-color-transitions",pfb(a))}},mfb=function(a){var b=ofb(a),c=Math,d=c.min;
var e=a.B?Date.now()-a.B:0;c=d.call(c,e,b);nfb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Ak()?a.select(!0):a.Ak()&&a.C.start()},ofb=function(a){if(a.F.isFullscreen()){var b;
a=null==(b=a.F.getVideoData())?void 0:b.gI;return-1===a||void 0===a?8E3:a}return 0<=a.F.Nr()?a.F.Nr():g.fH(a.F.T().experiments,"autoplay_time")||1E4},pfb=function(a){var b;
return!(null==(b=a.F.getVideoData())||!b.watchToWatchTransitionRenderer)},nfb=function(a,b){b=void 0===b?-1:b;
a=a.j.Ca("ytp-autonav-endscreen-upnext-header");g.Te(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Me("Up next in $SECONDS".slice(0,d)));var e=g.Le("span");g.to(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Ye(e,b);a.appendChild(e);a.appendChild(g.Me("Up next in $SECONDS".slice(d+c.length)));return}}g.Ye(a,"Up next")},I5=function(a,b){g.T.call(this,{G:"div",
Ia:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},J5=function(a){g.T.call(this,{G:"div",
Ia:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},W:[{G:"div",N:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{G:"span",N:"ytp-upnext-top",W:[{G:"span",N:"ytp-upnext-header",qa:"Up Next"},{G:"span",N:"ytp-upnext-title",qa:"{{title}}"},{G:"span",N:"ytp-upnext-author",qa:"{{author}}"}]},{G:"a",N:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Play next video"},W:[{G:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
W:[{G:"circle",N:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",N:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",N:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",N:"ytp-upnext-bottom",W:[{G:"span",N:"ytp-upnext-cancel"},{G:"span",N:"ytp-upnext-paused",
qa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.D=this.Ca("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.no(this.PE,5E3,this);this.u=0;var b=this.Ca("ytp-upnext-cancel");this.cancelButton=new g.T({G:"button",Ia:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancel autoplay"},qa:"Cancel"});g.D(this,this.cancelButton);this.cancelButton.Pa("click",this.lZ,this);this.cancelButton.Da(b);this.cancelButton&&this.api.qb(this.cancelButton.element,
this,115129);g.D(this,this.C);this.api.qb(this.element,this,18788);b=this.Ca("ytp-upnext-autoplay-icon");this.S(b,"click",this.mZ);this.api.qb(b,this,115130);this.VP();this.S(a,"autonavvisibility",this.VP);this.S(a,"mdxnowautoplaying",this.A5);this.S(a,"mdxautoplaycanceled",this.B5);g.zo(this.element,"ytp-upnext-mobile",this.api.T().u)},qfb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.gI;return-1===a||void 0===a?8E3:a}return 0<=a.api.Nr()?a.api.Nr():g.fH(a.api.T().experiments,"autoplay_time")||1E4},rfb=function(a,b){b=qfb(a,b);
var c=Math,d=c.min;var e=(0,g.M)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Ak()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Ak()&&a.j.start()},K5=function(a){I5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.T({G:"div",N:"ytp-suggestion-panel",W:[{G:"div",Ia:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],qa:"More videos"}]});this.J=new g.T({G:"div",N:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new G5(this.player);g.D(this,this.u);this.u.Da(this.element);a.getVideoData().uf?this.j=this.u:(this.j=new J5(a),g.aR(this.player,this.j.element,4),g.D(this,this.j));this.overlay=new g.T({G:"div",
N:"ytp-autonav-overlay-cancelled-state"});g.D(this,this.overlay);this.overlay.Da(this.element);this.C=new g.cG(this);g.D(this,this.C);g.D(this,this.table);this.table.Da(this.element);this.table.show();g.D(this,this.J);this.J.Da(this.table.element);this.hide()},L5=function(a){var b=a.Jf();
b!==a.D&&(a.D=b,a.player.ma("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},M5=function(a,b){g.T.call(this,{G:"button",
Ia:["ytp-watch-on-youtube-button","ytp-button"],qa:"{{content}}"});this.F=a;this.buttonType=this.buttonType=b;b=this.F.getVideoData();if(a.K("embeds_enable_server_driven_watch_again_on_youtube")){var c,d;if(c=(a=null==(c=b.qd)?void 0:null==(d=c.playerOverlays)?void 0:d.playerOverlayRenderer)&&g.L(a.watchOnYoutubeButton,g.dLa))this.j=c}if(this.j)this.update({content:this.j.title}),this.F.Bg(this.element,this),this.F.wg(this.element,this.j.trackingParams||null);else{switch(this.buttonType){case 1:c=
"Watch again on YouTube";d=156915;break;case 2:c="Continue watching on YouTube";d=156942;break;default:c="Continue watching on YouTube",d=156942}this.update({content:c});this.F.qb(this.element,this,d)}2===this.buttonType&&g.vo(this.element,"ytp-continue-watching-button");this.Pa("click",this.onClick);g.PN(this,!0)},N5=function(a,b){I5.call(this,a,"embeds-lite-endscreen");
this.F=a;this.j=b;this.F.qb(this.element,this,156943);this.watchButton=new M5(a,2);g.D(this,this.watchButton);this.watchButton.Da(this.element);this.hide()},sfb=function(a){I5.call(this,a,"subscribecard-endscreen");
this.j=new g.T({G:"div",N:"ytp-subscribe-card",W:[{G:"img",N:"ytp-author-image",X:{src:"{{profilePicture}}"}},{G:"div",N:"ytp-subscribe-card-right",W:[{G:"div",N:"ytp-author-name",qa:"{{author}}"},{G:"div",N:"html5-subscribe-button-container"}]}]});g.D(this,this.j);this.j.Da(this.element);var b=a.getVideoData();this.subscribeButton=new g.gT("Subscribe",null,"Unsubscribe",null,!0,!1,b.Zj,b.subscribed,"trailer-endscreen",null,null,a);g.D(this,this.subscribeButton);this.subscribeButton.Da(this.j.Ca("html5-subscribe-button-container"));
this.S(a,"videodatachange",this.La);this.La();this.hide()},O5=function(a){var b=a.T(),c=g.fG||g.aI?{style:"will-change: opacity"}:void 0,d=b.C,e=["ytp-videowall-still"];
b.u&&e.push("ytp-videowall-show-text");g.T.call(this,{G:"a",Ia:e,X:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},W:[{G:"div",N:"ytp-videowall-still-image",X:{style:"{{background}}"}},{G:"span",N:"ytp-videowall-still-info",X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-info-bg",W:[{G:"span",N:"ytp-videowall-still-info-content",X:c,W:[{G:"span",N:"ytp-videowall-still-info-title",qa:"{{title}}"},
{G:"span",N:"ytp-videowall-still-info-author",qa:"{{author_and_views}}"},{G:"span",N:"ytp-videowall-still-info-live",qa:"Live"},{G:"span",N:"ytp-videowall-still-info-duration",qa:"{{duration}}"}]}]}]},{G:"span",Ia:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-listlabel-icon"},"Playlist",{G:"span",N:"ytp-videowall-still-listlabel-length",W:[" (",{G:"span",qa:"{{playlist_length}}"},")"]}]},{G:"span",Ia:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",N:"ytp-videowall-still-listlabel-length",qa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.cG(this);g.D(this,this.j);this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress);this.j.S(a,"videodatachange",this.onVideoDataChange);a.Bg(this.element,this);this.onVideoDataChange()},P5=function(a){I5.call(this,a,"videowall-endscreen");
var b=this;this.F=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.V=null;this.u=new g.cG(this);g.D(this,this.u);this.Y=a.K("web_rounded_thumbnails");this.I=new g.no(function(){g.vo(b.element,"ytp-show-tiles")},0);
g.D(this,this.I);var c=new g.T({G:"button",Ia:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Previous"},W:[g.VN()]});g.D(this,c);c.Da(this.element);c.Pa("click",this.qZ,this);this.table=new g.MN({G:"div",N:"ytp-endscreen-content"});g.D(this,this.table);this.table.Da(this.element);c=new g.T({G:"button",Ia:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Next"},W:[g.WN()]});g.D(this,c);c.Da(this.element);c.Pa("click",this.pZ,this);a.getVideoData().uf?this.j=new G5(a,!0):this.j=new J5(a);
g.D(this,this.j);g.aR(this.player,this.j.element,4);a.qb(this.element,this,158789);this.hide()},Q5=function(a){return g.bR(a.player)&&a.IA()&&!a.C},R5=function(a){var b=a.Jf();
b!==a.J&&(a.J=b,a.player.ma("autonavvisibility"))},S5=function(a){I5.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new M5(a,1);g.D(this,this.watchButton);this.watchButton.Da(this.element);g.Y6a(a)&&(this.j=new g.z2(a,g.JQ(a)),g.D(this,this.j),this.u=new g.T({G:"div",Ia:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},W:[this.j]}),g.D(this,this.u),this.j.Da(this.u.element),this.u.Da(this.element));a.qb(this.element,this,156914);this.hide()},wfb=function(a){g.fS.call(this,a);
var b=this;this.endScreen=null;this.u=this.j=this.B=this.C=!1;this.listeners=new g.cG(this);g.D(this,this.listeners);var c=a.T(),d=a.getVideoData();d=d&&0!==d.endSeconds;if(g.ux(g.tI(c))&&d&&!g.YQ(a))this.u=!0,this.endScreen=new N5(a,g.JQ(a));else{var e;(c.K("shorts_mode_to_player_api")?a.Qb():null==(e=g.JQ(a))?0:e.Qb())?this.endScreen=new S5(a):tfb(a)?(this.C=!0,ufb(this),this.j?this.endScreen=new K5(a):this.endScreen=new P5(a)):c.Ag?this.endScreen=new sfb(a):this.endScreen=new I5(a)}g.D(this,this.endScreen);
g.aR(a,this.endScreen.element,4);vfb(this);this.listeners.S(a,"videodatachange",this.onVideoDataChange,this);this.listeners.S(a,g.cC("endscreen"),function(f){b.onCueRangeEnter(f)});
this.listeners.S(a,g.dC("endscreen"),function(f){b.onCueRangeExit(f)})},ufb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Xl&&a.B===b.uf)return!1;a.j=b.Xl;a.B=b.uf;return!0},tfb=function(a){a=a.T();
return a.Ad&&!a.Ag},vfb=function(a){a.player.Df("endscreen");
var b=a.player.getVideoData();b=new g.aC(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.aC(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Ae([b,c])};
g.MV.prototype.vz=g.ca(36,function(a){this.uN!==a&&(this.uN=a,this.Xk())});
g.dU.prototype.Lq=g.ca(35,function(a){this.u!==a&&(this.u=a,this.La())});
g.MV.prototype.Lq=g.ca(34,function(a){this.shareButton&&this.shareButton.Lq(a)});
g.ST.prototype.Kq=g.ca(33,function(a){this.u!==a&&(this.u=a,this.La())});
g.MV.prototype.Kq=g.ca(32,function(a){this.overflowButton&&this.overflowButton.Kq(a)});
g.TS.prototype.uD=g.ca(31,function(a){this.vN!==a&&(this.vN=a,this.jp())});
g.UQ.prototype.Nr=g.ca(5,function(){return this.app.Nr()});
g.eZ.prototype.Nr=g.ca(4,function(){return this.getVideoData().eR});g.v(F5,g.T);F5.prototype.select=function(){this.F.Dn(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.cB||void 0)&&this.F.rb(this.element)};
F5.prototype.onClick=function(a){g.ES(a,this.F,this.j,this.suggestion.sessionData||void 0)&&this.select()};
F5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Xz(a)||(this.select(),g.Wz(a))}};g.v(G5,g.T);g.k=G5.prototype;g.k.dE=function(a){this.suggestion!==a&&(this.suggestion=a,E5(this.j,a),this.playButton.updateValue("url",this.suggestion.Fo()),H5(this))};
g.k.Ak=function(){return 0<this.B};
g.k.Dz=function(){this.Ak()||(this.B=Date.now(),mfb(this),lfb(this.F,ofb(this)),g.zo(this.F.getRootNode(),"countdown-running",this.Ak()))};
g.k.Dv=function(){this.Oq();mfb(this);var a=this.j.Ca("ytp-autonav-endscreen-upnext-header");a&&g.Ye(a,"Up next")};
g.k.Oq=function(){this.Ak()&&(this.C.stop(),this.B=0)};
g.k.select=function(a){this.F.nextVideo(!1,void 0===a?!1:a);this.Oq()};
g.k.UP=function(a){g.ES(a,this.F)&&(a.currentTarget===this.playButton.element?this.F.rb(this.playButton.element):a.currentTarget===this.j.Ca("ytp-autonav-endscreen-link-container")&&(a=this.j.Ca("ytp-autonav-endscreen-link-container"),this.F.Ta(a,!0),this.F.rb(a)),this.select())};
g.k.kZ=function(){this.F.rb(this.cancelButton.element);g.WQ(this.F,!0);this.D&&this.F.Na("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.l0)?void 0:c.command};
g.k.O4=function(a){if(pfb(this)){var b=this.F.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.cP(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.cP(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.cP(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.cP(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.cP(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.cP(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.zo(this.element,"ytp-w2w-animate",!0)}};
g.k.jZ=function(a){this.F.K("web_autonav_color_transition")&&2!==a&&g.zo(this.element,"ytp-w2w-animate",!1)};
g.k.TP=function(){var a=this.F.Jf();this.I&&this.vb!==a&&g.PN(this,a);H5(this);this.F.Ta(this.container.element,a);this.F.Ta(this.cancelButton.element,a);this.F.Ta(this.j.Ca("ytp-autonav-endscreen-link-container"),a);this.F.Ta(this.playButton.element,a)};
g.k.ih=function(a){return 400>a.width||459>a.height};g.v(I5,g.T);g.k=I5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.IA=function(){return!1};
g.k.Jf=function(){return!1};
g.k.qU=function(){return!1};g.v(J5,g.T);g.k=J5.prototype;g.k.PE=function(){this.notification&&(this.C.stop(),this.Gc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.dE=function(a){this.suggestion=a;E5(this,a,"hqdefault.jpg")};
g.k.VP=function(){g.PN(this,this.api.Jf());this.api.Ta(this.element,this.api.Jf());this.api.Ta(this.Ca("ytp-upnext-autoplay-icon"),this.api.Jf());this.cancelButton&&this.api.Ta(this.cancelButton.element,this.api.Jf())};
g.k.J5=function(){window.focus();this.PE()};
g.k.Dz=function(a){var b=this;this.Ak()||(g.lA("a11y-announce","Up Next "+this.suggestion.title),this.u=(0,g.M)(),this.j=new g.no(function(){rfb(b,a)},25),rfb(this,a),lfb(this.api,qfb(this,a)));
g.xo(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.T.prototype.hide.call(this)};
g.k.Ak=function(){return!!this.j};
g.k.Dv=function(){this.Oq();this.u=(0,g.M)();rfb(this);g.vo(this.element,"ytp-upnext-autoplay-paused")};
g.k.Oq=function(){this.Ak()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.T().K("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.PE(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.fg()}),this.B=this.S(this.notification,"click",this.J5),this.C.start())}this.Oq();this.api.nextVideo(!1,a)};
g.k.mZ=function(a){!g.Xe(this.cancelButton.element,g.Sz(a))&&g.ES(a,this.api)&&(this.api.Jf()&&this.api.rb(this.Ca("ytp-upnext-autoplay-icon")),this.select())};
g.k.lZ=function(){this.api.Jf()&&this.cancelButton&&this.api.rb(this.cancelButton.element);g.WQ(this.api,!0)};
g.k.A5=function(a){this.api.getPresentingPlayerType();this.show();this.Dz(a)};
g.k.B5=function(){this.api.getPresentingPlayerType();this.Oq();this.hide()};
g.k.ra=function(){this.Oq();this.PE();g.T.prototype.ra.call(this)};g.v(K5,I5);g.k=K5.prototype;g.k.create=function(){I5.prototype.create.call(this);this.C.S(this.player,"appresize",this.kA);this.C.S(this.player,"onVideoAreaChange",this.kA);this.C.S(this.player,"videodatachange",this.onVideoDataChange);this.C.S(this.player,"autonavchange",this.WP);this.C.S(this.player,"autonavcancel",this.nZ);this.onVideoDataChange()};
g.k.show=function(){I5.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.WQ(this.player,!1);g.bR(this.player)&&this.IA()&&!this.B?(L5(this),2===this.videoData.autonavState?this.player.T().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Dz():3===this.videoData.autonavState&&this.j.Dv()):(g.WQ(this.player,!0),L5(this));this.kA()};
g.k.hide=function(){I5.prototype.hide.call(this);this.j.Dv();L5(this)};
g.k.kA=function(){var a=this.player.vk(!0,this.player.isFullscreen());L5(this);H5(this.u);g.zo(this.element,"ytp-autonav-cancelled-small-mode",this.ih(a));g.zo(this.element,"ytp-autonav-cancelled-tiny-mode",this.WF(a));g.zo(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Gl(this.overlay.element,{width:a.width+"px"});if(!this.D)for(a=0;a<this.videos.length;a++)g.zo(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.K("web_player_autonav_empty_suggestions_fix")){var b=g.mK(this.videoData);b&&(this.j.dE(b),this.j!==this.u&&this.u.dE(b))}if(a&&a.length)for(b=0;b<xfb.length;++b){var c=xfb[b];if(a&&a[c]){this.videos[b]=new F5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,E5(d,c));g.D(this,this.videos[b]);this.videos[b].Da(this.J.element)}}this.kA()}};
g.k.WP=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.Oq(),this.vb&&this.kA()):(this.I=!0,this.Jf()&&(2===a?this.j.Dz():3===a&&this.j.Dv()))};
g.k.nZ=function(a){a?this.WP(1):(this.B=null,this.I=!1)};
g.k.IA=function(){return 1!==this.videoData.autonavState};
g.k.ih=function(a){return(910>a.width||459>a.height)&&!this.WF(a)&&!(400>=a.width||360>=a.height)};
g.k.WF=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Jf=function(){return this.vb&&g.bR(this.player)&&this.IA()&&!this.B};
var xfb=[1,3,2,4];g.v(M5,g.T);g.k=M5.prototype;g.k.onClick=function(a){this.F.K("web_player_log_click_before_generating_ve_conversion_params")&&this.F.rb(this.element);this.j?this.F.Na("innertubeCommand",this.j.onTap):g.FS(this.getVideoUrl(),this.F,a);this.F.K("web_player_log_click_before_generating_ve_conversion_params")||this.F.rb(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.F.getVideoUrl(a,!1,!1,!0);var b=this.F.T();if(g.cI(b)||g.lI(b)){var c={};b.ya&&g.cI(b)&&g.gQ(c,b.loaderUrl);g.cI(b)&&g.GQ(this.F,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.fQ(c,b);a=g.ti(a,c)}return a};
g.k.Ta=function(){this.F.Ta(this.element,this.vb&&this.Aa)};
g.k.show=function(){g.T.prototype.show.call(this);this.Ta()};
g.k.hide=function(){g.T.prototype.hide.call(this);this.Ta()};
g.k.kc=function(a){g.T.prototype.kc.call(this,a);this.Ta()};g.v(N5,I5);N5.prototype.show=function(){3!==this.player.getPlayerState()&&(I5.prototype.show.call(this),this.j.vz(!0),this.j.Lq(!0),this.F.T().Ul||this.j.Kq(!0),this.F.Ta(this.element,!0),this.watchButton.kc(!0))};
N5.prototype.hide=function(){I5.prototype.hide.call(this);this.j.vz(!1);this.j.Lq(!1);this.j.Kq(!1);this.F.Ta(this.element,!1);this.watchButton.kc(!1)};g.v(sfb,I5);sfb.prototype.La=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Zj;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.v(O5,g.T);O5.prototype.select=function(){this.api.Dn(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.cB||void 0)&&this.api.rb(this.element)};
O5.prototype.onClick=function(a){g.ES(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
O5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Xz(a)||(this.select(),g.Wz(a))}};
O5.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.T();this.u=a.D?!1:b.C};g.v(P5,I5);g.k=P5.prototype;g.k.create=function(){I5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.xp();this.u.S(this.player,"appresize",this.xp);this.u.S(this.player,"onVideoAreaChange",this.xp);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.u.S(this.player,"autonavchange",this.yI);this.u.S(this.player,"autonavcancel",this.oZ);a=this.videoData.autonavState;a!==this.V&&this.yI(a);this.u.S(this.element,"transitionend",this.W6)};
g.k.destroy=function(){g.cB(this.u);g.Za(this.stills);this.stills=[];I5.prototype.destroy.call(this);g.xo(this.element,"ytp-show-tiles");this.I.stop();this.V=this.videoData.autonavState};
g.k.IA=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.vb;I5.prototype.show.call(this);g.xo(this.element,"ytp-show-tiles");this.player.T().u?g.po(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.WQ(this.player,!1);Q5(this)?(R5(this),2===this.videoData.autonavState?this.player.T().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Dz():3===this.videoData.autonavState&&this.j.Dv()):(g.WQ(this.player,!0),R5(this));a!==this.vb&&this.player.Ta(this.element,
!0)};
g.k.hide=function(){var a=this.vb;I5.prototype.hide.call(this);this.j.Dv();R5(this);a!==this.vb&&this.player.Ta(this.element,!1)};
g.k.W6=function(a){g.Sz(a)===this.element&&this.xp()};
g.k.xp=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.mK(d)];if(e.length){g.vo(this.element,"ytp-endscreen-paginate");var f=this.F.vk(!0,this.F.isFullscreen());if(a=g.JQ(this.F))a=a.hg()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,w=a<=l-2&&p>=r*n,x=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&x)p-=q*n,b+=2;else if(w)p-=r*n,a+=2;else if(x)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.Wl(f,n,p);g.Gl(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.dE(g.mK(this.videoData));this.j instanceof
G5&&H5(this.j);g.zo(this.element,"ytp-endscreen-takeover",Q5(this));R5(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,w=0,d&&l>=a-2&&m>=b-2?w=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(w=2):w=2),q=g.ee(q+this.B,c),0!==w){r=this.stills[h];r||(r=new O5(this.player),this.stills[h]=r,f.appendChild(r.element));x=Math.floor(p*m/b);var z=Math.floor(n*l/a),B=Math.floor(p*(m+w)/b)-x-4,E=Math.floor(n*(l+w)/a)-z-4;g.Ml(r.element,z,x);g.Wl(r.element,E,B);g.Gl(r.element,"transitionDelay",
(m+l)/20+"s");g.zo(r.element,"ytp-videowall-still-mini",1===w);g.zo(r.element,"ytp-videowall-still-large",2<w);this.Y&&(w=Math.max(E,B),g.zo(r.element,"ytp-videowall-still-round-large",256<=w),g.zo(r.element,"ytp-videowall-still-round-medium",96<w&&256>w),g.zo(r.element,"ytp-videowall-still-round-small",96>=w));q=e[q];r.suggestion!==q&&(r.suggestion=q,w=r.api.T(),x=g.uo(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",E5(r,q,x),g.cI(w)&&(x=q.Fo(),z={},w.ya&&g.gQ(z,w.loaderUrl),
g.GQ(r.api,"addEmbedsConversionTrackingParams",[z]),x=g.ti(x,g.fQ(z,"emb_rel_end")),r.updateValue("url",x)),(q=(q=q.sessionData)&&q.itct)&&r.api.wg(r.element,q));h++}f.ariaBusy="false";g.zo(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.Ve(a.element),g.Ya(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.xp())};
g.k.pZ=function(){this.B+=this.stills.length;this.xp()};
g.k.qZ=function(){this.B-=this.stills.length;this.xp()};
g.k.qU=function(){return this.j.Ak()};
g.k.yI=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Oq(),this.vb&&this.xp()):(this.D=!0,this.vb&&Q5(this)&&(2===a?this.j.Dz():3===a&&this.j.Dv()))};
g.k.oZ=function(a){if(a){for(a=0;a<this.stills.length;a++)this.F.Ta(this.stills[a].element,!0);this.yI(1)}else this.C=null,this.D=!1;this.xp()};
g.k.Jf=function(){return this.vb&&Q5(this)};g.v(S5,I5);S5.prototype.show=function(){if(3!==this.player.getPlayerState()){I5.prototype.show.call(this);var a=this.u;if(a){var b=0<this.j.suggestionData.length;g.zo(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.JQ(this.player))||c.uD(!0);this.player.Ta(this.element,!0);this.watchButton.kc(!0)}};
S5.prototype.hide=function(){I5.prototype.hide.call(this);var a;null==(a=g.JQ(this.player))||a.uD(!1);this.player.Ta(this.element,!1);this.watchButton.kc(!1)};g.v(wfb,g.fS);g.k=wfb.prototype;g.k.Uv=function(){var a;if((this.player.T().K("shorts_mode_to_player_api")?this.player.Qb():null==(a=g.JQ(this.player))?0:a.Qb())||this.u)return!0;a=this.player.getVideoData();var b;var c=!!((null==a?0:g.mK(a))||(null==a?0:null==(b=a.suggestions)?0:b.length));b=!tfb(this.player)||c;c=a.Jj||g.lI(a.B);var d=this.player.nB();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Jf=function(){return this.endScreen.Jf()};
g.k.w3=function(){return this.Jf()?this.endScreen.qU():!1};
g.k.ra=function(){this.player.Df("endscreen");g.fS.prototype.ra.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.ub().Ye.get("heartbeat"),d=g.mK(a);!d||b.videoId!==d.videoId||a.LW?(this.player.Dn(b.videoId,void 0,void 0,!0,!0,b),c&&c.dG("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.fS.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.fS.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Uv()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){vfb(this);this.C&&ufb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new K5(this.player):this.endScreen=new P5(this.player),g.D(this,this.endScreen),g.aR(this.player,this.endScreen.element,4))};g.eS("endscreen",wfb);})(_yt_player);