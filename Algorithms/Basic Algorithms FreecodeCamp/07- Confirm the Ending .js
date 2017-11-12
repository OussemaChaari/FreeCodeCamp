function confirmEnding(str, target) {
    strval = str.substring(str.length - target.length);
    return strval === target;
}
