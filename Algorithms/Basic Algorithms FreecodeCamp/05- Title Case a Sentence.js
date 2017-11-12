function titleCase(str) {
    var newStr = str.toLowerCase();
    var newArr = newStr.split(' ');
    var fixedArr = "";
    for (var i = 0; i < newArr.length; i++) {
        fixedArr += newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
        if (i < newArr.length - 1) {
            fixedArr += " ";
        }
    }
    return fixedArr;
}
