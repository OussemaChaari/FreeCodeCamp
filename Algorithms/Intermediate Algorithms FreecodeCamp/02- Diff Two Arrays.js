function diffArray(arr1, arr2) {
    var newArr = [];

    function checkIncludes(arrx, arry) {
        for (var i = 0; i < arrx.length; i++)
            if (arry.includes(arrx[i]) == false)
                newArr.push(arrx[i]);
    }
    checkIncludes(arr1, arr2);
    checkIncludes(arr2, arr1);
    return newArr;
}
