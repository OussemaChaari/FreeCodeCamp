function myReplace(str, before, after) {

    var newStr = "";
    var wordIdx = str.search(new RegExp(before, "i"));
    if (str[wordIdx] == str[wordIdx].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    newStr = str.replace(before, after);
    return newStr;
}
