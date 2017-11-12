function truthCheck(collection, pre) {
    var value = false;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
            value = true;
        } else {
            value = false;
            break;
        }
    }
    return value;
}
