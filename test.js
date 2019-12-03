const API_KEY = "c99c1251da79265a3fea7735ae927232"
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast"

fetch(BASE_URL + "?q=Tokyo&APPID="+API_KEY)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });