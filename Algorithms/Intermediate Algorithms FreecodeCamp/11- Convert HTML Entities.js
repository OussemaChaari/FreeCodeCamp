function convertHTML(str) {
    str = str.replace("&", "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/'/g, "&apos;");
    str = str.replace(/"/g, "&quot;");
    return str;
}
