const API_KEY = "c99c1251da79265a3fea7735ae927232"
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast"
axios.get(BASE_URL + "?q=Tokyo&APPID="+API_KEY)
.then(response => {
    console.log('status:', response.status); // 200
    console.log('body:', response);     // response body.

// catchでエラー時の挙動を定義する

}).catch(err => {
    console.log('err:', err);
});
