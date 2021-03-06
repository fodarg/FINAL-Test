/// <reference path="../../typings/knockout/knockout.d.ts"/>

var d = new Date();

var month = d.getMonth() + 1;
var day = d.getDate();

var output = d.getFullYear() +
    (('' + month).length < 2 ? '0' : '') + month +
    (('' + day).length < 2 ? '0' : '') + day;
$(function () {
    var viewModel = {
        // Data
        arrayoftip: ko.observableArray(),
        update: function () {
            $.ajax({
                type: "GET",
                url: 'http://tips.mytippingapp.com/iqprotips/' + output + 'iqtp.csv',
                context: this,
                success: function (data) {
                    ko.mapping.toJSON(viewModel);
                    dat3 = $.csv.toObjects(data);
                    this.arrayoftip($.map(dat3, function (item) {
                        return new logEntry(item);
                        console.log(item);
                    }));
                },
            });
        },
    };
    function updateValues() {
        $.ajax({
            type: "GET",
            url: 'http://tips.mytippingapp.com/iqprotips/' + output + 'iqtp.csv',
            context: this,
            success: function (data) {
                ko.mapping.toJSON(viewModel);
                dat3 = $.csv.toObjects(data);
                viewModel.arrayoftip($.map(dat3, function (item) {
                    return new logEntry(item);
                    console.log(item);
                }));
            },
        });
    }

    function logEntry(item) {
        this.Time = ko.observable(item.Time);
        this.Race = ko.observable(item.Race);
        this.raceno = ko.observable(item.raceno);
        this.run1num = ko.observable(item.run1num);
        this.run1name = ko.observable(item.run1name);
        this.run1score = ko.observable(item.run1score);
        this.run1price1 = ko.observable(item.run1price1).extend({ numeric: 4 });
        this.run1price2 = ko.observable(item.run1price2);
        this.run2num = ko.observable(item.run2num);
        this.run2name = ko.observable(item.run2name);
        this.run2score = ko.observable(item.run2score);
        this.run2price1 = ko.observable(item.run2price1).extend({ numeric: 4 });
        this.run2price2 = ko.observable(item.run2price2);
        this.run3num = ko.observable(item.run3num);
        this.run3name = ko.observable(item.run3name);
        this.run3score = ko.observable(item.run3score);
        this.run3price1 = ko.observable(item.run3price1).extend({ numeric: 4 });
        this.run3price2 = ko.observable(item.run3price2);
        this.run4name = ko.observable(item.run4name);
        this.run4num = ko.observable(item.run4num);
        this.run4score = ko.observable(item.run4score);
        this.run4price1 = ko.observable(item.run4price1).extend({ numeric: 4 });
        this.run4price2 = ko.observable(item.run4price2);
        this.totalstake = ko.observable(100);
        this.isSlideVisible1 = ko.observable(true);
        this.remove1 = function () {
            this.run1price1(0);
            this.isSlideVisible1(false);
        };
        this.remove2 = function () {
            this.run2price1(0);
        };
        this.remove3 = function () {
            this.run3price1(0);
        };
        this.remove4 = function () {
            this.run4price1(0);
        };

    
        //PROB
        this.prob1 = ko.pureComputed(function () {
            if (this.run1price1() != 0) {
                return (1 / this.run1price1()); 
            } else {
                return 0;
            }
        }, this);

        this.prob2 = ko.pureComputed(function () {

            if (this.run2price1() != 0) {
                return (1 / this.run2price1()); 
            } else {
                return 0;
            }

        }, this);

        this.prob3 = ko.pureComputed(function () {

            if (this.run3price1() != 0) {
                return (1 / this.run3price1()); 
            } else {
                return 0;
            }

        }, this);

        this.prob4 = ko.pureComputed(function () {

            if (this.run4price1() != 0) {
                return (1 / this.run4price1()); 
            } else {
                return 0;
            }

        }, this);
    
        //total probability P
        this.totprob = ko.computed(function () {
            return (this.prob1() + this.prob2() + this.prob3() + this.prob4());
        }, this); 
        //SUM CHOICES
        this.sumChoices = ko.computed(function () {
            return (1/this.totprob());
        }, this); 

        //return cash
          this.returncashval  = ko.computed(function() {
            if (this.sumChoices() == Number.POSITIVE_INFINITY || this.sumChoices() == Number.NEGATIVE_INFINITY)
            { return '--';
            } else {
            return Math.round((this.totalstake() * this.sumChoices()));
            }
           }, this);
           
           this.returncashvalcal  = ko.computed(function() {
            return Math.round((this.totalstake() * this.sumChoices()));
           }, this);
    
        //STAKES CALC
        this.staker1 = ko.computed(function () {
            return Math.round((this.returncashval() / this.run1price1() * 100)) / 100;
        }, this);

        this.staker2 = ko.computed(function () {
            return Math.round((this.returncashval() / this.run2price1() * 100)) / 100;
        }, this);

        this.staker3 = ko.computed(function () {
            return Math.round((this.returncashval() / this.run3price1() * 100)) / 100;
        }, this);

        this.staker4 = ko.computed(function () {
            return Math.round((this.returncashval() / this.run4price1() * 100)) / 100;
        }, this); 
        //STAKES LIVE
        this.stake1 = ko.computed(function () {
            if (this.staker1() == Number.POSITIVE_INFINITY || this.staker1() == Number.NEGATIVE_INFINITY)
            { return 0;
            } else {
                return this.staker1();
            }
        }, this);

        this.stake2 = ko.computed(function () {
            if (this.staker2() == Number.POSITIVE_INFINITY || this.staker2() == Number.NEGATIVE_INFINITY)
            { return 0;
            } else {
                return this.staker2();
            }
        }, this);

        this.stake3 = ko.computed(function () {
            if (this.staker3() == Number.POSITIVE_INFINITY || this.staker3() == Number.NEGATIVE_INFINITY)
            { return 0;
            } else {
                return this.staker3();
            }
        }, this);

        this.stake4 = ko.computed(function () {
            if (this.staker4() == Number.POSITIVE_INFINITY || this.staker4() == Number.NEGATIVE_INFINITY)
            { return 0;
            } else {
                return this.staker4();
            }
        }, this);
        //profit total   

        this.profittot = ko.computed(function () {
            if (this.sumChoices() == Number.POSITIVE_INFINITY || this.sumChoices() == Number.NEGATIVE_INFINITY)
            { return '--';
            } else {
            return (this.returncashvalcal()- this.totalstake());
            }
        }, this);
        
         
        //COMPLETE
        return this;
    }

    ko.extenders.numeric = function (target, precision) {
        //create a writable computed observable to intercept writes to our observable
        var result = ko.pureComputed({
            read: target,  //always return the original observables value
            write: function (newValue) {
                var current = target(),
                    roundingMultiplier = Math.pow(10, precision),
                    newValueAsNum = isNaN(newValue) ? 0 : parseFloat(+newValue),
                    valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;
 
                //only write if it changed
                if (valueToWrite !== current) {
                    target(valueToWrite);
                } else {
                    //if the rounded value is the same, but a different value was written, force a notification for the current field
                    if (newValue !== current) {
                        target.notifySubscribers(valueToWrite);
                    }
                }
            }
        }).extend({ notify: 'always' });
 
        //initialize with current value to make sure it is rounded appropriately
        result(target());
 
        //return the new computed observable
        return result;
    };

var days = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
];

d = new Date();
x = d.getDay();
    daterday = ko.observable(x).extend({ numeric: 4 });
    oddvalue = ko.observable(15).extend({ numeric: 4 });
    proflev = ko.observable(100).extend({ numeric: 4 });
    key = ko.observable('');

    ko.applyBindings(viewModel);
    $("#btnSave").click(
        function () {
            updateValues();
        }
        );
    updateValues();
    setInterval(updateValues, 50000);
});


var ErrorHandlingBindingProvider = function () {
    var original = new ko.bindingProvider(); 

    //determine if an element has any bindings
    this.nodeHasBindings = original.nodeHasBindings;

    //return the bindings given a node and the bindingContext
    this.getBindingAccessors = function (node, bindingContext) {
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
            result[key] = function () {
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

        