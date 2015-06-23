var trip4 = new Trip([
  { sel : $(".open-picker"), content : "Hola!", position : "n" },
  { sel : $(".open-picker"), content : "Adios!", position : "s" }
], {
  showNavigation : true,
  showCloseBox : true,
  delay : -1
});

$(".start-demo-basic-4").on("click", function() {
  trip4.start();
});