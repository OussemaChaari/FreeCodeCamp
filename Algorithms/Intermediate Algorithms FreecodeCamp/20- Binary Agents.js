function binaryAgent(str) {
    str = str.split(" ");
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        newStr += String.fromCharCode(parseInt(str[i], 2));
    }
    return newStr;
}
