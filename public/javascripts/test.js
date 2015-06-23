$.ajax("../20141129iqtp.csv", {
    success: function(data) {
        var jsonobject = csvjson.csv2json(data);
        // Now use jsonobject to do some charting...
    },
    error: function() {
        // Show some error message, couldn't get the CSV file
    }
});