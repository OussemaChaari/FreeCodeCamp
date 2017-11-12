function truncateString(str, num) {
    var newStr = "";
    if (str.length - num > 0) {

        if (num > 3) {
            newStr = str.slice(0, num - 3);
            newStr += "...";
        } else if (str.length - num > 0 && num <= 3) {
            newStr = str.slice(0, num);
            newStr += "...";
        } else
            newStr = str.slice(0, num);
    } else {
        newStr = str;
    }
    return newStr;
}
