//Form
var button= document.querySelector('.icon'); 
var input= document.querySelector('input'); 
//City & weather
var city= document.querySelector('#city'); 
var weather= document.querySelector('#weather');
//Temperature
var currentTemp= document.querySelector('#current');
var minTemp= document.querySelector('#min');
var maxTemp= document.querySelector('#max');
//Info
var wind= document.querySelector('#wind');
var humidity= document.querySelector('#humidity');
var pressure= document.querySelector('#pressure');
var icon= document.querySelector('weather-icon');

//Open weather API key: 
const apiKey= 'YOUR API key here'; 


//Button Event listener 'click' 


fetch("https://api.openweathermap.org/data/2.5/weather?q=dammam&units=metric&appid=bd1fbea32cf38327b8a70a24a38fc190")
.then(function(response){return response.json()})
.then(function(data){
    console.log(data);
})