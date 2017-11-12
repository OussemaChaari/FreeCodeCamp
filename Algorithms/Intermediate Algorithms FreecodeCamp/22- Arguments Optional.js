function addTogether() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length == 2) {
        if (typeof args[0] != "number" || typeof args[1] != "number")
            return undefined;
        else
            return args[0] + args[1];
    } else if (args.length === 1) {
        if (typeof args[0] != "number")
            return undefined;
        else {
            return function (b) {
                if (typeof b != "number")
                    return undefined;
                else
                    return args[0] + b;
            };
        }
    }

}
