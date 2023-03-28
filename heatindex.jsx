let temperature;
let pressure;
let altitude;
let humidity;
let heatIndex;

function getThingSpeakData() {
  var xhttpTemperature = new XMLHttpRequest();
  var xhttpPressure = new XMLHttpRequest();
  var xhttpAltitude = new XMLHttpRequest();
  var xhttpHumidity = new XMLHttpRequest();

  var apiTemperature =
    "https://api.thingspeak.com/channels/1795377/fields/3/last.txt?api_key=ASDZAM6NVI17JS21";
  var apiPressure =
    "https://api.thingspeak.com/channels/1795377/fields/4/last.txt?api_key=ASDZAM6NVI17JS21";
  var apiAltitude =
    "https://api.thingspeak.com/channels/1795377/fields/5/last.txt?api_key=ASDZAM6NVI17JS21";
  var apiHumidity =
    "https://api.thingspeak.com/channels/1795377/fields/6/last.txt?api_key=ASDZAM6NVI17JS21";

  xhttpTemperature.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        temperature = parseFloat(this.responseText).toFixed(2);
        document.getElementById("temperature").innerHTML = temperature;
    }
  };

  xhttpPressure.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        pressure = parseFloat(this.responseText).toFixed(2);
        document.getElementById("pressure").innerHTML = pressure;
    }
  };

  xhttpAltitude.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        altitude = parseFloat(this.responseText).toFixed(2);
        document.getElementById("altitude").innerHTML = altitude;
    }
  };

  xhttpHumidity.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        humidity = parseFloat(this.responseText).toFixed(2);
        document.getElementById("humidity").innerHTML = humidity;
    }
  };

  xhttpTemperature.open("GET", apiTemperature, true);
  xhttpTemperature.send();

  xhttpPressure.open("GET", apiPressure, true);
  xhttpPressure.send();

  xhttpAltitude.open("GET", apiAltitude, true);
  xhttpAltitude.send();

  xhttpHumidity.open("GET", apiHumidity, true);
  xhttpHumidity.send();
}

setInterval(getThingSpeakData, 1000);

//HEAT INDEX BAR
function calculateHeatIndex(temperature, humidity) {
    // Calculate the heat index
    const c1 = -42.379;
    const c2 = 2.04901523;
    const c3 = 10.14333127;
    const c4 = -0.22475541;
    const c5 = -6.83783e-3;
    const c6 = -5.481717e-2;
    const c7 = 1.22874e-3;
    const c8 = 8.5282e-4;
    const c9 = -1.99e-6;
    const fahrenheitTemp = (temperature * 9/5) + 32;
    const hi = c1 + (c2 * fahrenheitTemp) + (c3 * humidity) + (c4 * fahrenheitTemp * humidity) + (c5 * fahrenheitTemp * fahrenheitTemp) + (c6 * humidity * humidity) + (c7 * fahrenheitTemp * fahrenheitTemp * humidity) + (c8 * fahrenheitTemp * humidity * humidity) + (c9 * fahrenheitTemp * fahrenheitTemp * humidity * humidity);
  
    // Set the innerHTML of the "heatIndex" element to the calculated heat index
    document.getElementById("heatIndex").innerHTML = hi.toFixed(2);
  }
  
  // Call the calculateHeatIndex function repeatedly using setInterval
  setInterval(function() {
    calculateHeatIndex(temperature, humidity);
  }, 1000);
  

  