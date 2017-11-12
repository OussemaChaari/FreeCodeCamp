function reverseString(str) {
    var inversedStr = "";
    var strLength = str.length;
    for (var i = strLength - 1; i >= 0; i--) {
        inversedStr += str[i];
    }
    return inversedStr;
}
