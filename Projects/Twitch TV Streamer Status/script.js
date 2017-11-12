$(function () {
    var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/",
        urlChannels = "https://wind-bow.glitch.me/twitch-api/channels/",
        urlUsers = "https://wind-bow.glitch.me/twitch-api/users/",
        ret = [],
        style = [],
        active = false;

    $("#streamerInput").keypress(function (blah) {
        if (blah.which == 13)
            $("#add").click();
    });

    loadPage("freecodecamp");
    loadPage("ESL_SC2");
    loadPage("OgamingSC2");
    loadPage("cretetion");
    loadPage("habathcx");

    $("#add").on("click", function () {
        var input = $("#streamerInput").val();
        loadPage(input);
    });

    function loadChannel(streamerName) {
        var urlChannel = urlChannels + streamerName;
        $.ajax({
            type: "GET",
            url: urlChannel,
            async: false,
            dataType: "json",
            success: function (data4) {
                ret = [data4.url,
                data4.status];
            }
        });
        return ret;
    }


    function checkStreamer(streamerName) {
        var urlStream = urlStreams + streamerName;
        $.ajax({
            type: "GET",
            url: urlStream,
            async: false,
            dataType: "json",
            success: function (data3) {
                if (data3.stream != null)
                    style = ["streamerSuccess",
            "snSuccess"];
                else
                    style = ["streamerFail", "snFail"]
            }
        });
        return style
    }

    function loadPage(streamerName) {
        if (streamerName.length > 0) {
            var urlUser = urlUsers + streamerName;
            var channelUser = loadChannel(streamerName);
            var channelStatus = checkStreamer(streamerName);
            $.ajax({
                type: "GET",
                url: urlUser,
                async: false,
                dataType: "json",
                success: function (data) {
                    if (data.status != 404) {
                        $("#streamerInput").val("");
                        if (channelStatus[0] == "streamerSuccess") {
                            $("#streamersList").prepend('<div id="streamerContainer"><a id="streamer"  href=' + channelUser[0] + ' target="_blank"><li><p id="streamer" class="' + channelStatus[0] + '"><img id="streamerImg" src=' + data.logo + '><span id="streamerName" class="sn ' + channelStatus[1] + '">' + data.display_name + '</span> <span id="description">' + channelUser[1] + '</span><br></p></li></a></div>');
                        } else {
                            $("#streamersList").append('<div id="streamerContainer"><a id="streamer"  href=' + channelUser[0] + ' target="_blank"><li><p id="streamer" class="' + channelStatus[0] + '"><img id="streamerImg" src=' + data.logo + '><span id="streamerName" class="sn ' + channelStatus[1] + '">' + data.display_name + '</span> <span id="description">' + channelUser[1] + '</span><br></p></li></a></div>');
                        }
                    } else {
                        $("#streamerInput").val("");
                        $("#error").delay(3000).html("username: <strong>" + streamerName + "</strong> is not found");
                        $("#error").addClass("streamerFail snFail");
                        $("#error").fadeOut();
                    }

                }
            });
        } else {
            $("#streamerInput").css("box-shadow", "0 0 10px red inset");
        }


    }

});
