var csv = require('csv-stream');
var request = require('request');

// All of these arguments are optional.
var options = {
    delimiter :',', // default is ,
    endLine : '\n', // default is \n,

}

var csvStream = csv.createStream(options);
request('http://128.199.163.96/20141129iqtp.csv').pipe(csvStream)
    .on('error',function(err){
        console.error(err);
    })
    .on('data',function(data){
        // outputs an object containing a set of key/value pair representing a line found in the csv file.
        var tips = data;
        console.log(tips);
    })

