
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41377934-1', 'parent.cc');
ga('send', 'pageview');


(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"===e.location.protocol?"https:":"http:")+'//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f);b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==
typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);
b._i.push([a,e,d])};b.__SV=1.2}})(document,window.mixpanel||[]);
mixpanel.init("3fb895efb7806067de79fe7bc798fe33");

window._pcc = {};
window._pcc.trackLoad = function() {
  var props = {
    href: window.location.href,
    referrer: document.referrer
  }
  var evtType = "LOAD: " + props.href + " FROM " + props.referrer;
  mixpanel.track(evtType, props);
};
window._pcc.trackLink = function(props) {
  var evtType = "LINK: " + props.targetHref + " FROM " + props.originHref;
  mixpanel.track(evtType, props);
};

$(function() {
  _pcc.trackLoad();
  $("a").click(function(e) {
    e.preventDefault();
    _pcc.trackLink({
      originHref: window.location.href,
      targetHref: e.target.href,
      targetTitle: e.target.title
    });
    setTimeout(function() {
      window.location.assign(e.target.href);
    }, 299);
  });
});


