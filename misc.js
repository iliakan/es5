window.VK && document.write(VK.Share.button({
  url: "http://es5.javascript.ru/",
  title: "EcmaScript 5 на русском",
  image: "http://es5.javascript.ru/ecma.png",
  noparse: true}, { type: "round", text: 'Поделиться' }));


!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);js.id=id;  
    js.src="//platform.twitter.com/widgets.js";  
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,"script","twitter-wjs");

window.___gcfg = {lang: 'ru'};

(function() {
  if (document.getElementById('gplus')) return;
  var po = document.createElement('script'); po.id = 'gplus'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&appId=112959575461438";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

setTimeout(function() {
  var toggler = document.getElementById('share-toggler');
  var slogan = document.getElementById('slogan');
  if (window.localStorage) {
    slogan.className = localStorage.sloganClass;
  }

  toggler.onclick = function() {
    slogan.className = (slogan.className == "share-close") ? "" : "share-close";
    if (window.localStorage) {
      localStorage.sloganClass = slogan.className;
    }
  }

}, 0);
  
