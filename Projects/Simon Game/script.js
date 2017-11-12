$(function () {
    var isOn = false,
        isStarted = false,
        isStrict = false,
        pattern = [],
        i = 0,
        interval,
        z = 0,
        input = false,
        rand, clicked, answer = [],
        audios = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
              "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
              "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
              "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"];
    var sound = document.createElement("audio"),
        classtoAdd;
    var timeOut, id;

    $("input:checkbox").click(function () {
        if ($("#onSwitch").is(":checked")) {
            isOn = true;
            $("#count").text("--");
        } else {
            isOn = false;
            stop();
            $("#start").css("background", "#cccc00");
            isStarted = false;
            isStrict = false;
            $("#strict").addClass("strict");
            $("#strict").removeClass("strictActive");
            $("#startTxt").removeClass("text-warning");
            $("#strictTxt").removeClass("text-danger");
            $("#count").text("");
        }
    });

    $(".gameBtn").click(function () {
        if (isStarted && input && answer.length < pattern.length) {
            clicked = $(this).attr("id");
            $("#" + clicked).addClass(clicked + "Active");
            switch (clicked) {
                case ("green"):
                    sound.src = audios[0];
                    answer.push(1);
                    break;
                case ("red"):
                    sound.src = audios[1];
                    answer.push(2);
                    break;
                case ("yellow"):
                    sound.src = audios[3];
                    answer.push(3);
                    break;
                case ("blue"):
                    sound.src = audios[2];
                    answer.push(4);
                    break;
            }
            evaluate();
            sound.play();
            var tm = setTimeout(function () {
                $("#" + clicked).removeClass(clicked + "Active");
            }, 500);
        } else {
            input = false;
        }
    });

    $("#start").click(function () {
        if (isOn) {
            if (!isStarted) {
                Start();
            } else {
                stop();
                $("#count").text("");
                $("#start").css("background", "#cccc00");
                isStarted = false;
                isStrict = false;
                $("#strict").addClass("strict");
                $("#strict").removeClass("strictActive");
                $("#startTxt").removeClass("text-warning");
                $("#strictTxt").removeClass("text-danger");
                Start();
            }
        }
    });


    $("#strict").click(function () {
        if (isOn && isStarted) {
            if (!isStrict) {
                $("#strict").removeClass("strict");
                $("#strict").addClass("strictActive");
                $("#strictTxt").addClass("text-danger");
                isStrict = true;
            } else {
                $("#strict").addClass("strict");
                $("#strict").removeClass("strictActive");
                $("#strictTxt").removeClass("text-danger");
                isStrict = false;
            }
        }
    });


    function applyPattern() {
        rand = Math.floor(Math.random() * (5 - 1) + 1);
        pattern.push(rand);
        $("#count").html(pattern.length < 10 ? "0" + pattern.length : pattern.length);
    }

    function getSound(i) {
        switch (i) {
            case (1):
                sound.src = audios[0];
                classtoAdd = "greenActive";
                id = "green";
                break;
            case (2):
                sound.src = audios[1];
                classtoAdd = "redActive";
                id = "red";
                break;
            case (3):
                sound.src = audios[3];
                classtoAdd = "yellowActive";
                id = "yellow";
                break;
            case (4):
                sound.src = audios[2];
                classtoAdd = "blueActive";
                id = "blue";
                break;
        }
    }

    function playPattern(arr) {
        interval = setInterval(function () {
            getSound(arr[i]);
            input = false;
            i++;
            sound.play();
            $("#" + id).addClass(classtoAdd);
            timeOut = setTimeout(function () {
                $("#" + id).removeClass(classtoAdd);
            }, 500);
            if (i === pattern.length) {
                timeOut = setTimeout(function () {
                    $("#" + id).removeClass(classtoAdd);
                }, 500);
                clearInterval(interval);
                clearTimeout(timeOut);
                i = 0;
                input = true;
            }
        }, 1000);
    }

    function evaluate() {
        if (pattern[z] === answer[z]) {
            if (answer.length == 20) {
                $("#green").addClass("greenActive");
                $("#red").addClass("redActive");
                $("#yellow").addClass("yellowActive");
                $("#blue").addClass("blueActive");
                $("#finish").text("CONGRATULATIONS !!!");
                rightAnswer(4000);
                $("#count").text("--");
                setTimeout(function () {
                    $("#finish").text("--");
                    $("#green").removeClass("greenActive");
                    $("#red").removeClass("redActive");
                    $("#yellow").removeClass("yellowActive");
                    $("#blue").removeClass("blueActive");
                    stop();
                    applyPattern();
                    setTimeout(function () {
                        playPattern(pattern);
                    }, 500);
                }, 4000);
            } else if (z === pattern.length - 1) {
                input = false;
                rightAnswer(1000);
                applyPattern();
                setTimeout(function () {
                    playPattern(pattern);
                }, 500);
                answer = [];
                z = 0;
            } else {
                z++;
            }
        } else if (pattern[z] != answer[z] && isStrict) {
            wrongAnswer();
            stop();
            applyPattern();
            setTimeout(function () {
                playPattern(pattern);
            }, 500);
        } else if (pattern[z] != answer[z] && !isStrict) {
            wrongAnswer();
            z = 0;
            answer = [];
            setTimeout(function () {
                playPattern(pattern);
            }, 500);
        }
    }

    function stop() {
        answer = [];
        z = 0;
        pattern = [];
        input = false;
        clearInterval(interval);
        clearTimeout(timeOut);
    }

    function wrongAnswer() {
        $("body").addClass("wrong");
        setTimeout(function () {
            $("body").removeClass("wrong");
        }, 1000);
    }

    function rightAnswer(time) {
        $("body").addClass("right");
        setTimeout(function () {
            $("body").removeClass("right");
        }, time);
    }

    function Start() {
        $("#count").text("--");
        setTimeout(function () {
            isStarted = true;
            $("#start").css("background", "yellow");
            $("#startTxt").addClass("text-warning");
            applyPattern();
            playPattern(pattern);
        }, 500);
    }
});
