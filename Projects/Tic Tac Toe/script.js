$(function () {
    var playerShape, compShape, gameArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var randRow, randCol, oppTurn, count = 0;
    var diag, hor, ver, isWin;
    var rowCol, playerScore = 0,
        compScore = 0,
        ties = 0;

    $(".X").click(function () {
        playerShape = "X";
        compShape = "O";
        $("#question").addClass("hidden");
        $("#gameTab").removeClass("hidden");
        oppTurn = true;
        play();
    });

    $(".O").click(function () {
        playerShape = "O";
        compShape = "X";
        $("#question").addClass("hidden");
        $("#gameTab").removeClass("hidden");
        oppTurn = true;
        play();
    });

    function play() {
        if (count <= 9 && oppTurn) {
            count++;
            do {
                rowCol = [getRandom(), getRandom()];
            } while (!isEmpty(rowCol[0], rowCol[1]));
            $("#" + rowCol[0].toString() + "-" + rowCol[1].toString()).text(compShape);
            $("#" + rowCol[0].toString() + "-" + rowCol[1].toString()).css("color", setColor("player2"));
            gameArr[rowCol[0]][rowCol[1]] = compShape;
            setTimeout(function () {
                if (evaluate(compShape)) {
                    compScore++;
                    $("#computerScore").text(compScore);
                    $(".modal-title").text("Aw!!! You lost");
                    $("#myModal").modal("show");
                    $("#close").click(function () {
                        restart();
                    });
                } else if (count == 9) {
                    ties++
                    $("#ties").text(ties)
                    $(".modal-title").text("Almost Got' em!!!")
                    $("#myModal").modal("show");
                    $("#close").click(function () {
                        restart();
                    });
                } else
                    oppTurn = false;
            }, 200);
        }
    }

    $(".gameCase").click(function () {
        if (!oppTurn) {
            var attr = $(this).attr("id");
            if (isEmpty(parseInt(attr[0]), parseInt(attr[2])) && !oppTurn) {
                count++;
                rowCol = [parseInt(attr[0]), parseInt(attr[2])];
                $("#" + rowCol[0].toString() + "-" + rowCol[1].toString()).text(playerShape);
                $("#" + rowCol[0].toString() + "-" + rowCol[1].toString()).css("color", setColor("player"));
                gameArr[rowCol[0]][rowCol[1]] = playerShape;
                setTimeout(function () {
                    if (evaluate(playerShape)) {
                        playerScore++;
                        $("#playerScore").text(playerScore);
                        $(".modal-title").text("good job!!!");
                        $("#myModal").modal("show");
                        $("#close").click(function () {
                            restart();
                        });
                    } else {
                        oppTurn = true;
                        play();
                    }
                }, 200);
            }
        }
    });

    $("#reset").click(function () {
        restart();
        playerScore = 0;
        compScore = 0;
        ties = 0;
        $("#playerScore").text("0");
        $("#computerScore").text("0");
        $("#ties").text("0");
    });

    function restart() {
        gameArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        count = 0;
        diag = 0;
        isWin = false;
        oppTurn = true;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                $("#" + i.toString() + "-" + j.toString()).text("");
            }
        }
        play();
    }


    function setColor(who) {
        if (who == "player") {
            return "#003171"
        } else
            return "#8F1D21";
    }

    function evaluate(symb) {
        diag = 0;
        hor = 0;
        ver = 0;
        for (var i = 0; i < 3; i++) {
            if (gameArr[i][i] == symb)
                diag++;
            for (var j = 0; j < 3; j++) {
                if (gameArr[i][j] == symb)
                    hor++;
                if (gameArr[j][i] == symb)
                    ver++;
            }
            if (hor == 3 || ver == 3)
                isWin = true;
            else {
                hor = 0;
                ver = 0;
            }
        }


        if (diag == 3 && !isWin)
            isWin = true;
        else if (gameArr[0][2] == symb && gameArr[1][1] == symb && gameArr[2][0] == symb)
            isWin = true;
        return isWin;
    }

    function isEmpty(row, col) {
        if (gameArr[row][col] == 0) {
            return true;
        } else {
            return false;
        }
    }

    function getRandom() {
        return Math.floor(Math.random() * (3));
    }
});
