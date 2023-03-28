let airQuality;
let PM1;
let PM2_5;
let PM10;
let CO;
let alcohol;
let CO2;
let toluen;
let NH4;
let aceton;
let H2;
let LPG;
let propane;

//THINGSPEAK API
function getThingSpeakData() {
  var xhttpAirQuality = new XMLHttpRequest();
  var xhttpPM1 = new XMLHttpRequest();
  var xhttpPM2_5 = new XMLHttpRequest();
  var xhttpPM10 = new XMLHttpRequest();
  var xhttpCO = new XMLHttpRequest();
  var xhttpAlcohol = new XMLHttpRequest();
  var xhttpCO2 = new XMLHttpRequest();
  var xhttpToluen = new XMLHttpRequest();
  var xhttpNH4 = new XMLHttpRequest();
  var xhttpAceton = new XMLHttpRequest();
  var xhttpH2 = new XMLHttpRequest();
  var xhttpLPG = new XMLHttpRequest();
  var xhttpPropane = new XMLHttpRequest();
  var apiAirQuality =
    "https://api.thingspeak.com/channels/1579324/fields/1/last.txt?api_key=TRPVL15910XTJA4D";
  var apiPM1 =
    "https://api.thingspeak.com/channels/1795377/fields/7/last.txt?api_key=ASDZAM6NVI17JS21";
  var apiPM2_5 =
    "https://api.thingspeak.com/channels/1795377/fields/8/last.txt?api_key=ASDZAM6NVI17JS21";
  var apiPM10 =
    "https://api.thingspeak.com/channels/2066387/fields/1/last.txt?api_key=F2ENIR3QTHP552KU";
  var apiCO =
    "https://api.thingspeak.com/channels/1579324/fields/2/last.txt?api_key=TRPVL15910XTJA4D";
  var apiAlcohol =
    "https://api.thingspeak.com/channels/1579324/fields/3/last.txt?api_key=TRPVL15910XTJA4D";
  var apiCO2 =
    "https://api.thingspeak.com/channels/1579324/fields/4/last.txt?api_key=TRPVL15910XTJA4D";
  var apiToluen =
    "https://api.thingspeak.com/channels/1579324/fields/5/last.txt?api_key=TRPVL15910XTJA4D";
  var apiNH4 =
    "https://api.thingspeak.com/channels/1579324/fields/6/last.txt?api_key=TRPVL15910XTJA4D";
  var apiAceton =
    "https://api.thingspeak.com/channels/1579324/fields/7/last.txt?api_key=TRPVL15910XTJA4D";
  var apiH2 =
    "https://api.thingspeak.com/channels/1579324/fields/8/last.txt?api_key=TRPVL15910XTJA4D";
  var apiLPG =
    "https://api.thingspeak.com/channels/1795377/fields/1/last.txt?api_key=ASDZAM6NVI17JS21";
  var apiPropane =
    "https://api.thingspeak.com/channels/1795377/fields/2/last.txt?api_key=ASDZAM6NVI17JS21";

  xhttpAirQuality.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("airQuality").innerHTML = this.responseText;
      airQuality = this.responseText;
    }
  };

  xhttpPM1.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("PM1").innerHTML = this.responseText;
      PM1 = this.responseText;
    }
  };

  xhttpPM2_5.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("PM2_5").innerHTML = this.responseText;
      PM2_5 = this.responseText;
    }
  };

  xhttpPM10.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("PM10").innerHTML = this.responseText;
      PM10 = this.responseText;
    }
  };

  xhttpCO.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("CO").innerHTML = this.responseText;
      CO = this.responseText;
    }
  };

  xhttpAlcohol.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("alcohol").innerHTML = this.responseText;
      alcohol = this.responseText;
    }
  };

  xhttpCO2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("CO2").innerHTML = this.responseText;
      CO2 = this.responseText;
    }
  };

  xhttpToluen.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("toluen").innerHTML = this.responseText;
      toluen = this.responseText;
    }
  };

  xhttpNH4.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("NH4").innerHTML = this.responseText;
      NH4 = this.responseText;
    }
  };

  xhttpAceton.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("aceton").innerHTML = this.responseText;
      aceton = this.responseText;
    }
  };

  xhttpH2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("H2").innerHTML = this.responseText;
      H2 = this.responseText;
    }
  };

  xhttpLPG.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("LPG").innerHTML = this.responseText;
      LPG = this.responseText;
    }
  };

  xhttpPropane.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("propane").innerHTML = this.responseText;
      propane = this.responseText;
    }
  };

  xhttpAirQuality.open("GET", apiAirQuality, true);
  xhttpAirQuality.send();

  xhttpPM1.open("GET", apiPM1, true);
  xhttpPM1.send();

  xhttpPM2_5.open("GET", apiPM2_5, true);
  xhttpPM2_5.send();

  xhttpPM10.open("GET", apiPM10, true);
  xhttpPM10.send();

  xhttpCO.open("GET", apiCO, true);
  xhttpCO.send();

  xhttpAlcohol.open("GET", apiAlcohol, true);
  xhttpAlcohol.send();

  xhttpCO2.open("GET", apiCO2, true);
  xhttpCO2.send();

  xhttpToluen.open("GET", apiToluen, true);
  xhttpToluen.send();

  xhttpNH4.open("GET", apiNH4, true);
  xhttpNH4.send();

  xhttpAceton.open("GET", apiAceton, true);
  xhttpAceton.send();

  xhttpH2.open("GET", apiH2, true);
  xhttpH2.send();

  xhttpLPG.open("GET", apiLPG, true);
  xhttpLPG.send();

  xhttpPropane.open("GET", apiPropane, true);
  xhttpPropane.send();
}

setInterval(getThingSpeakData, 1000);

//GASBAR

function PM1Bar() {
  var elem = document.getElementById("bar1");
  if (PM1 <= 12) {
    var category = 16;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("PM1-category").innerHTML = "Excellent";
  } else if (PM1 >= 12.1 && PM1 <= 35.4) {
    var category = 32;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("PM1-category").innerHTML = "Good";
  } else if (PM1 >= 35.5 && PM1 <= 55.4) {
    var category = 48;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("PM1-category").innerHTML = "Normal";
  } else if (PM1 >= 55.5 && PM1 <= 150.4) {
    var category = 64;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "orange";
    document.getElementById("PM1-category").innerHTML = "Unhealthy";
  } else if (PM1 >= 150.5 && PM1 <= 250.4) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("PM1-category").innerHTML = "Very unhealthy";
  } else if (PM1 >= 250.5) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("PM1-category").innerHTML = "Hazardous";
  }
}

setInterval(PM1Bar, 1000);

function PM2_5Bar() {
  var elem = document.getElementById("bar2");
  if (PM2_5 <= 12) {
    var category = 16;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("PM2_5-category").innerHTML = "Excellent";
  } else if (PM2_5 >= 12.1 && PM2_5 <= 35.4) {
    var category = 32;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("PM2_5-category").innerHTML = "Good";
  } else if (PM2_5 >= 35.5 && PM2_5 <= 55.4) {
    var category = 48;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("PM2_5-category").innerHTML = "Normal";
  } else if (PM2_5 >= 55.5 && PM2_5 <= 150.4) {
    var category = 64;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "orange";
    document.getElementById("PM2_5-category").innerHTML = "Unhealthy";
  } else if (PM2_5 >= 150.5 && PM2_5 <= 250.4) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("PM2_5-category").innerHTML = "Very unhealthy";
  } else if (PM2_5 >= 250.5) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("PM2_5-category").innerHTML = "Hazardous";
  }
}

setInterval(PM2_5Bar, 1000);

function PM10Bar() {
  var elem = document.getElementById("bar3");
  if (PM10 <= 54) {
    var category = 16;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("PM10-category").innerHTML = "Excellent";
  } else if (PM10 >= 55 && PM10 <= 154) {
    var category = 32;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("PM10-category").innerHTML = "Good";
  } else if (PM10 >= 155 && PM10 <= 254) {
    var category = 48;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("PM10-category").innerHTML = "Normal";
  } else if (PM10 >= 255 && PM10 <= 354) {
    var category = 64;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "orange";
    document.getElementById("PM10-category").innerHTML = "Unhealthy";
  } else if (PM10 >= 355 && PM10 <= 424) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("PM10-category").innerHTML = "Very unhealthy";
  } else if (PM10 >= 425) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("PM10-category").innerHTML = "Hazardous";
  }
}

setInterval(PM10Bar, 1000);

function CObar() {
  var elem = document.getElementById("bar4");
  if (CO <= 70) {
    var category = 16;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("CO-category").innerHTML = "Good";
  } else if (CO >= 71 && CO <= 219) {
    var category = 32;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("CO-category").innerHTML = "Unhealthy";
  } else if (CO >= 220 && CO <= 349) {
    var category = 48;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("CO-category").innerHTML = "Very unhealthy";
  } else if (CO >= 350 && CO <= 799) {
    var category = 64;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "orange";
    document.getElementById("CO-category").innerHTML = "Hazardous";
  } else if (CO >= 800 && CO <= 1949) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("CO-category").innerHTML = "Death";
  } else if (CO >= 1950) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("CO-category").innerHTML = "Rapid Death";
  }
}

setInterval(CObar, 1000);

function alcoholBar() {
  var elem = document.getElementById("bar5");
  if (alcohol <= 100) {
    var category = 20;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("alcohol-category").innerHTML = "Good";
  } else if (alcohol >= 101 && alcohol <= 999) {
    var category = 40;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("alcohol-category").innerHTML = "Unhealthy";
  } else if (alcohol >= 1000 && alcohol <= 2999) {
    var category = 60;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("alcohol-category").innerHTML = "Very unhealthy";
  } else if (alcohol >= 3000 && alcohol <= 4999) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("alcohol-category").innerHTML = "Hazardous";
  } else if (alcohol >= 5000) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("alcohol-category").innerHTML = "Death";
  }
}

setInterval(alcoholBar, 1000);

function CO2Bar() {
  var elem = document.getElementById("bar6");
  if (CO2 <= 349) {
    var category = 16;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("CO2-category").innerHTML = "Good";
  } else if (CO2 >= 350 && CO2 <= 599) {
    var category = 32;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("CO2-category").innerHTML = "Normal";
  } else if (CO2 >= 600 && CO2 <= 999) {
    var category = 48;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("CO2-category").innerHTML = "Unhealthy";
  } else if (CO2 >= 1000 && CO2 <= 4999) {
    var category = 64;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "orange";
    document.getElementById("CO2-category").innerHTML = "Very Unhealthy";
  } else if (CO2 >= 5000 && CO2 <= 5999) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("CO2-category").innerHTML = "Hazardous";
  } else if (CO2 >= 6000) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("CO2-category").innerHTML = "Death";
  }
}

setInterval(CO2Bar, 1000);

function toluenBar() {
  var elem = document.getElementById("bar7");
  if (toluen <= 2.5) {
    var category = 20;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("toluen-category").innerHTML = "Good";
  } else if (toluen >= 2.6 && toluen <= 49) {
    var category = 40;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("toluen-category").innerHTML = "Normal";
  } else if (toluen >= 50 && toluen <= 300) {
    var category = 60;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("toluen-category").innerHTML = "Unhealthy";
  } else if (toluen >= 301 && toluen <= 800) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("toluen-category").innerHTML = "Very Unhealthy";
  } else if (toluen >= 801) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("toluen-category").innerHTML = "Harmful";
  }
}

setInterval(toluenBar, 1000);

function NH4Bar() {
  var elem = document.getElementById("bar8");
  if (NH4 <= 20) {
    var category = 20;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("NH4-category").innerHTML = "Normal";
  } else if (NH4 >= 21 && NH4 <= 100) {
    var category = 40;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("NH4-category").innerHTML = "Unhealthy";
  } else if (NH4 >= 100 && NH4 <= 700) {
    var category = 60;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("NH4-category").innerHTML = "Very Unhealthy";
  } else if (NH4 >= 701 && NH4 <= 10000) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("NH4-category").innerHTML = "Harmful";
  } else if (NH4 >= 10001) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("NH4-category").innerHTML = "Death";
  }
}

setInterval(NH4Bar, 1000);

function acetonBar() {
  var elem = document.getElementById("bar9");
  if (aceton <= 249) {
    var category = 20;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("aceton-category").innerHTML = "Good";
  } else if (aceton >= 250 && aceton <= 1000) {
    var category = 40;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("aceton-category").innerHTML = "Normal";
  } else if (aceton >= 1001 && aceton <= 2000) {
    var category = 60;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("aceton-category").innerHTML = "Unhealthy";
  } else if (aceton >= 2001 && aceton <= 12000) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("aceton-category").innerHTML = "Very Unhealthy";
  } else if (aceton >= 12000) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("aceton-category").innerHTML = "Harmful";
  }
}

setInterval(acetonBar, 1000);

function H2Bar() {
  var elem = document.getElementById("bar10");
  if (H2 <= 0.0005) {
    var category = 20;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("H2-category").innerHTML = "Good";
  } else if (H2 >= 0.0006 && H2 <= 0.13) {
    var category = 40;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("H2-category").innerHTML = "Normal";
  } else if (H2 >= 0.14 && H2 <= 100) {
    var category = 60;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("H2-category").innerHTML = "Unhealthy";
  } else if (H2 >= 101 && H2 <= 700) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("H2-category").innerHTML = "Very Unhealthy";
  } else if (H2 >= 701) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("H2-category").innerHTML = "Harmful";
  }
}

setInterval(H2Bar, 1000);

function LPGBar() {
  var elem = document.getElementById("bar11");
  if (LPG <= 50) {
    var category = 20;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("LPG-category").innerHTML = "Good";
  } else if (LPG >= 51 && LPG <= 100) {
    var category = 40;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("LPG-category").innerHTML = "Normal";
  } else if (LPG >= 101 && LPG <= 199) {
    var category = 60;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("LPG-category").innerHTML = "Unhealthy";
  } else if (LPG >= 200 && LPG <= 299) {
    var category = 80;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("LPG-category").innerHTML = "Very Unhealthy";
  } else if (LPG >= 300) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "black";
    document.getElementById("LPG-category").innerHTML = "Harmful";
  }
}

setInterval(LPGBar, 1000);

function propaneBar() {
  var elem = document.getElementById("bar12");
  if (propane <= 10000) {
    var category = 25;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "green";
    document.getElementById("propane-category").innerHTML = "Good";
  } else if (propane >= 51 && propane <= 100) {
    var category = 50;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellowgreen";
    document.getElementById("propane-category").innerHTML = "Normal";
  } else if (propane >= 10001 && propane <= 46000) {
    var category = 75;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "yellow";
    document.getElementById("propane-category").innerHTML = "Unhealthy";
  } else if (propane >= 46001 && propane <= 100000) {
    var category = 100;
    elem.style.width = category + "%";
    elem.style.backgroundColor = "red";
    document.getElementById("propane-category").innerHTML = "Very Unhealthy";
  }
}

setInterval(propaneBar, 1000);

//NAVBAR
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//AQIBAR

//AQI BAR
function airQualityBar() {
  if (airQuality <= 50) {
    document.querySelector(".progress-circle").classList.add("p16");
    document.getElementById("description").innerHTML =
      "Looks like the air is good";
  } else if (airQuality >= 51 && airQuality <= 100) {
    document.querySelector(".progress-circle").classList.add("p32");
    document.getElementById("description").innerHTML =
      "Looks like the air is moderate";
    document.querySelector(".value-bar").style.borderColor = "yellow";
  } else if (airQuality >= 101 && airQuality <= 150) {
    document.querySelector(".progress-circle").classList.add("p48");
    document.getElementById("description").innerHTML =
      "The air is unhealthy for sensitive groups";
    document.querySelector(".value-bar").style.borderColor = "orange";
  } else if (airQuality >= 151 && airQuality <= 200) {
    document.querySelector(".progress-circle").classList.add("over50", "p64");
    document.getElementById("description").innerHTML = "The air is unhealthy!";
    document.querySelector(".value-bar").style.borderColor = "red";
  } else if (airQuality >= 201 && airQuality <= 300) {
    document.querySelector(".progress-circle").classList.add("over50", "p80");
    document.getElementById("description").innerHTML =
      "The air is very unhealthy!";
    document.querySelector(".value-bar").style.borderColor = "black";
  } else if (airQuality >= 301) {
    document.querySelector(".progress-circle").classList.add("over50", "p100");
    document.getElementById("description").innerHTML = "The air is Hazardous!";
  }
}
setInterval(airQualityBar, 1000);
// button
