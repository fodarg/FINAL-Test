window.onload = function (e)
{
Papa.parse("../20141129iqtp.csv", {
        worker: true,
        download: true,
        complete: function(results) {
                        console.log("The Tips are here!", results);
                        var tips = results.data;
$(function () {
    var inputs_to_values = {
        'racejump' : tips[0][0],
        'racename' : tips[0][1],
        'racenum' : tips[0][4],
        'runner1' : tips[0][6],
        'runner2' : tips[0][11],
        'runner3' : tips[0][16],
        'runner4' : tips[0][21],
        'tipscore1' : tips[0][7],
        'tipscore2' : tips[0][12],
        'tipscore3' : tips[0][17],
        'tipscore4' : tips[0][22],
        'runnum1' : tips[0][5],
        'runnum2' : tips[0][10],
        'runnum3' : tips[0][15],
        'runnum4' : tips[0][20]
    };
    $('#form2').find('input').val(function () {
        return inputs_to_values[this.id];
    });
});
//end of close

//textfield1
$("input#textfield1").val(tips[0][8]);
$('input#checkbox1').on('change', function(){
   if ( $(this).is(':checked') ) {
     $("input#textfield1").val(tips[0][8]);
   } 
   else{ $("input#textfield1").val("0"); }
});


//textfield2
$("input#textfield2").val(tips[0][13]);
$('input#checkbox2').on('change', function(){
   if ( $(this).is(':checked') ) {
     $("input#textfield2").val(tips[0][13]);
   } 
   else{ $("input#textfield2").val("0"); }
});

//textfield3
$("input#textfield3").val(tips[0][18]);
$('input#checkbox3').on('change', function(){
   if ( $(this).is(':checked') ) {
     $("input#textfield3").val(tips[0][18]);
   } 
   else{ $("input#textfield3").val("0"); }
});

//textfield4
$("input#textfield4").val(tips[0][23]);
$('input#checkbox4').on('change', function(){
   if ( $(this).is(':checked') ) {
     $("input#textfield4").val(tips[0][23]);
   } 
   else{ $("input#textfield4").val("0"); }
});
//end of papa        'textfield1' : tips[0][8],
                       }
       });

setTimeout(window.onload, 10000); //  10 seconds
}  
BufferedReader bufferedReader = new BufferedReader(new FileReader("../20141129iqtp.csv"));
     String input;
     int count = 0;
     while((input = bufferedReader.readLine()) != null)
     {
         count++;
     }

     System.out.println("Count : "+count);
