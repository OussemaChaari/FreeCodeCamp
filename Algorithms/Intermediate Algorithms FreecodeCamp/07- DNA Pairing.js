function pairElement(str) {
    var arr = str.split("");
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr.slice(i, i + 1));
    }
    for (i = 0; i < newArr.length; i++) {
        switch (newArr[i][0]) {
            case "G":
                newArr[i][1] = "C";
                break;
            case "C":
                newArr[i][1] = "G";
                break;
            case "A":
                newArr[i][1] = "T";
                break;
            case "T":
                newArr[i][1] = "A";
                break;
        }
    }
    return newArr;
}
