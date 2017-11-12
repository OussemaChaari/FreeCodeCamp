function smallestCommons(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    var completeArr = [];
    var x = false,
        i = 0;
    for (var j = arr[0]; j <= arr[1]; j++) {
        completeArr.push(j);
    }
    while (x == false) {
        i++;
        for (var z = completeArr[0]; z <= completeArr[completeArr.length - 1]; z++) {
            if (i % z !== 0) {
                break;
            } else if (z === completeArr[completeArr.length - 1]) {
                x = true;
            }
        }
    }
    return i;
}
