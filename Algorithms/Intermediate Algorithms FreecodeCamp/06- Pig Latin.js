function translatePigLatin(str) {
    var vowels = ["a", "e", "i", "o", "u", "y"];
    var i = 0;
    var newStr = "";
    var cluster = "";
    if (vowels.includes(str[0])) {
        newStr = str + "way";
    } else {
        while (!vowels.includes(str[i])) {
            cluster += str[i];
            newStr = str.slice(1 + i) + cluster + "ay";
            i++;
        }
    }
    return newStr;
}
