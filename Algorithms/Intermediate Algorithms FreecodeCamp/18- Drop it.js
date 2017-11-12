function dropElements(arr, func) {
    var i = 0;
    while (func(arr[0]) === false && i <= arr.length + 3) {
        arr.shift();
        i++;
    }
    return arr;
}
