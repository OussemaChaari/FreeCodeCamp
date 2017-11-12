function mutation(arr) {
    var value;
    for (var i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) !== -1) {
            value = true;
        } else {
            value = false;
            return false;
        }
    }
    return value;
}
