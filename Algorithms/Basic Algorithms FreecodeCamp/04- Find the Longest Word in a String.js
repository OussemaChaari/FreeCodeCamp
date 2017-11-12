function findLongestWord(str) {
    var newArr = str.split(' ');
    var longStr;
    var tmp;

    for (var i = 0; i < newArr.length - 1; i++) {
        if (newArr[i].length > newArr[i + 1].length) {
            tmp = newArr[i + 1];
            newArr[i + 1] = newArr[i];
            newArr[i] = tmp;

        }
    }
    return newArr[i].length;
}
