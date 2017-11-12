function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });
    var newArr = 0;
    var i = 0;
    while (arr[i] < num) {
        newArr++;
        i++;
    }
    return newArr;
}
