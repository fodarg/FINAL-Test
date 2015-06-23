window.onload = function (e)
{
Papa.parse("../20141129iqtp.csv", {
        worker: true,
        header: true,
        download: true,
        complete: function(results) {
                        console.log("The Tips are here!", results);
                        var tips = results.data;
                        var items = tips.length;
                        console.log("Count", items);
$(function () {
    var inputs_to_values = {
        'racejump' : tips[0]['Time'],
        'racename' : tips[0]['Race'],
        'racenum' : tips[0]['raceno'],
        'runner1' : tips[0]['run1name'],
        'runner2' : tips[0]['run2name'],
        'runner3' : tips[0]['run3name'],
        'runner4' : tips[0]['run4name'],
        'tipscore1' : tips[0]['run1score'],
        'tipscore2' : tips[0]['run2score'],
        'tipscore3' : tips[0]['run3score'],
        'tipscore4' : tips[0]['run4score'],
        'runnum1' : tips[0]['run1num'],
        'runnum2' : tips[0]['run2num'],
        'runnum3' : tips[0]['run3num'],
        'runnum4' : tips[0]['run4num']
    };
    $('#form2').find('input').val(function () {
        return inputs_to_values[this.id];
    });
});
//end of close

//textfield1
$("input#textfield1").val(tips[0]['run1price1']);
$('input#checkbox1').on('change', function(){
   if ( $(this).is(':checked') ) {
     $("input#textfield1").val(tips[0]['run1price1']);
   } 
   else{ $("input#textfield1").val("0"); }
});


//textfield2
$("input#textfield2").val(tips[0]['run2price1']);
$('input#checkbox2').on('change', function(){
   if ( $(this).is(':checked') ) {
     $("input#textfield2").val(tips[0]['run2price1']);
   } 
   else{ $("input#textfield2").val("0"); }
});

//textfield3
$("input#textfield3").val(tips[0]['run3price1']);
$('input#checkbox3').on('change', function(){
   if ( $(this).is(':checked') ) {
     $("input#textfield3").val(tips[0]['run3price1']);
   } 
   else{ $("input#textfield3").val("0"); }
});

//textfield4
$("input#textfield4").val(tips[0]['run4price1']);
$('input#checkbox4').on('change', function(){
   if ( $(this).is(':checked') ) {
     $("input#textfield4").val(tips[0]['run4price1']);
   } 
   else{ $("input#textfield4").val("0"); }
});
//end of papa        'textfield1' : tips[0][8],
                       }
       });

setTimeout(window.onload, 10000); //  10 seconds
}  
