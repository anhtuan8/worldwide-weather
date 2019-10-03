function _forecast(id){
	/*var city = document.getElementsById("test");	*/
	var city = document.getElementById(id).value;
	$(document).ready(function() {
		var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city +
               "&appid=18d8291a40a24cc8d3c7edc80d60a9a2";
        // change the strings after "appid=" to your own application ID.
        $('html, body').animate({
            scrollTop: $("#weather").offset().top - $("#_search").innerHeight()
        }, 1200);
        $.getJSON(url, function(data) {
            cityname = data.name;
            dto = new Date();
            dto.setTime(Number(data.dt) * 1000);
            weather = data.weather[0].main;
            temp = Number(data.main.temp);
            temp_max = Number(data.main.temp_max);
            temp_min = Number(data.main.temp_min);
        	if (temp >= 30) {
				temperature = "hot";
            } else if (temp >= 18) {
                temperature = "warm";
            } else {
                temperature = "cool";
            }
            var htmltext = "";
            htmltext += "<div>";
            htmltext += "<h5>" + cityname + "</h5>";
            htmltext += dto + "<br>";
		    htmltext += "<p id=\"temp\">" + temp + "℃" + "</p>";
            htmltext += "Weather：" + weather + "<br>";
            htmltext += "Climate：" + temperature + "<br><br>";
		    htmltext += "Max Temperature：" + temp_max + "℃<br>";
            htmltext += "Min Temperature：" + temp_min + "℃<br>";
            htmltext += "</div>";

            var domwinfo = document.getElementById("weather");
            domwinfo.innerHTML = htmltext;
        });
	});
}
