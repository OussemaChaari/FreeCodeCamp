function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);
    var values = arr.slice(0);
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (values[i] === args[j]) {
                values[i] = "";
            }
        }
    }
    var newVals = values.filter(function (a) {
        return Boolean(a) == true;
    });

    return newVals;
}
