var Lleshinamespace = Lleshinamespace || {};
Lleshinamespace.CalculationsA = Lleshinamespace.CalculationsA || {
    Add: function (a,b){
        return a+b;
    },
    Multiply: function(a,b){
        return a*b;
    },
    Greet: function(name)
    {
        var name = name || "Mister X";
        return "Hey "+ name + " ,greeting from lib1";
    }
};