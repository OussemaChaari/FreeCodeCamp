function rot13(str) {
    var newStr = "";
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
            newStr += String.fromCharCode(str.charCodeAt(i) + 13);
        } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
            newStr += String.fromCharCode(str.charCodeAt(i) - 13);
        } else newStr += str[i];
    }
    return newStr;
}
