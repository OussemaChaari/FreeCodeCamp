$(function () {
    var islat = false,
        islon = false;
    var lat, lon;
    var elem = document.querySelector('#switch');
    var init = new Switchery(elem, {
        color: '#5BC0DE',
        secondaryColor: '#FFC107'
    });
    var state = false;

    $("#locate1").on("click", function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude,
                lon = position.coords.longitude;
            getValues(lat, lon);
        });
    });


    $("#locate3").on("click", function () {

        lat = $("#latitude").val(),
            lon = $("#longitude").val();


        if (checkLat() && checkLon()) {

            getValues(lat, lon);

        } else {
            $("#hideLater").removeClass("hidden");
        }

    });

    function getValues(lat, lon) {
        var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
        $.ajax({
            url: url,
            success: function (data) {

                var cit,
                    count;
                if (data.name == "")
                    cit = "<span class='wi wi-na'></span>";
                else
                    cit = data.name;

                if (data.sys.country == "")
                    count = "<span class='wi wi-na'></span>";
                else
                    count = data.sys.country;

                $("#hideLater").addClass("hidden");
                $("#secondPage").removeClass("hidden");
                $("#cityName").html(cit);
                $("#country").html(count);
                $("#windSpeed").html(getWind(data.wind.speed, state));
                $("#direction").html(data.wind.deg);
                $("#degree").html(getTemp(data.main.temp, state));
                $("#Desc").html(data.weather[0].description);
                $("#hum").html(data.main.humidity);
                $("#press").html(data.main.pressure);



                switch (data.weather[0].main) {
                    case "Thunderstorm":
                        $("#weatherIcon").addClass("wi-thunderstorm");
                        $('body').css({

                            "background-image": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    case "Drizzle":
                        $("#weatherIcon").addClass("wi-rain-mix");
                        $('body').css({
                            "background": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/457713/pexels-photo-457713.jpeg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    case "Rain":
                        $("#weatherIcon").addClass("wi-rain");

                        $('body').css({
                            "background": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/110874/pexels-photo-110874.jpeg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    case "Snow":
                        $("#weatherIcon").addClass("wi-snow");
                        $('body').css({
                            "background": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/300857/pexels-photo-300857.jpeg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    case "Atmosphere":
                        $("#weatherIcon").addClass("wi-fog");
                        $('body').css({
                            "background": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    case "Clear":
                        $("#weatherIcon").addClass("wi-day-sunny");
                        $('body').css({
                            "background": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    case "Clouds":
                        $("#weatherIcon").addClass("wi wi-cloudy");
                        $('body').css({
                            "background": " linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/156186/pexels-photo-156186.jpeg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    case "Extreme":
                        $("#weatherIcon").addClass("wi-tornado");
                        $('body').css({
                            "background": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/457713/pexels-photo-457713.jpeg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;

                    default:
                        $("#weatherIcon").addClass("wi-na");
                        $('body').css({
                            "background": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6) ),url('https://static.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg') no-repeat top left fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                }

                $("#switch").on("change", function () {
                    if (state == false) {
                        state = true;
                        $("#state").html("Imperial");
                    } else {
                        state = false;
                        $("#state").html("Metric");
                    }
                    $("#degree").html(getTemp(data.main.temp, state));
                    $("#windSpeed").html(getWind(data.wind.speed, state));
                });


            }
        });
    }

    function getWind(wind, state) {
        if (state == false) {
            $("#windUnit").html("meter/sec");
        } else {
            wind *= 2, 23694;
            $("#windUnit").html("miles/hour");
        }
        return wind;
    }

    function getTemp(temp, state) {
        if (state == false) {
            $("#degreeUnit").html("C");
        } else {
            temp = Math.round((temp * 9 / 5 + 32) * 100) / 100;
            $("#degreeUnit").html("F");
        }
        return temp;
    }

    function checkLat() {
        var newLat = parseFloat(lat);
        if (newLat < 90 && newLat > -90) {
            islat = true;
            $("#latitude").css("box-shadow", "0 0 15px #28A745");
        } else {
            islat = false;
            $("#latitude").css("box-shadow", "0 0 15px #DC3545");
            $("#longitude").css("box-shadow", "0 0 15px #DC3545");
        }
        return islat;
    }

    function checkLon() {
        var newLon = parseFloat(lon);
        if (newLon < 180 && newLon > -180) {
            islon = true;
            $("#longitude").css("box-shadow", "0 0 15px #28A745");
        } else {
            islon = false;
            $("#longitude").css("box-shadow", "0 0 15px #DC3545");
        }
        return islon;
    }

});
