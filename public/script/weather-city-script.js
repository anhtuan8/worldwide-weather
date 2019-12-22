var status = 0;
    let dateNow =  (new Date()).toLocaleTimeString() +'  ' +(new Date()).toLocaleDateString();
    let nguon = document.getElementsByClassName('nguon'),i;
    for(i=0; i<nguon.length;i++){
      nguon[i].innerHTML = dateNow;
    }
    document.getElementsByClassName('nguon')[0].innerHTML = dateNow;
    let list_slide = document.getElementsByClassName('back-gr');
    list_slide[0].style.backgroundImage = "url('images/hohk.jpg')";
    list_slide[1].style.backgroundImage = "url('images/cauth.jpg')";
    list_slide[2].style.backgroundImage = "url('images/chua1c.jpg')";
    list_slide[3].style.backgroundImage = "url('images/badinh4.jpg')";
    list_slide[4].style.backgroundImage = "url('images/langct.jpg')";

    let list_silde = document.getElementsByClassName('item'),k;
      for(k=0;k<list_silde.length;k++){
        list_silde[k].addEventListener('mouseout',function(){
          document.getElementsByClassName('way').style.display = "none";
        });
      }
      let list_bt = document.getElementsByTagName('button');
      for(let i=0;i<list_bt.length;i++){
        list_bt[i].addEventListener('click',function(){
            this.style.border = 'none';
        });
      }
      
    
    
  
    //hieu ung click like
    function click_like(){
    let list_like = document.getElementsByClassName('like'),i;
    for(i=0; i<list_like.length;i++){
      list_like[i].addEventListener('click',function(){
        let value_node = this.value,count_like, like_1;
        switch(value_node){
          case 'like1':
            count_like = document.getElementsByClassName('count-like1')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like2':
            count_like = document.getElementsByClassName('count-like2')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like3':
            count_like = document.getElementsByClassName('count-like3')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like4':
            count_like = document.getElementsByClassName('count-like4')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like5':
            count_like = document.getElementsByClassName('count-like5')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like6':
            count_like = document.getElementsByClassName('count-like6')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like7':
            count_like = document.getElementsByClassName('count-like7')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like8':
            count_like = document.getElementsByClassName('count-like8')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like9':
            count_like = document.getElementsByClassName('count-like9')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            case 'like10':
            count_like = document.getElementsByClassName('count-like10')[0];
            count_like.innerHTML =  parseInt(count_like.innerHTML) + 1;
            break;
            default:
              alert('loi');
        }
      });
    }
  }
  click_like();

  //hieu ung click  thong tin noi bat
    function click_Info(){
      let list_Info = document.getElementsByClassName('class_info'),i,count_view;
      for(i=0;i<list_Info.length;i++){
        list_Info[i].addEventListener('click',function(){
          let id_info = this.id;
          
          switch(id_info){
            case 'idinfo1':
                  count_view = document.getElementsByClassName('count-view1')[0];
                  count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
            case 'idinfo2':
                  count_view = document.getElementsByClassName('count-view2')[0];
                  count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
            case 'idinfo3':
                count_view = document.getElementsByClassName('count-view3')[0];
                count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
            case 'idinfo4':
                count_view = document.getElementsByClassName('count-view4')[0];
                count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
            case 'idinfo5':
                count_view = document.getElementsByClassName('count-view5')[0];
                count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
            case 'idinfo6':
                count_view = document.getElementsByClassName('count-view6')[0];
                count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
            case 'idinfo7':
                count_view = document.getElementsByClassName('count-view7')[0];
                count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
            case 'idinfo8':
                count_view = document.getElementsByClassName('count-view8')[0];
                count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
              case 'idinfo9':
                  count_view = document.getElementsByClassName('count-view9')[0];
                  count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
                break;
                case 'idinfo10':
                count_view = document.getElementsByClassName('count-view10')[0];
                count_view.innerHTML = parseInt(count_view.innerHTML) + 1;
              break;
              

          }
        });
      }
    }
    click_Info();
    //lay them du lieu tin bang ajax
    function add_Info(){
      if(status == 1){
        alert("đã hết nội dung được đề xuất");
      }
      else{
        status++;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
            let dateNow =  (new Date()).toLocaleTimeString() +'  ' +(new Date()).toLocaleDateString();
            let object1 = JSON.parse(this.responseText).info[0];
            let object2 = JSON.parse(this.responseText).info[1];
            let newNode = document.createElement("div");
            let newNode1 = document.createElement("div");
            document.getElementById('hidden1').style.visibility = 'visible';
            document.getElementById('hidden2').style.visibility = 'visible';
            
            let text1 = `<li class='class_info' id = 'idinfo9'>
            <a href="#idinfo4" style="height: 100%; width: 100%; padding: 0;">
              <div class="div30">
                <img src="${object1.img}" width="100%" height="100%" />
              </div>
              <div class="div70">
                ${object1.title}
                <div class="like_hidden"></div>
                <div class="nguon">
                ${dateNow}
                </div>
                <div class="like-eye">
                  <span class="count-like9">${object1.count_like}</span> <button class="like" value="like9"></button>
                  <span class="count-view9">${object1.count_view}</span> <button class="view " value="view9"></button>
                </div>
              </div>
            </a></li>`;
            newNode.innerHTML = text1;
            document.getElementById('row_1').appendChild(newNode);
          let text2 = `<li class="class_info" id="idinfo10">
          <a href="#idinfo8" style="height: 100%; width: 100%; padding: 0;">
            <div class="div30">
              <img src="${object2.img}" width="100%" height="100%" />
            </div>
            <div class="div70">
              ${object2.title}
              <div class="like_hidden"></div>
              <div class="nguon">
              ${dateNow}
              </div>
              <div class="like-eye">
                <span class="count-like10">${object2.count_like}</span> <button class="like" value="like10"></button>
                <span class="count-view10">${object2.count_view}</span> <button class="view " value="view10"></button>

              </div>
            </div>
          </a></li>`;
          
          newNode1.innerHTML = text2;
            document.getElementById('row_2').appendChild(newNode1);
            click_like();
            click_Info();
          }
          };
              xhttp.open("GET", "add_Info.json", true);
              xhttp.send();
              
    }
    
  }
    document.getElementById('viewup').addEventListener('click',add_Info);
    
    
    
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
        htmltext += "<div><img src='http://openweathermap.org/img/wn/" +icon+ "@2x.png'> </div>"
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
  