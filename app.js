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
var icon= document.querySelector('#weather-icon');

//Open weather API key: 
const apiKey= 'bd1fbea32cf38327b8a70a24a38fc190'; 


//Button Event listener 'click' 

button.addEventListener('click', function(){

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value +"&units=metric&appid=" + apiKey)
    .then(function(response){return response.json()})
    .then(function(data){
        //City Name
        city.innerHTML = data.name; 
        //weather
        weather.innerHTML = data.weather[0].description; 
        //Temperature
        currentTemp.innerHTML = Math.floor(data.main.temp) + "<sup>°</sup> "; 
        minTemp.innerHTML = Math.floor(data.main.temp_min)+ "<sup>°</sup>"; 
        maxTemp.innerHTML = Math.floor(data.main.temp_max)+ "<sup>°</sup>"; 
        //Info
        wind.innerHTML = "Wind "+ data.wind.speed; 
        humidity.innerHTML = "Humidity " + data.main.humidity;
        pressure.innerHTML= "Pressure "+ data.main.pressure; 
        icon.src = "http://openweathermap.org/img/wn/" +data.weather[0].icon+ "@2x.png"
        console.log(icon); 

    })


})