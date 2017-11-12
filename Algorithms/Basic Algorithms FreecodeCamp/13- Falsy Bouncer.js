function bouncer(arr) {
    var newArr = arr.filter(function (val) {
        return Boolean(val) == true;
    });
    return newArr;
}
