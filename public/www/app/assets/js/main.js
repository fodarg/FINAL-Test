 $(window).load(function(){
  
  $('#loading').fadeOut(500);
  
  new WOW().init();

})




// Classic - Modern switcher

var switcher = function(b){

  function innerHTMLToDom(htmlString) {
    var doc = new DOMParser().parseFromString(htmlString.trim(), "text/html")
    return doc.body.firstChild
  }

  function getRadioVal(name){
    var radioGroup = document.getElementsByName(name);
    for (var i = 0, length = radioGroup.length; i < length; i++) {
      if (radioGroup[i].checked) {
          return radioGroup[i].value;
      }
    }
  }

  function each(nodelist, callback) {
    var i = -1,
        l = nodelist.length
    while (++i < l)
      callback.call(nodelist.item(i), i)
  }
   
  
  var swtch = innerHTMLToDom('<div class="switch"><input type="radio" class="switch-input" name="view" value="sw-modern" id="sw-modern" checked><label for="sw-modern" class="switch-label switch-label-off">Modern</label><input type="radio" class="switch-input" name="view" value="sw-classic" id="sw-classic"><label for="sw-classic" class="switch-label switch-label-on">Classic</label><span class="switch-selection"></span></div>');
  if(b) swtch.classList.add(b);
  document.body.appendChild(swtch);
  var radios = document.querySelectorAll('.switch input');
  each(radios, function(index) {
    this.addEventListener('change', function(){
      var selection = getRadioVal('view');

      if(selection == "sw-modern"){
        document.body.classList.remove('classic');
      } else if(selection == "sw-classic"){
        document.body.classList.add('classic');
      }

    })
  })

}
 








 function addParallax(elem){
   var parallax = document.querySelectorAll(elem);
   for (var i = 0; i < parallax.length; i++) {
     var pElem = document.createElement('div');
     pElem.style.position = "absolute";
     pElem.setAttribute('class','parallaxing')
     pElem.style.backgroundImage = "url(" + parallax[i].dataset.bgSrc + ")";
     pElem.style.backgroundPosition = "center center";
     pElem.style.width = "100%";
     pElem.style.height = "300%";
     pElem.style.top = "0";
     parallax[i].style.overflow = "hidden";
     parallax[i].insertBefore(pElem, parallax[i].firstChild);            
   };
   
 }

 addParallax('.parallax');
      

 var docElem = window.document.documentElement;

 function getViewportH() {
   var client = docElem['clientHeight'],
   inner = window['innerHeight'];

   if( client < inner )
     return inner;
   else
     return client;
 }

 function scrollY() {
   return window.pageYOffset || docElem.scrollTop;
 }

 function getOffset( el ) {
   var offsetTop = 0, offsetLeft = 0;
   do {
     if ( !isNaN( el.offsetTop ) ) {
       offsetTop += el.offsetTop;
     }
     if ( !isNaN( el.offsetLeft ) ) {
       offsetLeft += el.offsetLeft;
     }
   } while( el = el.offsetParent )

   return {
     top : offsetTop,
     left : offsetLeft
   }
 }


 function inViewport( el, h ) {
   var elH = el.offsetHeight,
       scrolled = scrollY(),
       viewed = scrolled + getViewportH(),
       elTop = getOffset(el).top,
       elBottom = elTop + elH,
       h = h || 0;

       return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;

 }


window.onscroll = function (event) {
     var st = scrollY();
     var parallax = document.querySelectorAll('.parallaxing');
     var rect = parallax[0].getBoundingClientRect();
     var pos = document.body.scrollTop;
     var translateY = st*.5,
         translateX = 0,
         scale = 1, 
         opacity = 1,
         viewed = st + getViewportH();



     for (var i = 0; i < parallax.length; i++) {
       
       if(inViewport(parallax[i])){
         var factor = 0.55;
         var variable = (getViewportH() - parallax[i].offsetHeight) * factor;
         translateY = (viewed - getOffset(parallax[i]).top - parallax[i].offsetHeight)* factor - variable;
         parallax[i].style.WebkitTransform = 'translate3d(' + translateX +'px, ' +   translateY + 'px, 0) scale('+ scale +')';
         parallax[i].style.transform = 'translate3d(' + translateX +'px, ' +   translateY + 'px, 0) scale('+ scale +')';
       }
       
     };
} // scroll

