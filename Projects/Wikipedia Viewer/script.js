$(function () {
    var url = ""
    var input = ""

    if ($("#searchInput").val()) {
        displayError().off();
    }
    $("#searchBtn").on("click", function () {
        if (!$("#searchInput").val()) {
            displayError();
        } else {
            input = $("#searchInput").val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json&callback=?"
            $("#wikiLogo,#wikiTitle").fadeOut(1000);
            $("#inputGroup").css("transition", "1s");
            setTimeout(function () {
                $("#results").removeClass("hidden");
            }, 1000);
            $.ajax({
                type: "GET",
                url: url,
                async: false,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    console.log(data["0"]);
                    $("#searchedTerm").html = data["0"];
                    $("ul").empty();
                    for (var i = 1; i < data[1].length; i++) {
                        $("ul").append('<a id="resultLink" target="_blank" href=' + data[3][i] + '><div  id="resultContainer"><li> <p id="title">' + data[1][i] + '</p> <p id="description">' + data[2][i] + '</p></li></div></a>');
                    }
                }

            });

        }
    });
    $("#searchInput").keypress(function (e) {
        if (e.which == 13)
            $("#searchBtn").click();
    });

    function displayError() {
        $("#searchInput").css(
            "box-shadow", "0 0 15px 2px #DC3545 inset");
        $("#searchInput").fadeTo('fast', 0.5).fadeTo('fast', 1.0);
        setTimeout(function () {
            $("#searchInput").css(
                "box-shadow", "none");
        }, 1000);
    }
});
