// js();
// function js(){
//     document.getElementById('date-now').innerHTML = new Date();
   
// }

function getWeather(city) {
    $(document).ready(function() {
      var url =
        "http://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
        city +
        "&appid=18d8291a40a24cc8d3c7edc80d60a9a2";
      // change the strings after "appid=" to your own application ID.
      $.getJSON(url, function(data) {
        cityname = data.name;
        dto = new Date();
        dto.setTime(Number(data.dt) * 1000);
        weather = data.weather[0].main;
        temp = Number(data.main.temp);
        icon = data.weather[0].icon;
        temp_max = Number(data.main.temp_max);
        temp_min = Number(data.main.temp_min);
        if (temp >= 30) {
          temperature = "Hot";
        } else if (temp >= 18) {
          temperature = "Warm";
        } else {
          temperature = "Cool";
        }
        var htmltext = "";
        htmltext += "<div>";
        htmltext += "<div class='city-name'>" + cityname + "</div>";
        htmltext += "<div class='time'>" + dto + "</div>";
        htmltext += "<div class = 'temp-box d-flex align-items-center justify-content-center'>";
        htmltext += "<div><img src='http://openweathermap.org/img/wn/" +icon+ "@2x.png'> </div>";
        htmltext += '<div id="temp">' + temp + "&#176;C" + "</div>";
        htmltext += "</div>";
        htmltext += "<div class='info'>";
        htmltext += "<div class='weather'>Weather: " + weather;
        htmltext += "<div class='climate'>Climate: " + temperature;
        htmltext +=
          "<div class='max-temp'><i class = 'fa fa-thermometer-full'></i> Max Temperature: " + temp_max + "&#176;C";
        htmltext +=
          "<div class='min-temp'><i class = 'fa fa-thermometer-empty'></i> Min Temperature: " + temp_min + "&#176;C";
        htmltext += "</div>";
        htmltext += "</div>";
  
        var domwinfo = document.getElementById("_weather");
        domwinfo.innerHTML = htmltext;
      });
    });
  }
  