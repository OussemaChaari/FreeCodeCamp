$(function () {
    var inputStr = [],
        output = $(".output"),
        i = 0;
    var operators = "",
        finalStr = "",
        a = "";

    $(".btn-ter").click(function () {
        a += ($(this).attr("value"));
        output.val(a);
    });

    $(".btn-sec").click(function () {
        var b = ($(this).attr("value"));
        inputStr.push(a);
        a = "";
        output.val("0");
        operators += b;
        console.log(operators);
    })



    $("#AC").click(function () {
        reset();
        output.val("0");
    });

    $("#CE").click(function () {
        a = a.toString();
        if (a != "0")
            a = a.slice(0, -1);
        output.val(a);
    });

    $("#equal").click(function () {
        inputStr.push(a);
        console.log("Before: " + inputStr + "operators: " + operators);
        for (var j = 0; j < operators.length; j++) {
            inputStr[j] += operators[j];
        }
        finalStr = inputStr.join('');
        console.log("After: " + finalStr);
        finalStr = eval(finalStr);
        output.val(finalStr);
        reset();
        a = finalStr;
    });

    function reset() {
        i = 0;
        a = "";
        inputStr = [];
        operators = "";
    }


});
