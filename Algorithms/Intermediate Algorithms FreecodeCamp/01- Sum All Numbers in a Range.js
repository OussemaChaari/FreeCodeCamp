function sumAll(arr) {
    var a = Math.min(arr[0], arr[1]);
    var b = Math.max(arr[0], arr[1]);
    var sum = 0;

    for (var i = a + 1; i < b; i++) {
        arr.push(i);
    }
    for (i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
