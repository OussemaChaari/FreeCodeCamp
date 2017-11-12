function fibonacci(a) {
    var arr = [1, 1];
    var i = 2;
    var isDone = false;
    while (!isDone) {
        arr[i] = arr[i - 1] + arr[i - 2];
        if (arr[i] <= a) {
            i++;
        } else {
            arr.pop();
            isDone = true;
        }
    }
    return arr;
}

function sumFibs(num) {
    var sum = 0;
    var arr = fibonacci(num);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    }
    return sum;
}
