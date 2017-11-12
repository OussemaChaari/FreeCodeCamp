function chunkArrayInGroups(arr, size) {
    var bigArr = [];
    var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        newArr = arr.slice(i, size + i);
        bigArr.push(newArr);
    }
    return bigArr;
}
