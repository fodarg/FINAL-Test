// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    domCache: true //enable inline pages
});
var calendarDefault = myApp.calendar({
    input: '#calendar-default',
});          

$(document).ready(function(){
setTimeout(function(){
    // Slow speed
  // Init slider and store its instance in mySwiper variable
  var mySwiper = myApp.swiper('.swiper-container', {
    direction: 'horizontal',
    speed: 600,
      loop: true
  });


    },2000);
    });

 
