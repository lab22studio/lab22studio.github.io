/* lab22.studio — light/dark theme toggle.
   Single signature accent (blue #00A8FF) is set in CSS (:root --neon); no runtime accent control. */
(function(){
  var root=document.documentElement;
  var segs=[].slice.call(document.querySelectorAll('.audit .seg'));
  function setTheme(t){
    root.setAttribute('data-theme',t);
    segs.forEach(function(s){s.setAttribute('aria-pressed',String(s.dataset.theme===t));});
    try{localStorage.setItem('lab22-theme',t);}catch(e){}
  }
  segs.forEach(function(s){s.addEventListener('click',function(){setTheme(s.dataset.theme);});});
  try{setTheme(localStorage.getItem('lab22-theme')||'dark');}catch(e){setTheme('dark');}
})();
