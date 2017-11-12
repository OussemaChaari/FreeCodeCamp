$(function () {
    var session, interval, brk, secs = 1,
        breakSecs,
        isOff = true,
        isBreak = false,
        hrs, mins, seconds, src, audio;

    $("#start").click(function () {

        if (isOff) {
            session = parseInt($("#session").val()) * 60;
            breakSecs = parseInt($("#break").val()) * 60;
            isOff = false;
            updateButtons();
            countdown();
            setTimeout(function () {
                $("#endSess")[0].play();
            }, session * 1000);
        }
    });

    function updateButtons() {
        if (!isOff)
            $("#start,#plssess,#subsess,#plsbr,#subbr").addClass("hide");
        else {
            $("#start,#plssess,#subsess,#plsbr,#subbr").removeClass("hide");
            $("p").removeClass("text-success");
            $("p").removeClass("text-danger");
            $("#comment").text("Let's Work !!")
        }
    }

    $("#plssess").click(function () {
        $("#session").val((increment($("#session").val(), 5)));
    });

    $("#plsbr").click(function () {
        $("#break").val((increment($("#break").val(), 1)));
    })

    $("#subsess").click(function () {
        if ($("#session").val() > 5) $("#session").val((increment($("#session").val(), -5)));
    });

    $("#subbr").click(function () {
        if ($("#break").val() > 1)
            $("#break").val((increment($("#break").val(), -1)));
    });

    $("#stop").click(function () {
        stop();
    });

    function stop() {
        session = 0;
        breakSecs = 0;
        isOff = true;
        updateButtons();
        clearInterval(interval);
        $("#hrs").html("00");
        $("#mins").html("00");
        $("#secs").html("00");
    }

    function increment(a, b) {
        var c = parseInt(a) + b;
        return c.toString();
    }

    function countdown() {
        interval = setInterval(function () {
            count();
        }, 1000);
    }

    function count() {
        if (session > 0) {
            $("p").addClass("text-danger");
            session -= 1;
            secs = session;
            $("#comment").text("Work Work Work Work !!!");
        } else if (session == 0 && breakSecs !== 0) {
            $("p").removeClass("text-danger");
            $("p").addClass("text-success");
            breakSecs -= 1;
            secs = breakSecs;
            $("#comment").text("Break Time Babyyyy !!!");
        } else {
            $("#endBreak")[0].play();
            isOff = true;
            stop();
        }
        hrs = parseInt(secs / 3600);
        mins = parseInt(secs % 3600 / 60);
        seconds = parseInt(secs % 3600 % 60);
        if (hrs < 10)
            $("#hrs").text("0" + hrs);
        else
            $("#hrs").text(hrs);
        if (mins < 10)
            $("#mins").text("0" + mins);
        else
            $("#mins").text(mins);
        if (seconds < 10)
            $("#secs").text("0" + seconds);
        else
            $("#secs").text(seconds);
    }

});
