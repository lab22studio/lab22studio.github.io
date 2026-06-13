/* lab22.studio — theme (dark/light) + accent auditioner.
   One signature accent (blue #00A8FF); the swatches are an in-session experiment only. */
(function(){
  var root=document.documentElement;
  var name=document.getElementById('neon-name');
  var segs=[].slice.call(document.querySelectorAll('.audit .seg'));
  var sws=[].slice.call(document.querySelectorAll('.audit .sw'));
  var SIGNATURE='#00a8ff';
  function setNeon(hex){
    root.style.setProperty('--neon',hex);
    var b=sws.filter(function(x){return x.dataset.neon.toLowerCase()===hex.toLowerCase();})[0];
    if(name)name.textContent=b?b.dataset.name:hex;
    sws.forEach(function(x){x.setAttribute('aria-pressed',String(x.dataset.neon.toLowerCase()===hex.toLowerCase()));});
    try{localStorage.setItem('lab22-neon',hex);}catch(e){}
  }
  function setTheme(t){
    root.setAttribute('data-theme',t);
    segs.forEach(function(s){s.setAttribute('aria-pressed',String(s.dataset.theme===t));});
    try{localStorage.setItem('lab22-theme',t);}catch(e){}
  }
  segs.forEach(function(s){s.addEventListener('click',function(){setTheme(s.dataset.theme);});});
  sws.forEach(function(b){b.addEventListener('click',function(){setNeon(b.dataset.neon);});});
  try{setTheme(localStorage.getItem('lab22-theme')||'dark');}catch(e){setTheme('dark');}
  setNeon(SIGNATURE);
})();
