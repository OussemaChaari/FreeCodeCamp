function convertToRoman(num) {
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var str = '';
    for (var i = 0; i < decimal.length; i++) {

        while (num >= decimal[i]) {
            str += roman[i];
            num -= decimal[i];
        }
    }
    return str;
}
