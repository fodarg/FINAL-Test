var dat3;
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear()  +
    ((''+month).length<2 ? '0' : '') + month  +
    ((''+day).length<2 ? '0' : '') + day;

$(document).ready(function () {     
 (function update() {
    $.ajax({
    type: "GET",
    url: "'../' + output + 'iqtp.csv'",
    dataType: "text",
    success: function(data) { dat3 = $.csv.toObjects(data);
            tipcsv()}
}).then(function() {           // on completion, restart
       setTimeout(update, 55000);  // function refers to itself
    });
})();
     }); // end document ready  

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

ko.observableArray.fn.paged = function(perPage){
    var items = this;

    items.current = ko.observable(1);
    items.perPage = perPage;
    items.pagedItems = ko.computed(function(){
        var pg = this.current(),
            start = this.perPage * (pg-1),
            end = start + this.perPage;
        return this().slice(start,end);
    }, items);

    items.next = function(){
        if(this.next.enabled())
            this.current(this.current()+1);
    }.bind(this);

    items.next.enabled = ko.computed(function(){
        return this().length > this.perPage * this.current();
    },items);

    items.prev = function(){
        if(this.prev.enabled())
            this.current(this.current()-1);
    }.bind(this);

    items.prev.enabled = ko.computed(function(){
        return this.current() > 1;
    },items);


    return items;
};           
  function tipcsv()
{          
var ViewModel = function(data) {
    
    //map data to an array
    var mappedToArray = [];
    $.each(data, function(index, item) {
        mappedToArray.push(item);
        item.index = index;
    });
           
    this.items = ko.observableArray(mappedToArray).paged(1); 
    
};
var vm = new ViewModel(dat3);
ko.cleanNode(document.getElementById("section1"));        
ko.applyBindings(vm, document.getElementById("section1"));
	}
