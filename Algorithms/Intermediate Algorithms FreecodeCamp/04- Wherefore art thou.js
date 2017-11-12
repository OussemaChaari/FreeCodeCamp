function whatIsInAName(collection, source) {
    var arr = [];
    var sources = Object.keys(source);
    arr = collection.filter(function (x) {
        for (var i = 0; i < sources.length; i++) {
            if (x.hasOwnProperty(sources[i]) == false || x[sources[i]] != source[sources[i]])
                return false;
        }
        return true;
    });
    return arr;
}
