$(document).ready(function () {
    var aut = "";
    var quo = "";

    $("#btnQuote").on("click", function () {
        $("#addition").removeClass("hide");
        $('.social a').tooltip({
            placement: "bottom",
            container: 'body'
        });
        var url = "https://talaikis.com/api/quotes/random/"
        $.getJSON(url, function (data) {
            quo = (data.quote);
            aut = (data.author);

            $("#quoteTxt").html(quo);
            $("#author").html(aut);
            var color = getRandomColor();
            console.log(color);
            $(".quote-box").css("background-color", "rgb(" + color[0].toString() + "," + color[1].toString() + "," + color[2].toString() + ")");
            $(".quote-box").css("transition", "1s");
            $("#aut").html(aut);
            $("#aut").css("color", "rgb(" + (255 - color[0]).toString() + "," + (255 - color[1]).toString() + "," + (255 - color[2]).toString() + ")");
            $("#quoteTxt").css("color", "rgb(" + (255 - color[0]).toString() + "," + (255 - color[1]).toString() + "," + (255 - color[2]).toString() + ")");
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + aut + "&format=json&callback=?";
            $.ajax({
                type: "GET",
                url: url,
                async: false,
                dataType: "json",
                success: function (dat) {
                    var link = dat[3][0];
                    $("#authorLink").attr("href", link);
                    $("#authorLink").attr("target", "_blank");
                },
                error: function (messageError) {
                    alert("Error Ajax");
                }
            });
        });
    });

    function getRandomColor() {
        var color = [];
        color[0] = Math.floor(Math.random() * 256);
        color[1] = Math.floor(Math.random() * 256);
        color[2] = Math.floor(Math.random() * 256);
        return color;
    }

    $("#twitter-btn").on("click", function () {
        /*Twitter allows 140 chars . we use 2 chars in the bottom for the " " and the "-". */
        if (quo.length + aut.length > 138) {
            alert("The quote is larger than 140 characters allowed by twitter. Please generate another quote");
        } else {
            window.open("https://www.twitter.com/intent/tweet?text=" + quo + " " + "-" + aut, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600')
        }
    });
    /* $('#fb-btn').click(function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: '.',
link: 'https://codepen.io/za4321/pen/MEoLzb',
caption: 'Random quotes generator',
description: "Get a random quote",
message: ""
});
}); */

});
