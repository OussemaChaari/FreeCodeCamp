function spinalCase(str) {
    str = str[0].toLowerCase() + str.slice(1);
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    str = str.toLowerCase();
    str = str.replace(/\s|_/g, "-");
    return str;
}
