function fearNotLetter(str) {
    var arr = [];
    var x = -100;
    var y = "";
    for (var i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i);
    }
    for (i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] != 1) {
            x = arr[i] - 1;
        }
    }
    if (x != -100) {
        return String.fromCharCode(x);
    } else
        return undefined;
}
