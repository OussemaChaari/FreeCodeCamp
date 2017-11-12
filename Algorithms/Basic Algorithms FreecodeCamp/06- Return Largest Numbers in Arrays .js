function largestOfFour(arr) {
    var sortedArr = [];
    var newArr;
    for (var i = 0; i < 4; i++) {
        newArr = arr[i].sort(function (a, b) {
            return b - a;
        });
        sortedArr[i] = newArr[0];
    }
    return sortedArr;
}
