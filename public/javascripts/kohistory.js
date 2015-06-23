var dat3;

$(function(){   
$('#datepick').on('change', function(e){
  var txtAval=$(this).val();
  var dater = txtAval.replace(/-/g, "");
  console.log(dater);
    $.ajax({
    type: "GET",
    url: 'http://tips.mytippingapp.com/iqprotips/' + dater + 'iqtp.csv',
    dataType: "text",
    success: function(data) { dat3 = $.csv.toObjects(data);
            tippercsv()}
});
    


  var ErrorHandlingBindingProvider = function() {
    var original = new ko.bindingProvider(); 

    //determine if an element has any bindings
    this.nodeHasBindings = original.nodeHasBindings;

    //return the bindings given a node and the bindingContext
    this.getBindingAccessors = function(node, bindingContext) {
        var result = {};
        
        //catch general errors parsing binding syntax
        try {
            result = original.getBindingAccessors(node, bindingContext);
        }
        catch (e) {
            if (console && console.log) {
                console.log("Error in binding syntax: " + e.message, node);   
            }
        }
        
        //catch errors when actually evaluating the value of a binding
        ko.utils.objectForEach(result, function (key, value) {
            result[key] = function() {
                var result = null;

                try {
                    result = value();  
                }
                catch (e) {
                    if (console && console.log) {
                        console.log("Error in \"" + key + "\" binding: " + e.message, node);   
                    }
                }
                
                return result;
            };
        });

        return result;
    };
};

ko.bindingProvider.instance = new ErrorHandlingBindingProvider();


  function tipcsv()
{          
var ViewHModel = function(data) {
    
    //map data to an array
    var mappedToArray = [];
    $.each(data, function(index, item) {
        mappedToArray.push(item);
        item.index = index;
    });
           
    this.items = ko.observableArray(mappedToArray); 
    
};
var vm = new ViewHModel(dat3);
ko.cleanNode(document.getElementById("section1"));        
ko.applyBindings(vm, document.getElementById("section1"));
	}

});
    
});