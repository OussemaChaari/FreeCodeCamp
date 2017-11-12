function sumPrimes(num) {
    var sum = 0;
    for (var i = 2; i <= num; i++) {
        for (var j = 2; j <= i; j++) {
            if (i === j) {
                sum += i;
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    return sum;
}
