function palindrome(str) {
    var newStr = str.replace(/[^0-9a-z]/gi, '');
    var reversedStr = "";
    for (var i = newStr.length - 1; i >= 0; i--) {
        reversedStr += newStr[i];
    }
    if (reversedStr.toLowerCase() === newStr.toLowerCase()) {
        return true;
    } else
        return false;
}
